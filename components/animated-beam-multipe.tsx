"use client";

import React, { forwardRef, useRef, useState, useEffect } from "react";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/animated-beam";
import { ArrowDown } from "lucide-react";

// Define sector types and configurations
type Sector = "RWA" | "DePIN" | "NFT" | "DeFi" | "GameFi";

interface SectorConfig {
  sources: Array<{
    icon: keyof typeof Icons;
    label: string;
    description: string;
  }>;
  outputs: Array<{
    icon: keyof typeof Icons;
    label: string;
    description: string;
  }>;
}

const sectorConfigs: Record<Sector, SectorConfig> = {
  RWA: {
    sources: [
      { icon: "property", label: "Real Estate", description: "Property tokenization and trading data" },
      { icon: "commodity", label: "Commodities", description: "Precious metals and commodity tokens" },
      { icon: "equity", label: "Private Equity", description: "Tokenized equity investments" },
      { icon: "art", label: "Fine Art", description: "Digital art certificates and provenance" },
      { icon: "bonds", label: "Bonds", description: "Tokenized debt instruments" },
    ],
    outputs: [
      { icon: "chart", label: "Asset Valuation", description: "Real-world asset performance analysis" },
      { icon: "wallet", label: "Portfolio Mix", description: "RWA allocation and diversity" },
      { icon: "portfolio", label: "Risk Profile", description: "Asset-backed investment patterns" },
    ]
  },
  DePIN: {
    sources: [
      { icon: "compute", label: "Computing", description: "Distributed computing usage" },
      { icon: "storage", label: "Storage", description: "Decentralized storage metrics" },
      { icon: "network", label: "Network", description: "Bandwidth contribution data" },
      { icon: "sensor", label: "IoT Data", description: "Connected device metrics" },
      { icon: "mining", label: "Mining", description: "Hardware contribution stats" },
    ],
    outputs: [
      { icon: "chart", label: "Network Impact", description: "Infrastructure contribution analysis" },
      { icon: "wallet", label: "Resource Score", description: "Computing resource allocation" },
      { icon: "portfolio", label: "Tech Portfolio", description: "Infrastructure investment pattern" },
    ]
  },
  NFT: {
    sources: [
      { icon: "ethereum", label: "ETH NFTs", description: "Ethereum NFT collections" },
      { icon: "solana", label: "SOL NFTs", description: "Solana NFT marketplace data" },
      { icon: "polygon", label: "Gaming NFTs", description: "Gaming asset transactions" },
      { icon: "base", label: "Art NFTs", description: "Digital art collections" },
      { icon: "launchpad", label: "Memberships", description: "NFT community participation" },
    ],
    outputs: [
      { icon: "chart", label: "Collection Analysis", description: "NFT portfolio valuation" },
      { icon: "wallet", label: "Trading Pattern", description: "NFT trading behavior" },
      { icon: "portfolio", label: "Collector Score", description: "Collection quality metrics" },
    ]
  },
  DeFi: {
    sources: [
      { icon: "ethereum", label: "DEX Trading", description: "Decentralized exchange activity" },
      { icon: "lending", label: "Lending", description: "DeFi lending positions" },
      { icon: "yield", label: "Yield Farming", description: "Liquidity provision data" },
      { icon: "staking", label: "Staking", description: "Protocol staking history" },
      { icon: "governance", label: "Governance", description: "DAO participation" },
    ],
    outputs: [
      { icon: "chart", label: "DeFi Score", description: "Protocol interaction analysis" },
      { icon: "wallet", label: "Risk Profile", description: "DeFi strategy assessment" },
      { icon: "portfolio", label: "Yield Analysis", description: "Return optimization patterns" },
    ]
  },
  GameFi: {
    sources: [
      { icon: "games", label: "Game Assets", description: "In-game item ownership" },
      { icon: "achievements", label: "Achievements", description: "Gaming milestones" },
      { icon: "guilds", label: "Guild Data", description: "Gaming community involvement" },
      { icon: "tournaments", label: "Tournaments", description: "Competition history" },
      { icon: "marketplace", label: "Trading", description: "Asset trading activity" },
    ],
    outputs: [
      { icon: "chart", label: "Player Profile", description: "Gaming behavior analysis" },
      { icon: "wallet", label: "Asset Value", description: "Gaming portfolio assessment" },
      { icon: "portfolio", label: "Engagement Score", description: "Platform participation metrics" },
    ]
  },
};

// Update the SectorSelector component
const SectorSelector = ({ 
  currentSector, 
  onSectorChange 
}: { 
  currentSector: Sector; 
  onSectorChange: (sector: Sector) => void; 
}) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <span className="text-sm font-medium uppercase tracking-wider text-[#F7FF9B]">
        Select Sector
      </span>
      <div className="flex flex-wrap justify-center gap-3">
        {Object.keys(sectorConfigs).map((sector) => (
          <button
            key={sector}
            onClick={() => onSectorChange(sector as Sector)}
            className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm transition-all ${
              currentSector === sector
                ? "bg-[#F7FF9B]/20 text-[#F7FF9B]"
                : "bg-zinc-800/50 text-zinc-400 hover:bg-zinc-800"
            }`}
          >
            <span>{getSectorIcon(sector)}</span>
            <span>{sector}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

// Add this helper function to get sector icons
const getSectorIcon = (sector: string) => {
  const icons = {
    RWA: "💼",
    DeFi: "🏦",
    NFT: "🎨",
    GameFi: "🎮",
    DePIN: "🌐",
  };
  return icons[sector as keyof typeof icons];
};

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode; label?: string; description?: string }
>(({ className, children, label, description }, ref) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        ref={ref}
        className={cn(
          "z-10 flex size-12 items-center justify-center rounded-full border-2 border-[#F7FF9B] bg-background/80 backdrop-blur-sm p-3 shadow-[0_0_20px_-12px_rgba(247,255,155,0.8)]",
          className,
        )}
      >
        {children}
      </div>
      {label && (
        <span className="text-sm font-medium">{label}</span>
      )}
      {description && (
        <span className="text-xs text-muted-foreground max-w-[120px] text-center">
          {description}
        </span>
      )}
    </div>
  );
});

Circle.displayName = "Circle";

export function AnimatedBeamMultipleOutputDemo({
  className,
}: {
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);
  const div8Ref = useRef<HTMLDivElement>(null);
  const div9Ref = useRef<HTMLDivElement>(null);

  const [currentSector, setCurrentSector] = useState<Sector>("RWA");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const config = sectorConfigs[currentSector];

  return (
    <div className="space-y-8">
      <SectorSelector 
        currentSector={currentSector} 
        onSectorChange={setCurrentSector} 
      />
      <div
        className={cn(
          "relative flex min-h-[1000px] md:min-h-[700px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-4 sm:p-6 md:p-10 md:shadow-xl",
          className,
        )}
        ref={containerRef}
      >
        <div className="flex size-full flex-col md:flex-row items-stretch justify-between gap-16 md:gap-10 max-w-6xl mx-auto pb-24 md:pb-0">
          <div className="flex flex-col justify-center gap-6 md:gap-6">
            {config.sources.map((source, index) => (
              <Circle
                key={source.label}
                ref={[div1Ref, div2Ref, div3Ref, div4Ref, div5Ref][index]}
                className="size-12 md:size-14"
                label={source.label}
                description={source.description}
              >
                {Icons[source.icon]()}
              </Circle>
            ))}
          </div>

          {isMobile && (
            <div className="flex justify-center -my-8">
              <ArrowDown className="w-8 h-8 text-[#F7FF9B] animate-bounce" />
            </div>
          )}

          <div className="flex flex-col justify-center items-center">
            <Circle 
              ref={div6Ref} 
              className="size-16 md:size-20"
              label="AI Processing" 
              description="Advanced blockchain data analysis"
            >
              <Icons.openai />
            </Circle>
          </div>

          {isMobile && (
            <div className="flex justify-center -my-8">
              <ArrowDown className="w-8 h-8 text-[#F7FF9B] animate-bounce" />
            </div>
          )}

          <div className="flex flex-col justify-center gap-6 md:gap-6">
            {config.outputs.map((output, index) => (
              <Circle
                key={output.label}
                ref={[div7Ref, div8Ref, div9Ref][index]}
                className="size-12 md:size-14"
                label={output.label}
                description={output.description}
              >
                {Icons[output.icon]()}
              </Circle>
            ))}
          </div>
        </div>

        <div className={cn(
          "absolute left-0 right-0 text-center px-4",
          isMobile ? "bottom-4" : "bottom-4"
        )}>
          <p className="text-xs sm:text-sm text-muted-foreground max-w-2xl mx-auto bg-background/95 p-2 rounded-lg">
            Turn blockchain data into actionable insights. Our AI processes multiple data sources to identify high-potential investors with proven track records.
          </p>
        </div>

        {!isMobile ? (
          <>
            <AnimatedBeam 
              containerRef={containerRef} 
              fromRef={div1Ref} 
              toRef={div6Ref}
              pathColor="#F7FF9B"
              pathOpacity={0.2}
              gradientStartColor="#F7FF9B"
              gradientStopColor="#F7FF9B"
              duration={8}
            />
            <AnimatedBeam 
              containerRef={containerRef} 
              fromRef={div2Ref} 
              toRef={div6Ref}
              pathColor="#F7FF9B"
              pathOpacity={0.2}
              gradientStartColor="#F7FF9B"
              gradientStopColor="#F7FF9B"
              duration={8}
            />
            <AnimatedBeam 
              containerRef={containerRef} 
              fromRef={div3Ref} 
              toRef={div6Ref}
              pathColor="#F7FF9B"
              pathOpacity={0.2}
              gradientStartColor="#F7FF9B"
              gradientStopColor="#F7FF9B"
              duration={8}
            />
            <AnimatedBeam 
              containerRef={containerRef} 
              fromRef={div4Ref} 
              toRef={div6Ref}
              pathColor="#F7FF9B"
              pathOpacity={0.2}
              gradientStartColor="#F7FF9B"
              gradientStopColor="#F7FF9B"
              duration={8}
            />
            <AnimatedBeam 
              containerRef={containerRef} 
              fromRef={div5Ref} 
              toRef={div6Ref}
              pathColor="#F7FF9B"
              pathOpacity={0.2}
              gradientStartColor="#F7FF9B"
              gradientStopColor="#F7FF9B"
              duration={8}
            />
            <AnimatedBeam 
              containerRef={containerRef} 
              fromRef={div6Ref} 
              toRef={div7Ref}
              pathColor="#F7FF9B"
              pathOpacity={0.2}
              gradientStartColor="#F7FF9B"
              gradientStopColor="#F7FF9B"
              duration={8}
            />
            <AnimatedBeam 
              containerRef={containerRef} 
              fromRef={div6Ref} 
              toRef={div8Ref}
              pathColor="#F7FF9B"
              pathOpacity={0.2}
              gradientStartColor="#F7FF9B"
              gradientStopColor="#F7FF9B"
              duration={8}
            />
            <AnimatedBeam 
              containerRef={containerRef} 
              fromRef={div6Ref} 
              toRef={div9Ref}
              pathColor="#F7FF9B"
              pathOpacity={0.2}
              gradientStartColor="#F7FF9B"
              gradientStopColor="#F7FF9B"
              duration={8}
            />
          </>
        ) : null}
      </div>
    </div>
  );
}

const Icons = {
  ethereum: () => (
    <svg viewBox="0 0 24 24" width="24" height="24">
      <path fill="#687DE3" d="M11.944 17.97L4.58 13.62 11.943 24l7.37-10.38-7.372 4.35h.003zM12.056 0L4.69 12.223l7.365 4.354 7.365-4.35L12.056 0z"/>
    </svg>
  ),
  solana: () => (
    <svg viewBox="0 0 24 24" width="24" height="24">
      <path fill="#14F195" d="M17.16 10.87h-7.35l-2.46 2.45h7.35l2.46-2.45zM17.16 4.89h-7.35l-2.46 2.45h7.35l2.46-2.45zM9.81 15.85l-2.46 2.45h7.35l2.46-2.45H9.81z"/>
    </svg>
  ),
  polygon: () => (
    <svg viewBox="0 0 24 24" width="24" height="24">
      <path fill="#8247E5" d="M12 0L1.5 6v12L12 24l10.5-6V6L12 0zm0 16.5l-3-1.5V9l3-1.5L15 9v6l-3 1.5z"/>
    </svg>
  ),
  base: () => (
    <svg viewBox="0 0 24 24" width="24" height="24">
      <path fill="#0052FF" d="M12 6l-4.5 2.25v7.5L12 18l4.5-2.25v-7.5L12 6zm0 9l-3-1.5v-4.5L12 7.5l3 1.5v4.5L12 15z"/>
    </svg>
  ),
  property: () => (
    <svg viewBox="0 0 24 24" width="24" height="24">
      <path fill="#F7FF9B" d="M12 3L4 9v12h16V9l-8-6zm0 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
    </svg>
  ),
  commodity: () => (
    <svg viewBox="0 0 24 24" width="24" height="24">
      <path fill="#F7FF9B" d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 4.5l5 2.5v3l-5 2.5L7 12V9l5-2.5z"/>
    </svg>
  ),
  equity: () => (
    <svg viewBox="0 0 24 24" width="24" height="24">
      <path fill="#F7FF9B" d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z"/>
    </svg>
  ),
  art: () => (
    <svg viewBox="0 0 24 24" width="24" height="24">
      <path fill="#F7FF9B" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
    </svg>
  ),
  bonds: () => (
    <svg viewBox="0 0 24 24" width="24" height="24">
      <path fill="#F7FF9B" d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
    </svg>
  ),
  compute: () => (
    <svg viewBox="0 0 24 24" width="24" height="24">
      <path fill="#F7FF9B" d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"/>
    </svg>
  ),
  storage: () => (
    <svg viewBox="0 0 24 24" width="24" height="24">
      <path fill="#F7FF9B" d="M2 20h20v-4H2v4zm2-3h2v2H4v-2zM2 4v4h20V4H2zm4 3H4V5h2v2zm-4 7h20v-4H2v4zm2-3h2v2H4v-2z"/>
    </svg>
  ),
  network: () => (
    <svg viewBox="0 0 24 24" width="24" height="24">
      <path fill="#F7FF9B" d="M12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6m0-2C9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96C18.67 6.59 15.64 4 12 4z"/>
    </svg>
  ),
  sensor: () => (
    <svg viewBox="0 0 24 24" width="24" height="24">
      <path fill="#F7FF9B" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
    </svg>
  ),
  mining: () => (
    <svg viewBox="0 0 24 24" width="24" height="24">
      <path fill="#F7FF9B" d="M19.28 8.6l-.7-1.21-1.27.51-1.06.43-.91-.7c-.39-.3-.8-.54-1.23-.71l-1.06-.43-.16-1.13L12.7 4h-1.4l-.19 1.35-.16 1.13-1.06.44c-.41.17-.82.41-1.25.73l-.9.68-1.05-.42-1.27-.52-.7 1.21 1.08.84.89.7-.14 1.13c-.03.3-.05.53-.05.73s.02.43.05.73l.14 1.13-.89.7-1.08.84.7 1.21 1.27-.51 1.06-.43.91.7c.39.3.8.54 1.23.71l1.06.43.16 1.13.19 1.36h1.39l.19-1.35.16-1.13 1.06-.43c.41-.17.82-.41 1.25-.73l.9-.68 1.04.42 1.27.51.7-1.21-1.08-.84-.89-.7.14-1.13c.04-.31.05-.52.05-.73 0-.21-.02-.43-.05-.73l-.14-1.13.89-.7 1.1-.84zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
    </svg>
  ),
  lending: () => (
    <svg viewBox="0 0 24 24" width="24" height="24">
      <path fill="#F7FF9B" d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
    </svg>
  ),
  yield: () => (
    <svg viewBox="0 0 24 24" width="24" height="24">
      <path fill="#F7FF9B" d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z"/>
    </svg>
  ),
  staking: () => (
    <svg viewBox="0 0 24 24" width="24" height="24">
      <path fill="#F7FF9B" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
    </svg>
  ),
  governance: () => (
    <svg viewBox="0 0 24 24" width="24" height="24">
      <path fill="#F7FF9B" d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
    </svg>
  ),
  games: () => (
    <svg viewBox="0 0 24 24" width="24" height="24">
      <path fill="#F7FF9B" d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-10 7H8v3H6v-3H3v-2h3V8h2v3h3v2zm4.5 2c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4-3c-.83 0-1.5-.67-1.5-1.5S18.67 9 19.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
    </svg>
  ),
  achievements: () => (
    <svg viewBox="0 0 24 24" width="24" height="24">
      <path fill="#F7FF9B" d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2z"/>
    </svg>
  ),
  guilds: () => (
    <svg viewBox="0 0 24 24" width="24" height="24">
      <path fill="#F7FF9B" d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
    </svg>
  ),
  tournaments: () => (
    <svg viewBox="0 0 24 24" width="24" height="24">
      <path fill="#F7FF9B" d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2z"/>
    </svg>
  ),
  marketplace: () => (
    <svg viewBox="0 0 24 24" width="24" height="24">
      <path fill="#F7FF9B" d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
    </svg>
  ),
  chart: () => (
    <svg viewBox="0 0 24 24" width="24" height="24">
      <path fill="#F7FF9B" d="M3 3v18h18v-2H5V3H3zm4 10h2v4H7v-4zm4-6h2v10h-2V7zm4 3h2v7h-2v-7zm4-3h2v10h-2V7z"/>
    </svg>
  ),
  wallet: () => (
    <svg viewBox="0 0 24 24" width="24" height="24">
      <path fill="#F7FF9B" d="M21 7h-6V5h6v2zm-2 3.9c-.6 0-1.1.5-1.1 1.1 0 .6.5 1.1 1.1 1.1.6 0 1.1-.5 1.1-1.1 0-.6-.5-1.1-1.1-1.1zM19 3H5C3.9 3 3 3.9 3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
    </svg>
  ),
  portfolio: () => (
    <svg viewBox="0 0 24 24" width="24" height="24">
      <path fill="#F7FF9B" d="M20 6h-3V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM9 4h6v2H9V4zm11 15H4V8h16v11z"/>
    </svg>
  ),
  openai: () => (
    <svg viewBox="0 0 24 24" width="24" height="24">
      <path fill="#F7FF9B" d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"/>
    </svg>
  ),
  launchpad: () => (
    <svg viewBox="0 0 24 24" width="24" height="24">
      <path fill="#F7FF9B" d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 13l-6-3V8l6-3 6 3v4l-6 3z"/>
    </svg>
  ),
};
