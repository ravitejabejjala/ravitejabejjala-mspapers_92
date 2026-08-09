import type { Metadata } from "next"
import { Monitor } from "lucide-react"
import PrintingServicePage, { type PrintingServiceData } from "@/components/printing-service-page"
import { business } from "@/lib/business-info"

export const metadata: Metadata = {
  title: "Digital Printing Services in Hyderabad | MS Paper Products",
  description: "Digital printing services in Hyderabad for short runs, business materials and personalised campaigns. Fast commercial printing with bulk and small-run options.",
  keywords: ["digital printing", "short run printing", "variable data printing", "personalised printing", "on demand printing"],
  openGraph: {
    title: "Digital Printing Services Hyderabad | MS Paper Products",
    description: "Fast short-run digital printing in Hyderabad with variable data capability and quick turnaround.",
    url: "https://mspaperproducts.com/printing/digital",
    images: [{ url: business.socialImage, width: 751, height: 751, alt: "MS Paper Products – Digital Printing" }],
  },
  alternates: { canonical: "https://mspaperproducts.com/printing/digital" },
}

const data: PrintingServiceData = {
  slug: "digital",
  title: "Digital Printing",
  tagline: "On-demand digital printing with fast turnaround, variable data capability and no minimum plate setup costs.",
  description: "Digital printing is the ideal solution for short runs, personalised print campaigns and rapid prototyping. With no plate setup costs, you pay only for what you print, making it cost-effective for runs as low as 50 copies. Our digital presses deliver photographic-quality colour on a wide range of paper stocks with turnaround times as fast as 24 hours.",
  icon: Monitor,
  heroColor: "bg-primary",
  benefits: [
    "No plate setup — cost-effective from 50 copies",
    "Variable data printing for personalisation",
    "Photographic quality colour reproduction",
    "Fast turnaround from 24 hours",
    "Quick proofs and short approval cycle",
    "Wide range of substrates",
    "Ideal for prototyping and mock-ups",
    "Consistent quality across the entire run",
  ],
  useCases: [
    { title: "Startups & Small Businesses", detail: "Business cards, letterheads and marketing materials in small quantities without high setup costs." },
    { title: "Event Organisers", detail: "Personalised invitations, badges, programmes and on-site print collateral with tight lead times." },
    { title: "Direct Mail Campaigns", detail: "Personalised mailers, loyalty cards and variable data postcards for targeted marketing." },
    { title: "Agencies & Designers", detail: "Client presentation proofs, sample books and prototype packaging for approval." },
    { title: "Healthcare & Pharma", detail: "Short-run informational leaflets, patient consent forms and regulatory documents." },
    { title: "Retail & Hospitality", detail: "Seasonal menus, limited-edition promotional materials and short-run product labels." },
  ],
  specs: [
    { label: "Minimum Order", value: "50 copies" },
    { label: "Colour", value: "Full Colour CMYK" },
    { label: "Max Print Size", value: "SRA3 (450 × 320 mm)" },
    { label: "Paper Weight", value: "80 gsm – 350 gsm" },
    { label: "Variable Data", value: "Yes, personalisation supported" },
    { label: "Finish", value: "Gloss or Matt lamination" },
    { label: "Turnaround", value: "24 hours – 3 working days" },
    { label: "Delivery", value: "Hyderabad + PAN India" },
  ],
  faqs: [
    { q: "What is the difference between digital and offset printing?", a: "Digital printing requires no plates, making it cost-effective for short runs. Offset is more economical at high volumes and supports a wider range of substrates and Pantone inks." },
    { q: "Can you personalise each copy with a different name or address?", a: "Yes. Our variable data printing capability allows each copy in a run to contain unique text, barcodes, QR codes or images." },
    { q: "How fast can you produce a digital print job?", a: "For straightforward jobs under 500 copies, we can often produce and dispatch within 24–48 hours of artwork approval." },
    { q: "Is digital printing suitable for packaging?", a: "Yes for prototypes and short-run packaging. For high-volume packaging production, offset printing is typically more economical." },
    { q: "What file formats do you accept?", a: "We accept print-ready PDFs, high-resolution JPEGs, and Adobe InDesign or Illustrator files. Files should include 3mm bleed." },
  ],
  schema: {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Digital Printing Services Hyderabad",
    provider: { "@type": "LocalBusiness", name: business.name, telephone: business.phoneDisplay, address: { "@type": "PostalAddress", addressLocality: business.city, addressRegion: business.region, addressCountry: business.country } },
    serviceType: "Digital Printing",
    areaServed: ["Hyderabad", "Telangana", "India"],
    description: "Fast short-run digital printing in Hyderabad with variable data capability and 24-hour turnaround.",
    url: "https://mspaperproducts.com/printing/digital",
  },
}

export default function Page() {
  return <PrintingServicePage data={data} />
}
