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
  Box,
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
      <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
      }}
    >
      {/* Gradient line */}
      <Box
        sx={{
          flexGrow: 1,
          height: '2px',
          background: 'linear-gradient(to right, #e9a04e, #5c3c0d)', // adjust as needed
        }}
      />
      
      {/* Circle dot */}
      <Box
        sx={{
          width: 24,
          height: 24,
          borderRadius: '50%',
          background: 'linear-gradient(to right, #e9a04e, #5c3c0d)', // same gradient
          marginLeft: '-12px', // slightly overlaps the end of the line
        }}
      />
    </Box>
      <footer
        style={{
          padding: "10px 20px",
          
          position: "relative",
        }}
      >
       
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          sx={{ maxWidth: "1200px", margin: "0 auto", flexWrap: "wrap" }}
        >
          <Grid >
            <Stack direction="row" spacing={2} alignItems="center">
              <Link href="tel:+966594279012" style={{ textDecoration: "none", color: "#333" }}>
                <Typography variant="body2">+966 59 427 9012</Typography>
              </Link>
              <Link href="mailto:Reservations@eventforce.sa" style={{ textDecoration: "none", color: "#333" }}>
                <Typography variant="body2">Reservations@eventforce.sa</Typography>
              </Link>
            </Stack>
          </Grid>
          <Grid >
            <Typography variant="body2" style={{ color: "#333" }}>
                 شركة إيفنت فورس للأحداث والفعاليات
            </Typography>
          </Grid>
          <Grid >
            <Stack direction="row" spacing={2} alignItems="center">
              <Link href="/Terms-of-Service" style={{ textDecoration: "none", color: "#333" }}>
                <Typography variant="body2">Terms & Conditions</Typography>
              </Link>
              <Link href="/privacy-policy" style={{ textDecoration: "none", color: "#333" }}>
                <Typography variant="body2">Privacy Policy</Typography>
              </Link>
              <Typography variant="body2" style={{ color: "#333" }}>
                © 2025 Event Force All Rights Reserved
              </Typography>
            </Stack>
          </Grid>
        </Grid>
        {/* Optional: Add social media icons if needed */}
        <Stack direction="row" spacing={1} justifyContent="center" sx={{ mt: 2 }}>
          <IconButton>
            <IconFacebook />
          </IconButton>
          <IconButton>
            <IconInstagram />
          </IconButton>
          <IconButton>
            <IconLinkedin />
          </IconButton>
          <IconButton>
            <IconTickTok />
          </IconButton>
          <IconButton>
            <IconX />
          </IconButton>
          <IconButton>
            <IconYoutube />
          </IconButton>
        </Stack>
       
        <div
          style={{
            position: "absolute",
            bottom: "-2px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "60px",
            height: "10px",
            background: "#4a9e9e",
            borderRadius: "5px 5px 0 0",
          }}
        />
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