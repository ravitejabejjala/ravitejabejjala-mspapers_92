"use client"

import { Phone, MessageCircle, Mail } from "lucide-react"

export default function MobileStickyBar() {
  const handlePhoneClick = () => {
    if (typeof window !== "undefined" && typeof (window as any).gtag !== "undefined") {
      ;(window as any).gtag("event", "conversion", {
        send_to: "AW-17803736252/phone_click",
        event_category: "engagement",
        event_label: "Mobile Sticky Bar",
      })
    }
    if (typeof window !== "undefined" && typeof (window as any).fbq !== "undefined") {
      ;(window as any).fbq("track", "Contact", { method: "phone" })
    }
  }

  const handleWhatsAppClick = () => {
    if (typeof window !== "undefined" && typeof (window as any).gtag !== "undefined") {
      ;(window as any).gtag("event", "conversion", {
        send_to: "AW-17803736252/whatsapp_click",
        event_category: "engagement",
        event_label: "Mobile Sticky Bar",
      })
    }
    if (typeof window !== "undefined" && typeof (window as any).fbq !== "undefined") {
      ;(window as any).fbq("track", "Contact", { method: "whatsapp" })
    }
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex md:hidden border-t border-gray-200 bg-white shadow-lg">
      <a
        href="tel:+918143330028"
        onClick={handlePhoneClick}
        className="flex flex-1 flex-col items-center justify-center py-3 text-[#132635] transition-colors hover:bg-gray-50"
        aria-label="Call Now"
      >
        <Phone className="h-5 w-5 mb-1" />
        <span className="text-xs font-medium">Call</span>
      </a>
      <a
        href="https://wa.me/918143330028?text=Hi%2C%20I%27m%20interested%20in%20your%20paper%20products."
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleWhatsAppClick}
        className="flex flex-1 flex-col items-center justify-center py-3 bg-[#25D366] text-white transition-colors hover:bg-[#22c55e]"
        aria-label="WhatsApp"
      >
        <MessageCircle className="h-5 w-5 mb-1" />
        <span className="text-xs font-medium">WhatsApp</span>
      </a>
      <a
        href="/contact"
        className="flex flex-1 flex-col items-center justify-center py-3 bg-[#f19e1f] text-white transition-colors hover:bg-[#d88b1a]"
        aria-label="Enquire Now"
      >
        <Mail className="h-5 w-5 mb-1" />
        <span className="text-xs font-medium">Enquire</span>
      </a>
    </div>
  )
}
