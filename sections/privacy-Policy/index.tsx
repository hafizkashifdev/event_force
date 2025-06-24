"use client";
import FooterCard from "@components/footer-card";
import HeroBox from "@components/hero-Box/hero-box";
import { Container, Typography } from "@mui/material";
import { Color, FontSize, FontWeight } from "@root/enems";
import React from "react";

// List Component
interface ListProps {
  items: React.ReactNode[];
  sx?: any;
}

const List = ({ items, sx }: ListProps) => (
  <ul
    style={{
      listStyleType: "disc",
      paddingLeft: "24px",
      marginBottom: "16px",
    }}
    {...sx}
  >
    {items.map((item, index) => (
      <li
        key={index}
        style={{
          fontSize: FontSize.ExtraLarge,
          fontWeight: FontWeight.Regular,
          color: Color.TextGreen,
          marginBottom: "8px",
        }}
      >
        {item}
      </li>
    ))}
  </ul>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <Typography
    sx={{
      fontSize: FontSize.ExtraHuge,
      fontWeight: FontWeight.Bold,
      color: Color.TextGreen,
      mb: 2,
      mt: 4,
    }}
  >
    {children}
  </Typography>
);

const Paragraph = ({ children }: { children: React.ReactNode }) => (
  <Typography
    sx={{
      fontSize: FontSize.ExtraLarge,
      fontWeight: FontWeight.Regular,
      color: Color.TextGreen,
      mb: 2,
    }}
  >
    {children}
  </Typography>
);

export default function PrivacyPolicySection() {
  return (
    <HeroBox>
      <Container maxWidth="xl" sx={{ py: 5 }}>
        <Typography
          variant="h3"
          sx={{
            fontSize: FontSize.largeTitle,
            fontWeight: FontWeight.Bold,
            color: Color.TextGreen,
            mb: 3,
            textAlign: "center",
            mt: 10,
          }}
        >
          Privacy Policy
        </Typography>
        <Typography
          sx={{
            fontSize: FontSize.ExtraLarge,
            fontWeight: FontWeight.Regular,
            color: Color.TextGreen,
            mb: 3,
            textAlign: "center",
          }}
        >
          Effective Date: Dec 25, 2023 | Last Updated on: January 24, 2025{" "}
        </Typography>

        <SectionTitle>Introduction</SectionTitle>
        <Paragraph>
          At Event Force, we are committed to protecting your privacy while
          providing a seamless and efficient business management platform. Our
          advanced CRM solution integrates Operations, Loyalty, Marketing,
          Services, Call Centre, Meetings, Customer Portal, Asset Management,
          Knowledge Base, Feedback Survey, and more to streamline workflows and
          enhance productivity.
        </Paragraph>
        <Paragraph>
          This Privacy Policy explains how we collect, use, protect, and share
          your information to ensure transparency and compliance with global
          data protection regulations. By using Event Force, you acknowledge
          and agree to the practices outlined in this policy.
        </Paragraph>
        <SectionTitle>1. Information We Collect</SectionTitle>
        <Paragraph>
          We collect information that you provide when you use our services.
          This includes:
        </Paragraph>
        <List
          items={[
            "Personal Information: Name, email, phone number, job title, and other contact details provided during registration.",
            "Usage Information: Data related to platform interactions, including pages visited, actions taken, and service usage.",
            "Device & Log Data: IP address, browser type, operating system, login timestamps, and error logs to ensure security and performance.",
            "Communication Data: Messages, emails, and support inquiries to provide assistance and improve service quality.",
          ]}
        />
        <SectionTitle>2. How We Use Your Information</SectionTitle>
        <Paragraph>We use collected data to:</Paragraph>
        <List
          items={[
            "Deliver and enhance Event Force’s CRM and business solutions.",
            "Customise the user experience with personalised dashboards and recommendations.",
            "Process transactions, manage accounts, and improve service efficiency.",
            "Communicate important updates, security alerts, and promotional content (with user consent).",
            "Monitor and prevent fraudulent activities, unauthorised access, or security threats.",
          ]}
        />
        <SectionTitle>3. Data Protection & Security</SectionTitle>
        <Paragraph>
          We implement stringent security protocols to safeguard your data:{" "}
        </Paragraph>
        <List
          items={[
            "Data Encryption: All information is securely transmitted and stored using encryption technology.",
            "Access Control: Strict authentication measures limit data access to authorised personnel only.",
            "Infrastructure Security: We utilise secure cloud hosting and firewall protection to prevent cyber threats.",
          ]}
        />
        <SectionTitle>4. Data Sharing & Third Parties</SectionTitle>
        <Paragraph>
          We do not sell, rent, or share your personal data without consent.
          However, we may share data in the following cases:{" "}
        </Paragraph>
        <List
          items={[
            "With trusted service providers (e.g., cloud storage, analytics, payment processing) who assist in platform operations.",
            "To comply with legal obligations or enforce our terms of service.",
            "In case of a business transfer, such as a merger or acquisition, ensuring continued service delivery.",
          ]}
        />
        <SectionTitle>5. Your Data Privacy Rights</SectionTitle>
        <Paragraph>
          As a user of Event Force, you have the right to:
        </Paragraph>
        <List
          items={[
            "Access, update, or delete your personal information.",
            "Restrict processing or withdraw consent for marketing communications.",
            "Object to data usage and request data portability.",
          ]}
        />
        <Paragraph>
          To exercise these rights, contact [support@agenticcreed.com].
        </Paragraph>
        <SectionTitle>6. Cookies & Tracking Technologies</SectionTitle>
        <Paragraph>
          We use cookies, session storage, and tracking technologies to:
        </Paragraph>
        <List
          items={[
            "Enhance functionality and improve user experience.",
            "Analyse platform usage and optimise service performance.",
            "Provide personalised recommendations and secure authentication.",
          ]}
        />
        <Paragraph>
          Users can manage cookie preferences via browser settings.
        </Paragraph>
        <SectionTitle>7. Changes to This Privacy Policy</SectionTitle>
        <Paragraph>
          We may revise this Privacy Policy to align with evolving regulations
          and service enhancements. Updates will be communicated via email or
          platform notifications.
        </Paragraph>
        <SectionTitle>8. Contact Us</SectionTitle>
        <Paragraph>
          For questions or concerns, reach out to
        </Paragraph>
        <Paragraph> Email:[support@company.com]</Paragraph>
        <Paragraph>
          By using Event Force, you consent to this Privacy Policy. We
          prioritise your privacy and are dedicated to maintaining the highest
          security standards.
        </Paragraph>
        <FooterCard
          title="Let's automate & simplify your performance"
          desc="Let us manage your business for you so that you can get back to doing what you do best and we look in the future."
          hasHighlightedText={false}
          hasBtn={true}
        />
      </Container>
    </HeroBox>
  );
}
