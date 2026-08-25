import { site } from "../site-data";

export default function ContactCard() {
  return <article className="contact-page-card"><p className="section-kicker">Kontakt</p><h2>{site.name}.</h2><p className="inner-address">{site.owner ? <>{site.owner}<br /></> : null}{site.address[0]}<br />{site.address[1]}</p>{site.phoneHref ? <a className="button button-primary" href={site.phoneHref}>{site.phoneDisplay} anrufen</a> : <span className="button button-primary is-disabled">Kontaktweg im Kundenprofil</span>}{site.email && site.emailHref ? <a className="text-link" href={site.emailHref}>{site.email}</a> : null}</article>;
}
