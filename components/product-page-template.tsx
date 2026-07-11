'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, CheckCircle, Truck, Award, Zap } from 'lucide-react'

interface ProductPageTemplateProps {
  title: string
  subtitle: string
  description: string
  image: string
  features: string[]
  applications: string[]
  specifications: { label: string; value: string }[]
  pricing?: { min: string; max: string; unit: string }
  callToAction?: string
}

export default function ProductPageTemplate({
  title,
  subtitle,
  description,
  image,
  features,
  applications,
  specifications,
  pricing,
  callToAction = 'Request a Quote',
}: ProductPageTemplateProps) {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#132635] to-[#1a3a52] py-12 text-white md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="mb-4 text-3xl font-bold md:text-5xl">{title}</h1>
          <p className="text-lg text-gray-300">{subtitle}</p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            <div className="relative h-96 overflow-hidden rounded-lg md:h-full">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col justify-center space-y-6">
              <div>
                <h2 className="mb-4 text-3xl font-bold text-[#132635]">About {title}</h2>
                <p className="text-gray-700 leading-relaxed">{description}</p>
              </div>

              <div>
                <h3 className="mb-4 font-semibold text-[#132635]">Key Features:</h3>
                <ul className="space-y-2">
                  {features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-700">
                      <CheckCircle className="h-5 w-5 text-[#f19e1f] flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <Link href="/contact">
                <Button className="bg-[#f19e1f] text-[#132635] hover:bg-[#f19e1f]/90 font-bold">
                  {callToAction}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="bg-gray-50 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-[#132635]">Applications & Uses</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {applications.map((app, idx) => (
              <Card key={idx} className="border-l-4 border-l-[#f19e1f]">
                <CardContent className="p-6">
                  <p className="text-gray-700">{app}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-[#132635]">Specifications</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <tbody>
                {specifications.map((spec, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-50' : ''}>
                    <td className="border border-gray-200 px-6 py-4 font-semibold text-[#132635]">{spec.label}</td>
                    <td className="border border-gray-200 px-6 py-4 text-gray-700">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      {pricing && (
        <section className="bg-[#132635] py-12 text-white md:py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-8 text-3xl font-bold">Pricing</h2>
            <div className="mx-auto max-w-md">
              <Card className="bg-white text-[#132635]">
                <CardContent className="p-8">
                  <p className="mb-2 text-sm text-gray-600">Starting from</p>
                  <p className="mb-1 text-4xl font-bold text-[#f19e1f]">₹{pricing.min}</p>
                  <p className="mb-6 text-sm text-gray-600">to ₹{pricing.max} per {pricing.unit}</p>
                  <p className="text-sm text-gray-600">Bulk order discounts available</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Benefits Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-[#132635]">Why Choose Our {title}?</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="text-center">
              <Award className="mx-auto mb-4 h-12 w-12 text-[#f19e1f]" />
              <h3 className="mb-2 font-semibold text-[#132635]">Premium Quality</h3>
              <p className="text-gray-600">High-quality materials and superior craftsmanship</p>
            </div>
            <div className="text-center">
              <Truck className="mx-auto mb-4 h-12 w-12 text-[#f19e1f]" />
              <h3 className="mb-2 font-semibold text-[#132635]">Fast Delivery</h3>
              <p className="text-gray-600">Quick turnaround without compromising quality</p>
            </div>
            <div className="text-center">
              <Zap className="mx-auto mb-4 h-12 w-12 text-[#f19e1f]" />
              <h3 className="mb-2 font-semibold text-[#132635]">Custom Solutions</h3>
              <p className="text-gray-600">Tailored designs matching your specific needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-[#132635] to-[#1a3a52] py-12 text-white md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to Order?</h2>
          <p className="mb-8 text-gray-300">
            Get in touch with our team to discuss your requirements and receive a competitive quote.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/contact">
              <Button className="bg-[#f19e1f] text-[#132635] hover:bg-[#f19e1f]/90 font-bold">
                {callToAction}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <a href="tel:+918143330028">
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                Call: +91 81433 30028
              </Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
