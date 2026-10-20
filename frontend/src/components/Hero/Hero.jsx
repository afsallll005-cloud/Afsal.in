"use client";

import "./Hero.css";

export default function Hero({
  onOpenContact,
  // ── TWO IMAGE OPTIONS: LAPTOP & PHONE ──
  laptopImage = "/images/Laptop-Hero.png",
  phoneImage = "/images/phone-Hero.png",
}) {
  const handleContactClick = (e) => {
    if (onOpenContact) {
      e.preventDefault();
      onOpenContact();
    }
  };

  return (
    <section className="forma-hero" id="home" aria-label="Hero Section - FORMA STUDIO">
      {/* HERO MEDIA LAYER: DEDICATED LAPTOP & PHONE RESPONSIVE IMAGES */}
      <div className="forma-media-layer">
        <div className="forma-image-wrap">
          <picture className="forma-hero-picture">
            {/* PHONE SIZE IMAGE (APPLIED ON SCREENS <= 860px) */}
            <source media="(max-width: 860px)" srcSet={phoneImage} />
            {/* LAPTOP SIZE IMAGE (APPLIED ON DESKTOP & LAPTOP SCREENS > 860px) */}
            <img
              src={laptopImage}
              alt="Mohammed Afsal Hero Showcase"
              className="forma-bust-image"
            />
          </picture>
        </div>

        {/* ORANGE AMBIENT VISOR GLOW */}
        <div className="forma-visor-glow" />

        {/* STUDIO VIGNETTE GRADIENTS */}
        <div className="forma-vignette-top" />
        <div className="forma-vignette-bottom" />
        <div className="forma-vignette-sides" />
      </div>

      {/* ========================================================
          DESKTOP VIEWPORT LAYOUT: STAGGERED MEGA HEADLINES (IMAGE 1)
          ======================================================== */}
      <div className="forma-desktop-view">
        {/* DESKTOP FLOATING CROSSHAIR SERVICES GRID */}
        <div className="forma-crosshair-container">
          <div className="forma-crosshair-row forma-crosshair-row-1">
            <span className="forma-chip">Branding</span>
            <span className="forma-cross" aria-hidden="true">+</span>
            <span className="forma-chip">UX/UI Design</span>
            <span className="forma-cross" aria-hidden="true">+</span>
            <span className="forma-chip">Deploy</span>
          </div>
          <div className="forma-crosshair-row forma-crosshair-row-2">
            <span className="forma-cross" aria-hidden="true">+</span>
            <span className="forma-chip">Web Design</span>
            <span className="forma-cross" aria-hidden="true">+</span>
            <span className="forma-chip">App Design</span>
            <span className="forma-cross" aria-hidden="true">+</span>
          </div>
        </div>

        <div className="forma-desktop-inner">
          {/* TOP LINE: LEFT ALIGNED "MOHAMMED" */}
          <div className="forma-top-segment">
            <h1 className="forma-brand-primary">MOHAMMED</h1>
          </div>

          {/* BOTTOM SEGMENT: SUBTITLE (LEFT) & STUDIO + CTA BUTTON (RIGHT) */}
          <div className="forma-bottom-segment">
            {/* BOTTOM LEFT: SUBTITLE */}
            <div className="forma-bottom-left">
              <p className="forma-lead-text">
                We create design and development that helps teams launch faster, look sharper, and grow smarter.
              </p>
            </div>

            {/* BOTTOM RIGHT: CTA PILL + AFSAL VPR */}
            <div className="forma-bottom-right">
              <div className="forma-cta-wrapper">
                <a
                  href="#contact"
                  className="forma-contact-pill"
                  onClick={handleContactClick}
                  aria-label="Contact with us"
                >
                  <span className="forma-pill-icon">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                  <span className="forma-pill-label">Contact with us</span>
                </a>
              </div>

              <div className="forma-brand-secondary-wrap">
                <span className="forma-brand-secondary">AFSAL</span>
                <span className="forma-trademark">VPR</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE VIEWPORT LAYOUT: VERTICAL STACK WITH ITALIC SERIF 'Afsal' (IMAGE 2)
          ======================================================== */}
      <div className="forma-mobile-view">
        <div className="forma-mobile-inner">
          {/* MOBILE CROSSHAIRS ROW */}
          <div className="forma-mobile-crosshair-grid">
            <div className="forma-crosshair-row forma-crosshair-row-1">
              <span className="forma-chip">Branding</span>
              <span className="forma-cross" aria-hidden="true">+</span>
              <span className="forma-chip">UX/UI Design</span>
              <span className="forma-cross" aria-hidden="true">+</span>
              <span className="forma-chip">UX/UI Design</span>
            </div>
            <div className="forma-crosshair-row forma-crosshair-row-2">
              <span className="forma-cross" aria-hidden="true">+</span>
              <span className="forma-chip">Webflow</span>
              <span className="forma-cross" aria-hidden="true">+</span>
              <span className="forma-chip">App Design</span>
              <span className="forma-cross" aria-hidden="true">+</span>
            </div>
          </div>

          <div className="forma-mobile-headings">
            <h1 className="forma-mobile-brand-main">Mohammed</h1>
            <span className="forma-mobile-brand-italic">Afsal</span>
          </div>

          <p className="forma-mobile-lead-text">
            We create design and development that helps teams launch faster, look sharper, and grow smarter.
          </p>

          <div className="forma-mobile-cta-wrap">
            <a
              href="#contact"
              className="forma-contact-pill forma-contact-pill--mobile"
              onClick={handleContactClick}
              aria-label="Contact with us"
            >
              <span className="forma-pill-icon">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
              <span className="forma-pill-label">Contact with us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}