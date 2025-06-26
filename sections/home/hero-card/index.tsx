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
                <Box sx={{ marginY: 2 }}>
                  <Typography
                    sx={{
                      fontSize: "3.4rem",
                      fontWeight: FontWeight?.SemiBold,
                      lineHeight: "120%",
                      letterSpacing: "-3px",
                      color:'#2D504E',
                    }}
                  >
                    Driving Your Events to Success
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
                  Premier transportation & logistics for high-profile events in
                  Saudi Arabia. From luxury chauffeurs to large fleets, we
                  ensure seamless, professional service so you can focus on your
                  event. Trusted by top-tier clients for reliability and
                  excellence.{" "}
                </Typography>
                <br />
                <Box
                  sx={{
                    marginY: 3,
                  }}
                >
                  <Link
                    href={"#"}
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
                        color: '#2D504E',
                        letterSpacing: "-0.3px",
                        lineHeight: "24px",
                        padding: "1rem",
                      }}
                    >
                      Explore Services
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
                            Transparency{" "}
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
                            Through time, our honesty with the clients has
                            accumulated valuable trust.
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
                            Reliability
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
                            We are committed to maintaining our high quality
                            services and performance.
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
