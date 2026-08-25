import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import CallToAction from "../../components/CallToAction";
import InnerPageHero from "../../components/InnerPageHero";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import { bookingHref, bookingLabel, salonConfig } from "../../site-data";
import { pageMetadata } from "../../seo";

type FeaturedServicePageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return salonConfig.featuredService.enabled ? [{ slug: salonConfig.featuredService.slug }] : [];
}

export async function generateMetadata({ params }: FeaturedServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  if (!salonConfig.featuredService.enabled || slug !== salonConfig.featuredService.slug) return {};
  return pageMetadata("featuredService");
}

export default async function FeaturedServicePage({ params }: FeaturedServicePageProps) {
  const { slug } = await params;
  const featured = salonConfig.featuredService;
  if (!featured.enabled || slug !== featured.slug) notFound();

  return (
    <main className="inner-page extension-page">
      <SiteHeader inner />
      <InnerPageHero eyebrow={featured.eyebrow} title={<>{featured.title.lead} <em className="heading-accent">{featured.title.accent}</em></>} intro={featured.intro} ctaLabel={bookingLabel} ctaHref={bookingHref} />
      <section className="inner-feature-section">
        <div className="inner-feature-copy">
          <p className="section-kicker">Individuelle Beratung</p>
          <h2>Der richtige Schritt beginnt mit einem guten <em className="heading-accent">Gespräch.</em></h2>
          <p>{featured.description}</p>
          <ul className="service-highlight-list">{featured.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
        </div>
        <figure className="inner-feature-media extension-feature-media"><Image src={featured.image.src} alt={featured.image.alt} fill sizes="(max-width: 760px) 94vw, 58vw" /></figure>
      </section>
      <CallToAction kicker="Ihr Termin" title={<>Alle nächsten Schritte auf einen <em className="heading-accent">Blick.</em></>} copy="Beratung, Kontaktweg und Termin werden im Kundenprofil klar und verbindlich zusammengeführt." dark />
      <SiteFooter />
      <a className="mobile-call-bar" href={bookingHref}><span aria-hidden="true">↗</span>{bookingLabel}</a>
    </main>
  );
}
