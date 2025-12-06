"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle } from "lucide-react"
import type { Product } from "@/lib/products-data"
import Link from "next/link"

interface ProductDetailModalProps {
  product: Product
  isOpen: boolean
  onClose: () => void
}

export function ProductDetailModal({ product, isOpen, onClose }: ProductDetailModalProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const allImages = [product.image, ...(product.gallery || [])]

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-serif text-[#132635]">{product.title}</DialogTitle>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-8 mt-6">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative h-[400px] bg-gray-100 rounded-xl overflow-hidden">
              <img
                src={allImages[selectedImage] || "/placeholder.svg"}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnail Gallery */}
            {allImages.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {allImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`relative h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === idx ? "border-[#f19e1f]" : "border-gray-200"
                    }`}
                  >
                    <img
                      src={img || "/placeholder.svg"}
                      alt={`${product.title} ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Use Case</h3>
              <p className="text-gray-700 leading-relaxed">{product.useCase}</p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Description</h3>
              <p className="text-gray-700 leading-relaxed">{product.description}</p>
            </div>

            {/* Specifications */}
            {product.specifications && (
              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Specifications</h3>
                <div className="bg-gray-50 rounded-lg p-4 space-y-2 text-sm">
                  {product.specifications.material && (
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="font-medium text-gray-600">Material:</span>
                      <span className="text-gray-800">{product.specifications.material}</span>
                    </div>
                  )}
                  {product.specifications.gsm && (
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="font-medium text-gray-600">GSM:</span>
                      <span className="text-gray-800">{product.specifications.gsm}</span>
                    </div>
                  )}
                  {product.specifications.sizes && (
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="font-medium text-gray-600">Sizes:</span>
                      <span className="text-gray-800">{product.specifications.sizes.join(", ")}</span>
                    </div>
                  )}
                  {product.specifications.moq && (
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="font-medium text-gray-600">MOQ:</span>
                      <span className="text-gray-800">{product.specifications.moq}</span>
                    </div>
                  )}
                  {product.specifications.printing && (
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="font-medium text-gray-600">Printing:</span>
                      <span className="text-gray-800">{product.specifications.printing.join(", ")}</span>
                    </div>
                  )}
                  {product.specifications.finishing && (
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-600">Finishing:</span>
                      <span className="text-gray-800">{product.specifications.finishing.join(", ")}</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Features */}
            {product.features && product.features.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700">
                      <div className="w-1.5 h-1.5 bg-[#f19e1f] rounded-full mt-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* CTAs */}
            <div className="space-y-3 pt-4">
              <Button asChild className="w-full bg-[#f19e1f] hover:bg-[#d88a1a] text-white">
                <Link href="/contact" className="flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4" />
                  Request Quote
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="w-full border-[#132635] text-[#132635] hover:bg-[#132635] hover:text-white bg-transparent"
              >
                <a
                  href={`https://wa.me/919876543210?text=Hi, I want more info about ${product.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  Enquire on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
