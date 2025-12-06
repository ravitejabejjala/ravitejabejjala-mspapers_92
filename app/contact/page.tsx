import type { Metadata } from "next"
import { ContactForm } from "@/components/contact-form"
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us - MS Paper Products | Get Custom Quote for Paper Bags & Packaging",
  description:
    "Contact MS Paper Products for custom quotes on paper bags, kraft bags, pharma packaging. Located in Balkampet, Hyderabad. Call +91-81433-30028 or email info@mspaperproducts.com. Fast response, bulk orders welcome.",
  keywords: [
    "contact paper bag manufacturer",
    "paper bags quote Hyderabad",
    "bulk order paper bags",
    "custom packaging inquiry",
    "Balkampet packaging manufacturer",
  ],
  openGraph: {
    title: "Contact MS Paper Products - Get Custom Quote",
    description:
      "Contact us for custom quotes on eco-friendly paper bags and packaging. Located in Hyderabad. Fast response guaranteed.",
    url: "https://mspaperproducts.com/contact",
  },
  alternates: {
    canonical: "https://mspaperproducts.com/contact",
  },
}

export default function ContactPage() {
  return (
    <main>
      <section className="relative h-[300px] bg-gradient-to-r from-[#132635] to-[#1a3645] flex items-center">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h1 className="text-5xl lg:text-6xl font-serif font-bold text-white mb-4">Contact Us</h1>
          <p className="text-xl text-white/90">Let's discuss your packaging needs</p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-serif font-bold text-[#132635] mb-8">Get in Touch</h2>
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="bg-[#f19e1f]/10 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-[#f19e1f]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#132635] mb-1">Phone</h3>
                    <a href="tel:+918143330028" className="text-gray-600 hover:text-[#f19e1f]">
                      +91 81433 30028
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#f19e1f]/10 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-[#f19e1f]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#132635] mb-1">Email</h3>
                    <a href="mailto:info@mspaperproducts.com" className="text-gray-600 hover:text-[#f19e1f]">
                      info@mspaperproducts.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#f19e1f]/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-[#f19e1f]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#132635] mb-1">Location</h3>
                    <p className="text-gray-600">
                      7-1-307/14/G/119, DNM Colony,
                      <br />
                      Tulasi Nagar, Balkampet,
                      <br />
                      Hyderabad, Telangana 500018
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#f19e1f]/10 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-[#f19e1f]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#132635] mb-1">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Saturday: 9:00 AM - 6:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#f19e1f]/10 p-3 rounded-lg">
                    <MessageSquare className="w-6 h-6 text-[#f19e1f]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#132635] mb-1">WhatsApp</h3>
                    <a
                      href="https://wa.me/918143330028?text=Hello%2C%20I%27m%20interested%20in%20MS%20Paper%20Products"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-[#f19e1f]"
                    >
                      Chat with us on WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gray-100 rounded-2xl p-6">
                <h3 className="font-semibold text-[#132635] mb-4">Find Us</h3>
                <div className="rounded-lg overflow-hidden h-64">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.0889469945807!2d78.4226!3d17.4605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI3JzM3LjgiTiA3OMKwMjUnMjEuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="MS Paper Products Location"
                  />
                </div>
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
