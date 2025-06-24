"use client";
import {
  ProductsSalesTeamMemberOneImage,
  ProductsServicesReviewOneImage,
} from "@assets/products";
import HeroBox from "@components/hero-Box/hero-box";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Chip,
  Grid,
  Rating,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { Color, FontSize } from "@root/enems";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const aboutServicesData = [
  {
    id: 1,
    src: ProductsServicesReviewOneImage,
    clientName: "Emily Roberts",
    designation: "Operations Manager, Nexa Solutions",
    star: 5,
    description:
      '"Agentic Creed Services has completely transformed how we handle service requests and asset management. The intuitive dashboard and automated workflows have boosted our efficiency and customer satisfaction!"',
  },
  {
    id: 2,
    src: ProductsSalesTeamMemberOneImage,
    clientName: "James Carter",
    designation: "IT Director, TechWave Inc.",
    star: 5,
    description:
      '"The ticketing system and workload management features have streamlined our IT support. Response times are faster, and our clients appreciate the seamless experience!"',
  },
];

export const AboutServices = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <HeroBox sx={{ backgroundColor: Color?.bgColor }}>
      <Box
        data-aos="fade-up"
        sx={{
          textAlign: "center",
        }}
      >
        <Tooltip
          title="10,000+ Businesses Trust Agentic Creed Services"
          placement="top"
          enterTouchDelay={0}
          leaveTouchDelay={3000}
        >
          <Chip
            label="10,000+ Businesses Trust Agentic Creed Services"
            sx={{
              color: Color?.commonWhite,
              backgroundColor: Color.primaryMain,
              p: 3,
              borderRadius: "57px",
              fontSize: FontSize?.Medium,
            }}
          />
        </Tooltip>
        <Typography
          fontSize="36px"
          fontWeight="600"
          my={3}
          color={Color.TextGreen}
        >
          What Our Services Users Say About Us
        </Typography>
      </Box>
      <Grid container spacing={8} my={10}>
        {aboutServicesData?.map((item: any) => {
          return (
            <Grid size={{ xs: 12, sm: 12, md: 6 }} key={item?.id}>
              <Card
                data-aos="fade-up"
                sx={{
                  height: "100%",
                  p: 3,
                  borderRadius: "8px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                }}
              >
                <CardContent sx={{ px: 0 }}>
                  <Typography
                    variant="body1"
                    sx={{
                      color: Color.TextSecondary,
                      lineHeight: "24px",
                      letterSpacing: "-0.3px", // fixed typo from 'latterSpacing'
                    }}
                  >
                    {item?.description}
                  </Typography>
                </CardContent>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  flexWrap="wrap"
                  sx={{ mt: 2 }}
                >
                  <Stack direction="row" alignItems="center">
                    <Avatar
                      src={item?.src?.src}
                      variant="rounded"
                      sx={{
                        width: 50,
                        height: 50,
                        margin: { xs: "0 auto", sm: "0" },
                      }}
                    />
                    <Box sx={{ mx: 2 }}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontSize: "16px",
                          fontWeight: 600,
                          color: Color.TextSecondary,
                          lineHeight: "24px",
                        }}
                      >
                        {item?.clientName}
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          color: Color.TextSecondary,
                          lineHeight: "24px",
                        }}
                      >
                        {item?.designation}
                      </Typography>
                    </Box>
                  </Stack>

                  <Box>
                    <Rating
                      name="half-rating"
                      defaultValue={item?.star}
                      precision={0.5}
                      readOnly
                    />
                  </Box>
                </Stack>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </HeroBox>
  );
};
