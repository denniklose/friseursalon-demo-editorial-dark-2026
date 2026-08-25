import Image from "next/image";
import type { Metadata } from "next";
import CallToAction from "../components/CallToAction";
import InnerPageHero from "../components/InnerPageHero";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { bookingHref, bookingLabel, pageCopy, salonConfig, site } from "../site-data";
import { pageMetadata } from "../seo";

export const metadata: Metadata = pageMetadata("salon");

export default function SalonPage() {
  return <main className="inner-page"><SiteHeader inner /><InnerPageHero eyebrow={pageCopy.pages.salon.eyebrow} title={<>Ein Ort für Ihren <em className="heading-accent">Stil.</em></>} intro={pageCopy.pages.salon.intro} ctaLabel={bookingLabel} ctaHref={bookingHref} /><section className="inner-feature-section inner-feature-section-reverse"><figure className="inner-feature-media"><Image src={salonConfig.media.salon.src} alt={salonConfig.media.salon.alt} fill sizes="(max-width: 760px) 94vw, 58vw" /></figure><div className="inner-feature-copy"><p className="section-kicker">Der Salon</p><h2>{site.address[0]} in <em className="heading-accent">{site.city}.</em></h2><p>{pageCopy.pages.salon.intro}</p><p>{salonConfig.history.paragraphs[1]}</p><a className="button button-primary" href="/oeffnungszeiten/">Öffnungszeiten &amp; Kontakt</a></div></section><CallToAction kicker="Leistungen" title={<>Von Beratung bis <em className="heading-accent">Finish.</em></>} copy="Die bestätigten Leistungsbereiche geben Orientierung und werden im Kundenprofil zentral gepflegt." /><SiteFooter /><a className="mobile-call-bar" href={bookingHref}><span aria-hidden="true">↗</span>{bookingLabel}</a></main>;
}
