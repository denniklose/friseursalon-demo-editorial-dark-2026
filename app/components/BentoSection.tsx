import Image from "next/image";
import Link from "next/link";
import { pageCopy, salonConfig, site } from "../site-data";

export default function BentoSection() {
  return (
    <section className="inspiration-section" id="salon" aria-labelledby="inspiration-title">
      <div className="section-heading">
        <p className="section-kicker">Salon &amp; Haltung</p>
        <h2 id="inspiration-title">Was gute Beratung <em className="heading-accent">ausmacht.</em></h2>
        <p>{pageCopy.home.salonIntro}</p>
      </div>
      <div className="look-grid">
        <figure className="look-card look-card-tall team-feature">
          <Image src={salonConfig.media.salon.src} alt={salonConfig.media.salon.alt} fill sizes="(max-width: 760px) 94vw, 52vw" />
          <figcaption><span>01</span><strong>{salonConfig.media.salon.caption}</strong><small>{pageCopy.home.imageNote}</small></figcaption>
        </figure>
        <div className="look-side">
          <figure className="look-card salon-feature">
            <Image src={salonConfig.media.texture.src} alt={salonConfig.media.texture.alt} fill sizes="(max-width: 760px) 94vw, 42vw" />
            <figcaption><span>02</span><strong>{salonConfig.media.texture.caption}</strong><small>{pageCopy.home.imageNote}</small></figcaption>
          </figure>
          <div className="social-proof-block">
            <p className="section-kicker">Adresse</p>
            <strong>{site.address[0]} · {site.address[1]}</strong>
            <p>{pageCopy.pages.salon.intro}</p>
            <div className="inline-links"><Link className="text-link" href="/team/">Beratung &amp; Stil <span aria-hidden="true">↗</span></Link><Link className="text-link" href="/salon/">Salon ansehen <span aria-hidden="true">↗</span></Link></div>
          </div>
        </div>
      </div>
    </section>
  );
}
