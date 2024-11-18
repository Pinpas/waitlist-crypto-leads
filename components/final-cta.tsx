"use client";

interface FinalCTAProps {
  onJoinNowClick?: () => void;
}

export function FinalCTA({ onJoinNowClick }: FinalCTAProps) {
  return (
    <section className="w-full max-w-[1400px] px-4 py-16 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-zinc-900/90 to-background border border-zinc-800/50 backdrop-blur-sm">
        {/* Glow effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[#F7FF9B]/10 to-transparent" />
          <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-[#F7FF9B]/10 to-transparent" />
        </div>

        <div className="relative px-6 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20">
          <div className="mx-auto max-w-2xl text-center">
            {/* Top tag */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#F7FF9B]/20 bg-[#F7FF9B]/10 px-4 py-1">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#F7FF9B] opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#F7FF9B]"></span>
              </span>
              <span className="text-sm font-medium text-[#F7FF9B]">Limited Time Offer - 23 Spots Left</span>
            </div>

            {/* Main content */}
            <h2 className="mt-8 text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl">
              Join the Future of <br className="hidden sm:inline" />
              <span className="text-[#F7FF9B]">Crypto Lead Generation</span>
            </h2>
            
            <p className="mt-6 text-lg text-zinc-300">
              Be among the first 25 projects to unlock exclusive lifetime benefits
            </p>

            {/* Benefits list */}
            <div className="mt-10 flex flex-col items-center space-y-4">
              <div className="inline-flex items-center gap-3 text-lg">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F7FF9B]/20">
                  <span className="text-[#F7FF9B]">✓</span>
                </span>
                <span className="text-zinc-100">50% lifetime discount - Never pay full price</span>
              </div>
              <div className="inline-flex items-center gap-3 text-lg">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F7FF9B]/20">
                  <span className="text-[#F7FF9B]">✓</span>
                </span>
                <span className="text-zinc-100">Dedicated 1-on-1 onboarding with founders</span>
              </div>
              <div className="inline-flex items-center gap-3 text-lg">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F7FF9B]/20">
                  <span className="text-[#F7FF9B]">✓</span>
                </span>
                <span className="text-zinc-100">Shape the future of LeadBlock</span>
              </div>
            </div>

            {/* CTA button */}
            <div className="mt-10">
              <button
                onClick={onJoinNowClick}
                className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-[#F7FF9B] px-8 py-3 text-base font-medium text-black transition-all duration-300 hover:bg-[#F7FF9B]/90 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#F7FF9B]/50"
              >
                Join the Waitlist Now
                <svg 
                  className="w-4 h-4 transition-transform group-hover:translate-x-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              <p className="mt-4 text-sm text-zinc-400">
                Only <span className="text-[#F7FF9B] font-medium">23 spots remaining</span> for founding members
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 