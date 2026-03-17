import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, FileText } from "lucide-react"

export const metadata: Metadata = {
  title: "Booklet Printing Services | Professional Catalogs & Manuals | Hyderabad",
  description: "Custom booklet printing for catalogs, manuals, and brochures. Perfect binding with professional quality printing.",
  keywords: ["booklet printing", "catalog printing", "manual printing", "perfect binding", "multi-page printing"],
  openGraph: {
    title: "Professional Booklet Printing",
    url: "https://mspaperproducts.com/printing-services/booklet-printing",
    type: "website",
  },
}

export default function BookletPrintingPage() {
  return (
    <main>
      <section className="relative h-[400px] bg-gradient-to-r from-[#132635] to-[#1a3a4f] overflow-hidden">
        <Image src="/printing-services/booklet-printing.jpg" alt="Booklet Printing" fill className="object-cover opacity-20" />
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold text-white mb-4">Professional Booklet Printing</h1>
            <p className="text-xl text-gray-100 mb-8">Comprehensive catalogs and training materials in perfect binding</p>
            <div className="flex gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-[#f19e1f] text-[#132635]">Get Quote</Button>
              </Link>
              <Link href="tel:+918143330028">
                <Button size="lg" variant="outline" className="border-white text-white">
                  <Phone className="mr-2 h-5 w-5" />
                  Call
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#132635] mb-6">Booklet & Catalog Solutions</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-700 mb-6">Perfect for comprehensive product catalogs, training manuals, and professional documentation.</p>
              <ul className="space-y-4 text-gray-700">
                <li>✓ 4-page to 100+ page booklets</li>
                <li>✓ Perfect binding & saddle stitching</li>
                <li>✓ Covers with premium finishes</li>
                <li>✓ Professional layout and design</li>
                <li>✓ Color or black & white options</li>
                <li>✓ Custom specifications available</li>
              </ul>
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image src="/printing-services/booklet-printing.jpg" alt="Booklets" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#132635] mb-8 text-center">Industries We Serve</h2>
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {["Education", "Pharma", "Real Estate", "Healthcare"].map((industry) => (
              <div key={industry} className="bg-white p-6 rounded-lg text-center shadow">
                <h3 className="font-bold text-[#132635]">{industry}</h3>
              </div>
            ))}
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-[#132635] mb-6">Ready to Create Your Booklet?</h3>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/contact">
                <Button size="lg" className="bg-[#f19e1f] text-[#132635]">
                  <FileText className="mr-2" />
                  Request Quote
                </Button>
              </Link>
              <Link href="https://wa.me/918143330028">
                <Button size="lg" variant="outline" className="border-[#132635] text-[#132635]">
                  <MessageCircle className="mr-2" />
                  WhatsApp
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
