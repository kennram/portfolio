"use client";

import { useEffect } from "react";
import { Header } from "@/components/Header";
import { AssistantWidget } from "@/components/AssistantWidget";
import { DownloadButton } from "@/components/DownloadButton";
import { 
  ArrowLeft, 
  Clock, 
  Calendar, 
  Tag, 
  Activity,
  Cpu,
  ShieldAlert,
  Fingerprint
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import React from "react";
import { cn } from "@/lib/utils";

import { ResearchLog } from "@/data/logs";

export default function LogDetailPageClient({ log }: { log: ResearchLog }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [log.id]);

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
    <main className="relative z-10 min-h-screen text-foreground selection:bg-teal-500/30">
      <Header />
      
      {/* Hero Image Section */}
      {log.images && log.images.length > 0 && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="w-full h-[50vh] md:h-[65vh] relative overflow-hidden bg-black/20"
        >
          <Image
            src={log.images[0]}
            alt={log.title}
            fill
            priority
            className="object-cover opacity-80 grayscale-[0.25]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#141414]/0 via-[#141414]/40 to-[#141414]" />
        </motion.div>
      )}

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={cn(
          "max-w-4xl mx-auto px-6 md:px-12 pb-32",
          log.images && log.images.length > 0 ? "pt-12 md:pt-24" : "pt-48"
        )}
      >
        {/* Back Button */}
        <motion.div variants={itemVariants}>
          <Link 
            href="/logs" 
            className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-muted-foreground hover:text-teal-500 transition-colors mb-12 group"
          >
            <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
            Back to Archive
          </Link>
        </motion.div>

        {/* Log Header */}
        <div className="mb-24 space-y-8">
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 items-center text-[10px] font-bold uppercase tracking-widest text-teal-500">
            <span className="px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20">{log.category}</span>
            <span className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="w-3 h-3" /> {log.date}
            </span>
            <span className="flex items-center gap-2 text-muted-foreground">
              <Clock className="w-3 h-3" /> {log.readTime}
            </span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-[clamp(2rem,10vw,4rem)] md:text-[clamp(3rem,8vw,7rem)] font-bold tracking-tighter leading-[0.9]">
            {log.title}
          </motion.h1>

          <motion.p variants={itemVariants} className="text-2xl text-muted-foreground font-light leading-relaxed italic border-l-2 border-teal-500/30 pl-8">
            {log.summary}
          </motion.p>
          
          {/* Download Paper Button (Only for relevant logs) */}
          {log.id === "xr-business-society" && (
            <motion.div variants={itemVariants}>
              <DownloadButton href="/downloads/Research_Paper.pdf" />
            </motion.div>
          )}
        </div>

        {/* Content Body */}
        <motion.article variants={itemVariants} className="max-w-none">
          <div className="space-y-12 text-lg text-foreground/80 leading-relaxed font-light">
             {/* We simulate a basic markdown rendering for now */}
             {log.content.split('##').map((section: string, idx: number) => {
               if (!section.trim()) return null;
               const [title, ...contentLines] = section.split('\n');
               return (
                 <div key={idx} className="space-y-6">
                   <h2 className="text-3xl font-bold tracking-tight text-white mt-16 first:mt-0 flex items-center gap-4">
                     <div className="w-8 h-8 rounded-lg bg-teal-500/10 flex items-center justify-center border border-teal-500/20">
                        <Cpu className="w-4 h-4 text-teal-500" />
                     </div>
                     {title.trim()}
                   </h2>
                   <div 
                     className="whitespace-pre-line"
                     dangerouslySetInnerHTML={{ __html: contentLines.join('\n').trim() }} 
                   />
                 </div>
               );
             })}
          </div>
        </motion.article>

        {/* Strategic Metadata Footer */}
        <motion.section 
          variants={itemVariants}
          className="mt-32 p-12 rounded-[2.5rem] bg-[#141414] border border-white/5 relative overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-rose-500">
                <Activity className="w-4 h-4" />
                <span className="text-[10px] uppercase tracking-widest font-bold">System Load Analysis</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                This log represents a **{log.cognitiveLoad}** session. The intelligence gathered here informs current project architectures and socio-technical strategy.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-teal-500">
                <Tag className="w-4 h-4" />
                <span className="text-[10px] uppercase tracking-widest font-bold">Encapsulated Tags</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {log.tags.map((tag: string) => (
                  <span key={tag} className="px-3 py-1 rounded-lg bg-white/5 text-[11px] font-mono text-muted-foreground">
                    #{tag.toLowerCase()}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Decorative Security Icons */}
          <div className="absolute top-8 right-8 flex gap-4 opacity-[0.05]">
            <ShieldAlert className="w-12 h-12" />
            <Fingerprint className="w-12 h-12" />
          </div>
        </motion.section>

        {/* Pagination / CTA */}
        <motion.div variants={itemVariants} className="mt-24 flex justify-center">
           <Link 
            href="/logs"
            className="px-12 py-6 bg-white text-black rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-teal-500 hover:text-white transition-all shadow-2xl"
           >
            Return to Ledger
           </Link>
        </motion.div>
      </motion.div>

      <AssistantWidget />

      {/* Footer */}
      <footer className="px-8 md:px-12 py-16 border-t border-white/5 text-[10px] uppercase tracking-[0.5em] text-muted-foreground/40 text-center font-bold">
        © 2026 KENN DAVIS. PRIVATE STRATEGIC ARCHIVE.
      </footer>
    </main>
  );
}
