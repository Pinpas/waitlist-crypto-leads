"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How does LeadBlock identify potential investors?",
    answer: "Our AI analyzes on-chain data across multiple sectors (RWA, DeFi, NFT, GameFi, DePIN) to identify wallets with proven investment history in your specific sector. We track trading patterns, portfolio composition, and protocol interactions to find the most relevant leads."
  },
  {
    question: "How do you contact the leads you identify?",
    answer: "LeadBlock helps you identify potential investors through their on-chain identifiers like:\n\n• ENS domains\n• Connected social profiles\n• Web3 messaging protocols\n• DAO memberships\n\nThis gives you multiple ways to reach qualified leads through their preferred Web3 channels."
  },
  {
    question: "When is the expected launch date?",
    answer: "We're launching in Q1 2024. Early waitlist members will get priority access to the beta version and help shape the product roadmap."
  },
  {
    question: "What kind of data will I get access to?",
    answer: "You'll receive detailed investor profiles including:\n\n• Wallet activity history\n• Investment patterns\n• Portfolio analysis\n• Sector preferences\n• Risk profile\n• Trading frequency\n\nAll data is collected from public on-chain sources, ensuring compliance and transparency."
  },
  {
    question: "How does the waitlist work?",
    answer: "Join our waitlist now to:\n\n• Secure 50% lifetime discount\n• Get priority access to beta\n• Shape product features\n• Receive exclusive updates\n\nLimited to first 25 signups to ensure quality and personalized onboarding."
  },
  {
    question: "How accurate are the lead previews and data flow visualizations?",
    answer: "The lead previews and data flow visualizations shown on our website are conceptual demonstrations designed to illustrate our vision for the platform. While they're based on real-world blockchain data patterns and investor behaviors, the specific implementation, data sources, and dashboard features will be refined during development. Our goal is to provide even more comprehensive and accurate insights in the final product, tailored to each sector's unique characteristics and market demands."
  }
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200/20 last:border-0">
      <button
        className="flex w-full items-center justify-between py-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium">{question}</span>
        <ChevronDown
          className={`h-5 w-5 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ease-in-out ${
          isOpen ? "max-h-96 pb-4" : "max-h-0"
        }`}
      >
        <p className="text-muted-foreground whitespace-pre-line">{answer}</p>
      </div>
    </div>
  );
}

export function FAQ() {
  return (
    <section className="w-full max-w-[1400px] px-4 py-12 sm:py-16 md:py-20 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-center text-center">
        <div className="text-center">
          <span className="inline-block rounded-full bg-[#F7FF9B]/10 px-4 py-1 text-sm font-medium text-[#F7FF9B]">
            FAQ
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mb-8">
          Everything you need to know about LeadBlock's on-chain lead generation
        </p>
      </div>

      <div className="mx-auto max-w-3xl">
        <div className="backdrop-blur-sm bg-background/50 rounded-lg border p-6">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
} 