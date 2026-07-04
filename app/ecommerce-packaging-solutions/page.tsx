import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShieldCheck, Printer, Leaf, CheckCircle2, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "E-Commerce Packaging Solutions | MS Paper Products",
  description:
    "High-volume shipping supplies designed for security, efficiency, and brand impact. Courier covers, thermal labels, and custom-printed paper mailers for ecommerce businesses.",
  keywords: [
    "ecommerce packaging",
    "courier covers",
    "thermal labels",
    "shipping supplies",
    "paper mailers",
    "barcode labels",
  ],
  openGraph: {
    title: "E-Commerce Packaging Solutions | MS Paper Products",
    description:
      "High-volume shipping supplies designed for security, efficiency, and brand impact. From thermal labels to custom-printed paper mailers.",
    type: "website",
  },
}

interface ProductCard {
  title: string
  icon: React.ReactNode
  description: string
  bullets: string[]
}

const productCards: ProductCard[] = [
  {
    title: "Ecommerce Courier Covers",
    icon: <ShieldCheck className="h-8 w-8 text-blue-600" />,
    description:
      "Tear-resistant, waterproof poly shipping bags with self-adhesive seals for secure transit.",
    bullets: ["Tamper-evident seal", "Waterproof & tear-resistant", "Available in multiple sizes"],
  },
  {
    title: "Barcode & Thermal Label Rolls",
    icon: <Printer className="h-8 w-8 text-blue-600" />,
    description:
      "High-contrast thermal labels for fast, reliable barcode scanning and shipping address printing.",
    bullets: [
      "Direct thermal printing",
      "Strong adhesive backing",
      "Compatible with all major printers",
    ],
  },
  {
    title: "Custom Printed Paper Covers",
    icon: <Leaf className="h-8 w-8 text-blue-600" />,
    description:
      "Eco-friendly, durable kraft paper mailers customized with your brand logo and messaging.",
    bullets: ["100% Recyclable material", "Custom logo printing", "Premium unboxing experience"],
  },
]

export default function EcommercePackagingSolutions() {
  return (
    <main className="min-h-screen bg-slate-50 py-16">
      {/* Hero Section */}
      <section className="container mx-auto px-4 text-center mb-16">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-6">
          E-Commerce Packaging Solutions
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          High-volume shipping supplies designed for security, efficiency, and brand impact. From
          thermal labels to custom-printed paper mailers.
        </p>
      </section>

      {/* Product Cards Grid */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {productCards.map((card, idx) => (
            <Card key={idx} className="h-full flex flex-col">
              <CardContent className="p-6 flex flex-col h-full">
                {/* Icon */}
                <div className="mb-4">{card.icon}</div>

                {/* Title */}
                <h2 className="text-xl font-bold text-slate-900 mb-3">{card.title}</h2>

                {/* Description */}
                <p className="text-slate-600 text-sm mb-6">{card.description}</p>

                {/* Bullet Points */}
                <ul className="space-y-3 mb-8 flex-grow">
                  {card.bullets.map((bullet, bulletIdx) => (
                    <li key={bulletIdx} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 text-sm">{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  <Link href="/contact">
                    Get Bulk Pricing
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  )
}
