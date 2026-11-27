import { pages } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";
import { PageIntro } from "@/components/layout/page-intro";
import { Container } from "@/components/ui/container";

import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/project-card";

const content = pages["/portfolio"];
export const metadata = pageMetadata("/portfolio", "Engineering Portfolio", content.description);

export default function Page() {
  return <><PageIntro content={content} /><section className="page-content"><Container><div className="project-grid">{projects.map((project) => <ProjectCard key={project.id} project={project} detail />)}</div></Container></section></>;
}
