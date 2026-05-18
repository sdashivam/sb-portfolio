"use client";

import { motion } from "framer-motion";
import { useMounted } from "@/hooks/useMounted";

// Define Manhattan-style paths (right angles) to simulate IC circuit traces
const CIRCUIT_PATHS = [
  { id: "trace1", d: "M 0 15 H 20 V 45 H 100", color: "var(--color-accent-cyan)", duration: 8, delay: 0 },
  { id: "trace2", d: "M 100 85 H 80 V 55 H 0", color: "var(--color-accent-blue)", duration: 10, delay: 2 },
  { id: "trace3", d: "M 30 0 V 20 H 50 V 100", color: "var(--color-accent-cyan)", duration: 12, delay: 4 },
  { id: "trace4", d: "M 70 100 V 80 H 50 V 0", color: "var(--color-accent-blue)", duration: 9, delay: 1 },
  { id: "trace5", d: "M 15 15 H 35 V 35 H 15 Z", color: "var(--color-accent-cyan)", duration: 15, delay: 3 }, // IC Chip silhouette
];

export function SignalFlowOverlay() {
  const mounted = useMounted();

  if (!mounted) {
    return null;
  }

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-[5]">
      <svg 
        className="absolute inset-0 w-full h-full opacity-30" 
        viewBox="0 0 100 100" 
        preserveAspectRatio="none"
      >
        {CIRCUIT_PATHS.map((path) => (
          <g key={path.id}>
            {/* Static background trace */}
            <path
              d={path.d}
              stroke={path.color}
              strokeWidth="0.3"
              fill="none"
              className="opacity-10"
            />
            {/* Animated signal pulse */}
            <motion.path
              d={path.d}
              stroke={path.color}
              strokeWidth="1.2"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: [0, 1],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: path.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: path.delay,
              }}
            />
          </g>
        ))}
      </svg>
    </div>
  );
}