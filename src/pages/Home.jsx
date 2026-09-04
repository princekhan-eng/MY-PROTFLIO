import OptimizedImg from "../compoants/imgeoptimizing";
import profile from "../assets/ChatGPT Image Jul 10, 2026, 09_30_17 PM.png";
import CV from "../assets/Muhammad_Luqman_CV.pdf";
import StatsCounter from "../compoants/StatsCounter";
import ServicesList from "../compoants/ServicesList";
import { Link } from "react-router-dom";

function Home({ onOpenATS }) {
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = CV;
    link.download = "Muhammad_Luqman_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const coreTech = [
    "React 19",
    "Node.js",
    "Express.js",
    "MongoDB",
    "TypeScript",
    "REST APIs",
    "SCSS / Sass",
    "UI/UX Architecture"
  ];

  return (
    <div className="page-wrapper">
      {/* Dynamic SCSS Ambient Orbs */}
      <div className="ambient-orb ambient-orb--cyan animate-drift-1" style={{ top: "4rem", right: "8%" }}></div>
      <div className="ambient-orb ambient-orb--violet animate-drift-2" style={{ bottom: "10rem", left: "5%" }}></div>
      <div className="ambient-orb ambient-orb--indigo" style={{ top: "40%", left: "35%" }}></div>

      {/* Cyber Grid Pattern Background */}
      <div className="bg-grid-overlay"></div>

      <div className="container">
        {/* Hero Section Grid */}
        <section className="hero">
          <div className="hero__grid">
            
            {/* Left Column: Hero Text */}
            <div className="hero__content">
              
              {/* Role Pill */}
              <div className="hero__role-tag badge-pill badge-pill--cyan animate-fade-up">
                <span style={{ width: "6px", height: "6px", borderRadius: "9999px", background: "#06b6d4" }}></span>
                <span>MERN Stack Engineer & UI Architect</span>
              </div>

              {/* Main Title */}
              <h1 className="hero__title animate-fade-up delay-1">
                Muhammad <br />
                <span className="text-gradient-white">Luqman.</span>
              </h1>

              {/* Available Status Row */}
              <div className="hero__status-row animate-fade-up delay-2">
                <div className="status-beacon">
                  <span className="status-beacon__ping"></span>
                  <span className="status-beacon__dot"></span>
                </div>
                <span>Available for Full-Time Roles, Contract & Freelance Projects</span>
              </div>

              {/* Lead Paragraph */}
              <p className="hero__desc animate-fade-up delay-3">
                Architecting resilient full-stack web applications and high-converting user experiences with <strong>React 19, Node.js, Express, MongoDB</strong>, and modular <code>SCSS</code> engineering. Dedicated to clean code, micro-animations, and fast performance.
              </p>

              {/* Tech Stack Chips */}
              <div className="hero__tech-ticker animate-fade-up delay-4">
                {coreTech.map((tech) => (
                  <span key={tech} className="badge-mono">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="hero__ctas animate-fade-up delay-5">
                <Link to="/contact" className="btn btn--primary">
                  <span>Let's Build Together</span>
                  <span>→</span>
                </Link>

                <button
                  onClick={onOpenATS}
                  className="btn btn--cyber"
                >
                  <span>⚡ View ATS Resume</span>
                </button>

                <button
                  onClick={downloadCV}
                  className="btn btn--glass"
                >
                  <span>Download CV</span>
                  <svg style={{ width: "1rem", height: "1rem", color: "#06b6d4" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                </button>
              </div>

            </div>

            {/* Right Column: Hero Profile Image with Glowing Orbitals */}
            <div className="hero__avatar-wrapper animate-fade-up delay-2">
              <div className="hero__avatar-frame">
                
                {/* Ambient Aura */}
                <div className="hero__avatar-glow"></div>

                {/* Outer Ring */}
                <div className="hero__avatar-ring">
                  <div className="hero__avatar-ring-gradient">
                    <OptimizedImg
                      src={profile}
                      alt="Muhammad Luqman"
                    />
                  </div>
                </div>

                {/* Floating Experience Badge */}
                <div className="hero__chip hero__chip--left animate-float">
                  <div className="hero__chip-badge">2+</div>
                  <div>
                    <div className="hero__chip-title">Years Dev Exp.</div>
                    <div className="hero__chip-sub">Full-Stack MERN</div>
                  </div>
                </div>

                {/* Floating Projects Shipped Badge */}
                <div className="hero__chip hero__chip--right">
                  <div className="status-beacon">
                    <span className="status-beacon__ping"></span>
                    <span className="status-beacon__dot"></span>
                  </div>
                  <div className="hero__chip-title" style={{ fontSize: "0.75rem" }}>
                    30+ Projects Shipped
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* Stats Counter Section */}
        <StatsCounter />

        {/* Services Showcase Section */}
        <ServicesList />
      </div>
    </div>
  );
}

export default Home;