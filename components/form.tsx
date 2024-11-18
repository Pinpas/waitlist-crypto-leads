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
          className="w-full rounded-lg border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/90 focus:outline-none focus:ring-2 focus:ring-[#F7FF9B]/50"
        />
      </motion.div>
      <input
        type="email"
        placeholder="Your email"
        value={email}
        onChange={handleEmailChange}
        className="w-full rounded-lg border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/90 focus:outline-none focus:ring-2 focus:ring-[#F7FF9B]/50"
      />
      <button
        onClick={handleSubmit}
        disabled={loading}
        className="w-full rounded-lg bg-[#F7FF9B] px-4 py-2.5 text-sm font-medium text-black hover:bg-[#F7FF9B]/90 focus:outline-none focus:ring-2 focus:ring-[#F7FF9B]/50 disabled:opacity-50"
      >
        Join the waitlist
      </button>
    </motion.div>
  );
}
