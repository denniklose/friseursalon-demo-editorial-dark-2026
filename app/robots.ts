import type { MetadataRoute } from "next";
import { salonConfig } from "../config/salon";

export default function robots(): MetadataRoute.Robots {
  if (salonConfig.preview.enabled || salonConfig.preview.noindex || !salonConfig.seo.baseUrl) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return { rules: { userAgent: "*", allow: "/" }, sitemap: `${salonConfig.seo.baseUrl}/sitemap.xml` };
}
