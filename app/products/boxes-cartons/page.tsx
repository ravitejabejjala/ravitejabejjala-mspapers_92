import type { Metadata } from 'next'
import ProductPageTemplate from '@/components/product-page-template'

export const metadata: Metadata = {
  title: 'Packaging Boxes & Cartons | MS Paper Products Hyderabad',
  description: 'High-quality corrugated boxes and cartons for shipping, storage, and product packaging. Custom sizes, durable construction, competitive prices.',
  keywords: ['carton boxes', 'corrugated boxes', 'packaging boxes', 'shipping boxes', 'custom cartons'],
}

export default function BoxesCartonsPage() {
  return (
    <ProductPageTemplate
      title="Boxes & Cartons"
      subtitle="Durable packaging boxes for shipping and storage"
      description="Our corrugated boxes and cartons are designed for safe product packaging, shipping, and storage. Made from high-quality corrugated cardboard, they provide superior protection and can be customized with your branding. Ideal for e-commerce, food, pharmaceuticals, and retail products."
      image="/products/packaging-boxes.jpg"
      features={[
        'Heavy-duty corrugated construction',
        'Custom sizes and designs',
        'Excellent protection and durability',
        'Branded printing options',
        'Eco-friendly materials',
        'Cost-effective bulk pricing',
      ]}
      applications={[
        'E-commerce shipping and packaging',
        'Food product packaging and storage',
        'Electronics and fragile item protection',
        'Pharmaceutical product packaging',
        'Retail product display boxes',
        'Storage and organization solutions',
      ]}
      specifications={[
        { label: 'Material', value: 'Corrugated Cardboard (3-5 ply)' },
        { label: 'Styles', value: 'RSC, Half Slotted, Folding Cartons' },
        { label: 'Custom Sizes', value: 'Available up to 48x48x48 inches' },
        { label: 'Printing', value: '2-4 color offset printing' },
        { label: 'Minimum Order', value: '250 pieces' },
      ]}
      pricing={{ min: '8.00', max: '25.00', unit: 'piece' }}
    />
  )
}
