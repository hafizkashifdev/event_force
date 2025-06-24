"use client";
import {
  ProductsBenefitsImage,
  ProductsCollaborationImage,
  ProductsCustomerEngagementImage,
  ProductsDataDrivenImage,
  ProductsEfficiencyImage,
} from "@assets/products";
import Aos from "aos";
import "aos/dist/aos.css";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import { Color } from "@root/enems";
import { FontSize, FontWeight } from "@root/enems/text-size";
import { useEffect } from "react";
import HeroBox from "@components/hero-Box/hero-box";
import { m } from "framer-motion";

const benefitsData = [
  {
    id: 1,
    src: ProductsEfficiencyImage,
    flexDirection: "row",
    title: "Maximised Efficiency",
    description:
      "Marketer’s all-in-one platform streamlines your marketing operations, reducing the need for multiple tools. By centralising your efforts, you save valuable time, simplify workflows, and enhance overall productivity.",
  },
  {
    id: 2,
    src: ProductsDataDrivenImage,
    flexDirection: "row-reverse",
    title: "Data-Driven Insights",
    description:
      "Empower your decision-making with comprehensive, real-time data insights. Understand campaign performance, track key metrics, and refine your strategies to achieve superior results and improved ROI.",
  },
  {
    id: 3,
    src: ProductsCustomerEngagementImage,
    flexDirection: "row",
    title: "Enhanced Customer Engagement",
    description:
      "Deliver personalised experiences that captivate your audience. By tailoring your marketing content to individual preferences, you can strengthen customer relationships, boost engagement, and foster brand loyalty.",
  },
  {
    id: 4,
    src: ProductsCollaborationImage,
    flexDirection: "row-reverse",
    title: "Seamless Collaboration",
    description:
      "Enable effortless teamwork with Marketer’s collaborative tools. Share ideas, coordinate campaigns, and manage content in real-time, ensuring your marketing team stays aligned and efficient.",
  },
];

export const Benefits = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <HeroBox
      customStyles={{
        mt: 15,
      }}
    >
      <Box
        data-aos="fade-up"
        sx={{ width: "100%", maxWidth: "70%", textAlign: "center", mx: "auto" }}
      >
        <Typography
          fontSize={FontSize?.subTitle}
          fontWeight={FontWeight?.SemiBold}
          color={Color.TextGreen}
        >
          Benefits of Marketing by Event Force
        </Typography>
        <Typography variant="subtitle1" color={Color.TextSecondary} my={1}>
          Unlock your marketing potential with a powerful platform designed to
          deliver <br /> exceptional results.
        </Typography>
      </Box>
      <Container maxWidth="xl">
      <Box
        sx={{
          opacity: 0.9,
          px: 5,
          backgroundImage: `url(${ProductsBenefitsImage.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
          {benefitsData?.map((item: any) => {
            return (
              <Grid
                container
                spacing={5}
                key={item?.id}
                flexDirection={item?.flexDirection}
                mt={8}
                py={8}
              >
                <Grid
                  data-aos="fade-up"
                  size={{ xs: 12, md: 6 }}
                  alignContent="center"
                >
                  <Box sx={{ width: "100%", maxWidth: "80%" }}>
                    <Typography
                      fontSize={FontSize?.subTitle}
                      fontWeight={FontWeight?.SemiBold}
                      color={Color.TextGreen}
                    >
                      {item?.title}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color={Color.TextSecondary}
                      my={1}
                    >
                      {item?.description}
                    </Typography>
                  </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }} justifyItems="center">
                  <Avatar
                    data-aos="zoom-in"
                    src={item?.src.src}
                    variant="square"
                    sx={{ width: "85%", height: "100%" }}
                  />
                </Grid>
              </Grid>
            );
          })}
      </Box>
        </Container>
    </HeroBox>
  );
};
