"use client";

import { useState, useEffect } from "react";
import "./Services.css";

const servicesData = [
  {
    num: "01",
    title: "Full-Stack Web Apps",
    description:
      "Enterprise-ready Next.js and React web applications engineered with resilient backend APIs, fast database operations, and scalable MVC architecture.",
    video: "./images/Fullstack.mp4",
    poster: "./images/Fullstack.mp4",
    deliverables: ["Next.js 15 SSR", "React 19 & TypeScript", "REST & GraphQL APIs", "MongoDB & PostgreSQL"],
  },
  {
    num: "02",
    title: "E-Commerce Web Apps",
    description:
      "Detailed, visually rich online stores with frictionless navigation, custom cart drawers, and optimized checkout funnels built for high sales conversion.",
    video: "./images/ecommerceWeb.mp4",
    poster: "./images/ecommerceWeb.mp4",
    deliverables: ["Custom Storefronts", "Stripe & Razorpay", "Inventory Sync", "Order Management"],
  },
  {
    num: "03",
    title: "Backend & API Systems",
    description:
      "High-throughput Node.js and Express server architectures, secure JWT/OAuth authentication, database modeling, and third-party API integrations.",
    video: "./images/Backend.mp4",
    poster: "./images/Backend.mp4",
    deliverables: ["Node.js & Express", "JWT Authentication", "Database Indexing", "Webhook Automation"],
  },
  {
    num: "04",
    title: "Modern Web Design",
    description:
      "Bespoke, human-centered digital experiences with architectural typography, intuitive user flows, and responsive design systems in Figma.",
    video: "./images/Modern.mp4",
    poster: "./images/Modern.mp4",
    deliverables: ["Figma Design Systems", "Responsive UI/UX", "Interactive Prototypes", "Wireframe Architecture"],
  },
  {
    num: "05",
    title: "Performance & DevOps",
    description:
      "Comprehensive performance auditing, sub-second load time optimization, automated CI/CD pipelines, and cloud hosting on Vercel and Render.",
    video: "./images/Performance.mp4",
    poster: "./images/Performance.mp4",
    deliverables: ["100/100 Core Web Vitals", "CI/CD Workflows", "Vercel & Render Setup", "Technical SEO Tuning"],
  },
];

export default function Services() {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            if (!isNaN(index)) {
              setActiveIdx(index);
            }
          }
        });
      },
      {
        rootMargin: "-20% 0px -45% 0px",
        threshold: 0.15,
      }
    );

    const cards = document.querySelectorAll(".vl-service-row");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const scrollToService = (index) => {
    setActiveIdx(index);
    const target = document.getElementById(`service-card-${index}`);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section className="vl-section vl-services-section" id="services" aria-label="My Services">
      <div className="vl-container">
        {/* SECTION HEADER */}
        <div className="vl-section-head">
          <span className="vl-label">Services</span>
          <div className="vl-head-row">
            <h2 className="vl-heading">
              I ENGINEER MORE <span className="vl-heading-muted">THAN WEBSITES.</span>
            </h2>
            <p className="vl-head-desc">
              From database modeling to frontend interactivity, I combine system architecture, full-stack programming, and clean code to build software that performs.
            </p>
          </div>
        </div>

        {/* TWO COLUMN SERVICES BODY */}
        <div className="vl-services-body">
          {/* STICKY LEFT LIST */}
          <div className="vl-services-sticky-nav">
            <div className="vl-sticky-list">
              {servicesData.map((s, idx) => (
                <button
                  key={s.num}
                  className={`vl-sticky-item ${activeIdx === idx ? "active" : ""}`}
                  onClick={() => scrollToService(idx)}
                >
                  <span className="vl-sticky-num">{s.num}</span>
                  <span className="vl-sticky-title">{s.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT CARDS LIST */}
          <div className="vl-services-cards">
            {servicesData.map((service, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={service.num}
                  id={`service-card-${index}`}
                  data-index={index}
                  className={`vl-service-row ${isEven ? "normal" : "reverse"}`}
                  onMouseEnter={() => setActiveIdx(index)}
                >
                  {/* MEDIA BOX */}
                  <div className="vl-service-media">
                    <video
                      src={service.video}
                      poster={service.poster}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="vl-service-video"
                    />
                    <div className="vl-service-shade" />
                    <div className="vl-corner vl-corner-tl" />
                    <div className="vl-corner vl-corner-tr" />
                    <div className="vl-corner vl-corner-br" />
                    <div className="vl-corner vl-corner-bl" />
                  </div>

                  {/* TEXT CARD */}
                  <div className="vl-service-info">
                    <span className="vl-service-card-num">{service.num}</span>
                    <div className="vl-service-card-copy">
                      <h3 className="vl-service-card-title">{service.title}</h3>
                      <p className="vl-service-card-desc">{service.description}</p>
                    </div>

                    <div className="vl-service-tags">
                      {service.deliverables.map((item) => (
                        <span key={item} className="vl-service-tag">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}