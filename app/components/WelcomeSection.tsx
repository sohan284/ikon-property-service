"use client";

import React from "react";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
export default function WelcomeSection() {
  return (
    <section className=" py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* ── Left Content: Photo & Introduction ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col md:flex-row gap-8 items-start"
          >
            {/* Image Container */}
            <div className="w-full md:w-1/2 shrink-0 overflow-hidden rounded-sm shadow-xl shadow-black/5">
              <Image
                src="/assets/business-meeting.png"
                alt="Professional team meeting in a modern office"
                width={800}
                height={800}
                className="w-full h-auto object-cover aspect-[4/3] md:aspect-square"
              />
            </div>

            {/* Text Content */}
            <div className="flex-1">
              <h2 className="text-[1.75rem] md:text-[2rem] font-bold text-primary leading-tight mb-6">
                Welcome to Ikon Property Service
              </h2>
              <p className="text-[0.9375rem] leading-relaxed text-primary/80 font-medium">
                <span className="font-semibold">
                  At IKON Property Services, our team is dedicated to ensuring your workplace reflects a
                  professional image at all times.
                </span>
                Our specialist commercial cleaning crews bring over 15 years of experience, delivering high-standard
                results through a precise, careful, and methodical approach to every site.
              </p>
            </div>
          </motion.div>

          {/* ── Right Content: Testimonial/contact ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-5 relative pl-4 lg:pl-12"
          >
            {/* Large Decorative Quote Icon (Top Left) */}
            <div className="absolute bottom-0 lg:bottom-4 right-0  text-secondary/15">
              <Quote size={60} fill="#3647567a" strokeWidth={0} />
            </div>

            <div className="relative z-10">
              <blockquote className="text-xl md:text-2xl lg:text-[1.625rem] lg:pl-6 px-8 italic font-light text-primary-dark leading-snug tracking-tight mb-8">
                Whenever an issue arises, IKON Property Services responds quickly and consistently delivers
                results that exceed expectations.
              </blockquote>

              <footer className="flex flex-col">
                <span className="text-base font-bold text-primary-dark tracking-tight">
                  Roger Mackereth
                </span>
                <span className="text-[0.875rem] text-primary/60 font-medium">
                  Giltap Group Investments
                </span>
              </footer>
            </div>

            {/* Subtly placed closing quote mark if desired, but image shows only top-left & bottom-right */}
            <div className="absolute  -top-12 lg:-top-10  -left-6 lg:left-0 text-secondary/15 rotate-180">
              <Quote size={60} fill="#3647567a" strokeWidth={0} />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
