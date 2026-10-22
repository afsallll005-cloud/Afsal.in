"use client";

import "./HowIWork.css";

const processCards = [
  {
    num: "01",
    tag: "Architect",
    headline: "Define the foundation.",
    desc: "I analyze system requirements, map out database schemas, design REST API specifications, and plan component hierarchies before writing a single line of code.",
    video: "https://framerusercontent.com/assets/5XOHo4pmEgjD2iyilyHAlSTdpjM.mp4",
    poster: "https://framerusercontent.com/images/pnmTZlEROdgwtt8pvv9nKVfOs.webp?width=1280&height=720",
    topOffset: "115px",
  },
  {
    num: "02",
    tag: "Develop",
    headline: "Write clean, scalable code.",
    desc: "I engineer performant Next.js & React frontends, robust Node.js and Express backend controllers, and integrate seamless database operations with clean architecture.",
    video: "https://framerusercontent.com/assets/zOaJDiLhoEfoWyk485PTN0qH2ms.mp4",
    poster: "https://framerusercontent.com/images/Efd1t64QYLXKNVR1VYSzMRX5nM.webp?width=1280&height=720",
    topOffset: "175px",
  },
  {
    num: "03",
    tag: "Refine",
    headline: "Speed audits & QA testing.",
    desc: "I benchmark database queries, test cross-device responsiveness, eliminate bottlenecks, and ensure 100/100 Core Web Vitals performance.",
    video: "https://framerusercontent.com/assets/LyWagnodebINdgaBaOCxLNvRAs.mp4",
    poster: "https://framerusercontent.com/images/iST8nlwNNNZi2CyDkhxQuJwGEwE.webp?width=1280&height=720",
    topOffset: "235px",
  },
  {
    num: "04",
    tag: "Deploy",
    headline: "Production-ready launch.",
    desc: "I configure automated CI/CD pipelines, containerized deployments on Vercel and Render, custom domain DNS, and server monitoring for 99.9% uptime.",
    video: "https://framerusercontent.com/assets/F3wAQyQqJ7sq4KvxgwoJpo.mp4",
    poster: "https://framerusercontent.com/images/QWVqIWFzjcWRjZfdHO3fSqbHk.webp?width=1280&height=720",
    topOffset: "295px",
  },
];

export default function HowIWork() {
  return (
    <section className="vl-section vl-process-section" id="process" aria-label="My engineering process">
      <div className="vl-container">
        {/* SECTION HEADER */}
        <div className="vl-section-head">
          <span className="vl-label">Process</span>
          <div className="vl-head-row">
            <h2 className="vl-heading">
              FROM SYSTEM DESIGN <span className="vl-heading-muted">TO PRODUCTION LAUNCH.</span>
            </h2>
            <p className="vl-head-desc">
              Every software project starts with a problem to solve. I analyze requirements, architect scalable foundations, and engineer clean code that performs.
            </p>
          </div>
        </div>

        {/* STICKY STACKING CARDS */}
        <div className="vl-process-stack">
          {processCards.map((card) => (
            <div
              key={card.num}
              className="vl-process-card"
              style={{ "--stack-top": card.topOffset }}
            >
              {/* MEDIA LAYER */}
              <div className="vl-process-media">
                <video
                  src={card.video}
                  poster={card.poster}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="vl-process-video"
                />
                <div className="vl-process-shade" />

                {/* CORNERS */}
                <div className="vl-corner vl-corner-tl" />
                <div className="vl-corner vl-corner-tr" />
                <div className="vl-corner vl-corner-br" />
                <div className="vl-corner vl-corner-bl" />
              </div>

              {/* CARD TOP INFO */}
              <div className="vl-process-head">
                <span className="vl-process-num">{card.num}</span>
                <h3 className="vl-process-tag">{card.tag}</h3>
              </div>

              {/* CARD FOOTER INFO */}
              <div className="vl-process-foot">
                <h4 className="vl-process-headline">{card.headline}</h4>
                <p className="vl-process-desc">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
