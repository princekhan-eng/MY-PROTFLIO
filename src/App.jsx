import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navber from "./compoants/Navber";
import Footer from "./compoants/Footer";
import Hero from "./compoants/Hero";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/contact";
import ManageHubShowcase from "./pages/ManageHubShowcase";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navber />
        <main className="pt-10">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/managehub" element={<ManageHubShowcase />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;