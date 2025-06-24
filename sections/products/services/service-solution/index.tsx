"use client";
import {
  ProductsServicesAllocationImage,
  ProductsServicesGrowthImage,
  ProductsServicesImpactReportImage,
  ProductsServicesOptimizationImage,
} from "@assets/products";
import HeroBox from "@components/hero-Box/hero-box";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Chip,
  Grid,
  Typography,
} from "@mui/material";
import { Color } from "@root/enems";
import { FontSize, FontWeight } from "@root/enems/text-size";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const servicesSolutionData = [
  {
    id: 1,
    src: ProductsServicesImpactReportImage,
    title: "Service Impact Reports",
    description:
      "Get detailed insights into service performance, trends, and customer engagement, ensuring better decision-making.",
  },
  {
    id: 2,
    src: ProductsServicesGrowthImage,
    title: "Service Request Growth",
    description:
      "Scale effortlessly with our streamlined ticketing and request management system, designed for efficiency and rapid resolution.",
  },
  {
    id: 3,
    src: ProductsServicesOptimizationImage,
    title: "Customer Experience Optimisation",
    description:
      "Leverage automated workflows and real-time updates to enhance customer satisfaction.",
  },
  {
    id: 4,
    src: ProductsServicesAllocationImage,
    title: "Location-Based Service Allocation",
    description:
      "Optimise service assignments with geo-based tracking and intelligent routing, ensuring quick and effective customer support.",
  },
];

export const ServicesSolution = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <HeroBox sx={{ backgroundColor: Color?.bgColor }}>
      <Grid container spacing={8} mb={5}>
        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 8 }} data-aos="fade-up">
          <Chip
            label="GROW YOUR BUSINESS"
            sx={{
              color: Color?.commonWhite,
              backgroundColor: Color.primaryMain,
              p: 3,
              borderRadius: "57px",
              fontSize: FontSize?.Medium,
            }}
          />
          <Typography
            fontSize="36px"
            fontWeight={FontWeight?.SemiBold}
            color={Color.TextGreen}
            my={3}
          >
            Empower Your Business with Smart Service Solutions
          </Typography>
        </Grid>
        <Grid
          size={{ xs: 12, sm: 12, md: 6, lg: 4 }}
          alignContent="center"
          data-aos="fade-up"
        >
          <Typography
            fontSize={FontSize?.ExtraLarge}
            color={Color.TextSecondary}
            // my={3}
            lineHeight="28px"
          >
            We provide cutting-edge, end-to-end service solutions designed to
            maximise efficiency, enhance customer engagement, and streamline
            business operations. Our smart service solutions help organisations
            optimise their processes while delivering outstanding customer
            experiences.
          </Typography>
        </Grid>
        {servicesSolutionData?.map((item: any) => {
          return (
            <Grid
              size={{ xs: 12, sm: 6, md: 6, lg: 4, xl: 3 }}
              key={item?.id}
              data-aos="fade-up"
            >
              <Card
                sx={{
                  height: "100%",
                  // width: "100%",
                  p: 3,
                  borderRadius: "8px",
                  textAlign: { xs: "center", sm: "start" },
                  backgroundColor: Color?.commonWhite,
                  transition: "background-color 0.3s ease",
                  "&:hover": {
                    backgroundColor: Color?.primaryMain,
                  },
                  "&:hover .avatar-image": {
                    color: Color?.commonWhite,
                    backgroundColor: Color?.primaryMain,
                  },
                  "&:hover .textColor": {
                    color: Color?.commonWhite,
                  },
                }}
              >
                <Avatar
                  src={item?.src.src}
                  variant="rounded"
                  className="avatar-image"
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: "10px",
                    margin: { xs: "0 auto", sm: "0" },
                  }}
                />
                <CardContent sx={{ px: 0 }}>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    fontWeight={FontWeight?.SemiBold}
                    color={Color.TextGreen}
                    className="textColor"
                  >
                    {item?.title}
                  </Typography>
                  <Typography
                    className="textColor"
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
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </HeroBox>
  );
};
