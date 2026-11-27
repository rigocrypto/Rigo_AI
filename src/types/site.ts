export type SitePath = "/" | "/realsona" | "/ventures" | "/portfolio" | "/venezuela" | "/about" | "/invest" | "/contact";

export interface NavigationItem {
  label: string;
  href: SitePath;
}

export interface PageContent {
  eyebrow: string;
  title: string;
  description: string;
}
