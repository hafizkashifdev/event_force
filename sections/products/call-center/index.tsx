import { CallCenterFeatures } from "./features";
import { CallCenterHeroSection } from "./hero-section";
import { BenefitsSection } from "./benefits";
import { OperationManagerMessage } from "./operation-manager-message";

export const CallCenterSection = () => {
  return (
    <>
      <CallCenterHeroSection />
      <CallCenterFeatures />
      <BenefitsSection />
      <OperationManagerMessage />
    </>
  );
};
