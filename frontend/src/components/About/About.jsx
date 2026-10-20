"use client";

import { useState, useEffect } from "react";
import { API_BASE_URL } from "@/utils/api";
import "./About.css";

const steps = [
  {
    number: "01",
    title: "Architect",
    desc: "We analyze technical requirements, database schemas, API architecture, and user flows to establish a solid engineering roadmap.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
        <circle cx="12" cy="12" r="3" fill="var(--accent-neon)" stroke="none" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Develop",
    desc: "We write clean, testable, and modular full-stack code using Next.js, React, Node.js, Express, and modern TypeScript.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="14" y1="4" x2="10" y2="20" stroke="var(--accent-neon)" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Optimize",
    desc: "We perform database indexing, Core Web Vitals speed tuning, API caching, and security hardening to ensure peak reliability.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Deploy",
    desc: "We configure automated CI/CD workflows, containerization, and production cloud infrastructure on Vercel and Render.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
];

const stats = [
  { value: "24+", label: "Projects Deployed" },
  { value: "12", label: "Ecommerce Application" },
  { value: "01", label: "Erp Application" },
  { value: "2+", label: "Months Internship" },
];

export default function About() {
  const [aboutData, setAboutData] = useState({
    name: "Mohammed Afsal",
    tagline: "We don’t just write code. We engineer scalable digital solutions.",
    bio: "I am a Full-Stack Software Developer & Web Engineer based in Malappuram, Kerala. Focused on crafting robust, production-grade web applications using modern technologies including Next.js, React, Node.js, Express, and MongoDB. From system architecture to frontend performance, I build clean, testable, and maintainable software that solves real business challenges.",
  });

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/about`);
        if (res.ok) {
          const data = await res.json();
          if (data && !data.message) {
            setAboutData((prev) => ({
              ...prev,
              name: data.heading || prev.name,
              bio: data.paragraph1 || prev.bio,
            }));
          }
        }
      } catch (err) {
        console.warn("Using local about defaults", err);
      }
    };
    fetchAbout();
  }, []);

  return (
    <section className="vl-section vl-about-section" id="about" aria-label="About Mohammed Afsal">
      <div className="vl-container">
        {/* TOP BLOCK */}
        <div className="vl-about-top">
          <span className="vl-label">About</span>

          <div className="vl-about-columns">
            {/* LEFT TEXT COLUMN */}
            <div className="vl-about-left">
              <h2 className="vl-about-heading">
                ABOUT OUR <span className="vl-heading-muted">SOFTWARE CRAFT.</span>
              </h2>

              <div className="vl-about-statement">
                <h3 className="vl-about-impact-quote">{aboutData.tagline}</h3>
                <p className="vl-about-bio">{aboutData.bio}</p>
                <div className="vl-about-links">
                  <a href="#projects" className="vl-btn-action">
                    <span>Download CV</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </a>
                  {/* <a href="#contact" className="vl-btn-link">
                    Start a Technical Discussion →
                  </a> */}
                </div>
              </div>
            </div>

            {/* RIGHT VIEWFINDER BOX */}
            <div className="vl-viewfinder-box vl-about-viewfinder">
              <video
                src="./images/AboutVideo.mp4"
                poster="https://framerusercontent.com/images/Bxm24q2tE94h3nuUwYxjexNW7GE.webp?width=1080&height=1080"
                autoPlay
                loop
                muted
                playsInline
                className="vl-viewfinder-video"
              />
              <div className="vl-viewfinder-shade" />

              {/* VIEWFINDER CORNERS */}
              <div className="vl-corner vl-corner-tl" />
              <div className="vl-corner vl-corner-tr" />
              <div className="vl-corner vl-corner-br" />
              <div className="vl-corner vl-corner-bl" />

              {/* CAMERA HUD */}
              <div className="vl-hud">
                <div className="vl-hud-rec">
                  <span className="vl-hud-dot" />
                  <span className="vl-hud-rec-text">SYSTEM ACTIVE</span>
                </div>
                <div className="vl-hud-bottom">
                  <div className="vl-hud-chips">
                    <span className="vl-hud-chip">MERN</span>
                    <span className="vl-hud-chip">FULL</span>
                  </div>
                  <span className="vl-hud-time">00:01:26</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 METHODOLOGY STEPS */}
        <div className="vl-steps-row">
          {steps.map((step) => (
            <div key={step.number} className="vl-step-card">
              <span className="vl-step-num">{step.number}</span>
              <h3 className="vl-step-title">{step.title}</h3>
              <div className="vl-step-icon">{step.icon}</div>
              <p className="vl-step-desc">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* STATS ROW */}
        <div className="vl-stats-row">
          {stats.map((stat) => (
            <div key={stat.label} className="vl-stat-box">
              <span className="vl-stat-value">{stat.value}</span>
              <span className="vl-stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
