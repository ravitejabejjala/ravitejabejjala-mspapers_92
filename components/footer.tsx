import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Clock } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#132635] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/">
              <Image
                src="/ms-logo-horizontal.png"
                alt="MS Paper Products"
                width={150}
                height={42}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-sm text-gray-300">
              Premium paper bag manufacturer committed to quality, sustainability, and exceptional craftsmanship.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 transition-colors hover:text-[#f19e1f]"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 transition-colors hover:text-[#f19e1f]"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 transition-colors hover:text-[#f19e1f]"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-[#f19e1f]">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Products", "Services", "Sustainability", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-sm text-gray-300 transition-colors hover:text-[#f19e1f]"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-[#f19e1f]">Products</h3>
            <ul className="space-y-2">
              {[
                { name: "Retail Shopping Bags", slug: "retail-shopping-bags" },
                { name: "Boutique Bags", slug: "boutique-bags" },
                { name: "Wine & Bottle Bags", slug: "wine-bottle-bags" },
                { name: "Jewelry Bags", slug: "jewelry-bags" },
                { name: "Corporate Gift Bags", slug: "corporate-gift-bags" },
              ].map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/products/${item.slug}`}
                    className="text-sm text-gray-300 transition-colors hover:text-[#f19e1f]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-[#f19e1f]">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#f19e1f]" />
                <span className="text-sm text-gray-300">
                  7-1-307/14/G/119, DNM Colony,
                  <br />
                  Tulasi Nagar, Balkampet,
                  <br />
                  Hyderabad, Telangana 500018
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-[#f19e1f]" />
                <a href="tel:+918143330028" className="text-sm text-gray-300 hover:text-[#f19e1f]">
                  +91 81433 30028
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-[#f19e1f]" />
                <a href="mailto:info@mspaperproducts.com" className="text-sm text-gray-300 hover:text-[#f19e1f]">
                  info@mspaperproducts.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-[#f19e1f]" />
                <span className="text-sm text-gray-300">
                  Mon - Sat: 9:00 AM - 6:00 PM
                  <br />
                  Sunday: Closed
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-700 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} MS Paper Products. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-sm text-gray-400 hover:text-[#f19e1f]">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-gray-400 hover:text-[#f19e1f]">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
