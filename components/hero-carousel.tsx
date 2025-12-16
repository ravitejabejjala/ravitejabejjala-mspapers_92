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
    title: "Premium Paper Bags",
    subtitle: "for Your Brand",
    description:
      "Elevate your packaging with our sustainable, high-quality paper bags. Custom designs, eco-friendly materials, and exceptional craftsmanship.",
    image: "/hero/hero-premium-bags.jpg",
    cta: { text: "Explore Products", href: "/products" },
  },
  {
    id: 2,
    title: "Luxury Printed",
    subtitle: "Paper Bags",
    description:
      "Make a lasting impression with our premium printed paper bags featuring gold foiling, embossing, and custom branding options.",
    image: "/hero/hero-luxury-printed.jpg",
    cta: { text: "View Collection", href: "/products" },
  },
  {
    id: 3,
    title: "Eco-Friendly",
    subtitle: "Packaging Solutions",
    description:
      "Join the sustainability movement with our 100% recyclable and biodegradable paper bags. Good for your brand, great for the planet.",
    image: "/hero/hero-eco-friendly.jpg",
    cta: { text: "Learn More", href: "/sustainability" },
  },
  {
    id: 4,
    title: "Custom Design",
    subtitle: "& Printing",
    description:
      "From concept to creation, our expert team brings your vision to life with state-of-the-art printing and finishing techniques.",
    image: "/hero/hero-custom-design.jpg",
    cta: { text: "Our Services", href: "/services" },
  },
  {
    id: 5,
    title: "Quality",
    subtitle: "Craftsmanship",
    description:
      "With decades of experience, we deliver paper bags that meet the highest standards of quality and durability for every industry.",
    image: "/hero/hero-craftsmanship.jpg",
    cta: { text: "Contact Us", href: "/contact" },
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
