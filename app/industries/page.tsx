import Link from "next/link"
import { Building2, Store, HeartPulse, Factory, GraduationCap, ShoppingBag, BriefcaseBusiness, Truck, Utensils, Home, Landmark, Beaker } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Industries We Serve | MS Paper Products Hyderabad",
  description: "MS Paper Products supplies custom packaging and printing to retail, pharma, food, e-commerce, corporate, real estate, education, and more industries across India.",
  alternates: { canonical: "https://mspaperproducts.com/industries" },
}

const industries = [
  { name: "Food & Beverage", icon: Utensils, href: "/industries/food-beverage", desc: "Food-safe packaging, grease-resistant bags, and printed food cartons." },
  { name: "Pharmaceuticals", icon: Beaker, href: "/industries/pharmaceuticals", desc: "Tamper-evident medicine boxes and compliant packaging solutions." },
  { name: "E-commerce", icon: Truck, href: "/industries/ecommerce", desc: "Courier covers, shipping bags, and fulfillment packaging at scale." },
  { name: "Retail & Fashion", icon: Store, href: "/industries/retail-fashion", desc: "Branded paper bags, gift boxes, and premium retail packaging." },
  { name: "Healthcare", icon: HeartPulse, href: "/industries/healthcare", desc: "Sterile-ready packaging and hospital supply solutions." },
  { name: "Education", icon: GraduationCap, href: "/industries/education", desc: "Stationery, print materials, and institutional packaging." },
  { name: "Real Estate", icon: Home, href: "/industries/real-estate", desc: "Corporate brochures, folders, and property marketing print." },
  { name: "Corporate", icon: BriefcaseBusiness, href: "/industries/corporate", desc: "Premium stationery, letterheads, and branded office supplies." },
  { name: "Logistics", icon: Factory, href: "/industries/logistics", desc: "Heavy-duty corrugated boxes and industrial packaging." },
  { name: "Hospitality", icon: Landmark, href: "/industries/hospitality", desc: "Menus, packaging, and branded materials for hotels and F&B." },
  { name: "Manufacturing", icon: Building2, href: "/industries/manufacturing", desc: "Bulk industrial packaging, labels, and component boxes." },
  { name: "FMCG", icon: ShoppingBag, href: "/industries/retail-fashion", desc: "High-speed packaging lines for consumer goods and FMCG brands." },
]

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="text-4xl font-bold">Industries We Serve</h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/75">Packaging and printing solutions engineered for every sector — retail, pharma, food, e-commerce, and beyond.</p>
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {industries.map((ind) => (
              <Link key={ind.name} href={ind.href} className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-accent/60 hover:shadow-lg">
                <div className="flex size-12 items-center justify-center rounded-full bg-accent/10 transition-colors group-hover:bg-accent/20">
                  <ind.icon className="size-6 text-accent" />
                </div>
                <h2 className="mt-4 text-lg font-bold text-primary">{ind.name}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{ind.desc}</p>
                <span className="mt-4 inline-block text-xs font-semibold text-accent transition-all group-hover:underline">Explore solutions →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
