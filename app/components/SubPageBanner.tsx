"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
interface SubPageBannerProps {
  imageSrc: string;
  title: string;
  subtitle?: string;
  compact?: boolean;
}

export default function SubPageBanner({
  imageSrc,
  title,
  subtitle,
  compact = false
}: SubPageBannerProps) {
  return (
    <section
      className={`relative w-full overflow-hidden transition-all duration-300 ${compact
        ? "h-[180px] md:h-[280px] lg:h-[360px]"
        : "h-[300px] md:h-[360px] lg:h-[400px]"
        }`}
    >
      {/* Background Image */}
      <Image
        src={imageSrc}
        alt={title}
        fill
        priority
        className="object-cover object-[50%_40%]"
      />

      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Banner Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-8 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <h1 className={`font-bold text-white leading-tight tracking-tight uppercase ${compact ? "text-2xl md:text-3xl" : "text-3xl md:text-4xl lg:text-[2.75rem]"
              }`}>
              {title}
            </h1>
            {subtitle && (
              <p className={`mt-3 text-white/90 font-medium tracking-wide max-w-xl ${compact ? "text-sm md:text-[0.9375rem]" : "text-base md:text-lg"}`}>
                {subtitle}
              </p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
