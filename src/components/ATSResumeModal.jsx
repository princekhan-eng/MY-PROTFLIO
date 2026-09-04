import { useState } from "react";
import CV from "../assets/Muhammad_Luqman_CV.pdf";

export default function ATSResumeModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const resumeText = `
MUHAMMAD LUQMAN
MERN Stack Web Developer | Full Stack Engineer
Islamabad, Pakistan | Email: mluqmakhan@gmail.com | Phone/WhatsApp: +92 319 1844403
GitHub: https://github.com/Mluqman-main | LinkedIn: https://www.linkedin.com/in/muhammad-luqman-0b4253335/

================================================================================
PROFESSIONAL SUMMARY
================================================================================
Results-driven MERN Stack Web Developer with 2+ years of hands-on experience designing, developing, and deploying scalable full-stack web applications. Expert in React.js, Node.js, Express.js, MongoDB, and modular SCSS. Proven track record in building secure RESTful APIs, JWT authentication systems, real-time Kanban task managers, and responsive SaaS dashboards. Strong focus on clean architecture, performance optimization, and seamless user experiences.

================================================================================
TECHNICAL SKILLS
================================================================================
• Frontend: React 19, Next.js, JavaScript (ES6+), TypeScript, SCSS/Sass, HTML5, CSS3, Framer Motion, Redux Toolkit, Responsive Web Design
• Backend & Database: Node.js, Express.js, MongoDB, Mongoose, RESTful API Design, JWT Auth, HTTP-Only Cookies, Middleware Architecture, Webhooks
• Tools & Methodologies: Git, GitHub, Postman, Vercel, Vite, NPM, Web3Forms, Performance Optimization, Agile/Scrum, Component Driven Architecture

================================================================================
WORK EXPERIENCE
================================================================================
Full Stack Web Developer (MERN Stack)
Freelance & Personal Projects | Jan 2024 – Present | Islamabad, Pakistan
• Engineered and launched 30+ responsive web applications using React 19, Node.js, Express.js, and MongoDB with modular, maintainable code structures.
• Built ManageHub (Live Production: mengment-app.vercel.app), a multi-department team management system featuring 5-step guided onboarding, Kanban task boards, employee directory, and interactive updates feed.
• Developed a secure Banking Management System (Live: frontend-banking-eta.vercel.app) implementing JWT auth stored in HTTP-only cookies, account management, and real-time transaction history.
• Improved frontend web performance by 40% through lazy loading, image optimization, code splitting, and SCSS refactoring.
• Integrated third-party APIs including OpenAI API for AI Content Generation and Web3Forms for direct email communications.

================================================================================
FEATURED PROJECTS
================================================================================
1. ManageHub – Enterprise Team & Task Management Platform
   • Tech Stack: React 19, Node.js, Express.js, REST API, SCSS Architecture
   • Built complete team onboarding flow, Kanban board task status transitions, department filtering, and shareable updates newsfeed.
   • Live Site: https://mengment-app.vercel.app/
   • Repository: https://github.com/princekhan-eng/Team-mangment-applcation-

2. Hotel & Restaurant Management Platform
   • Tech Stack: React, Node.js, Express.js, MongoDB, SCSS
   • Full-stack room booking & restaurant dining system with menu ordering and bill calculator.
   • Repository: https://github.com/princekhan-eng/HOtAL-AND-RETURANT-

3. Production Banking Management System
   • Tech Stack: MERN (MongoDB, Express, React, Node.js), JWT, HTTP-Only Cookies
   • Implemented multi-tier authentication, deposit/withdrawal calculations, and secure monetary transfers.
   • Live Site: https://frontend-banking-eta.vercel.app/

4. AI Content Generator App
   • Tech Stack: React, OpenAI API, SCSS, Node.js
   • Developed AI marketing copy and blog post generation tool with interactive prompt templates.

================================================================================
EDUCATION & CERTIFICATIONS
================================================================================
• Bachelor of Science in Computer Science (BS CS / BSc) – Currently Pursuing
• ICS (Intermediate in Computer Science) – Completed
• Full Stack MERN Web Development Specialization
• Meta Frontend Web Developer Certification (Coursework)
• Responsive Web Design Certification – freeCodeCamp

================================================================================
LANGUAGES
================================================================================
• English: Professional Working Proficiency
• Urdu: Native / Bilingual
`;

  const handleCopyText = () => {
    navigator.clipboard.writeText(resumeText.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handlePrint = () => {
    const printWindow = window.open("", "_blank");
    printWindow.document.write(`
      <html>
        <head>
          <title>Muhammad Luqman - ATS Resume</title>
          <style>
            body { font-family: 'Segoe UI', Arial, sans-serif; margin: 40px; line-height: 1.6; color: #111; font-size: 13px; }
            h1 { font-size: 24px; margin-bottom: 4px; text-transform: uppercase; letter-spacing: 1px; color: #000; }
            h2 { font-size: 14px; border-bottom: 1.5px solid #222; padding-bottom: 4px; margin-top: 20px; text-transform: uppercase; letter-spacing: 1px; color: #000; }
            p, ul { margin-top: 6px; margin-bottom: 8px; }
            ul { padding-left: 20px; }
            li { margin-bottom: 4px; }
            .header-info { font-size: 12px; color: #444; margin-bottom: 16px; }
            .bold { font-weight: bold; }
          </style>
        </head>
        <body>
          <h1>Muhammad Luqman</h1>
          <div class="header-info">
            <strong>MERN Stack Developer | Full Stack Engineer</strong><br/>
            Islamabad, Pakistan | Email: mluqmakhan@gmail.com | Phone: +92 319 1844403<br/>
            GitHub: github.com/Mluqman-main | LinkedIn: linkedin.com/in/muhammad-luqman-0b4253335/
          </div>

          <h2>Professional Summary</h2>
          <p>Results-driven MERN Stack Web Developer with 2+ years of experience engineering high-performance, responsive web applications using React.js, Node.js, Express.js, MongoDB, and SCSS. Proven track record in building RESTful APIs, JWT authentication systems, interactive Kanban task management platforms, and financial banking web applications.</p>

          <h2>Technical Skills</h2>
          <ul>
            <li><span class="bold">Frontend:</span> React 19, Next.js, JavaScript (ES6+), TypeScript, SCSS, HTML5, CSS3, Framer Motion, Redux Toolkit, Responsive Design</li>
            <li><span class="bold">Backend & Database:</span> Node.js, Express.js, MongoDB, Mongoose, RESTful API Design, JWT Auth, HTTP-Only Cookies, Middleware Architecture, Webhooks</li>
            <li><span class="bold">Tools & Methodologies:</span> Git, GitHub, Postman, Vercel, Vite, NPM, Web3Forms, Performance Optimization, Agile/Scrum</li>
          </ul>

          <h2>Work Experience</h2>
          <p><span class="bold">Full Stack MERN Developer</span> — Freelance / Contract (Jan 2024 – Present)</p>
          <ul>
            <li>Engineered and launched 30+ responsive web applications using React 19, Node.js, Express.js, and MongoDB with modular architectures.</li>
            <li>Architected ManageHub (mengment-app.vercel.app), a multi-department management platform with 5-step guided onboarding, Kanban task boards, employee directory, and share updates newsfeed.</li>
            <li>Developed Banking Management System (frontend-banking-eta.vercel.app) with JWT auth in HTTP-only cookies, money transfers, and real-time transaction logging.</li>
            <li>Optimized frontend web performance by 40% through lazy loading, image optimization, code splitting, and SCSS refactoring.</li>
          </ul>

          <h2>Featured Projects</h2>
          <ul>
            <li><span class="bold">ManageHub Platform:</span> React 19, Node.js, Express, MongoDB, SCSS (Live: mengment-app.vercel.app | Repo: github.com/princekhan-eng/Team-mangment-applcation-)</li>
            <li><span class="bold">Hotel & Restaurant System:</span> React, Node.js, Express, MongoDB, SCSS (Repo: github.com/princekhan-eng/HOtAL-AND-RETURANT-)</li>
            <li><span class="bold">Banking Management System:</span> React, Node.js, Express, MongoDB, JWT (Live: frontend-banking-eta.vercel.app)</li>
            <li><span class="bold">AI Content Generator:</span> React, OpenAI API, SCSS, Node.js</li>
          </ul>

          <h2>Education & Certifications</h2>
          <ul>
            <li>Bachelor of Science in Computer Science (BS CS / BSc) – Currently Pursuing</li>
            <li>ICS (Intermediate in Computer Science) – Completed</li>
            <li>Full Stack MERN Web Development Specialization</li>
            <li>Meta Frontend Web Developer Coursework</li>
            <li>freeCodeCamp Responsive Web Design Certification</li>
          </ul>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
      printWindow.close();
    }, 250);
  };

  return (
    <div className="modal-backdrop animate-fade-in" onClick={onClose}>
      <div className="modal-dialog animate-fade-up" onClick={(e) => e.stopPropagation()}>
        
        {/* Header */}
        <div className="modal-dialog__header">
          <div className="modal-dialog__header-left">
            <div className="status-beacon">
              <span className="status-beacon__ping"></span>
              <span className="status-beacon__dot"></span>
            </div>
            <div>
              <h2>ATS-Friendly Resume Preview</h2>
              <p>Optimized for Recruiter Screeners & Applicant Tracking Systems</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="close-btn"
            aria-label="Close modal"
          >
            <svg style={{ width: "1.25rem", height: "1.25rem" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Action Toolbar */}
        <div className="modal-dialog__toolbar">
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span className="badge-pill badge-pill--emerald">
              ✓ 100% ATS Parsable Format
            </span>
          </div>

          <div className="modal-dialog__toolbar-actions">
            <button
              onClick={handleCopyText}
              className="btn btn--glass btn--sm"
            >
              {copied ? "✓ Copied to Clipboard!" : "📋 Copy Plain Text"}
            </button>

            <button
              onClick={handlePrint}
              className="btn btn--cyber btn--sm"
            >
              🖨️ Print / Save PDF
            </button>

            <a
              href={CV}
              download="Muhammad_Luqman_CV.pdf"
              className="btn btn--indigo btn--sm"
            >
              📥 Download PDF
            </a>
          </div>
        </div>

        {/* Body Content */}
        <div className="modal-dialog__content">
          
          <div className="contact-card">
            <h3>MUHAMMAD LUQMAN</h3>
            <p className="role">MERN Stack Web Developer | Full Stack Engineer</p>
            <p style={{ fontSize: "0.75rem", color: "#94a3b8" }}>
              Islamabad, Pakistan | Email: <a href="mailto:mluqmakhan@gmail.com">mluqmakhan@gmail.com</a> | Phone: +92 319 1844403
            </p>
            <p style={{ fontSize: "0.75rem", color: "#94a3b8" }}>
              GitHub: <a href="https://github.com/princekhan-eng" target="_blank" rel="noreferrer">github.com/princekhan-eng</a> | LinkedIn: <a href="https://www.linkedin.com/in/muhammad-luqman-0b4253335/" target="_blank" rel="noreferrer">linkedin.com/in/muhammad-luqman-0b4253335</a>
            </p>
          </div>

          <div>
            <h4 className="section-title">1. Professional Summary</h4>
            <p>
              Results-driven MERN Stack Web Developer with 2+ years of hands-on experience designing, developing, and deploying scalable full-stack web applications. Expert in React.js, Node.js, Express.js, MongoDB, and modular SCSS. Proven track record in building secure RESTful APIs, JWT authentication systems, real-time Kanban task managers, and responsive SaaS dashboards.
            </p>
          </div>

          <div>
            <h4 className="section-title">2. Technical Skills & ATS Keywords</h4>
            <ul>
              <li><strong>Frontend:</strong> React 19, Next.js, JavaScript (ES6+), TypeScript, SCSS/Sass, HTML5, CSS3, Framer Motion, Redux Toolkit, Responsive Web Design</li>
              <li><strong>Backend & Database:</strong> Node.js, Express.js, MongoDB, Mongoose, RESTful API Design, JWT Authentication, HTTP-Only Cookies, Middleware Architecture, Webhooks</li>
              <li><strong>Tools & Workflows:</strong> Git, GitHub, Postman, Vercel, Vite, NPM, Web3Forms, Performance Optimization, Agile/Scrum</li>
            </ul>
          </div>

          <div>
            <h4 className="section-title">3. Work Experience</h4>
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <strong>Full Stack Web Developer (MERN Stack)</strong>
                <span style={{ fontSize: "0.75rem", color: "#94a3b8" }}>Jan 2024 – Present</span>
              </div>
              <p style={{ fontSize: "0.75rem", color: "#94a3b8", margin: "0.25rem 0 0.5rem" }}>Freelance & Independent Projects | Islamabad, Pakistan</p>
              <ul>
                <li>Engineered and launched 30+ responsive web applications using React 19, Node.js, Express.js, and MongoDB with modular architecture.</li>
                <li>Architected <strong>ManageHub</strong> (mengment-app.vercel.app), an enterprise team management system featuring 5-step guided onboarding, Kanban task boards, employee directory, and share updates feed.</li>
                <li>Developed <strong>Banking Management System</strong> (frontend-banking-eta.vercel.app) implementing JWT authentication, money transfers, and real-time transaction logging.</li>
                <li>Optimized web application speed and load times by 40% through lazy loading, image optimization, code splitting, and asset bundling.</li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="section-title">4. Key Featured Projects</h4>
            <ul>
              <li><strong>ManageHub Team Platform:</strong> Enterprise workspace with 5-step onboarding wizard, interactive task board, employee directory, and live announcements. (Live: mengment-app.vercel.app | Repo: github.com/princekhan-eng/Team-mangment-applcation-)</li>
              <li><strong>Hotel & Restaurant Management Platform:</strong> Full-stack room reservations, dining table management, and digital menu ordering system. (Repo: github.com/princekhan-eng/HOtAL-AND-RETURANT-)</li>
              <li><strong>Production Banking System:</strong> Secure banking solution with JWT cookie security, deposit/withdrawal calculations, and money transfers. (Live: frontend-banking-eta.vercel.app)</li>
              <li><strong>AI Content Generator:</strong> Web app for AI marketing copy and article generation powered by React and OpenAI APIs.</li>
            </ul>
          </div>

          <div>
            <h4 className="section-title">5. Education & Certifications</h4>
            <ul>
              <li>Bachelor of Science in Computer Science (BS CS / BSc) – Currently Pursuing</li>
              <li>ICS (Intermediate in Computer Science) – Completed</li>
              <li>Full Stack MERN Web Development Specialization</li>
              <li>freeCodeCamp Responsive Web Design & JavaScript Algorithms Certification</li>
            </ul>
          </div>

        </div>

        {/* Footer */}
        <div className="modal-dialog__footer">
          <span>Press ESC or click close to exit preview</span>
          <button
            onClick={onClose}
            className="btn btn--glass btn--sm"
          >
            Close Preview
          </button>
        </div>

      </div>
    </div>
  );
}
