import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Award, Users, Leaf, Factory, Target, Eye } from "lucide-react"

export const metadata = {
  title: "About Us | MS Paper Products - Premium Paper Bag Manufacturers",
  description:
    "Learn about MS Paper Products, a leading manufacturer of premium eco-friendly paper bags with over 15 years of experience in sustainable packaging solutions.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#132635] text-white py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About MS Paper Products</h1>
            <p className="text-lg md:text-xl text-gray-300">
              Crafting premium eco-friendly paper bags with passion and precision since 2008.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#132635] mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                MS Paper Products was founded with a simple yet powerful vision: to provide businesses with sustainable
                packaging solutions that don't compromise on quality or aesthetics.
              </p>
              <p className="text-gray-600 mb-4">
                Over the years, we have grown from a small workshop to a state-of-the-art manufacturing facility,
                serving hundreds of clients across retail, food & beverage, fashion, and corporate sectors.
              </p>
              <p className="text-gray-600">
                Our commitment to excellence, innovation, and environmental responsibility has made us a trusted partner
                for businesses seeking premium paper packaging solutions.
              </p>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/about-manufacturing-facility.jpg"
                alt="MS Paper Products Manufacturing Facility"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-[#f19e1f]/10 rounded-full flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-[#f19e1f]" />
                </div>
                <h3 className="text-2xl font-bold text-[#132635] mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To deliver innovative, high-quality, and sustainable paper packaging solutions that help businesses
                  make a positive environmental impact while enhancing their brand image.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-[#f19e1f]/10 rounded-full flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-[#f19e1f]" />
                </div>
                <h3 className="text-2xl font-bold text-[#132635] mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To be the leading provider of eco-friendly paper packaging in India, setting industry standards for
                  quality, sustainability, and customer satisfaction.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-[#132635] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#f19e1f] mb-2">15+</div>
              <p className="text-gray-300">Years Experience</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#f19e1f] mb-2">500+</div>
              <p className="text-gray-300">Happy Clients</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#f19e1f] mb-2">10M+</div>
              <p className="text-gray-300">Bags Produced</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#f19e1f] mb-2">100%</div>
              <p className="text-gray-300">Eco-Friendly</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#132635] text-center mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Premium Quality",
                desc: "We use only the finest materials and printing techniques.",
              },
              { icon: Users, title: "Expert Team", desc: "Skilled professionals with decades of combined experience." },
              { icon: Leaf, title: "Eco-Friendly", desc: "100% recyclable and biodegradable materials." },
              { icon: Factory, title: "Modern Facility", desc: "State-of-the-art manufacturing equipment." },
            ].map((item, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-[#f19e1f]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-[#f19e1f]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#132635] mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[#f19e1f]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Partner With Us?</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Let's create sustainable packaging solutions that elevate your brand.
          </p>
          <Button asChild size="lg" className="bg-[#132635] hover:bg-[#132635]/90 text-white">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
