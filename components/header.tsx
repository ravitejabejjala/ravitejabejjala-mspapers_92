"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Services", href: "/services" },
  { name: "Sustainability", href: "/sustainability" },
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

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
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-white transition-colors hover:text-[#f19e1f]"
            >
              {item.name}
            </Link>
          ))}
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
            <SheetContent side="right" className="w-[300px] bg-[#132635]">
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
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-medium text-white transition-colors hover:text-[#f19e1f]"
                    >
                      {item.name}
                    </Link>
                  ))}
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
