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
  icon: string
  products: Product[]
  seoTitle: string
  seoDescription: string
  seoKeywords: string[]
}

export interface MainCategory {
  name: string
  slug: string
  description: string
  icon: string
  subcategories: Category[]
}

export const mainCategories: MainCategory[] = [
  {
    name: "Paper Bags",
    slug: "paper-bags",
    description: "Premium quality paper bags for all business needs",
    icon: "ShoppingBag",
    subcategories: [
      {
        slug: "kraft-paper-bags",
        name: "Kraft Paper Bags",
        description: "Natural brown kraft paper bags with eco-friendly appeal",
        longDescription:
          "Our kraft paper bags are made from premium quality virgin kraft paper, offering excellent strength and durability. The natural brown color gives an eco-friendly appearance that appeals to environmentally conscious consumers. Perfect for retail stores, grocery shops, and businesses looking for sustainable packaging solutions.",
        image: "/categories/kraft-paper-bags.jpg",
        icon: "Package",
        seoTitle: "Kraft Paper Bags | Natural Brown Paper Bags | MS Paper Products Hyderabad",
        seoDescription:
          "Premium kraft paper bags manufacturer in Hyderabad. Natural brown paper bags with twisted handles, flat handles, and custom printing options. Eco-friendly and durable.",
        seoKeywords: [
          "kraft paper bags",
          "brown paper bags",
          "natural paper bags",
          "eco-friendly bags",
          "kraft bags Hyderabad",
        ],
        products: [
          {
            id: "kpb-001",
            name: "Standard Kraft Bag",
            description: "Classic brown kraft paper bag with twisted handles",
            image: "/products/standard-kraft-bag.jpg",
            features: ["100% recyclable", "Twisted paper handles", "Multiple sizes", "Natural brown finish"],
            sizes: ["Small (8x10x4)", "Medium (10x12x5)", "Large (16x12x6)", "Extra Large (18x14x7)"],
            minOrder: "500 pieces",
          },
          {
            id: "kpb-002",
            name: "Premium Kraft Bag",
            description: "High-quality kraft bag with reinforced bottom",
            image: "/products/premium-kraft-bag.jpg",
            features: ["Reinforced bottom", "Flat ribbon handles", "Custom printing", "Heavy-duty paper"],
            sizes: ["Medium (10x12x5)", "Large (16x12x6)", "Extra Large (18x14x7)"],
            minOrder: "300 pieces",
          },
          {
            id: "kpb-003",
            name: "White Kraft Bag",
            description: "Bleached white kraft paper bag for premium look",
            image: "/products/white-kraft-bag.jpg",
            features: ["White kraft paper", "Clean appearance", "Full color printing", "Various handle options"],
            sizes: ["Small (8x10x4)", "Medium (10x12x5)", "Large (16x12x6)"],
            minOrder: "500 pieces",
          },
        ],
      },
      {
        slug: "printed-paper-bags",
        name: "Printed Paper Bags",
        description: "Custom printed paper bags with your brand logo and design",
        longDescription:
          "Transform your packaging into a powerful marketing tool with our custom printed paper bags. We offer full-color offset printing, flexographic printing, and digital printing options to bring your brand designs to life. Our state-of-the-art printing technology ensures vibrant colors, sharp details, and consistent quality across all your bags.",
        image: "/categories/printed-paper-bags.jpg",
        icon: "Printer",
        seoTitle: "Printed Paper Bags | Custom Logo Paper Bags | MS Paper Products",
        seoDescription:
          "Custom printed paper bags with your logo and brand design. Full-color printing, flexographic and offset printing available. Quality paper bags manufacturer in Hyderabad.",
        seoKeywords: [
          "printed paper bags",
          "custom logo bags",
          "branded paper bags",
          "promotional bags",
          "custom printed bags Hyderabad",
        ],
        products: [
          {
            id: "ppb-001",
            name: "Full Color Printed Bag",
            description: "Vibrant full-color printed paper bag with custom design",
            image: "/products/full-color-printed-bag.jpg",
            features: ["Full color printing", "CMYK process", "Photo quality", "Glossy or matte finish"],
            sizes: ["Small", "Medium", "Large", "Custom sizes"],
            minOrder: "500 pieces",
          },
          {
            id: "ppb-002",
            name: "Logo Printed Bag",
            description: "Paper bag with single or multi-color logo print",
            image: "/products/logo-printed-bag.jpg",
            features: ["1-4 color printing", "Logo placement options", "Cost effective", "Quick turnaround"],
            sizes: ["All standard sizes", "Custom sizes available"],
            minOrder: "1000 pieces",
          },
          {
            id: "ppb-003",
            name: "Flexo Printed Bag",
            description: "Economical flexographic printed paper bag",
            image: "/products/flexo-printed-bag.jpg",
            features: ["Flexographic printing", "Up to 6 colors", "High volume orders", "Competitive pricing"],
            sizes: ["Standard sizes", "Custom dimensions"],
            minOrder: "2000 pieces",
          },
        ],
      },
      {
        slug: "custom-paper-bags",
        name: "Custom Paper Bags",
        description: "Fully customized paper bags tailored to your specifications",
        longDescription:
          "Create unique packaging that perfectly represents your brand with our custom paper bags. From size and shape to material and finish, every aspect can be customized to meet your exact requirements. Our design team works closely with you to bring your vision to life, ensuring your packaging makes a lasting impression.",
        image: "/categories/custom-paper-bags.jpg",
        icon: "Palette",
        seoTitle: "Custom Paper Bags | Bespoke Packaging Solutions | MS Paper Products",
        seoDescription:
          "Fully customized paper bags tailored to your specifications. Custom sizes, shapes, materials, and finishes. Leading custom paper bag manufacturer in Hyderabad.",
        seoKeywords: [
          "custom paper bags",
          "bespoke packaging",
          "tailored paper bags",
          "custom packaging",
          "personalized bags",
        ],
        products: [
          {
            id: "cpb-001",
            name: "Custom Size Bag",
            description: "Paper bag made to your exact dimensions",
            image: "/products/custom-size-bag.jpg",
            features: ["Custom dimensions", "Any size possible", "Design consultation", "Sample provided"],
            sizes: ["As per requirement"],
            minOrder: "300 pieces",
          },
          {
            id: "cpb-002",
            name: "Custom Shape Bag",
            description: "Uniquely shaped paper bag for special products",
            image: "/products/custom-shape-bag.jpg",
            features: ["Unique shapes", "Die-cut designs", "Special structures", "Brand differentiation"],
            sizes: ["Custom"],
            minOrder: "500 pieces",
          },
          {
            id: "cpb-003",
            name: "Luxury Custom Bag",
            description: "Premium custom bag with luxury finishes",
            image: "/products/luxury-custom-bag.jpg",
            features: ["Premium materials", "Multiple finishes", "Embossing/debossing", "Foil stamping"],
            sizes: ["Custom sizes"],
            minOrder: "250 pieces",
          },
        ],
      },
      {
        slug: "eco-friendly-paper-bags",
        name: "Eco-Friendly Paper Bags",
        description: "100% recyclable and biodegradable sustainable paper bags",
        longDescription:
          "Make a positive environmental impact with our eco-friendly paper bags. Made from recycled materials and FSC-certified paper, these bags are fully biodegradable and recyclable. Perfect for businesses committed to sustainability, our eco-friendly bags help reduce plastic waste while maintaining quality and durability.",
        image: "/categories/eco-friendly-paper-bags.jpg",
        icon: "Leaf",
        seoTitle: "Eco-Friendly Paper Bags | Sustainable Packaging | MS Paper Products",
        seoDescription:
          "100% recyclable and biodegradable paper bags. FSC-certified, sustainable packaging solutions. Eco-friendly paper bags manufacturer in Hyderabad.",
        seoKeywords: [
          "eco-friendly paper bags",
          "sustainable bags",
          "recyclable bags",
          "biodegradable bags",
          "green packaging",
        ],
        products: [
          {
            id: "efpb-001",
            name: "Recycled Paper Bag",
            description: "Bag made from 100% recycled paper",
            image: "/products/recycled-paper-bag.jpg",
            features: ["100% recycled content", "Post-consumer waste", "Eco-certified", "Natural texture"],
            sizes: ["Small", "Medium", "Large"],
            minOrder: "500 pieces",
          },
          {
            id: "efpb-002",
            name: "FSC Certified Bag",
            description: "Paper bag with FSC certification for responsible sourcing",
            image: "/products/fsc-certified-bag.jpg",
            features: ["FSC certified", "Sustainable forestry", "Traceable origin", "Premium quality"],
            sizes: ["All sizes available"],
            minOrder: "500 pieces",
          },
        ],
      },
      {
        slug: "retail-carry-bags",
        name: "Retail Carry Bags",
        description: "Durable carry bags for retail stores and shopping",
        longDescription:
          "Our retail carry bags are designed for everyday shopping needs. Built with durability in mind, these bags can handle heavy loads while looking great. Available in various sizes and styles, they're perfect for clothing stores, supermarkets, department stores, and all types of retail businesses.",
        image: "/categories/retail-carry-bags.jpg",
        icon: "ShoppingBag",
        seoTitle: "Retail Carry Bags | Shopping Bags | MS Paper Products Hyderabad",
        seoDescription:
          "Durable retail carry bags for shops and stores. Heavy-duty paper shopping bags with handles. Wholesale retail bags manufacturer in Hyderabad.",
        seoKeywords: ["retail carry bags", "shopping bags", "store bags", "carry bags", "retail packaging"],
        products: [
          {
            id: "rcb-001",
            name: "Standard Retail Bag",
            description: "Everyday retail carry bag with twisted handles",
            image: "/products/standard-retail-bag.jpg",
            features: ["Twisted handles", "Sturdy construction", "Multiple colors", "Affordable pricing"],
            sizes: ["Small", "Medium", "Large", "Extra Large"],
            minOrder: "1000 pieces",
          },
          {
            id: "rcb-002",
            name: "Heavy Duty Retail Bag",
            description: "Extra strong bag for heavy items",
            image: "/products/heavy-duty-retail-bag.jpg",
            features: ["Reinforced handles", "Thick paper", "High weight capacity", "Durable bottom"],
            sizes: ["Large", "Extra Large", "Jumbo"],
            minOrder: "500 pieces",
          },
        ],
      },
      {
        slug: "corporate-paper-bags",
        name: "Corporate Paper Bags",
        description: "Professional paper bags for corporate gifting and events",
        longDescription:
          "Make a professional impression with our corporate paper bags. Designed for business events, conferences, client gifting, and corporate branding, these bags feature premium materials and elegant finishes. Customize with your company logo, colors, and messaging to reinforce your brand identity.",
        image: "/categories/corporate-paper-bags.jpg",
        icon: "Briefcase",
        seoTitle: "Corporate Paper Bags | Business Gift Bags | MS Paper Products",
        seoDescription:
          "Professional corporate paper bags for gifting and events. Premium quality with custom branding. Corporate gift bags manufacturer in Hyderabad.",
        seoKeywords: [
          "corporate paper bags",
          "business gift bags",
          "corporate gifting",
          "event bags",
          "conference bags",
        ],
        products: [
          {
            id: "corpb-001",
            name: "Executive Corporate Bag",
            description: "Premium bag for executive gifting",
            image: "/products/executive-corporate-bag.jpg",
            features: ["Premium finish", "Embossed logo", "Ribbon handles", "Luxury feel"],
            sizes: ["Medium", "Large"],
            minOrder: "250 pieces",
          },
          {
            id: "corpb-002",
            name: "Conference Bag",
            description: "Branded bag for conferences and seminars",
            image: "/products/conference-bag.jpg",
            features: ["Full branding", "Sturdy design", "Document friendly", "Customizable"],
            sizes: ["Standard A4 size", "Large"],
            minOrder: "500 pieces",
          },
        ],
      },
      {
        slug: "theme-gift-bags",
        name: "Theme Gift Bags",
        description: "Festive and event-themed decorative gift bags",
        longDescription:
          "Celebrate every occasion with our themed gift bags. From festivals like Diwali, Christmas, and Eid to events like weddings, birthdays, and anniversaries, we have designs for every celebration. Our themed bags add extra joy and excitement to gift-giving moments.",
        image: "/categories/theme-gift-bags.jpg",
        icon: "Gift",
        seoTitle: "Theme Gift Bags | Festive & Event Bags | MS Paper Products",
        seoDescription:
          "Festive and event-themed gift bags for all occasions. Diwali, Christmas, wedding, birthday gift bags. Decorative paper bags manufacturer in Hyderabad.",
        seoKeywords: ["theme gift bags", "festive bags", "event bags", "Diwali bags", "Christmas bags", "wedding bags"],
        products: [
          {
            id: "tgb-001",
            name: "Diwali Gift Bag",
            description: "Beautifully designed bag for Diwali celebrations",
            image: "/products/diwali-gift-bag.jpg",
            features: ["Festive designs", "Gold accents", "Traditional motifs", "Various sizes"],
            sizes: ["Small", "Medium", "Large"],
            minOrder: "500 pieces",
          },
          {
            id: "tgb-002",
            name: "Christmas Gift Bag",
            description: "Holiday-themed bag for Christmas gifting",
            image: "/products/christmas-gift-bag.jpg",
            features: ["Christmas designs", "Red and green themes", "Glitter options", "Ribbon handles"],
            sizes: ["Small", "Medium", "Large"],
            minOrder: "500 pieces",
          },
          {
            id: "tgb-003",
            name: "Wedding Gift Bag",
            description: "Elegant bag for wedding favors and gifts",
            image: "/products/wedding-gift-bag.jpg",
            features: ["Elegant designs", "Custom colors", "Foil printing", "Premium quality"],
            sizes: ["Small", "Medium", "Large"],
            minOrder: "300 pieces",
          },
        ],
      },
    ],
  },
  {
    name: "Gift Packaging",
    slug: "gift-packaging",
    description: "Beautiful gift packaging solutions for all occasions",
    icon: "Gift",
    subcategories: [
      {
        slug: "paper-gift-bags",
        name: "Paper Gift Bags",
        description: "Elegant paper gift bags for special occasions",
        longDescription:
          "Our paper gift bags transform ordinary gifts into memorable presents. With elegant designs, premium materials, and beautiful finishing options, these bags make gift-giving extra special. Available in various sizes, colors, and styles to match any occasion.",
        image: "/categories/paper-gift-bags.jpg",
        icon: "Gift",
        seoTitle: "Paper Gift Bags | Elegant Gift Packaging | MS Paper Products",
        seoDescription:
          "Beautiful paper gift bags for all occasions. Premium quality gift packaging with elegant designs. Gift bags manufacturer in Hyderabad.",
        seoKeywords: ["paper gift bags", "gift packaging", "gift bags", "present bags", "occasion bags"],
        products: [
          {
            id: "pgb-001",
            name: "Classic Gift Bag",
            description: "Timeless design gift bag for any occasion",
            image: "/products/classic-gift-bag.jpg",
            features: ["Classic designs", "Ribbon handles", "Multiple colors", "Tissue paper included"],
            sizes: ["Small", "Medium", "Large"],
            minOrder: "300 pieces",
          },
          {
            id: "pgb-002",
            name: "Luxury Gift Bag",
            description: "Premium gift bag with luxury finishes",
            image: "/products/luxury-gift-bag.jpg",
            features: ["Premium card stock", "Foil stamping", "Satin handles", "Gift tag included"],
            sizes: ["Medium", "Large"],
            minOrder: "200 pieces",
          },
        ],
      },
      {
        slug: "christmas-new-year-gift-bags",
        name: "Christmas & New Year Gift Bags",
        description: "Festive bags for holiday season celebrations",
        longDescription:
          "Spread holiday cheer with our Christmas and New Year gift bags. Featuring festive designs, seasonal colors, and joyful patterns, these bags are perfect for holiday gifting. From traditional red and green themes to modern metallic designs, we have options for every style.",
        image: "/categories/christmas-new-year-bags.jpg",
        icon: "Snowflake",
        seoTitle: "Christmas & New Year Gift Bags | Holiday Packaging | MS Paper Products",
        seoDescription:
          "Festive Christmas and New Year gift bags. Holiday season paper bags with seasonal designs. Christmas gift bags manufacturer in Hyderabad.",
        seoKeywords: ["Christmas gift bags", "New Year bags", "holiday bags", "festive packaging", "seasonal bags"],
        products: [
          {
            id: "cnyb-001",
            name: "Traditional Christmas Bag",
            description: "Classic red and green Christmas bag",
            image: "/products/traditional-christmas-bag.jpg",
            features: ["Traditional colors", "Holiday prints", "Ribbon handles", "Festive patterns"],
            sizes: ["Small", "Medium", "Large"],
            minOrder: "500 pieces",
          },
          {
            id: "cnyb-002",
            name: "New Year Celebration Bag",
            description: "Elegant bag for New Year gifts",
            image: "/products/new-year-bag.jpg",
            features: ["Metallic finish", "Gold/Silver accents", "Modern designs", "Premium quality"],
            sizes: ["Medium", "Large"],
            minOrder: "300 pieces",
          },
        ],
      },
      {
        slug: "custom-printed-gift-bags",
        name: "Custom Printed Gift Bags",
        description: "Personalized gift bags with your custom designs",
        longDescription:
          "Create memorable gifting experiences with our custom printed gift bags. Whether for personal celebrations, corporate events, or retail purposes, we can print your unique designs, photos, or messages on premium quality gift bags. Perfect for making every gift truly special.",
        image: "/categories/custom-printed-gift-bags.jpg",
        icon: "Palette",
        seoTitle: "Custom Printed Gift Bags | Personalized Gift Packaging | MS Paper Products",
        seoDescription:
          "Custom printed gift bags with your designs. Personalized gift packaging for all occasions. Custom gift bags manufacturer in Hyderabad.",
        seoKeywords: ["custom printed gift bags", "personalized bags", "custom gift packaging", "branded gift bags"],
        products: [
          {
            id: "cpgb-001",
            name: "Photo Print Gift Bag",
            description: "Gift bag with your custom photo print",
            image: "/products/photo-print-gift-bag.jpg",
            features: ["Photo quality printing", "Full color", "Personalized message", "Premium finish"],
            sizes: ["Medium", "Large"],
            minOrder: "100 pieces",
          },
          {
            id: "cpgb-002",
            name: "Logo Gift Bag",
            description: "Corporate gift bag with company branding",
            image: "/products/logo-gift-bag.jpg",
            features: ["Logo printing", "Brand colors", "Professional look", "Various finishes"],
            sizes: ["All sizes"],
            minOrder: "250 pieces",
          },
        ],
      },
    ],
  },
  {
    name: "Boxes & Cartons",
    slug: "boxes-cartons",
    description: "Quality packaging boxes and cartons for all needs",
    icon: "Package",
    subcategories: [
      {
        slug: "paper-boxes",
        name: "Paper Boxes",
        description: "Premium paper boxes for product packaging",
        longDescription:
          "Our paper boxes offer excellent protection and presentation for your products. Made from high-quality materials with precise construction, these boxes are perfect for retail packaging, gifting, and product storage. Available in various styles including folding cartons, rigid boxes, and display boxes.",
        image: "/categories/paper-boxes.jpg",
        icon: "Box",
        seoTitle: "Paper Boxes | Product Packaging Boxes | MS Paper Products Hyderabad",
        seoDescription:
          "Premium paper boxes for product packaging. Folding cartons, rigid boxes, and display boxes. Paper box manufacturer in Hyderabad.",
        seoKeywords: ["paper boxes", "product boxes", "packaging boxes", "folding cartons", "rigid boxes"],
        products: [
          {
            id: "pb-001",
            name: "Folding Carton Box",
            description: "Flat-pack carton that folds into box shape",
            image: "/products/folding-carton-box.jpg",
            features: ["Flat storage", "Easy assembly", "Custom sizes", "Print ready"],
            sizes: ["Custom sizes available"],
            minOrder: "500 pieces",
          },
          {
            id: "pb-002",
            name: "Rigid Setup Box",
            description: "Premium rigid box for luxury products",
            image: "/products/rigid-setup-box.jpg",
            features: ["Rigid construction", "Premium feel", "Custom inserts", "Luxury finish"],
            sizes: ["Custom sizes"],
            minOrder: "200 pieces",
          },
        ],
      },
      {
        slug: "gift-boxes",
        name: "Gift Boxes",
        description: "Beautiful gift boxes for special presentations",
        longDescription:
          "Make every gift extraordinary with our premium gift boxes. From simple elegant designs to elaborate presentations, our gift boxes add value and excitement to any present. Available with various closure options, inserts, and finishes to suit your needs.",
        image: "/categories/gift-boxes.jpg",
        icon: "Gift",
        seoTitle: "Gift Boxes | Premium Gift Packaging | MS Paper Products",
        seoDescription:
          "Beautiful gift boxes for special presentations. Premium quality gift packaging boxes. Gift box manufacturer in Hyderabad.",
        seoKeywords: ["gift boxes", "present boxes", "gift packaging", "luxury boxes", "decorative boxes"],
        products: [
          {
            id: "gbox-001",
            name: "Magnetic Closure Gift Box",
            description: "Elegant box with magnetic closure",
            image: "/products/magnetic-gift-box.jpg",
            features: ["Magnetic closure", "Premium finish", "Custom insert", "Various colors"],
            sizes: ["Small", "Medium", "Large"],
            minOrder: "200 pieces",
          },
          {
            id: "gbox-002",
            name: "Ribbon Tie Gift Box",
            description: "Classic gift box with ribbon closure",
            image: "/products/ribbon-gift-box.jpg",
            features: ["Ribbon closure", "Classic design", "Nestable sizes", "Color options"],
            sizes: ["Set of 3", "Individual sizes"],
            minOrder: "300 pieces",
          },
        ],
      },
      {
        slug: "carton-boxes",
        name: "Carton Boxes",
        description: "Sturdy carton boxes for shipping and storage",
        longDescription:
          "Our carton boxes provide reliable protection for shipping, storage, and transportation. Made from corrugated and solid board materials, these boxes offer excellent durability and stacking strength. Available in various flute types and board grades to match your specific requirements.",
        image: "/categories/carton-boxes.jpg",
        icon: "Package",
        seoTitle: "Carton Boxes | Shipping & Storage Boxes | MS Paper Products",
        seoDescription:
          "Sturdy carton boxes for shipping and storage. Corrugated boxes with excellent protection. Carton box manufacturer in Hyderabad.",
        seoKeywords: ["carton boxes", "shipping boxes", "storage boxes", "corrugated boxes", "packing boxes"],
        products: [
          {
            id: "cbox-001",
            name: "Regular Slotted Carton",
            description: "Standard shipping carton box",
            image: "/products/regular-slotted-carton.jpg",
            features: ["Standard design", "Easy assembly", "Stackable", "Various sizes"],
            sizes: ["Small", "Medium", "Large", "Custom"],
            minOrder: "100 pieces",
          },
          {
            id: "cbox-002",
            name: "Die-Cut Carton",
            description: "Custom die-cut carton for specific products",
            image: "/products/die-cut-carton.jpg",
            features: ["Custom shape", "Product specific", "No tape needed", "Display ready"],
            sizes: ["Custom sizes"],
            minOrder: "500 pieces",
          },
        ],
      },
      {
        slug: "corrugated-carton-boxes",
        name: "Corrugated Carton Boxes",
        description: "Heavy-duty corrugated boxes for industrial packing",
        longDescription:
          "Our corrugated carton boxes offer superior protection for heavy and fragile items. Available in various flute types (B, C, E, BC double wall), these boxes provide excellent cushioning and compression strength. Ideal for e-commerce, industrial shipping, and warehouse storage.",
        image: "/categories/corrugated-boxes.jpg",
        icon: "Package",
        seoTitle: "Corrugated Carton Boxes | Heavy Duty Shipping | MS Paper Products",
        seoDescription:
          "Heavy-duty corrugated boxes for industrial packing. Multiple flute options with excellent protection. Corrugated box manufacturer in Hyderabad.",
        seoKeywords: [
          "corrugated boxes",
          "heavy duty boxes",
          "industrial boxes",
          "shipping cartons",
          "warehouse boxes",
        ],
        products: [
          {
            id: "ccbox-001",
            name: "Single Wall Corrugated Box",
            description: "Standard corrugated box for general shipping",
            image: "/products/single-wall-corrugated.jpg",
            features: ["Single wall", "B or C flute", "Good protection", "Economical"],
            sizes: ["All sizes available"],
            minOrder: "100 pieces",
          },
          {
            id: "ccbox-002",
            name: "Double Wall Corrugated Box",
            description: "Extra strong box for heavy items",
            image: "/products/double-wall-corrugated.jpg",
            features: ["Double wall", "BC flute", "Heavy items", "Maximum protection"],
            sizes: ["Medium to Large"],
            minOrder: "50 pieces",
          },
        ],
      },
      {
        slug: "pharmaceutical-packaging-boxes",
        name: "Pharmaceutical Packaging Boxes",
        description: "Hygienic boxes for medicine and pharma products",
        longDescription:
          "Our pharmaceutical packaging boxes meet strict industry standards for hygiene and safety. Designed for medicines, medical devices, and healthcare products, these boxes provide tamper-evident packaging with clear labeling areas. Available in various sizes with child-resistant options.",
        image: "/categories/pharmaceutical-boxes.jpg",
        icon: "Pill",
        seoTitle: "Pharmaceutical Packaging Boxes | Medicine Boxes | MS Paper Products",
        seoDescription:
          "Hygienic pharmaceutical packaging boxes for medicine and healthcare products. Tamper-evident, compliant packaging. Pharma box manufacturer in Hyderabad.",
        seoKeywords: [
          "pharmaceutical boxes",
          "medicine boxes",
          "pharma packaging",
          "medical boxes",
          "healthcare packaging",
        ],
        products: [
          {
            id: "pharma-001",
            name: "Medicine Carton",
            description: "Standard folding carton for medicine packaging",
            image: "/products/medicine-carton.jpg",
            features: ["Tamper evident", "Batch printing", "Barcode ready", "Compliant design"],
            sizes: ["Various standard sizes"],
            minOrder: "1000 pieces",
          },
          {
            id: "pharma-002",
            name: "Blister Pack Carton",
            description: "Carton designed for blister pack medicines",
            image: "/products/blister-pack-carton.jpg",
            features: ["Blister compatible", "Easy open", "Information panel", "Pharma grade"],
            sizes: ["Standard blister sizes"],
            minOrder: "1000 pieces",
          },
        ],
      },
      {
        slug: "industrial-packing-boxes",
        name: "Industrial Packing Boxes",
        description: "Heavy-duty boxes for industrial and bulk packing",
        longDescription:
          "Our industrial packing boxes are engineered for the toughest applications. Built to withstand heavy loads, rough handling, and challenging storage conditions, these boxes protect your industrial goods throughout the supply chain. Available with custom specifications for your specific needs.",
        image: "/categories/industrial-boxes.jpg",
        icon: "Factory",
        seoTitle: "Industrial Packing Boxes | Heavy Duty Packaging | MS Paper Products",
        seoDescription:
          "Heavy-duty industrial packing boxes for bulk goods. High-strength packaging solutions. Industrial box manufacturer in Hyderabad.",
        seoKeywords: [
          "industrial boxes",
          "packing boxes",
          "bulk packaging",
          "heavy duty boxes",
          "industrial packaging",
        ],
        products: [
          {
            id: "ind-001",
            name: "Heavy Duty Industrial Box",
            description: "Extra strong box for industrial products",
            image: "/products/heavy-duty-industrial-box.jpg",
            features: ["Triple wall option", "Pallet compatible", "Stackable", "Weather resistant"],
            sizes: ["Large", "Extra Large", "Custom"],
            minOrder: "50 pieces",
          },
          {
            id: "ind-002",
            name: "Parts Storage Box",
            description: "Box with dividers for parts and components",
            image: "/products/parts-storage-box.jpg",
            features: ["Internal dividers", "Easy access", "Stackable", "Reusable"],
            sizes: ["Various sizes"],
            minOrder: "100 pieces",
          },
        ],
      },
    ],
  },
  {
    name: "Files & Folders",
    slug: "files-folders",
    description: "Professional file folders for document organization",
    icon: "Folder",
    subcategories: [
      {
        slug: "hospital-medical-file-folders",
        name: "Hospital / Medical File Folders",
        description: "Hygienic file folders for medical records and patient files",
        longDescription:
          "Our medical file folders are designed specifically for healthcare environments. With easy-clean surfaces, durable construction, and clear labeling options, these folders help organize patient records efficiently. Available in various colors for department coding and with security features for confidential information.",
        image: "/categories/medical-file-folders.jpg",
        icon: "FileText",
        seoTitle: "Hospital File Folders | Medical Record Folders | MS Paper Products",
        seoDescription:
          "Hygienic file folders for hospitals and medical facilities. Durable patient file folders with security features. Medical folder manufacturer in Hyderabad.",
        seoKeywords: [
          "hospital file folders",
          "medical folders",
          "patient file folders",
          "healthcare folders",
          "medical records",
        ],
        products: [
          {
            id: "mff-001",
            name: "Patient File Folder",
            description: "Standard folder for patient medical records",
            image: "/products/patient-file-folder.jpg",
            features: ["Durable material", "Label area", "Color coded", "Easy clean"],
            sizes: ["A4", "Legal"],
            minOrder: "500 pieces",
          },
          {
            id: "mff-002",
            name: "X-Ray Film Folder",
            description: "Large folder for storing X-ray films",
            image: "/products/xray-film-folder.jpg",
            features: ["Large size", "Film protection", "Easy access", "Durable"],
            sizes: ["Standard X-ray size"],
            minOrder: "200 pieces",
          },
        ],
      },
      {
        slug: "office-file-folders",
        name: "Office File Folders",
        description: "Professional folders for office document management",
        longDescription:
          "Keep your office organized with our professional file folders. Available in various styles including manila folders, hanging folders, and expanding files, these folders make document management efficient and professional. Perfect for filing cabinets, desk organization, and archives.",
        image: "/categories/office-file-folders.jpg",
        icon: "FolderOpen",
        seoTitle: "Office File Folders | Document Folders | MS Paper Products",
        seoDescription:
          "Professional office file folders for document organization. Manila folders, hanging folders, and expanding files. Office folder manufacturer in Hyderabad.",
        seoKeywords: [
          "office file folders",
          "document folders",
          "manila folders",
          "hanging folders",
          "office organization",
        ],
        products: [
          {
            id: "off-001",
            name: "Manila File Folder",
            description: "Classic manila folder for everyday filing",
            image: "/products/manila-file-folder.jpg",
            features: ["Classic design", "Tab position options", "Multiple colors", "Economical"],
            sizes: ["A4", "Letter", "Legal"],
            minOrder: "500 pieces",
          },
          {
            id: "off-002",
            name: "Expanding File Folder",
            description: "Accordion-style folder for growing files",
            image: "/products/expanding-file-folder.jpg",
            features: ["Expanding pockets", "Elastic closure", "Index tabs", "High capacity"],
            sizes: ["A4", "Legal"],
            minOrder: "200 pieces",
          },
        ],
      },
      {
        slug: "corporate-file-folders",
        name: "Corporate File Folders",
        description: "Branded folders for corporate presentations",
        longDescription:
          "Present your company professionally with our corporate file folders. Featuring your logo, brand colors, and custom designs, these folders make a lasting impression in meetings, conferences, and client interactions. Available in various materials and finishes for the perfect corporate look.",
        image: "/categories/corporate-file-folders.jpg",
        icon: "Briefcase",
        seoTitle: "Corporate File Folders | Branded Presentation Folders | MS Paper Products",
        seoDescription:
          "Branded corporate file folders for professional presentations. Custom printed folders with company branding. Corporate folder manufacturer in Hyderabad.",
        seoKeywords: [
          "corporate folders",
          "branded folders",
          "presentation folders",
          "company folders",
          "business folders",
        ],
        products: [
          {
            id: "corp-001",
            name: "Presentation Folder",
            description: "Two-pocket folder for corporate presentations",
            image: "/products/presentation-folder.jpg",
            features: ["Twin pockets", "Business card slot", "Full branding", "Premium stock"],
            sizes: ["A4", "Letter"],
            minOrder: "250 pieces",
          },
          {
            id: "corp-002",
            name: "Conference Folder",
            description: "Padded folder for conferences and meetings",
            image: "/products/conference-folder.jpg",
            features: ["Padded cover", "Notepad included", "Pen loop", "Custom branding"],
            sizes: ["A4"],
            minOrder: "100 pieces",
          },
        ],
      },
      {
        slug: "document-report-folders",
        name: "Document & Report Folders",
        description: "Professional folders for reports and important documents",
        longDescription:
          "Present your reports and documents professionally with our specialized folders. Featuring clear front covers, spine options, and binding compatibility, these folders keep your important documents organized and presentable. Perfect for business reports, proposals, and presentations.",
        image: "/categories/document-report-folders.jpg",
        icon: "FileText",
        seoTitle: "Document & Report Folders | Professional Filing | MS Paper Products",
        seoDescription:
          "Professional folders for reports and documents. Clear cover folders with spine options. Document folder manufacturer in Hyderabad.",
        seoKeywords: ["document folders", "report folders", "clear folders", "presentation folders", "filing folders"],
        products: [
          {
            id: "doc-001",
            name: "Clear Front Report Folder",
            description: "Folder with clear cover for report visibility",
            image: "/products/clear-front-folder.jpg",
            features: ["Clear front", "Spine label", "Secure binding", "Professional look"],
            sizes: ["A4"],
            minOrder: "500 pieces",
          },
          {
            id: "doc-002",
            name: "Ring Binder Folder",
            description: "Multi-ring binder for organized documents",
            image: "/products/ring-binder-folder.jpg",
            features: ["2-3 ring options", "Spine pocket", "Durable cover", "Various capacities"],
            sizes: ["A4", "Letter"],
            minOrder: "100 pieces",
          },
        ],
      },
      {
        slug: "school-college-file-folders",
        name: "School & College File Folders",
        description: "Colorful and durable folders for students",
        longDescription:
          "Keep students organized with our school and college file folders. Available in fun colors and designs, these folders are durable enough for daily use. Perfect for organizing notes, assignments, and projects by subject or class.",
        image: "/categories/school-college-folders.jpg",
        icon: "GraduationCap",
        seoTitle: "School & College File Folders | Student Folders | MS Paper Products",
        seoDescription:
          "Colorful and durable file folders for students. School supplies and organizational folders. Student folder manufacturer in Hyderabad.",
        seoKeywords: ["school folders", "college folders", "student folders", "educational folders", "study folders"],
        products: [
          {
            id: "sch-001",
            name: "Subject Folder Set",
            description: "Color-coded folders for different subjects",
            image: "/products/subject-folder-set.jpg",
            features: ["5-color set", "Subject labels", "Durable plastic", "Affordable"],
            sizes: ["A4"],
            minOrder: "100 sets",
          },
          {
            id: "sch-002",
            name: "Project Folder",
            description: "Heavy-duty folder for school projects",
            image: "/products/project-folder.jpg",
            features: ["Expanding pockets", "Sturdy construction", "Multiple colors", "Elastic closure"],
            sizes: ["A4", "A3"],
            minOrder: "200 pieces",
          },
        ],
      },
      {
        slug: "custom-branded-file-folders",
        name: "Custom Branded File Folders",
        description: "Personalized folders with custom printing and branding",
        longDescription:
          "Create unique branded folders that represent your organization perfectly. From logo placement to color schemes, every aspect can be customized. Perfect for corporate identity, promotional materials, and special events. Our printing capabilities ensure your brand stands out.",
        image: "/categories/custom-branded-folders.jpg",
        icon: "Palette",
        seoTitle: "Custom Branded File Folders | Personalized Folders | MS Paper Products",
        seoDescription:
          "Custom branded file folders with your logo and design. Personalized corporate folders with full customization. Custom folder manufacturer in Hyderabad.",
        seoKeywords: ["custom folders", "branded folders", "personalized folders", "logo folders", "custom printing"],
        products: [
          {
            id: "cust-001",
            name: "Full Custom Folder",
            description: "Completely customized folder design",
            image: "/products/full-custom-folder.jpg",
            features: ["Full customization", "Any design", "Multiple materials", "Various finishes"],
            sizes: ["Custom sizes"],
            minOrder: "250 pieces",
          },
        ],
      },
    ],
  },
  {
    name: "Calendars & Diaries",
    slug: "calendars-diaries",
    description: "Professional calendars and diaries for planning",
    icon: "Calendar",
    subcategories: [
      {
        slug: "table-calendars",
        name: "Table Calendars",
        description: "Desk calendars for easy date reference and planning",
        longDescription:
          "Keep important dates visible with our table calendars. Designed to stand on desks and counters, these calendars provide easy date reference while showcasing your brand year-round. Available in various sizes, orientations, and designs to match your office décor.",
        image: "/categories/table-calendars.jpg",
        icon: "Calendar",
        seoTitle: "Table Calendars | Desk Calendars | MS Paper Products Hyderabad",
        seoDescription:
          "Custom table calendars for desks and counters. Branded desk calendars with company logo. Table calendar manufacturer in Hyderabad.",
        seoKeywords: ["table calendars", "desk calendars", "office calendars", "branded calendars", "custom calendars"],
        products: [
          {
            id: "tcal-001",
            name: "Tent Style Table Calendar",
            description: "Classic tent-shaped desk calendar",
            image: "/products/tent-table-calendar.jpg",
            features: ["12 months", "Tent stand", "Custom images", "Brand space"],
            sizes: ["Standard", "Large"],
            minOrder: "100 pieces",
          },
          {
            id: "tcal-002",
            name: "Spiral Table Calendar",
            description: "Flip calendar with spiral binding",
            image: "/products/spiral-table-calendar.jpg",
            features: ["Spiral binding", "Easy flip", "Sturdy base", "Full color print"],
            sizes: ["5x7", "6x8"],
            minOrder: "100 pieces",
          },
        ],
      },
      {
        slug: "wall-calendars",
        name: "Wall Calendars",
        description: "Large format calendars for wall display",
        longDescription:
          "Make your brand visible all year with our wall calendars. Perfect for offices, homes, and retail spaces, these calendars combine functionality with attractive designs. Available in various formats including single page, flip, and poster styles.",
        image: "/categories/wall-calendars.jpg",
        icon: "Calendar",
        seoTitle: "Wall Calendars | Custom Wall Calendars | MS Paper Products",
        seoDescription:
          "Custom wall calendars for offices and homes. Large format calendars with brand visibility. Wall calendar manufacturer in Hyderabad.",
        seoKeywords: [
          "wall calendars",
          "large calendars",
          "office calendars",
          "custom wall calendars",
          "promotional calendars",
        ],
        products: [
          {
            id: "wcal-001",
            name: "Single Sheet Wall Calendar",
            description: "One page poster-style wall calendar",
            image: "/products/single-sheet-wall-calendar.jpg",
            features: ["Single page", "Large format", "Full color", "High visibility"],
            sizes: ["A2", "A1"],
            minOrder: "100 pieces",
          },
          {
            id: "wcal-002",
            name: "Flip Wall Calendar",
            description: "Monthly flip wall calendar",
            image: "/products/flip-wall-calendar.jpg",
            features: ["12 pages", "Monthly flip", "Hanger included", "Custom designs"],
            sizes: ["A3", "A2"],
            minOrder: "100 pieces",
          },
        ],
      },
      {
        slug: "corporate-calendars",
        name: "Corporate Calendars",
        description: "Branded calendars for corporate gifting",
        longDescription:
          "Strengthen your brand presence with our corporate calendars. Designed specifically for business gifting and promotional purposes, these calendars feature professional designs with prominent branding. Perfect for year-end gifts to clients, employees, and partners.",
        image: "/categories/corporate-calendars.jpg",
        icon: "Briefcase",
        seoTitle: "Corporate Calendars | Business Calendars | MS Paper Products",
        seoDescription:
          "Branded corporate calendars for business gifting. Professional calendars with company branding. Corporate calendar manufacturer in Hyderabad.",
        seoKeywords: [
          "corporate calendars",
          "business calendars",
          "branded calendars",
          "promotional calendars",
          "gift calendars",
        ],
        products: [
          {
            id: "ccal-001",
            name: "Executive Desk Calendar",
            description: "Premium desk calendar for executives",
            image: "/products/executive-desk-calendar.jpg",
            features: ["Premium finish", "Leather base", "Gold accents", "Brand embossing"],
            sizes: ["Executive size"],
            minOrder: "50 pieces",
          },
          {
            id: "ccal-002",
            name: "Corporate Wall Calendar",
            description: "Professional wall calendar with company branding",
            image: "/products/corporate-wall-calendar.jpg",
            features: ["Professional design", "Full branding", "High quality print", "Protective sleeve"],
            sizes: ["A3", "A2"],
            minOrder: "100 pieces",
          },
        ],
      },
      {
        slug: "custom-printed-calendars",
        name: "Custom Printed Calendars",
        description: "Fully customized calendars with your designs",
        longDescription:
          "Create unique calendars that reflect your brand perfectly. From custom photography to personalized date markings, every element can be tailored to your needs. Perfect for promotional campaigns, special events, and corporate identity programs.",
        image: "/categories/custom-printed-calendars.jpg",
        icon: "Palette",
        seoTitle: "Custom Printed Calendars | Personalized Calendars | MS Paper Products",
        seoDescription:
          "Fully customized calendars with your designs and photos. Personalized calendar printing services. Custom calendar manufacturer in Hyderabad.",
        seoKeywords: ["custom calendars", "personalized calendars", "photo calendars", "custom printed calendars"],
        products: [
          {
            id: "cusc-001",
            name: "Photo Calendar",
            description: "Calendar featuring your custom photographs",
            image: "/products/photo-calendar.jpg",
            features: ["Custom photos", "Full color", "Various formats", "Memories preserved"],
            sizes: ["Table", "Wall"],
            minOrder: "50 pieces",
          },
        ],
      },
      {
        slug: "diaries-planners",
        name: "Diaries & Planners",
        description: "Professional diaries and planners for organization",
        longDescription:
          "Stay organized with our premium diaries and planners. Available in dated and undated formats, with various layouts to suit different planning styles. From executive leather-bound diaries to practical daily planners, we have options for every professional need.",
        image: "/categories/diaries-planners.jpg",
        icon: "BookOpen",
        seoTitle: "Diaries & Planners | Professional Notebooks | MS Paper Products",
        seoDescription:
          "Premium diaries and planners for professionals. Dated and undated options with custom branding. Diary manufacturer in Hyderabad.",
        seoKeywords: ["diaries", "planners", "notebooks", "dated diaries", "corporate diaries"],
        products: [
          {
            id: "diary-001",
            name: "Executive Leather Diary",
            description: "Premium leather-bound executive diary",
            image: "/products/executive-leather-diary.jpg",
            features: ["Genuine leather", "Gold edges", "Ribbon marker", "Dated pages"],
            sizes: ["A5", "A4"],
            minOrder: "50 pieces",
          },
          {
            id: "diary-002",
            name: "Daily Planner",
            description: "Practical daily planner for busy professionals",
            image: "/products/daily-planner.jpg",
            features: ["Day per page", "Time slots", "Notes section", "Pocket included"],
            sizes: ["A5"],
            minOrder: "100 pieces",
          },
          {
            id: "diary-003",
            name: "Weekly Planner",
            description: "Week-view planner for efficient scheduling",
            image: "/products/weekly-planner.jpg",
            features: ["Week per spread", "Goal setting", "Review pages", "Spiral bound"],
            sizes: ["A5", "B5"],
            minOrder: "100 pieces",
          },
        ],
      },
      {
        slug: "corporate-diaries",
        name: "Corporate Diaries",
        description: "Branded diaries for corporate gifting",
        longDescription:
          "Make a lasting impression with our corporate diaries. Customized with your company logo, colors, and messaging, these diaries serve as year-long brand ambassadors. Perfect for employee gifts, client appreciation, and corporate events.",
        image: "/categories/corporate-diaries.jpg",
        icon: "Briefcase",
        seoTitle: "Corporate Diaries | Branded Business Diaries | MS Paper Products",
        seoDescription:
          "Branded corporate diaries for business gifting. Custom logo diaries with premium quality. Corporate diary manufacturer in Hyderabad.",
        seoKeywords: ["corporate diaries", "branded diaries", "business diaries", "logo diaries", "gift diaries"],
        products: [
          {
            id: "cdiary-001",
            name: "Premium Corporate Diary",
            description: "High-end branded diary for executives",
            image: "/products/premium-corporate-diary.jpg",
            features: ["Custom cover", "Embossed logo", "Premium paper", "Gift box"],
            sizes: ["A5"],
            minOrder: "50 pieces",
          },
          {
            id: "cdiary-002",
            name: "Budget Corporate Diary",
            description: "Cost-effective branded diary for large orders",
            image: "/products/budget-corporate-diary.jpg",
            features: ["Printed cover", "Good quality paper", "Ribbon marker", "Affordable"],
            sizes: ["A5", "B5"],
            minOrder: "200 pieces",
          },
        ],
      },
      {
        slug: "promotional-diaries",
        name: "Promotional Diaries",
        description: "Diaries for marketing and promotional campaigns",
        longDescription:
          "Boost your brand visibility with our promotional diaries. Designed for high-volume distribution at events, trade shows, and marketing campaigns, these diaries offer excellent value while maintaining quality. Customize with your brand message for maximum impact.",
        image: "/categories/promotional-diaries.jpg",
        icon: "Megaphone",
        seoTitle: "Promotional Diaries | Marketing Diaries | MS Paper Products",
        seoDescription:
          "Promotional diaries for marketing campaigns. High-volume branded diaries with custom printing. Promotional diary manufacturer in Hyderabad.",
        seoKeywords: [
          "promotional diaries",
          "marketing diaries",
          "giveaway diaries",
          "event diaries",
          "branded notebooks",
        ],
        products: [
          {
            id: "pdiary-001",
            name: "Event Giveaway Diary",
            description: "Compact diary for promotional distribution",
            image: "/products/event-giveaway-diary.jpg",
            features: ["Compact size", "Full color cover", "Affordable", "High volume"],
            sizes: ["Pocket size", "A6"],
            minOrder: "500 pieces",
          },
        ],
      },
    ],
  },
  {
    name: "Eco-Friendly Solutions",
    slug: "eco-friendly-solutions",
    description: "Sustainable and environmentally responsible packaging",
    icon: "Leaf",
    subcategories: [
      {
        slug: "recyclable-paper-packaging",
        name: "Recyclable Paper Packaging",
        description: "100% recyclable packaging solutions",
        longDescription:
          "Reduce your environmental impact with our recyclable paper packaging. Made from materials that can be fully recycled at the end of their life cycle, these products help close the loop on packaging waste. Available across all our product categories.",
        image: "/categories/recyclable-packaging.jpg",
        icon: "Recycle",
        seoTitle: "Recyclable Paper Packaging | Eco-Friendly Solutions | MS Paper Products",
        seoDescription:
          "100% recyclable paper packaging solutions. Environmentally responsible packaging. Recyclable packaging manufacturer in Hyderabad.",
        seoKeywords: ["recyclable packaging", "eco-friendly packaging", "sustainable packaging", "green packaging"],
        products: [
          {
            id: "rec-001",
            name: "Recyclable Shopping Bag",
            description: "100% recyclable paper shopping bag",
            image: "/products/recyclable-shopping-bag.jpg",
            features: ["100% recyclable", "No plastic", "Strong construction", "Eco-certified"],
            sizes: ["All sizes"],
            minOrder: "500 pieces",
          },
        ],
      },
      {
        slug: "sustainable-paper-products",
        name: "Sustainable Paper Products",
        description: "Products made from sustainably sourced materials",
        longDescription:
          "Our sustainable paper products come from responsibly managed forests and sustainable sources. FSC-certified options ensure your packaging choices support healthy forests and communities. Make a positive environmental statement with every purchase.",
        image: "/categories/sustainable-products.jpg",
        icon: "Leaf",
        seoTitle: "Sustainable Paper Products | FSC Certified | MS Paper Products",
        seoDescription:
          "Sustainable paper products from responsibly managed sources. FSC certified packaging options. Sustainable packaging manufacturer in Hyderabad.",
        seoKeywords: ["sustainable packaging", "FSC certified", "responsible sourcing", "eco-friendly products"],
        products: [
          {
            id: "sus-001",
            name: "FSC Certified Paper Bag",
            description: "Paper bag from certified sustainable forests",
            image: "/products/fsc-certified-bag.jpg",
            features: ["FSC certified", "Chain of custody", "Sustainable source", "Quality assured"],
            sizes: ["All sizes"],
            minOrder: "500 pieces",
          },
        ],
      },
      {
        slug: "eco-friendly-bags-boxes",
        name: "Eco-Friendly Bags & Boxes",
        description: "Complete range of environmentally friendly packaging",
        longDescription:
          "Explore our complete range of eco-friendly bags and boxes. From biodegradable materials to recycled content products, we offer sustainable alternatives across our entire product line. Help protect the planet while meeting your packaging needs.",
        image: "/categories/eco-friendly-bags-boxes.jpg",
        icon: "TreeDeciduous",
        seoTitle: "Eco-Friendly Bags & Boxes | Green Packaging | MS Paper Products",
        seoDescription:
          "Complete range of eco-friendly bags and boxes. Biodegradable and recycled content packaging. Green packaging manufacturer in Hyderabad.",
        seoKeywords: ["eco-friendly bags", "eco-friendly boxes", "green packaging", "biodegradable packaging"],
        products: [
          {
            id: "eco-001",
            name: "Biodegradable Paper Bag",
            description: "Naturally biodegradable paper bag",
            image: "/products/biodegradable-bag.jpg",
            features: ["Biodegradable", "Compostable", "Natural materials", "Earth friendly"],
            sizes: ["All sizes"],
            minOrder: "500 pieces",
          },
          {
            id: "eco-002",
            name: "Recycled Content Box",
            description: "Box made from recycled paper materials",
            image: "/products/recycled-content-box.jpg",
            features: ["Recycled content", "Post-consumer waste", "Sturdy", "Eco-certified"],
            sizes: ["Various sizes"],
            minOrder: "200 pieces",
          },
        ],
      },
    ],
  },
]

// Flatten all categories for easy access
export const categories: Category[] = mainCategories.flatMap((main) => main.subcategories)

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug)
}

export function getAllCategories(): Category[] {
  return categories
}

export function getMainCategories(): MainCategory[] {
  return mainCategories
}

export function getCategoriesByMainCategory(mainSlug: string): Category[] {
  const mainCategory = mainCategories.find((m) => m.slug === mainSlug)
  return mainCategory?.subcategories || []
}
