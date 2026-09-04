import { useState } from "react";
import { Link } from "react-router-dom";

export default function Projects({ onOpenATS }) {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Fullstack", "Frontend", "Enterprise"];

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
                >
                  ⚡ ATS Format
                </button>
              )}

              <div className="projects-section__filters">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`projects-section__filter-btn ${activeFilter === filter ? "active" : ""}`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="projects-section__grid">

            {/* ================= FEATURED HERO PROJECT: ManageHub ================= */}
            {(activeFilter === "All" || activeFilter === "Fullstack" || activeFilter === "Enterprise") && (
              <div className="projects-section__featured-card animate-fade-up">
                <div className="projects-section__featured-card-layout">
                  
                  <div className="projects-section__featured-card-info">
                    <div className="projects-section__featured-card-tags">
                      <span className="badge-pill badge-pill--indigo">
                        ★ Featured Enterprise Platform
                      </span>
                      <span className="badge-pill badge-pill--emerald">
                        <span style={{ width: "6px", height: "6px", borderRadius: "9999px", background: "#10b981" }}></span>
                        Live Production
                      </span>
                    </div>

                    <h2 className="projects-section__featured-card-title">
                      ManageHub — <span className="text-gradient-violet">Team & Task Workspace</span>
                    </h2>

                    <p className="projects-section__featured-card-desc">
                      A comprehensive team collaboration platform built with React 19 and Node.js REST API. Features a 5-step guided onboarding wizard, real-time Kanban task management, department employee directory, role assignments, and interactive share updates newsfeed.
                    </p>

                    <div className="projects-section__featured-card-tech">
                      {["React 19", "Node.js", "Express", "REST API", "Kanban Board", "Employee Directory", "SCSS Architecture"].map((t) => (
                        <span key={t} className="badge-mono">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="projects-section__featured-card-actions">
                    <a
                      href="https://mengmenthub.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn--indigo"
                    >
                      <span>Launch Live Site</span>
                      <svg style={{ width: "1rem", height: "1rem" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>

                    <Link
                      to="/projects/managehub"
                      className="btn btn--glass"
                    >
                      Interactive Showcase →
                    </Link>
                  </div>

                </div>
              </div>
            )}

            {/* ================= Banking Project ================= */}
            {(activeFilter === "All" || activeFilter === "Fullstack") && (
              <div className="projects-section__card animate-fade-up delay-1">
                <div className="projects-section__card-top">
                  <div className="projects-section__card-header">
                    <span className="badge-pill badge-pill--cyan">
                      Fullstack MERN
                    </span>
                    <span className="font-mono text-emerald" style={{ fontSize: "0.75rem", fontWeight: "700" }}>
                      ● Live App
                    </span>
                  </div>

                  <h3 className="projects-section__card-title">
                    Banking Management <span className="text-cyan">System</span>
                  </h3>

                  <p className="projects-section__card-desc">
                    Production-ready financial web application implementing JWT auth stored in HTTP-only cookies, automated deposit/withdrawal calculations, user balance tracking, and secure funds transfer.
                  </p>
                </div>

                <div className="projects-section__card-bottom">
                  <div className="projects-section__card-tech">
                    {["React", "Node.js", "Express", "MongoDB", "JWT Auth"].map((t) => (
                      <span key={t} className="badge-mono">
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href="https://frontend-banking-eta.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projects-section__card-link"
                  >
                    <span>Launch Live Banking App</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            )}

            {/* ================= E-Commerce Platform ================= */}
            {(activeFilter === "All" || activeFilter === "Fullstack") && (
              <div className="projects-section__card animate-fade-up delay-2">
                <div className="projects-section__card-top">
                  <div className="projects-section__card-header">
                    <span className="badge-pill badge-pill--violet">
                      Full Stack E-Commerce
                    </span>
                    <span className="font-mono text-muted" style={{ fontSize: "0.75rem" }}>
                      Web Architecture
                    </span>
                  </div>

                  <h3 className="projects-section__card-title">
                    E-Commerce Platform
                  </h3>

                  <p className="projects-section__card-desc">
                    Modern MERN e-commerce application featuring dynamic product catalog management, real-time shopping cart state, multi-criteria search filters, checkout flow, and REST API order management.
                  </p>
                </div>

                <div className="projects-section__card-bottom">
                  <div className="projects-section__card-tech">
                    {["React", "Express", "MongoDB", "Redux", "SCSS"].map((t) => (
                      <span key={t} className="badge-mono">
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href="https://github.com/Mluqman-main"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projects-section__card-link"
                    style={{ color: "#c4b5fd" }}
                  >
                    <span>View Repository Details</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            )}

            {/* ================= AI Content Generator ================= */}
            {(activeFilter === "All" || activeFilter === "Frontend" || activeFilter === "Fullstack") && (
              <div className="projects-section__card animate-fade-up delay-3">
                <div className="projects-section__card-top">
                  <div className="projects-section__card-header">
                    <span className="badge-pill badge-pill--cyan">
                      AI Web SaaS
                    </span>
                    <span className="font-mono text-muted" style={{ fontSize: "0.75rem" }}>
                      OpenAI API
                    </span>
                  </div>

                  <h3 className="projects-section__card-title">
                    AI Content Generator
                  </h3>

                  <p className="projects-section__card-desc">
                    AI-powered web application for generating blogs, marketing copy, and social media content utilizing OpenAI GPT models with custom prompt templates and streaming text responses.
                  </p>
                </div>

                <div className="projects-section__card-bottom">
                  <div className="projects-section__card-tech">
                    {["React", "OpenAI API", "Node.js", "SCSS"].map((t) => (
                      <span key={t} className="badge-mono">
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href="https://github.com/Mluqman-main"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projects-section__card-link"
                  >
                    <span>Explore GitHub Project</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            )}

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
                  href="https://github.com/Mluqman-main"
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