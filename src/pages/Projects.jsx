import { useState } from "react";
import { Link } from "react-router-dom";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Fullstack", "Frontend", "Enterprise"];

  return (
    <div className="relative bg-[#050505] text-white min-h-screen overflow-hidden">

      {/* Background Accents */}
      <div className="absolute top-1/3 -left-48 w-[45vw] h-[45vw] max-w-125 max-h-125 bg-cyan-500/3 blur-[100px] md:blur-[150px] rounded-full -z-10"></div>
      <div className="absolute bottom-1/3 -right-48 w-[38vw] h-[38vw] max-w-100 max-h-100 bg-violet-500/3 blur-[100px] md:blur-[150px] rounded-full -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-28 md:py-40">

        {/* Header */}
        <div className="relative mb-12 sm:mb-16 lite-fade-up">

          <div className="absolute -top-8 -right-4 text-slate-800 text-4xl font-thin select-none hidden lg:block">
            +
          </div>

          <div className="flex items-center gap-4 mb-5 sm:mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-cyan-500 to-transparent"></div>

            <p className="text-cyan-400/80 text-xs font-medium tracking-[0.3em] sm:tracking-[0.4em] uppercase">
              Portfolio
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 sm:gap-8">

            <div>
              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight sm:tracking-tighter leading-tight sm:leading-[0.95] mb-2">
                Selected <br />
                <span className="text-slate-500">work.</span>
              </h1>

              <p className="text-slate-600 text-sm mt-4">
                A collection of projects that define my expertise in modern web software engineering.
              </p>
            </div>

            <div className="flex items-center gap-1 p-1 bg-white/5 rounded-full border border-white/5 overflow-x-auto max-w-full no-scrollbar">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`shrink-0 px-4 sm:px-5 py-2 text-xs font-medium tracking-wider rounded-full transition-all duration-300 ${activeFilter === filter
                    ? "bg-white text-black font-semibold"
                    : "text-slate-500 hover:text-white"
                    }`}
                >
                  {filter}
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* ================= NEW FEATURED PROJECT: ManageHub ================= */}
          {(activeFilter === "All" || activeFilter === "Fullstack" || activeFilter === "Enterprise") && (
            <div
              className="group relative md:col-span-2 md:row-span-2 rounded-2xl border border-indigo-500/30 bg-[#070913] overflow-hidden hover:-translate-y-2 hover:border-indigo-400/60 transition-all duration-500 shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/15 via-transparent to-cyan-500/10 pointer-events-none"></div>

              <div className="relative p-5 sm:p-8 md:p-10 flex flex-col justify-between h-full min-h-[400px] sm:min-h-[500px] md:min-h-[580px]">

                <div>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                    <span className="px-3 py-1 rounded-full text-[10px] sm:text-xs uppercase tracking-widest bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 font-semibold">
                      ★ Featured Enterprise Application
                    </span>
                    <span className="px-3 py-1 rounded-full text-[10px] sm:text-xs uppercase tracking-widest bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      Live Production
                    </span>
                  </div>

                  <h2 className="mt-5 sm:mt-8 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    ManageHub
                    <br />
                    <span className="text-indigo-400">Team & Task</span>
                    <br />
                    <span className="text-slate-400">Management Platform</span>
                  </h2>

                  <p className="mt-5 sm:mt-8 text-slate-300 max-w-2xl leading-6 sm:leading-8 text-xs sm:text-base">
                    A comprehensive team collaboration platform featuring 5-step guided onboarding, company task tracking (Kanban & list views), employee directory management, department role assignments, and interactive share updates newsfeed.
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
                    <span className="px-2.5 sm:px-4 py-1 sm:py-2 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-sm">
                      React 19
                    </span>
                    <span className="px-2.5 sm:px-4 py-1 sm:py-2 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-sm">
                      Node.js / Express
                    </span>
                    <span className="px-2.5 sm:px-4 py-1 sm:py-2 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-sm">
                      REST API
                    </span>
                    <span className="px-2.5 sm:px-4 py-1 sm:py-2 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-sm">
                      Task Kanban
                    </span>
                    <span className="px-2.5 sm:px-4 py-1 sm:py-2 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-sm">
                      Employee Directory
                    </span>
                    <span className="px-2.5 sm:px-4 py-1 sm:py-2 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-sm">
                      Share Updates Feed
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <a
                      href="https://mengment-app.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto justify-center px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs sm:text-base transition shadow-lg shadow-indigo-600/30 flex items-center gap-2"
                    >
                      <span>Live Site (mengment-app.vercel.app)</span>
                      <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>

                    <Link
                      to="/projects/managehub"
                      className="w-full sm:w-auto text-center px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl border border-white/20 hover:border-indigo-400 hover:text-indigo-300 font-semibold text-xs sm:text-base transition"
                    >
                      Interactive Overview →
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* ================= Featured Banking Project ================= */}
          {(activeFilter === "All" || activeFilter === "Fullstack") && (
            <a
              href="https://frontend-banking-eta.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl border border-cyan-500/20 bg-[#0a0a0a] overflow-hidden hover:-translate-y-2 hover:border-cyan-400/40 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-500/10"></div>

              <div className="relative p-6 sm:p-8 flex flex-col justify-between h-full min-h-[320px]">
                <div>
                  <span className="px-3 py-1 rounded-full text-xs uppercase tracking-widest bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    Fullstack MERN
                  </span>

                  <h3 className="mt-4 text-2xl sm:text-3xl font-bold leading-tight">
                    Banking Management <span className="text-cyan-400">System</span>
                  </h3>

                  <p className="mt-4 text-slate-400 leading-6 text-sm">
                    Production-ready MERN Stack banking application with JWT auth, HTTP-only cookies, money transfers & history.
                  </p>
                </div>

                <div className="mt-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs">React</span>
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs">Node.js</span>
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs">MongoDB</span>
                  </div>

                  <div className="flex items-center justify-between text-cyan-400 text-sm font-semibold group-hover:translate-x-2 transition">
                    <span>Live Demo →</span>
                  </div>
                </div>
              </div>
            </a>
          )}

          {/* ================= E-Commerce Project ================= */}
          {(activeFilter === "All" || activeFilter === "Fullstack") && (
            <a
              href="#"
              className="group relative rounded-2xl border border-white/5 bg-[#0a0a0a] overflow-hidden hover:-translate-y-2 hover:border-cyan-400/30 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-violet-500/5 opacity-0 group-hover:opacity-100 transition duration-500"></div>

              <div className="relative p-6 sm:p-8 flex flex-col justify-between h-full min-h-[320px]">
                <div>
                  <span className="text-xs text-cyan-400 tracking-widest uppercase">
                    Full Stack
                  </span>

                  <h3 className="text-2xl sm:text-3xl font-bold mt-4 mb-3">
                    E-Commerce Platform
                  </h3>

                  <p className="text-slate-400 leading-6 text-sm">
                    Modern MERN e-commerce application featuring product management, shopping cart, and order processing.
                  </p>
                </div>

                <div className="mt-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs">React</span>
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs">Express</span>
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs">MongoDB</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 text-xs">2026</span>
                    <span className="flex items-center gap-1 text-cyan-400 font-medium text-sm group-hover:translate-x-2 transition">
                      View Details →
                    </span>
                  </div>
                </div>
              </div>
            </a>
          )}

          {/* ================= AI Content Generator ================= */}
          {(activeFilter === "All" || activeFilter === "Frontend" || activeFilter === "Fullstack") && (
            <a
              href="#"
              className="group relative rounded-2xl border border-white/5 bg-[#0a0a0a] overflow-hidden hover:-translate-y-2 hover:border-cyan-400/30 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition duration-500"></div>

              <div className="relative p-6 sm:p-8 flex flex-col justify-between h-full min-h-[320px]">
                <div>
                  <span className="text-xs text-cyan-400 tracking-widest uppercase">
                    AI Project
                  </span>

                  <h3 className="text-2xl sm:text-3xl font-bold mt-4 mb-3">
                    AI Content Generator
                  </h3>

                  <p className="text-slate-400 leading-6 text-sm">
                    AI-powered web application for generating blogs, marketing copy and social media content.
                  </p>
                </div>

                <div className="mt-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs">React</span>
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs">OpenAI</span>
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs">Tailwind</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 text-xs">2025</span>
                    <span className="flex items-center gap-1 text-cyan-400 font-medium text-sm group-hover:translate-x-2 transition">
                      View Details →
                    </span>
                  </div>
                </div>
              </div>
            </a>
          )}

        </div>

        {/* Bottom CTA */}
        <div
          className="text-center mt-16 sm:mt-20 md:mt-24 lite-fade-up"
          style={{ animationDelay: "0.5s" }}
        >
          <p className="text-slate-500 text-sm mb-6 sm:mb-8">
            Interested in working together or seeing more projects?
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">

            <a
              href="https://github.com/Mluqman-main"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-3.5 sm:py-4 rounded-xl bg-white text-black font-semibold hover:scale-105 transition duration-300 text-sm"
            >
              Explore GitHub

              <svg
                className="w-5 h-5 shrink-0"
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

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 px-8 py-3.5 sm:py-4 rounded-xl border border-white/10 hover:border-cyan-400 hover:text-cyan-400 transition duration-300 text-sm"
            >
              Contact Me
            </Link>

          </div>
        </div>

      </div>
    </div>
  );
}