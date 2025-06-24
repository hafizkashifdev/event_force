"use client";
import {
  ProductsOperationTotalIconFourImage,
  ProductsOperationTotalIconOneImage,
  ProductsOperationTotalIconThreeImage,
  ProductsOperationTotalIconTwoImage,
  ProductsOperationTotalOperationalImage,
} from "@assets/products";
import { LinkButton } from "@components/link-button";
import { Avatar, Box, Grid, Stack, Typography } from "@mui/material";
import { Color } from "@root/enems";
import { FontSize, FontWeight } from "@root/enems/text-size";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroBox from "@components/hero-Box/hero-box";

const totalOperationalData = [
  {
    id: 1,
    src: ProductsOperationTotalIconOneImage,
    title: "Simplify day-to-day operations",
  },
  {
    id: 2,
    src: ProductsOperationTotalIconTwoImage,
    title: "Eliminate tool-switching and unify scattered information",
  },
  {
    id: 3,
    src: ProductsOperationTotalIconThreeImage,
    title: "Improve cross-team collaboration",
  },
  {
    id: 4,
    src: ProductsOperationTotalIconFourImage,
    title: "Drive consistency and scalability",
  },
];

export const TotalOperational = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, 
    });
  }, []);
  return (
    <HeroBox>
      <Grid container spacing={5}>
        <Grid size={{ xs: 12, md: 12, lg: 6 }}>
          <Image
          data-aos="flip-right"
            src={ProductsOperationTotalOperationalImage.src}
            width={100}
            height={100}
            alt="professional image"
            style={{ width: "100%", height: "700px" }}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 12, lg: 6 }}>
          <Stack
          data-aos="fade-up"
            flexDirection="column"
            alignItems="flex-start"
            gap="10px"
            flexShrink="0"
          >
            <Box>
              <Typography
                fontSize="42px"
                fontWeight={FontWeight?.SemiBold}
                color={Color.TextGreen}
              >
                One Platform. Total Operational Control.
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="body1"
                sx={{
                  color: Color.TextSecondary,
                  lineHeight: "24px",
                  latterSpacing: "-0.3",
                }}
              >
                Bring every aspect of your operations together for a more
                connected, productive business. <br />
                <br /> Agentic Creed empowers you to manage your entire
                operational ecosystem from one unified platform. From task
                delegation and document handling to workflow automation and team
                collaboration everything is seamlessly connected. No more
                juggling between multiple tools or chasing disconnected
                processes. With Agentic Creed, you gain full visibility, better
                control, and the flexibility to adapt as your business grows.
              </Typography>
            </Box>
            <Box>
              {totalOperationalData?.map((item: any) => {
                return (
                  <Stack
                    flexDirection="row"
                    alignItems="center"
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
                        fontSize={FontSize?.ExtraLarge}
                        fontWeight={FontWeight?.SemiBold}
                        color={Color.TextGreen}
                      >
                        {item?.title}
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
                  fontSize: "body1",
                  textTransform: "capitalize",
                  border: "none",
                  borderRadius: "8px",
                  my: 2,
                }}
                linkProps={{
                  target: "_blank",
                }}
              >
                Get Started
              </LinkButton>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </HeroBox>
  );
};
