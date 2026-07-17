import { ImageResponse } from "next/og";

export const alt = "ZH PACK custom EPE foam packaging solutions";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#222222",
          color: "#ffffff",
          fontFamily: "Arial, sans-serif",
          padding: "72px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            opacity: 0.14,
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
            <div
              style={{
                width: "56px",
                height: "56px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#1b8f3a",
                fontSize: "18px",
                fontWeight: 700,
              }}
            >
              ZH
            </div>
            <div style={{ display: "flex", fontSize: "28px", fontWeight: 700 }}>ZH PACK</div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", maxWidth: "920px" }}>
            <div
              style={{
                display: "flex",
                color: "#45c366",
                fontSize: "18px",
                fontWeight: 700,
                letterSpacing: "4px",
                textTransform: "uppercase",
              }}
            >
              Professional Manufacturer
            </div>
            <div
              style={{
                display: "flex",
                marginTop: "22px",
                fontSize: "72px",
                lineHeight: 1,
                fontWeight: 700,
                letterSpacing: "-4px",
              }}
            >
              Custom EPE Foam Packaging Solutions
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "24px", color: "#aeb5b0", fontSize: "18px" }}>
            <span>Raw Material</span>
            <span style={{ color: "#1b8f3a" }}>·</span>
            <span>Precision Cutting</span>
            <span style={{ color: "#1b8f3a" }}>·</span>
            <span>OEM / ODM</span>
            <span style={{ color: "#1b8f3a" }}>·</span>
            <span>zhonghuanpackaging.com</span>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            right: "72px",
            top: "72px",
            width: "150px",
            height: "150px",
            display: "flex",
            borderTop: "3px solid #1b8f3a",
            borderRight: "3px solid #1b8f3a",
          }}
        />
      </div>
    ),
    size,
  );
}
