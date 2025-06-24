"use client";
import {
  ProductsSalesKeyFiveImage,
  ProductsSalesKeyFourImage,
  ProductsSalesKeyOneImage,
  ProductsSalesKeySevenImage,
  ProductsSalesKeySixImage,
  ProductsSalesKeyThreeImage,
  ProductsSalesKeyTwoImage,
} from "@assets/products";
import { Avatar, Box, Grid, Stack, Typography } from "@mui/material";
import { Color } from "@root/enems";
import { FontWeight } from "@root/enems/text-size";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import HeroBox from "@components/hero-Box/hero-box";

const keyFeatureData = [
  {
    id: 1,
    title: "Sales Dashboard",
    src: ProductsSalesKeyThreeImage,
  },
  {
    id: 2,
    title: "Deals Management",
    src: ProductsSalesKeyTwoImage,
  },
  {
    id: 3,
    title: "Task Management",
    src: ProductsSalesKeyOneImage,
  },
  {
    id: 4,
    title: "Sales Forecasting",
    src: ProductsSalesKeyFourImage,
  },
  {
    id: 5,
    title: "Quotes & Invoices",
    src: ProductsSalesKeyFiveImage,
  },
  {
    id: 6,
    title: "Reports & Analytics",
    src: ProductsSalesKeySixImage,
  },
  {
    id: 7,
    title: "Settings & Customisation",
    src: ProductsSalesKeySevenImage,
  },
];

export const KeyFeatures = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false, 
    });
  }, []);
  return (
    <HeroBox
      data-aos="fade-up"
      sx={{
        // p: { xs: 2, sm: 5, md: 10 },
        my: 10,
      }}
    >
      <Grid container spacing={5}>
        <Grid size={{ sm: 12, md: 6 }}>
          <Typography
            variant="h4"
            fontSize="36px"
            fontWeight={FontWeight?.SemiBold}
            color={Color.TextGreen}
          >
            Key Features & Benefits
          </Typography>
        </Grid>
        <Grid size={{ sm: 12, md: 6 }}>
          <Grid container spacing={5}>
            {keyFeatureData?.map((item: any) => {
              return (
                <Grid
                  size={{ xs: 6, sm: 4, md: 6, lg: 6, xl: 4 }}
                  key={item?.id}
                >
                  <Stack flexDirection="row" alignItems="center">
                    <Avatar
                      src={item?.src.src}
                      alt=""
                      variant="square"
                      sx={{ width: 15, height: 15 }}
                    />
                    <Typography
                      variant="subtitle1"
                      fontWeight={FontWeight?.Medium}
                      color={Color.TextSecondary}
                      ml={0.5}
                    >
                      {item?.title}
                    </Typography>
                  </Stack>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </HeroBox>
  );
};
