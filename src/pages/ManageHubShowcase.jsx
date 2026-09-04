import { useState } from "react";
import { Link } from "react-router-dom";

export default function ManageHubShowcase() {
  const [activeTab, setActiveTab] = useState("overview");
  const [activeStep, setActiveStep] = useState(1);

  // Sample tasks state
  const [tasks, setTasks] = useState([
    { id: 1, title: "Design Dark Mode SCSS Architecture", category: "Design", status: "In Progress", priority: "High", assignee: "Elena R." },
    { id: 2, title: "Implement Secure REST API Endpoints", category: "Engineering", status: "Completed", priority: "High", assignee: "Alex R." },
    { id: 3, title: "Configure Cloud CI/CD Deployment", category: "DevOps", status: "In Review", priority: "Medium", assignee: "Marcus C." },
    { id: 4, title: "Q4 Roadmap Architecture Planning", category: "Product", status: "To Do", priority: "Medium", assignee: "Sarah J." },
  ]);

  const handleMoveTask = (id) => {
    const statuses = ["To Do", "In Progress", "In Review", "Completed"];
    setTasks((prev) =>
      prev.map((t) => {
        if (t.id === id) {
          const nextIdx = (statuses.indexOf(t.status) + 1) % statuses.length;
          return { ...t, status: statuses[nextIdx] };
        }
        return t;
      })
    );
  };

  // Sample employees state
  const [employees] = useState([
    { id: 1, name: "Sarah Jenkins", role: "Product Lead", dept: "Product", status: "Active", tasks: 42, avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150" },
    { id: 2, name: "Alex Rivera", role: "Senior Fullstack Dev", dept: "Engineering", status: "Active", tasks: 87, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150" },
    { id: 3, name: "Elena Rostova", role: "UI/UX Designer", dept: "Design", status: "Active", tasks: 29, avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150" },
    { id: 4, name: "Marcus Chen", role: "DevOps Engineer", dept: "Engineering", status: "Remote", tasks: 64, avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150" },
  ]);

  // Sample share updates state
  const [updates, setUpdates] = useState([
    {
      id: 1,
      author: "Alex Rivera",
      role: "Senior Fullstack Dev",
      category: "Milestone",
      content: "🚀 REST API v2 endpoints are live! Microservices now active with zero downtime.",
      likes: 18,
      time: "2h ago",
    },
    {
      id: 2,
      author: "Elena Rostova",
      role: "UI/UX Designer",
      category: "Announcement",
      content: "🎨 SCSS dark luxury components released! Check out the glassmorphic controls and micro-animations.",
      likes: 12,
      time: "4h ago",
    },
  ]);

  const [newPost, setNewPost] = useState("");

  const handleAddPost = (e) => {
    e.preventDefault();
    if (!newPost.trim()) return;
    setUpdates([
      {
        id: Date.now(),
        author: "Muhammad Luqman",
        role: "Lead Developer",
        category: "Announcement",
        content: newPost,
        likes: 1,
        time: "Just now",
      },
      ...updates,
    ]);
    setNewPost("");
  };

  const handleLike = (id) => {
    setUpdates(updates.map(u => u.id === id ? { ...u, likes: u.likes + 1 } : u));
  };

  return (
    <div className="page-wrapper">
      {/* Background Orbs */}
      <div className="ambient-orb ambient-orb--indigo animate-drift-1" style={{ top: "4rem", right: "8%" }}></div>
      <div className="ambient-orb ambient-orb--cyan animate-drift-2" style={{ bottom: "8rem", left: "6%" }}></div>
      <div className="bg-grid-overlay"></div>

      <div className="container">
        <section className="showcase">

          {/* Navigation Back Header */}
          <div className="showcase__nav-header animate-fade-down">
            <Link to="/projects" className="back-link">
              ← BACK TO PROJECTS
            </Link>

            <a
              href="https://mengment-app.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--indigo btn--sm"
            >
              Launch Production App 🚀
            </a>
          </div>

          {/* Hero Banner */}
          <div className="showcase__hero animate-fade-up">
            <div className="showcase__hero-content">
              <span className="badge-pill badge-pill--indigo" style={{ alignSelf: "flex-start" }}>
                Enterprise Workspace Application
              </span>
              
              <h1 className="showcase__hero-title">
                ManageHub <span className="text-gradient-violet">Platform.</span>
              </h1>

              <p className="showcase__hero-desc">
                A comprehensive team collaboration system engineered for tracking multi-department projects, real-time Kanban tasks, employee directories, and interactive corporate newsfeeds.
              </p>

              <div className="showcase__hero-ctas">
                <a
                  href="https://mengment-app.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--indigo"
                >
                  Visit Live Site (mengment-app.vercel.app)
                </a>
                <button
                  onClick={() => setActiveTab("onboarding")}
                  className="btn btn--glass"
                >
                  Interactive Onboarding Flow
                </button>
              </div>
            </div>
          </div>

          {/* Feature Tabs Bar */}
          <div className="showcase__tab-bar">
            {[
              { id: "overview", label: "Dashboard Overview" },
              { id: "onboarding", label: "5-Step Onboarding" },
              { id: "tasks", label: "Kanban Task Board" },
              { id: "employees", label: "Employee Directory" },
              { id: "updates", label: "Share Updates Feed" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`tab-btn ${activeTab === tab.id ? "active" : ""}`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* TAB 1: OVERVIEW */}
          {activeTab === "overview" && (
            <div className="animate-fade-up" style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.25rem" }}>
                <div className="card-cyber">
                  <p className="font-mono text-muted" style={{ fontSize: "0.75rem", textTransform: "uppercase" }}>Total Tasks</p>
                  <h3 style={{ fontSize: "2rem", margin: "0.4rem 0" }}>128</h3>
                  <p className="text-emerald" style={{ fontSize: "0.8rem", fontWeight: "700" }}>↑ +14% completed this cycle</p>
                </div>
                <div className="card-cyber">
                  <p className="font-mono text-muted" style={{ fontSize: "0.75rem", textTransform: "uppercase" }}>Active Team</p>
                  <h3 style={{ fontSize: "2rem", margin: "0.4rem 0" }}>48</h3>
                  <p className="text-violet" style={{ fontSize: "0.8rem", fontWeight: "700" }}>4 Departments</p>
                </div>
                <div className="card-cyber">
                  <p className="font-mono text-muted" style={{ fontSize: "0.75rem", textTransform: "uppercase" }}>Live Projects</p>
                  <h3 style={{ fontSize: "2rem", margin: "0.4rem 0" }}>12</h3>
                  <p className="text-cyan" style={{ fontSize: "0.8rem", fontWeight: "700" }}>3 In Review</p>
                </div>
                <div className="card-cyber">
                  <p className="font-mono text-muted" style={{ fontSize: "0.75rem", textTransform: "uppercase" }}>Company Updates</p>
                  <h3 style={{ fontSize: "2rem", margin: "0.4rem 0" }}>84</h3>
                  <p className="text-emerald" style={{ fontSize: "0.8rem", fontWeight: "700" }}>Live Newsfeed</p>
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.5rem" }}>
                <div className="card-cyber" style={{ padding: "2rem" }}>
                  <h3 style={{ fontSize: "1.25rem", marginBottom: "1.5rem" }}>Core System Architecture</h3>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.25rem" }}>
                    <div style={{ padding: "1.25rem", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "12px" }}>
                      <span className="text-violet" style={{ fontWeight: "700", fontSize: "0.9rem" }}>📋 Kanban Task Board</span>
                      <p style={{ fontSize: "0.825rem", color: "#94a3b8", marginTop: "0.5rem" }}>Multi-tier priority filters, dynamic state progression, and due date management.</p>
                    </div>
                    <div style={{ padding: "1.25rem", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "12px" }}>
                      <span className="text-violet" style={{ fontWeight: "700", fontSize: "0.9rem" }}>👥 Employee Directory</span>
                      <p style={{ fontSize: "0.825rem", color: "#94a3b8", marginTop: "0.5rem" }}>Role definitions, department categorizations, task counts, and presence indicators.</p>
                    </div>
                    <div style={{ padding: "1.25rem", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "12px" }}>
                      <span className="text-violet" style={{ fontWeight: "700", fontSize: "0.9rem" }}>📣 Real-Time Updates</span>
                      <p style={{ fontSize: "0.825rem", color: "#94a3b8", marginTop: "0.5rem" }}>Broadcast company milestones, announcements, live like reactions, and announcements.</p>
                    </div>
                    <div style={{ padding: "1.25rem", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "12px" }}>
                      <span className="text-violet" style={{ fontWeight: "700", fontSize: "0.9rem" }}>🚀 5-Step Guided Setup</span>
                      <p style={{ fontSize: "0.825rem", color: "#94a3b8", marginTop: "0.5rem" }}>Interactive wizard for creating organizational units and inviting members.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: ONBOARDING */}
          {activeTab === "onboarding" && (
            <div className="showcase__wizard animate-fade-up">
              <div className="showcase__wizard-progress">
                {[1, 2, 3, 4, 5].map((s) => (
                  <div key={s} className={`bar ${s <= activeStep ? "active" : ""}`}></div>
                ))}
              </div>

              <div className="showcase__wizard-body">
                <span className="badge-pill badge-pill--indigo" style={{ alignSelf: "flex-start" }}>
                  Step {activeStep} of 5
                </span>

                {activeStep === 1 && (
                  <div>
                    <h2 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>Welcome to ManageHub</h2>
                    <p style={{ color: "#cbd5e1" }}>
                      A high-velocity workspace engineered to streamline company deliverables, task assignments, staff records, and interactive team newsfeeds.
                    </p>
                  </div>
                )}
                {activeStep === 2 && (
                  <div>
                    <h2 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>Workspace & Department Setup</h2>
                    <p style={{ color: "#cbd5e1" }}>
                      Configure your organization name, industry domain, and operational departments (Engineering, Product, Design, QA).
                    </p>
                  </div>
                )}
                {activeStep === 3 && (
                  <div>
                    <h2 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>Team Roster & Permissions</h2>
                    <p style={{ color: "#cbd5e1" }}>
                      Invite initial team members, designate access roles (Admin, Lead Engineer, Contributor), and set default assignments.
                    </p>
                  </div>
                )}
                {activeStep === 4 && (
                  <div>
                    <h2 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>Workflow & Task Pipelines</h2>
                    <p style={{ color: "#cbd5e1" }}>
                      Configure Kanban columns, priority flags (Urgent, High, Normal), and sprint review cycles.
                    </p>
                  </div>
                )}
                {activeStep === 5 && (
                  <div>
                    <h2 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>Workspace Ready for Launch! 🚀</h2>
                    <p style={{ color: "#cbd5e1" }}>
                      Your team environment is fully provisioned. You are ready to start dispatching tasks and publishing team updates.
                    </p>
                  </div>
                )}
              </div>

              <div className="showcase__wizard-footer">
                <button
                  disabled={activeStep === 1}
                  onClick={() => setActiveStep(activeStep - 1)}
                  className="btn btn--glass btn--sm"
                  style={{ opacity: activeStep === 1 ? 0.3 : 1, pointerEvents: activeStep === 1 ? "none" : "auto" }}
                >
                  Previous
                </button>

                {activeStep < 5 ? (
                  <button
                    onClick={() => setActiveStep(activeStep + 1)}
                    className="btn btn--indigo btn--sm"
                  >
                    Continue →
                  </button>
                ) : (
                  <a
                    href="https://mengment-app.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--emerald btn--sm"
                  >
                    Enter Workspace Live 🚀
                  </a>
                )}
              </div>
            </div>
          )}

          {/* TAB 3: TASKS KANBAN */}
          {activeTab === "tasks" && (
            <div className="showcase__kanban animate-fade-up">
              <div className="showcase__kanban-header">
                <h3>Interactive Kanban Task Board</h3>
                <span className="badge-pill badge-pill--cyan">
                  💡 Click any card to advance status
                </span>
              </div>

              <div className="showcase__kanban-columns">
                {["To Do", "In Progress", "In Review", "Completed"].map((status) => (
                  <div key={status} className="showcase__kanban-column">
                    <div className="showcase__kanban-column-header">
                      <h4>{status}</h4>
                      <span className="count">{tasks.filter(t => t.status === status).length}</span>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                      {tasks.filter(t => t.status === status).map((task) => (
                        <div
                          key={task.id}
                          onClick={() => handleMoveTask(task.id)}
                          className="showcase__kanban-card"
                          title="Click to advance status"
                        >
                          <span className={`badge-pill ${task.priority === "High" ? "badge-pill--rose" : "badge-pill--amber"}`} style={{ alignSelf: "flex-start", fontSize: "0.65rem", padding: "0.2rem 0.5rem" }}>
                            {task.priority} Priority
                          </span>
                          <h5 className="card-title">{task.title}</h5>
                          <div className="card-meta">
                            <span>{task.category}</span>
                            <span className="assignee">{task.assignee}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: EMPLOYEES */}
          {activeTab === "employees" && (
            <div className="showcase__employees animate-fade-up">
              <div className="card-cyber" style={{ padding: "1.25rem 1.75rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h3>Employee Directory</h3>
                <span className="font-mono text-muted" style={{ fontSize: "0.8rem" }}>{employees.length} Active Staff Members</span>
              </div>

              <div className="showcase__employees-grid">
                {employees.map((emp) => (
                  <div key={emp.id} className="showcase__employees-card">
                    <img src={emp.avatar} alt={emp.name} className="avatar" />
                    <div>
                      <h4 className="name">{emp.name}</h4>
                      <p className="role">{emp.role}</p>
                    </div>
                    <div className="badges-row">
                      <span className="badge-mono">{emp.dept}</span>
                      <span className="badge-pill badge-pill--emerald" style={{ padding: "0.15rem 0.5rem", fontSize: "0.65rem" }}>{emp.status}</span>
                    </div>
                    <p className="task-count">{emp.tasks} Tasks Delivered</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: SHARE UPDATES */}
          {activeTab === "updates" && (
            <div className="showcase__updates animate-fade-up">
              <form onSubmit={handleAddPost} className="showcase__updates-form">
                <textarea
                  value={newPost}
                  onChange={(e) => setNewPost(e.target.value)}
                  placeholder="Share a milestone or technical update with the team..."
                ></textarea>
                <div className="submit-row">
                  <button type="submit" className="btn btn--indigo btn--sm">
                    Share Update 🚀
                  </button>
                </div>
              </form>

              <div className="showcase__updates-list">
                {updates.map((post) => (
                  <div key={post.id} className="showcase__updates-card">
                    <div className="author-row">
                      <div className="author-info">
                        <span className="name">{post.author}</span>
                        <span className="role">{post.role}</span>
                      </div>
                      <span className="badge-pill badge-pill--indigo">{post.category}</span>
                    </div>
                    <p className="content">{post.content}</p>
                    <div className="footer-row">
                      <span>{post.time}</span>
                      <button onClick={() => handleLike(post.id)} className="like-btn">
                        ❤️ {post.likes} Likes
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </section>
      </div>
    </div>
  );
}
