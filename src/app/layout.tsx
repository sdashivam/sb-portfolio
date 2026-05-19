import type { Metadata } from "next";
import "./globals.css";
import { AnimatedBackground } from "@/components/background/AnimatedBackground";
import { Navbar } from "@/components/navigation/Navbar";

export const metadata: Metadata = {
  title: "Shivam Bhatt | Applied AI Engineer",
  description:
    "Building production-grade AI systems. Multi-agent workflows, RAG pipelines, and ML infrastructure at scale.",
  keywords: [
    "AI Engineer",
    "Machine Learning",
    "Enterprise AI",
    "RAG",
    "Multi-agent Systems",
    "MLOps",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body className="min-h-screen antialiased relative bg-background">
        <AnimatedBackground />
        <Navbar />
        <div className="relative z-10">
          {children}
          <div className="px-6 pt-4">
            <div className="mx-auto max-w-7xl border-t border-cyan-300/10 py-5">
              <div className="flex flex-col items-center justify-center gap-2 font-mono text-[10px] uppercase tracking-[0.24em] text-cyan-100/60 sm:flex-row sm:gap-4">
                <span className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-40" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-200 shadow-[0_0_14px_rgba(103,232,249,0.75)]" />
                  </span>
                  SYSTEM STATUS: ACTIVE
                </span>
                <span className="hidden h-px w-8 bg-cyan-300/20 sm:block" />
                <span className="text-white/50">
                  Enterprise AI Infrastructure Operational &#10003;
                </span>
              </div>
            </div>
          </div>
          <footer className="px-6 py-10 border-t border-white/10 bg-background/70 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto text-center">
              <p className="text-sm font-semibold text-white">
                Shivam Bhatt &copy; 2026
              </p>
              <p className="mt-2 text-sm text-white/60">
                Applied AI Engineer &middot; Enterprise GenAI Systems
              </p>
              <p className="mt-3 text-xs text-white/40">
                Built with Next.js, TailwindCSS, Framer Motion &amp; Vercel.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
