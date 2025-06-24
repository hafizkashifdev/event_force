"use client";
import { ProductsTransFormDataImage } from "@assets/products";
import HeroBox from "@components/hero-Box/hero-box";
import { Avatar, Box, Container, Grid, Stack, Typography } from "@mui/material";
import { Color } from "@root/enems";
import { FontSize, FontWeight } from "@root/enems/text-size";
import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useEffect } from "react";

const transFormData = [
  {
    id: 1,
    number: "01",
    title: "In-Depth Audience Insights",
    description:
      "Understand customer behaviour, preferences, and trends to create tailored campaigns.",
  },
  {
    id: 2,
    number: "02",
    title: " Performance Analytics",
    description:
      "Monitor campaign results in real-time and adjust strategies for maximum impact.",
  },
  {
    id: 3,
    number: "03",
    title: "Predictive Intelligence",
    description:
      "Use data-driven forecasts to identify growth opportunities and improve targeting.",
  },
  {
    id: 4,
    number: "04",
    title: "Conversion Optimisation",
    description:
      " Analyse touchpoints, refine messaging, and improve customer journeys to boost conversions.",
  },
];

export const TransFormData = () => {
      useEffect(() => {
        Aos.init({
          duration: 1000,
          once: false, 
        });
      }, []);
  return (
    <HeroBox data-aos="fade-up" >
      <Container maxWidth="xl" data-aos="fade-down">
      <Grid container spacing={5}>
        <Grid size={{ xs: 12, md: 12, lg: 6 }}>
          <Image
            src={ProductsTransFormDataImage}
            alt="hero image"
            style={{ width: "100%", height: "650px" }}
            width={0}
            height={0}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 12, lg: 6 }} alignContent="center">
          <Stack
            flexDirection="column"
            alignItems="flex-start"
            gap="10px"
            flexShrink="0"
          >
          <Box>
            <Typography
              fontSize={FontSize?.subTitle}
              fontWeight={FontWeight?.SemiBold}
              color={Color.TextGreen}
            >
              Transform Data into Powerful Marketing Strategies
            </Typography>
          </Box>
          {transFormData?.map((item: any) => {
            return (
              <Stack
                flexDirection="row"
                alignItems="start"
                key={item?.id}
                my={3}
              >
                <Avatar
                  variant="square"
                  sx={{
                    width: 50,
                    height: 50,
                    borderRadius: "50%",
                    backgroundColor: Color.primaryMain,
                    mr: 2,
                    fontWeight: FontWeight?.SemiBold,
                  }}
                >
                  {item?.number}
                </Avatar>
                <Box>
                  <Typography
                    fontSize={FontSize?.Huge}
                    fontWeight={FontWeight?.SemiBold}
                    color={Color.TextGreen}
                  >
                    {item?.title}
                  </Typography>
                  <Typography variant="body1" color={Color.TextSecondary}>
                    {item?.description}
                  </Typography>
                </Box>
              </Stack>
            );
          })}
          </Stack>
        </Grid>
      </Grid>
      </Container>
    </HeroBox>
  );
};
