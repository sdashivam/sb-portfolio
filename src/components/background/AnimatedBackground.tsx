"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";
import { AIGrid } from "./AIGrid";
import { SignalFlowOverlay } from "./SignalFlowOverlay"; // New component
import { useMounted } from "@/hooks/useMounted";

// Dynamically import NeuralNetwork with SSR disabled to prevent React 19 internal conflicts during module evaluation
const NeuralNetwork = dynamic(
  () => import("./NeuralNetwork"),
  { ssr: false, loading: () => <LoadingFallback /> }
);

function GradientOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Top-left emerald glow */}
      <div
        className="absolute -top-1/4 -left-1/4 w-[800px] h-[800px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(16,185,129,0.3) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Top-right violet glow */}
      <div
        className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full opacity-15"
        style={{
          background: "radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Bottom center glow */}
      <div
        className="absolute -bottom-1/2 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(16,185,129,0.2) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />
    </div>
  );
}

function LoadingFallback() {
  return (
    <div className="absolute inset-0 bg-background" />
  );
}

export function AnimatedBackground() {
  const mounted = useMounted();

  if (!mounted) {
    return <div className="absolute inset-0 overflow-hidden bg-background" />;
  }

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Base gradient layer */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, #0B0F19 0%, #111827 50%, #0B0F19 100%)",
        }}
      />

      {/* Gradient orbs */}
      <GradientOrbs />

      {/* Animated grid */}
      <AIGrid />

      {/* Neural network 3D */}
      <Suspense fallback={<LoadingFallback />}>
        <NeuralNetwork />
      </Suspense>

      {/* Vignette overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, transparent 0%, rgba(11,15,25,0.8) 100%)",
        }}
      />

      {/* Noise texture overlay for depth */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}