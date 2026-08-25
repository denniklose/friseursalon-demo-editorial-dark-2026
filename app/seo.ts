import type { Metadata } from "next";
import { salonConfig, type RouteKey } from "../config/salon";

export function pageMetadata(route: RouteKey): Metadata {
  const page = salonConfig.seo.pages[route];
  const canonical = salonConfig.seo.baseUrl
    ? new URL(page.path, salonConfig.seo.baseUrl).toString()
    : "";
  return {
    title: page.title,
    description: page.description,
    ...(canonical ? { alternates: { canonical } } : {}),
    openGraph: {
      title: page.title,
      description: page.description,
      type: "website",
      locale: salonConfig.identity.locale.replace("-", "_"),
      ...(canonical ? { url: canonical } : {}),
    },
    robots: "noindex, nofollow, noarchive",
  };
}
