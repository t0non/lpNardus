import { Hero } from "@/components/sections/Hero";
import { CredibilityBar } from "@/components/sections/CredibilityBar";
import { PainSection } from "@/components/sections/PainSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { BrandsSection } from "@/components/sections/BrandsSection";
import { FAQ } from "@/components/sections/FAQ";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <CredibilityBar />
      <PainSection />
      <ServicesSection />
      <ProcessSteps />
      <ReviewsSection />
      <BrandsSection />
      <FAQ />
      <ContactCTA />
    </>
  );
}
