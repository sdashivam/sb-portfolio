"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ContactCard } from "./ContactCard";
import { AIAvatar } from "./AIAvatar";
import { Mail, Code2, Link2, FileText, Smartphone, Video } from "lucide-react";

// Dynamically import NeuralBackground with SSR disabled to prevent React 19 internal conflicts
const NeuralBackground = dynamic(
  () => import("./NeuralBackground"),
  { ssr: false }
);

export function ContactSection() {
  const contactInfo = [
    { icon: Smartphone, label: "Mobile", value: "+91 7771068574", href: "tel:+917771068574" },
    { icon: Code2, label: "GitHub", value: "sdashivam", href: "https://github.com/sdashivam" },
    { icon: Link2, label: "LinkedIn", value: "Shivam Bhatt", href: "https://www.linkedin.com/in/shivam-bhatt-b79b65111" },
    { icon: Video, label: "YouTube", value: "@shivambhatt", href: "https://youtube.com/@shivambhatt" },
    { icon: Mail, label: "Email", value: "bhatt.shivamk@gmail.com", href: "mailto:bhatt.shivamk@gmail.com" },
    { icon: FileText, label: "Resume", value: "Download Resume", href: "/resume/Shivam_Bhatt_Resume.pdf" },
  ];

  return (
    <section id="contact" className="relative min-h-[70vh] py-16 px-6 overflow-hidden flex items-center">
      {/* Localized Neural Background for the section */}
      <NeuralBackground />

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Connect </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-violet-400">
              With Me
            </span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Always open to discussing high-impact AI research, engineering opportunities, or technical collaborations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Left Side - AI Avatar Branding */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-2 flex justify-center"
          >
            <AIAvatar />
          </motion.div>

          {/* Right Side - Contact Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 grid sm:grid-cols-2 gap-4"
          >
            {contactInfo.map((info, index) => (
              <ContactCard
                key={index}
                icon={info.icon}
                label={info.label}
                value={info.value}
                href={info.href}
                delay={0.05 * index}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}