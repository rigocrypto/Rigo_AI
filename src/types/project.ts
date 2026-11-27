export type ProjectStatus =
  | "PROJECT"
  | "PROTOTYPE"
  | "IN DEVELOPMENT"
  | "RESEARCH"
  | "ROADMAP"
  | "PILOT"
  | "VALIDATION";

export interface Project {
  id: string;
  name: string;
  category: string;
  status: ProjectStatus;
  description: string;
  tags: readonly string[];
  href: string;
}
