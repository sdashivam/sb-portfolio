import { Hero } from "@/components/hero/Hero";
import { ProjectCarousel } from "@/components/projects/ProjectCarousel";
import { ArchitectureSection } from "@/components/architecture/ArchitectureSection";
import { InnovationLab } from "@/components/innovation/InnovationLab";
import { CareerMap } from "@/components/experience/CareerMap";
import { ContactSection } from "@/components/contact/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <ProjectCarousel />
      <ArchitectureSection />
      <InnovationLab />
      <CareerMap />
      <ContactSection />
    </main>
  );
}