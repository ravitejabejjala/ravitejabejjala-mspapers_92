import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Award,
  Box,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Clock3,
  Factory,
  GraduationCap,
  HeartPulse,
  Package,
  Printer,
  ShoppingBag,
  Store,
  Truck,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import HeroCarousel from "@/components/hero-carousel"
import ClientsSection from "@/components/clients-section"

export const metadata: Metadata = {
  title: "MS Paper Products | Premium Paper Bag & Packaging Solutions in Hyderabad",
  description: "Leading manufacturer of premium paper bags, courier covers, thermal labels & eco-friendly packaging in Hyderabad. 15+ years experience. Bulk orders, custom designs. Free quote!",
  keywords: ["paper bags manufacturer Hyderabad", "courier covers", "thermal labels", "eco-friendly packaging", "custom packaging", "bulk paper bags", "food packaging", "medicine boxes", "printing services", "barcode labels"],
  alternates: { canonical: "https://mspaperproducts.com" },
  openGraph: {
    title: "MS Paper Products | Premium Paper Packaging Solutions",
    description: "Quality paper bags, courier covers, thermal labels and eco-friendly packaging manufactured in Hyderabad.",
    type: "website",
    url: "https://mspaperproducts.com",
    images: [{ url: "/brand/ms-paper-products-social.png", width: 751, height: 751, alt: "MS Paper Products" }],
  },
  twitter: { card: "summary_large_image", title: "MS Paper Products | Premium Packaging Solutions", description: "Quality paper bags and packaging manufacturer in Hyderabad", images: ["/brand/ms-paper-products-social.png"] },
}

const categories = [
  { name: "Paper Bags", image: "/categories/all-paper-bags.jpg", href: "/products/paper-bags" },
  { name: "Packaging Boxes", image: "/categories/carton-boxes.jpg", href: "/products/boxes-cartons" },
  { name: "Brochures", image: "/printing-services/brochure-printing.jpg", href: "/printing/brochures" },
  { name: "Flyers", image: "/printing-services/flyer-printing.jpg", href: "/printing/flyers" },
  { name: "Booklets", image: "/printing-services/booklet-printing.jpg", href: "/printing/booklets-catalogues" },
  { name: "Labels & Stickers", image: "/products/barcode-labels.jpg", href: "/products/thermal-label-rolls" },
  { name: "Courier Covers", image: "/products/courier-covers-hero.jpg", href: "/products/ecommerce-courier-covers" },
  { name: "Calendars & Diaries", image: "/categories/calendars-diaries.jpg", href: "/products/calendars-diaries" },
  { name: "Corporate Gifts", image: "/categories/corporate-gift-bags.jpg", href: "/products/custom-packaging" },
  { name: "Files & Folders", image: "/categories/files-folders.jpg", href: "/products/files-folders" },
  { name: "Offset Printing", image: "/printing-services/offset-printing.jpg", href: "/printing/offset" },
  { name: "Digital Printing", image: "/printing-services/digital-printing.jpg", href: "/printing/digital" },
]

const featured = [
  { name: "Corporate Brochures", description: "Premium quality brochures for your brand.", image: "/printing-services/brochure-printing.jpg", href: "/printing/brochures" },
  { name: "Kraft Paper Bags", description: "Eco-friendly and durable paper bags.", image: "/categories/kraft-paper-bags.jpg", href: "/products/paper-bags" },
  { name: "Corrugated Boxes", description: "Strong and secure packaging for every need.", image: "/categories/corrugated-boxes.jpg", href: "/products/boxes-cartons" },
  { name: "Barcode Labels", description: "High-quality labels for all industries.", image: "/products/barcode-labels.jpg", href: "/products/thermal-label-rolls" },
  { name: "Booklets & Catalogues", description: "Perfect for product and company profiles.", image: "/printing-services/booklet-printing.jpg", href: "/printing/booklets-catalogues" },
  { name: "Custom Packaging", description: "Professional designs that leave a mark.", image: "/categories/custom-paper-bags.jpg", href: "/products/custom-packaging" },
]

const printingServices = ["Offset Printing", "Digital Printing", "Large Format Printing", "Brochure Printing", "Flyer Printing", "Booklet Printing", "Catalogue Printing", "Business Card Printing"]
const packagingSolutions = ["Mono Cartons", "Corrugated Boxes", "Pharma Packaging", "Courier Covers", "Luxury Boxes", "Food Packaging", "Kraft Paper Bags", "Custom Packaging"]
const industries = [
  { name: "Real Estate", icon: Building2, href: "/industries/real-estate" },
  { name: "Retail & Fashion", icon: Store, href: "/industries/retail-fashion" },
  { name: "Pharmaceuticals", icon: HeartPulse, href: "/industries/pharmaceuticals" },
  { name: "Manufacturing", icon: Factory, href: "/industries/logistics" },
  { name: "Education", icon: GraduationCap, href: "/industries/education" },
  { name: "Food & Beverage", icon: ShoppingBag, href: "/industries/food-beverage" },
  { name: "Corporate", icon: BriefcaseBusiness, href: "/industries/corporate" },
  { name: "E-commerce", icon: Truck, href: "/industries/ecommerce" },
]
const testimonials = [
  { quote: "MS Paper Products consistently supports our bulk packaging requirements with dependable quality and clear communication.", name: "Procurement Manager", company: "Hyderabad Retail Business" },
  { quote: "Their team helped us select the right materials and finishes for a professional branded packaging rollout.", name: "Brand Manager", company: "Telangana Food Business" },
  { quote: "Responsive service, practical production guidance, and reliable dispatch make them a trusted print partner.", name: "Operations Lead", company: "Pan-India E-commerce Seller" },
]
const stats = [
  { value: "15+", label: "Years of Experience", icon: Clock3 }, { value: "500+", label: "Happy Clients", icon: Users }, { value: "1000+", label: "Products & Solutions", icon: Package },
  { value: "Advanced", label: "Machinery", icon: Factory }, { value: "Quality", label: "Assurance", icon: Award }, { value: "PAN India", label: "Delivery", icon: Truck },
]
const process = ["Requirement & Artwork", "Lithrone Offset Printing", "Foiling & UV Printing", "Lamination", "Punching & Die Cutting", "Packaging", "Quality Inspection", "Dispatch"]
const resources = [
  { title: "Offset vs Digital Printing: Which One Is Right for You?", image: "/printing-services/offset-printing.jpg", href: "/blog/offset-vs-digital-printing" },
  { title: "How to Choose the Right Packaging for Your Product", image: "/categories/carton-boxes-category.jpg", href: "/blog/choosing-right-packaging" },
  { title: "The Importance of Branding in Business Growth", image: "/categories/custom-printed-gift-bags.jpg", href: "/blog/importance-of-branding" },
]
const faqs = [
  { q: "Do you handle bulk and custom orders?", a: "Yes. We manufacture bulk quantities and customize size, paper, printing, handles, finishes, and branding to match your requirements." },
  { q: "What printing and finishing options are available?", a: "Our capabilities include offset and digital printing, lamination, gold and silver foiling, UV finishes, die cutting, and custom finishing." },
  { q: "Do you deliver outside Hyderabad?", a: "Yes. We support secure PAN India delivery for approved orders and coordinate dispatch based on quantity and destination." },
  { q: "How can I request a quotation?", a: "Use the quote form, call us, or message us on WhatsApp with the product, dimensions, quantity, and printing requirements." },
]

function SectionHeading({ children, centered = false }: { children: React.ReactNode; centered?: boolean }) {
  return <div className={`mb-6 flex items-center gap-4 ${centered ? "justify-center" : ""}`}><span className="h-px w-6 bg-accent" /><h2 className="text-balance text-xl font-bold uppercase text-primary sm:text-2xl">{children}</h2><span className="h-px w-6 bg-accent" /></div>
}

export default function HomePage() {
  const homeSchemas = [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "MS Paper Products and Printing Services",
      itemListElement: featured.map((item, index) => ({ "@type": "ListItem", position: index + 1, url: `https://mspaperproducts.com${item.href}`, name: item.name })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://mspaperproducts.com" }],
    },
  ]

  return (
    <main className="bg-background">
      {homeSchemas.map((schema, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />)}
      <HeroCarousel />

      <section className="py-10">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading centered>Explore Our Products</SectionHeading>
          <div className="flex snap-x gap-3 overflow-x-auto pb-3">
            {categories.map((item) => <Link key={item.name} href={item.href} className="group min-w-28 snap-start rounded-lg border border-border bg-card p-3 text-center shadow-xs transition hover:-translate-y-1 hover:border-accent hover:shadow-md">
              <div className="relative mx-auto mb-2 size-16 overflow-hidden rounded-md bg-muted"><Image src={item.image} alt={item.name} fill className="object-cover transition-transform group-hover:scale-105" sizes="64px" /></div>
              <h3 className="text-xs font-semibold leading-tight text-primary">{item.name}</h3>
            </Link>)}
          </div>
          <div className="mt-3 text-center"><Button asChild className="bg-primary text-primary-foreground"><Link href="/products">View All Products <ArrowRight className="size-4" /></Link></Button></div>
        </div>
      </section>

      <section className="pb-10">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading>Featured Products</SectionHeading>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {featured.map((item) => <Card key={item.name} className="group overflow-hidden py-0 shadow-xs transition hover:shadow-md">
              <div className="relative aspect-[4/3] overflow-hidden bg-muted"><Image src={item.image} alt={item.name} fill className="object-cover transition-transform group-hover:scale-105" sizes="(max-width: 768px) 50vw, 17vw" /></div>
              <CardContent className="flex min-h-36 flex-col p-4"><h3 className="font-bold text-primary">{item.name}</h3><p className="mt-2 line-clamp-2 text-xs leading-relaxed text-muted-foreground">{item.description}</p><Link href={item.href} className="mt-auto inline-flex items-center gap-1 pt-3 text-xs font-semibold text-accent">View Details <ArrowRight className="size-3" /></Link></CardContent>
            </Card>)}
          </div>
        </div>
      </section>

      <section className="pb-10">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 lg:grid-cols-3">
          <article className="rounded-lg bg-primary p-6 text-primary-foreground shadow-md">
            <h2 className="text-xl font-bold uppercase">Our Printing Services <span className="text-accent">—</span></h2>
            <div className="mt-5 grid grid-cols-2 gap-4">{printingServices.map((name) => <div key={name} className="flex items-center gap-2 text-sm"><Printer className="size-4 text-accent" />{name}</div>)}</div>
            <Button asChild variant="outline" className="mt-6 border-accent bg-transparent text-accent hover:bg-accent hover:text-accent-foreground"><Link href="/services">Explore All Services <ArrowRight className="size-4" /></Link></Button>
          </article>
          <article className="rounded-lg border border-border bg-card p-6 shadow-sm">
            <h2 className="text-xl font-bold uppercase text-primary">Packaging Solutions</h2>
            <div className="mt-5 grid grid-cols-4 gap-3">{packagingSolutions.map((name) => <Link key={name} href="/packaging-solutions" className="flex min-h-24 flex-col items-center justify-center gap-2 rounded-md bg-muted/60 p-2 text-center text-[11px] font-semibold text-primary hover:bg-accent/10"><Box className="size-6 text-accent" />{name}</Link>)}</div>
          </article>
          <article className="rounded-lg bg-primary p-6 text-primary-foreground shadow-md">
            <h2 className="text-xl font-bold uppercase">Industries We Serve <span className="text-accent">—</span></h2>
            <div className="mt-5 grid grid-cols-2 gap-4">{industries.map((item) => <Link key={item.name} href={item.href} className="flex items-center gap-2 text-sm transition hover:text-accent"><item.icon className="size-4 text-accent" />{item.name}</Link>)}</div>
            <Button asChild variant="outline" className="mt-6 border-accent bg-transparent text-accent hover:bg-accent hover:text-accent-foreground"><Link href="/industries/food-beverage">Explore Industries <ArrowRight className="size-4" /></Link></Button>
          </article>
        </div>
      </section>

      <section className="pb-10">
        <div className="mx-auto max-w-7xl px-4"><div className="grid overflow-hidden rounded-lg border border-border bg-card shadow-xs sm:grid-cols-2 lg:grid-cols-6">{stats.map((item) => <div key={item.value} className="flex items-center gap-3 border-b border-border p-5 last:border-0 sm:border-r lg:border-b-0"><item.icon className="size-8 shrink-0 text-accent" /><div><p className="text-xl font-bold text-primary">{item.value}</p><p className="text-xs text-muted-foreground">{item.label}</p></div></div>)}</div></div>
      </section>

      <section className="pb-10">
        <div className="mx-auto max-w-7xl px-4">
          <ClientsSection />
        </div>
      </section>

      <section className="pb-10">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 lg:grid-cols-[.9fr_1.35fr]">
          <article className="rounded-lg border border-border bg-card p-5 shadow-xs"><SectionHeading>Resources & Insights</SectionHeading>            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">{resources.map((item) => <Link key={item.title} href={item.href} className="group overflow-hidden rounded-md border border-border shadow-sm transition-all hover:shadow-md hover:-translate-y-1 hover:border-accent/50"><div className="relative aspect-[16/9] bg-muted"><Image src={item.image} alt={item.title} fill className="object-cover transition-transform group-hover:scale-110" sizes="(max-width: 1024px) 33vw, 15vw" /></div><div className="p-3 bg-card"><h3 className="text-xs font-bold leading-snug text-primary">{item.title}</h3><span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-accent transition-all group-hover:gap-2">Read More <ArrowRight className="size-3" /></span></div></Link>)}</div><div className="mt-4 text-center"><Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent">View All Articles <ArrowRight className="size-4" /></Link></div></article>

          <article className="overflow-hidden rounded-lg bg-primary text-primary-foreground shadow-md">
            <div className="grid h-full md:grid-cols-[1.4fr_.6fr]">
              <div className="p-6"><h2 className="text-2xl font-bold uppercase">Request a Quote <span className="text-accent">—</span></h2><p className="mt-2 text-sm text-primary-foreground/70">Tell us what you need and our team will help with specifications, quantity, and delivery.</p>
                <form action="/contact" className="mt-5 grid gap-3 sm:grid-cols-2">
                  <Input name="name" placeholder="Your Name*" required className="bg-background text-foreground" />
                  <Input name="company" placeholder="Company Name*" required className="bg-background text-foreground" />
                  <Input name="phone" type="tel" placeholder="Phone Number*" required className="bg-background text-foreground" />
                  <Input name="email" type="email" placeholder="Email Address*" required className="bg-background text-foreground" />
                  <Input name="product" placeholder="Product / Service Required*" required className="bg-background text-foreground" />
                  <Input name="quantity" placeholder="Estimated Quantity" className="bg-background text-foreground" />
                  <Textarea name="message" placeholder="Your Message / Requirements" className="min-h-24 bg-background text-foreground sm:col-span-2" />
                  <Button type="submit" className="bg-accent font-semibold text-accent-foreground hover:bg-accent/90">Submit Request <ArrowRight className="size-4" /></Button>
                  <Button asChild variant="outline" className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary"><a href="https://wa.me/918143330028" target="_blank" rel="noopener noreferrer">WhatsApp Us</a></Button>
                </form>
              </div>
              <div className="relative hidden min-h-96 md:block"><Image src="/hero/hero-craftsmanship.jpg" alt="MS Paper Products printing and packaging team" fill className="object-cover" sizes="25vw" /><div className="absolute inset-0 bg-primary/20" /></div>
            </div>
          </article>
        </div>
      </section>

      <section className="pb-10">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading centered>What Business Customers Say</SectionHeading>
          <div className="grid gap-4 md:grid-cols-3">{testimonials.map((item) => <figure key={item.company} className="rounded-lg border border-border bg-card p-6 shadow-xs"><div className="flex gap-1 text-accent" aria-label="5 out of 5 stars">★★★★★</div><blockquote className="mt-4 text-sm leading-relaxed text-muted-foreground">“{item.quote}”</blockquote><figcaption className="mt-5 border-t border-border pt-4"><p className="font-bold text-primary">{item.name}</p><p className="text-xs text-muted-foreground">{item.company}</p></figcaption></figure>)}</div>
        </div>
      </section>

      <section className="pb-10">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 lg:grid-cols-2">
          <article className="rounded-lg border border-border bg-card p-6 shadow-md transition-all hover:shadow-lg hover:border-accent/50"><SectionHeading>Factory-Direct Manufacturing</SectionHeading><div className="grid gap-4 sm:grid-cols-2">{["In-house printing and finishing control", "Bulk production planning for business orders", "Custom sizing, materials, branding, and finishes", "Quality checks before secure PAN India dispatch"].map((item) => <div key={item} className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 size-5 shrink-0 text-accent" /><p className="text-sm text-muted-foreground">{item}</p></div>)}</div><Button asChild variant="outline" className="mt-6 transition-all hover:bg-accent/10"><Link href="/about">Learn About Our Company <ArrowRight className="size-4" /></Link></Button></article>
          <article className="rounded-lg border border-border bg-card p-6 shadow-md transition-all hover:shadow-lg hover:border-accent/50"><SectionHeading>Frequently Asked Questions</SectionHeading><Accordion type="single" collapsible>{faqs.map((item, index) => <AccordionItem key={item.q} value={`faq-${index}`}><AccordionTrigger className="text-primary hover:text-accent transition-colors">{item.q}</AccordionTrigger><AccordionContent className="leading-relaxed text-muted-foreground">{item.a}</AccordionContent></AccordionItem>)}</Accordion></article>
        </div>
      </section>

      <section className="bg-primary py-12 text-primary-foreground"><div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 text-center md:flex-row md:text-left"><div><p className="text-sm font-bold uppercase tracking-wide text-accent">Built for growing businesses</p><h2 className="mt-2 text-balance text-3xl font-bold">Need bulk printing or custom packaging?</h2><p className="mt-2 text-primary-foreground/70">Speak with our team for the right materials, finish, quantity, and delivery plan.</p></div><div className="flex shrink-0 flex-wrap justify-center gap-3"><Button asChild className="bg-accent font-semibold text-accent-foreground hover:bg-accent/90"><Link href="/contact">Request a Quote <ArrowRight className="size-4" /></Link></Button><Button asChild variant="outline" className="border-primary-foreground/50 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary"><a href="tel:+918143330028">Call Us Now</a></Button></div></div></section>
    </main>
  )
}
