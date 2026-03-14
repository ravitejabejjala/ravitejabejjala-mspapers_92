import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, CheckCircle2, Printer, FileText, BookOpen, Zap, Award, TrendingUp } from "lucide-react"
import ContactForm from "@/components/contact-form"

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
    icon: Printer,
    link: "#",
  },
  {
    id: "digital-printing",
    title: "Digital Printing Services",
    description: "Perfect for short-run prints, customized prints, and quick turnaround requirements.",
    icon: Zap,
    link: "#",
  },
  {
    id: "brochure-printing",
    title: "Brochure Printing",
    description: "Professional brochures used for company profiles, product catalogues, and real estate project marketing.",
    icon: FileText,
    link: "#",
  },
  {
    id: "flyer-printing",
    title: "Flyer Printing",
    description: "Bulk promotional flyers for events, marketing campaigns, and product promotions.",
    icon: TrendingUp,
    link: "#",
  },
  {
    id: "booklet-printing",
    title: "Booklet & Catalogue Printing",
    description: "High-quality booklets for training materials, product manuals, and corporate catalogues.",
    icon: BookOpen,
    link: "#",
  },
  {
    id: "custom-printing",
    title: "Custom Printing Solutions",
    description: "Tailored printing services for unique business requirements and specialized materials.",
    icon: Award,
    link: "#",
  },
]

const industries = [
  {
    name: "Real Estate Companies",
    description: "Marketing brochures, property flyers, and project launch materials.",
  },
  {
    name: "Schools & Educational Institutions",
    description: "Exam papers, answer sheets, academic booklets, and prospectuses.",
  },
  {
    name: "Pharmaceutical Industry",
    description: "Medical documentation printing and pharma marketing materials.",
  },
  {
    name: "Corporate Businesses",
    description: "Corporate brochures, catalogues, and brand communication materials.",
  },
]

const processSteps = [
  { step: "Step 1", title: "Requirement Discussion", description: "We understand your printing needs and specifications" },
  { step: "Step 2", title: "Artwork Preparation", description: "Professional design and file preparation for printing" },
  { step: "Step 3", title: "Printing Production", description: "State-of-the-art machines ensure quality output" },
  { step: "Step 4", title: "Finishing & Quality Check", description: "Professional finishing and quality assurance" },
  { step: "Step 5", title: "Delivery", description: "Timely delivery of your printed materials" },
]

const faqItems = [
  {
    question: "What printing services does MS Paper Products offer?",
    answer:
      "We offer comprehensive printing services including offset printing, digital printing, brochure printing, flyer printing, booklet printing, and custom printing solutions for various industries.",
  },
  {
    question: "Do you provide bulk printing services in Hyderabad?",
    answer:
      "Yes, we specialize in bulk printing services with competitive pricing and fast turnaround times. We handle large-scale printing orders for corporate campaigns and marketing activities.",
  },
  {
    question: "What is the difference between offset printing and digital printing?",
    answer:
      "Offset printing is ideal for large volume orders as it offers cost-per-unit advantages and superior color quality. Digital printing is perfect for short-run prints and quick turnaround requirements.",
  },
  {
    question: "Can you handle corporate printing requirements?",
    answer:
      "Absolutely! We have extensive experience with corporate printing requirements including brochures, catalogues, marketing materials, and business documents with professional finishing.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "We serve real estate companies, educational institutions, pharmaceutical industry, and corporate businesses with specialized printing solutions tailored to their needs.",
  },
]

export default function PrintingServicesPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden bg-gradient-to-r from-[#132635] to-[#1a3a4f]">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/printing-services-hero.jpg"
            alt="Professional Printing Services"
            fill
            className="object-cover"
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
              <p className="text-lg md:text-xl text-gray-100 font-medium mb-8">
                High-quality bulk printing solutions for businesses including corporates, real estate developers, schools, and pharmaceutical companies
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="#contact">
                  <Button size="lg" className="bg-[#f19e1f] hover:bg-[#f19e1f]/90 text-[#132635] font-semibold">
                    Get Printing Quote
                  </Button>
                </Link>
                <Link href="tel:+918143330028">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    <Phone className="mr-2 h-5 w-5" />
                    Contact Experts
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#132635] mb-6">Reliable Corporate Printing Solutions</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              MS Paper Products provides end-to-end commercial printing services designed for businesses that require consistent quality and high-volume print production.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              From corporate marketing materials to educational documentation and pharmaceutical print materials, we deliver precision printing with professional finishing and timely delivery.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our printing services support organizations that require large quantities of printed materials without compromising quality.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#132635] mb-4 text-center">Printing Services Overview</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Comprehensive printing solutions tailored to meet your business requirements
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon
              return (
                <Card key={service.id} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-[#f19e1f]/10 rounded-lg">
                        <IconComponent className="h-6 w-6 text-[#f19e1f]" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-[#132635] mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <Link href={service.link}>
                      <Button variant="outline" className="border-[#f19e1f] text-[#f19e1f] hover:bg-[#f19e1f]/10">
                        Learn More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#132635] mb-4 text-center">Industries We Serve</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Specialized printing solutions for diverse business sectors
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-[#132635] mb-3">{industry.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{industry.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#132635] to-[#1a3a4f] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Why Choose MS Paper Products</h2>
          <p className="text-gray-200 text-center mb-12 max-w-2xl mx-auto">
            Industry-leading printing services with proven expertise
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { title: "Bulk Printing Capability", desc: "Large-scale printing for corporate campaigns" },
              { title: "Consistent Print Quality", desc: "Advanced machines with accurate color reproduction" },
              { title: "Competitive Pricing", desc: "Optimized production reduces cost per unit" },
              { title: "Fast Turnaround", desc: "Efficient processes ensure timely delivery" },
              { title: "End-to-End Management", desc: "From artwork to delivery - fully professional" },
            ].map((feature, index) => (
              <div key={index} className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#f19e1f] flex-shrink-0" />
                  <h3 className="font-bold text-lg">{feature.title}</h3>
                </div>
                <p className="text-gray-300 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#132635] mb-4 text-center">Printing Process</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Streamlined printing workflow from requirement to delivery
          </p>
          <div className="grid md:grid-cols-5 gap-4">
            {processSteps.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-[#f19e1f] text-white flex items-center justify-center font-bold text-lg mb-4">
                  {index + 1}
                </div>
                <h3 className="font-bold text-[#132635] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute w-8 h-0.5 bg-[#f19e1f]/30 ml-20 mt-8"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact/Lead Form Section */}
      <section id="contact" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#132635] mb-4 text-center">
              Need Bulk Printing for Your Business?
            </h2>
            <p className="text-gray-600 text-center mb-12">
              Partner with MS Paper Products for reliable corporate printing services in Hyderabad. We deliver consistent quality, competitive pricing, and fast turnaround for bulk printing orders.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#132635] mb-12 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqItems.map((item, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-[#132635] mb-3">{item.question}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#132635] to-[#1a3a4f] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Printing Project Today</h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Contact MS Paper Products for professional printing services designed for businesses that demand quality and reliability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#contact">
              <Button size="lg" className="bg-[#f19e1f] hover:bg-[#f19e1f]/90 text-[#132635] font-semibold">
                Get Quote
              </Button>
            </Link>
            <Link href="tel:+918143330028">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Phone className="mr-2 h-5 w-5" />
                Call Now: +91 81433 30028
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
