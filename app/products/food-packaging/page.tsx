import type { Metadata } from 'next'
import ProductPageTemplate from '@/components/product-page-template'

export const metadata: Metadata = {
  title: 'Food Packaging Solutions | MS Paper Products Hyderabad',
  description: 'Food-safe packaging boxes, containers, and bags. Compliant with food safety standards. Perfect for bakeries, restaurants, food delivery, catering services.',
  keywords: ['food packaging', 'bakery boxes', 'food containers', 'food-safe packaging', 'delivery boxes'],
}

export default function FoodPackagingPage() {
  return (
    <ProductPageTemplate
      title="Food Packaging"
      subtitle="Safe and hygienic packaging for food products"
      description="Our food packaging solutions are specially designed to meet food safety standards while ensuring product freshness and appeal. From bakery boxes to delivery containers, we offer FDA-approved materials that are safe for direct food contact. Custom branding helps enhance your food business identity."
      image="/products/food-packaging.jpg"
      features={[
        'FDA approved food-safe materials',
        'Grease and moisture resistant',
        'Fresh food preservation',
        'Custom branding and design',
        'Various sizes and styles',
        'Eco-friendly options available',
      ]}
      applications={[
        'Bakery and pastry boxes',
        'Food delivery containers',
        'Restaurant takeaway packaging',
        'Catering service boxes',
        'Fast food packaging solutions',
        'Dairy and frozen food containers',
      ]}
      specifications={[
        { label: 'Material', value: 'Food-grade Kraft Paper, Corrugated Board' },
        { label: 'Food Safety', value: 'FDA & ISO 22000 Certified' },
        { label: 'Custom Sizes', value: 'Available in various dimensions' },
        { label: 'Printing', value: 'Food-safe ink, full-color printing' },
        { label: 'Minimum Order', value: '250 pieces' },
      ]}
      pricing={{ min: '3.00', max: '12.00', unit: 'piece' }}
    />
  )
}
