import { ImageResponse } from "next/og";

export const alt = "Nashco Rentals — 24/7 Bare Rental Dispatch for Texas Megaprojects";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background:
            "linear-gradient(135deg, #0a0d14 0%, #10141c 55%, #0a0d14 100%)",
          fontFamily: "system-ui, sans-serif",
          color: "#C0C5CE",
          position: "relative",
        }}
      >
        {/* Cobalt glow top-right */}
        <div
          style={{
            position: "absolute",
            top: -180,
            right: -180,
            width: 560,
            height: 560,
            borderRadius: 9999,
            background:
              "radial-gradient(circle, rgba(37,99,235,0.40) 0%, rgba(10,13,20,0) 70%)",
          }}
        />

        {/* Brand lockup — div-based NR + wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              width: 84,
              height: 84,
              borderRadius: 16,
              background: "#05070c",
              border: "2px solid rgba(255,255,255,0.06)",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ display: "flex", gap: 2 }}>
              <span style={{ color: "#C0C5CE", fontSize: 40, fontWeight: 900, letterSpacing: "-2px" }}>
                N
              </span>
              <span style={{ color: "#1E5BC6", fontSize: 40, fontWeight: 900, letterSpacing: "-2px" }}>
                R
              </span>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontSize: 40,
                fontWeight: 800,
                letterSpacing: "0.02em",
                color: "#C0C5CE",
                lineHeight: 1,
              }}
            >
              NASHCO
            </div>
            <div
              style={{
                fontSize: 20,
                fontWeight: 700,
                letterSpacing: "0.32em",
                color: "#1E5BC6",
                marginTop: 6,
              }}
            >
              RENTALS
            </div>
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              display: "flex",
              fontSize: 22,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.24em",
              color: "#1E5BC6",
            }}
          >
            Bare Rental Dispatch · Texas Megaprojects
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 78,
              fontWeight: 800,
              lineHeight: 1.04,
              letterSpacing: "-0.02em",
            }}
          >
            <span style={{ color: "#d3d8e0" }}>Iron On Time. On Spec.</span>
            <span style={{ color: "#C0C5CE" }}>On Texas Megaprojects.</span>
          </div>
        </div>

        {/* Footer row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 22,
            color: "#9aa3b2",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: 28,
          }}
        >
          <div style={{ display: "flex", gap: 20 }}>
            <span>Reliability</span>
            <span style={{ color: "#4b5563" }}>·</span>
            <span>Partnership</span>
            <span style={{ color: "#4b5563" }}>·</span>
            <span>Discipline</span>
          </div>
          <div style={{ display: "flex", color: "#C0C5CE", fontWeight: 600 }}>
            rentnashco.com
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
