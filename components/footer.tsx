import Image from "next/image"
import Link from "next/link"
import { Clock, Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import { business, socialLinks } from "@/lib/business-info"

const groups = [
  { title: "Products", links: [["Paper Bags", "/products/paper-bags"], ["Boxes & Cartons", "/products/boxes-cartons"], ["Courier Covers", "/products/ecommerce-courier-covers"], ["Thermal Labels", "/products/thermal-label-rolls"], ["All Products", "/products"]] },
  { title: "Services", links: [["Offset Printing", "/printing-services/offset-printing"], ["Digital Printing", "/printing-services/digital-printing"], ["Brochure Printing", "/printing-services/brochure-printing"], ["Label Printing", "/printing-services/label-printing"], ["All Services", "/printing-services-hyderabad"]] },
  { title: "Industries", links: [["Pharmaceutical", "/solutions/pharmaceutical-packaging"], ["Food Packaging", "/solutions/food-packaging-manufacturer"], ["Corporate", "/solutions/corporate-printing-services"], ["E-commerce", "/solutions/courier-packaging"], ["Education", "/solutions/educational-printing"]] },
  { title: "Resources", links: [["Packaging Guides", "/resources"], ["Business Blog", "/blog"], ["Print Finishes", "/blog/print-finishes-guide"], ["Bulk Order Checklist", "/blog/bulk-printing-checklist"], ["Gallery", "/gallery"]] },
  { title: "Company", links: [["About Us", "/about"], ["Contact", "/contact"], ["Packaging Solutions", "/packaging-solutions"], ["Privacy Policy", "/privacy"], ["Terms", "/terms"]] },
] as const

export default function Footer() {
  return <footer className="bg-primary text-primary-foreground">
    <div className="mx-auto max-w-7xl px-4 py-12">
      <div className="grid gap-9 sm:grid-cols-2 lg:grid-cols-[1.25fr_repeat(5,.72fr)]">
        <div><Link href="/" aria-label="MS Paper Products home"><Image src={business.logoSquare} alt="MS Paper Products" width={835} height={834} className="h-28 w-auto object-contain" /></Link><p className="mt-4 max-w-xs text-sm leading-relaxed text-primary-foreground/65">Factory-direct paper products, commercial printing, and custom packaging solutions for business requirements in Hyderabad and across India.</p><div className="mt-5 flex gap-4"><a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin className="size-5" /></a><a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook className="size-5" /></a><a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram className="size-5" /></a></div></div>
        {groups.map((group) => <div key={group.title}><h2 className="text-sm font-bold uppercase tracking-wide">{group.title}</h2><ul className="mt-4 flex flex-col gap-2.5">{group.links.map(([name, href]) => <li key={href}><Link href={href} className="text-xs text-primary-foreground/65 transition hover:text-accent">{name}</Link></li>)}</ul></div>)}
      </div>
      <div className="mt-10 grid gap-6 rounded-xl border border-primary-foreground/15 p-6 md:grid-cols-[1.4fr_1fr_1fr_auto]"><a href={business.mapUrl} target="_blank" rel="noopener noreferrer" className="flex gap-3 text-sm text-primary-foreground/70 hover:text-accent"><MapPin className="size-5 shrink-0 text-accent" /><span>{business.address}<strong className="mt-1 block text-accent">View on Google Maps</strong></span></a><div className="flex flex-col gap-2 text-sm"><a href={business.phoneHref} className="flex gap-2 hover:text-accent"><Phone className="size-4 text-accent" />{business.phoneDisplay}</a><a href={`mailto:${business.email}`} className="flex gap-2 hover:text-accent"><Mail className="size-4 text-accent" />{business.email}</a></div><p className="flex gap-2 text-sm text-primary-foreground/70"><Clock className="size-4 shrink-0 text-accent" />{business.hoursLabel}</p><Link href="/contact" className="inline-flex h-10 items-center justify-center rounded-md bg-accent px-5 text-sm font-bold text-accent-foreground">Request a Quote</Link></div>
      <p className="mt-6 text-xs text-primary-foreground/55">Service areas: {business.serviceAreas.join(" · ")}</p>
      <div className="mt-6 border-t border-primary-foreground/15 pt-5 text-xs text-primary-foreground/55">© {new Date().getFullYear()} MS Paper Products. All rights reserved.</div>
    </div>
  </footer>
}
