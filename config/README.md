# Zentrale Salon-Konfiguration

`salon.ts` ist die zentrale Stelle für kundenspezifische Daten. Die Typen verhindern, dass einzelne Seiten eigene Varianten von Kontakt, Öffnungszeiten, Links, optionalen Bereichen oder SEO anlegen.

Die neutrale Vorlage startet mit Preview/noindex und eindeutig markierten Platzhaltern. Vor einer Kundenveröffentlichung Identität, Zeiten, Leistungen, Medien, Domain und Rechtsdaten vollständig ersetzen. Freigaben in `legal.approvals` erst auf `true` setzen, wenn die Nachweise in `SALON_INTAKE.md`, `RESEARCH_LEDGER.md` und `ASSET_MANIFEST.md` vorhanden sind.

Der optionale Navigationspunkt und die dynamische Detailseite werden über `featuredService.enabled` gesteuert. Keine parallelen hart codierten Links ergänzen.
