"use client";

import React, { forwardRef, useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/animated-beam";
import { ArrowDown } from "lucide-react";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode; label?: string; description?: string; items?: string[] }
>(({ className, children, label, description, items }, ref) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        ref={ref}
        className={cn(
          "z-10 flex size-12 items-center justify-center rounded-full border-2 border-[#F7FF9B] bg-background/80 backdrop-blur-sm p-3",
          className,
        )}
      >
        <div className="[&>svg]:stroke-[#F7FF9B] [&>svg]:w-full [&>svg]:h-full">
          {children}
        </div>
      </div>
      {label && (
        <span className="text-sm font-medium text-white">{label}</span>
      )}
      {description && (
        <span className="text-xs text-white/70 max-w-[200px] text-center">
          {description}
        </span>
      )}
    </div>
  );
});

Circle.displayName = "Circle";

export function AnimatedBeamConnection({
  className,
}: {
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sourceRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const target1Ref = useRef<HTMLDivElement>(null);
  const target2Ref = useRef<HTMLDivElement>(null);
  const target3Ref = useRef<HTMLDivElement>(null);
  const target4Ref = useRef<HTMLDivElement>(null);
  const target5Ref = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="space-y-8">
      <div
        className={cn(
          "relative flex min-h-[1000px] md:min-h-[700px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-4 sm:p-6 md:p-10 md:shadow-xl",
          className,
        )}
        ref={containerRef}
      >
        <div className="flex size-full flex-col md:flex-row items-stretch justify-between gap-16 md:gap-10 max-w-6xl mx-auto pb-24 md:pb-0">
          {/* Left Side - Source */}
          <div className="flex flex-col justify-center">
            <Circle 
              ref={sourceRef} 
              className="size-12 md:size-14"
              label="Identified Lead"
              description="Web3 wallet activity and on-chain behavior"
            >
              <Icons.user />
            </Circle>
          </div>

          {isMobile && (
            <div className="flex justify-center -my-8">
              <ArrowDown className="w-8 h-8 text-[#F7FF9B] animate-bounce" />
            </div>
          )}

          {/* Center - Web3 Identifiers */}
          <div className="flex flex-col justify-center items-center">
            <Circle 
              ref={centerRef} 
              className="size-16 md:size-20"
              label="Web3 Identifiers"
              description="ENS, Lens, Farcaster & More"
            >
              <Icons.web3 />
            </Circle>
          </div>

          {isMobile && (
            <div className="flex justify-center -my-8">
              <ArrowDown className="w-8 h-8 text-[#F7FF9B] animate-bounce" />
            </div>
          )}

          {/* Right Side - Outreach Channels */}
          <div className="flex flex-col justify-center gap-6 md:gap-6">
            <Circle 
              ref={target1Ref} 
              className="size-12 md:size-14"
              label="Wallet-to-Wallet"
              description="Secure blockchain messaging"
            >
              <Icons.wallet />
            </Circle>
            <Circle 
              ref={target2Ref} 
              className="size-12 md:size-14"
              label="Social Platforms"
              description="Connected social identities"
            >
              <Icons.social />
            </Circle>
            <Circle 
              ref={target3Ref} 
              className="size-12 md:size-14"
              label="Community Forums"
              description="Web3 community engagement"
            >
              <Icons.forum />
            </Circle>
            <Circle 
              ref={target4Ref} 
              className="size-12 md:size-14"
              label="DAO Governance"
              description="Governance platform interactions"
            >
              <Icons.governance />
            </Circle>
            <Circle 
              ref={target5Ref} 
              className="size-12 md:size-14"
              label="Web3 Social"
              description="Decentralized social networks"
            >
              <Icons.web3Social />
            </Circle>
          </div>
        </div>

        <div className={cn(
          "absolute left-0 right-0 text-center px-4",
          isMobile ? "bottom-4" : "bottom-4"
        )}>
          <p className="text-xs sm:text-sm text-muted-foreground max-w-2xl mx-auto bg-background/95 p-2 rounded-lg">
          From anonymous wallets to real connections. We help you identify and reach potential investors through their preferred Web3 channels.
          </p>
        </div>

        {!isMobile && (
          <>
            <AnimatedBeam 
              containerRef={containerRef} 
              fromRef={sourceRef} 
              toRef={centerRef}
              pathColor="#F7FF9B"
              pathOpacity={0.2}
              gradientStartColor="#F7FF9B"
              gradientStopColor="#F7FF9B"
              duration={8}
            />
            {[target1Ref, target2Ref, target3Ref, target4Ref, target5Ref].map((targetRef, i) => (
              <AnimatedBeam
                key={i}
                containerRef={containerRef}
                fromRef={centerRef}
                toRef={targetRef}
                pathColor="#F7FF9B"
                pathOpacity={0.2}
                gradientStartColor="#F7FF9B"
                gradientStopColor="#F7FF9B"
                duration={8}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
}

const Icons = {
  user: () => (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
      <circle cx="12" cy="7" r="4"/>
    </svg>
  ),
  web3: () => (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
    </svg>
  ),
  wallet: () => (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4"/>
      <path d="M4 6v12c0 1.1.9 2 2 2h14v-4"/>
      <path d="M18 12a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4v-4h-4z"/>
    </svg>
  ),
  social: () => (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="18" cy="5" r="3"/>
      <circle cx="6" cy="12" r="3"/>
      <circle cx="18" cy="19" r="3"/>
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
    </svg>
  ),
  forum: () => (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
  ),
  governance: () => (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2L2 7l10 5 10-5-10-5z"/>
      <path d="M2 17l10 5 10-5"/>
      <path d="M2 12l10 5 10-5"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>
  ),
  web3Social: () => (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10"/>
      <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
      <line x1="9" y1="9" x2="9" y2="9"/>
      <line x1="15" y1="9" x2="15" y2="9"/>
    </svg>
  ),
}; 