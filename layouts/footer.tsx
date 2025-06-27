"use client";
import HeroBox from "@components/hero-Box/hero-box";
import {
  Box,
  Grid,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import { Color, } from "@root/enems";
import Link from "next/link";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import React from "react";

function Footer() {
  return (
    <HeroBox px={{ xs: 2, sm: 3, md: 4, lg: 6 }}>
    
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          mt: { xs: 4, md: 8 },
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            height: "2px",
            background: "linear-gradient(to right, #e9a04e, #5c3c0d)",
          }}
        />
        <Box
          sx={{
            width: 24,
            height: 24,
            borderRadius: "50%",
            background: "linear-gradient(to right, #e9a04e, #5c3c0d)",
            marginLeft: "-12px",

          }}
        />
      </Box>

      <footer
        style={{
          position: "relative",
        }}
      >
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          sx={{ width: "100%", maxWidth: "1400px", margin: "0 auto", gap: { xs: 2, md: 0 },mt:4 }} // Added gap for small screens
        >
          {/* Phone Info - Left */}
          <Grid size={{ xs: 12, md: 4 }} sx={{ textAlign: { xs: "center", md: "left" } }}>
            <Stack  sx={{ alignItems: { xs: "left", md: "left" } }}>
              <Link
                href="tel:+966594279012"
                style={{
                  textDecoration: "none",
                  color: "#333",
                  display: "flex",
                  alignItems: "center",
                  
                }}
              >
                <PhoneIcon sx={{ fontSize: 18 }} />
                <Typography variant="body2" >+966 59 427 9012</Typography>
              </Link>
            </Stack>
          </Grid>

          {/* Email Info - Center */}
          <Grid size={{ xs: 12, md: 4 }} sx={{ textAlign: { xs: "left", md: "center" } }}>
            <Link
              href="mailto:Reservations@eventforce.sa"
              style={{
                textDecoration: "none",
                color: "#333",
                display: "flex",
                alignItems: "center",
                gap: 4,
              }}
            >
              <EmailIcon sx={{ fontSize: 18 ,}} />
              <Typography variant="body2"     sx={{justifyContent: { xs: "left", md: "flex-end" }}}>Reservations@eventforce.sa</Typography>
            </Link>
          </Grid>

          {/* Address Info - Right */}
          <Grid size={{ xs: 12, md: 4 }} sx={{ textAlign: { xs: "left", md: "right" } }}>
            <Typography
              variant="body2"
              sx={{
                color: "#333",
                display: "flex",
                alignItems: "center",
                gap: 1,
                justifyContent: { xs: "left", md: "flex-end" },
              }}
            >
              <LocationOnIcon sx={{ fontSize: 18 }} />
              شارع المكرونة فرعي، حي الربوة، جدة، المملكة العربية السعودية
            </Typography>
          </Grid>
        </Grid>

        <Box
          sx={{
            width: "100%",
            height: "4px",
            display: "flex",
            alignItems: "center",
            mt:4,
            mb:6
          }}
        >
          <Box
            sx={{
              flex: 1,
              backgroundColor: "#67B6B2",
              height: "2px",
            }}
          />
          <Box
            sx={{
              width: { xs: "100px", sm: "150px" },
              height: "18px",
              background: "linear-gradient(to bottom, #67B6B2, #2d5c5b)",
              borderTopRightRadius: "4px",
              borderBottomRightRadius: "4px",
              mt: 1.7,
            }}
          />
        </Box>
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