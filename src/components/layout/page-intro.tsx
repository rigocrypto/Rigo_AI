import { Container } from "@/components/ui/container";
import type { PageContent } from "@/types/site";

export function PageIntro({ content }: { content: PageContent }) {
  return <section className="page-intro"><Container><p className="eyebrow">{content.eyebrow}</p><h1>{content.title}</h1><p className="lead">{content.description}</p></Container></section>;
}
