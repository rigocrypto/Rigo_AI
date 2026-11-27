import type { PageContent, SitePath } from "@/types/site";

// One source for every absolute URL. No environment file is required locally.
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
export const siteOrigin = new URL(siteUrl);
export const isPublicSite = siteOrigin.protocol === "https:" &&
  !["localhost", "127.0.0.1", "[::1]"].includes(siteOrigin.hostname);

export const site = {
  name: "RigoCrypto",
  title: "RigoCrypto | AI, Web3 & RealSona AI Founder Portfolio",
  description: "Explore RigoCrypto's AI, Web3 and SaaS portfolio, including RealSona AI, VenEcoTours, InmoVnzla and intelligent infrastructure for modern businesses.",
  hero: {
    eyebrow: "RIGOCRYPTO · AI + WEB3 VENTURE BUILDER",
    title: "Building Intelligent Infrastructure for the Next Economy.",
    description: "AI, Web3 and decentralized technology products designed to solve real-world business problems.",
  },
  vision: {
    title: "Venezuela has talent. Technology can multiply its potential.",
    description: "RealSona AI is being designed with a vision of giving Venezuelan entrepreneurs and businesses access to modern AI infrastructure while building products capable of competing beyond the local market.",
    sectors: ["Tourism", "Real Estate", "SMEs", "Services", "Agriculture", "Digital Commerce"],
    expansion: "Venezuela → LATAM → Global",
  },
} as const;

export const pages: Record<Exclude<SitePath, "/">, PageContent> = {
  "/realsona": {
    eyebrow: "FLAGSHIP PLATFORM / IN DEVELOPMENT",
    title: "One AI Platform. Multiple Industries.",
    description: "Explore the planned RealSona AI architecture: specialized agents, controlled workflows and shared intelligence for industry applications.",
  },
  "/ventures": {
    eyebrow: "VENTURE ECOSYSTEM",
    title: "Focused problems. Connected possibilities.",
    description: "Explore VenEcoTours, InmoVnzla and AgencyGrowthAI: initiatives applying intelligent infrastructure to distinct business problems.",
  },
  "/portfolio": {
    eyebrow: "ENGINEERING PORTFOLIO",
    title: "Ideas, expressed through engineering.",
    description: "A first look at RigoCrypto's AI, SaaS and Web3 project portfolio, with explicit development stages and scope.",
  },
  "/venezuela": {
    eyebrow: "LOCAL ROOTS / GLOBAL AMBITION",
    title: site.vision.title,
    description: "A technology vision for Venezuela: connect entrepreneurial talent with modern AI infrastructure across tourism, real estate and business services.",
  },
  "/about": {
    eyebrow: "THE BUILDER",
    title: "Rigo Vivas Zuloaga.",
    description: "Meet the founder behind RigoCrypto and the RealSona AI vision, building across AI, Web3, SaaS and business automation.",
  },
  "/invest": {
    eyebrow: "INVESTMENT & PARTNERSHIPS",
    title: "Build the next chapter with us.",
    description: "Explore the RealSona AI thesis, future validation priorities and opportunities for investment, pilots and strategic collaboration.",
  },
  "/contact": {
    eyebrow: "START A CONVERSATION",
    title: "What could we build together?",
    description: "Prepare an inquiry about RealSona AI, investment, pilots or technology collaboration using this local contact form demonstration.",
  },
};
