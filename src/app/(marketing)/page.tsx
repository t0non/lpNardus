import { Hero } from "@/components/sections/Hero";
import { PainSection } from "@/components/sections/PainSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { BrandsSection } from "@/components/sections/BrandsSection";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { FAQ } from "@/components/sections/FAQ";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <BrandsSection />
      <BenefitsSection />
      <PainSection />
      <ServicesSection />
      <ProcessSteps />
      <ReviewsSection />
      <FAQ />
      <ContactCTA />
    </>
  );
}
