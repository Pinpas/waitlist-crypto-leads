"use client";

import { animate, motion } from "framer-motion";
import { useEffect } from "react";
import { containerVariants, itemVariants } from "@/lib/animation-variants";
import { FaWallet, FaChartLine, FaRobot, FaBullseye, FaChartBar, FaRocket } from "react-icons/fa";

const features = [
  {
    title: "Stop Missing High-Value Investors",
    description: "Projects waste thousands on untargeted marketing, reaching people who'll never invest. Meanwhile, active investors in your sector are investing in other projects. Our AI identifies investors with proven track records in your sector by analyzing their on-chain activity.",
    icon: FaBullseye
  },
  {
    title: "Target the Right Whales",
    description: "Tired of spending thousands on cold outreach with zero response? Connect with investors who already show interest in your space through their actual on-chain activity.",
    icon: FaWallet
  },
  {
    title: "Know Your Market",
    description: "Missing crucial market movements and competitor launches is costing you investors. Get real-time alerts when potential investors are most active and never miss an opportunity again.",
    icon: FaChartLine
  },
  {
    title: "Reduce Marketing Costs",
    description: "Your marketing budget is being wasted on unqualified leads. Focus only on wallets with verified investment history in your sector.",
    icon: FaChartBar
  },
  {
    title: "Automate Lead Generation",
    description: "Manually researching potential investors is draining your time and resources. Our AI automatically identifies and qualifies leads based on real trading data.",
    icon: FaRobot
  },
  {
    title: "Increase Conversion Rates",
    description: "Low conversion rates killing your growth? Target only pre-qualified wallets that have already invested in similar projects.",
    icon: FaRocket
  }
];

export default function Features() {
  return (
    <motion.div
      className="mt-16 mb-16 w-full max-w-7xl px-4 sm:px-6 lg:px-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div 
        className="mb-12 text-center"
        variants={itemVariants}
      >
        <h2 className="text-3xl font-medium tracking-tight text-zinc-100 sm:text-3xl">
          Supercharge Your Investor Outreach
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            Icon={feature.icon}
          />
        ))}
      </div>
    </motion.div>
  );
}

const FeatureCard = ({ title, description, Icon }: { 
  title: string; 
  description: string; 
  Icon: React.ElementType;
}) => {
  const scale = [1, 1.1, 1];
  const transform = ["translateY(0px)", "translateY(-4px)", "translateY(0px)"];
  
  useEffect(() => {
    animate(
      `.icon-${title.replace(/\s+/g, '-').toLowerCase()}`,
      {
        scale,
        transform,
      },
      {
        duration: 0.8,
        repeat: Infinity,
        repeatDelay: 2
      }
    );
  }, [title]);

  return (
    <motion.div
      className="group relative w-full overflow-hidden rounded-xl border border-zinc-800/50 bg-zinc-900/30 transition-all duration-300"
      whileHover={{ scale: 1.02 }}
    >
      {/* Background layers */}
      <div className="absolute inset-0 -z-10">
        {/* Base blur */}
        <div className="absolute inset-0 backdrop-blur-xl backdrop-saturate-150" />
        
        {/* Hover gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#F7FF9B]/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        
        {/* Glassmorphism effect on hover */}
        <div className="absolute inset-0 bg-zinc-900/10 backdrop-blur-sm opacity-0 transition-all duration-300 group-hover:opacity-100" />
      </div>

      {/* Glow effect */}
      <div className="absolute -inset-[1px] -z-20 rounded-xl bg-gradient-to-br from-[#F7FF9B]/10 to-transparent opacity-25 blur-xl transition-opacity duration-300 group-hover:opacity-40" />

      {/* Content */}
      <div className="relative z-10 p-8">
        <div className={`icon-${title.replace(/\s+/g, '-').toLowerCase()} mb-6 h-12 w-12 rounded-full bg-gradient-to-br from-[#F7FF9B]/10 to-[#F7FF9B]/5 p-3`}>
          <Icon className="h-full w-full text-[#F7FF9B]" />
        </div>
        <motion.h3
          className="mb-3 text-xl font-semibold text-zinc-100"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {title}
        </motion.h3>
        <motion.p
          className="text-sm text-zinc-300"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {description}
        </motion.p>
      </div>

      {/* Sparkles */}
      <div className="absolute inset-0 -z-20">
        <Sparkles />
      </div>
    </motion.div>
  );
};

const Sparkles = () => {
  const randomMove = () => Math.random() * 2 - 1;
  const randomOpacity = () => Math.random();
  const random = () => Math.random();
  
  return (
    <div className="absolute inset-0">
      {[...Array(12)].map((_, i) => (
        <motion.span
          key={`star-${i}`}
          animate={{
            top: `calc(${random() * 100}% + ${randomMove()}px)`,
            left: `calc(${random() * 100}% + ${randomMove()}px)`,
            opacity: randomOpacity(),
            scale: [1, 1.2, 0],
          }}
          transition={{
            duration: random() * 2 + 4,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: `${random() * 100}%`,
            left: `${random() * 100}%`,
            width: `2px`,
            height: `2px`,
            borderRadius: "50%",
            zIndex: 1,
          }}
          className="inline-block bg-[#F7FF9B]/30"
        />
      ))}
    </div>
  );
}; 