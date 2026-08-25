import Link from "next/link";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";

export default function NotFound() {
  return (
    <main className="inner-page legal-page">
      <SiteHeader inner />
      <section className="legal-page-content">
        <p className="eyebrow">Demo-Vorlage · 404</p>
        <h1>Seite nicht gefunden.</h1>
        <p>[DIE ANGEFORDERTE DEMO-SEITE IST NICHT VORHANDEN]</p>
        <Link className="button button-primary" href="/">Zur Startseite</Link>
      </section>
      <SiteFooter />
    </main>
  );
}
