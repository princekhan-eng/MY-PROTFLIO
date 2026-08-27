import { useState } from "react";

export default function Contact({ onOpenATS }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({ state: "idle", message: "" }); // idle | sending | success | error

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status.state === "sending") return;

    setStatus({ state: "sending", message: "" });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "YOUR_ACCESS_KEY_HERE",
          subject: formData.subject,
          from_name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus({ state: "success", message: "Message sent — I'll get back to you soon." });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        console.error(result);
        setStatus({ state: "error", message: "Message simulated: Thank you! Please also email mluqmakhan@gmail.com directly." });
      }
    } catch (error) {
      console.error(error);
      setStatus({ state: "error", message: "Something went wrong. Please email mluqmakhan@gmail.com directly." });
    }
  };

  return (
    <div className="relative bg-[#050505] text-white min-h-screen overflow-hidden">

      {/* Lightweight Radial Background */}
      <div 
        className="absolute inset-0 pointer-events-none -z-10"
        style={{
          background: `
            radial-gradient(circle at 80% 25%, rgba(6, 182, 212, 0.05) 0%, transparent 40%),
            radial-gradient(circle at 20% 75%, rgba(139, 92, 246, 0.05) 0%, transparent 40%)
          `
        }}
      ></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28 md:py-36">

        {/* Header */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <div className="flex items-center gap-4 mb-5 sm:mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-cyan-500 to-transparent"></div>
            <p className="text-cyan-400/80 text-xs font-medium tracking-[0.3em] sm:tracking-[0.4em] uppercase">
              Get In Touch
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight sm:tracking-tighter leading-tight sm:leading-[0.95]">
              Let's work <br />
              <span className="text-slate-500">together.</span>
            </h1>

            <button
              onClick={onOpenATS}
              className="px-6 py-3 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 hover:bg-cyan-500/20 font-semibold text-xs tracking-wider transition shrink-0 self-start md:self-auto flex items-center gap-2"
            >
              ⚡ View ATS Resume Format
            </button>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 sm:gap-16 lg:gap-24">

          {/* Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8" noValidate>

              {/* Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">

                {/* Name */}
                <div className="relative">
                  <label htmlFor="name" className="sr-only">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                    autoComplete="name"
                    disabled={status.state === "sending"}
                    className="w-full bg-transparent border-b border-white/10 py-3 sm:py-4 text-white focus:outline-none focus:border-cyan-500/50 disabled:opacity-50"
                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <label htmlFor="email" className="sr-only">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Your Email"
                    autoComplete="email"
                    disabled={status.state === "sending"}
                    className="w-full bg-transparent border-b border-white/10 py-3 sm:py-4 text-white focus:outline-none focus:border-cyan-500/50 disabled:opacity-50"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="relative">
                <label htmlFor="subject" className="sr-only">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Subject (e.g. MERN Developer Role / Freelance Project)"
                  disabled={status.state === "sending"}
                  className="w-full bg-transparent border-b border-white/10 py-3 sm:py-4 text-white focus:outline-none focus:border-cyan-500/50 disabled:opacity-50"
                />
              </div>

              {/* Message */}
              <div className="relative">
                <label htmlFor="message" className="sr-only">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project or career opportunity..."
                  disabled={status.state === "sending"}
                  className="w-full bg-transparent border-b border-white/10 py-3 sm:py-4 text-white resize-none focus:outline-none focus:border-cyan-500/50 disabled:opacity-50"
                ></textarea>
              </div>

              {/* Button + Status */}
              <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <button
                  type="submit"
                  disabled={status.state === "sending"}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 bg-white text-black font-semibold text-sm tracking-wide rounded-full transition-all duration-300 hover:scale-105 disabled:opacity-60 disabled:hover:scale-100 disabled:cursor-not-allowed"
                >
                  {status.state === "sending" ? "Sending..." : "Send Message"}
                </button>

                {status.message && (
                  <p
                    className={`text-sm ${status.state === "success" ? "text-emerald-400" : "text-amber-400"
                      }`}
                    role="status"
                  >
                    {status.message}
                  </p>
                )}
              </div>

            </form>
          </div>

          {/* Right Side */}
          <div className="lg:col-span-2 space-y-8 sm:space-y-10 pt-8 lg:pt-0 border-t border-white/5 lg:border-t-0">

            {/* Info */}
            <div>
              <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-500 mb-4">
                Recruiter & Client Contact
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed">
                Available for full-time engineering positions, contract roles, and technical collaborations worldwide.
              </p>
            </div>

            {/* Email */}
            <div>
              <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-500 mb-2">
                Direct Email
              </h3>

              <a href="mailto:mluqmakhan@gmail.com"
                className="text-base sm:text-lg text-white hover:text-cyan-400 transition-colors duration-300 font-medium break-all"
              >
                mluqmakhan@gmail.com
              </a>
            </div>

            {/* Phone / WhatsApp */}
            <div>
              <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-500 mb-2">
                Phone / WhatsApp
              </h3>

              <a href="https://wa.me/923191844403" target="_blank" rel="noreferrer"
                className="text-base sm:text-lg text-white hover:text-emerald-400 transition-colors duration-300 font-medium"
              >
                +92 319 1844403
              </a>
            </div>

            {/* Location */}
            <div>
              <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-500 mb-2">
                Location
              </h3>

              <p className="text-slate-300 text-sm">
                Islamabad, Pakistan (Remote & On-site)
              </p>
            </div>

            {/* Status */}
            <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl border border-white/5 bg-white/2">
              <div className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </div>

              <span className="text-sm text-slate-300">
                Available for Immediate Hire
              </span>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}