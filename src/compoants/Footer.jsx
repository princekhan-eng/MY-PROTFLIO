import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative bg-[#050505] border-t border-white/5 pt-16 pb-8 overflow-hidden">

      {/* Subtle top glow to blend with the page */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[100px] bg-cyan-500/5 blur-[100px]"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Top Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 lite-fade-up">

          {/* Brand Column */}
          <div className="md:col-span-1">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4">
              <h3 className="text-white font-bold text-base sm:text-xl tracking-wider">
                MUHAMMAD_LUQMAN_
              </h3>
              {/* Status Dot */}
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-white/10 bg-white/5">
                <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-[10px] text-slate-400 font-medium tracking-wider uppercase">Available</span>
              </div>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Building modern digital experiences with clean code and pixel-perfect design.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-slate-600 text-xs font-semibold tracking-[0.2em] uppercase mb-5">
              Navigation
            </h4>
            <ul className="space-y-4">
              {[
                { label: "Home", to: "/" },
                { label: "About", to: "/about" },
                { label: "Projects", to: "/projects" },
                { label: "Contact", to: "/contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="group/link text-slate-500 text-sm transition-all duration-300 flex items-center gap-2"
                  >
                    <span className="transition-transform duration-300 group-hover/link:translate-x-1">→</span>
                    <span className="group-hover/link:text-white transition-colors duration-300">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column (With Premium SVG Icons) */}
          <div>
            <h4 className="text-slate-600 text-xs font-semibold tracking-[0.2em] uppercase mb-5">
              Connect
            </h4>
            <div className="flex items-center gap-4">
              {/* GitHub */}
              <a href="https://github.com/Mluqman-main" className="p-3 rounded-full border border-white/5 bg-white/5 text-slate-500 hover:text-white hover:border-white/20 transition-all duration-300 hover:-translate-y-1">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
              </a>
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/muhammad-luqman-0b4253335/" className="p-3 rounded-full border border-white/5 bg-white/5 text-slate-500 hover:text-white hover:border-white/20 transition-all duration-300 hover:-translate-y-1">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </a>
              {/* Twitter / X */}
              <a href="#" className="p-3 rounded-full border border-white/5 bg-white/5 text-slate-500 hover:text-white hover:border-white/20 transition-all duration-300 hover:-translate-y-1">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </a>
              {/* WhatsApp */}
              <a
                href="https://wa.me/923191844403"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-white/5 bg-white/5 text-slate-500 hover:text-green-500 hover:border-green-500/30 transition-all duration-300 hover:-translate-y-1"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M19.11 17.38c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.08-.3-.15-1.28-.47-2.43-1.5-.9-.8-1.5-1.78-1.68-2.08-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.53.08-.8.38-.28.3-1.05 1.03-1.05 2.5 0 1.48 1.08 2.9 1.23 3.1.15.2 2.12 3.24 5.14 4.54.72.31 1.28.5 1.72.64.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.08-.12-.28-.2-.58-.35zM16.02 3C8.84 3 3 8.84 3 16c0 2.82.92 5.42 2.47 7.53L4 29l5.64-1.48A12.95 12.95 0 0016.02 29C23.2 29 29 23.16 29 16S23.2 3 16.02 3zm0 23.5c-2.1 0-4.16-.57-5.95-1.65l-.43-.26-3.35.88.9-3.27-.28-.45A10.44 10.44 0 015.5 16c0-5.8 4.72-10.5 10.52-10.5S26.54 10.2 26.54 16s-4.72 10.5-10.52 10.5z" />
                </svg>
              </a>
              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-white/5 bg-white/5 text-slate-500 hover:text-white hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.24V2h-3.1v13.32a2.77 2.77 0 11-2.77-2.77c.27 0 .53.04.77.11V9.52a5.87 5.87 0 00-.77-.05A5.87 5.87 0 104.82 15.34a5.87 5.87 0 005.87 5.87 5.87 5.87 0 005.87-5.87V8.46a7.88 7.88 0 004.44 1.37V6.74c-.49 0-.97-.02-1.41-.05z" />
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Premium CTA Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 py-8 px-6 rounded-2xl border border-white/5 bg-white/[0.02] mb-12 lite-fade-up" style={{ animationDelay: '0.1s' }}>
          <p className="text-white font-medium text-sm tracking-wide">
            Have a project in mind?
          </p>
          <a href="/contact" className="px-6 py-2.5 bg-white text-black text-sm font-semibold rounded-full hover:bg-slate-200 transition-colors duration-300">
            Let's Talk
          </a>
        </div>

        {/* Bottom Divider & Copyright */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 lite-fade-up" style={{ animationDelay: '0.2s' }}>
          <p className="text-slate-600 text-xs tracking-wider">
            © {new Date().getFullYear()} Muhammad Luqman
          </p>
          <p className="text-slate-700 text-xs tracking-wider">
            Designed & Built with React & Tailwind
          </p>
        </div>

      </div>
    </footer>
  );
}