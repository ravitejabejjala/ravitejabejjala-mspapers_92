"use client"

import { Phone, MessageCircle } from "lucide-react"
import { useState, useEffect } from "react"

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handlePhoneClick = () => {
    // Track phone click event
    if (typeof window !== "undefined" && typeof (window as any).gtag !== "undefined") {
      ;(window as any).gtag("event", "phone_click", {
        event_category: "engagement",
        event_label: "Floating CTA",
      })
    }
    if (typeof window !== "undefined" && typeof (window as any).fbq !== "undefined") {
      ;(window as any).fbq("track", "Contact", { method: "phone" })
    }
  }

  const handleWhatsAppClick = () => {
    // Track WhatsApp click event
    if (typeof window !== "undefined" && typeof (window as any).gtag !== "undefined") {
      ;(window as any).gtag("event", "whatsapp_click", {
        event_category: "engagement",
        event_label: "Floating CTA",
      })
    }
    if (typeof window !== "undefined" && typeof (window as any).fbq !== "undefined") {
      ;(window as any).fbq("track", "Contact", { method: "whatsapp" })
    }
  }

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex flex-col gap-3 transition-all duration-300 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
      }`}
    >
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/918143330028?text=Hi%2C%20I%27m%20interested%20in%20your%20paper%20products.%20Please%20share%20more%20details."
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleWhatsAppClick}
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all hover:scale-110 hover:shadow-xl"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
        <span className="absolute right-full mr-3 whitespace-nowrap rounded-lg bg-gray-900 px-3 py-2 text-sm text-white opacity-0 transition-opacity group-hover:opacity-100">
          Chat on WhatsApp
        </span>
      </a>

      {/* Phone Button */}
      <a
        href="tel:+918143330028"
        onClick={handlePhoneClick}
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-[#f19e1f] text-white shadow-lg transition-all hover:scale-110 hover:shadow-xl animate-pulse"
        aria-label="Call Now"
      >
        <Phone className="h-7 w-7" />
        <span className="absolute right-full mr-3 whitespace-nowrap rounded-lg bg-gray-900 px-3 py-2 text-sm text-white opacity-0 transition-opacity group-hover:opacity-100">
          Call Now
        </span>
      </a>
    </div>
  )
}
