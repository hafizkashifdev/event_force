'use client';
import React, { ReactNode } from "react";
import { Button, Card, Grid, Typography, useMediaQuery } from "@mui/material";
import { Color } from "@root/enems";
import { FontSize } from "@root/enems/text-size";
import { useRouter } from "next/navigation";

type FooterCardProps = {
  title?: string;
  subTitle?: string;
  desc?: string;
  children?: ReactNode;
  hasBtn?: boolean;
  btnText?: string;
  hasHighlightedText?: boolean;
};

const FooterCard: React.FC<FooterCardProps> = ({
  title,
  subTitle,
  desc,
  hasBtn = false,
  btnText = "Get Started Now",
  hasHighlightedText = false,
}: FooterCardProps) => {

  const isSmallScreen = useMediaQuery("(max-width:500px)");

  const router = useRouter();
  return (
    <Card
      sx={{
        padding: isSmallScreen
          ? (hasBtn ? "20px 40px" : "40px 60px")
          : (hasBtn ? "41px 74px" : "78px 110px"),
        backgroundColor: Color.TextGreen,
        marginTop: "134px",
        borderRadius: "16px",
      }}
    >
      <Grid container spacing={2} alignItems="center">
        <Grid
          size={{ md: hasBtn ? 9 : 12 }}
          sx={{ textAlign: hasBtn ? "flex-start" : "center" }}
        >
          <Typography
            sx={{
              fontSize: isSmallScreen ? FontSize.Mega : FontSize.subTitle,
              fontWeight: 600,
              color: Color.commonWhite,
            }}
          >
            {title}
          </Typography>
          {hasHighlightedText && (
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: 600,
                color: Color.ShockingRed,
                mt: "24px",
              }}
            >
              {subTitle}
            </Typography>
          )}
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: 400,
              color: Color.LightGrey,
              mt: "24px",
            }}
          >
            {desc}
          </Typography>
        </Grid>
        {hasBtn && (
          <Grid
            size={{ md: 3 }}
            sx={{ display: "flex", justifyContent: "flex-end" }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: Color.primaryMain,
                fontSize: "16px",
                textTransform: "capitalize",
                fontWeight: 600,
                padding: "20px",
                borderRadius: "8px",
              }}
              onClick={() => router.push('https://app.agenticcreed.ai/sign-up')}
            >
              {btnText}
            </Button>
          </Grid>
        )}
      </Grid>
    </Card >

  );
};

export default FooterCard;
