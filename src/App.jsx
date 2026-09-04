import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ManageHubShowcase from "./pages/ManageHubShowcase";
import ATSResumeModal from "./components/ATSResumeModal";

function App() {
  const [isATSOpen, setIsATSOpen] = useState(false);

  return (
    <div className="app-root">
      <BrowserRouter>
        <Navbar onOpenATS={() => setIsATSOpen(true)} />
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