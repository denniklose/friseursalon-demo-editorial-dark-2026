import Link from "next/link";
import { bookingHref, bookingLabel, navigation, salonConfig, site } from "../site-data";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      {salonConfig.preview.enabled ? <p className="preview-note"><strong>{salonConfig.preview.label}</strong> · {salonConfig.preview.note}</p> : null}
      <div className="footer-brand"><Link className="wordmark" href="/"><span>{salonConfig.logo.text}</span><small>{salonConfig.logo.subtitle}</small></Link><p>{site.address[0]} · {site.address[1]}<br />Kontakt: {site.phoneDisplay}</p></div>
      <div className="footer-links"><Link href={bookingHref}>{bookingLabel}</Link>{navigation.slice(1, 5).map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}{site.email && site.emailHref ? <a href={site.emailHref}>E-Mail</a> : null}{salonConfig.links.social.map((social) => <a href={social.href} target="_blank" rel="noreferrer" key={social.href}>{social.label}</a>)}</div>
      <div className="footer-legal" aria-label="Rechtstexte"><span>Rechtstexte</span><Link href="/impressum/">Impressum</Link><Link href="/datenschutz/">Datenschutz</Link></div>
    </footer>
  );
}
