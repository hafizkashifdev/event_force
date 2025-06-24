import { shakeHandImage } from "@assets/about-us";
import { Container, Grid, Typography } from "@mui/material";
import { Color } from "@root/enems";
import { FontSize, FontWeight } from "@root/enems/text-size";
import Image from "next/image";
import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import HeroBox from "@components/hero-Box/hero-box";

const Innovation = () => {
  const ListItems = [
    {
      id: 1,
      title: "Continuous Innovation ",
      description:
        "  Evolving with cutting-edge solutions to meet dynamic business needs.",
    },
    {
      id: 2,
      title: "Customer Success",
      description:
        " Empowering businesses to maximise efficiency and achieve their goals.",
    },
    {
      id: 3,
      title: "Excellence & Reliability",
      description:
        "Providing a high-performance, scalable, and secure platform for seamless",
    },
  ];

  useEffect(() => {
    Aos.init({
      duration: 1000, // Animation duration (in ms)
      once: false, // Whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <HeroBox>
      <Container maxWidth="xl" data-aos="fade-up" sx={{ mt: '50px' }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 12, lg: 6 }} sx={{ mt: "50px", display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Image
              src={shakeHandImage}
              alt="image"
              style={{ maxWidth: 'auto', width: '100%', objectFit: 'contain' }}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 12, lg: 6 }} mt={{ md: 5, sm: 2 }}>
            <Typography
              sx={{
                fontSize: "42px",
                fontWeight: FontWeight.Bold,
                color: Color.TextGreen,
              }}
            >
              Our Commitment: Driving Success Through Innovation & Excellence
            </Typography>
            <Typography
              sx={{
                fontSize: FontSize.ExtraLarge,
                fontWeight: FontWeight.Regular,
                color: Color.TextSecondary,
                mt: '40px',
                maxWidth: '631px'

              }}
            >
              At Agentic Creed, our commitment extends beyond just providing a CRM
              solution—we strive to empower businesses, streamline operations, and
              enhance productivity through cutting-edge technology. Our dedication
              is built on three key pillars:
            </Typography>

            {ListItems.map((item) => (
              <ul key={item.id}>
                <li
                  style={{ fontSize: "18px", fontWeight: 700, color: "#3C4A47" }}
                >
                  {item.title}
                  <Typography
                    component="span"
                    sx={{
                      fontSize: FontSize.ExtraLarge,
                      fontWeight: FontWeight.Regular,
                      color: Color.TextSecondary,
                      maxWidth: '631px'

                    }}
                  >
                    – {item.description}
                  </Typography>
                </li>
              </ul>
            ))}
          </Grid>
        </Grid>
      </Container>
    </HeroBox>

  );
};

export default Innovation;
