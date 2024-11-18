import Link from "next/link";
import { ChangeEvent } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { Input } from "@/components/ui/input";
import { FaArrowRightLong } from "react-icons/fa6";
import { EnhancedButton } from "@/components/ui/enhanced-btn";
import { containerVariants, itemVariants } from "@/lib/animation-variants";

interface FormProps {
  name: string;
  email: string;
  handleNameChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleEmailChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
  loading: boolean;
}

export default function Form({
  name,
  email,
  handleNameChange,
  handleEmailChange,
  handleSubmit,
  loading,
}: FormProps) {
  return (
    <motion.div
      className="mt-8 flex w-full max-w-md flex-col gap-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible">
      <motion.div variants={itemVariants}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={handleNameChange}
          className="w-full rounded-lg border border-zinc-800 bg-zinc-900/50 px-4 py-2 text-zinc-100 outline-none placeholder:text-zinc-500 focus:border-[#F7FF9B]/50"
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <input
          type="email"
          placeholder="Your Email Address"
          value={email}
          onChange={handleEmailChange}
          className="w-full rounded-lg border border-zinc-800 bg-zinc-900/50 px-4 py-2 text-zinc-100 outline-none placeholder:text-zinc-500 focus:border-[#F7FF9B]/50"
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full rounded-lg bg-[#F7FF9B] px-4 py-2 font-medium text-black transition-colors hover:bg-[#F7FF9B]/90 disabled:cursor-not-allowed disabled:opacity-50">
          Join Waitlist!
        </button>
      </motion.div>

      <motion.p
        variants={itemVariants}
        className="text-center text-sm text-zinc-400">
        Early adopters get 50% lifetime discount + priority access to beta. Limited to first 25 signups
      </motion.p>
    </motion.div>
  );
}
