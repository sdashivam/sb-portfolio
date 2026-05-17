'use client';

import { motion } from 'framer-motion';
import { Terminal, ShieldCheck, Cpu, ArrowUpRight } from 'lucide-react';

const metrics = [
  { label: 'Experience', value: '7+ Years', icon: Cpu },
  { label: 'Op. Savings', value: '$10M+', icon: Terminal },
  { label: 'Fraud Recall', value: '+60%', icon: ShieldCheck },
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 pt-20">
      <div className="max-w-7xl mx-auto w-full">
        {/* Technical Identity Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel mb-8"
        >
          <div className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
          <span className="text-xs font-mono uppercase tracking-widest text-accent-cyan">
            System Status: Production Ready
          </span>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-tight mb-6">
              Shivam <span className="text-gradient-cyan">Bhatt</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 max-w-xl mb-10 leading-relaxed">
              Senior Enterprise AI Engineer specializing in <span className="text-white">Multi-Agent Systems</span>, 
              Production GenAI Infrastructure, and Fraud Detection Analytics.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-white text-background font-bold rounded-sm flex items-center gap-2 hover:bg-accent-cyan transition-colors group">
                View Case Studies
                <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
              </button>
              <button className="px-8 py-4 glass-panel text-white font-bold rounded-sm hover:bg-white/5 transition-colors">
                Technical Architecture
              </button>
            </div>
          </motion.div>

          {/* Metrics Visualization */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 gap-4"
          >
            {metrics.map((metric, idx) => (
              <div 
                key={idx} 
                className="glass-panel p-6 flex items-center justify-between group hover:border-accent-cyan/30 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-accent-cyan/10 text-accent-cyan">
                    <metric.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-mono text-slate-500 uppercase tracking-tighter">{metric.label}</p>
                    <h3 className="text-3xl font-bold text-white tracking-tight">{metric.value}</h3>
                  </div>
                </div>
                <div className="hidden md:block h-px w-24 bg-gradient-to-r from-transparent to-accent-cyan/20" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};