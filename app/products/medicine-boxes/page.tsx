import type { Metadata } from 'next'
import ProductPageTemplate from '@/components/product-page-template'

export const metadata: Metadata = {
  title: 'Pharmaceutical Medicine Boxes | MS Paper Products Hyderabad',
  description: 'Compliant pharmaceutical packaging boxes for medicines and medical products. GMP certified, tamper-evident options, regulatory compliance assured.',
  keywords: ['medicine boxes', 'pharmaceutical boxes', 'pharma packaging', 'medical boxes', 'compliant packaging'],
}

export default function MedicineBoxesPage() {
  return (
    <ProductPageTemplate
      title="Medicine Boxes"
      subtitle="Compliant pharmaceutical packaging solutions"
      description="Our pharmaceutical medicine boxes are designed to meet strict regulatory requirements and ensure product safety. GMP certified manufacturing process, tamper-evident features, and child-resistant options available. Ideal for pharmaceutical companies, hospitals, and medical distributors."
      image="/products/medicine-boxes.jpg"
      features={[
        'GMP certified manufacturing',
        'Regulatory compliance ready',
        'Tamper-evident options',
        'Child-resistant packaging',
        'Moisture and light protection',
        'Secure closure mechanisms',
      ]}
      applications={[
        'Prescription medicine packaging',
        'Over-the-counter medication boxes',
        'Vaccine and biological packaging',
        'Medical device packaging',
        'Healthcare product boxes',
        'Hospital supply packaging',
      ]}
      specifications={[
        { label: 'Material', value: 'Pharmaceutical-grade Corrugated Board' },
        { label: 'Certification', value: 'GMP, ISO 13485, Pharma Standards' },
        { label: 'Customization', value: 'Full regulatory compliance printing' },
        { label: 'Security Features', value: 'Tamper-evident, QR codes, hologram ready' },
        { label: 'Minimum Order', value: '500 pieces' },
      ]}
      pricing={{ min: '5.00', max: '15.00', unit: 'piece' }}
    />
  )
}
