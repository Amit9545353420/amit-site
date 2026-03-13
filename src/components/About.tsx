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
              <div className="absolute inset-0 bg-slate-900 rounded-3xl shadow-2xl">
                {/* Grid Lines */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:32px_32px] rounded-3xl overflow-hidden" />
                
                {/* Abstract CAD Shape */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5">
                  <motion.path 
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    d="M50 25 L71.6 37.5 L71.6 62.5 L50 75 L28.4 62.5 L28.4 37.5 Z" 
                  />
                  <motion.path 
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
                    d="M50 25 L50 50 L71.6 37.5 M50 50 L71.6 62.5 M50 50 L50 75 M50 50 L28.4 62.5 M50 50 L28.4 37.5" 
                  />
                  <circle cx="50" cy="50" r="1.5" fill="#0066FF" />
                  <circle cx="50" cy="25" r="1.5" fill="#fff" />
                  <circle cx="71.6" cy="37.5" r="1.5" fill="#fff" />
                  <circle cx="71.6" cy="62.5" r="1.5" fill="#fff" />
                  <circle cx="50" cy="75" r="1.5" fill="#fff" />
                  <circle cx="28.4" cy="62.5" r="1.5" fill="#fff" />
                  <circle cx="28.4" cy="37.5" r="1.5" fill="#fff" />
                </svg>

                {/* Overlay Info Cards */}
                <div className="absolute inset-0 pointer-events-none">
                  {[
                    { text: "Generative Design", pos: "top-[25%] left-[50%] -translate-x-1/2 -translate-y-full -mt-2 md:-mt-3", delay: 0 },
                    { text: "3D Printing", pos: "top-[37.5%] left-[71.6%] ml-2 md:ml-3 -translate-y-1/2", delay: 0.5 },
                    { text: "CAD/CAM Fusion 360", pos: "top-[62.5%] left-[71.6%] ml-2 md:ml-3 -translate-y-1/2", delay: 1 },
                    { text: "Optimization", pos: "top-[75%] left-[50%] -translate-x-1/2 mt-2 md:mt-3", delay: 1.5 },
                    { text: "Industry 4.0", pos: "top-[62.5%] left-[28.4%] -translate-x-full -ml-2 md:-ml-3 -translate-y-1/2", delay: 2 },
                    { text: "Mechanical Testings", pos: "top-[37.5%] left-[28.4%] -translate-x-full -ml-2 md:-ml-3 -translate-y-1/2", delay: 2.5 },
                  ].map((label, i) => (
                    <div key={i} className={`absolute ${label.pos} z-10 pointer-events-auto`}>
                      <motion.div 
                        animate={{ y: [0, i % 2 === 0 ? -3 : 3, 0] }}
                        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: label.delay }}
                        className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-2 py-1.5 shadow-lg w-20 md:w-24 flex items-center justify-center text-center"
                      >
                        <p className="text-[8px] md:text-[10px] text-white font-bold font-mono uppercase tracking-wider leading-tight">{label.text}</p>
                      </motion.div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
