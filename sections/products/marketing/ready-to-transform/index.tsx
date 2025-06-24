"use client";
import { ProductsReadyToTransFormImage } from "@assets/products";
import HeroBox from "@components/hero-Box/hero-box";
import { Avatar, Box, Container, Grid, Stack, Typography } from "@mui/material";
import { Color } from "@root/enems";
import { FontSize, FontWeight } from "@root/enems/text-size";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const ReadyToTransform = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <HeroBox>
      <Container maxWidth="xl" data-aos="fade-down">
        <Grid container spacing={0}>
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{ backgroundColor: Color.TextGreen }}
          >
            <Box
              data-aos="fade-up"
              sx={{
                width: "100%",
                maxWidth: "80%",
                height: "700px",
                alignContent: "center",
                mx: "auto",
              }}
            >
              <Typography
                fontSize={FontSize?.subTitle}
                fontWeight={FontWeight?.SemiBold}
                color={Color.commonWhite}
                lineHeight="58px"
              >
                Ready to Transform Your <br /> Marketing Strategy?
              </Typography>
              <Typography
                fontSize={FontSize?.ExtraLarge}
                color={Color.LightGrey}
                my={1}
              >
                Unlock the full potential of your marketing efforts with
                Marketer by Agentic Creed. Our cutting-edge features and
                dedicated support are designed to drive impactful results, no
                matter the size of your business.
              </Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Avatar
              data-aos="fade-up"
              src={ProductsReadyToTransFormImage.src}
              variant="square"
              sx={{ width: "100%", height: "100%" }}
            />
          </Grid>
        </Grid>
      </Container>
    </HeroBox>
  );
};
