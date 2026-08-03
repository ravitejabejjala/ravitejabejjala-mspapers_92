import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle2, ArrowRight, Truck, Shield, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Ecommerce Courier Covers | Waterproof Shipping Bags | MS Paper Products',
  description: 'Premium waterproof ecommerce courier covers in Indian standard sizes (10x14, 12x16, 14x20 inches). Custom printing, bulk orders, fast delivery. Direct manufacturer in Hyderabad.',
  keywords: ['ecommerce courier covers', 'waterproof shipping bags', 'courier covers 10x14', 'paper courier covers', 'branded covers'],
}

export default function EcommerceCourierCoversPage() {
  const features = [
    { title: 'Waterproof Material', description: 'LDPE material ensures complete protection from moisture and damage during transit' },
    { title: 'Multiple Sizes', description: 'Available in 10x14", 12x16", and 14x20" - standard Indian ecommerce sizes' },
    { title: 'Custom Printing', description: 'Full color printing with your company logo and design for brand visibility' },
    { title: 'Bulk Ordering', description: 'Minimum 500 pieces with competitive pricing for high-volume orders' },
    { title: 'Fast Delivery', description: 'Quick turnaround time to meet your ecommerce shipping deadlines' },
    { title: 'Cost-Effective', description: 'Best pricing in Hyderabad for premium quality courier covers' },
  ]

  const products = [
    {
      name: 'Standard Ecommerce Covers (10x14")',
      description: 'Most popular size for apparel, books, and general merchandise',
      price: '₹2.50 - ₹4.00',
      minOrder: '500 pieces',
      image: '/products/medium-courier-cover.png',
    },
    {
      name: 'Large Ecommerce Covers (12x16")',
      description: 'Extended size for bulky items, electronics, and footwear',
      price: '₹3.50 - ₹5.50',
      minOrder: '500 pieces',
      image: '/products/large-courier-cover.png',
    },
    {
      name: 'Extra Large Covers (14x20")',
      description: 'Heavy-duty size for furniture, bedding, and bulk orders',
      price: '₹4.50 - ₹7.00',
      minOrder: '500 pieces',
      image: '/products/large-courier-cover.png',
    },
    {
      name: 'Custom Branded Covers',
      description: 'Personalized design with your company branding and logo',
      price: 'Custom Pricing',
      minOrder: '1000 pieces',
      image: '/products/branded-courier-cover.png',
    },
  ]

  return (
    <main className='min-h-screen bg-white'>
      {/* Hero Section */}
      <section className='bg-gradient-to-r from-[#132635] to-[#1a3a52] py-20 text-white'>
        <div className='container mx-auto px-4'>
          <h1 className='mb-4 text-4xl font-bold md:text-5xl'>Ecommerce Courier Covers</h1>
          <p className='mb-6 text-xl text-gray-200'>Professional waterproof courier covers for safe and reliable package delivery</p>
          <div className='flex gap-4'>
            <Button asChild className='bg-[#f19e1f] text-[#132635] hover:bg-[#f19e1f]/90'>
              <Link href='/contact'>Get Quote Today</Link>
            </Button>
            <Button asChild variant='outline' className='border-white text-white hover:bg-white hover:text-[#132635]'>
              <Link href='/gallery'>View Gallery</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className='py-16 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <h2 className='mb-12 text-center text-3xl font-bold text-[#132635]'>Why Choose MS Paper Products</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {features.map((feature, idx) => (
              <Card key={idx} className='border-0 shadow-lg hover:shadow-xl transition-shadow'>
                <CardContent className='p-6'>
                  <CheckCircle2 className='mb-4 h-8 w-8 text-[#f19e1f]' />
                  <h3 className='mb-2 text-xl font-semibold text-[#132635]'>{feature.title}</h3>
                  <p className='text-gray-600'>{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className='py-16'>
        <div className='container mx-auto px-4'>
          <h2 className='mb-12 text-center text-3xl font-bold text-[#132635]'>Our Product Range</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {products.map((product, idx) => (
              <Card key={idx} className='border-0 shadow-lg overflow-hidden hover:shadow-xl transition-all'>
                <div className='relative h-48 bg-gray-200'>
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className='object-cover'
                  />
                </div>
                <CardContent className='p-4'>
                  <h3 className='mb-2 font-bold text-[#132635]'>{product.name}</h3>
                  <p className='mb-4 text-sm text-gray-600'>{product.description}</p>
                  <div className='mb-4 space-y-1 text-sm'>
                    <p className='font-semibold text-[#f19e1f]'>Price: {product.price}</p>
                    <p className='text-gray-600'>Min Order: {product.minOrder}</p>
                  </div>
                  <Button asChild className='w-full bg-[#132635] hover:bg-[#132635]/90'>
                    <Link href='/contact'>Get Quote</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className='bg-[#132635] py-16 text-white'>
        <div className='container mx-auto px-4'>
          <h2 className='mb-12 text-center text-3xl font-bold'>Perfect for Your Ecommerce Business</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='flex gap-4'>
              <Truck className='h-12 w-12 flex-shrink-0 text-[#f19e1f]' />
              <div>
                <h3 className='mb-2 font-bold'>Fast Shipping</h3>
                <p className='text-gray-300'>Quick turnaround time to meet your ecommerce deadlines and shipping schedules</p>
              </div>
            </div>
            <div className='flex gap-4'>
              <Shield className='h-12 w-12 flex-shrink-0 text-[#f19e1f]' />
              <div>
                <h3 className='mb-2 font-bold'>Complete Protection</h3>
                <p className='text-gray-300'>Waterproof and tear-resistant material ensures your products arrive safely</p>
              </div>
            </div>
            <div className='flex gap-4'>
              <Zap className='h-12 w-12 flex-shrink-0 text-[#f19e1f]' />
              <div>
                <h3 className='mb-2 font-bold'>Brand Visibility</h3>
                <p className='text-gray-300'>Custom printing options help promote your brand with every delivery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='bg-gray-50 py-16'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='mb-4 text-3xl font-bold text-[#132635]'>Ready to Get Started?</h2>
          <p className='mb-8 text-gray-600'>Contact us for bulk pricing, samples, and custom printing options</p>
          <Button asChild className='bg-[#f19e1f] text-[#132635] hover:bg-[#f19e1f]/90 px-8 py-3 font-bold'>
            <Link href='/contact'>
              Request Quote
              <ArrowRight className='ml-2 h-4 w-4' />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
