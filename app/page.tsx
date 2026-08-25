import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import AppointmentSection from "./components/AppointmentSection";
import BentoSection from "./components/BentoSection";
import EditorialHeading from "./components/EditorialHeading";
import Hero from "./components/Hero";
import HoursCard from "./components/HoursCard";
import MapEmbed from "./components/MapEmbed";
import ServiceList from "./components/ServiceList";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import { bookingHref, bookingLabel, featuredServiceHref, pageCopy, salonConfig, site } from "./site-data";
import { pageMetadata } from "./seo";

export const metadata: Metadata = pageMetadata("home");

export default function Home() {
  const featured = salonConfig.featuredService;
  return (
    <main id="top">
      <SiteHeader />
      <Hero />

      <section className="service-intro" aria-labelledby="service-intro-title">
        <p>Haar · Beratung · {site.city}</p>
        <EditorialHeading id="service-intro-title" title={salonConfig.claims.intro} />
        <Link href={bookingHref}>{bookingLabel} <span aria-hidden="true">→</span></Link>
      </section>

      <section className="services-section" id="leistungen" aria-labelledby="services-title">
        <div className="section-heading section-heading-light"><p className="section-kicker">Leistungen</p><h2 id="services-title">Alles rund um <em className="heading-accent">Ihre Leistungen.</em></h2><p>{pageCopy.home.serviceIntro}</p></div>
        <ServiceList />
      </section>

      <BentoSection />

      {featured.enabled ? (
        <section className="extension-strip" aria-labelledby="extension-strip-title">
          <div className="extension-strip-image"><Image src={featured.image.src} alt={featured.image.alt} fill priority sizes="(max-width: 760px) 94vw, 54vw" /></div>
          <div className="extension-strip-copy">
            <p className="section-kicker">{featured.eyebrow}</p>
            <EditorialHeading id="extension-strip-title" title={featured.title} />
            <p>{featured.intro}</p>
            <div className="extension-strip-actions"><Link className="button button-primary" href={featuredServiceHref}>Mehr erfahren</Link><a className="text-link" href={bookingHref}>{bookingLabel} <span aria-hidden="true">↗</span></a></div>
          </div>
        </section>
      ) : null}

      <AppointmentSection />

      <section className="visit-section" id="kontakt" aria-labelledby="visit-title">
        <div className="visit-location">
          <div className="visit-copy">
            <p className="section-kicker">Salonbesuch</p>
            <EditorialHeading id="visit-title" title={salonConfig.claims.visit} />
            <p>{pageCopy.home.visitIntro}</p>
            <p className="visit-address"><span>{site.address[0]}</span><span>{site.address[1]}</span></p>
            {salonConfig.links.directionsUrl ? <a className="button button-light" href={salonConfig.links.directionsUrl} target="_blank" rel="noreferrer">Route öffnen</a> : <span className="button button-light is-disabled">Route im Kundenprofil</span>}
          </div>
          <MapEmbed directionsUrl={salonConfig.links.directionsUrl} embedUrl={salonConfig.links.mapEmbedUrl} title={salonConfig.map.title} />
        </div>
        <HoursCard />
      </section>

      <section className="faq-section" id="faq" aria-labelledby="faq-title">
        <div className="section-heading"><p className="section-kicker">Gut zu wissen</p><EditorialHeading id="faq-title" title={salonConfig.claims.faq} /></div>
        <div className="faq-list">{salonConfig.faq.map((faq, index) => <details key={faq.question}><summary><span>{String(index + 1).padStart(2, "0")}</span><strong>{faq.question}</strong><i aria-hidden="true">+</i></summary><p>{faq.answer}</p></details>)}</div>
      </section>

      <section className="final-cta" aria-labelledby="final-cta-title">
        <p className="section-kicker">Kontakt</p>
        <EditorialHeading id="final-cta-title" title={salonConfig.claims.final} />
        <p>{pageCopy.home.finalIntro}</p>
        <div className="final-cta-actions"><a className="button button-light" href={bookingHref}>{bookingLabel}</a>{site.phoneHref ? <a className="text-link text-link-light" href={site.phoneHref}>{site.phoneDisplay} <span aria-hidden="true">→</span></a> : <Link className="text-link text-link-light" href="/oeffnungszeiten/">Kontakt ansehen <span aria-hidden="true">→</span></Link>}</div>
      </section>
      <SiteFooter />
      <a className="mobile-call-bar" href={bookingHref}><span aria-hidden="true">↗</span>{bookingLabel}</a>
    </main>
  );
}
