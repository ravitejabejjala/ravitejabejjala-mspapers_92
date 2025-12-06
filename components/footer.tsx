import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#132635] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <img src="/ms-logo.png" alt="MS Paper Products" className="h-24 w-auto mb-4 brightness-0 invert" />
            <p className="text-white/80 mb-4">
              Premium, eco-friendly paper packaging solutions for businesses across India.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#f19e1f]">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-white/80 hover:text-[#f19e1f] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="text-white/80 hover:text-[#f19e1f] transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-[#f19e1f] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#f19e1f]">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-white/80 hover:text-[#f19e1f] transition-colors">
                  Luxury Printed Bags
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-white/80 hover:text-[#f19e1f] transition-colors">
                  Kraft Paper Bags
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-white/80 hover:text-[#f19e1f] transition-colors">
                  Wedding Gift Bags
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-white/80 hover:text-[#f19e1f] transition-colors">
                  Food-Grade Bags
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-white/80 hover:text-[#f19e1f] transition-colors">
                  Sweet Boxes
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#f19e1f]">Services</h3>
            <ul className="space-y-2 mb-6">
              <li>
                <Link href="/services" className="text-white/80 hover:text-[#f19e1f] transition-colors">
                  Custom Printing
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/80 hover:text-[#f19e1f] transition-colors">
                  Lamination
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/80 hover:text-[#f19e1f] transition-colors">
                  Gold Foiling
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/80 hover:text-[#f19e1f] transition-colors">
                  Packaging Design
                </Link>
              </li>
            </ul>

            <h3 className="text-lg font-semibold mb-3 text-[#f19e1f]">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-[#f19e1f]" />
                <a href="tel:+918143330028" className="text-white/80 hover:text-[#f19e1f]">
                  +91 81433 30028
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-[#f19e1f]" />
                <a href="mailto:info@mspaperproducts.com" className="text-white/80 hover:text-[#f19e1f] break-all">
                  info@mspaperproducts.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="w-4 h-4 text-[#f19e1f] mt-1" />
                <span className="text-white/80">
                  7-1-307/14/G/119, DNM Colony, Tulasi Nagar, Balkampet, Hyderabad, Telangana 500018
                </span>
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a href="#" className="bg-white/10 hover:bg-[#f19e1f] p-2 rounded-lg transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-[#f19e1f] p-2 rounded-lg transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-[#f19e1f] p-2 rounded-lg transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-white/60 text-sm space-y-2">
          <p>&copy; {new Date().getFullYear()} MS Paper Products. All rights reserved.</p>
          <p className="text-xs">Website Designed & Developed with Excellence</p>
        </div>
      </div>
    </footer>
  )
}
