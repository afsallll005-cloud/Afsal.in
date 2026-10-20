"use client";

import "./Brands.css";

const brands = [
  "NEXT.JS",
  "REACT 19",
  "JAVASCRIPT",
  "TYPESCRIPT",
  "NODE.JS",
  "EXPRESS.JS",
  "TAILWIND",
  "BOOTSTRAP",
  "FRAMER MOTION",
  "MONGODB",
  "POSTGRESQL",
  "MYSQL",
  "GIT",
  "GITHUB",
  "VERCEL",
  "RENDER"
];

export default function Brands() {
  return (
    <section className="vl-section vl-brands-section" aria-label="Brands and Technologies">
      <div className="vl-container">
        <div className="vl-brands-inner">
          <p className="vl-brands-title">Trusted by brands & modern tech</p>

          <div className="vl-brands-ticker-wrap">
            <div className="vl-brands-track">
              {/* Duplicate array twice for seamless continuous scroll */}
              {[...brands, ...brands].map((brand, i) => (
                <div key={i} className="vl-brand-item">
                  <span className="vl-brand-dot">✦</span>
                  <span className="vl-brand-name">{brand}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
