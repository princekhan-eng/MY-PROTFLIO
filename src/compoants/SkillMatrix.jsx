export default function SkillMatrix() {
  const skillCategories = [
    {
      category: "Frontend Engineering",
      skills: ["React 19", "JavaScript (ES6+)", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion", "Redux Toolkit", "HTML5 & CSS3"]
    },
    {
      category: "Backend & Database",
      skills: ["Node.js", "Express.js", "MongoDB", "Mongoose", "REST APIs", "JWT Security", "HTTP-Only Cookies", "Webhooks"]
    },
    {
      category: "Tools & DevOps",
      skills: ["Git & GitHub", "Vite", "Postman", "Vercel", "VS Code", "NPM & Scripts", "Chrome DevTools"]
    },
    {
      category: "Core Competencies",
      skills: ["Responsive Web Design", "Performance Optimization", "Agile / Scrum", "Clean Architecture", "Problem Solving"]
    }
  ];

  return (
    <div className="py-8">
      {/* Section Sub-heading */}
      <div className="flex items-center gap-3 mb-3">
        <div className="h-px w-10 bg-cyan-500/60"></div>
        <p className="text-cyan-400 text-xs font-semibold tracking-[0.25em] uppercase">
          Technical Skills
        </p>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
        <div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
            Tech <span className="text-slate-500">Arsenal.</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-1">
            Technologies and tools I use to build scalable web software.
          </p>
        </div>
      </div>

      {/* Simplified Clean Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {skillCategories.map((cat) => (
          <div
            key={cat.category}
            className="p-5 sm:p-6 rounded-2xl border border-white/5 bg-[#0a0a0a] hover:border-white/15 transition-all duration-300 space-y-4"
          >
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              <h3 className="text-base font-bold text-white tracking-wide">
                {cat.category}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-xl bg-white/[0.03] text-slate-300 border border-white/5 text-xs font-medium hover:text-white hover:border-cyan-500/30 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
