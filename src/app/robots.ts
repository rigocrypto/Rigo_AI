import type { MetadataRoute } from "next";
import { isPublicSite, siteOrigin } from "@/data/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", ...(isPublicSite ? { allow: "/" } : { disallow: "/" }) },
    sitemap: new URL("/sitemap.xml", siteOrigin).href,
    host: siteOrigin.origin,
  };
}
