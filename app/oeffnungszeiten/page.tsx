import type { Metadata } from "next";
import ContactCard from "../components/ContactCard";
import HoursCard from "../components/HoursCard";
import MapEmbed from "../components/MapEmbed";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { bookingHref, bookingLabel, pageCopy, salonConfig, site } from "../site-data";
import { pageMetadata } from "../seo";

export const metadata: Metadata = pageMetadata("contact");

export default function ContactPage() {
  return <main className="inner-page"><SiteHeader inner /><section className="inner-hero"><div className="inner-hero-copy"><p className="eyebrow">{pageCopy.pages.contact.eyebrow}</p><h1>Öffnungszeiten &amp; <em className="heading-accent">Kontakt.</em></h1><p>{pageCopy.pages.contact.intro}</p><div className="hero-actions"><a className="button button-primary" href={bookingHref}>{bookingLabel}</a>{site.phoneHref ? <a className="text-link" href={site.phoneHref}>{site.phoneDisplay} <span aria-hidden="true">↗</span></a> : null}</div></div><div className="inner-hero-mark" aria-hidden="true"><span>{salonConfig.logo.mark}</span></div></section><section className="contact-page-grid"><HoursCard /><ContactCard /></section><section className="contact-map-section"><div className="contact-map-copy"><p className="section-kicker">Anfahrt</p><h2>Ihr Weg zum <em className="heading-accent">Salon.</em></h2><p>{site.address.join(" · ")}</p>{salonConfig.links.directionsUrl ? <a className="button button-primary" href={salonConfig.links.directionsUrl} target="_blank" rel="noreferrer">Route öffnen</a> : <span className="button button-primary is-disabled">Anfahrt folgt</span>}</div><MapEmbed directionsUrl={salonConfig.links.directionsUrl} embedUrl={salonConfig.links.mapEmbedUrl} title={salonConfig.map.title} /></section><SiteFooter /><a className="mobile-call-bar" href={bookingHref}><span aria-hidden="true">↗</span>{bookingLabel}</a></main>;
}
