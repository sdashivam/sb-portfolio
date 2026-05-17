"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMounted } from "@/hooks/useMounted";

const TERMINAL_MESSAGES = [
  "retrieval pipeline initialized",
  "planner agent activated",
  "evaluating grounding quality",
  "monitoring drift metrics",
  "retrieving context vectors",
  "query embedding generated",
  "hybrid search executing",
  "reranking candidates",
  "context window populated",
  "response synthesis active",
  "hallucination check passed",
  "grounding verified",
  "latency: 142ms",
  "confidence: 0.94",
];

interface TerminalLine {
  id: string;
  message: string;
  timestamp: number;
}

export function TerminalOverlay() {
  const mounted = useMounted();
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const lineIdRef = useRef(0);

  useEffect(() => {
    if (!mounted) return;
    const addLine = () => {
      const randomMessage =
        TERMINAL_MESSAGES[Math.floor(Math.random() * TERMINAL_MESSAGES.length)];
      const newLine: TerminalLine = {
        id: `line-${lineIdRef.current++}-${Date.now()}`,
        message: randomMessage,
        timestamp: Date.now(),
      };

      setLines((prev) => {
        const updated = [...prev, newLine];
        return updated.slice(-8);
      });
    };

    // Add initial lines
    for (let i = 0; i < 4; i++) {
      setTimeout(() => addLine(), i * 200);
    }

    // Add new line every 2-4 seconds
    const interval = setInterval(addLine, 2000 + Math.random() * 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute bottom-8 left-8 right-8 max-w-md pointer-events-none md:left-16 md:right-auto">
      <div className="rounded-lg border border-white/5 bg-black/40 backdrop-blur-sm p-4 font-mono text-xs">
        <div className="flex items-center gap-2 mb-3 border-b border-white/10 pb-2">
          <div className="flex gap-1.5">
            <div className="w-2 h-2 rounded-full bg-red-500/60" />
            <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
            <div className="w-2 h-2 rounded-full bg-green-500/60" />
          </div>
          <span className="text-white/40 ml-2">inference.log</span>
        </div>

        <div className="space-y-1">
          <AnimatePresence mode="popLayout">
            {lines.map((line) => (
              <motion.div
                key={line.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-3"
              >
                <span className="text-white/20">
                  {new Date(line.timestamp).toLocaleTimeString("en-US", {
                    hour12: false,
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                  })}
                </span>
                <span className="text-emerald-400/70">
                  {">"}
                </span>
                <span className="text-white/60">{line.message}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Cursor */}
        <motion.div
          className="inline-block w-2 h-4 bg-emerald-400/80 mt-2"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      </div>
    </div>
  );
}