"use client";

import { toast } from "sonner";
import { useState, useEffect } from "react";
import CTA from "@/components/cta";
import Form from "@/components/form";
import Particles from "@/components/ui/particles";
import Footer from "@/components/footer";
import Features from "@/components/features";
import { AnimatedBeamMultipleOutputDemo } from "@/components/animated-beam-multipe";
import { TrustSection } from "@/components/trust-section";
import { FAQ } from "@/components/faq";
import { FinalCTA } from "@/components/final-cta";
import { LeadDashboardPreview } from "@/components/lead-dashboard-preview";
import { Navbar } from "@/components/navbar";

export default function Home() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [highlight, setHighlight] = useState<boolean>(false);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async () => {
    if (!name || !email) {
      toast.error("Please fill in all fields 😠");
      return;
    }

    if (!isValidEmail(email)) {
      toast.error("Please enter a valid email address 😠");
      return;
    }

    setLoading(true);

    const promise = new Promise(async (resolve, reject) => {
      try {
        // First, attempt to send the email
        const mailResponse = await fetch("/api/mail", {
          cache: "no-store",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ firstname: name, email }),
        });

        if (!mailResponse.ok) {
          if (mailResponse.status === 429) {
            reject("Rate limited");
          } else {
            reject("Email sending failed");
          }
          return; // Exit the promise early if mail sending fails
        }

        // If email sending is successful, proceed to insert into Notion
        const notionResponse = await fetch("/api/notion", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email }),
        });

        if (!notionResponse.ok) {
          if (notionResponse.status === 429) {
            reject("Rate limited");
          } else {
            reject("Notion insertion failed");
          }
        } else {
          resolve({ name });
        }
      } catch (error) {
        reject(error);
      }
    });

    toast.promise(promise, {
      loading: "Getting you on the waitlist... 🚀",
      success: (data) => {
        setName("");
        setEmail("");
        return "Thank you for joining the waitlist 🎉";
      },
      error: (error) => {
        if (error === "Rate limited") {
          return "You're doing that too much. Please try again later";
        } else if (error === "Email sending failed") {
          return "Failed to send email. Please try again 😢.";
        } else if (error === "Notion insertion failed") {
          return "Failed to save your details. Please try again 😢.";
        }
        return "An error occurred. Please try again 😢.";
      },
    });

    promise.finally(() => {
      setLoading(false);
    });
  };

  const handleHighlight = () => {
    setHighlight(true);
    setTimeout(() => setHighlight(false), 1000);
  };

  return (
    <main className="flex min-h-screen flex-col items-center overflow-x-clip">
      <Navbar onJoinNowClick={handleHighlight} />
      
      <section id="waitlist" className="flex flex-col items-center px-4 pt-24 sm:px-6 lg:px-8">
        <CTA />
        <Form
          name={name}
          email={email}
          handleNameChange={handleNameChange}
          handleEmailChange={handleEmailChange}
          handleSubmit={handleSubmit}
          loading={loading}
          highlight={highlight}
        />
      </section>

      <section id="features">
        <Features />
      </section>

      <section id="how-it-works" className="w-full max-w-[1400px] px-4 py-12 sm:py-16 md:py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center">
          <span className="text-sm font-medium uppercase tracking-wider text-[#F7FF9B] mb-4">
            How it works
          </span>
          <h2 className="text-2xl sm:text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl">
            From On-Chain Data to Qualified Leads
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl">
            Whether you're launching an RWA project, NFT collection, DeFi protocol, GameFi platform, or DePIN infrastructure, LeadBlock analyzes relevant on-chain data to find investors with proven interest in your specific sector.
          </p>
          <p className="mt-2 text-sm text-muted-foreground/60 italic max-w-2xl">
            Note: This visualization represents our planned data analysis flow. The actual implementation and data sources may be expanded or modified based on market needs.
          </p>
        </div>
        <div className="mt-8 sm:mt-12 md:mt-16">
          <AnimatedBeamMultipleOutputDemo />
        </div>
      </section>

      <section id="leads-preview">
        <LeadDashboardPreview />
      </section>

      <section id="about">
        <TrustSection />
      </section>

      <section id="faq">
        <FAQ />
      </section>

      <FinalCTA onJoinNowClick={handleHighlight} />

      <Footer />

      <Particles
        quantityDesktop={350}
        quantityMobile={100}
        ease={80}
        color={"#F7FF9B"}
        refresh
      />
    </main>
  );
}
