import { motion } from "motion/react";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 relative overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-slate-800 pb-8 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-eng-blue text-white flex items-center justify-center font-display font-bold text-xl shadow-lg shadow-eng-blue/20">
              AP
            </div>
            <div>
              <h4 className="text-white font-display font-semibold text-lg">Amitkumar Pandurnikar</h4>
              <p className="text-sm">Mechanical Engineer</p>
            </div>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center hover:bg-eng-blue hover:text-white transition-colors group"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p>&copy; {new Date().getFullYear()} Amitkumar Pandurnikar. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="https://linkedin.com/in/amitkumar-pandurnikar" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="mailto:amit.pandurnikar@gmail.com" className="hover:text-white transition-colors">Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
