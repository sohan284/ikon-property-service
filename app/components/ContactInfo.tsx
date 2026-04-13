"use client";

import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
export default function ContactInfo() {
  return (
    <div className="flex flex-col gap-12">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={itemVariants}
      >

        <h2 className="text-3xl font-bold text-primary tracking-tight mb-4 lowercase">
          get in touch<span className="text-secondary text-5xl leading-none">.</span>
        </h2>
        <p className="text-primary/70 font-medium leading-relaxed max-w-sm">
          Have a question about our property services? Our first-class support team
          is here to help you manage your assets with ease.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="flex flex-col gap-8"
      >
        {/* Phone */}
        <motion.div variants={itemVariants} className="flex items-start gap-5 group">
          <div className="bg-primary/5 p-4 rounded-sm text-primary ">
            <Phone size={24} strokeWidth={1.5} />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[0.6875rem] font-bold uppercase tracking-widest text-primary/40">Give us a call</span>
            <span className="text-xl font-bold text-primary">09 391 4007</span>
            <span className="text-base font-medium text-primary/60"> 022 463 2244</span>
          </div>
        </motion.div>

        {/* Email */}
        <motion.div variants={itemVariants} className="flex items-start gap-5 group">
          <div className="bg-primary/5 p-4 rounded-sm text-primary ">
            <Mail size={24} strokeWidth={1.5} />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[0.6875rem] font-bold uppercase tracking-widest text-primary/40">Send an email</span>
            <a href="mailto:info@ikonservices.nz" className="text-lg font-bold text-primary hover:text-secondary transition-colors underline decoration-primary/10 underline-offset-4">
              info@ikonservices.nz
            </a>
          </div>
        </motion.div>

        {/* Location */}
        <motion.div variants={itemVariants} className="flex items-start gap-5 group">
          <div className="bg-primary/5 p-4 rounded-sm text-primary ">
            <MapPin size={24} strokeWidth={1.5} />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[0.6875rem] font-bold uppercase tracking-widest text-primary/40">Visit our office</span>
            <span className="text-lg font-bold text-primary leading-tight">
              300 Richmond Road, Grey Lynn, Auckland 1021,New Zealand
            </span>
          </div>
        </motion.div>

        {/* Office Hours */}
        <motion.div variants={itemVariants} className="flex items-start gap-5 group">
          <div className="bg-primary/5 p-4 rounded-sm text-primary ">
            <Clock size={24} strokeWidth={1.5} />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[0.6875rem] font-bold uppercase tracking-widest text-primary/40">Office hours</span>
            <span className="text-lg font-bold text-primary uppercase">Mon — Fri: 8am - 5pm</span>
            <span className="text-base font-medium text-primary/60 italic lowercase text-black/50">closed on weekends</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
