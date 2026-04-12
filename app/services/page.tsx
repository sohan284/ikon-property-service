import React from "react";
import SubPageBanner from "../components/SubPageBanner";
import ServiceCategoryBar from "../components/ServiceCategoryBar";
import ServicesGrid from "../components/ServicesGrid";
import BrandsMarquee from "../components/BrandsMarquee";

export const metadata = {
  title: "Our Services",
  description: "Comprehensive property management and maintenance services, from commercial cleaning to pest management. Full service, first class solutions.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen underline-offset-4">
      <SubPageBanner
        imageSrc="/assets/services-banner.png"
        title="Our Services"
        subtitle="We offer the full spectrum of commercial property services delivered by experienced specialists."
        compact={true}
      />
      <ServiceCategoryBar />
      <ServicesGrid />
      <BrandsMarquee />
    </main>
  );
}
