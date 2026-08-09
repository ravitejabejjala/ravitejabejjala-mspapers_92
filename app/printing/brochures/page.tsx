import type { Metadata } from "next"
import { FileText } from "lucide-react"
import PrintingServicePage, { type PrintingServiceData } from "@/components/printing-service-page"
import { business } from "@/lib/business-info"

export const metadata: Metadata = {
  title: "Brochure Printing in Hyderabad | MS Paper Products",
  description: "Brochure printing services in Hyderabad for corporate, business, real estate and retail marketing. Custom folds, colour printing and bulk orders available.",
  keywords: ["brochure printing", "tri-fold brochure printing", "bi-fold brochure", "marketing brochure printing", "company brochure"],
  openGraph: {
    title: "Brochure Printing Hyderabad | MS Paper Products",
    description: "Custom brochure printing in Hyderabad – tri-fold, bi-fold and z-fold for every business need.",
    url: "https://mspaperproducts.com/printing/brochures",
    images: [{ url: business.socialImage, width: 751, height: 751, alt: "MS Paper Products – Brochure Printing" }],
  },
  alternates: { canonical: "https://mspaperproducts.com/printing/brochures" },
}

const data: PrintingServiceData = {
  slug: "brochures",
  title: "Brochure Printing",
  tagline: "Compelling tri-fold, bi-fold and custom brochures that make your brand stand out at every touchpoint.",
  description: "Our brochure printing service delivers sharp, vibrant marketing materials for businesses across Hyderabad. From real estate property brochures to hospitality menus and corporate capability statements, we produce brochures that communicate your brand message clearly. Using high-quality coated stock and professional finishing options, each brochure is inspected before delivery.",
  icon: FileText,
  heroColor: "bg-primary",
  benefits: [
    "Tri-fold, bi-fold, z-fold and gate-fold options",
    "Single-sided and double-sided printing",
    "High-gloss UV coating available",
    "Premium 130–350 gsm coated stock",
    "Bulk and short-run friendly",
    "Offset and digital printing options",
    "Colour-accurate proofing before bulk print",
    "Delivered across Hyderabad and PAN India",
  ],
  useCases: [
    { title: "Real Estate", detail: "Property brochures with floor plans, amenities and project details for prospective buyers." },
    { title: "Hospitality & Hotels", detail: "Menu brochures, spa service guides and resort packages for guest information." },
    { title: "Healthcare & Clinics", detail: "Service brochures, wellness guides and treatment information for patients." },
    { title: "Corporate & Professional Services", detail: "Company capability brochures and service overviews for business development." },
    { title: "Retail & Fashion", detail: "Season lookbooks and promotional brochures for in-store and direct mail use." },
    { title: "Events & Exhibitions", detail: "Event programme brochures and exhibition handouts for trade fairs." },
  ],
  specs: [
    { label: "Fold Options", value: "Tri-fold, Bi-fold, Z-fold, Gate-fold" },
    { label: "Print Sizes", value: "A4, A5, DL, Custom" },
    { label: "Paper Weight", value: "130 gsm – 350 gsm coated" },
    { label: "Colour", value: "Full Colour CMYK" },
    { label: "Finish", value: "Gloss, Matt, Soft-touch, UV Coating" },
    { label: "Minimum Order", value: "100 copies" },
    { label: "Turnaround", value: "2–5 working days" },
    { label: "Delivery", value: "Hyderabad + PAN India" },
  ],
  faqs: [
    { q: "What fold styles do you offer for brochures?", a: "We offer tri-fold (letter fold), bi-fold (half fold), z-fold, gate-fold and roll-fold. Custom creasing is also available on request." },
    { q: "What paper quality do you recommend for brochures?", a: "For marketing brochures we recommend 150–170 gsm coated gloss or matt stock. Heavier 250–300 gsm stock gives a premium feel for luxury brands." },
    { q: "Can you print on recycled or eco-friendly paper?", a: "Yes, we stock FSC-certified and recycled paper options for brands with sustainability requirements." },
    { q: "Do you print on both sides?", a: "Yes, double-sided printing is standard for brochures. Single-sided is also available at a lower cost." },
    { q: "What file format should I submit?", a: "Print-ready PDFs with 3mm bleed, crop marks and embedded fonts are preferred. We can also work with InDesign, Illustrator or high-resolution image files." },
  ],
  schema: {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Brochure Printing Hyderabad",
    provider: { "@type": "LocalBusiness", name: business.name, telephone: business.phoneDisplay, address: { "@type": "PostalAddress", addressLocality: business.city, addressRegion: business.region, addressCountry: business.country } },
    serviceType: "Commercial Printing",
    areaServed: ["Hyderabad", "Telangana", "India"],
    description: "Custom brochure printing in Hyderabad – tri-fold, bi-fold and custom sizes with bulk pricing and PAN India delivery.",
    url: "https://mspaperproducts.com/printing/brochures",
  },
}

export default function Page() {
  return <PrintingServicePage data={data} />
}
