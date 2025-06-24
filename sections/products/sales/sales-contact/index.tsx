"use client";

import {
  ProductsSalesBackImgImage,
  ProductsSalesDashboardImage,
  ProductsSalesExpertTeamImage,
  ProductsSalesSmartGrowthImage,
  ProductsSalesTeamMemberOneImage,
  ProductsSalesTeamMemberThreeImage,
  ProductsSalesTeamMemberTwoImage,
} from "@assets/products";
import { AutoCounter } from "@components/auto-counter";
import { LinkButton } from "@components/link-button";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  Avatar,
  AvatarGroup,
  Box,
  Card,
  Grid,
  Typography,
} from "@mui/material";
import { Color } from "@root/enems";
import { FontSize, FontWeight } from "@root/enems/text-size";
import { useEffect } from "react";
import HeroBox from "@components/hero-Box/hero-box";

export const SalesContact = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <HeroBox>
      <Box
        data-aos="fade-up"
        sx={{
          pt: { xs: 0, md: 11 },
          backgroundImage: `url(${ProductsSalesBackImgImage.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: { xs: "500px", sm: "400px", md: "450px" },
          alignContent: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: { xs: "100%", md: "60%", lg: "50%" },
            textAlign: "center",
            mx: "auto",
          }}
        >
          <Typography
            variant="h2"
            fontWeight={FontWeight?.SemiBold}
            color={Color.TextGreen}
            sx={{}}
          >
            Sales
          </Typography>
          <Typography
            variant="subtitle1"
            color={Color.TextSecondary}
            my={1}
            lineHeight="28px"
          >
            Welcome to Sales, the cutting-edge sales solution by Agentic Creed.
            Designed to empower sales teams, streamline processes, and drive
            remarkable growth, Sales is packed with powerful tools to help you
            manage leads, close deals, and build lasting customer relationships.
          </Typography>
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
      </Box>
      <Box
        sx={{
          px: { xs: 2, sm: 5, md: 10 },
          backgroundColor: Color?.bgColor,
          background:
            "linear-gradient(360deg,rgba(255, 255, 255, 1) 50%, rgba(240, 245, 244, 1) 50%)",
        }}
      >
        <Grid container spacing={5}>
          <Grid
            size={{ xs: 12, sm: 12, md: 6 }}
            justifyItems={{ sm: "center", md: "end" }}
            alignContent="start"
          >
            <Avatar
              data-aos="fade-up"
              src={ProductsSalesExpertTeamImage.src}
              alt=""
              variant="square"
              sx={{ width: "400px", height: "301px", mt: { sm: 0, md: -15 } }}
            />
          </Grid>
          <Grid
            size={{ xs: 12, sm: 12, md: 6 }}
            justifyItems={{ sm: "center", md: "start" }}
            alignContent={{ sm: "center" }}
          >
            <Card
              data-aos="fade-up"
              sx={{ maxWidth: 280, borderRadius: "8px", p: 3 }}
            >
              <AvatarGroup
                spacing={15}
                sx={{ justifyContent: "start", alignItems: "center" }}
              >
                <Avatar
                  sx={{ width: 50, height: 50 }}
                  alt="Team member"
                  src={ProductsSalesTeamMemberOneImage.src}
                />
                <Avatar
                  sx={{ width: 50, height: 50 }}
                  alt="Team member"
                  src={ProductsSalesTeamMemberTwoImage.src}
                />
                <Avatar
                  sx={{ width: 50, height: 50 }}
                  alt="Team member"
                  src={ProductsSalesTeamMemberThreeImage.src}
                />
                <Box sx={{ mx: 2 }}>
                  <Typography
                    fontSize={FontSize?.Huge}
                    fontWeight="600"
                    color={Color.TextGreen}
                    lineHeight="28px"
                  >
                    <AutoCounter start={0} end={120} speed={50} />+
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color={Color.TextSecondary}
                    lineHeight="28px"
                  >
                    Active Users
                  </Typography>
                </Box>
              </AvatarGroup>
            </Card>
          </Grid>
          <Grid size={{ sm: 12, md: 7 }}>
            <Avatar
              data-aos="fade-up"
              src={ProductsSalesDashboardImage.src}
              alt=""
              variant="square"
              sx={{ width: "100%", height: "100%" }}
            />
          </Grid>
          <Grid size={{ sm: 12, md: 5 }}>
            <Avatar
              data-aos="fade-up"
              src={ProductsSalesSmartGrowthImage.src}
              alt=""
              variant="square"
              sx={{ width: "100%", height: { sm: "100%", md: "65%" } }}
            />
          </Grid>
        </Grid>
      </Box>
    </HeroBox>
  );
};
