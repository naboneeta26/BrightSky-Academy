import HeroSection from "@/components/common/HeroSection";
import ContactForm from "@/components/section/Contact/ContactForm";
import { pageHeroContent } from "@/data/heroContent";

export default function ContactPage() {
  const hero = pageHeroContent.contact;
  return (
    <main>
      <HeroSection {...hero} />
      <ContactForm />
    </main>
  );
}
