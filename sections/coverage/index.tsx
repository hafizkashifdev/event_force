"use client";

import CheckLightIcon from "@assets/icons/check-light-icon";
import CheckedIcon from "@assets/icons/checked-icon";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import { FontSize, FontWeight } from "@root/enems";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { Color } from "../../enems/color";
import { billEstimateData, pricingData } from "./pricing.data";
import { useRouter } from "next/navigation";
import FooterCard from "@components/footer-card";
import HeroBox from "@components/hero-Box/hero-box";
import { CoverImage1, CoverImage2, CoverImage3 } from "@assets/coverage";
import Image from "next/image";

const coverage = () => {
  const router = useRouter()
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
     <HeroBox>
    <Container maxWidth="xl" data-aos="fade-up">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 12 }} sx={{ mt: 12 }}>
          <Box
            sx={{
              background: '#67B6B2',
              padding: '20px',
              width: { xs: '100%', sm: '60%', md: '50%' },
              borderTopRightRadius: '36px',
              mt:18,
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography
              variant="h4"
              sx={{
                m: 0,
                p: 0,
                textAlign: 'center',
                width: '100%',
                fontWeight: 700,
              }}
            >
              Coverage
            </Typography>
          </Box>
        </Grid>
        <Box sx={{}}>
      <Grid container spacing={2}>
        <Grid size={{xs:12,md:6}}>
          <Card sx={{ borderRadius: 8, border: '1px solid #e0e0e0', textAlign: 'center', background: 'transparent', boxShadow: 'none' }}>
            <CardContent sx={{display:'flex',justifyContent:'center', alignItems:'center',padding: '20px'}}>
              <Box
                sx={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: '#67B6B2',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '20px',
                }}
              >
                <Typography variant="h6" color="#fff">24</Typography>
              </Box>
             <Typography variant="body1">
                24/7 Operations Desk for real time support
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{xs:12,md:6}}>
          <Card sx={{ borderRadius: 2, border: '1px solid #e0e0e0', textAlign: 'center', }}>
            <CardContent sx={{display:'flex',justifyContent:'center', alignItems:'center',padding: '20px'}}>
              <Box sx={{ bgcolor: '#26a69a', borderRadius: '50%', width: 60, height: 60, mx: 'auto', mt: 2, mb: 2 }}>
                <CheckCircleIcon sx={{ fontSize: 40, color: 'white', mt: 1 }} />
              </Box>
             <Typography variant="body1">
                Nationwide reach across Riyadh, Jeddah,
                 Dammam, Makkah,<br/> Madinah Abha, and Tabuk
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
</Grid>
     <Container maxWidth="xl" sx={{ my: 4 }}>
        <Grid container>
          <Grid size={12}>
            <Image
              src={CoverImage1}
              alt="Coverage Image 1"
              width={1600}
              height={400}
              style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '8px' }}
            />
          </Grid>
        </Grid>
      </Container>

     <Container maxWidth="xl" sx={{ my: 4 }}>
          
        
            <Grid container spacing={2}>
             
              <Grid size={{md:6,xs:12}}>
                <Image
                  src={CoverImage2}
                  alt="Coverage Image 2"
                  width={610}
                  height={400}
                  style={{ objectFit: 'cover', borderRadius: '8px' }}
                />
              </Grid>
              <Grid size={{md:6,xs:12}}>
                <Image
                  src={CoverImage3}
                  alt="Coverage Image 3"
                  width={610}
                  height={400}
                  style={{ objectFit: 'cover', borderRadius: '8px' }}
                />
              </Grid>
            
          </Grid>
        </Container>
      </Container>
    </HeroBox>

  );
};

export default coverage;
