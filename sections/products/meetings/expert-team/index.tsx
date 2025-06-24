"use client";

import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Avatar,
  Stack,
  Paper,
  Divider,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import {
  DashboardImage,
  ExportCard1Image,
  ExportCard2Image,
  ExportCardImage,
  ExportGroupIcon,
  ExportProfileImage,
} from "@assets/products/meetings";
import { Color } from "@root/enems";
import { FontSize, FontWeight } from "@root/enems/text-size";
import Aos from "aos";
import "aos/dist/aos.css";
import HeroBox from "@components/hero-Box/hero-box";

const DashboardSection = () => {
  const isSmallScreen = useMediaQuery("(max-width:900px)");

  const exportTeam = [
    {
      id: 1,
      src: ExportCardImage,
      name: "Freddy",
      role: "Technical Lead",
    },
    {
      id: 2,
      src: ExportCard1Image,
      name: "Fiona",
      role: "Sales",
    },
    {
      id: 3,
      src: ExportCard2Image,
      name: "Juliana",
      role: "Services",
    },
  ];

  const growthData = [
    {
      id: 1,
      dot: "•",
      title: "Real-time Analytics",
      percentage: "35%",
    },
    {
      id: 2,
      dot: "•",
      title: "Global Reach",
      percentage: "35%",
    },
    {
      id: 3,
      dot: "•",
      title: "User Engagement Trends ",
      percentage: "35%",
    },
    {
      id: 4,
      dot: "•",
      title: " Conversion Optimisation",
      percentage: "35%",
    },
  ];

  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      count += 4;
      setUserCount((prev) => (count > 120 ? 120 : count));
      if (count >= 120) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, []);

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
          position: "relative",
          maxWidth: "1200px",
          margin: "auto",
          px: 4,
          py: 6,
          backgroundColor: "#f5f9fa",
          height: isSmallScreen ? "auto" : "416px",
          mt: "246px",
          display: "flex",
          flexDirection: isSmallScreen ? "column" : "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            borderRadius: 3,
            p: 3,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: isSmallScreen ? "100%" : 290,
            position: isSmallScreen ? "relative" : "absolute",
            top: isSmallScreen ? 0 : "-117px",
            right: isSmallScreen ? 0 : "45%",
          }}
        >
          <Typography fontWeight={600} fontSize="15px" color={Color.TextGreen}>
            Our Expert Team
          </Typography>
          {exportTeam.map((member) => (
            <Box key={member.id}>
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                justifyContent="space-between"
              >
                <Box display="flex" alignItems="center" gap={1}>
                  <Avatar src={member.src.src} sx={{ width: 36, height: 36 }} />
                  <Typography
                    sx={{
                      fontWeight: FontWeight.SemiBold,
                      fontSize: "15px",
                      color: Color.TextGreen,
                    }}
                  >
                    {member.name}
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="caption"
                    sx={{
                      backgroundColor: "#F6F5F8",
                      px: 1,
                      py: 1,
                      borderRadius: 1,
                      fontSize: "11px",
                      fontWeight: 400,
                      color: Color.TextGreen,
                    }}
                  >
                    {member.role}
                  </Typography>
                </Box>
              </Stack>
              <Divider />
            </Box>
          ))}
        </Paper>
        <Paper
          sx={{
            borderRadius: 3,
            p: 3,
            mt: isSmallScreen ? "50px" : "110px",
            position: isSmallScreen ? "relative" : "absolute",
            right: isSmallScreen ? 0 : 67,
            top: isSmallScreen ? 0 : "-156px",
            width: isSmallScreen ? "100%" : 290,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Stack direction="row" spacing={1} mb={1}>
              <Image
                src={ExportProfileImage}
                style={{ width: "100%", height: "100%" }}
                alt="image"
              />
            </Stack>
            <Box sx={{ ml: 2 }}>
              <Typography variant="h6" fontWeight={700}>
                {userCount}+
              </Typography>
              <Typography>Active Users</Typography>
            </Box>
          </Box>
        </Paper>
        <Box
          sx={{
            mt: 7,
            color: "#ccc",
            fontSize: "1.2rem",
            position: isSmallScreen ? "relative" : "absolute",
            bottom: isSmallScreen ? 0 : "-221px",
            left: 0,
            width: isSmallScreen ? "100%" : "820px",
          }}
        >
          <Image
            src={DashboardImage}
            alt="Schedule"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
        <Paper
          elevation={1}
          sx={{
            borderRadius: 3,
            p: 3,
            display: "flex",
            flexDirection: "column",
            gap: 1,
            width: isSmallScreen ? "100%" : 320,
            position: isSmallScreen ? "relative" : "absolute",
            top: isSmallScreen ? 0 : "200px",
            right: isSmallScreen ? 0 : "56px",
          }}
        >
          <Typography fontWeight={600} fontSize="17px">
            Smart Insights for Growth
          </Typography>
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            justifyContent="space-between"
          >
            <Image src={ExportGroupIcon} alt="image" />
            <Box>
              {growthData?.map((item, index) => {
                return (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: 1,
                      mb: 1,
                    }}
                  >
                    <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                      <Typography sx={{ color: Color.primaryMain }}>
                        {item.dot}
                      </Typography>
                      <Typography
                        sx={{
                          color: Color.TextGreen,
                          fontSize: FontSize.Medium,
                          fontWeight: FontWeight.SemiBold,
                        }}
                      >
                        {item.title}
                      </Typography>
                    </Box>
                    <Typography
                      sx={{
                        color: Color.TextGreen,
                        fontSize: FontSize.Medium,
                        fontWeight: FontWeight.SemiBold,
                      }}
                    >
                      {item.percentage}
                    </Typography>
                  </Box>
                );
              })}
            </Box>
          </Stack>
        </Paper>
      </Box>
    </HeroBox>
  );
};

export default DashboardSection;
