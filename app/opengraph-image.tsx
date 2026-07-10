import { ImageResponse } from "next/og";
import { SITE } from "@/lib/constants";

export const runtime = "edge";
export const alt = SITE.product;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#07070A",
          backgroundImage:
            "radial-gradient(circle at 50% 0%, rgba(212,175,55,0.25) 0%, rgba(7,7,10,0) 60%)",
          padding: 80,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "linear-gradient(135deg, #F6E6B8 0%, #D4AF37 45%, #8F6A0C 100%)",
              color: "#07070A",
              fontSize: 28,
              fontWeight: 800,
            }}
          >
            P3
          </div>
          <div style={{ fontSize: 32, color: "#FAFAF8", fontWeight: 700 }}>PM3™</div>
        </div>
        <div
          style={{
            fontSize: 60,
            fontWeight: 700,
            color: "#FAFAF8",
            textAlign: "center",
            lineHeight: 1.15,
            maxWidth: 980,
          }}
        >
          Discipline Beats Prediction.
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 28,
            color: "#A8A8B0",
            textAlign: "center",
            maxWidth: 900,
          }}
        >
          {SITE.product}
        </div>
      </div>
    ),
    { ...size }
  );
}
