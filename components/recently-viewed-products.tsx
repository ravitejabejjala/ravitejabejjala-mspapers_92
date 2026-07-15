'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

type ViewedItem = { name: string; href: string; image: string }
const key = 'ms-paper-recently-viewed'

export function TrackViewedProduct({ item }: { item: ViewedItem }) {
  useEffect(() => {
    const current = JSON.parse(sessionStorage.getItem(key) ?? '[]') as ViewedItem[]
    sessionStorage.setItem(key, JSON.stringify([item, ...current.filter((saved) => saved.href !== item.href)].slice(0, 6)))
  }, [item])
  return null
}

export default function RecentlyViewedProducts() {
  const [items, setItems] = useState<ViewedItem[]>([])
  useEffect(() => setItems(JSON.parse(sessionStorage.getItem(key) ?? '[]')), [])
  if (!items.length) return null

  return (
    <section className="border-t border-border bg-muted/40 py-12">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-6 text-2xl font-bold text-primary">Recently viewed</h2>
        <div className="flex gap-4 overflow-x-auto pb-2">
          {items.map((item) => (
            <Link key={item.href} href={item.href} className="flex min-w-56 items-center gap-3 rounded-lg border border-border bg-card p-3 shadow-sm hover:border-accent">
              <div className="relative size-16 shrink-0 overflow-hidden rounded-md bg-muted"><Image src={item.image} alt="" fill className="object-cover" /></div>
              <span className="font-semibold text-primary">{item.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
