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
import Image from "next/image";
import { introductionImage } from "@assets/home";
import { ContainerGridLayout } from "@components/layouts/container-grid-layout";
import { ItemGridLayout } from "@components/layouts/item-grid-layout";
import SlideUpInView from "@components/animations/animation-scroll/slide-up-in-view";
import { ANIMATIONS_BASE_DURATION } from "@root/constants/animations";
import SlideSidewayInView from "@components/animations/animation-scroll/slide-sideway-in-view";
import AboutUs from "@sections/about-us";

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
  const count = useMotionValue(0);
  const [displayCount, setDisplayCount] = useState(0);
  const reviews = useMotionValue(100);
  const [reviewsCount, setReviewsCount] = useState(0); // React state for rendering

  useEffect(() => {
    // Sync motion value with React state
    const unsubscribe = count.onChange((latest) => {
      setDisplayCount(Math.round(latest)); // Update state with rounded value
    });
    const unsubscribeTwo = reviews.onChange((latest) => {
      setReviewsCount(Math.round(latest));
    });

    // Animate the count value
    const controls = animate(count, 50, { duration: 3, ease: "easeInOut" });
    const controlsww = animate(reviews, 3500, {
      duration: 5,
      ease: "easeInOut",
    });

    return () => {
      controls.stop();
      controlsww.stop();
      unsubscribe();
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
        <Box>
          <HeroCard />
        </Box>
      </Box>
      <HeroBox>
        <Container data-aos="fade-down" maxWidth="xl" sx={{ py: 0 }}>
          <Grid size={12}>
            <Stack>
              <Stack
                flexDirection={"row"}
                gap={1}
                justifyContent={"center"}
                my={1}
                mt={{ xs: 2, md: -4 }}
              >
                <Typography variant="h2" color={Color.TextGreen}>
                  Premium Event Mobility and Logistics
                </Typography>
              </Stack>
            </Stack>
          </Grid>
        </Container>
      </HeroBox>

      <ContainerGridLayout customStyles={{ alignItems: "center", mt: 8 }}>
        <ItemGridLayout md={5} lg={6}>
          <SlideUpInView height="100%">
            <Box
              sx={{
                height: "100%",
              }}
            >
              <Typography
                sx={{
                  fontSize: FontSize?.ExtraLarge,
                  fontWeight: FontWeight?.SemiBold,
                  lineHeight: "30px",
                  letterSpacing: "-0.3px",
                  color: "#697C77",
                  py: { xs: 10, md: 5 },
                  px: { xs: 10, md: 12 },
                }}
              >
                At Event Force for Entertainment, we specialize in managing and
                delivering transportation and logistics services for high
                profile events, VIP delegations, corporate functions, and
                entertainment festivals across Saudi Arabia. Whether you need
                luxury chauffeured vehicles, efficient shuttle coordination, or
                large-scale fleet support, we ensure everything runs smoothly,
                professionally, and on time, so you can focus on your event
                while we handle the movement behind the scenes. With deep
                experience in both public and private sectors, and a reputation
                for reliability, Event Force is trusted by top-tier clients who
                expect nothing but the best.
              </Typography>
              <br />

              <br />
              <Box></Box>
            </Box>
          </SlideUpInView>
        </ItemGridLayout>
        <ItemGridLayout md={7} lg={6}>
          <SlideSidewayInView>
            <Image
              src={introductionImage}
              alt="image"
              style={{
                maxWidth: "auto",
                width: "670px",
                height: "auto",
                marginLeft: "auto",
                objectFit: "contain",
              }}
            />
          </SlideSidewayInView>
        </ItemGridLayout>
      </ContainerGridLayout>
      <Box sx={{mt:-12}}>
<AboutUs/></Box>
      <HeroBox>
        <Grid
          data-aos="fade-down"
          container
          sx={{
            bgcolor: '#67B6B2',
            py: 9,
            px: 6,
            borderRadius: "5px",
          }}
        >
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack gap={2} flexDirection={"row"} alignItems="center">
              <Typography variant="h4" fontSize={40} color={Color.commonWhite}>
               Trusted by Top-Tier Clients Across Saudi Arabia{" "}
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
                  Successful Rides Delivered{" "}
                </Typography>
                <Typography
                  variant="body1"
                  fontSize={FontSize.Small}
                  color={Color.commonWhite}
                  fontWeight={FontWeight.Regular}
                >
             From VIP delegations to large-scale events, our expert logistics ensure flawless execution..{" "}
                </Typography>
              </Stack>
              <Stack>
                <motion.pre>
                  <Typography
                    variant="body1"
                    fontSize={FontSize.largeTitle}
                    color="white"
                  >
                    4.9
                    <Rating name="half-rating" defaultValue={7} precision={7} />
                  </Typography>
                </motion.pre>

                <Typography
                  variant="body1"
                  fontSize={FontSize.ExtraLarge}
                  color="white"
                >
                  Rated by {reviewsCount}+ Satisfied Partners
                </Typography>
                <Typography
                  variant="body1"
                  fontSize={FontSize.Small}
                  fontWeight={FontWeight.Regular}
               color={Color.commonWhite}
                >
                  Seamless coordination, luxurious comfort, and unmatched reliability in every mile.

.{" "}
                </Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </HeroBox>
    </>
  );
}

export default HomeSections;
