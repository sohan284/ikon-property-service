import React from "react";

interface SubPageBannerProps {
  imageSrc: string;
  title: string;
  subtitle?: string;
  compact?: boolean;
}

export default function SubPageBanner({
  imageSrc,
  title,
  subtitle,
  compact = false
}: SubPageBannerProps) {
  return (
    <section
      className={`relative w-full overflow-hidden transition-all duration-300 ${compact
        ? "h-[180px] md:h-[220px] lg:h-[260px]"
        : "h-[300px] md:h-[360px] lg:h-[400px]"
        }`}
    >
      {/* Background Image */}
      <img
        src={imageSrc}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Banner Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-8 lg:px-10">
          <div className="max-w-2xl">
            <h1 className={`font-bold text-white leading-tight tracking-tight uppercase ${compact ? "text-2xl md:text-3xl" : "text-3xl md:text-4xl lg:text-[2.75rem]"
              }`}>
              {title}
            </h1>
            {subtitle && !compact && (
              <p className="mt-4 text-white/80 text-base md:text-lg tracking-wide max-w-xl">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
