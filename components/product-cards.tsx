import { motion } from "framer-motion";
import { Bot, Target, Sparkles } from "lucide-react";

const cards = [
  {
    icon: Bot,
    title: "AI Scans",
    description: "Finds active wallets 24/7",
    accent: "Real-time monitoring"
  },
  {
    icon: Target,
    title: "We Analyze",
    description: "Pattern match best investors",
    accent: "Smart filtering"
  },
  {
    icon: Sparkles,
    title: "Data Enriches",
    description: "Get detailed wallet insights",
    accent: "Deep analysis"
  }
];

export default function ProductCards() {
  return (
    <div className="w-full max-w-4xl mx-auto mt-6 mb-16">
      <div className="flex justify-center mb-10">
        <h3 className="text-2xl sm:text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl max-w-3xl mx-auto text-center">
          How It Works
        </h3>
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 px-4">
        {/* Connecting Lines */}
        <div className="absolute hidden md:block left-[30%] top-1/2 -translate-y-1/2 w-[40%] h-[2px]">
          <motion.div 
            className="h-full bg-gradient-to-r from-[#F7FF9B]/20 via-[#F7FF9B]/40 to-[#F7FF9B]/20"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </div>
        <div className="absolute hidden md:block right-[30%] top-1/2 -translate-y-1/2 w-[40%] h-[2px]">
          <motion.div 
            className="h-full bg-gradient-to-r from-[#F7FF9B]/20 via-[#F7FF9B]/40 to-[#F7FF9B]/20"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          />
        </div>

        {cards.map((card, index) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={card.title}
              className="flex flex-col items-center p-6 rounded-xl border border-zinc-800/50 bg-gradient-to-b from-zinc-900/90 to-zinc-900/50 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="mb-4 p-4 rounded-full bg-gradient-to-b from-[#F7FF9B]/10 to-[#F7FF9B]/5">
                <Icon className="w-8 h-8 text-[#F7FF9B]" strokeWidth={1.5} />
              </div>
              
              <h3 className="text-lg font-medium text-[#F7FF9B] mb-2">
                {card.title}
              </h3>
              
              <p className="text-zinc-300 text-center mb-2">
                {card.description}
              </p>
              
              <span className="text-xs text-zinc-500">
                {card.accent}
              </span>
            </motion.div>
          );
        })}
      </div>

      <motion.div 
        className="text-center mt-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <p className="text-lg text-[#F7FF9B]">
         Result = Qualified leads you won't find anywhere else
        </p>
      </motion.div>
    </div>
  );
} 