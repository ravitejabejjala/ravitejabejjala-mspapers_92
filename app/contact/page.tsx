"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock, MessageCircle, CheckCircle } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Location",
    details: ["7-1-307/14/G/119, DNM Colony,", "Tulasi Nagar, Balkampet,", "Hyderabad, Telangana 500018"],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 81433 30028"],
    link: "tel:+918143330028",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@mspaperproducts.com"],
    link: "mailto:info@mspaperproducts.com",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Monday - Saturday: 9:00 AM - 6:00 PM", "Sunday: Closed"],
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Create mailto link with form data
    const mailtoBody = `
Name: ${formData.name}
Company: ${formData.company}
Email: ${formData.email}
Phone: ${formData.phone}

Subject: ${formData.subject}

Message:
${formData.message}
    `.trim()

    const mailtoLink = `mailto:info@mspaperproducts.com?subject=${encodeURIComponent(formData.subject || "New Inquiry from Website")}&body=${encodeURIComponent(mailtoBody)}`

    // Open mailto
    window.location.href = mailtoLink

    // Show success state
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: "", company: "", email: "", phone: "", subject: "", message: "" })
    }, 1000)
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#132635] py-20 text-white md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">Get in Touch</h1>
            <p className="text-lg text-gray-300 md:text-xl">
              Have questions or ready to place an order? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <h2 className="mb-6 text-2xl font-bold text-[#132635]">Send Us a Message</h2>
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <CheckCircle className="mb-4 h-16 w-16 text-green-500" />
                    <h3 className="mb-2 text-xl font-semibold text-[#132635]">Message Sent!</h3>
                    <p className="text-gray-600">
                      Your email client should open. If not, please email us directly at info@mspaperproducts.com
                    </p>
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-4 bg-[#f19e1f] text-white hover:bg-[#f19e1f]/90"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company</Label>
                        <Input
                          id="company"
                          placeholder="Your company"
                          value={formData.company}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone *</Label>
                        <Input
                          id="phone"
                          placeholder="+91 81433 30028"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        placeholder="How can we help?"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your requirements..."
                        className="min-h-[150px]"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-[#f19e1f] text-white hover:bg-[#f19e1f]/90"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <h2 className="mb-6 text-2xl font-bold text-[#132635]">Contact Information</h2>
              <div className="grid gap-6 sm:grid-cols-2">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-none shadow-md">
                    <CardContent className="p-6">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#f19e1f]/10">
                        <info.icon className="h-6 w-6 text-[#f19e1f]" />
                      </div>
                      <h3 className="mb-2 font-semibold text-[#132635]">{info.title}</h3>
                      {info.details.map((detail, i) =>
                        info.link ? (
                          <a key={i} href={info.link} className="block text-sm text-gray-600 hover:text-[#f19e1f]">
                            {detail}
                          </a>
                        ) : (
                          <p key={i} className="text-sm text-gray-600">
                            {detail}
                          </p>
                        ),
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* WhatsApp Card */}
              <Card className="border-none bg-green-50 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500">
                      <MessageCircle className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-[#132635]">WhatsApp</h3>
                      <p className="text-sm text-gray-600">Chat with us on WhatsApp</p>
                    </div>
                    <Button asChild className="bg-green-500 text-white hover:bg-green-600">
                      <a href="https://wa.me/918143330028" target="_blank" rel="noopener noreferrer">
                        Chat Now
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Map */}
              <Card className="overflow-hidden border-none shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2775839193987!2d78.43019261487756!3d17.44753598804207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90c8b0e9a5a1%3A0x5d5e5e5e5e5e5e5e!2sBalkampet%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="MS Paper Products Location"
                />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#132635] py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">Ready to Start Your Project?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300">
            Get a free quote for your custom paper bag requirements today.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-[#f19e1f] text-white hover:bg-[#f19e1f]/90">
              <a href="tel:+918143330028">Call Now</a>
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
