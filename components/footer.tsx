import Image from "next/image";
import { Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-800/50 bg-background/50 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Image
                src="/transparant-leadblock-logo.svg"
                alt="LeadBlock Logo"
                width={120}
                height={32}
                className="h-8 w-auto"
              />
              <span className="text-zinc-100 text-lg font-medium">LeadBlock</span>
            </div>
            <p className="text-sm text-zinc-400 max-w-sm">
              The first on-chain lead generation platform built specifically for crypto projects.
            </p>
          </div>

          {/* Social Links - Center on desktop only */}
          <div className="flex flex-col sm:items-center space-y-6">
            <h3 className="text-sm font-semibold text-zinc-100">Connect With Us</h3>
            <div className="flex items-center space-x-6">
              <a 
                href="#" 
                className="text-zinc-400 hover:text-[#F7FF9B] transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-zinc-400 hover:text-[#F7FF9B] transition-colors"
                aria-label="Discord"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="text-zinc-400 hover:text-[#F7FF9B] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact & Trust */}
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-zinc-100 mb-4">Contact</h3>
              <a 
                href="mailto:support@leadblock.io" 
                className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-[#F7FF9B] transition-colors"
              >
                <Mail className="h-4 w-4" />
                support@leadblock.io
              </a>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-zinc-100">Security</h3>
              <div className="space-y-2 text-sm text-zinc-400">
                <p className="flex items-center gap-2">
                  <span className="text-[#F7FF9B]">✓</span> GDPR Compliant
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-[#F7FF9B]">✓</span> 256-bit Encryption
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-zinc-800/50">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-zinc-400">
              © 2024 LeadBlock. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-zinc-400 hover:text-[#F7FF9B] transition-colors">Privacy Policy</a>
              <a href="#" className="text-zinc-400 hover:text-[#F7FF9B] transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
