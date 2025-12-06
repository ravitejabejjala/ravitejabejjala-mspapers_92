"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppWidget() {
  return (
    <a
      href="https://wa.me/918143330028?text=Hi%2C%20I%27m%20interested%20in%20MS%20Paper%20Products.%20Please%20share%20more%20details."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BD5A] text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 group animate-pulse-slow"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-[#132635] text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
        Chat with us!
      </span>
    </a>
  )
}
