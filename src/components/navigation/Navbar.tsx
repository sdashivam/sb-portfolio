"use client";

import { useCallback, useEffect, useState } from "react";
import type { MouseEvent } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { NavLink, type NavItem } from "./NavLink";
import { MobileMenu } from "./MobileMenu";

const navItems: NavItem[] = [
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "contact", label: "Contact", href: "#contact" },
];

const navOffset = 96;

export function Navbar() {
  const pathname = usePathname();
  const [activeId, setActiveId] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const scrollToSection = useCallback(
    (targetId: string, options: { updateHash?: boolean } = {}) => {
      const updateHash = options.updateHash ?? true;

      closeMenu();

      if (pathname !== "/") {
        window.location.href = `/#${targetId}`;
        return;
      }

      const target = document.getElementById(targetId);

      if (!target) {
        return;
      }

      const top = Math.max(
        0,
        target.getBoundingClientRect().top + window.scrollY - navOffset
      );

      window.scrollTo({ top, behavior: "smooth" });
      setActiveId(targetId);

      if (updateHash) {
        window.history.replaceState(null, "", `#${targetId}`);
      }
    },
    [closeMenu, pathname]
  );

  const handleBrandClick = useCallback(
    (event: MouseEvent<HTMLAnchorElement>) => {
      if (pathname !== "/") {
        return;
      }

      event.preventDefault();
      closeMenu();
      setActiveId("");
      window.history.replaceState(null, "", "/");
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    [closeMenu, pathname]
  );

  useEffect(() => {
    let frameId = 0;

    const updateNavState = () => {
      window.cancelAnimationFrame(frameId);

      frameId = window.requestAnimationFrame(() => {
        const scrollPosition = window.scrollY;
        const documentHeight = document.documentElement.scrollHeight;
        const viewportBottom = scrollPosition + window.innerHeight;
        let currentId = "";

        setIsScrolled(scrollPosition > 12);

        for (const item of navItems) {
          const section = document.getElementById(item.id);

          if (section && scrollPosition + navOffset + 80 >= section.offsetTop) {
            currentId = item.id;
          }
        }

        if (
          document.getElementById("contact") &&
          documentHeight - viewportBottom < 120
        ) {
          currentId = "contact";
        }

        setActiveId(currentId);
      });
    };

    updateNavState();
    window.addEventListener("scroll", updateNavState, { passive: true });
    window.addEventListener("resize", updateNavState);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", updateNavState);
      window.removeEventListener("resize", updateNavState);
    };
  }, []);

  useEffect(() => {
    if (pathname !== "/" || !window.location.hash) {
      return;
    }

    const targetId = window.location.hash.replace("#", "");

    if (!navItems.some((item) => item.id === targetId)) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      scrollToSection(targetId, { updateHash: false });
    }, 180);

    return () => window.clearTimeout(timeoutId);
  }, [pathname, scrollToSection]);

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto max-w-7xl"
        >
          <div
            className={`pointer-events-auto relative flex h-[4.4rem] items-center justify-between px-4 transition-all duration-500 sm:px-5 ${
              isScrolled
                ? "rounded-2xl border border-white/10 bg-[#07111c]/75 shadow-[0_18px_60px_rgba(0,0,0,0.28)] backdrop-blur-md"
                : "rounded-none border border-transparent bg-transparent"
            }`}
          >
            <a
              href="/"
              aria-label="Shivam Bhatt home"
              onClick={handleBrandClick}
              className="group flex min-w-0 items-center"
            >
              <span className="relative flex min-w-0 flex-col border-l border-cyan-300/30 py-1 pl-3 leading-none transition-colors group-hover:border-cyan-200/60">
                <span className="absolute -left-px top-0 h-2 w-px bg-cyan-200 shadow-[0_0_12px_rgba(103,232,249,0.75)]" />
                <span className="absolute -left-px bottom-0 h-2 w-px bg-cyan-300/40" />
                <span className="flex items-center gap-2 font-mono text-[18px] font-semibold tracking-[0.1em] text-white">
                  SB<span className="text-cyan-200">//</span>
                  <span className="hidden h-px w-6 bg-cyan-300/40 shadow-[0_0_12px_rgba(103,232,249,0.45)] sm:block" />
                </span>
                <span className="mt-1.5 whitespace-nowrap font-mono text-[9px] uppercase tracking-[0.32em] text-white/50 group-hover:text-cyan-100/70">
                  Enterprise AI Systems
                </span>
              </span>
            </a>

            <nav
              aria-label="Primary navigation"
              className={`absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 rounded-full border px-1.5 py-1 transition-all duration-500 md:flex ${
                isScrolled
                  ? "border-white/10 bg-white/5"
                  : "border-transparent bg-transparent"
              }`}
            >
              {navItems.map((item) => (
                <NavLink
                  key={item.id}
                  {...item}
                  activeId={activeId}
                  onNavigate={scrollToSection}
                />
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <motion.a
                href="#contact"
                onClick={(event) => {
                  event.preventDefault();
                  scrollToSection("contact");
                }}
                whileHover={{ y: -1, scale: 1.015 }}
                whileTap={{ scale: 0.985 }}
                className="relative hidden h-10 items-center overflow-hidden rounded-full border border-cyan-200/20 bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 px-5 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-950 shadow-[0_0_22px_rgba(56,189,248,0.22)] md:inline-flex"
              >
                <motion.span
                  aria-hidden="true"
                  className="absolute inset-0 bg-white/20"
                  animate={{ opacity: [0.05, 0.22, 0.05] }}
                  transition={{
                    duration: 2.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <span className="relative z-10">Hire Me</span>
              </motion.a>

              <button
                type="button"
                aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-navigation"
                onClick={() => setIsMenuOpen((value) => !value)}
                className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:border-cyan-300/25 hover:text-cyan-100 md:hidden"
              >
                <span className="sr-only">
                  {isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                </span>
                <span className="relative h-4 w-5">
                  <span
                    className={`absolute left-0 top-0 h-px w-5 bg-current transition-transform duration-300 ${
                      isMenuOpen ? "translate-y-2 rotate-45" : ""
                    }`}
                  />
                  <span
                    className={`absolute left-0 top-2 h-px w-5 bg-current transition-opacity duration-300 ${
                      isMenuOpen ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  <span
                    className={`absolute bottom-0 left-0 h-px w-5 bg-current transition-transform duration-300 ${
                      isMenuOpen ? "-translate-y-[7px] -rotate-45" : ""
                    }`}
                  />
                </span>
              </button>
            </div>
          </div>
        </motion.div>
      </header>

      <MobileMenu
        activeId={activeId}
        isOpen={isMenuOpen}
        items={navItems}
        onClose={closeMenu}
        onNavigate={scrollToSection}
      />
    </>
  );
}
