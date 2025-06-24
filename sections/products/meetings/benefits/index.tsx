import {
  DataAutomatedImage,
  DataEnhancedImage,
  DataImprovedImage,
  DataReportImage,
} from "@assets/products/meetings";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import { Color } from "@root/enems";
import { FontSize, FontWeight } from "@root/enems/text-size";
import Aos from "aos";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import HeroBox from "@components/hero-Box/hero-box";

const Benefits = () => {

  const featuresData = [
    {
      id: "1",
      src: DataReportImage,
      title: "Time Efficiency",
      description:
        "Eliminate endless email exchanges — let clients book at their convenience while you save valuable time.",
    },
    {
      id: "2",
      src: DataEnhancedImage,
      title: "Enhanced Productivity",
      description:
        "Simplify your scheduling process and reduce the risk of double bookings or timing conflicts.",
    },
    {
      id: "3",
      src: DataAutomatedImage,
      title: "Automated Communication",
      description:
        "Offer clients a seamless booking experience by allowing them to choose the most convenient time no manual coordination required.",
    },
    {
      id: "4",
      src: DataImprovedImage,
      title: "Improved Client Experience",
      description:
        "Send reminders and confirmations automatically, reducing admin workload and improving engagement.",
    },
  ];

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false, 
    });
  }, []);

  return (
    <HeroBox>
      <Grid
        container
        spacing={4}
        sx={{ maxWidth: "1076px", margin: "auto" }}
        data-aos="fade-up"
      >
        <Grid size={{ xs: 12 }}>
          <Typography
            sx={{
              fontSize: FontSize.subTitle,
              fontWeight: FontWeight.SemiBold,
              color: Color.TextGreen,
              textAlign: "center",
              mt: "80px",
            }}
          >
            Benefits
          </Typography>
          <Typography
            sx={{
              fontSize: FontSize.ExtraLarge,
              fontWeight: FontWeight.Regular,
              color: Color.TextSecondary,
              textAlign: "center",
              mt: "16px",
            }}
          >
            At Event Force, we recognise the importance of managing your time
            effectively. That’s why we’ve introduced Meetings, a smart scheduling
            tool designed to streamline how you organise appointments, enhance
            productivity, and improve the client experience.
          </Typography>
        </Grid>
        {featuresData.map((item) => (
          <Grid key={item.id} size={{ xs: 12, sm: 6, md: 6 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "32px",
              }}
            >
              <Box sx={{ width: "80px", height: "74px" }}>
                <Avatar
                  src={item?.src?.src}
                  variant="square"
                  sx={{ width: "100%", height: "100%" }}
                />
              </Box>
              <Typography
                sx={{
                  fontSize: FontSize.Huge,
                  fontWeight: FontWeight.SemiBold,
                  color: Color.TextGreen,
                  mt: "30px",
                }}
              >
                {item.title}
              </Typography>
              <Box
                sx={{
                  height: "120px",
                  overflowY: "auto",
                  mt: "15px",
                  "&::-webkit-scrollbar": {
                    width: "6px",
                  },
                  "&::-webkit-scrollbar-track": {
                    backgroundColor: "#f0f0f0",
                    borderRadius: "8px",
                  },
                  "&::-webkit-scrollbar-thumb": {
                    backgroundColor: "#ccc",
                    borderRadius: "8px",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: FontSize.Large,
                    color: Color.TextSecondary,
                    textAlign: "center",
                    maxWidth: "300px",
                  }}
                >
                  {item.description}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </HeroBox>

  );
};

export default Benefits;