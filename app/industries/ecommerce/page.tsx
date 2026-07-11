import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'E-Commerce Packaging Solutions | MS Paper Products',
  description: 'Courier covers, shipping boxes, custom packaging for online retailers. Durable, branded, cost-effective solutions.',
  keywords: ['ecommerce packaging', 'courier covers', 'shipping boxes', 'online retail packaging', 'branded packaging'],
}

export default function EcommercePage() {
  const solutions = [
    { title: 'Courier Covers', description: 'Waterproof covers for safe product delivery' },
    { title: 'Shipping Boxes', description: 'Corrugated boxes for secure product shipment' },
    { title: 'Branded Packaging', description: 'Custom printed boxes enhancing brand identity' },
    { title: 'Tissue Paper & Fillers', description: 'Premium tissue and protective padding materials' },
    { title: 'Thermal Labels', description: 'High-quality shipping labels for logistics' },
    { title: 'Poly Mailers', description: 'Lightweight, durable mailers for lightweight items' },
  ]

  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-r from-[#132635] to-[#1a3a52] py-16 text-white md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">E-Commerce Packaging Solutions</h1>
          <p className="mb-8 text-xl text-gray-300">Complete shipping and packaging solutions for online retailers</p>
          <Link href="/contact">
            <Button className="bg-[#f19e1f] text-[#132635] hover:bg-[#f19e1f]/90 font-bold">
              Request Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-[#132635]">Our E-Commerce Solutions</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution, idx) => (
              <Card key={idx} className="border-l-4 border-l-[#f19e1f]">
                <CardContent className="p-6">
                  <CheckCircle className="mb-3 h-6 w-6 text-[#f19e1f]" />
                  <h3 className="mb-2 text-lg font-semibold text-[#132635]">{solution.title}</h3>
                  <p className="text-gray-700">{solution.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-[#132635]">Why E-Commerce Partners Choose Us</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-xl font-semibold text-[#132635]">Product Quality</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#f19e1f]" />
                  Durable & Protective
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#f19e1f]" />
                  Professional Appearance
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#f19e1f]" />
                  Brand Enhancement
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-semibold text-[#132635]">Business Benefits</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#f19e1f]" />
                  Competitive Pricing
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#f19e1f]" />
                  Bulk Order Discounts
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#f19e1f]" />
                  Fast Delivery
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#132635] to-[#1a3a52] py-16 text-white md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">Scale Your E-Commerce Business</h2>
          <p className="mb-8 text-gray-300">Partner with MS Paper Products for reliable, branded packaging solutions</p>
          <Link href="/contact">
            <Button className="bg-[#f19e1f] text-[#132635] hover:bg-[#f19e1f]/90 font-bold">
              Get Custom Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
