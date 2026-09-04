import { NavLink } from "react-router-dom";
import CV from "../assets/Muhammad_Luqman_CV.pdf";

function Navbar({ onOpenATS }) {
  const navItems = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Projects", to: "/projects" },
    { label: "Contact", to: "/contact" },
  ];

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = CV;
    link.download = "Muhammad_Luqman_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className="navbar animate-fade-down">
      <div className="container navbar__inner">

        {/* Left: Brand Logo & Live Beacon */}
        <div className="navbar__brand-wrapper" style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <NavLink to="/" className="navbar__brand">
            <span className="navbar__brand-icon">ML</span>
            <span className="navbar__brand-name">MUHAMMAD_LUQMAN</span>
          </NavLink>

          <div className="status-beacon" title="Available for hire">
            <span className="status-beacon__ping"></span>
            <span className="status-beacon__dot"></span>
          </div>
        </div>

        {/* Center: Frosted Glass Floating Nav Pills */}
        <nav className="navbar__nav" aria-label="Main Navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `navbar__link ${isActive ? "active" : ""}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Right: Actions */}
        <div className="navbar__actions">
          {onOpenATS && (
            <button
              onClick={onOpenATS}
              className="btn btn--cyber btn--sm btn-ats-nav"
            >
              <span>⚡</span>
              <span>ATS Resume</span>
            </button>
          )}

          <button 
            onClick={handleDownloadCV}
            className="btn btn--glass btn--sm btn-cv-nav"
          >
            <span>CV</span>
            <svg style={{ width: "0.875rem", height: "0.875rem", color: "#06b6d4" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </button>

          <NavLink 
            to="/contact" 
            className="btn btn--primary btn--sm"
          >
            Hire Me
          </NavLink>
        </div>

      </div>
    </header>
  );
}

export default Navbar;