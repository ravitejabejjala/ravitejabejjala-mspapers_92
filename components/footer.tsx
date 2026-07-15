import Image from "next/image"
import Link from "next/link"
import { Clock, Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"

const groups = [
  { title: "Products", links: [{ name: "Paper Bags", href: "/products/paper-bags" }, { name: "Boxes & Cartons", href: "/products/boxes-cartons" }, { name: "Courier Covers", href: "/products/ecommerce-courier-covers" }, { name: "Thermal Labels", href: "/products/thermal-label-rolls" }, { name: "View All Products", href: "/products" }] },
  { title: "Printing Services", links: [{ name: "Offset Printing", href: "/printing-services/offset-printing" }, { name: "Digital Printing", href: "/printing-services/digital-printing" }, { name: "Brochure Printing", href: "/printing-services/brochure-printing" }, { name: "Flyer Printing", href: "/printing-services/flyer-printing" }, { name: "View All Services", href: "/printing-services-hyderabad" }] },
  { title: "Industries", links: [{ name: "Food & Beverage", href: "/industries/food-beverage" }, { name: "Pharmaceuticals", href: "/industries/pharmaceuticals" }, { name: "E-Commerce", href: "/industries/ecommerce" }, { name: "Retail & Fashion", href: "/industries/retail-fashion" }, { name: "Corporate", href: "/industries/corporate" }] },
  { title: "Resources", links: [{ name: "Blog", href: "/blog" }, { name: "Gallery", href: "/gallery" }, { name: "Packaging Guide", href: "/resources" }, { name: "About Us", href: "/about" }, { name: "Contact", href: "/contact" }] },
]

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-9">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-[1.2fr_repeat(4,.75fr)_1.35fr]">
          <div>
            <Link href="/" aria-label="MS Paper Products home"><Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MS%20Paper%20products-03-t3JyzC6DPjBJTPm3YiAeFT8JD65dkC.png" alt="MS Paper Products" width={180} height={180} className="h-24 w-auto" /></Link>
            <p className="mt-3 max-w-xs text-xs leading-relaxed text-primary-foreground/65">Premium paper products, printing, and packaging solutions crafted for growing brands.</p>
            <div className="mt-4 flex gap-3">
              <a href="https://linkedin.com/company/mspaperproducts" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-primary-foreground/70 hover:text-accent"><Linkedin className="size-4" /></a>
              <a href="https://facebook.com/mspaperproducts" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-primary-foreground/70 hover:text-accent"><Facebook className="size-4" /></a>
              <a href="https://instagram.com/mspaperproducts" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-primary-foreground/70 hover:text-accent"><Instagram className="size-4" /></a>
            </div>
          </div>
          {groups.map((group) => <div key={group.title}><h2 className="text-xs font-bold uppercase text-primary-foreground">{group.title}</h2><ul className="mt-3 flex flex-col gap-1.5">{group.links.map((item) => <li key={item.href}><Link href={item.href} className="text-xs text-primary-foreground/65 hover:text-accent">{item.name}</Link></li>)}</ul></div>)}
          <div><h2 className="text-xs font-bold uppercase">Contact Us</h2><ul className="mt-3 flex flex-col gap-3 text-xs text-primary-foreground/65"><li className="flex gap-2"><MapPin className="mt-0.5 size-4 shrink-0 text-accent" /><span>7-1-307/14/G/95, DNM Colony, BK Guda, Balkampet, Hyderabad 500018</span></li><li><a href="tel:+918143330028" className="flex gap-2 hover:text-accent"><Phone className="size-4 text-accent" />+91 81433 30028</a></li><li><a href="mailto:info@mspaperproducts.com" className="flex gap-2 hover:text-accent"><Mail className="size-4 text-accent" />info@mspaperproducts.com</a></li><li className="flex gap-2"><Clock className="size-4 text-accent" />Mon–Sat: 9 AM–6 PM</li></ul></div>
        </div>
        <div className="mt-8 flex flex-col justify-between gap-3 border-t border-primary-foreground/15 pt-5 text-xs text-primary-foreground/55 sm:flex-row"><p>© {new Date().getFullYear()} MS Paper Products. All rights reserved.</p><div className="flex gap-5"><Link href="/privacy" className="hover:text-accent">Privacy Policy</Link><Link href="/terms" className="hover:text-accent">Terms & Conditions</Link></div></div>
      </div>
    </footer>
  )
}
