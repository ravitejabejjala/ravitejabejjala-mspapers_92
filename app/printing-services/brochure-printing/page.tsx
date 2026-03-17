import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, CheckCircle2, FileText } from "lucide-react"

export const metadata: Metadata = {
  title: "Professional Brochure Printing | Tri-Fold & Booklet | Hyderabad",
  description:
    "High-quality brochure printing for real estate, education, pharma, and healthcare. Professional tri-fold brochures with custom finishing options.",
  keywords: [
    "brochure printing",
    "tri-fold brochures",
    "professional brochures",
    "marketing brochures",
    "real estate brochures",
    "product brochures",
  ],
  openGraph: {
    title: "Professional Brochure Printing in Hyderabad",
    description: "Custom brochure printing for all industries with premium quality.",
    url: "https://mspaperproducts.com/printing-services/brochure-printing",
    type: "website",
  },
}

export default function BrochurePrintingPage() {
  return (
    <main>
      <section className="relative h-[400px] overflow-hidden bg-gradient-to-r from-[#132635] to-[#1a3a4f]">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/printing-services/brochure-printing.jpg"
            alt="Brochure Printing"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
              Professional Brochure Printing
            </h1>
            <p className="text-lg text-gray-100 mb-8">
              Premium tri-fold and multi-page brochures for marketing and sales
            </p>
            <div className="flex gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-[#f19e1f] text-[#132635]">Get Quote</Button>
              </Link>
              <Link href="tel:+918143330028">
                <Button size="lg" variant="outline" className="border-white text-green-950">
                  <Phone className="mr-2 h-5 w-5" />
                  Call
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#132635] mb-8">Why Brochures?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <ul className="space-y-4">
                {[
                  "Professional presentation of your business",
                  "Perfect for trade shows and events",
                  "Cost-effective marketing tool",
                  "Showcase products and services",
                  "Build brand credibility",
                  "Tangible marketing collateral",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#f19e1f] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image
                src="/printing-services/brochure-printing.jpg"
                alt="Brochure Samples"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#132635] mb-8 text-center">Our Brochure Options</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {["Tri-Fold Brochures", "Multi-Page Booklets", "Gate-Fold Brochures"].map((type, idx) => (
              <div key={idx} className="p-6 rounded-lg shadow bg-accent">
                <h3 className="text-xl font-bold text-[#132635] mb-4">{type}</h3>
                <p className="text-gray-700 mb-6">
                  Professional {type.toLowerCase()} printed on premium paper with custom finishing options.
                </p>
                <Link href="/contact">
                  <Button className="w-full bg-[#f19e1f] text-[#132635]">Get Quote</Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-r from-[#132635] to-[#1a3a4f] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Print?</h2>
          <p className="text-gray-200 mb-8">Get professional brochures that impress your customers</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact">
              <Button size="lg" className="bg-[#f19e1f] text-[#132635]">
                <FileText className="mr-2" />
                Request Quote
              </Button>
            </Link>
            <Link href="https://wa.me/918143330028">
              <Button size="lg" variant="outline" className="border-white text-white bg-chart-2">
                <MessageCircle className="mr-2" />
                WhatsApp
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
