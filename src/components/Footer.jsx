import { ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-neutral-950 text-neutral-400 py-12 md:py-16 px-6 md:px-12 border-t border-neutral-900 select-none">
      {/* Background Subtle Grid Lines */}
      <div className="absolute inset-0 flex justify-between pointer-events-none px-6 md:px-12">
        <div className="w-[1px] h-full bg-neutral-900/50" />
        <div className="w-[1px] h-full bg-neutral-900/50 hidden md:block" />
        <div className="w-[1px] h-full bg-neutral-900/50 hidden md:block" />
        <div className="w-[1px] h-full bg-neutral-900/50" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-b border-neutral-900 pb-8 mb-8">
        {/* Left Brand Details */}
        <div className="flex flex-col items-start">
          <span className="font-sans font-extrabold text-sm tracking-widest text-neutral-100">
            HERITAGE WEB STUDIO
          </span>
          <span className="text-[9px] font-mono tracking-wider text-neutral-500 mt-1">
            POWERED BY LOGICHUB
          </span>
        </div>

        {/* Center Navigation Shortcuts */}
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono">
          <a href="#about" className="hover:text-white transition-colors duration-300">ABOUT</a>
          <a href="#services" className="hover:text-white transition-colors duration-300">SERVICES</a>
          <a href="#portfolio" className="hover:text-white transition-colors duration-300">PORTFOLIO</a>
          <a href="#process" className="hover:text-white transition-colors duration-300">PROCESS</a>
          <a href="#faq" className="hover:text-white transition-colors duration-300">FAQ</a>
          <a href="#contact" className="hover:text-white transition-colors duration-300">CONTACT</a>
        </div>

        {/* Right Scroll To Top */}
        <button
          onClick={handleScrollToTop}
          className="flex items-center space-x-2 text-xs font-mono tracking-widest uppercase hover:text-white transition-colors duration-300 group focus:outline-none"
        >
          <span>Return To Top</span>
          <div className="w-8 h-8 rounded-full border border-neutral-800 flex items-center justify-center group-hover:bg-neutral-900 group-hover:border-neutral-700 transition-colors">
            <ArrowUp size={12} className="transform group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </button>
      </div>

      {/* Bottom Copyright & Disclaimer Row */}
      <div className="relative w-full max-w-7xl mx-auto z-10 flex flex-col md:flex-row justify-between items-center text-[10px] font-mono text-neutral-600 gap-4">
        <span>
          © {currentYear} HERITAGE WEB STUDIO. ALL RIGHTS RESERVED.
        </span>
        <div className="flex space-x-6">
          <a href="#privacy" className="hover:text-neutral-400 transition-colors">PRIVACY POLICY</a>
          <span>/</span>
          <a href="#terms" className="hover:text-neutral-400 transition-colors">TERMS OF COMMISSION</a>
        </div>
      </div>
    </footer>
  );
}
