import HeroSection from "@/components/common/HeroSection";
import { pageHeroContent } from "@/data/heroContent";

export default function ContactPageContent() {
  const hero = pageHeroContent.contact;

  return (
    <main>
      {/* hero section */}
      <HeroSection {...hero} />

      {/* Contact form */}
    </main>
  );
}
