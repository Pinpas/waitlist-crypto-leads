import AnimatedShinyText from "@/components/ui/shimmer-text";
import Image from "next/image";

export default function CTA() {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex w-full max-w-2xl flex-col gap-2">
        <div className="flex items-center justify-center">
          <div className="flex w-fit items-center justify-center rounded-full bg-muted/80 text-center mt-6">
            <AnimatedShinyText className="px-4 py-1">
              <span>Coming soon!</span>
            </AnimatedShinyText>
          </div>
        </div>

        <h1 className="text-center text-3xl font-medium tracking-tighter sm:text-5xl mt-6">
          Turn Anonymous Wallets Into Your Next Big Investors
        </h1>

        <p className="mx-auto max-w-[27rem] pt-1.5 text-center text-base text-zinc-300 sm:text-lg">
          Join the waitlist to get early access to the first on-chain lead generation platform built specifically for crypto projects.
        </p>
      </div>
    </div>
  );
}
