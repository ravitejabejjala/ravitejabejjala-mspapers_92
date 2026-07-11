import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Retail & Fashion Packaging | MS Paper Products',
  description: 'Premium branded packaging for retail stores and fashion boutiques. Custom designs for luxury and casual retail.',
  keywords: ['retail packaging', 'fashion packaging', 'branded bags', 'luxury packaging', 'store packaging'],
}

export default function RetailFashionPage() {
  const solutions = [
    { title: 'Branded Shopping Bags', description: 'Custom printed bags with company branding and logos' },
    { title: 'Product Boxes', description: 'Elegant boxes for clothing, shoes, and fashion items' },
    { title: 'Tissue Paper', description: 'Premium tissue for wrapping and presentation' },
    { title: 'Hang Tags', description: 'Professional tags for retail merchandise' },
    { title: 'Store Labels', description: 'Custom labels for pricing and product information' },
    { title: 'Gift Boxes', description: 'Luxury boxes for special merchandise and gifts' },
  ]

  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-r from-[#132635] to-[#1a3a52] py-16 text-white md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Retail & Fashion Packaging Solutions</h1>
          <p className="mb-8 text-xl text-gray-300">Premium branded packaging that enhances customer experience</p>
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
          <h2 className="mb-8 text-center text-3xl font-bold text-[#132635]">Why Retail & Fashion Brands Choose Us</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-xl font-semibold text-[#132635]">Premium Quality</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#f19e1f]" />
                  Luxury Materials
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#f19e1f]" />
                  Premium Finishes
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#f19e1f]" />
                  Brand Differentiation
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-semibold text-[#132635]">Design Services</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#f19e1f]" />
                  Custom Design Consultation
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#f19e1f]" />
                  Branding Integration
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#f19e1f]" />
                  Sample Approval
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#132635] to-[#1a3a52] py-16 text-white md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">Elevate Your Brand with Premium Packaging</h2>
          <p className="mb-8 text-gray-300">Create memorable unboxing experiences for your customers</p>
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
