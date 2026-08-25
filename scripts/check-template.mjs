import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { extname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(fileURLToPath(new URL(".", import.meta.url)), "..");
const strict = process.env.TEMPLATE_STRICT === "1";
const errors = [];
const warnings = [];

const requiredFiles = [
  "config/salon.ts",
  "config/asset-manifest.json",
  "app/site-data.ts",
  "app/seo.ts",
  "app/components/SiteHeader.tsx",
  "app/components/Hero.tsx",
  "app/components/EditorialHeading.tsx",
  "app/components/ServiceList.tsx",
  "app/components/BentoSection.tsx",
  "app/components/ImageCard.tsx",
  "app/components/AppointmentSection.tsx",
  "app/components/HoursCard.tsx",
  "app/components/ContactCard.tsx",
  "app/components/ConsentMap.tsx",
  "app/components/SiteFooter.tsx",
  "app/components/LegalPage.tsx",
  "app/leistungen/[slug]/page.tsx",
  "SALON_INTAKE.md",
  "CODEX_PROMPT.md",
  "ASSET_MANIFEST.md",
  "HANDOVER_CHECKLIST.md",
  "TEMPLATE_README.md",
  "CUSTOMIZATION_CHECKLIST.md",
  "README.md",
];

for (const file of requiredFiles) {
  if (!existsSync(join(root, file))) errors.push(`Pflichtdatei fehlt: ${file}`);
}

const readJson = (path) => {
  try {
    return JSON.parse(readFileSync(path, "utf8"));
  } catch (error) {
    errors.push(`Ungültiges JSON: ${relative(root, path)} (${error.message})`);
    return null;
  }
};

const manifest = readJson(join(root, "config/asset-manifest.json"));
const documentedAssets = new Set();
if (manifest) {
  for (const asset of manifest.assets ?? []) {
    if (!asset.path || !asset.source || !asset.license || !asset.alt || !asset.releaseStatus || !asset.usage) {
      errors.push(`Asset-Metadaten unvollständig: ${asset.path ?? "(ohne Pfad)"}`);
    }
    documentedAssets.add(asset.path);
    if (!existsSync(join(root, "public", asset.path.replace(/^\//, "")))) errors.push(`Assetdatei fehlt: ${asset.path}`);
    if (asset.approved !== true) {
      const message = `Asset noch nicht freigegeben: ${asset.path}`;
      if (strict) errors.push(message); else warnings.push(message);
    }
  }
}

const publicAssets = [];
function collectPublicAssets(path) {
  if (!existsSync(path)) return;
  const info = statSync(path);
  if (info.isFile()) {
    publicAssets.push(`/${relative(join(root, "public"), path)}`);
    return;
  }
  for (const entry of readdirSync(path, { withFileTypes: true })) collectPublicAssets(join(path, entry.name));
}
collectPublicAssets(join(root, "public"));
for (const asset of publicAssets) {
  if (!documentedAssets.has(asset)) errors.push(`Öffentliches Asset fehlt im Manifest: ${asset}`);
}

const ignoredDirectories = new Set([".git", ".next", ".vercel", "node_modules"]);
const textExtensions = new Set([".ts", ".tsx", ".css", ".json", ".mjs", ".svg", ".md", ".txt"]);
const textFiles = [];
function collectTextFiles(path) {
  if (!existsSync(path)) return;
  const info = statSync(path);
  if (info.isFile()) {
    if (textExtensions.has(extname(path)) || path.endsWith("package.json")) textFiles.push(path);
    return;
  }
  for (const entry of readdirSync(path, { withFileTypes: true })) {
    if (entry.isDirectory() && ignoredDirectories.has(entry.name)) continue;
    collectTextFiles(join(path, entry.name));
  }
}
collectTextFiles(root);

const suspiciousVisibleCopy = /\b(?:lorem ipsum|todo|tbd|xxx|example\.invalid)\b/i;
for (const file of textFiles.filter((path) => relative(root, path).startsWith("app/"))) {
  if (suspiciousVisibleCopy.test(readFileSync(file, "utf8"))) errors.push(`Ungeeigneter sichtbarer Platzhalter: ${relative(root, file)}`);
}

const configPath = join(root, "config/salon.ts");
const configText = existsSync(configPath) ? readFileSync(configPath, "utf8") : "";
const requiredConfigPatterns = [
  [/identity:\s*\{/, "identity"],
  [/theme:\s*\{/, "theme"],
  [/booking:\s*\{/, "booking"],
  [/services:\s*\[/, "services"],
  [/featuredService:\s*\{/, "featuredService"],
  [/hours:\s*\[/, "hours"],
  [/media:\s*\{/, "media"],
  [/seo:\s*\{/, "seo"],
  [/legal:\s*\{/, "legal"],
  [/reviews:\s*\{/, "reviews"],
  [/preview:\s*\{/, "preview"],
];
for (const [pattern, label] of requiredConfigPatterns) {
  if (!pattern.test(configText)) errors.push(`Zentraler Konfigurationsblock fehlt: ${label}`);
}
if (!/mode:\s*"(?:consent|link-only|disabled)"/.test(configText)) errors.push("Kartenmodus ist nicht konfigurierbar.");
if (!/noindex:\s*true/.test(configText)) errors.push("Die neutrale Template-Vorschau muss noindex aktivieren.");
if (!/path:\s*"\//.test(configText) || !/description:/.test(configText)) errors.push("Route-spezifische SEO-Felder fehlen.");
if (!/featuredService\.enabled/.test(readFileSync(join(root, "app/site-data.ts"), "utf8"))) errors.push("Navigation blendet den optionalen Schwerpunkt nicht konfigurationsgesteuert aus.");

const trackedFiles = (() => {
  try {
    return execFileSync("git", ["ls-files"], { cwd: root, encoding: "utf8" }).trim().split("\n").filter(Boolean);
  } catch {
    warnings.push("Git-Dateiliste konnte vor dem ersten Commit noch nicht geprüft werden.");
    return [];
  }
})();
const forbiddenTracked = trackedFiles.filter((file) => /(^|\/)(?:\.env(?:\..*)?|\.vercel|node_modules|\.next)(\/|$)/.test(file));
for (const file of forbiddenTracked) errors.push(`Verbotene Datei ist getrackt: ${file}`);

for (const file of textFiles) {
  const content = readFileSync(file, "utf8");
  if (/BEGIN (?:RSA|OPENSSH|EC) PRIVATE KEY|(?:api|access|secret)[_-]?key\s*[:=]\s*["'][^"']{12,}/i.test(content)) {
    errors.push(`Mögliches Secret gefunden: ${relative(root, file)}`);
  }
}

const approvals = salonConfigApprovalState(configText);
if (!approvals.complete) {
  const message = `Livegang-Freigaben offen: ${approvals.open.join(", ")}`;
  if (strict) errors.push(message); else warnings.push(message);
}

if (strict && /\[[A-ZÄÖÜ0-9][^\]]+\]|replace-before-live/i.test(configText)) {
  errors.push("Strict-Modus verlangt vollständig ersetzte Kunden-, Zeit- und Rechtsdaten.");
}

if (warnings.length) {
  console.log("Hinweise:");
  for (const warning of warnings) console.log(`- ${warning}`);
}
if (errors.length) {
  console.error("Template-Check nicht bestanden:");
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log(`Template-Check bestanden${strict ? " (strict)" : ""}: ${textFiles.length} Textdateien, ${publicAssets.length} Assets, Navigation, Preview und Consent geprüft.`);
}

function salonConfigApprovalState(text) {
  const states = [
    ["legalReviewed", /legalReviewed:\s*true/.test(text)],
    ["claimsConfirmed", /claimsConfirmed:\s*true/.test(text)],
    ["assetRightsConfirmed", /assetRightsConfirmed:\s*true/.test(text)],
  ];
  return { complete: states.every(([, value]) => value), open: states.filter(([, value]) => !value).map(([name]) => name) };
}
