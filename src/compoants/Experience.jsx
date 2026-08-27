export default function Experience() {
  const experiences = [
    {
      role: "Full Stack MERN Developer",
      company: "Freelance & Client Projects",
      location: "Islamabad, Pakistan (Remote)",
      period: "Jan 2024 – Present",
      type: "Contract / Full-time",
      highlights: [
        "Architected and deployed 30+ full-stack web applications and microservices using React 19, Node.js, Express.js, MongoDB, and Tailwind CSS.",
        "Engineered ManageHub enterprise workspace platform with 5-step guided onboarding, Kanban task boards, employee directory, and real-time updates feed.",
        "Developed production Banking Management System with JWT authentication in HTTP-only cookies, automated transaction calculations, and secure funds transfer.",
        "Increased frontend page load speeds by 40% using React code-splitting, lazy-loaded components, optimized assets, and clean utility refactoring.",
        "Collaborated directly with clients to translate business specifications into responsive, pixel-perfect user interfaces and RESTful APIs."
      ],
      techStack: ["React 19", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT", "REST APIs", "Vite"]
    },
    {
      role: "Frontend Web Developer Specialist",
      company: "Independent Web Solutions",
      location: "Islamabad, Pakistan",
      period: "Jun 2023 – Dec 2023",
      type: "Project Based",
      highlights: [
        "Created modern, high-converting landing pages and SaaS dashboards with fluid 60fps animations using Framer Motion and Tailwind CSS.",
        "Integrated third-party APIs including OpenAI GPT models for automated copy generation and Web3Forms for serverless email submission.",
        "Implemented mobile-first responsive design principles, ensuring 100% cross-browser compatibility across mobile, tablet, and desktop viewports.",
        "Enforced strict TypeScript and ESLint standards to eliminate runtime bugs and improve maintainability across multi-page web applications."
      ],
      techStack: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "Framer Motion", "REST APIs", "Git/GitHub"]
    }
  ];

  return (
    <div className="py-12">
      {/* Header */}
      <div className="flex items-center gap-4 mb-4">
        <div className="h-px w-12 bg-gradient-to-r from-cyan-500 to-transparent"></div>
        <p className="text-cyan-400/80 text-xs font-medium tracking-[0.3em] uppercase">
          Career Timeline & History
        </p>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Professional <span className="text-slate-500">Experience.</span>
          </h2>
          <p className="text-slate-400 text-sm mt-2 max-w-xl">
            A proven record of designing, shipping, and scaling web software with measurable business impact.
          </p>
        </div>

        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-medium text-slate-300">
          💼 <span className="text-white font-semibold">2+ Years</span> Professional Dev Experience
        </div>
      </div>

      {/* Timeline List */}
      <div className="relative border-l border-white/10 pl-6 sm:pl-10 ml-2 sm:ml-4 space-y-12">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative group">
            
            {/* Timeline Node Icon */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#050505] border-2 border-cyan-400 group-hover:scale-125 group-hover:bg-cyan-400 transition-all duration-300"></div>

            {/* Content Card */}
            <div className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-[#0a0a0a] hover:border-cyan-500/30 transition-all duration-500 shadow-xl">
              
              {/* Header row */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {exp.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mt-1">
                    <span className="font-semibold text-slate-200">{exp.company}</span>
                    <span>•</span>
                    <span>📍 {exp.location}</span>
                    <span>•</span>
                    <span className="px-2 py-0.5 rounded bg-white/5 text-slate-300">{exp.type}</span>
                  </div>
                </div>

                <span className="inline-block px-3.5 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shrink-0">
                  {exp.period}
                </span>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-2.5 mb-6 text-sm text-slate-300 leading-relaxed">
                {exp.highlights.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2.5">
                    <span className="text-cyan-400 font-bold mt-1">▹</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                {exp.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-slate-400 border border-white/5 hover:text-white hover:border-white/20 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
