"use client";

import "./EveryFrame.css";

export default function EveryFrame() {
  return (
    <section className="vl-section vl-everyframe-section" aria-label="Every line of code has a purpose">
      <div className="vl-container">
        <div className="vl-everyframe-box">
          {/* BACKGROUND VIDEO */}
          <video
            src="https://framerusercontent.com/assets/yaiOngyixD5Kxcg6GPryCEQ635w.mp4"
            poster="https://framerusercontent.com/images/a6Fk6OHxF9EMJXHZ7Qdi9colz6I.webp?width=1280&height=720"
            autoPlay
            loop
            muted
            playsInline
            className="vl-everyframe-video"
          />

          <div className="vl-everyframe-shade" />

          {/* VIEWFINDER CORNERS */}
          <div className="vl-corner vl-corner-tl" />
          <div className="vl-corner vl-corner-tr" />
          <div className="vl-corner vl-corner-br" />
          <div className="vl-corner vl-corner-bl" />

          {/* CODE / TECH HUD */}
          <div className="vl-hud">
            <div className="vl-hud-rec">
              <span className="vl-hud-dot" />
              <span className="vl-hud-rec-text">PRODUCTION STANDARD</span>
            </div>
            <div className="vl-hud-bottom">
              <div className="vl-hud-chips">
                <span className="vl-hud-chip">CLEAN ARCHITECTURE</span>
                <span className="vl-hud-chip">TYPE-SAFE</span>
              </div>
              <span className="vl-hud-time">00:03:42</span>
            </div>
          </div>

          {/* TEXT OVERLAY */}
          <div className="vl-everyframe-content">
            <h2 className="vl-everyframe-title">
              EVERY LINE OF CODE HAS A PURPOSE.
            </h2>
            <p className="vl-everyframe-sub">
              From the database query to the final frontend animation, I obsess over writing clean, maintainable, and high-performance code that makes software a joy to use.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
