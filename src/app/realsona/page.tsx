import { pages } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";
import { PageIntro } from "@/components/layout/page-intro";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { Ecosystem } from "@/components/sections/ecosystem";

const content = pages["/realsona"];
export const metadata = pageMetadata("/realsona", "RealSona AI", content.description);

export default function Page() {
  return <><PageIntro content={content} /><section className="page-content"><Container><Ecosystem /><div className="cta-row"><ButtonLink href="/contact?interest=Pilot%20RealSona%20AI">Explore a future pilot</ButtonLink><ButtonLink href="/ventures" variant="secondary">Explore industry ventures</ButtonLink></div></Container></section></>;
}
