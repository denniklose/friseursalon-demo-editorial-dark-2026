import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(fileURLToPath(new URL(".", import.meta.url)), "..");
const errors = [];
const requiredFiles = [
  "config/salon.ts",
  "config/asset-manifest.json",
  "app/layout.tsx",
  "app/robots.ts",
  "app/sitemap.ts",
  "app/page.tsx",
  "app/team/page.tsx",
  "app/salon/page.tsx",
  "app/leistungen/[slug]/page.tsx",
  "app/ueber-uns/page.tsx",
  "app/termin-buchen/page.tsx",
  "app/oeffnungszeiten/page.tsx",
  "app/impressum/page.tsx",
  "app/datenschutz/page.tsx",
  "app/not-found.tsx",
];

for (const file of requiredFiles) {
  if (!existsSync(join(root, file))) errors.push(`Preview-Pflichtdatei fehlt: ${file}`);
}

const read = (path) => readFileSync(join(root, path), "utf8");
const configText = read("config/salon.ts");
if (!/preview:\s*\{[\s\S]*?enabled:\s*true/.test(configText)) errors.push("Die Vorlage muss sichtbar als Preview gekennzeichnet sein.");
if (!/noindex:\s*true/.test(configText)) errors.push("Die Preview-Konfiguration muss noindex aktivieren.");
if (!/services:\s*\[[\s\S]*?title:\s*"[^"]{8,}"/.test(configText)) errors.push("Die Preview enthält keine ausgefüllten neutralen Leistungsthemen.");
if (!/featuredService:\s*\{[\s\S]*?enabled:\s*(?:true|false)/.test(configText)) errors.push("Der optionale Schwerpunkt ist nicht konfigurierbar.");
if (!/reviews:\s*\{[\s\S]*?enabled:\s*false/.test(configText)) errors.push("Bewertungen müssen im neutralen Template standardmäßig deaktiviert sein.");

const layoutText = read("app/layout.tsx");
const robotsText = read("app/robots.ts");
const sitemapText = read("app/sitemap.ts");
if (!/noindex, nofollow, noarchive/.test(layoutText)) errors.push("Metadaten enthalten nicht den vollständigen Demo-Robots-Hinweis.");
if (!/salonConfig\.preview\.enabled[\s\S]*disallow:\s*"\/"/.test(robotsText)) errors.push("robots.txt sperrt die Preview nicht.");
if (!/salonConfig\.preview\.enabled[\s\S]*return \[\]/.test(sitemapText)) errors.push("Die Sitemap bleibt im Preview-Modus nicht leer.");

const mapText = read("app/components/MapEmbed.tsx");
if (!/useState\(false\)/.test(mapText) || !/onClick=\{\(\) => setIsLoaded\(true\)\}/.test(mapText)) {
  errors.push("Die externe Karte wird nicht erst nach einer bewussten Klick-Zustimmung geladen.");
}

const manifest = JSON.parse(read("config/asset-manifest.json"));
const hairAssets = (manifest.assets ?? []).filter((asset) => asset.assetType === "photorealistic-hair");
if (hairAssets.length < 5) errors.push("Für eine ausgefüllte Preview fehlen mindestens fünf dokumentierte fotorealistische Haarmotive.");
for (const asset of hairAssets) {
  if (asset.approved !== true) errors.push(`Haarmotiv noch nicht freigegeben: ${asset.path}`);
  if (!asset.source || !asset.license || !asset.alt || !asset.releaseStatus || !asset.usage) errors.push(`Asset-Metadaten unvollständig: ${asset.path}`);
  if (!existsSync(join(root, "public", asset.path.replace(/^\//, "")))) errors.push(`Assetdatei fehlt: ${asset.path}`);
}

const appText = requiredFiles.filter((file) => file.startsWith("app/")).map(read).join("\n");
if (/\b(?:lorem ipsum|todo|tbd|xxx|example\.invalid)\b/i.test(appText)) errors.push("Die Preview enthält ungeeignete technische Platzhalter.");
if (!/salonConfig\.featuredService\.enabled|featured\.enabled/.test(appText)) errors.push("Die optionale Leistungsseite wird nicht aus der Konfiguration gesteuert.");

if (errors.length) {
  console.error("Client-Preview-Check nicht bestanden:");
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log("Client-Preview-Check bestanden: vollständige neutrale Inhalte, Routen, noindex, Consent und Bildrechte geprüft.");
}
