import type { Metadata } from "next"
import { Printer } from "lucide-react"
import PrintingServicePage, { type PrintingServiceData } from "@/components/printing-service-page"
import { business } from "@/lib/business-info"

export const metadata: Metadata = {
  title: "Offset Printing Services Hyderabad | MS Paper Products",
  description: "Industrial-grade offset printing in Hyderabad. High-volume CMYK and Pantone printing for packaging, brochures, labels and catalogues. Lithrone press technology for consistent quality.",
  keywords: ["offset printing Hyderabad", "lithographic printing Hyderabad", "commercial offset printing", "bulk printing Hyderabad", "Pantone offset printing", "Lithrone press Hyderabad"],
  openGraph: {
    title: "Offset Printing Services Hyderabad | MS Paper Products",
    description: "Industrial-grade offset printing in Hyderabad using Lithrone press technology for high-volume bulk orders.",
    url: "https://mspaperproducts.com/printing/offset",
    images: [{ url: business.socialImage, width: 751, height: 751, alt: "MS Paper Products – Offset Printing" }],
  },
  alternates: { canonical: "https://mspaperproducts.com/printing/offset" },
}

const data: PrintingServiceData = {
  slug: "offset",
  title: "Offset Printing",
  tagline: "High-volume industrial offset printing with Lithrone press technology for consistent, colour-accurate results at scale.",
  description: "Our Lithrone offset presses deliver exceptional print quality across large production runs. Offset printing is the preferred method for high-volume packaging, catalogues, labels and commercial print work where colour consistency and sharpness are critical. We print CMYK process colour and Pantone spot colours, with full pre-press proofing and quality inspection at every stage.",
  icon: Printer,
  heroColor: "bg-primary",
  benefits: [
    "Lithrone offset press technology",
    "CMYK and Pantone spot colour printing",
    "Superior colour consistency across large runs",
    "Fine detail reproduction at 175 lpi and above",
    "Cost-effective at 1,000+ copy volumes",
    "Full pre-press proofing and ICC colour management",
    "Foiling, UV, varnish and embossing finishing",
    "All substrates: paper, board, kraft and specialty stocks",
  ],
  useCases: [
    { title: "Packaging Manufacturers", detail: "Box blanks, carton shells and packaging sheets requiring precise colour registration and bulk volume." },
    { title: "FMCG & Retail Brands", detail: "High-volume product labels, promotional packaging and retail display materials." },
    { title: "Publishing & Media", detail: "Magazines, catalogues and corporate publications requiring consistent print quality across thousands of copies." },
    { title: "Pharmaceutical Industry", detail: "Regulated packaging, carton printing and label runs with documented colour standards." },
    { title: "Corporate Marketing", detail: "Large-volume campaign materials where per-unit cost must be minimised without quality compromise." },
    { title: "Exporters & Manufacturers", detail: "Consistent branded print across product lines for domestic and international markets." },
  ],
  specs: [
    { label: "Press Technology", value: "Lithrone Offset" },
    { label: "Colour Systems", value: "CMYK + Pantone" },
    { label: "Max Sheet Size", value: "72 cm × 102 cm" },
    { label: "Resolution", value: "175 lpi and above" },
    { label: "Substrates", value: "Paper, Board, Kraft, Specialty" },
    { label: "Minimum Run", value: "500 sheets" },
    { label: "Finishing", value: "Lamination, Foiling, UV, Varnish" },
    { label: "Turnaround", value: "4–8 working days" },
  ],
  faqs: [
    { q: "When is offset printing better than digital?", a: "Offset is more economical for runs of 1,000 copies or more, and delivers superior colour accuracy and substrate flexibility compared to digital printing." },
    { q: "Can you match our Pantone brand colours?", a: "Yes. We hold a comprehensive Pantone library and perform colour proofs before production to confirm brand colour accuracy." },
    { q: "What is the maximum sheet size you can print?", a: "Our presses handle sheets up to 72 cm × 102 cm. Larger formats can be accommodated with ganging or custom plate arrangements." },
    { q: "Do you offer foiling and special finishes?", a: "Yes. We provide hot foil stamping, cold foil, spot UV, gloss and matt varnish, and embossing/debossing as post-press finishing options." },
    { q: "What substrates can you print on?", a: "We print on coated and uncoated paper, solid board, kraft board, duplex board, art paper, and a range of specialty stocks." },
  ],
  schema: {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Offset Printing Services Hyderabad",
    provider: { "@type": "LocalBusiness", name: business.name, telephone: business.phoneDisplay, address: { "@type": "PostalAddress", addressLocality: business.city, addressRegion: business.region, addressCountry: business.country } },
    serviceType: "Offset Printing",
    areaServed: ["Hyderabad", "Telangana", "India"],
    description: "Industrial-grade Lithrone offset printing in Hyderabad for high-volume packaging, catalogues and commercial print.",
    url: "https://mspaperproducts.com/printing/offset",
  },
}

export default function Page() {
  return <PrintingServicePage data={data} />
}
