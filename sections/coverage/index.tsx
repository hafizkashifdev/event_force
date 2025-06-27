"use client";

import CheckLightIcon from "@assets/icons/check-light-icon";
import CheckedIcon from "@assets/icons/checked-icon";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { FontSize, FontWeight } from "@root/enems";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { Color } from "../../enems/color";
import { billEstimateData, pricingData } from "./pricing.data";
import { useRouter } from "next/navigation";
import FooterCard from "@components/footer-card";
import HeroBox from "@components/hero-Box/hero-box";
import {
  certifiedICon,
  CoverImage1,
  CoverImage2,
  CoverImage3,
} from "@assets/coverage";
import Image from "next/image";
import SlideSidewayInView from "@components/animations/animation-scroll/slide-sideway-in-view";
import SlideUpInView from "@components/animations/animation-scroll/slide-up-in-view";
import ScaleInView from "@components/animations/animation-scroll/scale-in-view";

const Coverage = () => {
  const router = useRouter();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <HeroBox>
      <Container maxWidth="xl" data-aos="fade-up">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 12 }} sx={{ mt: 12 }}>
            <SlideUpInView>
              <Box
                sx={{
                  background: "#67B6B2",
                  padding: "20px",
                  width: { xs: "80%", sm: "60%", md: "50%" },
                  borderTopRightRadius: "36px",
                  mt: { xs: 2, sm: 6, md: 8 },
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    m: 0,
                    p: 0,
                    textAlign: "center",
                    width: "100%",
                    fontWeight: 700,
                  }}
                >
                  Coverage
                </Typography>
              </Box>
            </SlideUpInView>
          </Grid>
          <Box sx={{ mt: 2 }}>
            <Grid
              container
              spacing={{ xs: 2 }} // Add more gap on large screens
              justifyContent={{ xs: "center", md: "space-between" }}
              alignItems="center"
            >
              <Grid size={{xs: 12, md: 6 }}>
                <SlideSidewayInView>
                  <Card
                    sx={{
                      borderRadius: 8,
                      border: "1px solid #e0e0e0",
                      textAlign: "center",
                      background: "transparent",
                      boxShadow: "none",
                    }}
                  >
                    <CardContent
                      sx={{
                        display: "flex",
                        justifyContent: { xs: "flex-start", md: "center" },
                        alignItems: "center",
                        padding: "20px",
                        flexDirection: { xs: "column", md: "row" },
                        gap: { xs: 2, md: 3, lg: 6 }, // Add more gap on large screens
                      }}
                    >
                      <SlideUpInView>
                        <Box
                          sx={{
                            width: "60px",
                            height: "60px",
                            borderRadius: "50%",
                            background: "#67B6B2",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            mb: { xs: 1, md: 0 },
                            mr: { xs: 0, md: "20px" },
                            mx: { xs: "auto", md: 0 },
                          }}
                        >
                          <Typography variant="h6" color="#fff">
                            24
                          </Typography>
                        </Box>
                      </SlideUpInView>
                      <SlideUpInView>
                        <Typography
                          variant="body1"
                          sx={{
                            textAlign: { xs: "center", md: "left" },
                          }}
                        >
                          24/7 Operations Desk for real time support
                        </Typography>
                      </SlideUpInView>
                    </CardContent>
                  </Card>
                </SlideSidewayInView>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <SlideSidewayInView>
                  <Card
                    sx={{
                      borderRadius: 8,
                      border: "1px solid #e0e0e0",
                      textAlign: "center",
                      background: "transparent",
                      boxShadow: "none",
                    }}
                  >
                    <CardContent
                      sx={{
                        display: "flex",
                        justifyContent: { xs: "flex-start", md: "center" },
                        alignItems: "center",
                        padding: "20px",
                        flexDirection: { xs: "column", md: "row" },
                        gap: { xs: 2, md: 3, lg: 6 }, // Add more gap on large screens
                      }}
                    >
                      <Box
                        sx={{
                          width: "60px",
                          height: "60px",
                          borderRadius: "50%",
                          background: "#67B6B2",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mb: { xs: 1, md: 0 },
                          mr: { xs: 0, md: "10px" },
                          mx: { xs: "auto", md: 0 },
                        }}
                      >
                        <Image
                          src={certifiedICon}
                          alt="Circle Icon"
                          width={30}
                          height={30}
                          style={{ objectFit: "contain" }}
                        />
                      </Box>
                      <SlideUpInView>
                        <Typography
                          variant="body1"
                          sx={{
                            textAlign: { xs: "center", md: "left" },
                          }}
                        >
                          Nationwide reach across Riyadh, Jeddah, Dammam, Makkah,
                          Madinah Abha, and Tabuk
                        </Typography>
                      </SlideUpInView>
                    </CardContent>
                  </Card>
                </SlideSidewayInView>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Container maxWidth="xl" sx={{ my: 5}}>
          <Grid container>
            <Grid size={12}>
              <SlideSidewayInView>
                <Image
                  src={CoverImage1}
                  alt="Coverage Image 1"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
              </SlideSidewayInView>
            </Grid>
          </Grid>
        </Container>
        <Container maxWidth="xl" sx={{ my: 4 }}>
          <Grid container spacing={{ xs: 2, md: 2 }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <ScaleInView>
                <Image
                  src={CoverImage2}
                  alt="Coverage Image 2"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto", objectFit: "cover", borderRadius: "8px" }}
                />
              </ScaleInView>
            </Grid>
            <Grid size={{ md: 6, xs: 12 }}>
              <ScaleInView>
                <Image
                  src={CoverImage3}
                  alt="Coverage Image 3"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto", objectFit: "cover", borderRadius: "8px" }}
                />
              </ScaleInView>
            </Grid>
          </Grid>
        </Container>
       
      </Container>
    </HeroBox>
  );
};

export default Coverage;
