"use client";
import {
  Avatar,
  Box,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { Color } from "@root/enems";
import { FontSize, FontWeight } from "@root/enems/text-size";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroBox from "@components/hero-Box/hero-box";

const contractFeaturesData = [
  {
    id: 1,
    number: "01",
    title: "Select or Create a Contract",
    description:
      "Choose from a collection of professionally designed templates tailored for various industries, including corporate, HR, sales, and rental contracts. Alternatively, create a custom contract from scratch, defining terms and conditions as per business requirements.",
  },
  {
    id: 2,
    number: "02",
    title: "Fill in Essential Details",
    description:
      "Easily input contract details using structured fields, ensuring precision and consistency. The system allows users to customise clauses, add necessary attachments, and include critical data points such as parties involved, financial terms, and timelines.",
  },
  {
    id: 3,
    number: "03",
    title: "Enable Approval & E-Signature",
    description:
      "Ensure seamless collaboration by setting up multi-party approval workflows. Assign roles and permissions for review, modification, and final approval. Securely finalise contracts with integrated e-signature functionality, making execution quick and legally binding.",
  },
  {
    id: 4,
    number: "04",
    title: "Automate Reminders & Deadlines",
    description:
      "Stay ahead of contract obligations with automated notifications for key milestones, including expiration dates, renewals, and compliance deadlines. Set up alerts for approvals and follow-ups to ensure timely action on agreements.",
  },
  {
    id: 5,
    number: "05",
    title: "Track, Monitor & Ensure Compliance",
    description:
      "Monitor contract performance in real-time with a centralized dashboard. Track status updates, view audit trails, and ensure compliance with regulatory requirements. Gain insights into contract renewals, expirations, and modifications to prevent lapses or breaches.",
  },
];

export const ContractFeatures = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <HeroBox customStyles={{ p: { xs: 2, sm: 5, md: 10 } }} mt={5}>
      <Container maxWidth="xl">
        <Box
          data-aos="fade-up"
          sx={{
            width: "100%",
            maxWidth: "70%",
            textAlign: "center",
            mx: "auto",
          }}
        >
          <Typography
            fontSize={{
              xs: FontSize?.circleTitle,
              sm: FontSize?.subTitle2,
              md: FontSize?.largeTitle,
            }}
            fontWeight={FontWeight?.SemiBold}
            color={Color.TextGreen}
          >
            Streamline, Secure, and Simplify <br /> Contracts with Agentic
            Creed!
          </Typography>
          <Typography variant="subtitle1" color={Color.TextSecondary} my={1}>
            Event Force Contracts simplifies contract management by
            streamlining the entire lifecycle, from creation to execution.
            Whether handling sales agreements, corporate contracts, or rental
            agreements, the system ensures accuracy, efficiency, and compliance.
          </Typography>
        </Box>
        <Grid container spacing={8} my={10} justifyContent="center">
          {contractFeaturesData?.map((item: any) => {
            return (
              <Grid
                size={{ xs: 12, sm: 6, md: 4, lg: 4, xl: 4 }}
                key={item?.id}
              >
                <Box
                  data-aos="fade-up"
                  sx={{
                    height: "100%",
                    width: "100%",
                    textAlign: "center",
                    "&:hover .hover-avatar": {
                      backgroundColor: Color.primaryMain,
                      color: Color?.commonWhite, // Optional: change text color on hover
                    },
                  }}
                >
                  <Avatar
                    className="hover-avatar"
                    variant="rounded"
                    sx={{
                      width: 90,
                      height: 90,
                      margin: "0 auto",
                      fontSize: "40px",
                      borderRadius: "50%",
                      color: Color.TextGreen,
                      backgroundColor: Color.bgColor,
                      fontWeight: FontWeight?.SemiBold,
                    }}
                  >
                    {item?.number}
                  </Avatar>

                  <CardContent sx={{ px: 0 }}>
                    <Typography
                      gutterBottom
                      fontSize={FontSize?.Huge}
                      component="div"
                      fontWeight={FontWeight?.SemiBold}
                      color={Color.TextGreen}
                      my={2}
                    >
                      {item?.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: FontSize?.Large,
                        color: Color.TextSecondary,
                        lineHeight: "24px",
                        letterSpacing: "-0.3px", // typo fixed: `latterSpacing` → `letterSpacing`
                      }}
                    >
                      {item?.description}
                    </Typography>
                  </CardContent>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </HeroBox>
  );
};
