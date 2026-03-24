"use client";

import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { motion } from "framer-motion";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export const LeadCaptureForm = () => {
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const isBusinessEmail = (email: string) => {
    const commonProviders = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "icloud.com"];
    const domain = email.split("@")[1];
    return !commonProviders.includes(domain);
  };

  const validateUrl = (string: string) => {
    try {
      const url = new URL(string);
      return url.protocol === "http:" || url.protocol === "https:";
    } catch (_) {
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isBusinessEmail(email)) {
      setStatus("error");
      setMessage("Please use a professional business email address to initiate an audit.");
      return;
    }

    let formattedUrl = url.trim();
    if (!/^https?:\/\//i.test(formattedUrl)) {
      formattedUrl = `https://${formattedUrl}`;
    }

    if (!validateUrl(formattedUrl)) {
      setStatus("error");
      setMessage("Please enter a valid company URL (e.g., https://example.com)");
      return;
    }

    setStatus("loading");

    try {
      const { error } = await supabase
        .from("leads")
        .insert([{ 
          contact_email: email, 
          company_url: formattedUrl, 
          status: "new" 
        }]);

      if (error) throw error;

      setStatus("success");
      setMessage("Audit request received. I will review your digital presence and be in touch.");
      setEmail("");
      setUrl("");
    } catch (err: any) {
      console.error("Supabase Error:", JSON.stringify(err, null, 2));
      setStatus("error");
      setMessage(`Transmission failed: ${err.message || "Please try again."}`);
    }
  };

  return (
    <div className="w-full max-w-md p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">
      <h3 className="text-xl font-bold mb-2">Request Strategic Audit</h3>
      <p className="text-sm text-muted-foreground mb-6">
        Let me analyze your digital presence. Enter your business details to initiate a bespoke socio-technical audit.
      </p>

      {status === "success" ? (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col gap-6 text-teal-500 py-8">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-6 h-6 shrink-0" />
            <p className="text-sm font-bold">{message}</p>
          </div>
          <a
            href="https://calendly.com/kenndavisux/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-white text-black hover:bg-white/90 rounded-xl py-3 text-sm font-bold uppercase tracking-widest transition-all"
          >
            <Send className="w-4 h-4" />
            Book Discovery Call
          </a>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Business Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-teal-500 transition-colors"
          />
          <input
            type="text"
            placeholder="Company URL (e.g., example.com)"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
            className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-teal-500 transition-colors"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-500 disabled:bg-teal-800 text-white rounded-xl py-3 text-sm font-bold uppercase tracking-widest transition-all"
          >
            {status === "loading" ? "Transmitting..." : (
              <>
                <Send className="w-4 h-4" />
                Initialize Audit
              </>
            )}
          </button>
        </form>
      )}

      {status === "error" && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 flex items-center gap-2 text-rose-500 text-xs">
          <AlertCircle className="w-4 h-4" />
          {message}
        </motion.div>
      )}
    </div>
  );
};
