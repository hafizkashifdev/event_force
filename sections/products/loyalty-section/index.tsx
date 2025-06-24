import FooterCard from "@components/footer-card";
import { LoyaltyBenefits } from "./loyalty-benefits";
import { LoyaltyProgram } from "./loyalty-program";

export const LoyaltySection = () => {
  return (
    <>
      <LoyaltyProgram />
      <LoyaltyBenefits />
      <FooterCard
        title="Get Started with Agentic Creed"
        desc="Join thousands of businesses using smart solutions to streamline marketing, sales, customer service, and operations."
        hasHighlightedText={false}
        hasBtn={true}
      />
    </>
  );
};
