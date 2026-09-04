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
    <section className="education-section">
      {/* Header */}
      <div className="education-section__header">
        <span className="section-label">Academic & Industry Qualifications</span>
        <h2>
          Education & <span className="text-gradient-cyan">Certifications.</span>
        </h2>
      </div>

      <div className="education-section__grid">
        
        {/* Left Column: Education */}
        <div className="education-section__column">
          <h3 className="education-section__column-title">
            Academic Background
          </h3>

          {education.map((edu, idx) => (
            <div key={idx} className="education-section__card">
              <div className="education-section__card-top">
                <span className="icon">🎓</span>
                <span className={`badge-pill ${edu.status === "Currently Studying" ? "badge-pill--cyan" : "badge-pill--emerald"}`}>
                  {edu.status}
                </span>
              </div>

              <div>
                <h4 className="education-section__card-title">{edu.degree}</h4>
                <p className="education-section__card-meta">📍 {edu.location} • {edu.period}</p>
              </div>

              <p className="education-section__card-desc">
                {edu.details}
              </p>
            </div>
          ))}
        </div>

        {/* Right Column: Certifications */}
        <div className="education-section__column">
          <h3 className="education-section__column-title">
            Industry Certifications & Credentials
          </h3>

          {certifications.map((cert, idx) => (
            <div key={idx} className="education-section__cert-card">
              <div className="education-section__cert-card-info">
                <div className="cert-title-row">
                  <span style={{ color: "#10b981" }}>📜</span>
                  <h4>{cert.title}</h4>
                </div>
                <p className="cert-issuer">
                  Issued by <strong>{cert.issuer}</strong> • {cert.date}
                </p>
                <p className="cert-skills">
                  Skills: {cert.skills}
                </p>
              </div>

              <span className="badge-pill badge-pill--cyan" style={{ alignSelf: "flex-start" }}>
                {cert.badge}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
