import { useState } from "react";
import { ArrowRight, Code, Play, BookOpen, Layers, Zap, Shield, HelpCircle } from "lucide-react";

export default function Services() {
  const [activeService, setActiveService] = useState(0);
  const [selectedProject, setSelectedProject] = useState("counter");
  const [counterVal, setCounterVal] = useState(0);
  const [todoList, setTodoList] = useState([
    { id: 1, text: "Structure HTML semantically", done: true },
    { id: 2, text: "Implement keyboard navigation", done: false },
    { id: 3, text: "Style with CSS custom variables", done: false },
  ]);
  const [newTodo, setNewTodo] = useState("");
  const [previewTheme, setPreviewTheme] = useState("dark");

  const services = [
    {
      id: "portfolio-websites",
      title: "Portfolio Websites",
      subtitle: "For Creators & Professionals",
      desc: "We construct bespoke portfolio galleries that reflect artistic vision and professional authority. Using custom scrolling interactions, magnetic mouse indicators, and fluid typography, we ensure your personal brand matches your professional caliber.",
      icon: Layers,
    },
    {
      id: "business-websites",
      title: "Business Websites",
      subtitle: "For Corporations & Agencies",
      desc: "Robust, scalable, and highly optimized platforms designed to establish market authority. We combine semantic HTML structure, search-engine optimization, and premium editorial layouts to generate trust and command business partnerships.",
      icon: Shield,
    },
    {
      id: "landing-pages",
      title: "High-Conversion Landing Pages",
      subtitle: "For Product & Service Launches",
      desc: "High-impact, single-page sites structured around a clean storytelling hierarchy. We build lightweight interfaces with smooth scroll triggers to lead visitors naturally toward conversion actions.",
      icon: Zap,
    },
    {
      id: "static-websites",
      title: "Static Websites & Blogs",
      subtitle: "Jamstack & Speed Optimization",
      desc: "Pre-rendered static pages hosted on global CDN networks, rendering at sub-millisecond speeds. Perfect for content distribution hubs, blogs, and marketing portfolios where visual speed is critical.",
      icon: Code,
    },
    {
      id: "student-mini-projects",
      title: "Student Mini Projects & Playground",
      subtitle: "Educational Resources & Guides",
      desc: "Our dedicated contribution to learning. An interactive playground featuring semantic HTML templates, basic DOM manipulation guides, state management examples, and direct codebase documentation.",
      icon: BookOpen,
      special: true,
    },
  ];

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;
    setTodoList([...todoList, { id: Date.now(), text: newTodo, done: false }]);
    setNewTodo("");
  };

  const toggleTodo = (id) => {
    setTodoList(todoList.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  const miniProjects = {
    counter: {
      name: "Typographical Counter",
      tech: "React Hooks (useState)",
      description: "A functional numerical counter demonstrating state updates, safety boundaries (limiting range between 0 and 10), and simple animations.",
      code: `// React Functional Component Code
import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < 10) setCount(c => c + 1);
  };

  const decrement = () => {
    if (count > 0) setCount(c => c - 1);
  };

  return (
    <div className="flex items-center gap-4">
      <button onClick={decrement} className="px-4 py-2 border">-</button>
      <span className="text-3xl font-mono">{count}</span>
      <button onClick={increment} className="px-4 py-2 border">+</button>
    </div>
  );
}`,
      guide: "Key Concept: React uses trigger functions (setCount) to notify the virtual DOM of coordinate updates, forcing a visual repaint. Boundaries stop numerical overflow errors."
    },
    checklist: {
      name: "Dynamic Checklist",
      tech: "State Management & Lists",
      description: "An interactive todo application highlighting array state modification, form submissions in React, and list rendering using unique keys.",
      code: `// React Checklist State logic
const [list, setList] = useState([]);
const [input, setInput] = useState("");

const addItem = (e) => {
  e.preventDefault();
  setList([...list, { id: Date.now(), text: input, done: false }]);
  setInput("");
};

const toggleItem = (id) => {
  setList(list.map(item => 
    item.id === id ? { ...item, done: !item.done } : item
  ));
};`,
      guide: "Key Concept: Never mutate original arrays (e.g., list.push()). Use ES6 spread syntax ([...list]) to supply a brand-new array reference so React registers the visual diff."
    },
    themeToggler: {
      name: "Theme Toggle Switch",
      tech: "CSS Variables & LocalState",
      description: "A dark/light canvas switcher showcasing CSS dynamic variables, data attributes, and accessible toggles using ARIA roles.",
      code: `/* CSS Variables implementation */
:root {
  --bg: #ffffff;
  --text: #111111;
}
[data-theme="dark"] {
  --bg: #111111;
  --text: #ffffff;
}

body {
  background-color: var(--bg);
  color: var(--text);
  transition: background 0.3s ease;
}`,
      guide: "Key Concept: CSS Custom Properties allow clean runtime stylesheets without swapping large libraries. Set theme attributes on HTML root nodes to update global rules."
    }
  };

  return (
    <section id="services" className="relative py-24 md:py-36 px-6 md:px-12 bg-white overflow-hidden">
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
            03 / 07 — DIGITAL SERVICES
          </span>
          <h2 className="title-editorial text-4xl md:text-6xl font-light text-primary">
            Engineered to Perform.
            <br />
            <span className="italic text-neutral-500">Designed to Inspire.</span>
          </h2>
        </div>

        {/* Services Split Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Services List - Left */}
          <div className="lg:col-span-5 flex flex-col w-full border-t border-neutral-200">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isActive = activeService === index;
              return (
                <div
                  key={service.id}
                  onClick={() => setActiveService(index)}
                  className={`group border-b border-neutral-200 py-6 md:py-8 cursor-pointer flex flex-col items-start transition-all duration-500 ${
                    isActive ? "opacity-100" : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <div className="flex items-center space-x-4 mb-2">
                    <Icon className={`w-5 h-5 transition-colors duration-300 ${isActive ? "text-accent" : "text-neutral-500"}`} />
                    <span className="text-xs font-mono text-neutral-400">0{index + 1}</span>
                    <h3 className="text-lg md:text-xl font-medium tracking-tight text-primary">
                      {service.title}
                    </h3>
                  </div>
                  <span className="text-xs text-neutral-400 uppercase tracking-widest ml-9 font-light">
                    {service.subtitle}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Service Details Card - Right */}
          <div className="lg:col-span-7 w-full border border-neutral-200 bg-neutral-50 p-8 md:p-12 min-h-[400px] flex flex-col justify-between shadow-sm relative">
            <div className="absolute top-0 left-0 w-3 h-[1px] bg-neutral-400" />
            <div className="absolute top-0 left-0 w-[1px] h-3 bg-neutral-400" />
            <div className="absolute bottom-0 right-0 w-3 h-[1px] bg-neutral-400" />
            <div className="absolute bottom-0 right-0 w-[1px] h-3 bg-neutral-400" />

            <div>
              <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest mb-4 block">
                Heritage Studio Capabilities / 0{activeService + 1}
              </span>
              <h4 className="title-editorial text-2xl md:text-3xl font-light text-primary mb-6">
                {services[activeService].title}
              </h4>
              <p className="text-neutral-600 font-light text-sm md:text-base leading-relaxed mb-8">
                {services[activeService].desc}
              </p>
            </div>

            {/* Render mini projects container if special service is active */}
            {services[activeService].special ? (
              <div className="border border-neutral-200 bg-white p-6 rounded-none mt-4 w-full">
                <div className="flex items-center justify-between border-b border-neutral-100 pb-4 mb-6">
                  <span className="text-xs font-mono font-bold text-primary">MINI-PROJECTS PLAYGROUND</span>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => setSelectedProject("counter")}
                      className={`text-[10px] font-mono uppercase px-3 py-1.5 transition-all duration-300 ${
                        selectedProject === "counter"
                          ? "bg-primary text-white"
                          : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                      }`}
                    >
                      Counter
                    </button>
                    <button
                      onClick={() => setSelectedProject("checklist")}
                      className={`text-[10px] font-mono uppercase px-3 py-1.5 transition-all duration-300 ${
                        selectedProject === "checklist"
                          ? "bg-primary text-white"
                          : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                      }`}
                    >
                      Checklist
                    </button>
                    <button
                      onClick={() => setSelectedProject("themeToggler")}
                      className={`text-[10px] font-mono uppercase px-3 py-1.5 transition-all duration-300 ${
                        selectedProject === "themeToggler"
                          ? "bg-primary text-white"
                          : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                      }`}
                    >
                      Theme Toggle
                    </button>
                  </div>
                </div>

                {/* Sub-project Sandbox */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                  {/* Interactive Simulator */}
                  <div className="border border-neutral-200 bg-neutral-50 p-4 relative flex flex-col justify-between min-h-[220px]">
                    <div className="flex justify-between items-center border-b border-neutral-200 pb-2 mb-4">
                      <span className="text-[9px] font-mono text-neutral-400">SIMULATOR OUTPUT</span>
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    </div>

                    {/* Counter sandbox */}
                    {selectedProject === "counter" && (
                      <div className="flex flex-col items-center justify-center py-6 gap-4">
                        <span className="text-4xl font-mono font-bold text-primary">{counterVal}</span>
                        <div className="flex space-x-2">
                          <button
                            onClick={() => counterVal > 0 && setCounterVal(counterVal - 1)}
                            className="w-10 h-10 border border-neutral-300 bg-white flex items-center justify-center hover:bg-primary hover:text-white transition-all text-lg font-bold"
                          >
                            -
                          </button>
                          <button
                            onClick={() => counterVal < 10 && setCounterVal(counterVal + 1)}
                            className="w-10 h-10 border border-neutral-300 bg-white flex items-center justify-center hover:bg-primary hover:text-white transition-all text-lg font-bold"
                          >
                            +
                          </button>
                        </div>
                        <span className="text-[10px] text-neutral-400 italic">Limit set between 0 and 10</span>
                      </div>
                    )}

                    {/* Checklist sandbox */}
                    {selectedProject === "checklist" && (
                      <div className="flex flex-col h-full gap-3">
                        <div className="max-h-[120px] overflow-y-auto space-y-1.5">
                          {todoList.map((todo) => (
                            <div
                              key={todo.id}
                              onClick={() => toggleTodo(todo.id)}
                              className="flex items-center space-x-2 cursor-pointer bg-white p-2 border border-neutral-100 hover:border-neutral-300"
                            >
                              <input
                                type="checkbox"
                                checked={todo.done}
                                readOnly
                                className="rounded-none border-neutral-300 text-accent focus:ring-accent"
                              />
                              <span className={`text-xs ${todo.done ? "line-through text-neutral-400" : "text-neutral-700"}`}>
                                {todo.text}
                              </span>
                            </div>
                          ))}
                        </div>
                        <form onSubmit={handleAddTodo} className="flex gap-1.5 mt-2">
                          <input
                            type="text"
                            placeholder="Add task..."
                            value={newTodo}
                            onChange={(e) => setNewTodo(e.target.value)}
                            className="flex-grow text-xs border border-neutral-300 px-2 py-1.5 focus:outline-none focus:border-accent"
                          />
                          <button
                            type="submit"
                            className="bg-primary text-white text-xs px-3 py-1.5 hover:bg-accent transition-all"
                          >
                            Add
                          </button>
                        </form>
                      </div>
                    )}

                    {/* Theme Toggler Sandbox */}
                    {selectedProject === "themeToggler" && (
                      <div
                        className={`flex flex-col items-center justify-center py-6 gap-4 border transition-all duration-300 ${
                          previewTheme === "dark"
                            ? "bg-primary border-primary text-white"
                            : "bg-white border-neutral-200 text-primary"
                        }`}
                      >
                        <span className="text-xs uppercase tracking-widest font-mono">
                          Simulated Body Canvas
                        </span>
                        <button
                          onClick={() => setPreviewTheme(previewTheme === "dark" ? "light" : "dark")}
                          className={`text-xs px-4 py-2 border transition-all duration-300 ${
                            previewTheme === "dark"
                              ? "bg-white text-primary border-white hover:bg-neutral-200"
                              : "bg-primary text-white border-primary hover:bg-neutral-800"
                          }`}
                        >
                          Toggle Theme ({previewTheme === "dark" ? "LIGHT" : "DARK"})
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Documentation Code Snippet */}
                  <div className="flex flex-col justify-between">
                    <div>
                      <div className="flex items-center space-x-2 mb-2 text-neutral-400">
                        <BookOpen className="w-3.5 h-3.5" />
                        <span className="text-[10px] font-mono uppercase tracking-wider font-bold">Documentation Guide</span>
                      </div>
                      <p className="text-[11px] text-neutral-500 font-light leading-relaxed mb-4">
                        {miniProjects[selectedProject].guide}
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-1.5 text-neutral-400">
                        <span className="text-[9px] font-mono uppercase">{miniProjects[selectedProject].tech}</span>
                      </div>
                      <pre className="bg-neutral-900 text-neutral-300 text-[9.5px] p-3 overflow-x-auto font-mono max-h-[140px] leading-tight select-all">
                        {miniProjects[selectedProject].code}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <a
                href="#contact"
                className="group flex items-center space-x-3 text-xs uppercase tracking-widest font-bold text-primary hover:text-accent transition-colors duration-300 mt-8"
              >
                <span>Request Commission Guide</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
