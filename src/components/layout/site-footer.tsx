import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { navigation } from "@/data/navigation";
import { founder } from "@/data/founder";

export function SiteFooter() {
  return <footer className="site-footer"><Container>
    <div className="footer-top"><div><Link href="/" className="brand">RigoCrypto<span className="brand-dot">.</span></Link><p>Intelligent infrastructure.<br />Entrepreneurial ambition.</p></div><nav aria-label="Footer navigation">{navigation.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}<Link href="/contact">Contact <ArrowUpRight size={14} aria-hidden="true" /></Link></nav></div>
    <div className="footer-bottom"><p>© {new Date().getFullYear()} {founder.brand} · {founder.name}</p><p>Built with intention. Projects in progress.</p><Link href="#top">Back to top ↑</Link></div>
  </Container></footer>;
}
