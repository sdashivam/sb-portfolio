"use client";

import { motion } from "framer-motion";

export type NavItem = {
  id: string;
  label: string;
  href: `#${string}`;
};

type NavLinkProps = NavItem & {
  activeId: string;
  onNavigate: (id: string) => void;
  variant?: "desktop" | "mobile";
};

export function NavLink({
  id,
  label,
  href,
  activeId,
  onNavigate,
  variant = "desktop",
}: NavLinkProps) {
  const isActive = activeId === id;

  if (variant === "mobile") {
    return (
      <motion.a
        href={href}
        aria-current={isActive ? "location" : undefined}
        onClick={(event) => {
          event.preventDefault();
          onNavigate(id);
        }}
        whileTap={{ scale: 0.985 }}
        className={`group relative flex w-full items-center justify-between overflow-hidden rounded-lg border px-4 py-3.5 transition-colors ${
          isActive
            ? "border-cyan-300/25 bg-cyan-300/10 text-cyan-100"
            : "border-white/10 bg-white/5 text-white/70 hover:border-cyan-300/20 hover:bg-cyan-300/5 hover:text-white"
        }`}
      >
        <span className="relative z-10 font-heading text-sm font-medium">
          {label}
        </span>
        <span className="relative z-10 font-mono text-[10px] uppercase tracking-[0.28em] text-cyan-200/50">
          {isActive ? "ACTIVE" : "OPEN"}
        </span>
        <span
          className={`absolute inset-y-0 left-0 w-px bg-cyan-300 transition-opacity ${
            isActive ? "opacity-100" : "opacity-0 group-hover:opacity-70"
          }`}
        />
      </motion.a>
    );
  }

  return (
    <motion.a
      href={href}
      aria-current={isActive ? "location" : undefined}
      onClick={(event) => {
        event.preventDefault();
        onNavigate(id);
      }}
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      className={`group relative inline-flex h-9 items-center overflow-hidden rounded-full px-3.5 font-mono text-[11px] uppercase tracking-[0.22em] transition-colors ${
        isActive ? "text-cyan-100" : "text-white/60 hover:text-white"
      }`}
    >
      {isActive && (
        <motion.span
          layoutId="desktop-nav-active"
          className="absolute inset-0 rounded-full border border-cyan-300/10 bg-cyan-300/5"
          transition={{ type: "spring", stiffness: 420, damping: 34 }}
        />
      )}
      <span className="relative z-10">{label}</span>
      <span className="absolute inset-x-3 bottom-1 h-px overflow-hidden">
        <span
          className={`block h-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.7)] transition-transform duration-300 ease-out ${
            isActive
              ? "translate-x-0"
              : "-translate-x-full group-hover:translate-x-0"
          }`}
        />
      </span>
    </motion.a>
  );
}
