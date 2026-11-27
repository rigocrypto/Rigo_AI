import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button";
import { ProjectCard } from "@/components/projects/project-card";
import { selectedProjects } from "@/data/projects";

export function Portfolio() {
  return <section className="section section-surface"><Container><div className="section-intro"><SectionHeading eyebrow="03 / ENGINEERING PORTFOLIO" title="From systems thinking to software." description="A selection of projects across AI and decentralized technology. Each with its current stage made explicit." /><ButtonLink href="/portfolio" variant="text">View all projects</ButtonLink></div><div className="project-grid">{selectedProjects.map((project) => <ProjectCard key={project.id} project={project} />)}</div></Container></section>;
}
