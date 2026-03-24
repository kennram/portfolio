"use client";

import { Header } from "@/components/Header";
import { AssistantWidget } from "@/components/AssistantWidget";
import { LeadCaptureForm } from "@/components/LeadCaptureForm";
import { motion } from "framer-motion";

export default function AuditPage() {
  return (
    <main className="relative z-10 min-h-screen bg-black flex flex-col items-center justify-center px-6">
      <Header />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md pt-32"
      >
        <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tighter uppercase mb-4">Strategic Audit</h1>
            <p className="text-muted-foreground text-sm">
                Unlock socio-technical insights for your digital infrastructure.
            </p>
        </div>
        
        <LeadCaptureForm />
      </motion.div>

      <AssistantWidget />
    </main>
  );
}
