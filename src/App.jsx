import { useState } from "react";
import Preloader from "./components/Preloader";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Process from "./components/Process";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      
      {/* Noise Overlay for Visual Texture */}
      <div className="noise-overlay" />
      
      {/* Magnetic Custom Cursor (Hidden on Touch Viewports) */}
      <CustomCursor />

      {/* Main Page Layout Container */}
      <div className={`transition-opacity duration-1000 ${loading ? "opacity-0 h-screen overflow-hidden" : "opacity-100"}`}>
        <Navbar />
        
        <main>
          <Hero />
          <About />
          <Services />
          <Portfolio />
          <Process />
          <FAQ />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </>
  );
}
