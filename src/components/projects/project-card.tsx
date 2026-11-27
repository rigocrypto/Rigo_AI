import { ArrowUpRight, Braces } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/types/project";
import { StatusBadge } from "@/components/ui/status-badge";

export function ProjectCard({ project, detail = false }: { project: Project; detail?: boolean }) {
  return <article className="project-card" id={detail ? project.id : undefined}>
    <div className="card-top"><Braces size={22} aria-hidden="true" /><StatusBadge status={project.status} /></div>
    <p className="card-category">{project.category}</p><h3>{project.name}</h3><p>{project.description}</p>
    <div className="card-bottom"><ul className="tags" aria-label="Focus areas">{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul><Link href={detail ? "/contact?interest=Technology%20Collaboration" : project.href} className="icon-link" aria-label={detail ? "Discuss " + project.name : "Explore " + project.name}><ArrowUpRight size={21} aria-hidden="true" /></Link></div>
  </article>;
}
