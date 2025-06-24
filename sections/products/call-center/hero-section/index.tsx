"use client";
import { CallCenterHeroSectionImage } from "@assets/products";
import { LinkButton } from "@components/link-button";
import { Box, Chip, Container, Grid, Tooltip, Typography } from "@mui/material";
import { Color, FontSize, FontWeight, Routes } from "@root/enems";
import Image from "next/image";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import HeroBox from "@components/hero-Box/hero-box";

export const CallCenterHeroSection = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000, // Animation duration (in ms)
      once: false, // Whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <HeroBox
      // sx={{
      //   p: { xs: 2, sm: 5, md: 10, lg: "98px" },
      // }}
      customStyles={
        {
            p: { xs: 2, sm: 5, md: 10, lg: "98px" },
        }
      }
    >
      <Container maxWidth="xl">
        <Grid container rowSpacing={0} my={5}>
          <Grid size={{ xs: 12, sm: 6, md: 6 }} data-aos="fade-up">
            <Tooltip
              title="Boost Sales with Our Advanced Call Centre Solutions"
              placement="top"
              enterTouchDelay={0}
              leaveTouchDelay={3000}
            >
              <Chip
                label="Boost Sales with Our Advanced Call Centre Solutions"
                sx={{
                  color: Color?.commonWhite,
                  backgroundColor: Color.primaryMain,
                  borderRadius: "48px",
                  fontSize: FontSize?.Medium,
                  fontWeight: FontWeight?.SemiBold,
                  p: "15px",
                }}
              />
            </Tooltip>
            <Typography
              variant="h2"
              fontWeight={FontWeight?.SemiBold}
              color={Color.TextGreen}
              my={3}
              fontSize={FontSize?.mediumTitle}
              lineHeight="58px"
            >
              Call Centre
            </Typography>
            <Typography
              variant="body1"
              color={Color.TextSecondary}
              my={3}
              lineHeight="28px"
              maxWidth={"651px"}
              fontSize={FontSize?.ExtraLarge}
              fontWeight={FontWeight?.Regular}
            >
              Welcome to Agentic Creed, the ultimate call centre solution
              designed to enhance sales and customer interactions. Our platform
              empowers you to elevate customer experiences, streamline
              workflows, and drive revenue growth.
            </Typography>
            <Typography
              variant="body1"
              color={Color.TextSecondary}
              my={3}
              lineHeight="28px"
              maxWidth={"651px"}
              fontSize={FontSize?.ExtraLarge}
              fontWeight={FontWeight?.Regular}
            >
              Your call centre is the lifeblood of your business—engaging
              customers, building relationships, and increasing sales. With
              Agentic Creed, you gain access to powerful, AI-driven tools that
              optimise performance and deliver exceptional service at every
              touchpoint.
            </Typography>
            <LinkButton
              variant="outlined"
              customStyles={{
                color: "common.white",
                backgroundColor: Color.primaryMain,
                fontSize: FontSize?.Large,
                textTransform: "capitalize",
                border: "none",
                borderRadius: "8px",
                my: 2,
                FontWeight: FontWeight?.SemiBold,
              }}
              linkProps={{
                href: Routes.CONTACT,
                target: "_blank",
              }}
            >
              Contact Us
            </LinkButton>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 6 }} data-aos="fade-up">
            <Box sx={{ pb: 2 }}>
              <Image
                src={CallCenterHeroSectionImage}
                alt="hero image"
                layout="responsive"
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </HeroBox>
  );
};
