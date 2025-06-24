"use client";
import { ProductsOperationStreamlineOperationsImage } from "@assets/products";
import HeroBox from "@components/hero-Box/hero-box";
import { LinkButton } from "@components/link-button";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import { Color } from "@root/enems";
import { FontSize, FontWeight } from "@root/enems/text-size";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const ReadyStreamLineOperations = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <HeroBox>
      <Grid container spacing={0} my={5}>
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
            >
              Ready to Streamline <br /> Your Operations?
            </Typography>
            <Typography variant="subtitle1" color={Color.LightGrey} my={1}>
              Optimise your workflows and boost team efficiency with Operations
              by Agentic Creed. From task management to automation and
              collaboration, our smart solutions help you simplify processes and
              drive productivity across your organisation.
            </Typography>
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
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Avatar
            data-aos="fade-up"
            src={ProductsOperationStreamlineOperationsImage.src}
            variant="square"
            sx={{ width: "100%", height: "100%" }}
          />
        </Grid>
      </Grid>
    </HeroBox>
  );
};
