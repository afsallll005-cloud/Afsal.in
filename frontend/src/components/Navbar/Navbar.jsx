"use client";

import { useState, useEffect } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
    { name: "Faq", href: "#process" },
  ];

  return (
    <>
      <header className={`vl-navbar ${scrolled ? "vl-navbar--scrolled" : ""}`}>
        <div className="vl-navbar-inner">
          {/* LOGO */}
          <a href="#" className="vl-logo" aria-label="Home">
            {/* <div className="vl-logo-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="5" width="18" height="15" rx="2" stroke="white" strokeWidth="1.5" />
                <path d="M3 10H21" stroke="white" strokeWidth="1.5" />
                <path d="M8 5L6 10" stroke="white" strokeWidth="1.5" />
                <path d="M14 5L12 10" stroke="white" strokeWidth="1.5" />
                <path d="M20 5L18 10" stroke="white" strokeWidth="1.5" />
              </svg>
            </div> */}
            <span className="vl-logo-title">MHD AFSAL</span>
          </a>

          {/* MENU TOGGLE BUTTON (MATCHING IMAGE: CLEAN LOGO ON LEFT, MENU ON RIGHT) */}
          <div className="vl-navbar-actions">
            <button
              className={`vl-menu-btn ${menuOpen ? "open" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              <span className="vl-menu-label">{menuOpen ? "CLOSE" : "MENU"}</span>
              <div className="vl-menu-lines">
                <span className="vl-menu-line vl-menu-line-1" />
                <span className="vl-menu-line vl-menu-line-2" />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* FULLSCREEN OVERLAY MENU PANEL */}
      <div className={`vl-menu-drawer ${menuOpen ? "open" : ""}`}>
        <div className="vl-drawer-backdrop" onClick={() => setMenuOpen(false)} />
        <div className="vl-drawer-panel">
          <nav className="vl-drawer-nav">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="vl-drawer-link"
                onClick={() => setMenuOpen(false)}
              >
                <span className="vl-drawer-link-num">0{index + 1}</span>
                <span className="vl-drawer-link-text">{item.name}</span>
                <svg className="vl-drawer-link-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </nav>

          <div className="vl-drawer-footer">
            <div className="vl-drawer-contact">
              <span className="vl-drawer-contact-label">Direct Inquiry</span>
              <a href="mailto:afsallll005@gmail.com" className="vl-drawer-contact-value">
                afsallll005@gmail.com
              </a>
              <span className="vl-drawer-contact-location">Malappuram, Kerala, India</span>
              <a
                href="/images/MohammedAfsal_Fullstack_Developer.pdf"
                download="MohammedAfsal_Fullstack_Developer.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  marginTop: "8px",
                  fontSize: "12px",
                  color: "var(--accent-neon, #d8f709)",
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                <span>Download CV (PDF) ↗</span>
              </a>
            </div>
            <div className="vl-drawer-socials">
              <a href="https://github.com/afsallll005-cloud" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/mohammed-afsal-8a52b23aa" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://www.instagram.com/web.tek_" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}