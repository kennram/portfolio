"use client";

import { Header } from "@/components/Header";
import { BentoGrid } from "@/components/BentoGrid";
import { AssistantWidget } from "@/components/AssistantWidget";
import { Target, Zap, Heart, Sparkles } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function Home() {
  const pillars = ["Systems", "Environments", "Cognition", "Intelligence"] as const;
  
  // Mouse parallax for Hero Blueprint
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 30 });
  const rotateX = useTransform(springY, [-300, 300], [5, -5]);
  const rotateY = useTransform(springX, [-300, 300], [-5, 5]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      mouseX.set(clientX - centerX);
      mouseY.set(clientY - centerY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <main className="relative z-10 min-h-screen pb-32 overflow-x-hidden">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-center pt-48 pb-32 overflow-hidden px-6 md:px-12">
        {/* Hero Blueprint Schematic */}
        <motion.div 
          style={{ rotateX, rotateY, perspective: 1000 }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 opacity-20 flex"
        >
          <svg width="800" height="600" viewBox="0 0 800 600" fill="none" className="w-[90vw] md:w-[60vw] h-auto">
            <motion.path 
              d="M100 300 L700 300 M400 100 L400 500 M250 200 L550 400 M250 400 L550 200" 
              stroke="#14b8a6" 
              strokeWidth="0.5" 
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 3, ease: "easeInOut" }}
            />
            <circle cx="400" cy="300" r="150" stroke="#14b8a6" strokeWidth="0.5" strokeDasharray="4 4" />
            <circle cx="400" cy="300" r="250" stroke="#14b8a6" strokeWidth="0.2" />
            
            {/* Pulsing Nodes */}
            {[
              { x: 100, y: 300 }, { x: 700, y: 300 }, 
              { x: 400, y: 100 }, { x: 400, y: 500 },
              { x: 250, y: 200 }, { x: 550, y: 400 },
              { x: 250, y: 400 }, { x: 550, y: 200 }
            ].map((node, i) => (
              <motion.circle 
                key={i}
                cx={node.x} cy={node.y} r="3" 
                fill="#14b8a6"
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.5, 1] }}
                transition={{ delay: 1 + i * 0.1, duration: 1 }}
              />
            ))}
            
            {/* Orbiting Bit */}
            <motion.circle 
              r="4" fill="#14b8a6"
              initial={{ cx: 400 + 150, cy: 300 }}
              animate={{ 
                cx: [400 + 150, 400, 400 - 150, 400, 400 + 150],
                cy: [300, 450, 300, 150, 300]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
          </svg>
        </motion.div>

        <div className="max-w-6xl mx-auto w-full relative z-10">
          {/* Main Headline */}
          <div className="space-y-8 mb-20">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[10px] uppercase tracking-[0.6em] text-teal-500 font-bold ml-1"
            >
              Socio-Technical Architect
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-[clamp(2.5rem,8vw,7rem)] font-bold tracking-tighter leading-[0.85] text-foreground"
            >
              User Experience <br />
              that connects <br />
              <span className="text-teal-600">AI, XR & Web.</span>
            </motion.h2>
          </div>

          {/* Intro Paragraph */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-10"
            >
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light max-w-xl">
                Bridging the gap between technical complexity and human need through 
                the <span className="text-white font-medium italic">3E&apos;s Design Framework</span>—transforming 
                high-fidelity concepts into standout digital experiences.
              </p>
              
              <div className="flex flex-wrap gap-8">
                <a href="#systems" className="group flex items-center gap-3 px-8 py-4 bg-teal-600 text-white rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all shadow-2xl shadow-teal-600/30">
                  Explore Work
                </a>
                <a href="#philosophy" className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white/10 transition-all text-center">
                  Read Philosophy
                </a>
              </div>
            </motion.div>

            {/* Pillar Indicators */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="hidden lg:flex flex-col gap-8 items-end text-right pt-4"
            >
              {pillars.map((pillar, i) => (
                <a href={`#${pillar.toLowerCase()}`} key={pillar} className="group cursor-pointer">
                  <span className="text-[10px] text-teal-500/30 group-hover:text-teal-500 font-mono transition-colors tracking-widest">0{i+1}</span>
                  <p className="text-3xl font-medium tracking-tighter text-white/10 group-hover:text-white transition-all group-hover:translate-x-[-10px]">
                    {pillar}
                  </p>
                </a>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Decorative background glow */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[600px] bg-teal-600/5 blur-[180px] rounded-full -z-10" 
        />
      </section>

      {/* 3E's Framework Section */}
      <section className="py-32 px-6 md:px-12 border-y border-white/5 bg-white/[0.01] relative overflow-hidden">
        {/* Background Decorative Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl aspect-square bg-teal-500/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-32 gap-8">
            <div>
              <span className="text-[10px] font-mono text-teal-500 uppercase tracking-[0.6em] mb-4 block">Methodology</span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase text-white">The 3E&apos;s Design Framework</h2>
            </div>
            <p className="text-muted-foreground max-w-sm text-sm leading-relaxed font-light">
              A holistic approach to digital product design that unites emerging technologies under a single, human-centric vision.
            </p>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8 lg:gap-16 relative z-10">
              {/* Empathy */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-8 group text-center md:text-left"
              >
                <div className="flex justify-center md:justify-start">
                  <div className="w-16 h-16 rounded-[2rem] bg-teal-500/10 border border-teal-500/20 flex items-center justify-center group-hover:bg-teal-500/20 group-hover:rotate-[15deg] transition-all duration-500 relative">
                    <Heart className="w-7 h-7 text-teal-500" />
                    <div className="absolute inset-0 rounded-[2rem] bg-teal-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold tracking-tight uppercase text-white">Empathy</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed font-light">
                    Designing for real people. Understanding emotions, needs, and context to build trust and ensure technology truly &quot;gets&quot; the user.
                  </p>
                </div>
              </motion.div>

              {/* Efficiency */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="space-y-8 group text-center md:text-left"
              >
                <div className="flex justify-center md:justify-start">
                  <div className="w-16 h-16 rounded-[2rem] bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/20 group-hover:rotate-[-15deg] transition-all duration-500 relative">
                    <Zap className="w-7 h-7 text-accent" />
                    <div className="absolute inset-0 rounded-[2rem] bg-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold tracking-tight uppercase text-white">Efficiency</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed font-light">
                    Streamlining the journey. Removing friction and optimizing every step to respect user time and turn complexity into clarity.
                  </p>
                </div>
              </motion.div>

              {/* Engagement */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-8 group text-center md:text-left"
              >
                <div className="flex justify-center md:justify-start">
                  <div className="w-16 h-16 rounded-[2rem] bg-purple-500/10 border border-purple-500/20 flex items-center justify-center group-hover:bg-purple-500/20 group-hover:rotate-[15deg] transition-all duration-500 relative">
                    <Sparkles className="w-7 h-7 text-purple-500" />
                    <div className="absolute inset-0 rounded-[2rem] bg-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold tracking-tight uppercase text-white">Engagement</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed font-light">
                    Capturing hearts and minds. Designing interactions that spark interest and sustain connection through delight and immersion.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaborators / Trusted By */}
      <section className="py-24 px-6 md:px-12 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '24px 24px' }} />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <p className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground mb-16 text-center opacity-50 font-bold">
            Strategic Partners
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-12 md:gap-x-20">
            {[
              "Bank of Ireland", 
              "Culture Night", 
              "Dublin Tech Summit", 
              "Getty Images", 
              "Failte Ireland", 
              "Windmill Lane Recording Studios",
              "Landmrk"
            ].map((partner) => (
              <motion.span 
                key={partner}
                whileHover={{ y: -2, opacity: 1 }}
                className="text-lg md:text-xl font-bold tracking-[0.2em] text-white/30 uppercase cursor-default transition-all duration-500 hover:text-teal-500"
              >
                {partner}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Pillar Sections */}
      <div className="space-y-48 px-6 md:px-12 relative">
        {pillars.map((pillar, idx) => (
          <section key={pillar} id={pillar.toLowerCase()} className="scroll-mt-40 relative">
            {/* Strategic Schematic Background Numeral */}
            <div className="absolute left-0 md:-left-12 top-0 text-[clamp(8rem,40vw,12rem)] md:text-[30rem] font-bold text-white/[0.02] select-none pointer-events-none leading-none tracking-tighter transition-all duration-1000 group-hover:text-teal-500/[0.03] overflow-hidden">
              {pillar.substring(0, 3).toUpperCase()}_0{idx + 1}
            </div>
            
            <div className="max-w-6xl mx-auto mb-16 flex items-baseline justify-between border-b border-white/5 pb-8 relative z-10">
              <div className="flex items-center gap-4 md:gap-6">
                <span className="text-[10px] font-mono text-teal-500/50 uppercase tracking-[0.4em]">Section</span>
                <h2 className="text-[clamp(2rem,10vw,3.75rem)] font-bold tracking-tighter uppercase">{pillar}</h2>
              </div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground hidden md:block">
                Pillar {idx + 1} of 4
              </p>
            </div>
            <div className="max-w-6xl mx-auto relative z-10">
              <BentoGrid category={pillar} />
            </div>
          </section>
        ))}
      </div>

      {/* Philosophy Section */}
      <section id="philosophy" className="mt-64 scroll-mt-40 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-24 text-center">
            <span className="text-[10px] font-mono text-teal-500 uppercase tracking-[0.6em] mb-4 block">The Framework</span>
            <h2 className="text-[clamp(2.5rem,12vw,4.5rem)] font-bold tracking-tighter uppercase">Professional <br /> Philosophy</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="space-y-12">
              <div className="space-y-6">
                <h3 className="text-xl md:text-2xl font-medium tracking-tight flex flex-col md:flex-row md:items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center shrink-0">
                    <Target className="w-6 h-6 text-teal-500" />
                  </div>
                  Systems Thinking
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I view every technical challenge as a node within a larger socio-technical system. My work focuses on the feedback loops between infrastructure, policy, and human behavior.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl md:text-2xl font-medium tracking-tight flex flex-col md:flex-row md:items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center shrink-0">
                    <Heart className="w-6 h-6 text-pink-500" />
                  </div>
                  Immersive Environments
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Space is a medium for narrative. I design environments that leverage XR and spatial computing to create deep emotional resonance and intuitive human interaction.
                </p>
              </div>
            </div>

            <div className="space-y-12">
              <div className="space-y-6">
                <h3 className="text-xl md:text-2xl font-medium tracking-tight flex flex-col md:flex-row md:items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center shrink-0">
                    <Zap className="w-6 h-6 text-yellow-500" />
                  </div>
                  Cognitive Architecture
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Designing for the mind requires biophilic sensory scaffolding. I prioritize mental wellbeing by reducing friction and perceived barriers in complex digital ecosystems.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl md:text-2xl font-medium tracking-tight flex flex-col md:flex-row md:items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                    <Sparkles className="w-6 h-6 text-purple-500" />
                  </div>
                  Adaptive Intelligence
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  AI should be a pedagogical partner. I build generative scaffolds that empower users through personalized discovery, transforming static data into active intelligence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Assistant Widget */}
      {/* Strategic Expertise Section */}
      <section id="services" className="py-48 px-6 md:px-12 scroll-mt-40">
        <div className="max-w-6xl mx-auto">
          <div className="mb-24">
            <span className="text-[10px] font-mono text-teal-500 uppercase tracking-[0.6em] mb-4 block text-center md:text-left">Services</span>
            <h2 className="text-[clamp(2.5rem,10vw,4.5rem)] font-bold tracking-tighter uppercase text-center md:text-left">Strategic Expertise</h2>
          </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* AI Automation UX (Teal Semantic - Strategy/Audit) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-10 rounded-[2.5rem] bg-teal-500/[0.03] border border-teal-500/20 hover:border-teal-500/50 transition-all group relative overflow-hidden"
            >
              <div className="relative z-10 space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <Zap className="w-7 h-7 text-teal-500" />
                </div>
                <h3 className="text-2xl font-bold tracking-tight uppercase">AI Automation UX</h3>
                <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                  <li className="flex items-center gap-2 italic font-light">• AI Readiness Audits</li>
                  <li className="flex items-center gap-2 italic font-light">• Workflow Orchestration</li>
                  <li className="flex items-center gap-2 italic font-light">• Ethical AI Governance</li>
                </ul>
              </div>
              <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-teal-500/5 blur-3xl group-hover:bg-teal-500/10 transition-colors" />
            </motion.div>

            {/* XR UX (Spatial) (Blue Semantic - Build/Engineering) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-10 rounded-[2.5rem] bg-blue-500/[0.03] border border-blue-500/20 hover:border-blue-500/50 transition-all group relative overflow-hidden"
            >
              <div className="relative z-10 space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <Target className="w-7 h-7 text-blue-500" />
                </div>
                <h3 className="text-2xl font-bold tracking-tight uppercase">Spatial Architecture & XR</h3>
                <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                  <li className="flex items-center gap-2 italic font-light">• 3D Environment Architecture</li>
                  <li className="flex items-center gap-2 italic font-light">• Spatial Interaction Engines</li>
                  <li className="flex items-center gap-2 italic font-light">• High-Fidelity Performance</li>
                </ul>
              </div>
              <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-blue-500/5 blur-3xl group-hover:bg-blue-500/10 transition-colors" />
            </motion.div>

            {/* Web & App UX (Purple Semantic - Design/Architecture) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-10 rounded-[2.5rem] bg-purple-500/[0.03] border border-purple-500/20 hover:border-purple-500/50 transition-all group relative overflow-hidden"
            >
              <div className="relative z-10 space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <Sparkles className="w-7 h-7 text-purple-500" />
                </div>
                <h3 className="text-2xl font-bold tracking-tight uppercase">Full-Stack Architecture</h3>
                <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                  <li className="flex items-center gap-2 italic font-light">• End-to-End Product Design</li>
                  <li className="flex items-center gap-2 italic font-light">• Scalable System Engineering</li>
                  <li className="flex items-center gap-2 italic font-light">• Enterprise-Grade Web Apps</li>
                </ul>
              </div>
              <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-purple-500/5 blur-3xl group-hover:bg-purple-500/10 transition-colors" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* High-Impact CTA Section */}
      <section className="py-32 px-6 md:px-12 bg-[#002b2b]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
          <div className="space-y-6 text-center md:text-left">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white leading-[0.9]">
              Have a complex <br /> problem?
            </h2>
            <p className="text-xl text-teal-100/60 font-light max-w-md">
              I specialize in building bridges where technical complexity meets human need. Let&apos;s build yours.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <motion.a 
              href="https://calendly.com/kenndavisux/30min"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-6 bg-teal-500 text-white rounded-full text-sm font-bold uppercase tracking-[0.2em] hover:bg-teal-400 transition-colors shadow-2xl block text-center"
            >
              Book Discovery Call
            </motion.a>
            <motion.a 
              href="mailto:kenndavisux@gmail.com" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-6 bg-white/10 border border-white/20 text-white rounded-full text-sm font-bold uppercase tracking-[0.2em] hover:bg-white/20 transition-colors shadow-2xl block text-center"
            >
              Send an Email
            </motion.a>
          </div>
        </div>
      </section>

      <AssistantWidget />

      {/* Footer */}
      <footer className="mt-48 py-24 border-t border-white/5 bg-black/40 backdrop-blur-xl px-6 md:px-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold tracking-tighter">KENN DAVIS</h3>
            <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">Socio-Technical Architect & HCD Specialist</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-16 lg:gap-24">
            <div className="space-y-6">
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white">Social</h4>
              <ul className="space-y-4 text-xs uppercase tracking-widest text-muted-foreground">
                <li><a href="https://www.linkedin.com/in/daviskenn/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-500 transition-colors">LinkedIn</a></li>
                <li><a href="https://github.com/kennram-code" target="_blank" rel="noopener noreferrer" className="hover:text-teal-500 transition-colors">GitHub</a></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white">Navigation</h4>
              <ul className="space-y-4 text-xs uppercase tracking-widest text-muted-foreground">
                {pillars.map(p => (
                  <li key={p}><a href={`#${p.toLowerCase()}`} className="hover:text-teal-500 transition-colors">{p}</a></li>
                ))}
                <li><a href="#philosophy" className="hover:text-teal-500 transition-colors">Philosophy</a></li>
              </ul>
            </div>
            <div className="space-y-6 hidden lg:block">
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white">Contact</h4>
              <p className="text-xs uppercase tracking-widest text-muted-foreground hover:text-teal-500 cursor-pointer transition-colors">
                kenndavisux@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-24 pt-8 border-t border-white/5 flex justify-between items-center text-[10px] uppercase tracking-[0.4em] text-white/20 font-medium">
          <span>© 2026 KENN DAVIS. ALL RIGHTS RESERVED.</span>
          <span className="hidden md:block">BUILT WITH NEXT.JS 16 + TAILWIND 4</span>
        </div>
      </footer>
    </main>
  );
}
