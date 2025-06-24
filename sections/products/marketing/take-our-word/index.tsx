"use client";
import { ProductsJackPicImage } from "@assets/products";
import HeroBox from "@components/hero-Box/hero-box";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import { Color } from "@root/enems";
import { FontSize, FontWeight } from "@root/enems/text-size";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const TakeOurWord = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <Container maxWidth="xl" data-aos="fade-down">
      <HeroBox
        data-aos="fade-up"
        customStyles={{
          backgroundColor: Color?.bgColor,
          py: 15,
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: { xs: "100%", sm: "70%" },
            textAlign: "center",
            mx: "auto",
            mb: 10,
          }}
        >
          <Typography
            fontSize={FontSize?.subTitle}
            fontWeight={FontWeight?.SemiBold}
            color={Color.TextGreen}
          >
            Don’t Just Take Our Word for It
          </Typography>
          <Typography variant="subtitle1" color={Color.TextSecondary} my={1}>
            We’ve designed Agentic Creed to empower businesses at every stage of
            their journey. With innovative solutions and seamless automation,
            we’re committed to delivering exceptional results that drive growth
            and success.
          </Typography>
        </Box>
        <Grid container spacing={1}>
          <Grid size={{ xs: 12, sm: 12, md: 6 }} justifyItems="center">
            <Avatar
              src={ProductsJackPicImage.src}
              variant="square"
              sx={{ width: "85%", height: "100%" }}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 6 }} alignContent="center">
            <Box sx={{ width: "100%", maxWidth: "70%",px:5 }}>
              <Typography
                fontSize={FontSize?.ExtraHuge}
                color={Color.TextGreen}
                my={1}
                lineHeight="34px"
              >
                “Agentic Creed has transformed the way we manage marketing
                campaigns. The intuitive platform allows us to create, track,
                and optimise campaigns with ease. The powerful analytics tools
                have helped us turn complex data into actionable insights,
                saving us countless hours.”
              </Typography>
              <Typography
                variant="h6"
                fontWeight={FontWeight?.SemiBold}
                color={Color.TextGreen}
                mt={2}
              >
                Jack
              </Typography>
              <Typography variant="body1" color={Color.TextSecondary}>
                TechMatter
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </HeroBox>
    </Container>
  );
};
