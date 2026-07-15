"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, Menu, Phone, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ProductsDropdownMenu } from "@/components/products-dropdown-menu"
import TopInfoBar from "@/components/top-info-bar"

const navItems = [
  { label: "Printing Services", href: "/printing-services-hyderabad" },
  { label: "Packaging Solutions", href: "/packaging-solutions" },
  { label: "Industries", href: "/industries/food-beverage" },
  { label: "Resources", href: "/resources" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
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
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MS%20Paper%20Logo-02-Q7lDvifcn1Boaeg9oeNFn68boZrmKV.png"
                alt="MS Paper Products"
                width={290}
                height={70}
                className="h-14 w-auto object-contain sm:h-16"
                priority
              />
            </Link>

            <form action="/products" className="mx-auto hidden w-full max-w-md items-center rounded-md border border-border bg-muted/40 px-4 md:flex">
              <label htmlFor="site-search" className="sr-only">Search products and services</label>
              <input
                id="site-search"
                name="q"
                type="search"
                placeholder="Search products, printing services..."
                className="h-11 min-w-0 flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
              />
              <Search className="size-4 text-muted-foreground" aria-hidden="true" />
            </form>

            <div className="ml-auto hidden shrink-0 items-center gap-3 lg:flex">
              <Button asChild variant="outline" className="h-11 border-primary px-6 text-primary hover:bg-primary hover:text-primary-foreground">
                <a href="tel:+918143330028"><Phone className="size-4" />Call Now</a>
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
                  <Image src="/ms-logo-horizontal.png" alt="MS Paper Products" width={180} height={50} className="h-12 w-auto" />
                </Link>
                <nav className="mt-8 flex flex-col gap-1" aria-label="Mobile navigation">
                  <Link href="/" onClick={() => setIsOpen(false)} className="rounded-md px-3 py-3 font-semibold text-primary hover:bg-muted">Home</Link>
                  <button onClick={() => setProductsOpen(!productsOpen)} className="flex items-center justify-between rounded-md px-3 py-3 text-left font-semibold text-primary hover:bg-muted" aria-expanded={productsOpen}>
                    Products <ChevronDown className={`size-4 transition-transform ${productsOpen ? "rotate-180" : ""}`} />
                  </button>
                  {productsOpen && <div className="flex flex-col border-l border-accent pl-3">{mobileProducts.map((item) => <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)} className="px-3 py-2 text-sm text-muted-foreground hover:text-accent">{item.label}</Link>)}</div>}
                  {navItems.map((item) => <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)} className="rounded-md px-3 py-3 font-semibold text-primary hover:bg-muted">{item.label}</Link>)}
                </nav>
                <div className="mt-6 flex gap-3">
                  <Button asChild variant="outline" className="flex-1"><a href="tel:+918143330028">Call</a></Button>
                  <Button asChild className="flex-1 bg-accent text-accent-foreground"><Link href="/contact" onClick={() => setIsOpen(false)}>Quote</Link></Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="mx-auto flex h-12 max-w-7xl items-center justify-between px-4">
            <nav className="flex h-full items-center gap-8" aria-label="Main navigation">
              <Link href="/" className="flex h-full items-center border-b-2 border-accent text-sm font-semibold text-accent">Home</Link>
              <ProductsDropdownMenu />
              {navItems.map((item) => <Link key={item.href} href={item.href} className="text-sm font-semibold text-primary transition-colors hover:text-accent">{item.label}</Link>)}
            </nav>
            <a href="https://wa.me/918143330028" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-primary hover:text-accent">WhatsApp Us</a>
          </div>
        </div>
      </header>
    </>
  )
}
