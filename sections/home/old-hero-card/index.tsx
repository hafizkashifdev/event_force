"use client";
import { Box, Button, Container, Grid, Stack, styled, Typography } from "@mui/material";
import { Color } from "@root/enems";
import "aos/dist/aos.css";

const CustomUl = styled("ul")`
  li::marker {
    color: ${Color.commonWhite};
  }
  li:nth-of-type(5)::marker {
    color: ${Color.primaryMain}; // Color for the second list item
  }

  li:nth-of-type(3)::marker {
    color: ${Color.TextGreen}; // Color for the third list item
  }

  li:nth-of-type(4)::marker {
    color: ${Color.TextSecondary}; // Color for the fourth list item
  }
`;

export const OldHeroCard = () => {
  return (
    <Container maxWidth="xl" data-aos="fade-down">
      <Grid
        container
        sx={{
          background: "url('homeback.svg')",
          backgroundSize: "cover",
          height: { lg: "100vh", xs: "auto" },
        }}
      >
        <Grid size={12} mt={{ xs: 5, lg: 10 }}>
          <Box
            sx={{
              position: "relative",

              overflow: "hidden",
              borderRadius: "20px",
              mt: 2,
            }}
          >
            <Box
              sx={{
                background:
                  "linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0, 20, 17, 1) 8%, rgba(0, 20, 17, 0.5) 73%, rgba(2, 136, 117, 0.5) 100%)",
                backgroundSize: "cover",
                borderRadius: "20px",

                pb: 9,
              }}
            >
              <video
                autoPlay
                loop
                muted
                src="video.mp4"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  zIndex: -1, // Ensures video stays in the background
                }}
              />
              <Grid container spacing={10} pb={6}>
                <Grid px={5} size={{ xs: 12, lg: 8 }} mt={6}>
                  <Stack gap={10}>
                    <Box>
                      <Typography variant="h2" color="#fff" fontWeight={700}>
                        <Box component={"span"} color={Color.primaryMain}>
                          Event Force –
                        </Box>
                        Elevate Your Business with Smart CRM Solutions
                      </Typography>
                      <Typography
                        variant="body1"
                        color="#fff"
                        mt={2}
                        fontSize={18}
                      >
                        Welcome to Event Force, the future of intelligent
                        customer engagement. Our cutting-edge CRM platform is
                        designed to simplify your workflows, automate
                        operations, and provide data-driven insights—helping
                        your business thrive effortlessly.
                      </Typography>
                    </Box>
                  </Stack>
                </Grid>
                <Grid px={5} size={{ xs: 12, lg: 4 }} mt={6}>
                  <Stack gap={10}>
                    <Box
                      sx={{
                        background: "rgba(255, 255, 255, 0.2)",
                        borderRadius: "16px",
                        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                        backdropFilter: "blur(5px)",
                        WebkitBackdropFilter: "blur(5px)",
                        border: "1px solid rgba(255, 255, 255, 0.3)",
                        p: 2,

                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "Flex-start",
                        alignItems: "Flex-start",
                        gap: 2,
                        fontFamily: "inter",
                        minHeight: 200,
                        pb: 6,
                      }}
                    >
                      <svg
                        width="24"
                        height="22"
                        viewBox="0 0 24 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.3674 2.63047C6.26028 5.20929 4.20725 8.31718 4.20725 11.95C4.20725 13.0808 4.40859 13.6457 4.80918 13.6457L5.22229 13.5362C5.54777 13.4134 5.80962 13.352 6.01095 13.352C7.18665 13.352 8.17039 13.7716 8.95801 14.6107C9.74667 15.4499 10.141 16.4834 10.141 17.7176C10.141 18.9016 9.71329 19.9076 8.86308 20.7334C8.01182 21.5592 6.98531 21.9716 5.78353 21.9716C4.10606 21.9716 2.72172 21.2962 1.63157 19.9423C0.543511 18.5915 0 16.8928 0 14.8492C0 12.5364 0.461097 10.4212 1.38746 8.50138C2.31592 6.58262 3.72842 4.84805 5.63123 3.29769C7.53403 1.74835 8.74833 0.972656 9.2741 0.972656C9.62462 0.972656 9.91254 1.13844 10.1379 1.47C10.3632 1.80054 10.4759 2.08912 10.4759 2.33472L10.3643 2.62945L10.3674 2.63047ZM23.8873 2.63047C19.7802 5.20929 17.7282 8.31616 17.7282 11.9511C17.7282 13.0819 17.9296 13.6467 18.3302 13.6467L18.7433 13.5372C19.0688 13.4144 19.3306 13.353 19.5319 13.353C20.6826 13.353 21.6601 13.7726 22.4602 14.6118C23.2635 15.4509 23.662 16.4845 23.662 17.7186C23.662 18.9026 23.2343 19.9086 22.3841 20.7344C21.5328 21.5603 20.5063 21.9727 19.3045 21.9727C17.6271 21.9727 16.2427 21.2973 15.1526 19.9434C14.0645 18.5926 13.521 16.8938 13.521 14.8502C13.521 12.5129 13.9884 10.3782 14.9293 8.44817C15.8682 6.51712 17.2818 4.78768 19.172 3.2629C21.0655 1.73709 22.2725 0.97368 22.7972 0.97368C23.1487 0.97368 23.4367 1.13946 23.663 1.47102C23.8873 1.80259 24 2.09117 24 2.33677L23.8873 2.63047Z"
                          fill="#606D6A"
                        />
                      </svg>
                      <Typography
                        fontFamily={"inter"}
                        variant="body1"
                        color="#BFC3C2"
                        fontSize={19}
                        mt={2}
                      >
                        Gone are the days of complex, inefficient
                        systems—Agentic Creed streamlines every aspect of CRM,
                        sales, marketing, and operations to boost customer
                        engagement and accelerate revenue grow
                      </Typography>
                    </Box>
                  </Stack>
                </Grid>
                <Grid px={5} size={{ xs: 12, lg: 3 }}>
                  <Button
                    variant="contained"
                    fullWidth={false}
                    sx={{
                      background: "#FFFFFF1A",
                      maxWidth: 250,
                      height: 60,
                      fontSize: 16,
                      fontWeight: "semi-bold",
                      border: "1px solid #E0E0E0",
                      borderRadius: "8px",
                    }}
                    // onClick={() => {
                    //   router.push("#");
                    // }}
                  >
                    Get Started For Free
                  </Button>
                </Grid>
                <Grid px={5} size={{ xs: 12, lg: 9 }}>
                  <Stack
                    sx={{
                      background: "rgba(255, 255, 255, 0.2)",
                      borderRadius: "16px",
                      boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                      backdropFilter: "blur(5px)",
                      WebkitBackdropFilter: "blur(5px)",
                      border: "1px solid rgba(255, 255, 255, 0.3)",
                      p: 4,
                    }}
                  >
                    <Typography
                      variant="body1"
                      fontSize={24}
                      color={Color.commonWhite}
                    >
                      Run Smarter, Grow Faster
                    </Typography>
                    <CustomUl>
                      <li>
                        <Typography variant="body1" color="#BFC3C2">
                          Run Smarter, Grow Faster – Simplify your processes and
                          boost performance with intelligent, unified business
                          tools.
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="body1" color="#BFC3C2">
                          All-in-One Platform Built for Growth – Connect sales,
                          marketing, operations, and more in one seamless system
                          for scalable success.
                        </Typography>
                      </li>
                    </CustomUl>
                  </Stack>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
