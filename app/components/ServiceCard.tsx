import { bookingLabel } from "../site-data";

type ServiceCardProps = { number: string; title: string; copy: string; href: string };

export default function ServiceCard({ number, title, copy, href }: ServiceCardProps) {
  return (
    <details className="service-row">
      <summary className="service-summary">
        <span className="service-number">{number}</span>
        <span className="service-title" role="heading" aria-level={3}>{title}</span>
        <span className="service-toggle" aria-hidden="true">+</span>
      </summary>
      <div className="service-details">
        <p>{copy}</p>
        <a href={href}>{bookingLabel} <span aria-hidden="true">↗</span></a>
      </div>
    </details>
  );
}
