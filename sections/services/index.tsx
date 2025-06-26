'use client';

import { Box, Container, Grid, Typography, CardContent, CardMedia, Card } from '@mui/material';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import { CoverImage4,CoverImage5,CoverImage6,CoverImage7,CoverImage8, CoverImage9 } from '@assets/coverage';
import SlideSidewayInView from '@components/animations/animation-scroll/slide-sideway-in-view';
import SlideUpInView from '@components/animations/animation-scroll/slide-up-in-view';

interface ImageData {
  title: string;
  src: string;
}

const Services = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: false });
  }, []);

  const images: ImageData[] = [
    { title: 'Nationwide Reach', src: CoverImage5.src },
    { title: 'Professional Team', src: CoverImage6.src },
    { title: 'Flexible Services', src: CoverImage8.src },
    { title: 'Luxury Fleet', src: CoverImage7.src },
  ];

  return (
    <Container maxWidth="xl" data-aos="fade-up">
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 12 }} sx={{ mt: 18 }}>
          <SlideSidewayInView>
          <Box
            sx={{
              background: 'linear-gradient(to bottom, #67B6B2, #2D504E)',
              color: '#fff',
              px: 4,
              py: 2,
              borderRadius: '0 0 20px 0',
              maxWidth: '600px',
              borderTopLeftRadius: "8px",
                borderTopRightRadius: "20px",
                borderBottomLeftRadius: "8px",
                borderBottomRightRadius: "8px",

            }}
          >
            <Typography variant="h6" fontWeight="bold" letterSpacing={2}>
              EVENT TRANSPORTATION &
            </Typography>
            <Typography variant="h6" fontWeight="bold" letterSpacing={2}>
              CROWD MANAGEMENT SOLUTIONS
            </Typography>
          </Box></SlideSidewayInView>
        </Grid>
      </Grid>

      <Grid container spacing={4} mt={2} alignItems="center">
        <Grid size={{ md: 6, xs: 12 }}>
          <SlideSidewayInView>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Based in Saudi Arabia, we are a leading provider of comprehensive event transportation and crowd management services, dedicated to delivering seamless logistics and uncompromising safety for events of all sizes.
          </Typography></SlideSidewayInView>
          <SlideUpInView>
          <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 2 }}>
            Our offerings include:
          </Typography></SlideUpInView>
          <SlideSidewayInView>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
            {[
              'Coordinated guest transportation',
              'Strategic traffic flow planning',
              'Reliable shuttle services',
              'Deployment of highly trained event marshals',
            ].map((item, index) => (
              <Box
                key={index}
                sx={{
                  border: '1px solid #67B6B2',
                  borderRadius: '20px',
                  px: 2,
                  py: 1,
                  fontSize: '0.95rem',
                  backgroundColor: index === 3 ? '#fff' : 'transparent',
                  color: '#000',
                  fontWeight: index === 3 ? 'bold' : 'normal',
                  width: 'fit-content',
                }}
              >
                {item}
              </Box>
            ))}
          </Box></SlideSidewayInView>
          <SlideUpInView>
          <Typography variant="body2" mt={3}>
            We ensure efficient crowd control, smooth VIP movements, professional parking management, and the highest standards of safety and order. Trusted by clients across the Kingdom, we are the go-to partner for flawless event execution and operational excellence.
          </Typography></SlideUpInView>
        </Grid>
        <Grid size={{ md: 6, xs: 12 }}>
          <Box sx={{ width: '100%', borderRadius: '20px', overflow: 'hidden' }}>
            <Image
              src={CoverImage4}
              alt="Event Transportation"
              width={500}
              height={500}
              style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
            />
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 12 }} sx={{ mt: 2 }}>
          <Box
            sx={{
              background: 'linear-gradient(to right, #d38c3a, #8c4f10)',
              padding: '20px',
              width: { xs: '100%', sm: '60%', md: '50%' },
             borderTopLeftRadius: "8px",
                borderTopRightRadius: "20px",
                borderBottomLeftRadius: "8px",
                borderBottomRightRadius: "8px",
              mt: 4,
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <SlideSidewayInView>

           
            <Typography
              variant="h4"
              sx={{ m: 0, p: 0, textAlign: 'center', width: '100%', fontWeight: 700,marginBottom: '20px' }}
            >
              Why Choose Us
            </Typography>
             </SlideSidewayInView>
          </Box>
          <Box sx={{ flexGrow: 1, padding: 2 ,marginTop: '20px'}}>
            <Grid container spacing={3}>
              {images.map((image, index) => (
                <Grid size={{ md: 6, xs: 12 }} key={index}>
                  <Card
                    sx={{
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'scale(1.05)',
                        boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.3)',
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="400"
                      image={image.src}
                      alt={image.title}
                    />
                    <CardContent>
                      <Typography variant="h6" align="center" gutterBottom>
                        {image.title}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
      {/* <Box
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
             Our Clients
            </Typography>
          </Box> */}

          {/* <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 12 }} sx={{ mt: 2 }}>
           <Box sx={{mt:2,px:2}}>
            <Image
              src={CoverImage9}
              alt="Event Transportation"
              width={500}
              height={400}
              style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
            />
          </Box>
        </Grid>
        </Grid> */}
          <Grid size={{ md: 6, xs: 12 }}>
         
        </Grid>
    </Container>
  );
};

export default Services;