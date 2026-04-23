import React from "react";
import SubPageBanner from "../components/SubPageBanner";
import AboutContent from "../components/AboutContent";
import BrandsMarquee from "../components/BrandsMarquee";

export const metadata = {
  title: "About Us",
  description: "Learn about the history and philosophy of Ikon Property Service. We provide premium property solutions nationwide.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <SubPageBanner
        compact={true}
        imageSrc="/assets/Glass Cleaning (2).webp"
        title="About Us"
        subtitle="Ikon Property Service delivers premium property management and maintenance solutions with a first-class approach."
      />
      <AboutContent />
      <BrandsMarquee />
    </main>
  );
}
