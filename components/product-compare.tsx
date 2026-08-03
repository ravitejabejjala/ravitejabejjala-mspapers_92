'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Scale, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

type CompareItem = { id: string; name: string; href: string; features: string[]; minOrder?: string }
const key = 'ms-paper-compare'
const eventName = 'ms-paper-compare-change'

export function CompareButton({ item }: { item: CompareItem }) {
  const [active, setActive] = useState(false)
  useEffect(() => {
    const sync = () => setActive((JSON.parse(sessionStorage.getItem(key) ?? '[]') as CompareItem[]).some((saved) => saved.id === item.id))
    sync(); window.addEventListener(eventName, sync)
    return () => window.removeEventListener(eventName, sync)
  }, [item.id])

  const toggle = () => {
    const current = JSON.parse(sessionStorage.getItem(key) ?? '[]') as CompareItem[]
    const next = active ? current.filter((saved) => saved.id !== item.id) : [...current, item].slice(-3)
    sessionStorage.setItem(key, JSON.stringify(next)); window.dispatchEvent(new Event(eventName))
  }

  return <Button type="button" variant="outline" size="sm" onClick={toggle} className="w-full"><Scale className="size-4" />{active ? 'Remove from compare' : 'Compare'}</Button>
}

export default function CompareTray() {
  const [items, setItems] = useState<CompareItem[]>([])
  useEffect(() => {
    const sync = () => setItems(JSON.parse(sessionStorage.getItem(key) ?? '[]'))
    sync(); window.addEventListener(eventName, sync)
    return () => window.removeEventListener(eventName, sync)
  }, [])
  if (!items.length) return null

  const remove = (id: string) => {
    sessionStorage.setItem(key, JSON.stringify(items.filter((item) => item.id !== id)))
    window.dispatchEvent(new Event(eventName))
  }

  return (
    <aside className="fixed inset-x-4 bottom-20 z-50 mx-auto max-w-4xl rounded-xl border border-accent bg-primary p-4 text-primary-foreground shadow-2xl md:bottom-5" aria-label="Product comparison">
      <div className="flex items-center justify-between gap-4">
        <div><p className="font-bold">Compare products</p><p className="text-xs text-primary-foreground/70">Review up to three selections side by side</p></div>
        <Button asChild size="sm" className="bg-accent text-accent-foreground"><Link href="/contact">Ask about selection</Link></Button>
      </div>
      <div className="mt-3 grid gap-2 sm:grid-cols-3">
        {items.map((item) => (
          <div key={item.id} className="rounded-lg bg-primary-foreground/10 p-3">
            <div className="flex items-start justify-between gap-2"><Link href={item.href} className="font-semibold hover:text-accent">{item.name}</Link><button type="button" onClick={() => remove(item.id)} aria-label={`Remove ${item.name}`}><X className="size-4" /></button></div>
            {item.minOrder && <p className="mt-2 text-xs text-primary-foreground/70">Minimum order: {item.minOrder}</p>}
            <ul className="mt-2 flex flex-col gap-1 text-xs">{item.features.slice(0, 3).map((feature) => <li key={feature}>• {feature}</li>)}</ul>
          </div>
        ))}
      </div>
    </aside>
  )
}
