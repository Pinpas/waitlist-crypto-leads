"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const menuItems = [
  { name: "Why LeadBlock?", href: "#features" },
  { name: "How it works", href: "#how-it-works" },
  { name: "Leads preview", href: "#leads-preview" },
  { name: "About us", href: "#about" },
  { name: "FAQ", href: "#faq" },
];

interface NavbarProps {
  onJoinNowClick?: () => void;
}

export function Navbar({ onJoinNowClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    const offset = 80;
    const elementPosition = element?.getBoundingClientRect().top ?? 0;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

    if (href === "#waitlist" && window.scrollY + offset >= offsetPosition) {
      onJoinNowClick?.();
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo - Left */}
          <div className="flex-shrink-0">
            <button 
              onClick={scrollToTop}
              className="focus:outline-none"
            >
              <Image
                src="/transparant-leadblock-logo.svg"
                alt="LeadBlock Logo"
                width={120}
                height={32}
                className="h-8 w-auto cursor-pointer transition-transform hover:scale-105"
              />
            </button>
          </div>

          {/* Desktop menu - Centered */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex items-center space-x-8">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-sm text-muted-foreground transition-colors hover:text-[#F7FF9B]"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Join now button - Right */}
          <div className="hidden md:flex flex-shrink-0">
            <button
              onClick={() => scrollToSection("#waitlist")}
              className="rounded-full bg-[#F7FF9B]/10 px-4 py-2 text-sm font-medium text-[#F7FF9B] transition-all hover:bg-[#F7FF9B]/20"
            >
              Join now!
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted-foreground hover:text-[#F7FF9B]"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t bg-background/80 backdrop-blur-md md:hidden"
          >
            <div className="space-y-1 px-4 pb-3 pt-2">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full px-3 py-2 text-base text-muted-foreground transition-colors hover:text-[#F7FF9B]"
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => scrollToSection("#waitlist")}
                className="mt-2 w-full rounded-full bg-[#F7FF9B]/10 px-4 py-2 text-base font-medium text-[#F7FF9B] transition-all hover:bg-[#F7FF9B]/20"
              >
                Join now!
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
} 