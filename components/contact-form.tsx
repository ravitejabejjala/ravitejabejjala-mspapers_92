"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { AlertCircle, CheckCircle2 } from "lucide-react"

interface ContactFormProps {
  subject?: string
  fields?: "minimal" | "standard" | "detailed"
}

export default function ContactForm({ subject = "Printing Quote Request", fields = "standard" }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    printingRequirement: "",
    estimatedQuantity: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")
  const [confirmationMessage, setConfirmationMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    // Validation
    if (!formData.name || !formData.email || !formData.phone) {
      setError("Please fill in all required fields (Name, Email, Phone)")
      setIsSubmitting(false)
      return
    }

    // Track form submission
    if (typeof window !== "undefined" && typeof (window as any).gtag !== "undefined") {
      ;(window as any).gtag("event", "generate_lead", {
        event_category: "engagement",
        event_label: "Printing Quote Form",
        value: 1,
      })
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          subject: subject,
        }),
      })

      const result = await response.json()

      if (result.success) {
        if (result.mailtoFallback && result.mailtoLink) {
          window.open(result.mailtoLink, "_blank")
        }

        setConfirmationMessage(
          "Thank you for your inquiry! Your printing requirements have been sent. Our team will contact you within 24 hours.",
        )
        setIsSubmitted(true)
        setFormData({
          name: "",
          company: "",
          phone: "",
          email: "",
          printingRequirement: "",
          estimatedQuantity: "",
          message: "",
        })
      } else {
        // Fallback to mailto
        const mailtoBody = `Name: ${formData.name}\nCompany: ${formData.company || "Not provided"}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nPrinting Requirement: ${formData.printingRequirement || "Not specified"}\nEstimated Quantity: ${formData.estimatedQuantity || "Not specified"}\n\nMessage:\n${formData.message}`
        const mailtoLink = `mailto:info@mspaperproducts.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(mailtoBody)}`
        window.location.href = mailtoLink

        setConfirmationMessage("Your email client has been opened. Please send the email to complete your inquiry.")
        setIsSubmitted(true)
        setFormData({
          name: "",
          company: "",
          phone: "",
          email: "",
          printingRequirement: "",
          estimatedQuantity: "",
          message: "",
        })
      }
    } catch (error) {
      // Fallback to mailto on error
      const mailtoBody = `Name: ${formData.name}\nCompany: ${formData.company || "Not provided"}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nPrinting Requirement: ${formData.printingRequirement || "Not specified"}\nEstimated Quantity: ${formData.estimatedQuantity || "Not specified"}\n\nMessage:\n${formData.message}`
      const mailtoLink = `mailto:info@mspaperproducts.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(mailtoBody)}`
      window.location.href = mailtoLink

      setConfirmationMessage("Your email client has been opened. Please send the email to complete your inquiry.")
      setIsSubmitted(true)
      setFormData({
        name: "",
        company: "",
        phone: "",
        email: "",
        printingRequirement: "",
        estimatedQuantity: "",
        message: "",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="rounded-lg border border-green-200 bg-green-50 p-6 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-green-600 mb-4" />
        <h3 className="text-lg font-bold text-green-900 mb-2">Thank You!</h3>
        <p className="text-green-800">{confirmationMessage}</p>
        <Button onClick={() => setIsSubmitted(false)} className="mt-4" variant="outline">
          Send Another Inquiry
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 rounded-lg bg-white p-8 shadow-lg">
      {error && (
        <div className="flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-4">
          <AlertCircle className="h-5 w-5 flex-shrink-0 text-red-600 mt-0.5" />
          <p className="text-red-700">{error}</p>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        {/* Name */}
        <div className="space-y-2">
          <Label htmlFor="name" className="text-gray-700 font-semibold">
            Full Name <span className="text-red-500">*</span>
          </Label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Your full name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border-gray-300"
          />
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-gray-700 font-semibold">
            Phone Number <span className="text-red-500">*</span>
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+91 81433 30028"
            value={formData.phone}
            onChange={handleChange}
            required
            className="border-gray-300"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email" className="text-gray-700 font-semibold">
            Email Address <span className="text-red-500">*</span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={handleChange}
            required
            className="border-gray-300"
          />
        </div>

        {/* Company */}
        <div className="space-y-2">
          <Label htmlFor="company" className="text-gray-700 font-semibold">
            Company Name
          </Label>
          <Input
            id="company"
            name="company"
            type="text"
            placeholder="Your company name"
            value={formData.company}
            onChange={handleChange}
            className="border-gray-300"
          />
        </div>
      </div>

      {fields === "standard" || fields === "detailed" ? (
        <div className="grid md:grid-cols-2 gap-6">
          {/* Printing Requirement */}
          <div className="space-y-2">
            <Label htmlFor="printingRequirement" className="text-gray-700 font-semibold">
              Printing Requirement
            </Label>
            <Input
              id="printingRequirement"
              name="printingRequirement"
              type="text"
              placeholder="e.g., Brochures, Flyers, Booklets"
              value={formData.printingRequirement}
              onChange={handleChange}
              className="border-gray-300"
            />
          </div>

          {/* Estimated Quantity */}
          <div className="space-y-2">
            <Label htmlFor="estimatedQuantity" className="text-gray-700 font-semibold">
              Estimated Quantity
            </Label>
            <Input
              id="estimatedQuantity"
              name="estimatedQuantity"
              type="text"
              placeholder="e.g., 5000 pieces"
              value={formData.estimatedQuantity}
              onChange={handleChange}
              className="border-gray-300"
            />
          </div>
        </div>
      ) : null}

      {/* Message */}
      <div className="space-y-2">
        <Label htmlFor="message" className="text-gray-700 font-semibold">
          Additional Details / Message
        </Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us more about your printing requirements, specifications, timeline, etc."
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="border-gray-300 resize-none"
        />
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#f19e1f] hover:bg-[#f19e1f]/90 text-[#132635] font-semibold h-12"
      >
        {isSubmitting ? "Sending..." : "Request Printing Quote"}
      </Button>

      <p className="text-center text-sm text-gray-500">
        We'll respond to your inquiry within 24 business hours
      </p>
    </form>
  )
}
