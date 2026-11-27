import type { Metadata } from "next";
import { site, siteOrigin, isPublicSite } from "@/data/site";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: siteOrigin,
  title: { default: site.title, template: "%s | RigoCrypto" },
  description: site.description,
  robots: { index: isPublicSite, follow: isPublicSite },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body id="top"><a href="#main-content" className="skip-link">Skip to content</a><SiteHeader /><main id="main-content" tabIndex={-1}>{children}</main><SiteFooter /></body></html>;
}
