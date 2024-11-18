"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

interface FormProps {
  name: string;
  email: string;
  handleNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleEmailChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
  loading: boolean;
  highlight?: boolean;
}

export default function Form({
  name,
  email,
  handleNameChange,
  handleEmailChange,
  handleSubmit,
  loading,
  highlight,
}: FormProps) {
  const nameInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (highlight && nameInputRef.current) {
      nameInputRef.current.focus();
    }
  }, [highlight]);

  return (
    <motion.div 
      className="w-full max-w-md space-y-4 mt-8"
      animate={highlight ? {
        scale: [1, 1.02, 1],
        transition: { duration: 0.3 }
      } : {}}
    >
      <motion.div
        animate={highlight ? {
          y: [0, -10, 0],
          transition: { duration: 0.5 }
        } : {}}
      >
        <input
          ref={nameInputRef}
          type="text"
          placeholder="Your name"
          value={name}
          onChange={handleNameChange}
          className="w-full rounded-lg border border-zinc-600 bg-zinc-800/50 px-4 py-2.5 text-zinc-100 placeholder:text-zinc-400 focus:border-[#F7FF9B]/50 focus:outline-none focus:ring-2 focus:ring-[#F7FF9B]/20"
        />
      </motion.div>
      <input
        type="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="Enter your email"
        className="w-full rounded-lg border border-zinc-600 bg-zinc-800/50 px-4 py-2.5 text-zinc-100 placeholder:text-zinc-400 focus:border-[#F7FF9B]/50 focus:outline-none focus:ring-2 focus:ring-[#F7FF9B]/20"
      />
      <button
        onClick={handleSubmit}
        disabled={loading}
        className="w-full rounded-lg bg-[#F7FF9B] px-4 py-2.5 text-sm font-medium text-black hover:bg-[#F7FF9B]/90 focus:outline-none focus:ring-2 focus:ring-[#F7FF9B]/50 disabled:opacity-50"
      >
        Join the waitlist
      </button>
      
      <div className="text-center space-y-2 pt-2">
        <p className="text-sm text-zinc-400">
          <span className="text-[#F7FF9B]">2/25</span> projects already on the waitlist
        </p>
        <p className="text-sm text-zinc-400">
          first 25 early access members get <span className="text-[#F7FF9B]">50% off</span> for lifetime access
        </p>
      </div>
    </motion.div>
  );
}
