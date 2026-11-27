import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { site } from "@/data/site";

export function Vision({ expanded = false }: { expanded?: boolean }) {
  return <section className={"section vision-section" + (expanded ? " vision-expanded" : "")}><Container className="vision-grid"><div className="vision-emblem" aria-hidden="true"><div className="latitude-lines" /><span className="vision-coordinate">10° N / 66° W</span><strong>VE<span>↗</span></strong><span className="vision-route">LOCAL ROOTS.<br />GLOBAL POSSIBILITIES.</span><div className="flag-line"><i /><i /><i /></div></div><div><p className="eyebrow">04 / VENEZUELA VISION</p><h2>{site.vision.title}</h2><p className="lead">{site.vision.description}</p><ul className="sector-list">{site.vision.sectors.map((sector) => <li key={sector}>{sector}</li>)}</ul><p className="expansion">{site.vision.expansion}</p>{!expanded && <ButtonLink href="/venezuela" variant="text">Explore the vision</ButtonLink>}</div></Container></section>;
}
