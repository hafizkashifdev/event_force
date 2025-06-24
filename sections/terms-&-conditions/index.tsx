import FooterCard from "@components/footer-card";
import HeroBox from "@components/hero-Box/hero-box";
import { Box, Container, Typography } from "@mui/material";
import { Color, FontSize, FontWeight } from "@root/enems";
import React from "react";

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

const Ul = ({ children }: { children: React.ReactNode }) => (
  <Box
    component="ul"
    sx={{
      pl: 3,
      mb: 2,
      listStyleType: "disc",
      "& li": {
        fontSize: FontSize.ExtraLarge,
        color: Color.TextGreen,
        lineHeight: 1.6,
        mb: 1,
      },
    }}
  >
    {children}
  </Box>
);

const Li = ({ children }: { children: React.ReactNode }) => (
  <Box component="li">{children}</Box>
);

const TermsAndConditionsSection = () => {
  return (
    <HeroBox>
      <Container maxWidth="xl" sx={{ py: 5 }}>
        <Typography
          variant="h3"
          sx={{
            fontSize: FontSize.largeTitle,
            fontWeight: FontWeight.Bold,
            color: Color.TextGreen,
            // mb: 3,
            textAlign: "center",
            mt: 8,
          }}
        >
          Terms & Conditions
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
        

        <SectionTitle>1. Introduction</SectionTitle>
        <Paragraph>
          Agentic Creed is a business management platform designed to optimise
          customer engagement, marketing automation, service management,
          operations, loyalty programs, and business analytics. These Terms &
          Conditions govern your use of Agentic Creed's website, platform,
          mobile application, and related services.
        </Paragraph>
        <Paragraph>By using our services, you agree to:</Paragraph>
        <Ul>
          <Li>Comply with these terms and applicable laws.</Li>
          <Li>Provide accurate and complete information.</Li>
          <Li>Use the platform responsibly and ethically.</Li>
        </Ul>
        <Paragraph>
          If you do not agree, you must discontinue using Agentic Creed
          immediately.
        </Paragraph>

        <SectionTitle>2. Definitions</SectionTitle>
        <Ul>
          <Li>
            "Platform" – The Agentic Creed website, software, mobile
            applications, and related services.
          </Li>
          <Li>
            "User" – Any individual or entity accessing or using Agentic Creed.
          </Li>
          <Li>
            "We," "Us," "Our" – Refers to Agentic Creed and its affiliated
            entities.
          </Li>
          <Li>
            "Subscription" – The paid or free plan that grants access to
            specific platform features.
          </Li>
          <Li>
            "Content" – Any data, text, graphics, images, videos, or other
            materials provided through Agentic Creed.
          </Li>
        </Ul>

        <SectionTitle>3. Eligibility</SectionTitle>
        <Paragraph>To use Agentic Creed, you must:</Paragraph>
        <Ul>
          <Li>
            Be at least 18 years old (or have parental consent if required).
          </Li>
          <Li>Provide accurate and complete registration details.</Li>
          <Li>
            Have the legal authority to agree to these Terms & Conditions.
          </Li>
          <Li>Not be barred from using the platform under applicable laws.</Li>
        </Ul>
        <Paragraph>
          We reserve the right to suspend or terminate accounts that provide
          false information.
        </Paragraph>

        <SectionTitle>4. User Accounts & Responsibilities</SectionTitle>
        <Paragraph>When you register for an account, you agree to:</Paragraph>
        <Ul>
          <Li>Provide accurate, up-to-date, and complete information.</Li>
          <Li>Maintain confidentiality of your login credentials.</Li>
          <Li>Notify us immediately if you suspect unauthorised access.</Li>
        </Ul>
        <Paragraph>
          We are not responsible for unauthorised account access resulting from
          negligence in safeguarding your credentials.
        </Paragraph>
        <SectionTitle>4. User Accounts & Responsibilities</SectionTitle>
        <Paragraph>When you register for an account, you agree to:</Paragraph>
        <Ul>
          <Li>Provide accurate, up-to-date, and complete information.</Li>
          <Li>Maintain confidentiality of your login credentials.</Li>
          <Li>Notify us immediately if you suspect unauthorised access.</Li>
        </Ul>
        <Paragraph>
          We are not responsible for unauthorised account access resulting from
          negligence in safeguarding your credentials.
        </Paragraph>

        <SectionTitle>5. Permitted Use</SectionTitle>
        <Paragraph>
          You agree to use Agentic Creed only for lawful purposes, including:
        </Paragraph>
        <Ul>
          <Li>
            Managing operations, marketing, loyalty programs, services, customer
            portals, assets, meetings, and call centre functionalities.
          </Li>
          <Li>Enhancing business productivity and customer engagement.</Li>
        </Ul>
        <SectionTitle>5. Permitted Use</SectionTitle>
        <Paragraph>
          You agree to use Agentic Creed only for lawful purposes, including:
        </Paragraph>
        <Ul>
          <Li>
            Managing operations, marketing, loyalty programs, services, customer
            portals, assets, meetings, and call centre functionalities.
          </Li>
          <Li>Enhancing business productivity and customer engagement.</Li>
        </Ul>

        <SectionTitle>6. Prohibited Activities</SectionTitle>
        <Paragraph>Users may not:</Paragraph>
        <Ul>
          <Li>
            Use the platform for illegal, fraudulent, or harmful activities.
          </Li>
          <Li>Attempt to hack, disrupt, or manipulate our services.</Li>
          <Li>
            Share or distribute malicious content, spam, or misleading
            information.
          </Li>
        </Ul>
        <SectionTitle>6. Prohibited Activities</SectionTitle>
        <Paragraph>Users may not:</Paragraph>
        <Ul>
          <Li>
            Use the platform for illegal, fraudulent, or harmful activities.
          </Li>
          <Li>Attempt to hack, disrupt, or manipulate our services.</Li>
          <Li>
            Share or distribute malicious content, spam, or misleading
            information.
          </Li>
        </Ul>

        <SectionTitle>7. Payment & Subscription</SectionTitle>
        <Ul>
          <Li>
            Subscription Fees: Access to premium features requires a paid
            subscription.
          </Li>
          <Li>
            Billing Cycle: Payments are billed on a monthly or annual basis
            based on your selected plan.
          </Li>
          <Li>
            Refund Policy: Fees are non-refundable except where required by law.
          </Li>
        </Ul>

        <SectionTitle>8. Intellectual Property</SectionTitle>
        <Paragraph>
          All logos, content, features, and trademarks of Agentic Creed remain
          our property.
        </Paragraph>
        <Paragraph>
          You may not copy, modify, or distribute our intellectual property
          without written permission.
        </Paragraph>

        <SectionTitle>9. Data Privacy & Security</SectionTitle>
        <Ul>
          <Li>We collect and use data as outlined in our Privacy Policy.</Li>
          <Li>We implement strict security measures to protect user data.</Li>
          <Li>Users must not attempt to bypass our security systems.</Li>
        </Ul>
        <SectionTitle>9. Data Privacy & Security</SectionTitle>
        <Ul>
          <Li>We collect and use data as outlined in our Privacy Policy.</Li>
          <Li>We implement strict security measures to protect user data.</Li>
          <Li>Users must not attempt to bypass our security systems.</Li>
        </Ul>

        <SectionTitle>10. Service Availability & Modifications</SectionTitle>
        <Ul>
          <Li>
            We strive for 99.9% uptime, but we do not guarantee uninterrupted
            service.
          </Li>
          <Li>
            We may modify, suspend, or discontinue any part of the platform at
            our discretion.
          </Li>
        </Ul>

        <SectionTitle>11. Limitation of Liability</SectionTitle>
        <Ul>
          <Li>
            Agentic Creed is not liable for indirect, incidental, or
            consequential damages.
          </Li>
          <Li>
            We are not responsible for loss of data, business interruptions, or
            third-party actions.
          </Li>
        </Ul>

        <SectionTitle>12. Indemnification</SectionTitle>
        <Paragraph>
          You agree to defend, indemnify, and hold Agentic Creed harmless
          against claims arising from:
        </Paragraph>
        <Ul>
          <Li>Your misuse of the platform.</Li>
          <Li>Violations of these Terms & Conditions.</Li>
          <Li>Third-party rights infringements caused by your actions.</Li>
        </Ul>

        <SectionTitle>13. Termination & Suspension</SectionTitle>
        <Ul>
          <Li>
            We may suspend or terminate your account for violating these terms.
          </Li>
          <Li>
            You may request account deletion by contacting
            support@agenticcreed.com.
          </Li>
        </Ul>
        <SectionTitle>13. Termination & Suspension</SectionTitle>
        <Ul>
          <Li>
            We may suspend or terminate your account for violating these terms.
          </Li>
          <Li>
            You may request account deletion by contacting
            support@agenticcreed.com.
          </Li>
        </Ul>

        <SectionTitle>14. Governing Law</SectionTitle>
        <Ul>
          <Li>These terms are governed by the laws of the United Kingdom.</Li>
          <Li>
            Any disputes shall be resolved through arbitration or the courts in
            London, UK.
          </Li>
        </Ul>
        <SectionTitle>14. Governing Law</SectionTitle>
        <Ul>
          <Li>These terms are governed by the laws of the United Kingdom.</Li>
          <Li>
            Any disputes shall be resolved through arbitration or the courts in
            London, UK.
          </Li>
        </Ul>

        <SectionTitle>15. Changes to Terms & Conditions</SectionTitle>
        <Paragraph>
          We reserve the right to update these Terms & Conditions at any time.
          Continued use of Agentic Creed after modifications constitutes
          acceptance of the new terms.
        </Paragraph>
        <SectionTitle>15. Changes to Terms & Conditions</SectionTitle>
        <Paragraph>
          We reserve the right to update these Terms & Conditions at any time.
          Continued use of Agentic Creed after modifications constitutes
          acceptance of the new terms.
        </Paragraph>

        <SectionTitle>16. Contact Us</SectionTitle>
        <Paragraph>For any questions or clarifications, contact:</Paragraph>
        <Ul>
          <Li>📩 Email: support@agenticcreed.com</Li>
        </Ul>
        <Paragraph>
          By using Agentic Creed, you agree to these Terms & Conditions and
          acknowledge your responsibility to comply with them.
        </Paragraph>
        <FooterCard
          title="Let’s automate & simplify your performance"
          desc="Let us manage your business for you so that you can get back to doing what you do best and we look in the future."
          hasHighlightedText={false}
          hasBtn={true}
        />
      </Container>
    </HeroBox>
  );
};

export default TermsAndConditionsSection;
