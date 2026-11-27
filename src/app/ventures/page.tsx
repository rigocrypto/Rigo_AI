import { pages } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";
import { PageIntro } from "@/components/layout/page-intro";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { ventures } from "@/data/ventures";
import { VentureCard } from "@/components/ventures/venture-card";

const content = pages["/ventures"];
export const metadata = pageMetadata("/ventures", "Ventures", content.description);

export default function Page() {
  return <><PageIntro content={content} /><section className="page-content"><Container><div className="venture-grid">{ventures.map((venture) => <VentureCard key={venture.id} venture={venture} detail />)}</div><div className="cta-row"><ButtonLink href="/contact?interest=Technology%20Collaboration">Discuss technology collaboration</ButtonLink></div></Container></section></>;
}
