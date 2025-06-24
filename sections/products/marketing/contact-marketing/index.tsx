"use client";
import { ProductsMarketingImage } from "@assets/products";
import { LinkButton } from "@components/link-button";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Color } from "@root/enems";
import { FontWeight } from "@root/enems/text-size";
import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useEffect } from "react";

export const ContactMarketing = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const theme = useTheme();
  const isLgUp = useMediaQuery(theme.breakpoints.up("lg"));
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  const spacing = isLgUp ? 20 : isMdUp ? 2 : 0;

  return (
    <Container maxWidth="xl" data-aos="fade-down">
      <Grid
        container
        spacing={spacing}
        flexDirection={{
          xs: "column-reverse",
          sm: "column-reverse",
          md: "column-reverse",
          lg: "row",
        }}
      >
        <Grid size={{ sm: 12, md: 12, lg: 6 }} sx={{ mt: 15 }}>
          <Image
            src={ProductsMarketingImage}
            alt="hero image"
            style={{ width: "100%", height: "100%" }}
            width={0}
            height={0}
          />
        </Grid>
        <Grid
          size={{ sm: 12, md: 12, lg: 6 }}
          alignContent="center"
          sx={{ mt: 15 }}
        >
          <Stack
            flexDirection="column"
            alignItems="flex-start"
            gap="36px"
            flexShrink="0"
          >
            <Typography
              variant="h2"
              color={Color.TextGreen}
              fontWeight={FontWeight?.SemiBold}
            >
              Marketing
            </Typography>
            <Typography
              variant="subtitle1"
              fontWeight={FontWeight?.Bold}
              my={1}
            >
              Empower Your Marketing Efforts with Precision and Impact
            </Typography>
            <Typography sx={{ lineHeight: "28px" }} variant="subtitle1">
              Welcome to Marketing, the premier marketing solution by Agentic
              Creed. Designed to elevate your marketing strategies, Marketing
              provides the tools and insights needed to drive business growth
              and maximise engagement. <br /> <br />
              With a comprehensive suite of automation, analytics, and campaign
              management features, Marketing empowers you to create, execute,
              and measure high-impact campaigns effortlessly. Utilise
              data-driven insights and intelligent targeting to strengthen
              customer relationships, optimise conversions, and achieve
              measurable success with precision.
            </Typography>
            <LinkButton
              link="/contact"
              variant="outlined"
              customStyles={{
                color: Color?.commonWhite,
                backgroundColor: Color.primaryMain,
                fontSize: "body1",
                border: "none",
                borderRadius: "8px",
                textTransform: "capitalize",
                mr: 2,
                mt: 2,
              }}
            >
              Contact Us
            </LinkButton>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};
