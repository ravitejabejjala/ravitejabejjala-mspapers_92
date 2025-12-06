"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const slides = [
  {
    title: "MS Paper Products",
    subtitle: "Hyderabad's Premium & Sustainable Paper Packaging Partner",
    description:
      "Customized, durable, eco-friendly packaging crafted for retail, gifting, corporate, and food industries.",
    image: "/hero-banner-ms-paper-products.jpg",
  },
  {
    title: "Eco-Friendly Excellence",
    subtitle: "100% Recyclable & Biodegradable",
    description: "Sustainable packaging solutions that support a cleaner planet without compromising on quality.",
    image: "/hero-sustainability.jpg",
  },
  {
    title: "Custom Designs",
    subtitle: "Tailored to Your Brand",
    description: "Premium printing, foiling, and finishing services to make your packaging stand out.",
    image: "/hero-custom-designs.jpg",
  },
]

export function HeroCarousel() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const next = () => setCurrent((prev) => (prev + 1) % slides.length)
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#132635]">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#132635]/90 to-[#132635]/40 z-10" />
          <img
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            loading={index === 0 ? "eager" : "lazy"}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="max-w-7xl mx-auto px-6 w-full">
              <div className="max-w-3xl">
                <h1 className="text-5xl lg:text-7xl font-serif font-bold text-white mb-4 animate-fade-in">
                  {slide.title}
                </h1>
                <p className="text-2xl lg:text-3xl text-[#f19e1f] font-semibold mb-6 animate-fade-in">
                  {slide.subtitle}
                </p>
                <p className="text-xl text-white/90 mb-8 leading-relaxed animate-fade-in">{slide.description}</p>
                <div className="flex flex-wrap gap-4 animate-fade-in">
                  <Button
                    asChild
                    size="lg"
                    className="bg-[#f19e1f] hover:bg-[#d88a1a] text-white px-8 py-6 text-lg transition-all hover:scale-105"
                  >
                    <Link href="/products">Explore Products</Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-[#132635] px-8 py-6 text-lg bg-transparent transition-all hover:scale-105"
                  >
                    <Link href="/contact">Get a Quote</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prev}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 rounded-full transition-all ${index === current ? "bg-[#f19e1f] w-8" : "bg-white/50 w-3"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
