export interface Product {
  id: string
  name: string
  description: string
  image: string
  features: string[]
  sizes?: string[]
  minOrder?: string
}

export interface Category {
  slug: string
  name: string
  description: string
  longDescription: string
  image: string
  products: Product[]
  seoTitle: string
  seoDescription: string
}

export const categories: Category[] = [
  {
    slug: "retail-shopping-bags",
    name: "Retail Shopping Bags",
    description: "Premium shopping bags for retail stores and fashion outlets",
    longDescription:
      "Our retail shopping bags are designed to elevate your brand presence. Made from high-quality paper with reinforced handles, these bags offer both durability and style. Perfect for clothing stores, fashion boutiques, and retail chains looking to make a lasting impression on their customers.",
    image: "/categories/retail-shopping-bags.jpg",
    seoTitle: "Retail Shopping Bags | Premium Paper Bags for Stores | MS Paper Products",
    seoDescription:
      "High-quality retail shopping bags with custom printing, reinforced handles, and premium finishes. Perfect for fashion stores, boutiques, and retail chains.",
    products: [
      {
        id: "rsb-001",
        name: "Classic Retail Bag",
        description: "Sturdy paper shopping bag with twisted paper handles",
        image: "/products/classic-retail-bag.jpg",
        features: ["Twisted paper handles", "Multiple sizes", "Custom printing", "Reinforced bottom"],
        sizes: ["Small (8x10x4)", "Medium (10x12x5)", "Large (16x12x6)"],
        minOrder: "500 pieces",
      },
      {
        id: "rsb-002",
        name: "Premium Retail Bag",
        description: "Luxury shopping bag with ribbon handles and foil stamping",
        image: "/products/premium-retail-bag.jpg",
        features: ["Ribbon handles", "Gold/Silver foiling", "Matte/Gloss lamination", "Embossed logo"],
        sizes: ["Medium (10x12x5)", "Large (16x12x6)", "Extra Large (18x14x7)"],
        minOrder: "300 pieces",
      },
      {
        id: "rsb-003",
        name: "Eco Retail Bag",
        description: "100% recycled kraft paper bag for eco-conscious brands",
        image: "/products/eco-retail-bag.jpg",
        features: ["Recycled kraft paper", "Biodegradable", "Natural look", "Customizable"],
        sizes: ["Small (8x10x4)", "Medium (10x12x5)", "Large (16x12x6)"],
        minOrder: "500 pieces",
      },
    ],
  },
  {
    slug: "boutique-bags",
    name: "Boutique Bags",
    description: "Elegant bags designed for high-end boutiques and fashion brands",
    longDescription:
      "Our boutique bags are crafted for brands that demand excellence. Featuring premium materials, exquisite finishes, and meticulous attention to detail, these bags transform every purchase into a luxury experience. Ideal for fashion boutiques, jewelry stores, and premium retail outlets.",
    image: "/categories/boutique-bags.jpg",
    seoTitle: "Boutique Paper Bags | Luxury Shopping Bags | MS Paper Products",
    seoDescription:
      "Elegant boutique bags with premium finishes, ribbon handles, and custom branding. Perfect for fashion boutiques, jewelry stores, and luxury retail.",
    products: [
      {
        id: "bb-001",
        name: "Luxury Boutique Bag",
        description: "Premium paper bag with satin ribbon handles",
        image: "/products/luxury-boutique-bag.jpg",
        features: ["Satin ribbon handles", "Hot foil stamping", "Spot UV coating", "Premium card stock"],
        sizes: ["Small (6x8x3)", "Medium (8x10x4)", "Large (12x14x5)"],
        minOrder: "250 pieces",
      },
      {
        id: "bb-002",
        name: "Fashion Boutique Bag",
        description: "Stylish paper bag with grosgrain ribbon handles",
        image: "/products/fashion-boutique-bag.jpg",
        features: ["Grosgrain ribbon", "Full color printing", "Matte lamination", "Die-cut handles option"],
        sizes: ["Medium (8x10x4)", "Large (12x14x5)"],
        minOrder: "300 pieces",
      },
    ],
  },
  {
    slug: "wine-bottle-bags",
    name: "Wine & Bottle Bags",
    description: "Specialized bags for wine bottles and beverages",
    longDescription:
      "Our wine and bottle bags are specifically designed to safely carry bottles while adding an elegant touch. With reinforced bases and sturdy handles, these bags ensure secure transportation while maintaining a sophisticated appearance. Perfect for wine shops, liquor stores, and gift presentations.",
    image: "/categories/wine-bottle-bags.jpg",
    seoTitle: "Wine & Bottle Bags | Paper Wine Bags | MS Paper Products",
    seoDescription:
      "Premium paper wine bags and bottle carriers with reinforced bases and elegant designs. Perfect for wine shops, liquor stores, and gift packaging.",
    products: [
      {
        id: "wb-001",
        name: "Single Wine Bag",
        description: "Elegant paper bag for single wine bottle",
        image: "/products/single-wine-bag.jpg",
        features: ["Reinforced bottom", "Twisted rope handles", "Custom printing", "Window option"],
        sizes: ["Standard (4x4x14)"],
        minOrder: "500 pieces",
      },
      {
        id: "wb-002",
        name: "Double Wine Bag",
        description: "Premium bag with divider for two bottles",
        image: "/products/double-wine-bag.jpg",
        features: ["Internal divider", "Extra reinforcement", "Premium finish", "Gift-ready design"],
        sizes: ["Standard (8x4x14)"],
        minOrder: "300 pieces",
      },
      {
        id: "wb-003",
        name: "Champagne Bag",
        description: "Luxury bag for champagne and sparkling wine",
        image: "/products/champagne-bag.jpg",
        features: ["Extra wide base", "Foil accents", "Ribbon handles", "Premium card stock"],
        sizes: ["Standard (5x5x15)"],
        minOrder: "250 pieces",
      },
    ],
  },
  {
    slug: "takeaway-bags",
    name: "Takeaway Bags",
    description: "Durable food-grade bags for restaurants and cafes",
    longDescription:
      "Our takeaway bags are designed for the food service industry. Made from food-grade materials with grease-resistant options, these bags keep food fresh while promoting your brand. Available in various sizes to accommodate different meal portions, perfect for restaurants, cafes, and food delivery services.",
    image: "/categories/takeaway-bags.jpg",
    seoTitle: "Takeaway Paper Bags | Food Packaging Bags | MS Paper Products",
    seoDescription:
      "Food-grade takeaway bags for restaurants, cafes, and food delivery. Grease-resistant options with custom branding available.",
    products: [
      {
        id: "ta-001",
        name: "Standard Takeaway Bag",
        description: "Sturdy paper bag for food takeaway",
        image: "/products/standard-takeaway-bag.jpg",
        features: ["Food-grade paper", "Flat bottom", "Twisted handles", "Custom printing"],
        sizes: ["Small (6x3x9)", "Medium (8x4x10)", "Large (10x5x13)"],
        minOrder: "1000 pieces",
      },
      {
        id: "ta-002",
        name: "Grease-Proof Takeaway Bag",
        description: "Grease-resistant bag for oily foods",
        image: "/products/grease-proof-bag.jpg",
        features: ["Grease-proof lining", "Extra sturdy", "Ventilation option", "Brand printing"],
        sizes: ["Medium (8x4x10)", "Large (10x5x13)"],
        minOrder: "1000 pieces",
      },
    ],
  },
  {
    slug: "grocery-bags",
    name: "Grocery Bags",
    description: "Strong and eco-friendly bags for grocery stores",
    longDescription:
      "Our grocery bags combine strength with sustainability. Made from recycled and recyclable materials, these bags can handle heavy loads while being environmentally responsible. Available with or without handles, they're perfect for supermarkets, organic stores, and farmers' markets.",
    image: "/categories/grocery-bags.jpg",
    seoTitle: "Grocery Paper Bags | Eco-Friendly Shopping Bags | MS Paper Products",
    seoDescription:
      "Strong, eco-friendly grocery bags made from recycled materials. Perfect for supermarkets, organic stores, and farmers' markets.",
    products: [
      {
        id: "gb-001",
        name: "Heavy-Duty Grocery Bag",
        description: "Extra strong bag for heavy groceries",
        image: "/products/heavy-duty-grocery-bag.jpg",
        features: ["Reinforced bottom", "Extra thick paper", "Flat handles", "High load capacity"],
        sizes: ["Standard (12x7x17)", "Large (14x8x21)"],
        minOrder: "1000 pieces",
      },
      {
        id: "gb-002",
        name: "Eco Grocery Bag",
        description: "100% recycled kraft grocery bag",
        image: "/products/eco-grocery-bag.jpg",
        features: ["100% recycled", "Biodegradable", "Natural look", "Strong handles"],
        sizes: ["Small (8x5x10)", "Medium (12x7x17)", "Large (14x8x21)"],
        minOrder: "1000 pieces",
      },
    ],
  },
  {
    slug: "pharmaceutical-bags",
    name: "Pharmaceutical Bags",
    description: "Hygienic bags for pharmacies and medical stores",
    longDescription:
      "Our pharmaceutical bags meet the highest standards of hygiene and quality. Designed specifically for pharmacies, clinics, and medical stores, these bags provide a clean, professional presentation while ensuring product safety. Available with tamper-evident closures and prescription label areas.",
    image: "/categories/pharmaceutical-bags.jpg",
    seoTitle: "Pharmaceutical Paper Bags | Pharmacy Bags | MS Paper Products",
    seoDescription:
      "Hygienic pharmaceutical bags for pharmacies and medical stores. Clean, professional design with tamper-evident options.",
    products: [
      {
        id: "pb-001",
        name: "Standard Pharmacy Bag",
        description: "Clean white bag for pharmaceutical products",
        image: "/products/standard-pharmacy-bag.jpg",
        features: ["Medical-grade paper", "Clean white finish", "Label area", "Various sizes"],
        sizes: ["Small (4x2x8)", "Medium (6x3x11)", "Large (8x4x14)"],
        minOrder: "2000 pieces",
      },
      {
        id: "pb-002",
        name: "Prescription Bag",
        description: "Bag with designated prescription label area",
        image: "/products/prescription-bag.jpg",
        features: ["Pre-printed label area", "Tamper-evident seal", "HIPAA compliant", "Professional design"],
        sizes: ["Standard (6x3x11)"],
        minOrder: "2000 pieces",
      },
    ],
  },
  {
    slug: "jewelry-bags",
    name: "Jewelry Bags",
    description: "Luxurious small bags for jewelry and accessories",
    longDescription:
      "Our jewelry bags are designed to match the elegance of your precious items. Featuring luxurious materials, soft-touch finishes, and exquisite details, these bags create a memorable unboxing experience. Perfect for jewelry stores, watch boutiques, and accessory brands.",
    image: "/categories/jewelry-bags.jpg",
    seoTitle: "Jewelry Paper Bags | Luxury Small Bags | MS Paper Products",
    seoDescription:
      "Luxurious jewelry bags with premium finishes and elegant designs. Perfect for jewelry stores, watch boutiques, and accessory brands.",
    products: [
      {
        id: "jb-001",
        name: "Mini Jewelry Bag",
        description: "Small elegant bag for rings and earrings",
        image: "/products/mini-jewelry-bag.jpg",
        features: ["Soft-touch finish", "Ribbon handles", "Velvet-feel paper", "Foil logo"],
        sizes: ["Extra Small (3x2x4)", "Small (4x2x5)"],
        minOrder: "500 pieces",
      },
      {
        id: "jb-002",
        name: "Premium Jewelry Bag",
        description: "Luxury bag for necklaces and bracelets",
        image: "/products/premium-jewelry-bag.jpg",
        features: ["Premium card stock", "Gold/Silver foiling", "Magnetic closure option", "Custom interior"],
        sizes: ["Small (4x2x5)", "Medium (5x3x7)"],
        minOrder: "300 pieces",
      },
    ],
  },
  {
    slug: "corporate-gift-bags",
    name: "Corporate Gift Bags",
    description: "Professional bags for corporate gifting and events",
    longDescription:
      "Our corporate gift bags make a powerful brand statement. Designed for corporate events, conferences, and client gifting, these bags combine professionalism with elegance. Available with full custom branding, premium finishes, and various sizes to accommodate different gift items.",
    image: "/categories/corporate-gift-bags.jpg",
    seoTitle: "Corporate Gift Bags | Business Gift Packaging | MS Paper Products",
    seoDescription:
      "Professional corporate gift bags for events, conferences, and client gifting. Premium branding options and elegant finishes available.",
    products: [
      {
        id: "cgb-001",
        name: "Executive Gift Bag",
        description: "Premium bag for corporate gifts",
        image: "/products/executive-gift-bag.jpg",
        features: ["Premium matte finish", "Embossed logo", "Ribbon handles", "Reinforced structure"],
        sizes: ["Medium (10x8x4)", "Large (14x11x5)", "Extra Large (16x14x6)"],
        minOrder: "250 pieces",
      },
      {
        id: "cgb-002",
        name: "Conference Bag",
        description: "Bag for conference materials and swag",
        image: "/products/conference-bag.jpg",
        features: ["Die-cut handles", "Full color printing", "Sturdy construction", "Eco-friendly option"],
        sizes: ["Standard (12x10x4)", "Large (15x12x5)"],
        minOrder: "500 pieces",
      },
      {
        id: "cgb-003",
        name: "Event Gift Bag",
        description: "Customizable bag for special events",
        image: "/products/event-gift-bag.jpg",
        features: ["Custom shapes", "Special finishes", "Coordinated designs", "Premium quality"],
        sizes: ["Various sizes available"],
        minOrder: "300 pieces",
      },
    ],
  },
]

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug)
}

export function getAllCategories(): Category[] {
  return categories
}
