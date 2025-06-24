"use client";
import {
  ProductsLoyaltyActionableInsightsImage,
  ProductsLoyaltyBenefitsImage,
  ProductsLoyaltyCustomerEngagementImage,
  ProductsLoyaltyCustomerRetentionImage,
  ProductsLoyaltyGiftCardsImage,
  ProductsLoyaltyRewardsImage,
  ProductsLoyaltyVouchersImage,
} from "@assets/products";
import { LinkButton } from "@components/link-button";
import { Avatar, Box, Grid, Stack, Typography } from "@mui/material";
import { Color } from "@root/enems";
import { FontSize, FontWeight } from "@root/enems/text-size";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import HeroBox from "@components/hero-Box/hero-box";

const loyaltyBenefitsData = [
  {
    id: 1,
    src: ProductsLoyaltyCustomerRetentionImage,
    title: "Customer Retention",
    description:
      "Encourage brand loyalty, increase repeat business, and build strong, lasting relationships with your customers.",
  },
  {
    id: 2,
    src: ProductsLoyaltyCustomerEngagementImage,
    title: "Customer Engagement",
    description:
      "Keep customers actively connected with your brand through personalised rewards and meaningful interactions.",
  },
  {
    id: 3,
    src: ProductsLoyaltyActionableInsightsImage,
    title: "Actionable Insights",
    description:
      "Leverage data to better understand customer behaviour, improve targeting, and refine your loyalty strategies.",
  },
];

const benefitsData = [
  {
    id: 1,
    src: ProductsLoyaltyRewardsImage,
    flexDirection: "row",
    title: "Rewards",
    description:
      "Show appreciation and build loyalty by offering exclusive rewards tailored to customer behaviour and preferences. Encourage repeat engagement with meaningful incentives that drive continued interaction with your brand.",
  },
  {
    id: 2,
    src: ProductsLoyaltyVouchersImage,
    flexDirection: "row-reverse",
    title: "Vouchers",
    description:
      "Delight your customers with personalised vouchers that offer savings, perks, or exclusive deals. Perfect for promotions, referrals, or special occasions — keeping customers excited to return.",
  },
  {
    id: 3,
    src: ProductsLoyaltyGiftCardsImage,
    flexDirection: "row",
    title: "Gift Cards",
    description:
      "Offer memorable gifting experiences with versatile gift card options, ideal for any occasion and every type of customer.",
  },
];

export const LoyaltyBenefits = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <HeroBox
      customStyles={{
        pt: { xs: 10, sm: 10, md: 11 },
      }}
    >
      <Grid container spacing={1} data-aos="fade-up">
        <Grid size={{ xs: 12, md: 12, lg: 6 }}>
          <Image
            src={ProductsLoyaltyBenefitsImage.src}
            width={100}
            height={100}
            alt="professional image"
            style={{ width: "100%", height: "600px" }}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 12, lg: 6 }} alignContent="center">
          <Stack
            flexDirection="column"
            alignItems="flex-start"
            gap="10px"
            flexShrink="0"
          >
            <Typography
              fontSize="44px"
              fontWeight={FontWeight?.SemiBold}
              color={Color.TextGreen}
            >
              Benefits
            </Typography>
            {loyaltyBenefitsData?.map((item: any) => {
              return (
                <Stack
                  flexDirection="row"
                  alignItems="start"
                  key={item?.id}
                  my={3}
                >
                  <Avatar
                    src={item?.src?.src}
                    variant="square"
                    sx={{
                      width: 50,
                      height: 50,
                      mr: 4,
                    }}
                  />
                  <Box>
                    <Typography
                      fontSize={FontSize?.Huge}
                      fontWeight={FontWeight?.SemiBold}
                      color={Color.TextGreen}
                    >
                      {item?.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: Color.TextSecondary,
                        lineHeight: "24px",
                        latterSpacing: "-0.3",
                        // my: 4,
                      }}
                    >
                      {item?.description}
                    </Typography>
                  </Box>
                </Stack>
              );
            })}
            <LinkButton
              link="https://app.agenticcreed.ai/sign-up"
              variant="outlined"
              customStyles={{
                color: Color?.commonWhite,
                backgroundColor: Color.primaryMain,
                fontSize: "body1",
                textTransform: "capitalize",
                border: "none",
                borderRadius: "8px",
                my: 2,
              }}
              linkProps={{
                target: "_blank",
              }}
            >
              Get Started
            </LinkButton>
          </Stack>
        </Grid>
      </Grid>

      {benefitsData?.map((item: any) => {
        return (
          <Grid
            data-aos="fade-up"
            container
            spacing={5}
            key={item?.id}
            flexDirection={item?.flexDirection}
            my={15}
          >
            <Grid size={{ xs: 12, md: 6 }} alignContent="center">
              <Box sx={{ width: "100%", maxWidth: "80%" }}>
                <Typography
                  fontSize={FontSize?.subTitle}
                  my={3}
                  fontWeight={FontWeight?.SemiBold}
                  color={Color.TextGreen}
                >
                  {item?.title}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color={Color.TextSecondary}
                  my={1}
                >
                  {item?.description}
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Image
                src={item?.src.src}
                width={100}
                height={100}
                alt="professional image"
                style={{ width: "85%", height: "100%" }}
              />
            </Grid>
          </Grid>
        );
      })}
    </HeroBox>
  );
};
