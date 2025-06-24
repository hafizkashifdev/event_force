import FooterCard from "@components/footer-card";
import { AboutServices } from "./about-services";
import { ServicesExpertise } from "./service-expertise";
import { ServicesSolution } from "./service-solution";
import { ServicesBenefits } from "./services-benefits";
import { ServicesGoalsSection } from "./services-goals";
import { ServicesHeroSection } from "./services-hero-section";
import { ServicesKeyFeatures } from "./services-key-features";

export const ServicesSection = () => {
  return (
    <>
      <ServicesHeroSection />
      <ServicesSolution />
      <ServicesGoalsSection />
      <ServicesBenefits />
      <ServicesKeyFeatures />
      <AboutServices />
      <ServicesExpertise />
      <FooterCard
        title="Redefine Service Excellence: Faster, Smarter & Customer-Centric!"
        desc="Streamline inquiries, resolutions, and customer engagement with
              real-time tracking."
        hasHighlightedText={false}
        hasBtn={true}
      />
    </>
  );
};
