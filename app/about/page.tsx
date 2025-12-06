import type { Metadata } from "next"
import { Sparkles, Award, Lightbulb } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us - MS Paper Products | Premium Paper Bag Manufacturer Since 2015",
  description:
    "Learn about MS Paper Products, Hyderabad's trusted ISO certified paper bag manufacturer. 8+ years of excellence in eco-friendly packaging. Serving 500+ businesses across India. Custom designs, bulk orders, fast delivery.",
  keywords: [
    "about MS Paper Products",
    "paper bag manufacturer Hyderabad",
    "ISO certified packaging",
    "eco friendly manufacturer",
    "custom packaging company",
  ],
  openGraph: {
    title: "About MS Paper Products - Premium Packaging Manufacturer",
    description:
      "Hyderabad's trusted ISO certified paper bag manufacturer. 8+ years of excellence in eco-friendly packaging.",
    url: "https://mspaperproducts.com/about",
  },
  alternates: {
    canonical: "https://mspaperproducts.com/about",
  },
}

const pillarsDetailed = [
  {
    icon: Sparkles,
    title: "Adaptability",
    description:
      "We understand that every business has unique packaging needs. Our team works closely with clients to deliver custom designs, colors, and sizes that perfectly match their brand identity and product requirements.",
  },
  {
    icon: Award,
    title: "Quality",
    description:
      "Quality is at the heart of everything we do. Our bags are crafted to be durable, stylish, and reliable, ensuring your products are protected while maintaining an elegant presentation that enhances your brand.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We continuously invest in improving our materials, printing techniques, and finishing processes. Our commitment to innovation ensures you receive packaging solutions that meet the highest industry standards.",
  },
]

export default function AboutPage() {
  return (
    <main>
      <section className="relative h-[400px] bg-gradient-to-r from-[#132635] to-[#1a3645] flex items-center">
        <div className="absolute inset-0 opacity-10">
          <img
            src="/abstract-paper-texture-pattern-in-navy-and-gold.jpg"
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h1 className="text-5xl lg:text-6xl font-serif font-bold text-white mb-4">About MS Paper Products</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Hyderabad's trusted partner for premium, sustainable packaging solutions
          </p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-4xl font-serif font-bold text-[#132635] mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  MS Paper Products is a trusted paper bag manufacturer and supplier based in Hyderabad, Telangana. We
                  provide high-quality, customizable paper packaging solutions for apparel, footwear, jewelry,
                  cosmetics, confectionery, gifting, and retail businesses.
                </p>
                <p>
                  Our commitment to excellence and sustainability has made us the preferred choice for businesses
                  looking for premium packaging that reflects their brand values while supporting environmental
                  responsibility.
                </p>
                <p>
                  With state-of-the-art manufacturing facilities and a dedicated team, we serve clients across India,
                  delivering packaging solutions that combine functionality, aesthetics, and eco-friendliness.
                </p>
              </div>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/premium-handcrafted-paper-bag-packaging-workspace-.jpg"
                alt="Our manufacturing facility"
                className="object-cover w-full h-full"
              />
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm px-8 py-4 rounded-xl shadow-lg">
                <img src="/ms-logo.png" alt="MS Paper Products" className="h-16 w-auto" />
              </div>
            </div>
          </div>

          <div className="mb-24">
            <h2 className="text-4xl font-serif font-bold text-[#132635] mb-12 text-center">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {pillarsDetailed.map((pillar, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <pillar.icon className="w-12 h-12 text-[#f19e1f] mb-4" />
                  <h3 className="text-2xl font-semibold text-[#132635] mb-4">{pillar.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#132635] to-[#1a3645] rounded-2xl p-12 text-white text-center">
            <h2 className="text-3xl font-serif font-bold mb-4">Our Mission</h2>
            <p className="text-xl leading-relaxed max-w-3xl mx-auto text-white/90">
              To provide businesses with premium, eco-friendly packaging solutions that enhance their brand image while
              contributing to a sustainable future. We strive to exceed expectations through quality, innovation, and
              exceptional customer service.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
