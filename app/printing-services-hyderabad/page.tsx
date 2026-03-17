import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, CheckCircle2, Printer, FileText, BookOpen, Zap, Award, TrendingUp, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Corporate Printing Services in Hyderabad | Offset & Digital Printing | MS Paper Products",
  description:
    "MS Paper Products provides professional bulk printing services in Hyderabad including flyer printing, brochure printing, booklet printing, and corporate marketing materials for real estate companies, schools, and pharmaceutical industries.",
  keywords: [
    "printing services Hyderabad",
    "corporate printing services Hyderabad",
    "bulk printing services Hyderabad",
    "commercial printing Hyderabad",
    "offset printing Hyderabad",
    "digital printing Hyderabad",
    "brochure printing Hyderabad",
    "flyer printing Hyderabad",
    "booklet printing Hyderabad",
    "catalogue printing Hyderabad",
  ],
  openGraph: {
    title: "Corporate Printing Services in Hyderabad | MS Paper Products",
    description:
      "Professional bulk printing solutions including offset printing, digital printing, brochure printing, and more.",
    url: "https://mspaperproducts.com/printing-services-hyderabad",
    type: "website",
  },
  alternates: {
    canonical: "https://mspaperproducts.com/printing-services-hyderabad",
  },
}

const services = [
  {
    id: "offset-printing",
    title: "Offset Printing Services",
    description: "Ideal for large volume printing such as brochures, flyers, catalogues, and marketing materials.",
    image: "/printing-services/offset-printing.jpg",
    icon: Printer,
    href: "/printing-services/offset-printing",
    details: [
      "High volume capacity with cost-effectiveness",
      "Superior color quality and precision",
      "Perfect for brochures, flyers, and catalogues",
      "Professional finish for corporate materials",
      "Minimum order: 500 pieces",
      "Fast turnaround time",
    ],
    benefits: [
      "Best for large quantities",
      "Excellent color accuracy",
      "Cost-effective per unit",
      "Professional quality guaranteed",
    ],
  },
  {
    id: "digital-printing",
    title: "Digital Printing Services",
    description: "Perfect for short-run prints, customized prints, and quick turnaround requirements.",
    image: "/printing-services/digital-printing.jpg",
    icon: Zap,
    href: "/printing-services/digital-printing",
    details: [
      "No setup time required",
      "Ideal for short-run and variable data printing",
      "Personalized and customized prints",
      "Quick turnaround in 24-48 hours",
      "Minimum order: 100 pieces",
      "Full color capability",
    ],
    benefits: [
      "Quick turnaround time",
      "Perfect for customization",
      "No minimum order stress",
      "Cost-effective for small runs",
    ],
  },
  {
    id: "brochure-printing",
    title: "Brochure Printing",
    description: "Professional brochures used for company profiles, product catalogues, and real estate project marketing.",
    image: "/printing-services/brochure-printing.jpg",
    icon: FileText,
    href: "/printing-services/brochure-printing",
    details: [
      "Tri-fold and multi-fold options",
      "Premium paper quality",
      "Professional design consultation",
      "Perfect for real estate and corporate use",
      "Custom sizes and finishes available",
      "Competitive bulk pricing",
    ],
    benefits: [
      "Professional appearance",
      "High-quality finish",
      "Effective marketing tool",
      "Competitive pricing",
    ],
  },
  {
    id: "flyer-printing",
    title: "Flyer Printing",
    description: "Bulk promotional flyers for events, marketing campaigns, and product promotions.",
    image: "/printing-services/flyer-printing.jpg",
    icon: TrendingUp,
    href: "/printing-services/flyer-printing",
    details: [
      "Standard and custom sizes",
      "Vibrant full-color printing",
      "Eye-catching designs",
      "Perfect for event promotion",
      "Bulk discount available",
      "Minimum order: 500 pieces",
    ],
    benefits: [
      "High impact promotion",
      "Affordable bulk pricing",
      "Quick delivery",
      "Excellent for events",
    ],
  },
  {
    id: "booklet-printing",
    title: "Booklet & Catalogue Printing",
    description: "High-quality booklets for training materials, product manuals, and corporate catalogues.",
    image: "/printing-services/booklet-printing.jpg",
    icon: BookOpen,
    href: "/printing-services/booklet-printing",
    details: [
      "Perfect binding available",
      "Multiple page options",
      "Premium paper stock",
      "Professional quality",
      "Ideal for manuals and catalogues",
      "Custom covers and designs",
    ],
    benefits: [
      "Professional presentation",
      "Durable binding options",
      "Comprehensive information display",
      "High perceived value",
    ],
  },
  {
    id: "custom-printing",
    title: "Custom Printing Solutions",
    description: "Tailored printing services for unique business requirements and specialized materials.",
    image: "/printing-services/custom-printing.jpg",
    icon: Award,
    href: "/printing-services/custom-printing",
    details: [
      "Specialized material handling",
      "Custom design consultation",
      "Unique finishing techniques",
      "Personalized production",
      "Dedicated project management",
      "Quality assurance",
    ],
    benefits: [
      "Tailored to your needs",
      "Expert consultation",
      "Unique solutions",
      "Complete customization",
    ],
  },
]

export default function PrintingServicesPage() {
  return (
    <main>
      {/* Hero Banner Section */}
      <section className="relative h-[300px] md:h-[400px] overflow-hidden bg-gradient-to-r from-[#132635] to-[#1a3a4f]">
        <div className="absolute inset-0">
          <Image
            src="/printing-services-hero.jpg"
            alt="Professional Printing Services Hero"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#132635]/80 via-[#1a3a4f]/80 to-[#132635]/80" />
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white text-balance leading-tight">
                Professional Printing Services in Hyderabad
              </h1>
              <p className="text-lg md:text-xl text-gray-100 font-medium">
                Bulk printing solutions for corporate marketing materials, brochures, flyers, and more
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-white text-gray-900 py-12 md:py-16 border-b-4 border-[#f19e1f]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Choose MS Paper Products?</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#f19e1f] mt-0.5 flex-shrink-0" />
                  <span>Direct manufacturer with in-house production facilities</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#f19e1f] mt-0.5 flex-shrink-0" />
                  <span>Competitive bulk order pricing and flexible MOQs</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#f19e1f] mt-0.5 flex-shrink-0" />
                  <span>Fast turnaround time and reliable delivery</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#f19e1f] mt-0.5 flex-shrink-0" />
                  <span>Professional design consultation available</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#f19e1f] mt-0.5 flex-shrink-0" />
                  <span>20+ years of experience in commercial printing</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <Button asChild size="lg" className="bg-[#f19e1f] text-[#132635] hover:bg-[#f19e1f]/90 font-semibold">
                <Link href="/contact">
                  Get Quote Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-[#132635] text-[#132635] hover:bg-[#132635] hover:text-white font-semibold">
                <a href="tel:+918143330028">
                  <Phone className="mr-2 h-5 w-5" />
                  Call: +91 81433 30028
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#132635] mb-4">Our Printing Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive printing solutions tailored to your business needs with professional quality and competitive pricing
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const IconComponent = service.icon
              return (
                <Card key={service.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48 overflow-hidden bg-gray-200">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <IconComponent className="h-6 w-6 text-[#f19e1f]" />
                      <h3 className="text-xl font-bold text-[#132635]">{service.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      <h4 className="font-semibold text-sm text-gray-700">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.details.slice(0, 3).map((detail, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                            <span className="text-[#f19e1f] font-bold">•</span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col gap-2">
                      <Button asChild className="w-full bg-[#132635] hover:bg-[#132635]/90 text-white font-semibold">
                        <Link href={service.href}>
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      <Button asChild className="w-full bg-[#f19e1f] hover:bg-[#f19e1f]/90 text-[#132635] font-semibold">
                        <Link href="/contact">
                          Get Quote
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#132635] mb-12 text-center">Complete Service Details</h2>

          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div key={service.id} className={`mb-16 pb-16 border-b ${index === services.length - 1 ? 'border-transparent' : 'border-gray-200'}`}>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {index % 2 === 0 ? (
                    <>
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <IconComponent className="h-8 w-8 text-[#f19e1f]" />
                          <h3 className="text-2xl md:text-3xl font-bold text-[#132635]">{service.title}</h3>
                        </div>
                        <p className="text-gray-600 mb-6">{service.description}</p>
                        
                        <div className="mb-8">
                          <h4 className="font-bold text-[#132635] mb-4">What's Included:</h4>
                          <ul className="space-y-3">
                            {service.details.map((detail, idx) => (
                              <li key={idx} className="flex items-start gap-3">
                                <CheckCircle2 className="h-5 w-5 text-[#f19e1f] mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <Button asChild size="lg" className="bg-[#f19e1f] text-[#132635] hover:bg-[#f19e1f]/90 font-semibold">
                          <Link href="/contact?service={service.title}">
                            Request Quote
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </Link>
                        </Button>
                      </div>
                      <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <IconComponent className="h-8 w-8 text-[#f19e1f]" />
                          <h3 className="text-2xl md:text-3xl font-bold text-[#132635]">{service.title}</h3>
                        </div>
                        <p className="text-gray-600 mb-6">{service.description}</p>
                        
                        <div className="mb-8">
                          <h4 className="font-bold text-[#132635] mb-4">What's Included:</h4>
                          <ul className="space-y-3">
                            {service.details.map((detail, idx) => (
                              <li key={idx} className="flex items-start gap-3">
                                <CheckCircle2 className="h-5 w-5 text-[#f19e1f] mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <Button asChild size="lg" className="bg-[#f19e1f] text-[#132635] hover:bg-[#f19e1f]/90 font-semibold">
                          <Link href="/contact?service={service.title}">
                            Request Quote
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </Link>
                        </Button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#132635] to-[#1a3a4f] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Industries We Serve</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Real Estate", description: "Project brochures and marketing materials" },
              { name: "Retail & E-commerce", description: "Product catalogues and promotional materials" },
              { name: "Pharmaceutical", description: "Compliant packaging and product information" },
              { name: "Education", description: "Prospectus and institutional materials" },
              { name: "Hospitality", description: "Menus, brochures, and event materials" },
              { name: "Corporate", description: "Annual reports and corporate communications" },
            ].map((industry, idx) => (
              <Card key={idx} className="bg-white/10 border-white/20 backdrop-blur">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{industry.name}</h3>
                  <p className="text-gray-200">{industry.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#132635] mb-6">Ready to Print Your Marketing Materials?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Get a free quote for your printing project. Our team will provide competitive pricing and expert recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#f19e1f] text-[#132635] hover:bg-[#f19e1f]/90 font-semibold">
              <Link href="/contact">
                Get Your Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" className="bg-[#132635] text-white hover:bg-[#132635]/90 font-semibold">
              <a href="https://wa.me/918143330028" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
