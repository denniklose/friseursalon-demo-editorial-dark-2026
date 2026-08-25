# Friseursalon Demo Editorial Dark 2026

Private Quellvorlage für eine öffentlich erreichbare, vollständig anonyme Friseursalon-Design-Demo im dunklen Editorial-/Bento-Look.

Die Website enthält ausschließlich neutrale, klar gekennzeichnete Platzhalter und original KI-generierte Haarmotive. Sie stellt kein reales Unternehmen dar und besitzt keine aktiven Telefon-, E-Mail-, Buchungs-, Social-, Karten-, Tracking- oder Formularziele.

## Schnellstart

```bash
npm ci
npm run dev
```

## Zentrale Dateien

- `config/salon.ts` – sämtliche austauschbaren Inhalte, Theme-Tokens, SEO und Rechtsplatzhalter
- `config/asset-manifest.json` – maschinenlesbare Asset-Dokumentation
- `TEMPLATE_README.md` – vollständige Anpassungs- und Prüfdokumentation
- `CUSTOMIZATION_CHECKLIST.md` – kompakte Kundenanpassungs-Checkliste

## Qualitätsprüfung

```bash
npm run check
npm run check:client-preview
npm run check:anonymous-demo
npm run lint
npx tsc --noEmit
npm run build
npm audit --audit-level=high
```

Die öffentliche Demo bleibt dauerhaft `noindex, nofollow, noarchive`. Vor einer produktiven Kundennutzung müssen sämtliche Platzhalter, Kontaktziele, Rechtstexte und Freigaben ersetzt beziehungsweise bestätigt werden.
