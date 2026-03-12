import { motion } from "motion/react";
import { ArrowRight, Download, ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-eng-blue-light/30 rounded-full blur-3xl opacity-50" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-eng-silver/40 rounded-full blur-3xl opacity-50" />
        
        {/* Animated Grid Lines */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-eng-blue-light/50 border border-eng-blue/20 w-fit">
              <span className="w-2 h-2 rounded-full bg-eng-blue animate-pulse" />
              <span className="text-sm font-medium text-eng-blue">Available for Opportunities</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Amitkumar <br />
              <span className="text-gradient">Pandurnikar</span>
            </h1>
            
            <h2 className="text-lg md:text-xl font-medium text-slate-600 max-w-2xl leading-relaxed mt-2">
              Mechanical Engineer | Additive Manufacturing | CAD/CAM Design | Industrial Robotics | R&D | Industry 4.0 | PLM
            </h2>
            
            <p className="text-slate-500 text-lg leading-relaxed max-w-lg">
              A mechanical engineering graduate passionate about advanced manufacturing technologies, additive manufacturing systems, and engineering innovation. Experienced in WAAM research, process optimization, and applied engineering projects.
            </p>
            
            <p className="text-eng-blue font-medium text-lg mt-2">
              Let's connect and explore the possibilities together!
            </p>
            
            <div className="flex flex-wrap items-center gap-4 mt-4">
              <a 
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-eng-blue text-white font-medium hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-eng-blue/20 group"
              >
                View Projects
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="/Amitkumar_Pandurnikar_CV.pdf"
                download="Amitkumar_Pandurnikar_CV.pdf"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-slate-700 font-medium border border-slate-200 hover:border-eng-blue hover:text-eng-blue transition-all group"
              >
                Download CV
                <Download size={18} className="group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Image/Graphic Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative lg:ml-auto w-full flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[20rem] sm:max-w-[24rem] md:max-w-[28rem] aspect-square mt-12 lg:mt-0">
              {/* Decorative Frame */}
              <div className="absolute inset-0 border-2 border-eng-blue/20 rounded-full translate-x-4 translate-y-4" />
              <div className="absolute inset-0 border border-slate-200 rounded-full -translate-x-4 -translate-y-4 bg-white/50 backdrop-blur-sm" />
              
              {/* Image Container */}
              <div className="absolute inset-0 rounded-full overflow-hidden bg-slate-100 shadow-xl border-4 border-white">
                <img 
                  src="https://iili.io/qY8lG3J.png" 
                  alt="Amitkumar Pandurnikar" 
                  className="w-full h-full object-cover transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-eng-dark/40 via-transparent to-transparent opacity-60 rounded-full" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400"
        >
          <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={20} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
