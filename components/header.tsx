"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, Menu, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import CatalogMegaMenu from "@/components/catalog-mega-menu"
import SiteSearch from "@/components/site-search"
import TopInfoBar from "@/components/top-info-bar"
import { business } from "@/lib/business-info"

const navItems = [
  { label: "Printing", href: "/printing" },
  { label: "Packaging", href: "/packaging" },
  { label: "Industries", href: "/industries" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
]

const mobileProducts = [
  { label: "Paper Bags", href: "/products/paper-bags" },
  { label: "Boxes & Cartons", href: "/products/boxes-cartons" },
  { label: "Courier Covers", href: "/products/ecommerce-courier-covers" },
  { label: "Thermal Paper Rolls", href: "/products/thermal-label-rolls" },
  { label: "Food Packaging", href: "/products/food-packaging" },
  { label: "All Products", href: "/products" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)

  return (
    <>
      <TopInfoBar />
      <header className="sticky top-0 z-50 border-b border-border bg-background shadow-sm">
        <div className="border-b border-border">
          <div className="mx-auto flex min-h-20 max-w-7xl items-center gap-4 px-4 py-3 lg:gap-8">
            <Link href="/" className="shrink-0" aria-label="MS Paper Products home">
              <Image
                src={business.logoHorizontal}
                alt="MS Paper Products"
                width={290}
                height={70}
                className="h-14 w-auto object-contain sm:h-16"
                priority
              />
            </Link>

            <div className="mx-auto hidden w-full max-w-md md:block">
              <SiteSearch />
            </div>

            <div className="ml-auto hidden shrink-0 items-center gap-3 lg:flex">
              <Button asChild variant="outline" className="h-11 border-primary px-6 text-primary hover:bg-primary hover:text-primary-foreground">
                <a href={business.phoneHref}><Phone className="size-4" />Call Now</a>
              </Button>
              <Button asChild className="h-11 bg-accent px-7 font-semibold text-accent-foreground hover:bg-accent/90">
                <Link href="/contact">Get Quote</Link>
              </Button>
            </div>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" aria-label="Open navigation menu"><Menu className="size-6" /></Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[320px] overflow-y-auto bg-background p-6">
                <Link href="/" onClick={() => setIsOpen(false)}>
                  <Image src={business.logoHorizontal} alt="MS Paper Products" width={818} height={183} className="h-12 w-auto object-contain" />
                </Link>
                <div className="mt-6"><SiteSearch /></div>
                <nav className="mt-4 flex flex-col gap-1" aria-label="Mobile navigation">
                  <Link href="/" onClick={() => setIsOpen(false)} className="rounded-md px-3 py-3 font-semibold text-primary hover:bg-muted">Home</Link>
                  <button onClick={() => setProductsOpen(!productsOpen)} className="flex items-center justify-between rounded-md px-3 py-3 text-left font-semibold text-primary hover:bg-muted" aria-expanded={productsOpen}>
                    Products <ChevronDown className={`size-4 transition-transform ${productsOpen ? "rotate-180" : ""}`} />
                  </button>
                  {productsOpen && <div className="flex flex-col border-l border-accent pl-3">{mobileProducts.map((item) => <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)} className="px-3 py-2 text-sm text-muted-foreground hover:text-accent">{item.label}</Link>)}</div>}
                  {navItems.map((item) => <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)} className="rounded-md px-3 py-3 font-semibold text-primary hover:bg-muted">{item.label}</Link>)}
                </nav>
                <div className="mt-6 flex gap-3">
                  <Button asChild variant="outline" className="flex-1"><a href={business.phoneHref}>Call</a></Button>
                  <Button asChild className="flex-1 bg-accent text-accent-foreground"><Link href="/contact" onClick={() => setIsOpen(false)}>Quote</Link></Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="mx-auto flex h-12 max-w-7xl items-center justify-between px-4">
            <nav className="flex h-full items-center gap-8" aria-label="Main navigation">
              <Link href="/" className="flex h-full items-center border-b-2 border-accent px-3 rounded-md bg-accent/10 text-sm font-semibold text-accent">Home</Link>
              <CatalogMegaMenu />
              {navItems.map((item) => <Link key={item.href} href={item.href} className="rounded-md px-3 py-2 text-sm font-semibold text-primary transition-all hover:bg-accent/15 hover:text-accent">{item.label}</Link>)}
            </nav>
            <a href={business.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-primary hover:text-accent">WhatsApp Us</a>
          </div>
        </div>
      </header>
    </>
  )
}
