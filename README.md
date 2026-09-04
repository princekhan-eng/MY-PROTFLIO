# Muhammad Luqman — Personal Developer Portfolio

[![Live Production](https://img.shields.io/badge/Live%20Demo-luqmanprotflio.vercel.app-06b6d4?style=for-the-badge&logo=vercel)](https://luqmanprotflio.vercel.app/)
[![React 19](https://img.shields.io/badge/React%2019-19.2.5-61dafb?style=for-the-badge&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.0-646cff?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![Sass / SCSS](https://img.shields.io/badge/Sass-100%25%20Pure%20SCSS-cc6699?style=for-the-badge&logo=sass)](https://sass-lang.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

A high-performance, modern developer portfolio crafted for **Muhammad Luqman**, a MERN Stack Developer and Full Stack Software Engineer based in Islamabad, Pakistan. Built with **React 19**, **Vite 8**, **React Router 7**, and a **100% pure modular SCSS architecture** (zero Tailwind or bloated utility dependencies). Features ambient glow lighting, frosted-glass cybermorphic UI, an interactive ATS resume modal with print-to-PDF support, and dedicated project showcase experiences.

---

## 🌐 Live Application & Demos

- **Portfolio Live Site:** [https://luqmanprotflio.vercel.app/](https://luqmanprotflio.vercel.app/)
- **Featured Platform — ManageHub:** [https://mengment-app.vercel.app/](https://mengment-app.vercel.app/)
- **Hotel & Restaurant System Repo:** [https://github.com/princekhan-eng/HOtAL-AND-RETURANT-](https://github.com/princekhan-eng/HOtAL-AND-RETURANT-)
- **Banking Management System:** [https://frontend-banking-eta.vercel.app/](https://frontend-banking-eta.vercel.app/)

---

## 🛠️ Tech Stack & Architecture

| Layer | Technology | Description |
| :--- | :--- | :--- |
| **Frontend Framework** | React 19 (`^19.2.5`) | Core component model with optimal render cycles and Hooks |
| **Routing** | React Router (`^7.15.0`) | Client-side routing with clean URLs and active route state |
| **Build Tooling** | Vite 8 + ESBuild | Ultra-fast HMR and optimized production bundling |
| **Styling Engine** | Modular SCSS / Sass Embedded | 20+ structured partials with design tokens, mixins, and animations |
| **Typography** | Google Fonts | `Plus Jakarta Sans` (UI body & headings) + `JetBrains Mono` (code & stats) |
| **Icons & Media** | Inline SVG & Custom Sprites | Zero-overhead lightweight vector graphics and optimized lazy loading |
| **Deployment** | Vercel Cloud Platform | Continuous delivery with global CDN caching and edge headers |

---

## ✨ Key Features & UX Highlights

- ⚡ **Pure SCSS Design System:** Handcrafted design tokens, variables, typography hierarchy, button variants, and responsive mixins without CSS frameworks.
- 🎨 **Luxury Dark Cyber Aesthetics:** Deep `#050507` background, ambient glowing radial orbs, cyber-grid overlays, and frosted-glass components.
- 📄 **ATS-Friendly Resume Preview:** Built-in modal presenting 100% parser-optimized plaintext resume, copy-to-clipboard, and instant browser print/save to PDF.
- 📱 **Full Breakpoint Responsiveness:** Mobile-first layout tailored and tested across 375px mobile, 768px tablet, and 1440px desktop screens.
- 🚀 **Interactive ManageHub Showcase:** Embedded interactive simulator for Kanban task advancement, 5-step guided onboarding, employee directory, and live update feed.
- 🔍 **SEO & Social Graph Optimization:** Complete OpenGraph and Twitter Card metadata for rich previews on LinkedIn, Twitter, Discord, and Slack.

---

## 📸 Project Showcase & Screenshots

```
+-------------------------------------------------------------------------------+
|  [ML] MUHAMMAD_LUQMAN              [ Home | About | Projects | Contact ]      |
|                                                                               |
|   ● MERN Stack Engineer & UI Architect                                        |
|   Muhammad Luqman.                                                            |
|   Architecting resilient full-stack web applications & high-converting UI...  |
|                                                                               |
|   [ Let's Build Together → ]    [ ⚡ ATS Resume ]    [ Download CV ]           |
|                                                                               |
|   ★ Featured: ManageHub — Team & Task Workspace                               |
|   ★ Fullstack: Hotel & Restaurant Management System                           |
|   ★ Fullstack: Production Banking Management System                           |
+-------------------------------------------------------------------------------+
```

---

## 🚀 Local Setup & Development

Follow these steps to run this project locally on your machine:

### Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher (or `pnpm` / `yarn`)

### 1. Clone the repository
```bash
git clone https://github.com/princekhan-eng/MY-PROTFLIO.git
cd MY-PROTFLIO
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### 4. Build for production
```bash
npm run build
```
The optimized production files will be output to the `dist/` directory.

### 5. Preview production build
```bash
npm run preview
```

---

## 📁 Project Structure

```
├── public/
│   ├── favicon.png               # High-res favicon asset
│   ├── favicon.svg               # Vector brand favicon
│   └── icons.svg                 # SVG sprite sheet
├── src/
│   ├── assets/                   # Profile photos, CV document
│   ├── components/               # Modular UI Components
│   │   ├── ATSResumeModal.jsx    # ATS Resume viewer & print modal
│   │   ├── EducationCertifications.jsx
│   │   ├── Experience.jsx        # Career timeline & highlights
│   │   ├── Footer.jsx            # Global footer & social channels
│   │   ├── Hero.jsx              # Landing page stack aggregator
│   │   ├── ImageOptimizing.jsx   # Lazy-load image wrapper
│   │   ├── Navbar.jsx            # Glassmorphic top navigation
│   │   ├── ServicesList.jsx      # Engineering capabilities
│   │   ├── SkillMatrix.jsx       # Categorized skill badges
│   │   └── StatsCounter.jsx      # Quantifiable engineering metrics
│   ├── pages/                    # Route Views
│   │   ├── About.jsx             # Bio, philosophy, JSON terminal
│   │   ├── Contact.jsx           # Interactive contact form
│   │   ├── Home.jsx              # Landing page hero
│   │   ├── ManageHubShowcase.jsx # Interactive project simulator
│   │   └── Projects.jsx          # Filterable project portfolio
│   ├── styles/                   # 100% Modular SCSS System
│   │   ├── _variables.scss       # Color tokens, typography, radii
│   │   ├── _mixins.scss          # Responsive queries, glass, effects
│   │   ├── _reset.scss           # Clean HTML5 baseline
│   │   ├── _layout.scss          # Containers, grids, ambient orbs
│   │   ├── _typography.scss      # Heading scales & text gradients
│   │   ├── main.scss             # Master style manifest
│   │   └── ...                   # Component-specific SCSS partials
│   ├── App.jsx                   # Root routing & layout
│   └── main.jsx                  # React DOM entrypoint
├── index.html                    # HTML5 shell & OpenGraph meta
├── package.json                  # Dependencies & scripts
└── vite.config.js                # Vite build configuration
```

---

## 📬 Contact & Connect

- **Name:** Muhammad Luqman
- **Role:** MERN Stack Developer & Full Stack Software Engineer
- **Email:** [mluqmakhan@gmail.com](mailto:mluqmakhan@gmail.com)
- **LinkedIn:** [linkedin.com/in/muhammad-luqman-0b4253335](https://www.linkedin.com/in/muhammad-luqman-0b4253335/)
- **GitHub:** [github.com/princekhan-eng](https://github.com/princekhan-eng)
- **WhatsApp:** [+92 319 1844403](https://wa.me/923191844403)
- **Location:** Islamabad, Pakistan (Available for Remote / Relocation)

---

## 📄 License

This project is licensed under the **MIT License** — feel free to customize and use it for your own portfolio.
