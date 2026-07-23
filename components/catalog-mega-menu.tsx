'use client'

import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { mainCategories } from '@/lib/products-data'

export default function CatalogMegaMenu() {
  return (
    <div className="group relative">
      <button type="button" className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-semibold text-primary transition-all group-hover:bg-accent/15 group-hover:text-accent" aria-haspopup="true">
        Products <ChevronDown className="size-4" />
      </button>
      <div className="invisible fixed inset-x-0 top-[148px] z-50 translate-y-2 border-y border-border bg-background opacity-0 shadow-xl transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
        <div className="mx-auto grid max-w-7xl grid-cols-4 gap-8 px-4 py-8">
          {mainCategories.slice(0, 4).map((main) => (
            <div key={main.slug}>
              <Link href={`/products/${main.slug}`} className="mb-3 block border-b border-accent/40 pb-2 font-bold text-primary hover:text-accent">
                {main.name}
              </Link>
              <ul className="flex flex-col gap-2">
                {main.subcategories.slice(0, 7).map((category) => (
                  <li key={category.slug}>
                    <Link href={`/products/${category.slug}`} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="col-span-4 flex items-center justify-between border-t border-border pt-5">
            <p className="text-sm text-muted-foreground">Bulk orders, custom sizes and branded finishes available.</p>
            <Link href="/products" className="rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90">View all products</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
