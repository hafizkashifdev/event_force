import { Divider } from "@mui/material";
import { OperationBenefits } from "./operation-benefits";
import { OperationFeatures } from "./operation-features";
import { OperationHeroSection } from "./operation-hero-section";
import { ReadyStreamLineOperations } from "./ready-streamline-operations";
import { TotalOperational } from "./total-operational";

export const OperationSection = () => {
  return (
    <>
      <OperationHeroSection />
      <Divider
        sx={{
          my: 5,
          color: "primary.lighter",
          width: "100%",
          maxWidth: "60%",
          mx: "auto",
        }}
      />
      <OperationFeatures />
      <TotalOperational />
      <ReadyStreamLineOperations />
      <OperationBenefits />
    </>
  );
};
