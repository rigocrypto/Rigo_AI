import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { Ecosystem } from "./ecosystem";

export function Overview() {
  return <section className="section section-surface"><Container><div className="section-intro"><SectionHeading eyebrow="01 / THE FOUNDATION" title="One AI Platform. Multiple Industries." description="A shared foundation for specialized applications. Designed to connect business context, intelligent agents and controlled execution." /><ButtonLink href="/realsona" variant="text">Inside RealSona AI</ButtonLink></div><Reveal><Ecosystem /></Reveal></Container></section>;
}
