import HeroSection from "@/components/common/HeroSection";
import AboutPageContent from "@/components/section/About/AboutPageContent";
import AboutSchoolAdvantages from "@/components/section/About/AboutSchoolAdvantages";
import { pageHeroContent } from "@/data/heroContent";

export default function AboutPage() {
  const hero = pageHeroContent.about;
  return (
    <main className="bg-white">
      <HeroSection {...hero} />
      <AboutPageContent />
      <AboutSchoolAdvantages />
    </main>
  );
}
