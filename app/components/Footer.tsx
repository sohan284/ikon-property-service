import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import logo from "@/public/assets/logo.png";
import { FadeUp } from "./FadeUp";

export default function Footer() {
  return (
    <footer className="w-full bg-primary-dark text-white overflow-hidden">
      {/* ── Main Footer Content ── */}
      <div className="relative max-w-[1440px] mx-auto px-6 md:px-8 lg:px-10 py-16 lg:py-20">

        {/* Background Graphic Decoration (Right Side) */}
        <div className="absolute right-0 top-0 h-full w-1/3 opacity-20 pointer-events-none hidden lg:block">
          <svg viewBox="0 0 400 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
            <path d="M400 0L150 300L400 600H250L0 300L250 0H400Z" fill="white" />
          </svg>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">

          {/* Column 1: Social / Facebook */}
          <FadeUp delay={0} className="flex flex-col gap-6">
            <div className="bg-white p-6 rounded-sm shadow-lg max-w-[200px] relative">
              {/* Speech bubble arrow */}
              <div className="absolute -bottom-3 left-6 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-white" />

              <p className="text-primary-dark text-lg font-serif italic mb-2 tracking-tight">
                follow us
              </p>
              <p className="text-primary font-bold text-xl leading-none">
                on Facebook
              </p>
            </div>

            <a
              href="https://www.facebook.com/ikonpropertyservices"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white/90 hover:text-white transition-colors mt-2"
            >
              <div className="bg-[#3b5998] p-1.5 rounded">
                <svg
                  xmlns="http://w3.org"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="white"
                >
                  <path d="M23.998 12c0-6.627-5.372-12-11.999-12C5.372 0 0 5.373 0 12c0 5.99 4.388 10.953 10.124 11.854V15.47H7.077V12h3.047V9.356c0-3.007 1.791-4.668 4.533-4.668 1.312 0 2.686.234 2.686.234v2.953H15.83c-1.49 0-1.955.925-1.955 1.874V12h3.328l-.532 3.47h-2.796v8.384c5.736-.901 10.124-5.864 10.124-11.854Z" />
                </svg>
              </div>
              <span className="text-sm font-medium">facebook.com/ikonproperty</span>
            </a>

          </FadeUp>

          {/* Column 2: Navigation Links */}
          <FadeUp delay={0.1} className="flex flex-col gap-4">
            <nav className="flex flex-col gap-3">
              <Link href="/about" className="text-base font-bold tracking-tight hover:text-secondary transition-colors uppercase">About Us</Link>
              <Link href="/services" className="text-base font-bold tracking-tight hover:text-secondary transition-colors uppercase">Our Services</Link>

              <Link href="/contact" className="text-base font-bold tracking-tight hover:text-secondary transition-colors uppercase">Contact Us</Link>
            </nav>
          </FadeUp>

          {/* Column 3: Contact Information */}
          <FadeUp delay={0.2} className="flex flex-col gap-6">
            <div className="flex gap-4 items-start">
              <MapPin size={24} className="text-white shrink-0 mt-1" />
              <div className="flex flex-col text-[0.9375rem] leading-snug font-medium text-white/80">
                <span>300 Richmond Road, Grey Lynn,</span>
                <span>Auckland 1021,</span>
                <span>New Zealand</span>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <Phone size={24} className="text-white shrink-0 mt-1" />
              <div className="flex flex-col text-[0.9375rem] leading-snug font-medium text-white/80">
                <span>09 391 4007</span>
                <span>022 463 2244</span>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <Mail size={24} className="text-white shrink-0 mt-1" />
              <a href="mailto:info@ikonservices.nz" className="text-[0.9375rem] leading-snug font-medium text-white/80 hover:text-white underline decoration-white/20 underline-offset-4">
                info@ikonservices.nz
              </a>
            </div>
          </FadeUp>

          {/* Column 4: Branding */}
          <FadeUp delay={0.3} className="flex flex-col items-center lg:items-end justify-center">
            <div className="flex flex-col items-center lg:items-end gap-2 pr-4">
              <Link href="/" className="transition-opacity hover:opacity-80">
                <Image src={logo} alt="Ikon Property Service Logo" width={200} height={90} priority />
              </Link>
              <span className="text-[0.6875rem] lg:text-[0.75rem] font-bold uppercase tracking-[0.3em] text-white/60">
                Full Service. First Class.
              </span>
            </div>
          </FadeUp>

        </div>
      </div>

      {/* ── Bottom Copyright Bar ── */}
      <FadeUp delay={0.4} className="w-full bg-black/20 py-4">
        <div className="max-w-[1440px] mx-auto px-6 md:px-8 lg:px-10 flex flex-col md:flex-row justify-between items-center gap-4 text-[0.75rem] font-medium text-white/40">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-white/10 rounded-sm" />
            <span>Content © 2026 Ikon Property Services. All Rights Reserved</span>
          </div>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
          </div>
        </div>
      </FadeUp>
    </footer>
  );
}
