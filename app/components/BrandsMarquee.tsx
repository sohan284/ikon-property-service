import React from "react";
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
  { name: "Skyline Rentals", icon: Building2 },
  { name: "Urban Living", icon: House },
  { name: "Prime Asset", icon: Briefcase },
  { name: "Global Realty", icon: Globe },
  { name: "Elite Estates", icon: ShieldCheck },
  { name: "Modern Spaces", icon: LayoutDashboard },
  { name: "Metro Prop", icon: MapPin },
  { name: "Heritage Homes", icon: Castle },
];

export default function BrandsMarquee() {
  return (
    <section className=" py-12 border-b border-black/5 overflow-hidden">
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
              const Icon = brand.icon;
              return (
                <div
                  key={brand.name}
                  className="flex items-center gap-4 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default"
                >
                  <div className="p-2.5 bg-primary/5 rounded-xl group-hover:bg-primary/10 transition-colors">
                    <Icon size={28} className="text-primary" />
                  </div>
                  <span className="text-xl md:text-2xl font-semibold tracking-tight text-primary-dark">
                    {brand.name}
                  </span>
                </div>
              );
            })}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
