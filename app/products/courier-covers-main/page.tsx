import type { Metadata } from 'next'
import ProductPageTemplate from '@/components/product-page-template'

export const metadata: Metadata = {
  title: 'Waterproof Courier Covers | MS Paper Products Hyderabad',
  description: 'Premium waterproof courier covers for e-commerce shipping. Available in Indian standard sizes (10x14, 12x16). Durable, cost-effective, bulk orders welcome.',
  keywords: ['courier covers', 'waterproof courier bags', 'shipping covers', 'ecommerce packaging', 'courier bags'],
}

export default function CourierCoversPage() {
  return (
    <ProductPageTemplate
      title="Courier Covers"
      subtitle="Waterproof courier covers for secure shipping"
      description="Our waterproof courier covers are designed for secure and professional package delivery. Made from durable LDPE material, they provide excellent protection against moisture, dust, and damage. Available in multiple Indian standard sizes with custom branding options for enhanced brand visibility."
      image="/products/courier-covers.jpg"
      features={[
        'Waterproof LDPE material',
        'Self-sealing flap design',
        'Tear-resistant construction',
        'Multiple size options',
        'Custom printing available',
        'Cost-effective bulk pricing',
      ]}
      applications={[
        'E-commerce product shipping',
        'Courier and logistics operations',
        'Gift and promotional deliveries',
        'Apparel and fashion packaging',
        'Electronic goods protection',
        'Food delivery packaging',
      ]}
      specifications={[
        { label: 'Material', value: 'LDPE (Low-Density Polyethylene)' },
        { label: 'Standard Sizes', value: '6x9, 10x14, 12x16, 14x20 inches' },
        { label: 'Thickness', value: '40-50 microns' },
        { label: 'Printing', value: 'Full-color custom printing' },
        { label: 'Minimum Order', value: '500 pieces' },
      ]}
      pricing={{ min: '1.20', max: '3.50', unit: 'piece' }}
    />
  )
}
