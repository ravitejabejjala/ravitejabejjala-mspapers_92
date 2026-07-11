import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Corporate Stationery & Printing | MS Paper Products',
  description: 'Corporate printing solutions for offices, business cards, letterhead, and company materials. Professional branding materials.',
  keywords: ['corporate printing', 'business stationery', 'corporate branding', 'office printing', 'company printing'],
}

export default function CorporatePage() {
  const solutions = [
    { title: 'Corporate Stationery', description: 'Professional letterhead, envelopes, and notepads for offices' },
    { title: 'Business Cards', description: 'Premium business cards that make lasting impressions' },
    { title: 'Annual Reports', description: 'Professional annual reports for corporate communication' },
    { title: 'Presentation Materials', description: 'Folders, slides, and presentation collateral' },
    { title: 'Internal Communications', description: 'Newsletters, memos, and internal company communications' },
    { title: 'Corporate Gifts', description: 'Branded gift items for corporate events and relationships' },
  ]

  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-r from-[#132635] to-[#1a3a52] py-16 text-white md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Corporate Printing Solutions</h1>
          <p className="mb-8 text-xl text-gray-300">Professional printing that reinforces your corporate image</p>
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
          <h2 className="mb-8 text-center text-3xl font-bold text-[#132635]">Corporate Advantages</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-xl font-semibold text-[#132635]">Brand Consistency</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#f19e1f]" />
                  Color & Brand Accuracy
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#f19e1f]" />
                  Professional Standards
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#f19e1f]" />
                  Unified Communications
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-semibold text-[#132635]">Business Efficiency</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#f19e1f]" />
                  Bulk Discounts
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#f19e1f]" />
                  Ongoing Supply Management
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#f19e1f]" />
                  Flexible Ordering
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#132635] to-[#1a3a52] py-16 text-white md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">Strengthen Your Corporate Image</h2>
          <p className="mb-8 text-gray-300">Professional printing solutions for corporations and businesses</p>
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
