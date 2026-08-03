export type IndustrySolution = {
  slug: string
  title: string
  description: string
  overview: string
  products: string[]
  applications: string[]
  faqs: { question: string; answer: string }[]
}

const commonFaqs = (topic: string) => [
  { question: `Can you customize ${topic}?`, answer: "Yes. We support custom dimensions, materials, printing, finishes, and branding based on your product and order requirements." },
  { question: "Do you support bulk business orders?", answer: "Yes. Our production team plans bulk orders with clear specifications, quality checks, and coordinated dispatch." },
  { question: "Do you deliver outside Hyderabad?", answer: "Yes. We serve Hyderabad, Telangana, and coordinate PAN India dispatch for suitable business orders." },
]

const entries = [
  ["pharmaceutical-packaging", "Pharmaceutical Packaging Manufacturer", "Printed packaging for pharmaceutical brands, distributors, and healthcare supply chains.", ["Medicine cartons", "Labels and inserts", "Shipping cartons", "Tamper-evident packaging"]],
  ["medicine-box-manufacturer", "Medicine Box Manufacturer", "Custom mono cartons and printed medicine boxes designed for clear branding and dependable packing.", ["Mono cartons", "Tablet boxes", "Syrup cartons", "Healthcare inserts"]],
  ["food-packaging-manufacturer", "Food Packaging Manufacturer", "Food-ready paper packaging for restaurants, bakeries, cloud kitchens, and FMCG businesses.", ["Food cartons", "Paper bags", "Sleeves", "Takeaway packaging"]],
  ["paper-bags-manufacturer", "Paper Bags Manufacturer", "Custom kraft and printed paper bags for retail, food, events, and corporate use.", ["Kraft bags", "Shopping bags", "Food bags", "Luxury bags"]],
  ["corporate-printing-services", "Corporate Printing Services", "Consistent business stationery and marketing print for teams, branches, and campaigns.", ["Business cards", "Brochures", "Letterheads", "Folders"]],
  ["educational-printing", "Educational Printing Solutions", "Practical print solutions for schools, colleges, coaching centers, and training organizations.", ["Booklets", "Certificates", "Prospectuses", "Notebooks"]],
  ["hospital-printing-solutions", "Hospital Printing Solutions", "Professional printed materials and packaging for hospitals, clinics, and diagnostic centers.", ["Patient files", "Prescription pads", "Medicine cartons", "Labels"]],
  ["real-estate-marketing-materials", "Real Estate Marketing Materials", "High-impact sales print for property launches, site visits, and channel partner campaigns.", ["Brochures", "Flyers", "Folders", "Presentation kits"]],
  ["luxury-packaging", "Luxury Packaging Manufacturer", "Premium branded packaging with refined materials and specialist finishing options.", ["Rigid-style cartons", "Foiled boxes", "Premium paper bags", "Gift packaging"]],
  ["mono-carton-manufacturer", "Mono Carton Manufacturer", "Custom printed folding cartons for pharmaceutical, cosmetic, food, retail, and industrial products.", ["Product cartons", "Pharma cartons", "Cosmetic boxes", "Retail sleeves"]],
  ["courier-packaging", "Courier Packaging Solutions", "Secure branded shipping materials for e-commerce, logistics, and direct-to-customer businesses.", ["Courier covers", "Shipping labels", "Corrugated boxes", "Document pouches"]],
  ["labels-and-stickers", "Labels and Stickers Manufacturer", "Custom labels for products, barcodes, dispatch, inventory, and brand presentation.", ["Thermal labels", "Barcode labels", "Product stickers", "Shipping labels"]],
  ["paper-cups-manufacturer", "Paper Cups Manufacturer", "Custom printed paper cups and coordinated food-service packaging for business requirements.", ["Printed paper cups", "Cup sleeves", "Food bags", "Takeaway cartons"]],
] as const

export const industrySolutions: IndustrySolution[] = entries.map(([slug, title, description, products]) => ({
  slug,
  title,
  description,
  overview: `${description} MS Paper Products supports businesses in Hyderabad and across India with specification-led manufacturing, custom printing, finishing, quality inspection, and coordinated dispatch.`,
  products: [...products],
  applications: ["Brand launches and promotions", "Retail and distribution", "Bulk institutional requirements", "Custom product presentation"],
  faqs: commonFaqs(title.toLowerCase()),
}))

export const getIndustrySolution = (slug: string) => industrySolutions.find((item) => item.slug === slug)
