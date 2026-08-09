import type { LucideIcon } from "lucide-react"
import Link from "next/link"
import { CheckCircle2, Phone, MessageCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
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

export interface PrintingServiceData {
  slug: string
  title: string
  tagline: string
  description: string
  icon: LucideIcon
  heroColor: string
  benefits: string[]
  useCases: { title: string; detail: string }[]
  specs: { label: string; value: string }[]
  faqs: { q: string; a: string }[]
  schema: Record<string, unknown>
}

export default function PrintingServicePage({ data }: { data: PrintingServiceData }) {
  const Icon = data.icon

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data.schema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: data.faqs.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: { "@type": "Answer", text: item.a },
            })),
          }),
        }}
      />

      {/* Breadcrumb */}
      <div className="border-b border-border bg-muted/30 px-4 py-3">
        <div className="mx-auto max-w-7xl">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem><BreadcrumbLink asChild><Link href="/">Home</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbLink asChild><Link href="/printing">Printing Services</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbPage>{data.title}</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-primary py-16 text-primary-foreground md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex-1">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-sm font-semibold text-accent">
                <Icon className="size-4" aria-hidden="true" />
                MS Paper Products · Hyderabad
              </div>
              <h1 className="text-balance text-4xl font-bold leading-tight md:text-5xl">{data.title}</h1>
              <p className="mt-4 max-w-2xl text-lg text-primary-foreground/80">{data.tagline}</p>
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
            <div className="hidden shrink-0 items-center justify-center rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-10 lg:flex">
              <Icon className="size-24 text-accent" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      {/* Description + Benefits */}
      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-primary">About This Service</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">{data.description}</p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {data.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                    <span className="text-foreground">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specs */}
            <div className="rounded-xl border border-border bg-muted/30 p-6">
              <h2 className="mb-4 text-lg font-bold text-primary">Specifications & Capabilities</h2>
              <dl className="flex flex-col divide-y divide-border">
                {data.specs.map(({ label, value }) => (
                  <div key={label} className="flex items-center justify-between py-3">
                    <dt className="text-sm text-muted-foreground">{label}</dt>
                    <dd className="text-sm font-semibold text-primary">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-muted/30 py-14">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-center text-2xl font-bold text-primary">Who Uses This Service?</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground">
            We serve businesses across Hyderabad and PAN India requiring professional print solutions.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {data.useCases.map((uc) => (
              <article key={uc.title} className="rounded-xl border border-border bg-background p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-md">
                <h3 className="font-bold text-primary">{uc.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{uc.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-14">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-center text-2xl font-bold text-primary">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="mt-8">
            {data.faqs.map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left text-sm font-semibold text-primary hover:text-accent">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-muted/30 py-14">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-center text-2xl font-bold text-primary">Explore Other Printing Services</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {printingServices.filter((s) => !s.href.endsWith(`/${data.slug}`)).map((item) => (
              <Link key={item.href} href={item.href} className="flex items-start gap-3 rounded-xl border border-border bg-background p-5 transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-md">
                <item.icon className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-primary">{item.label}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{item.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-14 text-primary-foreground">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-3xl font-bold">Ready to Print? Let&apos;s Talk.</h2>
          <p className="mt-3 text-primary-foreground/80">
            Get a tailored quote from our team in Hyderabad. Bulk orders welcome across India.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-accent font-semibold text-accent-foreground hover:bg-accent/90">
              <Link href="/contact">Request a Quote</Link>
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
