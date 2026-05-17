"use client";

import { motion } from "framer-motion";
import { useMounted } from "@/hooks/useMounted";

export function AIGrid() {
  const mounted = useMounted();

  if (!mounted) {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(to right, var(--accent-green) 1px, transparent 1px), linear-gradient(to bottom, var(--accent-green) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      </div>
    );
  }
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Primary Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--accent-green) 1px, transparent 1px),
            linear-gradient(to bottom, var(--accent-green) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Secondary Grid (offset) */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--accent-violet) 1px, transparent 1px),
            linear-gradient(to bottom, var(--accent-violet) 1px, transparent 1px)
          `,
          backgroundSize: "120px 120px",
          transform: "translate(30px, 30px)",
        }}
      />

      {/* Animated Scan Line */}
      <motion.div
        className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"
        animate={{
          top: ["0%", "100%", "0%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Vertical scan line */}
      <motion.div
        className="absolute top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-emerald-500/10 to-transparent"
        animate={{
          left: ["0%", "100%", "0%"],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Grid Perspective Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.05]">
        <defs>
          <linearGradient id="gridFade" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--accent-green)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        {[...Array(8)].map((_, i) => (
          <line
            key={`h-${i}`}
            x1="0"
            y1={`${i * 12.5}%`}
            x2="100%"
            y2={`${i * 12.5}%`}
            stroke="url(#gridFade)"
            strokeWidth="0.5"
          />
        ))}
        {[...Array(8)].map((_, i) => (
          <line
            key={`v-${i}`}
            x1={`${i * 12.5}%`}
            y1="0"
            x2={`${i * 12.5}%`}
            y2="100%"
            stroke="url(#gridFade)"
            strokeWidth="0.5"
          />
        ))}
      </svg>
    </div>
  );
}