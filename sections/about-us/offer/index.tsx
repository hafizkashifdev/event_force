import React from "react";

import { missionSectionImage } from "@assets/about-us";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import CrmIcon from "@assets/icons/about-us/crm";
import CustomerSuport from "@assets/icons/about-us/customer-suport";
import CallCenter from "@assets/icons/about-us/call-center";
import Loyalty from "@assets/icons/about-us/loyalty";
import Contract from "@assets/icons/about-us/contract";
import Marketing from "@assets/icons/about-us/marketing";
import { FontSize, FontWeight } from "@root/enems/text-size";
import { Color } from "@root/enems";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import HeroBox from "@components/hero-Box/hero-box";
const Offer = () => {
  const OfferListData = [
    {
      id: 1,
      icon: <CrmIcon />,
      title: "CRM & Sales Management",
    },
    {
      id: 2,
      icon: <CustomerSuport />,
      title: "Customer Support & ITSM",
    },
    {
      id: 3,
      icon: <CallCenter />,
      title: "Call Center & Meeting Management",
    },
    {
      id: 4,
      icon: <Marketing />,
      title: "Marketing Automation",
    },
    {
      id: 5,
      icon: <Loyalty />,
      title: "Loyalty & Retention Programs",
    },
    {
      id: 6,
      icon: <Contract />,
      title: "Contract & Asset Management",
    },
  ];
  useEffect(() => {
    Aos.init({
      duration: 1000, // Animation duration (in ms)
      once: false, // Whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <HeroBox>
      <Container maxWidth="xl" data-aos="fade-up">
        <Grid container spacing={4} sx={{ mt: "50px" }}>
          <Grid size={{ xs: 12, md: 6 }} sx={{ mt: "100px" }}>
            <Image
              src={missionSectionImage}
              alt="image"
              style={{ maxWidth: 'auto', width: '100%', objectFit: 'contain' }}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} sx={{ mt: "65px" }}>
            <Box>
              <Typography
                sx={{
                  fontSize: "42px",
                  fontWeight: FontWeight.SemiBold,
                  color: Color.TextGreen,
                  mt: "24px",
                }}
              >
                What We Offer
              </Typography>
              <Typography
                sx={{
                  fontSize: FontSize.ExtraLarge,
                  fontWeight: FontWeight.Regular,
                  color: Color.TextGreen,
                  mt: "24px",
                }}
              >
                Agentic Creed is a fully integrated business suite, offering a
                range of tools designed to optimise different business operations.
              </Typography>
            </Box>
            <Box>
              {OfferListData.map((item) => (
                <Box
                  key={item.id}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    fontSize: "24px",
                    fontWeight: "600",
                    color: "#4CAF50",
                    mt: "24px",
                  }}
                >
                  <Box>{item.icon}</Box>
                  <Typography
                    sx={{
                      fontSize: FontSize.ExtraLarge,
                      fontWeight: FontWeight.SemiBold,
                      color: Color.TextGreen,
                    }}
                  >
                    {item.title}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </HeroBox>

  );
};

export default Offer;
