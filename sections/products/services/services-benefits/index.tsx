"use client";
import {
  ProductsServicesBenefitFourImage,
  ProductsServicesBenefitImage,
  ProductsServicesBenefitOneImage,
  ProductsServicesBenefitOTwoImage,
  ProductsServicesBenefitThreeImage,
  ProductsServicesClientImage,
  ProductsServicesDigitalWaveImage,
} from "@assets/products";
import { Avatar, Box, Grid, Stack, Typography } from "@mui/material";
import { Color } from "@root/enems";
import { FontWeight } from "@root/enems/text-size";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroBox from "@components/hero-Box/hero-box";

const servicesBenefitsData = [
  {
    id: 1,
    icon: ProductsServicesBenefitOneImage,
    title: "Efficient Service Handling",
  },
  {
    id: 2,
    icon: ProductsServicesBenefitOTwoImage,
    title: "Streamlined Task Management",
  },
  {
    id: 3,
    icon: ProductsServicesBenefitThreeImage,
    title: "Enhanced Client Communication",
  },
  {
    id: 4,
    icon: ProductsServicesBenefitFourImage,
    title: "Data-Driven Decision Making",
  },
];

export const ServicesBenefits = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, 
    });
  }, []);
  return (
    <HeroBox
      data-aos="fade-up"
      sx={{
        // p: { xs: 2, sm: 5, md: 10 },
        backgroundImage: `url(${ProductsServicesDigitalWaveImage.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "100%",
      }}
    >
      <Grid container spacing={5}>
        <Grid size={{ xs: 12, md: 12, lg: 6 }} alignContent="center">
          <Stack flexDirection="column" gap="36px" flexShrink="0">
            <Box>
              <Typography
                variant="h2"
                fontWeight={FontWeight?.SemiBold}
                color={Color.TextGreen}
              >
                Benefits of Agentic Creed Services
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="subtitle1"
                color={Color.TextSecondary}
                my={3}
                lineHeight="28px"
              >
                Agentic Creed Services is a comprehensive service management
                solution designed to streamline operations, enhance client
                satisfaction, and optimise service delivery. With automated
                workflows, task tracking, and data-driven insights, businesses
                can efficiently manage service requests and improve overall
                performance.
              </Typography>
            </Box>
            <Box>
              {servicesBenefitsData?.map((item: any) => {
                return (
                  <Stack
                    flexDirection="row"
                    alignItems="center"
                    key={item?.id}
                    my={3}
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
            </Box>
          </Stack>
        </Grid>
        <Grid size={{ xs: 12, md: 12, lg: 6 }}>
          <Box sx={{ position: "relative" }}>
            <Avatar
              src={ProductsServicesBenefitImage.src}
              variant="square"
              sx={{ width: "95%", height: "100%" }}
            />
            <Avatar
              src={ProductsServicesClientImage.src}
              variant="square"
              sx={{
                width: "61%",
                height: "70%",
                position: "absolute",
                top: "75%",
                left: "45%",
                transform: "translate(-55%, -25%)",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </HeroBox>
  );
};
