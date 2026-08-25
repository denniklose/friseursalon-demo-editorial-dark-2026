# Handover Checklist · Friseursalon-Kundenprojekt

Diese Liste wird für jedes aus der Vorlage erzeugte Kundenprojekt vollständig bearbeitet. Ein Preview kann mit offenen Freigaben vorgestellt werden; ein öffentlicher Livegang nicht.

## 1. Projektisolation

- [ ] Neues privates Kunden-Repository aus dem GitHub-Template erstellt
- [ ] Repository-Name und Account eindeutig bestätigt
- [ ] Standardbranch ist `main`
- [ ] Keine fremde Kundenhistorie übernommen
- [ ] Kein Template-Remote als beschreibbares `origin` eingetragen
- [ ] Neues separates Hosting-Projekt vorgesehen
- [ ] Keine bestehende Kunden-URL überschrieben

## 2. Identität und Kontakt

- [ ] Salonname bestätigt
- [ ] Betreiber / Rechtsform bestätigt
- [ ] Adresse bestätigt
- [ ] Telefonnummer und `tel:`-Link getestet
- [ ] E-Mail und `mailto:`-Link bestätigt
- [ ] offizieller Buchungsweg bestätigt
- [ ] offizielle Website- und Social-Links eindeutig zugeordnet
- [ ] lokale SEO-Ortsangabe bestätigt

## 3. Inhalte

- [ ] Hero, Intro und CTA enthalten keine neutralen Template-Werte mehr
- [ ] Leistungen einzeln bestätigt
- [ ] Preise nur bei ausdrücklicher Bestätigung veröffentlicht
- [ ] Teamnamen, Rollen, Bios und Bilder bestätigt
- [ ] Historie und Claims bestätigt
- [ ] Öffnungszeiten für jeden Tag bestätigt
- [ ] FAQ-Antworten entsprechen bestätigten Fakten
- [ ] optionale Schwerpunktseite bestätigt oder deaktiviert
- [ ] Bewertungen deaktiviert oder vollständig belegt und freigegeben

## 4. Assets

- [ ] Logo und Favicon freigegeben
- [ ] alle sichtbaren Bilder besitzen klare Quelle und Lizenz
- [ ] alle Alt-Texte geprüft
- [ ] Team-/Kundenfotos besitzen Veröffentlichungsfreigabe
- [ ] `config/asset-manifest.json` vollständig
- [ ] `ASSET_MANIFEST.md` vollständig
- [ ] keine ungenutzten öffentlichen Dateien vorhanden
- [ ] `assetRightsConfirmed = true`

## 5. Karte und Datenschutz

- [ ] Adresse bleibt vor Kartenansicht sichtbar
- [ ] separater Routenlink funktioniert
- [ ] Karte lädt erst nach bewusstem Klick
- [ ] vor Zustimmung keine Kartenanfrage
- [ ] Kartenanbieter im Datenschutztext berücksichtigt
- [ ] finaler Termin-/Formulardatenfluss dokumentiert
- [ ] Impressum mit realen Betreiberangaben erstellt
- [ ] Datenschutztext für das konkrete Projekt geprüft
- [ ] `legalReviewed = true`

## 6. SEO und Preview

- [ ] finale Domain in `seo.baseUrl` eingetragen
- [ ] Titel und Beschreibungen je Route geprüft
- [ ] Canonicals zeigen auf die finale Domain
- [ ] Sitemap enthält nur aktivierte Seiten
- [ ] Preview-Hinweis erst nach Freigabe entfernt
- [ ] `preview.enabled = false` erst bei Livegang
- [ ] `preview.noindex = false` erst bei Indexierungsfreigabe
- [ ] `claimsConfirmed = true`

## 7. Visuelle Prüfung

- [ ] 1920×1080 geprüft
- [ ] 1440×900 geprüft
- [ ] 1280×720 geprüft
- [ ] 768×1024 geprüft
- [ ] 390×844 geprüft
- [ ] Header und Navigation geprüft
- [ ] Hero-Bildmaske ohne harte Kante geprüft
- [ ] Leistung-Dropdowns bedienbar
- [ ] Bento-Unterkanten und Abstände geprüft
- [ ] Script-Headlines ohne Überdeckung geprüft
- [ ] Terminsektionen und Kontaktkarten geprüft
- [ ] Footer und Rechtstext-Seiten geprüft
- [ ] kein horizontaler Overflow
- [ ] Tastaturfokus sichtbar
- [ ] alle CTA-Ziele korrekt

## 8. Technische Prüfung

- [ ] `npm ci`
- [ ] `npm run check`
- [ ] `npm run check:client-preview`
- [ ] `npm run lint`
- [ ] `npx tsc --noEmit`
- [ ] `npm run build`
- [ ] `npm run check` nach dem Build
- [ ] `npm run check:template:strict`
- [ ] Git-Status sauber
- [ ] keine `.env`-, `.vercel`-, `.next`- oder `node_modules`-Dateien getrackt

## 9. Live-Prüfung

- [ ] neues Hosting-Projekt eindeutig diesem Kundenrepo zugeordnet
- [ ] neue URL anonym ohne Login erreichbar
- [ ] Startseite liefert erfolgreich Inhalt
- [ ] alle Unterseiten live erreichbar
- [ ] dynamische Schwerpunktseite nur bei Aktivierung erreichbar
- [ ] Telefon-, Mail-, Buchungs- und Routenlinks live geprüft
- [ ] Karten-Consent live geprüft
- [ ] Gold-/Template-Version und andere Kundenprojekte unverändert

## Übergabebericht

- Repository:
- Hosting:
- Commit:
- getestete Befehle:
- getestete Viewports:
- offene Freigaben:
- bekannte Risiken:
- Datum:
- geprüft von:

Bei einem Preview mit offenen Pflichtpunkten klar benennen: **Noch keine fertige Kundenübergabe und noch kein freigegebener öffentlicher Livegang.**
