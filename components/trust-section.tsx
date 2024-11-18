"use client";

import { cn } from "@/lib/utils";

export function TrustSection() {
  return (
    <section className="w-full max-w-[1400px] px-4 py-12 sm:py-16 md:py-20 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-center text-center">
        <span className="inline-block rounded-full bg-[#F7FF9B]/10 px-4 py-1 text-sm font-medium text-[#F7FF9B]">
          Why us?
        </span>
        <h2 className="mt-6 text-2xl sm:text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl">
          Built by Web3 Marketers
        </h2>
        <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl">
          Our team brings years of experience in Web3 development and blockchain analytics and automation.
        </p>
      </div>

      <div className="mt-8 sm:mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Trust Point 1 */}
        <div className="group relative overflow-hidden rounded-lg border bg-background p-6 transition-all hover:shadow-xl">
          <div className="flex h-full flex-col justify-between gap-4">
            <div className="space-y-4">
              <div className="size-12 rounded-full border-2 border-[#F7FF9B] bg-background/80 p-2 backdrop-blur-sm">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#F7FF9B"
                  strokeWidth="2"
                  className="size-full"
                >
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">4+ Years Experience</h3>
              <p className="text-sm text-muted-foreground">
                Deep expertise in crypto automation and blockchain technology
              </p>
            </div>
          </div>
        </div>

        {/* Trust Point 2 */}
        <div className="group relative overflow-hidden rounded-lg border bg-background p-6 transition-all hover:shadow-xl">
          <div className="flex h-full flex-col justify-between gap-4">
            <div className="space-y-4">
              <div className="size-12 rounded-full border-2 border-[#F7FF9B] bg-background/80 p-2 backdrop-blur-sm">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#F7FF9B"
                  strokeWidth="2"
                  className="size-full"
                >
                  <path d="M20 7h-7m0 0v11m0-11-4-4-4 4h11z" />
                  <path d="M9 21v-6.9A3.6 3.6 0 0 0 5.1 11H3v10h18v-5h-2M9 3v18" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">NFT Expertise</h3>
              <p className="text-sm text-muted-foreground">
                Successfully built and deployed NFT mint tools used by major projects
              </p>
            </div>
          </div>
        </div>

        {/* Trust Point 3 */}
        <div className="group relative overflow-hidden rounded-lg border bg-background p-6 transition-all hover:shadow-xl">
          <div className="flex h-full flex-col justify-between gap-4">
            <div className="space-y-4">
              <div className="size-12 rounded-full border-2 border-[#F7FF9B] bg-background/80 p-2 backdrop-blur-sm">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#F7FF9B"
                  strokeWidth="2"
                  className="size-full"
                >
                  <path d="M21 21H4.6c-.6 0-1.1-.2-1.4-.6-.3-.4-.6-.9-.6-1.4l1-13c.1-.5.3-1 .7-1.3.4-.4.9-.7 1.4-.7H19c.5 0 1 .3 1.4.7.4.3.6.8.7 1.3l1 13c0 .5-.3 1-.6 1.4-.3.4-.8.6-1.4.6z" />
                  <path d="M16 3H9C8.4 3 8 3.4 8 4v2h9V4c0-.6-.4-1-1-1z" />
                  <path d="m8 10 4 4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">On-Chain Analytics</h3>
              <p className="text-sm text-muted-foreground">
                Specialized in analyzing blockchain data for actionable insights
              </p>
            </div>
          </div>
        </div>

        {/* Trust Point 4 */}
        <div className="group relative overflow-hidden rounded-lg border bg-background p-6 transition-all hover:shadow-xl">
          <div className="flex h-full flex-col justify-between gap-4">
            <div className="space-y-4">
              <div className="size-12 rounded-full border-2 border-[#F7FF9B] bg-background/80 p-2 backdrop-blur-sm">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#F7FF9B"
                  strokeWidth="2"
                  className="size-full"
                >
                  <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Web3 Track Record</h3>
              <p className="text-sm text-muted-foreground">
                Proven history of successful Web3 development and deployment
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 