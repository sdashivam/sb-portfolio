"use client";

import { motion } from "framer-motion";
import { AnimatedBackground } from "../background/AnimatedBackground";

const METRICS = [
  { value: "7+", label: "Years Experience" },
  { value: "$10M+", label: "Operational Savings" },
  { value: "60%", label: "Fraud Recall Improvement" },
  { value: "92%", label: "AI Task Accuracy" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-6">
                Applied AI Engineer
              </span>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-green-300">Shivam Bhatt</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-white/70 max-w-lg"
            >
              Building production-grade AI systems that solve complex enterprise challenges. Multi-agent workflows, RAG pipelines, and ML infrastructure at scale.
            </motion.p>

            {/* Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 gap-6"
            >
              {METRICS.map((metric, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
                >
                  <div className="text-2xl font-bold text-emerald-400">
                    {metric.value}
                  </div>
                  <div className="text-sm text-white/50">{metric.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-8 bg-gradient-to-r from-emerald-500/30 via-violet-500/30 to-emerald-500/30 rounded-full blur-3xl" />

              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-emerald-500 to-violet-500 p-1">
                <div className="w-full h-full rounded-full bg-black/80 backdrop-blur-xl overflow-hidden">
                  {/* Replace with your image */}
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-6xl md:text-8xl font-bold text-white">SB</span>
                  </div>
                  {/* Use this for your photo:
                  <img
                    src="/path-to-your-image.jpg"
                    alt="Shivam Bhatt"
                    className="w-full h-full object-cover"
                  />
                  */}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}