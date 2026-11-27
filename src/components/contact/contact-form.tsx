"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, CheckCircle2, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { interests, type ContactInterest } from "@/data/investor";
import { submitContactForm } from "@/lib/contact";

export function ContactForm({ initialInterest = "General Inquiry" }: { initialInterest?: ContactInterest }) {
  const [state, setState] = useState<"idle" | "pending" | "preview" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const interest = interests.find((value) => value === form.get("interest"));
    if (!interest) return;
    setState("pending");
    try {
      const result = await submitContactForm({
        name: String(form.get("name") ?? ""),
        email: String(form.get("email") ?? ""),
        company: String(form.get("company") ?? ""),
        role: String(form.get("role") ?? ""),
        interest,
        message: String(form.get("message") ?? ""),
        consent: form.get("consent") === "on",
      });
      setFeedback(result.message);
      setState("preview");
    } catch (error: unknown) {
      setFeedback(error instanceof Error ? error.message : "Unable to prepare the preview.");
      setState("error");
    }
  }

  return <form className="contact-form" onSubmit={handleSubmit} aria-describedby="demo-notice" onChange={() => { if (state === "preview" || state === "error") { setState("idle"); setFeedback(""); } }}>
    <div id="demo-notice" className="demo-notice"><Info size={20} aria-hidden="true" /><p><strong>Local demonstration</strong><br />No message is sent or saved. Use sample details to preview the inquiry.</p></div>
    <p className="fine-print">Fields marked * are required.</p>
    <div className="form-grid"><div className="field"><label htmlFor="name">Name *</label><input id="name" name="name" autoComplete="name" required maxLength={100} /></div><div className="field"><label htmlFor="email">Email *</label><input id="email" name="email" type="email" autoComplete="email" required maxLength={254} /></div><div className="field"><label htmlFor="company">Company</label><input id="company" name="company" autoComplete="organization" maxLength={150} /></div><div className="field"><label htmlFor="role">Role</label><input id="role" name="role" autoComplete="organization-title" maxLength={100} /></div></div>
    <div className="field"><label htmlFor="interest">Interest *</label><select id="interest" name="interest" defaultValue={initialInterest} required>{interests.map((interest) => <option key={interest}>{interest}</option>)}</select></div>
    <div className="field"><label htmlFor="message">Message *</label><textarea id="message" name="message" required rows={5} maxLength={4000} placeholder="What would you like to explore?" /></div>
    <label className="checkbox-label"><input name="consent" type="checkbox" required /><span>I consent to using these details for this local preview and understand that nothing will be sent or saved. *</span></label>
    <Button type="submit" disabled={state === "pending"}>{state === "pending" ? "Preparing preview…" : "Preview inquiry"}<ArrowUpRight size={17} aria-hidden="true" /></Button>
    <div role="status" aria-live="polite" aria-atomic="true" className={feedback ? "form-feedback" : undefined}>{feedback && <><CheckCircle2 size={20} aria-hidden="true" /><p>{feedback}</p></>}</div>
  </form>;
}
