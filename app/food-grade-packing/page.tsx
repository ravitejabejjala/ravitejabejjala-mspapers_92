import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, CheckCircle2, Package, Leaf, Droplets, Lock, Award } from "lucide-react"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Food Grade Packing Pouches | Transparent Window Packaging | MS Paper Products",
  description:
    "Premium food-grade transparent window pouches for dry fruits, grains, spices, nuts, and coffee. FDA compliant, moisture-resistant packaging with custom printing. Bulk orders with wholesale pricing.",
  keywords: [
    "food grade pouches",
    "transparent window pouches",
    "dry fruits packaging",
    "spices packaging",
    "grains pouches",
    "food safe packaging",
    "stand-up pouches",
    "food packaging manufacturer Hyderabad",
    "bulk food pouches",
    "custom food packaging",
  ],
  openGraph: {
    title: "Food Grade Packing Pouches | MS Paper Products",
    description:
      "Premium transparent window pouches for food products. FDA compliant, moisture-resistant. Perfect for bulk orders.",
    url: "https://mspaperproducts.com/food-grade-packing",
    type: "website",
  },
  alternates: {
    canonical: "https://mspaperproducts.com/food-grade-packing",
  },
}

const foodProducts = [
  {
    title: "Dry Fruits Packaging",
    description: "Almonds, cashews, walnuts, and mixed dry fruits",
    features: ["Transparent window", "Moisture barrier", "Zip-lock closure", "Custom printing"],
    icon: Package,
  },
  {
    title: "Grains & Pulses",
    description: "Rice, wheat, lentils, pulses, and cereals",
    features: ["Large window", "High strength", "Food-grade lamination", "Bulk capacity"],
    icon: Lock,
  },
  {
    title: "Spices & Seasonings",
    description: "Turmeric, cumin, pepper, masala blends, and herbs",
    features: ["Aroma-seal", "Moisture-proof", "Clear window", "Food-safe inks"],
    icon: Droplets,
  },
  {
    title: "Coffee & Tea",
    description: "Coffee beans, ground coffee, tea leaves, and herbal mixes",
    features: ["Degassing valve", "Aroma preservation", "Premium finish", "Freshness lock"],
    icon: Award,
  },
  {
    title: "Nuts & Seeds",
    description: "Peanuts, sunflower seeds, pumpkin seeds, and kernels",
    features: ["Oxygen barrier", "Freshness preservation", "Resealable", "Food-safe"],
    icon: Leaf,
  },
  {
    title: "Herbs & Seasonings Mix",
    description: "Dried herbs, spice mixes, and seasoning blends",
    features: ["Compact sizes", "Moisture-proof", "Clear display", "Wholesale pricing"],
    icon: CheckCircle2,
  },
]

const benefits = [
  {
    title: "FDA Compliant",
    description: "All materials meet FDA and international food safety standards",
  },
  {
    title: "Transparent Window",
    description: "Clear visibility of products builds customer confidence",
  },
  {
    title: "Moisture Resistant",
    description: "Multi-layer protection keeps products fresh longer",
  },
  {
    title: "Custom Printing",
    description: "Brand your packaging with logo, ingredients, and nutritional info",
  },
  {
    title: "Bulk Pricing",
    description: "Competitive wholesale rates for large orders",
  },
  {
    title: "Fast Turnaround",
    description: "Quick production and delivery for urgent orders",
  },
]

const specifications = [
  {
    category: "Dry Fruits & Nuts",
    sizes: ["100g", "250g", "500g", "1kg"],
    closure: "Zip-lock or Heat seal",
    minOrder: "500 pieces",
  },
  {
    category: "Grains & Pulses",
    sizes: ["500g", "1kg", "2kg", "5kg"],
    closure: "Heat seal bottom",
    minOrder: "500 pieces",
  },
  {
    category: "Spices & Seasonings",
    sizes: ["25g", "50g", "100g", "200g"],
    closure: "Zip-lock",
    minOrder: "1000 pieces",
  },
  {
    category: "Coffee & Tea",
    sizes: ["100g", "250g", "500g", "1kg"],
    closure: "With degassing valve",
    minOrder: "500 pieces",
  },
]

export default function FoodGradePackingPage() {
  return (
    <main>
      {/* Hero Banner Section */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden bg-gradient-to-r from-[#132635] to-[#1a3a4f]">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/categories/food-grade-packing.jpg"
            alt="Food Grade Packing Pouches"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#132635]/90 via-[#1a3a4f]/90 to-[#132635]/90" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-balance">
              Food Grade Packing Pouches with Transparent Window
            </h1>
            <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
              Premium FDA-compliant pouches for dry fruits, grains, spices, coffee, nuts, and more. Moisture-resistant with custom printing options.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="tel:+918143330028">
                <Button size="lg" className="bg-[#f19e1f] hover:bg-[#f19e1f]/90 text-[#132635] font-semibold">
                  <Phone className="mr-2 h-5 w-5" />
                  Get Bulk Quote: +91 81433 30028
                </Button>
              </Link>
              <Link href="https://wa.me/918143330028">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#132635] mb-6">Premium Food Packaging Solutions</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              MS Paper Products manufactures high-quality food-grade transparent window pouches designed for maximum product visibility and freshness preservation. Our pouches are manufactured with FDA-compliant materials that meet international food safety standards, making them perfect for dry fruits, grains, spices, coffee, tea, nuts, and other food products.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you need small quantities for retail or large bulk orders for wholesale distribution, we offer competitive pricing, fast turnaround times, and customization options including branded printing, various sizes, and specialized closures like zip-locks and degassing valves.
            </p>
          </div>
        </div>
      </section>

      {/* Food Applications Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#132635] mb-12 text-center">Perfect For</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {foodProducts.map((product, i) => {
              const IconComponent = product.icon
              return (
                <Card key={i} className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <IconComponent className="h-8 w-8 text-[#f19e1f] flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-bold text-[#132635]">{product.title}</h3>
                        <p className="text-gray-600 mt-2">{product.description}</p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {product.features.map((feature, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-gray-700">
                          <CheckCircle2 className="h-4 w-4 text-[#f19e1f] flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#132635] mb-12 text-center">Available Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specifications.map((spec, i) => (
              <div key={i} className="border border-gray-300 rounded-lg p-6 hover:border-[#f19e1f] transition-colors">
                <h3 className="text-xl font-bold text-[#132635] mb-4">{spec.category}</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-semibold text-gray-700">Available Sizes:</p>
                    <p className="text-gray-600">{spec.sizes.join(", ")}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-700">Closure Type:</p>
                    <p className="text-gray-600">{spec.closure}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-700">Minimum Order:</p>
                    <p className="text-[#f19e1f] font-semibold">{spec.minOrder}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#132635] to-[#1a3a4f] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Choose Our Food Grade Pouches?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <div key={i} className="bg-white/10 backdrop-blur p-6 rounded-lg hover:bg-white/20 transition-colors">
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-100">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#132635] mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: "Are your pouches FDA approved for food packaging?",
                a: "Yes, all our food-grade pouches are manufactured with FDA-compliant materials and meet international food safety standards. They are tested for food contact safety and suitable for direct food packaging.",
              },
              {
                q: "Can I get custom printing on my pouches?",
                a: "Absolutely! We offer full-color custom printing with your logo, product name, ingredients list, nutritional information, and branding. Minimum order quantities apply for custom printing.",
              },
              {
                q: "What is the minimum order quantity?",
                a: "Minimum orders vary by product type, typically ranging from 500 to 1000 pieces. We offer bulk discounts for larger quantities. Contact us for specific details on your requirements.",
              },
              {
                q: "How long are the pouches fresh-sealed?",
                a: "Our pouches with proper sealing can preserve food freshness for 6-12 months depending on the product type and storage conditions. Moisture barrier and oxygen barrier options are available for longer preservation.",
              },
              {
                q: "Do you offer stand-up pouches?",
                a: "Yes, we offer stand-up pouches with gusset bottoms that are perfect for retail display. These pouches stand upright on shelves, improving visibility and product presentation.",
              },
              {
                q: "What is your turnaround time for bulk orders?",
                a: "Standard orders are typically completed within 10-15 days. We also offer expedited options for urgent requirements. Contact us to discuss your timeline.",
              },
            ].map((faq, i) => (
              <div key={i} className="border-b border-gray-300 pb-6 last:border-b-0">
                <h3 className="text-lg font-bold text-[#132635] mb-2">{faq.q}</h3>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#132635] mb-8">Ready to Order Your Food Grade Pouches?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Get competitive bulk pricing for food-grade transparent window pouches. Contact us today for a customized quote based on your specific requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-[#f19e1f] text-[#132635] hover:bg-[#f19e1f]/90 font-semibold">
              <Link href="/contact">Request a Quote</Link>
            </Button>
            <Button asChild size="lg" className="bg-green-600 text-white hover:bg-green-700 font-semibold">
              <a href="https://wa.me/918143330028" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp for Bulk Orders
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Schema Markup for Food Grade Packing */}
      <Script id="schema-food-packing" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "MS Paper Products - Food Grade Packing",
          image: "https://mspaperproducts.com/categories/food-grade-packing.jpg",
          description:
            "Premium food-grade transparent window pouches for dry fruits, grains, spices, and more. FDA compliant packaging.",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Banjara Hills",
            addressLocality: "Hyderabad",
            addressRegion: "Telangana",
            postalCode: "500034",
            addressCountry: "IN",
          },
          telephone: "+918143330028",
          url: "https://mspaperproducts.com/food-grade-packing",
          areaServed: ["Hyderabad", "Telangana", "India"],
          priceRange: "Contact for pricing",
          offers: {
            "@type": "AggregateOffer",
            priceCurrency: "INR",
            availability: "https://schema.org/InStock",
          },
        })}
      </Script>
    </main>
  )
}
