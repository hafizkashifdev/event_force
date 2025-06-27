'use client';

import { Box, Container, Grid, Typography, CardContent, CardMedia, Card } from '@mui/material';
import { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Image, { StaticImageData } from 'next/image';
import { CoverImage4,CoverImage5,CoverImage6,CoverImage7,CoverImage8, CoverImage9, logo1, logo2, logo3, logo4, logo5, logo6 } from '@assets/coverage';
import SlideSidewayInView from '@components/animations/animation-scroll/slide-sideway-in-view';
import SlideUpInView from '@components/animations/animation-scroll/slide-up-in-view';

interface ImageData {
  title: string;
  src: string;
}


const logos: StaticImageData[] = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
];
const Services = () => {

    const [scrollX, setScrollX] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollX((prev) => (prev + 1) % 1000); 
    }, 10);

    return () => clearInterval(interval);
  }, []);


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
        <Grid size={{ xs: 12, md: 12 }} sx={{ mt:{xs:10,sm:16,md:18} }}>
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
            <Typography variant="h5" fontWeight="bold" letterSpacing={2}>
              EVENT TRANSPORTATION &
            </Typography>
            <Typography variant="h5" fontWeight="bold" letterSpacing={2}>
              CROWD MANAGEMENT SOLUTIONS
            </Typography>
          </Box></SlideSidewayInView>
        </Grid>
      </Grid>

      <Grid container spacing={4} mt={2} alignItems="center">
        <Grid size={{ xs: 12,md: 6,  }} sx={{mt:{xs:2,md:-2,lg:-5,xl:-35}}}>
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
       <Grid size={{ xs: 12, md: 6 }}>
  <Box sx={{ width: '100%', borderRadius: '20px', overflow: 'hidden' }}>
    <Image
      src={CoverImage4}
      alt="Event Transportation"
      width={0}
      height={0}
      sizes="100vw"
      style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
    />
  </Box>
</Grid>
      </Grid>

      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 12 }} sx={{ mt: 2 }}>
          <SlideSidewayInView>
          <Box
            sx={{
              background: 'linear-gradient(to right, #d38c3a, #8c4f10)',
              padding: '20px',
              width: { xs: '80%', sm: '60%', md: '50%' },
                  borderTopLeftRadius: "8px",
                  borderTopRightRadius: "8px",
                  borderBottomLeftRadius: "36px",
                  borderBottomRightRadius: "8px",
              mt: 4,
              mb:4,
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            

           
            <Typography
              variant="h4"
              sx={{ m: 0, p: 0, textAlign: 'center', width: '100%', fontWeight: 700,marginBottom: '20px' }}
            >
              Why Choose Us
            </Typography>
          </Box>             </SlideSidewayInView>

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

      <SlideUpInView>
      <Box
            sx={{
              background: '#67B6B2',
              padding: '20px',
              width: { xs: '80%', sm: '60%', md: '50%' },
              borderTopRightRadius: '36px',
              mt:8,
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
          </Box></SlideUpInView>

          <Container maxWidth={false} sx={{ py: 4, backgroundColor: '#fff' }}>
      <Box
        sx={{
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          width: '100%',
          mt:4
        }}
        data-aos="fade-up"
      >
        <Box
          sx={{
            display: 'inline-flex',
            gap: { xs: 2, sm: 4, md: 6 }, // Responsive gap
            animation: 'scroll 20s linear infinite', // Smooth CSS animation
            willChange: 'transform', // Optimize performance
            '&:hover': {
              animationPlayState: 'paused', // Optional: pause on hover
            },
            '@keyframes scroll': {
              '0%': { transform: 'translateX(0)' },
              '100%': { transform: 'translateX(-50%)' }, // Move half the width (since logos are duplicated)
            },
          }}
        >
          {/* Render logos twice for seamless looping */}
          {[...logos, ...logos].map((logo: StaticImageData, index: number) => (
            <Box
              key={index}
              sx={{
                minWidth: { xs: '80px', sm: '100px', md: '120px' }, // Responsive logo width
                height: { xs: '40px', sm: '50px', md: '60px' }, // Responsive height
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0, // Prevent logos from shrinking
              }}
            >
              <Image
                src={logo}
                alt={`logo-${index}`}
                width={100}
                height={60}
                style={{ objectFit: 'contain', width: '100%', height: '100%' }}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
    </Container>
  );
};

export default Services;