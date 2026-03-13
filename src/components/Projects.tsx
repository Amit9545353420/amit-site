import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// A dedicated component to handle video autoplay reliably across all browsers
function VideoPlayer({ src, poster }: { src: string; poster: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      // Force muted state which is required for autoplay in modern browsers
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      
      // Attempt to play
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log("Autoplay prevented:", error);
        });
      }
    }
  }, [src]);

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      poster={poster}
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
    >
      <source src={src} type="video/mp4" />
      {/* Fallback image if video fails to load */}
      <img 
        src={poster} 
        alt="Project Video"
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
    </video>
  );
}

function ImageSlider({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3500); // Change image every 3.5 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full h-full relative overflow-hidden">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Slide ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          referrerPolicy="no-referrer"
        />
      ))}
    </div>
  );
}

export function Projects() {
  const projects = [
    {
      title: "ADAPTIVE STRUCTURE CREATION WITH THE HELP OF ARTIFICIAL INTELLIGENCE",
      description: "Applied AI-driven generative design in Autodesk Fusion 360 to create and optimize adaptive mechanical structures for improved strength, weight reduction, and design efficiency.",
      tags: ["AI", "Generative Design", "Fusion 360", "Optimization"],
      images: ["/ai-slide-1.jpg", "/ai-slide-2.jpg"], // The two images for the slider
      image: "https://picsum.photos/seed/ai1/600/400?grayscale", // Fallback
      color: "from-rose-500/20 to-orange-500/20"
    },
    {
      title: "Parametric Optimization in WAAM of ER70S-6 Steel",
      description: "Optimized process parameters using Response Surface Methodology and achieved high predictive model accuracy. Conducted microstructural analysis and mechanical characterization as part of research collaboration with the Microstructural Mechanics and Microforming Laboratory at IIT Bombay.",
      tags: ["WAAM", "Process Optimization", "Materials Testing", "Research"],
      video: "/waam-project.mp4", 
      image: "https://picsum.photos/seed/waam1/600/400?grayscale", // Fallback image
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Mechanical Performance Testing & Microstructural Characterization",
      description: "Evaluated microstructure and mechanical properties of WAAM fabricated ER70S-6 steel, studying the relationship between process parameters and material behavior.",
      tags: ["WAAM", "Materials Testing", "Manufacturing", "Analysis"],
      images: ["/mech-test-1.jpg", "/mech-test-2.jpg"], // The two images for the slider
      image: "https://picsum.photos/seed/waam2/600/400?grayscale", // Fallback
      color: "from-emerald-500/20 to-teal-500/20"
    },
    {
      title: "Automatic Street Light Controller",
      description: "Designed an IoT-based system that activates street lights automatically when vehicles approach and switches them off when no traffic is detected, reducing electricity wastage.",
      tags: ["IoT", "Automation", "Electronics", "Sustainability"],
      image: "/street-light-1.jpg", // Local image
      color: "from-indigo-500/20 to-purple-500/20"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50" />
      
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-eng-blue rounded-full"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group glass-panel rounded-3xl overflow-hidden flex flex-col h-full border border-slate-200/60 hover:border-eng-blue/30 transition-all duration-300 hover:shadow-xl hover:shadow-eng-blue/5"
            >
              {/* Project Image/Video Container */}
              <div className="relative aspect-video overflow-hidden bg-slate-100">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} mix-blend-multiply opacity-50 group-hover:opacity-0 transition-opacity duration-500 z-10 pointer-events-none`} />
                
                {project.video ? (
                  <VideoPlayer src={project.video} poster={project.image} />
                ) : project.images ? (
                  <ImageSlider images={project.images} />
                ) : (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                )}
                
                {/* Overlay Icon */}
                <div className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-eng-dark opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-sm">
                  <ArrowUpRight size={20} />
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-800 mb-3 leading-tight group-hover:text-eng-blue transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium border border-slate-200/50 group-hover:border-eng-blue/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
