"use client";
import {
  ProductsSalesTeamMemberOneImage,
  ProductsServicesReviewOneImage,
} from "@assets/products";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Rating,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { Color, FontSize } from "@root/enems";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroBox from "@components/hero-Box/hero-box";

const contractReviewData = [
  {
    id: 1,
    src: ProductsServicesReviewOneImage,
    clientName: "Alex Johnson",
    designation: "Operations Manager, TechMatter",
    star: 5,
    description:
      '"Managing contracts has never been easier! Event Force streamlined our entire agreement process, from creation to execution."',
  },
  {
    id: 2,
    src: ProductsSalesTeamMemberOneImage,
    clientName: "Sarah Williams",
    designation: "Legal Consultant, Apex Law Firm",
    star: 5,
    description:
      '"The automation and tracking features of Event Force Contracts saved us hours of work and ensured compliance at every step."',
  },
];

export const ContractReview = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <HeroBox
      customStyles={{
        p: { xs: 2, sm: 5, md: 10 },
        backgroundColor: Color?.bgColor,
      }}
      data-aos="fade-up"
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            textAlign: "center",
          }}
        >
          <Tooltip
            title="Trusted by 2500+ Businesses & Professionals!"
            placement="top"
            enterTouchDelay={0}
            leaveTouchDelay={3000}
          >
            <Chip
              label="Trusted by 2500+ Businesses & Professionals!"
              sx={{
                color: Color?.commonWhite,
                backgroundColor: Color.primaryMain,
                p: 3,
                borderRadius: "57px",
                fontSize: FontSize?.Medium,
              }}
            />
          </Tooltip>
          <Typography
            fontSize="36px"
            fontWeight="600"
            my={3}
            color={Color.TextGreen}
          >
            What Our Clients Say About Event Force Contracts
          </Typography>
        </Box>
        <Grid container spacing={8} my={10}>
          {contractReviewData?.map((item: any) => {
            return (
              <Grid size={{ xs: 12, sm: 12, md: 6 }} key={item?.id}>
                <Card
                  sx={{
                    height: "100%",
                    p: 3,
                    borderRadius: "8px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around",
                  }}
                >
                  <CardContent sx={{ px: 0 }}>
                    <Typography
                      variant="body1"
                      sx={{
                        color: Color.TextSecondary,
                        lineHeight: "24px",
                        letterSpacing: "-0.3px", // fixed typo from 'latterSpacing'
                      }}
                    >
                      {item?.description}
                    </Typography>
                  </CardContent>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    flexWrap="wrap"
                    // sx={{ mt: 2 }}
                  >
                    <Stack direction="row" alignItems="center">
                      <Avatar
                        src={item?.src?.src}
                        variant="rounded"
                        sx={{
                          width: 50,
                          height: 50,
                          margin: { xs: "0 auto", sm: "0" },
                        }}
                      />
                      <Box sx={{ mx: 2 }}>
                        <Typography
                          variant="h6"
                          sx={{
                            fontSize: "16px",
                            fontWeight: 600,
                            color: Color.TextSecondary,
                            lineHeight: "24px",
                          }}
                        >
                          {item?.clientName}
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          sx={{
                            color: Color.TextSecondary,
                            lineHeight: "24px",
                          }}
                        >
                          {item?.designation}
                        </Typography>
                      </Box>
                    </Stack>

                    <Box>
                      <Rating
                        name="half-rating"
                        defaultValue={item?.star}
                        precision={0.5}
                        readOnly
                      />
                    </Box>
                  </Stack>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </HeroBox>
  );
};
