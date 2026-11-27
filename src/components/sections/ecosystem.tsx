import { Cpu, Network } from "lucide-react";
import { capabilities, verticals } from "@/data/skills";

export function Ecosystem({ compact = false }: { compact?: boolean }) {
  if (compact) return <figure className="ecosystem-preview">
    <div className="diagram-caption"><span className="eyebrow">THE CONNECTED ECOSYSTEM</span><span className="diagram-cross" aria-hidden="true">+</span></div>
    <div className="orbit-field">
      <svg className="orbit-lines" viewBox="0 0 480 400" fill="none" aria-hidden="true">
        <circle cx="240" cy="200" r="145" /><circle cx="240" cy="200" r="92" strokeDasharray="3 7" />
        <path d="M240 200L110 85M240 200L375 85M240 200L92 302M240 200L390 302M240 200L240 350M240 200V43" />
        <path className="bright-line" d="M110 85L240 200L390 302" />
      </svg>
      <div className="core-node"><Cpu size={28} aria-hidden="true" /><strong>RealSona <span>AI</span></strong><small>CORE PLATFORM</small></div>
      <span className="satellite sat-a">AI Agents</span><span className="satellite sat-b">Model Router</span><span className="satellite sat-c">Workflow Engine</span><span className="satellite sat-d">Cost Governor</span>
    </div>
    <div className="diagram-verticals">{verticals.slice(0, 3).map((name) => <span key={name}>{name}</span>)}</div>
    <figcaption><span className="status-dot" aria-hidden="true" />Concept architecture · In development</figcaption>
  </figure>;

  return <div className="architecture">
    <div className="architecture-core"><div className="architecture-label"><Cpu size={22} aria-hidden="true" /><div><span className="eyebrow">CORE PLATFORM</span><h3>RealSona AI</h3></div><span className="architecture-note">Planned capabilities</span></div>
      <ul className="capability-grid">{capabilities.map((item, i) => <li key={item.name}><span className="capability-index">0{i + 1}</span><div><h4>{item.name}</h4><p>{item.description}</p></div></li>)}</ul>
    </div>
    <div className="architecture-bridge" aria-hidden="true"><span /><Network size={22} /><span /></div>
    <div className="architecture-industries"><p className="eyebrow">INDUSTRY APPLICATIONS</p><ul>{verticals.map((name) => <li key={name}>{name}</li>)}</ul><p className="fine-print">Conceptual relationships. Integrations and platform capabilities are planned, not presented as deployed.</p></div>
  </div>;
}
