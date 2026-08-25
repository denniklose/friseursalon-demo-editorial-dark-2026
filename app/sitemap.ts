import type { MetadataRoute } from "next";
import { salonConfig, type RouteKey } from "../config/salon";

export default function sitemap(): MetadataRoute.Sitemap {
  if (salonConfig.preview.enabled || salonConfig.preview.noindex || !salonConfig.seo.baseUrl) return [];

  return (Object.entries(salonConfig.seo.pages) as Array<[RouteKey, (typeof salonConfig.seo.pages)[RouteKey]]>)
    .filter(([route]) => route !== "featuredService" || salonConfig.featuredService.enabled)
    .map(([, page]) => ({ url: new URL(page.path, salonConfig.seo.baseUrl).toString(), lastModified: new Date() }));
}
