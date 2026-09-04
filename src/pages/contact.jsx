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
        setStatus({ state: "success", message: "Message sent successfully — I will get back to you within 24 hours." });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        console.error(result);
        setStatus({ state: "error", message: "Message note logged: You can also reach me directly at mluqmakhan@gmail.com." });
      }
    } catch (error) {
      console.error(error);
      setStatus({ state: "error", message: "Network error. Please email mluqmakhan@gmail.com directly." });
    }
  };

  return (
    <div className="page-wrapper">
      {/* Background Orbs */}
      <div className="ambient-orb ambient-orb--cyan animate-drift-1" style={{ top: "6rem", right: "8%" }}></div>
      <div className="ambient-orb ambient-orb--violet animate-drift-2" style={{ bottom: "10rem", left: "6%" }}></div>
      <div className="bg-grid-overlay"></div>

      <div className="container">
        <section className="contact-section">

          {/* Header */}
          <div className="contact-section__header animate-fade-up">
            <div>
              <span className="section-label">Start a Project / Hire Me</span>
              <h1>
                Let's build <br />
                <span className="text-gradient-cyan">together.</span>
              </h1>
              <p style={{ marginTop: "0.5rem", fontSize: "1.05rem" }}>
                Have an engineering opening, freelance project, or SaaS system in mind? Send a message and let's discuss details.
              </p>
            </div>

            {onOpenATS && (
              <button
                onClick={onOpenATS}
                className="btn btn--cyber"
              >
                ⚡ View ATS Resume Format
              </button>
            )}
          </div>

          {/* Grid Layout */}
          <div className="contact-section__grid">

            {/* Left: Contact Form Card */}
            <div className="contact-section__form-card animate-fade-up">
              <form onSubmit={handleSubmit} className="contact-section__form" noValidate>

                <div className="contact-section__form-row">
                  <div className="contact-section__form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Jane Doe"
                      autoComplete="name"
                      disabled={status.state === "sending"}
                      className="contact-section__form-input"
                    />
                  </div>

                  <div className="contact-section__form-group">
                    <label htmlFor="email">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="jane@company.com"
                      autoComplete="email"
                      disabled={status.state === "sending"}
                      className="contact-section__form-input"
                    />
                  </div>
                </div>

                <div className="contact-section__form-group">
                  <label htmlFor="subject">Subject / Opportunity Type</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="e.g. MERN Developer Role / Contract Project"
                    disabled={status.state === "sending"}
                    className="contact-section__form-input"
                  />
                </div>

                <div className="contact-section__form-group">
                  <label htmlFor="message">Project Scope & Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell me about your project timelines, stack requirements, or role details..."
                    disabled={status.state === "sending"}
                    className="contact-section__form-textarea"
                  ></textarea>
                </div>

                <div className="contact-section__form-footer">
                  <button
                    type="submit"
                    disabled={status.state === "sending"}
                    className="btn btn--primary"
                  >
                    {status.state === "sending" ? "Dispatching Message..." : "Send Message 🚀"}
                  </button>

                  {status.message && (
                    <p
                      className={`status-msg ${status.state === "success" ? "status-msg--success" : "status-msg--error"}`}
                      role="status"
                    >
                      {status.message}
                    </p>
                  )}
                </div>

              </form>
            </div>

            {/* Right: Direct Information Cards */}
            <div className="contact-section__sidebar animate-fade-up delay-1">

              {/* Status Card */}
              <div className="contact-section__sidebar-card">
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.25rem" }}>
                  <div className="status-beacon">
                    <span className="status-beacon__ping"></span>
                    <span className="status-beacon__dot"></span>
                  </div>
                  <span className="card-label" style={{ color: "#ffffff", fontSize: "0.8rem" }}>
                    Availability Status
                  </span>
                </div>
                <p className="card-text">
                  Available for immediate start in full-time positions, remote contracts, and client projects worldwide.
                </p>
              </div>

              {/* Email Card */}
              <div className="contact-section__sidebar-card">
                <span className="card-label">Direct Email</span>
                <a
                  href="mailto:mluqmakhan@gmail.com"
                  className="card-link"
                >
                  mluqmakhan@gmail.com
                </a>
              </div>

              {/* Phone Card */}
              <div className="contact-section__sidebar-card">
                <span className="card-label">Direct Phone / WhatsApp</span>
                <a
                  href="https://wa.me/923191844403"
                  target="_blank"
                  rel="noreferrer"
                  className="card-link card-link--whatsapp"
                >
                  +92 319 1844403
                </a>
              </div>

              {/* Location Card */}
              <div className="contact-section__sidebar-card">
                <span className="card-label">Location & Response Time</span>
                <p className="card-text" style={{ fontWeight: "600", color: "#ffffff" }}>
                  📍 Islamabad, Pakistan (Remote Worldwide)
                </p>
                <p className="card-sub">
                  ⚡ Typical response time within 2-4 hours.
                </p>
              </div>

            </div>

          </div>
        </section>
      </div>
    </div>
  );
}