import { pages } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";
import { PageIntro } from "@/components/layout/page-intro";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { founder } from "@/data/founder";
import { focusAreas } from "@/data/skills";

const content = pages["/about"];
export const metadata = pageMetadata("/about", "About Rigo Vivas Zuloaga", content.description);

export default function Page() {
  return <><PageIntro content={content} /><section className="page-content"><Container><div className="about-grid"><div className="prose"><p className="eyebrow">{founder.role}</p><h2>Building with a practical purpose.</h2><p>{founder.introduction}</p><p>{founder.story}</p><p>{founder.vision}</p><div className="cta-row"><ButtonLink href="/portfolio">Explore the work</ButtonLink><ButtonLink href="/contact" variant="secondary">Start a conversation</ButtonLink></div></div><aside className="about-panel"><p className="eyebrow">AREAS OF FOCUS</p><h2>Connected disciplines.</h2><ul>{focusAreas.map((area) => <li key={area}>{area}</li>)}</ul></aside></div></Container></section></>;
}
