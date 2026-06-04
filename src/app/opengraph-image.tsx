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
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 60%, #0f172a 100%)",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Subtle background pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 20% 50%, rgba(249,115,22,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.05) 0%, transparent 40%)",
          }}
        />

        {/* Top badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            background: "rgba(249,115,22,0.2)",
            border: "1px solid rgba(249,115,22,0.4)",
            borderRadius: "100px",
            padding: "8px 24px",
            marginBottom: "32px",
          }}
        >
          <span style={{ color: "#fb923c", fontSize: "16px", fontWeight: 600, letterSpacing: "0.15em" }}>
            UP BOARD AFFILIATED — EST. 2011
          </span>
        </div>

        {/* School name */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "24px",
          }}
        >
          <span
            style={{
              fontSize: "64px",
              fontWeight: 800,
              color: "#ffffff",
              textAlign: "center",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Tejpal Smarak
          </span>
          <span
            style={{
              fontSize: "64px",
              fontWeight: 800,
              color: "#fb923c",
              textAlign: "center",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Inter College
          </span>
        </div>

        {/* Hindi tagline */}
        <div
          style={{
            fontSize: "28px",
            color: "#bfdbfe",
            marginBottom: "40px",
            textAlign: "center",
          }}
        >
          शिक्षा से सशक्तिकरण — गाँव से उज्ज्वल भविष्य तक
        </div>

        {/* Stats row */}
        <div
          style={{
            display: "flex",
            gap: "48px",
            background: "rgba(255,255,255,0.07)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "16px",
            padding: "20px 48px",
          }}
        >
          {[
            { value: "300+", label: "Students" },
            { value: "Nursery–12", label: "All Classes" },
            { value: "Ayodhya, UP", label: "Location" },
          ].map((stat, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <span style={{ fontSize: "24px", fontWeight: 700, color: "#fb923c" }}>
                {stat.value}
              </span>
              <span style={{ fontSize: "14px", color: "#93c5fd" }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom URL */}
        <div
          style={{
            position: "absolute",
            bottom: "28px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span style={{ color: "#64748b", fontSize: "16px" }}>
            tpsic-website.vercel.app
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}