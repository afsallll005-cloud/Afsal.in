"use client";

import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { API_BASE_URL } from "@/utils/api";
import "./Works.css";

const defaultProjects = [
  {
    id: "p1",
    title: "Flintsector",
    category: "E-Commerce",
    year: "2026",
    tags: ["Next.js", "Express.js", "PostgraSQL", "TailwindCSS"],
    description:
      "FlintSector is a modern streetwear e-commerce store specializing in oversized T-shirts and jersey bottom pants. Designed for streetwear enthusiasts, it combines bold styles, premium aesthetics, and a smooth shopping experience. The website features stylish product collections, detailed product pages, and WhatsApp-based ordering for a convenient and seamless shopping journey.",
    image: "./images/Project01.jpeg",
    link: "https://flintsector-1eqj.vercel.app/",
  },
  {
    id: "p2",
    title: "Buytora",
    category: "Rental Website",
    year: "2026",
    tags: ["React", "UI/UX Design", "Framer Motion", "Design System"],
    description:
      "A premium rental property platform designed to help users discover homes, apartments, and commercial properties through an intuitive search experience. Baytora brings together property listings, location-based discovery, detailed property information, and flexible filtering options to simplify the rental search process. Inspired by modern real estate platforms, the website focuses on elegant visuals, structured property cards, and responsive layouts to deliver a seamless experience for users exploring properties across different locations.",
      image: "./images/Project02.png",
    link: "https://baytora.vercel.app/",
  },
  {
    id: "p3",
    title: "Travelyn",
    category: " Package Booking Platform",
    year: "2026",
    tags: ["React", "Next.js", "Express", "TailwindCSS"],
    description:
      "Travelyn is a modern travel package booking platform designed to help users explore destinations and discover exciting holiday packages. The website showcases a variety of travel experiences, including vacation packages, destination highlights, and trip options to suit different travel preferences. With an intuitive interface, engaging visuals, and organized package listings, Travelyn makes it easier for users to explore travel opportunities and plan their next adventure. The platform combines responsive design with a user-friendly browsing experience, delivering a smooth and convenient journey across desktop, tablet, and mobile devices.",
      image: "./images/Project03.jpeg",
    link: "",
  },
  {
    id: "p4",
    title: "TripzyGo",
    category: "Package Booking Platform",
    year: "2026",
    tags: ["React", "Node.js", "Express", "REST API"],
    description:
      "An intelligent travel planning platform that combines destination discovery with AI-powered personalized trip creation. TripzyGo enables users to explore travel packages and generate customized itineraries based on their preferences, interests, and travel goals. The website brings together modern UI design, organized package listings, and interactive planning features to make travel preparation more convenient, engaging, and personalized.",
      image: "./images/Project04.jpeg",
    link: "https://tripzygofrontend-eta.vercel.app/",
  },
  {
    id: "p5",
    title: "Digicam",
    category: "E-Commerce",
    year: "2026",
    tags: ["Figma", "Design Tokens", "React", "Radix UI"],
    description:
      "A modern e-commerce platform dedicated to cameras, photography equipment, and essential accessories. Camora is designed to help photography enthusiasts discover products through a clean interface, visually appealing product displays, and organized shopping categories. The website combines responsive design with a user-friendly browsing experience, creating a professional digital storefront that highlights photography products while making product exploration simple and convenient.",
      image: "./images/Project05.jpeg",
    link: "https://digicam-sooty.vercel.app/",
  },
  {
    id: "p10",
    title: "ERP Software",
    category: "Saas Application",
    year: "2025",
    tags: ["Next.js", "Express", "PostgrSQL", "Charts"],
    description:
      "A comprehensive Enterprise Resource Planning (ERP) system developed as part of a collaborative internship project. The platform is designed to simplify business operations by organizing inventory management, product tracking, and essential administrative workflows in one centralized system. My primary contribution focused on frontend development, creating responsive user interfaces, reusable components, and intuitive layouts to ensure a smooth and efficient user experience.",
      image: "./images/Project10.png",
    link: "https://github.com/afsallll005-cloud/erp-intern.git",
  },

   {
    id: "p12",
    title: "Ezuka Learning",
    category: " Learning Platform",
    year: "2026",
    tags: ["React", "Express", "Node.js", "MongoDB"],
    description:
      "Ezuca is an online education platform designed to make learning accessible and engaging. It provides an intuitive interface for exploring courses, accessing educational resources, and enhancing learning experiences through a modern, user-friendly design.",
      image: "./images/Project11.png",
    link: "https://ezuca.vercel.app/",
  },

  {
    id: "p7",
    title: "Ziora",
    category: "E-Commerce",
    year: "2026",
    tags: ["Html", "Css", "Javascript"],
    description:
      "A modern fashion e-commerce website developed to showcase contemporary clothing through an elegant and visually engaging digital storefront. Ziora focuses on presenting collections with clean product layouts, stylish imagery, and intuitive navigation. The platform combines responsive design, modern UI components, and a streamlined shopping experience to create a fashion-focused website that reflects the brand's identity while making it easy for customers to explore different styles and collections.",
      image: "./images/Project07.jpeg",
    link: "https://afsallll005-cloud.github.io/zioraFashion/",
  },
 











   {
    id: "p9",
    title: "Architype",
    category: "Static",
    year: "2026",
    tags: [ "React", "Express"],
    description:
      "A modern architecture website designed to showcase innovative architectural concepts, residential projects, and contemporary design solutions. The platform combines elegant layouts, high-quality visuals, and carefully structured content to create an immersive browsing experience. With a focus on clean aesthetics, responsive design, and intuitive navigation, Architype presents architectural creativity through a sophisticated digital presence that works seamlessly across desktop, tablet, and mobile devices.",
      image: "./images/Project09.jpeg",
    link: "",
  },
  
  {
    id: "p6",
    title: "Kinza",
    category: "Static",
    year: "2025",
    tags: ["Next.js", "Express", "MongoDB", "Charts"],
    description:
      "A vibrant beverage website designed to showcase refreshing drinks through colorful visuals, engaging product presentations, and a modern digital experience. Kinza focuses on creating a lively brand identity with attractive layouts, clear content hierarchy, and intuitive navigation. Its responsive interface ensures a consistent experience across different screen sizes while presenting beverage products in a visually appealing and accessible way.",
      image: "./images/Project06.jpeg",
    link: "",
  },
  
  {
    id: "p11",
    title: "Hospital POS",
    category: "E-Commerce",
    year: "2026",
    tags: ["Html", "Css", "Javascript"],
    description:
      "UCare is a hospital management application designed to streamline healthcare operations, manage hospital workflows, and support administrators, doctors, and receptionists through secure authentication and role-based access control.",
      image: "./images/Project12.png",
    link: "",
  },
   {
    id: "p8",
    title: "Ziora Perfumes",
    category: "E-Commerce",
    year: "2026",
    tags: ["React", "Express", "Node.js", "MongoDB"],
    description:
      "A premium fragrance e-commerce website created to present perfumes through a refined and elegant digital shopping experience. Ziora Perfumes combines sophisticated visual styling, carefully arranged product displays, and a clean interface to communicate the character of a luxury fragrance brand. The website emphasizes product presentation, intuitive navigation, and responsive layouts to help customers explore fragrances in a polished and engaging online environment.",
      image: "./images/Project08.jpeg",
    link: "",
  },

 
];

const INITIAL_PROJECT_COUNT = 8;

export default function Works({ onOpenContact }) {
  const [showMore, setShowMore] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [projects, setProjects] = useState(defaultProjects);
  const [loading, setLoading] = useState(false);

  const shouldReduceMotion = useReducedMotion();
  const [columns, setColumns] = useState(4);

  useEffect(() => {
    const updateColumns = () => {
      const width = window.innerWidth;
      if (width <= 420) {
        setColumns(1);
      } else if (width <= 640) {
        setColumns(2);
      } else if (width <= 900) {
        setColumns(3);
      } else {
        setColumns(4);
      }
    };

    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  /* =========================================================
     FETCH PROJECTS FROM BACKEND
  ========================================================= */
  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);

      try {
        const res = await fetch(`${API_BASE_URL}/projects`);

        if (res.ok) {
          const data = await res.json();

          if (Array.isArray(data) && data.length > 0) {
            const formatProject = (p, idx) => ({
              id: p._id || p.numberId || `proj-${idx}`,
              title: p.title || "Untitled Project",
              category: p.type || "Design & Development",
              image: p.image || defaultProjects[idx % defaultProjects.length].image,
              tags: Array.isArray(p.tags)
                ? p.tags
                : p.tags
                ? p.tags.split(",").map((t) => t.trim()).filter(Boolean)
                : ["Design", "Development"],
              year: p.year || "2025",
              description:
                p.description ||
                p.type ||
                "A bespoke digital experience crafted with precision and modern design standards.",
              link: p.link || "#",
            });

            setProjects(data.map(formatProject));
          }
        }
      } catch (err) {
        console.warn("Could not fetch projects from backend, using defaults:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  /* =========================================================
     DISPLAYED PROJECTS & LOAD MORE TOGGLE
  ========================================================= */
  const displayedProjects = showMore
    ? projects
    : projects.slice(0, INITIAL_PROJECT_COUNT);

  const hasMoreProjects = projects.length > INITIAL_PROJECT_COUNT;

  const handleToggleShowMore = () => {
    if (showMore) {
      setShowMore(false);
      const section = document.getElementById("projects");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      setShowMore(true);
    }
  };

  /* =========================================================
     CLOSE MODAL & ESCAPE LISTENER
  ========================================================= */
  const closeModal = () => {
    setSelectedProject(null);
  };

  useEffect(() => {
    if (!selectedProject) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <>
      {/* =====================================================
          WORKS / PROJECTS SECTION
      ====================================================== */}
      <section className="vl-section vl-projects-section" id="projects" aria-label="Featured Projects">
        <div className="vl-container">

          {/* =================================================
              CURRENT SECTION HEADER (PRESERVED EXACTLY AS REQUESTED)
          ================================================== */}
          <div className="vl-section-head">
            <span className="vl-label">Projects</span>
            <div className="vl-head-row">
              <h2 className="vl-heading">
                DIGITAL EXPERIENCES<span className="vl-heading-muted"> I’VE BUILT.</span>
              </h2>
              <p className="vl-head-desc">
                A curated selection of digital products built around bold ideas, crafted through meticulous details, and made to live beyond the frame.
              </p>
            </div>
          </div>

          {/* =================================================
              PROJECT GRID (CLEAN 4-COLUMN VISUAL POSTER CARDS)
          ================================================== */}
          {displayedProjects.length > 0 ? (
            <div className="works-grid">
              {displayedProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="project-reveal-item"
                  initial={
                    shouldReduceMotion
                      ? { opacity: 1, y: 0, scale: 1 }
                      : { opacity: 0, y: 32, scale: 0.95 }
                  }
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.15, margin: "0px 0px -40px 0px" }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 0.65,
                    ease: [0.16, 1, 0.3, 1],
                    delay: shouldReduceMotion ? 0 : (index % columns) * 0.08,
                  }}
                >
                  <article
                    className="project-card"
                    onClick={() => setSelectedProject(project)}
                    tabIndex={0}
                    role="button"
                    aria-label={`Open details for ${project.title}`}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setSelectedProject(project);
                      }
                    }}
                  >
                    {/* PROJECT POSTER IMAGE */}
                    <div className="project-image-wrapper">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="project-img"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.src = "/images/works(1).png";
                        }}
                      />

                      {/* HOVER OVERLAY */}
                      <div className="project-overlay">
                        <span className="project-overlay-title">{project.title}</span>
                        <span className="project-overlay-btn" aria-hidden="true">
                          <svg width="13" height="13" viewBox="0 0 256 256" fill="currentColor">
                            <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </article>
                </motion.div>
              ))}
            </div>
          ) : (
            /* EMPTY / LOADING STATE */
            <div className="works-empty-state">
              {loading ? (
                <div className="works-loading-wrap">
                  <div className="works-spinner" aria-hidden="true" />
                  <p>Loading projects...</p>
                </div>
              ) : (
                <div className="works-empty-wrap">
                  <p className="works-empty-title">No projects published yet.</p>
                  <p className="works-empty-desc">Add your projects via the Admin Panel.</p>
                </div>
              )}
            </div>
          )}

          {/* =================================================
              VIEW MORE PROJECTS BUTTON (AFTER 8 WORKS)
          ================================================== */}
          {hasMoreProjects && (
            <div className="works-cta-container">
              <button
                type="button"
                className="load-more-btn"
                onClick={handleToggleShowMore}
                aria-label={showMore ? "Show fewer projects" : "View more projects"}
              >
                <span>{showMore ? "Show Less" : "More Projects"}</span>
                <span className="load-more-icon" aria-hidden="true">
                  {showMore ? (
                    <svg width="14" height="14" viewBox="0 0 256 256" fill="currentColor">
                      <path d="M213.66,165.66a8,8,0,0,1-11.32,0L128,91.31,53.66,165.66a8,8,0,0,1-11.32-11.32l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,213.66,165.66Z" />
                    </svg>
                  ) : (
                    <svg width="14" height="14" viewBox="0 0 256 256" fill="currentColor">
                      <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z" />
                    </svg>
                  )}
                </span>
              </button>
            </div>
          )}

        </div>
      </section>

      {/* =====================================================
          CINEMATIC PROJECT DETAILS MODAL
      ====================================================== */}
      {selectedProject && (
        <div
          className="project-modal-backdrop"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedProject.title} project details`}
        >
          <div
            className="project-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE BUTTON */}
            <button
              type="button"
              className="modal-close-btn"
              onClick={closeModal}
              aria-label="Close project details"
            >
              <svg width="18" height="18" viewBox="0 0 256 256" fill="currentColor">
                <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z" />
              </svg>
            </button>

            {/* MODAL IMAGE */}
            <div className="modal-img-wrapper">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                onError={(e) => {
                  e.currentTarget.src = "/images/works(1).png";
                }}
              />
            </div>

            {/* MODAL DETAILS */}
            <div className="modal-details">
              {/* TAGS + YEAR */}
              <div className="modal-tags">
                {selectedProject.tags &&
                  selectedProject.tags.map((tag, index) => (
                    <span key={`${tag}-${index}`} className="modal-tag">
                      {tag}
                    </span>
                  ))}

                {selectedProject.year && (
                  <span className="modal-year">{selectedProject.year}</span>
                )}
              </div>

              {/* TITLE */}
              <h2 className="modal-title">{selectedProject.title}</h2>

              {/* CATEGORY */}
              <p className="modal-category">{selectedProject.category}</p>

              {/* DESCRIPTION */}
              <p className="modal-desc">{selectedProject.description}</p>

              {/* ACTION BUTTONS */}
              <div className="modal-actions">
                <button
                  type="button"
                  className="modal-btn-primary"
                  onClick={() => {
                    closeModal();
                    if (onOpenContact) onOpenContact();
                  }}
                >
                  <span>Discuss Project</span>
                  <span className="modal-btn-arrow" aria-hidden="true">→</span>
                </button>

                {selectedProject.link && selectedProject.link !== "#" && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-btn-secondary"
                  >
                    <span>Visit Live Site</span>
                    <span className="modal-btn-arrow" aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
