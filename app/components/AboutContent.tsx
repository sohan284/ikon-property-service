import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutContent() {
  return (
    <section className=" py-6 md:py-10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-8 lg:px-10">

        {/* Main Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-12">
          About Ikon Property Service
        </h2>

        {/* Two-Column Text Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-20">

          {/* Column 1: Origins */}
          <div className="flex flex-col gap-6">
            <h3 className="text-[1.375rem] font-bold text-black/30 uppercase tracking-[0.1em]">
              Origins
            </h3>
            <p className="text-[0.9375rem] leading-relaxed text-primary/80 font-medium">
              Ikon Property Services was founded in 1986 by Auckland entrepreneur, Mike Booth.
              Mike's dream was to build a company that generated employment and business
              opportunities by offering a superior commercial property service. Since then,
              Ikon Property has grown in size and reputation as a result of taking ownership,
              being accountable and responsible with our attention to detail, professionalism
              and solid working procedures. Today, Ikon Property Services is regarded as one
              of New Zealand's leading companies with specialist crews throughout the country.
            </p>
          </div>

          {/* Column 2: Service Philosophy */}
          <div className="flex flex-col gap-6">
            <h3 className="text-[1.375rem] font-bold text-black/30 uppercase tracking-[0.1em]">
              Full Service. First Class.
            </h3>
            <p className="text-[0.9375rem] leading-relaxed text-primary/80 font-medium">
              Our clients demand results. Our &ldquo;full service, first class&rdquo; approach
              ensures they are not disappointed. We offer the full spectrum of commercial
              property services including general cleaning, maintenance, window cleaning,
              water blasting, floor care, and property management which are delivered by
              competent, experienced and well-trained staff using the best equipment
              and products.
            </p>
          </div>
        </div>

        {/* ── CTA Bar Section ── */}
        <div className="relative bg-primary/20 p-8 md:p-12 overflow-hidden rounded-sm ">
          {/* Decorative geometric element (matching user screenshot) */}
          <div className="absolute right-0 top-0 h-full w-1/4 opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity">
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
              <path d="M200 0L50 100L200 200V0Z" fill="var(--primary)" />
            </svg>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <p className="text-xl md:text-2xl font-bold text-primary leading-tight">
              Like what you see?
            </p>

            <Link
              href="/contact"
              className="flex items-center gap-3 bg-secondary text-white px-8 py-4 rounded-sm font-bold uppercase tracking-[0.1em] transition-all duration-200 "
            >
              Request a Quote
              <ArrowRight size={20} className="transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
