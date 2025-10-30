import React from "react";
import { useNavigate } from "react-router-dom";

const imgStyle = {
  maxWidth: "900px",
  width: "100%",
  margin: "32px auto",
  display: "block",
  boxShadow: "0 8px 32px rgba(30,30,30,0.2)",
  borderRadius: "16px",
};

export default function CvOnline() {
  const navigate = useNavigate();
  return (
    <div style={{ background: "#f6f8fa", minHeight: "100vh", paddingTop: 20, paddingBottom: 40 }}>
      <button
        style={{
          margin: "20px auto 0 24px",
          background: "#23272f",
          color: "#ffd600",
          fontWeight: "bold",
          border: "none",
          borderRadius: 8,
          padding: "8px 24px",
          fontSize: 18,
          boxShadow: "0 2px 10px rgba(30,30,30,0.12)",
          display: "inline-block",
          cursor: "pointer",
        }}
        onClick={() => navigate("/")}
      >
        ← Back to home page
      </button>
      <h1 style={{ textAlign: "center", fontWeight: "bold", fontSize: 36, margin: "24px 0 4px 0", letterSpacing: 1 }}>
        NGUYỄN THÀNH NHÂN — FULLSTACK DEVELOPER
      </h1>
      <h3 style={{ textAlign: "center", marginBottom: 28, color: "#444", letterSpacing: 1 }}>
        Resume &amp; Career
      </h3>
      <img src="/cv1.jpg" alt="CV page 1" style={imgStyle} loading="lazy" decoding="async" />
      <img src="/cv2.jpg" alt="CV page 2" style={imgStyle} loading="lazy" decoding="async" />
      <img src="/cv3.jpg" alt="CV page 3" style={imgStyle} loading="lazy" decoding="async" />
    </div>
  );
}
