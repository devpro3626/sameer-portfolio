import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";

export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const HIGHLIGHTS = ["SaaS Platforms", "AI Agents & RAG", "Next.js · Node.js · Python"];

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 72,
        background: "radial-gradient(ellipse at top left, #1c2544 0%, #080a0f 60%)",
        color: "#e8ebf1",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: 999,
            background: "#e8ebf1",
            color: "#080a0f",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 26,
            fontWeight: 700,
          }}
        >
          SB
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#8e98aa" }}>sameerbabar.com</div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <div style={{ fontSize: 84, fontWeight: 700, letterSpacing: -2 }}>{profile.name}</div>
        <div style={{ fontSize: 40, color: "#6b8cff" }}>{profile.role}</div>
      </div>

      <div style={{ display: "flex", gap: 16 }}>
        {HIGHLIGHTS.map((item) => (
          <div
            key={item}
            style={{
              display: "flex",
              padding: "12px 24px",
              borderRadius: 999,
              border: "1px solid rgba(148,163,184,0.3)",
              fontSize: 26,
              color: "#c5ccd8",
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>,
    size,
  );
}
