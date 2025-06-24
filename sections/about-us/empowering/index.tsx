import { TabImage } from "@assets/about-us";
import { Container, Grid, Typography } from "@mui/material";
import { Color } from "@root/enems";
import { FontSize, FontWeight } from "@root/enems/text-size";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import HeroBox from "@components/hero-Box/hero-box";
const Empowering = () => {
  const listItems = [
    {
      id: 1,
      title: "Key Clients & Partners",
      description:
        "Showcase leading businesses or partners leveraging Agentic Creed.",
    },
    {
      id: 2,
      title: "Top Performing Users",
      description:
        "Highlight power users or businesses excelling with the platform.",
    },
    {
      id: 3,
      title: "Customer Success Stories",
      description:
        " Display real users benefiting from Agentic Creed’s solutions.",
    },
    {
      id: 4,
      title: "Featured Services ",
      description:
        "Present core offerings like CRM, ITSM, Workload, and Asset Management.",
    },
    {
      id: 5,
      title: "Industry Experts & Advisors",
      description:
        "Introduce consultants or specialists contributing to innovation.",
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
        <Grid container spacing={2} alignItems="center" sx={{ mt: "100px" }}>
          <Grid size={{ xs: 12, md: 6 }} sx={{ mt: 5 }}>
            <Typography
              sx={{
                fontSize: "42px",
                fontWeight: FontWeight.Bold,
                color: Color.TextGreen,
                mt: "24px",
                m: 'auto',
                maxWidth: '523px',

              }}
            >
              Empowering Businesses with Innovation
            </Typography>
            <Typography
              sx={{
                fontSize: FontSize.ExtraLarge,
                fontWeight: FontWeight.Regular,
                color: Color.TextSecondary,
                m: '24px auto',
                maxWidth: '523px',
              }}
            >
              Meet the pioneers driving success with Agentic Creed. From
              top-performing users and trusted partners to industry experts,
              discover the minds leveraging our intelligent solutions to
              streamline operations, enhance customer engagement, and accelerate
              growth.
            </Typography>

            {listItems.map((item) => (
              <ul key={item.id} style={{
                margin: 'auto', padding: '0px', maxWidth: '523px',
              }}>
                <li
                  style={{ fontSize: "18px", fontWeight: 700, color: "#3C4A47" }}
                >
                  {item.title}{" "}
                  <Typography
                    component="span"
                    sx={{
                      fontSize: FontSize.ExtraLarge,
                      fontWeight: FontWeight.Regular,
                      color: Color.TextSecondary,
                    }}
                  >
                    – {item.description}
                  </Typography>
                </li>
              </ul>
            ))}
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} sx={{ mt: "100px" }}>
            <Image
              src={TabImage}
              alt="image"
              style={{ maxWidth: 'auto', width: '100%', objectFit: 'contain' }}

            />
          </Grid>
        </Grid>
      </Container>
    </HeroBox>

  );
};

export default Empowering;
