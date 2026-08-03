import type { Metadata } from 'next'
import PrintingServicesTemplate from '@/components/printing-services-template'

export const metadata: Metadata = {
  title: 'Professional Business Card Printing | MS Paper Products Hyderabad',
  description: 'High-quality business card printing with premium finishes. Professional designs, fast printing, competitive pricing for all business types.',
  keywords: ['business card printing', 'professional cards', 'printed business cards', 'company cards'],
}

export default function BusinessCardsPage() {
  return (
    <PrintingServicesTemplate
      title="Business Card Printing"
      description="Professional business card printing that makes a lasting first impression. From classic designs to modern creative styles, our premium printing services showcase your brand identity with exceptional quality and attention to detail."
      image="/printing-services/business-cards.jpg"
      benefits={[
        'Professional quality printing',
        'Premium paper stocks',
        'Special finishes available',
        'Fast turnaround',
        'Affordable bulk pricing',
        'Design consultation available',
      ]}
      capabilities={[
        'Standard business cards',
        'Luxury card stocks',
        'Laminated cards',
        'Embossed and foiled cards',
        'Spot color printing',
        'Shaped and die-cut cards',
      ]}
      minOrder="250 pieces"
      turnaround="3-5 business days"
    />
  )
}
