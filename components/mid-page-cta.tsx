"use client";

interface MidPageCTAProps {
  onJoinNowClick?: () => void;
}

export function MidPageCTA({ onJoinNowClick }: MidPageCTAProps) {
  return (
    <section className="w-full max-w-[1400px] px-4 py-8 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-zinc-900/90 via-zinc-900/50 to-zinc-900/90 border border-zinc-800/50 backdrop-blur-sm">
        {/* Enhanced glow effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-y-0 left-1/4 w-1/2 bg-gradient-to-r from-transparent via-[#F7FF9B]/10 to-transparent blur-2xl" />
          <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#F7FF9B]/20 to-transparent" />
        </div>

        <div className="relative px-6 py-8 sm:px-8 sm:py-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Left side content with icon */}
            <div className="flex items-center gap-6">
              {/* Decorative icon */}
              <div className="hidden sm:flex size-16 items-center justify-center rounded-full bg-[#F7FF9B]/5 border border-[#F7FF9B]/10">
                <svg
                  className="w-8 h-8 text-[#F7FF9B]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              
              {/* Text content */}
              <div className="text-center sm:text-left">
                {/* Status pill */}
                <div className="inline-flex items-center gap-2 rounded-full border border-[#F7FF9B]/20 bg-[#F7FF9B]/10 px-4 py-1 mb-4">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#F7FF9B] opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#F7FF9B]"></span>
                  </span>
                  <span className="text-sm font-medium text-[#F7FF9B]">Limited Founding Member Spots</span>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-medium">
                  Ready to Find Your Next Big Investors?
                </h3>
                <div className="mt-2 flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm text-zinc-400">
                  <span className="flex items-center gap-1">
                    <span className="text-[#F7FF9B]">•</span> Be one of our first founding members
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="text-[#F7FF9B]">•</span> Lock in 50% lifetime discount
                  </span>
                </div>
              </div>
            </div>

            {/* Right side button */}
            <div className="flex-shrink-0 flex flex-col items-center">
              <button
                onClick={onJoinNowClick}
                className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-[#F7FF9B] px-6 py-2.5 text-sm font-medium text-black transition-all duration-300 hover:bg-[#F7FF9B]/90 hover:scale-105 hover:shadow-[0_0_20px_-12px_rgba(247,255,155,0.8)] focus:outline-none focus:ring-2 focus:ring-[#F7FF9B]/50"
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
              <p className="mt-2 text-xs text-zinc-500 w-full text-center">
                Only 23 founding member spots remaining
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 