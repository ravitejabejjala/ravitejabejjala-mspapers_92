import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Package, Leaf, Award, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import HeroCarousel from "@/components/hero-carousel"

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
    name: "Paper Bags",
    description: "Premium quality paper bags for retail, gifting, and packaging needs",
    image: "/categories/all-paper-bags.jpg",
    href: "/products/paper-bags",
  },
  {
    name: "Boxes & Cartons",
    description: "Durable carton boxes for secure packaging and shipping solutions",
    image: "/categories/carton-boxes.jpg",
    href: "/products/boxes-cartons",
  },
  {
    name: "Files & Folders",
    description: "Professional document organizers for corporate and office use",
    image: "/categories/files-folders.jpg",
    href: "/products/files-folders",
  },
  {
    name: "Gold & Silver Foiling",
    description: "Luxurious metallic finishing for premium branding and packaging",
    image: "/services/gold-silver-foiling.jpg",
    href: "/services",
  },
]

export default function Home() {
  return (
    <main>
      <HeroCarousel />

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
            <h2 className="mb-4 text-3xl font-bold text-[#132635] md:text-4xl">Our Product Range</h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              From luxury retail bags to eco-friendly packaging, we offer a wide range of paper bag solutions.
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
            <Link href="/products">
              <Button size="lg" className="bg-[#132635] hover:bg-[#132635]/90">
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#132635] py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Ready to Elevate Your <span className="text-[#f19e1f]">Packaging?</span>
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-gray-300">
            Get in touch with our team to discuss your custom paper bag requirements. We&apos;re here to bring your
            vision to life.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/contact">
              <Button size="lg" className="bg-[#f19e1f] text-[#132635] hover:bg-[#f19e1f]/90">
                Request a Quote
              </Button>
            </Link>
            <a href="tel:+918143330028">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
                Call Us Now
              </Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
