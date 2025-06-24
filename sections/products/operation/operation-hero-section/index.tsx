"use client";
import { ProductsOperationHeroImage } from "@assets/products";
import { LinkButton } from "@components/link-button";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { Color } from "@root/enems";
import { FontWeight } from "@root/enems/text-size";
import Image from "next/image";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import HeroBox from "@components/hero-Box/hero-box";

export const OperationHeroSection = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <HeroBox data-aos="fade-up">
      <Grid
        container
        spacing={10}
        flexDirection={{
          xs: "column-reverse",
          sm: "column-reverse",
          md: "column-reverse",
          lg: "row",
        }}
      >
        <Grid size={{ sm: 12, md: 12, lg: 6 }} sx={{ mt: 15 }}>
          <Image
            src={ProductsOperationHeroImage}
            alt="hero image"
            style={{ width: "100%", height: "600px" }}
            width={0}
            height={0}
          />
        </Grid>
        <Grid
          size={{ sm: 12, md: 12, lg: 6 }}
          alignContent="center"
          sx={{ mt: 15 }}
        >
          <Stack
            flexDirection="column"
            alignItems="flex-start"
            gap="36px"
            flexShrink="0"
          >
            <Typography
              fontSize="60px"
              color={Color.TextGreen}
              fontWeight={FontWeight?.SemiBold}
            >
              Operation
            </Typography>
            <Typography
              sx={{ lineHeight: "28px", letterSpacing: "-0.3px" }}
              variant="subtitle1"
            >
              Welcome to Operations – Our comprehensive solution for optimising
              workflow efficiency and driving operational excellence. Our
              platform is designed to help businesses streamline internal
              processes, enhance team communication, and foster seamless
              collaboration. By integrating advanced tools and automation, we
              ensure that every aspect of your operations runs smoothly and
              efficiently.
            </Typography>
            <Typography sx={{ lineHeight: "28px" }} variant="subtitle1">
              With Operations, your organisation gains access to intelligent
              features that simplify daily tasks, eliminate inefficiencies, and
              enhance productivity. Whether managing workflows, coordinating
              teams, or tracking key business metrics, our centralised system
              keeps everything aligned.
            </Typography>
            <LinkButton
              link="/contact"
              variant="outlined"
              customStyles={{
                color: Color?.commonWhite,
                backgroundColor: Color.primaryMain,
                fontSize: "body1",
                border: "none",
                borderRadius: "8px",
                textTransform: "capitalize",
                mr: 2,
                mt: 2,
              }}
            >
              Contact Us
            </LinkButton>
          </Stack>
        </Grid>
      </Grid>
    </HeroBox>
  );
};
