"use client"

import { useState } from "react"
import { ProductCard } from "@/components/product-card"
import { ProductDetailModal } from "@/components/product-detail-modal"
import { products, categories, type Product } from "@/lib/products-data"
import { Grid3x3, Sparkles, ShoppingBag, Gift, Utensils, Package, Briefcase, FileText, Cross } from "lucide-react"

// Note: This needs to be exported from a parent server component or moved to layout
// For now, adding it as a comment for reference

const iconMap: Record<string, any> = {
  grid: Grid3x3,
  cross: Cross,
  sparkles: Sparkles,
  "shopping-bag": ShoppingBag,
  gift: Gift,
  utensils: Utensils,
  package: Package,
  briefcase: Briefcase,
  "file-text": FileText,
}

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const filteredProducts =
    selectedCategory === "all" ? products : products.filter((p) => p.category === selectedCategory)

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[300px] bg-gradient-to-r from-[#132635] to-[#1a3645] flex items-center">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h1 className="text-5xl lg:text-6xl font-serif font-bold text-white mb-4">Our Products</h1>
          <p className="text-xl text-white/90">Premium paper bags for every occasion</p>
        </div>
      </section>

      {/* Category Filter Bar */}
      <section className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide">
            {categories.map((category) => {
              const Icon = iconMap[category.icon] || Grid3x3
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                    selectedCategory === category.id
                      ? "bg-[#132635] text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {category.name}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-serif font-bold text-[#132635]">
              {categories.find((c) => c.id === selectedCategory)?.name || "All Products"}
            </h2>
            <p className="text-gray-600 mt-2">{filteredProducts.length} products available</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} onViewDetails={handleViewDetails} />
            ))}
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductDetailModal product={selectedProduct} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      )}
    </main>
  )
}
