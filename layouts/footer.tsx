"use client";
import IconFacebook from "@assets/footer/Icon-facebook";
import IconInstagram from "@assets/footer/Icon-instagram";
import IconLinkedin from "@assets/footer/Icon-linkedin";
import IconTickTok from "@assets/footer/Icon-ticktok";
import IconX from "@assets/footer/Icon-X";
import IconYoutube from "@assets/footer/Icon-youtube";
import { AppLogoIcon } from "@assets/icons";
import HeroBox from "@components/hero-Box/hero-box";
import {
  Divider,
  Grid,
  IconButton,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import { Color, Routes } from "@root/enems";
import Link from "next/link";

import React from "react";

function Footer() {
  return (
    <HeroBox px={{ xs: 0, lg: 1 }}>
      <footer>
        <Divider sx={{ backgroundColor: "#000000", mt: "202px" }} />
        <Grid container spacing={2}>
          <Grid size={12}>
            <Stack
              gap={2}
              flexDirection={"row"}
              alignItems="center"
              justifyContent={{ xs: "center", md: "space-between" }}
              py={7}
              flexWrap={"wrap"}
              pl={5}
            >
              <Stack
                gap={3}
                maxWidth={370}
                mb={6}
                alignItems={{ xs: "center", lg: "unset" }}
                textAlign={{ xs: "center", lg: "unset" }}
                justifyContent={"space-between"}
              >
                <AppLogoIcon />
                <Typography
                  sx={{ mx: 1 }}
                  variant="body1"
                  color="initial"
                  textAlign={{ xs: "center", md: "unset" }}
                >
                  Welcome to the future of intelligent business solutions.
                  Agentic Creed is your all-in-one platform, built to optimise
                  CRM, ITSM, marketing, and sales operations efficiently.
                </Typography>
              </Stack>
              <Stack
                flexDirection={"row"}
                gap={6}
                maxWidth={305}
                mb={2}
                mr={{ xs: 0, lg: 30 }}
                flexWrap={{ xs: "wrap", lg: "unset" }}
                justifyContent={{ xs: "center", lg: "space-between" }}
              >
                <Stack
                  justifyItems={"flex-start"}
                  gap={2}
                  alignItems={"flex-start"}
                >
                  <Typography
                    variant="body1"
                    fontWeight={550}
                    color={Color.TextMain}
                  >
                    Company
                  </Typography>

                  <StyledNavLink href={Routes.HOME}>Home</StyledNavLink>
                  <StyledNavLink href={Routes.About}>About</StyledNavLink>
                  <StyledNavLink href={Routes.PRICING}>Pricing</StyledNavLink>
                  <StyledNavLink href={Routes.CAREER}>Careers</StyledNavLink>
                </Stack>
                <Stack
                  justifyItems={"flex-start"}
                  gap={2}
                  alignItems={"flex-start"}
                >
                  <Typography
                    variant="body1"
                    fontWeight={550}
                    color={Color.TextMain}
                  >
                    Product
                  </Typography>

                  <StyledNavLink href={Routes.PRODUCTS_MARKETING}>
                    Marketing
                  </StyledNavLink>
                  <StyledNavLink href={Routes.PRODUCTS_SALES}>
                    Sales
                  </StyledNavLink>
                  <StyledNavLink href={Routes.PRODUCTS_SERVICES}>
                    Services
                  </StyledNavLink>
                  <StyledNavLink href={Routes.PRODUCTS_OPERATION}>
                    Operations
                  </StyledNavLink>
                  <StyledNavLink href={Routes.PRODUCTS_LOYALTY}>
                    Loyalty
                  </StyledNavLink>
                </Stack>
                <Stack
                  justifyItems={"flex-start"}
                  gap={2}
                  alignItems={"flex-start"}
                >
                  <Typography
                    variant="body1"
                    fontWeight={550}
                    color={Color.TextMain}
                  >
                    Resources
                  </Typography>

                  <StyledNavLink href={Routes.PRODUCTS_MEETINGS}>
                    Meetings
                  </StyledNavLink>
                  <StyledNavLink href={Routes.PRODUCTS_CALL_CENTER}>
                    Call Centre
                  </StyledNavLink>
                  <StyledNavLink href={Routes.PRODUCTS_CONTRACTS}>
                    Contracts
                  </StyledNavLink>
                  <StyledNavLink href={Routes.AGENTIC_007}>
                    Agentic007
                  </StyledNavLink>
                </Stack>
                <Stack
                  justifyItems={"flex-start"}
                  gap={2}
                  alignItems={"flex-start"}
                >
                  <Typography
                    variant="body1"
                    fontWeight={550}
                    color={Color.TextMain}
                  >
                    Support
                  </Typography>

                  <StyledNavLink href={Routes.CONTACT}>
                    Contact Us
                  </StyledNavLink>
                  <StyledNavLink href={"https://app.agenticcreed.ai/sign-up"}>
                    Get started
                  </StyledNavLink>
                </Stack>
              </Stack>
            </Stack>

            {/* <Divider sx={{ backgroundColor: "#000000" }} /> */}
            <Stack
              flexDirection={{ xs: "column", lg: "row" }}
              justifyContent={{ xs: "center", lg: "space-between" }}
              padding={2}
              px={0}
              flexWrap={"wrap"}
              gap={2}
              alignItems={"center"}
           
            >
              <Typography variant="body1" color="initial">
                © 2025 Agentic Creed All Rights Reserved
              </Typography>
              <Stack flexDirection={"row"} gap={2}>
                <IconButton
                  onClick={() => {
                    window.open(
                      "https://www.facebook.com/agenticcreed",
                      "_blank"
                    );
                  }}
                >
                  <IconFacebook />
                </IconButton>
                <IconButton
                  onClick={() => {
                    window.open(
                      "https://www.youtube.com/@agenticcreed",
                      "_blank"
                    );
                  }}
                >
                  <IconYoutube />
                </IconButton>
                <IconButton
                  onClick={() => {
                    window.open(
                      "https://www.instagram.com/agenticcreed/",
                      "_blank"
                    );
                  }}
                >
                  <IconInstagram />
                </IconButton>
                <IconButton
                  onClick={() => {
                    window.open(
                      "https://www.linkedin.com/company/agenticcreed",
                      "_blank"
                    );
                  }}
                >
                  <IconLinkedin />
                </IconButton>
                <IconButton
                  onClick={() => {
                    window.open(
                      "https://www.tiktok.com/@agenticcreed",
                      "_blank"
                    );
                  }}
                >
                  <IconTickTok />
                </IconButton>
                <IconButton
                  onClick={() => {
                    window.open("https://x.com/agenticcreed", "_blank");
                  }}
                >
                  <IconX />
                </IconButton>
              </Stack>
              <Stack flexDirection={"row"} gap={2} mr={{ xs: 0, lg: 2 }}>
                <StyledNavLink href={Routes.TERMS_OF_SERVICE}>
                  Terms & Conditions
                </StyledNavLink>
                <StyledNavLink href={Routes.PRIVACY_POLICY}>
                  Privacy Policy
                </StyledNavLink>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </footer>
    </HeroBox>
  );
}

export default Footer;

const StyledNavLink = styled(Link)(() => ({
  position: "relative",
  color: Color.TextMain,
  fontWeight: 400,
  fontFamily: "inter",
  fontSize: "0.99rem",
  textDecoration: "none",
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "2px",
  whiteSpace: "nowrap",
}));
