import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/src/lib/utils";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "py-4" : "py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className={cn(
          "flex items-center justify-between rounded-2xl px-6 py-4 transition-all duration-300",
          isScrolled ? "glass-panel shadow-md" : "bg-transparent"
        )}>
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded bg-eng-blue text-white flex items-center justify-center font-display font-bold text-lg group-hover:bg-eng-dark transition-colors">
              AP
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-eng-blue transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-eng-blue transition-all group-hover:w-full" />
              </a>
            ))}
            <a
              href="#cv"
              className="px-5 py-2 rounded-full bg-eng-dark text-white text-sm font-medium hover:bg-eng-blue transition-colors shadow-sm"
            >
              Resume
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-slate-600 hover:text-eng-blue"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-4 right-4 mt-2 glass-panel rounded-2xl p-4 flex flex-col gap-4 md:hidden shadow-lg"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-medium text-slate-700 hover:text-eng-blue p-2 rounded-lg hover:bg-slate-50 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#cv"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-2 px-5 py-3 rounded-xl bg-eng-dark text-white text-center font-medium hover:bg-eng-blue transition-colors"
            >
              Download Resume
            </a>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
