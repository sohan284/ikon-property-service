"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/assets/logo.png";
import { Phone, Mail, ArrowUpRight, X, Menu } from "lucide-react";
import { motion } from "framer-motion";

const navLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="bg-primary sticky top-0 z-50 shadow-md">
      <nav className="max-w-[1440px] mx-auto w-full overflow-hidden" role="navigation" aria-label="Main navigation">
        {/* ── Top bar ── */}
        {/* <div className="hidden lg:flex  text-white text-[0.8125rem] tracking-wide">
          <div className="w-full max-w-[1440px] mx-auto px-6 md:px-8 lg:px-10 flex items-center justify-end gap-6 py-1.5">
            <a
              href="tel:+8801700000000"
              className="inline-flex items-center gap-1.5 text-white no-underline transition-opacity duration-200 hover:opacity-80"
              aria-label="Call us"
            >
              <Phone size={14} aria-hidden="true" />
              +880 1700-000000
            </a>
            <a
              href="mailto:info@ikonproperty.com"
              className="inline-flex items-center gap-1.5 text-white no-underline transition-opacity duration-200 hover:opacity-80"
              aria-label="Email us"
            >
              <Mail size={14} aria-hidden="true" />
              info@ikonproperty.com
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-1.5 text-white no-underline transition-opacity duration-200 hover:opacity-80"
              aria-label="Request a quote"
            >
              <ArrowUpRight size={14} aria-hidden="true" />
              Request a Quote
            </a>
          </div>
        </div> */}

        {/* ── Main bar ── */}
        <div className="bg-primary">
          <div className="w-full max-w-[1440px] mx-auto px-6 md:px-8 lg:px-10 flex items-center justify-between py-3">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Link href="/" className="flex items-center gap-2.5 no-underline shrink-0" aria-label="Ikon Property Service – Home">
                <Image src={logo} alt="Logo" width={180} height={80} />
              </Link>
            </motion.div>

            {/* Desktop nav */}
            <motion.ul 
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1, delayChildren: 0.2 },
                },
              }}
              className="hidden lg:flex list-none items-center gap-4" 
              id="desktop-nav"
            >
              {navLinks.map((link) => (
                <motion.li 
                  variants={{
                    hidden: { opacity: 0, y: -20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                  }}
                  key={link.href}
                >
                  <Link
                    href={link.href}
                    className="relative text-white text-[0.8125rem] font-semibold uppercase px-3.5 py-2 rounded-md no-underline whitespace-nowrap transition-colors duration-200 hover:bg-primary/5 hover:text-secondary group"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-secondary rounded-sm transition-all duration-250 -translate-x-1/2 group-hover:w-3/4" />
                  </Link>
                </motion.li>
              ))}
            </motion.ul>



            {/* Mobile toggle */}
            <button
              className="flex lg:hidden items-center justify-center w-10 h-10 bg-transparent border-[1.5px] border-primary rounded-md cursor-pointer text-white transition-colors duration-200 hover:bg-primary/5"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile nav */}
          <div
            className={`lg:hidden flex flex-col gap-1 px-6 border-t border-white/10 bg-primary overflow-hidden transition-all duration-300 ease-in-out ${mobileOpen ? "max-h-[500px] opacity-100 pb-5" : "max-h-0 opacity-0 pb-0 border-t-0"
              }`}
            id="mobile-nav"
            role="menu"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                role="menuitem"
                onClick={() => setMobileOpen(false)}
                className={`text-white text-sm font-semibold uppercase tracking-[0.04em] px-3 py-2.5 rounded-md no-underline transition-all duration-300 hover:bg-white/10 ${mobileOpen ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              role="menuitem"
              onClick={() => setMobileOpen(false)}
              className={`inline-flex items-center justify-center gap-2 bg-secondary text-white text-[0.8125rem] font-semibold uppercase tracking-[0.04em] px-5 py-2.5 rounded-md no-underline mt-2 transition-all duration-300 hover:bg-secondary-light ${mobileOpen ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
                }`}
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
