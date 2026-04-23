import React from "react";
import Link from "next/link";
import {
  ArrowLeft, ArrowRight, Zap, CheckCircle2, ShieldCheck,
  HelpCircle, AlertCircle, ListChecks, Building2, Calendar, ClipboardCheck
} from "lucide-react";
import BrandsMarquee from "../../components/BrandsMarquee";
import { FadeUp } from "../../components/FadeUp";
import FAQAccordion from "../../components/FAQAccordion";
import Image from "next/image";

export const metadata = {
  title: "Professional Test & Tag Services",
  description: "Keep your workplace safe, compliant, and audit-ready with our professional electrical test and tag services.",
  alternates: {
    canonical: "/services/test-and-tag",
  },
};

export default function TestAndTagPage() {
  return (
    <main className="min-h-screen">
      {/* 
        Custom Hero Section 
      */}
      <section className="relative w-full overflow-hidden h-[360px] md:h-[460px] lg:h-[520px]">
        <Image
          src="/assets/Test and tag.webp"
          alt="Professional Test & Tag Services"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 flex items-center">
          <div className="w-full max-w-[1440px] mx-auto px-6 md:px-8 lg:px-10 mt-10 md:mt-0">
            <div className="max-w-3xl">
              <FadeUp delay={0.1}>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-white/50 hover:text-secondary mb-6 uppercase text-[0.75rem] font-bold tracking-widest transition-colors"
                >
                  <ArrowLeft size={16} />
                  Back to Services
                </Link>

                <h1 className="font-bold text-white leading-tight tracking-tight uppercase text-3xl md:text-4xl lg:text-[3rem]">
                  Professional Test & Tag Services
                </h1>

                <h2 className="mt-4 text-white/90 font-bold tracking-wide text-lg md:text-xl lg:text-2xl">
                  Keep your workplace safe, compliant, and audit-ready.
                </h2>

                <p className="mt-4 text-white/80 font-medium tracking-wide text-sm md:text-base leading-relaxed">
                  We provide professional electrical test and tag services for offices, warehouses, retail sites, workshops, schools, and commercial facilities. Our service helps identify faulty portable electrical equipment, reduce safety risks, and support workplace compliance.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex justify-center items-center gap-2 bg-secondary text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-secondary-light transition-colors shadow-lg"
                  >
                    Request a Quote
                    <ArrowRight size={16} />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex justify-center items-center gap-2 bg-white/10 text-white border border-white/30 px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white/20 transition-colors backdrop-blur-sm"
                  >
                    Book a Service
                  </Link>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: About the Service */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">

            <FadeUp delay={0.2} className="lg:col-span-8 flex flex-col gap-8">
              <div className="flex items-center gap-4 text-secondary">
                <Zap size={48} strokeWidth={1} />
                <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
                  Reliable Test & Tag for Safer Workplaces
                </h2>
              </div>

              <div className="prose prose-lg max-w-none text-primary/80 leading-relaxed font-medium">
                <p className="text-xl font-semibold mb-6">
                  Portable electrical equipment can become unsafe through daily wear and tear, damage, or incorrect use.
                </p>
                <p>
                  Our test and tag service helps ensure your equipment is inspected, tested, and clearly labelled in line with workplace safety requirements.
                </p>
                <p className="mt-6">
                  We work with businesses of all sizes and offer flexible scheduling to minimise disruption to your operations.
                </p>

                <div className="relative aspect-video w-full rounded-sm overflow-hidden my-10 shadow-xl">
                  <Image
                    src="/assets/Test and tag.webp"
                    alt="Test and Tag"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.3} x={30} y={0} className="lg:col-span-4 p-8 md:p-10 rounded-sm w-full">
              <h3 className="text-xl font-bold text-primary uppercase tracking-tight mb-6 mt-0">
                Ready to start?
              </h3>
              <p className="text-primary/70 mb-8 leading-relaxed">
                Contact us today to schedule your electrical testing or for a no-obligation quote on our Test & Tag services.
              </p>
              <Link
                href="/contact"
                className="block w-full text-center bg-secondary text-white py-4 font-bold uppercase tracking-[0.1em] hover:bg-secondary-light transition-colors shadow-md shadow-secondary/10"
              >
                Schedule Now
              </Link>
            </FadeUp>

          </div>
        </div>
      </section>

      {/* Section 2 & 3: What We Test & What's Included */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-8 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24">

            {/* Section 2 */}
            <FadeUp delay={0.1} className="bg-gray-50/50 p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-sm border-t-4 border-secondary">
              <h3 className="text-2xl font-bold text-primary uppercase tracking-tight mb-8 flex items-center gap-3">
                <ListChecks className="text-secondary" size={28} />
                Equipment We Commonly Test
              </h3>
              <ul className="space-y-4">
                {[
                  "Kettles and microwaves",
                  "Computers, monitors, and office equipment",
                  "Extension leads and power boards",
                  "Vacuums and cleaning equipment",
                  "Chargers and portable appliances",
                  "Workshop and warehouse equipment",
                  "Kitchen appliances and staff room equipment"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-primary/80 font-medium">
                    <CheckCircle2 size={20} className="text-secondary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </FadeUp>

            {/* Section 3 */}
            <FadeUp delay={0.2} className="bg-gray-50/50 p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-sm border-t-4 border-secondary">
              <h3 className="text-2xl font-bold text-primary uppercase tracking-tight mb-8 flex items-center gap-3">
                <ShieldCheck className="text-secondary" size={28} />
                Our Test & Tag Service Includes
              </h3>
              <ul className="space-y-4">
                {[
                  "Visual inspection of each item",
                  "Electrical safety testing using calibrated equipment",
                  "Tagging with test status and due date",
                  "Identification of damaged or failed items",
                  "Asset register or reporting summary",
                  "Flexible service for single or multiple sites"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-primary/80 font-medium">
                    <CheckCircle2 size={20} className="text-secondary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </FadeUp>

          </div>
        </div>
      </section>

      {/* Section 4 & 5: Why Choose Us & Who We Work With */}
      <section className="py-16 md:py-24 ">
        <div className="max-w-[1440px] mx-auto px-6 md:px-8 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24">

            {/* Section 4 */}
            <FadeUp delay={0.1}>
              <h3 className="text-3xl font-bold text-primary uppercase tracking-tight mb-8">
                Why Businesses Choose Us
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "Professional and reliable service",
                  "Clear reporting and tagging",
                  "Flexible booking times",
                  "Minimal disruption to your team",
                  "Suitable for offices, retail, industrial, and commercial sites",
                  "Multi-site service available"
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start bg-gray-50/50 p-5 rounded-sm">
                    <div className="bg-secondary/10 p-2 rounded-full text-secondary shrink-0">
                      <CheckCircle2 size={18} />
                    </div>
                    <p className="text-primary/80 font-medium text-sm leading-snug">{item}</p>
                  </div>
                ))}
              </div>
            </FadeUp>

            {/* Section 5 */}
            <FadeUp delay={0.2}>
              <h3 className="text-3xl font-bold text-primary uppercase tracking-tight mb-8">
                Industries We Service
              </h3>
              <div className="space-y-4">
                {[
                  "Offices and corporate workplaces",
                  "Automotive dealerships and workshops",
                  "Warehouses and logistics sites",
                  "Schools and childcare centres",
                  "Medical and allied health clinics",
                  "Retail stores and commercial premises"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-primary/80 font-medium pb-3 border-b w-fit border-gray-50/50 last:border-0">
                    <Building2 size={20} className="text-secondary/60 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </FadeUp>

          </div>
        </div>
      </section>

      {/* Section 6: Process */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-8 lg:px-10">
          <FadeUp delay={0.1} className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-4">
              Our Simple Process
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Site Assessment",
                desc: "We review your site, equipment, and service requirements."
              },
              {
                step: "2",
                title: "Testing & Tagging",
                desc: "Each portable appliance is visually inspected, tested, and tagged."
              },
              {
                step: "3",
                title: "Reporting",
                desc: "You receive a clear record of tested items and any failed equipment."
              },
              {
                step: "4",
                title: "Ongoing Service",
                desc: "We can help schedule future testing intervals to keep your site up to date."
              }
            ].map((item, i) => (
              <FadeUp key={i} delay={0.1 * (i + 1)} className="relative flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center text-2xl font-bold text-white mb-6 shadow-[0_0_20px_rgba(244,115,33,0.3)] z-10 relative">
                  {item.step}
                </div>
                {i !== 3 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-full h-[2px] bg-white/10" />
                )}
                <h3 className="text-xl font-bold uppercase tracking-wide mb-3">
                  {item.title}
                </h3>
                <p className="text-white/60 font-medium text-sm leading-relaxed">
                  {item.desc}
                </p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Compliance Note */}
      <section className="py-12 bg-secondary text-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-8 lg:px-10 flex flex-col md:flex-row items-center gap-8 justify-between">
          <FadeUp delay={0.1} className="flex-1 flex items-center gap-6">
            <AlertCircle size={48} className="opacity-80 shrink-0" />
            <div>
              <h3 className="text-2xl font-bold uppercase tracking-tight mb-2">
                Stay Organised and Prepared
              </h3>
              <p className="text-white/90 font-medium max-w-3xl">
                Regular test and tag servicing helps businesses maintain safer workplaces and keep records current for internal checks, audits, and site management requirements.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Section 8: FAQ */}
      <section className="py-16 md:py-24">
        <div className="max-w-[800px] mx-auto px-6 md:px-8 lg:px-10">
          <FadeUp delay={0.1} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary uppercase tracking-tight flex items-center justify-center gap-3">
              <HelpCircle className="text-secondary" size={32} />
              Frequently Asked Questions
            </h2>
          </FadeUp>

          <div className="max-w-3xl mx-auto">
            <FadeUp delay={0.2}>
              <FAQAccordion faqs={[
                {
                  q: "How often should equipment be tested?",
                  a: "Testing frequency can vary depending on the type of workplace, the equipment, and how it is used."
                },
                {
                  q: "Do you service multiple locations?",
                  a: "Yes, we can provide test and tag services across single or multiple sites."
                },
                {
                  q: "Will testing interrupt our business operations?",
                  a: "We aim to work efficiently and with minimal disruption. After-hours or flexible bookings may be available."
                },
                {
                  q: "Do you provide a report?",
                  a: "Yes, we can provide a summary or asset register of tested items."
                }
              ]} />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0" />
        <div className="max-w-[1440px] mx-auto px-6 md:px-8 lg:px-10 relative z-10 text-center">
          <FadeUp delay={0.1} className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-primary uppercase tracking-tight mb-6">
              Book Your Test & Tag Service
            </h2>
            <p className="text-xl text-primary/70 font-medium mb-4">
              Need reliable test and tag services for your workplace?
            </p>
            <p className="text-primary/70 font-medium mb-10">
              Get in touch today to arrange a quote or booking.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex justify-center items-center gap-3 bg-secondary text-white px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-secondary-light transition-colors shadow-lg"
              >
                Get a Quote
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex justify-center items-center gap-3 bg-primary text-white px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-primary-light transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      <BrandsMarquee />
    </main>
  );
}
