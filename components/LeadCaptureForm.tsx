"use client";

import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { motion } from "framer-motion";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { extractCompanyNameFromUrl } from "@/lib/utils";

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
    // Prepend https if no protocol
    if (!/^https?:\/\//i.test(formattedUrl)) {
      formattedUrl = `https://${formattedUrl}`;
    }

    // Now, perform robust URL normalization
    try {
      const urlObject = new URL(formattedUrl);
      urlObject.hostname = urlObject.hostname.toLowerCase(); // Lowercase domain
      // Remove 'www.' if present
      if (urlObject.hostname.startsWith('www.')) {
        urlObject.hostname = urlObject.hostname.substring(4);
      }
      // Remove trailing slash from pathname, if any, and ensure it's just '/' for root
      // If the URL has a path (e.g., example.com/path), we keep the path but normalize it.
      // If it's just a root domain, ensure pathname is '/'
      if (urlObject.pathname && urlObject.pathname !== '/') {
        urlObject.pathname = urlObject.pathname.replace(/\/+$/, '');
      } else {
        urlObject.pathname = '/';
      }
      urlObject.search = ''; // Remove query parameters
      urlObject.hash = ''; // Remove hash

      formattedUrl = urlObject.toString();
    } catch (e) {
      console.warn("Failed to normalize URL after prepending HTTPS, possibly invalid URL structure:", e);
      // Fallback: If normalization fails, proceed with the basic formattedUrl
      // but the validateUrl check below should catch truly invalid formats.
    }

    console.log("Original URL input:", url); // Log 1

    if (!validateUrl(formattedUrl)) {
      setStatus("error");
      setMessage("Please enter a valid company URL (e.g., https://example.com)");
      return;
    }

    setStatus("loading");

    try {
      const companyName = extractCompanyNameFromUrl(formattedUrl);
      console.log("Normalized URL for Supabase:", formattedUrl); // Log 2
      console.log("Derived Company Name for Supabase:", companyName); // Log 3

      const { error } = await supabase
        .from("leads")
        .insert([{ 
          contact_email: email, 
          company_url: formattedUrl, 
          company_name: companyName, // Add the derived company name
          status: "new",
          source: "website" 
        }]);

      if (error) throw error;

      setStatus("success");
      setMessage("Audit request received. I will review your digital presence and be in touch.");
      setEmail("");
      setUrl("");
    } catch (err: any) {
      console.error("Supabase Error:", JSON.stringify(err, null, 2));
      setStatus("error");

      let userMessage = `Transmission failed: ${err.message || "Please try again."}`;

      let supabaseError = err;
      // If the error message itself is a stringified JSON, parse it to access code/message properties correctly
      if (typeof err.message === 'string' && err.message.startsWith('{')) {
        try {
          supabaseError = JSON.parse(err.message);
        } catch (parseError) {
          // If parsing fails, stick with the original error object
        }
      }

      if (supabaseError && supabaseError.code === "23505" && supabaseError.message.includes("leads_company_url_key")) {
        userMessage = "A lead for this company URL already exists. Please use a unique URL or contact support if you believe this is an error.";
      }
      
      setMessage(userMessage);
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
