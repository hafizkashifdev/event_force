"use client";
import ProgressIcon from "@assets/icons/progress-icon";
import HeroBox from "@components/hero-Box/hero-box";
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Rating,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Color } from "@root/enems";
import { FontSize, FontWeight } from "@root/enems/text-size";
import AOS from "aos";
import "aos/dist/aos.css";
import { animate, motion, useMotionValue } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { HeroCard } from "./hero-card";

const CustomUl2 = styled("ul")`
  li::marker {
    color: ${Color.primaryMain};
  }
  li:nth-of-type(2)::marker {
    color: ${Color.TextGrayMedium}; // Color for the second list item
  }

  li:nth-of-type(3)::marker {
    color: ${Color.Grey}; // Color for the third list item
  }

  li:nth-of-type(4)::marker {
    color: ${Color.textGray}; // Color for the fourth list item
  }
`;
const ACCardData = [
  {
    title: "Advanced Analytics ",
    smTitle: "Data-driven insights for smarter decisions.",
    sb: "Unlock powerful insights with real-time data tracking and reports for smarter decisions.",
  },
  {
    title: "Highly Secured",
    smTitle: "Top-tier encryption ensures complete safety.",
    sb: "Your data, our priority! Enjoy enterprise-grade security with encryption and compliance.",
  },
  {
    title: "No Hidden Charge",
    smTitle: "Transparent pricing with no surprises.",
    sb: "What you see is what you pay! Transparent pricing with zero surprises.",
  },
  {
    title: "24/7 Support",
    smTitle: "Always here for your needs.",
    sb: "Support you can rely on anytime. We’re always ready to help.",
  },
  {
    title: "Scalable & Customisable",
    smTitle: "Grows and adapts with you.",
    sb: "Built for your growth! Flexible features that evolve with your business needs.",
  },
  {
    title: "Seamless Integrations",
    smTitle: "Connect effortlessly with business tools.",
    sb: "Connect with ease! Integrate effortlessly with your favorite business tools.",
  },
];
const creedData = [
  {
    number: "01",
    title: "Marketing – Driven Marketing Excellence",
    description:
      "Leverage automation, customer segmentation, and targeted campaigns to maximise reach and ROI.",
  },
  {
    number: "02",
    title: "Sales – Close Deals Faster, Sell Smarter",
    description:
      "Manage pipelines, track leads, and automate follow-ups to boost conversions.",
  },
  {
    number: "03",
    title: "Services – Deliver Exceptional Customer Support",
    description:
      "Enhance ticketing, live chat, and knowledge base management for seamless customer support.",
  },
  {
    number: "06",
    title: "Contracts – Secure & Efficient Digital Contract Management",
    description:
      "Digitise contracts with secure signing, tracking, and compliance features for seamless workflows.",
  },
  {
    number: "05",
    title: "Meeting Scheduler – Smart Scheduling & Time Management",
    description:
      "Seamlessly coordinate meetings, manage appointments, and avoid scheduling conflicts with intelligent automation.",
  },
  {
    number: "04",
    title: "Operations – Optimise Your Business Processes",
    description:
      "Automate tasks, streamline workflows, and enhance decision-making for maximum efficiency.",
  },
  {
    number: "07",
    title: "Call Centre – Enhanced Customer Interaction",
    description:
      "Enhance customer interactions with automated call routing, real-time support tracking, and streamlined communication tools.",
  },
  {
    number: "08",
    title: "Loyalty – Strengthen Customer Retention & Rewards",
    description:
      "Boost customer loyalty with rewards, automated engagement programs, and personalised offers.",
  },
  {
    number: "09",
    title: "Agentic007 – Advanced AI for Business Growth",
    description:
      "Experience the next level of business intelligence with Agentic007, delivering smart automation and predictive analytics.",
  },
];
const circleStyle = {
  width: 64,
  height: 64,
  borderRadius: "50%",
  backgroundColor: "#F0F5F4",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: 600,
  color: "#5D6C6B",
  fontSize: 20,
  marginBottom: 2,
  mx: "auto",
};

function HomeSections() {
  const count = useMotionValue(0); // Motion value
  const [displayCount, setDisplayCount] = useState(0); // React state for rendering
  const reviews = useMotionValue(100); // Motion value
  const [reviewsCount, setReviewsCount] = useState(0); // React state for rendering

  useEffect(() => {
    // Sync motion value with React state
    const unsubscribe = count.onChange((latest) => {
      setDisplayCount(Math.round(latest)); // Update state with rounded value
    });
    const unsubscribeTwo = reviews.onChange((latest) => {
      setReviewsCount(Math.round(latest)); // Update state with rounded value
    });

    // Animate the count value
    const controls = animate(count, 50, { duration: 3, ease: "easeInOut" });
    const controlsww = animate(reviews, 3500, {
      duration: 5,
      ease: "easeInOut",
    });

    return () => {
      controls.stop(); // Stop animation on unmount
      controlsww.stop(); // Stop animation on unmount
      unsubscribe(); // Cleanup listener
      unsubscribeTwo();
    };
  }, [count]);
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (in ms)
      once: false, // Whether animation should happen only once - while scrolling down
    });
  }, []);
  const router = useRouter();

  return (
    <>
      <Box
        sx={{
          py: { xs: 10, md: 15 },
        }}
      >
        <Box
          sx={{
            backgroundImage: { xs: "none", md: `url('homeback.svg')` },
            backgroundRepeat: "no-repeat",
            backgroundSize: "50%",
            backgroundPositionX: "140%",
            backgroundPositionY: "70%",
          }}
        >
          <HeroCard />
        </Box>
      </Box>
      <HeroBox>
        <Container data-aos="fade-down" maxWidth="xl" sx={{ py: 6 }}>
          <Grid size={12} mt={2}>
            <Stack>
              <Stack
                flexDirection={"row"}
                gap={2}
                justifyContent={"center"}
                my={5}
              >
                <Typography variant="h2" color={Color.TextGreen}>
                  Why Choose Agentic Creed?
                </Typography>
              </Stack>
              <Grid container spacing={0}>
                {ACCardData.map((item, index) => (
                  <Grid
                    data-aos="fade-up"
                    key={index}
                    size={{ xs: 12, sm: 6, md: 4, lg: 4 }}
                    sx={{
                      // borderLeft: `1px solid ${Color.LightGrey}`,
                      borderRight: {
                        xs: "unset",
                        lg: `1px solid ${Color.LightGrey}`,
                      },
                      borderBottom: {
                        xs: "unset",
                        lg: `1px solid ${Color.LightGrey}`,
                      },
                      // Remove the right border for the last item in each row
                      "&:nth-of-type(3n)": {
                        borderRight: { lg: "none" },
                      },
                      // Remove the bottom border for the last row
                      "&:nth-last-of-type(-n+3)": {
                        borderBottom: { lg: "none" },
                      },
                    }}
                  >
                    <Paper
                      variant="elevation"
                      elevation={0}
                      sx={{
                        height: 200,
                        mb: 3,
                      }}
                    >
                      <Stack px={4} py={4} gap={1}>
                        <Typography
                          variant="h2"
                          color={Color.primaryMain}
                          fontSize={FontSize.Huge}
                          fontWeight={700}
                        >
                          {item.title}
                        </Typography>
                        <Typography
                          variant="body1"
                          color={Color.textGray}
                          fontSize={FontSize.Huge}
                          fontWeight={FontWeight.SemiBold}
                        >
                          {item.smTitle}
                        </Typography>
                        <Typography
                          variant="body1"
                          color={Color.textLightGray}
                          fontSize={FontSize.Large}
                        >
                          {item.sb}
                        </Typography>
                      </Stack>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Stack>
          </Grid>
        </Container>
      </HeroBox>
      <HeroBox>
        <Grid
          data-aos="fade-down"
          container
          sx={{
            bgcolor: Color.TextGreen,
            py: 9,
            px: 6,
            borderRadius: "5px",
          }}
        >
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack gap={2} flexDirection={"row"} alignItems="center">
              <Typography variant="h3" fontSize={40} color={Color.commonWhite}>
                Trusted by Thousands of Businesses Worldwide{" "}
              </Typography>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack
              gap={2}
              flexDirection={"row"}
              alignItems="center"
              flexWrap={{ xs: "wrap", lg: "unset" }}
            >
              <Stack pr={10}>
                <motion.pre>
                  <Typography
                    variant="body1"
                    fontSize={FontSize.largeTitle}
                    color="white"
                  >
                    {displayCount}k+
                  </Typography>
                </motion.pre>

                <Typography
                  variant="body1"
                  fontSize={FontSize.ExtraLarge}
                  color="white"
                >
                  Active Users{" "}
                </Typography>
                <Typography
                  variant="body1"
                  fontSize={FontSize.Small}
                  color="#B9C1BF"
                  fontWeight={FontWeight.Regular}
                >
                  Empowering businesses globally with seamless CRM, marketing,
                  and automation solutions.{" "}
                </Typography>
              </Stack>
              <Stack>
                <motion.pre>
                  <Typography
                    variant="body1"
                    fontSize={FontSize.largeTitle}
                    color="white"
                  >
                    4.7
                    <Rating name="half-rating" defaultValue={7} precision={7} />
                  </Typography>
                </motion.pre>

                <Typography
                  variant="body1"
                  fontSize={FontSize.ExtraLarge}
                  color="white"
                >
                  Backed by {reviewsCount}+ positive reviews
                </Typography>
                <Typography
                  variant="body1"
                  fontSize={FontSize.Small}
                  fontWeight={FontWeight.Regular}
                  color="#B9C1BF"
                >
                  Empowering businesses globally with seamless CRM, marketing,
                  and automation solutions.{" "}
                </Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </HeroBox>
      <HeroBox>
        <Container data-aos="fade-down" maxWidth="xl" sx={{ py: 6 }}>
          <Typography
            variant="h3"
            align="center"
            color={Color.TextGreen}
            gutterBottom
          >
            Agentic Creed – Powering Every Business Function
          </Typography>
          <Box
            sx={{
              position: "relative",
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" },
              gap: 4,
              mt: 6,
            }}
          >
            {creedData.map((item, index) => (
              <Box
                key={item.number}
                sx={{
                  textAlign: "center",
                  position: "relative",
                  px: 2,
                  pt: 2,
                }}
              >
                {item.number === "06" ? (
                  <Box
                    sx={{
                      position: "absolute",
                      top: "200px",
                      right: "0px",
                      left: "-190px",
                      transform: "rotate(90deg) rotateX(0deg)",

                      width: 337,
                      height: 40,
                      background: `url('/arrow-dashed.svg') no-repeat center center`,
                      backgroundSize: "contain",
                      display: { xs: "none", lg: "block" },
                    }}
                  />
                ) : null}
                <Box sx={circleStyle}>{item.number}</Box>
                <Typography
                  variant="subtitle1"
                  color={Color.TextGreen}
                  fontWeight={600}
                  mb={1}
                >
                  {item.title}
                </Typography>
                <Typography variant="body2" color={Color.TextSecondary}>
                  {item.description}
                </Typography>
                {item.number === "01" || item.number === "07" ? (
                  <Box
                    sx={{
                      position: "absolute",
                      top: "15%",
                      right: "-190px",
                      left: "auto",
                      transform: index % 3 === 2 ? "rotateY(180deg)" : "none",
                      width: 337,
                      height: 40,
                      background: `url('/arrow-dashed.svg') no-repeat center center`,
                      backgroundSize: "contain",
                      display: { xs: "none", lg: "block" },
                    }}
                  />
                ) : null}
                {item.number === "02" || item.number === "08" ? (
                  <Box
                    sx={{
                      position: "absolute",
                      top: "15%",
                      right: "-190px",
                      left: "auto",
                      transform: "rotateX(180deg)",
                      width: 337,
                      height: 40,
                      background: `url('/arrow-dashed.svg') no-repeat center center`,
                      backgroundSize: "contain",
                      display: { xs: "none", lg: "block" },
                    }}
                  />
                ) : null}
                {item.number === "06" || item.number === "05" ? (
                  <Box
                    sx={{
                      position: "absolute",
                      top: "15%",
                      right: "-190px",
                      left: "auto",
                      transform:
                        item.number === "06"
                          ? "rotateY(180deg)"
                          : "rotate(180deg)",

                      width: 337,
                      height: 40,
                      background: `url('/arrow-dashed.svg') no-repeat center center`,
                      backgroundSize: "contain",
                      display: { xs: "none", lg: "block" },
                    }}
                  />
                ) : null}
                {item.number === "03" ? (
                  <Box
                    sx={{
                      position: "absolute",
                      top: "100%",
                      right: "-190px",
                      left: "auto",
                      transform: "rotate(94deg) rotateX(180deg)",

                      width: 337,
                      height: 40,
                      background: `url('/arrow-dashed.svg') no-repeat center center`,
                      backgroundSize: "contain",
                      display: { xs: "none", lg: "block" },
                    }}
                  />
                ) : null}
              </Box>
            ))}
          </Box>
        </Container>
      </HeroBox>
      <HeroBox>
        <Grid
          container
          data-aos="fade-up"
          sx={{ p: 6, bgcolor: Color.lightGraySecondary }}
        >
          <Grid size={{ xs: 12, md: 6 }} mt={2}>
            <Stack flexDirection={"column"} alignItems="center" mr={0} gap={4}>
              <Typography
                fontSize={FontSize.Large}
                color={Color.TextMain}
                fontWeight={FontWeight.SemiBold}
              >
                Smart Insights for Growth
              </Typography>
              <Paper
                variant="elevation"
                elevation={3}
                sx={{
                  py: 2,
                  px: 4,
                  borderRadius: "16px",
                  ml: { xs: 0, lg: 5 },
                  boxShadow: "0 4px 30px rgba(230, 239, 237, 1)",
                }}
              >
                <Typography
                  fontSize={FontSize.ExtraLarge}
                  color={Color.TextMain}
                  fontWeight={FontWeight.SemiBold}
                >
                  Smart insights for growth
                </Typography>
                <Grid container>
                  <Grid size={{ xs: 2 }}>
                    <Stack mt={5} alignItems={"center"}>
                      <ProgressIcon
                        sx={{
                          fontSize: 59,
                        }}
                      />
                    </Stack>
                  </Grid>
                  <Grid size={{ xs: 10 }}>
                    <CustomUl2>
                      <li
                        style={{
                          color: Color.primaryMain,
                        }}
                      >
                        <Stack
                          flexDirection={"row"}
                          gap={2}
                          justifyContent="Space-between"
                          alignItems="Flex-start"
                        >
                          <Typography
                            fontSize={FontSize.Medium}
                            color={Color.TextGreen}
                            fontWeight={FontWeight.SemiBold}
                          >
                            Real-Time Analytics
                          </Typography>
                          <Typography
                            fontSize={FontSize.Medium}
                            color={Color.TextGreen}
                            fontWeight={FontWeight.SemiBold}
                          >
                            35%
                          </Typography>
                        </Stack>
                      </li>
                      <li>
                        <Stack
                          flexDirection={"row"}
                          gap={2}
                          justifyContent="Space-between"
                          alignItems="Flex-start"
                        >
                          <Typography
                            fontSize={FontSize.Medium}
                            color={Color.TextGreen}
                            fontWeight={FontWeight.SemiBold}
                          >
                            Global Reach{" "}
                          </Typography>
                          <Typography
                            fontSize={FontSize.Medium}
                            color={Color.TextGreen}
                            fontWeight={FontWeight.SemiBold}
                          >
                            25%
                          </Typography>
                        </Stack>
                      </li>
                      <li>
                        <Stack
                          flexDirection={"row"}
                          gap={2}
                          justifyContent="Space-between"
                          alignItems="Flex-start"
                        >
                          <Typography
                            fontSize={FontSize.Medium}
                            color={Color.TextGreen}
                            fontWeight={FontWeight.SemiBold}
                          >
                            User Engagement Trends
                          </Typography>
                          <Typography
                            fontSize={FontSize.Medium}
                            color={Color.TextGreen}
                            fontWeight={FontWeight.SemiBold}
                          >
                            20%
                          </Typography>
                        </Stack>
                      </li>
                      <li>
                        <Stack
                          flexDirection={"row"}
                          gap={2}
                          justifyContent="Space-between"
                          alignItems="Flex-start"
                        >
                          <Typography
                            fontSize={FontSize.Medium}
                            color={Color.TextGreen}
                            fontWeight={FontWeight.SemiBold}
                          >
                            Conversion Optimization{" "}
                          </Typography>
                          <Typography
                            fontSize={FontSize.Medium}
                            color={Color.TextGreen}
                            fontWeight={FontWeight.SemiBold}
                          >
                            20%
                          </Typography>
                        </Stack>
                      </li>
                    </CustomUl2>
                  </Grid>
                </Grid>
              </Paper>
              <Paper
                variant="elevation"
                elevation={3}
                sx={{
                  py: 2,
                  px: 4,
                  borderRadius: "16px",
                }}
              >
                <Stack gap={2} flexDirection={"row"} alignItems="center">
                  <AvatarGroup max={3}>
                    <Avatar alt="Remy Sharp" src="per1.png" />
                    <Avatar alt="Travis Howard" src="per2.png" />
                    <Avatar alt="Cindy Baker" src="per3.png" />
                  </AvatarGroup>
                  <Stack>
                    <Typography
                      fontSize={FontSize.Huge}
                      fontWeight={FontWeight.SemiBold}
                      color={Color.TextGreen}
                    >
                      120+
                    </Typography>
                    <Typography
                      fontSize={FontSize.Huge}
                      color={Color.TextGrayMedium}
                    >
                      Active Users
                    </Typography>
                  </Stack>
                </Stack>
              </Paper>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} mt={2}>
            <Stack>
              <Typography
                variant="h2"
                color={Color.TextGreen}
                fontWeight={FontWeight.SemiBold}
              >
                Empower Your Growing Business
              </Typography>
              <Typography
                fontSize={FontSize.ExtraLarge}
                color={Color.TextSecondary}
              >
                We provide cutting-edge solutions to help your startup scale
                effortlessly. With seamless integrations and powerful analytics,
                Agentic Creed ensures smooth operations at every stage of
                growth.{" "}
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </HeroBox>
      <HeroBox px={1}>
        <Grid container data-aos="fade-up" sx={{ p: 6 }}>
          <Grid size={{ xs: 12, xl: 6 }} mt={2} mb={2}>
            <Stack gap={3} p={{ xs: 0, lg: 8 }}>
              <Typography
                variant="h3"
                fontSize={FontSize.largeTitle}
                color={Color.TextGreen}
              >
                Success Stories – Hear from Our Customers
              </Typography>
              <Typography
                variant="body1"
                fontSize={FontSize.ExtraLarge}
                color={Color.TextGreen}
              >
                Discover how businesses are transforming their operations with
                Agentic Creed. Our solutions empower teams, boost efficiency,
                and drive measurable results.{" "}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  background: Color.primaryMain,
                  maxWidth: 200,
                  height: 45,
                  fontSize: 16,
                  fontWeight: "semi-bold",
                  py: 2,
                }}
                onClick={() => {
                  router.push("https://app.agenticcreed.ai/sign-up");
                }}
              >
                Get Started Now
              </Button>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, xl: 6 }} mt={2}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 4,
              }}
            >
              {[
                {
                  subtile:
                    '"The insights helped us close more deals and optimise our sales funnel like never before."',
                  personName: "Marc W.",
                  personTitle: " CEO, Tech Innovations",
                  picUrl: "per4.png",
                },
                {
                  subtile:
                    '"Agentic Creed transformed our CRM strategy, making customer engagement seamless and highly effective"',
                  personName: "Sarah B.",
                  personTitle: "Marketing Manager, GrowthPro",
                  picUrl: "per3.png",
                },
                {
                  subtile:
                    '"We saved countless hours by automating workflows, and our customer satisfaction rates skyrocketed!"',
                  personName: "Cindy M.",
                  personTitle: "Customer Success Lead, SupportWave",
                  picUrl: "per2.png",
                },
                {
                  subtile:
                    '"Streamlining internal processes with automation has been a game-changer for our team."',
                  personName: "David L.",
                  personTitle: "Operations Head, TaskFlow",
                  picUrl: "per1.png",
                },
              ].map(({ subtile, personName, personTitle, picUrl }, index) => {
                return (
                  <Paper
                    key={index}
                    variant="elevation"
                    elevation={2}
                    sx={{
                      p: 2,
                      px: 3,
                      bgcolor: "#F0F5F4",
                      borderRadius: "16px",
                      height: { lg: 223, xs: "unset" },
                      width: 320,
                      mt: index === 1 || index === 3 ? { xl: 4, xs: 0 } : 0,
                    }}
                  >
                    <Stack gap={4}>
                      <Rating
                        name="half-rating"
                        defaultValue={7}
                        precision={7}
                      />
                      <Typography
                        variant="body1"
                        fontSize={FontSize.Large}
                        color={Color.TextGreen}
                      >
                        {subtile}
                      </Typography>
                      <Stack flexDirection={"row"} mt={"auto"}>
                        <Avatar
                          alt="Remy Sharp"
                          src={picUrl}
                          sx={{
                            width: 56,
                            height: 56,
                          }}
                        />
                        <Stack ml={2}>
                          <Typography
                            variant="body1"
                            fontSize={FontSize.Large}
                            color={Color.TextGreen}
                            fontWeight={540}
                          >
                            {personName}
                          </Typography>
                          <Typography
                            variant="body1"
                            fontSize={FontSize.Medium}
                            color={Color.TextGrayMedium}
                            width={"100%"}
                          >
                            {personTitle}
                          </Typography>
                        </Stack>
                      </Stack>
                    </Stack>
                  </Paper>
                );
              })}
            </Box>
          </Grid>
        </Grid>
      </HeroBox>
      <HeroBox>
        <Grid container data-aos="fade-down" sx={{ p: 6 }}>
          <Grid size={{ xs: 12 }} my={2}>
            <Stack justifyContent={"center"} alignItems="center">
              <Typography variant="h3" color={Color.TextGreen}>
                Explore Our Resources
              </Typography>
            </Stack>
          </Grid>
          <Grid
            size={{ xs: 12, md: 12 }}
            mt={2}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Stack
              flexDirection={"row"}
              gap={4}
              justifyContent="center"
              flexWrap={"wrap"}
            >
              {[
                {
                  picUrl: "c1.png",
                  title: "Growth Strategies Unleashed",
                  description:
                    "Unlock strategies to accelerate your business growth.",
                  btnText: "Business Growth",
                },
                {
                  picUrl: "c2.png",
                  title: "Attract and Retain Clients",
                  description:
                    "Master the art of attracting and retaining loyal customers.",
                  btnText: "Client Engagement",
                },
                {
                  picUrl: "c3.png",
                  title: "Success Stories Revealed",
                  description:
                    "Discover how businesses thrive with Agentic Creed’s expertise.",
                  btnText: "Success Stories",
                },
              ].map(({ title, picUrl, description, btnText }, index) => (
                <Card
                  key={index}
                  sx={{ maxWidth: 450, height: { lg: 450, xs: "unset" } }}
                >
                  <CardMedia
                    sx={{ height: 254 }}
                    image={picUrl}
                    title="green iguana"
                  />

                  <CardContent>
                    <Stack gap={2}>
                      <Button
                        variant="contained"
                        color="primary"
                        sx={{
                          background: Color.primaryMain,
                          maxWidth: 240,
                          height: 45,
                          fontSize: 16,
                          fontWeight: "semi-bold",
                          py: 2,
                        }}
                      >
                        {btnText}
                      </Button>
                      <Typography
                        variant="h2"
                        fontSize={FontSize.ExtraHuge}
                        color={Color.TextGreen}
                        fontWeight={FontWeight.SemiBold}
                      >
                        {title}
                      </Typography>
                      <Typography
                        variant="body1"
                        fontSize={FontSize.Large}
                        color={Color.TextGreen}
                      >
                        {description}
                      </Typography>
                    </Stack>
                  </CardContent>
                </Card>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </HeroBox>
      <HeroBox>
        <Container maxWidth="lg" sx={{ py: 6 }}>
          <Stack
            gap={2}
            justifyContent={"center"}
            alignItems="center"
            textAlign={"center"}
            p={{ xs: 0, lg: 8 }}
          >
            <Typography
              variant="h2"
              fontSize={FontSize.largeTitle}
              fontWeight={FontWeight.SemiBold}
              color={Color.TextGreen}
            >
              Get Started with Agentic Creed
            </Typography>
            <Typography
              variant="h2"
              fontSize={FontSize.ExtraLarge}
              fontWeight={FontWeight.Regular}
              color={Color.TextGreen}
            >
              We have designed our solutions to empower businesses and
              professionals at every stage. Agentic Creed provides the fastest
              and most efficient way to manage sales, customers, and operations
              seamlessly.{" "}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{
                background: Color.primaryMain,
                maxWidth: 240,
                height: 45,
                fontSize: 16,
                fontWeight: "semi-bold",
                py: 2,
              }}
              onClick={() => {
                router.push("https://app.agenticcreed.ai/sign-up");
              }}
            >
              Get Started Now
            </Button>
          </Stack>
        </Container>
      </HeroBox>
    </>
  );
}

export default HomeSections;
