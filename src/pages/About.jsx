import Experience from "../compoants/Experience";
import SkillMatrix from "../compoants/SkillMatrix";
import EducationCertifications from "../compoants/EducationCertifications";

export default function About({ onOpenATS }) {
  const process = [
    {
      step: "01",
      title: "Discovery & Architecture Strategy",
      desc: "Analyzing user needs, mapping system relationships, establishing MongoDB schemas, and planning RESTful endpoint structures before writing code."
    },
    {
      step: "02",
      title: "Full-Stack Development & UI Design",
      desc: "Building clean React 19 UI components with Tailwind CSS and Framer Motion alongside robust Express.js middleware and JWT security."
    },
    {
      step: "03",
      title: "Testing, Optimization & Deployment",
      desc: "Rigorous API testing with Postman, performance profiling with Google Lighthouse, asset optimization, and Vercel cloud deployment."
    }
  ];

  return (
    <div className="relative bg-[#050505] text-white min-h-screen overflow-hidden">

      {/* Lightweight Radial Background */}
      <div 
        className="absolute inset-0 pointer-events-none -z-10"
        style={{
          background: `
            radial-gradient(circle at 10% 30%, rgba(139, 92, 246, 0.05) 0%, transparent 40%),
            radial-gradient(circle at 90% 70%, rgba(6, 182, 212, 0.05) 0%, transparent 40%)
          `
        }}
      ></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28 md:py-32">

        {/* Header with Editorial Decorators */}
        <div className="relative mb-12 sm:mb-16 lite-fade-up">
          {/* Decorative Plus Signs */}
          <div className="absolute -top-8 -right-4 text-slate-800 text-4xl font-thin select-none hidden md:block">+</div>
          <div className="absolute top-10 -right-10 text-slate-800 text-2xl font-thin select-none hidden md:block">+</div>

          <div className="flex items-center gap-4 mb-5">
            <div className="h-px w-12 bg-gradient-to-r from-cyan-500 to-transparent"></div>
            <p className="text-cyan-400/80 text-xs font-medium tracking-[0.4em] uppercase">About Me & Background</p>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight sm:tracking-tighter leading-tight sm:leading-[0.95]">
              Architecting for <br />
              <span className="text-slate-500">the modern web.</span>
            </h1>

            <button
              onClick={onOpenATS}
              className="px-5 py-2.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/20 font-semibold text-xs tracking-wider transition shrink-0 self-start lg:self-auto flex items-center gap-2"
            >
              ⚡ View ATS Resume Format
            </button>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 mb-20">

          {/* Left: Text Content (Takes up 3 cols) */}
          <div className="lg:col-span-3 space-y-5 lite-fade-up">
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              I’m a <span className="text-white font-semibold">MERN Stack Developer & Full Stack Engineer</span> who thrives at the intersection of robust system design and refined UI engineering. I specialize in building <span className="text-cyan-400 font-medium">scalable, production-ready web products</span> that combine speed, security, and intuitive user experiences.
            </p>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Equipped with deep expertise in modern React 19 architectures, Node.js microservices, Express APIs, and MongoDB schema design, I ensure every codebase is modular, clean, and screen-reader/ATS verified.
            </p>

            {/* Currently Building Status */}
            <div className="inline-flex items-center gap-3 px-4 py-2.5 mt-2 rounded-xl border border-white/5 bg-white/2 backdrop-blur-sm group hover:border-white/10 transition-all duration-500">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </div>
              <div className="text-xs sm:text-sm">
                <span className="text-slate-500 mr-2">Currently building:</span>
                <span className="text-slate-200 font-medium">ManageHub Workspace & AI SaaS Integrations</span>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/5">
              {[
                { num: "2+", label: "Years Experience" },
                { num: "30+", label: "Projects Completed" },
                { num: "99.9%", label: "Uptime & Clean Code" }
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent">{stat.num}</div>
                  <div className="text-[10px] sm:text-[11px] text-slate-500 uppercase tracking-[0.15em] mt-1 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Terminal UI Card (Takes up 2 cols) */}
          <div className="lg:col-span-2 flex items-start justify-center lite-fade-up">
            <div className="relative w-full group">
              {/* Hover Glow Border */}
              <div className="absolute -inset-px bg-gradient-to-b from-white/10 via-transparent to-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              {/* Terminal Body */}
              <div className="relative bg-[#0a0a0a] rounded-2xl border border-white/10 overflow-hidden shadow-2xl shadow-black/50">

                {/* Terminal Header */}
                <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/5 bg-white/1">
                  <div className="flex gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]"></div>
                  </div>
                  <span className="text-[11px] text-slate-500 font-mono">muhammad_luqman.json</span>
                  <div className="w-12"></div>
                </div>

                {/* Terminal Content */}
                <div className="p-5 font-mono text-xs leading-loose">
                  <p className="text-slate-600 mb-2.5">// ATS Candidate Profile</p>
                  <div>
                    <p><span className="text-violet-400">const</span> <span className="text-cyan-300">candidate</span> <span className="text-slate-500">=</span> {'{'}</p>
                    <div className="pl-4 space-y-1 border-l border-white/5 ml-2">
                      <p><span className="text-slate-500">name:</span> <span className="text-emerald-400">"Muhammad Luqman"</span>,</p>
                      <p><span className="text-slate-500">title:</span> <span className="text-emerald-400">"MERN Stack Developer"</span>,</p>
                      <p><span className="text-slate-500">location:</span> <span className="text-emerald-400">"Islamabad, PK"</span>,</p>
                      <p><span className="text-slate-500">skills:</span> [<span className="text-amber-300">"React"</span>, <span className="text-amber-300">"Node"</span>, <span className="text-amber-300">"Express"</span>, <span className="text-amber-300">"MongoDB"</span>],</p>
                      <p><span className="text-slate-500">atsVerified:</span> <span className="text-cyan-400">true</span>,</p>
                      <p><span className="text-slate-500">status:</span> <span className="text-emerald-400">"Available Immediately"</span></p>
                    </div>
                    <p>{'};'}</p>
                  </div>
                  <div className="flex items-center mt-3 text-slate-500">
                    <span className="text-cyan-400 mr-2">--------------</span>
                    <span className="animate-pulse">ready to build</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Section 2: Professional Work Experience */}
        <div className="mb-20 lite-fade-up">
          <Experience />
        </div>

        {/* Section 3: Comprehensive ATS Skill Matrix */}
        <div className="mb-20 lite-fade-up">
          <SkillMatrix />
        </div>

        {/* Section 4: Education & Industry Certifications */}
        <div className="mb-20 lite-fade-up">
          <EducationCertifications />
        </div>

        {/* Section 5: Process / How I Work */}
        <div>
          <div className="mb-12 lite-fade-up">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-2">Development Workflow</h2>
            <p className="text-slate-500 text-xs sm:text-sm">A systematic, agile engineering process designed for reliability and scalability.</p>
          </div>

          <div className="relative lite-fade-up">
            {/* Vertical Line */}
            <div className="absolute left-0 md:left-8 top-2 bottom-2 w-px bg-gradient-to-b from-white/10 via-white/5 to-transparent"></div>

            <div className="space-y-10">
              {process.map((item) => (
                <div key={item.step} className="relative flex gap-6 group pl-8 md:pl-20">
                  {/* Timeline Node */}
                  <div className="absolute left-0 md:left-8 top-1 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-slate-800 border-4 border-[#050505] group-hover:bg-cyan-400 transition-colors duration-500 z-10"></div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-mono text-slate-600 group-hover:text-cyan-400 transition-colors">{item.step}</span>
                      <h3 className="text-lg sm:text-xl font-semibold text-white">{item.title}</h3>
                    </div>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-lg">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}