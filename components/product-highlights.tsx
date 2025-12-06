import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const products = [
  {
    title: "Luxury Printed Paper Bags",
    description: "Premium quality bags with custom printing, foiling, and lamination for high-end retail and gifting.",
    image: "/luxury-printed-paper-bag-with-gold-foiling-and-nav.jpg",
    slug: "luxury-printed-bags",
  },
  {
    title: "Kraft Paper Bags",
    description: "Eco-friendly kraft bags perfect for organic products, cafes, and sustainable brands.",
    image: "/natural-kraft-paper-bags-with-twisted-handles--eco.jpg",
    slug: "kraft-paper-bags",
  },
  {
    title: "Wedding & Gifting Bags",
    description: "Elegant gift bags designed for weddings, special occasions, and premium gift packaging.",
    image: "/elegant-wedding-gift-bags-in-white-and-gold--luxur.jpg",
    slug: "wedding-gift-bags",
  },
  {
    title: "Food-Grade Paper Bags",
    description: "Safe, hygienic bags for bakeries, restaurants, and food delivery with grease-resistant options.",
    image: "/food-grade-paper-bags-for-bakery-and-restaurant--c.jpg",
    slug: "food-grade-bags",
  },
]

export function ProductHighlights() {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#132635] mb-4">Our Product Range</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our premium collection of paper bags designed for every need
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#132635] mb-3">{product.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{product.description}</p>
                <Button asChild variant="link" className="text-[#f19e1f] hover:text-[#d88a1a] p-0 font-semibold">
                  <Link href="/products" className="flex items-center gap-2">
                    View More <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
