"use client";
import { Box, Container, Grid, Typography } from "@mui/material";
import { Color } from "@root/enems";
import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import HeroBox from "@components/hero-Box/hero-box";

const Career = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000, // Animation duration (in ms)
      once: false, // Whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <HeroBox>
      <Container data-aos="fade-up">
        <Grid container spacing={2}>
          <Grid size={{ xs: 12 }} sx={{ mt: "100px" }}>
            <Box>
              <Typography
                sx={{
                  fontSize: "60px",
                  fontWeight: 600,
                  textAlign: "center",
                  color: Color.TextGreen,
                }}
              >
                Careers
              </Typography>
              <Box>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: 400,
                    textAlign: "center",
                    color: Color.TextSecondary,
                    mb: "50px",
                  }}
                >
                  At Agentic Creed, we believe in innovation, collaboration, and
                  limitless possibilities. Our team is passionate about empowering
                  businesses with cutting-edge CRM solutions, and we are always
                  looking for talented professionals who share our vision. If you’re
                  ready to make an impact, grow your career, and be part of
                  something revolutionary, you’re in the right place!
                </Typography>
              </Box>
              <iframe
                // src="https://jobs.orcaloholding.co.uk/jobs/companies/OLblg9eNjG2ALrk8vRB3DadPpE"
                src="https://recruiting-stg.personnellibrary.co.uk//job-boards?boardName=airAppleExternalBoard-1716226310381"
                width="100%"
                height="100%"
                // scrolling="no"
                title="Jobs Widget"
                style={{ border: "none", minHeight: "950px" }}
              ></iframe>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </HeroBox>

  );
};

export default Career;
