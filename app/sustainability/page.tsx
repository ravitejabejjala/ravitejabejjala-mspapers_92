import type { Metadata } from "next"
import { Leaf, Recycle, Trees, Droplets, Droplet, Zap, Scissors, Award, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Sustainability & Eco-Friendly Packaging - 100% Biodegradable | MS Paper Products",
  description:
    "100% biodegradable and recyclable paper packaging. FSC certified, using recycled kraft paper, vegetable inks, eco-friendly adhesives. 40% reduced carbon emissions. Zero plastic content. Sustainable manufacturing in Hyderabad.",
  keywords: [
    "biodegradable packaging India",
    "eco friendly paper bags",
    "FSC certified packaging",
    "sustainable packaging manufacturer",
    "recyclable paper bags",
    "green packaging solutions",
    "zero plastic packaging",
    "carbon neutral packaging",
  ],
  openGraph: {
    title: "Sustainability - 100% Biodegradable Packaging | MS Paper Products",
    description:
      "100% biodegradable and recyclable paper packaging. FSC certified. Zero plastic. Sustainable manufacturing.",
    url: "https://mspaperproducts.com/sustainability",
  },
  alternates: {
    canonical: "https://mspaperproducts.com/sustainability",
  },
}

const initiatives = [
  {
    icon: Recycle,
    title: "Made from Recycled Paper",
    description:
      "We use high-quality recycled paper materials, reducing waste and conserving natural resources while maintaining premium quality.",
  },
  {
    icon: Leaf,
    title: "Biodegradable Materials",
    description:
      "All our products are 100% biodegradable, breaking down naturally without harming the environment or leaving toxic residues.",
  },
  {
    icon: Trees,
    title: "Eco-Friendly Twisted Handles",
    description:
      "Our paper twisted handles are sturdy, comfortable, and completely eco-friendly, providing a sustainable alternative to plastic.",
  },
  {
    icon: Droplets,
    title: "Low Carbon Footprint",
    description:
      "Our manufacturing process is optimized to minimize energy consumption and reduce carbon emissions throughout production.",
  },
]

const ecoMaterials = [
  {
    icon: Recycle,
    title: "Recycled Kraft Paper",
    description: "100% post-consumer recycled kraft paper with natural brown finish",
    image: "/recycled-kraft-paper-texture.jpg",
  },
  {
    icon: Leaf,
    title: "Biodegradable Adhesives",
    description: "Plant-based adhesives that decompose naturally without toxic residue",
    image: "/eco-friendly-adhesive.jpg",
  },
  {
    icon: Trees,
    title: "Eco-Friendly Twisted Handles",
    description: "Durable paper twisted handles made from sustainable sources",
    image: "/paper-twisted-handles.jpg",
  },
  {
    icon: Droplet,
    title: "Vegetable Ink Printing",
    description: "Non-toxic vegetable-based inks for safe, eco-conscious printing",
    image: "/vegetable-ink-printing.jpg",
  },
]

const wasteReduction = [
  {
    icon: Recycle,
    title: "Paper Recycling",
    description:
      "We recycle all paper waste and off-cuts back into production, achieving near-zero paper waste in our facility.",
  },
  {
    icon: Droplet,
    title: "Water-Based Inks",
    description:
      "Using water-based inks instead of solvent-based alternatives reduces harmful chemical emissions significantly.",
  },
  {
    icon: Zap,
    title: "Energy-Efficient Machines",
    description: "Modern machinery optimized for lower power consumption, reducing our carbon footprint by 40%.",
  },
  {
    icon: Scissors,
    title: "Low-Waste Cutting",
    description: "Precision die-cutting technology minimizes material waste and maximizes yield from each paper sheet.",
  },
]

const certifications = [
  {
    icon: Award,
    title: "ISO Certification",
    description: "Quality management system certified to international standards",
    status: "In Progress",
  },
  {
    icon: CheckCircle2,
    title: "FSC Certified",
    description: "Forest Stewardship Council certified for responsible forestry",
    status: "Compliant",
  },
  {
    icon: Leaf,
    title: "Eco-Safe Standards",
    description: "Meeting all environmental safety and sustainability guidelines",
    status: "Certified",
  },
]

export default function SustainabilityPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-r from-[#132635] to-[#1a3645] flex items-center">
        <div className="absolute inset-0 opacity-20">
          <img src="/sustainability-eco-friendly-packaging-hero.jpg" alt="" className="object-cover w-full h-full" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h1 className="text-5xl lg:text-6xl font-serif font-bold text-white mb-4">Our Green Initiative</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Committed to sustainable packaging that protects your products and our planet
          </p>
        </div>
      </section>

      {/* Main Initiatives */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-[#132635] mb-4">
              Eco-Friendly. Recyclable. Biodegradable.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              At MS Paper Products, sustainability isn't just a buzzword—it's our commitment to future generations.
              Every bag we produce is designed with environmental responsibility in mind.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {initiatives.map((initiative, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <initiative.icon className="w-12 h-12 text-[#f19e1f] mb-4" />
                <h3 className="text-2xl font-semibold text-[#132635] mb-4">{initiative.title}</h3>
                <p className="text-gray-600 leading-relaxed">{initiative.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eco Material Types */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-[#132635] mb-4">Eco-Friendly Materials We Use</h2>
            <p className="text-gray-600 text-lg">Carefully selected sustainable materials for premium packaging</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ecoMaterials.map((material, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50">
                  <img
                    src={material.image || "/placeholder.svg"}
                    alt={material.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full">
                    <material.icon className="w-6 h-6 text-[#f19e1f]" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-[#132635] mb-2">{material.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{material.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waste Reduction Process */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-[#132635] mb-4">Waste Reduction Process</h2>
            <p className="text-gray-600 text-lg">Our commitment to minimizing environmental impact at every stage</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {wasteReduction.map((process, index) => (
              <div
                key={index}
                className="flex gap-6 p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#132635] to-[#1a3645] rounded-xl flex items-center justify-center">
                    <process.icon className="w-8 h-8 text-[#f19e1f]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#132635] mb-3">{process.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{process.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Infographic Visual */}
          <div className="mt-16 relative h-[300px] bg-gradient-to-r from-[#132635]/5 to-[#f19e1f]/5 rounded-2xl overflow-hidden flex items-center justify-center">
            <div className="text-center px-6">
              <div className="text-6xl font-bold text-[#132635] mb-2">40%</div>
              <div className="text-xl text-gray-700 font-medium">Reduction in Carbon Emissions</div>
              <div className="text-gray-600 mt-2">Through our sustainable manufacturing practices</div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Compliance */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-[#132635] mb-4">Certifications & Compliance</h2>
            <p className="text-gray-600 text-lg">Meeting international standards for quality and sustainability</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[#132635] to-[#1a3645] rounded-full flex items-center justify-center mx-auto mb-6">
                  <cert.icon className="w-10 h-10 text-[#f19e1f]" />
                </div>
                <h3 className="text-xl font-semibold text-[#132635] mb-3">{cert.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{cert.description}</p>
                <div
                  className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
                    cert.status === "Certified"
                      ? "bg-green-100 text-green-700"
                      : cert.status === "Compliant"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {cert.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Sustainable */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/sustainable-packaging-nature.jpg"
                alt="Sustainable packaging"
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <h2 className="text-3xl font-serif font-bold text-[#132635] mb-6">Why Choose Sustainable Packaging?</h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Traditional plastic bags take hundreds of years to decompose, polluting our oceans and harming
                  wildlife. Our paper bags offer a sustainable alternative that doesn't compromise on quality or
                  aesthetics.
                </p>
                <p>
                  By choosing MS Paper Products, you're not just getting premium packaging—you're making a statement
                  about your brand's values and commitment to environmental stewardship.
                </p>
                <p>Join us in creating a cleaner, greener future, one paper bag at a time.</p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-6 bg-gradient-to-br from-[#132635]/5 to-transparent rounded-xl">
                  <div className="text-3xl font-bold text-[#132635]">100%</div>
                  <div className="text-sm text-gray-600 mt-1">Biodegradable</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-[#f19e1f]/5 to-transparent rounded-xl">
                  <div className="text-3xl font-bold text-[#132635]">0%</div>
                  <div className="text-sm text-gray-600 mt-1">Plastic Content</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
