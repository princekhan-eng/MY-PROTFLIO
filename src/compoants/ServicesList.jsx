export default function ServicesList() {
  const services = [
    {
      icon: "💻",
      title: "Full-Stack Web Development",
      desc: "Custom web applications engineered from scratch using React 19, Node.js, Express, and MongoDB. Clean modular architecture, database schema design, and performant REST API endpoints.",
      tags: ["MERN Stack", "React 19", "Node.js", "Express", "MongoDB", "SCSS / CSS Modules"],
      glowClass: "services-section__card-glow--cyan"
    },
    {
      icon: "⚡",
      title: "Enterprise SaaS & Workspaces",
      desc: "Interactive dashboards, multi-step employee onboarding flows, Kanban task managers, and bespoke workflow platforms built for scale and operational clarity.",
      tags: ["Kanban Board", "Employee Directory", "Interactive Wizard", "SaaS UI"],
      glowClass: "services-section__card-glow--violet"
    },
    {
      icon: "🔒",
      title: "REST APIs & Security Architecture",
      desc: "Production-grade backend architectures featuring JWT authentication stored in HTTP-only cookies, role-based authorization, rate limiting, and Postman-tested APIs.",
      tags: ["RESTful API", "JWT Security", "HTTP-Only Cookies", "Bcrypt", "Postman Verified"],
      glowClass: "services-section__card-glow--emerald"
    },
    {
      icon: "🚀",
      title: "UI/UX & Performance Engineering",
      desc: "Upgrading slow and legacy web interfaces into silky-smooth 60fps experiences with 95+ Google Lighthouse scores, mobile-first responsiveness, and luxury dark themes.",
      tags: ["SCSS", "Lighthouse 95+", "Responsive Design", "Micro-Animations"],
      glowClass: "services-section__card-glow--indigo"
    }
  ];

  return (
    <section className="services-section">
      {/* Section Header */}
      <div className="services-section__header">
        <div className="services-section__header-info">
          <span className="section-label">Engineering Services</span>
          <h2>
            Services & <span className="text-gradient-cyan">Solutions.</span>
          </h2>
          <p style={{ marginTop: "0.5rem", fontSize: "1rem" }}>
            High-caliber software development and technical solutions tailored for startups, product teams, and businesses.
          </p>
        </div>

        <div className="services-section__header-badge">
          ✨ Production-Ready Code Standards
        </div>
      </div>

      {/* Services Grid */}
      <div className="services-section__grid">
        {services.map((srv, idx) => (
          <div key={idx} className="services-section__card">
            {/* Ambient Hover Glow */}
            <div className={`services-section__card-glow ${srv.glowClass}`}></div>

            <div>
              <div className="services-section__card-icon">
                {srv.icon}
              </div>

              <h3 className="services-section__card-title">
                {srv.title}
              </h3>

              <p className="services-section__card-desc">
                {srv.desc}
              </p>
            </div>

            <div className="services-section__card-tags">
              {srv.tags.map((tag) => (
                <span key={tag} className="badge-mono">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
