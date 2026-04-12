import Link from "next/link";
import { ArrowRight } from "lucide-react";

const infoCards = [
  {
    title: "Our Services",
    description:
      "We pride ourselves on providing first class results through full service property solutions. Trust us to deliver professional property management, on budget and on time.",
    cta: { label: "read more", href: "/services" },
  },
  {
    title: "Request a Quote",
    description:
      "We provide no obligation quotes for all our property management and maintenance services.",
    cta: { label: "request quote", href: "/contact" },
  },


];

export default function HeroBanner() {
  return (
    <section className="relative w-full" aria-label="Hero banner">
      {/* ── Hero Image ── */}
      <div className="relative w-full h-[460px] md:h-[520px] lg:h-[560px] overflow-hidden">
        <img
          src="/assets/hero-banner.png"
          alt="Luxury modern residential property complex with beautiful landscaping"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Hero text content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full max-w-[1440px] mx-auto px-6 md:px-8 lg:px-10">
            <div className="max-w-2xl -mt-20">
              <h1 className="text-2xl md:text-3xl lg:text-[2.25rem] font-light text-white leading-snug tracking-wide">
                There&apos;s nothing like the assurance that
                comes with a{" "}
                <span className="font-semibold">professionally managed property</span>{" "}
                and happy clients
              </h1>
              <p className="mt-4 text-white/80 text-sm md:text-[0.9375rem] tracking-wide">
                Residential • Commercial • Offices • Retail Spaces • Apartments • Body Corporates
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Info Cards ── */}
      <div className="relative w-full max-w-[1440px] mx-auto px-6 md:px-8 lg:px-10 -mt-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {infoCards.map((card, i) => (
            <div
              key={card.title}
              className={`
                p-6 md:p-7 lg:p-8 flex flex-col justify-between min-h-[200px]
                border-r border-white/10 last:border-r-0 bg-primary
              `}
            >
              <div>
                <h2 className="text-[0.9375rem] md:text-base font-bold uppercase tracking-[0.08em] mb-3 text-white">
                  {card.title}
                </h2>
                <p className="text-[0.8125rem] leading-relaxed text-white/80">
                  {card.description}
                </p>
              </div>
              <Link
                href={card.cta.href}
                className="inline-flex items-center gap-2 mt-5 text-[0.8125rem] font-semibold text-white rounded px-4 py-2 no-underline w-fit transition-all duration-200 group bg-secondary/80 hover:opacity-90"
              >
                {card.cta.label}
                <ArrowRight
                  size={14}
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
