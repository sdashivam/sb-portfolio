import { Hero } from "@/components/hero/Hero";
import { ProjectCarousel } from "@/components/projects/ProjectCarousel";
// import { InnovationLab } from "@/components/innovation/InnovationLab";
import { CareerMap } from "@/components/experience/CareerMap";
import { ContactSection } from "@/components/contact/ContactSection";

// export default function Home() {
//   return (
//     <main className="min-h-screen bg-background">
//       <Hero />
//       <ProjectCarousel />
//       <InnovationLab />
//       <CareerMap />
//       <ContactSection />
//     </main>
//   );
// }
export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProjectCarousel />
      <CareerMap />
      <ContactSection />
    </main>
  );
}
