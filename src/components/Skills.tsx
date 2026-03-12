import { motion } from "motion/react";
import { Settings, Cpu, Layers, PenTool, Search, Activity, Zap, Target } from "lucide-react";

export function Skills() {
  const skills = [
    { name: "Mechanical Engineering", icon: <Settings size={28} />, level: 90 },
    { name: "Manufacturing Processes", icon: <Layers size={28} />, level: 85 },
    { name: "Additive Manufacturing", icon: <Cpu size={28} />, level: 95 },
    { name: "WAAM Technology", icon: <Zap size={28} />, level: 95 },
    { name: "Materials Characterization", icon: <Search size={28} />, level: 80 },
    { name: "Engineering Research", icon: <Activity size={28} />, level: 85 },
    { name: "Process Optimization", icon: <Target size={28} />, level: 90 },
    { name: "Problem Solving", icon: <PenTool size={28} />, level: 95 },
  ];

  return (
    <section id="skills" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Abstract Shapes */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-eng-blue/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-slate-300/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Technical <span className="text-gradient">Proficiency</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-eng-blue rounded-full"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-panel p-6 rounded-2xl flex flex-col items-center justify-center text-center gap-4 group border border-slate-200/50 hover:border-eng-blue/30 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-600 group-hover:bg-eng-blue group-hover:text-white transition-colors duration-300 shadow-inner">
                {skill.icon}
              </div>
              <h3 className="font-semibold text-slate-800 text-sm md:text-base group-hover:text-eng-blue transition-colors">
                {skill.name}
              </h3>
              
              {/* Progress Bar */}
              <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden mt-2">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-eng-blue to-cyan-400 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technical Expertise & Interests */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 rounded-3xl border border-slate-200/50 shadow-sm flex flex-col h-full"
          >
            <h3 className="text-xl font-bold text-slate-800 mb-6 text-center">Technical Expertise & Interests</h3>
            <div className="flex flex-wrap justify-center gap-3 mt-auto mb-auto">
              {[
                "Microstructure Characterization",
                "Optimization Methods",
                "Response Surface Methodology",
                "Taguchi Orthogonal Arrays (L8, L28, L18)",
                "Fractography",
                "CAD/CAM using Fusion 360",
                "Product Lifecycle Management (PLM)",
                "Industry 4.0",
                "Additive Manufacturing",
                "Generative Design",
                "Industrial Robotics"
              ].map((tag, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 rounded-full bg-white text-slate-700 text-sm font-medium border border-slate-200 hover:border-eng-blue hover:text-eng-blue transition-colors shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 rounded-3xl border border-slate-200/50 shadow-sm flex flex-col h-full"
          >
            <h3 className="text-xl font-bold text-slate-800 mb-6 text-center">Hands-on Equipment Experience</h3>
            <div className="flex flex-wrap justify-center gap-3 mt-auto mb-auto">
              {[
                "Yaskawa 6-axis Industrial Robot",
                "Wire Electric Discharge Machining (EDM)",
                "Optical Microscope",
                "Manual & Semi-Automatic Polishing Machine",
                "Shaping Machine",
                "Bandsaw Machine",
                "CNC Milling",
                "Lathe Machine",
                "Snapmaker 350A 3D Printer"
              ].map((tag, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 rounded-full bg-slate-800 text-white text-sm font-medium border border-slate-700 hover:bg-eng-blue hover:border-eng-blue transition-colors shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
