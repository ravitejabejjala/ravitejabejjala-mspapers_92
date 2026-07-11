import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Calendar, User, ArrowRight, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog Article | MS Paper Products',
  description: 'Read our latest insights on packaging and printing solutions.',
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // This would typically fetch from a database or CMS
  const post = {
    title: 'How to Choose the Right Packaging for Your Products',
    excerpt: 'A comprehensive guide to selecting the best packaging materials and designs for your business needs.',
    author: 'MS Paper Products',
    date: 'May 15, 2024',
    readTime: '5 min read',
    category: 'Packaging Tips',
    content: `
      Choosing the right packaging is one of the most important decisions you'll make for your business. It directly impacts 
      customer perception, product protection, and your brand identity. In this comprehensive guide, we'll explore the key 
      factors to consider when selecting packaging for your products.

      ## Understanding Your Product Needs

      The first step in choosing the right packaging is understanding what your product requires. Consider the following factors:

      - **Product Type**: Different products require different packaging solutions. Fragile items need protective padding, 
        while food products require food-safe, moisture-resistant materials.
      - **Storage Requirements**: Some products need special storage conditions like temperature control or light protection.
      - **Shipping Distance**: Products being shipped long distances may need more robust packaging than those distributed locally.
      - **Environmental Exposure**: Consider whether your products will be exposed to moisture, sunlight, or temperature fluctuations.

      ## Material Selection

      Once you understand your product needs, consider the available materials:

      ### Kraft Paper
      - Eco-friendly and recyclable
      - Perfect for retail shopping bags and food packaging
      - Available in various weights and finishes
      - Cost-effective for bulk orders

      ### Corrugated Board
      - Excellent protective qualities
      - Suitable for shipping and storage
      - Customizable with printing
      - Recyclable and sustainable

      ### Polyethylene
      - Waterproof and durable
      - Ideal for courier covers and mailers
      - Lightweight and cost-effective
      - Weather-resistant properties

      ## Design Considerations

      Your packaging design should reflect your brand while serving its functional purpose. Consider these elements:

      1. **Brand Identity**: Your packaging should align with your brand colors, fonts, and overall aesthetic
      2. **Product Information**: Ensure all necessary information is clearly displayed
      3. **Visual Hierarchy**: Make important information stand out
      4. **Sustainability**: Consider eco-friendly design choices that appeal to modern consumers

      ## Cost Optimization

      Getting bulk quotes and comparing options can help optimize your packaging costs:

      - Order larger quantities for better per-unit pricing
      - Consider standardized sizes to reduce custom manufacturing costs
      - Evaluate total cost of ownership, not just material cost
      - Work with manufacturers who offer volume discounts

      ## Conclusion

      Choosing the right packaging is about balancing protection, aesthetics, sustainability, and cost. By considering 
      your product needs and working with experienced packaging partners, you can find solutions that enhance your brand 
      and satisfy your customers.

      Ready to find the perfect packaging for your products? Contact MS Paper Products for a consultation.
    `,
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#132635] to-[#1a3a52] py-16 text-white md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="mb-2 text-sm font-semibold text-[#f19e1f]">{post.category}</p>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">{post.title}</h1>
            <div className="flex flex-wrap gap-6 text-gray-300">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {post.date}
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                {post.author}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <article className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  {post.excerpt}
                </p>
                <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
                  {post.content}
                </div>
              </article>

              {/* Share Section */}
              <div className="mt-12 border-t pt-8">
                <h3 className="mb-4 font-bold text-[#132635]">Share this article</h3>
                <div className="flex gap-4">
                  <Button variant="outline" className="border-gray-300">Facebook</Button>
                  <Button variant="outline" className="border-gray-300">Twitter</Button>
                  <Button variant="outline" className="border-gray-300">LinkedIn</Button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* CTA Card */}
              <Card className="border-t-4 border-t-[#f19e1f]">
                <CardContent className="p-6">
                  <h3 className="mb-4 font-bold text-[#132635]">Need Packaging Solutions?</h3>
                  <p className="mb-4 text-sm text-gray-700">
                    Let our team help you find the perfect packaging for your products.
                  </p>
                  <Link href="/contact">
                    <Button className="w-full bg-[#f19e1f] text-[#132635] hover:bg-[#f19e1f]/90 font-bold">
                      Get a Quote
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Related Articles */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-4 font-bold text-[#132635]">Related Articles</h3>
                  <ul className="space-y-3">
                    <li>
                      <Link href="/blog/sustainable-packaging-blog" className="text-[#f19e1f] hover:text-[#f19e1f]/80 font-semibold text-sm">
                        Sustainable Packaging Solutions
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog/brand-identity-packaging" className="text-[#f19e1f] hover:text-[#f19e1f]/80 font-semibold text-sm">
                        Brand Identity Through Packaging
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog/customization-options" className="text-[#f19e1f] hover:text-[#f19e1f]/80 font-semibold text-sm">
                        Customization Options
                      </Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card className="bg-gray-50">
                <CardContent className="p-6">
                  <h3 className="mb-4 font-bold text-[#132635]">Get in Touch</h3>
                  <div className="space-y-2 text-sm">
                    <p className="text-gray-700">
                      <strong>Phone:</strong> +91 81433 30028
                    </p>
                    <p className="text-gray-700">
                      <strong>Email:</strong> info@mspaperproducts.com
                    </p>
                    <Link href="https://wa.me/918143330028" target="_blank" rel="noopener noreferrer">
                      <Button className="w-full mt-3 bg-green-600 hover:bg-green-700 text-white font-bold">
                        WhatsApp Us
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Blog */}
      <section className="py-12 border-t">
        <div className="container mx-auto px-4">
          <Link href="/blog" className="inline-flex items-center gap-2 text-[#f19e1f] hover:text-[#f19e1f]/80 font-semibold group">
            <ArrowRight className="h-4 w-4 group-hover:-translate-x-1 transition rotate-180" />
            Back to Blog
          </Link>
        </div>
      </section>
    </main>
  )
}
