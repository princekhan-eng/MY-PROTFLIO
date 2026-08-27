export default function ServicesList() {
  const services = [
    {
      icon: "💻",
      title: "Full-Stack Web Development",
      desc: "Custom web applications built from scratch using React 19, Node.js, Express, and MongoDB. Clean component architecture and scalable backend logic.",
      tags: ["MERN Stack", "React 19", "Node.js", "Express", "MongoDB"]
    },
    {
      icon: "⚡",
      title: "Custom SaaS & Enterprise Platforms",
      desc: "Interactive workspaces, team onboarding flows, task management Kanban boards, and custom business dashboards tailored to operational needs.",
      tags: ["Kanban Board", "Employee Directory", "Dashboard", "Onboarding"]
    },
    {
      icon: "🔒",
      title: "REST API & Authentication Systems",
      desc: "Secure API endpoints, JWT token authentication stored in HTTP-only cookies, password hashing, and third-party API integrations.",
      tags: ["REST API", "JWT Security", "Cookies", "Postman Verified"]
    },
    {
      icon: "🚀",
      title: "UI/UX & Performance Optimization",
      desc: "Transforming slow legacy UI into lightning-fast 60fps web apps with 95+ Lighthouse scores, responsive layouts, and modern dark aesthetics.",
      tags: ["Tailwind CSS", "Framer Motion", "Lighthouse 95+", "Responsive"]
    }
  ];

  return (
    <div className="py-12">
      <div className="flex items-center gap-4 mb-4">
        <div className="h-px w-12 bg-gradient-to-r from-cyan-500 to-transparent"></div>
        <p className="text-cyan-400/80 text-xs font-medium tracking-[0.3em] uppercase">
          What I Deliver
        </p>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Services & <span className="text-slate-500">Solutions.</span>
          </h2>
          <p className="text-slate-400 text-sm mt-2 max-w-xl">
            High-quality software engineering services tailored to startups, agencies, and enterprise clients.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((srv, idx) => (
          <div
            key={idx}
            className="group p-6 sm:p-8 rounded-2xl border border-white/5 bg-[#0a0a0a] hover:border-cyan-500/30 hover:-translate-y-1 transition-all duration-500 shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                {srv.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                {srv.title}
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {srv.desc}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
              {srv.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-[11px] font-mono bg-white/[0.03] text-slate-400 border border-white/5"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
