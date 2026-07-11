import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us | MS Paper Products - Get in Touch',
  description: 'Contact MS Paper Products for inquiries, quotes, and support. Available via phone, email, WhatsApp, and contact form.',
  keywords: ['contact', 'support', 'inquiries', 'quotation', 'customer service'],
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#132635] to-[#1a3a52] py-16 text-white md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Get in Touch</h1>
          <p className="text-xl text-gray-300">
            We&apos;re here to help with your packaging and printing needs. Reach out to us today!
          </p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-12">
            {[
              {
                icon: Phone,
                title: 'Phone',
                content: '+91 81433 30028',
                subtext: 'Available 9AM-6PM IST',
              },
              {
                icon: Mail,
                title: 'Email',
                content: 'info@mspaperproducts.com',
                subtext: 'Response within 24 hours',
              },
              {
                icon: MessageSquare,
                title: 'WhatsApp',
                content: '+91 81433 30028',
                subtext: 'Quick messaging support',
              },
              {
                icon: MapPin,
                title: 'Location',
                content: 'MS Paper Products',
                subtext: 'Operating across India',
              },
            ].map((item, idx) => {
              const IconComponent = item.icon
              return (
                <Card key={idx} className="border-t-4 border-t-[#f19e1f] text-center">
                  <CardContent className="p-6">
                    <IconComponent className="mx-auto mb-4 h-8 w-8 text-[#f19e1f]" />
                    <h3 className="mb-2 font-bold text-[#132635]">{item.title}</h3>
                    <p className="mb-1 font-semibold text-gray-800">{item.content}</p>
                    <p className="text-sm text-gray-600">{item.subtext}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="mb-8 text-3xl font-bold text-[#132635]">Send us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label className="block mb-2 text-sm font-semibold text-[#132635]">Full Name *</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#f19e1f]"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-semibold text-[#132635]">Email Address *</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#f19e1f]"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-semibold text-[#132635]">Phone Number *</label>
                  <input
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#f19e1f]"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-semibold text-[#132635]">Company Name</label>
                  <input
                    type="text"
                    placeholder="Your company"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#f19e1f]"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-semibold text-[#132635]">Subject *</label>
                  <select required className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#f19e1f]">
                    <option value="">Select a subject</option>
                    <option value="product-inquiry">Product Inquiry</option>
                    <option value="bulk-order">Bulk Order</option>
                    <option value="custom-printing">Custom Printing</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Support</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-2 text-sm font-semibold text-[#132635]">Message *</label>
                  <textarea
                    placeholder="Tell us about your project or inquiry"
                    required
                    rows={5}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#f19e1f]"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <input type="checkbox" id="terms" required className="rounded border-gray-300" />
                  <label htmlFor="terms" className="text-sm text-gray-700">
                    I agree to the privacy policy and terms of service
                  </label>
                </div>

                <Button className="w-full bg-[#f19e1f] text-[#132635] hover:bg-[#f19e1f]/90 font-bold py-3 text-lg">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Map and Additional Info */}
            <div>
              <h2 className="mb-8 text-3xl font-bold text-[#132635]">Business Hours & Location</h2>

              {/* Map Placeholder */}
              <div className="mb-8 rounded-lg border-2 border-gray-200 bg-gray-100 p-8 text-center">
                <MapPin className="mx-auto mb-4 h-12 w-12 text-gray-400" />
                <p className="text-gray-600">Interactive map will be displayed here</p>
                <p className="mt-2 text-sm text-gray-500">
                  View our location and get directions on Google Maps
                </p>
                <Link href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="mt-4 border-[#f19e1f] text-[#f19e1f] hover:bg-[#f19e1f]/10">
                    Open on Google Maps
                  </Button>
                </Link>
              </div>

              {/* Business Hours */}
              <Card className="mb-8 border-t-4 border-t-[#f19e1f]">
                <CardContent className="p-6">
                  <h3 className="mb-4 flex items-center gap-2 font-bold text-[#132635]">
                    <Clock className="h-5 w-5 text-[#f19e1f]" />
                    Business Hours
                  </h3>
                  <div className="space-y-2 text-sm text-gray-700">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <strong>9:00 AM - 6:00 PM</strong>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <strong>9:00 AM - 2:00 PM</strong>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <strong>Closed</strong>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact Links */}
              <Card className="border-t-4 border-t-[#f19e1f]">
                <CardContent className="p-6">
                  <h3 className="mb-4 font-bold text-[#132635]">Quick Contact</h3>
                  <div className="space-y-3">
                    <Link href="tel:+918143330028">
                      <Button className="w-full bg-blue-600 text-white hover:bg-blue-700 font-bold">
                        <Phone className="mr-2 h-4 w-4" />
                        Call Now
                      </Button>
                    </Link>
                    <Link href="mailto:info@mspaperproducts.com">
                      <Button className="w-full bg-purple-600 text-white hover:bg-purple-700 font-bold">
                        <Mail className="mr-2 h-4 w-4" />
                        Send Email
                      </Button>
                    </Link>
                    <Link href="https://wa.me/918143330028" target="_blank" rel="noopener noreferrer">
                      <Button className="w-full bg-green-600 text-white hover:bg-green-700 font-bold">
                        <MessageSquare className="mr-2 h-4 w-4" />
                        WhatsApp Us
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-[#132635]">Frequently Asked Questions</h2>
          <div className="mx-auto max-w-3xl space-y-6">
            {[
              {
                question: 'How long does it take to get a quote?',
                answer: 'We typically provide quotes within 24 hours of receiving your inquiry. For custom projects, we may need additional details.',
              },
              {
                question: 'What is your minimum order quantity?',
                answer: 'Minimum order quantities vary by product and printing type. Contact us for specific details on your desired products.',
              },
              {
                question: 'Do you offer rush orders?',
                answer: 'Yes, rush orders are available for most products. Please contact us to discuss timeline and any associated rush fees.',
              },
              {
                question: 'What payment methods do you accept?',
                answer: 'We accept bank transfers, cheques, digital payments, and credit terms for bulk orders. Contact our sales team for details.',
              },
              {
                question: 'Can you provide samples?',
                answer: 'Yes, samples are available for most products. Please reach out to discuss sample requests and associated costs.',
              },
              {
                question: 'What areas do you deliver to?',
                answer: 'We deliver across India with reliable logistics partners. International shipping is available for certain products.',
              },
            ].map((faq, idx) => (
              <details key={idx} className="group border border-gray-200 rounded-lg overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between bg-white px-6 py-4 hover:bg-gray-50">
                  <h3 className="font-semibold text-[#132635]">{faq.question}</h3>
                  <span className="text-[#f19e1f] group-open:rotate-180 transition">▼</span>
                </summary>
                <div className="bg-gray-50 px-6 py-4 text-gray-700">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#132635] to-[#1a3a52] py-16 text-white md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">Ready to Transform Your Packaging?</h2>
          <p className="mb-8 text-gray-300">
            Connect with our team today to explore solutions tailored to your business needs.
          </p>
          <Link href="#form">
            <Button className="bg-[#f19e1f] text-[#132635] hover:bg-[#f19e1f]/90 font-bold">
              Start a Conversation
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
