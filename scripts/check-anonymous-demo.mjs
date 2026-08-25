import { existsSync, readFileSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(fileURLToPath(new URL(".", import.meta.url)), "..");
const errors = [];
const read = (path) => readFileSync(join(root, path), "utf8");

const requiredFiles = [
  "config/salon.ts",
  "config/asset-manifest.json",
  "TEMPLATE_README.md",
  "CUSTOMIZATION_CHECKLIST.md",
  "app/layout.tsx",
  "app/seo.ts",
  "app/robots.ts",
  "app/sitemap.ts",
  "app/not-found.tsx",
  "next.config.ts",
];

for (const file of requiredFiles) {
  if (!existsSync(join(root, file))) errors.push(`Pflichtdatei fehlt: ${file}`);
}

const config = read("config/salon.ts");
const layout = read("app/layout.tsx");
const seo = read("app/seo.ts");
const robots = read("app/robots.ts");
const sitemap = read("app/sitemap.ts");
const nextConfig = read("next.config.ts");
const header = read("app/components/SiteHeader.tsx");

const requiredConfig = [
  "DEMO-VORLAGE · ALLE INHALTE SIND PLATZHALTER",
  "[SALONNAME]",
  "[MUSTERSTRASSE 00]",
  "[PLZ]",
  "[ORT]",
  "[TELEFON]",
  "[E-MAIL-ADRESSE]",
  "[LEISTUNG 01]",
  "[TEAMMITGLIED 01]",
  "[ÖFFNUNGSZEIT]",
  "[RECHTLICHE BETREIBERANGABE MUSS ERSETZT WERDEN]",
];

for (const marker of requiredConfig) {
  if (!config.includes(marker)) errors.push(`Erforderlicher Demo-Platzhalter fehlt: ${marker}`);
}

const placeholderCount = config.match(/\[[A-ZÄÖÜ0-9][^\]]+\]/g)?.length ?? 0;
if (placeholderCount < 50) errors.push(`Zu wenige eindeutige Demo-Platzhalter: ${placeholderCount}`);
if (!/phoneHref:\s*""/.test(config) || !/emailHref:\s*""/.test(config)) errors.push("Telefon- oder E-Mail-Ziel ist nicht neutralisiert.");
if (!/directionsUrl:\s*"",\s*mapEmbedUrl:\s*""/.test(config)) errors.push("Karten- oder Routenziel ist nicht neutralisiert.");
if (!/social:\s*\[\]/.test(config)) errors.push("Social-Links sind nicht leer.");
if (!/map:\s*\{[\s\S]*?mode:\s*"disabled"/.test(config)) errors.push("Externe Karte ist in der öffentlichen Demo nicht deaktiviert.");
if (!/reviews:\s*\{\s*enabled:\s*false/.test(config)) errors.push("Bewertungen sind in der Demo nicht deaktiviert.");
if (!header.includes("demo-banner") || !header.includes("salonConfig.preview.label")) errors.push("Die globale Demo-Kennzeichnung fehlt im Header.");

for (const [label, content] of [["Layout", layout], ["Seiten-SEO", seo]]) {
  if (!content.includes("noindex, nofollow, noarchive")) errors.push(`${label} enthält nicht noindex, nofollow, noarchive.`);
}
if (!nextConfig.includes("X-Robots-Tag") || !nextConfig.includes("noindex, nofollow, noarchive")) errors.push("Der X-Robots-Tag fehlt.");
if (!/disallow:\s*"\/"/.test(robots)) errors.push("robots.txt sperrt die Demo nicht vollständig.");
if (!/return \[\]/.test(sitemap)) errors.push("Die Demo-Sitemap ist nicht leer.");

const runtimeFiles = [
  "config/salon.ts",
  "app/site-data.ts",
  "app/page.tsx",
  "app/components/SiteHeader.tsx",
  "app/components/SiteFooter.tsx",
  "app/components/MapEmbed.tsx",
  "app/components/ContactCard.tsx",
];
const runtimeText = runtimeFiles.map(read).join("\n");
if (/\b(?:tel:|mailto:|wa\.me\/|maps\.google\.|facebook\.com\/|instagram\.com\/|tiktok\.com\/)\b/i.test(runtimeText)) {
  errors.push("Ein echter Kontakt-, Karten- oder Social-Link ist im Runtime-Code enthalten.");
}

try {
  const tracked = execFileSync("git", ["ls-files"], { cwd: root, encoding: "utf8" });
  if (/(^|\n)(?:\.env(?:\..*)?|\.vercel\/|node_modules\/|\.next\/)/.test(tracked)) {
    errors.push("Verbotene lokale oder geheime Datei ist in Git getrackt.");
  }
} catch {
  // Vor dem ersten Commit gibt es erwartungsgemäß noch keine getrackten Dateien.
}

if (errors.length) {
  console.error("Anonymous-Demo-Check nicht bestanden:");
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log(`Anonymous-Demo-Check bestanden: ${placeholderCount} sichtbare Platzhalter, neutrale Links, Demo-Hinweis und Suchmaschinensperre geprüft.`);
}
