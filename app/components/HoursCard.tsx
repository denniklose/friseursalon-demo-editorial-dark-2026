import { hours, salonConfig, site } from "../site-data";

export default function HoursCard() {
  return <div className="hours-panel" aria-label="Öffnungszeiten"><div className="hours-title"><span>Öffnungszeiten</span><small>{site.name}</small></div><dl>{hours.map((item) => <div key={item.label}><dt>{item.label}</dt><dd>{item.time}</dd></div>)}</dl><p className="hours-note">{site.name} · {site.address[1]}<br />{salonConfig.hoursNote}</p></div>;
}
