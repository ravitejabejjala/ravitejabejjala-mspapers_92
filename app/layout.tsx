import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppWidget } from "@/components/whatsapp-widget"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Toaster } from "@/components/ui/toaster"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "MS Paper Products | Premium Paper Bags & Packaging Manufacturer Hyderabad",
  description:
    "Leading manufacturer of eco-friendly paper bags, kraft bags, wedding bags, pharma packaging, sweet boxes & custom packaging in Hyderabad. ISO certified, 100% biodegradable, custom printing, bulk orders available. Contact +91-81433-30028",
  keywords: [
    "paper bags manufacturer Hyderabad",
    "kraft bags supplier India",
    "wedding return gift bags",
    "corporate paper bags",
    "pharma packaging boxes",
    "medicine boxes manufacturer",
    "food grade paper bags",
    "eco friendly packaging India",
    "custom paper packaging Hyderabad",
    "luxury paper bags",
    "sweet boxes manufacturer",
    "retail shopping bags",
    "printed paper bags",
    "biodegradable packaging",
    "sustainable packaging solutions",
    "bulk paper bags Hyderabad",
    "custom logo paper bags",
    "gift packaging boxes",
    "takeaway bags",
    "jewelry packaging",
  ],
  authors: [{ name: "MS Paper Products" }],
  openGraph: {
    title: "MS Paper Products | Premium Paper Bags & Packaging Manufacturer Hyderabad",
    description:
      "Leading manufacturer of eco-friendly paper bags, kraft bags, wedding bags, pharma packaging, sweet boxes & custom packaging. 100% biodegradable. Bulk orders available.",
    url: "https://mspaperproducts.com",
    siteName: "MS Paper Products",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://mspaperproducts.com/ms-logo.png",
        width: 1200,
        height: 630,
        alt: "MS Paper Products - Premium Paper Packaging",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MS Paper Products | Premium Paper Packaging Manufacturer",
    description: "Premium eco-friendly paper bags and custom packaging solutions in Hyderabad. 100% biodegradable.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://mspaperproducts.com",
  },
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics (GA4) integration */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-2F47PMEFD0"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-2F47PMEFD0');
            `,
          }}
        />
        {/* End Google Analytics Code */}

        {/* Facebook Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1352936452530735');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1352936452530735&ev=PageView&noscript=1"
          />
        </noscript>
        {/* End Facebook Pixel Code */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "MS Paper Products",
              alternateName: "MS Paperbags",
              url: "https://mspaperproducts.com",
              logo: "https://mspaperproducts.com/ms-logo.png",
              description:
                "Premium manufacturer of eco-friendly paper bags, kraft bags, wedding bags, pharma packaging, sweet boxes and custom packaging solutions in Hyderabad, India. 100% biodegradable and recyclable.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "7-1-307/14/G/119, DNM Colony, Tulasi Nagar, Balkampet",
                addressLocality: "Hyderabad",
                addressRegion: "Telangana",
                postalCode: "500018",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "17.4605",
                longitude: "78.4226",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-81433-30028",
                contactType: "Customer Service",
                email: "info@mspaperproducts.com",
                areaServed: "IN",
                availableLanguage: ["English", "Hindi", "Telugu"],
              },
              sameAs: [
                "https://www.facebook.com/mspaperproducts",
                "https://www.instagram.com/mspaperproducts",
                "https://www.linkedin.com/company/mspaperproducts",
              ],
              foundingDate: "2015",
              priceRange: "$$",
              areaServed: {
                "@type": "Country",
                name: "India",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Paper Packaging Products",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Product",
                      name: "Luxury Paper Bags",
                      description: "Premium printed paper bags with custom branding and finishes",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Product",
                      name: "Kraft Paper Bags",
                      description: "Eco-friendly kraft paper bags for retail and food packaging",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Product",
                      name: "Wedding Gift Bags",
                      description: "Elegant paper bags for wedding favors and return gifts",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Product",
                      name: "Pharma Packaging",
                      description: "Medicine boxes and pharmaceutical packaging solutions",
                    },
                  },
                ],
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://mspaperproducts.com",
              name: "MS Paper Products",
              image: "https://mspaperproducts.com/ms-logo.png",
              telephone: "+91-81433-30028",
              email: "info@mspaperproducts.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "7-1-307/14/G/119, DNM Colony, Tulasi Nagar, Balkampet",
                addressLocality: "Hyderabad",
                addressRegion: "Telangana",
                postalCode: "500018",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "17.4605",
                longitude: "78.4226",
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                opens: "09:00",
                closes: "18:00",
              },
              priceRange: "$$",
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <Header />
        {children}
        <Footer />
        <WhatsAppWidget />
        <ScrollToTop />
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
