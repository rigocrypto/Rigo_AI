import { ArrowUpRight, Building2, Mountain, Workflow } from "lucide-react";
import Link from "next/link";
import type { Venture } from "@/types/venture";
import { StatusBadge } from "@/components/ui/status-badge";

const icons = { teal: Mountain, gold: Building2, blue: Workflow };
export function VentureCard({ venture, detail = false }: { venture: Venture; detail?: boolean }) {
  const Icon = icons[venture.tone];
  return <article className={"venture-card tone-" + venture.tone} id={detail ? venture.id : undefined}>
    <div className="venture-art" aria-hidden="true"><div className="art-grid" /><span className="venture-number">{venture.number}</span><Icon strokeWidth={1} /><span className="venture-focus">{venture.focus}</span></div>
    <div className="venture-content"><StatusBadge status={venture.status} /><h3>{venture.name}</h3><p>{venture.description}</p><Link href={detail ? "/contact?interest=Technology%20Collaboration" : venture.href} className="text-link">{detail ? "Discuss this initiative" : "Explore the initiative"}<ArrowUpRight size={17} aria-hidden="true" /></Link></div>
  </article>;
}
