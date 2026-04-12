"use client";

import React, { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-primary/5 p-12 lg:p-16 rounded-sm flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-500">
        <div className="text-secondary mb-6">
          <CheckCircle2 size={64} strokeWidth={1} />
        </div>
        <h3 className="text-3xl font-bold text-primary mb-4 uppercase tracking-tight">Message Sent!</h3>
        <p className="text-primary/70 font-medium max-w-sm mb-8 leading-relaxed">
          Thank you for contacting Ikon Property Service. One of our specialists
          will get back to you within 24 hours.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-secondary font-bold uppercase tracking-widest text-sm hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className=" p-8 lg:p-12 shadow-2xl shadow-primary/10 rounded-sm border border-black/5 relative overflow-hidden">
      {/* Subtle top-border accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-secondary" />

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-[0.6875rem] font-bold uppercase tracking-widest text-primary/40 pl-1">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              required
              className="w-full bg-[#f9f9f9] border border-black/10 rounded-sm px-4 py-3 text-primary font-medium focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
              placeholder="John Doe"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-[0.6875rem] font-bold uppercase tracking-widest text-primary/40 pl-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              required
              className="w-full bg-[#f9f9f9] border border-black/10 rounded-sm px-4 py-3 text-primary font-medium focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Phone */}
          <div className="flex flex-col gap-2">
            <label htmlFor="phone" className="text-[0.6875rem] font-bold uppercase tracking-widest text-primary/40 pl-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full bg-[#f9f9f9] border border-black/10 rounded-sm px-4 py-3 text-primary font-medium focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
              placeholder="(09) 123 4567"
            />
          </div>

          {/* Subject */}
          <div className="flex flex-col gap-2">
            <label htmlFor="subject" className="text-[0.6875rem] font-bold uppercase tracking-widest text-primary/40 pl-1">
              Subject
            </label>
            <select
              id="subject"
              className="w-full bg-[#f9f9f9] border border-black/10 rounded-sm px-4 py-3 text-primary font-medium focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all appearance-none cursor-pointer"
            >
              <option>General Enquiry</option>
              <option>Request a Quote</option>
              <option>Property Maintenance</option>
              <option>Commercial Cleaning</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        {/* Message */}
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-[0.6875rem] font-bold uppercase tracking-widest text-primary/40 pl-1">
            How can we help?
          </label>
          <textarea
            id="message"
            required
            rows={5}
            className="w-full bg-[#f9f9f9] border border-black/10 rounded-sm px-4 py-3 text-primary font-medium focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all resize-none"
            placeholder="Tell us about your property needs..."
          />
        </div>

        <button
          type="submit"
          className="mt-4 bg-secondary text-white font-bold uppercase tracking-[0.2em] py-5 rounded-sm flex items-center justify-center gap-3 group transition-all duration-300 hover:bg-secondary-light hover:shadow-xl hover:shadow-secondary/20"
        >
          Send Message
          <Send size={18} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
      </form>
    </div>
  );
}
