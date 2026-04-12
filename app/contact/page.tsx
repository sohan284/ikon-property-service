import React from "react";
import SubPageBanner from "../components/SubPageBanner";
import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";
import BrandsMarquee from "../components/BrandsMarquee";

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with Ikon Property Service. We provide first-class property management and maintenance solutions. Request a quote today.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <SubPageBanner
        imageSrc="/assets/contact-banner.png"
        title="Contact Us"
        compact={true}
      />

      <section className="py-6 md:py-10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Left Column: Information */}
            <ContactInfo />

            {/* Right Column: Form */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <BrandsMarquee />
    </main>
  );
}
