import FooterCard from "@components/footer-card";
import { ContractManagement } from "./contract-management";
import { ContractFeatures } from "./contracts-features";
import { ContractsGoalsSection } from "./contracts-goals";
import { ContractsHeroSection } from "./contracts-hero-section";
import { ContractReview } from "./contracts-review";
import { ContractsSolution } from "./contracts-solution";
import { HelpToGrow } from "./help-to-grow";
import HeroBox from "@components/hero-Box/hero-box";
import { Container } from "@mui/material";

export const ContractsSection = () => {
  return (
    <>
      <ContractsHeroSection />
      <ContractsSolution />
      <ContractsGoalsSection />
      <HelpToGrow />
      <ContractFeatures />
      <ContractReview />
      <ContractManagement />
      <HeroBox>
      <Container maxWidth="xl">
      <FooterCard
        title="Streamline Your Contracts: Secure, Efficient, and Hassle-Free"
        desc="Effortlessly manage, automate, and track contracts with Agentic Creed for seamless business operations."
        hasHighlightedText={false}
        hasBtn={true}
      />
      </Container>
      </HeroBox>
    </>
  );
};
