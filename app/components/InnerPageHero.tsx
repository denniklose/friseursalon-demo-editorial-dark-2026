import Link from "next/link";
import type { ReactNode } from "react";
import { salonConfig } from "../site-data";

type InnerPageHeroProps = { eyebrow: string; title: ReactNode; intro: string; ctaLabel?: string; ctaHref?: string; mark?: string };

export default function InnerPageHero({ eyebrow, title, intro, ctaLabel, ctaHref, mark = salonConfig.logo.mark }: InnerPageHeroProps) {
  return <section className="inner-hero"><div className="inner-hero-copy"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{intro}</p>{ctaLabel && ctaHref ? ctaHref.startsWith("/") ? <Link className="button button-primary" href={ctaHref}>{ctaLabel}</Link> : <a className="button button-primary" href={ctaHref}>{ctaLabel}</a> : null}</div><div className="inner-hero-mark" aria-hidden="true"><span>{mark}</span></div></section>;
}
