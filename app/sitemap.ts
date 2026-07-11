import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mspaperproducts.com'

  // Product categories
  const productCategories = [
    'paper-bags',
    'packaging-boxes',
    'courier-covers',
    'tissue-paper',
    'labels-stickers',
    'protective-packaging',
    'custom-boxes',
    'mailers-envelopes',
  ]

  // Printing services
  const printingServices = [
    'offset-printing',
    'digital-printing',
    'flexographic-printing',
    'screen-printing',
    'rotogravure-printing',
    'letterpress-printing',
    'embossing-debossing',
    'lamination',
  ]

  // Industries
  const industries = [
    'e-commerce',
    'food-beverage',
    'retail',
    'pharmaceutical',
    'cosmetics',
    'electronics',
    'logistics',
    'manufacturing',
  ]

  // Blog posts
  const blogPosts = [
    'choosing-packaging',
    'sustainable-packaging-blog',
    'brand-identity-packaging',
    'offset-vs-digital-blog',
    'customization-options',
    'bulk-ordering-tips',
  ]

  // Resource guides
  const resources = [
    'packaging-material-guide',
    'packaging-design-tips',
    'sustainable-packaging',
    'offset-vs-digital',
    'print-finishes',
    'color-management',
    'ordering-faq',
    'customization-faq',
    'delivery-faq',
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
      url: `${baseUrl}/industries`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
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
      url: `${baseUrl}/services/${slug}`,
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

    // Resource guides
    ...resources.map((slug) => ({
      url: `${baseUrl}/resources/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]
}
