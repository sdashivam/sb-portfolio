"use client";

import { motion } from "framer-motion";
import { Briefcase, Building2, MapPin, Calendar } from "lucide-react";

const EXPERIENCES = [
  {
    company: "HSBC India Limited",
    location: "India",
    role: "Manager - Future Analytics and DE",
    period: "Sep 2025 - Present",
    achievements: [
      "Played a key role in the development and production deployment of ML-based post-detection system, increasing Recall by 61% at constant FPR",
      "Maintaining risk appetite (0-1%) across different market segments and improving Straight-Through Processing (STP) by 80%",
      "Implemented ongoing model monitoring for PSI/CSI, AUC drift, and calibration, reducing time-to-detect model degradation from 30 to 15 days",
      "Collaborated on champion–challenger testing and threshold calibration to improve model effectiveness and operational reliability while maintaining PSI < 0.1 and override rates below 5%",
      "Enhanced retrieval performance using semantic search and re-ranking pipelines, achieving ~48% improvement in information retrieval efficiency."
    ],
    color: "cyan",
  },
  {
    company: "HSBC India Limited",
    location: "India",
    role: "Analyst - Research and Development team, Risk & Compliance",
    period: "Feb 2022 - Sep 2025",
    achievements: [
      "Owned development of Python-based automation platforms, cutting reporting and analysis turnaround time by ~98%",
      "Applied fuzzy matching (Levenshtein distance), string or phonetic similarity algorithms for improved matching accuracy",
      "Engineered feature pipelines for text normalization, tokenization, and similarity scoring across multilingual datasets",
      "Developed scalable screening architecture aligned with regulatory risk thresholds, enabling deployment across multiple regions",
      "Delivered ~$10M cost savings for a single market (UAE) by automating investigation workflows",
      "Contributed to the development of ML-based risk detection systems, reducing manual investigation effort and delivering operational efficiency equivalent to ~4 FTE capacity."
    ],
    color: "cyan",
  },
  {
    company: "Sopra Steria India Pvt Limited",
    location: "India",
    role: "Software Engineer - Decision Science",
    period: "Aug 2021 - Feb 2022",
    achievements: [
      "Delivered interactive AI-powered dashboards (Dash), enabling real-time monitoring and improving stakeholder decision-making speed",
      "Handled high-volume transaction data at scale, delivering actionable insights that influenced strategic business decisions",
      "Collaborated with cross-functional teams to translate business problems into scalable AI solutions",
      "Processed high-volume financial datasets at scale using Hive and Pyspark"
    ],
    color: "violet",
  },
  {
    company: "Ineuron.AI",
    location: "India",
    role: "Associate - Data Science",
    period: "Jan 2021 - July 2021",
    achievements: [
      "Built and optimized data preprocessing pipelines, improving model performance and reducing training time by 5%",
      "Identified and curated high-quality data-sets, improving model accuracy and robustness",
      "Designed feature engineering strategies that enhanced performance of classification and clustering models by 12%"
    ],
    color: "violet",
  },
  {
    company: "Wipro Limited",
    location: "India",
    role: "Senior Associate - Quality Control and Assurance",
    period: "July 2019 - December 2020",
    achievements: [
      "Built data reporting infrastructure, enabling real-time KPI tracking and improving decision-making efficiency",
      "Improved reporting accuracy by validating and reconciling data across multiple sources, reducing errors by 11%",
      "Developed QA frameworks that enhanced product reliability and reduced system defects"
    ],
    color: "emerald",
  },
  {
    company: "Sage Energy Hyderabad",
    location: "India",
    role: "MIS Executive Techno-Commercial",
    period: "February 2019 - June 2019",
    achievements: [
      "Developed business reporting and analytics systems for vendor and category management",
      "Delivered market intelligence insights supporting forecasting and strategic planning, increasing sales by 11% monthly"
    ],
    color: "emerald",
  },
];

export function CareerMap() {
  return (
    <section id="experience" className="scroll-mt-28 py-12 px-6 bg-surface/5 backdrop-blur-sm relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Career </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-violet-400">
              Roadmap
            </span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            7+ years of progressive journey in AI/ML and data science across leading enterprises
          </p>
        </motion.div>

        {/* Timeline Map */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-emerald-500/50 via-violet-500/50 to-emerald-500/50" />

          {/* Experience Cards */}
          <div className="space-y-10">
            {EXPERIENCES.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className={`absolute left-8 md:left-1/2 w-3 h-3 rounded-full transform -translate-x-1/2 z-10
                  ${exp.color === 'cyan' ? 'bg-emerald-500 shadow-lg shadow-emerald-500/50' :
                    exp.color === 'violet' ? 'bg-violet-500 shadow-lg shadow-violet-500/50' :
                    'bg-emerald-500 shadow-lg shadow-emerald-500/50'}
                `} />

                {/* Card */}
                <div className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                }`}>
                  <div className="p-5 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-sm hover:border-emerald-500/30 transition-all duration-300">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Building2 className="w-4 h-4 text-emerald-400" />
                          <span className="text-emerald-400 font-medium">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-2 text-white/60 text-sm">
                          <MapPin className="w-3.5 h-3.5" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-white/40 text-[11px] bg-white/5 px-2.5 py-1 rounded-full font-mono">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    {/* Role */}
                    <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-violet-400" />
                      {exp.role}
                    </h3>

                    {/* Achievements */}
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-white/70 text-sm flex items-start gap-2">
                          <span className="text-emerald-400 mt-1">▹</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
