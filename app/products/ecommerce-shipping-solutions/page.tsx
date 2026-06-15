import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Check,
  ArrowRight,
  Package,
  Zap,
  Shield,
  TrendingUp,
  Award,
  Truck,
  Phone,
  MessageCircle,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Ecommerce Covers & Shipping Barcode Labels | MS Paper Products",
  description:
    "Premium waterproof ecommerce courier covers and thermal barcode label rolls for online retailers. High-volume printing with fast turnaround. MS Paper Products Hyderabad.",
  keywords: [
    "ecommerce covers",
    "shipping covers",
    "courier covers",
    "barcode labels",
    "shipping labels",
    "thermal labels",
    "barcode label rolls",
    "ecommerce packaging",
    "shipping solutions Hyderabad",
    "bulk courier covers",
  ],
  openGraph: {
    title: "Ecommerce Covers & Shipping Barcode Labels | MS Paper Products",
    description:
      "Premium waterproof ecommerce courier covers and thermal barcode label rolls for high-volume online retailers.",
    type: "website",
  },
}

const products = [
  {
    id: "ecommerce-covers",
    name: "Ecommerce Courier Covers",
    shortDesc: "Waterproof, tear-proof covers designed for high-volume e-commerce shipping",
    description:
      "Professional ecommerce courier covers engineered for durability and security. Waterproof outer layer protects packages from weather. Features security tape closure and tracking space. Available in multiple sizes (6x8, 8x10, 10x12 inches). Customizable with your logo and branding.",
    image: "/categories/ecommerce-covers.png",
    icon: Package,
    features: [
      "100% Waterproof & Tear-Proof Material",
      "Tamper-Evident Security Tape Closure",
      "Pre-Printed Tracking Number Space",
      "Custom Printing & Branding Available",
      "Multiple Size Options Available",
      "Cost-Effective for Bulk Orders",
      "Fast Delivery - 5-7 Days",
      "MOQ: 500 Pieces",
    ],
    specifications: [
      {
        label: "Material",
        value: "Coated Paper / Kraft with Waterproof Coating",
      },
      { label: "GSM", value: "100-150 GSM" },
      { label: "Sizes", value: "6x8, 8x10, 10x12, 12x15 Inches" },
      { label: "Closure", value: "Self-Adhesive Security Tape" },
      { label: "Printing", value: "Full Color CMYK / 2 Color" },
      { label: "Turnaround", value: "5-7 Working Days" },
      { label: "MOQ", value: "500 Pieces" },
      { label: "Price Range", value: "₹0.80 - ₹2.50 per piece (based on quantity)" },
    ],
    industries: ["E-commerce", "Logistics", "Retail", "Fashion", "Electronics", "FMCG"],
    useCases: [
      "Amazon, Flipkart, Meesho seller packaging",
      "Direct-to-consumer online orders",
      "Subscription box shipping",
      "Return & exchange packaging",
      "Same-day delivery services",
      "B2B bulk shipments",
    ],
  },
  {
    id: "barcode-label-rolls",
    name: "Thermal Barcode Label Rolls",
    shortDesc: "High-quality thermal label rolls for shipping, inventory, and logistics",
    description:
      "Premium thermal barcode label rolls designed for high-speed thermal printers. Perfect for shipping labels, inventory management, and warehouse operations. 100% thermal-sensitive coating ensures fast, clear printing without ink. Available in standard sizes (4x6, 4x8, 6x8 inches).",
    image: "/categories/shipping-barcode-labels.png",
    icon: Zap,
    features: [
      "No Ink Required - Direct Thermal Printing",
      "4x6 & 4x8 Standard Sizes for Shipping",
      "High-Quality Barcode Scanning (100% Readable)",
      "Self-Adhesive & Easy to Peel",
      "Compatible with Most Thermal Printers",
      "Weather & Water Resistant",
      "Bulk Roll Supply Available",
      "Cost-Effective High-Volume Printing",
    ],
    specifications: [
      { label: "Type", value: "Direct Thermal (No Ink Required)" },
      { label: "Sizes", value: "4x6, 4x8, 6x8 Inches" },
      { label: "Labels per Roll", value: "500-1000 Labels" },
      { label: "Roll Core", value: "1 Inch Diameter" },
      { label: "Adhesive", value: "Permanent Self-Adhesive" },
      { label: "Resolution", value: "203/300 DPI Compatible" },
      { label: "Barcode Format", value: "All Standard Formats (Code128, UPC, EAN, QR)" },
      { label: "Durability", value: "Water & Fade Resistant for 2+ Years" },
    ],
    industries: ["Logistics", "E-commerce", "Retail", "Warehouse", "Manufacturing", "Healthcare"],
    useCases: [
      "Shipping label printing for couriers",
      "Inventory management labels",
      "Product labeling in warehouse",
      "Returns & RMA tracking",
      "Cold chain logistics labels",
      "Document management systems",
    ],
  },
]

const whyChooseUs = [
  {
    icon: Award,
    title: "Unmatched Quality",
    description:
      "100% quality-checked products with durability guaranteed for high-volume operations.",
  },
  {
    icon: Truck,
    title: "Fast Turnaround",
    description: "5-7 days delivery for printed covers, immediate roll supply for labels.",
  },
  {
    icon: TrendingUp,
    title: "Bulk Order Specialists",
    description:
      "Dedicated team for large orders. Wholesale pricing for 5000+ units. Volume discounts available.",
  },
  {
    icon: Shield,
    title: "Compliance & Standards",
    description:
      "All products meet international shipping standards. FDA food-contact approved materials.",
  },
  {
    icon: Zap,
    title: "Cost-Effective Solutions",
    description:
      "Industry-leading pricing without compromising quality. Transparent costing for bulk orders.",
  },
  {
    icon: Phone,
    title: "Dedicated Support",
    description:
      "24/7 customer support. Direct account manager for corporate clients. Custom solutions available.",
  },
]

export default function EcommercePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] overflow-hidden bg-gradient-to-r from-[#0A2342] to-[#1a3a4f]">
        <div className="absolute inset-0">
          <Image
            src="/categories/ecommerce-covers.png"
            alt="Ecommerce Shipping Solutions"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A2342]/90 via-[#1a3a4f]/80 to-[#0A2342]/90" />
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white text-balance leading-tight">
                Ecommerce Covers & Shipping Barcode Labels
              </h1>
              <p className="text-lg md:text-xl text-gray-100 font-medium mb-8">
                Premium solutions for high-volume e-commerce shipping and logistics operations
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-[#F5B400] text-[#0A2342] hover:bg-[#F5B400]/90 font-bold">
                  <Link href="/contact?service=Ecommerce Covers">
                    Get Quote Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#0A2342] font-bold"
                >
                  <a href="tel:+918143330028">
                    <Phone className="mr-2 h-5 w-5" />
                    Call: +91 81433 30028
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2342] mb-6">
              Our Ecommerce Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive shipping solutions designed specifically for high-volume e-commerce operations,
              online retailers, and logistics providers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            {products.map((product, idx) => {
              const Icon = product.icon
              return (
                <div key={product.id} className="flex flex-col">
                  {/* Product Image */}
                  <div className="relative h-80 mb-8 rounded-lg overflow-hidden shadow-lg border-2 border-gray-100 hover:shadow-xl transition-shadow">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Product Content */}
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-3 bg-[#F5B400]/20 rounded-lg">
                        <Icon className="h-8 w-8 text-[#F5B400]" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-[#0A2342] mb-2">
                          {product.name}
                        </h3>
                        <p className="text-gray-600 text-lg font-medium">
                          {product.shortDesc}
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-8 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Key Features */}
                    <div className="mb-8">
                      <h4 className="text-xl font-bold text-[#0A2342] mb-4">Key Features:</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {product.features.slice(0, 6).map((feature, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-gray-700"
                          >
                            <Check className="h-5 w-5 text-[#F5B400] flex-shrink-0 mt-0.5" />
                            <span className="text-sm font-medium">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Specifications */}
                    <div className="mb-8 bg-gray-50 p-6 rounded-lg border border-gray-200">
                      <h4 className="text-lg font-bold text-[#0A2342] mb-4">
                        Technical Specifications:
                      </h4>
                      <div className="space-y-3">
                        {product.specifications.map((spec, i) => (
                          <div key={i} className="flex justify-between text-sm">
                            <span className="font-semibold text-gray-700">
                              {spec.label}:
                            </span>
                            <span className="text-gray-600">{spec.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Use Cases */}
                    <div className="mb-8">
                      <h4 className="text-lg font-bold text-[#0A2342] mb-4">
                        Perfect For:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {product.useCases.map((useCase, i) => (
                          <span
                            key={i}
                            className="px-4 py-2 bg-[#F5B400]/10 text-[#0A2342] rounded-full text-sm font-medium border border-[#F5B400]/30"
                          >
                            {useCase}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button
                        asChild
                        className="flex-1 bg-[#F5B400] text-[#0A2342] hover:bg-[#F5B400]/90 font-bold"
                      >
                        <Link href="/contact?service={product.name}">
                          Get Quote
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className="flex-1 border-[#0A2342] text-[#0A2342] hover:bg-[#0A2342] hover:text-white"
                      >
                        <a href={`https://wa.me/918143330028?text=I%20am%20interested%20in%20${product.name}`}>
                          <MessageCircle className="mr-2 h-4 w-4" />
                          WhatsApp
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2342] mb-6">
              Why Choose MS Paper Products
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry leaders in high-volume printing with proven track record of delivering
              quality, on time, and within budget for thousands of e-commerce businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, idx) => {
              const Icon = item.icon
              return (
                <Card key={idx} className="border-2 border-gray-200 hover:border-[#F5B400] transition-all hover:shadow-lg">
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <Icon className="h-12 w-12 text-[#F5B400]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0A2342] mb-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0A2342] mb-6">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our solutions are trusted by leading companies across diverse industries
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              "E-commerce",
              "Logistics",
              "Retail",
              "Fashion",
              "Electronics",
              "FMCG",
              "Pharmaceuticals",
              "Food & Beverages",
              "Cosmetics",
              "Automotive",
              "Books & Media",
              "Furniture",
            ].map((industry, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-[#F5B400]/20 to-[#F5B400]/5 p-6 rounded-lg text-center border border-[#F5B400]/30 hover:border-[#F5B400] transition-all"
              >
                <p className="font-semibold text-[#0A2342]">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0A2342] mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: "What is the minimum order quantity?",
                a: "MOQ for ecommerce covers is 500 pieces. For barcode labels, we offer rolls starting from 100 labels. Larger quantities enjoy better pricing.",
              },
              {
                q: "How long is the turnaround time?",
                a: "5-7 working days for custom-printed covers. Barcode label rolls are available for immediate dispatch from stock.",
              },
              {
                q: "Can you print custom designs on covers?",
                a: "Yes! We offer full-color custom printing with your logo, brand colors, and design. Minimum 500 pieces required.",
              },
              {
                q: "Are your thermal labels compatible with my printer?",
                a: "Our thermal labels are compatible with all standard thermal printers (203/300 DPI). Includes Zebra, Godex, Honeywell, and similar models.",
              },
              {
                q: "Do you offer bulk discounts?",
                a: "Absolutely! We provide tiered pricing for bulk orders. 1000+ pieces receive 10-15% discount. Contact our sales team for custom quotes.",
              },
              {
                q: "How do I place a bulk order?",
                a: "Call us at +91 81433 30028, WhatsApp us, or fill out our contact form. Our team will provide quotation within 2 hours.",
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-lg border-l-4 border-[#F5B400] shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-bold text-[#0A2342] mb-3">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0A2342] to-[#1a3a4f] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Scale Your E-Commerce Business?
          </h2>
          <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto">
            Get premium ecommerce covers and shipping labels at industry-leading prices. 
            Fast turnaround, bulk-friendly, and built for growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-[#F5B400] text-[#0A2342] hover:bg-[#F5B400]/90 font-bold"
            >
              <Link href="/contact?service=Ecommerce Shipping Solutions">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#0A2342] font-bold"
            >
              <a href="https://wa.me/918143330028">
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Us
              </a>
            </Button>
          </div>
          <p className="text-gray-300 mt-8 text-sm">
            ✓ Fast Delivery ✓ Bulk Orders Welcome ✓ 24/7 Support ✓ Best Prices in Hyderabad
          </p>
        </div>
      </section>
    </main>
  )
}
