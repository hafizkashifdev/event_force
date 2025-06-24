import { agenticRoleImage } from '@assets/agentic-007'
import HeroBox from '@components/hero-Box/hero-box'
import { Container, Grid, Typography } from '@mui/material'
import { Color, FontSize, FontWeight } from '@root/enems'
import Image from 'next/image'
import React from 'react'

const Role = () => {
    const listItems = [
        {
            id: 1,
            title: "Instant HR Support",
            description: " Automate leave requests, payroll queries, and internal communication.",
        },
        {
            id: 2,
            title: "Real-Time Updates ",
            description: "Stay informed with company policies, task assignments, and announcements.",
        },
        {
            id: 3,
            title: "Effortless Workflow Management",
            description: " Approve tasks, track progress, and manage reports efficiently.",
        },
    ];
    return (
        <HeroBox>
            <Container maxWidth='xl' sx={{ m: "auto" }} data-aos="fade-up">
                <Grid container spacing={2} alignItems='center' sx={{ mt: "100px" }}>
                    <Grid size={{ xs: 12 }} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                        <Typography sx={{ fontSize: FontSize.subTitle, fontWeight: FontWeight.SemiBold, color: Color.TextGreen }}>
                            Tailored for Every User Role
                        </Typography>
                        <Typography sx={{ textAlign: 'center', fontSize: FontSize.ExtraLarge, fontWeight: FontWeight.Regular, color: Color.TextSecondary, maxWidth: '880px', mt: '16px' }}>
                            Agentic 007 adapts dynamically to meet the needs of different users, ensuring personalised and role-specific interactions for seamless engagement.
                        </Typography>
                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }} sx={{ mt: 5 }}>
                        <Typography
                            sx={{
                                fontSize: "42px",
                                fontWeight: FontWeight.Bold,
                                color: Color.TextGreen,
                                maxWidth: '523px',
                                margin: 'auto',
                                mb: "24px",

                            }}
                        >
                            Employees – Maximise Productivity
                        </Typography>
                        {listItems.map((item) => (
                            <ul key={item.id} style={{ padding: '0px', maxWidth: '523px', margin: 'auto' }}>
                                <li
                                    style={{ padding: '0px', fontSize: "18px", fontWeight: 700, color: "#3C4A47", listStyle: 'none' }}
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
                    <Grid size={{ xs: 12, md: 6 }} sx={{ mt: 5 }}>
                        <Image
                            src={agenticRoleImage}
                            alt="image"
                            style={{ maxWidth: 'auto', width: '100%', objectFit: 'contain' }}
                        />
                    </Grid>
                </Grid>
            </Container>
        </HeroBox>
    )
}

export default Role
