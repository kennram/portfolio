"use client";

import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { AssistantWidget } from "@/components/AssistantWidget";
import { 
  ArrowLeft, 
  ExternalLink, 
  Cpu, 
  Layers, 
  Sparkles, 
  Zap, 
  Heart, 
  AlertCircle,
  TrendingUp,
  Workflow
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import React from "react";

export default function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = React.use(params);
  const project = projects.find((p) => p.id === resolvedParams.id);

  if (!project) {
    notFound();
  }

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] as const } }
  };

  return (
    <main className="relative z-10 min-h-screen text-foreground selection:bg-teal-500/30 overflow-x-hidden">
      <Header />
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto px-4 md:px-12 pt-32 md:pt-48 pb-32"
      >
        {/* Back Button */}
        <motion.div variants={itemVariants}>
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-muted-foreground hover:text-teal-500 transition-colors mb-8 md:mb-12 group"
          >
            <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Link>
        </motion.div>

        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-end mb-16 md:mb-24">
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <span className="px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-[9px] md:text-[10px] font-bold text-teal-500 uppercase tracking-widest">
                {project.category}
              </span>
              {project.isSpatial && (
                <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-[9px] md:text-[10px] font-bold text-purple-400 uppercase tracking-widest">
                  Spatial / XR
                </span>
              )}
            </div>
            <h1 className="text-[clamp(2.2rem,10vw,5rem)] md:text-[clamp(3.5rem,12vw,8rem)] font-bold tracking-tighter leading-[0.85] mb-6 md:mb-8">
              {project.title}
            </h1>
          </motion.div>
          <motion.div variants={itemVariants} className="flex flex-col gap-6 md:gap-8 items-start lg:items-end">
            <p className="text-lg md:text-xl text-muted-foreground max-w-md lg:text-right font-light leading-relaxed">
              {project.description}
            </p>
            {project.link && (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 md:px-8 py-3.5 md:py-4 bg-white text-black rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-widest hover:bg-teal-600 hover:text-white transition-all shadow-xl"
              >
                Visit External Link <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </motion.div>
        </div>

        {/* Hero Image */}
        {project.image && (
          <motion.div 
            variants={itemVariants}
            className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden rounded-[1.5rem] md:rounded-[2.5rem] mb-16 md:mb-32 border border-white/5 bg-[#141414]"
          >
            <Image 
              src={project.image} 
              alt={project.title}
              fill
              className="object-cover opacity-60"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
          </motion.div>
        )}

        {/* The "Wicked Problem" Visualization */}
        <motion.div 
          variants={itemVariants}
          className="relative p-[1px] rounded-[1.5rem] md:rounded-[2.5rem] bg-gradient-to-br from-teal-500/20 via-transparent to-transparent mb-16 md:mb-32"
        >
          <div className="p-8 md:p-16 rounded-[1.5rem] md:rounded-[2.5rem] bg-[#0a0a0a] border border-white/5 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-16 relative z-10">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-teal-500">
                  <AlertCircle className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold">The Wicked Problem</span>
                </div>
                <p className="text-xl md:text-2xl font-medium tracking-tight leading-tight">
                  {project.wickedProblem}
                </p>
              </div>

              <div className="flex items-center justify-center">
                <div className="w-full h-px bg-gradient-to-r from-teal-500/50 via-teal-500 to-teal-500/50 relative hidden lg:block">
                  <motion.div 
                    animate={{ x: ["0%", "100%"] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/2 -translate-y-1/2 w-8 h-8 bg-teal-500 blur-2xl opacity-50"
                  />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 bg-[#0a0a0a] text-[10px] font-mono text-teal-500/50 uppercase tracking-[0.4em]">
                    The Bridge
                  </div>
                </div>
                <div className="h-12 w-px bg-gradient-to-b from-teal-500/50 via-teal-500 to-teal-500/50 lg:hidden" />
              </div>

              <div className="space-y-4 lg:text-right">
                <div className="flex items-center gap-3 text-teal-500 lg:justify-end">
                  <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold">The Strategic Solution</span>
                  <Workflow className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <p className="text-xl md:text-2xl font-medium tracking-tight leading-tight">
                  {project.humanNeed}
                </p>
              </div>
            </div>
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '32px 32px' }} />
          </div>
        </motion.div>

        {/* 3E's Deep Dive Analysis */}
        <section className="mb-16 md:mb-32">
          <motion.h2 
            variants={itemVariants}
            className="text-[9px] md:text-[10px] uppercase tracking-[0.5em] text-muted-foreground mb-12 md:mb-16 text-center"
          >
            Socio-Technical Analysis | 3E&apos;s Methodology
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Empathy */}
            <motion.div 
              variants={itemVariants}
              className="p-8 md:p-10 rounded-[1.5rem] md:rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-teal-500/20 transition-all group"
            >
              <Heart className="w-6 h-6 md:w-8 md:h-8 text-teal-500 mb-6 md:mb-8 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold uppercase tracking-widest mb-4 md:mb-6">Empathy</h3>
              <p className="text-[9px] md:text-[10px] text-teal-500/50 uppercase tracking-widest mb-3 md:mb-4 font-bold">Human context</p>
              <p className="text-base md:text-lg text-foreground/80 leading-relaxed font-light">{project.humanNeed}</p>
            </motion.div>
            
            {/* Efficiency */}
            <motion.div 
              variants={itemVariants}
              className="p-8 md:p-10 rounded-[1.5rem] md:rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-teal-500/20 transition-all group"
            >
              <Zap className="w-6 h-6 md:w-8 md:h-8 text-teal-500 mb-6 md:mb-8 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold uppercase tracking-widest mb-4 md:mb-6">Efficiency</h3>
              <p className="text-[9px] md:text-[10px] text-teal-500/50 uppercase tracking-widest mb-3 md:mb-4 font-bold">Technical Bridge</p>
              <p className="text-base md:text-lg text-foreground/80 leading-relaxed font-light">{project.technicalBridge}</p>
            </motion.div>
            
            {/* Engagement */}
            <motion.div 
              variants={itemVariants}
              className="p-8 md:p-10 rounded-[1.5rem] md:rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-teal-500/20 transition-all group"
            >
              <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-teal-500 mb-6 md:mb-8 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold uppercase tracking-widest mb-4 md:mb-6">Engagement</h3>
              <p className="text-[9px] md:text-[10px] text-teal-500/50 uppercase tracking-widest mb-3 md:mb-4 font-bold">Impact Metric</p>
              <p className="text-base md:text-lg text-foreground/80 leading-relaxed font-light">{project.engagementMetric}</p>
            </motion.div>
          </div>
        </section>

        {/* Deliverables & Outcomes */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 md:gap-24 items-start">
          <div className="lg:col-span-2 space-y-16 md:space-y-24">
            <motion.section variants={itemVariants}>
              <div className="flex items-center gap-4 mb-8 md:mb-10">
                <Layers className="w-4 h-4 md:w-5 md:h-5 text-teal-500" />
                <h2 className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] font-bold">Executive Summary</h2>
              </div>
              <p className="text-xl md:text-3xl leading-tight text-foreground/90 font-light tracking-tight">
                {project.longDescription}
              </p>
            </motion.section>

            <motion.section variants={itemVariants} className="p-8 md:p-12 rounded-[1.5rem] md:rounded-[2.5rem] bg-teal-500/[0.03] border border-teal-500/10">
              <div className="flex items-center gap-4 mb-10 md:mb-12">
                <TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-teal-500" />
                <h2 className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] font-bold">Strategic Outcomes</h2>
              </div>
              <ul className="space-y-6 md:space-y-8">
                {project.outcomes.map((outcome, idx) => (
                  <li key={idx} className="flex gap-4 md:gap-6 items-start group">
                    <span className="text-teal-500 font-mono text-xs pt-1 opacity-50 group-hover:opacity-100 transition-opacity">0{idx + 1}</span>
                    <span className="text-lg md:text-xl text-muted-foreground leading-snug font-light group-hover:text-foreground transition-colors">
                      {outcome}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.section>
          </div>

          {/* Right Column: Technical Specs */}
          <motion.aside variants={itemVariants} className="lg:sticky lg:top-32">
            <div className="p-8 md:p-10 rounded-[1.5rem] md:rounded-[2.5rem] bg-[#141414] border border-white/5 space-y-10 md:space-y-12">
              <div>
                <div className="flex items-center gap-3 mb-6 md:mb-8">
                  <Cpu className="w-4 h-4 text-teal-500" />
                  <h2 className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold">Technical Stack</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 md:px-4 py-1.5 md:py-2 rounded-lg md:rounded-xl bg-white/5 border border-white/10 text-[10px] md:text-[11px] font-mono text-teal-400 uppercase tracking-wider"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-8 md:pt-10 border-t border-white/5">
                <h3 className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold mb-4 md:mb-6 text-muted-foreground">Expertise Tags</h3>
                <div className="flex flex-wrap gap-x-4 gap-y-3">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[10px] md:text-[11px] text-foreground/40 font-medium hover:text-teal-500 transition-colors cursor-default">
                      #{tag.toLowerCase().replace(/\s+/g, '')}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      </motion.div>

      <AssistantWidget />

      {/* Footer */}
      <footer className="px-6 md:px-12 py-12 md:py-16 border-t border-white/5 text-[9px] md:text-[10px] uppercase tracking-[0.5em] text-muted-foreground/40 text-center font-bold">
        © 2026 KENN DAVIS. PRIVATE STRATEGIC ARCHIVE.
      </footer>
    </main>
  );
}
