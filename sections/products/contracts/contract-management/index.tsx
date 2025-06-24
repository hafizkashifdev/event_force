"use client";
import {
  ProductsContractsPartnershipsImage,
  ProductsContractsTransactionsImage,
  ProductsContractsWorkforceImage,
} from "@assets/products";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Color } from "@root/enems";
import { LinkButton } from "@components/link-button";
import { FontSize, FontWeight } from "@root/enems/text-size";
import HeroBox from "@components/hero-Box/hero-box";

const contractManagementData = [
  {
    id: 1,
    btnText: "Partnerships",
    btnLink: "",
    src: ProductsContractsPartnershipsImage,
    title: "Corporate Deals",
    description:
      "Secure long-term collaborations between businesses with legally binding agreements. Ensure clarity in roles, responsibilities, and revenue-sharing structures.",
  },
  {
    id: 2,
    btnText: "Workforce",
    btnLink: "",
    src: ProductsContractsWorkforceImage,
    title: "HR & Employment Contracts ",
    description:
      "Streamline hiring with structured employment contracts, covering job roles, salaries, and benefits. Maintain compliance with legal and organisational policies. ",
  },
  {
    id: 3,
    btnText: "Transactions",
    btnLink: "",
    src: ProductsContractsTransactionsImage,
    title: "Sales & Rental Agreements",
    description:
      "Simplify sales and rental dealings with well-defined terms, payment conditions, and timelines. Ensure smooth transactions between individuals and businesses.",
  },
];

export const ContractManagement = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <HeroBox customStyles={{ p: { xs: 2, sm: 5, md: 10 } }} data-aos="fade-up">
      <Container maxWidth="xl">
        <Box
          sx={{
            textAlign: "center",
          }}
        >
          <Typography
            fontSize={{
              xs: FontSize?.circleTitle,
              sm: FontSize?.subTitle2,
              md: FontSize?.largeTitle,
            }}
            fontWeight={FontWeight?.SemiBold}
            color={Color.TextGreen}
          >
            Effortless Contract Management: Secure, Simple, Smart
          </Typography>
        </Box>
        <Grid container spacing={5} mt={8}>
          {contractManagementData?.map((item: any) => {
            return (
              <Grid size={{ xs: 12, md: 6, lg: 4 }} key={item?.id}>
                <Card
                  sx={{
                    height: "100%",
                    border: "1px solid",
                    borderColor: Color?.bgColor,
                  }}
                >
                  <CardMedia
                    sx={{ height: "400px" }}
                    image={item.src.src}
                    title="professional image"
                  />
                  <CardActions>
                    {/* <LinkButton
                    // link={item?.btnLink}
                    variant="outlined"
                    customStyles={{
                      color: Color?.commonWhite,
                      backgroundColor: Color.primaryMain,
                      fontSize: "body1",
                      textTransform: "capitalize",
                      border: "none",
                      borderRadius: "8px",
                      width: "150px",
                      m: 2,
                    }}
                  >
                    {item?.btnText}
                  </LinkButton> */}
                    <Box
                      sx={{
                        color: Color?.commonWhite,
                        backgroundColor: Color.primaryMain,
                        fontSize: "body1",
                        textTransform: "capitalize",
                        border: "none",
                        borderRadius: "8px",
                        width: "150px",
                        m: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "37px",
                      }}
                    >
                      {item?.btnText}
                    </Box>
                  </CardActions>
                  <CardContent sx={{ pt: 0 }}>
                    <Typography
                      fontSize={FontSize?.ExtraHuge}
                      fontWeight={FontWeight?.SemiBold}
                      color={Color.TextGreen}
                      my={1.5}
                    >
                      {item?.title}
                    </Typography>
                    <Typography variant="subtitle2" color={Color.TextSecondary}>
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
