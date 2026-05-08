import HeroSection from "@/components/common/HeroSection";
import ProgramPageContent from "@/components/section/Programs/ProgramPageContent";
import { pageHeroContent } from "@/data/heroContent";
import { programs } from "@/data/programContent";

export default function ProgramsPage() {
  const hero = pageHeroContent.programs;
  return (
    <main className="bg-white">
      {/* HERO */}
      <HeroSection {...hero} />

      {/* PROGRAMS */}
      <div className="py-20">
        {programs.map((program, index) => (
          <ProgramPageContent
            key={program.id}
            program={program}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>
    </main>
  );
}
