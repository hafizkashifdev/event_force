"use client";
import HeroBox from "@components/hero-Box/hero-box";
import {
  Avatar,
  Box,
  CardContent,
  Chip,
  Container,
  Grid,
  Tooltip,
  Typography,
} from "@mui/material";
import { Color, FontSize, FontWeight } from "@root/enems";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const contractFeaturesData = [
  {
    id: 1,
    number: "01",
    title: "Centralise Communication for Seamless Support",
    description:
      "Simplify operations and enhance customer service by consolidating communication channels and maximising sales opportunities.",
  },
  {
    id: 2,
    number: "02",
    title: "Delight Your Customers with Exceptional Service",
    description:
      "Provide fast, reliable, and personalised support with professional agents dedicated to improving satisfaction and loyalty.",
  },
  {
    id: 3,
    number: "03",
    title: "Harness Data for Strategic Decision-Making",
    description:
      "Unlock actionable insights from customer interactions to refine messaging, optimise engagement strategies, and boost sales.",
  },
  {
    id: 4,
    number: "04",
    title: "Boost Sales & Elevate Brand Reputation",
    description:
      "Drive revenue through targeted outreach, efficient outbound campaigns, and a stronger brand presence that resonates with customers.",
  },
];
export const BenefitsSection = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000, // Animation duration (in ms)
      once: false, // Whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <HeroBox customStyles={{ p: { xs: 2, sm: 5, md: 10 } }} mt={5}>
      <Container maxWidth="xl">
      <Box
        sx={{ width: "100%", maxWidth: "70%", textAlign: "center", mx: "auto" }}
        data-aos="fade-up"
      >
        <Tooltip
          title="How Event Force Call Centre Empowers Your Business"
          placement="top"
          enterTouchDelay={0}
          leaveTouchDelay={3000}
        >
          <Chip
            label="How Event Force Call Centre Empowers Your Business"
            sx={{
              color: Color?.commonWhite,
              backgroundColor: Color.primaryMain,
              borderRadius: "48px",
              fontSize: FontSize?.Medium,
              fontWeight: FontWeight?.SemiBold,
              p: "15px",
            }}
          />
        </Tooltip>
        <Typography
          fontSize={FontSize?.subTitle2}
          fontWeight={FontWeight?.SemiBold}
          color={Color.TextGreen}
          my={4}
        >
          Benefits
        </Typography>
        <Typography
          fontSize={FontSize?.ExtraLarge}
          color={Color.TextSecondary}
          my={1}
          fontWeight={FontWeight?.Regular}
          lineHeight="28px"
        >
          Empower your business with a dedicated call centre that delivers
          exceptional customer service while unlocking new sales opportunities.
          By centralising your communication channels, you ensure fast,
          professional support that builds trust, boosts satisfaction, and
          strengthens your brand reputation.
        </Typography>
      </Box>
      <Grid
        container
        spacing={8}
        my={10}
        justifyContent="center"
        data-aos="fade-up"
      >
        {contractFeaturesData?.map((item: any) => {
          return (
            <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }} key={item?.id}>
              <Box
                sx={{
                  height: "100%",
                  width: "100%",
                  textAlign: "center",
                  "&:hover .hover-avatar": {
                    backgroundColor: Color.primaryMain,
                    color: Color?.commonWhite,
                  },
                }}
              >
                <Avatar
                  className="hover-avatar"
                  variant="rounded"
                  sx={{
                    width: 90,
                    height: 90,
                    margin: "0 auto",
                    fontSize: FontSize?.circleTitle,
                    borderRadius: "50%",
                    color: Color.TextGreen,
                    backgroundColor: Color.bgColor,
                    fontWeight: FontWeight?.SemiBold,
                  }}
                >
                  {item?.number}
                </Avatar>

                <CardContent sx={{ px: 0 }}>
                  <Typography
                    gutterBottom
                    fontSize={FontSize?.Huge}
                    component="div"
                    fontWeight={FontWeight?.SemiBold}
                    color={Color.TextGreen}
                    my={2}
                  >
                    {item?.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: FontSize?.Large,
                      color: Color.TextSecondary,
                      lineHeight: "24px",
                      letterSpacing: "-0.3px",
                      fontWeight: FontWeight?.Regular,
                    }}
                  >
                    {item?.description}
                  </Typography>
                </CardContent>
              </Box>
            </Grid>
          );
        })}
      </Grid>
      </Container>
    </HeroBox>
  );
};
