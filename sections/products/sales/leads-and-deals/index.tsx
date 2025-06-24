"use client";
import {
  ProductsSalesLeadsAndDealsImage,
  ProductsSalesLocationImage,
  ProductsSalesVectorImage,
} from "@assets/products";
import { LinkButton } from "@components/link-button";
import { Avatar, Box, Grid, Stack, Typography } from "@mui/material";
import { Color } from "@root/enems";
import { FontSize, FontWeight } from "@root/enems/text-size";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import HeroBox from "@components/hero-Box/hero-box";

const LeadsAndDealsData = [
  {
    id: 1,
    src: ProductsSalesLocationImage,
    title: "Lead & Contact Management",
    description: "Track interactions and manage customer data effortlessly.",
  },
  {
    id: 2,
    src: ProductsSalesVectorImage,
    title: "Sales Pipeline Management",
    description: "Track interactions and manage customer data effortlessly.",
  },
  {
    id: 3,
    src: ProductsSalesVectorImage,
    title: "Task Automation",
    description: "Move deals through stages and never miss an opportunity.",
  },
];

export const LeadsAndDeals = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false, 
    });
  }, []);
  return (
    <HeroBox>
      <Grid container spacing={5}>
        <Grid size={{ xs: 12, md: 12, lg: 6 }} textAlign="center">
          <Image
            data-aos="fade-up"
            data-aos-delay={350}
            src={ProductsSalesLeadsAndDealsImage.src}
            width={100}
            height={100}
            alt="professional image"
            style={{ width: "100%", height: "100%" }}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 12, lg: 6 }} alignContent="center" data-aos="fade-up">
          <Stack
            flexDirection="column"
            alignItems="flex-start"
            gap="10px"
            flexShrink="0"
          >
            <Box>
              <Typography
                fontSize={FontSize?.subTitle}
                fontWeight={FontWeight?.SemiBold}
                color={Color.TextGreen}
              >
                We Make It Easy to Track All Leads and Deals
              </Typography>
            </Box>
            <Box>
              {LeadsAndDealsData?.map((item: any) => {
                return (
                  <Stack
                    flexDirection="row"
                    alignItems="start"
                    key={item?.id}
                    my={3}
                  >
                    <Avatar
                      src={item?.src?.src}
                      variant="square"
                      sx={{
                        width: 50,
                        height: 50,
                        mr: 4,
                      }}
                    />
                    <Box>
                      <Typography
                        variant="h6"
                        fontWeight={FontWeight?.SemiBold}
                        color={Color.TextGreen}
                      >
                        {item?.title}
                      </Typography>
                      <Typography variant="body1" color={Color.TextSecondary}>
                        {item?.description}
                      </Typography>
                    </Box>
                  </Stack>
                );
              })}
            </Box>
            <Box>
              <LinkButton
                link="https://app.agenticcreed.ai/sign-up"
                variant="outlined"
                customStyles={{
                  color: Color?.commonWhite,
                  backgroundColor: Color.primaryMain,
                  fontSize: FontSize?.Large,
                  textTransform: "capitalize",
                  border: "none",
                  borderRadius: "8px",
                  my: 2,
                }}
                linkProps={{
                  target: "_blank",
                }}
              >
                Get Started Now
              </LinkButton>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </HeroBox>
  );
};
