import { Box, Container, Grid, Typography } from "@mui/material";
import { Color } from "@root/enems";
import { FontSize, FontWeight } from "@root/enems/text-size";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import HeroBox from "@components/hero-Box/hero-box";
import { missionDSCImage1 } from "@assets/about-us";
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
          <Grid size={{ xs: 12, md: 4 }}>
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
                  mt: 2,
                  fontSize: { xs: "1.5rem", sm: "2rem" },
                }}
              >
                OUR MISSION
              </Typography>
            </SlideSidewayInView>
          </Grid>

          <Grid size={{ xs: 12, sm: 12 }}>
            <SlideUpInView>
              <Typography
                variant="body1"
                sx={{
                  color: "#333",
                  fontSize: { xs: "0.9rem", sm: "1rem" },
                }}
              >
                To deliver seamless, high-quality transportation and logistical
                solutions that elevate events and experiences across Saudi
                Arabia, with a focus on professionalism, precision, and customer
                satisfaction.
              </Typography>
            </SlideUpInView>
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ padding: 2 }}>
          <Grid size={{ xs: 12, md: 7 }}>
            <SlideSidewayInView>
              <Typography
                variant="h4"
                align="center"
                gutterBottom
                sx={{
                  border: "2px solid",
                  padding: 1,
                  background: "linear-gradient(to right, #d38c3a, #8c4f10)",
                  color: "white",
                  borderTopLeftRadius: "8px",
                  borderTopRightRadius: "20px",
                  borderBottomLeftRadius: "8px",
                  borderBottomRightRadius: "8px",
                  fontSize: { xs: "1.5rem", sm: "2rem" },
                }}
              >
                OUR VISION
              </Typography>
            </SlideSidewayInView>
            <SlideUpInView>
              <Typography
                variant="body1"
                gutterBottom
                sx={{
                  color: "#333",
                  fontSize: { xs: "0.9rem", sm: "1rem" },
                }}
              >
                To become the leading name in event logistics and VIP
                transportation in the Kingdom, known for our reliability,
                excellence in service, and commitment to supporting Saudi
                Arabia’s growing entertainment and hospitality sectors.
              </Typography>
            </SlideUpInView>
          </Grid>

          <Grid
            size={{ xs: 12, md: 5 }}
            sx={{mt:{ xs: -6, md:-10 } }}
          >
            <ScaleInView>
              <Box
                sx={{
                  width: "100%",
                  height: "auto",
                  maxWidth: "100%",
                  aspectRatio: "16 / 9",
                  borderRadius: "20px",
                  overflow: "hidden",
                  p: { xs: 1, sm: 2 },
                  position: "relative",
                }}
              >
                <Image
                  src={missionDSCImage1}
                  alt="Flag"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    borderRadius: "20px",
                  }}
                  sizes="(max-width: 600px) 100vw, 120px"
                  fill
                  priority
                />
              </Box>
            </ScaleInView>
          </Grid>
        </Grid>
      </Container>
    </HeroBox>
  );
};

export default OurMission;