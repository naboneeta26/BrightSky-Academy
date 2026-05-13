import HeroSection from "@/components/common/HeroSection";
import ProgramPageContent from "@/components/section/Programs/ProgramPageContent";
import { pageHeroContent } from "@/data/heroContent";

export default function ProgramsPage() {
  const hero = pageHeroContent.programs;
  return (
    <main className="bg-white">
      {/* HERO */}
      <HeroSection {...hero} />

      {/* PROGRAMS */}
      <ProgramPageContent />
    </main>
  );
}
