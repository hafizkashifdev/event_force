"use client";

import {
  contactCareerIcon,
  contactGeneralInquiriesIcon,
  contactHeadPhoneImage,
  contactInquiriesIcon,
  contactPartnerShipIcon,
  contactSearchIcon,
} from "@assets/contact";
import PhoneIcon from "@assets/icons/contact/phone-icon";
import SmsIcon from "@assets/icons/contact/sms-icon";
import { Avatar, Box, Card, Grid, Typography } from "@mui/material";
import { Color } from "@root/enems";
import { FontSize, FontWeight } from "@root/enems/text-size";
import React, { useEffect } from "react";
import AOS from "aos";
import { useRouter } from "next/navigation";
import HeroBox from "@components/hero-Box/hero-box";

const ContactCards = () => {
  const ContactCardsData = [
    {
      id: "1",
      src: contactHeadPhoneImage,
      title: "Customer Support",
      description:
        "Have a question or need help with our products? Our dedicated support team is here to assist you promptly and professionally.",
      smsIcon: <SmsIcon />,
      sms: "support@agenticcreed.com",
      phoneIcon: <PhoneIcon />,
      phone: "+447975777666",
    },
    {
      id: "2",
      src: contactSearchIcon,
      title: "Sales Inquiries",
      description:
        "Interested in our products or services? Our sales team is ready to provide detailed information and guide you in making the right choice for your business.",
      smsIcon: <SmsIcon />,
      sms: "support@agenticcreed.com",
      phoneIcon: <PhoneIcon />,
      phone: "+447975777666",
    },
    {
      id: "3",
      src: contactPartnerShipIcon,
      title: "Partnerships",
      description:
        "Looking to collaborate or explore partnership opportunities? We’d love to connect and discuss how we can work together.",
      smsIcon: <SmsIcon />,
      sms: "support@agenticcreed.com",
      phoneIcon: <PhoneIcon />,
      phone: "+447975777666",
    },
    {
      id: "4",
      src: contactCareerIcon,
      title: "Career Opportunities",
      description:
        "Join a forward-thinking team and grow your career with us. Visit our Careers page for current openings and how to apply.",
      smsIcon: <SmsIcon />,
      sms: "support@agenticcreed.com",
      phoneIcon: <PhoneIcon />,
      phone: "+447975777666",
    },
    {
      id: "5",
      src: contactInquiriesIcon,
      title: "Media Inquiries",
      description:
        "For press-related queries, interviews, or media collaborations, please get in touch with our media relations team.",
      smsIcon: <SmsIcon />,
      sms: "support@agenticcreed.com",
      phoneIcon: <PhoneIcon />,
      phone: "+447975777666",
    },
    {
      id: "6",
      src: contactGeneralInquiriesIcon,
      title: "General Inquiries",
      description:
        "Have a question that doesn’t fall into the above categories? We’re happy to help — reach out to us anytime.",
      smsIcon: <SmsIcon />,
      sms: "support@agenticcreed.com",
      phoneIcon: <PhoneIcon />,
      phone: "+447975777666",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, [AOS]);

  return (
    <HeroBox>
      <Typography
        sx={{
          fontSize: "48px",
          fontWeight: 600,
          color: Color.TextGreen,
          textAlign: "center",
          mt: "137px",
        }}
        data-aos="fade-down"
      >
        Contact Information
      </Typography>
      <Grid container spacing={4} data-aos="fade-up">
        {ContactCardsData.map((item) => (
          <Grid key={item.id} size={{ xs: 12, md: 6, lg: 4 }}>
            <Card
              sx={{
                border: "1px solid #E0E5E4",
                borderRadius: "8px",
                mt: "36px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "32px",
                }}
              >
                <Box sx={{ width: "64px", height: "64px" }}>
                  <Avatar
                    src={item?.src.src}
                    variant="square"
                    sx={{ width: "100%", height: "100%" }}
                  />
                </Box>
                <Typography
                  sx={{
                    fontSize: FontSize.Huge,
                    fontWeight: FontWeight.SemiBold,
                    color: Color.TextGreen,
                    mt: "30px",
                  }}
                >
                  {item.title}
                </Typography>
                <Box
                  sx={{
                    height: "120px",
                    overflowY: "auto",
                    mt: "15px",
                    "&::-webkit-scrollbar": {
                      width: "6px",
                    },
                    "&::-webkit-scrollbar-track": {
                      backgroundColor: "#f0f0f0",
                      borderRadius: "8px",
                    },
                    "&::-webkit-scrollbar-thumb": {
                      backgroundColor: "#ccc",
                      borderRadius: "8px",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: FontSize.Large,
                      color: Color.TextSecondary,
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    border: `1.5px solid ${Color.ShockingRed}`,
                    borderRadius: "8px",
                    width: "100%",
                    mt: "30px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: { sm: "nowrap", xs: "wrap" },
                      gap: 1,
                      fontSize: FontSize.Large,
                      fontWeight: FontWeight.Medium,
                      color: Color.TextGreen,
                      m: "12px 14px",
                    }}
                  >
                    {item.smsIcon}
                    <Typography>{item.sms}</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      gap: 1,
                      fontSize: FontSize.Large,
                      fontWeight: FontWeight.Medium,
                      color: Color.TextGreen,
                      m: "12px 14px",
                    }}
                  >
                    {item.phoneIcon}
                    <Typography>{item.phone}</Typography>
                  </Box>
                  <Typography
                    sx={{ fontSize: "16px", color: Color.TextSecondary }}
                  ></Typography>
                </Box>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </HeroBox>
  );
};

export default ContactCards;
