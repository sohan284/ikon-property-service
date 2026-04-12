import React from "react";
import { notFound } from "next/navigation";
import { services } from "../data";
import SubPageBanner from "../../components/SubPageBanner";
import BrandsMarquee from "../../components/BrandsMarquee";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  return (
    <main className="min-h-screen">
      <SubPageBanner
        imageSrc="/assets/services-banner.png"
        title={service.title}
        compact={true}
      />

      <div className="py-6 md:py-10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-8 lg:px-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-primary/40 hover:text-secondary mb-12 uppercase text-[0.75rem] font-bold tracking-widest transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Services
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
            {/* Left Content */}
            <div className="lg:col-span-8 flex flex-col gap-8">
              <div className="flex items-center gap-4 text-secondary">
                <Icon size={48} strokeWidth={1} />
                <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
                  {service.title}
                </h2>
              </div>

              <div className="prose prose-lg max-w-none text-primary/80 leading-relaxed font-medium">
                <p className="text-xl font-semibold mb-6">
                  {service.description}
                </p>
                <p className="whitespace-pre-line">
                  {service.content}
                </p>

                <h3 className="text-2xl font-bold text-primary mt-12 mb-6">Our Approach</h3>
                <p>
                  We believe in a &ldquo;full service, first class&rdquo; approach for every detail.
                  Our team brings over 20 years of experience to every {service.title.toLowerCase()}
                  project, ensuring that first class standards are met and exceeded.
                </p>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-4 bg-[#f2f2f2] p-8 md:p-10 rounded-sm">
              <h3 className="text-xl font-bold text-primary uppercase tracking-tight mb-6">
                Ready to start?
              </h3>
              <p className="text-primary/70 mb-8 leading-relaxed">
                Contact us today for a no-obligation quote on our {service.title.toLowerCase()}
                delivery or any of our other property services.
              </p>
              <Link
                href="/contact"
                className="block w-full text-center bg-secondary text-white py-4 font-bold uppercase tracking-[0.1em] hover:bg-secondary-light transition-colors shadow-md shadow-secondary/10"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      <BrandsMarquee />
    </main>
  );
}
