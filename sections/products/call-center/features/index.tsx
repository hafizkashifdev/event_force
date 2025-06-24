"use client";
import {
  ComprehensiveCallAnalyticsImage,
  InteractiveLiveDashboardImage,
  PowerDiallerMaximumImpactImage,
  RealTimeKeyPerformanceIndicatorsImage,
  EffortlessQueueAndCallManagementImage,
  MonitorAgentAvailabilityAndPerformanceImage,
} from "@assets/products";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { Color, FontSize, FontWeight } from "@root/enems";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import HeroBox from "@components/hero-Box/hero-box";

const callCenterFeaturesData = [
  {
    id: 1,
    src: ComprehensiveCallAnalyticsImage,
    title: "Comprehensive Call Analytics",
    description:
      "Track every aspect of your calls, including incoming, outgoing, missed, abandoned, and transferred calls. Our advanced analytics help you refine your strategies, improving overall call centre efficiency.",
  },
  {
    id: 2,
    src: InteractiveLiveDashboardImage,
    title: "Interactive Live Dashboard",
    description:
      "Track every aspect of your calls, including incoming, outgoing, missed, abandoned, and transferred calls. Our advanced analytics help you refine your strategies, improving overall call centre efficiency.",
  },
  {
    id: 3,
    src: PowerDiallerMaximumImpactImage,
    title: "PowerDialler for Maximum Impact",
    description:
      "Automate outbound dialling with our PowerDialler to reduce manual errors, improve call connection rates, and ensure smooth interactions that drive more sales.",
  },
  {
    id: 4,
    src: RealTimeKeyPerformanceIndicatorsImage,
    title: "Real-Time Key Performance Indicators (KPIs)",
    description:
      "Keep a close eye on critical performance metrics like service levels, average wait times, handle times, talk times, and abandonment rates to continuously optimise your call centre operations.",
  },
  {
    id: 5,
    src: EffortlessQueueAndCallManagementImage,
    title: "Effortless Queue & Call Management",
    description:
      "Manage inbound calls efficiently with smart routing, prioritisation, and dynamic queue features like Global Queue and Queue 2. Provide fast, responsive service with minimal wait times.",
  },
  {
    id: 6,
    src: MonitorAgentAvailabilityAndPerformanceImage,
    title: "Monitor Agent Availability & Performance",
    description:
      "Track agent availability, time spent in queues, conversation durations, and productivity in real-time, enabling you to make data-driven decisions that maximise team performance.",
  },
];

export const CallCenterFeatures = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000, // Animation duration (in ms)
      once: false, // Whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <HeroBox
      customStyles={{
        p: { xs: 2, sm: 5, md: 10 },
        backgroundColor: Color?.bgColor,
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={8} data-aos="fade-up">
          <Grid size={{ xs: 12, sm: 6, md: 5, lg: 3, xl: 12 }}>
            <Typography
              fontSize={FontSize.subTitle2}
              fontWeight={FontWeight?.SemiBold}
              color={Color.TextGreen}
              my={3}
            >
              Features
            </Typography>
            <Typography
              fontSize={FontSize?.ExtraLarge}
              fontWeight={FontWeight?.Regular}
              color={Color.TextSecondary}
              my={3}
              lineHeight="28px"
            >
              Unlock the full potential of your call centre with Agentic Creed’s
              powerful, cutting-edge features designed to enhance productivity,
              customer satisfaction, and sales performance. From real-time
              insights to seamless call management, our platform equips you with
              the tools to optimise every aspect of your operations.
            </Typography>
          </Grid>
          <Grid container columnSpacing={3.75} data-aos="fade-up">
            {callCenterFeaturesData?.map((item: any) => {
              return (
                <Grid
                  size={{ xs: 12, sm: 6, md: 4, lg: 4, xl: 4 }}
                  key={item?.id}
                  sx={{
                    marginBottom: {
                      xs: 2,
                      sm: 2,
                      md: 2,
                      lg: "31px",
                      xl: "31px",
                    },
                  }}
                >
                  <Card
                    sx={{
                      height: { xs: "auto", sm: "100%" },
                      p: 3,
                      borderRadius: "8px",
                      textAlign: { xs: "center", sm: "start" },
                    }}
                  >
                    <Avatar
                      src={item?.src.src}
                      variant="rounded"
                      sx={{
                        width: 60,
                        height: 60,
                        margin: { xs: "0 auto", sm: "0" },
                      }}
                    />
                    <CardContent sx={{ px: 0 }}>
                      <Typography
                        gutterBottom
                        fontSize={FontSize?.Huge}
                        component="div"
                        fontWeight={FontWeight?.SemiBold}
                        color={Color.TextGreen}
                      >
                        {item?.title}
                      </Typography>
                      <Typography
                        fontSize={FontSize?.Large}
                        fontWeight={FontWeight?.Regular}
                        sx={{
                          color: Color.TextSecondary,
                          lineHeight: "24px",
                          latterSpacing: "-0.3",
                        }}
                      >
                        {item?.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Container>
    </HeroBox>
  );
};
