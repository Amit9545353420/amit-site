import { motion } from "motion/react";
import { GraduationCap, Wrench, Microscope, Cpu } from "lucide-react";

export function About() {
  const interests = [
    { icon: <Cpu size={24} />, title: "Additive Manufacturing" },
    { icon: <Wrench size={24} />, title: "Manufacturing Systems" },
    { icon: <Microscope size={24} />, title: "Materials Engineering" },
    { icon: <GraduationCap size={24} />, title: "Engineering Research" },
  ];

  return (
    <section id="about" className="py-24 relative bg-white overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -skew-x-12 translate-x-1/2 opacity-50" />
      
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            About <span className="text-gradient">Me</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-eng-blue rounded-full"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Biography Text */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-slate-800">
              Passionate about the future of manufacturing.
            </h3>
            <p className="text-slate-600 leading-relaxed text-lg">
              I am a Mechanical Engineering graduate from Shri Guru Gobind Singhji Institute of Engineering and Technology, Nanded. My academic journey has been driven by a deep curiosity about how things are made and how we can make them better.
            </p>
            <p className="text-slate-600 leading-relaxed text-lg">
              My primary focus lies in advanced manufacturing technologies, with significant hands-on experience in Wire Arc Additive Manufacturing (WAAM) research projects. I thrive at the intersection of materials science, process optimization, and mechanical design, constantly seeking innovative solutions to complex engineering challenges.
            </p>
            
            <div className="pt-6 border-t border-slate-200">
              <p className="font-medium text-slate-800 mb-4">Core Focus Areas:</p>
              <div className="grid grid-cols-2 gap-4">
                {interests.map((interest, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-eng-blue/30 hover:shadow-sm transition-all group"
                  >
                    <div className="text-eng-blue group-hover:scale-110 transition-transform">
                      {interest.icon}
                    </div>
                    <span className="text-sm font-medium text-slate-700">{interest.title}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Technical Illustration / Graphic */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square max-w-md mx-auto relative">
              {/* Wireframe/Blueprint Graphic */}
              <div className="absolute inset-0 bg-slate-900 rounded-3xl overflow-hidden shadow-2xl">
                {/* Grid Lines */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:32px_32px]" />
                
                {/* Abstract CAD Shape */}
                <svg className="absolute inset-0 w-full h-full p-12" viewBox="0 0 100 100" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5">
                  <motion.path 
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    d="M50 10 L90 30 L90 70 L50 90 L10 70 L10 30 Z" 
                  />
                  <motion.path 
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
                    d="M50 10 L50 50 L90 30 M50 50 L90 70 M50 50 L50 90 M50 50 L10 70 M50 50 L10 30" 
                  />
                  <circle cx="50" cy="50" r="2" fill="#0066FF" />
                  <circle cx="50" cy="10" r="2" fill="#fff" />
                  <circle cx="90" cy="30" r="2" fill="#fff" />
                  <circle cx="90" cy="70" r="2" fill="#fff" />
                  <circle cx="50" cy="90" r="2" fill="#fff" />
                  <circle cx="10" cy="70" r="2" fill="#fff" />
                  <circle cx="10" cy="30" r="2" fill="#fff" />
                </svg>

                {/* Overlay Info Cards */}
                <motion.div 
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-8 left-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-3"
                >
                  <p className="text-[10px] text-blue-200 uppercase tracking-wider font-mono">Process</p>
                  <p className="text-sm text-white font-bold font-mono">WAAM</p>
                </motion.div>

                <motion.div 
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-3"
                >
                  <p className="text-[10px] text-blue-200 uppercase tracking-wider font-mono">Material</p>
                  <p className="text-sm text-white font-bold font-mono">ER70S-6</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
