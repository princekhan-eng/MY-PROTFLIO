export default function StatsCounter() {
  const stats = [
    { num: "2+", label: "Years Experience", sub: "Full Stack Development", icon: "⚡" },
    { num: "30+", label: "Projects Delivered", sub: "Web Apps & Microservices", icon: "🚀" },
    { num: "99.9%", label: "Code Quality", sub: "Clean Architecture & Tests", icon: "💎" },
    { num: "100%", label: "Commitment", sub: "On-Time Delivery Rate", icon: "🎯" },
  ];

  return (
    <section className="stats-section">
      <div className="stats-section__grid">
        {stats.map((st, idx) => (
          <div key={idx} className="stats-section__card">
            <div className="stats-section__card-header">
              <span className="icon">{st.icon}</span>
              <span className="dot"></span>
            </div>
            
            <div className="stats-section__card-num">
              {st.num}
            </div>
            
            <div className="stats-section__card-label">
              {st.label}
            </div>
            
            <div className="stats-section__card-sub">
              {st.sub}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
