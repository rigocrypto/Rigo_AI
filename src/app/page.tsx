import { Hero } from "@/components/sections/hero";
import { Overview } from "@/components/sections/overview";
import { Ventures } from "@/components/sections/ventures";
import { Portfolio } from "@/components/sections/portfolio";
import { Vision } from "@/components/sections/vision";
import { InvestorCta } from "@/components/sections/investor-cta";
import { pageMetadata } from "@/lib/metadata";
import { site, siteOrigin } from "@/data/site";
import { founder } from "@/data/founder";

export const metadata = { ...pageMetadata("/", site.title, site.description), title: { absolute: site.title } };

export default function Home() {
  const base = siteOrigin.origin;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Person", "@id": base + "/#founder", name: founder.name, jobTitle: founder.role, url: base + "/about" },
      { "@type": "Organization", "@id": base + "/#organization", name: site.name, url: base, founder: { "@id": base + "/#founder" } },
      { "@type": "WebSite", "@id": base + "/#website", name: site.name, url: base, description: site.description, publisher: { "@id": base + "/#organization" } },
    ],
  };
  // Only trusted local data; escape "<" to prevent script termination if copy changes.
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} /><Hero /><Overview /><Ventures /><Portfolio /><Vision /><InvestorCta /></>;
}
