"use client";

import { motion } from "framer-motion";
import { Brain, Cpu, Sparkles } from "lucide-react";

export function AIAvatar() {
  return (
    <div className="flex flex-col items-center">
      {/* Avatar Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        {/* Outer Glow Ring */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500/30 to-violet-500/30 blur-2xl animate-pulse" />

        {/* Main Avatar Circle */}
        <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-surface to-background border border-emerald-500/30 overflow-hidden">
          {/* Neural Pattern Background */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(16,185,129,0.5) 1px, transparent 0)`,
              backgroundSize: "20px 20px",
            }} />
          </div>

          {/* Core AI Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="relative"
            >
              <Brain className="w-16 h-16 md:w-20 md:h-20 text-emerald-400" />
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Cpu className="w-8 h-8 text-violet-400" />
              </motion.div>
            </motion.div>
          </div>

          {/* Status Indicator */}
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-2 right-2 w-3 h-3 rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/50"
          />
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [-5, 5, -5], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute -top-4 -right-4"
        >
          <Sparkles className="w-6 h-6 text-emerald-400" />
        </motion.div>

        <motion.div
          animate={{ y: [5, -5, 5], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute -bottom-2 -left-4"
        >
          <div className="w-4 h-4 rounded-full bg-violet-500/50 blur-sm" />
        </motion.div>
      </motion.div>

      {/* Quote */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mt-6 text-center text-white/70 text-lg font-medium"
      >
        Ready to process your ideas into reality.
      </motion.p>

      {/* Status Badge */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-4 flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10"
      >
        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span className="text-white/60 text-sm">AI Systems Online</span>
      </motion.div>
    </div>
  );
}