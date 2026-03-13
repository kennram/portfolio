"use client";

import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pillars = [
    { label: "Systems", href: "/#systems" },
    { label: "Environments", href: "/#environments" },
    { label: "Cognition", href: "/#cognition" },
    { label: "Intelligence", href: "/#intelligence" }
  ];

  interface NavLink {
    label: string;
    href: string;
    desc: string;
    external?: boolean;
  }

  const secondaryLinks: NavLink[] = [
    { label: "Research Logs", href: "/logs", desc: "Technical Intelligence & HCD Research" },
    { label: "Philosophy", href: "/#philosophy", desc: "The Socio-Technical Framework" },
    { label: "Strategic Expertise", href: "/#services", desc: "Consulting & Service Offerings" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const menuVariants: Variants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1]
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1]
      }
    }
  };

  const itemVariants: Variants = {
    closed: { opacity: 0, y: 20 },
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.4 + i * 0.1,
        duration: 0.8,
        ease: [0.33, 1, 0.68, 1]
      }
    })
  };

  return (
    <>
      <header className={cn(
        "fixed top-0 w-full z-[200] px-4 md:px-12 transition-all duration-500",
        isMenuOpen 
          ? "py-6 md:py-12 bg-transparent border-transparent" 
          : (isScrolled 
              ? "py-4 md:py-6 bg-black/40 backdrop-blur-xl border-b border-white/5 shadow-2xl" 
              : "py-8 md:py-12 bg-transparent border-transparent")
      )}>
        <div className="max-w-6xl mx-auto flex justify-between items-center w-full">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Link href="/" onClick={() => setIsMenuOpen(false)} className="group block">
              <h1 className="text-2xl font-bold tracking-tight text-foreground leading-none group-hover:text-teal-500 transition-colors">
                KENN DAVIS
              </h1>
              <p className={cn(
                "text-[10px] uppercase tracking-[0.3em] text-muted-foreground transition-all duration-500 mt-1",
                (isScrolled || isMenuOpen) ? "opacity-0 h-0 overflow-hidden" : "opacity-60 group-hover:opacity-100"
              )}>
                Socio-Technical Architect
              </p>
            </Link>
          </motion.div>

          <nav className="flex items-center gap-8 lg:gap-12">
            <ul className="hidden md:flex items-center space-x-8 lg:space-x-12">
              {!isMenuOpen && pillars.map((item, idx) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * idx }}
                >
                  <Link
                    href={item.href}
                    className="relative text-[10px] uppercase tracking-[0.2em] font-bold text-foreground/70 hover:text-teal-500 transition-all group block py-2"
                  >
                    {item.label}
                    <motion.span 
                      className="absolute bottom-0 left-0 w-full h-[1px] bg-teal-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                    />
                  </Link>
                </motion.li>
              ))}
            </ul>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={cn(
                "flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2.5 md:py-3 rounded-full transition-all group",
                isMenuOpen 
                  ? "bg-white text-black" 
                  : "bg-white/5 border border-white/10 hover:border-teal-500/50 hover:bg-teal-500/10"
              )}
            >
              <span className={cn(
                "text-[8px] md:text-[9px] uppercase tracking-widest font-bold",
                isMenuOpen ? "text-black" : "text-muted-foreground group-hover:text-teal-500"
              )}>
                {isMenuOpen ? "Close" : "Menu"}
              </span>
              {isMenuOpen ? <X className="w-3.5 h-3.5 md:w-4 md:h-4" /> : <Menu className="w-3.5 h-3.5 md:w-4 md:h-4" />}
            </motion.button>
          </nav>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-[190] bg-[#0a0a0a] flex flex-col pt-32 md:pt-48 pb-12 px-6 md:px-24 overflow-y-auto"
          >
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
            
            <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-24 relative z-10">
              <div className="space-y-16">
                <div>
                  <motion.p 
                    custom={0} variants={itemVariants}
                    className="text-[10px] uppercase tracking-[0.5em] text-teal-500 font-bold mb-8"
                  >
                    Archive Navigation
                  </motion.p>
                  <ul className="space-y-8">
                    {secondaryLinks.map((link, i) => (
                      <motion.li key={link.label} custom={i + 1} variants={itemVariants}>
                        <Link 
                          href={link.href}
                          onClick={() => !link.external && setIsMenuOpen(false)}
                          target={link.external ? "_blank" : undefined}
                          className="group block"
                        >
                          <div className="flex items-center gap-4 mb-2">
                            <h2 className="text-3xl md:text-7xl font-bold tracking-tighter group-hover:text-teal-500 transition-colors uppercase">
                              {link.label}
                            </h2>
                            {link.external && <ArrowUpRight className="w-6 h-6 text-teal-500 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0" />}
                          </div>
                          <p className="text-sm text-muted-foreground font-light italic tracking-tight opacity-60 group-hover:opacity-100 transition-opacity">
                            {link.desc}
                          </p>
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="md:hidden">
                   <p className="text-[10px] uppercase tracking-[0.5em] text-teal-500 font-bold mb-6">Pillars</p>
                   <div className="grid grid-cols-1 gap-4">
                     {pillars.map((pillar) => (
                       <Link 
                        key={pillar.label} 
                        href={pillar.href} 
                        onClick={() => setIsMenuOpen(false)}
                        className="text-2xl font-bold uppercase tracking-tighter hover:text-teal-500 transition-colors"
                       >
                         {pillar.label}
                       </Link>
                     ))}
                   </div>
                </div>
              </div>

              <div className="flex flex-col justify-end lg:items-end space-y-16 lg:pb-12">
                <div className="space-y-8 lg:text-right">
                   <motion.p custom={4} variants={itemVariants} className="text-[10px] uppercase tracking-[0.5em] text-muted-foreground font-bold">Contact Node</motion.p>
                   <motion.div custom={5} variants={itemVariants}>
                     <a href="mailto:kenndavisux@gmail.com" className="text-2xl md:text-4xl font-light tracking-tight hover:text-teal-500 transition-colors">
                       kenndavisux@gmail.com
                     </a>
                   </motion.div>
                </div>

                <div className="flex gap-12 lg:justify-end">
                   {[
                     { icon: Linkedin, href: "https://www.linkedin.com/in/daviskenn/", label: "LinkedIn" },
                     { icon: Github, href: "https://github.com/kennram", label: "GitHub" },
                     { icon: Mail, href: "mailto:kenndavisux@gmail.com", label: "Email" }
                   ].map((social, i) => (
                     <motion.a
                        key={social.label}
                        custom={6 + i}
                        variants={itemVariants}
                        href={social.href}
                        className="group flex flex-col items-center gap-3"
                     >
                       <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-teal-500/20 group-hover:border-teal-500/50 transition-all">
                         <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-teal-500" />
                       </div>
                       <span className="text-[9px] uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                         {social.label}
                       </span>
                     </motion.a>
                   ))}
                </div>

                <motion.div 
                  custom={9} 
                  variants={itemVariants}
                  className="pt-12 border-t border-white/5 w-full lg:w-auto lg:text-right"
                >
                  <div className="flex items-center lg:justify-end gap-3 text-teal-500/40">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
                    <span className="text-[9px] uppercase tracking-[0.4em] font-bold">System Status: Optimal</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
