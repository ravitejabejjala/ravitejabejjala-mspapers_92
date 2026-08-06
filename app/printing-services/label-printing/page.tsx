import type { Metadata } from 'next'
import PrintingServicesTemplate from '@/components/printing-services-template'

export const metadata: Metadata = {
  title: 'Custom Label Printing | MS Paper Products',
  description: 'Professional label printing for products, bottles, jars. Various shapes, sizes, and materials. Barcode and QR code printing available.',
  keywords: ['label printing', 'custom labels', 'product labels', 'barcode labels', 'self-adhesive labels'],
}

export default function LabelPrintingPage() {
  return (
    <PrintingServicesTemplate
      title="Label Printing"
      description="Professional label printing that transforms your product packaging. From self-adhesive labels to specialty label materials, we offer complete solutions for branding, product information, and regulatory compliance with exceptional print quality."
      image="/printing-services/label-printing.jpg"
      benefits={[
        'Custom label designs',
        'Various label materials',
        'High-resolution printing',
        'Barcode and QR codes',
        'Durable and weather-resistant',
        'Fast production times',
      ]}
      capabilities={[
        'Self-adhesive labels',
        'Barcode labels',
        'Waterproof labels',
        'Premium label stocks',
        'Shaped and die-cut labels',
        'Thermal transfer labels',
      ]}
      minOrder="100 pieces"
      turnaround="3-5 business days"
    />
  )
}
