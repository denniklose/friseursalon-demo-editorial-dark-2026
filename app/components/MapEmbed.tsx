"use client";
import { useState } from "react";
import { salonConfig, site } from "../site-data";

type MapEmbedProps = { directionsUrl: string; embedUrl: string; title: string };

export default function MapEmbed({ directionsUrl, embedUrl, title }: MapEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const canLoadMap = salonConfig.map.mode === "consent" && Boolean(embedUrl);
  if (isLoaded && canLoadMap) return <div className="map-embed map-embed-loaded"><iframe title={title} src={embedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" /><a href={directionsUrl || "#kartenhinweis"} target={directionsUrl ? "_blank" : undefined} rel={directionsUrl ? "noreferrer" : undefined}>{salonConfig.map.routeLabel} <span aria-hidden="true">↗</span></a></div>;
  return <div className="map-consent-card" id="kartenhinweis"><div><span className="map-pin" aria-hidden="true">⌖</span><p className="section-kicker">Anfahrt zum Salon</p><strong>{site.name}<br />{site.address[0]}<br />{site.address[1]}</strong><p>{salonConfig.map.consentCopy}</p></div><div className="map-consent-actions">{directionsUrl ? <a className="text-link text-link-light" href={directionsUrl} target="_blank" rel="noreferrer">{salonConfig.map.routeLabel} <span aria-hidden="true">↗</span></a> : null}<button className="button button-light" type="button" disabled={!canLoadMap} onClick={() => setIsLoaded(true)}>{canLoadMap ? salonConfig.map.consentLabel : "Karte folgt nach Freigabe"}</button></div></div>;
}
