"use client";

import { Download } from "lucide-react";

interface DownloadButtonProps {
  href: string;
  label?: string;
}

export const DownloadButton = ({ href, label = "Download Full Paper" }: DownloadButtonProps) => {
  return (
    <a
      href={href}
      download
      className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-teal-500/50 hover:bg-teal-500/10 transition-all text-xs font-bold uppercase tracking-widest text-foreground group"
    >
      <Download className="w-4 h-4 text-teal-500" />
      {label}
    </a>
  );
};
