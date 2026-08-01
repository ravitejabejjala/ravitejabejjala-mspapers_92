import type { Metadata } from "next"
import { Sparkles } from "lucide-react"
import PrintingServicePage, { type PrintingServiceData } from "@/components/printing-service-page"
import { business } from "@/lib/business-info"

export const metadata: Metadata = {
  title: "Custom Printing Solutions Hyderabad | MS Paper Products",
  description: "Bespoke custom printing solutions in Hyderabad. Foiling, embossing, spot UV, die-cutting and specialty print finishes. Tailored to your brand requirements with bulk order capability.",
  keywords: ["custom printing Hyderabad", "specialty printing Hyderabad", "foil printing Hyderabad", "embossing printing", "die cut printing Hyderabad", "bespoke print solutions"],
  openGraph: {
    title: "Custom Printing Solutions Hyderabad | MS Paper Products",
    description: "Bespoke custom printing with foiling, embossing, spot UV and die-cutting in Hyderabad.",
    url: "https://mspaperproducts.com/printing/custom",
    images: [{ url: business.socialImage, width: 751, height: 751, alt: "MS Paper Products – Custom Printing" }],
  },
  alternates: { canonical: "https://mspaperproducts.com/printing/custom" },
}

const data: PrintingServiceData = {
  slug: "custom",
  title: "Custom Printing Solutions",
  tagline: "Specialty print finishes and bespoke solutions — foiling, embossing, spot UV, die-cutting and more — crafted for brands that demand distinction.",
  description: "When standard printing is not enough, our custom printing solutions deliver the tactile and visual impact your brand needs. From hot foil stamping and embossing to spot UV, die-cut shapes and multi-layer print effects, our Hyderabad facility handles complex specifications for luxury packaging, premium marketing materials and high-end corporate collateral. Each job is reviewed by our pre-press team to ensure the finish matches your intent.",
  icon: Sparkles,
  heroColor: "bg-primary",
  benefits: [
    "Hot and cold foil stamping (gold, silver, custom)",
    "Embossing and debossing for tactile appeal",
    "Spot UV coating on any element",
    "Custom die-cutting to any shape",
    "Multi-layer and textured print effects",
    "Soft-touch and velvet lamination",
    "Silk screen printing on non-standard substrates",
    "Full pre-press consultation included",
  ],
  useCases: [
    { title: "Luxury Packaging Brands", detail: "Premium gift boxes, retail bags and packaging with foiling and embossing for high-end products." },
    { title: "Corporate Identity", detail: "Embossed business cards, foiled letterheads and branded stationery for premium brand positioning." },
    { title: "Hospitality & Hotels", detail: "Foiled restaurant menus, room directories and event programmes that reflect brand luxury." },
    { title: "Jewellery & Fashion", detail: "Die-cut branded tags, foiled packaging and specialty tissue wrapping for retail products." },
    { title: "Financial & Legal Firms", detail: "Embossed certificates, branded folders and presentation materials that convey credibility." },
    { title: "Special Occasions", detail: "Wedding stationery, invitation suites and event collateral with premium print finishing." },
  ],
  specs: [
    { label: "Foiling", value: "Hot foil, Cold foil – Gold, Silver, Custom" },
    { label: "Embossing", value: "Blind emboss, Foil emboss, Deboss" },
    { label: "UV Coating", value: "Spot UV, Flood UV, 3D UV" },
    { label: "Die-cutting", value: "Custom shapes and kiss-cut options" },
    { label: "Lamination", value: "Soft-touch, Velvet, Holographic" },
    { label: "Substrates", value: "Paper, Board, Kraft, Specialty stocks" },
    { label: "Minimum Order", value: "Discussed on enquiry" },
    { label: "Turnaround", value: "7–14 working days" },
  ],
  faqs: [
    { q: "Do you provide a proof before the full custom print run?", a: "Yes, for all custom print jobs we produce a physical press proof or digital proof for client sign-off before proceeding to bulk production." },
    { q: "What is the cost of custom printing vs standard printing?", a: "Custom print jobs involve additional tooling, setup and materials. Costs vary by finish type and quantity. We provide detailed quotations on enquiry." },
    { q: "Can you combine multiple finishes on one piece?", a: "Yes. We regularly combine foiling with embossing, spot UV with die-cutting, and other finish combinations. Our pre-press team will advise on feasibility." },
    { q: "Do you make custom die-cut shapes?", a: "Yes. We create custom steel-rule die tools for any shape. Die costs are charged once and the tool is retained for repeat orders." },
    { q: "How long does a custom print job take?", a: "Custom jobs typically take 7–14 working days including tooling, proofing and production. Rush timelines can be discussed for urgent requirements." },
  ],
  schema: {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Custom Printing Solutions Hyderabad",
    provider: { "@type": "LocalBusiness", name: business.name, telephone: business.phoneDisplay, address: { "@type": "PostalAddress", addressLocality: business.city, addressRegion: business.region, addressCountry: business.country } },
    serviceType: "Specialty Commercial Printing",
    areaServed: ["Hyderabad", "Telangana", "India"],
    description: "Bespoke custom printing with foiling, embossing, spot UV, die-cutting and specialty finishes in Hyderabad.",
    url: "https://mspaperproducts.com/printing/custom",
  },
}

export default function Page() {
  return <PrintingServicePage data={data} />
}
