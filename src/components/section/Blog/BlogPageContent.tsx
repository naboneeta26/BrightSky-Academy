import HeroSection from "@/components/common/HeroSection";
import { pageHeroContent } from "@/data/heroContent";

export default function BlogPageContent() {
  const hero = pageHeroContent.blogs;

  return (
    <main>
      {/* hero section */}
      <HeroSection {...hero} />

      {/* Blog posts */}
    </main>
  );
}
