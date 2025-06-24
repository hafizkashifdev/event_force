import { ContainerGridLayout } from "@components/layouts/container-grid-layout";
import { StackImages } from "./stack-images";
import { ItemGridLayout } from "@components/layouts/item-grid-layout";
import SlideUpInView from "@components/animations/animation-scroll/slide-up-in-view";
import { Box, Button, Chip, Container, Typography } from "@mui/material";
import Link from "next/link";
import { ANIMATIONS_BASE_DURATION } from "@root/constants/animations";
import { Color, FontSize, FontWeight } from "@root/enems";

export const HeroCard = () => {
  return (
    <Container maxWidth="xl">
      <Box>
        <ContainerGridLayout customStyles={{ alignItems: "center" }}>
          <ItemGridLayout md={5} lg={6}>
            <SlideUpInView height="100%">
              <Box
                sx={{
                  height: "100%",
                }}
              >
                <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                  <Chip
                    sx={{
                      backgroundColor: Color?.primaryMain,
                      color: Color?.commonWhite,
                      lineHeight: "24px",
                      letterSpacing: "0.7px",
                      fontWeight: FontWeight?.SemiBold,
                    }}
                    label="Automate & Scale Effortlessly"
                  />
                </Box>
                <Box sx={{ marginY: 2 }}>
                  <Typography
                    sx={{
                      fontSize: "3.5rem",
                      fontWeight: FontWeight?.SemiBold,
                      lineHeight: "120%",
                      letterSpacing: "-3px",
                      color: Color?.TextGreen,
                    }}
                  >
                    Elevate Your Business with Smart CRM Solutions
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    fontSize: FontSize?.ExtraLarge,
                    fontWeight: FontWeight?.SemiBold,
                    lineHeight: "30px",
                    letterSpacing: "-0.3px",
                    color: "#697C77",
                  }}
                >
                  Welcome to Agentic Creed, the future of intelligent customer
                  engagement. Our cutting-edge CRM platform is designed to
                  simplify your workflows, automate operations, and provide
                  data-driven insights—helping your business thrive
                  effortlessly.
                </Typography>
                <br />
                <Box
                  sx={{
                    marginY: 3,
                  }}
                >
                  <Link
                    href={"https://app.agenticcreed.ai/sign-up"}
                    target="_blank"
                  >
                    <Button
                      fullWidth={false}
                      sx={{
                        background: "#FFFFFF1A",
                        fontSize: "14px",
                        fontWeight: FontWeight?.SemiBold,
                        border: "1px solid #E0E0E0",
                        borderRadius: "8px",
                        color: Color?.TextGreen,
                        letterSpacing: "-0.3px",
                        lineHeight: "24px",
                        padding: "1rem",
                      }}
                    >
                      Get Started For Free
                    </Button>
                  </Link>
                </Box>
                <br />
                <Box>
                  <ContainerGridLayout>
                    <ItemGridLayout md={5}>
                      <Box>
                        <SlideUpInView
                          initialY={-100}
                          duration={ANIMATIONS_BASE_DURATION?.UP_DOWN + 1}
                        >
                          <Typography
                            sx={{
                              fontSize: FontSize?.Huge,
                              fontWeight: FontWeight?.Bold,
                              lineHeight: "31px",
                              letterSpacing: "-0.3px",
                              color: Color?.primaryMain,
                            }}
                          >
                            Run Smarter, Grow Faster
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: FontSize?.Medium,
                              fontWeight: FontWeight?.Medium,
                              lineHeight: "36px",
                              letterSpacing: "-0.3px",
                              color: Color?.blacked,
                            }}
                          >
                            Simplify your processes and boost <br /> performance
                            with intelligent, unified <br /> business tools.
                          </Typography>
                        </SlideUpInView>
                      </Box>
                    </ItemGridLayout>
                    <ItemGridLayout md={7}>
                      <Box>
                        <SlideUpInView
                          initialY={-100}
                          duration={ANIMATIONS_BASE_DURATION?.UP_DOWN + 1}
                        >
                          <Typography
                            sx={{
                              fontSize: FontSize?.Huge,
                              fontWeight: FontWeight?.Bold,
                              lineHeight: "31px",
                              letterSpacing: "-0.3px",
                              color: Color?.primaryMain,
                            }}
                          >
                            All-in-One Platform Built for <br /> Growth
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: FontSize?.Medium,
                              fontWeight: FontWeight?.Medium,
                              lineHeight: "36px",
                              letterSpacing: "-0.3px",
                              color: Color?.blacked,
                            }}
                          >
                            Connect sales, marketing, operations, and more{" "}
                            <br /> in one seamless system for scalable success.
                          </Typography>
                        </SlideUpInView>
                      </Box>
                    </ItemGridLayout>
                  </ContainerGridLayout>
                </Box>
              </Box>
            </SlideUpInView>
          </ItemGridLayout>
          <ItemGridLayout md={7} lg={6}>
            <StackImages />
          </ItemGridLayout>
        </ContainerGridLayout>
      </Box>
    </Container>
  );
};
