'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { AlertTriangle, Home, RefreshCw } from 'lucide-react'

export default function BlogError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="mx-auto max-w-md text-center">
        <AlertTriangle className="mx-auto size-16 text-accent mb-4" />
        <h1 className="text-3xl font-bold text-primary mb-2">Article Not Found</h1>
        <p className="text-muted-foreground mb-6">This article is no longer available. Check out our latest resources.</p>
        <div className="flex flex-col gap-3">
          <Button onClick={reset} className="bg-accent text-accent-foreground hover:bg-accent/90">
            <RefreshCw className="mr-2 size-4" />
            Retry
          </Button>
          <Button asChild variant="outline">
            <Link href="/blog">
              <Home className="mr-2 size-4" />
              All Articles
            </Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
