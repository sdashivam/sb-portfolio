"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BookOpenText, ExternalLink, Github, Linkedin } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { NavLink, type NavItem } from "./NavLink";

type MobileMenuProps = {
  activeId: string;
  isOpen: boolean;
  items: NavItem[];
  onClose: () => void;
  onNavigate: (id: string) => void;
};

const socialLinks: Array<{
  label: string;
  href: string;
  icon: LucideIcon;
}> = [
  {
    label: "GitHub",
    href: "https://github.com/sdashivam",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/shivam-bhatt-b79b65111",
    icon: Linkedin,
  },
  {
    label: "Medium",
    href: "https://medium.com/@shivambhatt",
    icon: BookOpenText,
  },
];

export function MobileMenu({
  activeId,
  isOpen,
  items,
  onClose,
  onNavigate,
}: MobileMenuProps) {
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            aria-hidden="true"
            className="fixed inset-0 z-40 bg-background/60 backdrop-blur-[2px] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            id="mobile-navigation"
            className="fixed inset-x-3 top-20 z-[60] overflow-hidden rounded-xl border border-cyan-300/20 bg-[#07111c]/90 shadow-[0_24px_70px_rgba(0,0,0,0.42)] backdrop-blur-md md:hidden"
            initial={{ opacity: 0, x: 28, y: -8 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: 28, y: -8 }}
            transition={{ type: "spring", stiffness: 360, damping: 34 }}
          >
            <div className="border-b border-white/10 px-5 py-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-cyan-200/60">
                    Navigation Node
                  </p>
                  <p className="mt-1 font-heading text-lg text-white">
                    SB// Command Layer
                  </p>
                </div>
                <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,0.9)]" />
              </div>
            </div>

            <nav aria-label="Mobile primary navigation" className="space-y-2 p-4">
              {items.map((item) => (
                <NavLink
                  key={item.id}
                  {...item}
                  activeId={activeId}
                  onNavigate={onNavigate}
                  variant="mobile"
                />
              ))}
            </nav>

            <div className="px-4 pb-4">
              <motion.a
                href="#contact"
                onClick={(event) => {
                  event.preventDefault();
                  onNavigate("contact");
                }}
                whileTap={{ scale: 0.985 }}
                className="relative flex w-full items-center justify-center overflow-hidden rounded-lg border border-cyan-200/20 bg-gradient-to-r from-cyan-400 to-blue-500 px-4 py-3 font-mono text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-950 shadow-[0_0_24px_rgba(56,189,248,0.22)]"
              >
                <span className="absolute inset-0 bg-white/20 opacity-0 transition-opacity duration-300 hover:opacity-100" />
                <span className="relative z-10">Hire Me</span>
              </motion.a>
            </div>

            <div className="grid grid-cols-3 border-t border-white/10">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-2 border-r border-white/10 px-2 py-3 text-white/60 transition-colors last:border-r-0 hover:bg-white/5 hover:text-cyan-100"
                >
                  <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em]">
                    {label}
                  </span>
                  <ExternalLink
                    className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-60"
                    aria-hidden="true"
                  />
                </a>
              ))}
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
