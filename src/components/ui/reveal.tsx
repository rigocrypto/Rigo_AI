"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} initial={false}
    whileInView={reduced ? undefined : { y: [12, 0], opacity: [0.88, 1] }}
    viewport={{ once: true, amount: 0.12 }}
    transition={{ duration: 0.45, ease: "easeOut" }}>{children}</motion.div>;
}
