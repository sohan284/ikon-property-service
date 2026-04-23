"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Marquee } from "./magicui/marquee";
import brand1 from '@/public/assets/icons/brand1.webp'
import brand2 from '@/public/assets/icons/brand2.webp'
import brand3 from '@/public/assets/icons/brand3.webp'
import brand4 from '@/public/assets/icons/brand4.webp'
import brand5 from '@/public/assets/icons/brand5.webp'

const brands = [
  {
    name: "Advance",
    node: (
      <Image src={brand1} height={80} width={200} alt="sitesafe" />
    )
  },
  {
    name: "Franchise Member",
    node: (
      <Image src={brand2} height={80} width={200} alt="servicecompany" />
    )
  },
  {
    name: "Hospitality New Zealand",
    node: (
      <Image src={brand3} height={80} width={200} alt="proquip" />
    )
  },
  {
    name: "Pacific Hygiene",
    node: (
      <Image src={brand4} height={80} width={200} alt="enviroplus" />
    )
  },
  {
    name: "ASB",
    node: (
      <Image src={brand5} height={80} width={250} alt="pacific" />
    )
  }

];

export default function BrandsMarquee() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-8 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-8 lg:px-10">
        <div className="relative">
          {/* Gradient masks for smooth fade effect at edges */}
          <div className="absolute inset-y-0 left-0 w-32 z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 z-10 pointer-events-none" />

          <Marquee pauseOnHover className="[--duration:30s] [--gap:4rem] py-4">
            {brands.map((brand) => {
              return (
                <div
                  key={brand.name}
                  className="flex items-center justify-center transition-opacity duration-300 cursor-default min-w-[200px]"
                >
                  {brand.node}
                </div>
              );
            })}
          </Marquee>
        </div>
      </div>
    </motion.section>
  );
}
