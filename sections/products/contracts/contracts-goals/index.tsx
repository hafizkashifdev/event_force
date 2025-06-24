"use client";
import { ProductsContractsGoalsImage } from "@assets/products";
import { LinkButton } from "@components/link-button";
import { Box, Chip, Container, Grid, Typography } from "@mui/material";
import { Color } from "@root/enems";
import { FontSize, FontWeight } from "@root/enems/text-size";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import HeroBox from "@components/hero-Box/hero-box";

export const ContractsGoalsSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, 
    });
  }, []);
  return (
    <HeroBox customStyles={{ p: { xs: 2, sm: 5, md: 10 } }}>
      <Container maxWidth="xl">
      <Grid
        data-aos="fade-up"
        container
        rowSpacing={5}
        my={5}
        flexDirection={{ sm: "column-reverse", md: "row" }}
      >
        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
          <Image
            src={ProductsContractsGoalsImage.src}
            alt="goals Img"
            style={{ width: "90%", height: "90%", borderRadius: "15px" }}
            width={20}
            height={20}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }} alignContent="center">
          <Chip
            label="new: marketing analytics"
            sx={{
              color: Color?.commonWhite,
              backgroundColor: Color.primaryMain,
              p: "15px",
              borderRadius: "48px",
              fontSize: FontSize?.Medium,
              fontWeight: FontWeight?.SemiBold,
              lineHeight: "22px",
            }}
          />
          <Typography
            fontSize="36px"
            fontWeight={FontWeight?.SemiBold}
            color={Color.TextGreen}
            my={3}
          >
            We focus on your ultimate goal to complete
          </Typography>
          <Typography
            variant="subtitle1"
            color={Color.TextSecondary}
            my={3}
            lineHeight="28px"
          >
            Creating account to our website and use it for your required time.
            We are always ready to give you support all the time to grow
            business.
          </Typography>
          <LinkButton
          link="/about-us"
            variant="outlined"
            customStyles={{
              color: Color?.commonWhite,
              backgroundColor: Color.primaryMain,
              fontSize: FontSize?.Large,
              textTransform: "capitalize",
              border: "none",
              borderRadius: "8px",
              my: 2,
            }}
          >
            Explore More About Us
          </LinkButton>
        </Grid>
      </Grid>
      </Container>
    </HeroBox>
  );
};
