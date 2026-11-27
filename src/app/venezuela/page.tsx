import { pages } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";
import { PageIntro } from "@/components/layout/page-intro";
import { Vision } from "@/components/sections/vision";
import { InvestorCta } from "@/components/sections/investor-cta";

const content = pages["/venezuela"];
export const metadata = pageMetadata("/venezuela", "Venezuela Technology Vision", content.description);

export default function Page() {
  return <><PageIntro content={{ ...content, title: "Rooted in Venezuela. Designed to reach further." }} /><Vision expanded /><InvestorCta /></>;
}
