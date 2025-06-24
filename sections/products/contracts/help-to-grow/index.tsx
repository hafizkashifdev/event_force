"use client";
import {
  ProductsContractsHelpToGrowImage,
  ProductsServicesBenefitFourImage,
  ProductsServicesBenefitOneImage,
  ProductsServicesBenefitOTwoImage,
  ProductsServicesBenefitThreeImage,
} from "@assets/products";
import HeroBox from "@components/hero-Box/hero-box";
import { Avatar, Box, Container, Grid, Stack, Typography } from "@mui/material";
import { Color } from "@root/enems";
import { FontWeight } from "@root/enems/text-size";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const servicesBenefitsData = [
  {
    id: 1,
    icon: ProductsServicesBenefitOneImage,
    title: "Smart Automatic Report",
  },
  {
    id: 2,
    icon: ProductsServicesBenefitOTwoImage,
    title: "24/7 Customer Service",
  },
  {
    id: 3,
    icon: ProductsServicesBenefitThreeImage,
    title: "Customs made report",
  },
  {
    id: 4,
    icon: ProductsServicesBenefitFourImage,
    title: "Advanced Analytics System",
  },
];

export const HelpToGrow = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, 
    });
  }, []);
  return (
    <HeroBox
      customStyles={{
        px: { xs: 2, sm: 5, md: 10 },
        height: "100%",
      }}
    >
      <Container maxWidth="xl">
      <Grid container spacing={5} data-aos="fade-up">
        <Grid size={{ xs: 12, md: 12, lg: 6 }} alignContent="center">
          <Typography
            fontSize="36px"
            fontWeight={FontWeight?.SemiBold}
            color={Color.TextGreen}
          >
            Automatic customs report help to grow.
          </Typography>
          <Typography
            variant="subtitle1"
            color={Color.TextSecondary}
            my={3}
            lineHeight="28px"
          >
            Creating account to our website and use it for your required time.
            We always ready to give you support all the time to grow business.
          </Typography>
          {servicesBenefitsData?.map((item: any) => {
            return (
              <Stack
                flexDirection="row"
                alignItems="center"
                key={item?.id}
                my={5}
              >
                <Avatar variant="rounded" src={item?.icon.src} />
                <Box sx={{ ml: 2 }}>
                  <Typography
                    variant="body1"
                    fontWeight={FontWeight?.SemiBold}
                    color={Color.TextGreen}
                  >
                    {item?.title}
                  </Typography>
                </Box>
              </Stack>
            );
          })}
        </Grid>
        <Grid size={{ xs: 12, md: 12, lg: 6 }}>
          <Box sx={{ position: "relative" }}>
            <Avatar
              src={ProductsContractsHelpToGrowImage.src}
              variant="square"
              sx={{ width: "100%", height: "600px" }}
            />
          </Box>
        </Grid>
      </Grid>
      </Container>
    </HeroBox>
  );
};
