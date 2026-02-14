import type { Metadata } from "next"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ClipboardCheck, Palette, Factory, Truck, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Premium Finishing Services - Gold Foiling, Punching & Lamination",
  description:
    "Elevate your packaging with MS Paper Products premium finishing services: Gold & Silver Foiling, Precision Punching, and Gloss/Matte Lamination. Serving Hyderabad & Telangana. Call +91 81433 30028",
  keywords: [
    "gold foiling Hyderabad",
    "silver foiling packaging",
    "paper bag lamination",
    "punching services",
    "premium packaging finishing",
    "luxury paper bag finishing",
  ],
  openGraph: {
    title: "Premium Finishing Services | MS Paper Products",
    description:
      "Gold & Silver Foiling, Precision Punching, and Lamination services for premium packaging in Hyderabad.",
    url: "https://mspaperproducts.com/services",
  },
}

const services = [
  {
    name: "Gold & Silver Foiling",
    description:
      "Transform your paper bags and packaging into luxurious masterpieces with our premium gold and silver foil stamping services. Our state-of-the-art hot foil stamping technology ensures precise application with brilliant metallic shine that catches the eye. Ideal for high-end retail brands, jewelry stores, fashion boutiques, and corporate gifting, our foiling services add that essential touch of elegance that sets your brand apart from competitors.",
    highlights: [
      "Hot foil stamping with precision application",
      "Available in gold, silver, rose gold & custom colors",
      "Perfect for logos, patterns & text embellishment",
      "Enhances perceived brand value instantly",
      "Suitable for all paper types and thicknesses",
    ],
    image: "/services/gold-silver-foiling.jpg",
  },
  {
    name: "Precision Punching",
    description:
      "Our advanced die-cutting and punching services deliver clean, precise cuts every single time. From custom handle cutouts to intricate decorative patterns, our precision machinery handles complex designs with exceptional accuracy. Whether you need twisted rope handle holes, ribbon slots, or unique window cutouts, our experienced team ensures consistent quality across your entire order, maintaining tight tolerances that ensure perfect assembly.",
    highlights: [
      "Custom die-cutting for unique shapes",
      "Handle punching for rope, ribbon & flat handles",
      "Window cutouts for product visibility",
      "Consistent accuracy across bulk orders",
      "Quick turnaround for urgent requirements",
    ],
    image: "/services/precision-punching.jpg",
  },
  {
    name: "Gloss & Matte Lamination",
    description:
      "Protect and enhance your paper packaging with our professional lamination services that add both durability and visual appeal. Choose high-gloss lamination for a vibrant, reflective finish that makes colors pop, or opt for soft-touch matte lamination for a sophisticated, premium feel. Our lamination process extends product life, provides moisture resistance, and creates a tactile experience that elevates your brand perception in the competitive marketplace.",
    highlights: [
      "High-gloss finish for vibrant color enhancement",
      "Soft-touch matte for premium tactile feel",
      "Moisture and scuff resistance protection",
      "Extends packaging durability significantly",
      "Available for paper bags, boxes & cartons",
    ],
    image: "/services/gloss-matte-lamination.jpg",
  },
]

const workflowSteps = [
  { icon: ClipboardCheck, title: "Consultation", desc: "Discuss your requirements and get expert advice." },
  { icon: Palette, title: "Design", desc: "Our team creates custom designs for your approval." },
  { icon: Factory, title: "Production", desc: "State-of-the-art manufacturing with quality checks." },
  { icon: Truck, title: "Delivery", desc: "Timely delivery to your doorstep." },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#132635] text-white py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Premium Finishing Services</h1>
            <p className="text-lg md:text-xl text-gray-300">
              Elevate your packaging with our expert finishing techniques. Serving Hyderabad & Telangana.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Paragraph */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <p className="text-lg text-gray-600 max-w-4xl mx-auto text-center">
            At MS Paper Products, we go beyond basic paper bag manufacturing. Our in-house finishing services are
            designed to add that extra layer of elegance, durability, and brand impact to your packaging. Whether you're
            looking for a luxurious shimmer or a refined matte texture, our expert team ensures every detail reflects
            your brand's excellence.
          </p>
        </div>
      </section>

      {/* Services Grid - Updated with bullet highlights */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-none shadow-lg overflow-hidden group hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold text-[#132635] mb-3">{service.name}</h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-[#f19e1f] mt-0.5 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#132635] text-center mb-12">Our Workflow</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {workflowSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#f19e1f] rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-[#132635] mb-2">0{index + 1}</div>
                <h3 className="text-lg font-semibold text-[#132635] mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[#f19e1f]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Want to add a premium finish to your packaging?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Get in touch with our team to discuss your finishing requirements. Serving Hyderabad & all of Telangana.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-[#132635] hover:bg-[#132635]/90 text-white">
              <Link href="/contact">Enquire Now</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white bg-transparent text-white hover:bg-white hover:text-[#f19e1f]"
            >
              <a href="tel:+918143330028">Call +91 81433 30028</a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
