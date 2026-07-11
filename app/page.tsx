import type { Metadata } from 'next'
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Package, Leaf, Award, Users, CheckCircle, Briefcase, Truck, Zap, ShieldCheck, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import HeroCarousel from "@/components/hero-carousel"
import ClientsSection from "@/components/clients-section"

export const metadata: Metadata = {
  title: "MS Paper Products | Premium Paper Bag & Packaging Solutions in Hyderabad",
  description: "Leading manufacturer of premium paper bags, courier covers, thermal labels & eco-friendly packaging in Hyderabad. 15+ years experience. Bulk orders, custom designs. Free quote!",
  keywords: [
    "paper bags manufacturer Hyderabad",
    "courier covers",
    "thermal labels",
    "eco-friendly packaging",
    "custom packaging",
    "bulk paper bags",
    "food packaging",
    "medicine boxes",
    "printing services",
    "barcode labels",
  ],
  alternates: {
    canonical: "https://mspaperproducts.com",
  },
  openGraph: {
    title: "MS Paper Products | Premium Paper Packaging Solutions",
    description: "Quality paper bags, courier covers, thermal labels and eco-friendly packaging manufactured in Hyderabad.",
    type: "website",
    url: "https://mspaperproducts.com",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MS%20Paper%20products-03-t3JyzC6DPjBJTPm3YiAeFT8JD65dkC.png",
        width: 1200,
        height: 630,
        alt: "MS Paper Products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MS Paper Products | Premium Packaging Solutions",
    description: "Quality paper bags and packaging manufacturer in Hyderabad",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MS%20Paper%20products-03-t3JyzC6DPjBJTPm3YiAeFT8JD65dkC.png"],
  },
}

const features = [
  {
    icon: Package,
    title: "Premium Quality",
    description: "Crafted with the finest materials for durability and elegance",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "100% recyclable and biodegradable paper solutions",
  },
  {
    icon: Award,
    title: "Custom Designs",
    description: "Tailored packaging solutions to match your brand identity",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Dedicated professionals committed to your satisfaction",
  },
]

const productCategories = [
  {
    name: "Offset Printing",
    description: "High-quality offset printing for brochures, flyers, booklets and bulk production runs",
    image: "/printing-services/offset-printing.jpg",
    href: "/printing-services-hyderabad#offset-printing",
  },
  {
    name: "Digital Printing",
    description: "Fast digital printing for personalized campaigns and small to medium volumes",
    image: "/printing-services/digital-printing.jpg",
    href: "/printing-services-hyderabad#digital-printing",
  },
  {
    name: "Brochure Printing",
    description: "Professional brochure printing with stunning colors and finishes for marketing impact",
    image: "/printing-services/brochure-printing.jpg",
    href: "/printing-services-hyderabad#brochure-printing",
  },
  {
    name: "Flyer Printing",
    description: "Eye-catching flyer printing for effective advertising and promotional campaigns",
    image: "/printing-services/flyer-printing.jpg",
    href: "/printing-services-hyderabad#flyer-printing",
  },
]

const productCategories12 = [
  { name: "Paper Bags", icon: Package, href: "/products/paper-bags" },
  { name: "Boxes & Cartons", icon: Briefcase, href: "/products/boxes-cartons" },
  { name: "Courier Covers", icon: Truck, href: "/products/courier-covers" },
  { name: "Thermal Labels", icon: Zap, href: "/products/thermal-labels" },
  { name: "Printing Services", icon: TrendingUp, href: "/printing-services-hyderabad" },
  { name: "Custom Packaging", icon: ShieldCheck, href: "/products/custom-packaging" },
  { name: "Food Packaging", icon: Package, href: "/products/food-packaging" },
  { name: "Medicine Boxes", icon: Award, href: "/products/medicine-boxes" },
  { name: "Barcode Labels", icon: Zap, href: "/products/barcode-labels" },
  { name: "Shipping Labels", icon: Truck, href: "/products/shipping-labels" },
  { name: "Calendars", icon: Package, href: "/products/calendars" },
  { name: "E-Commerce Packaging", icon: Briefcase, href: "/ecommerce-packaging-solutions" },
]

const industriesServed = [
  { name: "Food & Beverage", description: "Premium food packaging and beverage containers" },
  { name: "Pharmaceuticals", description: "Compliant medicine boxes and packaging solutions" },
  { name: "E-Commerce", description: "Durable courier covers and shipping solutions" },
  { name: "Retail & Fashion", description: "Custom branded bags and luxury packaging" },
  { name: "FMCG", description: "Bulk packaging for consumer goods" },
  { name: "Corporate Gifting", description: "Premium branded packaging solutions" },
]

const whyChooseUs = [
  { title: "15+ Years Experience", description: "Trusted by thousands of businesses across India" },
  { title: "Quality Assurance", description: "ISO certified with rigorous quality control" },
  { title: "Fast Turnaround", description: "Quick delivery without compromising quality" },
  { title: "Custom Solutions", description: "Tailored packaging designs for your brand" },
  { title: "Competitive Pricing", description: "Best value for money with bulk discounts" },
  { title: "Technical Support", description: "Expert guidance and customer support 24/7" },
]

const ourProcess = [
  { step: "1", title: "Consultation", description: "Understand your requirements and specifications" },
  { step: "2", title: "Design", description: "Create custom designs matching your brand" },
  { step: "3", title: "Prototype", description: "Develop samples for your approval" },
  { step: "4", title: "Production", description: "High-quality manufacturing with precision" },
  { step: "5", title: "Quality Check", description: "Rigorous testing and quality verification" },
  { step: "6", title: "Delivery", description: "Fast and safe delivery to your location" },
]

const testimonials = [
  { name: "Rajesh Kumar", company: "TechStart India", testimonial: "MS Paper Products delivered exceptional quality and service. Highly recommended!" },
  { name: "Priya Sharma", company: "FreshFood Ventures", testimonial: "Their food packaging solutions are perfect for our business needs." },
  { name: "Amit Patel", company: "E-Commerce Hub", testimonial: "Best courier covers in the market. Fast delivery and excellent pricing." },
]

export default function Home() {
  return (
    <main>
      <HeroCarousel />

      <ClientsSection />

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-[#132635] md:text-4xl">Why Choose MS Paper Products?</h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              We combine quality craftsmanship with sustainable practices to deliver packaging solutions that make a
              difference.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <Card key={feature.title} className="border-none bg-gray-50 transition-shadow hover:shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#f19e1f]/10">
                    <feature.icon className="h-7 w-7 text-[#f19e1f]" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-[#132635]">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Range Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-[#132635] md:text-4xl">Our Printing Services</h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Professional printing solutions tailored to your needs. From offset to digital printing, we deliver quality results on time within budget.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {productCategories.map((category) => (
              <Link key={category.name} href={category.href}>
                <Card className="group overflow-hidden border-none transition-all hover:-translate-y-1 hover:shadow-xl h-full">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-5">
                    <h3 className="mb-2 text-lg font-semibold text-[#132635]">{category.name}</h3>
                    <p className="text-sm text-gray-600">{category.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/printing-services-hyderabad">
              <Button size="lg" className="bg-[#132635] hover:bg-[#132635]/90">
                View All Printing Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Grid Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-[#132635] md:text-4xl">Our Complete Product Range</h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              12 categories of premium paper and packaging solutions for every business need
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {productCategories12.map((cat) => {
              const Icon = cat.icon
              return (
                <Link key={cat.name} href={cat.href}>
                  <div className="group flex flex-col items-center gap-3 rounded-lg border border-gray-200 p-6 transition-all hover:border-[#f19e1f] hover:shadow-lg">
                    <Icon className="h-8 w-8 text-[#f19e1f] group-hover:scale-110 transition-transform" />
                    <p className="text-center font-semibold text-[#132635] text-sm">{cat.name}</p>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-[#132635] md:text-4xl">Industries We Serve</h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Trusted by leading businesses across multiple industries
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industriesServed.map((industry) => (
              <Card key={industry.name} className="border-l-4 border-l-[#f19e1f] hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-semibold text-[#132635]">{industry.name}</h3>
                  <p className="text-gray-600">{industry.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-[#132635] md:text-4xl">Why Choose MS Paper Products?</h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Industry-leading expertise and commitment to excellence
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-[#f19e1f]" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-[#132635]">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="bg-[#132635] py-16 md:py-24 text-white">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Process</h2>
            <p className="mx-auto max-w-2xl text-gray-300">
              From concept to delivery - we handle every step with precision
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-6">
            {ourProcess.map((process, idx) => (
              <div key={idx} className="flex flex-col items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f19e1f] font-bold text-[#132635]">
                  {process.step}
                </div>
                <h3 className="text-center font-semibold">{process.title}</h3>
                <p className="text-center text-sm text-gray-300">{process.description}</p>
                {idx < ourProcess.length - 1 && (
                  <div className="hidden h-1 w-full bg-[#f19e1f]/30 lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-[#132635] md:text-4xl">What Our Clients Say</h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Trusted by businesses across India
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="border-2 border-[#f19e1f]/20 hover:border-[#f19e1f] transition-colors">
                <CardContent className="p-6">
                  <div className="mb-4 flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-[#f19e1f]">★</span>
                    ))}
                  </div>
                  <p className="mb-4 text-gray-700 italic">&quot;{testimonial.testimonial}&quot;</p>
                  <div>
                    <p className="font-semibold text-[#132635]">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gradient-to-r from-[#132635] to-[#1a3a52] py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Ready to Transform Your <span className="text-[#f19e1f]">Packaging?</span>
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-gray-300">
            Connect with our experts today to discuss your custom packaging requirements. Let&apos;s bring your vision to life.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/contact">
              <Button size="lg" className="bg-[#f19e1f] text-[#132635] hover:bg-[#f19e1f]/90 font-bold">
                Request a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <a href="tel:+918143330028">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent font-bold">
                Call: +91 81433 30028
              </Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
