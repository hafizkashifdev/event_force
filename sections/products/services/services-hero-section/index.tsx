"use client";
import { ProductsServicesHeroImage } from "@assets/products";
import { AutoCounter } from "@components/auto-counter";
import HeroBox from "@components/hero-Box/hero-box";
import { LinkButton } from "@components/link-button";
import { Avatar, Box, Chip, Grid, Typography } from "@mui/material";
import { Color } from "@root/enems";
import { FontSize, FontWeight } from "@root/enems/text-size";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const ServicesHeroSection = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false, 
    });
  }, []);
  return (
    <>
      <HeroBox>
        <Grid container spacing={0} pt={15}>
          <Grid size={{ sm: 12, md: 6, lg: 6, xl: 6 }} data-aos="fade-up">
            <Box>
              <Chip
                label="Deliver Exceptional Customer Experiences"
                sx={{
                  color: Color?.commonWhite,
                  backgroundColor: Color.primaryMain,
                  p: 3,
                  borderRadius: "57px",
                  fontSize: FontSize?.Medium,
                }}
              />
            </Box>
            <Box>
              <Typography
                variant="h2"
                fontWeight={FontWeight?.SemiBold}
                color={Color.TextGreen}
                my={3}
              >
                Services
              </Typography>

              <Typography
                variant="subtitle1"
                color={Color.TextSecondary}
                my={3}
                lineHeight="28px"
              >
                Welcome to Services, the ultimate customer service and support
                solution by Event Force. Designed to streamline customer
                interactions, automate workflows, and provide top-tier support,
                Services empowers businesses to enhance customer satisfaction
                while maintaining efficiency.
              </Typography>
            </Box>
            <Box>
              <LinkButton
                link="/contact"
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
              >
                Contact Us
              </LinkButton>
            </Box>
            <Grid
              container
              spacing={2}
              height="35%"
              alignContent="center"
              display={{ xs: "none", sm: "none", md: "none", lg: "flex" }}
            >
              <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }}>
                <Box data-aos="fade-up">
                  <Typography
                    variant="h5"
                    fontWeight={FontWeight?.SemiBold}
                    color={Color.TextGreen}
                  >
                    <AutoCounter start={0} end={195} speed={20}/>
                    k+ Active Users
                  </Typography>
                  <Typography
                    variant="body1"
                    color={Color.TextSecondary}
                    lineHeight="24px"
                    mt={1.5}
                  >
                    Empowering businesses with seamless customer service
                    solutions, ensuring smooth interactions and timely support.
                  </Typography>
                </Box>
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }}>
                <Box data-aos="fade-up">
                  <Typography
                    variant="h5"
                    fontWeight={FontWeight?.SemiBold}
                    color={Color.TextGreen}
                  >
                    <AutoCounter start={0} end={400} speed={10} />
                    k+ Saved in Operational Costs
                  </Typography>
                  <Typography
                    variant="body1"
                    color={Color.TextSecondary}
                    lineHeight="24px"
                    mt={1.5}
                  >
                    Automating workflows and reducing manual processes, helping
                    businesses save time and resources.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            size={{ sm: 12, md: 6, lg: 6, xl: 6 }}
            justifyItems="center"
            data-aos="fade-up"
          >
            <Avatar
              src={ProductsServicesHeroImage.src}
              variant="square"
              sx={{
                width: { xs: "60%", sm: "60%", md: "100%", lg: "70%" },
                height: "100%",
              }}
            />
          </Grid>
          <Grid
            size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }}
            display={{ xs: "block", sm: "block", md: "block", lg: "none" }}
          >
            <Box data-aos="fade-up">
              <Typography
                variant="h5"
                fontWeight={FontWeight?.SemiBold}
                color={Color.TextGreen}
              >
                <AutoCounter start={0} end={195} speed={20} />
                k+ Active Users
              </Typography>
              <Typography
                variant="body1"
                color={Color.TextSecondary}
                lineHeight="24px"
                mt={1.5}
              >
                Empowering businesses with seamless customer service solutions,
                ensuring smooth interactions and timely support.
              </Typography>
            </Box>
          </Grid>
          <Grid
            size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }}
            display={{ xs: "block", sm: "block", md: "block", lg: "none" }}
          >
            <Box data-aos="fade-up">
              <Typography
                variant="h5"
                fontWeight={FontWeight?.SemiBold}
                color={Color.TextGreen}
              >
                <AutoCounter start={0} end={400} speed={10} />
                k+ Saved in Operational Costs
              </Typography>
              <Typography
                variant="body1"
                color={Color.TextSecondary}
                lineHeight="24px"
                mt={1.5}
              >
                Automating workflows and reducing manual processes, helping
                businesses save time and resources.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </HeroBox>
    </>
  );
};
