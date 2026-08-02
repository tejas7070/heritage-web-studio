import { CheckCircle2 } from "lucide-react";

export default function About() {
  const stats = [
    { number: "07+", label: "Studio Artisans" },
    { number: "40+", label: "Awwwards & Tributes" },
    { number: "100%", label: "Custom Architecture" },
    { number: "₹1L+", label: "Average Commission" },
  ];

  return (
    <section id="about" className="relative bg-neutral-50 py-24 md:py-36 px-6 md:px-12 overflow-hidden border-y border-neutral-100">
      {/* Subtle Background Lines */}
      <div className="absolute inset-0 flex justify-between pointer-events-none px-6 md:px-12">
        <div className="w-[1px] h-full bg-neutral-200/40" />
        <div className="w-[1px] h-full bg-neutral-200/40 hidden md:block" />
        <div className="w-[1px] h-full bg-neutral-200/40 hidden md:block" />
        <div className="w-[1px] h-full bg-neutral-200/40" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16 md:mb-24">
          <span className="text-xs font-mono uppercase tracking-widest text-accent font-bold mb-4">
            02 / 07 — ABOUT THE STUDIO
          </span>
          <h2 className="title-editorial text-4xl md:text-6xl font-light text-primary">
            Obsessive Details.
            <br />
            <span className="italic text-neutral-500">Unmatched Quality.</span>
          </h2>
        </div>

        {/* Asymmetrical Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Narrative - Left Column */}
          <div className="lg:col-span-7 flex flex-col items-start gap-8">
            <h3 className="text-xl md:text-2xl font-light leading-relaxed text-neutral-800">
              Heritage Web Studio was founded with a singular conviction: that the modern web deserves better than automated templates, cookie-cutter frameworks, and generic layouts.
            </h3>
            
            <p className="text-sm md:text-base text-neutral-600 font-light leading-relaxed">
              We are a tight-knit collective of designers and senior engineers operating under the parent architecture of <strong>LogicHub</strong>. We intentionally limit our workload, choosing to collaborate with only 3 clients at any given time. This exclusivity allows us to inject extreme care, clean typography, custom motion design, and high-performance engineering into every single pixel.
            </p>

            <p className="text-sm md:text-base text-neutral-600 font-light leading-relaxed">
              When we construct a website, we treat it as an interactive art gallery. Our code is light, fast, semantic, and built to survive the test of time. We believe in visual order, editorial pacing, and animations that enhance human connection rather than cluttering it.
            </p>

            {/* Core Values / Bullet points */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 w-full">
              {[
                "No stock templates - ever",
                "Fully responsive editorial layout",
                "Surgical code efficiency",
                "Built-in SEO structural layouts",
                "Direct senior developer communication",
                "Rigorous post-launch optimization"
              ].map((value) => (
                <div key={value} className="flex items-center space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                  <span className="text-xs uppercase tracking-wider font-semibold text-neutral-700">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats & Visual - Right Column */}
          <div className="lg:col-span-5 flex flex-col gap-12 w-full lg:sticky lg:top-24">
            {/* Visual Decorative Studio Wireframe */}
            <div className="border border-neutral-200 bg-white p-6 md:p-8 flex flex-col justify-between shadow-sm relative overflow-hidden group">
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-neutral-400" />
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-neutral-400" />
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-neutral-400" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-neutral-400" />

              <div className="flex justify-between items-center mb-6">
                <span className="text-[10px] font-mono text-neutral-400 tracking-wider">HERITAGE GRID SYSTEM</span>
                <span className="text-[10px] font-mono text-accent">ACTIVE_GRID</span>
              </div>

              {/* Wireframe simulated grid */}
              <div className="grid grid-cols-4 gap-2 h-36 border-y border-neutral-100 py-4 mb-6">
                <div className="border border-dashed border-neutral-200 flex items-center justify-center text-[8px] text-neutral-400 font-mono">1</div>
                <div className="border border-dashed border-neutral-200 flex items-center justify-center text-[8px] text-neutral-400 font-mono">2</div>
                <div className="border border-dashed border-neutral-200 flex items-center justify-center text-[8px] text-neutral-400 font-mono col-span-2">3-4</div>
              </div>

              <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest leading-relaxed">
                "Digital craftsmanship is the intersection of mathematical code hierarchy and visual poetry."
              </span>
            </div>

            {/* Studio Stats Grid */}
            <div className="grid grid-cols-2 gap-6 md:gap-8 border-t border-neutral-200 pt-8">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col items-start">
                  <span className="text-3xl md:text-4xl font-extralight text-primary mb-1 tracking-tight">
                    {stat.number}
                  </span>
                  <span className="text-xs uppercase tracking-wider text-neutral-400 font-semibold font-mono">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
