"use client";
import { ProductCallCenterUserImage } from "@assets/products";
import FooterCard from "@components/footer-card";
import HeroBox from "@components/hero-Box/hero-box";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import { Color, FontSize, FontWeight } from "@root/enems";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export const OperationManagerMessage = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000, // Animation duration (in ms)
      once: false, // Whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <>
      <HeroBox
        customStyles={{
          backgroundColor: Color?.bgColor,
          my: 15,
          p: { xs: 2, sm: 5, md: 10 },
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              width: "100%",
              maxWidth: { xs: "100%", sm: "70%" },
              textAlign: "center",
              mx: "auto",
              mb: 10,
            }}
            data-aos="fade-up"
          >
            <Typography
              fontSize={FontSize?.largeTitle}
              fontWeight={FontWeight?.SemiBold}
              color={Color.TextGreen}
            >
              What Our Users Say About <br /> Call Center{" "}
            </Typography>
          </Box>
          <Grid container spacing={5} data-aos="fade-up">
            <Grid
              size={{ xs: 12, md: 6 }}
              justifyItems={{ xs: "center", sm: "center", md: "right" }}
            >
              <Avatar
                src={ProductCallCenterUserImage.src}
                variant="square"
                sx={{
                  width: {
                    xs: "100%",
                    sm: "400px",
                    md: "542px",
                    lg: "542px",
                    xl: "542px",
                  },
                  height: {
                    xs: "auto",
                    sm: "350px",
                    md: "474px",
                    lg: "474px",
                    xl: "474px",
                  },
                  borderRadius: "20px",
                }}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }} alignContent="center">
              <Box
                sx={{
                  width: "100%",
                  maxWidth: "70%",
                  mx: { xs: "auto", sm: "auto", md: "73px",lg: "73px",xl: "73px" },
                  textAlign: { xs: "center", sm: "center", md: "left",lg: "left",xl: "left" },
                }}
              >
                <Typography
                  fontSize={FontSize?.ExtraHuge}
                  color={Color.TextGreen}
                  my={1}
                  lineHeight="34px"
                  fontWeight={FontWeight?.SemiBold}
                >
                  “Integrating Agentic Creed has transformed our call centre
                  operations. The PowerDialler has helped us reach more leads,
                  and our response times have drastically improved. We're
                  closing deals faster than ever!”
                </Typography>
                <Typography
                  fontSize={FontSize?.Huge}
                  fontWeight={FontWeight?.SemiBold}
                  color={Color.TextGreen}
                  mt={2}
                >
                  Harry
                </Typography>
                <Typography
                  fontSize={FontSize?.Large}
                  color={Color.TextSecondary}
                  fontWeight={FontWeight?.Regular}
                >
                  Operations Manager
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </HeroBox>
      <HeroBox>
        <Container maxWidth="xl">
          <FooterCard
            title="Get Started with Agentic Creed"
            subTitle=""
            desc="Join thousands of businesses using smart solutions to streamline marketing, sales, customer service, and operations."
            hasHighlightedText={false}
            hasBtn={true}
          />
        </Container>
      </HeroBox>
    </>
  );
};
