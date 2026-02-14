'use client'

import { useState } from 'react'
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, FileText, CheckCircle2, Package, Zap, Leaf, Award, Factory, ChevronDown } from "lucide-react"

export const metadata: Metadata = {
  title: "Corporate Branding Kit Manufacturer in Hyderabad | MS Paper Products",
  description:
    "MS Paper Products provides complete corporate branding kits including onboarding kits, pharma packaging, food packaging, and stationery solutions. Direct manufacturer in Hyderabad. Custom printing, foiling, and bulk order specialist.",
  keywords: [
    "corporate branding kit manufacturer Hyderabad",
    "onboarding kit supplier",
    "corporate stationery printing",
    "bulk packaging manufacturer Hyderabad",
    "branded employee kit",
    "welcome kit manufacturer",
    "custom branding packages",
    "B2B packaging solutions",
  ],
  openGraph: {
    title: "Corporate Branding Kit Manufacturer | MS Paper Products",
    description:
      "Complete customized branding kits for businesses - designed, printed, and manufactured under one roof in Hyderabad.",
    url: "https://mspaperproducts.com/corporate-branding-kit",
  },
}

const industryKits = [
  {
    title: "Onboarding & Welcome Kits",
    description: "Create memorable first impressions with thoughtfully designed employee onboarding packages.",
    image: "/corporate-branding-kit/onboarding-welcome-kits.jpg",
    materials: [
      "Welcome Boxes",
      "Employee Handbook Folders",
      "Branded File Folders",
      "Branded Notebooks",
      "Company Brochures",
      "Letterheads",
      "Branded Envelopes",
      "Kraft Paper Bags",
    ],
  },
  {
    title: "Corporate Stationery Sets",
    description: "Professional stationery packages that reinforce your brand identity across all communications.",
    image: "/corporate-branding-kit/corporate-stationery.jpg",
    materials: [
      "Premium Letterheads",
      "Business Cards",
      "Presentation Folders",
      "Branded Brochures",
      "Carry Bags",
      "Memo Pads",
      "Envelopes",
      "Compliment Slips",
    ],
  },
  {
    title: "Pharmaceuticals & Nutraceuticals",
    description: "Compliant packaging solutions with branding elements for pharmaceutical products.",
    image: "/corporate-branding-kit/pharma-packaging.jpg",
    materials: [
      "Medicine Boxes (GMP Compliant)",
      "Product Cartons",
      "Product Leaflets",
      "Sample Packaging",
      "Marketing Flyers",
      "Branded Envelopes",
      "Company Brochures",
      "Instruction Leaflets",
    ],
  },
  {
    title: "Food & Bakeries",
    description: "Custom branding kits for food businesses with quality packaging and promotional materials.",
    image: "/corporate-branding-kit/food-bakery-packaging.jpg",
    materials: [
      "Paper Cups (Branded)",
      "Cake Boxes",
      "Food Packaging Boxes",
      "Custom Printed Bags",
      "Stickers & Labels",
      "Brochures",
      "Menu Cards",
      "Branded Napkins",
    ],
  },
  {
    title: "Education Institutes",
    description: "Comprehensive branding kits for schools and colleges covering admission to student experience.",
    image: "/corporate-branding-kit/education-institution.jpg",
    materials: [
      "Admission Brochures",
      "Prospectus Folders",
      "ID Card Holders",
      "Certificate Folders",
      "Student Welcome Kits",
      "School Stationery",
      "Letterheads",
      "Envelopes",
    ],
  },
  {
    title: "Jewellery & Lifestyle Boutiques",
    description: "Luxury branding solutions that reflect the premium nature of jewelry and lifestyle brands.",
    image: "/corporate-branding-kit/jewelry-luxury.jpg",
    materials: [
      "Luxury Paper Bags (Foiled)",
      "Foiled Packaging Boxes",
      "Jewelry Boxes",
      "Brand Tags & Swing Tags",
      "Tissue Paper",
      "Branded Inserts",
      "Certificates of Authenticity",
      "Presentation Folders",
    ],
  },
  {
    title: "Real Estate & Construction",
    description: "Professional branding kits that build confidence in your real estate projects and services.",
    image: "/corporate-branding-kit/real-estate.jpg",
    materials: [
      "Project Brochures",
      "Presentation Folders",
      "Document Envelopes",
      "Promotional Flyers",
      "Site Maps & Layouts",
      "Letterheads",
      "Business Cards",
      "Visit Cards",
    ],
  },
  {
    title: "Corporate & IT Companies",
    description: "Modern branding solutions for corporate and technology sector companies.",
    image: "/corporate-branding-kit/it-tech.jpg",
    materials: [
      "Employee Onboarding Kits",
      "Office Stationery Sets",
      "Event Branding Kits",
      "Custom Gift Boxes",
      "Branded Folders",
      "Company Brochures",
      "Letterheads",
      "ID Badge Holders",
    ],
  },
  {
    title: "Hospitals & Diagnostic Centers",
    description: "Professional and compliant branding for healthcare institutions.",
    image: "/corporate-branding-kit/healthcare.jpg",
    materials: [
      "Lab Report Covers",
      "Medicine Packaging",
      "File Folders",
      "Patient Information Brochures",
      "Appointment Cards",
      "Letterheads",
      "Envelopes",
      "Prescription Pads",
    ],
  },
  {
    title: "Mobiles & Electronics Accessories",
    description: "Premium packaging solutions for electronics and mobile accessory retailers.",
    image: "/corporate-branding-kit/electronics-retail.jpg",
    materials: [
      "Product Packaging Boxes",
      "Printed Inserts & Dividers",
      "Retail Carry Bags",
      "Branding Sleeves",
      "Instruction Manuals Folders",
      "Warranty Cards",
      "Hang Tags",
      "Custom Boxes",
    ],
  },
  {
    title: "Automobile Showrooms",
    description: "Professional branding kits for automotive dealerships and service centers.",
    image: "/corporate-branding-kit/automobile.jpg",
    materials: [
      "Delivery Kits & Folders",
      "Owner Manual Folders",
      "Warranty Booklets",
      "Promotional Flyers",
      "Service Cards",
      "Branded Envelopes",
      "Letterheads",
      "Business Cards",
    ],
  },
  {
    title: "Event & Hospitality",
    description: "Complete branding solutions for hotels, resorts, and event management companies.",
    image: "/corporate-branding-kit/events-hospitality.jpg",
    materials: [
      "Welcome Kits",
      "Event Brochures",
      "Menu Folders",
      "Room Service Folders",
      "Information Brochures",
      "Branded Notepads",
      "Letterheads",
      "Event Programs",
    ],
  },
]

const whyChooseUs = [
  { icon: Factory, title: "Direct Manufacturer", desc: "No middlemen - we control every aspect of production" },
  { icon: Package, title: "Bulk Order Specialist", desc: "Competitive pricing for large volume orders" },
  { icon: Zap, title: "Custom Printing", desc: "Full customization according to your brand guidelines" },
  { icon: Award, title: "Fast Turnaround", desc: "Quick delivery without compromising on quality" },
  { icon: Leaf, title: "Eco-Friendly Materials", desc: "Sustainable and recyclable packaging options available" },
  { icon: CheckCircle2, title: "Quality Assurance", desc: "Rigorous quality control at every production stage" },
]

const faqs = [
  {
    question: "Do you provide complete corporate branding kits?",
    answer:
      "Yes! We provide end-to-end branding kit solutions. From design consultation to final delivery, we handle everything. Our kits can include stationery, packaging, promotional materials, and custom printed items tailored to your brand identity.",
  },
  {
    question: "Are you a direct manufacturer?",
    answer:
      "Absolutely! We are a direct manufacturer with our own state-of-the-art facility in Hyderabad. We handle printing, foiling, lamination, punching, and cutting in-house, ensuring quality control and competitive pricing without middlemen.",
  },
  {
    question: "Can you customize according to our brand guidelines?",
    answer:
      "Yes, we specialize in custom branding. Our design team works with your specifications to create kits that perfectly match your brand guidelines, colors, and messaging. We ensure consistency across all materials.",
  },
  {
    question: "Do you handle bulk corporate orders?",
    answer:
      "We specialize in bulk orders! Whether you need 100 units or 100,000 units, we have the capacity and expertise. Larger orders come with competitive pricing and dedicated project management.",
  },
  {
    question: "Which industries do you serve?",
    answer:
      "We serve a wide range of industries including pharma, food & beverage, education, real estate, IT, healthcare, retail, automobiles, and more. Each industry receives customized solutions tailored to their specific needs.",
  },
]

function ExpandableIndustryCard({ kit, index }: { kit: typeof industryKits[0]; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Card
      className="border border-gray-200 shadow-md hover:shadow-lg transition-all cursor-pointer overflow-hidden"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <CardContent className="p-6">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-[#132635] mb-2">{kit.title}</h3>
            <p className="text-gray-600 text-sm">{kit.description}</p>
          </div>
          <ChevronDown
            className={`w-6 h-6 text-[#f19e1f] flex-shrink-0 transition-transform ${
              isExpanded ? "rotate-180" : ""
            }`}
          />
        </div>

        {isExpanded && (
          <div className="space-y-6 pt-6 border-t border-gray-200 animate-in fade-in duration-300">
            {/* Image Section */}
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src={kit.image}
                alt={kit.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Materials List */}
            <div>
              <h4 className="font-semibold text-[#132635] mb-4 text-lg">Kit Includes:</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {kit.materials.map((material, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#f19e1f] flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{material}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <Button
              asChild
              className="w-full bg-[#f19e1f] text-white hover:bg-[#f19e1f]/90"
            >
              <Link href="/contact">Get Custom Quote for This Kit</Link>
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default function CorporateBrandingKitPage() {
  return (
    <main className="min-h-screen relative">
      {/* Background Image with Low Opacity */}
      <div
        className="fixed inset-0 opacity-5 pointer-events-none -z-10"
        style={{
          backgroundImage: "url('/corporate-branding-kit/manufacturing-facility.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-[#132635] text-white py-20 md:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#f19e1f] to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Corporate Branding Kit Manufacturer in Hyderabad
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
              Complete customized branding kits for businesses — designed, printed, and manufactured under one roof.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-[#f19e1f] text-white hover:bg-[#f19e1f]/90 text-base">
                <Link href="/contact">Get Bulk Quote</Link>
              </Button>
              <Button asChild className="border-2 border-white text-white hover:bg-white hover:text-[#132635] bg-transparent text-base">
                <a href="tel:+918143330028">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </Button>
              <Button asChild className="bg-green-600 text-white hover:bg-green-700 text-base">
                <a href="https://wa.me/918143330028" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Industry-Wise Kit Showcase - Moved Below Hero */}
      <section className="py-16 md:py-24 bg-white relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#132635] text-center mb-4">
            Industry-Specific Branding Solutions
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Click on any industry to explore the complete branding kit components and see what's included
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industryKits.map((kit, index) => (
              <ExpandableIndustryCard key={index} kit={kit} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16 bg-white relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              In today's competitive business landscape, brand consistency is crucial. A well-designed corporate branding kit ensures that your company presents a unified, professional image across all touchpoints. At MS Paper Products, we specialize in creating comprehensive branding kits that go beyond basic packaging – we create experiences that reinforce your brand identity and build lasting impressions.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              As a direct manufacturer with in-house capabilities for printing, foiling, lamination, and custom die-cutting, we offer unmatched flexibility and competitive pricing. Our facility in Hyderabad serves businesses across Telangana and beyond, handling everything from small custom orders to massive bulk production runs. Whether you're an onboarding kit for new employees, pharmaceutical packaging for your medicines, or promotional materials for your food business, we deliver consistent quality, every time.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              With over 15 years of experience in the packaging industry, we understand that each business has unique branding needs. Our approach is collaborative and customized – we work with you from concept to completion, ensuring every detail aligns with your brand guidelines. No order is too big or too small; no design too complex. Let us help you create a corporate branding kit that truly represents your business.
            </p>
          </div>
        </div>
      </section>

      {/* Manufacturing Facility Showcase - Lithrone Machine */}
      <section className="py-16 md:py-24 bg-gray-50 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#132635] mb-6">Lithrone 5-Color Printing Machine</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our state-of-the-art Lithrone 5-color offset printing machine is the centerpiece of our manufacturing facility. This advanced equipment delivers exceptional color accuracy, vibrant prints, and professional-grade finishing for all your branding kit needs.
              </p>
              <ul className="space-y-3">
                {[
                  "5-color offset printing for vibrant, accurate colors",
                  "Gold foiling & punching capabilities for premium finishes",
                  "High-speed production for bulk orders",
                  "Precision die-cutting for custom shapes and designs",
                  "Advanced color management system",
                  "Lamination & specialty coating options",
                  "Strict quality control at every production stage",
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#f19e1f] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/corporate-branding-kit/lithrone-machine.jpg"
                alt="Lithrone 5-Color Printing Machine with Gold Foiling & Punching"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-white relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#132635] text-center mb-12">Why Choose MS Paper Products</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#f19e1f] rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#132635] mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50 relative z-10">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#132635] text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 bg-white">
                <h3 className="text-lg font-bold text-[#132635] mb-3 flex items-start gap-3">
                  <FileText className="w-5 h-5 text-[#f19e1f] mt-0.5 flex-shrink-0" />
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed ml-8">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-[#132635] text-white relative z-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create Your Corporate Branding Kit?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your branding kit requirements and create a customized solution that perfectly represents your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-[#f19e1f] text-white hover:bg-[#f19e1f]/90 text-base">
              <Link href="/contact">Get Your Quote Today</Link>
            </Button>
            <Button asChild className="border-2 border-white text-white hover:bg-white hover:text-[#132635] bg-transparent text-base">
              <a href="tel:+918143330028">
                <Phone className="mr-2 h-5 w-5" />
                +91 81433 30028
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
