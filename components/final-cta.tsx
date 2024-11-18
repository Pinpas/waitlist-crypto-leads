"use client";

interface FinalCTAProps {
  onJoinNowClick?: () => void;
}

export function FinalCTA({ onJoinNowClick }: FinalCTAProps) {
  const scrollToWaitlist = () => {
    const element = document.querySelector("#waitlist");
    const offset = 80;
    const elementPosition = element?.getBoundingClientRect().top ?? 0;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

    // If we're already near the waitlist section, trigger the highlight
    if (window.scrollY + offset >= offsetPosition) {
      onJoinNowClick?.();
    }
  };

  return (
    <section className="w-full max-w-[1400px] px-4 py-16 sm:py-20 md:py-24 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-lg border bg-background/50 backdrop-blur-sm">
        {/* Enhanced gradient effect */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#F7FF9B]/30 via-[#F7FF9B]/5 to-transparent" />
        </div>
        
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-16 md:py-20">
          {/* Value proposition badge */}
          <div className="mb-8 inline-flex items-center rounded-full border border-[#F7FF9B]/40 bg-[#F7FF9B]/10 px-3 py-1 text-sm">
            <span className="text-[#F7FF9B]">🚀 Early Access Benefits</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl max-w-3xl bg-clip-text">
            Join the Future of Crypto Lead Generation
          </h2>

          {/* Enhanced value proposition */}
          <p className="mt-6 text-lg sm:text-xl text-[#F7FF9B] font-medium animate-pulse">
            Limited to first 25 sign-ups • 50% Lifetime Discount
          </p>

          {/* Social proof */}
          <p className="mt-4 text-base text-muted-foreground">
            Be among the first 25 projects to revolutionize lead generation
          </p>

          {/* Enhanced CTA button with hover effect and icon */}
          <button 
            onClick={scrollToWaitlist}
            className="group mt-8 relative inline-flex items-center justify-center gap-2 rounded-full bg-[#F7FF9B] px-8 py-4 text-base font-semibold text-black transition-all hover:bg-[#F7FF9B]/90 hover:scale-105 hover:shadow-xl"
          >
            Join Waitlist Now
            <svg 
              className="w-5 h-5 transition-transform group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>

          {/* Urgency indicator */}
          <p className="mt-4 text-sm text-muted-foreground">
            ⚡ Spots filling up quickly • Priority access closing soon
          </p>
        </div>
      </div>
    </section>
  );
} 