"use client";
import { ProductsServicesGoalsImage } from "@assets/products";
import { LinkButton } from "@components/link-button";
import { Box, Chip, Grid, Stack, Tooltip, Typography } from "@mui/material";
import { Color } from "@root/enems";
import { FontSize, FontWeight } from "@root/enems/text-size";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroBox from "@components/hero-Box/hero-box";

export const ServicesGoalsSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <HeroBox data-aos="fade-up">
      <Grid
        container
        rowSpacing={5}
        my={15}
        flexDirection={{ sm: "column-reverse", md: "row" }}
      >
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 6 }} textAlign="center">
          <Image
            src={ProductsServicesGoalsImage.src}
            width={100}
            height={100}
            alt="professional image"
            style={{ width: "85%", height: "100%" }}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 6 }} alignContent="center">
          <Stack flexDirection="column" gap="36px" flexShrink="0">
            <Box>
              <Tooltip
                title="We focus on your ultimate goal to complete"
                placement="top"
                enterTouchDelay={0}
                leaveTouchDelay={3000}
              >
                <Chip
                  label="We focus on your ultimate goal to complete"
                  sx={{
                    color: Color?.commonWhite,
                    backgroundColor: Color.primaryMain,
                    p: 2.5,
                    borderRadius: "57px",
                    fontSize: FontSize?.Medium,
                  }}
                />
              </Tooltip>
            </Box>
            <Box>
              <Typography
                variant="h4"
                fontWeight={FontWeight?.SemiBold}
                color={Color.TextGreen}
                my={3}
              >
                Service Strategy & Goal Completion
              </Typography>
              <Typography
                variant="subtitle1"
                color={Color.TextSecondary}
                // my={3}
                lineHeight="28px"
              >
                Maximise your service efficiency with a streamlined strategy.
                Event Force helps you optimise operations, automate processes,
                and improve customer satisfaction.
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="subtitle1"
                color={Color.TextSecondary}
                my={0.5}
                lineHeight="28px"
              >
                🔹 Service Dashboard Overview
              </Typography>
              <Typography
                variant="subtitle1"
                color={Color.TextSecondary}
                my={0.5}
                lineHeight="28px"
              >
                🔹 Customisable Workflows for Tickets & Assets
              </Typography>
              <Typography
                variant="subtitle1"
                color={Color.TextSecondary}
                my={0.5}
                lineHeight="28px"
              >
                🔹 Real-time Customer Portal Access
              </Typography>
            </Box>
            <Box>
              <LinkButton
                link="/about-us"
                variant="outlined"
                customStyles={{
                  color: Color?.commonWhite,
                  backgroundColor: Color.primaryMain,
                  fontSize: FontSize?.Large,
                  textTransform: "capitalize",
                  border: "none",
                  borderRadius: "8px",
                  // my: 2,
                }}
              >
                About Us
              </LinkButton>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </HeroBox>
  );
};
