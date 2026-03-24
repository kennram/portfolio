"use client";

import { logs } from "@/data/logs";
import { Header } from "@/components/Header";
import { AssistantWidget } from "@/components/AssistantWidget";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Terminal, Cpu, Activity } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { InfoTooltip } from "@/components/InfoTooltip";

export default function LogsPage() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const getStatusDefinition = (status: string) => {
    switch (status) {
      case "DECRYPTED": return "Research synthesized and converted from raw data into actionable strategic intelligence.";
      case "LIVE_FEED": return "Active research stream. These projects are currently evolving and open for collaboration.";
      case "ARCHIVED": return "Completed study. Foundational methodologies successfully integrated into the 3E's Framework.";
      default: return "Research project status lifecycle.";
    }
  };

  const getCognitiveLoadDefinition = (load: string) => {
    switch (load) {
      case "Low: Narrative": return "Exploratory, storytelling-driven content focused on human-centric case studies.";
      case "Medium: Strategic": return "Dense synthesis of organizational systems, business frameworks, and design methodology.";
      case "High: Architectural": return "Advanced architectural deep dives into AI pipelines, XR engines, and socio-technical modeling.";
      default: return "Research density and cognitive complexity level.";
    }
  };


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <main className="relative z-10 min-h-screen text-foreground selection:bg-teal-500/30">
      <Header />
      
      <div className="max-w-6xl mx-auto px-6 md:px-12 pt-48 pb-32">
        {/* Header Section */}
        <div className="mb-24 space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 text-teal-500"
          >
            <Terminal className="w-4 h-4" />
            <span className="text-[10px] uppercase tracking-[0.6em] font-bold">System Intelligence</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-bold tracking-tighter uppercase"
          >
            Research Logs
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground font-light max-w-2xl"
          >
            An archival feed of technical breakthroughs, socio-technical reports, and strategic intelligence.
          </motion.p>
        </div>

        {/* The Neural Ledger */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-4"
        >
          {logs.map((log, idx) => (
            <motion.div
              key={log.id}
              variants={itemVariants}
              onMouseEnter={() => setHoveredId(log.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative"
            >
              <Link href={`/logs/${log.id}`}>
                <div className={cn(
                  "p-8 md:p-10 rounded-3xl border transition-all duration-500 flex flex-col lg:flex-row lg:items-center justify-between gap-8 overflow-hidden relative",
                  hoveredId === log.id 
                    ? "bg-teal-500/5 border-teal-500/30 translate-x-2" 
                    : "bg-white/[0.02] border-white/5"
                )}>
                  {/* Image Thumbnail Container */}
                  {log.images && log.images.length > 0 && (
                    <div className="w-full lg:w-48 h-48 lg:h-32 rounded-2xl overflow-hidden relative border border-white/5 flex-shrink-0">
                      <Image
                        src={log.images[0]}
                        alt={log.title}
                        fill
                        className="object-cover opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 grayscale hover:grayscale-0"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#141414]/80 to-transparent" />
                    </div>
                  )}

                  {/* Metadata Row */}
                  <div className="flex-1 space-y-4 relative z-10">
                    <div className="flex flex-wrap items-center gap-4 text-[10px] font-bold uppercase tracking-widest">
                      <span className="text-teal-500">ID: LOG_{idx.toString().padStart(2, '0')}</span>
                      <span className="text-muted-foreground/40 hidden md:inline">|</span>
                      <span className="px-3 py-1 rounded-full bg-white/5 text-muted-foreground">{log.category}</span>
                      <span className="text-muted-foreground/40 hidden md:inline">|</span>
                      <InfoTooltip content={getCognitiveLoadDefinition(log.cognitiveLoad)}>
                        <span className={cn(
                          "flex items-center gap-1.5 cursor-help hover:text-white transition-colors",
                          log.cognitiveLoad.includes("High") ? "text-rose-500" : log.cognitiveLoad.includes("Medium") ? "text-amber-500" : "text-teal-500"
                        )}>
                          <Activity className="w-3 h-3" />
                          {log.cognitiveLoad}
                        </span>
                      </InfoTooltip>
                    </div>

                    <h2 className="text-2xl md:text-4xl font-bold tracking-tight group-hover:text-teal-400 transition-colors">
                      {log.title}
                    </h2>
                    
                    <p className="text-muted-foreground line-clamp-2 max-w-3xl font-light text-sm md:text-base">
                      {log.summary}
                    </p>
                  </div>

                  {/* Status & Action */}
                  <div className="flex items-center justify-between lg:justify-end gap-8 relative z-10 w-full lg:w-auto">
                    <div className="flex flex-col items-start lg:items-end text-left lg:text-right space-y-1">
                       <div className="flex items-center gap-2">
                         <span className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Status</span>
                         <InfoTooltip content={getStatusDefinition(log.status)}>
                           <span className="px-2 py-0.5 rounded bg-teal-500/10 text-teal-500 text-[9px] font-mono cursor-help">
                             {log.status}
                           </span>
                         </InfoTooltip>
                       </div>
                       <div className="text-[10px] uppercase tracking-widest text-muted-foreground/40 font-mono">
                         Indexed: {log.date}
                       </div>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-teal-500 group-hover:border-teal-500 transition-all flex-shrink-0">
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Status */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8"
        >
          <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] font-bold text-muted-foreground/40">
            <Cpu className="w-4 h-4" />
            <span>Neural Archive v2.0.26 // Irish Intelligence Hub</span>
          </div>
          <div className="text-[10px] uppercase tracking-[0.4em] font-bold text-teal-500/40">
            Active Research Stream [LIVE]
          </div>
        </motion.div>
      </div>

      <AssistantWidget />
      
      {/* Footer */}
      <footer className="px-8 md:px-12 py-16 border-t border-white/5 text-[10px] uppercase tracking-[0.5em] text-muted-foreground/40 text-center font-bold">
        © 2026 KENN DAVIS. PRIVATE STRATEGIC ARCHIVE.
      </footer>
    </main>
  );
}
