import React from "react";
import { motion } from "framer-motion";

interface Activity {
  action: string;
  timeAgo: string;
}

interface SimilarProject {
  name: string;
  role: string;
}

interface LeadDashboardCardProps {
  sector: string;
  icon: string;
  wallet: string;
  score: number;
  portfolio: {
    totalValue: string;
    activeSince: string;
    monthlyVolume: string;
  };
  similarProjects: SimilarProject[];
  investmentPattern: {
    avgInvestment: string;
    holdDuration: string;
    riskProfile: string;
  };
  recentActivity: Activity[];
  tags: string[];
}

export function LeadDashboardCard({
  sector,
  icon,
  wallet,
  score,
  portfolio,
  similarProjects,
  investmentPattern,
  recentActivity,
  tags,
}: LeadDashboardCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur-md"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F7FF9B]/5 to-transparent" />

      <div className="relative space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{icon}</span>
            <h3 className="text-lg font-semibold text-zinc-100">{sector}</h3>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-zinc-400">Score:</span>
            <span className="font-mono text-[#F7FF9B]">{score}/100</span>
          </div>
        </div>

        {/* Wallet */}
        <div className="font-mono text-sm text-zinc-400">
          Wallet: {wallet}
        </div>

        {/* Portfolio Analysis */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-zinc-300">Portfolio Analysis</h4>
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div>
              <p className="text-zinc-400">Total Value</p>
              <p className="font-medium text-zinc-200">{portfolio.totalValue}</p>
            </div>
            <div>
              <p className="text-zinc-400">Active Since</p>
              <p className="font-medium text-zinc-200">{portfolio.activeSince}</p>
            </div>
            <div>
              <p className="text-zinc-400">Monthly Volume</p>
              <p className="font-medium text-zinc-200">{portfolio.monthlyVolume}</p>
            </div>
          </div>
        </div>

        {/* Similar Projects */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-zinc-300">Similar Projects</h4>
          <ul className="space-y-1 text-sm">
            {similarProjects.map((project, index) => (
              <li key={index} className="text-zinc-400">
                • {project.name} <span className="text-[#F7FF9B]">({project.role})</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Investment Pattern */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-zinc-300">Investment Pattern</h4>
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div>
              <p className="text-zinc-400">Avg Investment</p>
              <p className="font-medium text-zinc-200">{investmentPattern.avgInvestment}</p>
            </div>
            <div>
              <p className="text-zinc-400">Hold Duration</p>
              <p className="font-medium text-zinc-200">{investmentPattern.holdDuration}</p>
            </div>
            <div>
              <p className="text-zinc-400">Risk Profile</p>
              <p className="font-medium text-zinc-200">{investmentPattern.riskProfile}</p>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-zinc-300">Recent Activity</h4>
          <ul className="space-y-1 text-sm">
            {recentActivity.map((activity, index) => (
              <li key={index} className="flex items-center justify-between text-zinc-400">
                <span>• {activity.action}</span>
                <span className="text-xs">{activity.timeAgo}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="rounded-full bg-[#F7FF9B]/10 px-3 py-1 text-xs text-[#F7FF9B]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
} 