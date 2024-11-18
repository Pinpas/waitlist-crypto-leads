import { motion } from "framer-motion";
import TextBlur from "@/components/ui/text-blur";
import AnimatedShinyText from "@/components/ui/shimmer-text";
import { containerVariants, itemVariants } from "@/lib/animation-variants";
import Image from "next/image";

export default function CTA() {
  return (
    <div className="flex flex-col items-center text-center">
      <motion.div
        className="flex w-full max-w-2xl flex-col gap-2"
        variants={containerVariants}
        initial="hidden"
        animate="visible">
        <motion.div variants={itemVariants}>
          <div className="flex items-center justify-center">
            <div className="flex w-fit items-center justify-center rounded-full bg-muted/80 text-center">
              <AnimatedShinyText className="px-4 py-1">
                <span>Coming soon!</span>
              </AnimatedShinyText>
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Image
            src="/transparant-leadblock-logo.svg"
            alt="LeadBlock Logo"
            width={240}
            height={60}
            className="mx-auto mb-8 mt-6 h-16 w-auto"
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <TextBlur
            className="text-center text-3xl font-medium tracking-tighter sm:text-5xl"
            text="Turn Anonymous Wallets Into Your Next Big Investors"
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <TextBlur
            className="mx-auto max-w-[27rem] pt-1.5 text-center text-base text-zinc-300 sm:text-lg"
            text="Join the waitlist to get early access to the first on-chain lead generation platform built specifically for crypto projects."
            duration={0.8}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
