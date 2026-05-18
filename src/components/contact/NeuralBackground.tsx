"use client";

import dynamic from "next/dynamic";
import { useMounted } from "@/hooks/useMounted";

// Dynamically import the R3F Canvas wrapper for contact section
// Using .then() to handle the named export from the wrapper file
const ContactR3FCanvasWrapper = dynamic(
  () => import("./ContactR3FCanvasWrapper").then((mod) => mod.ContactR3FCanvasWrapper),
  { ssr: false }
);

export default function NeuralBackground() {
  const mounted = useMounted();
  
  if (!mounted) return null;
  
  return (
    <div className="absolute inset-0 pointer-events-none opacity-40">
      <ContactR3FCanvasWrapper />
    </div>
  );
}