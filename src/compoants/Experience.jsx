export default function Experience() {
  const experiences = [
    {
      role: "Full Stack MERN Developer",
      company: "Freelance & Client Projects",
      location: "Islamabad, Pakistan",
      period: "Jan 2024 – Present",
      type: "Contract / Full-time",
      highlights: [
        "Architected and deployed 30+ full-stack web applications and microservices using React 19, Node.js, Express.js, MongoDB, and modern SCSS architecture.",
        "Engineered ManageHub enterprise workspace platform with 5-step guided onboarding, Kanban task boards, employee directory, and real-time updates feed.",
        "Developed production Banking Management System with JWT authentication in HTTP-only cookies, automated transaction calculations, and secure funds transfer.",
        "Increased frontend page load speeds by 40% using React code-splitting, lazy-loaded components, optimized assets, and clean utility refactoring.",
        "Collaborated directly with clients to translate business specifications into responsive, pixel-perfect user interfaces and RESTful APIs."
      ],
      techStack: ["React 19", "Node.js", "Express.js", "MongoDB", "Pure SCSS", "JWT Auth", "REST APIs", "Vite"]
    },
    {
      role: "Frontend Web Developer Specialist",
      company: "Independent Web Solutions",
      location: "Islamabad, Pakistan",
      period: "Jun 2023 – Dec 2023",
      type: "Project Based",
      highlights: [
        "Created modern, high-converting landing pages and SaaS dashboards with fluid 60fps animations using Framer Motion and modern styling systems.",
        "Integrated third-party APIs including OpenAI GPT models for automated copy generation and Web3Forms for direct contact submission.",
        "Implemented mobile-first responsive design principles, ensuring 100% cross-browser compatibility across mobile, tablet, and desktop viewports.",
        "Enforced strict TypeScript and ESLint standards to eliminate runtime bugs and improve maintainability across multi-page web applications."
      ],
      techStack: ["React.js", "JavaScript (ES6+)", "SCSS", "Framer Motion", "REST APIs", "Git/GitHub"]
    }
  ];

  return (
    <section className="experience-section">
      {/* Header */}
      <div className="experience-section__header">
        <div>
          <span className="section-label">Career History & Milestones</span>
          <h2>
            Professional <span className="text-gradient-cyan">Experience.</span>
          </h2>
          <p style={{ marginTop: "0.5rem", fontSize: "1rem" }}>
            A proven record of designing, shipping, and maintaining web software with high reliability and user impact.
          </p>
        </div>

        <div className="badge-pill badge-pill--cyan">
          💼 2+ Years Professional Engineering
        </div>
      </div>

      {/* Timeline List */}
      <div className="experience-section__timeline">
        {experiences.map((exp, idx) => (
          <div key={idx} className="experience-section__item">
            <div className="experience-section__item-card">
              
              {/* Header */}
              <div className="experience-section__item-header">
                <div>
                  <h3 className="experience-section__item-role">
                    {exp.role}
                  </h3>
                  <div className="experience-section__item-meta">
                    <span className="company">{exp.company}</span>
                    <span>•</span>
                    <span>📍 {exp.location}</span>
                    <span>•</span>
                    <span className="badge-pill badge-pill--cyan" style={{ padding: "0.15rem 0.6rem", fontSize: "0.7rem" }}>
                      {exp.type}
                    </span>
                  </div>
                </div>

                <span className="badge-pill badge-pill--cyan" style={{ fontFamily: "monospace" }}>
                  {exp.period}
                </span>
              </div>

              {/* Bullets */}
              <ul className="experience-section__item-bullets">
                {exp.highlights.map((point, pIdx) => (
                  <li key={pIdx}>
                    <span className="bullet-icon">▹</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack */}
              <div className="experience-section__item-tech">
                {exp.techStack.map((tech) => (
                  <span key={tech} className="badge-mono">
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
