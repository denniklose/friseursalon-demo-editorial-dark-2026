# Friseursalon Demo Editorial Dark 2026

## Zweck

Diese private Quellvorlage liefert eine öffentlich erreichbare, vollständig anonyme Design-Demo für Friseursalon-Websites. Die Demo stellt kein reales Unternehmen dar. Alle sichtbaren Identitäts-, Kontakt-, Leistungs-, Team-, Zeit- und Rechtsangaben sind klar markierte Platzhalter.

## Technik und Seiten

- Next.js 16 App Router, React 19, TypeScript und lokales CSS-Designsystem
- `/` – Startseite
- `/team/` – Teamstruktur
- `/salon/` – Salonstruktur
- `/leistungen/schwerpunkt/` – optionale Leistungsdetailseite
- `/ueber-uns/` – Haltung und Geschichte
- `/termin-buchen/` – interner Demo-Terminweg
- `/oeffnungszeiten/` – Kontakt, Zeiten und deaktivierte Karte
- `/impressum/` und `/datenschutz/` – eindeutig nicht finale Rechtstext-Platzhalter

## Zentrale Anpassung

Alle später auszutauschenden Inhalte liegen in `config/salon.ts`: Identität, Logo-Text, Ort, Kontakt, Terminweg, Leistungen, Team, Öffnungszeiten, Texte, SEO und rechtliche Platzhalter. Theme-Tokens einschließlich der Champagner-Akzentfarbe liegen dort ebenfalls zentral.

## Assets

- Logo-Signet: `public/images/brand-mark.svg`
- Favicon: `public/favicon.svg`
- Haarmotive: `public/images/*.webp`
- Rechte, Quelle, Alt-Text, Nutzung und Freigabestatus: `config/asset-manifest.json` und `ASSET_MANIFEST.md`

Alle Haarmotive sind original KI-generierte, anonyme Demo-Motive. Bei einem Kundenprojekt dürfen sie nur durch dokumentierte und freigegebene Assets ersetzt werden.

## SEO, Kontakt und Recht

Die Demo ist über Metadaten, `robots.txt`, leere Sitemap und `X-Robots-Tag` auf `noindex, nofollow, noarchive` gestellt. Echte Telefon-, E-Mail-, Social-, Buchungs-, Karten- und Formularziele sind nicht konfiguriert.

Die Rechtstext-Seiten sind keine gültigen Rechtstexte. Vor einer öffentlichen werblichen Nutzung muss zusätzlich ein bestätigter Anbieter-Impressumslink der Person oder Firma ergänzt werden, die diese Demo bewirbt.

## Prüfung vor einer Kundenveröffentlichung

```bash
npm ci
npm run check
npm run check:client-preview
npm run check:anonymous-demo
npm run lint
npx tsc --noEmit
npm run build
npm audit --audit-level=high
```

Danach alle Seiten auf 1920, 1440, 1280, Tablet und 390 Pixel Breite prüfen, sämtliche Platzhalter ersetzen, externe Ziele testen, Assets dokumentieren und Rechtstexte fachlich freigeben.
