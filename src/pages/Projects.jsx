import { useState } from "react";
import { Link } from "react-router-dom";

export default function Projects({ onOpenATS }) {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Fullstack", "Frontend", "Enterprise"];

  const projects = [
    {
      id: "managehub",
      title: "ManageHub — Team & Task Workspace",
      category: "Enterprise",
      badgeType: "Featured Enterprise Platform",
      badgeColor: "indigo",
      liveStatus: "Live Production",
      desc: "A comprehensive team collaboration platform engineered with React 19 and Node.js REST API. Features a 5-step guided onboarding wizard, real-time Kanban task management, department employee directory, role assignments, and interactive share updates newsfeed.",
      tech: ["React 19", "Node.js", "Express", "REST API", "Kanban Board", "Employee Directory", "SCSS Architecture"],
      liveUrl: "https://mengment-app.vercel.app/",
      repoUrl: "https://github.com/princekhan-eng/Team-mangment-applcation-",
      showcaseUrl: "/projects/managehub",
      featured: true,
    },
    {
      id: "hotel-restaurant",
      title: "Hotel & Restaurant Management System",
      category: "Fullstack",
      badgeType: "Full Stack Hospitality",
      badgeColor: "emerald",
      liveStatus: "Live Demo Available",
      desc: "Comprehensive hotel booking and restaurant reservation system featuring interactive room availability checker, online dining menu orders, automated bill calculation, customer reservations, and administrative management.",
      tech: ["React", "Node.js", "Express", "MongoDB", "REST APIs", "SCSS"],
      liveUrl: "https://mengment-app.vercel.app/",
      repoUrl: "https://github.com/princekhan-eng/HOtAL-AND-RETURANT-",
      featured: false,
    },
    {
      id: "banking",
      title: "Banking Management System",
      category: "Fullstack",
      badgeType: "Financial Security",
      badgeColor: "cyan",
      liveStatus: "Live Production",
      desc: "Production-ready financial web application implementing JWT auth stored in HTTP-only cookies, automated deposit/withdrawal calculations, user balance tracking, and secure funds transfer.",
      tech: ["React", "Node.js", "Express", "MongoDB", "JWT Auth", "HTTP-Only Cookies"],
      liveUrl: "https://frontend-banking-eta.vercel.app/",
      repoUrl: "https://github.com/princekhan-eng",
      featured: false,
    },
    {
      id: "ai-content",
      title: "AI Content Generator SaaS",
      category: "Frontend",
      badgeType: "AI Web SaaS",
      badgeColor: "violet",
      liveStatus: "Live Application",
      desc: "AI-powered web application for generating blogs, marketing copy, and social media content utilizing OpenAI GPT models with custom prompt templates and streaming text responses.",
      tech: ["React 19", "OpenAI API", "Node.js", "SCSS", "Async Streaming"],
      liveUrl: "https://frontend-banking-eta.vercel.app/",
      repoUrl: "https://github.com/princekhan-eng",
      featured: false,
    },
  ];

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Fullstack") return p.category === "Fullstack" || p.category === "Enterprise";
    if (activeFilter === "Frontend") return p.category === "Frontend";
    if (activeFilter === "Enterprise") return p.category === "Enterprise";
    return true;
  });

  return (
    <div className="page-wrapper">
      {/* Background Orbs */}
      <div className="ambient-orb ambient-orb--indigo animate-drift-1" style={{ top: "5rem", right: "6%" }}></div>
      <div className="ambient-orb ambient-orb--cyan animate-drift-2" style={{ bottom: "10rem", left: "6%" }}></div>
      <div className="bg-grid-overlay"></div>

      <div className="container">
        <section className="projects-section">

          {/* Page Header */}
          <div className="projects-section__header animate-fade-up">
            <div className="projects-section__header-info">
              <span className="section-label">Featured Works & Case Studies</span>
              <h1>
                Selected <br />
                <span className="text-gradient-cyan">Work & Systems.</span>
              </h1>
              <p style={{ marginTop: "0.75rem", fontSize: "1.05rem" }}>
                Production-grade web applications, microservices, and SaaS platforms engineered with React 19, Node.js, Express, MongoDB, and modern SCSS architecture.
              </p>
            </div>

            {/* Filter Pills & ATS CTA */}
            <div className="projects-section__header-controls">
              {onOpenATS && (
                <button
                  onClick={onOpenATS}
                  className="btn btn--cyber btn--sm"
                  aria-label="Open ATS Resume Modal"
                >
                  ⚡ ATS Format
                </button>
              )}

              <div className="projects-section__filters" role="tablist" aria-label="Project category filters">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`projects-section__filter-btn ${activeFilter === filter ? "active" : ""}`}
                    role="tab"
                    aria-selected={activeFilter === filter}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="projects-section__grid">

            {filteredProjects.map((project, idx) => {
              if (project.featured) {
                return (
                  <div key={project.id} className="projects-section__featured-card animate-fade-up">
                    <div className="projects-section__featured-card-layout">
                      
                      <div className="projects-section__featured-card-info">
                        <div className="projects-section__featured-card-tags">
                          <span className={`badge-pill badge-pill--${project.badgeColor}`}>
                            ★ {project.badgeType}
                          </span>
                          <span className="badge-pill badge-pill--emerald">
                            <span style={{ width: "6px", height: "6px", borderRadius: "9999px", background: "#10b981" }}></span>
                            {project.liveStatus}
                          </span>
                        </div>

                        <h2 className="projects-section__featured-card-title">
                          ManageHub — <span className="text-gradient-violet">Team & Task Workspace</span>
                        </h2>

                        <p className="projects-section__featured-card-desc">
                          {project.desc}
                        </p>

                        <div className="projects-section__featured-card-tech">
                          {project.tech.map((t) => (
                            <span key={t} className="badge-mono">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="projects-section__featured-card-actions">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn--indigo"
                        >
                          <span>Launch Live Site</span>
                          <svg style={{ width: "1rem", height: "1rem" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>

                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn--glass"
                        >
                          <span>GitHub Repository</span>
                          <svg style={{ width: "1rem", height: "1rem" }} fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                        </a>

                        {project.showcaseUrl && (
                          <Link
                            to={project.showcaseUrl}
                            className="btn btn--cyber"
                          >
                            <span>Interactive Showcase</span>
                            <span>→</span>
                          </Link>
                        )}
                      </div>

                    </div>
                  </div>
                );
              }

              return (
                <div key={project.id} className={`projects-section__card animate-fade-up delay-${(idx % 3) + 1}`}>
                  <div className="projects-section__card-top">
                    <div className="projects-section__card-header">
                      <span className={`badge-pill badge-pill--${project.badgeColor}`}>
                        {project.badgeType}
                      </span>
                      <span className="font-mono text-emerald" style={{ fontSize: "0.75rem", fontWeight: "700" }}>
                        ● {project.liveStatus}
                      </span>
                    </div>

                    <h3 className="projects-section__card-title">
                      {project.title}
                    </h3>

                    <p className="projects-section__card-desc">
                      {project.desc}
                    </p>
                  </div>

                  <div className="projects-section__card-bottom">
                    <div className="projects-section__card-tech">
                      {project.tech.map((t) => (
                        <span key={t} className="badge-mono">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap", marginTop: "0.5rem" }}>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="projects-section__card-link"
                      >
                        <span>Launch Live App</span>
                        <span>→</span>
                      </a>

                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn--glass btn--sm"
                        title="View GitHub Repository"
                      >
                        <span>Repo</span>
                        <svg style={{ width: "0.85rem", height: "0.85rem" }} fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}

          </div>

          {/* Bottom CTA Banner */}
          <div className="projects-section__cta-banner animate-fade-up">
            <div className="ambient-orb ambient-orb--cyan" style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}></div>

            <div className="projects-section__cta-banner-content">
              <h3>Interested in source code or customized engineering?</h3>
              <p>
                Review full GitHub repositories, inspect system architectures, or discuss custom development for your team.
              </p>

              <div className="projects-section__cta-banner-buttons">
                <a
                  href="https://github.com/princekhan-eng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary"
                >
                  <span>Explore GitHub Repositories</span>
                  <svg style={{ width: "1rem", height: "1rem" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>

                {onOpenATS && (
                  <button
                    onClick={onOpenATS}
                    className="btn btn--cyber"
                    aria-label="Open ATS Resume Modal"
                  >
                    ⚡ View ATS Resume Format
                  </button>
                )}
              </div>
            </div>
          </div>

        </section>
      </div>
    </div>
  );
}