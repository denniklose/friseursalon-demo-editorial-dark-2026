import type { Metadata } from "next";
import LegalPage from "../components/LegalPage";
import { salonConfig, site } from "../site-data";
import { pageMetadata } from "../seo";

export const metadata: Metadata = pageMetadata("privacy");

export default function DatenschutzPage() {
  return <LegalPage title="Datenschutz" intro="Diese Seite ist Bestandteil einer Demo-Vorlage und kein finaler Datenschutzhinweis. Vor einer produktiven Nutzung müssen verantwortliche Stelle, tatsächliche Datenverarbeitungen, Dienste und Rechtsgrundlagen geprüft und ersetzt werden." summary={<><h2>Verantwortliche Stelle</h2><p>{salonConfig.legal.privacy.responsible}<br />{site.name}<br />{site.address.join(" · ")}</p></>} sections={salonConfig.legal.privacy.paragraphs} />;
}
