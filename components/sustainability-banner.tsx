import { Leaf } from "lucide-react"

export function SustainabilityBanner() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-[#132635] to-[#1a3645] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Leaf className="w-12 h-12 text-[#f19e1f]" />
              <h2 className="text-4xl lg:text-5xl font-serif font-bold">Eco-Friendly. Recyclable. Biodegradable.</h2>
            </div>
            <p className="text-xl leading-relaxed text-white/90 mb-6">
              Our bags are made from recycled paper, biodegradable materials, and eco-friendly components that support a
              cleaner planet.
            </p>
            <ul className="space-y-3">
              {[
                "100% Recyclable Materials",
                "Biodegradable Components",
                "Low Carbon Footprint",
                "Sustainable Manufacturing",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#f19e1f] rounded-full" />
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-[400px] rounded-2xl overflow-hidden">
            <img src="/green-eco-friendly-paper-bags-with-recycling-symbo.jpg" alt="Eco-friendly packaging" className="object-cover w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  )
}
