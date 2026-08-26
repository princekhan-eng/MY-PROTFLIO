export default function About() {
  const skills = {
    frontend: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    backend: ["Node.js", "Express.js", "MongoDB", "REST APIs", "GraphQL"],
    tools: ["Git & GitHub", "Figma", "VS Code", "Vercel", "Postman"]
  };

  const process = [
    {
      step: "01",
      title: "Discovery & Strategy",
      desc: "Understanding the core problem, mapping out the user journey, and defining the technical architecture before writing a single line of code."
    },
    {
      step: "02",
      title: "Design & Development",
      desc: "Translating wireframes into clean, modular components. Focused on pixel-perfect UI and smooth, meaningful interactions."
    },
    {
      step: "03",
      title: "Launch & Optimization",
      desc: "Rigorous testing, seamless deployment, and continuous performance monitoring to ensure scalable, robust production."
    }
  ];

  return (
    <div className="relative bg-[#050505] text-white min-h-screen overflow-hidden">

      {/* Background Accents */}
      <div className="absolute top-1/3 -left-48 w-150 h-150 bg-violet-500/3 blur-[150px] rounded-full -z-10"></div>
      <div className="absolute bottom-1/3 -right-48 w-125 h-125 bg-cyan-500/3 blur-[150px] rounded-full -z-10"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-32 md:py-40">

        {/* Header with Editorial Decorators */}
        <div className="relative mb-12 sm:mb-24 lite-fade-up">
          {/* Decorative Plus Signs */}
          <div className="absolute -top-8 -right-4 text-slate-800 text-4xl font-thin select-none hidden md:block">+</div>
          <div className="absolute top-10 -right-10 text-slate-800 text-2xl font-thin select-none hidden md:block">+</div>

          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-cyan-500 to-transparent"></div>
            <p className="text-cyan-400/80 text-xs font-medium tracking-[0.4em] uppercase">About Me</p>
          </div>

          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight sm:tracking-tighter leading-tight sm:leading-[0.95]">
            I build things for <br />
            <span className="text-slate-500">the modern web.</span>
          </h1>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24 mb-32">

          {/* Left: Text Content (Takes up 3 cols) */}
          <div className="lg:col-span-3 space-y-8 lite-fade-up" style={{ animationDelay: '0.1s' }}>
            <p className="text-slate-400 text-lg leading-relaxed">
              I’m a MERN Stack Developer who thrives at the intersection of design and engineering. I don't just write code; I architect <span className="text-white font-medium">scalable, intuitive products</span> that users actually enjoy interacting with.
            </p>
            <p className="text-slate-500 text-base leading-relaxed">
              With a deep understanding of modern frontend architectures and robust backend systems, I ensure that every project is delivered with clean code, smooth 60fps animations, and a flawless UI.
            </p>

            {/* Currently Building Status */}
            <div className="inline-flex items-center gap-3 px-5 py-3 mt-2 rounded-2xl border border-white/5 bg-white/2 backdrop-blur-sm group hover:border-white/10 transition-all duration-500">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </div>
              <div className="text-sm">
                <span className="text-slate-600 mr-2">Currently building:</span>
                <span className="text-slate-200 font-medium">SaaS Dashboard</span>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-8 pt-10 border-t border-white/5">
              {[
                { num: "2+", label: "Years Exp." },
                { num: "30+", label: "Projects" },
                { num: "100%", label: "Commitment" }
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-bold tracking-tight bg-linear-to-b from-white to-slate-400 bg-clip-text text-transparent">{stat.num}</div>
                  <div className="text-[11px] text-slate-600 uppercase tracking-[0.15em] mt-1 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Terminal UI Card (Takes up 2 cols) */}
          <div className="lg:col-span-2 flex items-start justify-center lite-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative w-full group">
              {/* Hover Glow Border */}
              <div className="absolute -inset-px bg-linear-0-to-b from-white/10 via-transparent to-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              {/* Terminal Body */}
              <div className="relative bg-[#0a0a0a] rounded-2xl border border-white/10 overflow-hidden shadow-2xl shadow-black/50">

                {/* Terminal Header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/1">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
                  </div>
                  <span className="text-[11px] text-slate-600 font-mono">about_me.js</span>
                  <div className="w-12"></div>
                </div>

                {/* Terminal Content */}
                <div className="p-6 font-mono text-sm leading-loose">
                  <p className="text-slate-600 mb-4">// muhammad_luqman.config</p>
                  <div>
                    <p><span className="text-violet-400">const</span> <span className="text-cyan-300">developer</span> <span className="text-slate-500">=</span> {'{'}</p>
                    <div className="pl-4 space-y-1 border-l border-white/5 ml-2">
                      <p><span className="text-slate-500">name:</span> <span className="text-emerald-400">"Muhammad Luqman"</span>,</p>
                      <p><span className="text-slate-500">role:</span> <span className="text-emerald-400">"Full Stack"</span>,</p>
                      <p><span className="text-slate-500">stack:</span> [<span className="text-amber-300">"MERN"</span>],</p>
                      <p><span className="text-slate-500">available:</span> <span className="text-cyan-400">true</span>,</p>
                      <p><span className="text-slate-500">coffee:</span> <span className="text-cyan-400">Infinity</span></p>
                    </div>
                    <p>{'};'}</p>
                  </div>
                  <div className="flex items-center mt-4 text-slate-500">
                    <span className="text-cyan-400 mr-2">--------------</span>
                    <span className="animate-pulse">ready to code</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Tech Stack Section (Bento Style) */}
        <div className="mb-32">
          <div className="mb-12 lite-fade-up" style={{ animationDelay: '0.3s' }}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-2">Tech Arsenal</h2>
            <p className="text-slate-600 text-sm">Tools and technologies I use daily.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lite-fade-up" style={{ animationDelay: '0.4s' }}>
            {Object.entries(skills).map(([category, tools], index) => (
              <div
                key={category}
                className={`group p-6 rounded-2xl border border-white/5 bg-white/1 hover:bg-white/3 transition-all duration-500 ${index === 0 ? 'md:col-span-2' : ''}`}
              >
                <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-600 mb-5 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/50"></span>
                  {category}
                </h3>
                <div className={`flex flex-wrap gap-3 ${index === 0 ? 'md:grid md:grid-cols-2' : ''}`}>
                  {tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-sm text-slate-500 font-medium hover:text-white transition-colors duration-300 cursor-default"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section (Vertical Timeline) */}
        <div>
          <div className="mb-16 lite-fade-up" style={{ animationDelay: '0.5s' }}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-2">How I Work</h2>
            <p className="text-slate-600 text-sm">A systematic approach to delivering excellence.</p>
          </div>

          <div className="relative lite-fade-up" style={{ animationDelay: '0.6s' }}>
            {/* Vertical Line */}
            <div className="absolute left-0 md:left-8 top-2 bottom-2 w-px bg-linear-0-to-b from-white/10 via-white/5 to-transparent"></div>

            <div className="space-y-12">
              {process.map((item) => (
                <div key={item.step} className="relative flex gap-8 group pl-8 md:pl-20">
                  {/* Timeline Node */}
                  <div className="absolute left-0 md:left-8 top-1 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-slate-800 border-4 border-[#050505] group-hover:bg-cyan-400 transition-colors duration-500 z-10"></div>

                  {/* Content */}
                  <div className="flex-1 pt-[-4px]">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-xs font-mono text-slate-700 group-hover:text-cyan-400/50 transition-colors">{item.step}</span>
                      <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed max-w-lg pl-0 md:pl-10">
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