import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight } from "lucide-react"
import { categories } from "@/lib/products-data"

export const metadata = {
  title: "Products | MS Paper Products - Premium Paper Bags Collection",
  description:
    "Explore our wide range of premium paper bags including shopping bags, gift bags, food packaging, and custom printed bags for all your business needs.",
}

const featuredProducts = [
  {
    name: "Luxury Shopping Bags",
    description: "Premium paper bags with gold/silver foiling, perfect for retail and fashion brands.",
    image: "/luxury-printed-paper-bag-with-gold-foiling-navy-bl.jpg",
    features: ["Gold/Silver Foiling", "Twisted Rope Handles", "Custom Sizes", "Premium Finish"],
  },
  {
    name: "Kraft Paper Bags",
    description: "Eco-friendly natural kraft bags with sturdy handles for everyday use.",
    image: "/natural-kraft-paper-bags-with-twisted-handles-eco-.jpg",
    features: ["100% Recyclable", "Multiple Sizes", "Strong & Durable", "Natural Look"],
  },
  {
    name: "Gift & Wedding Bags",
    description: "Elegant bags designed for special occasions and premium gifting.",
    image: "/elegant-wedding-gift-bags-white-and-gold-luxury.jpg",
    features: ["Elegant Designs", "Ribbon Handles", "Custom Printing", "Premium Quality"],
  },
  {
    name: "Food Grade Bags",
    description: "Safe and hygienic paper bags for bakeries, restaurants, and food businesses.",
    image: "/food-grade-paper-bags-bakery-restaurant-clean.jpg",
    features: ["Food Safe", "Grease Resistant", "Various Sizes", "Brand Printing"],
  },
]

export default function ProductsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#132635] py-20 text-white md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">Our Products</h1>
            <p className="text-lg text-gray-300 md:text-xl">
              Discover our extensive range of premium paper bags designed to meet every business need.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-[#132635] md:text-4xl">Featured Products</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {featuredProducts.map((product, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-none shadow-lg transition-shadow hover:shadow-xl"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="mb-2 text-xl font-bold text-[#132635]">{product.name}</h3>
                  <p className="mb-4 text-gray-600">{product.description}</p>
                  <ul className="grid grid-cols-2 gap-2">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                        <Check className="h-4 w-4 text-[#f19e1f]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories - Made categories clickable with links to individual category pages */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-[#132635] md:text-4xl">Product Categories</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {categories.map((category) => (
              <Link key={category.slug} href={`/products/${category.slug}`}>
                <Card className="group h-full cursor-pointer border-none shadow-md transition-all hover:-translate-y-1 hover:border-[#f19e1f] hover:shadow-lg">
                  <CardContent className="flex h-full flex-col items-center justify-center p-6 text-center">
                    <p className="font-medium text-[#132635] group-hover:text-[#f19e1f]">{category.name}</p>
                    <ArrowRight className="mt-2 h-4 w-4 text-[#f19e1f] opacity-0 transition-opacity group-hover:opacity-100" />
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Customization Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-[#132635] md:text-4xl">Custom Printing & Branding</h2>
              <p className="mb-6 text-gray-600">
                Make your brand stand out with our custom printing services. We offer a wide range of printing
                techniques and finishing options to create the perfect packaging for your business.
              </p>
              <ul className="mb-8 space-y-3">
                {[
                  "Full-color offset printing",
                  "Gold & silver foil stamping",
                  "Embossing & debossing",
                  "Spot UV coating",
                  "Custom die-cut handles",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-[#f19e1f]" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="bg-[#f19e1f] text-white hover:bg-[#f19e1f]/90">
                <Link href="/contact">Request a Quote</Link>
              </Button>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-2xl shadow-xl">
              <Image src="/custom-printing-showcase.jpg" alt="Custom Printing Services" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#132635] py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">Need a Custom Solution?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300">
            We can create bespoke paper bags tailored to your exact specifications.
          </p>
          <Button asChild size="lg" className="bg-[#f19e1f] text-white hover:bg-[#f19e1f]/90">
            <Link href="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
