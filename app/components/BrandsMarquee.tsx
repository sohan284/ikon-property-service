"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Building2,
  House,
  Briefcase,
  Globe,
  ShieldCheck,
  LayoutDashboard,
  MapPin,
  Castle
} from "lucide-react";
import { Marquee } from "./magicui/marquee";

const brands = [
  {
    name: "Advance",
    node: (
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full bg-slate-600 text-white flex items-center justify-center font-bold text-2xl z-10 shadow-[2px_0_0_white]">a</div>
        <div className="bg-slate-600 text-white font-bold px-3 py-1.5 rounded-r-full leading-none text-sm tracking-wide -ml-2 pl-4">ADVANCE</div>
      </div>
    )
  },
  {
    name: "Franchise Member",
    node: (
      <div className="flex flex-col items-center justify-center border-[3px] border-slate-500 rounded-[2rem] px-5 py-2">
        <span className="text-[7px] uppercase font-bold tracking-widest text-slate-700">Association of New Zealand</span>
        <span className="font-serif font-bold text-[1.7rem] text-slate-700 leading-tight">Franchise</span>
        <span className="font-bold text-[10px] bg-slate-600 text-white px-3 mt-1 rounded-sm uppercase tracking-wider">Member</span>
      </div>
    )
  },
  {
    name: "Hospitality New Zealand",
    node: (
      <div className="flex flex-col py-2">
        <span className="font-serif text-4xl tracking-tight text-slate-800">Hospitality</span>
        <span className="text-[10px] font-bold tracking-[0.4em] text-slate-800 text-center mt-1">NEW ZEALAND</span>
      </div>
    )
  },
  {
    name: "Pacific Hygiene",
    node: (
      <div className="flex items-center gap-3">
        <div className="border-2 border-slate-600 rounded-full w-10 h-10 flex items-center justify-center text-sm font-black text-slate-600 italic">PH</div>
        <div className="flex flex-col justify-center">
          <span className="font-light text-xl text-slate-600 tracking-wider leading-none">PACIFIC HYGIENE</span>
          <span className="text-[8px] text-slate-500 uppercase tracking-widest mt-1">Leaders in Health and Hygiene</span>
        </div>
      </div>
    )
  },
  {
    name: "ASB",
    node: (
      <span className="font-black italic text-5xl tracking-tighter text-slate-600 flex items-center relative gap-1">
        <svg width={"24"} height={"24"} viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 -mr-2"><path d="M2.5 12l9.5-9.5V12z" /></svg>
        ASB
      </span>
    )
  },
  {
    name: "Giltrap Group",
    node: (
      <div className="flex items-center border border-slate-600 rounded-sm overflow-hidden h-10">
        <div className="bg-slate-600 text-white font-bold px-4 flex items-center h-full text-lg">Giltrap</div>
        <div className="text-slate-600 bg-white font-semibold px-4 flex items-center h-full text-lg">Group</div>
      </div>
    )
  },
  {
    name: "Cleaning Systems",
    node: (
      <div className="flex flex-col leading-none italic font-black text-[1.7rem] text-slate-600 tracking-tighter justify-center border-l-4 border-slate-500 pl-3">
        <span>Cleaning</span>
        <span>Systems</span>
      </div>
    )
  },
  {
    name: "Ladycare",
    node: (
      <div className="flex flex-col justify-center py-2 relative">
        <span className="font-serif italic text-4xl text-slate-600 leading-none">Ladycare</span>
        <span className="text-[6px] tracking-widest text-slate-500 uppercase mt-1">A Total Washroom Hygiene Management System</span>
      </div>
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
        <h2 className="text-center text-[0.75rem] font-bold uppercase tracking-[0.2em] text-primary mb-10">
          Trusted by Industry Leaders
        </h2>

        <div className="relative">
          {/* Gradient masks for smooth fade effect at edges */}
          <div className="absolute inset-y-0 left-0 w-32 z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 z-10 pointer-events-none" />

          <Marquee pauseOnHover className="[--duration:30s] [--gap:4rem] py-4">
            {brands.map((brand) => {
              return (
                <div
                  key={brand.name}
                  className="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-default min-w-[200px]"
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
