import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="flex flex-col gap-12">
      <div>
        <h2 className="text-3xl font-bold text-primary tracking-tight mb-4 lowercase">
          get in touch<span className="text-secondary text-5xl leading-none">.</span>
        </h2>
        <p className="text-primary/70 font-medium leading-relaxed max-w-sm">
          Have a question about our property services? Our first-class support team 
          is here to help you manage your assets with ease.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        {/* Phone */}
        <div className="flex items-start gap-5 group">
          <div className="bg-primary/5 p-4 rounded-sm text-primary group-hover:bg-secondary group-hover:text-white transition-all duration-300">
            <Phone size={24} strokeWidth={1.5} />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[0.6875rem] font-bold uppercase tracking-widest text-primary/40">Give us a call</span>
            <span className="text-xl font-bold text-primary">0800 IKON PROPERTY</span>
            <span className="text-base font-medium text-primary/60">(09) 302 1536</span>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start gap-5 group">
          <div className="bg-primary/5 p-4 rounded-sm text-primary group-hover:bg-secondary group-hover:text-white transition-all duration-300">
            <Mail size={24} strokeWidth={1.5} />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[0.6875rem] font-bold uppercase tracking-widest text-primary/40">Send an email</span>
            <a href="mailto:enquiries@ikon-property.co.nz" className="text-lg font-bold text-primary hover:text-secondary transition-colors underline decoration-primary/10 underline-offset-4">
              enquiries@ikon-property.co.nz
            </a>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-start gap-5 group">
          <div className="bg-primary/5 p-4 rounded-sm text-primary group-hover:bg-secondary group-hover:text-white transition-all duration-300">
            <MapPin size={24} strokeWidth={1.5} />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[0.6875rem] font-bold uppercase tracking-widest text-primary/40">Visit our office</span>
            <span className="text-lg font-bold text-primary leading-tight">
              74 France Street South, Eden Terrace, Auckland
            </span>
          </div>
        </div>

        {/* Office Hours */}
        <div className="flex items-start gap-5 group">
          <div className="bg-primary/5 p-4 rounded-sm text-primary group-hover:bg-secondary group-hover:text-white transition-all duration-300">
            <Clock size={24} strokeWidth={1.5} />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[0.6875rem] font-bold uppercase tracking-widest text-primary/40">Office hours</span>
            <span className="text-lg font-bold text-primary uppercase">Mon — Fri: 8am - 5pm</span>
            <span className="text-base font-medium text-primary/60 italic lowercase text-black/50">closed on weekends</span>
          </div>
        </div>
      </div>
    </div>
  );
}
