import type { ReactNode } from "react";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

type LegalPageProps = {
  title: string;
  intro: string;
  summary: ReactNode;
  sections: Array<{ title: string; copy: string }>;
};

export default function LegalPage({ title, intro, summary, sections }: LegalPageProps) {
  return (
    <main className="inner-page legal-page">
      <SiteHeader inner />
      <section className="legal-page-content">
        <p className="eyebrow">Rechtstexte</p>
        <h1>{title}</h1>
        <p>{intro}</p>
        {summary}
        {sections.map((item) => <div className="legal-copy-block" key={item.title}><h2>{item.title}</h2><p>{item.copy}</p></div>)}
      </section>
      <SiteFooter />
    </main>
  );
}
