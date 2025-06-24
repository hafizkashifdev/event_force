import {
  TeamsMemberImage,
  TeamsMemberImage1,
  TeamsMemberImage10,
  TeamsMemberImage11,
  TeamsMemberImage12,
  TeamsMemberImage2,
  TeamsMemberImage3,
  TeamsMemberImage4,
  TeamsMemberImage5,
  TeamsMemberImage6,
  TeamsMemberImage7,
  TeamsMemberImage8,
  TeamsMemberImage9,
} from "@assets/about-us";
import { Box, Container, Grid, Typography } from "@mui/material";
import { Color } from "@root/enems";
import { FontSize, FontWeight } from "@root/enems/text-size";
import Image from "next/image";
import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import HeroBox from "@components/hero-Box/hero-box";
const TeamMembers = () => {
  const teamMembers = [
    {
      id: 1,
      image: TeamsMemberImage,
      name: "Shan Ul Haq",
      productOwner: " Product Owner",
    },
    {
      id: 2,
      image: TeamsMemberImage1,
      name: "Umer Shahid",
      productOwner: " Technical Lead",
    },
    {
      id: 3,
      image: TeamsMemberImage2,
      name: "Florence Alice Mitchell",
      productOwner: " Marketing Manager",
    },
    {
      id: 4,
      image: TeamsMemberImage3,
      name: "Adil Shahid",
      productOwner: "Project Manager",
    },
    {
      id: 5,
      image: TeamsMemberImage4,
      name: "Alfie Daniel Baker",
      productOwner: " Financial Analyst",
    },
    {
      id: 6,
      image: TeamsMemberImage5,
      name: "Ahmed Amer",
      productOwner: "Associate Project Manager",
    },
    {
      id: 7,
      image: TeamsMemberImage6,
      name: "Afaq",
      productOwner: "Senior Software Engineer",
    },
    {
      id: 8,
      image: TeamsMemberImage8,
      name: "William John Wright",
      productOwner: "Customer Training Manager",
    },
    {
      id: 9,
      image: TeamsMemberImage9,
      name: "Nouman Ishtiaq",
      productOwner: "Software Engineer",
    },
    {
      id: 10,
      image: TeamsMemberImage10,
      name: "Poppy Claire Edward",
      productOwner: "Loyalty Program Manager",
    },
    {
      id: 11,
      image: TeamsMemberImage11,
      name: "Waqas Ahmed",
      productOwner: " Software Engineer",
    },
    {
      id: 12,
      image: TeamsMemberImage12,
      name: "Anas",
      productOwner: "Design Lead",
    },
  ];

  useEffect(() => {
    Aos.init({
      duration: 1000, // Animation duration (in ms)
      once: false, // Whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <HeroBox>
      <Container maxWidth="xl" data-aos="fade-up">
        <Grid container spacing={2}>
          <Grid size={{ xs: 12 }} sx={{ mt: "80px", display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <Typography
              sx={{
                fontSize: "36px",
                fontWeight: FontWeight.SemiBold,
                color: Color.TextGreen,
                mt: "24px",
              }}
            >
              Meet Our Team Members
            </Typography>
            <Typography
              sx={{
                fontSize: FontSize.ExtraLarge,
                fontWeight: FontWeight.Regular,
                color: Color.TextSecondary,
                mt: "16px",
                maxWidth: '857px'
              }}
            >
              A diverse team of experts united by innovation and customer success.
              With backgrounds in software development, marketing, sales, and
              customer support, we deliver exceptional solutions with passion.
            </Typography>
          </Grid>
          {teamMembers.map((member) => (
            <Grid size={{ xs: 12, md: 3 }} sx={{ mt: "100px" }} key={member.id}>
              <Box sx={{ textAlign: "center" }} key={member.id}>
                <Image src={member.image} alt="member" />
                <Typography
                  sx={{
                    fontSize: FontSize.ExtraLarge,
                    fontWeight: FontWeight.SemiBold,
                    color: Color.TextGreen,
                    mt: "16px",
                  }}
                >
                  {member.name}
                </Typography>
                <Typography
                  sx={{
                    fontSize: FontSize.Large,
                    fontWeight: FontWeight.Regular,
                    color: Color.TextGreen,
                    mt: "16px",
                  }}
                >
                  {member.productOwner}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </HeroBox>

  );
};

export default TeamMembers;
