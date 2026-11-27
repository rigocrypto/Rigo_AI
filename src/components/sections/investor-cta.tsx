import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { investor } from "@/data/investor";

export function InvestorCta() {
  return <section className="section investor-section"><Container><div className="investor-panel"><p className="eyebrow">05 / THE NEXT CHAPTER</p><h2>{investor.title}</h2><p className="lead">{investor.description}</p><div className="cta-row">{investor.actions.map((action, i) => <ButtonLink href={action.href} key={action.label} variant={i === 0 ? "primary" : "secondary"}>{action.label}</ButtonLink>)}</div><span className="investor-corner" aria-hidden="true">↗</span></div></Container></section>;
}
