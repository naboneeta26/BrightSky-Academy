import HomeFeatures from "@/components/section/Home/HomeFeatures";
import { HomeHeroSection } from "@/components/section/Home/HomeHeroSection";

export default function Home() {
  return (
    <main>
      <HomeHeroSection />

      {/* Features Section */}
      <HomeFeatures />
    </main>
  );
}
