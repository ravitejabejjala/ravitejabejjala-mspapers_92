"use client"

import { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, CheckCircle2, Clock3, PackageCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel"

const heroSlides = [
  { id: 1, title: "Premium", subtitle: "Paper Bags", description: "Elevate your brand with our sustainable, high-quality paper bags. Custom designs, eco-friendly materials, and exceptional craftsmanship for retail, boutique, and corporate needs.", image: "/visuals/hero-indian-packaging.png", cta: { text: "Explore Paper Bags", href: "/products/paper-bags" } },
  { id: 2, title: "Durable", subtitle: "Boxes & Cartons", description: "Protect and present your products with our premium carton boxes. From corrugated shipping boxes to elegant gift packaging, we deliver strength and style.", image: "/visuals/service-packaging.png", cta: { text: "View Boxes", href: "/products/boxes-cartons" } },
  { id: 3, title: "Professional", subtitle: "Files & Folders", description: "Organize in style with our premium files and folders. Custom printed presentation folders, document organizers, and corporate stationery for your business needs.", image: "/visuals/service-printing.png", cta: { text: "Browse Files", href: "/products/files-folders" } },
  { id: 4, title: "Premium", subtitle: "Calendars & Diaries", description: "Make every day count with our beautifully crafted calendars and diaries. Perfect for corporate gifting, brand promotion, and personal organization.", image: "/hero/hero-calendars-diaries.jpg", cta: { text: "Shop Calendars", href: "/products/calendars-diaries" } },
  { id: 5, title: "Luxurious", subtitle: "Gold & Silver Foiling", description: "Add elegance and sophistication to your packaging with our premium gold and silver foiling services. Transform ordinary into extraordinary with metallic finishes.", image: "/hero/hero-gold-silver-foiling.jpg", cta: { text: "Our Services", href: "/services" } },
  { id: 6, title: "E-commerce", subtitle: "Shipping Solutions", description: "Waterproof courier covers and thermal barcode label rolls for high-volume ecommerce shipping. Bulk orders, custom printing, and fast delivery.", image: "/banners/ecommerce-covers-hero-banner.png", cta: { text: "Explore Solutions", href: "/products/ecommerce-shipping-solutions" } },
]

const trustItems = [
  { icon: Award, label: "Premium Quality" },
  { icon: Clock3, label: "Fast Turnaround" },
  { icon: PackageCheck, label: "Bulk Order Pricing" },
  { icon: CheckCircle2, label: "On-time Delivery" },
]

export default function HeroCarousel() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) return
    setCurrent(api.selectedScrollSnap())
    const update = () => setCurrent(api.selectedScrollSnap())
    api.on("select", update)
    return () => { api.off("select", update) }
  }, [api])

  useEffect(() => {
    if (!api) return
    const interval = window.setInterval(() => api.scrollNext(), 5500)
    return () => window.clearInterval(interval)
  }, [api])

  const scrollTo = useCallback((index: number) => api?.scrollTo(index), [api])

  return (
    <section className="bg-primary text-primary-foreground">
      <Carousel setApi={setApi} opts={{ loop: true, align: "start" }} className="w-full">
        <CarouselContent className="ml-0">
          {heroSlides.map((slide) => (
            <CarouselItem key={slide.id} className="pl-0">
              <div className="mx-auto flex min-h-[340px] max-w-7xl flex-col lg:flex-row">
                <div className="relative z-10 flex w-full flex-col justify-center px-6 py-8 lg:w-[43%] lg:px-4 lg:pr-12">
                  <p className="mb-3 text-sm font-bold uppercase tracking-wide text-accent">Premium printing & packaging solutions</p>
                  <h1 className="text-balance text-3xl font-bold leading-[1.05] sm:text-4xl">{slide.title} <span className="text-accent">{slide.subtitle}</span></h1>
                  <p className="mt-4 max-w-xl text-sm leading-relaxed text-primary-foreground/75 sm:text-base">{slide.description}</p>
                  <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3">
                    {trustItems.map((item) => <div key={item.label} className="flex items-center gap-2 text-xs font-medium"><item.icon className="size-5 text-accent" /><span>{item.label}</span></div>)}
                  </div>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Button asChild className="bg-accent font-semibold text-accent-foreground hover:bg-accent/90"><Link href={slide.cta.href}>{slide.cta.text}<ArrowRight className="size-4" /></Link></Button>
                    <Button asChild variant="outline" className="border-primary-foreground/50 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary"><a href="https://wa.me/918143330028" target="_blank" rel="noopener noreferrer">WhatsApp Us</a></Button>
                  </div>
                </div>
                <div className="relative min-h-72 w-full overflow-hidden lg:min-h-[340px] lg:w-[57%]">
                  <div className="absolute inset-y-0 left-0 z-10 hidden w-16 -skew-x-12 -translate-x-8 border-r-4 border-accent bg-primary lg:block" />
                  <Image src={slide.image} alt={`${slide.title} ${slide.subtitle}`} fill className="object-cover" priority={slide.id === 1} loading={slide.id === 1 ? "eager" : "lazy"} fetchPriority={slide.id === 1 ? "high" : "auto"} sizes="(max-width: 1024px) 100vw, 57vw" />
                  <div className="absolute inset-0 bg-primary/10" />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {heroSlides.map((slide, index) => <button key={slide.id} onClick={() => scrollTo(index)} className={`size-2.5 rounded-full border border-primary-foreground transition-colors ${current === index ? "bg-accent" : "bg-primary-foreground"}`} aria-label={`Show slide ${index + 1}`} aria-current={current === index ? "true" : undefined} />)}
        </div>
      </Carousel>
    </section>
  )
}
