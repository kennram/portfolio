"use client";

import { Header } from "@/components/Header";
import { AssistantWidget } from "@/components/AssistantWidget";
import { LeadCaptureForm } from "@/components/LeadCaptureForm";
import { Target, Zap, Heart, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function AuditPage() {
  return (
    <main className="relative z-10 min-h-screen pb-32">
      <Header />
      
      <section className="pt-48 pb-32 px-6 md:px-12">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-6">
            <span className="text-[10px] font-mono text-teal-500 uppercase tracking-[0.6em]">Digital Transformation</span>
            <h1 className="text-[clamp(2.5rem,8vw,5rem)] font-bold tracking-tighter leading-[0.9]">
              The Digital Transformation Roadmap
            </h1>
            <p className="text-2xl text-muted-foreground font-light leading-relaxed italic border-l-2 border-teal-500/30 pl-8">
              Stop fighting your tools. Start scaling your vision.
            </p>
          </div>

          <div className="prose prose-invert prose-lg text-muted-foreground font-light leading-relaxed">
            <p>
              You didn&apos;t start your business to manage software—you started it to deliver value. 
              But as you grow, technology often becomes the bottleneck instead of the catalyst. 
              I provide the strategic architecture to ensure your digital ecosystem works as hard as you do.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto space-y-24">
          <h2 className="text-4xl font-bold tracking-tighter uppercase text-center">The 4 Pillars of Transformation</h2>
          
          <div className="space-y-16">
            {[
              { title: "1. Conversion Architecture", subtitle: "Recover Hidden Revenue", icon: Target, text: "Your website shouldn&apos;t just be a &quot;digital business card.&quot; It should be your highest-performing salesperson. I audit your user journey to identify &quot;Conversion Leaks&quot; and redesign your platform to turn strangers into high-value clients, 24/7." },
              { title: "2. Operational Efficiency", subtitle: "Buy Back Your Time", icon: Zap, text: "Manual tasks are the &quot;silent killer&quot; of growth. If your team is stuck in spreadsheets and manual data entry, you aren&apos;t scaling—you&apos;re just busy. I architect automated workflows that handle the &quot;boring work,&quot; allowing you to focus on high-level strategy." },
              { title: "3. Strategic Intelligence", subtitle: "The ROI Roadmap", icon: Heart, text: "Most businesses &quot;guess&quot; at their next tech move. I provide a data-backed Diagnostic Report that identifies your Priority 1 Action: the single change that will yield the highest immediate ROI for your bottom line." },
              { title: "4. Market Differentiation", subtitle: "Future-Proof Your Brand", icon: Sparkles, text: "In a crowded market, &quot;good enough&quot; is a risk. I help you deploy cutting-edge digital experiences that set you apart from the competition, establishing your business as the undisputed authority in your sector." }
            ].map((pillar, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-[1fr,3fr] gap-8 items-start border-t border-white/5 pt-16"
              >
                <div className="space-y-4">
                  <pillar.icon className="w-8 h-8 text-teal-500" />
                  <h3 className="text-xl font-bold leading-tight">{pillar.title}</h3>
                  <p className="text-xs font-mono uppercase tracking-widest text-teal-500/50">{pillar.subtitle}</p>
                </div>
                <p className="text-muted-foreground leading-relaxed font-light">{pillar.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-4xl font-bold tracking-tighter uppercase text-center">What You Get</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "The Revenue Friction Audit", text: "A complete breakdown of where you are losing leads and how much it’s costing you." },
              { title: "The Priority 1 Action Plan", text: "A clear, jargon-free roadmap of exactly what to fix first for immediate impact." },
              { title: "Bespoke Implementation", text: "I don&apos;t just &quot;advise&quot;—I build the bridge. You get a fully managed transformation of your digital architecture." },
              { title: "Growth Portal Access", text: "A secure, personalized dashboard where you can track the performance and ROI of our transformation in real-time." }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-white/5 rounded-3xl border border-white/5 space-y-4">
                <h4 className="text-sm font-bold text-teal-500">{item.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 bg-[#002b2b]">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-5xl font-bold tracking-tighter uppercase">Initiate Your Diagnostic</h2>
          <p className="text-xl text-teal-100/60 font-light max-w-2xl mx-auto">
            To provide a high-fidelity diagnostic, I need to understand your current digital footprint. Your details are secure and only used for your audit.
          </p>
          <div className="flex justify-center">
            <LeadCaptureForm />
          </div>
        </div>
      </section>

      <AssistantWidget />
    </main>
  );
}
