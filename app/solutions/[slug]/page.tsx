import type { Metadata } from "next"
import { notFound } from "next/navigation"
import IndustrySolutionPage from "@/components/industry-solution-page"
import { getIndustrySolution, industrySolutions } from "@/lib/industry-solutions"

export const dynamicParams = false

export function generateStaticParams() {
  return industrySolutions.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const solution = getIndustrySolution(slug)
  if (!solution) return {}
  return {
    title: `${solution.title} in Hyderabad`,
    description: `${solution.description} Custom manufacturing, bulk orders, quality inspection, and PAN India delivery support.`,
    alternates: { canonical: `/solutions/${solution.slug}` },
    openGraph: { title: solution.title, description: solution.description, url: `/solutions/${solution.slug}`, images: ["/brand/ms-paper-products-social.png"] },
  }
}

export default async function SolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const solution = getIndustrySolution(slug)
  if (!solution) notFound()
  return <IndustrySolutionPage solution={solution} />
}
