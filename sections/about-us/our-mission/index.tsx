import {
  Box,
  Card,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { Color } from "@root/enems";
import { FontSize, FontWeight } from "@root/enems/text-size";
import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import HeroBox from "@components/hero-Box/hero-box";
import {
  missionDSCImage1,
} from "@assets/about-us";
import Image from "next/image";
import SlideUpInView from "@components/animations/animation-scroll/slide-up-in-view";
import SlideSidewayInView from "@components/animations/animation-scroll/slide-sideway-in-view";
import ScaleInView from "@components/animations/animation-scroll/scale-in-view";

const OurMission = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <HeroBox>
      <Container maxWidth="xl" data-aos="fade-up">
        <Grid container spacing={2} sx={{ padding: 2 }}>
          <Grid size={4}>
            <SlideSidewayInView>
            <Typography
              variant="h4"
              align="center"
              gutterBottom
              sx={{
                border: "2px solid #67B6B2",
                padding: 1,
                backgroundColor: "#67B6B2",
                borderTopLeftRadius: "8px",
                borderTopRightRadius: "20px",
                borderBottomLeftRadius: "8px",
                borderBottomRightRadius: "8px",
                color: "white",
                mt:2
              }}
            >
              OUR MISSION
            </Typography>
            </SlideSidewayInView>
          </Grid>

          <Grid size={12}>
            <SlideUpInView>
            <Typography variant="body1" sx={{ color: "#333" }}>
              To deliver seamless, high-quality transportation and logistical
              solutions that elevate events and experiences across Saudi Arabia,
              with a focus on professionalism, precision, and customer
              satisfaction.
            </Typography>
            </SlideUpInView>
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ padding: 2 }}>
          
          <Grid size={5}>
            <SlideSidewayInView>
            <Typography
            variant="h4"
              align="center"
              gutterBottom
              sx={{
                border: "2px solid linear-gradient(to right, #d38c3a, #8c4f10)",
                padding: 1,
                background: "linear-gradient(to right, #d38c3a, #8c4f10)",
                color: "white",
                 borderTopLeftRadius: "8px",
                borderTopRightRadius: "20px",
                borderBottomLeftRadius: "8px",
                borderBottomRightRadius: "8px",
              }}
            >
              OUR VISION
            </Typography></SlideSidewayInView>
            <SlideUpInView>
            <Typography
              variant="body1"
              gutterBottom
              sx={{
                color: "#333",
              }}
            >
              To become the leading name in event logistics and VIP
              transportation in the Kingdom, known for our reliability,
              excellence in service, and commitment to supporting Saudi Arabia’s
              growing entertainment and hospitality sectors.
            </Typography></SlideUpInView>
          </Grid> 

          <Grid size={7}>
            <ScaleInView>
            <Image
              src={missionDSCImage1}
              alt="Flag"
              width={600}
              height={400}
              style={{ objectFit: "cover", width: "100%", height: "400px" }}
            />
            </ScaleInView>
          </Grid>
        </Grid>

       
      </Container>
    </HeroBox>
  );
};

export default OurMission;
