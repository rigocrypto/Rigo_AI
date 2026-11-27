import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = "RigoCrypto — Intelligent infrastructure for the next economy";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(<div style={{ width: "100%", height: "100%", background: "#070f18", color: "#edf4f8", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 70, border: "1px solid #2c4050" }}>
    <div style={{ display: "flex", fontSize: 30, color: "#72e6df" }}>{site.name} / RealSona AI</div>
    <div style={{ display: "flex", fontSize: 67, letterSpacing: -3, maxWidth: 1000 }}>Building Intelligent Infrastructure for the Next Economy.</div>
    <div style={{ display: "flex", justifyContent: "space-between", color: "#a5b6c6", fontSize: 22 }}><span>AI · Web3 · SaaS · Automation</span><span>Founder Portfolio</span></div>
  </div>, size);
}
