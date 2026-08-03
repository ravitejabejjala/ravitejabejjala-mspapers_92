import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'MS Gallery | Product Showcase | MS Paper Products',
  description: 'Browse our extensive gallery of paper bags, printing services, packaging solutions, and custom products. See quality examples of our work.',
  keywords: ['gallery', 'product showcase', 'paper bags', 'printing', 'packaging', 'MS Paper Products'],
}

const galleryCategories = [
  {
    id: 'paper-bags',
    name: 'Paper Bags',
    description: 'Premium quality paper bags for retail, gifts, and corporate use',
    items: [
      { title: 'Kraft Paper Bags', image: '/categories/kraft-paper-bags.jpg', size: '8x10 inches' },
      { title: 'Printed Paper Bags', image: '/products/small-courier-cover.png', size: 'Custom Print' },
      { title: 'Eco-Friendly Bags', image: '/products/eco-friendly-courier-cover.png', size: 'Biodegradable' },
      { title: 'Retail Carry Bags', image: '/products/medium-courier-cover.png', size: '10x14 inches' },
      { title: 'Corporate Bags', image: '/products/branded-courier-cover.png', size: 'Custom Branding' },
      { title: 'Wine Bottle Bags', image: '/products/large-courier-cover.png', size: '5x15 inches' },
    ],
  },
  {
    id: 'printing-services',
    name: 'Printing Services',
    description: 'High-quality offset and digital printing for various materials',
    items: [
      { title: 'Offset Printing', image: '/printing-services/offset-printing.jpg', type: 'Large Volume' },
      { title: 'Digital Printing', image: '/printing-services/digital-printing.jpg', type: 'Quick Turnaround' },
      { title: 'Brochure Printing', image: '/printing-services/brochure-printing.jpg', type: 'Professional' },
      { title: 'Flyer Printing', image: '/printing-services/flyer-printing.jpg', type: 'Marketing' },
      { title: 'Booklet Printing', image: '/printing-services/booklet-printing.jpg', type: 'Multi-page' },
      { title: 'Custom Printing', image: '/printing-services/custom-printing.jpg', type: 'Specialized' },
    ],
  },
  {
    id: 'packaging-solutions',
    name: 'Packaging Solutions',
    description: 'Complete packaging solutions for ecommerce and logistics',
    items: [
      { title: 'Courier Covers', image: '/products/medium-courier-cover.png', spec: '10x14 inches' },
      { title: 'Thermal Labels', image: '/products/thermal-labels.png', spec: '4x6 inches' },
      { title: 'Barcode Labels', image: '/products/custom-barcode-label.png', spec: 'Custom Print' },
      { title: 'Waterproof Labels', image: '/products/waterproof-barcode-label.png', spec: 'All-Weather' },
      { title: 'Shipping Labels', image: '/products/shipping-label-4x6.png', spec: 'Industry Standard' },
      { title: 'Fluorescent Labels', image: '/products/fluorescent-barcode-label.png', spec: 'High-Visibility' },
    ],
  },
  {
    id: 'custom-products',
    name: 'Custom Products',
    description: 'Tailored solutions with your branding and design',
    items: [
      { title: 'Branded Courier Covers', image: '/products/branded-courier-cover.png', feature: 'Full Color Print' },
      { title: 'Custom Boxes', image: '/products/packaging-boxes.png', feature: 'Any Size' },
      { title: 'Personalized Labels', image: '/products/custom-barcode-label.png', feature: 'Your Design' },
      { title: 'Corporate Packaging', image: '/public/products/packaging-boxes.png', feature: 'Professional' },
      { title: 'Gift Packaging', image: '/categories/ecommerce-covers.png', feature: 'Premium Quality' },
      { title: 'Bulk Orders', image: '/banners/ecommerce-covers-hero-banner.png', feature: 'Wholesale Pricing' },
    ],
  },
]

export default function GalleryPage() {
  return (
    <main className='min-h-screen bg-white'>
      {/* Hero Section */}
      <section className='bg-gradient-to-r from-[#132635] to-[#1a4d6d] py-20 text-white'>
        <div className='container mx-auto px-4 text-center'>
          <h1 className='mb-4 text-4xl font-bold md:text-5xl'>MS Paper Products Gallery</h1>
          <p className='mb-2 text-lg text-gray-200'>Explore our extensive collection of quality paper products and printing solutions</p>
          <p className='text-sm text-gray-300'>From premium paper bags to professional printing services</p>
        </div>
      </section>

      {/* Gallery Content */}
      <section className='py-20'>
        <div className='container mx-auto px-4'>
          <Tabs defaultValue='paper-bags' className='w-full'>
            <TabsList className='mb-12 flex w-full flex-wrap justify-center gap-2 bg-transparent h-auto p-0'>
              {galleryCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className='rounded-lg border-2 border-[#132635] px-6 py-3 font-semibold text-[#132635] data-[state=active]:border-[#f19e1f] data-[state=active]:bg-[#f19e1f] data-[state=active]:text-white'
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {galleryCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className='animate-fade-in'>
                <div className='mb-8'>
                  <h2 className='mb-2 text-3xl font-bold text-[#132635]'>{category.name}</h2>
                  <p className='text-gray-600'>{category.description}</p>
                </div>

                <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
                  {category.items.map((item, idx) => (
                    <Card key={idx} className='overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-shadow'>
                      <CardContent className='p-0'>
                        <div className='relative h-64 bg-gray-200 overflow-hidden group'>
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className='object-cover group-hover:scale-110 transition-transform duration-300'
                          />
                          <div className='absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center'>
                            <div className='text-center text-white'>
                              <p className='text-lg font-semibold'>{item.title}</p>
                            </div>
                          </div>
                        </div>
                        <div className='p-4 bg-gray-50'>
                          <h3 className='mb-2 font-bold text-[#132635]'>{item.title}</h3>
                          <p className='text-sm text-gray-600'>
                            {item.size || item.type || item.spec || item.feature}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className='bg-[#132635] py-16 text-white'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='mb-4 text-3xl font-bold'>Ready to Order?</h2>
          <p className='mb-8 text-gray-200'>Contact us for pricing, samples, and bulk orders of any product shown in our gallery</p>
          <Button asChild className='bg-[#f19e1f] text-[#132635] hover:bg-[#f19e1f]/90 px-8 py-3 font-bold'>
            <Link href='/contact'>Get in Touch</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
