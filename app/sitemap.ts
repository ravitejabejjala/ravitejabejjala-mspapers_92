import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mspaperproducts.com'

  const productCategories = [
    'paper-bags',
    'boxes-cartons',
    'ecommerce-courier-covers',
    'ecommerce-shipping-solutions',
    'thermal-label-rolls',
    'food-packaging',
    'medicine-boxes',
    'medicine-boxes-packing-solutions',
    'calendars',
    'courier-covers-main',
    'custom-packaging-main',
  ]

  const printingServices = [
    'offset-printing',
    'digital-printing',
    'brochure-printing',
    'flyer-printing',
    'booklet-printing',
    'business-cards',
    'letterhead',
    'label-printing',
    'envelope-printing',
    'custom-printing',
  ]

  const industries = [
    'food-beverage',
    'pharmaceuticals',
    'ecommerce',
    'retail-fashion',
    'healthcare',
    'education',
    'real-estate',
    'corporate',
    'logistics',
    'hospitality',
  ]

  const blogPosts = [
    'choosing-right-packaging',
    'sustainable-packaging-trends',
    'importance-of-branding',
    'offset-vs-digital-printing',
  ]

  return [
    // Main pages
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/printing-services-hyderabad`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/packaging-solutions`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/resources`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },

    // Product category pages
    ...productCategories.map((slug) => ({
      url: `${baseUrl}/products/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),

    // Printing service pages
    ...printingServices.map((slug) => ({
      url: `${baseUrl}/printing-services/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),

    // Industry pages
    ...industries.map((slug) => ({
      url: `${baseUrl}/industries/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),

    // Blog posts
    ...blogPosts.map((slug) => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),

  ]
}
