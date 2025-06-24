import FooterCard from "@components/footer-card";
import { Container } from "@mui/material";
import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import HeroBox from "@components/hero-Box/hero-box";
const Elevate = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000, // Animation duration (in ms)
      once: false, // Whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <HeroBox>
      <Container maxWidth="xl" data-aos="fade-up">
        <FooterCard
          title="Elevate Your Business with Event Force!"
          desc="The all-in-one intelligent platform to streamline sales, services, marketing, and operations for ultimate business success!"
          hasHighlightedText={false}
          hasBtn={true}
        />
      </Container>
    </HeroBox>

  );
};

export default Elevate;
