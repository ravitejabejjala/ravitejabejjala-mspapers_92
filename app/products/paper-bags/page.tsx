import type { Metadata } from 'next'
import ProductPageTemplate from '@/components/product-page-template'

export const metadata: Metadata = {
  title: 'Premium Paper Bags | MS Paper Products Hyderabad',
  description: 'High-quality paper bags for retail, gifting, and packaging. Eco-friendly, custom designs, bulk orders. Direct manufacturer in Hyderabad.',
  keywords: ['paper bags', 'retail paper bags', 'kraft paper bags', 'eco-friendly bags', 'custom paper bags'],
}

export default function PaperBagsPage() {
  return (
    <ProductPageTemplate
      title="Paper Bags"
      subtitle="Premium quality paper bags for every occasion"
      description="Our premium paper bags are manufactured using high-quality kraft paper and eco-friendly materials. Perfect for retail, gifting, food packaging, and promotional events. We offer custom designs with full-color printing and various sizes to meet your specific needs."
      image="/products/paper-bags.jpg"
      features={[
        'Eco-friendly kraft paper material',
        'Custom size and design options',
        'Full-color printing available',
        'Durable and reusable',
        'Attractive finish options',
        'Competitive bulk pricing',
      ]}
      applications={[
        'Retail shopping bags for boutiques and stores',
        'Promotional bags for brand marketing',
        'Food packaging for bakeries and restaurants',
        'Gift bags for events and celebrations',
        'Corporate gifting and branding',
        'E-commerce packaging solutions',
      ]}
      specifications={[
        { label: 'Material', value: 'Kraft Paper (80-120 GSM)' },
        { label: 'Standard Sizes', value: 'Various sizes from 6x9 to 18x24 inches' },
        { label: 'Printing', value: 'Full-color digital/offset printing' },
        { label: 'Finishes', value: 'Matte, glossy, metallic foiling available' },
        { label: 'Minimum Order', value: '500 pieces' },
      ]}
      pricing={{ min: '2.50', max: '8.00', unit: 'piece' }}
    />
  )
}
