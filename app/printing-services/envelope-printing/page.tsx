import type { Metadata } from 'next'
import PrintingServicesTemplate from '@/components/printing-services-template'

export const metadata: Metadata = {
  title: 'Professional Envelope Printing | MS Paper Products Hyderabad',
  description: 'Branded envelope printing for business correspondence. Multiple sizes, colored envelopes, premium printing. Complete stationery solutions available.',
  keywords: ['envelope printing', 'corporate envelopes', 'printed envelopes', 'stationery printing'],
}

export default function EnvelopePrintingPage() {
  return (
    <PrintingServicesTemplate
      title="Envelope Printing"
      description="Professional envelope printing that maintains your corporate brand consistency. Available in multiple sizes and colors with full-color printing capabilities, our envelopes are perfect for business correspondence and professional mailings."
      image="/printing-services/envelope-printing.jpg"
      benefits={[
        'Professional corporate look',
        'Various envelope sizes',
        'Colored envelope options',
        'Full-color printing available',
        'Bulk pricing',
        'Quick turnaround',
      ]}
      capabilities={[
        'Standard business envelopes',
        'Colored envelopes',
        'Window envelopes',
        'Multi-color printing',
        'Custom sizes',
        'Security envelopes',
      ]}
      minOrder="500 pieces"
      turnaround="5-7 business days"
    />
  )
}
