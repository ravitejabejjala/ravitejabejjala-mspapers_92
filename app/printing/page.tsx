import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Phone, MessageCircle, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { business } from "@/lib/business-info"
import { printingServices } from "@/lib/printing-services"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export const metadata: Metadata = {
  title: "Printing Services Hyderabad | Offset, Digital & Custom | MS Paper Products",
  description:
    "Professional printing services in Hyderabad — booklets, catalogues, brochures, flyers, offset printing, digital printing and custom specialty finishes. Factory-direct pricing with PAN India delivery.",
  keywords: [
    "printing services Hyderabad",
    "offset printing Hyderabad",
    "digital printing Hyderabad",
    "brochure printing Hyderabad",
    "booklet printing Hyderabad",
    "flyer printing Hyderabad",
    "custom printing Hyderabad",
  ],
  openGraph: {
    title: "Printing Services Hyderabad | MS Paper Products",
    description:
      "Professional offset, digital and custom printing in Hyderabad. Bulk orders with PAN India delivery.",
    url: "https://mspaperproducts.com/printing",
    images: [{ url: business.socialImage, width: 751, height: 751, alt: "MS Paper Products Printing Services" }],
  },
  alternates: { canonical: "https://mspaperproducts.com/printing" },
}

const whyUs = [
  "In-house Lithrone offset presses — no outsourcing",
  "Colour-accurate CMYK and Pantone matching",
  "Digital and offset under one roof",
  "Factory-direct pricing — no middlemen",
  "Quality inspection before every dispatch",
  "PAN India delivery for all order sizes",
  "Dedicated account manager for business clients",
  "Rush turnaround options available",
]

export default function PrintingIndexPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: business.name,
            telephone: business.phoneDisplay,
            email: business.email,
            url: "https://mspaperproducts.com/printing",
            address: {
              "@type": "PostalAddress",
              addressLocality: business.city,
              addressRegion: business.region,
              addressCountry: business.country,
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Printing Services",
              itemListElement: printingServices.map((s, i) => ({
                "@type": "Offer",
                position: i + 1,
                name: s.label,
                url: `https://mspaperproducts.com${s.href}`,
              })),
            },
          }),
        }}
      />

      {/* Breadcrumb */}
      <div className="border-b border-border bg-muted/30 px-4 py-3">
        <div className="mx-auto max-w-7xl">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild><Link href="/">Home</Link></BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Printing Services</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-primary py-16 text-primary-foreground md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-sm font-semibold text-accent">
              MS Paper Products · Hyderabad
            </div>
            <h1 className="text-balance text-4xl font-bold leading-tight md:text-5xl">
              Professional Printing Services in Hyderabad
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-primary-foreground/80">
              Factory-direct offset, digital and specialty printing for businesses across India. Booklets,
              catalogues, brochures, flyers and bespoke custom print — all under one roof.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-accent font-semibold text-accent-foreground hover:bg-accent/90">
                <Link href="/contact">Get a Free Quote <ArrowRight className="ml-2 size-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10">
                <a href={business.whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 size-4" /> WhatsApp Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-primary">Our Printing Services</h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Choose from our full range of professional printing services. Click any service for detailed specifications, pricing guidance and a quote request.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {printingServices.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 transition-colors group-hover:bg-accent/20">
                    <service.icon className="size-5 text-accent" aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-primary">{service.label}</h3>
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                <div className="mt-5 flex items-center gap-1 text-sm font-semibold text-accent transition-all group-hover:gap-2">
                  View Service <ArrowRight className="size-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-muted/30 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary">Why Choose MS Paper Products?</h2>
              <p className="mt-4 text-muted-foreground">
                We are a Hyderabad-based factory-direct printing company. Every job is produced on our in-house presses — no outsourcing, no quality compromise.
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {whyUs.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                    <span className="text-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-border bg-background p-8 shadow-sm">
              <h3 className="text-xl font-bold text-primary">Request a Printing Quote</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Tell us what you need — quantity, size, finish — and we will send a competitive quote within hours.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <Button asChild size="lg" className="bg-accent font-semibold text-accent-foreground hover:bg-accent/90">
                  <Link href="/contact">Send Enquiry <ArrowRight className="ml-2 size-4" /></Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary">
                  <a href={business.phoneHref}>
                    <Phone className="mr-2 size-4" /> {business.phoneDisplay}
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href={business.whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 size-4" /> WhatsApp Us
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-14 text-primary-foreground">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-3xl font-bold">Ready to Print?</h2>
          <p className="mt-3 text-primary-foreground/80">
            Bulk orders, rush jobs and custom requirements welcome. Our Hyderabad team is ready to help.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-accent font-semibold text-accent-foreground hover:bg-accent/90">
              <Link href="/contact">Get a Free Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10">
              <a href={business.phoneHref}><Phone className="mr-2 size-4" />{business.phoneDisplay}</a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
