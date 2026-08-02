import { useEffect, useState } from "react";

export default function Preloader({ onComplete }) {
  const [count, setCount] = useState(0);
  const [activeWord, setActiveWord] = useState(0);
  const [isDone, setIsDone] = useState(false);

  const words = [
    "CRAFT",
    "DETAIL",
    "INTEGRITY",
    "LOGICHUB",
    "HERITAGE",
  ];

  useEffect(() => {
    // Elegant incremental loading curve
    let current = 0;
    const interval = setInterval(() => {
      // Create random step size to look natural
      const increment = Math.floor(Math.random() * 8) + 2;
      current = Math.min(current + increment, 100);
      setCount(current);

      // Rotate words during loading
      const wordIdx = Math.min(Math.floor((current / 100) * words.length), words.length - 1);
      setActiveWord(wordIdx);

      if (current >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsDone(true);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 800); // Wait for slide-up animation to complete
        }, 500); // Pause at 100%
      }
    }, 45);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`fixed inset-0 bg-primary z-[99999] flex flex-col justify-between p-8 md:p-16 text-white transition-transform duration-[1000ms] cubic-bezier(0.85, 0, 0.15, 1) ${
        isDone ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      {/* Top Header */}
      <div className="flex justify-between items-center w-full">
        <span className="font-mono text-xs tracking-widest text-neutral-400">
          HERITAGE WEB STUDIO
        </span>
        <span className="font-mono text-xs tracking-widest text-neutral-400">
          EST. 2026
        </span>
      </div>

      {/* Center Word Reveal */}
      <div className="flex flex-col items-start overflow-hidden">
        <div className="h-20 md:h-32 overflow-hidden w-full relative">
          <div
            className="flex flex-col transition-transform duration-500 ease-out"
            style={{ transform: `translateY(-${activeWord * 20}%)` }}
          >
            {words.map((word, index) => (
              <h1
                key={word}
                className="text-5xl md:text-8xl font-light tracking-tight h-20 md:h-32 flex items-center"
              >
                {word}
                <span className="text-accent text-2xl md:text-3xl ml-2 font-bold font-sans">.</span>
              </h1>
            ))}
          </div>
        </div>
        <p className="text-xs md:text-sm text-neutral-400 font-light mt-4 tracking-wider max-w-sm">
          A bespoke digital production house carving modern web experiences with surgical precision.
        </p>
      </div>

      {/* Bottom Ticker */}
      <div className="flex justify-between items-end w-full border-t border-neutral-800 pt-6">
        <div className="text-xs md:text-sm text-neutral-400 font-light max-w-[200px]">
          <span>POWERED BY LOGICHUB</span>
        </div>
        <div className="flex items-baseline">
          <span className="text-7xl md:text-9xl font-extralight tracking-tighter leading-none select-none">
            {count}
          </span>
          <span className="text-sm font-mono text-accent font-semibold ml-2">%</span>
        </div>
      </div>
    </div>
  );
}
