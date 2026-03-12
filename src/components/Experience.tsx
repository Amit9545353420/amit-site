import { motion } from "motion/react";
import { Briefcase, GraduationCap } from "lucide-react";

export function Experience() {
  const timeline = [
    {
      type: "experience",
      title: "3D Printer Manager",
      institution: "AICTE – SGGSIET IDEA Lab",
      date: "Experience",
      description: "Managed Snap maker 350A model 3D printer and worked on fused deposition modelling (FDM).",
      icon: <Briefcase size={20} className="text-eng-blue" />
    },
    {
      type: "education",
      title: "Bachelor of Technology in Mechanical Engineering",
      institution: "Shri Guru Gobind Singhji Institute of Engineering and Technology, Nanded",
      date: "Graduated",
      description: "Focused on advanced manufacturing, materials engineering, and mechanical systems design.",
      icon: <GraduationCap size={20} className="text-eng-blue" />
    },
    {
      type: "experience",
      title: "Industrial Internship",
      institution: "Inditech Valves Pvt. Ltd., Pune",
      date: "Internship",
      description: "Designed and developed a fixture for an integrated valve assembly, hydro-testing, and calibration system to improve manufacturing workflow efficiency.",
      icon: <Briefcase size={20} className="text-emerald-600" />
    }
  ];

  return (
    <section id="experience" className="py-24 bg-slate-50 relative">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Education & <span className="text-gradient">Experience</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-eng-blue rounded-full"
          />
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2" />

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-10 h-10 rounded-full bg-white border-4 border-slate-100 shadow-sm flex items-center justify-center -translate-x-1/2 z-10">
                  {item.icon}
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${
                  index % 2 === 0 ? "md:pr-12 text-left md:text-right" : "md:pl-12 text-left"
                }`}>
                  <div className="glass-panel p-6 md:p-8 rounded-2xl hover:shadow-md transition-shadow relative group">
                    {/* Decorative Corner */}
                    <div className={`absolute top-0 w-16 h-16 bg-eng-blue/5 rounded-full blur-xl transition-all group-hover:bg-eng-blue/10 ${
                      index % 2 === 0 ? "right-0" : "left-0"
                    }`} />
                    
                    <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">
                      {item.date}
                    </span>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h3>
                    <h4 className="text-md font-medium text-eng-blue mb-4">{item.institution}</h4>
                    <p className="text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
