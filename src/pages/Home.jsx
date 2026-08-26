import OptimizedImg from "../compoants/imgeoptimizing";
import profile from "../assets/ChatGPT Image Jul 10, 2026, 09_30_17 PM.png";
import CV from "../assets/Muhammad_Luqman_CV.pdf";

function Home() {
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = CV;
    link.download = CV;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative min-h-screen bg-[#050505] text-white flex items-center px-4 sm:px-6 md:px-10 overflow-hidden py-16 md:py-0">
      {/* LITE ANIMATED BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] max-w-150 max-h-150 bg-cyan-500/10 rounded-full blur-[100px] md:blur-[150px] animate-lite-drift-1"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[50vw] h-[50vw] max-w-125 max-h-125 bg-violet-500/10 rounded-full blur-[100px] md:blur-[150px] animate-lite-drift-2"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_70%)]"></div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10 sm:gap-12 md:gap-6 lg:gap-0 relative z-10">
        {/* Left Side - Editorial Typography */}
        <div className="w-full md:w-1/2 space-y-5 sm:space-y-6 text-center md:text-left relative">
          {/* Decorators */}
          <div className="absolute -top-8 -left-4 text-slate-800 text-4xl font-thin select-none hidden lg:block">
            +
          </div>
          <div className="absolute top-20 -left-10 text-slate-800 text-2xl font-thin select-none hidden lg:block">
            +
          </div>

          <p
            className="text-cyan-400/80 text-xs font-medium tracking-[0.3em] sm:tracking-[0.4em] uppercase lite-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Hello, I'm
          </p>

          <h1
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight sm:tracking-tighter leading-tight sm:leading-[0.95] lite-fade-up break-words"
            style={{ animationDelay: "0.2s" }}
          >
            Muhammad <br />
            <span className="text-slate-500">Luqman.</span>
          </h1>

          <h3
            className="text-sm sm:text-lg md:text-xl text-slate-400 font-normal lite-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            MERN Stack Web Developer
          </h3>

          {/* Available Status Badge */}
          <div
            className="flex items-center gap-3 justify-center md:justify-start lite-fade-up"
            style={{ animationDelay: "0.35s" }}
          >
            <div className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </div>
            <span className="text-xs sm:text-sm text-slate-500">
              Available for freelance work
            </span>
          </div>

          <p
            className="text-slate-500 text-sm sm:text-base leading-6 sm:leading-7 max-w-md mx-auto md:mx-0 lite-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            I build modern, responsive, and user-friendly web applications with
            clean UI design and powerful backend functionality.
          </p>

          {/* Premium Buttons */}
          <div
            className="flex flex-col xs:flex-row sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start pt-2 lite-fade-up w-full"
            style={{ animationDelay: "0.5s" }}
          >
            <button className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 bg-white text-black rounded-full font-semibold text-sm tracking-wide overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:scale-105">
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                Hire Me
              </span>
              <div className="absolute inset-0 bg-slate-900 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
            </button>

            <button
              onClick={downloadCV}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 border border-slate-800 text-slate-400 rounded-full font-semibold text-sm tracking-wide hover:border-slate-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
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

        {/* Right Side - 3D Interactive Image */}
        <div className="w-full md:w-1/2 flex justify-center pb-8 sm:pb-10 md:pb-0">
          <div
            className="relative w-56 h-56 xs:w-64 xs:h-64 sm:w-80 sm:h-80 md:w-88 md:h-88 lg:w-105 lg:h-105 group cursor-pointer"
            style={{ perspective: "1000px" }}
          >
            {/* Rotating Gradient Ring */}
            <div
              className="absolute inset-1.5 rounded-full animate-slow-spin opacity-50 group-hover:opacity-80 transition-opacity duration-700"
              style={{
                background:
                  "conic-gradient(from 0deg, transparent 60%, #06b6d4 80%, #8b5cf6 100%, transparent 120%)",
                filter: "blur(1px)",
              }}
            ></div>

            {/* Dynamic Glow */}
            <div className="absolute inset-0 bg-linear-to-br from-cyan-500/30 to-violet-500/30 rounded-full blur-3xl scale-75 opacity-0 group-hover:opacity-100 transition-all duration-1000 ease-out"></div>

            {/* Image Container with 3D Tilt */}
            <div
              className="relative w-full h-full rounded-full p-1.5 bg-[#0a0a0a] transition-all duration-700 ease-out group-hover:rotate-y-5 group-hover:-rotate-x-3 group-hover:scale-[1.02]"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="w-full h-full rounded-full p-[3px] bg-linear-to-r from-cyan-500 via-violet-500/30 to-transparent transition-all duration-700 ease-out group-hover:from-cyan-400 group-hover:via-violet-500/50">
                <OptimizedImg
                  src={profile}
                  alt="Muhammad Luqman"
                  className="w-full h-full object-cover rounded-full shadow-2xl shadow-black/50 group-hover:shadow-cyan-500/20 transition-all duration-700 ease-out"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;