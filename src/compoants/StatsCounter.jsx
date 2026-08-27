export default function StatsCounter() {
  const stats = [
    { num: "2+", label: "Years Exp.", sub: "Full Stack Development" },
    { num: "30+", label: "Projects Delivered", sub: "Web Apps & Microservices" },
    { num: "99.9%", label: "Uptime & Quality", sub: "Clean Modular Code" },
    { num: "100%", label: "Commitment", sub: "On-Time Project Delivery" },
  ];

  return (
    <div className="py-10 border-y border-white/5 my-12 bg-white/[0.01]">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {stats.map((st, idx) => (
          <div key={idx} className="text-center md:text-left space-y-1">
            <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-b from-white via-slate-200 to-slate-500 bg-clip-text text-transparent">
              {st.num}
            </div>
            <div className="text-xs font-bold uppercase tracking-widest text-cyan-400">
              {st.label}
            </div>
            <div className="text-[11px] text-slate-500 font-mono">
              {st.sub}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
