import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight, CalendarDays, Clock3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { business } from "@/lib/business-info"
import { getResourceGuide, resourceGuides } from "@/lib/resource-guides"

export const dynamicParams = false
export function generateStaticParams() { return resourceGuides.map(({ slug }) => ({ slug })) }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const guide = getResourceGuide((await params).slug)
  if (!guide) return {}
  return { title: guide.title, description: guide.description, alternates: { canonical: `/blog/${guide.slug}` }, openGraph: { title: guide.title, description: guide.description, images: [business.socialImage] } }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const guide = getResourceGuide((await params).slug)
  if (!guide) notFound()
  const canonical = `https://mspaperproducts.com/blog/${guide.slug}`
  const schema = { "@context": "https://schema.org", "@type": "Article", headline: guide.title, description: guide.description, mainEntityOfPage: canonical, author: { "@id": "https://mspaperproducts.com/#organization" }, publisher: { "@id": "https://mspaperproducts.com/#organization" }, image: `https://mspaperproducts.com${business.socialImage}` }
  return <main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <div className="mx-auto max-w-5xl px-4 py-4"><Breadcrumb><BreadcrumbList><BreadcrumbItem><BreadcrumbLink asChild><Link href="/">Home</Link></BreadcrumbLink></BreadcrumbItem><BreadcrumbSeparator /><BreadcrumbItem><BreadcrumbLink asChild><Link href="/blog">Resources</Link></BreadcrumbLink></BreadcrumbItem><BreadcrumbSeparator /><BreadcrumbItem><BreadcrumbPage>{guide.title}</BreadcrumbPage></BreadcrumbItem></BreadcrumbList></Breadcrumb></div>
    <header className="bg-primary py-16 text-primary-foreground"><div className="mx-auto max-w-5xl px-4"><p className="font-semibold uppercase tracking-widest text-accent">{guide.category}</p><h1 className="mt-3 max-w-4xl text-balance text-4xl font-bold md:text-6xl">{guide.title}</h1><p className="mt-5 max-w-3xl text-lg leading-relaxed text-primary-foreground/70">{guide.description}</p><div className="mt-6 flex gap-5 text-sm text-primary-foreground/60"><span className="flex items-center gap-2"><CalendarDays className="size-4" />Updated guide</span><span className="flex items-center gap-2"><Clock3 className="size-4" />6 min read</span></div></div></header>
    <div className="mx-auto grid max-w-5xl gap-10 px-4 py-14 lg:grid-cols-[1fr_280px]"><article className="flex flex-col gap-10">{guide.sections.map((section) => <section key={section.heading}><h2 className="text-2xl font-bold text-primary">{section.heading}</h2><p className="mt-3 leading-7 text-muted-foreground">{section.body}</p></section>)}</article><aside><div className="sticky top-40 rounded-xl border border-border bg-card p-6"><h2 className="text-xl font-bold text-primary">Need a tailored recommendation?</h2><p className="mt-3 text-sm leading-relaxed text-muted-foreground">Share your product, quantity, dimensions, printing, and delivery location with our team.</p><Button asChild className="mt-5 w-full bg-accent text-accent-foreground"><Link href="/contact">Request a Quote <ArrowRight className="size-4" /></Link></Button><a href={business.whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-4 block text-center text-sm font-semibold text-primary hover:text-accent">Discuss on WhatsApp</a></div></aside></div>
    <section className="bg-muted py-12"><div className="mx-auto max-w-5xl px-4"><h2 className="text-2xl font-bold text-primary">Continue exploring</h2><div className="mt-5 flex flex-wrap gap-3"><Button asChild variant="outline"><Link href="/products">Products</Link></Button><Button asChild variant="outline"><Link href="/printing">Printing Services</Link></Button><Button asChild variant="outline"><Link href="/packaging-solutions">Packaging Solutions</Link></Button><Button asChild variant="outline"><Link href="/resources">All Resources</Link></Button></div></div></section>
  </main>
}
