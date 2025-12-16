import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, ArrowLeft, Package, Phone } from "lucide-react"
import { getCategoryBySlug, categories } from "@/lib/products-data"
import type { Metadata } from "next"

interface CategoryPageProps {
  params: Promise<{ category: string }>
}

export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category.slug,
  }))
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category: categorySlug } = await params
  const category = getCategoryBySlug(categorySlug)

  if (!category) {
    return {
      title: "Category Not Found | MS Paper Products",
    }
  }

  return {
    title: category.seoTitle,
    description: category.seoDescription,
    openGraph: {
      title: category.seoTitle,
      description: category.seoDescription,
      type: "website",
    },
  }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: categorySlug } = await params
  const category = getCategoryBySlug(categorySlug)

  if (!category) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#132635] py-20 text-white md:py-28">
        <div className="container mx-auto px-4">
          <Link
            href="/products"
            className="mb-6 inline-flex items-center gap-2 text-sm text-gray-300 transition-colors hover:text-[#f19e1f]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Products
          </Link>
          <div className="max-w-3xl">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">{category.name}</h1>
            <p className="text-lg text-gray-300 md:text-xl">{category.description}</p>
          </div>
        </div>
      </section>

      {/* Category Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="relative h-[400px] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src={category.image || "/placeholder.svg?height=400&width=600&query=" + category.name}
                alt={category.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="mb-6 text-3xl font-bold text-[#132635]">About {category.name}</h2>
              <p className="mb-6 text-gray-600 leading-relaxed">{category.longDescription}</p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button asChild className="bg-[#f19e1f] text-white hover:bg-[#f19e1f]/90">
                  <Link href="/contact">Request a Quote</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-[#132635] text-[#132635] hover:bg-[#132635] hover:text-white bg-transparent"
                >
                  <a href="tel:+918143330028">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Us
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-[#132635] md:text-4xl">
            Our {category.name} Collection
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {category.products.map((product) => (
              <Card
                key={product.id}
                className="group overflow-hidden border-none shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-56 overflow-hidden bg-gray-100">
                  <div className="flex h-full items-center justify-center">
                    <Package className="h-20 w-20 text-gray-300" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="mb-2 text-xl font-bold text-[#132635]">{product.name}</h3>
                  <p className="mb-4 text-sm text-gray-600">{product.description}</p>

                  <div className="mb-4">
                    <h4 className="mb-2 text-sm font-semibold text-[#132635]">Features:</h4>
                    <ul className="grid grid-cols-2 gap-1">
                      {product.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-1 text-xs text-gray-600">
                          <Check className="h-3 w-3 text-[#f19e1f]" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {product.sizes && (
                    <div className="mb-4">
                      <h4 className="mb-1 text-sm font-semibold text-[#132635]">Available Sizes:</h4>
                      <p className="text-xs text-gray-600">{product.sizes.join(", ")}</p>
                    </div>
                  )}

                  {product.minOrder && (
                    <div className="rounded-lg bg-[#f19e1f]/10 p-3">
                      <p className="text-xs text-[#132635]">
                        <span className="font-semibold">Min. Order:</span> {product.minOrder}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Other Categories */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-[#132635]">Explore Other Categories</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {categories
              .filter((cat) => cat.slug !== category.slug)
              .slice(0, 4)
              .map((cat) => (
                <Link key={cat.slug} href={`/products/${cat.slug}`}>
                  <Card className="group h-full cursor-pointer border-none shadow-md transition-all hover:-translate-y-1 hover:shadow-lg">
                    <CardContent className="flex h-full flex-col items-center justify-center p-6 text-center">
                      <p className="font-medium text-[#132635] group-hover:text-[#f19e1f]">{cat.name}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#132635] py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">Interested in {category.name}?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300">
            Contact us today to discuss your requirements and get a customized quote for your business.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-[#f19e1f] text-white hover:bg-[#f19e1f]/90">
              <Link href="/contact">Get a Quote</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white bg-transparent text-white hover:bg-white hover:text-[#132635]"
            >
              <a href="https://wa.me/918143330028" target="_blank" rel="noopener noreferrer">
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
