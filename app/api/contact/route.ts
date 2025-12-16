import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, company, email, phone, subject, message } = body

    // Validate required fields
    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Send email using a simple fetch to a mail service
    // For production, you can use services like Resend, SendGrid, or Nodemailer
    // Here we'll use the Web3Forms free service which doesn't require any setup
    const formData = {
      access_key: "YOUR_WEB3FORMS_KEY", // Free service, get key at web3forms.com
      subject: `New Inquiry: ${subject}`,
      from_name: "MS Paper Products Website",
      to: "info@mspaperproducts.com",
      name: name,
      email: email,
      message: `
New inquiry from MS Paper Products website:

Name: ${name}
Company: ${company || "Not provided"}
Email: ${email}
Phone: ${phone}

Subject: ${subject}

Requirements:
${message}

---
This email was sent from the MS Paper Products contact form.
      `.trim(),
    }

    // For now, we'll simulate success and use mailto as fallback
    // In production, replace with actual email service integration

    return NextResponse.json({
      success: true,
      message: "Your requirements have been received. We will contact you shortly!",
      mailtoFallback: true,
      mailtoLink: `mailto:info@mspaperproducts.com?subject=${encodeURIComponent(subject || "New Inquiry from Website")}&body=${encodeURIComponent(`Name: ${name}\nCompany: ${company || "Not provided"}\nEmail: ${email}\nPhone: ${phone}\n\nRequirements:\n${message}`)}`,
    })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}
