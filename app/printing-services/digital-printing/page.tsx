import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Phone,
  MessageCircle,
  CheckCircle2,
  Zap,
  Award,
  BarChart3,
  Users,
  FileText,
  Clock,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Digital Printing Services in Hyderabad | Quick & Cost-Effective | MS Paper Products",
  description:
    "Fast digital printing services for small to medium runs. Perfect for educational materials, marketing collateral, and personalized prints. Quick turnaround with cost-effective pricing.",
  keywords: [
    "digital printing Hyderabad",
    "quick print services",
    "small run printing",
    "personalized printing",
    "fast printing",
    "digital color printing",
    "educational printing",
    "marketing print",
  ],
  openGraph: {
    title: "Digital Printing Services in Hyderabad",
    description: "Fast and cost-effective digital printing for quick turnarounds and small runs.",
    url: "https://mspaperproducts.com/printing-services/digital-printing",
    type: "website",
  },
  alternates: {
    canonical: "https://mspaperproducts.com/printing-services/digital-printing",
  },
}

export default function DigitalPrintingPage() {
  const advantages = [
    { title: "Quick Turnaround", description: "24-48 hour delivery available for rush orders" },
    { title: "Cost-Effective for Small Runs", description: "No setup fees or plate costs" },
    { title: "High-Quality Color", description: "Vibrant, accurate color reproduction" },
    { title: "Personalization", description: "Variable data printing for customized outputs" },
    { title: "Flexibility", description: "Easy to make changes without reprinting plates" },
    { title: "No Waste", description: "Print exactly what you need, nothing more" },
  ]

  const applications = [
    {
      title: "Educational Materials",
      description: "Study guides, worksheets, certificates, and promotional flyers",
      icon: Users,
    },
    {
      title: "Marketing Collateral",
      description: "Business cards, postcards, mailers, and promotional materials",
      icon: BarChart3,
    },
    {
      title: "Event Materials",
      description: "Tickets, programs, badges, and event invitations",
      icon: Award,
    },
    {
      title: "Personalized Prints",
      description: "Custom certificates, awards, and personalized documents",
      icon: Zap,
    },
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden bg-gradient-to-r from-[#132635] to-[#1a3a4f]">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/printing-services/digital-printing.jpg"
            alt="Digital Printing Services"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white text-balance leading-tight">
              Fast Digital Printing Services
            </h1>
            <p className="text-lg md:text-xl text-gray-100 font-medium mb-8">
              Quick turnaround, cost-effective printing for small to medium runs
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

      {/* Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#132635] mb-6">
                Why Digital Printing?
              </h2>
              <p className="text-gray-700 mb-6">
                Digital printing is perfect for businesses that need quality prints quickly without breaking the bank.
                No setup fees, no minimum quantities, and instant customization capabilities make it ideal for small to
                medium runs.
              </p>
              <ul className="space-y-3">
                {advantages.slice(0, 3).map((adv, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#f19e1f] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-[#132635]">{adv.title}</h4>
                      <p className="text-sm text-gray-600">{adv.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/printing-services/digital-printing.jpg"
                alt="Digital Printing Machine"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#132635] mb-12 text-center">
            Perfect Applications for Digital Printing
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {applications.map((app, idx) => {
              const IconComponent = app.icon
              return (
                <Card key={idx} className="border-0 shadow-md hover:shadow-lg transition">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <IconComponent className="h-8 w-8 text-[#f19e1f] mt-1 flex-shrink-0" />
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-[#132635] mb-2">{app.title}</h3>
                        <p className="text-gray-600 mb-4">{app.description}</p>
                        <Link href="/contact">
                          <Button size="sm" className="bg-[#f19e1f] hover:bg-[#f19e1f]/90 text-[#132635]">
                            Get Quote
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Advantages Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#132635] mb-12 text-center">
            Key Advantages
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {advantages.map((adv, idx) => (
              <Card key={idx} className="border-0 shadow-md hover:shadow-lg transition">
                <CardContent className="p-6">
                  <Clock className="h-8 w-8 text-[#f19e1f] mb-4" />
                  <h3 className="text-xl font-bold text-[#132635] mb-2">{adv.title}</h3>
                  <p className="text-gray-600">{adv.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#132635] mb-8 text-center">
            Capabilities & Specifications
          </h2>

          <div className="overflow-x-auto bg-white rounded-lg shadow">
            <table className="w-full">
              <thead className="bg-[#132635] text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Feature</th>
                  <th className="px-6 py-4 text-left">Specification</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-[#132635]">Paper Sizes</td>
                  <td className="px-6 py-4 text-gray-700">A4, A3, A5, and custom sizes</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-[#132635]">Quantity Range</td>
                  <td className="px-6 py-4 text-gray-700">50 - 5000 pieces</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-[#132635]">Colors</td>
                  <td className="px-6 py-4 text-gray-700">Full color (CMYK)</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-[#132635]">Paper Types</td>
                  <td className="px-6 py-4 text-gray-700">Coated, uncoated, glossy, matte</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-[#132635]">Turnaround</td>
                  <td className="px-6 py-4 text-gray-700">24-48 hours (rush), 3-5 days (standard)</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-[#132635]">Setup Fee</td>
                  <td className="px-6 py-4 text-gray-700">No setup fees</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#132635] to-[#1a3a4f] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Prints Fast?</h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Get a quote today and see how digital printing can save you time and money on your next project.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-[#f19e1f] hover:bg-[#f19e1f]/90 text-[#132635] font-semibold">
                <FileText className="mr-2 h-5 w-5" />
                Request Quote
              </Button>
            </Link>
            <Link href="tel:+918143330028">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
