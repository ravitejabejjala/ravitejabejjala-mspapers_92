export type ResourceGuide = { slug: string; title: string; description: string; category: string; sections: { heading: string; body: string }[] }

const topics = [
  ["paper-bag-buying-guide", "Paper Bag Buying Guide for Businesses", "How to compare paper, handles, sizes, printing, finishes, and order quantities."],
  ["custom-packaging-guide", "Custom Packaging Planning Guide", "A practical framework for briefing dimensions, materials, artwork, finishes, and delivery."],
  ["offset-vs-digital-printing", "Offset vs Digital Printing", "Understand which printing method better fits your quantity, turnaround, and design needs."],
  ["mono-carton-design-guide", "Mono Carton Design Guide", "Plan folding cartons around product protection, shelf presentation, print, and packing efficiency."],
  ["pharmaceutical-packaging-guide", "Pharmaceutical Packaging Guide", "Key considerations for printed medicine cartons, labels, inserts, and distribution packaging."],
  ["food-packaging-material-guide", "Food Packaging Material Guide", "Explore practical paper-based options for takeaway, bakery, restaurant, and FMCG applications."],
  ["courier-packaging-guide", "Courier Packaging Guide for E-commerce", "Select courier covers, labels, cartons, and document pouches for dependable dispatch."],
  ["labels-stickers-guide", "Business Guide to Labels and Stickers", "Choose label materials, adhesives, sizes, barcode formats, and print specifications."],
  ["print-finishes-guide", "Premium Print Finishes Explained", "Compare foiling, UV, lamination, embossing, die cutting, and other finishing choices."],
  ["bulk-printing-checklist", "Bulk Printing Order Checklist", "Prepare artwork, quantity, dimensions, material, finishing, proofing, and dispatch requirements."],
  ["choosing-right-packaging", "How to Choose the Right Packaging", "Match packaging materials and construction to protection, branding, and delivery needs."],
  ["sustainable-packaging-trends", "Sustainable Packaging Trends", "Practical ways businesses can reduce material use and improve recyclability."],
  ["importance-of-branding", "The Importance of Branding in Packaging", "Use consistent printed packaging to strengthen recognition and product presentation."],
  ["choosing-packaging", "Choosing Packaging for Your Product", "A clear starting point for selecting business packaging."],
] as const

export const resourceGuides: ResourceGuide[] = topics.map(([slug, title, description]) => ({
  slug,
  title,
  description,
  category: "Business Guide",
  sections: [
    { heading: "Start with the application", body: "Define the product, packing process, storage conditions, transit requirements, audience, and the information that must appear on the finished item." },
    { heading: "Confirm the specification", body: "Share dimensions, quantity, material preference, artwork, printing colors, finishing choices, and delivery location. A complete brief helps production teams recommend practical options." },
    { heading: "Plan for production", body: "Allow time for artwork review, proof approval, material planning, printing, finishing, quality inspection, packing, and dispatch—especially for custom bulk orders." },
    { heading: "Work with an experienced manufacturer", body: "A factory-direct partner can help align appearance, durability, production efficiency, and dispatch requirements without over-specifying the job." },
  ],
}))

export const getResourceGuide = (slug: string) => resourceGuides.find((guide) => guide.slug === slug)
