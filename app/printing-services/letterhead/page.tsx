import type { Metadata } from 'next'
import PrintingServicesTemplate from '@/components/printing-services-template'

export const metadata: Metadata = {
  title: 'Professional Letterhead Printing | MS Paper Products Hyderabad',
  description: 'Branded letterhead printing for corporate stationery. Premium paper quality, professional design integration, bulk order discounts.',
  keywords: ['letterhead printing', 'corporate letterhead', 'printed letterhead', 'stationery printing'],
}

export default function LetterheadPage() {
  return (
    <PrintingServicesTemplate
      title="Letterhead Printing"
      description="Professional letterhead printing that reinforces your corporate brand identity. Our high-quality letterhead combines premium paper stocks with expert printing to create a professional impression for business correspondence and official documents."
      image="/printing-services/letterhead.jpg"
      benefits={[
        'Professional appearance',
        'Premium paper stocks',
        'Consistent branding',
        'Full-color printing',
        'Bulk discounts available',
        'Quick delivery',
      ]}
      capabilities={[
        'Corporate letterhead',
        'Colored letterhead',
        'Special watermarks',
        'Multi-color printing',
        'Different paper weights',
        'Custom sizing options',
      ]}
      minOrder="500 pieces"
      turnaround="5-7 business days"
    />
  )
}
