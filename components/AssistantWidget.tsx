"use client";

import { useRef, useEffect, useState, useMemo } from "react";
import { useChat } from "ai/react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Sparkles, Plus } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { cn } from "@/lib/utils";
import { projects } from "@/data/projects";

interface AssistantWidgetProps {
  projectId?: string;
}

export const AssistantWidget = ({ projectId }: AssistantWidgetProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNudge, setShowNudge] = useState(false);
  const { messages, input, handleInputChange, handleSubmit, isLoading, append, setInput } = useChat();
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // Rotating hints logic
  const [currentHintIndex, setCurrentHintIndex] = useState(0);
  const allHints = useMemo(() => projects.map(p => ({ id: p.id, hint: p.hint })), []);
  
  const currentHint = useMemo(() => {
    if (projectId) {
      const project = projects.find(p => p.id === projectId);
      return project ? project.hint : allHints[0].hint;
    }
    return allHints[currentHintIndex].hint;
  }, [projectId, currentHintIndex, allHints]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    // Show a subtle nudge after 6 seconds if the user hasn't opened the chat
    const timer = setTimeout(() => {
      if (!isOpen && messages.length === 0) {
        setShowNudge(true);
      }
    }, 6000);
    return () => clearTimeout(timer);
  }, [isOpen, messages.length]);

  // Rotate hints every 15 seconds if on main page
  useEffect(() => {
    if (projectId) return;
    
    const interval = setInterval(() => {
      setCurrentHintIndex((prev) => (prev + 1) % allHints.length);
    }, 15000);
    
    return () => clearInterval(interval);
  }, [projectId, allHints.length]);

  const quickTaps = useMemo(() => {
    const baseTaps = [
      "How do you approach complex problems?",
      "Explain the 3E's Design Framework.",
      "What is 'Neuro-architecture'?"
    ];

    if (projectId) {
      const project = projects.find(p => p.id === projectId);
      if (project) {
        return [
          `Tell me about ${project.title}`,
          `What was the key challenge in ${project.title}?`,
          ...baseTaps
        ];
      }
    }

    return [
      "Show me your latest research logs.",
      "Tell me about the €2M IoT project.",
      ...baseTaps
    ];
  }, [projectId]);

  const handleQuickTap = (tap: string) => {
    setShowNudge(false);
    if (append) {
      append({ role: "user", content: tap });
    } else {
      setInput(tap);
    }
    setIsOpen(true);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setShowNudge(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-4">
      {/* Active Engagement Nudge */}
      <AnimatePresence mode="wait">
        {showNudge && !isOpen && (
          <motion.div
            key={currentHint}
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            onClick={() => handleQuickTap(currentHint)}
            className="bg-white text-black px-6 py-4 rounded-2xl rounded-br-none shadow-2xl cursor-pointer border border-white/20 relative group max-w-[280px]"
          >
            <button 
              onClick={(e) => { e.stopPropagation(); setShowNudge(false); }}
              className="absolute -top-3 -left-3 w-7 h-7 bg-black text-white rounded-full flex items-center justify-center border border-white/20 shadow-xl transition-transform hover:scale-110 active:scale-95 z-10"
              aria-label="Close suggestion"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-teal-500 animate-pulse shrink-0" />
              <p className="text-xs font-bold uppercase tracking-widest leading-tight">
                {currentHint.split('?')[0]}?
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="w-[calc(100vw-32px)] md:w-[380px] h-[600px] max-h-[80vh] bg-[#141414] border border-white/10 rounded-3xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 border-bottom border-white/5 flex justify-between items-center bg-white/[0.02] z-10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">Kenn&apos;s Twin</h4>
                  <p className="text-[10px] text-teal-400 uppercase tracking-widest font-bold">Streaming Online</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div 
              ref={scrollRef} 
              data-lenis-prevent
              className={cn(
                "flex-1 min-h-0 overflow-y-auto p-6 space-y-4 scroll-smooth relative z-0",
                /* Scrollbar Styles */
                "[&::-webkit-scrollbar]:w-2",
                "[&::-webkit-scrollbar-track]:bg-transparent",
                "[&::-webkit-scrollbar-thumb]:bg-transparent",
                "hover:[&::-webkit-scrollbar-thumb]:bg-white/20",
                "[&::-webkit-scrollbar-thumb]:rounded-full",
                /* Firefox Support */
                "scrollbar-none hover:scrollbar-thin"
              )}
            >
              {messages.length === 0 && (
                <div className="flex justify-start">
                  <div className="bg-white/5 p-4 rounded-2xl rounded-tl-none border border-white/5 text-sm text-muted-foreground leading-relaxed prose prose-invert prose-sm max-w-full">
                    <ReactMarkdown
                      components={{
                        a: ({ node, ...props }) => (
                          <a 
                            {...props} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-teal-500 hover:text-teal-400 underline decoration-teal-500/30 underline-offset-4 font-bold transition-colors cursor-pointer pointer-events-auto"
                            onClick={(e) => e.stopPropagation()}
                          />
                        )
                      }}
                    >
                      {`Hi! I’m Kenn’s digital twin. I help teams architect socio-technical systems—from AI strategy and auditing to end-to-end product design. What challenge are you solving today?`}
                    </ReactMarkdown>
                  </div>
                </div>
              )}
              {messages.map((m) => (
                <div key={m.id} className={cn("flex", m.role === "user" ? "justify-end" : "justify-start")}>
                  <div
                    className={cn(
                      "max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed relative z-10",
                      m.role === "user" ? "bg-teal-600 text-white rounded-tr-none" : "bg-white/5 text-muted-foreground rounded-tl-none border border-white/5 prose prose-invert prose-sm"
                    )}
                  >
                    <ReactMarkdown
                      components={{
                        a: ({ node, ...props }) => (
                          <a 
                            {...props} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className={cn(
                              "underline underline-offset-4 font-bold transition-colors cursor-pointer pointer-events-auto",
                              m.role === "user" ? "text-white decoration-white/30" : "text-teal-500 decoration-teal-500/30 hover:text-teal-400"
                            )} 
                            onClick={(e) => e.stopPropagation()}
                          />
                        )
                      }}
                    >
                      {m.content}
                    </ReactMarkdown>
                  </div>
                </div>
              ))}
              {isLoading && messages[messages.length - 1]?.role === "user" && (
                 <div className="flex justify-start">
                  <div className="bg-white/5 p-4 rounded-2xl rounded-tl-none border border-white/5">
                    <div className="flex gap-1">
                      <span className="w-1.5 h-1.5 bg-teal-500 rounded-full animate-bounce" />
                      <span className="w-1.5 h-1.5 bg-teal-500 rounded-full animate-bounce [animation-delay:0.2s]" />
                      <span className="w-1.5 h-1.5 bg-teal-500 rounded-full animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Persistent Suggestions Row */}
            <div className="px-4 py-2 border-t border-white/5 bg-white/[0.01] z-10">
              <div 
                className="flex gap-2 overflow-x-auto pb-1"
                style={{
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none',
                }}
              >
                <style jsx>{`
                  div::-webkit-scrollbar {
                    display: none;
                  }
                `}</style>
                {quickTaps.map((tap) => (
                  <button
                    key={tap}
                    onClick={() => handleQuickTap(tap)}
                    className="whitespace-nowrap text-[10px] px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-teal-600/20 hover:border-teal-500/30 transition-all text-muted-foreground hover:text-foreground flex items-center gap-1.5 group"
                  >
                    {tap}
                    <Plus className="w-2.5 h-2.5 opacity-50 group-hover:opacity-100" />
                  </button>
                ))}
              </div>
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-white/5 bg-white/[0.01] z-10">
              <div className="relative">
                <input
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Ask about Kenn's work..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-teal-500/50 transition-colors pr-12"
                />
                <button 
                  type="submit" 
                  disabled={isLoading || !input || !input.trim()}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-teal-500 hover:text-teal-400 transition-colors disabled:text-muted-foreground disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleChat}
        className={cn(
          "w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300",
          isOpen ? "bg-white text-black" : "bg-teal-600 text-white"
        )}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </motion.button>
    </div>
  );
};
