"use client";
import HeroBox from "@components/hero-Box/hero-box";
import { LinkButton } from "@components/link-button";
import { Box, Container, Typography } from "@mui/material";
import { Color } from "@root/enems";
import { FontSize, FontWeight } from "@root/enems/text-size";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const GetStarted = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false, 
    });
  }, []);
  return (
    <HeroBox data-aos="zoom-in" customStyles={{ my: 15 }}>
      <Container maxWidth="xl" data-aos="fade-down">
      <Box
        sx={{
          width: "100%",
          maxWidth: { xs: "100%", md: "60%", lg: "50%" },
          textAlign: "center",
          mx: "auto",
        }}
      >
        <Typography
          fontSize={FontSize?.subTitle}
          fontWeight={FontWeight?.SemiBold}
          color={Color.TextGreen}
        >
          Get Started with Event Force
        </Typography>
        <Typography variant="subtitle1" color={Color.TextSecondary} my={1}>
          We have designed our solutions to empower businesses and professionals
          at every stage. Event Force provides the fastest and most efficient
          way to manage sales, customers, and operations seamlessly.
        </Typography>
        <LinkButton
          link="https://app.agenticcreed.ai/sign-up"
          variant="outlined"
          customStyles={{
            color: Color?.commonWhite,
            backgroundColor: Color.primaryMain,
            fontSize: "body1",
            textTransform: "capitalize",
            border: "none",
            borderRadius: "8px",
            mt: 2,
          }}
          linkProps={{
            target: "_blank",
          }}
        >
          Get Started Now
        </LinkButton>
      </Box>
      </Container>
    </HeroBox>
  );
};
