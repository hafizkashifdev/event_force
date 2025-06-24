import { HeroSectionImage } from "@assets/about-us";
import { Container, Grid, Typography } from "@mui/material";
import { Color } from "@root/enems";
import { FontSize, FontWeight } from "@root/enems/text-size";
import "aos/dist/aos.css";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import HeroBox from "@components/hero-Box/hero-box";
const HeroSection = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000, // Animation duration (in ms)
      once: false, // Whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <HeroBox>
      <Container maxWidth="xl" data-aos="fade-up">
        <Grid container spacing={2} >
          <Grid size={{ xs: 12, md: 12 }} sx={{ mt: "100px" }}>
            <Typography
              sx={{
                fontSize: FontSize.title,
                fontWeight: FontWeight.SemiBold,
                color: Color.TextGreen,
              }}
            >
              About Us – Who We Are
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 9 }} sx={{ mt: "20px" }}>
            <Typography
              sx={{
                fontSize: FontSize.ExtraLarge,
                fontWeight: FontWeight.Medium,
                color: Color.TextSecondary,
              }}
            >
              At Event Force, we believe in empowering businesses with
              intelligent automation and streamlined solutions. We are a
              next-generation CRM and business management platform, designed to
              bring efficiency, productivity, and seamless collaboration across
              multiple business functions.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12 }} sx={{ mt: "67px" }}>
            <Image
              src={HeroSectionImage}
              alt="image"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "20px",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </HeroBox>

  );
};

export default HeroSection;
