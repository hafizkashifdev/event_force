import FooterCard from "@components/footer-card";
import HeroBox from "@components/hero-Box/hero-box";
import { Container } from "@mui/material";
import React from "react";

const Footer = () => {
    return (
        <HeroBox>
            <Container maxWidth='xl' data-aos="fade-up">
                <FooterCard title='Get Started with Agentic 007 Today!' desc='Enhance Business Communication, Automate Customer & Employee Support, Boost Productivity with Streamlined Workflows, and Experience the Future of Smart Conversations!' hasBtn={true} />
            </Container>

        </HeroBox>
    )
}

export default Footer;
