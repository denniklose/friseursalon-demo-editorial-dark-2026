import Link from "next/link";
import { bookingHref, bookingLabel, navigation, salonConfig, site } from "../site-data";

type SiteHeaderProps = { inner?: boolean };

export default function SiteHeader({ inner = false }: SiteHeaderProps) {
  return (
    <>
      <div className="demo-banner" role="note">{salonConfig.preview.label}</div>
      <header className={"site-header" + (inner ? " site-header-inner" : "")} aria-label="Hauptnavigation">
        <Link className="wordmark" href="/" aria-label={`${site.name} – Startseite`}>
          <span>{salonConfig.logo.text}</span>
          <small>{salonConfig.logo.subtitle}</small>
        </Link>
        <nav className="desktop-nav" aria-label="Seitennavigation">{navigation.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}</nav>
        <div className="header-contact">
          {site.phoneHref ? <a className="header-phone" href={site.phoneHref}><span aria-hidden="true">☎</span>{site.phoneDisplay}</a> : <span className="header-phone">{site.phoneDisplay || "[KONTAKT]"}</span>}
          <span className="header-location">{site.address[1]}</span>
          <Link className="header-booking" href={bookingHref}>{bookingLabel}</Link>
        </div>
        <details className="mobile-menu">
          <summary aria-label="Menü öffnen">Menü</summary>
          <nav aria-label="Mobile Seitennavigation">{navigation.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}<Link href={bookingHref}>{bookingLabel}</Link></nav>
        </details>
      </header>
    </>
  );
}
