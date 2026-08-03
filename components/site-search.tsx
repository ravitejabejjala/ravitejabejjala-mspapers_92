'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Search } from 'lucide-react'
import { searchEntries } from '@/lib/catalog-navigation'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

export default function SiteSearch() {
  const router = useRouter()
  const [open, setOpen] = useState(false)

  const navigate = (href: string) => {
    setOpen(false)
    router.push(href)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          type="button"
          aria-label="Search products and services"
          className="flex h-11 w-full items-center gap-3 rounded-md border border-border bg-background px-4 text-left text-sm text-muted-foreground shadow-sm transition-colors hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <Search className="size-4" />
          <span className="truncate">Search products, categories, services...</span>
        </button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-[min(92vw,640px)] p-0">
        <Command>
          <CommandInput placeholder="Try paper bags, labels, offset printing..." />
          <CommandList className="max-h-96">
            <CommandEmpty>No matching products or services found.</CommandEmpty>
            {(['Product', 'Category', 'Service', 'Industry'] as const).map((type) => (
              <CommandGroup key={type} heading={`${type}s`}>
                {searchEntries.filter((entry) => entry.type === type).map((entry) => (
                  <CommandItem key={`${type}-${entry.href}-${entry.name}`} value={`${entry.name} ${entry.description ?? ''}`} onSelect={() => navigate(entry.href)}>
                    <span className="flex-1 font-medium">{entry.name}</span>
                    <span className="text-xs text-muted-foreground">{entry.type}</span>
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
