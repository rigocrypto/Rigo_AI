import { pages } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";
import { PageIntro } from "@/components/layout/page-intro";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { investor } from "@/data/investor";
import { getProject } from "@/data/projects";
import { StatusBadge } from "@/components/ui/status-badge";

const content = pages["/invest"];
export const metadata = pageMetadata("/invest", "Investment & Partnerships", content.description);

export default function Page() {
  return <><PageIntro content={content} /><section className="page-content"><Container><div className="prose"><h2>An infrastructure thesis, built step by step.</h2><p>{getProject("realsona").description}</p><p>RealSona AI is in development. The priorities below describe future work and validation needs, not completed pilots, commercial traction or committed investment.</p></div><div className="info-grid">{investor.priorities.map((priority) => <article className="info-panel" key={priority.title}><StatusBadge status={priority.status} /><h3>{priority.title}</h3><p>{priority.description}</p></article>)}</div><div className="cta-row"><ButtonLink href="/contact?interest=Investment">Discuss Investment</ButtonLink><ButtonLink href="/contact?interest=Pilot%20RealSona%20AI" variant="secondary">Pilot RealSona AI</ButtonLink><ButtonLink href="/contact?interest=Strategic%20Partnership" variant="secondary">Strategic Partnership</ButtonLink></div></Container></section></>;
}
