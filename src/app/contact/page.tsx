import { pages } from "@/data/site";
import { interests } from "@/data/investor";
import { pageMetadata } from "@/lib/metadata";
import { PageIntro } from "@/components/layout/page-intro";
import { Container } from "@/components/ui/container";
import { ContactForm } from "@/components/contact/contact-form";

const content = pages["/contact"];
export const metadata = pageMetadata("/contact", "Contact & Collaboration", content.description);

export default async function Page({ searchParams }: { searchParams: Promise<{ interest?: string | string[] }> }) {
  const query = await searchParams;
  const initialInterest = interests.find((interest) => interest === query.interest);
  return <><PageIntro content={content} /><section className="page-content"><Container className="contact-layout"><ContactForm initialInterest={initialInterest} /><aside className="contact-aside"><p className="eyebrow">A FOCUSED FIRST STEP</p><h2>Share the problem.<br />Explore the possibility.</h2><p>Use this demo to outline your goals, the context and what a useful next conversation could cover. Message delivery is not connected yet.</p><ul>{interests.map((interest) => <li key={interest}>{interest}</li>)}</ul></aside></Container></section></>;
}
