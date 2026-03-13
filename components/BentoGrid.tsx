"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";
import { 
  ArrowUpRight, 
  AlertCircle, 
  Box, 
  Zap, 
  Music, 
  Heart, 
  Users, 
  BookOpen, 
  Fingerprint, 
  Globe, 
  Barcode, 
  ShieldCheck,
  Sparkles,
  type LucideIcon
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

// Map project IDs or pillars to specific visual signatures
const getProjectAesthetic = (id: string, pillar: string) => {
  const aesthetics: Record<string, { gradient: string; icon: LucideIcon }> = {
    renew: { gradient: "from-teal-500/20", icon: Zap },
    "net-zero": { gradient: "from-emerald-500/20", icon: Barcode },
    "lost-voices": { gradient: "from-indigo-500/20", icon: Fingerprint },
    traylz: { gradient: "from-blue-500/20", icon: Globe },
    beatvyne: { gradient: "from-purple-500/20", icon: Music },
    elysium: { gradient: "from-rose-500/20", icon: Heart },
    "connect-tfi": { gradient: "from-sky-500/20", icon: ShieldCheck },
    questquill: { gradient: "from-amber-500/20", icon: BookOpen },
    ooda: { gradient: "from-orange-500/20", icon: Users },
    "shape-burst": { gradient: "from-pink-500/20", icon: Sparkles },
  };

  const defaultStyles: Record<string, { gradient: string; icon: LucideIcon }> = {
    Systems: { gradient: "from-teal-500/10", icon: Zap },
    Environments: { gradient: "from-purple-500/10", icon: Box },
    Cognition: { gradient: "from-rose-500/10", icon: Heart },
    Intelligence: { gradient: "from-amber-500/10", icon: BookOpen },
  };

  return aesthetics[id] || defaultStyles[pillar] || defaultStyles.Systems;
};

interface BentoGridProps {
  category?: "Systems" | "Environments" | "Cognition" | "Intelligence";
}

export const BentoGrid = ({ category }: BentoGridProps) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const filteredProjects = category 
    ? projects.filter(p => p.pillar === category)
    : projects;

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr md:auto-rows-[320px]"
    >
      {filteredProjects.map((project, idx) => {
        const { gradient } = getProjectAesthetic(project.id, project.pillar);
        
        return (
          <Link 
            key={project.id} 
            href={`/projects/${project.id}`} 
            className={cn(
              "group relative overflow-hidden rounded-3xl bg-[#141414] border border-white/5 flex flex-col justify-between hover:border-teal-500/50 transition-all duration-500",
              category 
                ? (idx % 3 === 0 ? "md:col-span-2" : "col-span-1") 
                : (project.span === "large" ? "md:col-span-2 lg:row-span-2" : project.span === "medium" ? "md:col-span-2 lg:row-span-1" : "col-span-1")
            )}
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* Background System */}
            <div className="absolute inset-0 z-0">
              {/* Project Image Overlay */}
              {project.image ? (
                <motion.div 
                  initial={{ opacity: 0.6, filter: "brightness(0.8) contrast(1)" }}
                  animate={{ 
                    opacity: hoveredId === project.id ? 0.7 : 0.6,
                    scale: hoveredId === project.id ? 1.05 : 1,
                    filter: hoveredId === project.id ? "brightness(1.1) contrast(1.1)" : "brightness(0.8) contrast(1)"
                  }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0"
                >
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={idx < 4} // Load first few images immediately
                  />
                </motion.div>
              ) : (
                <motion.div 
                  className={cn("absolute inset-0 bg-gradient-to-br via-transparent to-transparent opacity-30", gradient)}
                  animate={{ 
                    scale: hoveredId === project.id ? 1.2 : 1,
                    opacity: hoveredId === project.id ? 0.5 : 0.3
                  }}
                  transition={{ duration: 1.2 }}
                />
              )}
              
              {/* Overlay Gradient to ensure text readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60 z-[1]" />
            </div>

            <motion.div
              variants={item}
              whileTap={{ scale: 0.98 }}
              className="h-full p-8 flex flex-col justify-between relative z-10"
            >
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <p className="text-[10px] uppercase tracking-widest text-teal-500 font-bold">
                      {project.category}
                    </p>
                    {project.isSpatial && (
                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
                        <Box className="w-3 h-3 text-accent" />
                        <span className="text-[10px] font-bold text-accent uppercase tracking-wider">Spatial / XR</span>
                      </div>
                    )}
                  </div>
                  <h3 className="text-2xl font-medium text-foreground tracking-tight group-hover:translate-x-1 transition-transform">
                    {project.title}
                  </h3>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-teal-500 group-hover:rotate-12 transition-all" />
              </div>

              <div className="mt-auto">
                <div className="relative h-12 mb-4 overflow-hidden">
                  <AnimatePresence mode="wait">
                    {hoveredId === project.id ? (
                      <motion.div
                        key="problem"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="text-xs text-teal-400 font-medium uppercase tracking-widest flex items-center gap-2"
                      >
                        <AlertCircle className="w-3 h-3 flex-shrink-0" /> 
                        <span className="line-clamp-2">The Challenge: {project.wickedProblem}</span>
                      </motion.div>
                    ) : (
                      <motion.p
                        key="desc"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="text-sm text-muted-foreground/80 max-w-[280px] line-clamp-2"
                      >
                        {project.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
                
                <div className="flex gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] px-2 py-1 rounded-full bg-white/5 border border-white/10 text-muted-foreground uppercase tracking-wider group-hover:border-teal-500/20 group-hover:text-teal-400 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </Link>
        );
      })}
    </motion.div>
  );
};
