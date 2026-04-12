import React from "react";
import Link from "next/link";
import { services } from "../services/data";

export default function ServiceCategoryBar() {
  return (
    <div className="bg-primary/10 border-b border-black/5">
      <div className="max-w-[1440px] mx-auto px-6 md:px-8 lg:px-10 py-1.5 overflow-x-auto">
        <div className="flex items-center gap-4 whitespace-nowrap scrollbar-hide">
          {services.map((service, i) => (
            <React.Fragment key={service.slug}>
              <Link
                href={`/services/${service.slug}`}
                className="text-xs font-medium uppercase tracking-wider text-primary cursor-pointer hover:text-secondary transition-colors"
              >
                {service.title.split(' ')[0]}
              </Link>
              {i < services.length - 1 && (
                <span className="text-primary/20 text-[10px]">•</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
