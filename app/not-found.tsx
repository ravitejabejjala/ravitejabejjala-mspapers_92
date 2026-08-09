import Link from 'next/link'
import { ArrowRight, FileQuestion, Home, MessageCircle, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const popularLinks = [
  { href: '/products/paper-bags', label: 'Paper Bags' },
  { href: '/products/boxes-cartons', label: 'Packaging Boxes' },
  { href: '/printing', label: 'Printing Services' },
  { href: '/packaging-solutions', label: 'Packaging Solutions' },
  { href: '/contact', label: 'Contact MS Paper Products' },
]

export default function NotFound() {
  return (
    <main className="min-h-[70vh] bg-background px-4 py-20">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <div className="flex size-16 items-center justify-center rounded-2xl bg-accent/15 text-accent">
          <FileQuestion className="size-8" aria-hidden="true" />
        </div>
        <p className="mt-6 text-sm font-bold uppercase tracking-[0.22em] text-accent">Page not found</p>
        <h1 className="mt-3 text-balance text-4xl font-bold text-primary md:text-5xl">Let&apos;s get you back to the right product or service</h1>
        <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">The page may have moved. Search our product catalogue or explore the printing and packaging solutions available from MS Paper Products in Hyderabad.</p>
        <form action="/products" className="mt-8 flex w-full max-w-xl flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
            <Input name="q" placeholder="Search products and services" aria-label="Search products and services" className="h-12 pl-10" />
          </div>
          <Button type="submit" size="lg" className="bg-accent font-bold text-accent-foreground hover:bg-accent/90">Search</Button>
        </form>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg"><Link href="/"><Home data-icon="inline-start" />Back to Home</Link></Button>
          <Button asChild size="lg" variant="outline"><Link href="/contact"><MessageCircle data-icon="inline-start" />Request a Quote</Link></Button>
        </div>
      </div>
      <section className="mx-auto mt-16 max-w-5xl border-t border-border pt-10">
        <div className="flex items-center justify-between gap-4"><div><p className="section-kicker">Popular destinations</p><h2 className="mt-2 text-2xl font-bold text-primary">Explore MS Paper Products</h2></div><ArrowRight className="size-5 text-accent" aria-hidden="true" /></div>
        <nav aria-label="Popular pages" className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {popularLinks.map((link) => <Link key={link.href} href={link.href} className="rounded-xl border border-border bg-card p-4 text-sm font-semibold text-primary transition-colors hover:border-accent hover:text-accent">{link.label}</Link>)}
        </nav>
      </section>
    </main>
  )
}

export const metadata = {
  title: 'Page Not Found | MS Paper Products',
  robots: { index: false, follow: true },
}

export const dynamic = 'force-static'
