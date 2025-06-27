import { HeroSectionImage, missionDSCImage2, missionDSCImage3 } from "@assets/about-us";
import { Box, Container, Grid, Typography } from "@mui/material";
import { Color } from "@root/enems";
import { FontSize, FontWeight } from "@root/enems/text-size";
import "aos/dist/aos.css";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import HeroBox from "@components/hero-Box/hero-box";
import SlideUpInView from "@components/animations/animation-scroll/slide-up-in-view";
import { CounterInView } from "@components/animations/animation-scroll/counter-in-view";
import ScaleInView from "@components/animations/animation-scroll/scale-in-view";
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
          <Grid size={{ xs: 12, md: 12 }} sx={{ mt: "120px" }}>
            <ScaleInView>
          <Typography
  sx={{
    fontSize: {
      xs: '2.5rem', // Custom rem for small screens (adjust as needed)
      sm: FontSize.title, // Original font size for larger screens
    },
    fontWeight: FontWeight.SemiBold,
    color: Color.TextGreen,
  }}
>
  About Us – Who We Are
</Typography></ScaleInView>
          </Grid>
          <Grid size={{ xs: 12, md: 9 }} sx={{ mt: "20px" }}>
            <SlideUpInView>
            <Typography
              sx={{
                fontSize: FontSize.ExtraLarge,
                fontWeight: FontWeight.Medium,
                color: Color.TextSecondary,
              }}
            >
              Event Force is a full service professional event management company with more than 10 years of ex- perience, specializing in the creation of customized events for corporate or personal clients, starting with conception, going through planning, design and ending with execution.
            </Typography></SlideUpInView>
          </Grid>
         <Grid size={{ xs: 12 }} sx={{ mt: "20px" }}>
      <SlideUpInView>
<Box
          sx={{
            width: "100%",
            aspectRatio: "1200 / 500", // Match the image's native aspect ratio
            maxHeight: { xs: "300px", sm: "500px" }, // Responsive max-height
            borderRadius: "20px",
            overflow: "hidden", // Ensure image respects border radius
          }}
        >
          <Image
            src={missionDSCImage3}
            alt="image"
            style={{
              width: "100%",
              height: "100%", // Fill the parent Box
              objectFit: "cover", // Ensure no stretching
              borderRadius: "20px",
            }}
            sizes="(max-width: 600px) 100vw, 50vw"
            fill // Replace layout="responsive" with fill for better control
            priority // Optional: prioritize loading for above-the-fold images
          />
        </Box>
      </SlideUpInView>
    </Grid>
        </Grid>
      </Container>
    </HeroBox>

  );
};

export default HeroSection;
