import { Divider } from "@mui/material";
import { ContactMarketing } from "./contact-marketing";
import { PowerFullFeatures } from "./power-full-features";
import { TransFormData } from "./transform-data";
import { Benefits } from "./benefits";
import { TakeOurWord } from "./take-our-word";
import { ReadyToTransform } from "./ready-to-transform";
import { GetStarted } from "./get-started";

export const MarketingSection = () => {
  return (
    <>
      <ContactMarketing />
      <Divider
        sx={{
          mt: 12,
          mb: 8,
          color: "primary.lighter",
          width: "100%",
          maxWidth: "60%",
          mx: "auto",
        }}
      />
      <PowerFullFeatures />
      <TransFormData />
      <Benefits />
      <TakeOurWord />
      <ReadyToTransform />
      <GetStarted />
    </>
  );
};
