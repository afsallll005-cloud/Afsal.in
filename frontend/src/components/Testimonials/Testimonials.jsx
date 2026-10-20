"use client";

import { useState } from "react";
import "./Testimonials.css";

const testimonials = [
  {
    id: 1,
    quote: "“AFSAL understood our brand narrative before we even knew how to tell it. The resulting platform doubled our inbound conversions and set a new standard for our industry.”",
    author: "Marcus Reed",
    role: "Creative Director, StudioLink",
    video: "https://framerusercontent.com/assets/wj5OuB3yPVTelahIaQ6YeLItg.mp4",
    poster: "https://framerusercontent.com/images/z4hqPcAGR2Rubq5myMw2pbIIn4s.webp?width=1280&height=714",
  },
  {
    id: 2,
    quote: "“Working with Mohammed Afsal was a game-changer. From the first wireframe to the final deployment, the speed, attention to detail, and typographic mastery were world-class.”",
    author: "Elena Rostova",
    role: "Head of Product, Apex Global",
    video: "https://framerusercontent.com/assets/H0pOnJYZIAIZHSkfimrYkhfU.mp4",
    poster: "https://framerusercontent.com/images/Bxm24q2tE94h3nuUwYxjexNW7GE.webp?width=1080&height=1080",
  },
  {
    id: 3,
    quote: "“The design aesthetics and Next.js performance blew our investors away. Not only is the website stunningly cinematic, it loads in less than 0.8 seconds worldwide.”",
    author: "Tariq Mansoor",
    role: "Co-Founder & CEO, Nexivo Cloud",
    video: "https://framerusercontent.com/assets/ffpTxFiSyMY4c9dTqhU8RnNAd20.mp4",
    poster: "https://framerusercontent.com/images/mdbyatdRB8vnSBtUl9Y7JEI.webp?width=1080&height=1080",
  },
  {
    id: 4,
    quote: "“Afsal is that rare developer who possesses both world-class visual taste and rock-solid full-stack engineering skills. I couldn’t recommend his studio more highly.”",
    author: "Sophia Chen",
    role: "Managing Partner, Noir Media",
    video: "https://framerusercontent.com/assets/RkE45CsEYJC5J7jDUkGITJXDNhg.mp4",
    poster: "https://framerusercontent.com/images/pOvp1xdKytqJCFRrOVwk9OHwoTU.webp?width=1280&height=720",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prevTestimonial = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const active = testimonials[current];

  return (
    <section className="vl-section vl-testimonials-section" id="clients" aria-label="Client testimonials">
      <div className="vl-container">
        {/* TOP BAR WITH CONTROLS */}
        <div className="vl-testi-bar">
          <span className="vl-label">Clients</span>

          <div className="vl-testi-controls">
            <span className="vl-testi-type">Testimonial</span>
            <span className="vl-testi-counter">
              0{current + 1} / 0{testimonials.length}
            </span>

            <div className="vl-testi-btns">
              <button
                className="vl-testi-btn"
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                className="vl-testi-btn"
                onClick={nextTestimonial}
                aria-label="Next testimonial"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* TESTIMONIAL BODY */}
        <div className="vl-testi-body">
          {/* QUOTE & AUTHOR */}
          <div className="vl-testi-text">
            <p className="vl-testi-quote">{active.quote}</p>

            <div className="vl-testi-person">
              <h4 className="vl-testi-author">{active.author}</h4>
              <p className="vl-testi-role">{active.role}</p>
            </div>
          </div>

          {/* RIGHT MEDIA BOX */}
          <div className="vl-testi-media">
            <video
              key={active.video}
              src={active.video}
              poster={active.poster}
              autoPlay
              loop
              muted
              playsInline
              className="vl-testi-video"
            />
            <div className="vl-testi-shade" />

            <div className="vl-corner vl-corner-tl" />
            <div className="vl-corner vl-corner-tr" />
            <div className="vl-corner vl-corner-br" />
            <div className="vl-corner vl-corner-bl" />

            <div className="vl-hud">
              <div className="vl-hud-rec">
                <span className="vl-hud-dot" />
                <span className="vl-hud-rec-text">CLIENT VERIFIED</span>
              </div>
              <div className="vl-hud-bottom">
                <span className="vl-hud-chip">TESTIMONIAL 0{current + 1}</span>
                <span className="vl-hud-time">00:0{current + 1}:45</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}