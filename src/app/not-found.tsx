import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";

export default function NotFound() {
  return <section className="page-intro"><Container><p className="eyebrow">404 / PAGE NOT FOUND</p><h1>Let&apos;s find your way back.</h1><p className="lead">This page does not exist. Explore the portfolio or return to the homepage.</p><div className="cta-row"><ButtonLink href="/">Return home</ButtonLink><ButtonLink href="/portfolio" variant="secondary">Explore portfolio</ButtonLink></div></Container></section>;
}
