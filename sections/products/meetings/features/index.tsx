import { meetingsAutomatedImage, meetingsCardsImage, meetingsCustomizableImage, meetingsFEImage, meetingsSeamlessImage, meetingsUfImage } from '@assets/products/meetings';
import { Avatar, Box, Grid, Typography } from '@mui/material'
import { Color } from '@root/enems';
import { FontSize, FontWeight } from '@root/enems/text-size'
import React from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import HeroBox from '@components/hero-Box/hero-box';
const Features = () => {
    const featuresData = [
        {
            id: '1',
            src: meetingsCardsImage,
            title: 'Smart Scheduling',
            description: 'Make appointment booking effortless with an intuitive interface that lets clients select time slots that suit them best.',
        },
        {
            id: '2',
            src: meetingsCustomizableImage,
            title: 'Customisable Availability',
            description: 'Set your availability based on your preferences and commitments, define working hours, buffer times, and event types with ease.',
        },
        {
            id: '3',
            src: meetingsAutomatedImage,
            title: 'Automated Reminders',
            description: 'Reduce no-shows with automated email reminders sent to both you and your clients before scheduled appointments.',
        },
        {
            id: '4',
            src: meetingsSeamlessImage,
            title: 'Seamless Integrations',
            description: 'Connect Meetings with your existing tools and software to streamline your workflow and boost productivity.',
        },
        {
            id: '5',
            src: meetingsUfImage,
            title: 'User-Friendly Interface',
            description: 'Enjoy a clean, client-focused design that makes scheduling simple and efficient for everyone involved.',
        },
        {
            id: '6',
            src: meetingsFEImage,
            title: 'Flexible Event Types',
            description: 'Easily manage a range of event types from meetings and consultations to interviews or workshops all within one platform.',
        },
    ];
    useEffect(() => {
        Aos.init({
            duration: 1000, // Animation duration (in ms)
            once: false, // Whether animation should happen only once - while scrolling down
        });
    }, []);
    return (
        <HeroBox>
            <Grid container spacing={2} sx={{ maxWidth: '1296px', margin: 'auto', mt: '110px', }} data-aos="fade-up">
                <Grid size={{ xs: 12 }} sx={{ my: '80px' }}>
                    <Typography sx={{ fontSize: FontSize.subTitle, fontWeight: FontWeight.SemiBold, color: Color.TextGreen, textAlign: 'center', mt: '80px' }}>
                        Features
                    </Typography>
                    <Typography sx={{ fontSize: FontSize.ExtraLarge, fontWeight: FontWeight.Regular, color: Color.TextSecondary, textAlign: 'center', mt: '16px' }}>
                        Explore powerful tools designed to simplify scheduling and enhance your time management.
                    </Typography>
                </Grid>
                {featuresData.map((item) => (
                    <Grid key={item.id} size={{ xs: 12, md: 6, lg: 4 }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', padding: '32px' }}>
                            <Box sx={{ width: '80px', height: '74px', }}>
                                <Avatar
                                    src={item?.src?.src}
                                    variant="square"
                                    sx={{ width: "100%", height: "100%" }}
                                />
                            </Box>
                            <Typography sx={{ fontSize: FontSize.Huge, fontWeight: FontWeight.SemiBold, color: Color.TextGreen, mt: '30px' }}>
                                {item.title}
                            </Typography>
                            <Box
                                sx={{
                                    height: '120px',
                                    overflowY: 'auto',
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
                                <Typography sx={{ fontSize: FontSize.Large, color: Color.TextSecondary }}>
                                    {item.description}
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </HeroBox>

    )
}

export default Features
