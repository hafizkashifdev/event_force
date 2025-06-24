"use client";

import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { Color, Routes } from "@root/enems";
import { FontSize, FontWeight } from "@root/enems/text-size";
import Benefits from "./benefits";
import ExpertTeam from "./expert-team";
import Features from "./features";
import Schedule from "./schedule";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import HeroBox from "@components/hero-Box/hero-box";

const Meetings = () => {
  const router = useRouter();
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <HeroBox>
      <Box>
        <Container maxWidth="xl" data-aos="fade-up">
          <Grid container spacing={2}>
            <Grid
              size={{ xs: 12, md: 12 }}
              sx={{
                mt: "110px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: Color.primaryMain,
                  color: Color.commonWhite,
                  borderRadius: "57px",
                }}
              >
                Effortlessly Manage Your Time, Appointments, and Engagements
              </Button>
              <Typography
                sx={{
                  fontSize: FontSize.title,
                  fontWeight: FontWeight.SemiBold,
                  color: Color.TextGreen,
                  mt: "36px",
                }}
              >
                Meetings
              </Typography>

              <Typography
                sx={{
                  fontSize: FontSize.ExtraLarge,
                  fontWeight: FontWeight.Regular,
                  color: Color.TextGreen,
                  textAlign: "center",
                  mt: "24px",
                  maxWidth: '1100px',
                }}
              >
                Meetings is a powerful feature within Agentic Creed, designed to
                give you full control over your scheduling. Whether you're setting
                up client calls, team meetings, or one-to-one sessions, it
                simplifies the process and keeps your calendar well-organised.
                With its smart scheduling capabilities, Meetings eliminates
                back-and-forth emails, prevents conflicts, and ensures you stay
                focused on what truly matters building strong connections and
                boosting productivity.
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexWrap: "wrap",
                  gap: 1,
                  mt: "36px",
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: Color.primaryMain,
                    color: Color.commonWhite,
                    fontSize: FontSize.Large,
                    fontWeight: FontWeight.SemiBold,
                    p: "20px",
                    borderRadius: "8px",
                  }}
                  onClick={() => router.push(Routes.CONTACT)}
                >
                  Contact Us
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    color: Color.TextGreen,
                    fontSize: FontSize.Large,
                    fontWeight: FontWeight.SemiBold,
                    p: "20px",
                    borderRadius: "8px",
                    border: `1px solid ${Color.LightGrey}`,
                  }}
                  onClick={() => router.push('https://app.agenticcreed.ai/sign-up')}
                >

                  Get Started Now
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
        <ExpertTeam />
        <Features />
        <Benefits />
        <Schedule />
      </Box >
    </HeroBox>

  );
};

export default Meetings;
