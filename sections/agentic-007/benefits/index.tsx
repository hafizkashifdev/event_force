import { agenticBenifitsIcon, agenticBenifitsIcon1, agenticBenifitsIcon2, agenticBenifitsIcon3, agenticBenifitsIcon4, agenticBenifitsIcon5 } from '@assets/agentic-007'
import HeroBox from '@components/hero-Box/hero-box'
import { Avatar, Box, Container, Grid, Typography } from '@mui/material'
import { Color, FontSize, FontWeight } from '@root/enems'
import React from 'react'

const Benefits = () => {
    const featuresData = [
        {
            id: '1',
            src: agenticBenifitsIcon,
            title: 'AI-Powered Conversations',
            description: 'Context-aware responses tailored to user queries.',
        },
        {
            id: '2',
            src: agenticBenifitsIcon1,
            title: 'Multi-Role Access',
            description: 'Employees, stakeholders, delegates, and customers engage securely.',
        },
        {
            id: '3',
            src: agenticBenifitsIcon2,
            title: 'Automated Workflows',
            description: 'Reduce manual tasks with automation for increased efficiency.',
        },
        {
            id: '4',
            src: agenticBenifitsIcon3,
            title: '24/7 Assistance',
            description: 'Instant support, real-time updates, and intelligent recommendations.',
        },
        {
            id: '5',
            src: agenticBenifitsIcon4,
            title: 'Seamless Integration',
            description: 'Works with your existing CRM, ITSM, and operational tools.',
        },
        {
            id: '6',
            src: agenticBenifitsIcon5,
            title: 'Enhanced Security & Permissions',
            description: 'Data privacy and access controls for different roles.',
        },
    ];
    return (
        <HeroBox>
            <Container maxWidth='xl' data-aos="fade-up">
                <Grid container spacing={2} justifyContent='center' sx={{ mt: "100px" }}>
                    <Grid size={{ xs: 12 }} sx={{ textAlign: 'center' }}>
                        <Typography sx={{ fontSize: FontSize.subTitle, fontWeight: FontWeight.SemiBold, color: Color.TextGreen }}>
                            Key Benefits & Features
                        </Typography>
                    </Grid>
                    {featuresData.map((item) => (
                        <Grid key={item.id} size={{ xs: 12, sm: 6, lg: 4, }} >
                            <Box sx={{ display: 'flex', flexDirection: 'column', padding: '32px', alignItems: { xs: 'center', md: 'start' } }}>
                                <Box sx={{ width: '80px', height: '74px', }}>
                                    <Avatar
                                        src={item?.src?.src}
                                        variant="square"
                                        sx={{ width: "100%", height: "100%" }}
                                    />
                                </Box>
                                <Typography sx={{ fontSize: FontSize.Huge, fontWeight: FontWeight.SemiBold, color: Color.TextGreen, mt: '30px', textAlign: { xs: 'center', md: 'start' } }}>
                                    {item.title}
                                </Typography>
                                <Box
                                    sx={{
                                        height: '120px',
                                        overflowY: 'auto',
                                        textAlign: { xs: 'center', md: 'start' },
                                        mt: '15px',
                                        '&::-webkit-scrollbar': {
                                            width: '6px',
                                        },
                                        '&::-webkit-scrollbar-track': {
                                            backgroundColor: '#f0f0f0',
                                            borderRadius: '8px',
                                        },
                                        '&::-webkit-scrollbar-thumb': {
                                            backgroundColor: '#ccc',
                                            borderRadius: '8px',
                                        },
                                    }}
                                >
                                    <Typography sx={{ fontSize: FontSize.Large, color: Color.TextSecondary, maxWidth: '343px' }}>
                                        {item.description}
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </HeroBox>
    )
}

export default Benefits
