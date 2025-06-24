"use client";
import {
  ProductsFeatureIconFiveImage,
  ProductsFeatureIconFourImage,
  ProductsFeatureIconOneImage,
  ProductsFeatureIconSixImage,
  ProductsFeatureIconThreeImage,
  ProductsFeatureIconTwoImage,
} from "@assets/products";
import HeroBox from "@components/hero-Box/hero-box";
import { Avatar, Box, CardContent, Container, Grid, Typography } from "@mui/material";
import { Color } from "@root/enems";
import { FontSize, FontWeight } from "@root/enems/text-size";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const powerFullFeatures = [
  {
    id: 1,
    src: ProductsFeatureIconOneImage,
    title: "Campaign Creation",
    description:
      "Create impactful marketing campaigns with ease using our intuitive and user-friendly campaign builder. Customise your messages to connect with your target audience effectively, driving engagement and boosting conversions.",
  },
  {
    id: 2,
    src: ProductsFeatureIconTwoImage,
    title: "Automation",
    description:
      "Streamline your marketing processes with intelligent automation. Effortlessly set up drip campaigns, personalised follow-ups, and trigger-based emails to nurture leads and strengthen customer relationships.",
  },
  {
    id: 3,
    src: ProductsFeatureIconThreeImage,
    title: "Analytics & Reporting",
    description:
      "Gain actionable insights with comprehensive analytics and reporting tools. Monitor key performance metrics, track conversion rates, and leverage data-driven insights to refine your marketing strategies for optimal results.",
  },
  {
    id: 4,
    src: ProductsFeatureIconFourImage,
    title: "Social Media Integration",
    description:
      "Efficiently manage and schedule your social media posts across multiple platforms. Engage with your audience, monitor interactions, and build a strong digital presence to expand your brand’s reach.",
  },
  {
    id: 5,
    src: ProductsFeatureIconFiveImage,
    title: "Lead Tracking & Segmentation",
    description:
      "Simplify lead management with powerful tracking and segmentation tools. Monitor customer interactions and behaviours, then segment leads based on interests and engagement levels to deliver tailored messaging that resonates.",
  },
  {
    id: 6,
    src: ProductsFeatureIconSixImage,
    title: "Personalisation",
    description:
      "Deliver meaningful customer experiences by leveraging dynamic content and personalised recommendations. Enhance engagement, foster customer loyalty, and drive conversions with content that speaks directly to individual preferences.",
  },
];
export const PowerFullFeatures = () => {
    useEffect(() => {
      Aos.init({
        duration: 1000,
        once: false, 
      });
    }, []);
  return (
    <HeroBox
     data-aos="fade-up">
       <Container maxWidth="xl" data-aos="fade-down">
      <Box
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
          Powerful Features to Elevate Your <br /> Marketing Strategy
        </Typography>
      </Box>
      <Grid container spacing={2} mt={8}>
        {powerFullFeatures?.map((item: any) => {
          return (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item?.id}>
              <Box
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
                    component="div"
                    fontSize={FontSize?.Huge}
                    fontWeight={FontWeight?.SemiBold}
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
        </Container>
    </HeroBox>
  );
};
