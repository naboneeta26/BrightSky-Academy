import HeroSection from "@/components/common/HeroSection";
import GalleryPageContent from "@/components/section/Gallery/GalleryPageContent";
import { pageHeroContent } from "@/data/heroContent";

export default function GalleryPage() {
  const hero = pageHeroContent.gallery;

  return (
    <main>
      <HeroSection {...hero} />
      <GalleryPageContent />
    </main>
  );
}
