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
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import React from "react";

function Footer() {
  return (
    <HeroBox px={{ xs: 0, lg: 1 }}>
      <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        mt:8
      }}
    >
      {/* Gradient line */}
      <Box
        sx={{
          flexGrow: 1,
          height: '2px',
          px:6,
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
          sx={{ maxWidth: "1400px", margin: "0 auto", flexWrap: "wrap" }}
        >
          <Grid >
            <Stack direction="row" spacing={2} alignItems="center">
              <Link href="tel:+966594279012" style={{ textDecoration: "none", color: "#333", display: 'flex', alignItems: 'center', gap: 4 }}>
                <PhoneIcon sx={{ fontSize: 18, mr: 0.5 }} />
                <Typography variant="body2">+966 59 427 9012</Typography>
              </Link>
              <Link href="mailto:Reservations@eventforce.sa" style={{ textDecoration: "none", color: "#333", display: 'flex', alignItems: 'center', gap: 4 }}>
                <EmailIcon sx={{ fontSize: 18, mr: 0.5 }} />
                <Typography variant="body2">Reservations@eventforce.sa</Typography>
              </Link>
            </Stack>
          </Grid>
          <Grid >
            <Typography variant="body2" style={{ color: "#333", display: 'flex', alignItems: 'center', gap: 4 }}>
              <LocationOnIcon sx={{ fontSize: 18, mr: 0.5 }} />
شارع المكرونة فرعي، حي الربوة، جدة، المملكة العربية السعودية            </Typography>
          </Grid>
          <Grid >
           
              <Typography variant="body2" style={{ color: "#333" }}>
                © 2025 Event Force All Rights Reserved
              </Typography>
            
          </Grid>
        </Grid>
        {/* Optional: Add social media icons if needed */}
        <Stack direction="row" spacing={1} justifyContent="center" sx={{ mt: 6,mb:4 }}>
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
       
        <Box
      sx={{
        width: '100%',
        height: '4px', // very thin bar
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Left flat line */}
      <Box
        sx={{
          flex: 1,
          backgroundColor: '#67B6B2',
          height: '2px',
        }}
      />

      {/* Right rounded end */}
      <Box
        sx={{
          width: '150px', // adjust based on your design
          height: '18px',   // slightly larger for a visible gradient effect
          background: 'linear-gradient(to bottom, #67B6B2, #2d5c5b)', // subtle depth
          borderTopRightRadius: '4px',
          borderBottomRightRadius: '4px',
          mt:1.2
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