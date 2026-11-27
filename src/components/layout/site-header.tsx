"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navigation } from "@/data/navigation";
import { Container } from "@/components/ui/container";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = () => { if (media.matches) setOpen(false); };
    media.addEventListener("change", closeOnDesktop);
    return () => media.removeEventListener("change", closeOnDesktop);
  }, []);

  return <header ref={header} className="site-header"
    onKeyDown={(event) => { if (event.key === "Escape" && open) { setOpen(false); toggle.current?.focus(); } }}
    onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false); }}>
    <Container className="header-inner">
      <Link href="/" className="brand" aria-label="RigoCrypto home" onClick={() => setOpen(false)}><span className="brand-mark" aria-hidden="true">R<span>.</span></span><span>RigoCrypto<span className="brand-dot">.</span></span></Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        {navigation.map((item) => <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined}>{item.label}</Link>)}
      </nav>
      <Link href="/contact" className="header-cta">Let&apos;s Talk <ArrowUpRight size={15} aria-hidden="true" /></Link>
      <button ref={toggle} type="button" className="menu-toggle" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close navigation" : "Open navigation"} onClick={() => setOpen(!open)}>{open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}</button>
    </Container>
    <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation" hidden={!open}>
      <Container>{navigation.map((item) => <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined} onClick={() => setOpen(false)}>{item.label}<ArrowUpRight size={17} aria-hidden="true" /></Link>)}<Link href="/contact" onClick={() => setOpen(false)}>Let&apos;s Talk <ArrowUpRight size={17} aria-hidden="true" /></Link></Container>
    </nav>
  </header>;
}
