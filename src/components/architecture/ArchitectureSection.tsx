"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Database, GitBranch, Zap, Shield, Layers } from "lucide-react";

const ARCHITECTURE_SYSTEMS = [
  {
    icon: BrainCircuit,
    title: "Multi-Agent Orchestration",
    description: "LangGraph-based agent workflows with parallel execution and state management",
    metrics: ["5+ agent types", "99.5% uptime"],
  },
  {
    icon: Database,
    title: "RAG Pipeline",
    description: "Hybrid retrieval with reranking, grounding, and hallucination mitigation",
    metrics: ["92% accuracy", "<200ms latency"],
  },
  {
    icon: Shield,
    title: "Fraud Detection",
    description: "Real-time ML inference with explainable AI and governance controls",
    metrics: ["60% recall improvement", "40% false positive reduction"],
  },
  {
    icon: GitBranch,
    title: "Evaluation Framework",
    description: "Automated LLM-as-judge evaluation with custom metrics and benchmarking",
    metrics: ["100+ test cases", "continuous monitoring"],
  },
  {
    icon: Zap,
    title: "ML Infrastructure",
    description: "Scalable training pipelines with MLOps best practices and observability",
    metrics: ["Auto-scaling", "Cloud-agnostic"],
  },
  {
    icon: Layers,
    title: "Data Governance",
    description: "Enterprise-grade data lineage, access controls, and audit trails",
    metrics: ["SOC2 compliant", "Full traceability"],
  },
];

export function ArchitectureSection() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-950/10 to-transparent" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-400 text-sm font-medium mb-6">
            System Architecture
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Enterprise AI Infrastructure
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Production-grade architectures powering large-scale AI systems with reliability,
            observability, and governance at every layer.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ARCHITECTURE_SYSTEMS.map((system, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/30 transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-violet-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <system.icon className="w-6 h-6 text-emerald-400" />
                </div>

                <h3 className="text-xl font-semibold text-white mb-2">{system.title}</h3>
                <p className="text-white/60 text-sm mb-4">{system.description}</p>

                <div className="flex flex-wrap gap-2">
                  {system.metrics.map((metric, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs rounded-md bg-white/5 text-emerald-400 border border-white/10"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}