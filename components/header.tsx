"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, Phone, ChevronDown, ShoppingBag, Package, FolderOpen, Calendar, Coffee, Pill, Leaf, Printer } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Packaging Solutions", href: "/packaging-solutions" },
  { name: "E-Commerce Packaging", href: "/ecommerce-packaging-solutions" },
  { name: "Printing Services", href: "/printing-services-hyderabad" },
  { name: "MS Gallery", href: "/gallery" },
  { name: "Services", href: "/services" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
]

const productCategories = [
  {
    name: "Paper Bags",
    href: "/products/paper-bags",
    icon: ShoppingBag,
    subcategories: [
      { name: "Kraft Paper Bags", href: "/products/kraft-paper-bags" },
      { name: "Printed Paper Bags", href: "/products/printed-paper-bags" },
      { name: "Custom Paper Bags", href: "/products/custom-paper-bags" },
      { name: "Eco-Friendly Paper Bags", href: "/products/eco-friendly-paper-bags" },
      { name: "Retail Carry Bags", href: "/products/retail-carry-bags" },
      { name: "Corporate Paper Bags", href: "/products/corporate-paper-bags" },
      { name: "Theme & Festive Bags", href: "/products/theme-gift-bags" },
      { name: "Wine & Bottle Bags", href: "/products/wine-bottle-bags" },
    ],
  },
  {
    name: "Gift Packaging",
    href: "/products/gift-packaging",
    icon: ShoppingBag,
    subcategories: [
      { name: "Paper Gift Bags", href: "/products/paper-gift-bags" },
      { name: "Christmas & New Year Bags", href: "/products/christmas-new-year-gift-bags" },
      { name: "Custom Printed Gift Bags", href: "/products/custom-printed-gift-bags" },
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
      { name: "Pharmaceutical Boxes", href: "/products/pharmaceutical-packaging-boxes" },
      { name: "Industrial Packing Boxes", href: "/products/industrial-packing-boxes" },
    ],
  },
  {
    name: "Files & Folders",
    href: "/products/files-folders",
    icon: FolderOpen,
    subcategories: [
      { name: "Hospital/Medical Folders", href: "/products/hospital-medical-file-folders" },
      { name: "Office File Folders", href: "/products/office-file-folders" },
      { name: "Corporate File Folders", href: "/products/corporate-file-folders" },
      { name: "Document & Report Folders", href: "/products/document-report-folders" },
      { name: "School/College Folders", href: "/products/school-college-file-folders" },
      { name: "Custom Branded Folders", href: "/products/custom-branded-file-folders" },
    ],
  },
  {
    name: "Calendars & Diaries",
    href: "/products/calendars-diaries",
    icon: Calendar,
    subcategories: [
      { name: "Table Calendars", href: "/products/table-calendars" },
      { name: "Wall Calendars", href: "/products/wall-calendars" },
      { name: "Corporate Calendars", href: "/products/corporate-calendars" },
      { name: "Custom Printed Calendars", href: "/products/custom-printed-calendars" },
      { name: "Diaries & Planners", href: "/products/diaries-planners" },
      { name: "Corporate Diaries", href: "/products/corporate-diaries" },
      { name: "Promotional Diaries", href: "/products/promotional-diaries" },
    ],
  },
  {
    name: "Food & Beverage",
    href: "/products/food-beverage-packaging",
    icon: Coffee,
    subcategories: [
      { name: "Food Grade Packing Pouches", href: "/food-grade-packing" },
      { name: "Paper Cups", href: "/products/paper-cups" },
      { name: "Paper Food Boxes", href: "/products/paper-food-boxes" },
      { name: "Paper Trays", href: "/products/paper-trays" },
      { name: "Paper Bowls & Tubs", href: "/products/paper-bowls" },
      { name: "Paper Buckets", href: "/products/paper-buckets" },
      { name: "Cup Holders & Accessories", href: "/products/cup-holders-accessories" },
    ],
  },
  {
    name: "Pharma & Medical",
    href: "/products/pharma-medical-packaging",
    icon: Pill,
    subcategories: [
      { name: "Medicine Boxes", href: "/products/medicine-boxes" },
      { name: "Pharmaceutical Cartons", href: "/products/pharmaceutical-cartons" },
      { name: "Printed Medical Packaging", href: "/products/printed-medical-packaging" },
    ],
  },
  {
    name: "Ecommerce & Shipping",
    href: "/products/ecommerce-shipping-solutions",
    icon: ShoppingBag,
    subcategories: [
      { name: "Courier Covers", href: "/products/ecommerce-shipping-solutions#ecommerce-covers" },
      { name: "Barcode Label Rolls", href: "/products/ecommerce-shipping-solutions#barcode-label-rolls" },
    ],
  },
  {
    name: "Eco-Friendly Solutions",
    href: "/products/eco-friendly-solutions",
    icon: ShoppingBag,
    subcategories: [
      { name: "Recyclable Paper Packaging", href: "/products/recyclable-paper-packaging" },
      { name: "Sustainable Paper Products", href: "/products/sustainable-paper-products" },
      { name: "Eco-Friendly Bags & Boxes", href: "/products/eco-friendly-bags-boxes" },
    ],
  },
  {
    name: "Printing Services",
    href: "/printing-services-hyderabad",
    icon: Printer,
    subcategories: [
      { name: "Offset Printing", href: "/printing-services/offset-printing" },
      { name: "Digital Printing", href: "/printing-services/digital-printing" },
      { name: "Brochure Printing", href: "/printing-services/brochure-printing" },
      { name: "Flyer Printing", href: "/printing-services/flyer-printing" },
      { name: "Booklet Printing", href: "/printing-services/booklet-printing" },
      { name: "Custom Printing", href: "/printing-services/custom-printing" },
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
                <div className="w-[1000px] rounded-lg border border-[#f19e1f]/20 bg-[#132635] p-4 shadow-xl max-h-[600px] overflow-y-auto">
                  <div className="grid grid-cols-4 gap-4">
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
                              {category.subcategories.map((sub) => (
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
