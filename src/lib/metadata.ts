import type { Metadata } from "next";
import { site, siteOrigin } from "@/data/site";
import type { SitePath } from "@/types/site";

export function pageMetadata(path: SitePath, title: string, description: string): Metadata {
  const url = new URL(path, siteOrigin);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { type: "website", siteName: site.name, title, description, url, images: [{ url: new URL("/opengraph-image", siteOrigin), width: 1200, height: 630, alt: "RigoCrypto — AI, Web3 and RealSona AI" }] },
    twitter: { card: "summary_large_image", title, description, images: [new URL("/opengraph-image", siteOrigin).href] },
  };
}
