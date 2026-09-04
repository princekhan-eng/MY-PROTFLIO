import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__glow"></div>

      <div className="container">
        {/* Top Grid */}
        <div className="footer__grid">
          
          {/* Brand Column */}
          <div className="footer__brand">
            <div className="footer__brand-title-row">
              <h3>MUHAMMAD_LUQMAN</h3>
              <div className="status-beacon" title="Available for work">
                <span className="status-beacon__ping"></span>
                <span className="status-beacon__dot"></span>
              </div>
            </div>
            <p className="footer__brand-desc">
              Architecting modern digital experiences and scalable full-stack web software with clean code and pixel-perfect design.
            </p>
          </div>

          {/* Nav Column */}
          <div className="footer__nav">
            <h4 className="footer__nav-title">Navigation</h4>
            <ul className="footer__nav-list">
              {[
                { label: "Home", to: "/" },
                { label: "About & Experience", to: "/about" },
                { label: "Selected Projects", to: "/projects" },
                { label: "ManageHub Showcase", to: "/projects/managehub" },
                { label: "Contact & Hire", to: "/contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to}>
                    <span style={{ color: "#06b6d4" }}>▹</span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials Column */}
          <div className="footer__socials">
            <h4 className="footer__socials-title">Connect & Channels</h4>
            <div className="footer__socials-row">
              <a
                href="https://github.com/Mluqman-main"
                target="_blank"
                rel="noreferrer"
                className="social-btn"
                title="GitHub"
              >
                <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
              </a>

              <a
                href="https://www.linkedin.com/in/muhammad-luqman-0b4253335/"
                target="_blank"
                rel="noreferrer"
                className="social-btn"
                title="LinkedIn"
              >
                <svg fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </a>

              <a
                href="https://wa.me/923191844403"
                target="_blank"
                rel="noreferrer"
                className="social-btn social-btn--whatsapp"
                title="WhatsApp"
              >
                <svg fill="currentColor" viewBox="0 0 32 32"><path d="M19.11 17.38c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.08-.3-.15-1.28-.47-2.43-1.5-.9-.8-1.5-1.78-1.68-2.08-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.53.08-.8.38-.28.3-1.05 1.03-1.05 2.5 0 1.48 1.08 2.9 1.23 3.1.15.2 2.12 3.24 5.14 4.54.72.31 1.28.5 1.72.64.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.08-.12-.28-.2-.58-.35zM16.02 3C8.84 3 3 8.84 3 16c0 2.82.92 5.42 2.47 7.53L4 29l5.64-1.48A12.95 12.95 0 0016.02 29C23.2 29 29 23.16 29 16S23.2 3 16.02 3zm0 23.5c-2.1 0-4.16-.57-5.95-1.65l-.43-.26-3.35.88.9-3.27-.28-.45A10.44 10.44 0 015.5 16c0-5.8 4.72-10.5 10.52-10.5S26.54 10.2 26.54 16s-4.72 10.5-10.52 10.5z" /></svg>
              </a>
            </div>
          </div>

        </div>

        {/* CTA Banner */}
        <div className="footer__cta">
          <div className="footer__cta-text">
            <h4>Have an opening or project in mind?</h4>
            <p>Let's connect and discuss how I can bring value to your engineering team.</p>
          </div>
          <Link to="/contact" className="btn btn--primary btn--sm">
            Let's Talk →
          </Link>
        </div>

        {/* Copyright */}
        <div className="footer__copyright">
          <p>© {currentYear} Muhammad Luqman. All rights reserved.</p>
          <p>100% Pure Modular SCSS Architecture</p>
        </div>
      </div>
    </footer>
  );
}