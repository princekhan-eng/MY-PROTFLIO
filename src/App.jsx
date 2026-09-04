import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navber from "./compoants/Navber";
import Footer from "./compoants/Footer";
import Hero from "./compoants/Hero";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/contact";
import ManageHubShowcase from "./pages/ManageHubShowcase";
import ATSResumeModal from "./compoants/ATSResumeModal";

function App() {
  const [isATSOpen, setIsATSOpen] = useState(false);

  return (
    <div className="app-root">
      <BrowserRouter>
        <Navber onOpenATS={() => setIsATSOpen(true)} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Hero onOpenATS={() => setIsATSOpen(true)} />} />
            <Route path="/about" element={<About onOpenATS={() => setIsATSOpen(true)} />} />
            <Route path="/contact" element={<Contact onOpenATS={() => setIsATSOpen(true)} />} />
            <Route path="/projects" element={<Projects onOpenATS={() => setIsATSOpen(true)} />} />
            <Route path="/projects/managehub" element={<ManageHubShowcase />} />
          </Routes>
        </main>
        <Footer />
        <ATSResumeModal isOpen={isATSOpen} onClose={() => setIsATSOpen(false)} />
      </BrowserRouter>
    </div>
  );
}

export default App;