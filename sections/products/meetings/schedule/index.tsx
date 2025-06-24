import { Button, Grid, Typography } from "@mui/material";
import { Color } from "@root/enems";
import Image from "next/image";
import React from "react";
import ScheduleImage from "@assets/products/meetings/image 88.png";
import { FontSize, FontWeight } from "@root/enems/text-size";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import HeroBox from "@components/hero-Box/hero-box";
const Schedule = () => {
  const router = useRouter();
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false, 
    });
  }, []);

  return (
    <HeroBox>
      <Grid
        container
        sx={{ minHeight: "100%", flexWrap: "wrap", mt: "120px", mb: "133px" }}
        data-aos="fade-up"
      >
        <Grid
          size={{ xs: 12, md: 12, lg: 6 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            backgroundColor: Color.TextGreen,
            padding: "72px",
            gap: 3,
          }}
        >
          <Typography
            sx={{
              fontSize: FontSize.subTitle,
              fontWeight: FontWeight.SemiBold,
              color: Color.commonWhite,
            }}
          >
            Ready to Take Control of Your Schedule?
          </Typography>
          <Typography
            sx={{
              fontSize: FontSize.ExtraLarge,
              fontWeight: FontWeight.Regular,
              color: Color.commonWhite,
              maxWidth: "465px",
              mt: "16px",
            }}
          >
            Unlock smarter scheduling with Meetings by Agentic Creed. Our
            intuitive features and automated tools are built to simplify bookings,
            improve client experiences, and save you valuable time, no matter your
            role or business size.
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: Color.primaryMain,
              color: Color.commonWhite,
              fontSize: FontSize.Large,
              fontWeight: FontWeight.SemiBold,
              borderRadius: "8px",
              width: "fit-content",
              mt: "40px",
            }}
            onClick={() => router.push('https://app.agenticcreed.ai/sign-up')}
          >
            Get Started Now
          </Button>
        </Grid>

        <Grid
          size={{ xs: 12, md: 12, lg: 6 }}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          <Image
            src={ScheduleImage}
            alt="Schedule"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Grid>
      </Grid >
    </HeroBox>

  );
};

export default Schedule;
