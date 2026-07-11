import type { Metadata } from 'next'
import ProductPageTemplate from '@/components/product-page-template'

export const metadata: Metadata = {
  title: 'Custom Printed Packaging Solutions | MS Paper Products Hyderabad',
  description: 'Tailored packaging solutions with your branding. Custom boxes, bags, labels, and more. Design consultation included. Perfect for brands and businesses.',
  keywords: ['custom packaging', 'branded packaging', 'custom boxes', 'packaging design', 'branded printing'],
}

export default function CustomPackagingPage() {
  return (
    <ProductPageTemplate
      title="Custom Packaging"
      subtitle="Tailored packaging solutions with your branding"
      description="We offer comprehensive custom packaging solutions designed specifically for your brand and product needs. From initial design concept to final production, our team works closely with you to create packaging that stands out. Premium materials combined with expert printing ensures your products make a lasting impression."
      image="/products/custom-packaging.jpg"
      features={[
        'Complete design consultation',
        'Premium branding and printing',
        'Custom size and shape options',
        'Multiple material choices',
        'Sample approval process',
        'Fast turnaround for bulk orders',
      ]}
      applications={[
        'Luxury and premium product packaging',
        'E-commerce brand enhancement',
        'Retail product differentiation',
        'Corporate and gift packaging',
        'Event and special occasion packaging',
        'Promotional and seasonal campaigns',
      ]}
      specifications={[
        { label: 'Materials', value: 'Kraft, Corrugated, Specialty Papers' },
        { label: 'Customization', value: 'Size, shape, color, design, finish' },
        { label: 'Printing Options', value: 'Digital, offset, flexography, embossing' },
        { label: 'Special Effects', value: 'Foiling, lamination, die-cutting available' },
        { label: 'Minimum Order', value: '100 pieces' },
      ]}
      pricing={{ min: '10.00', max: '50.00', unit: 'piece' }}
    />
  )
}
