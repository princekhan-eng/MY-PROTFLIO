import { useState } from "react";
import { Link } from "react-router-dom";

export default function ManageHubShowcase() {
  const [activeTab, setActiveTab] = useState("overview");
  const [activeStep, setActiveStep] = useState(1);

  // Sample tasks state
  const [tasks, setTasks] = useState([
    { id: 1, title: "Design Dark Mode UI System", category: "Design", status: "In Progress", priority: "High", assignee: "Elena R." },
    { id: 2, title: "Implement REST API Endpoints", category: "Engineering", status: "Completed", priority: "High", assignee: "Alex R." },
    { id: 3, title: "Configure Kubernetes Pipelines", category: "DevOps", status: "In Review", priority: "Medium", assignee: "Marcus C." },
    { id: 4, title: "Q3 Product Roadmap Planning", category: "Product", status: "To Do", priority: "Medium", assignee: "Sarah J." },
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
      content: "🎨 Figma dark theme components released! Check out the glassmorphic controls.",
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
    <div className="min-h-screen bg-[#050505] text-white pt-20 sm:pt-24 pb-12 sm:pb-16 px-3 sm:px-6 md:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Navigation Back Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 sm:mb-8">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-400 hover:text-cyan-400 transition"
          >
            ← Back to Projects
          </Link>

          <a
            href="https://mengment-app.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs tracking-wider transition shadow-lg shadow-indigo-600/30"
          >
            Launch Live Application 🚀
          </a>
        </div>

        {/* Hero Section */}
        <div className="relative rounded-2xl sm:rounded-3xl border border-indigo-500/20 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950/40 p-5 sm:p-8 lg:p-12 mb-8 sm:mb-10 overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold tracking-widest uppercase bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 mb-4 sm:mb-6">
              Full Stack Company Management System
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-3 sm:mb-4 leading-tight">
              ManageHub <span className="text-indigo-400">Workspace</span>
            </h1>
            <p className="text-slate-400 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">
              A comprehensive team collaboration platform designed for managing company projects, employee directories, real-time task tracking, and interactive team updates sharing.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="https://mengment-app.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 font-semibold text-xs sm:text-sm transition shadow-lg shadow-indigo-500/30"
              >
                Visit Live Site (mengment-app.vercel.app)
              </a>
              <button
                onClick={() => setActiveTab("onboarding")}
                className="w-full sm:w-auto text-center px-6 py-3 rounded-xl border border-slate-700 hover:border-slate-500 text-slate-300 font-semibold text-xs sm:text-sm transition"
              >
                Try Interactive Onboarding Flow
              </button>
            </div>
          </div>
        </div>

        {/* Feature Tabs Bar */}
        <div className="flex gap-2 border-b border-slate-800 pb-4 mb-6 sm:mb-8 overflow-x-auto no-scrollbar">
          {[
            { id: "overview", label: "Dashboard Overview" },
            { id: "onboarding", label: "5-Step Onboarding" },
            { id: "tasks", label: "Task Management" },
            { id: "employees", label: "Employee Directory" },
            { id: "updates", label: "Share Updates Feed" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium tracking-wider whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                  : "bg-slate-900/60 text-slate-400 hover:text-white hover:bg-slate-800"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* TAB 1: OVERVIEW */}
        {activeTab === "overview" && (
          <div className="space-y-6 sm:space-y-8">
            <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              <div className="p-5 sm:p-6 rounded-2xl border border-slate-800 bg-slate-900/50">
                <p className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-widest font-semibold mb-1 sm:mb-2">Total Tasks</p>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">128</h3>
                <p className="text-[10px] sm:text-xs text-emerald-400 mt-2">↑ +14% this month</p>
              </div>
              <div className="p-5 sm:p-6 rounded-2xl border border-slate-800 bg-slate-900/50">
                <p className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-widest font-semibold mb-1 sm:mb-2">Active Employees</p>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">48</h3>
                <p className="text-[10px] sm:text-xs text-indigo-400 mt-2">4 Departments</p>
              </div>
              <div className="p-5 sm:p-6 rounded-2xl border border-slate-800 bg-slate-900/50">
                <p className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-widest font-semibold mb-1 sm:mb-2">Active Projects</p>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">12</h3>
                <p className="text-[10px] sm:text-xs text-cyan-400 mt-2">3 In Review</p>
              </div>
              <div className="p-5 sm:p-6 rounded-2xl border border-slate-800 bg-slate-900/50">
                <p className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-widest font-semibold mb-1 sm:mb-2">Company Updates</p>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">84</h3>
                <p className="text-[10px] sm:text-xs text-emerald-400 mt-2">Live Newsfeed</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
              <div className="lg:col-span-2 p-5 sm:p-6 rounded-2xl border border-slate-800 bg-slate-900/50">
                <h3 className="text-base sm:text-lg font-bold mb-4">Core Platform Highlights</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                    <span className="text-indigo-400 font-semibold text-xs sm:text-sm">📋 Task Kanban & Tracking</span>
                    <p className="text-xs text-slate-400 mt-2">Filter, prioritize, and update company deliverables with real-time status transitions.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                    <span className="text-indigo-400 font-semibold text-xs sm:text-sm">👥 Employee Management</span>
                    <p className="text-xs text-slate-400 mt-2">Role management, department categorization, contact records, and active status tracking.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                    <span className="text-indigo-400 font-semibold text-xs sm:text-sm">📣 Share Updates Feed</span>
                    <p className="text-xs text-slate-400 mt-2">Broadcast company milestones, announcements, like posts, and foster team collaboration.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                    <span className="text-indigo-400 font-semibold text-xs sm:text-sm">🚀 5-Step Guided Onboarding</span>
                    <p className="text-xs text-slate-400 mt-2">Interactive setup wizard for workspace creation and initial team configuration.</p>
                  </div>
                </div>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl border border-slate-800 bg-slate-900/50">
                <h3 className="text-base sm:text-lg font-bold mb-4">Quick Links</h3>
                <div className="space-y-3">
                  <a
                    href="https://mengment-app.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-3 rounded-xl bg-indigo-600/20 border border-indigo-500/30 text-indigo-300 text-xs font-semibold text-center hover:bg-indigo-600/30 transition"
                  >
                    Open Live App (mengment-app.vercel.app) ↗
                  </a>
                  <button
                    onClick={() => setActiveTab("tasks")}
                    className="w-full p-3 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold text-center hover:bg-slate-700 transition"
                  >
                    View Task Board Demo
                  </button>
                  <button
                    onClick={() => setActiveTab("employees")}
                    className="w-full p-3 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold text-center hover:bg-slate-700 transition"
                  >
                    View Employee Directory
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: ONBOARDING */}
        {activeTab === "onboarding" && (
          <div className="max-w-3xl mx-auto p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-800 bg-slate-900/80 shadow-2xl">
            <div className="flex gap-1.5 sm:gap-2 mb-6 sm:mb-8">
              {[1, 2, 3, 4, 5].map((s) => (
                <div
                  key={s}
                  className={`h-1.5 flex-1 rounded-full transition-all ${
                    s <= activeStep ? "bg-indigo-500" : "bg-slate-800"
                  }`}
                ></div>
              ))}
            </div>

            <p className="text-[10px] sm:text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-2">
              Step {activeStep} of 5
            </p>

            {activeStep === 1 && (
              <div>
                <h2 className="text-xl sm:text-2xl font-bold mb-3">Welcome to ManageHub</h2>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                  A modern workspace designed to help your team manage projects, tasks, employees, and company updates from one unified dashboard.
                </p>
              </div>
            )}
            {activeStep === 2 && (
              <div>
                <h2 className="text-xl sm:text-2xl font-bold mb-3">Organization & Workspace Setup</h2>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                  Configure your company workspace name, industry domain, and core working departments (Engineering, Product, Design, Marketing).
                </p>
              </div>
            )}
            {activeStep === 3 && (
              <div>
                <h2 className="text-xl sm:text-2xl font-bold mb-3">Team & Employee Directory</h2>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                  Invite your team members, set roles (Admin, Manager, Contributor), and assign initial responsibilities.
                </p>
              </div>
            )}
            {activeStep === 4 && (
              <div>
                <h2 className="text-xl sm:text-2xl font-bold mb-3">Task Workflow Preferences</h2>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                  Set up Kanban columns, priority flags (High, Medium, Low), and automated notifications for due dates.
                </p>
              </div>
            )}
            {activeStep === 5 && (
              <div>
                <h2 className="text-xl sm:text-2xl font-bold mb-3">Ready to Launch! 🚀</h2>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                  Your team workspace is configured! You can now start tracking tasks, managing employees, and posting company updates.
                </p>
              </div>
            )}

            <div className="flex justify-between items-center mt-6 sm:mt-8 pt-4 border-t border-slate-800">
              <button
                disabled={activeStep === 1}
                onClick={() => setActiveStep(activeStep - 1)}
                className="px-4 py-2 rounded-xl border border-slate-700 text-slate-300 text-xs font-semibold disabled:opacity-30"
              >
                Previous
              </button>

              {activeStep < 5 ? (
                <button
                  onClick={() => setActiveStep(activeStep + 1)}
                  className="px-5 sm:px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 font-semibold text-xs text-white"
                >
                  Continue →
                </button>
              ) : (
                <a
                  href="https://mengment-app.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 sm:px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 font-semibold text-xs text-white"
                >
                  Enter Workspace Live 🚀
                </a>
              )}
            </div>
          </div>
        )}

        {/* TAB 3: TASKS */}
        {activeTab === "tasks" && (
          <div className="space-y-4 sm:space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-2 bg-slate-900/50 p-4 rounded-2xl border border-slate-800">
              <h3 className="text-base sm:text-lg font-bold">Company Task Board</h3>
              <span className="text-xs text-slate-400">{tasks.length} Active Tasks</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {["To Do", "In Progress", "In Review", "Completed"].map((status) => (
                <div key={status} className="bg-slate-900/40 border border-slate-800 p-4 rounded-2xl">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 flex justify-between">
                    <span>{status}</span>
                    <span className="text-indigo-400">{tasks.filter(t => t.status === status).length}</span>
                  </h4>

                  <div className="space-y-3">
                    {tasks.filter(t => t.status === status).map((task) => (
                      <div
                        key={task.id}
                        onClick={() => handleMoveTask(task.id)}
                        className="p-4 bg-slate-950 border border-slate-800/80 rounded-xl space-y-2 cursor-pointer hover:border-indigo-500/50 transition"
                        title="Click to advance status"
                      >
                        <span className={`text-[10px] px-2 py-0.5 rounded-full uppercase font-bold tracking-wider ${
                          task.priority === "High" ? "bg-red-500/20 text-red-400" : "bg-yellow-500/20 text-yellow-400"
                        }`}>
                          {task.priority} Priority
                        </span>
                        <h5 className="text-sm font-semibold text-white">{task.title}</h5>
                        <div className="flex justify-between items-center text-xs text-slate-500 pt-2 border-t border-slate-900">
                          <span>{task.category}</span>
                          <span className="text-indigo-300 font-medium">{task.assignee}</span>
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
          <div className="space-y-4 sm:space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-2 bg-slate-900/50 p-4 rounded-2xl border border-slate-800">
              <h3 className="text-base sm:text-lg font-bold">Employee Directory</h3>
              <span className="text-xs text-slate-400">4 Active Team Members</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {employees.map((emp) => (
                <div key={emp.id} className="p-5 sm:p-6 rounded-2xl bg-slate-900/60 border border-slate-800 text-center space-y-3">
                  <img
                    src={emp.avatar}
                    alt={emp.name}
                    className="w-14 sm:w-16 h-14 sm:h-16 rounded-full mx-auto object-cover border-2 border-indigo-500/30"
                  />
                  <div>
                    <h4 className="font-bold text-sm sm:text-base text-white">{emp.name}</h4>
                    <p className="text-xs text-indigo-400">{emp.role}</p>
                  </div>
                  <div className="flex justify-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 text-[10px]">
                      {emp.dept}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px]">
                      {emp.status}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 pt-2 border-t border-slate-800">
                    {emp.tasks} Tasks Completed
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: SHARE UPDATES */}
        {activeTab === "updates" && (
          <div className="max-w-2xl mx-auto space-y-4 sm:space-y-6">
            {/* Create Post Box */}
            <form onSubmit={handleAddPost} className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <textarea
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                placeholder="Share an update or announcement with the team..."
                className="w-full bg-slate-950 text-slate-200 border border-slate-800 rounded-xl p-3 text-xs sm:text-sm focus:outline-none focus:border-indigo-500 resize-none h-24"
              ></textarea>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition"
                >
                  Share Update 🚀
                </button>
              </div>
            </form>

            {/* Updates List */}
            <div className="space-y-3 sm:space-y-4">
              {updates.map((post) => (
                <div key={post.id} className="p-5 sm:p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-xs sm:text-sm text-white">{post.author}</h4>
                      <p className="text-[10px] sm:text-xs text-slate-500">{post.role}</p>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 text-[10px] uppercase tracking-wider font-semibold">
                      {post.category}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{post.content}</p>
                  <div className="flex justify-between items-center pt-3 border-t border-slate-800/80 text-xs text-slate-500">
                    <span>{post.time}</span>
                    <button
                      onClick={() => handleLike(post.id)}
                      className="flex items-center gap-1.5 text-indigo-400 hover:text-indigo-300 transition font-medium"
                    >
                      ❤️ {post.likes} Likes
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
