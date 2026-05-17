"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { NeuralBackground } from "./NeuralBackground";
import { ContactCard } from "./ContactCard";
import { AIAvatar } from "./AIAvatar";
import { Mail, Send, Code2, Link2, FileText, MessageSquare, Smartphone, Video } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    { icon: Smartphone, label: "Mobile", value: "+91 9876543210", href: "tel:+919876543210" },
    { icon: Code2, label: "GitHub", value: "github.com/shivambhatt", href: "https://github.com" },
    { icon: Link2, label: "LinkedIn", value: "linkedin.com/in/shivam-bhatt", href: "https://linkedin.com/in/shivam-bhatt" },
    { icon: Video, label: "YouTube", value: "youtube.com/@shivambhatt", href: "https://youtube.com" },
    { icon: Mail, label: "Email", value: "shivambhatt.ai@gmail.com", href: "mailto:shivambhatt.ai@gmail.com" },
    { icon: FileText, label: "Resume", value: "Download Resume", href: "/resume/Shivam_Bhatt_Resume.pdf" },
  ];

  return (
    <section className="relative min-h-screen py-20 px-6 overflow-hidden">
      {/* Background */}
      <NeuralBackground />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Get </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-violet-400">
              In Touch
            </span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Let's build something extraordinary together
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
              {/* Glow Effect */}
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-emerald-500/20 to-violet-500/20 opacity-50 blur-xl" />

              <form onSubmit={handleSubmit} className="relative space-y-6">
                <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-emerald-400" />
                  Send a Message
                </h3>

                {/* Name Input */}
                <div className="space-y-2">
                  <label className="text-white/60 text-sm">Name</label>
                  <motion.input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    whileFocus={{ scale: 1.01 }}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-emerald-500/50 focus:outline-none focus:bg-white/10 transition-all duration-300"
                    placeholder="Your name"
                    required
                  />
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                  <label className="text-white/60 text-sm">Email</label>
                  <motion.input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    whileFocus={{ scale: 1.01 }}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-emerald-500/50 focus:outline-none focus:bg-white/10 transition-all duration-300"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                {/* Message Input */}
                <div className="space-y-2">
                  <label className="text-white/60 text-sm">Message</label>
                  <motion.textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    whileFocus={{ scale: 1.01 }}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-emerald-500/50 focus:outline-none focus:bg-white/10 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full relative group overflow-hidden rounded-lg py-4 font-semibold"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-violet-500 group-hover:from-emerald-400 group-hover:to-violet-400 transition-all duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-violet-400 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />
                  <span className="relative flex items-center justify-center gap-2 text-black">
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="w-5 h-5 border-2 border-black border-t-transparent rounded-full"
                      />
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </span>
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Right Side - AI Avatar & Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* AI Avatar Section */}
            <div className="flex justify-center">
              <AIAvatar />
            </div>

            {/* Contact Cards */}
            <div className="grid gap-4">
              {contactInfo.map((info, index) => (
                <ContactCard
                  key={index}
                  icon={info.icon}
                  label={info.label}
                  value={info.value}
                  href={info.href}
                  delay={0.1 * index}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}