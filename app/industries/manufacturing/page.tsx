import type { Metadata } from "next"
import IndustrySolutionPage from "@/components/industry-solution-page"
import { getIndustrySolution } from "@/lib/industry-solutions"

export const metadata: Metadata = {
  title: "Manufacturing Packaging & Printing Solutions in Hyderabad",
  description: "Custom cartons, labels, manuals, industrial packaging, offset printing, finishing, and PAN India dispatch support for manufacturers.",
  alternates: { canonical: "/industries/manufacturing" },
}

export default function ManufacturingIndustryPage() {
  const solution = getIndustrySolution("manufacturing-industrial")!
  return <IndustrySolutionPage solution={solution} />
}
