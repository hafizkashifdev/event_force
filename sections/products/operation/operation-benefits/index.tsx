"use client";
import {
  ProductsServicesDataReportImage,
  ProductsServicesDocumentImage,
  ProductsServicesParkTicketsCoupleImage,
  ProductsServicesRobustnessImage,
  ProductsServicesWebsiteIconImage,
  ProductsServicesWorkloadImage,
} from "@assets/products";
import HeroBox from "@components/hero-Box/hero-box";
import { Avatar, Box, CardContent, Grid, Typography } from "@mui/material";
import { Color } from "@root/enems";
import { FontSize, FontWeight } from "@root/enems/text-size";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const operationBenefitsData = [
  {
    id: 1,
    src: ProductsServicesDataReportImage,
    title: "Boosted Efficiency",
    description:
      "Automate routine tasks, reduce errors, and free up your team’s time to focus on high-impact activities.",
  },
  {
    id: 2,
    src: ProductsServicesParkTicketsCoupleImage,
    title: "Clear Task Visibility",
    description:
      "Easily assign and monitor tasks while ensuring full transparency, accountability, and progress tracking across teams.",
  },
  {
    id: 3,
    src: ProductsServicesRobustnessImage,
    title: "Improved Communication",
    description:
      "Strengthen collaboration across departments with smooth, centralised communication, leading to faster, better outcomes.",
  },
  {
    id: 4,
    src: ProductsServicesWorkloadImage,
    title: "Decision Making",
    description:
      "Use real-time analytics and performance reports to spot trends, optimise operations, and make informed, data-backed decisions.",
  },
  {
    id: 5,
    src: ProductsServicesWebsiteIconImage,
    title: "Scalable Operations",
    description:
      "Easily adapt workflows and tools as your business grows, ensuring your operational systems remain efficient and future-ready.",
  },
  {
    id: 6,
    src: ProductsServicesDocumentImage,
    title: "Enhanced Compliance & Security",
    description:
      "Maintain data integrity and adhere to industry regulations with built-in governance tools and secure process management.",
  },
];

export const OperationBenefits = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, 
    });
  }, []);
  return (
    <HeroBox sx={{ mt:5 }}>
      <Box
      data-aos="fade-up"
        sx={{
          width: "100%",
          maxWidth: { xs: "100%", sm: "70%" },
          textAlign: "center",
          mx: "auto",
        }}
      >
        <Typography
          fontSize="36px"
          fontWeight={FontWeight?.SemiBold}
          color="common.black"
        >
          Benefits
        </Typography>
        <Typography
          sx={{ lineHeight: "28px", letterSpacing: "-0.3px", fontSize:FontSize?.ExtraLarge }}
          color={Color?.TextSecondary}
          mt={1.5}
        >
          Operations by Event Force is your reliable partner in achieving
          operational excellence. Designed to enhance efficiency, boost
          productivity, and enable seamless collaboration, our solution empowers
          organisations to optimise workflows and drive business success. With
          advanced automation, real-time insights, and effortless process
          management, Operations ensures smooth coordination across teams,
          helping you stay agile and competitive in an ever-evolving business
          landscape.
        </Typography>
      </Box>
      <Grid container spacing={5} my={10}>
        {operationBenefitsData?.map((item: any) => {
          return (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item?.id}>
              <Box
              data-aos="fade-up"
                sx={{
                  height: "100%",
                  width: "100%",
                  p: 2,
                  textAlign: "center",
                }}
              >
                <Avatar
                  src={item?.src.src}
                  variant="rounded"
                  sx={{
                    width: 80,
                    height: 74,
                    margin: "0 auto",
                  }}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    component="div"
                    fontSize={FontSize?.Huge}
                    fontWeight={FontWeight?.SemiBold}
                    my={1.5}
                    color={Color.TextGreen}
                  >
                    {item?.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: Color.TextSecondary,
                      lineHeight: "24px",
                      latterSpacing: "-0.3",
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
