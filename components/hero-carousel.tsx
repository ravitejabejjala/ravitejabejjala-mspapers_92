"use client"

import { useEffect, useState, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel"

const heroSlides = [
  {
    id: 1,
    title: "Premium",
    subtitle: "Paper Bags",
    description:
      "Elevate your brand with our sustainable, high-quality paper bags. Custom designs, eco-friendly materials, and exceptional craftsmanship for retail, boutique, and corporate needs.",
    image: "/hero/hero-paper-bags.jpg",
    cta: { text: "Explore Paper Bags", href: "/products/paper-bags" },
  },
  {
    id: 2,
    title: "Durable",
    subtitle: "Boxes & Cartons",
    description:
      "Protect and present your products with our premium carton boxes. From corrugated shipping boxes to elegant gift packaging, we deliver strength and style.",
    image: "/hero/hero-boxes-cartons.jpg",
    cta: { text: "View Boxes", href: "/products/boxes-cartons" },
  },
  {
    id: 3,
    title: "Professional",
    subtitle: "Files & Folders",
    description:
      "Organize in style with our premium files and folders. Custom printed presentation folders, document organizers, and corporate stationery for your business needs.",
    image: "/hero/hero-files-folders.jpg",
    cta: { text: "Browse Files", href: "/products/files-folders" },
  },
  {
    id: 4,
    title: "Premium",
    subtitle: "Calendars & Diaries",
    description:
      "Make every day count with our beautifully crafted calendars and diaries. Perfect for corporate gifting, brand promotion, and personal organization.",
    image: "/hero/hero-calendars-diaries.jpg",
    cta: { text: "Shop Calendars", href: "/products/calendars-diaries" },
  },
  {
    id: 5,
    title: "Luxurious",
    subtitle: "Gold & Silver Foiling",
    description:
      "Add elegance and sophistication to your packaging with our premium gold and silver foiling services. Transform ordinary into extraordinary with metallic finishes.",
    image: "/hero/hero-gold-silver-foiling.jpg",
    cta: { text: "Our Services", href: "/services" },
  },
]

export default function HeroCarousel() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) return

    setCurrent(api.selectedScrollSnap())
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  // Auto-play
  useEffect(() => {
    if (!api) return

    const interval = setInterval(() => {
      api.scrollNext()
    }, 5000)

    return () => clearInterval(interval)
  }, [api])

  const scrollTo = useCallback(
    (index: number) => {
      api?.scrollTo(index)
    },
    [api],
  )

  return (
    <section className="relative">
      <Carousel
        setApi={setApi}
        opts={{
          loop: true,
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {heroSlides.map((slide) => (
            <CarouselItem key={slide.id}>
              <div className="relative min-h-[500px] md:min-h-[600px] lg:min-h-[700px] bg-[#132635]">
                <div className="absolute inset-0">
                  <Image
                    src={slide.image || "/placeholder.svg"}
                    alt={slide.title}
                    fill
                    className="object-cover opacity-40"
                    priority={slide.id === 1}
                  />
                </div>
                <div className="container relative mx-auto flex min-h-[500px] md:min-h-[600px] lg:min-h-[700px] items-center px-4">
                  <div className="max-w-2xl">
                    <h1 className="mb-2 text-4xl font-bold text-white md:text-5xl lg:text-6xl">{slide.title}</h1>
                    <h2 className="mb-6 text-4xl font-bold text-[#f19e1f] md:text-5xl lg:text-6xl">{slide.subtitle}</h2>
                    <p className="mb-8 text-lg text-gray-300 md:text-xl">{slide.description}</p>
                    <div className="flex flex-col gap-4 sm:flex-row">
                      <Link href={slide.cta.href}>
                        <Button size="lg" className="bg-[#f19e1f] text-[#132635] hover:bg-[#f19e1f]/90">
                          {slide.cta.text}
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                      </Link>
                      <Link href="/contact">
                        <Button
                          size="lg"
                          variant="outline"
                          className="border-white text-white hover:bg-white/10 bg-transparent"
                        >
                          Get a Quote
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Arrows */}
        <button
          onClick={() => api?.scrollPrev()}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={() => api?.scrollNext()}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Dot Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-3 w-3 rounded-full transition-all ${
                current === index ? "bg-[#f19e1f] w-8" : "bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </Carousel>
    </section>
  )
}
