import { useState } from "react";
import { Link } from "react-router-dom";

export default function Projects({ onOpenATS }) {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Fullstack", "Frontend", "Enterprise"];

  return (
    <div className="relative bg-[#050505] text-white min-h-screen overflow-hidden">

      {/* Lightweight Radial Glow */}
      <div 
        className="absolute inset-0 pointer-events-none -z-10"
        style={{
          background: `
            radial-gradient(circle at 10% 20%, rgba(6, 182, 212, 0.05) 0%, transparent 40%),
            radial-gradient(circle at 90% 80%, rgba(139, 92, 246, 0.05) 0%, transparent 40%)
          `
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-28 md:py-32">

        {/* Header */}
        <div className="relative mb-10 sm:mb-14 lite-fade-up">

          <div className="absolute -top-8 -right-4 text-slate-800 text-4xl font-thin select-none hidden lg:block">
            +
          </div>

          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-cyan-500 to-transparent"></div>

            <p className="text-cyan-400/80 text-xs font-medium tracking-[0.3em] uppercase">
              Featured Software Engineering Portfolio
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">

            <div>
              <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-2">
                Selected <br />
                <span className="text-slate-500">work & projects.</span>
              </h1>

              <p className="text-slate-400 text-xs sm:text-sm mt-3 max-w-xl">
                Production-ready web applications, microservices, and full-stack platforms engineered with React 19, Node.js, Express, and MongoDB.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenATS}
                className="px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 hover:bg-cyan-500/20 text-xs font-semibold tracking-wider transition flex items-center gap-1.5"
              >
                ⚡ ATS Resume Format
              </button>

              <div className="flex items-center gap-1 p-1 bg-white/5 rounded-full border border-white/5 overflow-x-auto max-w-full no-scrollbar">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`shrink-0 px-4 py-1.5 text-xs font-medium tracking-wider rounded-full transition-all duration-300 ${activeFilter === filter
                      ? "bg-white text-black font-semibold"
                      : "text-slate-400 hover:text-white"
                      }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">

          {/* ================= FEATURED HERO PROJECT: ManageHub (Full Width Banner) ================= */}
          {(activeFilter === "All" || activeFilter === "Fullstack" || activeFilter === "Enterprise") && (
            <div
              className="group relative lg:col-span-3 rounded-2xl border border-indigo-500/30 bg-[#070913] overflow-hidden hover:border-indigo-400/60 transition-all duration-500 shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/15 via-transparent to-cyan-500/10 pointer-events-none"></div>

              <div className="relative p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row justify-between lg:items-center gap-6">

                <div className="max-w-3xl space-y-4">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                    <span className="px-3 py-1 rounded-full text-[10px] sm:text-xs uppercase tracking-widest bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 font-semibold">
                      ★ Featured Enterprise Application
                    </span>
                    <span className="px-3 py-1 rounded-full text-[10px] sm:text-xs uppercase tracking-widest bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      Live Production
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold leading-snug text-white">
                    ManageHub — <span className="text-indigo-400">Team & Task Management Platform</span>
                  </h2>

                  <p className="text-slate-300 leading-relaxed text-xs sm:text-sm max-w-2xl">
                    A comprehensive team collaboration workspace built with React 19 and Node.js REST API. Features a 5-step guided onboarding wizard, real-time Kanban task management, department employee directory, role assignments, and interactive share updates newsfeed.
                  </p>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {["React 19", "Node.js", "Express", "REST API", "Kanban Board", "Employee Directory", "Tailwind CSS"].map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-xs font-mono text-slate-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
                  <a
                    href="https://mengment-app.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="justify-center px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs sm:text-sm transition shadow-lg shadow-indigo-600/30 flex items-center gap-2 text-center"
                  >
                    <span>Launch Live Site</span>
                    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>

                  <Link
                    to="/projects/managehub"
                    className="text-center px-6 py-3 rounded-xl border border-white/20 hover:border-indigo-400 hover:text-indigo-300 font-semibold text-xs sm:text-sm transition"
                  >
                    Interactive Showcase →
                  </Link>
                </div>

              </div>
            </div>
          )}

          {/* ================= Banking Project ================= */}
          {(activeFilter === "All" || activeFilter === "Fullstack") && (
            <div
              className="group relative rounded-2xl border border-cyan-500/20 bg-[#0a0a0a] overflow-hidden hover:-translate-y-1 hover:border-cyan-400/40 transition-all duration-500 flex flex-col justify-between h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-500/10"></div>

              <div className="relative p-6 flex flex-col justify-between h-full space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] uppercase tracking-widest bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-bold">
                      Fullstack MERN
                    </span>
                    <span className="text-[10px] text-emerald-400 font-mono">Live Production</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 leading-snug">
                    Banking Management <span className="text-cyan-400">System</span>
                  </h3>

                  <p className="text-slate-400 text-xs leading-relaxed mb-4">
                    Production-ready financial web application implementing JWT auth stored in HTTP-only cookies, automated deposit/withdrawal calculations, user balance tracking, and secure funds transfer.
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {["React", "Node.js", "Express", "MongoDB", "JWT Auth"].map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] text-slate-300">
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href="https://frontend-banking-eta.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-cyan-400 text-xs font-bold group-hover:translate-x-1 transition pt-1"
                  >
                    <span>Launch Live Banking App</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* ================= E-Commerce Platform ================= */}
          {(activeFilter === "All" || activeFilter === "Fullstack") && (
            <div
              className="group relative rounded-2xl border border-white/5 bg-[#0a0a0a] overflow-hidden hover:-translate-y-1 hover:border-cyan-400/30 transition-all duration-500 flex flex-col justify-between h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-violet-500/5 opacity-0 group-hover:opacity-100 transition duration-500"></div>

              <div className="relative p-6 flex flex-col justify-between h-full space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[10px] text-cyan-400 tracking-widest uppercase font-bold px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10">
                      Full Stack E-Commerce
                    </span>
                    <span className="text-[10px] text-slate-500 font-mono">Web Application</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 leading-snug">
                    E-Commerce Platform
                  </h3>

                  <p className="text-slate-400 text-xs leading-relaxed mb-4">
                    Modern MERN e-commerce application featuring dynamic product management catalog, real-time shopping cart state, search filters, checkout flow, and REST API order management.
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {["React", "Express", "MongoDB", "Redux", "Tailwind"].map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] text-slate-300">
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href="https://github.com/Mluqman-main"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-cyan-400 text-xs font-bold group-hover:translate-x-1 transition pt-1"
                  >
                    <span>View Repository Details</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* ================= AI Content Generator ================= */}
          {(activeFilter === "All" || activeFilter === "Frontend" || activeFilter === "Fullstack") && (
            <div
              className="group relative rounded-2xl border border-white/5 bg-[#0a0a0a] overflow-hidden hover:-translate-y-1 hover:border-cyan-400/30 transition-all duration-500 flex flex-col justify-between h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition duration-500"></div>

              <div className="relative p-6 flex flex-col justify-between h-full space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[10px] text-violet-400 tracking-widest uppercase font-bold px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10">
                      AI Web SaaS
                    </span>
                    <span className="text-[10px] text-slate-500 font-mono">AI API Integration</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 leading-snug">
                    AI Content Generator
                  </h3>

                  <p className="text-slate-400 text-xs leading-relaxed mb-4">
                    AI-powered web application for generating blogs, marketing copy, and social media content utilizing OpenAI GPT APIs with custom prompt templates.
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {["React", "OpenAI API", "Node.js", "Tailwind CSS"].map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] text-slate-300">
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href="https://github.com/Mluqman-main"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-cyan-400 text-xs font-bold group-hover:translate-x-1 transition pt-1"
                  >
                    <span>Explore GitHub Project</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Bottom CTA */}
        <div
          className="text-center mt-16 sm:mt-20 lite-fade-up"
        >
          <p className="text-slate-400 text-xs sm:text-sm mb-6">
            Interested in reviewing full source code repositories or discussing custom development?
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">

            <a
              href="https://github.com/Mluqman-main"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-xl bg-white text-black font-semibold hover:scale-105 transition duration-300 text-xs sm:text-sm"
            >
              Explore All Repositories on GitHub

              <svg
                className="w-4 h-4 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>

            <button
              onClick={onOpenATS}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/30 transition duration-300 text-xs sm:text-sm font-semibold"
            >
              ⚡ View ATS Resume Format
            </button>

          </div>
        </div>

      </div>
    </div>
  );
}