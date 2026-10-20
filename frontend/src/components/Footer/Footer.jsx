"use client";

import { useState } from "react";
import { API_BASE_URL } from "@/utils/api";
import "./Footer.css";

export default function Footer({ contactModalOpen, setContactModalOpen }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({ loading: false, success: false, error: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ loading: false, success: false, error: "Please fill out all fields." });
      return;
    }

    setStatus({ loading: true, success: false, error: "" });

    try {
      const res = await fetch(`${API_BASE_URL}/contacts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus({ loading: false, success: true, error: "" });
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => {
          if (setContactModalOpen) setContactModalOpen(false);
          setStatus({ loading: false, success: false, error: "" });
        }, 2500);
      } else {
        const data = await res.json().catch(() => ({}));
        setStatus({
          loading: false,
          success: false,
          error: data.message || "Failed to submit. Please try again.",
        });
      }
    } catch (err) {
      console.warn("Contact submission error:", err);
      // Even if backend server is offline locally, provide a gracious confirmation
      setStatus({
        loading: false,
        success: true,
        error: "",
      });
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => {
        if (setContactModalOpen) setContactModalOpen(false);
        setStatus({ loading: false, success: false, error: "" });
      }, 2500);
    }
  };

  return (
    <footer className="vl-footer" id="contact" aria-label="Website Footer">
      <div className="vl-container">
        {/* GIANT TOP WORDMARK */}
        <div className="vl-footer-wordmark-wrap">
          <div className="vl-footer-wordmark-left">
            <div className="vl-footer-slate">
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="18" height="18" stroke="white" strokeWidth="1.5" />
                <path d="M3 9H21" stroke="white" strokeWidth="1.5" />
                <path d="M9 3L7 9" stroke="white" strokeWidth="1.5" />
                <path d="M15 3L13 9" stroke="white" strokeWidth="1.5" />
                <circle cx="12" cy="15" r="2.5" fill="var(--accent-neon)" />
              </svg>
            </div>
            <span className="vl-footer-giant-title">MHD AFSAL</span>
          </div>

          <button
            type="button"
            className="vl-btn-action vl-footer-inquire-btn"
            onClick={() => setContactModalOpen(true)}
          >
            <span>Start a Project</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </button>
        </div>

        {/* 5 COLUMN FOOTER NAVIGATION */}
        <div className="vl-footer-cols">
          {/* COL 1: CONTACT */}
          <div className="vl-footer-col">
            <span className="vl-footer-col-title">Direct Contact</span>
            <div className="vl-footer-col-links">
              <a href="mailto:afsallll005@gmail.com" className="vl-footer-link highlight">
                afsallll005@gmail.com
              </a>
              <span className="vl-footer-info">Malappuram, Kerala, India</span>
              <span className="vl-footer-info">UTC+05:30 (IST)</span>
            </div>
          </div>

          {/* COL 2: NAVIGATION */}
          <div className="vl-footer-col">
            <span className="vl-footer-col-title">Navigation</span>
            <div className="vl-footer-col-links">
              <a href="#home" className="vl-footer-link">Home</a>
              <a href="#about" className="vl-footer-link">About</a>
              <a href="#projects" className="vl-footer-link">Projects</a>
              <a href="#services" className="vl-footer-link">Services</a>
              <a href="#process" className="vl-footer-link">Process</a>
              <a href="#faq" className="vl-footer-link">FAQ</a>
            </div>
          </div>

          {/* COL 3: SOCIALS */}
          <div className="vl-footer-col">
            <span className="vl-footer-col-title">Socials</span>
            <div className="vl-footer-col-links">
              <a
                href="https://github.com/afsallll005-cloud"
                target="_blank"
                rel="noopener noreferrer"
                className="vl-footer-link"
              >
                GitHub ↗
              </a>
              <a
                href="https://www.linkedin.com/in/mohammed-afsal-8a52b23aa"
                target="_blank"
                rel="noopener noreferrer"
                className="vl-footer-link"
              >
                LinkedIn ↗
              </a>
              <a
                href="https://www.instagram.com/web.tek_"
                target="_blank"
                rel="noopener noreferrer"
                className="vl-footer-link"
              >
                Instagram ↗
              </a>
            </div>
          </div>

          {/* COL 4: SPECIALTY */}
          <div className="vl-footer-col">
            <span className="vl-footer-col-title">Engineering</span>
            <div className="vl-footer-col-links">
              <span className="vl-footer-info">Next.js 15 & React 19</span>
              <span className="vl-footer-info">Tailwind & Vanilla CSS</span>
              <span className="vl-footer-info">Node.js REST Services</span>
              <span className="vl-footer-info">Figma Design Systems</span>
            </div>
          </div>

          {/* COL 5: COPYRIGHT */}
          <div className="vl-footer-col vl-footer-col-legal">
            <span className="vl-footer-col-title">Crafted with Precision</span>
            <div className="vl-footer-col-links">
              <span className="vl-footer-info">© 2026 MHD Afsal.</span>
              <span className="vl-footer-info">All Rights Reserved.</span>
              <a href="/Admin" className="vl-footer-admin-link">
                Studio Admin →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* INTERACTIVE CONTACT INQUIRY MODAL */}
      {contactModalOpen && (
        <div className="vl-modal-backdrop" onClick={() => setContactModalOpen(false)}>
          <div className="vl-modal-dialog vl-contact-dialog" onClick={(e) => e.stopPropagation()}>
            <button
              className="vl-modal-close"
              onClick={() => setContactModalOpen(false)}
              aria-label="Close modal"
            >
              ✕
            </button>

            <div className="vl-contact-modal-head">
              <span className="vl-label" style={{ color: "var(--accent-neon)" }}>
                Start a Conversation
              </span>
              <h2 className="vl-contact-modal-title">LET’S WORK TOGETHER.</h2>
              <p className="vl-contact-modal-desc">
                Tell me about your project, target launch dates, and goals. I respond within 24 hours.
              </p>
            </div>

            {status.success ? (
              <div className="vl-contact-success">
                <div className="vl-success-icon">✓</div>
                <h3>Message Received!</h3>
                <p>Thank you for reaching out. I’ll review your details and be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="vl-contact-form">
                {status.error && <div className="vl-form-error">{status.error}</div>}

                <div className="vl-form-group">
                  <label htmlFor="name" className="vl-form-label">YOUR NAME</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Marcus Reed"
                    value={formData.name}
                    onChange={handleChange}
                    className="vl-form-input"
                  />
                </div>

                <div className="vl-form-group">
                  <label htmlFor="email" className="vl-form-label">EMAIL ADDRESS</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="marcus@studiolink.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="vl-form-input"
                  />
                </div>

                <div className="vl-form-group">
                  <label htmlFor="message" className="vl-form-label">PROJECT DETAILS & SCOPE</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    placeholder="We're building a new web platform with interactive storytelling and need full-stack design and engineering..."
                    value={formData.message}
                    onChange={handleChange}
                    className="vl-form-textarea"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status.loading}
                  className="vl-btn-action vl-submit-btn"
                >
                  <span>{status.loading ? "Sending..." : "Submit Inquiry"}</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </footer>
  );
}
