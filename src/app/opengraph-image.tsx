import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Tejpal Smarak Inter College — Missa Baragaon, Ayodhya";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          background: "#0f172a",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Left side — colored block */}
        <div
          style={{
            width: "520px",
            height: "630px",
            background: "linear-gradient(160deg, #1e40af 0%, #1e3a8a 50%, #0f172a 100%)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "60px 50px",
            position: "relative",
          }}
        >
          {/* Orange accent top */}
          <div style={{ width: "60px", height: "5px", background: "#f97316", borderRadius: "4px", marginBottom: "32px" }} />

          {/* School name */}
          <div style={{ fontSize: "48px", fontWeight: 800, color: "#ffffff", lineHeight: 1.1, marginBottom: "16px" }}>
            Tejpal Smarak
          </div>
          <div style={{ fontSize: "48px", fontWeight: 800, color: "#f97316", lineHeight: 1.1, marginBottom: "28px" }}>
            Inter College
          </div>

          {/* Tagline */}
          <div style={{ fontSize: "18px", color: "#93c5fd", lineHeight: 1.5, marginBottom: "40px" }}>
            Quality Education from Nursery to Class 12 in Missa Baragaon, Ayodhya
          </div>

          {/* UP Board badge */}
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(249,115,22,0.15)",
            border: "1px solid rgba(249,115,22,0.4)",
            borderRadius: "8px",
            padding: "10px 18px",
            width: "fit-content",
          }}>
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#f97316" }} />
            <span style={{ color: "#fb923c", fontSize: "14px", fontWeight: 600, letterSpacing: "0.1em" }}>
              UP BOARD AFFILIATED — EST. 2011
            </span>
          </div>
        </div>

        {/* Right side — stats + info */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "60px 50px",
            gap: "24px",
          }}
        >
          {/* Stats */}
          {[
            { value: "300+", label: "Students Enrolled", color: "#f97316" },
            { value: "Nursery — 12", label: "All Classes", color: "#60a5fa" },
            { value: "7 Teachers", label: "Experienced Faculty", color: "#34d399" },
            { value: "Ayodhya, UP", label: "Missa Baragaon", color: "#a78bfa" },
          ].map((stat, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <div style={{ width: "4px", height: "40px", background: stat.color, borderRadius: "4px", flexShrink: 0 }} />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontSize: "28px", fontWeight: 700, color: stat.color, lineHeight: 1 }}>{stat.value}</span>
                <span style={{ fontSize: "14px", color: "#94a3b8", marginTop: "4px" }}>{stat.label}</span>
              </div>
            </div>
          ))}

          {/* Divider */}
          <div style={{ height: "1px", background: "rgba(255,255,255,0.08)", marginTop: "8px" }} />

          {/* Contact */}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <span style={{ fontSize: "14px", color: "#64748b" }}>Admissions Open for 2026-27</span>
            <span style={{ fontSize: "16px", color: "#e2e8f0", fontWeight: 500 }}>+91 99357 48696</span>
          </div>
        </div>

        {/* Bottom orange bar */}
        <div style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "4px",
          background: "linear-gradient(90deg, #f97316, #ea580c, #f97316)",
        }} />
      </div>
    ),
    { ...size }
  );
}