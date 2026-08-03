import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, FileText } from "lucide-react"

export const metadata: Metadata = {
  title: "Custom Printing Solutions | Specialized Printing Services | Hyderabad",
  description: "Tailored custom printing solutions for unique business needs. From specialty materials to unique finishes, we deliver bespoke printing services.",
  keywords: ["custom printing", "specialized printing", "bespoke printing", "unique printing", "custom finishing"],
  openGraph: {
    title: "Custom Printing Solutions",
    url: "https://mspaperproducts.com/printing-services/custom-printing",
    type: "website",
  },
}

export default function CustomPrintingPage() {
  return (
    <main>
      <section className="relative h-[400px] bg-gradient-to-r from-[#132635] to-[#1a3a4f] overflow-hidden">
        <Image src="/printing-services/custom-printing.jpg" alt="Custom Printing" fill className="object-cover opacity-20" />
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold text-white mb-4">Custom Printing Solutions</h1>
            <p className="text-xl text-gray-100 mb-8">Bespoke printing for your unique requirements</p>
            <div className="flex gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-[#f19e1f] text-[#132635]">Get Custom Quote</Button>
              </Link>
              <Link href="tel:+918143330028">
                <Button size="lg" variant="outline" className="border-white text-primary">
                  <Phone className="mr-2 h-5 w-5" />
                  Discuss Your Needs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#132635] mb-8">Beyond Standard Printing</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-700 mb-6">We specialize in unique printing solutions that stand out. Whether you need specialty finishes, unusual materials, or innovative designs, our team can make it happen.</p>
              <ul className="space-y-3 text-gray-700">
                <li>✓ Embossing & Debossing</li>
                <li>✓ Foiling (Gold, Silver, Holographic)</li>
                <li>✓ Specialty Paper & Materials</li>
                <li>✓ Die-Cutting & Custom Shapes</li>
                <li>✓ Textured & 3D Effects</li>
                <li>✓ Premium Finishes & Coatings</li>
                <li>✓ Lamination Options</li>
                <li>✓ Variable Data Printing</li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/printing-services/custom-printing.jpg" alt="Custom Printing" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#132635] mb-8 text-center">Industries Served</h2>
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { name: "Education", icon: "📚" },
              { name: "Pharma", icon: "💊" },
              { name: "Real Estate", icon: "🏢" },
              { name: "Healthcare", icon: "⚕️" },
            ].map((industry) => (
              <div key={industry.name} className="bg-white p-8 rounded-lg text-center shadow hover:shadow-lg transition">
                <div className="text-4xl mb-3">{industry.icon}</div>
                <h3 className="font-bold text-[#132635]">{industry.name}</h3>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-lg shadow mb-12">
            <h3 className="text-2xl font-bold text-[#132635] mb-4">Why Custom Printing?</h3>
            <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
              <li>Stand out from competitors</li>
              <li>Premium brand experience</li>
              <li>Personalized customer gifts</li>
              <li>Unique marketing materials</li>
              <li>Limited edition products</li>
              <li>Custom corporate merchandise</li>
            </ul>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-[#132635] mb-6">Let's Bring Your Vision to Life</h3>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/contact">
                <Button size="lg" className="bg-[#f19e1f] text-[#132635]">
                  <FileText className="mr-2" />
                  Get Custom Quote
                </Button>
              </Link>
              <Link href="https://wa.me/918143330028">
                <Button size="lg" variant="outline" className="border-[#132635] text-[#132635]">
                  <MessageCircle className="mr-2" />
                  Discuss Ideas
                </Button>
              </Link>
              <Link href="tel:+918143330028">
                <Button size="lg" variant="outline" className="border-[#132635] text-[#132635]">
                  <Phone className="mr-2" />
                  Call Expert
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
