import Link from "next/link";
import { bookingHref, bookingLabel, site } from "../site-data";

type CallToActionProps = { kicker: string; title: React.ReactNode; copy: string; dark?: boolean; href?: string };

export default function CallToAction({ kicker, title, copy, dark = false, href = bookingHref }: CallToActionProps) {
  return <section className={`inner-note-section${dark ? " inner-note-section-dark" : ""}`}><p className="section-kicker">{kicker}</p><h2>{title}</h2><p>{copy}</p><div className="final-cta-actions"><a className={`button ${dark ? "button-light" : "button-primary"}`} href={href}>{bookingLabel}</a>{site.phoneHref ? <a className={`text-link${dark ? " text-link-light" : ""}`} href={site.phoneHref}>{site.phoneDisplay} <span aria-hidden="true">↗</span></a> : <Link className={`text-link${dark ? " text-link-light" : ""}`} href="/oeffnungszeiten/">Kontakt ansehen <span aria-hidden="true">↗</span></Link>}</div></section>;
}
