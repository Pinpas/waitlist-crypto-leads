import Link from "next/link";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animation-variants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mt-auto flex w-full items-center justify-center gap-3 border-t bg-background p-4 text-base text-muted-foreground"
    >
      <motion.div variants={itemVariants} className="flex items-center gap-3">
        © {currentYear}
        <span className="text-[#F7FF9B] text-lg font-medium">//</span>
        <Link
          href="https://x.com/Hugotions"
          className="hover:text-[#F7FF9B] transition-colors"
          rel="noopener noreferrer"
          target="_blank"
        >
          Twitter
        </Link>
        <span className="text-[#F7FF9B] text-lg font-medium">//</span>
        <Link
          href="https://discord.gg/yourdiscord"
          className="hover:text-[#F7FF9B] transition-colors"
          rel="noopener noreferrer"
          target="_blank"
        >
          Discord
        </Link>
      </motion.div>
    </motion.div>
  );
}
