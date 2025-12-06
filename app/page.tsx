import type { Metadata } from "next"
import { HeroCarousel } from "@/components/hero-carousel"
import { ProductHighlights } from "@/components/product-highlights"
import { ValuePillars } from "@/components/value-pillars"
import { SustainabilityBanner } from "@/components/sustainability-banner"
import { StatsStrip } from "@/components/stats-strip"
import { CTASection } from "@/components/cta-section"

export const metadata: Metadata = {
  title: "MS Paper Products | Premium Paper Bags & Eco-Friendly Packaging Manufacturer Hyderabad",
  description:
    "Leading paper bag manufacturer in Hyderabad offering custom printed bags, kraft bags, wedding bags, pharma packaging, sweet boxes. 100% biodegradable, eco-friendly. MOQ 500 units. Fast delivery across India. Call +91-81433-30028",
  keywords: [
    "paper bags Hyderabad",
    "paper bag manufacturer",
    "custom paper bags India",
    "eco friendly bags",
    "biodegradable packaging",
    "kraft paper bags",
    "luxury paper bags",
    "wedding gift bags",
    "corporate bags",
    "retail packaging",
  ],
  openGraph: {
    title: "MS Paper Products | Premium Paper Bags & Eco-Friendly Packaging",
    description:
      "Leading paper bag manufacturer in Hyderabad. Custom printed bags, kraft bags, wedding bags. 100% biodegradable, eco-friendly. Fast delivery.",
    url: "https://mspaperproducts.com",
    type: "website",
  },
  alternates: {
    canonical: "https://mspaperproducts.com",
  },
}

export default function Home() {
  return (
    <main>
      <HeroCarousel />
      <StatsStrip />
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#132635] mb-6">
              Premium Packaging, Crafted with Care
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              MS Paper Products is a Hyderabad-based manufacturer of premium, eco-friendly, and customizable paper bags.
              We craft durable, stylish packaging for retail, gifting, corporate and food-grade applications.
            </p>
            <ValuePillars />
          </div>
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/premium-paper-bag-manufacturing-workspace-with-ele.jpg"
              alt="Manufacturing workspace"
              loading="lazy"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>
      <ProductHighlights />
      <SustainabilityBanner />
      <CTASection />
    </main>
  )
}
