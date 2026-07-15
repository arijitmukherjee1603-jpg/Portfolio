import { useState } from "react";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Home from "./sections/Home";
import Skills from "./sections/Skills";
import Project from "./sections/Project";
import Footer from "./sections/Footer";
import ParticlesBackground from "./components/ParticlesBackground";
import CustomCursor from "./components/CustomCursor";
import IntroAnimations from "./components/IntroAnimations"; 

export default function App() {

  const [showIntro, setShowIntro] = useState(true);

  return (
    
    <div className="relative gradients bg-black text-white">

      {/* 🔥 INTRO SCREEN */}
      {showIntro && (
        <IntroAnimations onComplete={() => setShowIntro(false)} />
      )}

      {/* 🔥 MAIN APP (only after intro finishes) */}
      {!showIntro && (
        
        <>
          <CustomCursor />
          <ParticlesBackground />
          <Navbar />
          <Home />
          <About />
          <Skills />
          <Project />
          <Experience />
          <Contact />
          <Footer />
        </>
      )}

    </div>
  );
}