import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Logistics & Packaging Solutions | MS Paper Products',
  description: 'Courier covers, shipping boxes, thermal labels for logistics companies. Durable, efficient packaging for logistics industry.',
  keywords: ['logistics packaging', 'courier covers', 'shipping boxes', 'thermal labels', 'logistics packaging solutions'],
}

export default function LogisticsPage() {
  const solutions = [
    { title: 'Courier Covers', description: 'Waterproof covers for safe parcel delivery' },
    { title: 'Corrugated Boxes', description: 'Durable boxes for product shipping and protection' },
    { title: 'Thermal Labels', description: 'High-quality shipping labels for tracking and identification' },
    { title: 'Packing Materials', description: 'Protective padding and packing supplies' },
    { title: 'Document Pouches', description: 'Clear pouches for packing slips and important documents' },
    { title: 'Poly Mailers', description: 'Lightweight mailers for small packages and documents' },
  ]

  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-r from-[#132635] to-[#1a3a52] py-16 text-white md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Logistics & Packaging Solutions</h1>
          <p className="mb-8 text-xl text-gray-300">Complete packaging solutions for logistics and courier operations</p>
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
          <h2 className="mb-12 text-center text-3xl font-bold text-[#132635]">Our Solutions</h2>
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
          <h2 className="mb-8 text-center text-3xl font-bold text-[#132635]">Why Choose Us for Logistics</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-xl font-semibold text-[#132635]">Durability & Reliability</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#f19e1f]" />
                  Heavy-Duty Materials
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#f19e1f]" />
                  Damage Protection
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#f19e1f]" />
                  Weather Resistant
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-semibold text-[#132635]">Operational Efficiency</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#f19e1f]" />
                  Bulk Order Capability
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#f19e1f]" />
                  Competitive Pricing
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#f19e1f]" />
                  Consistent Supply
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#132635] to-[#1a3a52] py-16 text-white md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">Partner with MS Paper Products</h2>
          <p className="mb-8 text-gray-300">Reliable packaging solutions for your logistics operations</p>
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
