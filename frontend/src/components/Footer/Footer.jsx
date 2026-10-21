import "./Footer.css";

export default function Footer({ onOpenContact, setContactModalOpen }) {
  const handleOpenContact = () => {
    if (onOpenContact) {
      onOpenContact();
    } else if (setContactModalOpen) {
      setContactModalOpen(true);
    }
  };

  return (
    <footer className="vl-footer" id="contact" aria-label="Website Footer">
      <div className="vl-container">
        {/* CENTERED HERO SECTION */}
        <div className="vl-footer-center">
          {/* 3 SOCIAL MEDIA ICONS (INSTAGRAM, GITHUB, LINKEDIN) */}
          <div className="vl-footer-socials">
            <a
              href="https://www.instagram.com/web.tek_"
              target="_blank"
              rel="noopener noreferrer"
              className="vl-social-card"
              aria-label="Instagram"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>

            <a
              href="https://github.com/afsallll005-cloud"
              target="_blank"
              rel="noopener noreferrer"
              className="vl-social-card"
              aria-label="GitHub"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/mohammed-afsal-8a52b23aa"
              target="_blank"
              rel="noopener noreferrer"
              className="vl-social-card"
              aria-label="LinkedIn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c-.97 0-1.75-.79-1.75-1.76s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.76-1.75 1.76m1.39 9.74v-8.37H5.07v8.37h2.78z" />
              </svg>
            </a>
          </div>

          {/* "LET'S TALK ↗" HEADLINE WITH SOLID UNDERLINE */}
          <div className="vl-talk-wrap">
            <button
              type="button"
              className="vl-talk-btn"
              onClick={handleOpenContact}
              aria-label="Let's Talk - Open contact form"
            >
              <div className="vl-talk-row">
                <span className="vl-talk-title">Let's Talk</span>
                <span className="vl-talk-arrow" aria-hidden="true">
                  <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </span>
              </div>
              <div className="vl-talk-underline" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* HORIZONTAL FULL-WIDTH DIVIDER */}
        <div className="vl-footer-divider" />

        {/* BOTTOM ROW: EMAIL (LEFT) & COPYRIGHT + ADMIN (RIGHT) */}
        <div className="vl-footer-bottom">
          <a href="mailto:afsallll005@gmail.com" className="vl-footer-email">
            afsallll005@gmail.com
          </a>

          <div className="vl-footer-right">
            <span className="vl-footer-copyright">
              © 2026 Mhdafsal, All Rights Reserved
            </span>
            <a href="/Admin" className="vl-footer-admin-link">
              Admin
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
