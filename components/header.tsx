"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, Phone, ChevronDown, ShoppingBag, Package, FolderOpen, Calendar, Coffee, Pill } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Sustainability", href: "/sustainability" },
  { name: "Contact", href: "/contact" },
]

const productCategories = [
  {
    name: "Paper Bags",
    href: "/products",
    icon: ShoppingBag,
    subcategories: [
      { name: "Kraft Paper Bags", href: "/products/kraft-paper-bags" },
      { name: "Luxury Printed Paper Bags", href: "/products/printed-paper-bags" },
      { name: "Wedding & Gifting Bags", href: "/products/theme-gift-bags" },
    ],
  },
  {
    name: "Food & Beverage Packaging",
    href: "/products/food-beverage-packaging",
    icon: Coffee,
    subcategories: [
      { name: "Paper Cups", href: "/products/paper-cups" },
      { name: "Paper Food Boxes", href: "/products/paper-food-boxes" },
      { name: "Paper Trays", href: "/products/paper-trays" },
      { name: "Paper Bowls & Tubs", href: "/products/paper-bowls-tubs" },
      { name: "Buckets & Containers", href: "/products/buckets-containers" },
      { name: "Cup Holders & Accessories", href: "/products/cup-holders-accessories" },
    ],
  },
  {
    name: "Boxes & Cartons",
    href: "/products/boxes-cartons",
    icon: Package,
    subcategories: [
      { name: "Paper Boxes", href: "/products/paper-boxes" },
      { name: "Gift Boxes", href: "/products/gift-boxes" },
      { name: "Carton Boxes", href: "/products/carton-boxes" },
      { name: "Corrugated Carton Boxes", href: "/products/corrugated-carton-boxes" },
      { name: "Industrial Packing Boxes", href: "/products/industrial-packing-boxes" },
    ],
  },
  {
    name: "Pharma & Medical Packaging",
    href: "/products/pharma-medical-packaging",
    icon: Pill,
    subcategories: [
      { name: "Medicine Boxes", href: "/products/medicine-boxes" },
      { name: "Pharmaceutical Cartons", href: "/products/pharmaceutical-packaging-boxes" },
      { name: "Printed Medical Packaging", href: "/products/printed-medical-packaging" },
    ],
  },
  {
    name: "Files & Folders",
    href: "/products/files-folders",
    icon: FolderOpen,
    subcategories: [
      { name: "Hospital / Medical Folders", href: "/products/hospital-medical-file-folders" },
      { name: "Office File Folders", href: "/products/office-file-folders" },
      { name: "Corporate File Folders", href: "/products/corporate-file-folders" },
      { name: "Document & Report Folders", href: "/products/document-report-folders" },
    ],
  },
  {
    name: "Calendars & Diaries",
    href: "/products/calendars-diaries",
    icon: Calendar,
    subcategories: [
      { name: "Table Calendars", href: "/products/table-calendars" },
      { name: "Wall Calendars", href: "/products/wall-calendars" },
      { name: "Corporate Diaries", href: "/products/corporate-diaries" },
      { name: "Promotional Diaries", href: "/products/promotional-diaries" },
    ],
  },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-[#132635] shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/ms-logo-horizontal.png"
            alt="MS Paper Products"
            width={200}
            height={56}
            className="h-10 w-auto sm:h-12 md:h-14"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex lg:items-center lg:gap-6">
          <Link href="/" className="text-sm font-medium text-white transition-colors hover:text-[#f19e1f]">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium text-white transition-colors hover:text-[#f19e1f]">
            About
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setIsProductsOpen(true)}
            onMouseLeave={() => setIsProductsOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm font-medium text-white transition-colors hover:text-[#f19e1f]">
              Products
              <ChevronDown className={`h-4 w-4 transition-transform ${isProductsOpen ? "rotate-180" : ""}`} />
            </button>

            {isProductsOpen && (
              <div className="absolute left-0 top-full pt-2">
                <div className="w-[700px] rounded-lg border border-[#f19e1f]/20 bg-[#132635] p-4 shadow-xl">
                  <div className="grid grid-cols-3 gap-4">
                    {productCategories.map((category) => (
                      <div key={category.name} className="space-y-2">
                        <Link
                          href={category.href}
                          className="flex items-center gap-2 text-sm font-semibold text-[#f19e1f] hover:underline"
                        >
                          <category.icon className="h-4 w-4" />
                          {category.name}
                        </Link>
                        <ul className="space-y-1">
                          {category.subcategories.map((sub) => (
                            <li key={sub.name}>
                              <Link
                                href={sub.href}
                                className="block text-xs text-gray-300 transition-colors hover:text-[#f19e1f] hover:pl-1"
                              >
                                {sub.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 border-t border-[#f19e1f]/20 pt-4">
                    <Link
                      href="/products"
                      className="inline-flex items-center text-sm font-medium text-[#f19e1f] hover:underline"
                    >
                      View All Products →
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link href="/services" className="text-sm font-medium text-white transition-colors hover:text-[#f19e1f]">
            Services
          </Link>
          <Link
            href="/sustainability"
            className="text-sm font-medium text-white transition-colors hover:text-[#f19e1f]"
          >
            Sustainability
          </Link>
          <Link href="/contact" className="text-sm font-medium text-white transition-colors hover:text-[#f19e1f]">
            Contact
          </Link>
        </nav>

        {/* CTA Button & Mobile Menu */}
        <div className="flex items-center gap-4">
          <a href="tel:+918143330028" className="hidden md:flex">
            <Button className="bg-[#f19e1f] text-[#132635] hover:bg-[#f19e1f]/90">
              <Phone className="mr-2 h-4 w-4" />
              +91 81433 30028
            </Button>
          </a>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-[#132635] overflow-y-auto">
              <div className="flex flex-col gap-6 pt-6">
                <Link href="/" onClick={() => setIsOpen(false)}>
                  <Image
                    src="/ms-logo-horizontal.png"
                    alt="MS Paper Products"
                    width={150}
                    height={42}
                    className="h-10 w-auto"
                  />
                </Link>
                <nav className="flex flex-col gap-4">
                  <Link
                    href="/"
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-white transition-colors hover:text-[#f19e1f]"
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-white transition-colors hover:text-[#f19e1f]"
                  >
                    About
                  </Link>

                  <div>
                    <button
                      onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                      className="flex w-full items-center justify-between text-lg font-medium text-white transition-colors hover:text-[#f19e1f]"
                    >
                      Products
                      <ChevronDown
                        className={`h-5 w-5 transition-transform ${mobileProductsOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {mobileProductsOpen && (
                      <div className="mt-2 space-y-3 pl-4">
                        {productCategories.map((category) => (
                          <div key={category.name} className="space-y-1">
                            <Link
                              href={category.href}
                              onClick={() => setIsOpen(false)}
                              className="flex items-center gap-2 text-sm font-semibold text-[#f19e1f]"
                            >
                              <category.icon className="h-4 w-4" />
                              {category.name}
                            </Link>
                            <ul className="space-y-1 pl-6">
                              {category.subcategories.slice(0, 3).map((sub) => (
                                <li key={sub.name}>
                                  <Link
                                    href={sub.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block text-xs text-gray-300 transition-colors hover:text-[#f19e1f]"
                                  >
                                    {sub.name}
                                  </Link>
                                </li>
                              ))}
                              {category.subcategories.length > 3 && (
                                <li>
                                  <Link
                                    href={category.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block text-xs text-[#f19e1f]/70 hover:text-[#f19e1f]"
                                  >
                                    + {category.subcategories.length - 3} more
                                  </Link>
                                </li>
                              )}
                            </ul>
                          </div>
                        ))}
                        <Link
                          href="/products"
                          onClick={() => setIsOpen(false)}
                          className="block text-sm font-medium text-[#f19e1f] hover:underline"
                        >
                          View All Products →
                        </Link>
                      </div>
                    )}
                  </div>

                  <Link
                    href="/services"
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-white transition-colors hover:text-[#f19e1f]"
                  >
                    Services
                  </Link>
                  <Link
                    href="/sustainability"
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-white transition-colors hover:text-[#f19e1f]"
                  >
                    Sustainability
                  </Link>
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-white transition-colors hover:text-[#f19e1f]"
                  >
                    Contact
                  </Link>
                </nav>
                <a href="tel:+918143330028">
                  <Button className="w-full bg-[#f19e1f] text-[#132635] hover:bg-[#f19e1f]/90">
                    <Phone className="mr-2 h-4 w-4" />
                    +91 81433 30028
                  </Button>
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
