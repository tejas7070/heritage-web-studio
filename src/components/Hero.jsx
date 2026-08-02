import { ArrowDownRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[95vh] flex flex-col justify-center items-center bg-white px-6 md:px-12 pt-28 overflow-hidden select-none"
    >
      {/* Background Subtle Grid Lines */}
      <div className="absolute inset-0 flex justify-between pointer-events-none px-6 md:px-12">
        <div className="w-[1px] h-full bg-neutral-100" />
        <div className="w-[1px] h-full bg-neutral-100 hidden md:block" />
        <div className="w-[1px] h-full bg-neutral-100 hidden md:block" />
        <div className="w-[1px] h-full bg-neutral-100" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto flex flex-col justify-between h-[75vh] z-10">
        {/* Top Header Tagline */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full pt-4">
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
              OPEN FOR GLOBAL COMMISSIONS
            </span>
          </div>
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 mt-2 md:mt-0">
            Mumbai / Navi Mumbai
          </span>
        </div>

        {/* Center Main Editorial Text */}
        <div className="my-auto flex flex-col items-start max-w-5xl">
          <h2 className="text-xs uppercase tracking-widest text-accent font-bold mb-4 font-mono">
            HERITAGE WEB STUDIO
          </h2>
          <h1
            className="text-4xl md:text-7xl lg:text-[85px] leading-[1.05] tracking-tight font-extralight text-primary mb-8"
            style={{ transform: `translateY(${offsetY * 0.1}px)` }}
          >
            We design <span className="font-serif italic text-neutral-600">websites</span> that command attention, respect, and trust.
          </h1>

          <div className="flex flex-col md:flex-row justify-between items-start w-full border-t border-neutral-200 pt-8 mt-4 gap-8">
            <p className="text-sm md:text-base text-neutral-600 font-light leading-relaxed max-w-lg">
              Heritage Web Studio crafts hand-made digital platforms for ambitious brands. Inspired by luxury art direction and clean architectural layout, our code is written from scratch with absolute integrity.
            </p>
            <div className="flex flex-col items-start gap-4">
              <a
                href="#portfolio"
                data-cursor
                data-cursor-text="EXPLORE"
                className="group flex items-center space-x-2 text-xs uppercase tracking-widest font-bold text-primary hover:text-accent transition-colors duration-300"
              >
                <span>View Selected Works</span>
                <ArrowDownRight className="w-4 h-4 transform group-hover:rotate-45 transition-transform duration-300" />
              </a>
              <span className="text-xs font-mono text-neutral-400">
                SCROLL DOWN TO INQUIRE
              </span>
            </div>
          </div>
        </div>

        {/* Large Decorative Outlined Text in Background */}
        <div 
          className="absolute bottom-10 right-0 pointer-events-none select-none opacity-[0.03] transition-transform duration-300 ease-out hidden lg:block"
          style={{ transform: `translateX(${offsetY * 0.05}px)` }}
        >
          <span className="text-[180px] font-black tracking-tighter text-stroke leading-none">
            HERITAGE
          </span>
        </div>

        {/* Bottom indicators */}
        <div className="flex justify-between items-center w-full border-t border-neutral-100 pt-4 pb-2">
          <div className="text-[10px] font-mono text-neutral-400">
            DESIGNED FOR PREMIUM BRANDS
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-[10px] font-mono text-neutral-400">01 / 07</span>
            <div className="w-16 h-[1px] bg-neutral-200 relative overflow-hidden">
              <div className="absolute left-0 top-0 h-full w-1/3 bg-primary animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
