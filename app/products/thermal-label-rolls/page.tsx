import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle2, ArrowRight, Zap, Printer, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Thermal Label Rolls | 4x6 Thermal Labels | MS Paper Products Hyderabad',
  description: 'Premium thermal label rolls for high-speed printing. 4x6, 3x5, 6x8 sizes. Self-adhesive, fast scanning, waterproof options. Direct manufacturer. Bulk pricing available.',
  keywords: ['thermal label rolls', '4x6 thermal labels', 'barcode label rolls', 'shipping labels', 'thermal printer labels'],
}

export default function ThermalLabelRollsPage() {
  const features = [
    { title: 'Fast Printing', description: 'No ink required - thermal printing for instant, clear results on high-speed printers' },
    { title: 'High Scan Accuracy', description: 'Premium quality ensures barcodes scan correctly every time for efficient logistics' },
    { title: 'Multiple Sizes', description: 'Available in 4x6", 3x5", and 6x8" - compatible with all major thermal printers' },
    { title: 'Durable Adhesive', description: 'Strong permanent adhesive that withstands harsh shipping and handling conditions' },
    { title: 'Cost-Effective', description: 'Economical per-unit pricing with bulk order discounts for high-volume operations' },
    { title: 'Indian Standard Sizing', description: 'Designed for Indian logistics and ecommerce operations - standard industry sizes' },
  ]

  const products = [
    {
      name: '4x6 Thermal Labels (Industry Standard)',
      description: 'Standard size used by all major courier services and logistics companies',
      specs: 'Size: 4" x 6" | 500 labels/roll | Permanent adhesive',
      price: '₹0.85 - ₹1.50',
      minOrder: '10 rolls (5000 labels)',
      image: '/products/shipping-label-4x6.png',
    },
    {
      name: '3x5 Compact Thermal Labels',
      description: 'Perfect for small parcels, lightweight shipments, and tight spaces',
      specs: 'Size: 3" x 5" | 1000 labels/roll | High-quality adhesive',
      price: '₹0.65 - ₹1.20',
      minOrder: '10 rolls (10000 labels)',
      image: '/products/shipping-label-3x5.png',
    },
    {
      name: '6x8 Extended Thermal Labels',
      description: 'Large format with space for detailed shipping and handling information',
      specs: 'Size: 6" x 8" | 300 labels/roll | Premium adhesive',
      price: '₹1.20 - ₹2.00',
      minOrder: '10 rolls (3000 labels)',
      image: '/products/shipping-label-6x8.png',
    },
    {
      name: 'Waterproof Thermal Labels',
      description: 'Weather-resistant labels for outdoor operations and extreme conditions',
      specs: 'Size: 4x6" | Waterproof material | 500 labels/roll',
      price: '₹1.50 - ₹2.50',
      minOrder: '10 rolls (5000 labels)',
      image: '/products/waterproof-barcode-label.png',
    },
  ]

  return (
    <main className='min-h-screen bg-white'>
      {/* Hero Section */}
      <section className='bg-gradient-to-r from-[#132635] to-[#1a3a52] py-20 text-white'>
        <div className='container mx-auto px-4'>
          <h1 className='mb-4 text-4xl font-bold md:text-5xl'>Thermal Label Rolls</h1>
          <p className='mb-6 text-xl text-gray-200'>High-quality thermal labels for fast printing and reliable barcode scanning</p>
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
          <h2 className='mb-12 text-center text-3xl font-bold text-[#132635]'>Why Choose Our Thermal Labels</h2>
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
          <h2 className='mb-12 text-center text-3xl font-bold text-[#132635]'>Our Thermal Label Products</h2>
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
                  <p className='mb-2 text-sm text-gray-600'>{product.description}</p>
                  <p className='mb-3 text-xs text-gray-500 bg-gray-100 p-2 rounded'>{product.specs}</p>
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

      {/* Applications Section */}
      <section className='bg-[#132635] py-16 text-white'>
        <div className='container mx-auto px-4'>
          <h2 className='mb-12 text-center text-3xl font-bold'>Perfect for Your Operations</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='flex gap-4'>
              <Printer className='h-12 w-12 flex-shrink-0 text-[#f19e1f]' />
              <div>
                <h3 className='mb-2 font-bold'>Logistics & Courier</h3>
                <p className='text-gray-300'>Essential for shipping, tracking, and warehouse management operations</p>
              </div>
            </div>
            <div className='flex gap-4'>
              <TrendingUp className='h-12 w-12 flex-shrink-0 text-[#f19e1f]' />
              <div>
                <h3 className='mb-2 font-bold'>Ecommerce Fulfillment</h3>
                <p className='text-gray-300'>High-speed printing for handling massive order volumes daily</p>
              </div>
            </div>
            <div className='flex gap-4'>
              <Zap className='h-12 w-12 flex-shrink-0 text-[#f19e1f]' />
              <div>
                <h3 className='mb-2 font-bold'>Inventory Management</h3>
                <p className='text-gray-300'>Reliable barcode labels for accurate stock tracking and control</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='bg-gray-50 py-16'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='mb-4 text-3xl font-bold text-[#132635]'>Need Thermal Labels?</h2>
          <p className='mb-8 text-gray-600'>Contact us for bulk pricing, samples, and custom label specifications</p>
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
