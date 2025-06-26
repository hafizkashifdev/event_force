import {
  Box,
  Card,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { Color } from "@root/enems";
import { FontSize, FontWeight } from "@root/enems/text-size";
import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import HeroBox from "@components/hero-Box/hero-box";
import {
  missionDSCImage1,
  missionDSCImage2,
  missionDSCImage3,
} from "@assets/about-us";
import Image from "next/image";

const OurMission = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <HeroBox>
      <Container maxWidth="xl" data-aos="fade-up">
        <Grid container spacing={2} sx={{ padding: 2 }}>
          <Grid size={4}>
            <Typography
              variant="h4"
              align="center"
              gutterBottom
              sx={{
                border: "2px solid #67B6B2",
                padding: 1,
                backgroundColor: "#67B6B2",
                color: "white",
              }}
            >
              OUR MISSION
            </Typography>
          </Grid>

          <Grid size={12}>
            <Typography variant="body1" sx={{ color: "#333" }}>
              To deliver seamless, high-quality transportation and logistical
              solutions that elevate events and experiences across Saudi Arabia,
              with a focus on professionalism, precision, and customer
              satisfaction.
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ padding: 2 }}>
          <Grid size={4}>
            <Typography
              align="center"
              gutterBottom
              sx={{
                border: "2px solid linear-gradient(to right, #d38c3a, #8c4f10)",
                padding: 1,
                background: "linear-gradient(to right, #d38c3a, #8c4f10)",
                color: "white",
              }}
            >
              OUR VISION
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{
                color: "#333",
              }}
            >
              To become the leading name in event logistics and VIP
              transportation in the Kingdom, known for our reliability,
              excellence in service, and commitment to supporting Saudi Arabia’s
              growing entertainment and hospitality sectors.
            </Typography>
          </Grid>

          <Grid size={8}>
            <Image
              src={missionDSCImage1}
              alt="Flag"
              width={300}
              height={200}
              style={{ objectFit: "cover", width: "100%", height: "200px" }}
            />
          </Grid>
        </Grid>

        <Grid container spacing={2} justifyContent="center">
          <Grid size={{ lg: 4, xs: 12 }}>
            <Card>
              <CardMedia>
                <Image
                  src={missionDSCImage2}
                  alt="Car"
                  width={100}
                  height={100}
                  layout="responsive"
                />
              </CardMedia>
            </Card>
          </Grid>
          <Grid size={{ lg: 8, xs: 12 }}>
            <Card>
              <CardMedia>
                <Image
                  src={missionDSCImage3}
                  alt="Car"
                  width={300}
                  height={200}
                  layout="responsive"
                />
              </CardMedia>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </HeroBox>
  );
};

export default OurMission;
