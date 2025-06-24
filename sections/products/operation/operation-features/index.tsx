"use client";import {
  ProductsOperationFeatureFiveImage,
  ProductsOperationFeatureFourImage,
  ProductsOperationFeatureOneImage,
  ProductsOperationFeatureSixImage,
  ProductsOperationFeatureThreeImage,
  ProductsOperationFeatureTwoImage,
} from "@assets/products";
import { Avatar, Box, CardContent, Grid, Typography } from "@mui/material";
import { Color } from "@root/enems";
import { FontSize, FontWeight } from "@root/enems/text-size";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroBox from "@components/hero-Box/hero-box";

const OperationFeaturesData = [
  {
    id: 1,
    src: ProductsOperationFeatureOneImage,
    title: "Smart Workflow Automation",
    description:
      "Automate routine tasks and streamline complex processes to reduce manual effort. Build custom workflows tailored to your specific operational needs.",
  },
  {
    id: 2,
    src: ProductsOperationFeatureTwoImage,
    title: "Effortless Task Coordination",
    description:
      "Assign tasks, set clear priorities, and track progress in real time. Keep your team aligned and ensure every project stays on schedule.",
  },
  {
    id: 3,
    src: ProductsOperationFeatureThreeImage,
    title: "Centralised Documents ",
    description:
      "Centralise file storage and organisation for easier access and sharing. Ensure your team always works from the most up-to-date information.",
  },
  {
    id: 4,
    src: ProductsOperationFeatureFourImage,
    title: "Connected Team Collaboration",
    description:
      "Encourage seamless teamwork with shared calendars, team dashboards, and integrated communication tools. Strengthen cross-functional coordination.",
  },
  {
    id: 5,
    src: ProductsOperationFeatureFiveImage,
    title: "Insightful Reporting & Analytics",
    description:
      "Generate comprehensive reports to monitor key operational metrics. Use data-driven insights to enhance performance and guide decisions.",
  },
  {
    id: 6,
    src: ProductsOperationFeatureSixImage,
    title: "Seamless System Integration",
    description:
      "Connect effortlessly with your existing tools and systems. Build a unified operational ecosystem that supports your entire business.",
  },
];

export const OperationFeatures = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, 
    });
  }, []);
  return (
    <HeroBox>
      <Box
       data-aos="fade-up"
        sx={{
          width: "100%",
          maxWidth: { xs: "100%", sm: "90%" },
          textAlign: "center",
          mx: "auto",
        }}
      >
        <Typography
          fontSize={FontSize?.subTitle}
          fontWeight={FontWeight?.SemiBold}
          color="common.black"
        >
          Features
        </Typography>
        <Typography
          sx={{ lineHeight: "28px", letterSpacing: "-0.3px" }}
          variant="subtitle1"
          color={Color?.TextSecondary}
          mt={1.5}
        >
          Discover a powerful suite of tools designed to enhance operational
          efficiency and boost team performance.
        </Typography>
      </Box>
      <Grid container spacing={2} my={10}>
        {OperationFeaturesData?.map((item: any) => {
          return (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item?.id}>
              <Box
              data-aos="fade-up"
                sx={{
                  height: "100%",
                  width: "100%",
                  p: 2,
                  textAlign: { xs: "center", sm: "start" },
                }}
              >
                <Avatar
                  src={item?.src.src}
                  variant="rounded"
                  sx={{
                    width: 80,
                    height: 74,
                    margin: { xs: "0 auto", sm: "0" },
                  }}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    fontSize={FontSize?.Huge}
                    component="div"
                    fontWeight={FontWeight?.SemiBold}
                    color={Color.TextGreen}
                  >
                    {item?.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: Color.TextSecondary,
                      lineHeight: "24px",
                      latterSpacing: "-0.3",
                      fontSize:FontSize?.Large
                    }}
                  >
                    {item?.description}
                  </Typography>
                </CardContent>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </HeroBox>
  );
};
