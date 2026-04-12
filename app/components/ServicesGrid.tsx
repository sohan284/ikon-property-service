import React from "react";
import Link from "next/link";
import { services } from "../services/data";
import { ArrowRight } from "lucide-react";

export default function ServicesGrid() {
  return (
    <section className=" py-6 md:py-10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.slug} className="flex flex-col group">
                <div className="flex items-center gap-4 mb-5">
                  <div className="text-secondary/60 group-hover:text-secondary transition-colors duration-300">
                    <Icon size={32} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-bold text-primary uppercase tracking-tight leading-tight">
                    {service.title}
                  </h3>
                </div>

                <p className="text-[0.9375rem] leading-relaxed text-primary/70 font-medium mb-6 flex-1">
                  {service.description}
                </p>

                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 text-[0.8125rem] font-bold text-secondary uppercase tracking-widest hover:text-secondary transition-colors group/link border border-secondary px-4 py-2 rounded-sm w-fit"
                >
                  read more
                  <ArrowRight size={14} className="transition-transform duration-200 group-hover/link:translate-x-1" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
