import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube } from "lucide-react"

export default function TopInfoBar() {
  return (
    <div className="hidden lg:block bg-[#132635] text-white text-xs py-2">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Left side - Contact info */}
        <div className="flex gap-6">
          <a href="tel:+918143330028" className="flex items-center gap-2 hover:text-[#f19e1f] transition-colors">
            <Phone className="h-3.5 w-3.5 text-[#f19e1f]" />
            <span>+91 97012 23345</span>
          </a>
          <a href="mailto:sales@mspaperproducts.com" className="flex items-center gap-2 hover:text-[#f19e1f] transition-colors">
            <Mail className="h-3.5 w-3.5 text-[#f19e1f]" />
            <span>sales@mspaperproducts.com</span>
          </a>
          <div className="flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 text-[#f19e1f]" />
            <span>Hyderabad, Telangana, India</span>
          </div>
        </div>

        {/* Right side - Social media */}
        <div className="flex gap-3">
          <a href="https://linkedin.com/company/mspaperproducts" target="_blank" rel="noopener noreferrer" className="hover:text-[#f19e1f] transition-colors">
            <Linkedin className="h-3.5 w-3.5" />
          </a>
          <a href="https://facebook.com/mspaperproducts" target="_blank" rel="noopener noreferrer" className="hover:text-[#f19e1f] transition-colors">
            <Facebook className="h-3.5 w-3.5" />
          </a>
          <a href="https://instagram.com/mspaperproducts" target="_blank" rel="noopener noreferrer" className="hover:text-[#f19e1f] transition-colors">
            <Instagram className="h-3.5 w-3.5" />
          </a>
          <a href="https://youtube.com/mspaperproducts" target="_blank" rel="noopener noreferrer" className="hover:text-[#f19e1f] transition-colors">
            <Youtube className="h-3.5 w-3.5" />
          </a>
          <a href="https://wa.me/918143330028" target="_blank" rel="noopener noreferrer" className="text-[#f19e1f] hover:text-[#f19e1f]/80 transition-colors">
            WhatsApp Us
          </a>
        </div>
      </div>
    </div>
  )
}
