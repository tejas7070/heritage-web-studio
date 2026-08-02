import { useState } from "react";
import { ArrowUpRight, ExternalLink, Laptop, Smartphone, Tablet, X, Check } from "lucide-react";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedDemo, setSelectedDemo] = useState(null);
  
  // States for interactive simulations inside the modal
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [activePhotoCategory, setActivePhotoCategory] = useState("all");
  const [beforeAfterSlide, setBeforeAfterSlide] = useState(50);

  const projects = [
    {
      id: "photography",
      title: "Aura Capture Studio",
      category: "creative",
      description: "A high-end portfolio grid for fine-art photographers. Features dynamic aspect-ratio layouts, cursor text tracking, and fluid image morph transitions.",
      tech: ["React", "CSS Grid", "Framer Motion"],
      color: "bg-stone-100",
      textColor: "text-stone-800",
      cta: "Explore Gallery",
      mockupDesign: {
        header: "AURA CAPTURE",
        hero: "Chasing Shadows & Soft Light",
        sub: "FINE ART PORTFOLIO BY L. VANCE",
        layout: "photography"
      }
    },
    {
      id: "restaurant",
      title: "Vigne & Verre",
      category: "business",
      description: "An elegant, dark-mode culinary landing page featuring real-time seat bookings, menu categories, and a premium editorial vintage design.",
      tech: ["Tailwind CSS", "React", "PostgreSQL"],
      color: "bg-neutral-900",
      textColor: "text-neutral-100",
      cta: "Reserve Table",
      mockupDesign: {
        header: "V&V",
        hero: "Vintages & Plates",
        sub: "MICHELIN STARRED CUISINE EST. 2011",
        layout: "restaurant"
      }
    },
    {
      id: "dental",
      title: "Apex Dental Care",
      category: "business",
      description: "A clinical portal focusing on accessibility, user trust, appointment validation, and clean administrative scheduling pipelines.",
      tech: ["React", "Tailwind CSS", "Serverless"],
      color: "bg-sky-50/50",
      textColor: "text-sky-900",
      cta: "Schedule Appointment",
      mockupDesign: {
        header: "APEX DENTAL",
        hero: "Your Smile, Crafted.",
        sub: "COMPREHENSIVE MODERN DENTISTRY",
        layout: "clinical"
      }
    },
    {
      id: "lawfirm",
      title: "Justitia Partners",
      category: "business",
      description: "A prestigious legal advisory homepage featuring document vaults, publication filters, and highly structured team indexes.",
      tech: ["Next.js", "Contentful", "Tailwind CSS"],
      color: "bg-slate-900",
      textColor: "text-slate-100",
      cta: "Consult Attorney",
      mockupDesign: {
        header: "JUSTITIA PARTNERS",
        hero: "Advocacy. Resolution. Integrity.",
        sub: "CORPORATE & LITIGATION COUNSEL",
        layout: "law"
      }
    },
    {
      id: "travel",
      title: "Nomad Voyage",
      category: "creative",
      description: "A dynamic exploration journal detailing custom itineraries, interactive mapping vectors, and visual destination archives.",
      tech: ["React", "Mapbox GL", "Tailwind CSS"],
      color: "bg-orange-50/60",
      textColor: "text-orange-950",
      cta: "Start Exploring",
      mockupDesign: {
        header: "NOMAD VOYAGE",
        hero: "Pathways Untraveled",
        sub: "CURATED EXPEDITIONS & EXPENSES",
        layout: "travel"
      }
    },
    {
      id: "interior",
      title: "Maison Minimal",
      category: "creative",
      description: "An architectural showcase highlighting spacious grids, linear spacing rules, and a interactive before-and-after renovation explorer.",
      tech: ["React", "Tailwind CSS", "CSS Variables"],
      color: "bg-zinc-100",
      textColor: "text-zinc-800",
      cta: "View Projects",
      mockupDesign: {
        header: "MAISON",
        hero: "Architectural Purity",
        sub: "INTERIOR ARCHITECTURE & DESIGN",
        layout: "interior"
      }
    }
  ];

  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  const openSimulator = (project) => {
    setSelectedDemo(project);
    setBookingSuccess(false);
    setBeforeAfterSlide(50);
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setBookingSuccess(true);
  };

  return (
    <section id="portfolio" className="relative py-24 md:py-36 px-6 md:px-12 bg-neutral-50 overflow-hidden border-b border-neutral-100">
      {/* Background Subtle Grid Lines */}
      <div className="absolute inset-0 flex justify-between pointer-events-none px-6 md:px-12">
        <div className="w-[1px] h-full bg-neutral-200/40" />
        <div className="w-[1px] h-full bg-neutral-200/40 hidden md:block" />
        <div className="w-[1px] h-full bg-neutral-200/40 hidden md:block" />
        <div className="w-[1px] h-full bg-neutral-200/40" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24">
          <div className="flex flex-col items-start">
            <span className="text-xs font-mono uppercase tracking-widest text-accent font-bold mb-4">
              04 / 07 — SELECTED WORK
            </span>
            <h2 className="title-editorial text-4xl md:text-6xl font-light text-primary">
              The Digital Canvas.
              <br />
              <span className="italic text-neutral-500">Crafted Masterpieces.</span>
            </h2>
          </div>
          
          {/* Category Tabs */}
          <div className="flex space-x-2 mt-8 md:mt-0 border-b border-neutral-200 pb-2">
            {["all", "creative", "business"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-xs uppercase tracking-widest font-mono font-bold px-4 py-2 transition-all duration-300 ${
                  activeTab === tab 
                    ? "text-accent border-b-2 border-accent" 
                    : "text-neutral-400 hover:text-primary"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col bg-white border border-neutral-200 group overflow-hidden relative shadow-sm hover:shadow-md transition-all duration-500"
            >
              {/* Premium Simulated Browser Header */}
              <div className="bg-neutral-100 border-b border-neutral-200 px-4 py-2.5 flex items-center space-x-1.5 shrink-0 select-none">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                <span className="text-[9px] text-neutral-400 font-mono tracking-widest pl-4">
                  HTTPS://{project.id.toUpperCase()}.DEV
                </span>
              </div>

              {/* Fictional Project Design Render inside frame */}
              <div 
                className={`h-64 ${project.color} ${project.textColor} flex flex-col justify-between p-6 relative overflow-hidden group-hover:scale-105 transition-transform duration-700`}
                data-cursor
                data-cursor-text="PREVIEW"
                onClick={() => openSimulator(project)}
              >
                <div className="flex justify-between items-center w-full">
                  <span className="text-[10px] font-mono tracking-widest font-bold border-b border-current">
                    {project.mockupDesign.header}
                  </span>
                  <span className="text-[9px] font-mono tracking-widest uppercase">EST. 2026</span>
                </div>

                <div className="my-auto flex flex-col items-start gap-1">
                  <span className="text-[8px] font-mono uppercase tracking-widest opacity-60">
                    {project.mockupDesign.sub}
                  </span>
                  <h3 className="text-xl md:text-2xl font-light tracking-tight italic">
                    {project.mockupDesign.hero}
                  </h3>
                </div>

                <div className="flex justify-between items-center w-full border-t border-current/20 pt-3">
                  <span className="text-[9px] font-mono tracking-widest">SELECTED CASE STUDY</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>

              {/* Project Meta Information */}
              <div className="p-6 flex flex-col justify-between flex-grow border-t border-neutral-100 bg-white">
                <div>
                  <h4 className="text-base font-semibold tracking-tight text-primary mb-2">
                    {project.title}
                  </h4>
                  <p className="text-neutral-500 font-light text-xs leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[9.5px] font-mono uppercase tracking-wider bg-neutral-100 text-neutral-500 px-2 py-0.5">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <button
                    onClick={() => openSimulator(project)}
                    className="w-full text-center text-xs uppercase tracking-widest font-bold bg-neutral-900 text-white py-3 hover:bg-accent transition-colors duration-300"
                  >
                    {project.cta}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Live Interactive Simulator Modal */}
      {selectedDemo && (
        <div className="fixed inset-0 bg-primary/70 backdrop-blur-sm z-[9999] flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl relative animate-fade-in border border-neutral-300">
            {/* Close Button */}
            <button
              onClick={() => setSelectedDemo(null)}
              className="absolute top-4 right-4 bg-primary text-white p-2 hover:bg-accent transition-colors z-[10000]"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {/* Modal Title Banner */}
            <div className="bg-neutral-100 border-b border-neutral-200 px-6 py-4 flex flex-col justify-center items-start shrink-0">
              <span className="text-[9px] font-mono text-neutral-400 uppercase tracking-widest">
                HERITAGE BESPOKE RUNTIME SANDBOX / {selectedDemo.title.toUpperCase()}
              </span>
              <h3 className="text-lg font-bold tracking-tight text-primary mt-1 flex items-center space-x-2">
                <span>{selectedDemo.title}</span>
                <span className="text-xs px-2 py-0.5 bg-accent/15 text-accent font-mono font-normal">Active Simulation</span>
              </h3>
            </div>

            {/* Modal Content Scrollable */}
            <div className="p-6 md:p-8 overflow-y-auto flex flex-col lg:flex-row gap-8">
              {/* Left Column - Sandbox Simulator */}
              <div className="lg:w-7/12 flex flex-col border border-neutral-200">
                {/* Micro-viewport Frame */}
                <div className="bg-neutral-100 border-b border-neutral-200 px-4 py-2 flex items-center justify-between shrink-0">
                  <div className="flex items-center space-x-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  </div>
                  <div className="flex items-center space-x-3 text-neutral-400">
                    <Laptop size={12} className="text-accent" />
                    <Tablet size={12} />
                    <Smartphone size={12} />
                  </div>
                </div>

                {/* Simulated Canvas */}
                <div className="p-6 min-h-[300px] bg-neutral-50 flex items-center justify-center flex-grow">
                  
                  {/* PHOTOGRAPHY DEMO */}
                  {selectedDemo.id === "photography" && (
                    <div className="w-full bg-white p-4 border shadow-sm flex flex-col justify-between min-h-[250px]">
                      <div className="flex justify-between items-center border-b pb-2 mb-4">
                        <span className="text-xs font-serif tracking-widest font-bold">AURA PHOTO</span>
                        <div className="flex space-x-2">
                          {["all", "nature", "editorial"].map(cat => (
                            <button
                              key={cat}
                              onClick={() => setActivePhotoCategory(cat)}
                              className={`text-[9px] font-mono uppercase px-2 py-0.5 ${activePhotoCategory === cat ? "bg-primary text-white" : "text-neutral-400"}`}
                            >
                              {cat}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-2 flex-grow items-center">
                        {(activePhotoCategory === "all" || activePhotoCategory === "nature") && (
                          <div className="h-28 bg-stone-100 border border-neutral-200 flex flex-col items-center justify-center group overflow-hidden relative">
                            <span className="text-[10px] font-serif text-neutral-500">MISTY FOREST</span>
                            <span className="text-[7px] text-neutral-400 font-mono mt-1">1/250s f/4.0</span>
                          </div>
                        )}
                        {(activePhotoCategory === "all" || activePhotoCategory === "editorial") && (
                          <div className="h-28 bg-stone-200 border border-neutral-200 flex flex-col items-center justify-center group overflow-hidden relative">
                            <span className="text-[10px] font-serif text-neutral-500">SILHOUETTE</span>
                            <span className="text-[7px] text-neutral-400 font-mono mt-1">1/500s f/1.8</span>
                          </div>
                        )}
                        {(activePhotoCategory === "all" || activePhotoCategory === "nature") && (
                          <div className="h-28 bg-stone-300 border border-neutral-200 flex flex-col items-center justify-center group overflow-hidden relative col-span-1">
                            <span className="text-[10px] font-serif text-neutral-500">SAND DUNES</span>
                            <span className="text-[7px] text-neutral-400 font-mono mt-1">1/80s f/8.0</span>
                          </div>
                        )}
                      </div>
                      <span className="text-[9px] font-mono text-neutral-400 mt-4 text-center">Interactive simulated gallery category filter</span>
                    </div>
                  )}

                  {/* RESTAURANT DEMO */}
                  {selectedDemo.id === "restaurant" && (
                    <div className="w-full bg-neutral-900 text-neutral-100 p-6 border border-neutral-800 shadow-sm min-h-[250px] flex flex-col justify-between">
                      {bookingSuccess ? (
                        <div className="flex flex-col items-center justify-center py-8 text-center">
                          <div className="w-12 h-12 rounded-full border border-green-500/30 flex items-center justify-center mb-4 bg-green-500/10">
                            <Check className="text-green-400 w-6 h-6" />
                          </div>
                          <h4 className="text-sm font-bold uppercase tracking-widest text-green-400">TABLE RESERVED</h4>
                          <p className="text-xs text-neutral-400 mt-2 max-w-xs font-light">
                            Your reservation code is <b>#VV-9281</b>. A confirmation email has been dispatched.
                          </p>
                          <button
                            onClick={() => setBookingSuccess(false)}
                            className="mt-4 text-[9.5px] uppercase tracking-wider font-mono border border-neutral-700 px-3 py-1.5 hover:bg-neutral-800"
                          >
                            New Reservation
                          </button>
                        </div>
                      ) : (
                        <form onSubmit={handleBookingSubmit} className="flex flex-col gap-3">
                          <h4 className="text-xs uppercase tracking-widest font-bold text-center border-b border-neutral-800 pb-2">
                            VIGNE & VERRE BOOKINGS
                          </h4>
                          <div>
                            <label className="text-[9px] uppercase tracking-wider text-neutral-400 font-mono">Full Name</label>
                            <input
                              required
                              type="text"
                              placeholder="Tejas Ulawekar"
                              className="w-full text-xs bg-neutral-950 border border-neutral-800 px-2 py-1.5 text-neutral-200 mt-1 focus:outline-none focus:border-accent"
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            <div>
                              <label className="text-[9px] uppercase tracking-wider text-neutral-400 font-mono">Covers</label>
                              <select className="w-full text-xs bg-neutral-950 border border-neutral-800 px-2 py-1.5 text-neutral-200 mt-1 focus:outline-none focus:border-accent">
                                <option>2 Guests</option>
                                <option>4 Guests</option>
                                <option>6 Guests</option>
                              </select>
                            </div>
                            <div>
                              <label className="text-[9px] uppercase tracking-wider text-neutral-400 font-mono">Date</label>
                              <input
                                required
                                type="date"
                                className="w-full text-xs bg-neutral-950 border border-neutral-800 px-2 py-1.5 text-neutral-200 mt-1 focus:outline-none focus:border-accent"
                              />
                            </div>
                          </div>
                          <button
                            type="submit"
                            className="bg-neutral-100 text-neutral-950 text-xs font-bold uppercase tracking-widest py-2.5 mt-2 hover:bg-accent hover:text-white transition-all duration-300"
                          >
                            Reserve Seats
                          </button>
                        </form>
                      )}
                    </div>
                  )}

                  {/* CLINICAL DENTAL DEMO */}
                  {selectedDemo.id === "dental" && (
                    <div className="w-full bg-white p-6 border shadow-sm min-h-[250px] flex flex-col justify-between">
                      <div className="flex justify-between items-center border-b pb-2 mb-4 text-sky-900">
                        <span className="text-xs font-sans tracking-tight font-extrabold uppercase">APEX APPOINTMENTS</span>
                        <span className="text-[9px] bg-sky-100 text-sky-700 px-2 py-0.5 font-semibold">Active Portal</span>
                      </div>
                      
                      {bookingSuccess ? (
                        <div className="flex flex-col items-center justify-center text-center py-6">
                          <Check className="text-emerald-500 w-8 h-8 mb-2" />
                          <span className="text-xs font-bold text-sky-950">APPOINTMENT SECURED</span>
                          <span className="text-[10px] text-neutral-500 mt-1 font-light">Dr. Clara Sterling will review this checkup request.</span>
                        </div>
                      ) : (
                        <div className="flex flex-col gap-4">
                          <p className="text-[11px] text-neutral-500 leading-relaxed font-light">
                            Welcome to the automated dental scheduling terminal. Select an available checkup tier to secure a consulting window.
                          </p>
                          <div className="grid grid-cols-2 gap-2">
                            <button onClick={() => setBookingSuccess(true)} className="border p-3 flex flex-col items-start hover:border-accent transition-all text-left bg-neutral-50">
                              <span className="text-[10px] font-bold text-neutral-700">General Checkup</span>
                              <span className="text-[9px] text-neutral-400 font-mono mt-1">Duration: 30m</span>
                            </button>
                            <button onClick={() => setBookingSuccess(true)} className="border p-3 flex flex-col items-start hover:border-accent transition-all text-left bg-neutral-50">
                              <span className="text-[10px] font-bold text-neutral-700">Orthodontic Prep</span>
                              <span className="text-[9px] text-neutral-400 font-mono mt-1">Duration: 60m</span>
                            </button>
                          </div>
                        </div>
                      )}
                      
                      <span className="text-[9px] font-mono text-neutral-400 text-center mt-2">Simulating dynamic checkup queue pipeline</span>
                    </div>
                  )}

                  {/* LAW FIRM DEMO */}
                  {selectedDemo.id === "lawfirm" && (
                    <div className="w-full bg-slate-900 text-slate-100 p-6 border border-slate-800 shadow-sm min-h-[250px] flex flex-col justify-between">
                      <div className="flex justify-between items-center border-b border-slate-800 pb-2 mb-4 text-slate-400">
                        <span className="text-[10px] tracking-wider uppercase font-mono">JUSTITIA DEPOSITS</span>
                        <span className="text-[9px] text-amber-500">SECURE_TUNNEL</span>
                      </div>
                      
                      <div className="flex flex-col gap-4">
                        <span className="text-xs text-slate-300 font-light leading-relaxed">
                          Enter your litigation reference number to retreive encrypted client dossiers.
                        </span>
                        <div className="flex gap-2">
                          <input
                            type="text"
                            placeholder="CASE-REF-9028"
                            className="bg-slate-950 border border-slate-800 text-xs px-3 py-2 flex-grow focus:outline-none focus:border-amber-500 font-mono text-amber-500"
                          />
                          <button
                            onClick={() => alert("Simulating document retrieval: Connection established, dossiers decrypted.")}
                            className="bg-amber-600 hover:bg-amber-700 text-white text-[10px] font-mono px-4 py-2 uppercase"
                          >
                            RETRIEVE
                          </button>
                        </div>
                      </div>
                      
                      <span className="text-[9px] font-mono text-slate-500 text-center mt-4">Security framework demonstration for corporate portfolios</span>
                    </div>
                  )}

                  {/* TRAVEL AGENCY DEMO */}
                  {selectedDemo.id === "travel" && (
                    <div className="w-full bg-orange-50/50 p-6 border border-orange-200/60 shadow-sm min-h-[250px] flex flex-col justify-between text-orange-950">
                      <div className="flex justify-between items-center border-b border-orange-200 pb-2 mb-4">
                        <span className="text-xs font-serif font-bold italic">NOMAD ATLAS</span>
                        <span className="text-[8px] font-mono uppercase bg-orange-100 px-2 py-0.5">Expeditions</span>
                      </div>
                      
                      <div className="flex flex-col gap-3">
                        <span className="text-[11px] font-light text-orange-900 leading-relaxed">
                          Pick a geographic coordinate to load live travel itineraries.
                        </span>
                        <div className="grid grid-cols-3 gap-2">
                          {["Patagonia", "Kyoto", "Iceland"].map((place) => (
                            <button
                              key={place}
                              onClick={() => alert(`Itinerary loaded for ${place}: 8 Days, Alpine Huts, Pack Lists dispatched.`)}
                              className="bg-white border border-orange-200 hover:border-orange-500 text-[10px] py-2 transition-all font-semibold"
                            >
                              {place}
                            </button>
                          ))}
                        </div>
                      </div>
                      
                      <span className="text-[9px] font-mono text-orange-500 text-center mt-4">Simulated global location index map router</span>
                    </div>
                  )}

                  {/* INTERIOR DESIGNER DEMO */}
                  {selectedDemo.id === "interior" && (
                    <div className="w-full bg-white p-4 border shadow-sm flex flex-col justify-between min-h-[250px]">
                      <div className="flex justify-between items-center border-b pb-2 mb-3">
                        <span className="text-xs font-serif tracking-widest font-bold">MAISON VISUALIZER</span>
                        <span className="text-[9px] font-mono text-neutral-400">BEFORE & AFTER</span>
                      </div>

                      {/* Before / After Slider Simulation */}
                      <div className="relative h-28 bg-neutral-100 overflow-hidden select-none">
                        {/* Before Side (Left) */}
                        <div className="absolute inset-0 bg-stone-300 flex items-center justify-start p-4">
                          <span className="text-xs text-stone-600 uppercase font-mono font-bold tracking-widest">BEFORE RESIDENCE</span>
                        </div>
                        {/* After Side (Right) - clipped using slider percentage */}
                        <div
                          className="absolute inset-y-0 right-0 bg-zinc-800 flex items-center justify-end p-4 transition-all"
                          style={{ left: `${beforeAfterSlide}%` }}
                        >
                          <span className="text-xs text-white uppercase font-mono font-bold tracking-widest whitespace-nowrap">AFTER RENDER</span>
                        </div>
                        {/* Split line */}
                        <div
                          className="absolute inset-y-0 w-0.5 bg-accent z-10"
                          style={{ left: `${beforeAfterSlide}%` }}
                        />
                      </div>

                      {/* Slider Input control */}
                      <div className="mt-3 flex flex-col items-center">
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={beforeAfterSlide}
                          onChange={(e) => setBeforeAfterSlide(e.target.value)}
                          className="w-full accent-accent cursor-pointer"
                        />
                        <span className="text-[9px] font-mono text-neutral-400 mt-1">Slide control to swap design states</span>
                      </div>
                    </div>
                  )}

                </div>
              </div>

              {/* Right Column - Project Explainer & Details */}
              <div className="lg:w-5/12 flex flex-col justify-between">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-accent font-bold mb-2">
                    Case Study Analysis
                  </h4>
                  <h3 className="title-editorial text-2xl md:text-3xl font-light text-primary mb-4 leading-tight">
                    {selectedDemo.title}
                  </h3>
                  <p className="text-neutral-600 font-light text-xs md:text-sm leading-relaxed mb-6">
                    {selectedDemo.description}
                  </p>

                  <div className="border-t border-neutral-200 pt-4 mb-6">
                    <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest block mb-2">
                      Key Structural Highlights
                    </span>
                    <ul className="text-xs text-neutral-600 space-y-2 font-light">
                      <li className="flex items-baseline space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                        <span>Semantic document structure allowing instant indexing by search engine crawlers.</span>
                      </li>
                      <li className="flex items-baseline space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                        <span>Component states handled internally via lightweight React state bindings.</span>
                      </li>
                      <li className="flex items-baseline space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                        <span>Adaptive styles testing with complete consistency across primary media breakpoints.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="border-t border-neutral-200 pt-6">
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {selectedDemo.tech.map((t) => (
                      <span key={t} className="text-[9.5px] font-mono uppercase tracking-wider bg-neutral-100 text-neutral-500 px-2 py-0.5">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => alert("Simulation trigger: In live production, this navigates to the external client URL.")}
                      className="flex-grow flex items-center justify-center space-x-2 text-xs uppercase tracking-widest font-bold bg-primary text-white py-3.5 hover:bg-accent transition-all duration-300"
                    >
                      <span>Launch Live URL</span>
                      <ExternalLink size={12} />
                    </button>
                    <button
                      onClick={() => setSelectedDemo(null)}
                      className="border border-neutral-300 text-neutral-600 text-xs px-4 hover:bg-neutral-100 uppercase tracking-widest font-mono"
                    >
                      Exit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
