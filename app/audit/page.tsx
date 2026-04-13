"use client";

import { Header } from "@/components/Header";
import { AssistantWidget } from "@/components/AssistantWidget";
import { LeadCaptureForm } from "@/components/LeadCaptureForm";
import { Target, Zap, Heart, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function AuditPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="relative z-10 min-h-screen pb-32">
      <Header />
      
      <section className="pt-48 pb-32 px-6 md:px-12">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-6">
            <span className="text-[10px] font-mono text-teal-500 uppercase tracking-[0.6em]">Diagnostic Service</span>
            <h1 className="text-[clamp(2.5rem,8vw,5rem)] font-bold tracking-tighter leading-[0.9]">
              The Strategic Audit
            </h1>
            <p className="text-2xl text-muted-foreground font-light leading-relaxed italic border-l-2 border-teal-500/30 pl-8">
              Stop fighting your tools. Start scaling your vision.
            </p>
          </div>

          <div className="prose prose-invert prose-lg text-muted-foreground font-light leading-relaxed">
            <p>
              You didn&apos;t start your business to manage software—you started it to deliver value. 
              But as you grow, technology often becomes the bottleneck instead of the catalyst. 
              The Strategic Audit is the first step in diagnosing those bottlenecks and identifying the clear path forward.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto space-y-24">
          <h2 className="text-4xl font-bold tracking-tighter uppercase text-center">What You Get in Your Audit</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "The Revenue Friction Diagnostic", text: "I map your current digital ecosystem and identify exactly where you are losing leads and potential revenue." },
              { title: "The Strategic Gap Analysis", text: "A clear comparison between your current performance and your potential market position, identifying the 'gaps' you are currently missing." },
              { title: "The Priority 1 Opportunity", text: "I highlight the #1 immediate change that will stabilize your revenue engine, so you have a clear win to start with." },
              { title: "The Transformation Roadmap (Preview)", text: "A conceptual overview of how we can bridge your revenue gaps, which we will refine together in your strategy session." }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-white/5 rounded-3xl border border-white/5 space-y-4">
                <h4 className="text-sm font-bold text-teal-500">{item.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-4xl font-bold tracking-tighter uppercase text-center">Why I Audit</h2>
          <div className="space-y-6 text-center text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
            <p>
              I don&apos;t build and disappear. My goal is to partner with business owners who are ready to scale.
            </p>
            <p>
              The Strategic Audit is designed to uncover the path, but the real growth comes from our partnership in implementation—where we take the roadmap and actually build the bridge to your next stage of growth.
            </p>
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
