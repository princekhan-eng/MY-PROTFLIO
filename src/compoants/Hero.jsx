import About from "../pages/About";
import Home from "../pages/Home";
import Projects from "../pages/Projects";

export default function Hero({ onOpenATS }) {
  return (
    <div className="hero-page-stack">
      <Home onOpenATS={onOpenATS} />  
      <Projects onOpenATS={onOpenATS} />
      <About onOpenATS={onOpenATS} />
    </div>
  );
}