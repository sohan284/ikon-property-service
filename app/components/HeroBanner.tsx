"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.5 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const infoCards = [
  {
    title: "Our Services",
    description:
      "We deliver consistent, high-quality results through full-service cleaning and property solutions Managed with trained staff, structured systems, and a focus on getting the job done right — on time and within scope.",
    cta: { label: "read more", href: "/services" },
  },
  {
    title: "Request a Quote",
    description:
      "We provide no obligation quotes for all our property management and maintenance services.",
    cta: { label: "request quote", href: "/contact" },
  },
];

const slides = [
  {
    image: "/assets/hero-banner.png",
    title: (
      <>
        A Higher Standard of Commercial Cleaning in Auckland
      </>
    ),
    subtitle: "Residential • Commercial • Offices • Retail Spaces • Apartments • Body Corporates"
  },
  {
    image: "/assets/about-banner.png",
    title: (
      <>
        Built on a Foundation of Trust and Excellence Over 15 Years of Experience
      </>
    ),
    subtitle: "Auckland Wide Management • Experienced Crews • Unmatched Service"
  },
  {
    image: "/assets/services-banner.png",
    title: (
      <>
        Delivering <span className="font-semibold">full service, first class</span> solutions for your assets
      </>
    ),
    subtitle: "Commercial Cleaning • Floor Care • Window Cleaning • Pest Management"
  }
];

export default function HeroBanner() {
  return (
    <section className="relative w-full group" aria-label="Hero banner">
      <style>{`
        .swiper-pagination-bullet.custom-bullet {
          width: 10px;
          height: 10px;
          background: rgba(255, 255, 255, 0.5);
          opacity: 1;
          transition: all 0.3s ease;
          border-radius: 9999px;
        }
        .swiper-pagination-bullet.custom-bullet:hover {
          background: rgba(255, 255, 255, 1);
        }
        .swiper-pagination-bullet-active.custom-bullet {
          background: #AF201F;
          width: 32px;
        }
        .swiper-button-disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      `}</style>

      {/* ── Hero Image Carousel ── */}
      <div className="relative w-full h-[460px] md:h-[520px] lg:h-[560px] overflow-hidden bg-primary-dark">
        <Swiper
          modules={[Autoplay, EffectFade, Navigation, Pagination]}
          effect="fade"
          loop={true}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          navigation={{
            prevEl: ".swiper-button-prev-custom",
            nextEl: ".swiper-button-next-custom",
          }}
          pagination={{
            clickable: true,
            el: ".swiper-custom-pagination",
            renderBullet: function (index, className) {
              return '<span class="' + className + ' custom-bullet"></span>';
            },
          }}
          className="w-full h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">
                <Image
                  src={slide.image}
                  alt={`Hero banner slide ${index + 1}`}
                  fill
                  priority={index === 0}
                  className="object-cover"
                />
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-black/50" />

                {/* Hero text content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full max-w-[1440px] mx-auto px-6 md:px-8 lg:px-10">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                      className="max-w-2xl -mt-20"
                    >
                      <h1 className="text-2xl md:text-3xl lg:text-[2.25rem] font-light text-white leading-snug tracking-wide">
                        {slide.title}
                      </h1>
                      <p className="mt-4 text-white/80 text-sm md:text-[0.9375rem] tracking-wide">
                        {slide.subtitle}
                      </p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* ── Carousel Controls ── */}
          <button
            className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-black/20 hover:bg-black/50 text-white rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 cursor-pointer border-none"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-black/20 hover:bg-black/50 text-white rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 cursor-pointer border-none"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>

          {/* ── Carousel Indicators ── */}
          <div className="swiper-custom-pagination absolute bottom-32 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3"></div>
        </Swiper>
      </div>

      {/* ── Info Cards ── */}
      <div className="relative w-full max-w-[1440px] mx-auto px-6 md:px-8 lg:px-10 -mt-24 z-40">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-0"
        >
          {infoCards.map((card, i) => (
            <motion.div
              variants={itemVariants}
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
