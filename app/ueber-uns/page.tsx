import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import CallToAction from "../components/CallToAction";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { bookingHref, bookingLabel, pageCopy, salonConfig } from "../site-data";
import { pageMetadata } from "../seo";

export const metadata: Metadata = pageMetadata("about");

export default function AboutPage() {
  return <main className="inner-page about-page"><SiteHeader inner /><section className="about-intro"><p className="eyebrow">{pageCopy.pages.about.eyebrow}</p><h1>Was uns <em className="heading-accent">wichtig ist.</em></h1><figure className="about-silhouette"><Image src={salonConfig.media.about.src} alt={salonConfig.media.about.alt} fill priority sizes="(max-width: 760px) 94vw, 76vw" /></figure><div className="about-copy"><p>{salonConfig.history.paragraphs[0]}</p><p>{salonConfig.history.paragraphs[1]}</p><p>{salonConfig.history.paragraphs[2]}</p><a className="button button-primary" href={bookingHref}>{bookingLabel}</a></div></section><CallToAction kicker="Für Ihren Stil" title={<>Beratung, die zu Ihnen <em className="heading-accent">passt.</em></>} copy={salonConfig.history.intro} dark /><section className="inner-note-section"><p className="section-kicker">Weiterlesen</p><h2>Beratung und Kontakt <em className="heading-accent">auf einen Blick.</em></h2><p>Die Menschen und individuellen Schwerpunkte des Salons werden im gemeinsamen Gespräch ergänzt.</p><div className="final-cta-actions"><Link className="button button-primary" href="/team/">Beratung &amp; Stil</Link><Link className="text-link" href="/oeffnungszeiten/">Kontakt ansehen <span aria-hidden="true">↗</span></Link></div></section><SiteFooter /><a className="mobile-call-bar" href={bookingHref}><span aria-hidden="true">↗</span>{bookingLabel}</a></main>;
}
