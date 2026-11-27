import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { Ecosystem } from "./ecosystem";
import { site } from "@/data/site";
import { founder } from "@/data/founder";
import { focusAreas } from "@/data/skills";

export function Hero() {
  return <section className="hero"><Container>
    <div className="hero-grid"><Reveal className="hero-copy"><p className="eyebrow">{site.hero.eyebrow}</p><h1>Building Intelligent Infrastructure for the <span>Next Economy.</span></h1><p className="hero-description">{site.hero.description}</p><p className="founder-line"><span aria-hidden="true" />{founder.name} · {founder.role}</p><div className="hero-actions"><ButtonLink href="/realsona">Explore RealSona AI</ButtonLink><ButtonLink href="/portfolio" variant="secondary">View Portfolio</ButtonLink><ButtonLink href="/invest" variant="text">Investment &amp; Partnerships</ButtonLink></div></Reveal><Reveal className="hero-visual"><Ecosystem compact /></Reveal></div>
    <div className="hero-bottom"><span className="eyebrow">BUILDING AT THE INTERSECTION</span><ul>{focusAreas.map((area) => <li key={area}>{area}</li>)}</ul><span className="scroll-cue" aria-hidden="true">EXPLORE BELOW ↓</span></div>
  </Container></section>;
}
