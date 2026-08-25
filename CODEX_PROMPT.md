# Codex Prompt · neues Friseursalon-Kundenprojekt

Erstelle aus dem privaten GitHub-Template **friseursalon-demo-editorial-dark-2026** eine neue Website für:

- Salonname: **[SALONNAME]**
- Ort: **[ORT]**
- öffentliche Ausgangsquelle: **[QUELLE]**
- gewünschte Akzentfarbe: **[HEX]**

## Unverhandelbare Isolation

Erstelle zuerst ein neues, separates privates GitHub-Kunden-Repository und arbeite ausschließlich darin.

- Das Template-Repository niemals verändern, überschreiben oder deployen.
- Kein anderes Kunden-Repository verändern.
- Kein bestehendes Hosting-Projekt wiederverwenden.
- Keine bestehende Kunden-Domain oder URL überschreiben.
- Keine Historie mit Daten eines anderen Kunden übernehmen.

Lies vor Änderungen vollständig:

1. `SALON_INTAKE.md`
2. `CODEX_PROMPT.md`
3. `ASSET_MANIFEST.md`
4. `HANDOVER_CHECKLIST.md`
5. `README.md`

## Designvertrag

Behalte Dark-Mode, Editorial-Hero, Helvetica, Script-Akzente, Unterstreichung, Bento-Layout, Seitenstruktur, Navigation, CTA-Logik, Bildsprache und Responsive-Verhalten bei.

Ändere nur:

- Kundendaten;
- Logo;
- Theme-/Akzentfarben;
- Bilder;
- Texte;
- bestätigte Leistungen;
- bestätigte Teamangaben;
- bestätigte Öffnungszeiten;
- Rechtstexte;
- lokale SEO;
- optional aktivierte Konfigurationsbereiche.

## Fakten und Recherche

Recherchiere ausschließlich eindeutig zuordenbare öffentliche Fakten. Dokumentiere jede Quelle und jeden Prüfstatus in `RESEARCH_LEDGER.md`.

Erfinde niemals:

- Bewertungen, Sterne oder Bewertungszahlen;
- Preise;
- Leistungen;
- Teammitglieder;
- Öffnungszeiten;
- Marken oder Produktpartnerschaften;
- E-Mail-Adressen;
- Buchungslinks;
- Rechtstexte;
- Auszeichnungen, Historie oder Ergebnisversprechen.

Unsichere Fakten werden nicht als konkrete Kundenaussage veröffentlicht. Für die Vorabpräsentation darf neutrale, hochwertige Salon-Copy genutzt werden, sofern sie keine konkrete Leistung oder Eigenschaft behauptet.

## Zentrale Konfiguration

Pflege Kundendaten zuerst in `config/salon.ts`.

- Navigation aus der Konfiguration ableiten.
- Optionalen Schwerpunkt über `featuredService.enabled` steuern.
- Keine kundenspezifischen Links in Komponenten hart codieren.
- SEO-Pfade, Titel und Beschreibungen je Route pflegen.
- Preview/noindex aktiv lassen, solange Pflichtfreigaben fehlen.
- Reviews standardmäßig deaktiviert lassen.

## Bilder und Rechte

Verwende nur:

- eindeutig freigegebene Kundenbilder;
- klar lizenzierte Bilder;
- originale KI-generierte Assets.

Die Bildsprache zeigt echte, fotorealistische Frisurenmotive. Keine generischen Illustrationen oder abstrakten Platzhalter als Hauptbilder.

Dokumentiere für jedes öffentliche Asset:

- Pfad;
- Quelle;
- Lizenz;
- Alt-Text;
- Freigabestatus;
- Einsatzort.

Aktualisiere sowohl `config/asset-manifest.json` als auch `ASSET_MANIFEST.md`.

## Karte und Datenschutz

Google Maps oder ein anderer externer Kartendienst darf ausschließlich nach einer bewussten Zustimmung per Klick laden.

Vor der Zustimmung sichtbar lassen:

- Salonname;
- Adresse;
- separaten Routenlink;
- verständlichen Consent-Hinweis.

Vor dem Klick darf kein Karten-Iframe und keine externe Kartenanfrage entstehen.

## Qualitätsprüfung

Prüfe alle Seiten mindestens in:

- 1920×1080;
- 1440×900;
- 1280×720;
- 768×1024;
- 390×844.

Prüfe besonders:

- Header und mobile Navigation;
- Hero-Komposition und Bildmaske;
- Editorial-Zwischenband;
- aufklappbare Leistungen;
- Bento-Ausrichtung;
- optionalen Schwerpunkt samt Route;
- Terminablauf;
- Kontakt, Öffnungszeiten und Consent-Karte;
- Rechtstext-Seiten;
- Footer und Preview-Hinweis;
- horizontalen Overflow;
- Tastaturfokus und Linkziele.

Führe anschließend aus:

```bash
npm ci
npm run check
npm run check:client-preview
npm run lint
npx tsc --noEmit
npm run build
npm run check
```

Vor einem echten Livegang zusätzlich:

```bash
npm run check:template:strict
```

## Veröffentlichung

Nur wenn alle Pflichtdaten und Freigaben vollständig sind:

1. neues separates Hosting-Projekt für diesen Kunden erstellen;
2. neue eindeutige URL verwenden;
3. anonyme Erreichbarkeit live prüfen;
4. alle Routen und CTA-Ziele live testen;
5. Preview-Hinweis und noindex nur nach ausdrücklicher Freigabe entfernen.

Wenn Pflichtdaten fehlen:

- keine fertige Kundenübergabe behaupten;
- keinen öffentlichen Livegang als abgeschlossen melden;
- exakt die offenen Punkte ausgeben.

## Abschlussbericht

Gib am Ende aus:

- Link zum neuen privaten GitHub-Kundenrepo;
- Hosting-Link nur bei freigegebenem Livegang;
- getestete Befehle und Resultate;
- getestete Viewports und Routen;
- offene Freigaben;
- Bestätigung, dass Template und andere Kundenprojekte unverändert blieben.
