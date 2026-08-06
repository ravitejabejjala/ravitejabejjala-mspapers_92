import type { Metadata } from "next"
import { BookOpen } from "lucide-react"
import PrintingServicePage, { type PrintingServiceData } from "@/components/printing-service-page"
import { business } from "@/lib/business-info"

export const metadata: Metadata = {
  title: "Booklet & Catalogue Printing | MS Paper Products",
  description: "Professional multi-page saddle-stitch and perfect-bound booklet and catalogue printing for retail, corporate, and B2B orders.",
  keywords: ["booklet printing", "catalogue printing", "product catalogue printing", "company profile printing", "saddle stitch booklet", "perfect bound catalogue"],
  openGraph: {
    title: "Booklet & Catalogue Printing Hyderabad | MS Paper Products",
    description: "Professional booklet and product catalogue printing in Hyderabad with bulk pricing.",
    url: "https://mspaperproducts.com/printing/booklets-catalogues",
    images: [{ url: business.socialImage, width: 751, height: 751, alt: "MS Paper Products – Booklet Printing" }],
  },
  alternates: { canonical: "https://mspaperproducts.com/printing/booklets-catalogues" },
}

const data: PrintingServiceData = {
  slug: "booklets-catalogues",
  title: "Booklet & Catalogue Printing",
  tagline: "High-quality multi-page catalogues and booklets for product showcases, corporate profiles and brand storytelling.",
  description: "MS Paper Products delivers sharp, professional booklet and catalogue printing from our Hyderabad facility. Whether you need a 4-page product sheet or a 100-page full-colour product catalogue, we handle the complete process — design proofing, offset or digital printing, lamination, binding, and delivery. We serve retail chains, FMCG brands, pharmaceutical companies and corporate clients across PAN India.",
  icon: BookOpen,
  heroColor: "bg-primary",
  benefits: [
    "Saddle-stitch and perfect-bound options",
    "Full-bleed CMYK colour printing",
    "Matt, gloss and soft-touch lamination",
    "Minimum order from 100 copies",
    "Custom page counts (4 to 200+ pages)",
    "Bulk pricing for large print runs",
    "Strict quality inspection before dispatch",
    "PAN India delivery",
  ],
  useCases: [
    { title: "Retail & FMCG Brands", detail: "Product catalogues and seasonal lookbooks to distribute in stores and at trade fairs." },
    { title: "Pharmaceutical Companies", detail: "Medical reference booklets, drug information guides and doctor-facing product catalogues." },
    { title: "Corporate & B2B", detail: "Company profile booklets, annual reports and capability brochures for client pitches." },
    { title: "Education Institutions", detail: "Course catalogues, admission handbooks and academic year planners." },
    { title: "Real Estate Developers", detail: "Project catalogues with floor plans, imagery and pricing sheets for prospective buyers." },
    { title: "E-commerce Sellers", detail: "Printed product catalogues for wholesale buyers, exhibitions and direct mail campaigns." },
  ],
  specs: [
    { label: "Print Sizes", value: "A4, A5, A6, DL, Custom" },
    { label: "Minimum Order", value: "100 copies" },
    { label: "Binding", value: "Saddle-stitch, Perfect-bound, Spiral" },
    { label: "Paper Weight", value: "100 gsm – 350 gsm" },
    { label: "Colour", value: "Full Colour CMYK" },
    { label: "Finish", value: "Matt / Gloss / Soft-touch lamination" },
    { label: "Turnaround", value: "3–7 working days" },
    { label: "Delivery", value: "Hyderabad + PAN India" },
  ],
  faqs: [
    { q: "What is the minimum quantity for booklet printing?", a: "We accept orders from 100 copies upward. Larger quantities receive progressively lower per-unit pricing." },
    { q: "Can I supply my own artwork?", a: "Yes. We accept print-ready PDFs. Our team will review files for bleed, resolution, and colour profile before going to press." },
    { q: "Do you offer design services?", a: "Yes, our in-house design team can create or format your catalogue layout for an additional fee." },
    { q: "What binding options are available?", a: "We offer saddle-stitch (staple binding) for up to 64 pages, perfect-binding for thicker catalogues, and spiral binding for reference guides." },
    { q: "How long does printing take?", a: "Standard turnaround is 3–7 working days after artwork approval. Rush orders can be discussed on inquiry." },
  ],
  schema: {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Booklet & Catalogue Printing Hyderabad",
    provider: { "@type": "LocalBusiness", name: business.name, telephone: business.phoneDisplay, address: { "@type": "PostalAddress", addressLocality: business.city, addressRegion: business.region, addressCountry: business.country } },
    serviceType: "Commercial Printing",
    areaServed: ["Hyderabad", "Telangana", "India"],
    description: "Professional booklet and catalogue printing services in Hyderabad with bulk pricing and PAN India delivery.",
    url: "https://mspaperproducts.com/printing/booklets-catalogues",
  },
}

export default function Page() {
  return <PrintingServicePage data={data} />
}
