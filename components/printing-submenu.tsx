"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { printingServices } from "@/lib/printing-services"

export { printingServices }

/* ── Desktop hover dropdown ───────────────────────────────────────────────── */
export function PrintingDropdown() {
  return (
    <div className="group relative">
      <Link
        href="/printing"
        className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-semibold text-primary transition-all group-hover:bg-accent/15 group-hover:text-accent"
      >
        Printing <ChevronDown className="size-3.5 transition-transform duration-200 group-hover:rotate-180" />
      </Link>

      {/* Dropdown panel */}
      <div className="invisible absolute left-0 top-full z-50 mt-1 w-72 translate-y-2 rounded-xl border border-border bg-background shadow-xl transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 opacity-0">
        <div className="p-2">
          {printingServices.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-start gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-accent/10 hover:text-accent"
            >
              <item.icon className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
              <div>
                <p className="text-sm font-semibold text-primary">{item.label}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{item.description}</p>
              </div>
            </Link>
          ))}
          <div className="mx-3 mt-2 border-t border-border pt-2">
            <Link href="/printing" className="block rounded-lg px-3 py-2 text-center text-xs font-semibold text-accent hover:bg-accent/10">
              View All Printing Services →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ── Mobile accordion ─────────────────────────────────────────────────────── */
export function PrintingAccordion({ onNavigate }: { onNavigate: () => void }) {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between rounded-md px-3 py-3 text-left font-semibold text-primary hover:bg-muted"
        aria-expanded={open}
      >
        Printing
        <ChevronDown className={`size-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="flex flex-col border-l-2 border-accent/40 pl-3">
          {printingServices.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              className="flex items-center gap-2 px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:text-accent"
            >
              <item.icon className="size-3.5 shrink-0 text-accent" aria-hidden="true" />
              {item.label}
            </Link>
          ))}
          <Link href="/printing" onClick={onNavigate} className="px-3 py-2 text-sm font-semibold text-accent">
            All Printing Services →
          </Link>
        </div>
      )}
    </div>
  )
}
