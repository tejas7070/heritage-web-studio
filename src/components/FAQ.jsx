import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "Why choose a handcrafted website instead of a template?",
      a: "Commercial templates (like ThemeForest) are engineered to please everyone, resulting in extreme script bloat, slow page load times, poor mobile rendering, and generic layouts. Handcrafted React platforms are structured specifically around your branding. They contain zero redundant lines of code, load instantly, and are highly customizable.",
    },
    {
      q: "How long does a typical project take to design and launch?",
      a: "A bespoke marketing website generally spans 4 to 6 weeks from initial Discovery workshops to final Edge CDN deployment. Larger e-commerce portals or custom database platforms require 8 to 12 weeks of engineering. We maintain absolute transparency on deadlines throughout the process.",
    },
    {
      q: "What is the relationship between Heritage Web Studio and LogicHub?",
      a: "Heritage Web Studio is the boutique creative design front of LogicHub. While our studio artists focus on layouts, high-end motion design, and copywriting, the core infrastructure architects at LogicHub construct secure database hooks, cloud servers, API bindings, and custom serverless functions.",
    },
    {
      q: "Do you offer post-launch maintenance and speed tuning?",
      a: "Yes. Every website we compile includes 30 days of complimentary hyper-care post-launch. Afterward, we offer monthly maintenance subscriptions covering continuous framework package upgrades, server health logs, minor styling tweaks, and regular Lighthouse speed index audits.",
    },
    {
      q: "Can students utilize the playground code guides for educational credit?",
      a: "Absolutely. We are committed to fostering the next wave of web designers. Our Student Mini-Projects playground is fully open-source. Students are encouraged to study the semantic structural trees, replicate the CSS variable structures, and copy code snippets for educational credits.",
    },
  ];

  return (
    <section id="faq" className="relative py-24 md:py-36 px-6 md:px-12 bg-neutral-50 overflow-hidden border-t border-b border-neutral-100">
      {/* Background Subtle Grid Lines */}
      <div className="absolute inset-0 flex justify-between pointer-events-none px-6 md:px-12">
        <div className="w-[1px] h-full bg-neutral-200/40" />
        <div className="w-[1px] h-full bg-neutral-200/40 hidden md:block" />
        <div className="w-[1px] h-full bg-neutral-200/40 hidden md:block" />
        <div className="w-[1px] h-full bg-neutral-200/40" />
      </div>

      <div className="relative w-full max-w-4xl mx-auto z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <span className="text-xs font-mono uppercase tracking-widest text-accent font-bold mb-4">
            06 / 07 — STUDIO INQUIRIES
          </span>
          <h2 className="title-editorial text-4xl md:text-5xl font-light text-primary">
            Frequently Asked Questions
          </h2>
          <p className="text-neutral-500 font-light text-sm md:text-base mt-4 max-w-lg">
            Everything you need to know about our commissioning process, engineering standards, and student resources.
          </p>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col border-t border-neutral-200">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border-b border-neutral-200 transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full py-6 md:py-8 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="text-sm md:text-base font-semibold tracking-tight text-primary pr-8">
                    {faq.q}
                  </span>
                  <div className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center shrink-0 hover:bg-primary hover:text-white transition-colors duration-300">
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-[300px] opacity-100 pb-6 md:pb-8" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-xs md:text-sm text-neutral-600 font-light leading-relaxed max-w-3xl">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
