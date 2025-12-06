"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Eye } from "lucide-react"
import type { Product } from "@/lib/products-data"

interface ProductCardProps {
  product: Product
  onViewDetails?: (product: Product) => void
}

export function ProductCard({ product, onViewDetails }: ProductCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2">
      <div className="relative h-80 overflow-hidden">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.title}
          loading="lazy"
          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-[#132635] mb-2">{product.title}</h3>
        <p className="text-sm text-[#f19e1f] mb-3">{product.useCase}</p>
        <p className="text-gray-600 mb-6 leading-relaxed line-clamp-2">{product.description}</p>
        <div className="flex gap-2">
          {onViewDetails && (
            <Button
              onClick={() => onViewDetails(product)}
              variant="outline"
              className="flex-1 border-[#132635] text-[#132635] hover:bg-[#132635] hover:text-white transition-all hover:scale-105"
            >
              <Eye className="w-4 h-4 mr-2" />
              View Details
            </Button>
          )}
          <Button className="flex-1 bg-[#f19e1f] hover:bg-[#d88a1a] text-white transition-all hover:scale-105">
            Enquire <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  )
}
