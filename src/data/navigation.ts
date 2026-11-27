import type { NavigationItem } from "@/types/site";

export const navigation: readonly NavigationItem[] = [
  { label: "RealSona", href: "/realsona" },
  { label: "Ventures", href: "/ventures" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Venezuela", href: "/venezuela" },
  { label: "About", href: "/about" },
  { label: "Invest", href: "/invest" },
];

export const allRoutes: readonly NavigationItem[] = [
  { label: "Home", href: "/" },
  ...navigation,
  { label: "Contact", href: "/contact" },
];
