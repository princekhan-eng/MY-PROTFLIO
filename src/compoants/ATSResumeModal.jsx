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
Results-driven MERN Stack Web Developer with 2+ years of hands-on experience designing, developing, and deploying scalable full-stack web applications. Expert in React.js, Node.js, Express.js, MongoDB, and Tailwind CSS. Proven track record in building secure RESTful APIs, JWT authentication systems, real-time Kanban task managers, and responsive SaaS dashboards. Strong focus on clean architecture, performance optimization, and seamless user experiences.

================================================================================
TECHNICAL SKILLS
================================================================================
• Frontend: React 19, Next.js, JavaScript (ES6+), TypeScript, Tailwind CSS, HTML5, CSS3, Framer Motion, Redux Toolkit, Responsive Web Design
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
• Improved frontend web performance by 40% through lazy loading, image optimization, code splitting, and Tailwind CSS utility refactoring.
• Integrated third-party APIs including OpenAI API for AI Content Generation and Web3Forms for direct email communications.

================================================================================
FEATURED PROJECTS
================================================================================
1. ManageHub – Enterprise Team & Task Management Platform
   • Tech Stack: React 19, Node.js, Express.js, REST API, Tailwind CSS
   • Built complete team onboarding flow, Kanban board task status transitions, department filtering, and shareable updates newsfeed.
   • Live Site: https://mengment-app.vercel.app/

2. Production Banking Management System
   • Tech Stack: MERN (MongoDB, Express, React, Node.js), JWT, HTTP-Only Cookies
   • Implemented multi-tier authentication, deposit/withdrawal calculations, and secure monetary transfers.
   • Live Site: https://frontend-banking-eta.vercel.app/

3. AI Content Generator App
   • Tech Stack: React, OpenAI API, Tailwind CSS, Node.js
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
            body { font-family: Arial, sans-serif; margin: 40px; line-height: 1.6; color: #111; font-size: 13px; }
            h1 { font-size: 24px; margin-bottom: 4px; text-transform: uppercase; letter-spacing: 1px; }
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
          <p>Results-driven MERN Stack Web Developer with 2+ years of experience engineering high-performance, responsive web applications using React.js, Node.js, Express.js, MongoDB, and Tailwind CSS. Proven track record in building RESTful APIs, JWT authentication systems, interactive Kanban task management platforms, and financial banking web applications.</p>

          <h2>Technical Skills</h2>
          <ul>
            <li><span class="bold">Frontend:</span> React 19, Next.js, JavaScript (ES6+), TypeScript, Tailwind CSS, HTML5, CSS3, Framer Motion, Redux Toolkit, Responsive Design</li>
            <li><span class="bold">Backend & Database:</span> Node.js, Express.js, MongoDB, Mongoose, RESTful API Design, JWT Auth, HTTP-Only Cookies, Middleware Architecture, Webhooks</li>
            <li><span class="bold">Tools & Methodologies:</span> Git, GitHub, Postman, Vercel, Vite, NPM, Web3Forms, Performance Optimization, Agile/Scrum</li>
          </ul>

          <h2>Work Experience</h2>
          <p><span class="bold">Full Stack MERN Developer</span> — Freelance / Contract (Jan 2024 – Present)</p>
          <ul>
            <li>Engineered and launched 30+ responsive web applications using React 19, Node.js, Express.js, and MongoDB with modular architectures.</li>
            <li>Architected ManageHub (mengment-app.vercel.app), a multi-department management platform with 5-step guided onboarding, Kanban task boards, employee directory, and share updates newsfeed.</li>
            <li>Developed Banking Management System (frontend-banking-eta.vercel.app) with JWT auth in HTTP-only cookies, money transfers, and real-time transaction logging.</li>
            <li>Optimized frontend web performance by 40% through lazy loading, image optimization, code splitting, and utility refactoring.</li>
          </ul>

          <h2>Featured Projects</h2>
          <ul>
            <li><span class="bold">ManageHub Platform:</span> React 19, Node.js, Express, MongoDB, Tailwind CSS (Live: mengment-app.vercel.app)</li>
            <li><span class="bold">Banking Management System:</span> React, Node.js, Express, MongoDB, JWT (Live: frontend-banking-eta.vercel.app)</li>
            <li><span class="bold">AI Content Generator:</span> React, OpenAI API, Tailwind CSS, Node.js</li>
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#050505]">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse"></div>
            <div>
              <h2 className="text-white font-bold text-base sm:text-lg tracking-wide">
                ATS-Friendly Resume Preview
              </h2>
              <p className="text-xs text-slate-400">
                Optimized for Recruiter Screeners & Applicant Tracking Systems
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition"
            aria-label="Close modal"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Action Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-3 border-b border-white/5 bg-white/[0.02]">
          <div className="flex items-center gap-2">
            <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold">
              ✓ 100% ATS Parsable Format
            </span>
            <span className="hidden sm:inline text-xs text-slate-500">
              Plain text & clean bullet points
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="px-4 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-xs transition flex items-center gap-1.5"
            >
              {copied ? "✓ Copied to Clipboard!" : "📋 Copy Plain Text"}
            </button>

            <button
              onClick={handlePrint}
              className="px-4 py-1.5 rounded-lg bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30 border border-cyan-500/30 font-semibold text-xs transition flex items-center gap-1.5"
            >
              🖨️ Print / Save PDF
            </button>

            <a
              href={CV}
              download="Muhammad_Luqman_CV.pdf"
              className="px-4 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition flex items-center gap-1.5 shadow-md shadow-indigo-600/30"
            >
              📥 Download PDF
            </a>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto font-mono text-xs sm:text-sm text-slate-300 leading-relaxed space-y-6">
          
          {/* Header Contact Block */}
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
            <h3 className="text-xl font-bold text-white tracking-wide">MUHAMMAD LUQMAN</h3>
            <p className="text-cyan-400 font-semibold">MERN Stack Web Developer | Full Stack Engineer</p>
            <p className="text-slate-400 text-xs">
              Islamabad, Pakistan | Email: <a href="mailto:mluqmakhan@gmail.com" className="text-cyan-400 hover:underline">mluqmakhan@gmail.com</a> | Phone: +92 319 1844403
            </p>
            <p className="text-slate-400 text-xs">
              GitHub: <a href="https://github.com/Mluqman-main" target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">github.com/Mluqman-main</a> | LinkedIn: <a href="https://www.linkedin.com/in/muhammad-luqman-0b4253335/" target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">linkedin.com/in/muhammad-luqman-0b4253335</a>
            </p>
          </div>

          {/* Section: Summary */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-cyan-400 border-b border-white/10 pb-1 mb-2">
              1. Professional Summary
            </h4>
            <p className="text-slate-300">
              Results-driven MERN Stack Web Developer with 2+ years of hands-on experience designing, developing, and deploying scalable full-stack web applications. Expert in React.js, Node.js, Express.js, MongoDB, and Tailwind CSS. Proven track record in building secure RESTful APIs, JWT authentication systems, real-time Kanban task managers, and responsive SaaS dashboards.
            </p>
          </div>

          {/* Section: Technical Skills */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-cyan-400 border-b border-white/10 pb-1 mb-2">
              2. Technical Skills & ATS Keywords
            </h4>
            <ul className="space-y-1 pl-4 list-disc text-slate-300">
              <li><strong className="text-white">Frontend:</strong> React 19, Next.js, JavaScript (ES6+), TypeScript, Tailwind CSS, HTML5, CSS3, Framer Motion, Redux Toolkit, Responsive Web Design</li>
              <li><strong className="text-white">Backend & Database:</strong> Node.js, Express.js, MongoDB, Mongoose, RESTful API Design, JWT Authentication, HTTP-Only Cookies, Middleware Architecture, Webhooks</li>
              <li><strong className="text-white">Tools & Workflows:</strong> Git, GitHub, Postman, Vercel, Vite, NPM, Web3Forms, Performance Optimization, Agile/Scrum</li>
            </ul>
          </div>

          {/* Section: Experience */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-cyan-400 border-b border-white/10 pb-1 mb-2">
              3. Work Experience
            </h4>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between items-baseline">
                  <h5 className="font-bold text-white text-sm">Full Stack Web Developer (MERN Stack)</h5>
                  <span className="text-slate-500 text-xs">Jan 2024 – Present</span>
                </div>
                <p className="text-slate-400 text-xs">Freelance & Independent Projects | Islamabad, Pakistan</p>
                <ul className="space-y-1 pl-4 list-disc text-slate-300 mt-2">
                  <li>Engineered and launched 30+ responsive web applications using React 19, Node.js, Express.js, and MongoDB with modular architecture.</li>
                  <li>Architected <strong>ManageHub</strong> (mengment-app.vercel.app), an enterprise team management system featuring 5-step guided onboarding, Kanban task boards, employee directory, and share updates feed.</li>
                  <li>Developed <strong>Banking Management System</strong> (frontend-banking-eta.vercel.app) implementing JWT authentication, money transfers, and real-time transaction logging.</li>
                  <li>Optimized web application speed and load times by 40% through lazy loading, image optimization, code splitting, and asset bundling.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section: Projects */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-cyan-400 border-b border-white/10 pb-1 mb-2">
              4. Key Featured Projects
            </h4>
            <ul className="space-y-2 pl-4 list-disc text-slate-300">
              <li>
                <strong className="text-white">ManageHub Team Platform:</strong> Enterprise workspace with 5-step onboarding wizard, interactive task board, employee directory, and live announcements. (Live: mengment-app.vercel.app)
              </li>
              <li>
                <strong className="text-white">Production Banking System:</strong> Secure banking solution with JWT cookie security, deposit/withdrawal calculations, and money transfers. (Live: frontend-banking-eta.vercel.app)
              </li>
              <li>
                <strong className="text-white">AI Content Generator:</strong> Web app for AI marketing copy and article generation powered by React and OpenAI APIs.
              </li>
            </ul>
          </div>

          {/* Section: Education */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-cyan-400 border-b border-white/10 pb-1 mb-2">
              5. Education & Certifications
            </h4>
            <ul className="space-y-1 pl-4 list-disc text-slate-300">
              <li>Bachelor of Science in Computer Science (BS CS / BSc) – Currently Pursuing</li>
              <li>ICS (Intermediate in Computer Science) – Completed</li>
              <li>Full Stack MERN Web Development Specialization</li>
              <li>freeCodeCamp Responsive Web Design & JavaScript Algorithms Certification</li>
            </ul>
          </div>

        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-3 border-t border-white/10 bg-[#050505]">
          <span className="text-xs text-slate-500">
            Press ESC or click outside to exit preview
          </span>
          <button
            onClick={onClose}
            className="px-5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-xs transition"
          >
            Close Preview
          </button>
        </div>

      </div>
    </div>
  );
}
