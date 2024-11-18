import React, { useState } from "react";
import { motion } from "framer-motion";
import { LeadDashboardCard } from "./ui/lead-dashboard-card";

const sectors = [
  { id: "rwa", name: "RWA", icon: "💼" },
  { id: "defi", name: "DeFi", icon: "🏦" },
  { id: "nft", name: "NFT", icon: "🎨" },
  { id: "gamefi", name: "GameFi", icon: "🎮" },
  { id: "depin", name: "DePIN", icon: "🌐" },
  { id: "meme", name: "Meme", icon: "🎭" },
];

const sectorData = {
  rwa: {
    sector: "RWA Investor Profile",
    icon: "💼",
    wallet: "0x742...3a1b",
    score: 85,
    portfolio: {
      totalValue: "$250K+",
      activeSince: "2021",
      monthlyVolume: "$50K+",
    },
    similarProjects: [
      { name: "Chainlink", role: "Active Holder" },
      { name: "MakerDAO", role: "Vault Owner" },
      { name: "Centrifuge", role: "Lender" },
    ],
    investmentPattern: {
      avgInvestment: "$25K-100K",
      holdDuration: "12+ months",
      riskProfile: "Conservative",
    },
    recentActivity: [
      { action: "Added to RWA pool", timeAgo: "2d ago" },
      { action: "Increased position", timeAgo: "5d ago" },
      { action: "New vault opened", timeAgo: "1w ago" },
    ],
    tags: ["#LongTermHolder", "#InstitutionalSize", "#ActiveLender"],
  },
  defi: {
    sector: "DeFi Investor Profile",
    icon: "🏦",
    wallet: "0x891...4c2d",
    score: 92,
    portfolio: {
      totalValue: "$180K+",
      activeSince: "2020",
      monthlyVolume: "$100K+",
    },
    similarProjects: [
      { name: "Aave", role: "Daily User" },
      { name: "Uniswap V3", role: "LP Provider" },
      { name: "Curve", role: "Gauge Staker" },
    ],
    investmentPattern: {
      avgInvestment: "$10K-50K",
      holdDuration: "Daily",
      riskProfile: "Moderate",
    },
    recentActivity: [
      { action: "Added liquidity", timeAgo: "1d ago" },
      { action: "Staked tokens", timeAgo: "3d ago" },
      { action: "Yield farming", timeAgo: "5d ago" },
    ],
    tags: ["#ActiveTrader", "#LiquidityProvider", "#YieldFarmer"],
  },
  nft: {
    sector: "NFT Collector Profile",
    icon: "🎨",
    wallet: "0x563...8f4e",
    score: 88,
    portfolio: {
      totalValue: "50+ ETH",
      activeSince: "2021",
      monthlyVolume: "15 ETH",
    },
    similarProjects: [
      { name: "BAYC", role: "Holder #2431" },
      { name: "Art Blocks", role: "Curator" },
      { name: "Azuki", role: "Early Mint" },
    ],
    investmentPattern: {
      avgInvestment: "5-10 ETH",
      holdDuration: "6+ months",
      riskProfile: "Aggressive",
    },
    recentActivity: [
      { action: "Minted new collection", timeAgo: "1d ago" },
      { action: "Listed rare NFT", timeAgo: "3d ago" },
      { action: "Joined new allowlist", timeAgo: "4d ago" },
    ],
    tags: ["#BlueChipHolder", "#EarlyAdopter", "#ActiveTrader"],
  },
  gamefi: {
    sector: "GameFi Investor Profile",
    icon: "🎮",
    wallet: "0x234...9d3f",
    score: 79,
    portfolio: {
      totalValue: "$120K+",
      activeSince: "2022",
      monthlyVolume: "$30K+",
    },
    similarProjects: [
      { name: "Axie", role: "Top 100 Player" },
      { name: "GuildFi", role: "Senior Member" },
      { name: "Illuvium", role: "Beta Tester" },
    ],
    investmentPattern: {
      avgInvestment: "$5K-20K",
      holdDuration: "30+/week",
      riskProfile: "High",
    },
    recentActivity: [
      { action: "Tournament win", timeAgo: "1d ago" },
      { action: "Token staking", timeAgo: "2d ago" },
      { action: "Guild contribution", timeAgo: "4d ago" },
    ],
    tags: ["#GuildMember", "#ProGamer", "#EarlyTester"],
  },
  depin: {
    sector: "DePIN Investor Profile",
    icon: "🌐",
    wallet: "0x445...7e2c",
    score: 90,
    portfolio: {
      totalValue: "$200K+",
      activeSince: "2021",
      monthlyVolume: "$15K+",
    },
    similarProjects: [
      { name: "Helium", role: "Node Operator" },
      { name: "Render", role: "GPU Provider" },
      { name: "Arweave", role: "Storage Host" },
    ],
    investmentPattern: {
      avgInvestment: "$20K-75K",
      holdDuration: "5+ nodes",
      riskProfile: "Moderate",
    },
    recentActivity: [
      { action: "Node upgrade", timeAgo: "1d ago" },
      { action: "Reward claim", timeAgo: "2d ago" },
      { action: "Network expansion", timeAgo: "1w ago" },
    ],
    tags: ["#NodeOperator", "#TechExpert", "#Infrastructure"],
  },
  meme: {
    sector: "Meme Token Investor Profile",
    icon: "🎭",
    wallet: "0x891...4c2d",
    score: 94,
    portfolio: {
      totalValue: "$180K+",
      activeSince: "2022",
      monthlyVolume: "$75K+",
    },
    similarProjects: [
      { name: "PEPE", role: "Early Holder" },
      { name: "WIF", role: "Launch Participant" },
      { name: "BONK", role: "Day 1 Investor" },
    ],
    investmentPattern: {
      avgInvestment: "$5K-25K",
      holdDuration: "Multiple daily",
      riskProfile: "High",
    },
    recentActivity: [
      { action: "New meme token buy", timeAgo: "1h ago" },
      { action: "Viral token mint", timeAgo: "6h ago" },
      { action: "Multichain activity", timeAgo: "12h ago" },
    ],
    tags: ["#WhaleWallet", "#EarlyAdopter", "#ViralTrader"],
  },
};

export function LeadDashboardPreview() {
  const [selectedSector, setSelectedSector] = useState("rwa");

  return (
    <section className="relative w-full py-8">
      <div className="container relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          {/* Preview Label */}
          <div className="text-center">
            <span className="inline-block rounded-full bg-[#F7FF9B]/10 px-4 py-1 text-sm font-medium text-[#F7FF9B]">
              Preview Leads
            </span>
          </div>

          {/* Header */}
          <div className="text-center">
            <h2 className="text-3xl font-medium sm:text-4xl">
              Lead Dashboard Previews
            </h2>
            <p className="mt-3 text-muted-foreground">
              Explore detailed investor profiles across different sectors
            </p>
            <p className="mt-2 text-sm text-muted-foreground/60 italic">
              Note: This is a conceptual preview showcasing potential lead insights. 
              The final dashboard and data structure may vary.
            </p>
          </div>

          {/* Sector Selection */}
          <div className="flex flex-wrap justify-center gap-3">
            {sectors.map((sector) => (
              <button
                key={sector.id}
                onClick={() => setSelectedSector(sector.id)}
                className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm transition-all ${
                  selectedSector === sector.id
                    ? "bg-[#F7FF9B]/20 text-[#F7FF9B]"
                    : "bg-zinc-800/50 text-zinc-400 hover:bg-zinc-800"
                }`}
              >
                <span>{sector.icon}</span>
                <span>{sector.name}</span>
              </button>
            ))}
          </div>

          {/* Dashboard Card */}
          <div className="mx-auto max-w-2xl">
            <LeadDashboardCard {...sectorData[selectedSector as keyof typeof sectorData]} />
          </div>
        </div>
      </div>
    </section>
  );
} 