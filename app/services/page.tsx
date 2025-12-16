import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ClipboardCheck, Palette, Factory, Truck } from "lucide-react"

export const metadata = {
  title: "Premium Finishing Services | MS Paper Products",
  description:
    "Explore our premium finishing services including Gold & Silver Foiling, Precision Punching, and Gloss & Matte Lamination for exceptional paper bag packaging.",
}

const services = [
  {
    name: "Gold & Silver Foiling",
    description:
      "Add a touch of luxury to your paper bags with our premium gold and silver foil stamping. Perfect for high-end retail, jewelry, and fashion brands seeking an elegant, eye-catching finish.",
    image: "/services/gold-silver-foiling.jpg",
  },
  {
    name: "Precision Punching",
    description:
      "Our state-of-the-art die-cutting and punching services create clean, precise handles and custom shapes. From twisted rope handles to ribbon cutouts, we deliver perfect results every time.",
    image: "/services/precision-punching.jpg",
  },
  {
    name: "Gloss & Matte Lamination",
    description:
      "Protect and enhance your paper bags with our professional lamination services. Choose from high-gloss for a vibrant shine or soft-touch matte for a sophisticated, premium feel.",
    image: "/services/gloss-matte-lamination.jpg",
  },
]

const workflowSteps = [
  { icon: ClipboardCheck, title: "Consultation", desc: "Discuss your requirements and get expert advice." },
  { icon: Palette, title: "Design", desc: "Our team creates custom designs for your approval." },
  { icon: Factory, title: "Production", desc: "State-of-the-art manufacturing with quality checks." },
  { icon: Truck, title: "Delivery", desc: "Timely delivery to your doorstep." },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#132635] text-white py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Premium Finishing Services</h1>
            <p className="text-lg md:text-xl text-gray-300">
              Elevate your packaging with our expert finishing techniques.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Paragraph */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <p className="text-lg text-gray-600 max-w-4xl mx-auto text-center">
            At MS Paper Products, we go beyond basic paper bag manufacturing. Our in-house finishing services are
            designed to add that extra layer of elegance, durability, and brand impact to your packaging. Whether you're
            looking for a luxurious shimmer or a refined matte texture, our expert team ensures every detail reflects
            your brand's excellence.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-none shadow-lg overflow-hidden group hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#132635] mb-3">{service.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#132635] text-center mb-12">Our Workflow</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {workflowSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#f19e1f] rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-[#132635] mb-2">0{index + 1}</div>
                <h3 className="text-lg font-semibold text-[#132635] mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[#f19e1f]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Want to add a premium finish to your packaging?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Get in touch with our team to discuss your finishing requirements.
          </p>
          <Button asChild size="lg" className="bg-[#132635] hover:bg-[#132635]/90 text-white">
            <Link href="/contact">Enquire Now</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
