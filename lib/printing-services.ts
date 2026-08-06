import { BookOpen, FileText, Layers, Monitor, Printer, Sparkles } from "lucide-react"

export const printingServices = [
  {
    label: "Booklet & Catalogue Printing",
    href: "/printing/booklets-catalogues",
    icon: BookOpen,
    description: "Multi-page booklets, product catalogues and company profiles",
  },
  {
    label: "Brochure Printing",
    href: "/printing/brochures",
    icon: FileText,
    description: "Tri-fold, bi-fold and custom brochures for B2B marketing",
  },
  {
    label: "Flyer Printing",
    href: "/printing/flyers",
    icon: Layers,
    description: "Single-page flyers and leaflets for promotions and events",
  },
  {
    label: "Offset Printing",
    href: "/printing/offset",
    icon: Printer,
    description: "High-volume lithographic offset printing with rich colour accuracy",
  },
  {
    label: "Digital Printing",
    href: "/printing/digital",
    icon: Monitor,
    description: "Short-run digital printing with fast turnaround",
  },
  {
    label: "Custom Printing Solutions",
    href: "/printing/custom",
    icon: Sparkles,
    description: "Bespoke print solutions tailored to your brand requirements",
  },
]
