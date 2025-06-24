import { agenticWorksImage } from '@assets/agentic-007'
import OneIcon from '@assets/icons/agentic-works/one-icon'
import ThreeIcon from '@assets/icons/agentic-works/three-icon'
import TwoIcon from '@assets/icons/agentic-works/two-icon'
import HeroBox from '@components/hero-Box/hero-box'
import { Avatar, Box, Container, Grid, Typography } from '@mui/material'
import { Color, FontSize, FontWeight } from '@root/enems'
import Image from 'next/image'
import React from 'react'

const Works = () => {
    const OfferListData = [
        {
            id: 1,
            src: <OneIcon />,
            title: " Identify Your Role",
            desc: "Select whether you're an Employee, Stakeholder, Delegate, or Customer for tailored conversations."
        },
        {
            id: 2,
            src: <TwoIcon />,
            title: "Ask & Engage",
            desc: "Simply type your query, and Agentic 007 delivers smart, real-time responses based on your role and permissions."
        },
        {
            id: 3,
            src: <ThreeIcon />,
            title: "Automate & Optimise",
            desc: "Let automation handle routine tasks, from HR workflows to customer inquiries, optimising efficiency."
        },
    ];
    return (
        <HeroBox>
            <Container maxWidth="xl" data-aos="fade-up" >
                <Grid container spacing={4} sx={{ mt: "50px" }}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Image
                            src={agenticWorksImage}
                            alt="image"
                            style={{ maxWidth: 'auto', width: '100%', objectFit: 'contain' }}
                        />
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }} sx={{ mt: "20px" }}>
                        <Box>
                            <Typography
                                sx={{
                                    fontSize: "42px",
                                    fontWeight: FontWeight.SemiBold,
                                    color: Color.TextGreen,
                                    maxWidth: '505px',
                                    m: 'auto'
                                }}
                            >
                                How Agentic 007 Works?
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: FontSize.ExtraLarge,
                                    fontWeight: FontWeight.Regular,
                                    color: Color.TextGreen,
                                    m: 'auto',
                                    maxWidth: '505px'
                                }}
                            >
                                We have considered our solutions to support every stage of your growth. We are the fastest and easiest way to launch SaaS.
                            </Typography>
                        </Box>
                        <Box>
                            {OfferListData.map((item) => (
                                <Box
                                    key={item.id}
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 2,
                                        fontSize: "24px",
                                        fontWeight: "600",
                                        color: "#4CAF50",
                                        m: '24px auto',
                                        maxWidth: '505px'
                                    }}
                                >

                                    {item.src}
                                    <Box>
                                        <Typography
                                            sx={{
                                                fontSize: FontSize.ExtraLarge,
                                                fontWeight: FontWeight.SemiBold,
                                                color: Color.TextGreen,
                                            }}
                                        >
                                            {item.title}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontSize: FontSize.Large,
                                                fontWeight: FontWeight.Regular,
                                                color: Color.TextSecondary,
                                                maxWidth: '505px'
                                            }}
                                        >
                                            {item.desc}
                                        </Typography>
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </HeroBox >
    )
}

export default Works
