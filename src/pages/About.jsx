import Experience from "../compoants/Experience";
import SkillMatrix from "../compoants/SkillMatrix";
import EducationCertifications from "../compoants/EducationCertifications";

export default function About({ onOpenATS }) {
  const process = [
    {
      step: "01",
      title: "Discovery & Architecture Strategy",
      desc: "Analyzing project goals, mapping system relationships, establishing MongoDB schemas, designing RESTful endpoints, and outlining component hierarchy before writing code."
    },
    {
      step: "02",
      title: "Full-Stack Engineering & UI Systems",
      desc: "Developing modular React 19 UI components with pure SCSS styling alongside robust Express.js middleware, input validation, and JWT security."
    },
    {
      step: "03",
      title: "Rigorous QA, Optimization & Cloud Deployment",
      desc: "Comprehensive Postman API validation, Chrome DevTools profiling, Google Lighthouse 95+ optimization, responsive cross-browser audits, and Vercel cloud deployment."
    }
  ];

  return (
    <div className="page-wrapper">
      {/* Background Orbs */}
      <div className="ambient-orb ambient-orb--violet animate-drift-1" style={{ top: "6rem", left: "6%" }}></div>
      <div className="ambient-orb ambient-orb--cyan animate-drift-2" style={{ bottom: "12rem", right: "6%" }}></div>
      <div className="bg-grid-overlay"></div>

      <div className="container">
        <section className="about-section">

          {/* Header */}
          <div className="about-section__header animate-fade-up">
            <div>
              <span className="section-label">Background & Philosophy</span>
              <h1>
                Architecting for <br />
                <span className="text-gradient-cyan">the modern web.</span>
              </h1>
            </div>

            {onOpenATS && (
              <button
                onClick={onOpenATS}
                className="btn btn--cyber"
              >
                ⚡ View ATS Resume Format
              </button>
            )}
          </div>

          {/* Main Grid: Bio & Terminal */}
          <div className="about-section__grid">

            {/* Left: Bio Text */}
            <div className="about-section__bio animate-fade-up">
              <p className="lead-text">
                I’m a <strong>MERN Stack Developer & Full Stack Engineer</strong> dedicated to building reliable, high-performance web products that blend robust architectural foundations with refined user experience design.
              </p>
              
              <p className="body-text">
                With deep hands-on expertise across <strong className="text-cyan">React 19, Node.js, Express, MongoDB, TypeScript</strong>, and pure SCSS modular styling, I engineer codebases that are cleanly structured, accessible, screen-reader verified, and easy to scale.
              </p>

              {/* Status Card */}
              <div className="about-section__status-card">
                <div className="status-beacon">
                  <span className="status-beacon__ping"></span>
                  <span className="status-beacon__dot"></span>
                </div>
                <div className="about-section__status-card-text">
                  <span className="label">Currently Building:</span>
                  <span className="value">ManageHub Enterprise Workspace & AI Tools</span>
                </div>
              </div>

              {/* Stats Row */}
              <div className="about-section__stats-row">
                {[
                  { num: "2+", label: "Years Experience" },
                  { num: "30+", label: "Projects Shipped" },
                  { num: "99.9%", label: "Clean Code Quality" }
                ].map((stat) => (
                  <div key={stat.label} className="stat-box">
                    <div className="stat-box__num">{stat.num}</div>
                    <div className="stat-box__label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Terminal JSON Window */}
            <div className="about-section__terminal animate-fade-up delay-1">
              <div className="terminal-window">
                <div className="terminal-window__header">
                  <div className="terminal-window__dots">
                    <span className="dot-red"></span>
                    <span className="dot-yellow"></span>
                    <span className="dot-green"></span>
                  </div>
                  <span className="terminal-window__title">muhammad_luqman.json</span>
                  <div style={{ width: "2rem" }}></div>
                </div>

                <div className="terminal-window__body">
                  <p style={{ color: "#64748b", marginBottom: "0.75rem" }}>// Full Stack Candidate Profile</p>
                  <div>
                    <p><span style={{ color: "#c4b5fd" }}>const</span> <span style={{ color: "#67e8f9" }}>engineer</span> <span style={{ color: "#94a3b8" }}>=</span> &#123;</p>
                    <div style={{ paddingLeft: "1rem", margin: "0.4rem 0", borderLeft: "1px solid rgba(255,255,255,0.1)", display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                      <p><span style={{ color: "#94a3b8" }}>name:</span> <span style={{ color: "#6ee7b7" }}>"Muhammad Luqman"</span>,</p>
                      <p><span style={{ color: "#94a3b8" }}>role:</span> <span style={{ color: "#6ee7b7" }}>"MERN Stack Developer"</span>,</p>
                      <p><span style={{ color: "#94a3b8" }}>location:</span> <span style={{ color: "#6ee7b7" }}>"Islamabad, PK"</span>,</p>
                      <p><span style={{ color: "#94a3b8" }}>stack:</span> [<span style={{ color: "#fde68a" }}>"React 19"</span>, <span style={{ color: "#fde68a" }}>"Node.js"</span>, <span style={{ color: "#fde68a" }}>"Express"</span>, <span style={{ color: "#fde68a" }}>"MongoDB"</span>],</p>
                      <p><span style={{ color: "#94a3b8" }}>atsVerified:</span> <span style={{ color: "#06b6d4" }}>true</span>,</p>
                      <p><span style={{ color: "#94a3b8" }}>status:</span> <span style={{ color: "#6ee7b7" }}>"Ready for New Challenges"</span></p>
                    </div>
                    <p>&#125;;</p>
                  </div>
                  
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginTop: "1rem", fontSize: "0.75rem", color: "#06b6d4" }}>
                    <span>❯</span>
                    <span className="animate-pulse-glow">compiling high performance software...</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Section 2: Experience */}
          <Experience />

          {/* Section 3: Skill Matrix */}
          <SkillMatrix />

          {/* Section 4: Education & Certifications */}
          <EducationCertifications />

          {/* Section 5: Development Workflow */}
          <div className="about-section__workflow">
            <div className="about-section__workflow-header animate-fade-up">
              <span className="section-label">Systematic Delivery</span>
              <h2>
                Development <span className="text-gradient-cyan">Workflow.</span>
              </h2>
              <p style={{ marginTop: "0.5rem", fontSize: "1rem" }}>
                An agile, disciplined engineering methodology designed for predictable and reliable software shipping.
              </p>
            </div>

            <div className="about-section__workflow-track animate-fade-up">
              {process.map((item) => (
                <div key={item.step} className="about-section__workflow-step">
                  <div className="about-section__workflow-step-card">
                    <div className="about-section__workflow-step-card-header">
                      <span className="step-num">{item.step}</span>
                      <h3 className="step-title">{item.title}</h3>
                    </div>
                    <p className="about-section__workflow-step-card-desc">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </section>
      </div>
    </div>
  );
}