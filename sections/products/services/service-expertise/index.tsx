"use client";
import {
  ProductsServicesExpertiseOneImage,
  ProductsServicesExpertiseThreeImage,
  ProductsServicesExpertiseTwoImage,
} from "@assets/products";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Color } from "@root/enems";
import { FontSize, FontWeight } from "@root/enems/text-size";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroBox from "@components/hero-Box/hero-box";
import Image from "next/image";

const servicesExpertiseData = [
  {
    id: 1,
    src: ProductsServicesExpertiseOneImage,
    title: "Enhancing Service Efficiency",
    description:
      "Explore key strategies to optimise service request handling, reduce response times, and improve client satisfaction.",
  },
  {
    id: 2,
    src: ProductsServicesExpertiseTwoImage,
    title: "Mastering Asset Management",
    description:
      "Learn how to streamline software, hardware, and contract management with cutting-edge automation.",
  },
  {
    id: 3,
    src: ProductsServicesExpertiseThreeImage,
    title: "Unlocking Customer Engagement",
    description:
      "Learn how to streamline software, hardware, and contract management with cutting-edge automation.",
  },
];

export const ServicesExpertise = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <HeroBox>
      <Box
        data-aos="fade-up"
        sx={{
          width: "100%",
          maxWidth: { xs: "100%", md: "60%", lg: "50%" },
          textAlign: "center",
          mx: "auto",
        }}
      >
        <Typography
          variant="h2"
          fontWeight={FontWeight?.SemiBold}
          color={Color.TextGreen}
        >
          Stay Ahead with Expert Knowledge
        </Typography>
      </Box>
      <Grid container spacing={5} mt={8}>
        {servicesExpertiseData?.map((item: any) => {
          return (
            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={item?.id}>
              <Card
                data-aos="fade-up"
                sx={{
                  height: "100%",
                  border: "1px solid",
                  borderColor: Color?.bgColor,
                }}
              >
                <Image
                  src={item.src.src}
                  alt="expertise image"
                  style={{ width: "100%", height: "auto" }}
                  width={100}
                  height={100}
                />
                <CardContent>
                  <Typography
                    fontSize={FontSize?.ExtraHuge}
                    fontWeight={FontWeight?.SemiBold}
                    color={Color.TextGreen}
                  >
                    {item?.title}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color={Color.TextSecondary}
                    mt={1}
                  >
                    {item?.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </HeroBox>
  );
};
