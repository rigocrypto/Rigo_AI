import type { Project } from "@/types/project";

export const projects = [
  {
    id: "realsona",
    name: "RealSona AI",
    category: "AI / SaaS",
    status: "IN DEVELOPMENT",
    description: "Multi-tenant AI SaaS infrastructure designed to help businesses deploy specialized AI agents, workflows, operational intelligence and controlled model usage.",
    tags: ["AI", "SaaS", "Automation"],
    href: "/realsona",
  },
  {
    id: "venecotours",
    name: "VenEcoTours",
    category: "Tourism / AI",
    status: "IN DEVELOPMENT",
    description: "Technology initiative exploring intelligent tourism discovery, customer assistance and digital services for Venezuela.",
    tags: ["Tourism", "AI"],
    href: "/ventures#venecotours",
  },
  {
    id: "inmovnzla",
    name: "InmoVnzla",
    category: "Real Estate / AI / Web3",
    status: "IN DEVELOPMENT",
    description: "Digital real-estate initiative exploring intelligent property discovery, lead workflows and future Web3-enabled transaction infrastructure.",
    tags: ["Real Estate", "AI", "Web3"],
    href: "/ventures#inmovnzla",
  },
  {
    id: "agencygrowthai",
    name: "AgencyGrowthAI",
    category: "AI / SaaS",
    status: "PROTOTYPE",
    description: "Multi-tenant SaaS concept for agency lead funnels, appointments, onboarding, campaigns, auditability and operational workflows.",
    tags: ["AI", "SaaS", "Workflows"],
    href: "/ventures#agencygrowthai",
  },
  {
    id: "arbimind",
    name: "ArbiMind",
    category: "AI / Web3",
    status: "IN DEVELOPMENT",
    description: "An AI / Web3 initiative in development. Further technical scope will be documented as it is validated.",
    tags: ["AI", "Web3"],
    href: "/portfolio#arbimind",
  },
  ...["CropFolioCoin-Web3-Dapp", "Libre-Ride-Sharing-Dapp", "defi-real-estate", "hireonchain"].map((name) => ({
    id: name.toLowerCase(),
    name,
    category: "Engineering project",
    status: "PROJECT" as const,
    description: "Engineering portfolio entry. Repository review and technical documentation are planned; implementation details are not yet presented here.",
    tags: ["Engineering"],
    href: "/portfolio#" + name.toLowerCase(),
  })),
] satisfies readonly Project[];

export function getProject(id: string): Project {
  const project = projects.find((item) => item.id === id);
  if (!project) throw new Error("Unknown project: " + id);
  return project;
}

export const selectedProjects = projects.filter((project) =>
  ["realsona", "arbimind", "cropfoliocoin-web3-dapp", "hireonchain"].includes(project.id)
);
