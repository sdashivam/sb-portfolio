"use client";

import { motion } from "framer-motion";
import { FlaskConical, Cpu, Sparkles, Rocket } from "lucide-react";

type Status = "RESEARCH" | "PROTOTYPE" | "IN DEVELOPMENT" | "EXPERIMENTAL";

interface InnovationProject {
  name: string;
  description: string;
  status: Status;
  capabilities: string[];
  techStack: string[];
  architecture: string;
}

const PROJECTS: InnovationProject[] = [
  {
    name: "Autonomous Code Review Agent",
    description: "Self-correcting code analysis agent that learns from review patterns and suggests architectural improvements",
    status: "RESEARCH",
    capabilities: ["Pattern detection", "Code generation", "Security scanning"],
    techStack: ["LangGraph", "GPT-4", "Tree-sitter"],
    architecture: "Multi-agent with memory",
  },
  {
    name: "Real-time Knowledge Graph",
    description: "Dynamic knowledge base that auto-updates from enterprise documents and maintains semantic relationships",
    status: "PROTOTYPE",
    capabilities: ["Entity extraction", "Relationship mapping", "Query optimization"],
    techStack: ["Neo4j", "Vertex AI", "Pinecone"],
    architecture: "Event-driven sync",
  },
  {
    name: "ML Model Governance Platform",
    description: "Enterprise-grade model registry with drift detection, bias monitoring, and compliance reporting",
    status: "IN DEVELOPMENT",
    capabilities: ["Model versioning", "A/B testing", "Audit trails"],
    techStack: ["MLflow", "Great Expectations", "Kafka"],
    architecture: "Microservices",
  },
  {
    name: "Voice-to-Code Interface",
    description: "Natural language to production code generation with context awareness and multi-language support",
    status: "EXPERIMENTAL",
    capabilities: ["Voice recognition", "Code synthesis", "Test generation"],
    techStack: ["Whisper", "Codex", "Playwright"],
    architecture: "Streaming pipeline",
  },
];

const statusConfig: Record<Status, { color: string; bg: string; icon: typeof Rocket }> = {
  RESEARCH: { color: "text-blue-400", bg: "bg-blue-500/20", icon: FlaskConical },
  PROTOTYPE: { color: "text-amber-400", bg: "bg-amber-500/20", icon: Cpu },
  "IN DEVELOPMENT": { color: "text-emerald-400", bg: "bg-emerald-500/20", icon: Sparkles },
  EXPERIMENTAL: { color: "text-violet-400", bg: "bg-violet-500/20", icon: Rocket },
};

export function InnovationLab() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-400 text-sm font-medium mb-6">
            Innovation Lab
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Research & Experimentation
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Exploring cutting-edge AI systems and experimental enterprise solutions currently in development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((project, index) => {
            const config = statusConfig[project.status];
            const StatusIcon = config.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute -inset-px bg-gradient-to-r from-emerald-500/20 via-violet-500/20 to-emerald-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

                <div className="relative p-6 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-xl">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white">{project.name}</h3>
                    <span className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${config.bg} ${config.color}`}>
                      <StatusIcon className="w-3 h-3 animate-pulse" />
                      {project.status}
                    </span>
                  </div>

                  <p className="text-white/60 text-sm mb-4">{project.description}</p>

                  <div className="mb-4">
                    <p className="text-xs text-white/40 uppercase tracking-wider mb-2">Planned Capabilities</p>
                    <div className="flex flex-wrap gap-2">
                      {project.capabilities.map((cap, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 text-xs rounded-md bg-white/5 text-white/70 border border-white/5"
                        >
                          {cap}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                    <div>
                      <p className="text-xs text-white/40 uppercase tracking-wider mb-1">Tech Stack</p>
                      <p className="text-sm text-emerald-400">{project.techStack.join(", ")}</p>
                    </div>
                    <div>
                      <p className="text-xs text-white/40 uppercase tracking-wider mb-1">Architecture</p>
                      <p className="text-sm text-violet-400">{project.architecture}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}