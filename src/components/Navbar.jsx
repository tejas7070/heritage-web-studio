import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Process", href: "#process" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled past hero height to add background blur
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Scroll Spy logic to highlight current section
      const sections = navItems.map((item) => document.querySelector(item.href));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec && scrollPosition >= sec.offsetTop) {
          setActiveSection(navItems[i].href.slice(1));
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "py-4 bg-white/80 backdrop-blur-md border-b border-neutral-100 shadow-sm"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo Section */}
          <a href="#home" className="flex flex-col items-start group">
            <span className="font-sans font-extrabold text-lg md:text-xl tracking-tight text-primary transition-colors duration-300">
              HERITAGE <span className="text-accent">WEB STUDIO</span>
            </span>
            <span className="text-[9px] font-mono tracking-widest text-neutral-400 -mt-1 group-hover:text-accent transition-colors duration-300">
              POWERED BY LOGICHUB
            </span>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-xs uppercase tracking-widest font-semibold transition-colors duration-300 relative py-1 ${
                  activeSection === item.href.slice(1)
                    ? "text-accent"
                    : "text-neutral-500 hover:text-primary"
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 w-full h-[2px] bg-accent transform transition-transform duration-300 origin-left ${
                    activeSection === item.href.slice(1) ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </a>
            ))}
            <a
              href="#contact"
              className="text-xs uppercase tracking-widest font-bold bg-primary text-white px-5 py-3 hover:bg-accent hover:text-white transition-all duration-300 select-none shadow-sm rounded-none"
            >
              Start Project
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-primary hover:text-accent transition-colors duration-300 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 bg-primary text-white z-45 lg:hidden flex flex-col justify-center items-center px-6 transition-all duration-700 ease-in-out ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col space-y-6 text-center">
          {navItems.map((item, idx) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-3xl font-light tracking-wide hover:text-accent transition-all duration-300 transform ${
                mobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${idx * 75}ms` }}
            >
              {item.label}
            </a>
          ))}
          <div className="pt-6">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-block text-sm uppercase tracking-widest font-bold border border-white hover:border-accent hover:bg-accent hover:text-white px-8 py-4 transition-all duration-300"
            >
              Start Project
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
