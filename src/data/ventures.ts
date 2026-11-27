import { getProject } from "@/data/projects";
import type { Venture } from "@/types/venture";

export const ventures: readonly Venture[] = [
  { ...getProject("venecotours"), number: "01", focus: "DISCOVER VENEZUELA", tone: "teal" },
  { ...getProject("inmovnzla"), number: "02", focus: "PROPERTY INTELLIGENCE", tone: "gold" },
  { ...getProject("agencygrowthai"), number: "03", focus: "AGENCY OPERATIONS", tone: "blue" },
];
