import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Phone,
  MessageCircle,
  CheckCircle2,
  Package,
  Zap,
  Award,
  BarChart3,
  Users,
  FileText,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Offset Printing Services in Hyderabad | MS Paper Products",
  description:
    "Professional offset printing services for bulk orders. High-quality prints for education institutions, pharma, real estate, and hospitals. Direct manufacturer with competitive pricing.",
  keywords: [
    "offset printing Hyderabad",
    "bulk printing services",
    "commercial offset printing",
    "educational printing",
    "pharmaceutical printing",
    "real estate printing",
    "hospital printing",
    "high volume printing",
  ],
  openGraph: {
    title: "Offset Printing Services in Hyderabad",
    description: "Professional offset printing for all industries. Bulk orders with fast delivery.",
    url: "https://mspaperproducts.com/printing-services/offset-printing",
    type: "website",
  },
  alternates: {
    canonical: "https://mspaperproducts.com/printing-services/offset-printing",
  },
}

export default function OffsetPrintingPage() {
  const industries = [
    {
      title: "Educational Institutions",
      description: "Textbooks, workbooks, prospectus, certificates, exam papers, and promotional materials",
      icon: Users,
      image: "/printing-services/offset-printing-education.jpg",
    },
    {
      title: "Pharmaceutical Industries",
      description: "Medicine boxes, product leaflets, prescription pads, and GMP compliant packaging",
      icon: Package,
      image: "/printing-services/offset-printing-pharma.jpg",
    },
    {
      title: "Real Estate",
      description: "Project brochures, property flyers, presentation folders, and site plans",
      icon: BarChart3,
      image: "/printing-services/offset-printing-realestate.jpg",
    },
    {
      title: "Hospitals & Healthcare",
      description: "Medical reports, patient brochures, appointment cards, and healthcare materials",
      icon: Award,
      image: "/printing-services/offset-printing-hospital.jpg",
    },
  ]

  const features = [
    { title: "High Volume Capacity", description: "Print large quantities with consistent quality" },
    {
      title: "Color Accuracy",
      description: "Pantone color matching for brand consistency",
    },
    { title: "Fast Turnaround", description: "Efficient production for bulk orders" },
    { title: "Cost-Effective", description: "Competitive pricing for large runs" },
    {
      title: "Quality Control",
      description: "Strict quality checks at every stage",
    },
    {
      title: "Custom Finishing",
      description: "Folding, lamination, binding options available",
    },
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden bg-gradient-to-r from-[#132635] to-[#1a3a4f]">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/printing-services/offset-printing.jpg"
            alt="Offset Printing Services"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white text-balance leading-tight">
              Professional Offset Printing Services
            </h1>
            <p className="text-lg md:text-xl text-gray-100 font-medium mb-8">
              High-quality bulk printing for educational institutions, pharma, real estate, and hospitals
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-[#f19e1f] hover:bg-[#f19e1f]/90 text-[#132635] font-semibold">
                  Get Quote Now
                </Button>
              </Link>
              <Link href="tel:+918143330028">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#132635] mb-6">
                Why Choose Our Offset Printing?
              </h2>
              <p className="text-gray-700 mb-6">
                Our state-of-the-art offset printing machines deliver exceptional quality for bulk orders. With
                precision color matching and fast turnaround times, we're the trusted choice for businesses across
                multiple industries.
              </p>
              <ul className="space-y-3 mb-8">
                {features.slice(0, 3).map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#f19e1f] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-[#132635]">{feature.title}</h4>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/printing-services/offset-printing.jpg"
                alt="Offset Printing Machine"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#132635] mb-4 text-center">
            Industry-Specific Solutions
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We serve multiple industries with tailored printing solutions that meet specific requirements and
            compliance standards.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {industries.map((industry, idx) => {
              const IconComponent = industry.icon
              return (
                <div key={idx} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
                  <div className="relative h-[250px]">
                    <Image
                      src={industry.image}
                      alt={industry.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <IconComponent className="h-6 w-6 text-[#f19e1f]" />
                      <h3 className="text-xl font-bold text-[#132635]">{industry.title}</h3>
                    </div>
                    <p className="text-gray-700 mb-4">{industry.description}</p>
                    <Link href="/contact">
                      <Button className="w-full bg-[#f19e1f] hover:bg-[#f19e1f]/90 text-[#132635] font-semibold">
                        Get Quote
                      </Button>
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#132635] mb-12 text-center">
            Key Features & Benefits
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <Card key={idx} className="border-0 shadow-md hover:shadow-lg transition">
                <CardContent className="p-6">
                  <Zap className="h-8 w-8 text-[#f19e1f] mb-4" />
                  <h3 className="text-xl font-bold text-[#132635] mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#132635] mb-8 text-center">
            Specifications & Capabilities
          </h2>

          <div className="overflow-x-auto bg-white rounded-lg shadow">
            <table className="w-full">
              <thead className="bg-[#132635] text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Specification</th>
                  <th className="px-6 py-4 text-left">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-[#132635]">Paper Sizes</td>
                  <td className="px-6 py-4 text-gray-700">A4, A3, Folio, SRA, and custom sizes</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-[#132635]">Color Options</td>
                  <td className="px-6 py-4 text-gray-700">4-color (CMYK), Pantone spot colors, special colors</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-[#132635]">Paper Types</td>
                  <td className="px-6 py-4 text-gray-700">Coated, uncoated, recycled, food-grade papers</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-[#132635]">Finishing Options</td>
                  <td className="px-6 py-4 text-gray-700">Folding, binding, lamination, die-cutting, embossing</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-[#132635]">Turnaround Time</td>
                  <td className="px-6 py-4 text-gray-700">5-7 working days (standard), rush orders available</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-[#132635]">Minimum Order</td>
                  <td className="px-6 py-4 text-gray-700">500 - 1000 pieces (quantity-based pricing)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#132635] to-[#1a3a4f] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Contact us today for a free quote and bulk order pricing. Our team will work with you to deliver exactly
            what you need.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-[#f19e1f] hover:bg-[#f19e1f]/90 text-[#132635] font-semibold">
                <FileText className="mr-2 h-5 w-5" />
                Request Quote
              </Button>
            </Link>
            <Link href="https://wa.me/918143330028" target="_blank">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Us
              </Button>
            </Link>
            <Link href="tel:+918143330028">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call: +91 81433 30028
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#132635] mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6 max-w-3xl mx-auto">
            {[
              {
                q: "What is the minimum order quantity for offset printing?",
                a: "Our minimum order is typically 500-1000 pieces depending on the product. Larger quantities receive bulk discounts.",
              },
              {
                q: "How long does offset printing take?",
                a: "Standard turnaround is 5-7 working days. We offer rush orders for an additional fee if you need faster delivery.",
              },
              {
                q: "Can you print on different paper types?",
                a: "Yes, we work with coated, uncoated, recycled, and food-grade papers. We can recommend the best option for your needs.",
              },
              {
                q: "Do you offer custom finishing options?",
                a: "Absolutely. We provide folding, binding, lamination, die-cutting, embossing, and other finishing services.",
              },
              {
                q: "What payment terms do you offer for bulk orders?",
                a: "We offer flexible payment terms for bulk orders. Contact our sales team to discuss your specific requirements.",
              },
            ].map((faq, idx) => (
              <div key={idx} className="border-b pb-6 last:border-b-0">
                <h3 className="font-bold text-[#132635] mb-2 flex items-start gap-3">
                  <span className="text-[#f19e1f] font-bold">Q:</span>
                  {faq.q}
                </h3>
                <p className="text-gray-700 flex items-start gap-3">
                  <span className="text-[#f19e1f] font-bold">A:</span>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
