"use client";

import "./CTABanner.css";

export default function CTABanner({ onOpenContact }) {
  return (
    <section className="vl-section vl-cta-section" aria-label="Start a software project">
      <div className="vl-container">
        <div className="vl-cta-box">
          {/* BACKGROUND AMBIENT VIDEO */}
          <video
            src="https://framerusercontent.com/assets/KcHC4vOiUqiIIQeDrfDHir3qY.mp4"
            poster="https://framerusercontent.com/images/tMTA1vKtPMp9H2MVL1eQNaXYus.webp?width=1280&height=720"
            autoPlay
            loop
            muted
            playsInline
            className="vl-cta-video"
          />
          <div className="vl-cta-shade" />

          {/* VIEWFINDER CORNERS */}
          <div className="vl-corner vl-corner-tl" />
          <div className="vl-corner vl-corner-tr" />
          <div className="vl-corner vl-corner-br" />
          <div className="vl-corner vl-corner-bl" />

          {/* INNER CONTENT */}
          <div className="vl-cta-content">
            {/* TOP BAR */}
            <div className="vl-cta-top">
              <div className="vl-cta-brand">
                <span className="vl-cta-logo-text">MHD AFSAL</span>
                <span className="vl-cta-dash" />
                <span className="vl-cta-subtext">Let’s Build Together</span>
              </div>

              <div className="vl-hud-chips">
                <span className="vl-hud-chip">FULL-STACK</span>
                <span className="vl-hud-chip">NEXT.JS 15</span>
              </div>
            </div>

            {/* BOTTOM ROW */}
            <div className="vl-cta-bottom">
              <h3 className="vl-cta-headline">
                MAKE THE PRODUCT IMPOSSIBLE TO IGNORE.
              </h3>

              <div className="vl-cta-side">
                <p className="vl-cta-desc">
                  You bring the idea. I’ll engineer the system architecture, frontend experience, and backend APIs to make it real.
                </p>

                <button
                  type="button"
                  className="vl-btn-action vl-cta-btn"
                  onClick={onOpenContact}
                >
                  <span>Build with me</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
