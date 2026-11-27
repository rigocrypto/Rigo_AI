import type { MetadataRoute } from "next";
import { allRoutes } from "@/data/navigation";
import { siteOrigin } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return allRoutes.map(({ href }) => ({
    url: new URL(href, siteOrigin).href,
    changeFrequency: "monthly",
    priority: href === "/" ? 1 : 0.7,
  }));
}
