import { NavLink } from "react-router-dom";
import CV from "../assets/Muhammad_Luqman_CV.pdf";

function Navbar() {
  const navItems = [
    { label: "HOME", to: "/" },
    { label: "ABOUT", to: "/about" },
    { label: "PROJECTS", to: "/projects" },
    { label: "CONTACT", to: "/contact" },
  ];

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = CV;
    link.download = "Muhammad_Luqman_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-center items-center h-16 sm:h-20 z-50 bg-[#050505]/80 backdrop-blur-2xl lite-fade-down border-b border-white/[0.05] px-2 sm:px-6">
      
      <div className="flex items-center justify-between w-full max-w-6xl mx-auto relative">

        {/* Left Logo */}
        <div className="hidden md:flex items-center gap-3">
          <NavLink to="/" className="text-white font-bold text-sm lg:text-base tracking-wider hover:text-cyan-400 transition">
            MUHAMMAD_LUQMAN_
          </NavLink>
          <div className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </div>
        </div>

        {/* Center: Premium Floating Pill Navigation */}
        <div className="mx-auto flex items-center gap-1 sm:gap-1.5 p-1 bg-[#0a0a0a]/90 backdrop-blur-xl rounded-full border border-white/10 shadow-2xl max-w-full overflow-x-auto no-scrollbar">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `text-[10px] xs:text-[11px] sm:text-[13px] font-semibold tracking-wide sm:tracking-[2px] whitespace-nowrap transition-all duration-300 rounded-full px-2.5 sm:px-4 py-1.5 sm:py-2 ${
                  isActive 
                    ? "text-white bg-gradient-to-r from-white/20 to-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]" 
                    : "text-slate-400 hover:text-white hover:bg-white/[0.05]"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Right CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <button 
            onClick={handleDownloadCV}
            className="text-[11px] font-bold tracking-widest text-cyan-300 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 px-4 py-2 rounded-full transition-all duration-300 flex items-center gap-1.5"
          >
            <span>DOWNLOAD CV</span>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </button>

          <NavLink 
            to="/contact" 
            className="text-[11px] font-semibold tracking-widest text-slate-400 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition-all duration-300"
          >
            LET'S TALK
          </NavLink>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;