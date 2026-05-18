"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowLeft, ArrowRight, X, Zap, ShieldCheck, Activity, Cpu, FileText } from "lucide-react";

const PROJECTS = [
{
  title:"Multi-Agent Financial Intelligence System",
  category:"Research & Engineering",
  purpose:"Explore autonomous financial reasoning workflows using multi-agent orchestration, grounded retrieval, and enterprise-grade evaluation systems.",
  link: "https://github.com",
  architectureLink: "/architecture/multi-agent",
  focus:"Multi-agent AI systems, reasoning orchestration, grounded generation, and production-scale AI infrastructure.",
  description:"Architected a multi-agent financial intelligence platform using LangGraph and LangChain with planner–executor orchestration, tool execution pipelines, and grounded report synthesis to automate complex financial research workflows. Designed hybrid inference pipelines integrating SQL agents, RAG systems, web retrieval, and document reasoning with Redis-backed conversational memory and context-aware routing. Implemented evaluation and governance frameworks including response validation, grounded citations, fallback handling, hallucination mitigation, and human-in-the-loop verification pipelines to improve reliability and trustworthiness of generated outputs. Operationalized the platform using FastAPI, asynchronous processing, intelligent caching, observability tooling, and containerized deployment for scalable real-time AI workloads.",
  impact:"Reduced analyst research effort by ~65% while improving task completion accuracy from ~70% to ~92%, achieving sub-3s response latency for complex financial intelligence workflows.",
  metrics:[
      "65% Reduction In Research Effort",
      "Accuracy Improved From 70% To 92%",
      "Sub-3s Response Latency",
      "Grounded Citation Framework",
      "Hybrid AI Inference Pipelines"
    ],
  tags:[
      "LangGraph",
      "Multi-Agent Systems",
      "AI Orchestration",
      "Redis",
      "FastAPI",
      "Evaluation Framework",
    ],

    color:"pink"
  },
  {
    title:"Financial RAG & Knowledge Retrieval Platform",
    category:"Research & Engineering",
    purpose:"Research scalable retrieval architectures and evaluation strategies for high-precision financial knowledge systems.",
    link: "https://github.com",
    architectureLink: "/architecture/financial-rag",
    focus:"Retrieval-Augmented Generation, hybrid search systems, grounding evaluation, and low-latency inference optimization.",
    description:"Engineered a financial RAG platform leveraging hybrid retrieval pipelines combining FAISS vector search, BM25 ranking, metadata filtering, reranking strategies, and SQL-based retrieval mechanisms to improve contextual relevance and grounding quality. Developed a comprehensive evaluation framework using Faithfulness, Context Precision/Recall, Semantic Similarity, regression testing, and hallucination risk analysis to continuously measure retrieval quality and response reliability. Implemented citation-aware generation, intelligent caching, fallback retrieval orchestration, and response reranking pipelines to improve answer quality and system robustness for analyst-facing financial intelligence workflows.",
    impact:"Improved retrieval Precision@5 from ~60% to ~85% while achieving sub-2s response latency for enterprise-scale financial knowledge retrieval and grounded AI generation.",
    metrics:[
      "Precision@5 Improved From 60% To 85%",
      "Sub-2s Response Latency",
      "Hybrid Retrieval Architecture",
      "Grounding Evaluation Framework",
      "Hallucination Risk Reduction"
    ],
    tags:[
      "RAG",
      "FAISS",
      "BM25",
      "Hybrid Retrieval",
      "Knowledge Systems",
      "Prompt Engineering"
    ],

    color:"emerald"
  },
  {
  title:"Enterprise Post-Detection Name Screening Intelligence Platform",
  useCase:"AI-powered financial crime screening, risk intelligence, and governance automation for enterprise compliance operations",
  objective:"Transform legacy post-detection screening workflows into an intelligent, explainable, and enterprise-governed AI platform capable of improving detection capability while operating within strict regulatory and risk appetite constraints.",
  link: "https://github.com",
  architectureLink: "/architecture/name-screening",
  description:"Led the end-to-end architecture and delivery of an enterprise-grade AI screening intelligence platform designed for high-risk financial compliance and post-detection investigation workflows. Engineered and deployed advanced tree-based machine learning models to enhance predictive risk identification across complex screening pipelines within Asset Management and Securities Services environments. Built a high-performance optimization framework leveraging Optuna and Median Pruner to accelerate hyperparameter exploration, significantly improving model efficiency and convergence speed. Architected a multi-layer explainability ecosystem integrating rule-based reasoning, SHAP interpretability, and decision-trace transparency to support regulator-ready AI governance and analyst trust. Designed enterprise operational control mechanisms including audit tracing, role-based access controls, fallback orchestration, human-in-the-loop review workflows, and decision governance pipelines for sensitive AI-driven risk decisions. Spearheaded development of a production-scale model monitoring framework incorporating CSI/PSI drift analysis, feature distribution monitoring, QA sampling, data quality validation, and AI ethics oversight to continuously evaluate model health from baseline deployment through ongoing production evolution.",
  impact:"Successfully improved model recall from 55% to 61% while maintaining an exceptionally strict enterprise risk appetite threshold of 0–1% for high-risk list categories. Enabled stronger detection coverage, enhanced governance transparency, improved regulatory defensibility, and increased operational confidence in enterprise AI-driven screening decisions.",
  metrics:[
  "Recall Improved From 55% To 61%",
  "0–1% Risk Threshold Maintained",
  "Enterprise-Grade AI Explainability",
  "Production-Scale Model Monitoring",
  "Human-In-The-Loop Governance",
  "Regulator-Ready Audit Tracing"
],
  tags:[
    "Python",
    "Scikit-Learn",
    "XGBoost",
    "Machine Learning",
    "Ethical AI",
    "Model Explainability",
    "Optuna",
    "SHAP",
    "AI Governance",
    "Model Monitoring",
    "Risk Intelligence",
    "Compliance Automation"
  ].slice(0, 6),
  category: "Name Screening - Financial Crime",
  purpose: "Automating high-risk financial screening governance.",
  focus: "Tree-based models, SHAP explainability, and regulatory governance.",
  color:"orange"
},
{
  title:"Surveillance Risk Identification System",
  category:"Market Surveillance & Risk Intelligence",
  useCase:"AI-powered behavioral risk detection and entity relationship analysis",
  objective:"Automate risk detection workflows and uncover hidden behavioral patterns across surveillance datasets.",
  link: "https://github.com",
  architectureLink: "/architecture/risk-identification",
  description:"Engineered end-to-end ML pipelines covering preprocessing, feature engineering, model training, optimization, and real-time scoring. Applied graph-based entity relationship modeling and behavioral analysis across trade activity, voice data, and e-communications to detect hidden risk signals.",
  purpose: "Behavioral risk detection and entity network analysis.",
  focus: "Graph analytics, real-time scoring, behavior modeling.",
  impact:"Reduced false positives, improved detection quality, and automated surveillance workflows equivalent to ~4 FTE operational capacity.",
  metrics:[
    "~4 FTE capacity saved",
    "Real-time scoring pipeline",
    "Graph-based relationship mapping",
    "Reduced false positives"
  ],
  tags:[
    "Machine Learning",
    "Graph Analytics",
    "Risk Detection",
    "Behavioral Intelligence",
    "Metrics-Driven Optimization",
  ],
  color:"rose"
},
 
];

const colorClasses: Record<string, string> = {
  cyan: "border-cyan-500/30 hover:border-cyan-500/60 bg-cyan-500/5",
  violet: "border-violet-500/30 hover:border-violet-500/60 bg-violet-500/5",
  emerald: "border-emerald-500/30 hover:border-emerald-500/60 bg-emerald-500/5",
  amber: "border-amber-500/30 hover:border-amber-500/60 bg-amber-500/5",
  rose: "border-rose-500/30 hover:border-rose-500/60 bg-rose-500/5",
  pink: "border-pink-500/30 hover:border-pink-500/60 bg-pink-500/5",
  orange: "border-orange-500/30 hover:border-orange-500/60 bg-orange-500/5",
};

const ArchitectureModal = ({ project, onClose }: { project: any, onClose: () => void }) => {
  // Data derived from multiAgent.md for the specific Multi-Agent project
  const isMultiAgent = project.title.includes("Multi-Agent");
  const isInternal = project.architectureLink?.startsWith('/');
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-background/80 backdrop-blur-xl"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="relative w-full max-w-5xl max-h-[90vh] overflow-hidden glass-panel border-accent-cyan/20 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-white/5">
          <div className="flex items-center gap-4">
            <div className="p-2 rounded-lg bg-accent-cyan/10 text-accent-cyan">
              <Cpu className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white tracking-tight">{project.title}</h2>
              <p className="text-xs font-mono text-accent-cyan uppercase tracking-widest">System Architecture Standard v1.0</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <X className="w-5 h-5 text-white/50" />
          </button>
        </div>

        <div className="overflow-y-auto p-6 md:p-8 custom-scrollbar">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {isMultiAgent ? (
                <>
                  <h3 className="text-sm font-mono text-white/40 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                    <Activity className="w-4 h-4" /> Logical Execution Path
                  </h3>
                  <div className="relative space-y-4">
                    {[
                      { step: "01", label: "Request Mediation", desc: "FastAPI Async Layer receives Analyst Query", icon: Zap },
                      { step: "02", label: "Agent Orchestration", desc: "LangGraph Planner decomposes tasks & routes intent", icon: Cpu },
                      { step: "03", label: "Hybrid Retrieval", desc: "FAISS + BM25 + SQL Reranking Pipeline", icon: FileText },
                      { step: "04", label: "Grounded Synthesis", desc: "LLM Layer generates evidence-backed response", icon: ShieldCheck },
                      { step: "05", label: "Validation Layer", desc: "ISO 42001 alignment & Hallucination check", icon: ShieldCheck },
                    ].map((item, i) => (
                      <div key={i} className="relative flex items-start gap-4 p-4 rounded-lg bg-white/5 border border-white/10 group hover:border-accent-cyan/30 transition-colors">
                        <span className="text-[10px] font-mono text-accent-cyan mt-1">{item.step}</span>
                        <div>
                          <h4 className="text-sm font-bold text-white">{item.label}</h4>
                          <p className="text-xs text-white/50 mt-1">{item.desc}</p>
                        </div>
                        <item.icon className="absolute right-4 top-4 w-4 h-4 text-white/10 group-hover:text-accent-cyan/20 transition-colors" />
                        {i < 4 && <div className="absolute left-[1.15rem] -bottom-4 w-px h-4 bg-white/10" />}
                      </div>
                    ))}
                  </div>
                {/* Section 11: Governance */}
                <div className="p-6 rounded-xl bg-accent-cyan/5 border border-accent-cyan/20">
                  <h3 className="text-sm font-bold text-accent-cyan mb-4 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4" /> Governance & Guardrails
                  </h3>
                  <p className="text-xs text-white/70 leading-relaxed italic mb-4">
                    "Fail-safe behavior: All final responses shall be supported by retrieved evidence. Low-confidence outputs trigger human-in-the-loop review."
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-[10px] p-2 bg-black/20 rounded border border-white/5 text-white/50 uppercase">Grounding Check</div>
                    <div className="text-[10px] p-2 bg-black/20 rounded border border-white/5 text-white/50 uppercase">Hallucination Risk</div>
                    <div className="text-[10px] p-2 bg-black/20 rounded border border-white/5 text-white/50 uppercase">Citation Grounding</div>
                    <div className="text-[10px] p-2 bg-black/20 rounded border border-white/5 text-white/50 uppercase">Audit Tracing</div>
                  </div>
                </div>
              </>
            ) : null}
              </div>

              {/* Right Col: Technical Stack & Principles (Derived from MD Section 5 & 16) */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-xs font-mono text-white/40 uppercase tracking-widest mb-4">Architecture Principles</h3>
                  <ul className="space-y-4">
                    {[
                      "Grounded Output Priority",
                      "Separation of Concerns",
                      "Traceability & Lineage",
                      "Agentic Modularity",
                      "Fail-Safe Behavior",
                      "Retrieval-First Design",
                      "Policy Enforcement",
                    ].map((p, i) => (
                      <li key={i} className="flex items-center gap-3 text-xs text-white/70">
                        <div className="w-1 h-1 rounded-full bg-accent-cyan" /> {p}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xs font-mono text-white/40 uppercase tracking-widest mb-4">Infrastructure</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-[11px]">
                      <span className="text-white/40">Backend</span>
                      <span className="text-white/80">FastAPI / Python</span>
                    </div>
                    <div className="flex justify-between text-[11px]">
                      <span className="text-white/40">Orchestration</span>
                      <span className="text-white/80">LangGraph / LangChain</span>
                    </div>
                    <div className="flex justify-between text-[11px]">
                      <span className="text-white/40">Memory</span>
                      <span className="text-white/80">Redis-backed Persistence</span>
                    </div>
                    <div className="flex justify-between text-[11px]">
                      <span className="text-white/40">Evaluation</span>
                      <span className="text-white/80">RAGAS / LangSmith</span>
                    </div>
                    <div className="flex justify-between text-[11px]">
                      <span className="text-white/40">Infrastructure</span>
                      <span className="text-white/80">Docker / Kubernetes</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10">
                  {isInternal ? (
                    <Link 
                      href={project.architectureLink}
                      className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-white text-black text-xs font-bold hover:bg-accent-cyan transition-colors"
                      onClick={onClose}
                    >
                      <FileText className="w-4 h-4" /> View System Architecture
                    </Link>
                  ) : (
                    <a 
                      href={project.architectureLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-white text-black text-xs font-bold hover:bg-accent-cyan transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" /> View Documentation
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
      </motion.div>
    </motion.div>
  );
};

export function ProjectCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedArch, setSelectedArch] = useState<any>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400; // Adjust scroll amount as needed
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };
  return (
    <section 
      id="projects" 
      suppressHydrationWarning 
      className="scroll-mt-28 py-12 px-6 relative bg-surface/5 backdrop-blur-sm z-10"
    >
      <AnimatePresence>
        {selectedArch && (
          <ArchitectureModal project={selectedArch} onClose={() => setSelectedArch(null)} />
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Featured </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-violet-400">
              Projects
            </span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Production-grade AI systems built for enterprise environments
          </p>
        </motion.div>

        {/* Navigation Buttons */}
        <div className="flex justify-end gap-2 mb-4">
          <button
            onClick={() => scroll("left")}
            className="p-2 rounded-lg bg-white/5 border border-white/10 hover:border-emerald-500/50 transition-all"
          >
            <ArrowLeft className="w-5 h-5 text-white/70" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-2 rounded-lg bg-white/5 border border-white/10 hover:border-emerald-500/50 transition-all"
          >
            <ArrowRight className="w-5 h-5 text-white/70" />
          </button>
        </div>

        {/* Horizontal Scroll Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }} // Hide scrollbar for Firefox/IE
        >
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={`flex-shrink-0 w-[350px] p-5 rounded-xl border backdrop-blur-sm transition-all duration-300 flex flex-col snap-center ${colorClasses[project.color] || colorClasses.cyan}`}
            >
              <div className="flex flex-col gap-3 mb-5">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-emerald-400 font-bold mb-1 block">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-bold text-white leading-tight h-14 line-clamp-2">
                    {project.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 text-[10px] font-medium rounded bg-white/5 text-white/50 border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-2 mb-6 flex-grow">
                <div>
                  <span className="text-[10px] font-semibold text-white/30 uppercase tracking-wider mr-2">Purpose:</span>
                  <p className="text-white/80 text-xs italic leading-relaxed">"{project.purpose}"</p>
                </div>
                <div>
                  <span className="text-[10px] font-semibold text-white/30 uppercase tracking-wider mr-2">Focus:</span>
                  <p className="text-white/70 text-xs font-medium">{project.focus}</p>
                </div>
              </div>

              {/* Unified Footer: Metrics & Actions */}
              <div className="mt-auto pt-4 border-t border-white/10 space-y-5">
                <div className="grid grid-cols-1 gap-2">
                  {project.metrics?.slice(0, 3).map((metric, i) => (
                    <div key={i} className="flex items-baseline gap-2">
                      <span className="text-xs font-bold text-emerald-400 tabular-nums">
                        {metric.split(" ")[0]}
                      </span>
                      <span className="text-[9px] text-white/40 uppercase tracking-wider">
                        {metric.split(" ").slice(1).join(" ")}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-2">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded bg-white/5 text-white/70 text-[9px] font-bold uppercase tracking-widest hover:bg-white/10 hover:text-emerald-400 transition-all border border-white/5"
                  >
                    <ExternalLink className="w-3 h-3" />
                    <span>Source</span>
                  </a>
                  <Link 
                    href={project.architectureLink}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded bg-white/5 text-white/70 text-[9px] font-bold uppercase tracking-widest hover:bg-white/10 hover:text-emerald-400 transition-all border border-white/5"
                  >
                    <ExternalLink className="w-3 h-3" />
                    <span>Architecture</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
