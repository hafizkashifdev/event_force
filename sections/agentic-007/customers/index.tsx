import { agenticDesicionImage2 } from '@assets/agentic-007'
import HeroBox from '@components/hero-Box/hero-box'
import { Container, Grid, Typography } from '@mui/material'
import { Color, FontSize, FontWeight } from '@root/enems'
import Image from 'next/image'
import React from 'react'

const Customers = () => {

    const listItems = [
        {
            id: 1,
            title: "24/7 Assistance ",
            description: "Resolve inquiries, raise support tickets, and get real-time updates.",
        },
        {
            id: 2,
            title: "Track Requests",
            description: "Monitor service status, order details, and resolutions with ease.",
        },
        {
            id: 3,
            title: "Personalised Help ",
            description: "Automated FAQs, troubleshooting, and product recommendations.",
        },
    ];

    return (
        <HeroBox>
            <Container maxWidth='xl' data-aos="fade-up">
                <Grid container spacing={2} justifyContent='center' alignItems='center' sx={{ mt: "100px" }}>
                    <Grid size={{ xs: 12, md: 6 }} sx={{ mt: 5 }}>
                        <Image
                            src={agenticDesicionImage2}
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
                                margin: 'auto',
                                maxWidth: '523px',
                                mb: "24px",

                            }}
                        >
                            Customers – Get Instant, Real-Time Support
                        </Typography>
                        {listItems.map((item) => (
                            <ul key={item.id} style={{ padding: '0px', maxWidth: '523px', margin: 'auto' }}>
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
                                        – {item.description}
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

export default Customers
