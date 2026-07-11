import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, Calendar, User } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog | MS Paper Products - Packaging & Printing Insights',
  description: 'Read our latest articles on packaging solutions, printing services, and industry insights.',
  keywords: ['blog', 'packaging', 'printing', 'articles', 'guides'],
}

export default function BlogPage() {
  const blogPosts = [
    {
      title: 'How to Choose the Right Packaging for Your Products',
      excerpt: 'Explore the key factors to consider when selecting packaging materials and designs for maximum impact on your business.',
      author: 'MS Paper Products',
      date: 'May 15, 2024',
      category: 'Packaging Tips',
      slug: 'choosing-packaging',
    },
    {
      title: 'Sustainable Packaging: Reducing Your Environmental Footprint',
      excerpt: 'Learn how eco-friendly packaging options can enhance your brand while protecting the planet for future generations.',
      author: 'MS Paper Products',
      date: 'May 10, 2024',
      category: 'Sustainability',
      slug: 'sustainable-packaging-blog',
    },
    {
      title: 'The Power of Brand Identity Through Packaging Design',
      excerpt: 'Discover how thoughtful packaging design can elevate your brand and create memorable customer experiences.',
      author: 'MS Paper Products',
      date: 'May 5, 2024',
      category: 'Design',
      slug: 'brand-identity-packaging',
    },
    {
      title: 'Offset vs Digital Printing: Making the Right Choice',
      excerpt: 'Compare offset and digital printing technologies to determine which solution best fits your business needs and budget.',
      author: 'MS Paper Products',
      date: 'April 30, 2024',
      category: 'Printing',
      slug: 'offset-vs-digital-blog',
    },
    {
      title: 'Customization Options for Your Packaging',
      excerpt: 'Explore the endless customization possibilities available to make your packaging truly unique and branded.',
      author: 'MS Paper Products',
      date: 'April 25, 2024',
      category: 'Customization',
      slug: 'customization-options',
    },
    {
      title: 'Cost-Effective Bulk Ordering: Tips and Strategies',
      excerpt: 'Maximize savings on bulk orders with our expert tips on packaging procurement and order optimization.',
      author: 'MS Paper Products',
      date: 'April 20, 2024',
      category: 'Business',
      slug: 'bulk-ordering-tips',
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#132635] to-[#1a3a52] py-16 text-white md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Our Blog</h1>
          <p className="text-xl text-gray-300">
            Industry insights, packaging tips, and printing solutions to help your business succeed.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, idx) => (
              <Card key={idx} className="hover:shadow-lg transition overflow-hidden flex flex-col">
                <CardContent className="p-6 flex flex-col flex-grow">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#f19e1f] bg-[#f19e1f]/10 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-[#132635] line-clamp-2">{post.title}</h3>
                  <p className="mb-4 text-gray-700 line-clamp-3 flex-grow">{post.excerpt}</p>
                  <div className="mb-4 space-y-2 text-sm text-gray-600 border-t pt-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      {post.author}
                    </div>
                  </div>
                  <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-[#f19e1f] hover:text-[#f19e1f]/80 font-semibold group">
                    Read Article
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-[#132635]">Stay Updated</h2>
            <p className="mb-8 text-gray-700">
              Subscribe to our newsletter to receive the latest articles and insights directly in your inbox.
            </p>
            <form className="flex gap-3 sm:flex-row flex-col">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#f19e1f]"
              />
              <Button className="bg-[#f19e1f] text-[#132635] hover:bg-[#f19e1f]/90 font-bold">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#132635] to-[#1a3a52] py-16 text-white md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">Ready to Transform Your Packaging?</h2>
          <p className="mb-8 text-gray-300">
            Let our team help you find the perfect packaging and printing solutions for your business.
          </p>
          <Link href="/contact">
            <Button className="bg-[#f19e1f] text-[#132635] hover:bg-[#f19e1f]/90 font-bold">
              Get a Quote Today
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
