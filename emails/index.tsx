import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface EmailProps {
  userFirstname: string;
}

export const LeadBlockWaitlistEmail = ({ userFirstname }: EmailProps) => (
  <Html>
    <Head />
    <Preview>Welcome to LeadBlock, {userFirstname}! 🚀</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={content}>
          {/* Logo/Header */}
          <Text style={logoText}>LeadBlock</Text>

          {/* Main Content */}
          <Text style={greeting}>Hi {userFirstname},</Text>
          
          <Text style={paragraph}>
            Thanks for joining the LeadBlock waitlist! You're now among our first 25 founding members.
          </Text>

          {/* Benefits List */}
          <Section style={benefitsSection}>
            <Text style={benefitsHeader}>Your Founding Member Benefits:</Text>
            <Text style={listItem}>• 50% Lifetime Discount</Text>
            <Text style={listItem}>• Priority Access to Beta</Text>
            <Text style={listItem}>• Shape Product Features</Text>
            <Text style={listItem}>• Exclusive Updates</Text>
          </Section>

          {/* Enhanced Social Section */}
          <Text style={paragraph}>
            Want to be part of our journey? Join our community to:
          </Text>
          <Text style={listItem}>• Get early access to new features</Text>
          <Text style={listItem}>• Participate in product discussions</Text>
          <Text style={listItem}>• Connect with other founding members</Text>

          <Section style={socialSection}>
            <Text style={socialButton}>
              <Link style={socialLink} href="https://twitter.com/leadblock">
                Follow on Twitter →
              </Link>
            </Text>
            <Text style={socialButton}>
              <Link style={socialLink} href="https://discord.gg/leadblock">
                Join our Discord →
              </Link>
            </Text>
          </Section>

          <Hr style={divider} />
          
          <Text style={footer}>
            © 2024 LeadBlock | Turn blockchain data into actionable insights
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

// Simplified, email-client-friendly styles
const main = {
  backgroundColor: "#000000",
  fontFamily: "Arial, sans-serif",
  padding: "20px 0",
};

const container = {
  maxWidth: "600px",
  margin: "0 auto",
};

const content = {
  backgroundColor: "#111111",
  padding: "40px 20px",
  borderRadius: "8px",
};

const logoText = {
  color: "#F7FF9B",
  fontSize: "24px",
  fontWeight: "bold",
  textAlign: "center" as const,
  margin: "0 0 30px 0",
};

const greeting = {
  color: "#ffffff",
  fontSize: "20px",
  lineHeight: "24px",
  margin: "0 0 20px 0",
};

const paragraph = {
  color: "#cccccc",
  fontSize: "16px",
  lineHeight: "24px",
  margin: "0 0 20px 0",
};

const benefitsSection = {
  backgroundColor: "#1a1a1a",
  padding: "20px",
  margin: "20px 0",
  borderRadius: "4px",
};

const benefitsHeader = {
  color: "#F7FF9B",
  fontSize: "16px",
  fontWeight: "bold",
  margin: "0 0 15px 0",
};

const listItem = {
  color: "#cccccc",
  fontSize: "15px",
  lineHeight: "24px",
  margin: "10px 0",
};

const socialSection = {
  margin: "30px 0",
  textAlign: "center" as const,
};

const socialButton = {
  display: "block",
  margin: "15px 0",
};

const socialLink = {
  backgroundColor: "#1a1a1a",
  color: "#F7FF9B",
  padding: "12px 24px",
  borderRadius: "4px",
  textDecoration: "none",
  fontSize: "16px",
  fontWeight: "bold",
  display: "inline-block",
  width: "200px",
  textAlign: "center" as const,
};

const divider = {
  borderColor: "#333333",
  margin: "30px 0",
};

const footer = {
  color: "#666666",
  fontSize: "12px",
  textAlign: "center" as const,
  margin: "0",
};

export default LeadBlockWaitlistEmail;
