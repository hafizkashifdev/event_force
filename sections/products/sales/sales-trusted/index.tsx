"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useEffect } from "react";
import { Color } from "@root/enems";
import { FontSize, FontWeight } from "@root/enems/text-size";
import { ProductsSalesTrustedSectionImage } from "@assets/products";
import { Box, Grid, List, ListItem, Stack, Typography } from "@mui/material";
import HeroBox from "@components/hero-Box/hero-box";

const salesReportsData = [
  {
    id: 1,
    title: "Built for Sales Teams",
    description:
      "-Empower your team with tools that streamline deal closures and boost productivity.",
  },
  {
    id: 2,
    title: "Seamless Integrations",
    description:
      "-Connect effortlessly with your favorite CRMs, email platforms, and financial systems.",
  },
  {
    id: 3,
    title: "Data-Driven Insights ",
    description:
      "-Make informed decisions using real-time analytics and accurate forecasting.",
  },
];

export const SalesTrusted = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, 
    });
  }, []);
  return (
    <HeroBox sx={{ backgroundColor: Color?.bgColor, my: 10 }} data-aos="fade-up">
      <Box sx={{ p: { xs: 2, sm: 5, md: 10 } }}>
        <Grid container spacing={1}>
          <Grid size={{ xs: 12, md: 12, lg: 6 }} textAlign="center">
            <Image
              src={ProductsSalesTrustedSectionImage.src}
              width={100}
              height={100}
              alt="professional image"
              style={{
                width: "100%",
                maxWidth: "590px",
                maxHeight: "580",
                height: "100%",
              }}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 12, lg: 6 }} alignContent="center">
            <Stack
              flexDirection="column"
              alignItems="center"
              gap="36px"
              flexShrink="0"
            >
              <Box>
                <Typography
                  fontSize="40px"
                  fontWeight={FontWeight?.SemiBold}
                  color={Color.TextGreen}
                >
                  Event Force is Trusted Sales Professionals Worldwide
                </Typography>
              </Box>
              <Box>
                <Typography variant="subtitle1" color={Color.TextSecondary}>
                  Join a growing community of sales teams, businesses, and
                  professionals who rely on AgenticCreed to streamline their
                  sales operations.
                </Typography>
              </Box>
              <List sx={{ listStyleType: "disc" }}>
                {salesReportsData?.map((item: any) => {
                  return (
                    <ListItem sx={{ display: "list-item" }} key={item?.id}>
                      <Typography
                        fontSize={FontSize?.ExtraLarge}
                        fontWeight={FontWeight?.Bold}
                        color={Color.TextSecondary}
                        component="span"
                      >
                        {item?.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        color={Color.TextSecondary}
                        component="span"
                      >
                        {item?.description}
                      </Typography>
                    </ListItem>
                  );
                })}
              </List>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </HeroBox>
  );
};
