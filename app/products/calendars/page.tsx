import type { Metadata } from 'next'
import ProductPageTemplate from '@/components/product-page-template'

export const metadata: Metadata = {
  title: 'Custom Printed Calendars | MS Paper Products Hyderabad',
  description: 'Custom printed calendars for corporate gifting and brand promotion. Wall calendars, desk calendars, pocket calendars. Bulk orders with attractive pricing.',
  keywords: ['custom calendars', 'printed calendars', 'wall calendars', 'promotional calendars', 'corporate calendars'],
}

export default function CalendarsPage() {
  return (
    <ProductPageTemplate
      title="Calendars"
      subtitle="Custom printed calendars for brand promotion"
      description="Our custom printed calendars are ideal for corporate gifting, promotional campaigns, and brand visibility throughout the year. Available in multiple styles including wall, desk, pocket, and standing calendars. Full-color printing with your company logo and branding ensures maximum visibility."
      image="/products/calendars.jpg"
      features={[
        'Custom design and branding',
        'Multiple calendar styles available',
        'High-quality printing',
        'Long-term brand visibility',
        'Eco-friendly paper options',
        'Attractive packaging available',
      ]}
      applications={[
        'Corporate gifting and client appreciation',
        'Brand promotion and advertising',
        'Employee gifts and merchandise',
        'Retail display and sales tool',
        'Event promotion and sponsorship',
        'School and institution calendars',
      ]}
      specifications={[
        { label: 'Styles', value: 'Wall, Desk, Pocket, Standing, Spiral' },
        { label: 'Sizes', value: 'Custom sizes from A5 to A2' },
        { label: 'Paper Quality', value: '170-300 GSM Premium Paper' },
        { label: 'Printing', value: 'Full-color CMYK offset printing' },
        { label: 'Minimum Order', value: '100 pieces' },
      ]}
      pricing={{ min: '25.00', max: '75.00', unit: 'piece' }}
    />
  )
}
