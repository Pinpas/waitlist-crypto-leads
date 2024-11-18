"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  className?: string;
}

export const FeatureCard = ({
  title,
  description,
  className,
}: FeatureCardProps) => {
  return (
    <motion.div
      whileHover="hover"
      className={cn(
        "relative h-full w-full rounded-xl border border-zinc-800 bg-zinc-900/50 p-8 group",
        className
      )}
    >
      <div className="relative z-50">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-4 text-xl font-bold text-zinc-100"
        >
          {title}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-sm text-zinc-400"
        >
          {description}
        </motion.div>
      </div>

      <Background />
    </motion.div>
  );
};

const Background = () => {
  return (
    <motion.div
      className="absolute inset-0 -z-10 h-full w-full rounded-xl bg-gradient-to-br from-violet-500/5 to-purple-500/5"
      initial={{
        opacity: 0,
        scale: 0.8,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.3,
      }}
      variants={{
        hover: {
          scale: 1.05,
        },
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-purple-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </motion.div>
  );
}; 