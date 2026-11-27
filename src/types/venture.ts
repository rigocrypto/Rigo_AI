import type { Project } from "./project";

export interface Venture extends Project {
  number: string;
  focus: string;
  tone: "teal" | "gold" | "blue";
}
