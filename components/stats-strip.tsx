import { Leaf, Boxes, Zap, CheckCircle } from "lucide-react"

const stats = [
  { icon: Leaf, label: "100% Eco-Friendly", value: "Sustainable" },
  { icon: Boxes, label: "Custom Sizes", value: "Any Dimension" },
  { icon: Zap, label: "Fast Delivery", value: "On Time" },
  { icon: CheckCircle, label: "Bulk Orders", value: "Welcome" },
]

export function StatsStrip() {
  return (
    <div className="bg-gradient-to-r from-[#132635] to-[#1a3645] py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <stat.icon className="w-10 h-10 text-[#f19e1f] mx-auto mb-3" />
              <div className="text-xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
