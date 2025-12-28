import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Check,
  ArrowRight,
  ShoppingBag,
  Gift,
  Package,
  Folder,
  Calendar,
  Leaf,
  Phone,
  MessageCircle,
} from "lucide-react"
import { mainCategories } from "@/lib/products-data"
import Script from "next/script"
import TrustBadges from "@/components/trust-badges"

export const metadata = {
  title: "Products | MS Paper Products - Premium Paper Bags, Boxes, Folders & More",
  description:
    "Explore our wide range of premium paper bags, gift packaging, boxes, cartons, file folders, calendars, and eco-friendly solutions. Quality paper products manufacturer in Hyderabad.",
  keywords: "paper bags, gift boxes, carton boxes, file folders, calendars, diaries, eco-friendly packaging, Hyderabad",
  openGraph: {
    title: "Products | MS Paper Products - Premium Paper Bags & Packaging",
    description:
      "Explore our wide range of premium paper bags, gift packaging, boxes, folders, calendars, and eco-friendly solutions.",
    type: "website",
  },
}

const featuredProducts = [
  {
    name: "All Paper Bags",
    description: "Complete range of premium paper bags for retail, corporate, and everyday use.",
    image: "/categories/all-paper-bags.jpg",
    features: ["Multiple Styles", "Custom Printing", "All Sizes Available", "Premium Quality"],
    href: "/products/kraft-paper-bags",
  },
  {
    name: "Carton Boxes",
    description: "Durable and customizable carton boxes for packaging, shipping, and storage needs.",
    image: "/categories/carton-boxes.jpg",
    features: ["Heavy Duty", "Custom Sizes", "Printable Surface", "Eco-Friendly"],
    href: "/products/corrugated-cartons",
  },
  {
    name: "Files & Folders",
    description: "Professional file folders, document organizers, and office stationery solutions.",
    image: "/categories/files-folders.jpg",
    features: ["Multiple Styles", "Custom Branding", "Durable Material", "Professional Look"],
    href: "/products/corporate-file-folders",
  },
  {
    name: "Calendars & Diaries",
    description: "Premium quality calendars and diaries for corporate gifting and personal use.",
    image: "/categories/calendars-diaries.jpg",
    features: ["Wall & Desk Options", "Custom Designs", "Premium Paper", "Corporate Branding"],
    href: "/products/wall-calendars",
  },
]

const iconMap: { [key: string]: React.ReactNode } = {
  ShoppingBag: <ShoppingBag className="h-8 w-8 text-[#f19e1f]" />,
  Gift: <Gift className="h-8 w-8 text-[#f19e1f]" />,
  Package: <Package className="h-8 w-8 text-[#f19e1f]" />,
  Folder: <Folder className="h-8 w-8 text-[#f19e1f]" />,
  Calendar: <Calendar className="h-8 w-8 text-[#f19e1f]" />,
  Leaf: <Leaf className="h-8 w-8 text-[#f19e1f]" />,
}

export default function ProductsPage() {
  return (
    <>
      {/* Google Ads Conversion Tracking for Products Page */}
      <Script id="gtag-products-page" strategy="afterInteractive">
        {`
          gtag('event', 'page_view', {
            'page_title': 'Products',
            'page_location': window.location.href,
            'page_path': '/products'
          });
          
          // LinkedIn conversion tracking
          if (typeof lintrk !== 'undefined') {
            lintrk('track', { conversion_id: 18257897 });
          }
        `}
      </Script>

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-[#132635] py-20 text-white md:py-28">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="mb-6 text-4xl font-bold md:text-5xl">Our Products</h1>
              <p className="text-lg text-gray-300 md:text-xl">
                Discover our extensive range of premium paper products designed to meet every business need - from paper
                bags and gift packaging to boxes, folders, and calendars.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="bg-[#f19e1f] text-white hover:bg-[#f19e1f]/90">
                  <a href="tel:+918143330028">
                    <Phone className="mr-2 h-5 w-5" />
                    Call for Bulk Orders
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#132635] bg-transparent"
                >
                  <a
                    href="https://wa.me/918143330028?text=Hi%2C%20I%27m%20interested%20in%20your%20products.%20Please%20share%20catalog."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Get Product Catalog
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <TrustBadges />

        {/* Featured Products - Made cards clickable with Link wrapper */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="mb-4 text-3xl font-bold text-[#132635] md:text-4xl">Featured Products</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Explore our most popular product categories trusted by 1000+ businesses across India
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
              {featuredProducts.map((product, index) => (
                <Link key={index} href={product.href} className="block">
                  <Card className="group h-full overflow-hidden border-none shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
                    <div className="relative h-56 md:h-64 overflow-hidden">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#132635]/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-[#f19e1f] rounded-full p-4 opacity-0 transform scale-75 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 shadow-xl">
                          <ArrowRight className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      {index === 0 && (
                        <div className="absolute top-4 left-4 bg-[#f19e1f] text-white text-xs font-bold px-3 py-1 rounded-full">
                          Best Seller
                        </div>
                      )}
                    </div>
                    <CardContent className="p-6">
                      <h3 className="mb-2 text-xl font-bold text-[#132635] group-hover:text-[#f19e1f] transition-colors">
                        {product.name}
                      </h3>
                      <p className="mb-4 text-gray-600 text-sm md:text-base">{product.description}</p>
                      <ul className="grid grid-cols-2 gap-2">
                        {product.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                            <Check className="h-4 w-4 flex-shrink-0 text-[#f19e1f]" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <p className="mt-4 text-[#f19e1f] font-medium flex items-center gap-2 text-sm">
                        View Products <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#132635] py-12">
          <div className="container mx-auto px-4">
            <div className="grid gap-6 md:grid-cols-4 text-center text-white">
              <div>
                <p className="text-3xl font-bold text-[#f19e1f]">15+</p>
                <p className="text-sm text-gray-300">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#f19e1f]">1000+</p>
                <p className="text-sm text-gray-300">Happy Clients</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#f19e1f]">50L+</p>
                <p className="text-sm text-gray-300">Products Delivered</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#f19e1f]">Pan India</p>
                <p className="text-sm text-gray-300">Delivery Network</p>
              </div>
            </div>
          </div>
        </section>

        {/* Product Categories - Adjusted spacing for consistency */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="mb-4 text-center text-3xl font-bold text-[#132635] md:text-4xl">Product Categories</h2>
            <p className="mb-12 text-center text-gray-600 max-w-2xl mx-auto">
              Browse our complete range of paper products organized by category. Click on any subcategory to explore
              products.
            </p>

            <div className="space-y-8">
              {mainCategories.map((mainCategory) => (
                <div key={mainCategory.slug} className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                  <div className="flex items-center gap-4 mb-6">
                    {iconMap[mainCategory.icon]}
                    <div>
                      <h3 className="text-2xl font-bold text-[#132635]">{mainCategory.name}</h3>
                      <p className="text-gray-600">{mainCategory.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                    {mainCategory.subcategories.map((subcategory) => (
                      <Link key={subcategory.slug} href={`/products/${subcategory.slug}`}>
                        <Card className="group h-full cursor-pointer border border-gray-200 shadow-sm transition-all hover:-translate-y-1 hover:border-[#f19e1f] hover:shadow-md">
                          <CardContent className="flex h-full flex-col items-center justify-center p-4 text-center min-h-[100px]">
                            <p className="font-medium text-[#132635] group-hover:text-[#f19e1f] text-sm md:text-base transition-colors">
                              {subcategory.name}
                            </p>
                            <ArrowRight className="mt-2 h-4 w-4 text-[#f19e1f] opacity-0 transition-opacity group-hover:opacity-100" />
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Customization Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid items-center gap-8 md:grid-cols-2 lg:gap-12">
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
                      <Check className="h-5 w-5 flex-shrink-0 text-[#f19e1f]" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="bg-[#f19e1f] text-white hover:bg-[#f19e1f]/90">
                  <Link href="/contact">Request a Quote</Link>
                </Button>
              </div>
              <div className="relative h-[350px] md:h-[400px] overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="/custom-printing-showcase.jpg"
                  alt="Custom Printing Services"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Supply Capabilities */}
        <section className="bg-[#132635] py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold text-white md:text-4xl">Supply & Order Capabilities</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "Bulk Manufacturing", desc: "Large-scale production facilities for high-volume orders" },
                { title: "Wholesale Supply", desc: "Competitive wholesale pricing for distributors and retailers" },
                { title: "Custom Size & Design", desc: "Tailored solutions to meet your specific requirements" },
                {
                  title: "B2B & Institutional Supply",
                  desc: "Dedicated support for business and institutional orders",
                },
                { title: "Corporate & Retail Orders", desc: "Flexible ordering for both corporate and retail clients" },
                { title: "Pan-India Delivery", desc: "Reliable delivery across India and international shipping" },
              ].map((item, i) => (
                <div key={i} className="rounded-xl bg-white/10 p-6 backdrop-blur">
                  <h3 className="mb-2 text-lg font-semibold text-[#f19e1f]">{item.title}</h3>
                  <p className="text-gray-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Enhanced */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-6 text-3xl font-bold text-[#132635] md:text-4xl">Need a Custom Solution?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
              We can create bespoke paper products tailored to your exact specifications. Contact us to discuss your
              requirements.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-[#f19e1f] text-white hover:bg-[#f19e1f]/90">
                <Link href="/contact">Contact Us Today</Link>
              </Button>
              <Button asChild size="lg" className="bg-[#25D366] text-white hover:bg-[#25D366]/90">
                <a href="https://wa.me/918143330028" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Us
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-[#132635] text-[#132635] hover:bg-[#132635] hover:text-white bg-transparent"
              >
                <a href="tel:+918143330028">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
