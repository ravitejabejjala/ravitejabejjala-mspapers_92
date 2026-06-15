'use client'

import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Phone,
  MessageCircle,
  CheckCircle2,
  Package,
  Zap,
  Award,
  Truck,
  Shield,
  Globe,
  BarChart3,
  Star,
  ArrowRight,
  Building2,
  ShoppingCart,
  Warehouse,
  Pill,
  Leaf,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Premium Packaging Solutions | Courier Covers, Labels & Thermal Rolls | MS Paper Products Hyderabad',
  description:
    'Leading packaging manufacturer in Hyderabad. High-quality courier covers, shipping labels, barcode labels, thermal labels & custom printed packaging for e-commerce, logistics & retail. Bulk orders accepted with competitive pricing.',
  keywords: [
    'courier covers Hyderabad',
    'shipping labels manufacturer',
    'barcode labels supplier',
    'thermal labels',
    'packaging manufacturer Hyderabad',
    'e-commerce packaging solutions',
    'custom printed courier covers',
    'logistics labels supplier',
    'thermal label rolls',
    'wholesale packaging materials',
  ],
  openGraph: {
    title: 'Premium Packaging & Label Solutions | MS Paper Products',
    description: 'Bulk-ready packaging solutions for e-commerce, logistics, retail & manufacturing',
    url: 'https://mspaperproducts.com/packaging-solutions',
    type: 'website',
  },
}

const products = [
  {
    id: 1,
    name: 'E-Commerce Courier Covers',
    description: 'Strong, waterproof and tamper-resistant courier covers designed for secure online deliveries',
    image: '/products/courier-covers-hero.png',
    icon: Package,
    features: [
      'Waterproof & Tear Resistant',
      'Lightweight & Durable',
      'Custom Printed Available',
      'Multiple Sizes',
      'Tamper-Evident Features',
    ],
    benefits: [
      'Protects products during transit',
      'Professional brand appearance',
      'Enhanced customer unboxing experience',
      'Cost-effective bulk pricing',
      'Environmentally friendly options',
    ],
    industries: ['E-commerce', 'Retail', 'Logistics'],
    seoKeywords: ['ecommerce courier covers', 'shipping covers supplier', 'courier bags Hyderabad'],
  },
  {
    id: 2,
    name: 'Shipping Labels',
    description: 'High-quality shipping labels compatible with all courier and logistics systems',
    image: '/products/shipping-labels.png',
    icon: Zap,
    features: [
      'Smudge Proof Printing',
      'Self Adhesive',
      'Thermal Compatible',
      'High Print Quality',
      'Waterproof Material',
    ],
    benefits: [
      'Fast application process',
      'Accurate barcode scanning',
      'All-weather durability',
      'Professional appearance',
      'Bulk roll supply available',
    ],
    industries: ['Logistics', 'E-commerce', 'Warehousing'],
    seoKeywords: ['shipping labels supplier', 'courier labels manufacturer', 'thermal compatible labels'],
  },
  {
    id: 3,
    name: 'Barcode Labels',
    description: 'High-performance barcode labels with superior scan accuracy for retail and warehouse operations',
    image: '/products/barcode-labels.png',
    icon: BarChart3,
    features: [
      'High Scan Accuracy',
      'Strong Adhesive',
      'Long Lasting',
      'Bulk Roll Supply',
      'Customizable Design',
    ],
    benefits: [
      'Improved inventory management',
      'Reduced scanning errors',
      'Supply chain efficiency',
      'Competitive bulk pricing',
      'Fast delivery timeline',
    ],
    industries: ['Retail', 'Manufacturing', 'Warehousing'],
    seoKeywords: ['barcode labels', 'barcode sticker rolls', 'barcode labels supplier'],
  },
  {
    id: 4,
    name: 'Thermal Labels',
    description: 'Premium thermal labels suitable for shipping, warehousing and retail operations',
    image: '/products/thermal-labels.png',
    icon: Truck,
    features: [
      'No Ink Required',
      'Long Lasting Quality',
      'Cost Effective',
      'Fast Printing Speed',
      'Wide Compatibility',
    ],
    benefits: [
      'Reduced operational costs',
      'High-speed printing capability',
      'Perfect for high-volume operations',
      'Environmental benefits',
      'Enterprise-grade reliability',
    ],
    industries: ['Logistics', 'Warehousing', 'Retail'],
    seoKeywords: ['thermal labels', 'thermal sticker rolls', 'thermal barcode labels Hyderabad'],
  },
]

const industries = [
  { name: 'E-Commerce', icon: ShoppingCart, description: 'Secure packaging for online orders' },
  { name: 'Retail', icon: Building2, description: 'Professional labeling solutions' },
  { name: 'Logistics', icon: Truck, description: 'High-volume shipping labels' },
  { name: 'Warehousing', icon: Warehouse, description: 'Inventory management labels' },
  { name: 'Manufacturing', icon: Award, description: 'Industrial packaging solutions' },
  { name: 'FMCG', icon: Package, description: 'Branded packaging materials' },
  { name: 'Pharmaceuticals', icon: Pill, description: 'Compliant labels & packaging' },
  { name: 'Food & Beverage', icon: Leaf, description: 'Food-safe packaging solutions' },
]

const whyChooseUs = [
  {
    title: 'Premium Quality Materials',
    description: 'Industry-leading materials ensuring durability, reliability and customer satisfaction',
    icon: Shield,
  },
  {
    title: 'Competitive Pricing',
    description: 'Best-in-market pricing without compromising on quality or performance',
    icon: BarChart3,
  },
  {
    title: 'Bulk Production Capacity',
    description: '10,000+ units daily capacity ensuring we can handle your largest orders',
    icon: Award,
  },
  {
    title: 'Custom Printing Available',
    description: 'Full customization with your brand logo, colors and design specifications',
    icon: Zap,
  },
  {
    title: 'Fast Dispatch',
    description: 'Express delivery within Hyderabad and across India with tracking',
    icon: Truck,
  },
  {
    title: 'Expert Support',
    description: '24/7 customer support team ready to assist with technical or commercial queries',
    icon: Globe,
  },
]

const testimonials = [
  {
    name: 'Rajesh Kumar',
    company: 'Amazon Seller',
    role: 'E-commerce Business Owner',
    feedback:
      'MS Paper Products has been our trusted partner for over 2 years. Their courier covers are of premium quality and their team delivers consistently within timelines.',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    company: 'Swift Logistics',
    role: 'Operations Manager',
    feedback:
      'We process 50,000+ shipments monthly. MS Paper is the only provider who can handle our volume with zero quality compromise.',
    rating: 5,
  },
  {
    name: 'Vikram Patel',
    company: 'PharmaCare Ltd',
    role: 'Procurement Head',
    feedback:
      'Exceptional service for pharmaceutical labeling. Their compliance knowledge and quick turnaround saved us significant costs.',
    rating: 5,
  },
]

const faqs = [
  {
    question: 'Do you provide custom printed courier covers?',
    answer:
      'Yes, we offer complete custom printing services. You can add your company logo, brand colors, return addresses, and barcode. Minimum order typically starts at 500 pieces with fast turnaround time.',
  },
  {
    question: 'What sizes are available for courier covers?',
    answer:
      'We offer standard sizes (A5, A4, B4, C4, C5) and custom dimensions. Our manufacturing capability allows us to create any size from 100mm x 150mm up to 500mm x 750mm.',
  },
  {
    question: 'Can I order in bulk?',
    answer:
      'Absolutely! We specialize in bulk orders. We can handle orders from 1000 units to 100,000+ units. We offer competitive bulk pricing with volume discounts.',
  },
  {
    question: 'Do you provide thermal labels?',
    answer:
      'Yes, we supply premium thermal labels in various sizes. Available in rolls compatible with all standard thermal printers. Bulk supply with quick turnaround guaranteed.',
  },
  {
    question: 'Do you supply barcode labels?',
    answer:
      'Yes, we manufacture high-accuracy barcode labels with strong adhesive suitable for all scanning systems. Available in roll format and sheet format.',
  },
  {
    question: 'What is your delivery timeline?',
    answer:
      'Standard orders are dispatched within 3-5 business days. Express delivery within 24-48 hours available for urgent requirements. All shipments are tracked.',
  },
  {
    question: 'Do you serve customers across India?',
    answer:
      'Yes, we ship nationwide. We have partnerships with leading logistics providers ensuring fast and reliable delivery to any location in India.',
  },
  {
    question: 'Can I request product samples?',
    answer:
      'Absolutely! We provide free samples for evaluation. Contact us with your requirements and we will send samples within 2-3 days.',
  },
]

export default function PackagingSolutions() {
  return (
    <main>
      {/* Hero Section */}
      <section className='relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-[#0A2342] via-[#0F3451] to-[#0A2342] text-white overflow-hidden'>
        <div className='absolute inset-0 opacity-20'>
          <Image
            src='/products/warehouse-operation.png'
            alt='Warehouse Operation'
            fill
            className='object-cover'
          />
        </div>

        <div className='relative z-10 container mx-auto px-4 py-20'>
          <div className='max-w-4xl mx-auto text-center'>
            <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-balance'>
              Packaging That Protects.
              <br />
              <span className='text-[#F5B400]'>Labels That Deliver.</span>
            </h1>

            <p className='text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto'>
              Premium Packaging, Shipping Labels, Barcode Labels and Thermal Labels for E-Commerce, Logistics, Retail
              and Manufacturing Businesses in Hyderabad.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 justify-center mb-12'>
              <Button asChild size='lg' className='bg-[#F5B400] text-[#0A2342] hover:bg-[#F5B400]/90 font-bold'>
                <Link href='/contact?service=packaging'>Get Free Quote</Link>
              </Button>
              <Button
                asChild
                size='lg'
                className='border-2 border-[#F5B400] text-[#F5B400] hover:bg-[#F5B400] hover:text-[#0A2342] font-bold'
              >
                <a href='tel:+918143330028'>
                  <Phone className='mr-2 h-5 w-5' />
                  Call Now: 8143330028
                </a>
              </Button>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
              {[
                'Premium Quality',
                'Bulk Orders Accepted',
                'Fast Delivery',
                'Custom Sizes Available',
              ].map((badge, idx) => (
                <div key={idx} className='flex items-center justify-center gap-2 bg-white/10 backdrop-blur px-4 py-3 rounded-lg'>
                  <CheckCircle2 className='h-5 w-5 text-[#F5B400]' />
                  <span className='text-sm font-semibold'>{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className='py-20 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold text-[#0A2342] mb-4'>Premium Products</h2>
            <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
              Industry-leading packaging solutions trusted by thousands of businesses across India
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-16'>
            {products.map((product, idx) => {
              const IconComponent = product.icon
              return (
                <Link
                  href={`/packaging-solutions/${product.id}`}
                  key={idx}
                  className='group cursor-pointer'
                >
                  <Card className='h-full hover:shadow-xl transition-all duration-300 border-0'>
                    <CardContent className='p-0'>
                      <div className='relative h-64 bg-gray-200 overflow-hidden'>
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className='object-cover group-hover:scale-105 transition-transform duration-300'
                        />
                      </div>
                      <div className='p-6'>
                        <div className='flex items-center gap-3 mb-3'>
                          <div className='p-2 bg-[#F5B400]/20 rounded-lg'>
                            <IconComponent className='h-6 w-6 text-[#F5B400]' />
                          </div>
                          <h3 className='text-2xl font-bold text-[#0A2342] group-hover:text-[#F5B400] transition-colors'>
                            {product.name}
                          </h3>
                        </div>

                        <p className='text-gray-600 mb-4'>{product.description}</p>

                        <div className='space-y-3 mb-6'>
                          <h4 className='font-semibold text-[#0A2342]'>Key Features:</h4>
                          <ul className='space-y-2'>
                            {product.features.map((feature, i) => (
                              <li key={i} className='flex items-center gap-2 text-sm text-gray-700'>
                                <CheckCircle2 className='h-4 w-4 text-[#F5B400] flex-shrink-0' />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <Button
                          className='w-full bg-[#F5B400] text-[#0A2342] hover:bg-[#F5B400]/90 font-bold group-hover:shadow-lg'
                          asChild
                        >
                          <Link href='/contact?service={product.name}'>
                            Get Quote
                            <ArrowRight className='ml-2 h-4 w-4' />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold text-[#0A2342] mb-4'>Industries We Serve</h2>
            <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
              Trusted by leading companies across multiple sectors for their packaging needs
            </p>
          </div>

          <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
            {industries.map((industry, idx) => {
              const IconComponent = industry.icon
              return (
                <Card key={idx} className='hover:shadow-lg transition-shadow border-0'>
                  <CardContent className='p-6 text-center'>
                    <IconComponent className='h-12 w-12 text-[#F5B400] mx-auto mb-4' />
                    <h3 className='font-bold text-[#0A2342] mb-2'>{industry.name}</h3>
                    <p className='text-sm text-gray-600'>{industry.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className='py-20 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold text-[#0A2342] mb-4'>Why Choose MS Paper Products</h2>
            <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
              The preferred packaging partner for thousands of businesses nationwide
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {whyChooseUs.map((item, idx) => {
              const IconComponent = item.icon
              return (
                <Card key={idx} className='border-0 hover:shadow-lg transition-shadow'>
                  <CardContent className='p-6'>
                    <IconComponent className='h-12 w-12 text-[#F5B400] mb-4' />
                    <h3 className='text-xl font-bold text-[#0A2342] mb-3'>{item.title}</h3>
                    <p className='text-gray-600'>{item.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold text-[#0A2342] mb-4'>What Our Customers Say</h2>
            <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
              Join thousands of satisfied customers across India
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className='border-0'>
                <CardContent className='p-6'>
                  <div className='flex gap-1 mb-4'>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className='h-5 w-5 fill-[#F5B400] text-[#F5B400]' />
                    ))}
                  </div>
                  <p className='text-gray-700 mb-6 italic'>"{testimonial.feedback}"</p>
                  <div className='border-t pt-4'>
                    <p className='font-bold text-[#0A2342]'>{testimonial.name}</p>
                    <p className='text-sm text-gray-600'>{testimonial.role}</p>
                    <p className='text-sm text-[#F5B400] font-semibold'>{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className='py-20 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold text-[#0A2342] mb-4'>Frequently Asked Questions</h2>
            <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
              Get answers to common questions about our products and services
            </p>
          </div>

          <div className='max-w-3xl mx-auto space-y-6'>
            {faqs.map((faq, idx) => (
              <Card key={idx} className='border-0'>
                <CardContent className='p-6'>
                  <details className='cursor-pointer group'>
                    <summary className='flex items-center justify-between font-bold text-[#0A2342] hover:text-[#F5B400] transition-colors'>
                      {faq.question}
                      <ArrowRight className='h-5 w-5 group-open:rotate-90 transition-transform' />
                    </summary>
                    <p className='text-gray-600 mt-4'>{faq.answer}</p>
                  </details>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-gradient-to-r from-[#0A2342] to-[#0F3451] text-white'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-4xl md:text-5xl font-bold mb-6'>Ready to Order?</h2>
          <p className='text-xl mb-8 max-w-2xl mx-auto'>
            Get competitive quotes, bulk discounts, and fast delivery. Contact us today!
          </p>

          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button asChild size='lg' className='bg-[#F5B400] text-[#0A2342] hover:bg-[#F5B400]/90 font-bold'>
              <Link href='/contact'>Get Free Quote</Link>
            </Button>
            <Button
              asChild
              size='lg'
              className='border-2 border-[#F5B400] text-[#F5B400] hover:bg-[#F5B400] hover:text-[#0A2342] font-bold'
            >
              <a href='https://wa.me/918143330028' target='_blank' rel='noopener noreferrer'>
                <MessageCircle className='mr-2 h-5 w-5' />
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Schema Markup */}
      <script type='application/ld+json'>
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'MS Paper Products',
          image: 'https://mspaperproducts.com/products/courier-covers-hero.png',
          description: 'Premium packaging and labeling solutions manufacturer in Hyderabad',
          url: 'https://mspaperproducts.com',
          telephone: '+918143330028',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Banjara Hills',
            addressLocality: 'Hyderabad',
            addressRegion: 'Telangana',
            postalCode: '500034',
            addressCountry: 'IN',
          },
          areaServed: {
            '@type': 'Country',
            name: 'India',
          },
        })}
      </script>
    </main>
  )
}
