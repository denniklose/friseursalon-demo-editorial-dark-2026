import type { Metadata } from "next";
import LegalPage from "../components/LegalPage";
import { salonConfig, site } from "../site-data";
import { pageMetadata } from "../seo";

export const metadata: Metadata = pageMetadata("imprint");

export default function ImpressumPage() {
  return <LegalPage title="Impressum" intro="Diese Seite ist Bestandteil einer Demo-Vorlage und kein gültiges Anbieter-Impressum. Vor einer produktiven oder werblichen Nutzung müssen geprüfte Betreiberangaben und passende Rechtstexte ergänzt werden." summary={<><h2>Betreiberangaben</h2><p>{salonConfig.legal.imprint.owner}<br />{site.name}<br />{salonConfig.legal.imprint.address.join(" · ")}<br />{salonConfig.legal.imprint.contact}</p></>} sections={salonConfig.legal.imprint.paragraphs} />;
}
