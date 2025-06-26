'use client';

import { Box, Container, Grid, Typography, Button } from '@mui/material';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import HeroBox from '@components/hero-Box/hero-box';

const Services = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: false });
  }, []);

  return (
    <HeroBox>
      <Container data-aos="fade-up">
        <Box  sx={{ position: 'relative', mt: { xs: 8, md: 12 } }}>
>

        </Box>
        <Box
          sx={{
            background: 'linear-gradient(to bottom, #67B6B2, #2D504E)',
            color: '#fff',
            px: 4,
            py: 2,
            borderRadius: '0 0 20px 0',
            maxWidth: '600px',
            
          }}
        >
          <Typography variant="h6" fontWeight="bold" letterSpacing={2} >
            EVENT TRANSPORTATION &
          </Typography>
          <Typography variant="h6" fontWeight="bold" letterSpacing={2}>
            CROWD MANAGEMENT SOLUTIONS
          </Typography>
        </Box>

        {/* Description & Offerings */}
        <Grid container spacing={4} mt={3} alignItems="center">
          <Grid size={{md:6,xs:12}}>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Based in Saudi Arabia, we are a leading provider of comprehensive event transportation and crowd management services, dedicated to delivering seamless logistics and uncompromising safety for events of all sizes.
            </Typography>

            <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 2 }}>
              Our offerings include:
            </Typography>

            {/* Offerings List */}
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
            </Box>

            <Typography variant="body2" mt={3}>
              We ensure efficient crowd control, smooth VIP movements, professional parking management, and the highest standards of safety and order. Trusted by clients across the Kingdom, we are the go-to partner for flawless event execution and operational excellence.
            </Typography>
          </Grid>

          {/* Image */}
          <Grid size={{md:6,xs:12}}>
            <Box
              sx={{
                width: '100%',
                borderRadius: '20px',
                overflow: 'hidden',
              }}
            >
              <Image
                src="/a753998a-ccaa-4137-ba40-bde079d69ffe.png" // Place this image inside your /public directory
                alt="Event Transportation"
                width={500}
                height={400}
                style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </HeroBox>
  );
};

export default Services;
