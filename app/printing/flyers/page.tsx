import type { Metadata } from "next"
import { Layers } from "lucide-react"
import PrintingServicePage, { type PrintingServiceData } from "@/components/printing-service-page"
import { business } from "@/lib/business-info"

export const metadata: Metadata = {
  title: "Flyer Printing in Hyderabad | MS Paper Products",
  description: "Flyer printing services in Hyderabad for promotions, events and business marketing. A4, A5, A6 and custom sizes with fast commercial print options.",
  keywords: ["flyer printing", "leaflet printing", "promotional flyer printing", "event flyer printing", "A5 flyer printing"],
  openGraph: {
    title: "Flyer Printing Hyderabad | MS Paper Products",
    description: "Fast and affordable flyer and leaflet printing in Hyderabad for promotions and events.",
    url: "https://mspaperproducts.com/printing/flyers",
    images: [{ url: business.socialImage, width: 751, height: 751, alt: "MS Paper Products – Flyer Printing" }],
  },
  alternates: { canonical: "https://mspaperproducts.com/printing/flyers" },
}

const data: PrintingServiceData = {
  slug: "flyers",
  title: "Flyer Printing",
  tagline: "Eye-catching single-page flyers and leaflets printed fast with vivid colour for every promotional campaign.",
  description: "From local restaurant promotions to city-wide event campaigns, our flyer printing service gives your business a visible presence. We print on high-quality paper with crisp CMYK colour reproduction using our offset and digital presses. All orders go through a quality check before packing and dispatch from our Hyderabad facility.",
  icon: Layers,
  heroColor: "bg-primary",
  benefits: [
    "A4, A5, A6, DL and custom sizes",
    "Single and double-sided printing",
    "Fast turnaround from 1 working day",
    "Vivid CMYK colour accuracy",
    "Gloss or matt finish options",
    "Low minimum orders (from 250 copies)",
    "Bulk pricing for 5,000+ copies",
    "Doorstep delivery across Hyderabad",
  ],
  useCases: [
    { title: "Restaurants & Food Businesses", detail: "Menu flyers, opening offer leaflets and home delivery promotional inserts." },
    { title: "Events & Entertainment", detail: "Concert, festival, corporate event and community programme flyers." },
    { title: "Retail & E-commerce", detail: "Sale and promotional flyers for in-store distribution and packaging inserts." },
    { title: "Education & Coaching", detail: "Admissions leaflets, course promotion flyers and open-day handouts." },
    { title: "Real Estate", detail: "Property launch flyers and location maps for residential and commercial projects." },
    { title: "Healthcare & Pharma", detail: "Awareness campaign leaflets, clinic promotion flyers and health fair handouts." },
  ],
  specs: [
    { label: "Sizes", value: "A4, A5, A6, DL, Custom" },
    { label: "Paper Weight", value: "90 gsm – 250 gsm" },
    { label: "Colour", value: "Full Colour CMYK" },
    { label: "Sides", value: "Single or Double-sided" },
    { label: "Finish", value: "Gloss or Matt lamination" },
    { label: "Minimum Order", value: "250 copies" },
    { label: "Turnaround", value: "1–3 working days" },
    { label: "Delivery", value: "Hyderabad + PAN India" },
  ],
  faqs: [
    { q: "What is the fastest turnaround for flyers?", a: "For digital print runs up to 500 copies, we can often complete orders within 1 working day after artwork approval. Larger offset runs take 2–3 days." },
    { q: "What is the minimum quantity?", a: "We print from 250 copies. Quantities below this are better suited to digital printing, and we are happy to quote on any quantity." },
    { q: "Should I choose gloss or matt finish?", a: "Gloss finish is vibrant and eye-catching, ideal for photography-heavy designs. Matt provides a premium understated look that is easier to write on." },
    { q: "Can I get flyers printed same day?", a: "In some cases yes, depending on order size and press availability. Contact us directly for urgent requirements." },
    { q: "Do you deliver flyers to multiple locations?", a: "Yes, we can split shipments across multiple addresses. Please inform us at the time of order." },
  ],
  schema: {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Flyer Printing Hyderabad",
    provider: { "@type": "LocalBusiness", name: business.name, telephone: business.phoneDisplay, address: { "@type": "PostalAddress", addressLocality: business.city, addressRegion: business.region, addressCountry: business.country } },
    serviceType: "Commercial Printing",
    areaServed: ["Hyderabad", "Telangana", "India"],
    description: "Fast and affordable flyer and leaflet printing in Hyderabad with bulk pricing and quick turnaround.",
    url: "https://mspaperproducts.com/printing/flyers",
  },
}

export default function Page() {
  return <PrintingServicePage data={data} />
}
