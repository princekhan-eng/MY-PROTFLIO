export default function EducationCertifications() {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science (BS CS / BSc)",
      status: "Currently Studying",
      period: "Present",
      location: "Islamabad, Pakistan",
      details: "Pursuing Bachelor's degree focused on Software Engineering, Web Development, Object-Oriented Programming, Data Structures, and Database Systems."
    },
    {
      degree: "ICS (Intermediate in Computer Science)",
      status: "Completed",
      period: "Pre-University",
      location: "Islamabad, Pakistan",
      details: "Core computer science fundamentals, programming logic, mathematics, and physics background."
    }
  ];

  const certifications = [
    {
      title: "Full Stack MERN Web Development",
      issuer: "Web Development Academy",
      date: "2024",
      skills: "React 19, Node.js, Express, MongoDB, RESTful APIs",
      badge: "Verified Certificate"
    },
    {
      title: "Meta Frontend Developer Specialization",
      issuer: "Coursera / Meta",
      date: "2024",
      skills: "Advanced React, JavaScript ES6+, Version Control, UX/UI Principles",
      badge: "Specialization Certificate"
    },
    {
      title: "Responsive Web Design & JavaScript Algorithms",
      issuer: "freeCodeCamp",
      date: "2023",
      skills: "HTML5, CSS3 Grid/Flexbox, ES6+ Syntax, Data Structures",
      badge: "Verified Certificate"
    }
  ];

  return (
    <div className="py-12">
      {/* Header */}
      <div className="flex items-center gap-4 mb-4">
        <div className="h-px w-12 bg-gradient-to-r from-cyan-500 to-transparent"></div>
        <p className="text-cyan-400/80 text-xs font-medium tracking-[0.3em] uppercase">
          Academic Education & Credentials
        </p>
      </div>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-12">
        Education & <span className="text-slate-500">Certifications.</span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        
        {/* Left: Education Timeline Cards (2 cols) */}
        <div className="lg:col-span-2 space-y-4">
          <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-500 mb-2">
            Academic Background
          </h3>

          {education.map((edu, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-white/10 bg-[#0a0a0a] hover:border-cyan-500/30 transition-all duration-300 shadow-xl space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl">🎓</span>
                <span className={`px-2.5 py-0.5 rounded-full text-[10px] uppercase font-bold tracking-widest border ${
                  edu.status === "Currently Studying"
                    ? "bg-cyan-500/10 text-cyan-400 border-cyan-500/30"
                    : "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                }`}>
                  {edu.status}
                </span>
              </div>

              <div>
                <h4 className="text-base font-bold text-white leading-snug">
                  {edu.degree}
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  📍 {edu.location} • {edu.period}
                </p>
              </div>

              <p className="text-slate-400 text-xs leading-relaxed border-t border-white/5 pt-3">
                {edu.details}
              </p>
            </div>
          ))}
        </div>

        {/* Right: Certifications Grid (3 cols) */}
        <div className="lg:col-span-3 space-y-4">
          <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-500 mb-2">
            Industry Certifications & Credentials
          </h3>

          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400">📜</span>
                  <h4 className="text-base font-bold text-white">{cert.title}</h4>
                </div>
                <p className="text-xs text-slate-400">
                  Issued by <span className="text-slate-200 font-medium">{cert.issuer}</span> • {cert.date}
                </p>
                <p className="text-xs text-slate-500 font-mono pt-1">
                  Skills: {cert.skills}
                </p>
              </div>

              <span className="self-start sm:self-center shrink-0 px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider bg-white/5 border border-white/10 text-slate-300">
                {cert.badge}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
