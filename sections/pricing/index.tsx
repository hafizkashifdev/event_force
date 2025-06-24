"use client";

import CheckLightIcon from "@assets/icons/check-light-icon";
import CheckedIcon from "@assets/icons/checked-icon";
import {
  Box,
  Button,
  Card,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { FontSize, FontWeight } from "@root/enems";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { Color } from "../../enems/color";
import { billEstimateData, pricingData } from "./pricing.data";
import { useRouter } from "next/navigation";
import FooterCard from "@components/footer-card";
import HeroBox from "@components/hero-Box/hero-box";

const Pricing = () => {
  const router = useRouter()
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
            <Typography
              sx={{
                fontSize: FontSize.title,
                fontWeight: FontWeight.SemiBold,
                color: Color?.TextGreen,
              }}
            >
              Pricing Plans of Agentic Creed Products
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 8 }}>
            {pricingData?.map((data) => (
              <Card
                key={data.id}
                sx={{
                  padding: "36px",
                  backgroundColor: "#F4F8F7",
                  borderRadius: "16px",
                  mt: 4,
                }}
              >
                <Typography
                  sx={{
                    fontSize: "36px",
                    fontWeight: 600,
                    color: Color?.TextGreen,
                  }}
                >
                  {data?.title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "11px",
                    fontWeight: 500,
                    color: Color?.TextGreen,
                    maxWidth: "674px",
                  }}
                >
                  {data?.desc}
                </Typography>
                <Grid container spacing={2} sx={{ marginTop: "20px" }}>
                  {data?.offers?.map((data: any) => {
                    return (
                      <Grid
                        key={data.id}
                        size={{ xs: 12, sm: 6, lg: 3, md: 6 }}
                        onMouseEnter={() => setHoveredCard(data.id)}
                        onMouseLeave={() => setHoveredCard(null)}
                        sx={{
                          borderRadius: "5px",
                          padding: "24px 22px",
                          height: "100%",
                          border: "1px solid #E0E5E4",
                          backgroundColor:
                            hoveredCard === data.id ? "#083C2F" : "",
                          color:
                            hoveredCard === data.id
                              ? Color.commonWhite
                              : Color.TextGreen,
                          outline: "none",
                          cursor: "pointer",
                          transition: "0.3s",
                        }}
                      >
                        <Box>
                          <Typography
                            sx={{
                              fontSize: "9px",
                              fontWeight: 400,
                              color:
                                hoveredCard === data.id
                                  ? Color.commonWhite
                                  : "#7F8C89",
                              my: "9px",
                            }}
                          >
                            {data?.free}
                          </Typography>
                          <Typography
                            key={data?.id}
                            sx={{
                              fontSize: "27px",
                              fontWeight: 500,
                              color:
                                hoveredCard === data.id
                                  ? Color.commonWhite
                                  : Color.TextGreen,
                            }}
                          >
                            {data?.price}
                            <span
                              style={{
                                fontSize: "20px",
                                fontWeight: 500,
                                color:
                                  hoveredCard === data.id
                                    ? Color.commonWhite
                                    : Color.TextSecondary,
                              }}
                            >
                              {data?.perMonth}
                            </span>
                          </Typography>
                          <Box>
                            <Typography
                              sx={{
                                fontSize: "10px",
                                fontWeight: 400,
                                color:
                                  hoveredCard === data.id
                                    ? Color.commonWhite
                                    : Color.TextGreen,
                                mt: "23px",
                                mb: "14px",
                              }}
                            >
                              {data?.subheading}
                            </Typography>
                            {data?.subPricingData?.map((subdata: any) => (
                              <Box
                                sx={{
                                  display: "flex",
                                  aligndatas: "center",
                                  mb: "10px",
                                }}
                                key={subdata?.user}
                              >
                                {hoveredCard === data.id ? (
                                  <CheckLightIcon />
                                ) : (
                                  <CheckedIcon />
                                )}
                                <Typography
                                  sx={{ fontSize: "9px", marginLeft: "5px" }}
                                >
                                  {subdata?.user}
                                </Typography>
                              </Box>
                            ))}

                            <Button
                              sx={{
                                color:
                                  hoveredCard === data.id
                                    ? Color.commonWhite
                                    : Color.TextGreen,
                                fontWeight: 600,
                                fontSize: "9px",
                                my: "22px",
                                textAlign: "center",
                                backgroundColor:
                                  hoveredCard === data.id
                                    ? Color.primaryMain
                                    : "transparent",
                                textTransform: "capitalize",
                              }}
                            >
                              {hoveredCard === data.id
                                ? "Selected"
                                : "Select Now"}
                            </Button>
                          </Box>
                        </Box>
                      </Grid>
                    );
                  })}
                </Grid>
              </Card>
            ))}
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            {billEstimateData?.map((data) => (
              <Card
                key={data.id}
                sx={{
                  padding: "36px",
                  backgroundColor: "#F4F8F7",
                  borderRadius: "16px",
                  mt: 4,
                }}
              >
                <Typography
                  sx={{
                    fontSize: "36px",
                    fontWeight: 600,
                    color: Color?.TextGreen,
                  }}
                >
                  {data?.title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "11px",
                    fontWeight: 500,
                    color: Color?.TextSecondary,
                    maxWidth: "674px",
                  }}
                >
                  {data?.desc}
                </Typography>

                {data?.subEstimation?.map((subdata: any, index) => (
                  <Box key={index}>
                    <Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          marginTop: "20px",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <Box sx={{ display: "flex", alignItems: "center" }}>
                            {subdata?.icon}
                            <Typography
                              sx={{
                                fontSize: "24px",
                                fontWeight: 600,
                                color: Color?.DarkBlack,
                                ml: "10px",
                              }}
                            >
                              {subdata?.subTitle}
                            </Typography>
                          </Box>
                          <Box sx={{ fontSize: "12px", fontweight: 400 }}>
                            {subdata?.chip}
                          </Box>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            marginTop: "5px",
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: "11px",
                              fontWeight: 500,
                              color: Color?.Grey,
                              ml: "52px",
                            }}
                          >
                            {subdata?.perMonth}
                          </Typography>
                        </Box>
                      </Box>

                      <Divider sx={{ my: "20px" }} />
                    </Box>
                    <Box>
                      <Box
                        sx={{ display: "flex", justifyContent: "space-between" }}
                      >
                        <Typography
                          sx={{
                            fontSize: "14px",
                            fontWeight: 400,
                            color: Color.Grey,
                          }}
                        >
                          Plan Price
                        </Typography>

                        <Typography
                          sx={{
                            fontSize: "14px",
                            fontWeight: 500,
                            color: Color.DarkBlack,
                          }}
                        >
                          {subdata?.planPrice}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          my: "12px",
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: "14px",
                            fontWeight: 400,
                            color: Color.Grey,
                          }}
                        >
                          3 Additional Users (£45/user)
                        </Typography>

                        <Typography
                          sx={{
                            fontSize: "14px",
                            fontWeight: 500,
                            color: Color.DarkBlack,
                          }}
                        >
                          {subdata?.AdditionalUsers}
                        </Typography>
                      </Box>
                      <Box
                        sx={{ display: "flex", justifyContent: "space-between" }}
                      >
                        <Typography
                          sx={{
                            fontSize: "14px",
                            fontWeight: 400,
                            color: Color.Grey,
                          }}
                        >
                          Additional Storage (£1/GB)
                        </Typography>

                        <Typography
                          sx={{
                            fontSize: "14px",
                            fontWeight: 500,
                            color: Color.DarkBlack,
                          }}
                        >
                          {subdata?.AdditionalStorage}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          my: "12px",
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: "14px",
                            fontWeight: 400,
                            color: Color.Grey,
                          }}
                        >
                          Discount (10%)
                        </Typography>

                        <Typography
                          sx={{
                            fontSize: "14px",
                            fontWeight: 500,
                            color: Color.DarkBlack,
                          }}
                        >
                          {subdata?.Discount}
                        </Typography>
                      </Box>
                      <Box
                        sx={{ display: "flex", justifyContent: "space-between" }}
                      >
                        <Typography
                          sx={{
                            fontSize: "14px",
                            fontWeight: 400,
                            color: Color.Grey,
                          }}
                        >
                          Tax (20%)
                        </Typography>

                        <Typography
                          sx={{
                            fontSize: "14px",
                            fontWeight: 500,
                            color: Color.DarkBlack,
                          }}
                        >
                          {subdata?.Tax}
                        </Typography>
                      </Box>
                      <Divider sx={{ my: "16px" }} />
                      <Box>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: "14px",
                              fontWeight: 400,
                              color: Color.Grey,
                            }}
                          >
                            Total
                          </Typography>

                          <Typography
                            sx={{
                              fontSize: "18px",
                              fontWeight: 600,
                              color: Color.DarkBlack,
                            }}
                          >
                            {subdata?.total}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                ))}
                <Button
                  sx={{
                    color: Color.primaryMain,
                    fontWight: 500,
                    fontSize: "14px",
                    my: "22px",
                    textAlign: "center",
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  Show More
                </Button>
                <Card sx={{ p: "24px", textAlign: "center" }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mb: "12px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: 400,
                        color: Color.Grey,
                      }}
                    >
                      Total Discount
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: 500,
                        color: Color.DarkBlack,
                      }}
                    >
                      -£10
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mt: "12px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: 400,
                        color: Color.Grey,
                      }}
                    >
                      Total Tax
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: 500,
                        color: Color.DarkBlack,
                      }}
                    >
                      £110.48
                    </Typography>
                  </Box>
                  <Divider sx={{ my: "12px" }} />
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mt: "12px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: 600,
                        color: Color.Grey,
                      }}
                    >
                      Total
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "18px",
                        fontWeight: 600,
                        color: Color.DarkBlack,
                      }}
                    >
                      £1200.65
                    </Typography>
                  </Box>

                  <Button
                    sx={{
                      color: Color.commonWhite,
                      backgroundColor: Color.primaryMain,
                      fontWight: 500,
                      mt: "20px",
                      fontSize: "14px",
                      width: "100%",
                    }}
                    onClick={() => router.push('https://app.agenticcreed.ai/sign-up')}
                  >
                    Get Started
                  </Button>
                </Card>
              </Card>
            ))}
          </Grid>
          <FooterCard
            title="Let’s automate & simplify your performance"
            desc="Let us manage your business for you so that you can get back to doing what you do best and we look in the future."
            hasHighlightedText={false}
            hasBtn={true}
          />
        </Grid>
      </Container>
    </HeroBox>

  );
};

export default Pricing;
