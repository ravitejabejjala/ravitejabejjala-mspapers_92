import { Shield, Award, Truck, Clock, Recycle, ThumbsUp } from "lucide-react"

const badges = [
  { icon: Shield, label: "Quality Assured", desc: "ISO Certified" },
  { icon: Award, label: "15+ Years", desc: "Industry Experience" },
  { icon: Truck, label: "Pan-India", desc: "Fast Delivery" },
  { icon: Clock, label: "On-Time", desc: "Delivery Promise" },
  { icon: Recycle, label: "Eco-Friendly", desc: "Sustainable Materials" },
  { icon: ThumbsUp, label: "1000+", desc: "Happy Clients" },
]

export default function TrustBadges() {
  return (
    <section className="border-y border-gray-200 bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {badges.map((badge, index) => (
            <div key={index} className="flex flex-col items-center text-center transition-transform hover:scale-105">
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-[#132635]/10">
                <badge.icon className="h-6 w-6 text-[#f19e1f]" />
              </div>
              <p className="font-semibold text-[#132635]">{badge.label}</p>
              <p className="text-xs text-gray-600">{badge.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
