import { mainCategories } from '@/lib/products-data'

export type SearchEntry = {
  name: string
  href: string
  type: 'Product' | 'Category' | 'Service' | 'Industry'
  description?: string
  image?: string
}

export const printingServices = [
  ['Offset Printing', '/printing-services/offset-printing'],
  ['Digital Printing', '/printing-services/digital-printing'],
  ['Brochure Printing', '/printing-services/brochure-printing'],
  ['Flyer Printing', '/printing-services/flyer-printing'],
  ['Business Cards', '/printing-services/business-cards'],
  ['Label Printing', '/printing-services/label-printing'],
  ['Envelope Printing', '/printing-services/envelope-printing'],
] as const

export const industries = [
  ['Food & Beverage', '/industries/food-beverage'],
  ['Pharmaceuticals', '/industries/pharmaceuticals'],
  ['E-commerce', '/industries/ecommerce'],
  ['Retail & Fashion', '/industries/retail-fashion'],
  ['Healthcare', '/industries/healthcare'],
  ['Education', '/industries/education'],
  ['Corporate', '/industries/corporate'],
  ['Logistics', '/industries/logistics'],
] as const

export const searchEntries: SearchEntry[] = [
  ...mainCategories.flatMap((main) => [
    { name: main.name, href: `/products/${main.slug}`, type: 'Category' as const, description: main.description, image: main.image },
    ...main.subcategories.flatMap((category) => [
      { name: category.name, href: `/products/${category.slug}`, type: 'Category' as const, description: category.description, image: category.image },
      ...category.products.map((product) => ({
        name: product.name,
        href: `/products/${category.slug}#${product.id}`,
        type: 'Product' as const,
        description: product.description,
        image: product.image,
      })),
    ]),
  ]),
  ...printingServices.map(([name, href]) => ({ name, href, type: 'Service' as const })),
  ...industries.map(([name, href]) => ({ name, href, type: 'Industry' as const })),
]

export const newEntries = searchEntries.filter((entry) => entry.type === 'Product').slice(-8).reverse()
