import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const alt = "Dibakar Roy — Neural Engineering, BCI, EEG, and Biomedical Machine Learning";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        overflow: "hidden",
        background: "#090a10",
        color: "#f3f1f8",
        padding: "76px 82px",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ position: "absolute", inset: 0, display: "flex", opacity: 0.22, background: "linear-gradient(135deg, #090a10 32%, #32265f 70%, #123b3a 100%)" }} />
      <div style={{ position: "absolute", width: 620, height: 620, borderRadius: 620, right: -80, top: -210, display: "flex", border: "1px solid rgba(144,117,255,.45)", boxShadow: "0 0 120px rgba(144,117,255,.22)" }} />
      <div style={{ position: "absolute", right: 110, top: 105, display: "flex", alignItems: "center" }}>
        {[0, 1, 2, 3].map((index) => (
          <div key={index} style={{ width: index === 1 ? 15 : 10, height: index === 1 ? 15 : 10, marginLeft: 76, borderRadius: 20, display: "flex", background: index % 2 ? "#3de2d0" : "#9075ff", boxShadow: "0 0 24px currentColor" }} />
        ))}
      </div>
      <div style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%" }}>
        <div style={{ display: "flex", alignItems: "center", fontSize: 22, letterSpacing: 4, textTransform: "uppercase", color: "#a891ff" }}>
          <div style={{ width: 52, height: 52, borderRadius: 14, border: "1px solid #9075ff", display: "flex", alignItems: "center", justifyContent: "center", marginRight: 18, fontWeight: 700, letterSpacing: -1 }}>DR</div>
          Research Portfolio
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 78, fontWeight: 700, letterSpacing: -4, lineHeight: 1 }}>Dibakar Roy</div>
          <div style={{ fontSize: 34, color: "#c4c1ce", marginTop: 18 }}>Neural Engineering · BCI · EEG</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", fontSize: 22, color: "#7f7d8b" }}>
          Electrical &amp; Computer Engineering Graduate
          <div style={{ width: 7, height: 7, borderRadius: 10, background: "#3de2d0", margin: "0 16px" }} />
          Biomedical Machine Learning
        </div>
      </div>
    </div>,
    size,
  );
}
