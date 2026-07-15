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
    <aside className="fixed inset-x-4 bottom-20 z-50 mx-auto max-w-3xl rounded-xl border border-accent bg-primary p-4 text-primary-foreground shadow-2xl md:bottom-5">
      <div className="flex flex-wrap items-center gap-3">
        <div className="mr-auto"><p className="font-bold">Compare products</p><p className="text-xs text-primary-foreground/70">Select up to three products</p></div>
        {items.map((item) => <span key={item.id} className="flex items-center gap-2 rounded-md bg-primary-foreground/10 px-3 py-2 text-sm">{item.name}<button onClick={() => remove(item.id)} aria-label={`Remove ${item.name}`}><X className="size-4" /></button></span>)}
        <Button asChild className="bg-accent text-accent-foreground"><Link href="/contact">Ask about selection</Link></Button>
      </div>
    </aside>
  )
}
