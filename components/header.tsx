"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/sustainability", label: "Sustainability" },
  { href: "/contact", label: "Contact" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 bg-[#132635] backdrop-blur-sm border-b border-[#132635]/20 transition-all duration-300 ${
        isScrolled ? "shadow-lg" : ""
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img src="/ms-logo.png" alt="MS Paper Products" className="h-12 w-auto sm:h-16" />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-white hover:text-[#f19e1f] font-medium transition-colors relative ${
                  pathname === link.href ? "text-[#f19e1f]" : ""
                }`}
              >
                {link.label}
                {pathname === link.href && <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#f19e1f]" />}
              </Link>
            ))}
            <Button asChild className="bg-[#f19e1f] hover:bg-[#d88a1a] text-white transition-transform hover:scale-105">
              <Link href="/contact">Get Quote</Link>
            </Button>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white" aria-label="Toggle menu">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-96 pt-4 pb-2" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-white hover:text-[#f19e1f] font-medium py-2 transition-colors ${
                  pathname === link.href ? "text-[#f19e1f]" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="bg-[#f19e1f] hover:bg-[#d88a1a] text-white">
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                Get Quote
              </Link>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  )
}
