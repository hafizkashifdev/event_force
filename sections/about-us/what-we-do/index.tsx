import { GoldCar, WhatWeDo, WhiteCar } from '@assets/about-us';
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
      <Typography
        variant="h4"
        sx={{
          background: 'linear-gradient(to right, #d38c3a, #8c4f10)',
          padding: '20px',
          marginBottom: '40px',
          textAlign: 'right',
          width: '50%',
          marginLeft: 'auto',
          borderBottomLeftRadius: '36px',
        }}
      >
        WHAT WE DO
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid size={{ xs: 12, md: 8 }} sx={{ marginBottom: '20px' }}>
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
          />
        </Grid>

      </Grid>

      <Container>
        <Grid container spacing={2} alignItems="center" justifyContent="center" marginTop= '20px'>
          <Grid size={{xs:12,md:4}}>
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
            />
          </Grid>
          <Grid size={{xs:12,md:8}}>
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
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WhatWeDO;