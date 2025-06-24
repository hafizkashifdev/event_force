import { Box, Container, Grid, Typography } from "@mui/material";
import { Color } from "@root/enems";
import { FontSize, FontWeight } from "@root/enems/text-size";
import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import HeroBox from "@components/hero-Box/hero-box";

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
        <Grid container spacing={4} sx={{ mt: "50px" }}>
          <Grid size={{ xs: 12 }} sx={{ mt: "50px" }}>
            <Typography
              sx={{
                fontSize: FontSize.subTitle,
                fontWeight: FontWeight.SemiBold,
                color: Color.TextGreen,
              }}
            >
              Our mission and vision
            </Typography>
            <Typography
              sx={{
                fontSize: FontSize.ExtraLarge,
                fontWeight: FontWeight.Medium,
                color: Color.TextSecondary,
                mt: "24px",
              }}
            >
              At Agentic Creed, we are dedicated to transforming businesses with
              intelligent automation, seamless collaboration, and data-driven
              decision-making. Our goal is to eliminate inefficiencies, enhance
              customer engagement, and empower organisations with a fully
              integrated CRM and business management suite.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                fontSize: FontSize.Large,
                fontWeight: FontWeight.Regular,
                color: Color.TextSecondary,
              }}
            >
              <Typography
                component="span"
                sx={{
                  fontSize: '22px',
                  fontWeight: FontWeight.SemiBold,
                  color: Color.TextSecondary,
                }}
              >
                Vision
              </Typography>
              <Typography
                sx={{
                  fontSize: FontSize.Large,
                  fontWeight: FontWeight.Regular,
                  color: Color.TextSecondary,
                  mt: '16px'
                }}
              >
                To revolutionise business operations with intelligent
                automation, seamless collaboration, and data-driven insights. We
                aim to create a connected, efficient, and growth-driven ecosystem
                that enhances customer experiences and optimises workflows.
              </Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                fontSize: FontSize.Large,
                fontWeight: FontWeight.Regular,
                color: Color.TextSecondary,
              }}
            >
              <Typography
                component="span"
                sx={{
                  fontSize: '22px',
                  fontWeight: FontWeight.SemiBold,
                  color: Color.TextSecondary,
                }}
              >
                Mission
              </Typography>
              <Typography
                sx={{
                  fontSize: FontSize.Large,
                  fontWeight: FontWeight.Regular,
                  color: Color.TextSecondary,
                  mt: '16px'
                }}
              >
                Empowering businesses with a scalable, user-friendly, and secure platform that streamlines Sales, Marketing, ITSM, Customer Support, and more. We prioritise automation, data security, and innovation to drive long-term success and customer satisfaction.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </HeroBox>

  );
};

export default OurMission;
