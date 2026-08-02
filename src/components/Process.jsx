import { useState } from "react";
import { Compass, Palette, Code, Radio, HeartHandshake, ChevronRight } from "lucide-react";

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "Discover",
      tagline: "Auditing & Strategic Positioning",
      icon: Compass,
      desc: "Before sketching any wireframe or writing a line of code, we spend time understanding your business DNA. We map out your target audience, analyze competitors, specify structural hierarchy, and align on quantitative KPIs.",
      deliverables: [
        "Brand positioning audit",
        "Site map & semantic structure",
        "Technical stack alignment matrix",
        "Functional specification document"
      ]
    },
    {
      title: "Design",
      tagline: "Editorial Layout & Interactive Prototyping",
      icon: Palette,
      desc: "Our design process is purely editorial. We select bespoke font scales, create dynamic whitespace rhythm, and curate custom color tokens. We avoid generic landing page blocks and wireframe pages using custom canvas dimensions.",
      deliverables: [
        "Editorial design systems",
        "High-fidelity desktop/mobile prototypes",
        "Micro-interaction & transition design maps",
        "Visual assets & color systems checklist"
      ]
    },
    {
      title: "Develop",
      tagline: "Surgical Code Craftsmanship",
      icon: Code,
      desc: "We transform design files into clean, semantic React code from scratch. We write light component trees, implement modular layout files, ensure 100% manual responsiveness, and integrate accessibility metadata.",
      deliverables: [
        "Clean, optimized React/Vite architecture",
        "Fluid CSS styling configurations",
        "Semantic structure & ARIA tags",
        "Dynamic mockups & client review setups"
      ]
    },
    {
      title: "Launch",
      tagline: "Auditing & Global Deployment",
      icon: Radio,
      desc: "We perform rigorous performance audits. We optimize visual assets, minify bundle files, configure secure serverless headers, and deploy the compilation onto high-speed CDN networks for global edge delivery.",
      deliverables: [
        "Production builds compilation",
        "SEO metadata & sitemap configuration",
        "Global CDN routing setup",
        "Lighthouse performance validation (>95 score)"
      ]
    },
    {
      title: "Support",
      tagline: "LogicHub Systems Maintenance",
      icon: HeartHandshake,
      desc: "Launch is only the beginning. Under the technical oversight of LogicHub, we continually monitor system packages, inspect form validation pipelines, refresh styling elements, and adjust page speed targets.",
      deliverables: [
        "Continuous security monitoring",
        "Vite/npm package version checking",
        "Visual design tweaks & support desk",
        "Analytics reports & speed tuning"
      ]
    }
  ];

  return (
    <section id="process" className="relative py-24 md:py-36 px-6 md:px-12 bg-white overflow-hidden">
      {/* Background Subtle Grid Lines */}
      <div className="absolute inset-0 flex justify-between pointer-events-none px-6 md:px-12">
        <div className="w-[1px] h-full bg-neutral-100" />
        <div className="w-[1px] h-full bg-neutral-100 hidden md:block" />
        <div className="w-[1px] h-full bg-neutral-100 hidden md:block" />
        <div className="w-[1px] h-full bg-neutral-100" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16 md:mb-24">
          <span className="text-xs font-mono uppercase tracking-widest text-accent font-bold mb-4">
            05 / 07 — WORKFLOW METHODOLOGY
          </span>
          <h2 className="title-editorial text-4xl md:text-6xl font-light text-primary">
            Rigorous Process.
            <br />
            <span className="italic text-neutral-500">Exceptional Results.</span>
          </h2>
        </div>

        {/* Timeline container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Vertical Step selectors - Left */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeStep === idx;
              return (
                <button
                  key={step.title}
                  onClick={() => setActiveStep(idx)}
                  className={`flex items-center justify-between text-left p-6 border transition-all duration-300 ${
                    isActive
                      ? "bg-primary border-primary text-white shadow-md scale-[1.02]"
                      : "bg-neutral-50 border-neutral-200 text-neutral-600 hover:bg-neutral-100 hover:border-neutral-300"
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-10 h-10 flex items-center justify-center border font-mono text-sm ${
                        isActive ? "border-accent text-accent" : "border-neutral-300 text-neutral-500"
                      }`}
                    >
                      0{idx + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold tracking-tight uppercase text-xs md:text-sm">
                        {step.title}
                      </h3>
                      <span className={`text-[10px] font-mono block mt-0.5 ${isActive ? "text-neutral-300" : "text-neutral-400"}`}>
                        {step.tagline}
                      </span>
                    </div>
                  </div>
                  <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${isActive ? "rotate-90 text-accent" : "text-neutral-400"}`} />
                </button>
              );
            })}
          </div>

          {/* Details Screen - Right */}
          <div className="lg:col-span-7 border border-neutral-200 bg-neutral-50 p-8 md:p-12 relative flex flex-col justify-between min-h-[420px] shadow-sm">
            {/* Corner styling */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-neutral-400" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-neutral-400" />

            <div>
              <div className="flex justify-between items-center border-b border-neutral-200 pb-4 mb-6">
                <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
                  METHODOLOGY PROFILE — 0{activeStep + 1}
                </span>
                <span className="text-xs font-bold text-accent font-mono uppercase">
                  {steps[activeStep].title} Stage
                </span>
              </div>

              <h4 className="title-editorial text-2xl md:text-3xl font-light text-primary mb-6">
                {steps[activeStep].title}
              </h4>
              <p className="text-neutral-600 font-light text-sm md:text-base leading-relaxed mb-8">
                {steps[activeStep].desc}
              </p>
            </div>

            {/* Deliverables List */}
            <div className="border-t border-neutral-200 pt-6">
              <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest block mb-4">
                Primary Phase Deliverables
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {steps[activeStep].deliverables.map((item) => (
                  <div key={item} className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    <span className="text-xs font-semibold text-neutral-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
