"use client";
import {
  ProductsContractsLocationImage,
  ProductsContractsHashtagImage,
  ProductsContractsStickyNotesImage,
  ProductsContractsPopularityImage,
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
import { Color } from "@root/enems";
import { FontSize, FontWeight } from "@root/enems/text-size";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroBox from "@components/hero-Box/hero-box";

const contractsSolutionData = [
  {
    id: 1,
    src: ProductsContractsStickyNotesImage,
    title: "Most Influential Post",
    description:
      "We are the fastest and easiest way to launch an attractive and feature-complete SaaS.",
  },
  {
    id: 2,
    src: ProductsContractsHashtagImage,
    title: "Hashtag Growth",
    description:
      "We are the fastest and easiest way to launch an attractive and feature-complete SaaS.",
  },
  {
    id: 3,
    src: ProductsContractsPopularityImage,
    title: "Influencers",
    description:
      "We are the fastest and easiest way to launch an attractive and feature-complete SaaS.",
  },
  {
    id: 4,
    src: ProductsContractsLocationImage,
    title: "Hashtag Location",
    description:
      "We are the fastest and easiest way to launch an attractive and feature-complete SaaS.",
  },
];

export const ContractsSolution = () => {
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
    >
      <Container maxWidth="xl">
        <Grid container spacing={8} mb={5}>
          <Grid size={{ xs: 12, sm: 12, md: 6, lg: 8 }} data-aos="fade-up">
            <Chip
              label="GROW YOUR BUSINESS"
              sx={{
                color: Color?.commonWhite,
                backgroundColor: Color.primaryMain,
                p: 3,
                borderRadius: "57px",
                fontSize: "14px",
              }}
            />
            <Typography
              fontSize="36px"
              fontWeight={FontWeight?.SemiBold}
              color={Color.TextGreen}
              mt={3}
            >
              How Event Force Contracts Works
            </Typography>
          </Grid>
          <Grid
            size={{ xs: 12, sm: 12, md: 6, lg: 4 }}
            alignContent="center"
            data-aos="fade-up"
          >
            <Typography
              fontSize={FontSize?.ExtraLarge}
              color={Color.TextSecondary}
              // my={3}
              lineHeight="28px"
            >
              We have considered our solutions to support every stage of your
              personal growth. We are the fastest and easiest way to launch an
              attractive and for feature-complete SaaS showcase.
            </Typography>
          </Grid>
          {contractsSolutionData?.map((item: any) => {
            return (
              <Grid
                size={{ xs: 12, sm: 6, md: 6, lg: 4, xl: 3 }}
                key={item?.id}
                data-aos="fade-up"
              >
                <Card
                  sx={{
                    height: "100%",
                    // width: "100%",
                    p: 3,
                    borderRadius: "8px",
                    textAlign: { xs: "center", sm: "start" },
                    backgroundColor: Color?.commonWhite,
                    transition: "background-color 0.3s ease",
                    "&:hover": {
                      backgroundColor: Color?.primaryMain,
                    },
                    "&:hover .avatar-image": {
                      color: Color?.commonWhite,
                      backgroundColor: Color?.commonWhite,
                    },
                    "&:hover .textColor": {
                      color: Color?.commonWhite,
                    },
                  }}
                >
                  <Avatar
                    src={item?.src.src}
                    variant="rounded"
                    className="avatar-image"
                    sx={{
                      width: 60,
                      height: 60,
                      p: 1,
                      margin: { xs: "0 auto", sm: "0" },
                      backgroundColor: "transparent",
                      transition: "background-color 0.3s ease",
                    }}
                  />
                  <CardContent sx={{ px: 0 }}>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      fontWeight={FontWeight?.SemiBold}
                      color={Color.TextGreen}
                      className="textColor"
                    >
                      {item?.title}
                    </Typography>
                    <Typography
                      className="textColor"
                      variant="body1"
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
      </Container>
    </HeroBox>
  );
};
