"use client";
import { ProductsSalesReportsImage } from "@assets/products";
import {
  Box,
  Divider,
  Grid,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import { Color } from "@root/enems";
import { FontSize, FontWeight } from "@root/enems/text-size";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroBox from "@components/hero-Box/hero-box";

const salesReportsData = [
  {
    id: 1,
    title: "Custom Dashboards",
    description:
      "-Track sales efficiency and revenue trends with interactive charts and visual insights.",
  },
  {
    id: 2,
    title: "Sales Forecasting",
    description:
      "-Predict future sales performance using historical data and current trends.",
  },
  {
    id: 3,
    title: "Team Productivity Reports",
    description:
      "-Identify top performers, monitor progress, and uncover areas for improvement.",
  },
];

export const SalesReports = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, 
    });
  }, []);
  return (
    <HeroBox sx={{ my: 10 }}>
      <Grid container spacing={5}>
        <Grid size={{ xs: 12, md: 12, lg: 6 }} alignContent="center" data-aos="fade-up">
          <Stack
            flexDirection="column"
            alignItems="flex-start"
            gap="10px"
            flexShrink="0"
          >
            <Box>
              <Typography
                fontSize={FontSize?.subTitle}
                fontWeight={FontWeight?.SemiBold}
                color={Color.TextGreen}
              >
                Data-Driven Decisions with Custom Sales Reports
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="subtitle1"
                color={Color.TextSecondary}
                my={2}
              >
                Make informed decisions with powered analytics and detailed
                performance reports.
              </Typography>
            </Box>
            <Box>
              <List sx={{ listStyleType: "disc" }}>
                {salesReportsData?.map((item: any) => {
                  return (
                    <ListItem
                      sx={{ display: "list-item", py: 1.5 }}
                      key={item?.id}
                    >
                      <Typography
                        fontSize={FontSize?.ExtraLarge}
                        fontWeight={FontWeight?.Bold}
                        color={Color.TextSecondary}
                        component="span"
                      >
                        {item?.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        color={Color.TextSecondary}
                        component="span"
                      >
                        {item?.description}
                      </Typography>
                    </ListItem>
                  );
                })}
              </List>
            </Box>
            <Box sx={{ width:"100%" }}>
              <Stack
                flexDirection="row"
                justifyContent="space-between"
                alignItems="flex-end"
                spacing={2}
                maxWidth="600px"
              >
                <Box>
                  <Typography
                    fontSize="72px"
                    fontWeight={FontWeight?.SemiBold}
                    color={Color.TextGreen}
                  >
                    20%
                  </Typography>
                  <Typography
                    fontSize={FontSize?.Large}
                    fontWeight={FontSize?.Medium}
                    color={Color.TextSecondary}
                    component="span"
                  >
                    Increase in Sales Efficiency
                  </Typography>
                </Box>

                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{
                    width: "1px", // Thickness of the vertical line
                    bgcolor: Color?.LightGrey,
                  }}
                />

                <Box>
                  <Typography
                    fontSize="72px"
                    fontWeight={FontWeight?.SemiBold}
                    color={Color.TextGreen}
                  >
                    1.5X
                  </Typography>
                  <Typography
                    fontSize={FontSize?.Large}
                    fontWeight={FontSize?.Medium}
                    color={Color.TextSecondary}
                    component="span"
                  >
                    Faster Deal Closures
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Stack>
        </Grid>
        <Grid
          size={{ xs: 12, md: 12, lg: 6 }}
          data-aos="fade-up"
          data-aos-delay={350}
        >
          <Image
            src={ProductsSalesReportsImage.src}
            width={100}
            height={100}
            alt="professional image"
            style={{ width: "85%", height: "100%" }}
          />
        </Grid>
      </Grid>
    </HeroBox>
  );
};
