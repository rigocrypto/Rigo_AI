import { interests, type ContactInterest } from "@/data/investor";

export interface ContactInput {
  name: string;
  email: string;
  company: string;
  role: string;
  interest: ContactInterest;
  message: string;
  consent: boolean;
}

export interface ContactResult {
  status: "preview";
  message: string;
}

// Deliberately local: no request, persistence, analytics or message delivery.
export async function submitContactForm(input: ContactInput): Promise<ContactResult> {
  if (!input.name.trim() || !input.email.trim() || !input.message.trim() || !input.consent || !interests.includes(input.interest)) {
    throw new Error("Complete the required fields and acknowledge the demo notice.");
  }
  return {
    status: "preview",
    message: "Preview complete. Your inquiry has not been sent or saved. This form is a demonstration; contact delivery will be added in a later stage.",
  };
}
