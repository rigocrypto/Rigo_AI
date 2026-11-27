export const interests = [
  "Investment",
  "Pilot RealSona AI",
  "Strategic Partnership",
  "Technology Collaboration",
  "Venezuela Expansion",
  "General Inquiry",
] as const;

export type ContactInterest = typeof interests[number];

export const investor = {
  title: "Building the infrastructure. Looking for the right partners.",
  description: "A conversation about what comes next: focused validation, thoughtful pilots and a shared long-term vision.",
  actions: [
    { label: "Discuss Investment", href: "/invest" },
    { label: "Pilot RealSona AI", href: "/contact?interest=Pilot%20RealSona%20AI" },
    { label: "Strategic Partnership", href: "/contact?interest=Strategic%20Partnership" },
  ],
  priorities: [
    { title: "Problem discovery", status: "RESEARCH", description: "Explore industry workflows and the business problems worth solving." },
    { title: "Pilot design", status: "ROADMAP", description: "Define bounded use cases and evaluation criteria for future pilots." },
    { title: "Business model", status: "VALIDATION", description: "Validate demand, delivery costs and a sustainable commercial model." },
  ],
} as const;
