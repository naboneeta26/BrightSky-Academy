import HeroSection from "@/components/common/HeroSection";
import EventPageContent from "@/components/section/Events/EventPageContent";
import { pageHeroContent } from "@/data/heroContent";

export default function EventPage() {
  const hero = pageHeroContent.events;

  return (
    <main>
      <HeroSection {...hero} />
      <EventPageContent />
    </main>
  );
}
