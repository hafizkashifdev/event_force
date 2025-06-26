import React, { useEffect } from "react";
import HeroSection from "./hero-section";
import OurMission from "./our-mission";
import WhatWeDO from "./what-we-do";
import Coverage from "@sections/coverage";
import { Box, Card, CardMedia, Grid } from "@mui/material";
import Image from "next/image";
import { missionDSCImage2, missionDSCImage3 } from "@assets/about-us";

const AboutUs = () => {

  return (
    <>
      <HeroSection />
      <OurMission />
      <Box sx={{mt:-20}}>
<Coverage />
      </Box>
      <Box>
      </Box>
      <WhatWeDO />
      
    </>
  );
};

export default AboutUs;
