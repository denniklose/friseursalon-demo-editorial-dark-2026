import Image from "next/image";
import Link from "next/link";
import { bookingHref, bookingLabel, pageCopy, salonConfig, site } from "../site-data";
import EditorialHeading from "./EditorialHeading";

export default function Hero() {
  return (
    <section className="hero" id="start" aria-labelledby="home-title">
      <div className="hero-copy">
        <div className="hero-ornament" aria-hidden="true"><span>{salonConfig.logo.mark}</span></div>
        <p className="eyebrow">{site.descriptor}</p>
        <EditorialHeading as="h1" id="home-title" title={salonConfig.claims.hero} />
        <p className="hero-intro">{pageCopy.home.heroIntro}</p>
        <div className="hero-actions"><a className="button button-primary" href={bookingHref}>{bookingLabel}</a><Link className="text-link" href="/ueber-uns/">Über Uns entdecken <span aria-hidden="true">→</span></Link></div>
      </div>
      <div className="hero-visual" aria-label="Haar-Inspiration">
        <div className="hero-arch"><Image src={salonConfig.media.hero.src} alt={salonConfig.media.hero.alt} fill priority sizes="(max-width: 760px) 94vw, 44vw" /></div>
        <span className="image-note">{salonConfig.media.hero.caption}</span>
        <span className="hero-visual-line" aria-hidden="true" />
      </div>
    </section>
  );
}
