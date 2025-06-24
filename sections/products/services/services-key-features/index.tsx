"use client";
import {
  ProductsServicesDataReportImage,
  ProductsServicesDocumentImage,
  ProductsServicesEnquiryImage,
  ProductsServicesFeedbackImage,
  ProductsServicesParkTicketsCoupleImage,
  ProductsServicesRobustnessImage,
  ProductsServicesSettingsImage,
  ProductsServicesWebsiteIconImage,
  ProductsServicesWorkloadImage,
} from "@assets/products";
import {
  Avatar,
  Box,
  CardContent,
  Chip,
  Grid,
  Typography,
} from "@mui/material";
import { Color } from "@root/enems";
import { FontSize, FontWeight } from "@root/enems/text-size";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroBox from "@components/hero-Box/hero-box";

const servicesKeyFeaturesData = [
  {
    id: 1,
    src: ProductsServicesDataReportImage,
    title: "Comprehensive Dashboard",
    description:
      "Gain a unified view of all service operations, track key metrics, and manage tasks efficiently from a single interface.",
  },
  {
    id: 2,
    src: ProductsServicesParkTicketsCoupleImage,
    title: "Advanced Ticket Management",
    description:
      "Handle Incidents, Service Requests, and Enquiries seamlessly with automated workflows, priority tracking, and SLA management.",
  },
  {
    id: 3,
    src: ProductsServicesRobustnessImage,
    title: "Robust Asset Management",
    description:
      "Manage Software, Hardware, Contracts, Purchase Orders, and Catalogs for the customer portal, ensuring efficient asset lifecycle tracking.",
  },
  {
    id: 4,
    src: ProductsServicesWorkloadImage,
    title: "Optimised Workload Management",
    description:
      "Distribute tasks effectively, monitor agent performance, and balance workloads for improved service efficiency.",
  },
  {
    id: 5,
    src: ProductsServicesWebsiteIconImage,
    title: "Integrated Customer Portal",
    description:
      "Empower customers with self-service options, request tracking, and access to knowledge resources for faster issue resolution.",
  },
  {
    id: 6,
    src: ProductsServicesDocumentImage,
    title: "Knowledge Base & Documentation",
    description:
      "Centralised repository for FAQs, troubleshooting guides, and service documents to enhance user support and internal training.",
  },
  {
    id: 7,
    src: ProductsServicesFeedbackImage,
    title: "Real-Time Feedback & Surveys",
    description:
      "Gather valuable customer insights through surveys and feedback forms to refine service quality and satisfaction.",
  },
  {
    id: 8,
    src: ProductsServicesEnquiryImage,
    title: "Enquiry & Request Management",
    description:
      "Streamline customer enquiries with automated categorisation, tracking, and response handling for improved service engagement.",
  },
  {
    id: 9,
    src: ProductsServicesSettingsImage,
    title: "Advanced Settings & Configuration",
    description:
      "Customisable service workflows, role-based access controls, and automation rules to tailor the system to your needs.",
  },
];

export const ServicesKeyFeatures = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <HeroBox       customStyles={{
      pt: { xs: 10, sm: 10, md: 20 },
    }}>
      <Box
        data-aos="fade-up"
        sx={{ width: "100%", maxWidth: "70%", textAlign: "center", mx: "auto" }}
      >
        <Chip
          label="Smart, Seamless & Impactful."
          sx={{
            color: Color?.commonWhite,
            backgroundColor: Color.primaryMain,
            p: 3,
            my: 3,
            borderRadius: "57px",
            fontSize: FontSize?.Medium,
          }}
        />
        <Typography
          fontSize="36px"
          fontWeight={FontWeight?.SemiBold}
          color={Color.TextGreen}
        >
          Key Features of Agentic Creed Services
        </Typography>
        <Typography  fontSize={FontSize?.ExtraLarge} color={Color.TextSecondary} my={1}>
          Streamline service operations with efficient request management,
          automated communication, and real-time task tracking. Leverage
          analytics, a centralised client database, and secure document
          management for seamless service delivery.
        </Typography>
      </Box>
      <Grid container spacing={8} my={10}>
        {servicesKeyFeaturesData?.map((item: any) => {
          return (
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 4, xl: 4 }} key={item?.id}>
              <Box
                data-aos="fade-up"
                sx={{
                  height: "100%",
                  width: "100%",
                  textAlign: "center",
                }}
              >
                <Avatar
                  src={item?.src.src}
                  variant="rounded"
                  sx={{
                    width: 60,
                    height: 60,
                    margin: "0 auto",
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
                    sx={{
                      color: Color.TextSecondary,
                      lineHeight: "24px",
                      latterSpacing: "-0.3",
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
    </HeroBox>
  );
};
