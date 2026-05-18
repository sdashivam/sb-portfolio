"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Cpu, ShieldCheck, Zap, Activity, FileText } from "lucide-react";

const architectureData: Record<string, any> = {
  "multi-agent": {
    title: "Multi-Agent Financial Intelligence System",
    description: "Enterprise-grade architecture for autonomous financial reasoning workflows, focusing on multi-agent orchestration, hybrid retrieval systems, and rigorous governance frameworks for grounded AI intelligence.",
    sections: [
      {
        title: "Logical Execution Path",
        icon: Activity,
        steps: [
          { step: "01", label: "Request Mediation", desc: "FastAPI Async Layer receives Analyst Query" },
          { step: "02", label: "Agent Orchestration", desc: "LangGraph Planner decomposes tasks & routes intent" },
          { step: "03", label: "Hybrid Retrieval", desc: "FAISS + BM25 + SQL Reranking Pipeline" },
          { step: "04", label: "Grounded Synthesis", desc: "LLM Layer generates evidence-backed response" },
          { step: "05", label: "Validation Layer", desc: "ISO 42001 alignment & Hallucination check" },
        ],
      },
    ],
    principles: [
      "Grounded Output Priority",
      "Separation of Concerns",
      "Traceability & Lineage",
      "Agentic Modularity",
      "Fail-Safe Behavior",
      "Retrieval-First Design",
      "Policy Enforcement",
    ],
    infrastructure: [
      { label: "Backend", value: "FastAPI / Python" },
      { label: "Orchestration", value: "LangGraph / LangChain" },
      { label: "Memory", value: "Redis-backed Persistence" },
      { label: "Evaluation", value: "RAGAS / LangSmith" },
      { label: "Infrastructure", value: "Docker / Kubernetes" },
      { label: "LLM Inference", value: "OpenAI / Async Pipeline" },
    ],
  },
  "financial-rag": {
    title: "Financial RAG & Knowledge Retrieval Platform",
    description: "Architecture for hybrid retrieval and evaluation systems.",
    sections: [],
    principles: [
      "Hybrid Retrieval Priority",
      "Evaluation-Driven Optimization",
      "Grounding Quality",
      "Low-Latency Inference",
    ],
    infrastructure: [
      { label: "Vector Store", value: "FAISS" },
      { label: "Ranking", value: "BM25 + Reranker" },
      { label: "Framework", value: "LangChain" },
      { label: "Evaluation", value: "RAGAS Metrics" },
    ],
  },
  "name-screening": {
    title: "Enterprise Post-Detection Name Screening Platform",
    description: "AI-powered financial crime screening architecture.",
    sections: [],
    principles: [
      "Regulatory Compliance",
      "Explainable AI",
      "Model Governance",
      "Human-in-the-Loop",
    ],
    infrastructure: [
      { label: "Models", value: "XGBoost / Tree-based" },
      { label: "Explainability", value: "SHAP" },
      { label: "Optimization", value: "Optuna" },
      { label: "Monitoring", value: "CSI/PSI Drift Analysis" },
    ],
  },
  "risk-identification": {
    title: "Surveillance Risk Identification System",
    description: "Behavioral risk detection and entity relationship analysis.",
    sections: [],
    principles: [
      "Real-time Scoring",
      "Graph Analytics",
      "Behavioral Modeling",
      "False Positive Reduction",
    ],
    infrastructure: [
      { label: "Analytics", value: "Graph-based Entity Modeling" },
      { label: "Data Sources", value: "Trade, Voice, E-comm" },
      { label: "ML Pipeline", value: "Scikit-Learn" },
      { label: "Optimization", value: "Metrics-Driven" },
    ],
  },
};

export default function ArchitecturePage() {
  const params = useParams();
  const slug = params.slug as string;
  const data = architectureData[slug];

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Architecture Not Found</h1>
          <Link href="/" className="text-accent-cyan hover:underline">
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 pb-12 px-6">
      <div className="max-w-5xl mx-auto">
        <Link 
          href="/#projects"
          className="inline-flex items-center gap-2 text-white/50 hover:text-accent-cyan transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>

        <div className="mb-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-lg bg-accent-cyan/10 text-accent-cyan">
              <Cpu className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                {data.title}
              </h1>
              <p className="text-sm font-mono text-accent-cyan uppercase tracking-widest mt-1">
                System Architecture
              </p>
            </div>
          </div>
          <p className="text-white/60 max-w-2xl">{data.description}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {data.sections.map((section: any, i: number) => (
              <div key={i}>
                <h3 className="text-sm font-mono text-white/40 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                  <section.icon className="w-4 h-4" />
                  {section.title}
                </h3>
                <div className="relative space-y-4">
                  {section.steps.map((item: any, j: number) => (
                    <div 
                      key={j} 
                      className="relative flex items-start gap-4 p-4 rounded-lg bg-white/5 border border-white/10 group hover:border-accent-cyan/30 transition-colors"
                    >
                      <span className="text-[10px] font-mono text-accent-cyan mt-1">{item.step}</span>
                      <div>
                        <h4 className="text-sm font-bold text-white">{item.label}</h4>
                        <p className="text-xs text-white/50 mt-1">{item.desc}</p>
                      </div>
                      {j < section.steps.length - 1 && (
                        <div className="absolute left-[1.15rem] -bottom-4 w-px h-4 bg-white/10" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="p-6 rounded-xl bg-accent-cyan/5 border border-accent-cyan/20">
              <h3 className="text-sm font-bold text-accent-cyan mb-4 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                Governance & Guardrails
              </h3>
              <p className="text-xs text-white/70 leading-relaxed italic mb-4">
                "Fail-safe behavior: All final responses shall be supported by retrieved evidence. Low-confidence outputs trigger human-in-the-loop review."
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-[10px] p-2 bg-black/20 rounded border border-white/5 text-white/50 uppercase text-center">Grounding Check</div>
                <div className="text-[10px] p-2 bg-black/20 rounded border border-white/5 text-white/50 uppercase text-center">Hallucination Risk</div>
                <div className="text-[10px] p-2 bg-black/20 rounded border border-white/5 text-white/50 uppercase text-center">Citation Grounding</div>
                <div className="text-[10px] p-2 bg-black/20 rounded border border-white/5 text-white/50 uppercase text-center">Audit Tracing</div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xs font-mono text-white/40 uppercase tracking-widest mb-4">Architecture Principles</h3>
              <ul className="space-y-3">
                {data.principles.map((p: string, i: number) => (
                  <li key={i} className="flex items-center gap-3 text-xs text-white/70">
                    <div className="w-1 h-1 rounded-full bg-accent-cyan" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-mono text-white/40 uppercase tracking-widest mb-4">Infrastructure</h3>
              <div className="space-y-3">
                {data.infrastructure.map((item: any, i: number) => (
                  <div key={i} className="flex justify-between text-[11px]">
                    <span className="text-white/40">{item.label}</span>
                    <span className="text-white/80">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}