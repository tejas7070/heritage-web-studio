import { useState } from "react";
import { Mail, MessageSquare, ArrowUpRight, Send, Check } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "portfolio",
    budget: "1L-3L",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API Submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormData({
        name: "",
        email: "",
        category: "portfolio",
        budget: "1L-3L",
        message: "",
      });
    }, 1500);
  };

  return (
    <section id="contact" className="relative bg-primary text-white py-24 md:py-36 px-6 md:px-12 overflow-hidden border-t border-neutral-800">
      {/* Background Subtle Grid Lines */}
      <div className="absolute inset-0 flex justify-between pointer-events-none px-6 md:px-12">
        <div className="w-[1px] h-full bg-neutral-900" />
        <div className="w-[1px] h-full bg-neutral-900 hidden md:block" />
        <div className="w-[1px] h-full bg-neutral-900 hidden md:block" />
        <div className="w-[1px] h-full bg-neutral-900" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto z-10 grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Info Column - Left */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-accent font-bold mb-4 block">
              07 / 07 — PROJECT COMMISSION
            </span>
            <h2 className="title-editorial text-4xl md:text-6xl font-light leading-tight mb-8">
              Let's craft something
              <br />
              <span className="italic text-neutral-400">extraordinary.</span>
            </h2>
            <p className="text-neutral-400 font-light text-sm md:text-base leading-relaxed mb-12 max-w-md">
              Whether you are looking to launch an award-winning portfolio, establish corporate authority, or need custom developmental consulting, we are ready to build it.
            </p>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col space-y-6">
            <a
              href="mailto:hello@heritageweb.studio"
              className="flex items-center space-x-4 group border-b border-neutral-800 pb-4 hover:border-accent transition-colors duration-300"
            >
              <div className="w-10 h-10 border border-neutral-800 flex items-center justify-center text-neutral-400 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                <Mail size={16} />
              </div>
              <div>
                <span className="text-[10px] font-mono text-neutral-500 uppercase block">EMAIL US DIRECTLY</span>
                <span className="text-xs md:text-sm font-semibold tracking-wider text-neutral-300 group-hover:text-white">
                  hello@heritageweb.studio
                </span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-neutral-600 group-hover:text-accent ml-auto transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>

            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 group border-b border-neutral-800 pb-4 hover:border-accent transition-colors duration-300"
            >
              <div className="w-10 h-10 border border-neutral-800 flex items-center justify-center text-neutral-400 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                <MessageSquare size={16} />
              </div>
              <div>
                <span className="text-[10px] font-mono text-neutral-500 uppercase block">WHATSAPP CHAT</span>
                <span className="text-xs md:text-sm font-semibold tracking-wider text-neutral-300 group-hover:text-white">
                  +91 99999 99999
                </span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-neutral-600 group-hover:text-accent ml-auto transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>

            {/* Social Links */}
            <div className="flex space-x-4 pt-4 text-xs font-mono text-neutral-400">
              <a href="#instagram" className="hover:text-accent transition-colors">INSTAGRAM</a>
              <span>/</span>
              <a href="#twitter" className="hover:text-accent transition-colors">TWITTER</a>
              <span>/</span>
              <a href="#linkedin" className="hover:text-accent transition-colors">LINKEDIN</a>
            </div>
          </div>
        </div>

        {/* Form Column - Right */}
        <div className="lg:col-span-7 bg-neutral-950/40 border border-neutral-900 p-8 md:p-12 relative flex flex-col justify-between">
          {/* Corner highlights */}
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-neutral-700" />
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-neutral-700" />

          {isSent ? (
            <div className="flex flex-col items-center justify-center text-center py-16">
              <div className="w-16 h-16 rounded-full border border-green-500/20 flex items-center justify-center mb-6 bg-green-500/10">
                <Check className="text-green-400 w-8 h-8" />
              </div>
              <h3 className="title-editorial text-2xl font-light text-white mb-2">Message Dispatched</h3>
              <p className="text-neutral-400 text-xs md:text-sm font-light max-w-sm leading-relaxed mb-6">
                Thank you for contacting Heritage Web Studio. A creative director will review your project requirements and email you back within 24 hours.
              </p>
              <button
                onClick={() => setIsSent(false)}
                className="text-xs font-mono uppercase tracking-widest border border-neutral-800 px-6 py-2.5 hover:bg-neutral-900 transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="flex justify-between items-center border-b border-neutral-800 pb-4 mb-4">
                <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                  COMMISSION INQUIRY FORM
                </span>
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              </div>

              {/* Name Input */}
              <div className="flex flex-col">
                <label htmlFor="name" className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-1">
                  What is your name? *
                </label>
                <input
                  required
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="e.g. Tejas Ulawekar"
                  className="bg-transparent border-b border-neutral-800 focus:border-accent text-sm py-2.5 text-white placeholder-neutral-700 focus:outline-none transition-colors"
                />
              </div>

              {/* Email Input */}
              <div className="flex flex-col">
                <label htmlFor="email" className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-1">
                  What is your email address? *
                </label>
                <input
                  required
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="e.g. tejas@example.com"
                  className="bg-transparent border-b border-neutral-800 focus:border-accent text-sm py-2.5 text-white placeholder-neutral-700 focus:outline-none transition-colors"
                />
              </div>

              {/* Select Category & Budget Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col">
                  <label htmlFor="category" className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-2">
                    Project Category
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="bg-neutral-950 border border-neutral-850 text-xs px-3 py-3 text-white focus:outline-none focus:border-accent"
                  >
                    <option value="portfolio">Portfolio Website</option>
                    <option value="business">Business Website</option>
                    <option value="landing">Landing Page</option>
                    <option value="static">Static Jamstack Site</option>
                    <option value="maintenance">Website Maintenance</option>
                  </select>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="budget" className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-2">
                    Budget Tier
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="bg-neutral-950 border border-neutral-850 text-xs px-3 py-3 text-white focus:outline-none focus:border-accent"
                  >
                    <option value="1L-3L">₹1,00,000 - ₹3,00,000</option>
                    <option value="3L-5L">₹3,00,000 - ₹5,00,000</option>
                    <option value="5L+">₹5,00,000+</option>
                  </select>
                </div>
              </div>

              {/* Message Input */}
              <div className="flex flex-col">
                <label htmlFor="message" className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-1">
                  Tell us about your project goals *
                </label>
                <textarea
                  required
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Introduce your project details, timeline expectations, and core challenges..."
                  className="bg-transparent border-b border-neutral-800 focus:border-accent text-sm py-2.5 text-white placeholder-neutral-700 focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center space-x-2 text-xs uppercase tracking-widest font-bold bg-white text-primary py-4 hover:bg-accent hover:text-white transition-colors duration-300 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Dispatching Message...</span>
                ) : (
                  <>
                    <span>Submit Commission Inquiry</span>
                    <Send size={12} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
