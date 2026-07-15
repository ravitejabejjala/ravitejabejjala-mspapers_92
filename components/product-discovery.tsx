import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { newEntries, searchEntries } from '@/lib/catalog-navigation'
import RecentlyViewedProducts from '@/components/recently-viewed-products'

export default function ProductDiscovery() {
  const recommended = searchEntries.filter((entry) => entry.type === 'Category' && entry.image).slice(0, 6)
  return (
    <>
      <section className="border-t border-border bg-muted/40 py-14">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-end justify-between gap-4"><div><p className="text-sm font-bold uppercase tracking-wider text-accent">Fresh from our catalog</p><h2 className="text-3xl font-bold text-primary">Recently added</h2></div><Link href="/contact" className="text-sm font-semibold text-primary hover:text-accent">Need something custom?</Link></div>
          <div className="mt-6 flex gap-4 overflow-x-auto pb-3">
            {newEntries.map((item) => <Link key={`${item.href}-${item.name}`} href={item.href} className="group min-w-64 overflow-hidden rounded-xl border border-border bg-card shadow-sm hover:border-accent"><div className="relative aspect-[4/3] bg-muted">{item.image && <Image src={item.image} alt={item.name} fill className="object-cover transition-transform group-hover:scale-105" />}</div><div className="p-4"><span className="text-xs font-bold uppercase text-accent">New</span><h3 className="mt-1 font-bold text-primary">{item.name}</h3><span className="mt-3 flex items-center gap-1 text-sm font-semibold text-primary">View details <ArrowRight className="size-4" /></span></div></Link>)}
          </div>
        </div>
      </section>
      <section className="py-14"><div className="mx-auto max-w-7xl px-4"><h2 className="text-3xl font-bold text-primary">Recommended for your business</h2><div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{recommended.map((item) => <Link key={item.href} href={item.href} className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 hover:border-accent"><div className="relative size-20 shrink-0 overflow-hidden rounded-lg bg-muted"><Image src={item.image!} alt="" fill className="object-cover" /></div><div><h3 className="font-bold text-primary">{item.name}</h3><p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{item.description}</p></div></Link>)}</div></div></section>
      <RecentlyViewedProducts />
    </>
  )
}
