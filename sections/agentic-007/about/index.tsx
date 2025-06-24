import { agenticFooterImage2 } from '@assets/agentic-007'
import HeroBox from '@components/hero-Box/hero-box'
import { Box, Container, Grid, Typography } from '@mui/material'
import { Color, FontSize, FontWeight } from '@root/enems'
import Image from 'next/image'
import React from 'react'

const About = () => {
    return (
        <HeroBox>
            <Container maxWidth="xl" data-aos="fade-up">
                <Grid container justifyContent="center" alignItems="center" spacing={4} sx={{ mt: "100px", p: '100px 50px 150px 50px', backgroundColor: Color.bgColor }}>
                    <Grid size={{ xs: 12, md: 12 }} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                        <Typography
                            sx={{
                                fontSize: FontSize.subTitle,
                                fontWeight: FontWeight.SemiBold,
                                color: Color.TextGreen,
                            }}
                        >
                            What Our Users Say About Agentic 007
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: FontSize.ExtraLarge,
                                fontWeight: FontWeight.Regular,
                                color: Color.TextSecondary,
                                my: "24px",
                                textAlign: "center",
                                maxWidth: '840px'
                            }}
                        >
                            Discover how Agentic 007 enhances efficiency with automation and real-time insights. Hear from professionals who have transformed their workflows effortlessly!
                        </Typography>
                    </Grid>
                    <Grid size={{ xs: 12, md: 4 }} >
                        <Image src={agenticFooterImage2} alt="about"
                            style={{ maxWidth: 'auto', width: '100%', objectFit: 'contain' }}

                        />
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }} >
                        <Typography
                            sx={{
                                fontSize: FontSize.ExtraHuge,
                                fontWeight: FontWeight.SemiBold,
                                color: Color.TextGreen,
                            }}
                        >
                            “Agentic 007 has transformed the way we work! Whether handling HR tasks, managing projects, or engaging with customers, its automation saves us hours daily. The real-time insights and intelligent suggestions make decision-making effortless!”
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: FontSize.Huge,
                                fontWeight: FontWeight.SemiBold,
                                color: Color.TextSecondary,
                                mt: "24px",
                            }}
                        >
                            John Smith
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: FontSize.Large,
                                fontWeight: FontWeight.Regular,
                                color: Color.TextSecondary,
                            }}
                        >
                            Operations Manager, TechCorp
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </HeroBox >
    )
}

export default About
