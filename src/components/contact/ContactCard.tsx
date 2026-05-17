"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ContactCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
  delay?: number;
}

export function ContactCard({ icon: Icon, label, value, href, delay = 0 }: ContactCardProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/40 backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
    >
      <div className="relative">
        <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 group-hover:border-emerald-400/60 group-hover:bg-emerald-500/20 transition-all duration-300">
          <Icon className="w-5 h-5 text-emerald-400 group-hover:text-emerald-300 transition-colors" />
        </div>
        <div className="absolute inset-0 rounded-lg bg-emerald-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-white/40 text-sm">{label}</p>
        <p className="text-white font-medium truncate group-hover:text-emerald-300 transition-colors">
          {value}
        </p>
      </div>
    </motion.a>
  );
}