import { GoldCar, WhatWeDo, WhiteCar } from '@assets/about-us';
import ScaleInView from '@components/animations/animation-scroll/scale-in-view';
import SlideSidewayInView from '@components/animations/animation-scroll/slide-sideway-in-view';
import SlideUpInView from '@components/animations/animation-scroll/slide-up-in-view';
import { Box, Typography, Button, Grid, Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';

const WhatWeDO = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        color: '#fff',
        padding: '40px',
        textAlign: 'center',
        minHeight: '100vh',
        position: 'relative',
      }}
    >
      <SlideSidewayInView>
      <Typography
        variant="h4"
        sx={{
          background: 'linear-gradient(to right, #d38c3a, #8c4f10)',
          padding: '20px',
          marginBottom: '40px',
          textAlign: 'right',
          width: '50%',
          marginRight: 'auto',
          borderBottomLeftRadius: '36px',
        }}
      >
        WHAT WE DO
      </Typography></SlideSidewayInView>
      <Grid container spacing={2} justifyContent="center">
        <Grid size={{ xs: 12, md: 8 }} sx={{ marginTop: '20px' ,marginBottom: '20px'  }}>
          <ScaleInView>
          <Image
            src={WhatWeDo}
            alt="What We Do"
            width={1000}
            height={600}
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '20px',
              objectFit: 'cover',
            }}
          />  </ScaleInView>
        </Grid>

      </Grid>

      <Container>
        <Grid container spacing={2} alignItems="center" justifyContent="center" marginTop= '20px'>
          <Grid size={{xs:12,md:5 ,}} sx={{ marginTop: '30px', marginBottom: '10px' }}>
            <SlideUpInView>
            <Image
              src={WhiteCar}
              alt="White Car"
              width={400}
              height={400}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '20px',
                objectFit: 'cover',
              }}
            /></SlideUpInView>
          </Grid>
          <Grid size={{xs:12,md:7}}>
            <SlideUpInView>
            <Image
              src={GoldCar}
              alt="Gold Car"
              width={400}
              height={400}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '20px',
                objectFit: 'cover',
              }}
            /></SlideUpInView>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WhatWeDO;