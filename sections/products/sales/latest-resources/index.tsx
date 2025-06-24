"use client";
import {
  ProductsSalesResourceOneImage,
  ProductsSalesResourceThreeImage,
  ProductsSalesResourceTwoImage,
} from "@assets/products";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Color } from "@root/enems";
import { FontSize, FontWeight } from "@root/enems/text-size";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroBox from "@components/hero-Box/hero-box";
import Image from "next/image";

const LatestResourcesData = [
  {
    id: 1,
    src: ProductsSalesResourceOneImage,
    title: " How to Use Data Analytics to Improve Sales Performance",
    description: "Understand key metrics and track progress effectively.",
  },
  {
    id: 2,
    src: ProductsSalesResourceTwoImage,
    title: "New Trends Reshaping Sales Strategies",
    description: "Discover modern techniques to enhance customer engagement.",
  },
  {
    id: 3,
    src: ProductsSalesResourceThreeImage,
    title: "Proven Tactics to Enhance Your Sales Funnel",
    description:
      "Streamline your pipeline for higher efficiency and conversions.",
  },
];

export const LatestResources = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, 
    });
  }, []);
  return (
    <HeroBox data-aos="fade-up">
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
          Explore Our Latest Sales Insights & Resources
        </Typography>
      </Box>
      <Grid container spacing={5} mt={8}>
        {LatestResourcesData?.map((item: any) => {
          return (
            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={item?.id}>
              <Card
                sx={{
                  height: "100%",
                  border: "1px solid",
                  borderColor: Color?.bgColor,
                }}
              >
                <Image 
                                src={item.src.src}
                                alt="professional image"
                                style={{width: "100%", height: "auto"}}
                                width={100}
                                height={100}
                                />
                <CardContent>
                  <Typography
                    fontSize={FontSize?.ExtraHuge}
                    fontWeight={FontWeight?.SemiBold}
                    color={Color.TextGreen}
                  >
                    {item?.title}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color={Color.TextSecondary}
                    mt={1}
                  >
                    {item?.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </HeroBox>
  );
};
