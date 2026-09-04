export default function SkillMatrix() {
  const skillCategories = [
    {
      category: "Frontend Engineering",
      dotClass: "cat-dot--cyan",
      skills: ["React 19", "JavaScript (ES6+)", "TypeScript", "Next.js", "SCSS / Sass", "Framer Motion", "Redux Toolkit", "HTML5 & CSS3"]
    },
    {
      category: "Backend & Systems",
      dotClass: "cat-dot--emerald",
      skills: ["Node.js", "Express.js", "MongoDB", "Mongoose ORM", "REST APIs", "JWT Security", "HTTP-Only Cookies", "Bcrypt Hashing", "Middleware Design"]
    },
    {
      category: "Tooling & Cloud DevOps",
      dotClass: "cat-dot--violet",
      skills: ["Git & GitHub", "Vite", "Postman", "Vercel", "NPM & Scripts", "Chrome DevTools", "VS Code", "Lighthouse Profiling"]
    },
    {
      category: "Architectural & Core Skills",
      dotClass: "cat-dot--amber",
      skills: ["Component Architecture", "Performance Optimization", "Clean Code Standards", "Mobile-First Design", "Agile & Scrum", "Technical Problem Solving"]
    }
  ];

  return (
    <section className="skills-section">
      {/* Sub-heading */}
      <div className="skills-section__header">
        <span className="section-label">Technical Competencies</span>
        <h2>
          Tech <span className="text-gradient-cyan">Arsenal.</span>
        </h2>
        <p style={{ marginTop: "0.5rem", fontSize: "1rem" }}>
          Technologies, libraries, and frameworks I use to engineer scalable, high-speed web platforms.
        </p>
      </div>

      {/* Grid */}
      <div className="skills-section__grid">
        {skillCategories.map((cat) => (
          <div key={cat.category} className="skills-section__category">
            <div className="skills-section__category-header">
              <div className="skills-section__category-header-left">
                <span className={`cat-dot ${cat.dotClass}`}></span>
                <h3>{cat.category}</h3>
              </div>
              <span className="count">{cat.skills.length} Skills</span>
            </div>

            <div className="skills-section__category-pills">
              {cat.skills.map((skill) => (
                <span key={skill} className="badge-mono">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
