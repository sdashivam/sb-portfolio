"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";

const PROJECTS = [
  {
    title: "AI Portfolio Generator",
    purpose:"Experimenting with AI-assisted portfolio generation and dynamic UI composition.",
    description:"Built a customizable developer portfolio system with AI-generated project sections and animated layouts.",
    focus:"LLM workflows, UI systems, prompt engineering",
    tags: ["Next.js", "AI UI", "Tailwind", "Framer Motion"],
    color: "purple"
},
{
  title:"Multi-Agent Financial Intelligence System",
  category:"Research & Engineering Project",
  purpose:"Explore autonomous financial reasoning workflows using multi-agent orchestration, grounded retrieval, and enterprise-grade evaluation systems.",
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
      "AI Evaluation",
      "Agentic Workflows"
    ],

    color:"cyan"
  },
  {
    title:"Financial RAG & Knowledge Retrieval Platform",
    category:"Research & Engineering Project",
    purpose:"Research scalable retrieval architectures and evaluation strategies for high-precision financial knowledge systems.",
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
    title:"Multilingual Speech Synthesis With Voice Cloning",
    category:"Research & Engineering Project",
    purpose:"Explore multilingual speech synthesis, AI dubbing pipelines, and voice-preserving audio generation using modern speech AI systems.",
    focus:"Speech AI, multilingual dubbing, voice cloning, GPU inference orchestration, and real-time audio processing pipelines.",
    description:"Built an end-to-end AI-powered multilingual dubbing platform capable of converting English speech into Arabic while preserving speaker tone, timing, and vocal characteristics through integrated ASR, neural machine translation, TTS, and voice conversion pipelines. Architected a FastAPI-based orchestration framework with GPU-accelerated inference workflows, segment-level audio processing, alignment pipelines, observability tooling, and scalable speech synthesis infrastructure for high-quality multilingual audio generation.",
    impact:"Delivered an automated multilingual dubbing pipeline capable of preserving speaker identity and improving audio generation consistency across end-to-end speech transformation workflows.",
    metrics:[
      "Real-Time Factor (RTF) Optimized",
      "Low-Latency Audio Inference Pipeline",
      "Reduced Lip-Sync Alignment Error",
      "High End-To-End Processing Success Rate",
      "Efficient GPU Resource Utilization",
      "Segment-Level Audio Alignment",
    ],

    tags:[
      "Speech AI",
      "Voice Cloning",
      "ASR",
      "TTS",
      "Neural Machine Translation",
      "FastAPI",
      "Audio Processing",
      "Multilingual AI",
    ],

    color:"violet"
  },
  {
  title:"Enterprise Post-Detection Name Screening Intelligence Platform",
  industry:"Name Screening - Financial Crime",
  useCase:"AI-powered financial crime screening, risk intelligence, and governance automation for enterprise compliance operations",
  objective:"Transform legacy post-detection screening workflows into an intelligent, explainable, and enterprise-governed AI platform capable of improving detection capability while operating within strict regulatory and risk appetite constraints.",
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
    "Machine Learning",
    "Ethical AI",
    "Model Explainability",
    "Optuna",
    "SHAP",
    "AI Governance",
    "Model Monitoring",
    "Risk Intelligence",
    "Compliance Automation"
  ],
  color:"cyan"
},
{
title:"MENAT Bulk Search System",
industry:"Financial Crime & Investigations",
useCase:"Large-scale investigation search and prioritization platform",
objective:"Reduce analyst investigation time through automated large-scale search, filtering, and prioritization workflows.",
description:"Designed high-throughput distributed pipelines for bulk record processing and querying. Engineered optimized filtering, rule-based scoring, prioritization logic, and distributed computation workflows to improve investigation accuracy and scalability.",
impact:"Reduced manual investigation effort while significantly increasing analyst throughput and operational efficiency.",
metrics:[
      "95% accuracy",
      "70–75% efficiency gain",
      "30 min analysis vs 2 hours",
      "20–30 cases/day per analyst"
    ],
tags:[
    "Distributed Systems",
    "Data Pipelines",
    "Search Optimization",
    "Rule Engines",
    "Investigation Automation"
  ],
color:"emerald"
  },
  {
  title:"Surveillance Automation Framework",
  industry:"Risk & Compliance - Surveillance Operations",
  useCase:"Automation platform for investigation and reporting workflows",
  objective:"Modernize legacy surveillance operations by replacing manual Excel/VBA processes with scalable automation systems.",
  description:"Rebuilt legacy investigation tooling into a Python-based framework with Dash applications, Playwright-powered web automation, and dynamic executive reporting pipelines for scalable operational workflows.",
  impact:"Improved maintainability, automated reporting workflows, and eliminated manual operational bottlenecks across surveillance processes.",
  metrics:[
    "90+ legacy tools replaced",
    "Automated reporting pipeline",
    "Executive-ready PPT generation",
    "Web automation workflows"
  ],
  tags:[
    "Python",
    "Dash",
    "Playwright",
    "Automation",
    "Reporting Systems",
    "Workflow Modernization"
  ],

  color:"amber"
  },
  {
  title:"Surveillance Risk Identification System",
  industry:"Market Surveillance & Risk Intelligence",
  useCase:"AI-powered behavioral risk detection and entity relationship analysis",
  objective:"Automate risk detection workflows and uncover hidden behavioral patterns across surveillance datasets.",
  description:"Engineered end-to-end ML pipelines covering preprocessing, feature engineering, model training, optimization, and real-time scoring. Applied graph-based entity relationship modeling and behavioral analysis across trade activity, voice data, and e-communications to detect hidden risk signals.",
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
    "Real-Time Scoring",
    "Surveillance AI"
  ],
  color:"rose"
}
];

const colorClasses: Record<string, string> = {
  cyan: "border-emerald-500/30 hover:border-emerald-500/60 bg-emerald-500/5",
  violet: "border-violet-500/30 hover:border-violet-500/60 bg-violet-500/5",
  emerald: "border-emerald-500/30 hover:border-emerald-500/60 bg-emerald-500/5",
  amber: "border-amber-500/30 hover:border-amber-500/60 bg-amber-500/5",
  rose: "border-rose-500/30 hover:border-rose-500/60 bg-rose-500/5",
};

export function ProjectCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-20 px-6 bg-surface/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
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
        <div className="flex justify-end gap-2 mb-6">
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
          className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`flex-shrink-0 w-[350px] p-6 rounded-xl border backdrop-blur-sm transition-all duration-300 cursor-pointer ${colorClasses[project.color]}`}
            >
              {/* Project Header */}
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-white/60 text-sm">
                  {project.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs rounded-full bg-white/10 text-white/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/10">
                {project.metrics.map((metric, i) => (
                  <div key={i} className="text-center">
                    <div className="text-sm font-medium text-emerald-400">
                      {metric.split(" ")[0]}
                    </div>
                    <div className="text-xs text-white/40">
                      {metric.split(" ").slice(1).join(" ")}
                    </div>
                  </div>
                ))}
              </div>

              {/* View More */}
              <div className="flex items-center gap-1 mt-4 text-emerald-400 text-sm group">
                <span>View Details</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}