import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { VentureCard } from "@/components/ventures/venture-card";
import { ventures } from "@/data/ventures";

export function Ventures() {
  return <section className="section"><Container><SectionHeading eyebrow="02 / FEATURED VENTURES" title="Different industries. A shared ambition." description="Focused initiatives exploring where intelligent infrastructure can make a practical difference." /><div className="venture-grid">{ventures.map((venture) => <VentureCard key={venture.id} venture={venture} />)}</div></Container></section>;
}
