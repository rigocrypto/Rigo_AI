import Link from "next/link";
import type { ComponentProps } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = ComponentProps<typeof Link> & { variant?: "primary" | "secondary" | "text"; arrow?: boolean };

export function ButtonLink({ className, children, variant = "primary", arrow = true, ...props }: ButtonLinkProps) {
  return <Link className={cn("button", "button-" + variant, className)} {...props}>{children}{arrow && <ArrowUpRight size={17} aria-hidden="true" />}</Link>;
}

export function Button({ className, ...props }: ComponentProps<"button">) {
  return <button className={cn("button button-primary", className)} {...props} />;
}
