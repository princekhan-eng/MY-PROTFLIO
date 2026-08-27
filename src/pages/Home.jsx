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

  return (
    <div className="relative min-h-screen bg-[#050505] text-white flex flex-col justify-center px-4 sm:px-6 md:px-10 overflow-hidden py-16 md:py-12">
      {/* LIGHTWEIGHT RADIAL GLOW (NO GPU BLUR OVERHEAD) */}
      <div 
        className="absolute inset-0 pointer-events-none -z-10" 
        style={{
          background: `
            radial-gradient(circle at 85% 20%, rgba(6, 182, 212, 0.08) 0%, transparent 45%),
            radial-gradient(circle at 15% 80%, rgba(139, 92, 246, 0.08) 0%, transparent 45%),
            radial-gradient(circle at 50% 50%, transparent 0%, #050505 85%)
          `
        }}
      ></div>

      {/* Hero Section Grid */}
      <div className="w-full max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10 sm:gap-12 md:gap-6 lg:gap-0 relative z-10 py-8">
        {/* Left Side - Editorial Typography */}
        <div className="w-full md:w-1/2 space-y-5 sm:space-y-6 text-center md:text-left relative">
          {/* Decorators */}
          <div className="absolute -top-8 -left-4 text-slate-800 text-4xl font-thin select-none hidden lg:block">
            +
          </div>
          <div className="absolute top-20 -left-10 text-slate-800 text-2xl font-thin select-none hidden lg:block">
            +
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-widest lite-fade-up">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            MERN Stack Developer & Full Stack Engineer
          </div>

          <h1
            className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight sm:tracking-tighter leading-tight sm:leading-[0.95] lite-fade-up break-words"
          >
            Muhammad <br />
            <span className="text-slate-500">Luqman.</span>
          </h1>

          {/* Available Status Badge */}
          <div
            className="flex items-center gap-3 justify-center md:justify-start lite-fade-up"
          >
            <div className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </div>
            <span className="text-xs sm:text-sm text-slate-400 font-medium">
              Available for full-time roles & freelance work
            </span>
          </div>

          <p
            className="text-slate-400 text-sm sm:text-base leading-6 sm:leading-7 max-w-lg mx-auto md:mx-0 lite-fade-up"
          >
            Architecting robust full-stack web applications with <span className="text-white font-medium">React 19, Node.js, Express, MongoDB</span>, and modern UI engineering. Dedicated to clean code standards and high performance.
          </p>

          {/* ATS Keyword Badges Ticker */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 pt-1 lite-fade-up">
            {["React 19", "Node.js", "Express.js", "MongoDB", "TypeScript", "REST APIs", "Tailwind CSS"].map((tech) => (
              <span key={tech} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono text-slate-300">
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div
            className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center md:justify-start pt-3 lite-fade-up w-full"
          >
            <Link to="/contact" className="group relative w-full sm:w-auto px-6 sm:px-8 py-3.5 bg-white text-black rounded-full font-semibold text-sm tracking-wide overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:scale-105 text-center">
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                Hire Me
              </span>
              <div className="absolute inset-0 bg-slate-900 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
            </Link>

            <button
              onClick={onOpenATS}
              className="w-full sm:w-auto px-6 sm:px-7 py-3.5 bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 rounded-full font-semibold text-sm tracking-wide hover:bg-cyan-500/30 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/10"
            >
              <span>⚡ View ATS Resume</span>
            </button>

            <button
              onClick={downloadCV}
              className="w-full sm:w-auto px-6 sm:px-7 py-3.5 border border-slate-800 text-slate-400 rounded-full font-semibold text-sm tracking-wide hover:border-slate-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>Download CV</span>
              <svg
                className="w-4 h-4 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Right Side - Profile Image */}
        <div className="w-full md:w-1/2 flex justify-center pb-8 sm:pb-10 md:pb-0">
          <div
            className="relative w-56 h-56 xs:w-64 xs:h-64 sm:w-80 sm:h-80 md:w-88 md:h-88 lg:w-105 lg:h-105 group cursor-pointer"
          >
            {/* Image Container */}
            <div
              className="relative w-full h-full rounded-full p-1.5 bg-[#0a0a0a]"
            >
              <div className="w-full h-full rounded-full p-[3px] bg-gradient-to-r from-cyan-500/80 via-violet-500/40 to-transparent">
                <OptimizedImg
                  src={profile}
                  alt="Muhammad Luqman"
                  className="w-full h-full object-cover rounded-full shadow-2xl shadow-black/50"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Counter Section */}
      <div className="w-full max-w-7xl mx-auto relative z-10">
        <StatsCounter />
      </div>

      {/* Services Showcase Section */}
      <div className="w-full max-w-7xl mx-auto relative z-10">
        <ServicesList />
      </div>
    </div>
  );
}

export default Home;