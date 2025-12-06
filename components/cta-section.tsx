import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageSquare, Mail } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#132635] mb-6">
          Ready to Elevate Your Packaging?
        </h2>
        <p className="text-xl text-gray-600 mb-8">Get in touch with us for custom quotes and bulk orders</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="bg-[#f19e1f] hover:bg-[#d88a1a] text-white px-8 py-6 text-lg">
            <Link href="/contact" className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Get a Quote
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-2 border-[#132635] text-[#132635] hover:bg-[#132635] hover:text-white px-8 py-6 text-lg bg-transparent"
          >
            <a
              href="https://wa.me/918143330028?text=Hello%2C%20I%27m%20interested%20in%20MS%20Paper%20Products"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <MessageSquare className="w-5 h-5" />
              WhatsApp Us
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
