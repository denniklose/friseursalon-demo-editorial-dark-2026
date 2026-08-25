import Image from "next/image";
import type { Metadata } from "next";
import CallToAction from "../components/CallToAction";
import InnerPageHero from "../components/InnerPageHero";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { bookingHref, bookingLabel, pageCopy, salonConfig } from "../site-data";
import { pageMetadata } from "../seo";

export const metadata: Metadata = pageMetadata("team");

export default function TeamPage() {
  return <main className="inner-page"><SiteHeader inner /><InnerPageHero eyebrow={pageCopy.pages.team.eyebrow} title={<>Beratung mit <em className="heading-accent">Haltung.</em></>} intro={pageCopy.pages.team.intro} ctaLabel={bookingLabel} ctaHref={bookingHref} /><section className="inner-feature-section"><div className="inner-feature-copy"><p className="section-kicker">Was guten Stil ausmacht</p><h2>Persönlich. <em className="heading-accent">Sorgfältig.</em> Auf den Punkt.</h2><p>{pageCopy.pages.team.intro}</p><div className="team-placeholder-list">{salonConfig.team.length ? salonConfig.team.map((member) => <article key={member.name}><strong>{member.name}</strong><span>{member.role}</span><p>{member.bio}</p></article>) : <article><strong>Persönliche Beratung</strong><span>Für Ihren Stil</span><p>Die Menschen und Schwerpunkte des Salons werden aus bestätigten Angaben ergänzt.</p></article>}</div></div><figure className="inner-feature-media inner-feature-media-team"><Image src={salonConfig.media.team.src} alt={salonConfig.media.team.alt} fill sizes="(max-width: 760px) 94vw, 58vw" /></figure></section><CallToAction kicker="Ihr Termin" title={<>Der nächste Look beginnt mit einem <em className="heading-accent">Gespräch.</em></>} copy="Der im Kundenprofil hinterlegte Kontaktweg führt direkt zur persönlichen Termin-Anfrage." dark /><SiteFooter /><a className="mobile-call-bar" href={bookingHref}><span aria-hidden="true">↗</span>{bookingLabel}</a></main>;
}
