import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, FileText, BookOpen, HelpCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Resources & Guides | MS Paper Products',
  description: 'Download guides, case studies, and helpful resources for packaging and printing solutions.',
  keywords: ['resources', 'guides', 'case studies', 'whitepapers', 'packaging tips'],
}

export default function ResourcesPage() {
  const resourceCategories = [
    {
      title: 'Packaging Guides',
      description: 'Learn about packaging selection, design considerations, and best practices.',
      icon: BookOpen,
      items: [
        { title: 'Packaging Material Selection Guide', slug: 'packaging-material-guide' },
        { title: 'Custom Packaging Design Tips', slug: 'packaging-design-tips' },
        { title: 'Sustainable Packaging Solutions', slug: 'sustainable-packaging' },
      ],
    },
    {
      title: 'Printing Services',
      description: 'Understand printing technologies, finishes, and how to choose the right service.',
      icon: FileText,
      items: [
        { title: 'Offset vs Digital Printing: Which is Right for You?', slug: 'offset-vs-digital' },
        { title: 'Understanding Print Finishes and Special Effects', slug: 'print-finishes' },
        { title: 'Color Management in Printing', slug: 'color-management' },
      ],
    },
    {
      title: 'FAQs',
      description: 'Common questions and answers about our products and services.',
      icon: HelpCircle,
      items: [
        { title: 'Ordering and Pricing FAQs', slug: 'ordering-faq' },
        { title: 'Customization and Design FAQs', slug: 'customization-faq' },
        { title: 'Delivery and Logistics FAQs', slug: 'delivery-faq' },
      ],
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#132635] to-[#1a3a52] py-16 text-white md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Resources & Guides</h1>
          <p className="text-xl text-gray-300">
            Learn everything you need to know about packaging, printing, and choosing the right solutions for your business.
          </p>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {resourceCategories.map((category, idx) => {
              const IconComponent = category.icon
              return (
                <Card key={idx} className="border-t-4 border-t-[#f19e1f] overflow-hidden">
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center gap-3">
                      <IconComponent className="h-8 w-8 text-[#f19e1f]" />
                      <h2 className="text-2xl font-bold text-[#132635]">{category.title}</h2>
                    </div>
                    <p className="mb-6 text-gray-700">{category.description}</p>
                    <ul className="space-y-3 mb-6">
                      {category.items.map((item, itemIdx) => (
                        <li key={itemIdx}>
                          <Link href={`/resources/${item.slug}`} className="flex items-center gap-2 text-[#f19e1f] hover:text-[#f19e1f]/80 font-semibold group">
                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-[#132635]">Latest from Our Blog</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: 'How to Choose the Right Packaging for Your Products',
                excerpt: 'Explore the key factors to consider when selecting packaging materials and designs for maximum impact.',
                date: 'May 15, 2024',
                slug: 'choosing-packaging',
              },
              {
                title: 'Sustainable Packaging: Reducing Your Environmental Footprint',
                excerpt: 'Learn how eco-friendly packaging options can enhance your brand while protecting the planet.',
                date: 'May 10, 2024',
                slug: 'sustainable-packaging-blog',
              },
              {
                title: 'The Power of Brand Identity Through Packaging Design',
                excerpt: 'Discover how thoughtful packaging design can elevate your brand and create memorable customer experiences.',
                date: 'May 5, 2024',
                slug: 'brand-identity-packaging',
              },
            ].map((post, idx) => (
              <Card key={idx} className="hover:shadow-lg transition overflow-hidden">
                <CardContent className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                  <h3 className="mb-3 text-xl font-bold text-[#132635]">{post.title}</h3>
                  <p className="mb-4 text-gray-700">{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-[#f19e1f] hover:text-[#f19e1f]/80 font-semibold group">
                    Read More
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/blog">
              <Button className="bg-[#f19e1f] text-[#132635] hover:bg-[#f19e1f]/90 font-bold">
                View All Articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#132635] to-[#1a3a52] py-16 text-white md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">Still Have Questions?</h2>
          <p className="mb-8 text-gray-300">
            Contact our team directly for personalized assistance and expert guidance.
          </p>
          <Link href="/contact">
            <Button className="bg-[#f19e1f] text-[#132635] hover:bg-[#f19e1f]/90 font-bold">
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
