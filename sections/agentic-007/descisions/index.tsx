import { agenticDesicionImage, agenticRoleImage } from '@assets/agentic-007';
import HeroBox from '@components/hero-Box/hero-box';
import { Container, Grid, Typography } from '@mui/material'
import { Color, FontSize, FontWeight } from '@root/enems'
import Image from 'next/image';
import React from 'react'

const Descisions = () => {

    const listItems = [
        {
            id: 1,
            title: "Comprehensive Insights",
            description: "Get real-time analytics, financial reports, and business trends.",
        },
        {
            id: 2,
            title: "Project Oversight",
            description: "Monitor key milestones, team progress, and performance metrics.",
        },
        {
            id: 3,
            title: "Smart Recommendations",
            description: "Data-driven insights to support strategic decision-making.",
        },
    ];
    return (
        <HeroBox>
            <Container maxWidth='xl' data-aos="fade-up">
                <Grid container spacing={2} justifyContent='center' alignItems={'center'} sx={{ mt: "100px" }}>
                    <Grid size={{ xs: 12, md: 6 }} sx={{ mt: 5 }}>
                        <Image
                            src={agenticDesicionImage}
                            alt="image"
                            style={{ maxWidth: 'auto', width: '100%', objectFit: 'contain' }}
                        />
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }} sx={{ mt: 5 }}>
                        <Typography
                            sx={{
                                fontSize: "42px",
                                fontWeight: FontWeight.Bold,
                                color: Color.TextGreen,
                                mb: "24px",
                                maxWidth: '511px',
                                m: 'auto'
                            }}
                        >
                            Stakeholders – Make Data-Driven Decisions
                        </Typography>

                        {listItems.map((item) => (
                            <ul key={item.id} style={{ margin: 'auto', padding: '0px', maxWidth: '511px' }}>
                                <li
                                    style={{ fontSize: "18px", fontWeight: 700, color: "#3C4A47", listStyle: 'none' }}
                                >
                                    {item.title}
                                    <Typography
                                        component="span"
                                        sx={{
                                            fontSize: FontSize.ExtraLarge,
                                            fontWeight: FontWeight.Regular,
                                            color: Color.TextSecondary,
                                        }}
                                    >
                                        {` – ${item.description}`}
                                    </Typography>
                                </li>
                            </ul>
                        ))}
                    </Grid>
                </Grid>
            </Container>
        </HeroBox>

    )
}

export default Descisions
