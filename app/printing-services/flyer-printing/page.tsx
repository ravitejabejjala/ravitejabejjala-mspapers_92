import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, FileText } from "lucide-react"

export const metadata: Metadata = {
  title: "Flyer Printing Services | Bulk Promotional Flyers | Hyderabad",
  description: "Cost-effective flyer printing for promotions and marketing. Fast turnaround for bulk orders with vibrant color printing.",
  keywords: ["flyer printing", "promotional flyers", "bulk flyers", "marketing flyers", "event flyers"],
  openGraph: {
    title: "Professional Flyer Printing",
    url: "https://mspaperproducts.com/printing-services/flyer-printing",
    type: "website",
  },
}

export default function FlyerPrintingPage() {
  return (
    <main>
      <section className="relative h-[400px] bg-gradient-to-r from-[#132635] to-[#1a3a4f] overflow-hidden">
        <Image src="/printing-services/flyer-printing.jpg" alt="Flyer Printing" fill className="object-cover opacity-20" />
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold text-white mb-4">Professional Flyer Printing</h1>
            <p className="text-xl text-gray-100 mb-8">Promote your business with eye-catching flyers</p>
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
          <h2 className="text-4xl font-bold text-[#132635] mb-6">Why Choose Our Flyer Printing?</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <ul className="space-y-4 text-gray-700">
                <li>✓ Vibrant full-color printing</li>
                <li>✓ Multiple size options (A4, A5, Half-Letter)</li>
                <li>✓ Fast turnaround times</li>
                <li>✓ Bulk order discounts</li>
                <li>✓ Premium paper quality</li>
                <li>✓ Cost-effective marketing solution</li>
              </ul>
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image src="/printing-services/flyer-printing.jpg" alt="Flyers" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-[#132635] mb-8">Ready to Promote?</h2>
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
                WhatsApp Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
