"use client";

import dynamic from "next/dynamic";
import { useMounted } from "@/hooks/useMounted";

// Dynamically import the R3F Canvas wrapper to ensure @react-three/fiber is only evaluated on the client
const R3FCanvasWrapper = dynamic(
  () => import("./R3FCanvasWrapper").then((mod) => mod.R3FCanvasWrapper),
  { ssr: false }
);

export default function NeuralNetwork() { // This component is dynamically imported into AnimatedBackground
  const mounted = useMounted();

  if (!mounted) {
    return null; // Render nothing on the server until mounted on the client
  }

  return (
    <div className="absolute inset-0 pointer-events-none">
      <R3FCanvasWrapper />
    </div>
  );
}