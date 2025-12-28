"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

interface ProductInquiryButtonProps {
  productName: string
  categoryName?: string
}

export default function ProductInquiryButton({ productName, categoryName }: ProductInquiryButtonProps) {
  const handleInquiry = () => {
    const message = encodeURIComponent(
      `Hi, I'm interested in ${productName}${categoryName ? ` from your ${categoryName} collection` : ""}. Please share pricing and details.`,
    )

    // Track inquiry click
    if (typeof window !== "undefined" && typeof (window as any).gtag !== "undefined") {
      ;(window as any).gtag("event", "product_inquiry", {
        event_category: "engagement",
        event_label: productName,
        product_name: productName,
        category: categoryName,
      })
    }
    if (typeof window !== "undefined" && typeof (window as any).fbq !== "undefined") {
      ;(window as any).fbq("track", "InitiateCheckout", {
        content_name: productName,
        content_category: categoryName,
      })
    }

    window.open(`https://wa.me/918143330028?text=${message}`, "_blank")
  }

  return (
    <Button onClick={handleInquiry} size="sm" className="w-full bg-[#25D366] text-white hover:bg-[#25D366]/90 mt-3">
      <MessageCircle className="mr-2 h-4 w-4" />
      Quick Inquiry
    </Button>
  )
}
