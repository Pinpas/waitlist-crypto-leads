import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { Twitter, MessageCircle, Linkedin, Github, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-800/50 bg-background/50 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {/* Company Info - Wider column */}
          <div className="lg:col-span-2 space-y-6">
            <Image
              src="/transparant-leadblock-logo.svg"
              alt="LeadBlock Logo"
              width={120}
              height={32}
              className="h-8 w-auto"
            />
            <div className="space-y-4">
              <p className="text-sm text-zinc-400 max-w-sm">
                The first on-chain lead generation platform built specifically for crypto projects.
              </p>
              <p className="text-sm text-zinc-400 max-w-sm">
                Turn anonymous wallet visitors into qualified leads with AI-powered blockchain analytics.
              </p>
            </div>
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a href="#" className="text-zinc-400 hover:text-[#F7FF9B] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-zinc-400 hover:text-[#F7FF9B] transition-colors">
                <MessageCircle className="h-5 w-5" />
              </a>
              <a href="#" className="text-zinc-400 hover:text-[#F7FF9B] transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-zinc-400 hover:text-[#F7FF9B] transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-zinc-100">Product</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#features" className="text-zinc-400 hover:text-[#F7FF9B] transition-colors">Features</a>
              </li>
              <li>
                <a href="#" className="text-zinc-400 hover:text-[#F7FF9B] transition-colors">Pricing</a>
              </li>
              <li>
                <a href="#" className="text-zinc-400 hover:text-[#F7FF9B] transition-colors">Roadmap</a>
              </li>
              <li>
                <a href="#" className="text-zinc-400 hover:text-[#F7FF9B] transition-colors">Documentation</a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-zinc-100">Resources</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-zinc-400 hover:text-[#F7FF9B] transition-colors">Blog</a>
              </li>
              <li>
                <a href="#" className="text-zinc-400 hover:text-[#F7FF9B] transition-colors">Case Studies</a>
              </li>
              <li>
                <a href="#" className="text-zinc-400 hover:text-[#F7FF9B] transition-colors">Help Center</a>
              </li>
              <li>
                <a href="#" className="text-zinc-400 hover:text-[#F7FF9B] transition-colors">API Docs</a>
              </li>
            </ul>
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
                  <span className="text-[#F7FF9B]">✓</span> SOC 2 Compliant
                </p>
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
              <a href="#" className="text-zinc-400 hover:text-[#F7FF9B] transition-colors">Status</a>
              <a href="#" className="text-zinc-400 hover:text-[#F7FF9B] transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
