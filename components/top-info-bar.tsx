import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube } from "lucide-react"
import { business, socialLinks } from "@/lib/business-info"

export default function TopInfoBar() {
  return (
    <div className="hidden bg-primary py-2 text-xs text-primary-foreground lg:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4">
        {/* Left side - Contact info */}
        <div className="flex gap-6">
          <a href={business.phoneHref} className="flex items-center gap-2 transition-colors hover:text-accent">
            <Phone className="h-3.5 w-3.5 text-accent" />
            <span>{business.phoneDisplay}</span>
          </a>
          <a href={`mailto:${business.email}`} className="flex items-center gap-2 transition-colors hover:text-accent">
            <Mail className="h-3.5 w-3.5 text-accent" />
            <span>{business.email}</span>
          </a>
          <div className="flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 text-[#f19e1f]" />
            <span>Hyderabad, Telangana, India</span>
          </div>
        </div>

        {/* Right side - Social media */}
        <div className="flex gap-3">
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#f19e1f] transition-colors">
            <Linkedin className="h-3.5 w-3.5" />
          </a>
          <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-[#f19e1f] transition-colors">
            <Facebook className="h-3.5 w-3.5" />
          </a>
          <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-[#f19e1f] transition-colors">
            <Instagram className="h-3.5 w-3.5" />
          </a>
          <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-[#f19e1f] transition-colors">
            <Youtube className="h-3.5 w-3.5" />
          </a>
          <a href={business.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-[#f19e1f] hover:text-[#f19e1f]/80 transition-colors">
            WhatsApp Us
          </a>
        </div>
      </div>
    </div>
  )
}
