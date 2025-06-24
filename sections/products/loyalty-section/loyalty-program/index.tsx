"use client";
import {
  ProductsLoyaltyDashboardImage,
  ProductsSalesExpertTeamImage,
  ProductsSalesSmartGrowthImage,
  ProductsSalesTeamMemberOneImage,
  ProductsSalesTeamMemberThreeImage,
  ProductsSalesTeamMemberTwoImage,
} from "@assets/products";
import { AutoCounter } from "@components/auto-counter";
import { LinkButton } from "@components/link-button";
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
import AOS from "aos";
import "aos/dist/aos.css";
import HeroBox from "@components/hero-Box/hero-box";

export const LoyaltyProgram = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <>
      <HeroBox
        data-aos="fade-up"
        customStyles={{
          pt: { xs: 10, sm: 10, md: 11, },
          // height: { xs: "800px", sm: "600px", md: "450px" },
          // alignContent: "center",
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
            fontSize="60px"
            fontWeight={FontWeight?.SemiBold}
            color={Color.TextGreen}
          >
            Loyalty Program
          </Typography>
          <Typography
            variant="subtitle1"
            color={Color.TextSecondary}
            my={1}
            lineHeight="28px"
          >
            Welcome to the Loyalty Program, your ultimate solution for
            strengthening customer relationships and driving repeat business
            through meaningful rewards. This fully customisable program is
            designed to keep your customers engaged, offering tailored
            incentives that encourage long-term loyalty. With seamless
            integration and powerful analytics, you can track customer
            interactions, personalise experiences, and enhance overall
            engagement. Create rewarding loyalty journeys that recognise and
            appreciate your customers, turning their satisfaction into lasting
            commitment. By leveraging data-driven insights, you can optimise
            your strategy, boost retention, and maximise customer lifetime value
            all with Event Force..
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
              m: 2,
              width: "180px",
            }}
          >
            Contact Us
          </LinkButton>
          <LinkButton
            link="https://app.agenticcreed.ai/sign-up"
            variant="contained"
            customStyles={{
              color: Color?.DarkBlack,
              backgroundColor: Color.commonWhite,
              border: "1px solid",
              borderColor: Color?.LightGrey,
              fontSize: FontSize?.Large,
              textTransform: "capitalize",
              borderRadius: "8px",
              m: 2,
              width: "180px",
            }}
            linkProps={{
              target: "_blank",
            }}
          >
            Get Started Now
          </LinkButton>
        </Box>

      <Box
        sx={{
          px: { xs: 2, sm: 5, md: 10 },
          backgroundColor: Color?.bgColor,
          background:
            "linear-gradient(360deg,rgba(255, 255, 255, 1) 5%,rgba(240, 245, 244, 1)  85%, rgba(255, 255, 255, 1)10%)",
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
              sx={{ width: "400px", height: "301px" }}
            />
          </Grid>
          <Grid
            size={{ xs: 12, sm: 12, md: 6 }}
            justifyItems={{ sm: "center", md: "start" }}
            alignContent={{ sm: "center" }}
          >
            <Card
              sx={{ maxWidth: 280, borderRadius: "8px", p: 3 }}
              data-aos="fade-up"
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
              src={ProductsLoyaltyDashboardImage.src}
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
              sx={{
                width: "100%",
                height: "100%",
                maxHeight: { sm: "100%", md: "78%" },
              }}
            />
          </Grid>
        </Grid>
      </Box>
      </HeroBox>
    </>
  );
};
