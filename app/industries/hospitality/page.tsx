import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Hospitality & Travel Printing Solutions | MS Paper Products',
  description: 'Hotel brochures, tourism materials, restaurant packaging, hospitality printing for hotels, resorts, and travel companies.',
  keywords: ['hospitality printing', 'hotel brochures', 'tourism materials', 'restaurant printing', 'travel brochures'],
}

export default function HospitalityPage() {
  const solutions = [
    { title: 'Hotel Brochures', description: 'Professional brochures showcasing hotel amenities and services' },
    { title: 'Tourism Materials', description: 'Travel guides and promotional materials for tourist destinations' },
    { title: 'Restaurant Menus', description: 'Printed menus for restaurants, cafes, and hospitality venues' },
    { title: 'Event Invitations', description: 'Professional invitations for hotel events and conferences' },
    { title: 'Room Information', description: 'In-room cards and information materials for guests' },
    { title: 'Packaging Materials', description: 'Food packaging and hospitality service materials' },
  ]

  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-r from-[#132635] to-[#1a3a52] py-16 text-white md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Hospitality & Travel Printing Solutions</h1>
          <p className="mb-8 text-xl text-gray-300">Professional materials that enhance guest experiences</p>
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
          <h2 className="mb-8 text-center text-3xl font-bold text-[#132635]">Hospitality Excellence</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-xl font-semibold text-[#132635]">Premium Quality</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#f19e1f]" />
                  Premium Paper Stocks
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#f19e1f]" />
                  Elegant Finishing
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#f19e1f]" />
                  Professional Design
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-semibold text-[#132635]">Guest Experience</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#f19e1f]" />
                  Brand Enhancement
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#f19e1f]" />
                  Memorable Impressions
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#f19e1f]" />
                  Guest Satisfaction
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#132635] to-[#1a3a52] py-16 text-white md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">Enhance Your Hospitality Experience</h2>
          <p className="mb-8 text-gray-300">Create lasting impressions with premium hospitality materials</p>
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
