'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, CheckCircle, Printer } from 'lucide-react'

interface PrintingServiceTemplateProps {
  title: string
  description: string
  image: string
  benefits: string[]
  capabilities: string[]
  specifications?: { label: string; value: string }[]
  minOrder?: string
  turnaround?: string
}

export default function PrintingServicesTemplate({
  title,
  description,
  image,
  benefits,
  capabilities,
  specifications,
  minOrder,
  turnaround,
}: PrintingServiceTemplateProps) {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#132635] to-[#1a3a52] py-12 text-white md:py-20">
        <div className="container mx-auto px-4">
          <Printer className="mb-4 h-12 w-12 text-[#f19e1f]" />
          <h1 className="mb-4 text-3xl font-bold md:text-5xl">{title}</h1>
          <p className="text-lg text-gray-300">Professional printing solutions for your business</p>
        </div>
      </section>

      {/* Overview */}
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
                <h3 className="mb-4 font-semibold text-[#132635]">Key Benefits:</h3>
                <ul className="space-y-2">
                  {benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-700">
                      <CheckCircle className="h-5 w-5 text-[#f19e1f] flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <Link href="/contact">
                <Button className="w-full bg-[#f19e1f] text-[#132635] hover:bg-[#f19e1f]/90 font-bold">
                  Request Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-gray-50 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-[#132635]">Our Capabilities</h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {capabilities.map((cap, idx) => (
              <Card key={idx}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 text-[#f19e1f] flex-shrink-0" />
                    <p className="text-gray-700">{cap}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Info */}
      {(minOrder || turnaround) && (
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-6 md:grid-cols-2">
              {minOrder && (
                <Card className="border-l-4 border-l-[#f19e1f]">
                  <CardContent className="p-6">
                    <h3 className="mb-2 font-semibold text-[#132635]">Minimum Order</h3>
                    <p className="text-gray-700">{minOrder}</p>
                  </CardContent>
                </Card>
              )}
              {turnaround && (
                <Card className="border-l-4 border-l-[#f19e1f]">
                  <CardContent className="p-6">
                    <h3 className="mb-2 font-semibold text-[#132635]">Turnaround Time</h3>
                    <p className="text-gray-700">{turnaround}</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Specifications */}
      {specifications && specifications.length > 0 && (
        <section className="bg-gray-50 py-12 md:py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold text-[#132635]">Technical Specifications</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <tbody>
                  {specifications.map((spec, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-100'}>
                      <td className="border border-gray-200 px-6 py-4 font-semibold text-[#132635]">{spec.label}</td>
                      <td className="border border-gray-200 px-6 py-4 text-gray-700">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#132635] to-[#1a3a52] py-12 text-white md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">Ready to Get Started?</h2>
          <p className="mb-8 text-gray-300">
            Contact our printing experts to discuss your project requirements.
          </p>
          <Link href="/contact">
            <Button className="bg-[#f19e1f] text-[#132635] hover:bg-[#f19e1f]/90 font-bold">
              Request a Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
