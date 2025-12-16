import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Leaf, Recycle, TreePine, Droplets, Factory, Award } from "lucide-react"

export const metadata = {
  title: "Sustainability | MS Paper Products - Eco-Friendly Paper Bags",
  description:
    "Learn about our commitment to sustainability and eco-friendly manufacturing practices. 100% recyclable and biodegradable paper bags.",
}

const initiatives = [
  {
    icon: Recycle,
    title: "100% Recyclable Materials",
    description: "All our paper bags are made from fully recyclable materials that can be repurposed or composted.",
  },
  {
    icon: TreePine,
    title: "FSC Certified Paper",
    description: "We source our paper from FSC-certified forests, ensuring responsible forestry practices.",
  },
  {
    icon: Droplets,
    title: "Water-Based Inks",
    description: "Our printing uses eco-friendly water-based inks that are safe for the environment.",
  },
  {
    icon: Factory,
    title: "Clean Manufacturing",
    description: "Our production facility follows strict environmental guidelines to minimize waste and emissions.",
  },
  {
    icon: Leaf,
    title: "Biodegradable Products",
    description: "Our bags naturally decompose, leaving no harmful residue in the environment.",
  },
  {
    icon: Award,
    title: "Green Certifications",
    description: "We maintain various environmental certifications to ensure our sustainability standards.",
  },
]

export default function SustainabilityPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#132635] text-white py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Commitment to Sustainability</h1>
            <p className="text-lg md:text-xl text-gray-300">
              Creating eco-friendly packaging solutions for a greener tomorrow.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#132635] mb-6">Packaging with Purpose</h2>
              <p className="text-gray-600 mb-4">
                At MS Paper Products, sustainability isn't just a buzzword—it's at the core of everything we do. We
                believe that beautiful, functional packaging shouldn't come at the cost of our planet.
              </p>
              <p className="text-gray-600 mb-4">
                Every paper bag we produce is designed with the environment in mind, from the raw materials we source to
                our manufacturing processes and the final product that reaches your hands.
              </p>
              <p className="text-gray-600">
                By choosing MS Paper Products, you're making a conscious choice to reduce plastic waste and support
                sustainable business practices.
              </p>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/sustainability-eco-friendly.jpg"
                alt="Eco-friendly paper bags"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Initiatives Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#132635] text-center mb-12">Our Green Initiatives</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <initiative.icon className="w-7 h-7 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#132635] mb-2">{initiative.title}</h3>
                  <p className="text-gray-600 text-sm">{initiative.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 md:py-24 bg-green-700 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Environmental Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">50K+</div>
              <p className="text-green-100">Trees Saved Annually</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">100%</div>
              <p className="text-green-100">Recyclable Products</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">0</div>
              <p className="text-green-100">Plastic in Our Bags</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">75%</div>
              <p className="text-green-100">Waste Reduction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#132635] mb-6">Join Us in Making a Difference</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Switch to sustainable packaging and show your customers that your brand cares about the environment.
          </p>
          <Button asChild size="lg" className="bg-[#f19e1f] hover:bg-[#f19e1f]/90 text-white">
            <Link href="/contact">Get Eco-Friendly Bags</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
