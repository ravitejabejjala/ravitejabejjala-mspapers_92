import type { Metadata } from "next"
import { Printer, Sparkles, Circle, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Printing & Finishing Services - Gold Foiling, Lamination, UV Printing | MS Paper Products",
  description:
    "Professional printing and finishing services: Flexo printing, offset printing, UV printing, digital printing. Gold/silver foiling, matte/gloss lamination, spot UV, die-cutting. Custom packaging design in Hyderabad.",
  keywords: [
    "gold foiling Hyderabad",
    "lamination services",
    "UV printing",
    "offset printing paper bags",
    "custom printing Hyderabad",
    "die cutting services",
    "spot UV coating",
    "packaging design services",
  ],
  openGraph: {
    title: "Printing & Finishing Services - MS Paper Products",
    description:
      "Professional printing and finishing: Gold foiling, lamination, UV printing, die-cutting. Custom packaging design.",
    url: "https://mspaperproducts.com/services",
  },
  alternates: {
    canonical: "https://mspaperproducts.com/services",
  },
}

const printingTechniques = [
  {
    icon: Printer,
    title: "Flexographic Printing",
    description: "High-speed printing for large volumes with consistent quality",
    benefit: "Cost-effective for bulk orders",
    image: "/flexographic-printing-machine.jpg",
  },
  {
    icon: Printer,
    title: "Offset Printing",
    description: "Superior quality printing for detailed designs and vibrant colors",
    benefit: "Best color accuracy",
    image: "/offset-printing-paper-bags.jpg",
  },
  {
    icon: Sparkles,
    title: "UV Printing",
    description: "Instant-dry printing with enhanced durability and gloss finish",
    benefit: "Premium finish & durability",
    image: "/uv-printing-glossy-finish.jpg",
  },
  {
    icon: Printer,
    title: "Digital Printing",
    description: "Perfect for small batches and quick turnaround with customization",
    benefit: "Fast turnaround time",
    image: "/digital-printing-custom-bags.jpg",
  },
]

const finishingOptions = [
  {
    title: "Gold Foiling",
    description: "Luxurious metallic gold finish for premium branding",
    image: "/gold-foiling-paper-bag.jpg",
  },
  {
    title: "Silver Foiling",
    description: "Elegant silver metallic finish for sophisticated appeal",
    image: "/silver-foiling-packaging.jpg",
  },
  {
    title: "Spot UV",
    description: "Raised glossy coating for selected areas creating depth",
    image: "/spot-uv-coating-effect.jpg",
  },
  {
    title: "Matte Lamination",
    description: "Soft-touch matte finish for elegant and premium feel",
    image: "/matte-lamination-paper-bag.jpg",
  },
  {
    title: "Gloss Lamination",
    description: "High-shine glossy coating for vibrant color enhancement",
    image: "/gloss-lamination-vibrant-bag.jpg",
  },
  {
    title: "Die-Cut Punching",
    description: "Custom-shaped cuts and handle punching for unique designs",
    image: "/die-cut-handle-design.jpg",
  },
]

const workflow = [
  {
    icon: Circle,
    title: "Requirement Discussion",
    description: "We understand your needs, product specifications, and quantity requirements",
  },
  {
    icon: Sparkles,
    title: "Design & Mockups",
    description: "Our team creates custom designs and provides digital mockups for approval",
  },
  {
    icon: Printer,
    title: "Printing & Production",
    description: "High-quality printing and manufacturing with strict quality control",
  },
  {
    icon: CheckCircle2,
    title: "QC + Delivery",
    description: "Final quality check and timely delivery to your location",
  },
]

export default function ServicesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-[300px] bg-gradient-to-r from-[#132635] to-[#1a3645] flex items-center">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h1 className="text-5xl lg:text-6xl font-serif font-bold text-white mb-4">Printing & Services</h1>
          <p className="text-xl text-white/90">Premium finishing options to make your packaging extraordinary</p>
        </div>
      </section>

      {/* Printing Techniques */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-[#132635] mb-4">Printing Techniques</h2>
            <p className="text-gray-600 text-lg">State-of-the-art printing technology for superior results</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {printingTechniques.map((technique, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-start gap-6 mb-6">
                  <div className="bg-gradient-to-br from-[#132635] to-[#1a3645] w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <technique.icon className="w-8 h-8 text-[#f19e1f]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-[#132635] mb-2">{technique.title}</h3>
                    <p className="text-sm text-[#f19e1f] font-medium mb-3">{technique.benefit}</p>
                    <p className="text-gray-600 leading-relaxed">{technique.description}</p>
                  </div>
                </div>
                <div className="relative h-48 rounded-xl overflow-hidden">
                  <img
                    src={technique.image || "/placeholder.svg"}
                    alt={technique.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Finishing Options */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-[#132635] mb-4">Finishing Options</h2>
            <p className="text-gray-600 text-lg">Premium finishes to elevate your packaging</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {finishingOptions.map((option, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={option.image || "/placeholder.svg"}
                    alt={option.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#132635] mb-2">{option.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{option.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-[#132635] mb-4">Our Workflow</h2>
            <p className="text-gray-600 text-lg">From concept to delivery, we ensure excellence at every step</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workflow.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#132635] to-[#1a3645] rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                    <step.icon className="w-10 h-10 text-[#f19e1f]" />
                  </div>
                  <div className="absolute -top-4 -right-4 bg-[#f19e1f] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-[#132635] mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
