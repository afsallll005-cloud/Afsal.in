"use client";

import { useState, useEffect } from "react";
import { API_BASE_URL } from "@/utils/api";
import "./Works.css";

const defaultProjects = [
  {
    id: "p1",
    title: "Night Shift",
    client: "Auriga Motors",
    category: "Commercial Web Platform",
    year: "2026",
    tags: ["Next.js", "Full-Stack", "WebGL", "TailwindCSS"],
    description:
      "A cinematic, high-performance web experience engineered for Auriga Motors to unveil their flagship electric vehicle lineup. Features bespoke interactive 3D configurators and silky micro-interactions.",
    video: "https://framerusercontent.com/assets/9gNwmqnLF1D0ucWUdIF6D9USm0.mp4",
    poster: "https://framerusercontent.com/images/r2sIkyJmYp1lg2LUDUR7ykhHlfU.webp?width=1080&height=1080",
    ratio: "708 / 560",
    link: "https://videolab-gr8r.framer.website/projects/night-shift",
  },
  {
    id: "p2",
    title: "The Climb",
    client: "Vertex Studio",
    category: "Brand Experience & Motion",
    year: "2026",
    tags: ["React", "UI/UX Design", "Framer Motion", "Design System"],
    description:
      "An immersive digital portfolio and creative showcase built for an international architectural studio. Emphasizes negative space, Swiss typography, and smooth transitions.",
    video: "https://framerusercontent.com/assets/ffpTxFiSyMY4c9dTqhU8RnNAd20.mp4",
    poster: "https://framerusercontent.com/images/mdbyatdRB8vnSBtUl9Y7JEI.webp?width=1080&height=1080",
    ratio: "576 / 560",
    link: "https://videolab-gr8r.framer.website/projects/the-climb",
  },
  {
    id: "p3",
    title: "Step Into It",
    client: "Noir Athletics",
    category: "Headless E-Commerce",
    year: "2025",
    tags: ["E-Commerce", "Next.js 15", "Stripe", "TailwindCSS"],
    description:
      "A fast, editorial-style e-commerce platform for high-end athletic wear. Features instant faceted search, custom cart drawers, and a seamless one-page checkout funnel.",
    video: "https://framerusercontent.com/assets/llBvw6I5IPBSDnqRLlfOkbThPao.mp4",
    poster: "https://framerusercontent.com/images/TfNrO6VLYd2MNYbxK89dTYoNVVs.webp?width=1280&height=720",
    ratio: "576 / 560",
    link: "https://videolab-gr8r.framer.website/projects/step-into-it",
  },
  {
    id: "p4",
    title: "Open Road",
    client: "Northbound",
    category: "SaaS Digital Experience",
    year: "2025",
    tags: ["Full-Stack", "Node.js", "React", "REST API"],
    description:
      "Enterprise platform for fleet logistics and road trip routing. Designed from ground up with an uncompromising focus on clarity, performance, and dark-mode aesthetic.",
    video: "https://framerusercontent.com/assets/RkE45CsEYJC5J7jDUkGITJXDNhg.mp4",
    poster: "https://framerusercontent.com/images/pOvp1xdKytqJCFRrOVwk9OHwoTU.webp?width=1280&height=720",
    ratio: "708 / 560",
    link: "https://videolab-gr8r.framer.website/projects/open-road",
  },
];

export default function Works() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [allProjects, setAllProjects] = useState(defaultProjects);
  const [showAllModal, setShowAllModal] = useState(false);

  // Fetch projects from backend if present, merging with defaults
  useEffect(() => {
    const fetchBackendProjects = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/projects`);
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            const formatted = data.map((p, idx) => ({
              id: p._id || p.numberId || `be-${idx}`,
              title: p.title || `Project 0${idx + 1}`,
              client: p.client || p.title || "Client Project",
              category: p.type || "Web Design & Development",
              year: p.year || "2026",
              tags: Array.isArray(p.tags) ? p.tags : (p.tags ? p.tags.split(",") : ["Web Design", "Development"]),
              description: p.description || "A bespoke digital experience crafted with precision and modern design standards.",
              video: p.video || defaultProjects[idx % defaultProjects.length].video,
              poster: p.image || defaultProjects[idx % defaultProjects.length].poster,
              ratio: idx % 2 === 0 ? "708 / 560" : "576 / 560",
              link: p.link || "#",
            }));
            setAllProjects(formatted);
          }
        }
      } catch (err) {
        console.warn("Using default curated projects", err);
      }
    };
    fetchBackendProjects();
  }, []);

  // Escape key closes modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
        setShowAllModal(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const featuredFour = allProjects.slice(0, 4);

  return (
    <section className="vl-section vl-projects-section" id="projects" aria-label="Featured Projects">
      <div className="vl-container">
        {/* SECTION HEADER */}
        <div className="vl-section-head">
          <span className="vl-label">Projects</span>
          <div className="vl-head-row">
            <h2 className="vl-heading">
              PROJECTS WE’RE <span className="vl-heading-muted">PROUD OF.</span>
            </h2>
            <p className="vl-head-desc">
              A curated selection of digital products built around bold ideas, crafted through meticulous details, and made to live beyond the frame.
            </p>
          </div>
        </div>

        {/* 2x2 FEATURED PROJECTS GRID */}
        <div className="vl-projects-grid">
          {featuredFour.map((project, idx) => {
            const isLarge = idx === 0 || idx === 3;
            return (
              <div
                key={project.id}
                className={`vl-project-card ${isLarge ? "large" : "medium"}`}
                onClick={() => setSelectedProject(project)}
                role="button"
                tabIndex={0}
                aria-label={`View ${project.title}`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedProject(project);
                  }
                }}
              >
                {/* BACKGROUND VIDEO PREVIEW */}
                <div className="vl-card-media">
                  <video
                    src={project.video}
                    poster={project.poster}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="vl-card-video"
                  />
                  <div className="vl-card-shade" />
                </div>

                {/* VIEWFINDER CORNERS (ANIMATE ON HOVER) */}
                <div className="vl-corner vl-corner-tl" />
                <div className="vl-corner vl-corner-tr" />
                <div className="vl-corner vl-corner-br" />
                <div className="vl-corner vl-corner-bl" />

                {/* CAMERA HUD OVERLAY */}
                <div className="vl-hud">
                  <div className="vl-hud-rec">
                    <span className="vl-hud-dot" />
                    <span className="vl-hud-rec-text">REC</span>
                  </div>
                  <div className="vl-hud-bottom">
                    <div className="vl-hud-chips">
                      <span className="vl-hud-chip">HD</span>
                      <span className="vl-hud-chip">4K</span>
                    </div>
                    <span className="vl-hud-time">00:0{idx + 1}:28</span>
                  </div>
                </div>

                {/* CARD CENTER: CLIENT BRAND / TITLE */}
                <div className="vl-card-center">
                  <span className="vl-card-client-tag">{project.client}</span>
                  <h3 className="vl-card-title">{project.title}</h3>
                  <div className="vl-card-view-btn">
                    <span>View Project</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* BOTTOM ALL-PROJECTS TRIGGER */}
        {allProjects.length > 4 && (
          <div className="vl-projects-footer">
            <button
              className="vl-btn-action"
              onClick={() => setShowAllModal(true)}
            >
              <span>View All {allProjects.length} Projects</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* SINGLE PROJECT DETAIL MODAL */}
      {selectedProject && (
        <div className="vl-modal-backdrop" onClick={() => setSelectedProject(null)}>
          <div className="vl-modal-dialog" onClick={(e) => e.stopPropagation()}>
            <button
              className="vl-modal-close"
              onClick={() => setSelectedProject(null)}
              aria-label="Close modal"
            >
              ✕
            </button>

            <div className="vl-modal-video-wrap">
              <video
                src={selectedProject.video}
                poster={selectedProject.poster}
                autoPlay
                loop
                muted
                controls
                playsInline
                className="vl-modal-video"
              />
              <div className="vl-corner vl-corner-tl" />
              <div className="vl-corner vl-corner-tr" />
              <div className="vl-corner vl-corner-br" />
              <div className="vl-corner vl-corner-bl" />
            </div>

            <div className="vl-modal-content">
              <div className="vl-modal-meta">
                <span className="vl-modal-category">{selectedProject.category}</span>
                <span className="vl-modal-year">{selectedProject.year}</span>
              </div>

              <h2 className="vl-modal-title">{selectedProject.title}</h2>
              <span className="vl-modal-client">Client: {selectedProject.client}</span>

              <p className="vl-modal-desc">{selectedProject.description}</p>

              <div className="vl-modal-tags">
                {selectedProject.tags.map((tag) => (
                  <span key={tag} className="vl-hud-chip">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="vl-modal-actions">
                {selectedProject.link && selectedProject.link !== "#" ? (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="vl-btn-action"
                  >
                    <span>Launch Live Site</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </a>
                ) : (
                  <a href="#contact" onClick={() => setSelectedProject(null)} className="vl-btn-action">
                    <span>Commission Similar Project</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ALL PROJECTS DRAWER / MODAL */}
      {showAllModal && (
        <div className="vl-modal-backdrop" onClick={() => setShowAllModal(false)}>
          <div className="vl-modal-dialog vl-modal-all-projects" onClick={(e) => e.stopPropagation()}>
            <div className="vl-modal-header">
              <h2 className="vl-heading" style={{ fontSize: "36px" }}>Archive Portfolio</h2>
              <button className="vl-modal-close" onClick={() => setShowAllModal(false)}>✕</button>
            </div>
            <div className="vl-all-projects-grid">
              {allProjects.map((p) => (
                <div
                  key={p.id}
                  className="vl-archive-item"
                  onClick={() => {
                    setShowAllModal(false);
                    setSelectedProject(p);
                  }}
                >
                  <img src={p.poster} alt={p.title} className="vl-archive-thumb" />
                  <div className="vl-archive-info">
                    <span className="vl-archive-client">{p.client}</span>
                    <h4 className="vl-archive-title">{p.title}</h4>
                    <span className="vl-archive-cat">{p.category}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
