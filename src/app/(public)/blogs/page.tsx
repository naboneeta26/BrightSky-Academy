import HeroSection from "@/components/common/HeroSection";
import BlogPageContent from "@/components/section/Blog/BlogPageContent";
import { pageHeroContent } from "@/data/heroContent";

export default function BlogPage() {
  const hero = pageHeroContent.blogs;
  return (
    <main>
      <HeroSection {...hero} />
      <BlogPageContent />
    </main>
  );
}
