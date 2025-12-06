import { Sparkles, Award, Lightbulb } from "lucide-react"

const pillars = [
  {
    icon: Sparkles,
    title: "Adaptability",
    description: "Custom designs, colors, and sizes based on your requirements",
  },
  {
    icon: Award,
    title: "Quality",
    description: "Durable, stylish, and reliable packaging for your products",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Continuously improving materials and finishing processes",
  },
]

export function ValuePillars() {
  return (
    <div className="grid sm:grid-cols-3 gap-6 mt-8">
      {pillars.map((pillar, index) => (
        <div key={index} className="text-center group cursor-default transition-transform hover:scale-105">
          <pillar.icon className="w-8 h-8 text-[#f19e1f] mx-auto mb-3 transition-transform group-hover:rotate-6 group-hover:scale-110" />
          <h3 className="font-semibold text-[#132635] mb-2">{pillar.title}</h3>
          <p className="text-sm text-gray-600">{pillar.description}</p>
        </div>
      ))}
    </div>
  )
}
