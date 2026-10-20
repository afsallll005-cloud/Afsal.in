"use client";

import { useState } from "react";
import "./FAQ.css";

const faqs = [
  {
    num: "01",
    question: "What tech stack do you specialize in?",
    answer:
      "I specialize in the modern JavaScript and TypeScript ecosystem — primarily Next.js 15, React 19, Node.js, Express, MongoDB, PostgreSQL, and TailwindCSS. From frontend interactivity to robust backend APIs, I build complete, production-grade web applications.",
  },
  {
    num: "02",
    question: "Do I get full ownership of the source code?",
    answer:
      "Yes, 100%. Upon project completion, all intellectual property, source code, and assets are transferred to your GitHub repository with clear documentation, environment templates, and modular code architecture.",
  },
  {
    num: "03",
    question: "How long does a typical software or web app project take?",
    answer:
      "A high-impact landing page or portfolio typically takes 1 to 2 weeks. Comprehensive full-stack web applications, custom e-commerce stores, and SaaS dashboards generally span 3 to 6 weeks with weekly milestone demos.",
  },
  {
    num: "04",
    question: "Can you integrate custom APIs, payment gateways, and authentication?",
    answer:
      "Yes. I frequently integrate payment solutions (Stripe, Razorpay, PayPal), secure authentication (JWT, OAuth, NextAuth), external cloud services (AWS S3, Cloudinary), and third-party webhook automation.",
  },
  {
    num: "05",
    question: "Do you offer post-launch support and maintenance?",
    answer:
      "Yes. I offer ongoing retainer and ad-hoc maintenance packages covering security updates, server monitoring, database indexing, new feature development, and performance optimization.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="vl-section vl-faq-section" id="faq" aria-label="Frequently Asked Questions">
      <div className="vl-container">
        {/* HEADER */}
        <div className="vl-section-head">
          <span className="vl-label">Technical Inquiries</span>
          <div className="vl-head-row">
            <h2 className="vl-heading">
              FREQUENTLY <span className="vl-heading-muted">ASKED.</span>
            </h2>
            <p className="vl-head-desc">
              Answers to common questions regarding our engineering standards, code ownership, tech stack, and deployment workflows.
            </p>
          </div>
        </div>

        {/* ACCORDION */}
        <div className="vl-faq-list">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={faq.num}
                className={`vl-faq-item ${isOpen ? "open" : ""}`}
                onClick={() => toggle(idx)}
              >
                <div className="vl-faq-trigger">
                  <span className="vl-faq-num">{faq.num}</span>
                  <h3 className="vl-faq-question">{faq.question}</h3>
                  <div className="vl-faq-toggle-icon">
                    <span className="vl-faq-toggle-line-h" />
                    <span className={`vl-faq-toggle-line-v ${isOpen ? "rotated" : ""}`} />
                  </div>
                </div>

                <div className={`vl-faq-content ${isOpen ? "expanded" : ""}`}>
                  <div className="vl-faq-content-inner">
                    <p className="vl-faq-answer">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
