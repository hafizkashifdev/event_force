"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { ProductsContractsHeroImage } from "@assets/products";
import { LinkButton } from "@components/link-button";
import { Avatar, Box, Chip, Container, Grid, Typography } from "@mui/material";
import { Color } from "@root/enems";
import { FontSize, FontWeight } from "@root/enems/text-size";
import { useEffect } from "react";
import { AutoCounter } from "@components/auto-counter";
import HeroBox from "@components/hero-Box/hero-box";

export const ContractsHeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <HeroBox customStyles={{ p: { xs: 2, sm: 5, md: 10 } }}>
      <Container maxWidth="xl">
      <Grid container spacing={0} my={5}>
        <Grid size={{ sm: 12, md: 6, lg: 6, xl: 6 }} data-aos="fade-up">
          <Box>
            <Chip
              label="Agentic Creed Contracts"
              sx={{
                color: Color?.commonWhite,
                backgroundColor: Color.primaryMain,
                borderRadius: "48px",
                fontSize: FontSize?.Medium,
                fontWeight: FontWeight?.SemiBold,
                p: "12px",
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
              Contracts
            </Typography>

            <Typography
              variant="subtitle1"
              color={Color.TextSecondary}
              my={3}
              lineHeight="28px"
            >
              Tired of complex paperwork, delays, and contract mismanagement?
              With Event Force Contracts, you can create, manage, and automate
              contracts in a fully digital ecosystem. Whether you’re handling
              corporate deals, rental agreements, HR contracts, or private
              transactions, our system ensures security, compliance, and
              efficiency every step of the way.
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
                  <AutoCounter start={0} end={195} speed={20} />
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
            src={ProductsContractsHeroImage.src}
            variant="square"
            sx={{
              width: { xs: "100%", sm: "90%", md: "100%", lg: "100%" },
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
      </Container>
    </HeroBox>
  );
};
