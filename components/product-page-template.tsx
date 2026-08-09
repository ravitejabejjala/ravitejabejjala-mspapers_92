'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Award, CheckCircle2, MessageCircle, PackageCheck, Truck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import RecentlyViewedProducts, { TrackViewedProduct } from '@/components/recently-viewed-products'
import { searchEntries } from '@/lib/catalog-navigation'

interface ProductPageTemplateProps {
  title: string
  subtitle: string
  description: string
  image: string
  features: string[]
  applications: string[]
  specifications: { label: string; value: string }[]
  pricing?: { min: string; max: string; unit: string }
  callToAction?: string
}

export default function ProductPageTemplate({ title, subtitle, description, image, features, applications, specifications, callToAction = 'Request a Quote' }: ProductPageTemplateProps) {
  const slug = title.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
  const href = `/products/${slug}`
  const related = searchEntries.filter((entry) => entry.type === 'Category' && entry.name !== title && entry.image).slice(0, 4)
  const faqs = [
    ['Can these products be customized?', 'Yes. Size, material, printing, handles and finishes can be tailored to your requirements.'],
    ['What information is needed for a quote?', 'Share the required size, quantity, material, printing details and preferred delivery timeline.'],
    ['Do you support bulk business orders?', 'Yes. We manufacture for wholesale, corporate and recurring business requirements across India.'],
  ]

  return (
    <main className="min-h-screen bg-background">
      <TrackViewedProduct item={{ name: title, href, image }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map(([question, answer]) => ({
              '@type': 'Question',
              name: question,
              acceptedAnswer: { '@type': 'Answer', text: answer },
            })),
          }),
        }}
      />
      <div className="mx-auto max-w-7xl px-4 py-4">
        <Breadcrumb><BreadcrumbList><BreadcrumbItem><BreadcrumbLink asChild><Link href="/">Home</Link></BreadcrumbLink></BreadcrumbItem><BreadcrumbSeparator /><BreadcrumbItem><BreadcrumbLink asChild><Link href="/products">Products</Link></BreadcrumbLink></BreadcrumbItem><BreadcrumbSeparator /><BreadcrumbItem><BreadcrumbPage>{title}</BreadcrumbPage></BreadcrumbItem></BreadcrumbList></Breadcrumb>
      </div>

      <section className="border-y border-border bg-muted/40 py-10 md:py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 lg:flex-row">
          <div className="flex-1">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-card shadow-sm">
              <Image src={image} alt={`${title} for business orders in Hyderabad`} fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 52vw" />
            </div>
            <p className="mt-3 text-center text-xs text-muted-foreground">Product appearance can be customized to your brand and specifications.</p>
          </div>
          <div className="flex flex-1 flex-col justify-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-wider text-accent">Made for business orders</p>
            <h1 className="text-balance text-4xl font-bold text-primary md:text-5xl">{title}</h1>
            <p className="mt-3 text-xl font-medium text-foreground">{subtitle}</p>
            <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">{description}</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {features.slice(0, 6).map((feature) => <li key={feature} className="flex gap-2 text-sm"><CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent" />{feature}</li>)}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-accent font-bold text-accent-foreground hover:bg-accent/90"><Link href="/contact">{callToAction}<ArrowRight className="size-4" /></Link></Button>
              <Button asChild size="lg" variant="outline"><a href={`https://wa.me/918143330028?text=${encodeURIComponent(`Hi, I need details about ${title}.`)}`} target="_blank" rel="noopener noreferrer"><MessageCircle className="size-4" />Quick inquiry</a></Button>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">Contact our team for a requirement-based business quote.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-6 md:grid-cols-3">
          {[[Award, 'Quality assured', 'Careful material selection and production checks.'], [PackageCheck, 'Custom production', 'Sizes, branding and finishes tailored to your brief.'], [Truck, 'Reliable delivery', 'Clear timelines and dispatch support across India.']].map(([Icon, heading, copy]) => {
            const FeatureIcon = Icon as typeof Award
            return <div key={heading as string} className="rounded-xl border border-border bg-card p-6"><FeatureIcon className="size-8 text-accent" /><h2 className="mt-4 font-bold text-primary">{heading as string}</h2><p className="mt-2 text-sm text-muted-foreground">{copy as string}</p></div>
          })}
        </div>
      </section>

      <section className="border-y border-border bg-muted/40 py-14">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-2">
          <div><h2 className="text-3xl font-bold text-primary">Applications & uses</h2><div className="mt-6 grid gap-3 sm:grid-cols-2">{applications.map((application) => <div key={application} className="rounded-lg border border-border bg-background p-4 text-sm">{application}</div>)}</div></div>
          <div><h2 className="text-3xl font-bold text-primary">Specifications</h2><div className="mt-6 overflow-hidden rounded-lg border border-border bg-background">{specifications.map((spec, index) => <div key={spec.label} className={`flex flex-col gap-1 p-4 sm:flex-row sm:justify-between ${index ? 'border-t border-border' : ''}`}><span className="font-semibold text-primary">{spec.label}</span><span className="text-sm text-muted-foreground sm:text-right">{spec.value}</span></div>)}</div></div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-14"><h2 className="text-center text-3xl font-bold text-primary">Frequently asked questions</h2><Accordion type="single" collapsible className="mt-6">{faqs.map(([question, answer]) => <AccordionItem key={question} value={question}><AccordionTrigger>{question}</AccordionTrigger><AccordionContent>{answer}</AccordionContent></AccordionItem>)}</Accordion></section>

      <section className="border-t border-border py-14"><div className="mx-auto max-w-7xl px-4"><div className="mb-6 flex items-end justify-between"><div><p className="text-sm font-bold uppercase tracking-wider text-accent">You may also need</p><h2 className="text-3xl font-bold text-primary">Related categories</h2></div><Link href="/products" className="text-sm font-semibold text-primary hover:text-accent">View all</Link></div><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{related.map((item) => <Link key={item.href} href={item.href} className="group overflow-hidden rounded-xl border border-border bg-card shadow-sm hover:border-accent"><div className="relative aspect-[4/3] bg-muted"><Image src={item.image!} alt={item.name} fill className="object-cover transition-transform group-hover:scale-105" /></div><div className="p-4 font-bold text-primary group-hover:text-accent">{item.name}</div></Link>)}</div></div></section>
      <section className="border-t border-border bg-muted/40 py-12">
        <div className="mx-auto max-w-7xl px-4">
          <p className="section-kicker">Need more than one item?</p>
          <h2 className="mt-2 text-3xl font-bold text-primary">Build a complete business order</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button asChild variant="outline"><Link href="/printing">Explore Printing Services</Link></Button>
            <Button asChild variant="outline"><Link href="/industries">Browse Industry Solutions</Link></Button>
            <Button asChild variant="outline"><Link href="/resources">Read Packaging Guides</Link></Button>
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90"><Link href="/contact">Discuss Your Requirement <ArrowRight data-icon="inline-end" /></Link></Button>
          </div>
        </div>
      </section>
      <RecentlyViewedProducts />
    </main>
  )
}
