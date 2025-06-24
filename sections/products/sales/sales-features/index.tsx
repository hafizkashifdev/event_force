"use client";
import {
  ProductsSalesDealManagementImage,
  ProductsSalesPipelineImage,
  ProductsSalesTeamCollaborationImage,
  ProductsSalesFollowUpsImage,
  ProductsSalesInvoicesImage,
  ProductsSalesAnalyticsImage,
} from "@assets/products";
import { Avatar, Box, CardContent, Grid, Typography } from "@mui/material";
import { Color } from "@root/enems";
import { FontSize, FontWeight } from "@root/enems/text-size";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroBox from "@components/hero-Box/hero-box";
const powerFullFeatures = [
  {
    id: 1,
    src: ProductsSalesDealManagementImage,
    title: "Deal & Contact Management ",
    description:
      "Organise and track Deals effortlessly, ensuring seamless follow-ups.",
  },
  {
    id: 2,
    src: ProductsSalesPipelineImage,
    title: "Smart Sales Pipeline",
    description:
      "Visualise every stage of your deals, prioritise leads, and boost conversions.",
  },
  {
    id: 3,
    src: ProductsSalesTeamCollaborationImage,
    title: "Task & Team Collaboration",
    description:
      "Assign tasks, track progress, and enhance teamwork within the platform.",
  },
  {
    id: 4,
    src: ProductsSalesFollowUpsImage,
    title: "Automated Follow-Ups",
    description:
      "Set up automated reminders and email sequences to close deals faster.",
  },
  {
    id: 5,
    src: ProductsSalesInvoicesImage,
    title: "Quotes & Invoices",
    description:
      "Generate accurate quotes and invoices instantly with automated templates.",
  },
  {
    id: 6,
    src: ProductsSalesAnalyticsImage,
    title: "Real-time Analytics & Reports",
    description:
      "Generate accurate quotes and invoices instantly with automated templates.",
  },
];

export const SalesFeatures = () => {
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
          textAlign: "center",
        }}
      >
        <Typography
          fontSize={FontSize?.subTitle}
          fontWeight={FontWeight?.SemiBold}
          color={Color.TextGreen}
        >
          We Provide Simple, Yet Powerful Sales Features
        </Typography>
        <Typography
          variant="subtitle1"
          color={Color.TextSecondary}
          my={1}
          lineHeight="28px"
        >
          Maximise your sales potential with smart tools designed for
          efficiency, collaboration, and growth.
        </Typography>
      </Box>
      <Grid container spacing={2} m={5}>
        {powerFullFeatures?.map((item: any) => {
          return (
            <Grid size={{ xs: 12, sm: 6, md: 6 }} key={item?.id}>
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
                    width: 60,
                    height: 60,
                    margin: { xs: "0 auto", sm: "0" },
                  }}
                />
                <CardContent sx={{ px: 0 }}>
                  <Typography
                    gutterBottom
                    fontSize={FontSize?.ExtraLarge}
                    component="div"
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
    </HeroBox>
  );
};
