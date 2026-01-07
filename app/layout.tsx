import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import FloatingCTA from "@/components/floating-cta"
import MobileStickyBar from "@/components/mobile-sticky-bar"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "MS Paper Products | Premium Paper Bag & Packaging Manufacturer in Hyderabad",
    template: "%s | MS Paper Products",
  },
  description:
    "Leading manufacturer of premium paper bags, food packaging, medicine boxes, carton boxes & eco-friendly packaging solutions in Hyderabad, Telangana. Quality craftsmanship with 15+ years experience. Call +91 81433 30028",
  keywords: [
    "paper bags manufacturer Hyderabad",
    "paper packaging Telangana",
    "medicine boxes manufacturer",
    "pharmaceutical packaging",
    "food packaging boxes",
    "carton boxes Hyderabad",
    "eco-friendly packaging India",
    "custom paper bags",
    "bulk paper bags supplier",
  ],
  authors: [{ name: "MS Paper Products" }],
  creator: "MS Paper Products",
  publisher: "MS Paper Products",
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
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://mspaperproducts.com",
    siteName: "MS Paper Products",
    title: "MS Paper Products | Premium Paper Bag & Packaging Manufacturer",
    description:
      "Leading manufacturer of premium paper bags, food packaging, medicine boxes & eco-friendly packaging solutions in Hyderabad. 15+ years experience. Call +91 81433 30028",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MS Paper Products - Premium Paper Packaging Manufacturer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MS Paper Products | Premium Paper Bag Manufacturer",
    description:
      "Leading manufacturer of premium paper bags & eco-friendly packaging solutions in Hyderabad. Call +91 81433 30028",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/apple-icon.png",
  },
  verification: {
    google: "google-site-verification-code",
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#132635",
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://mspaperproducts.com/#business",
      name: "MS Paper Products",
      image: "https://mspaperproducts.com/ms-logo-horizontal.png",
      description:
        "Leading manufacturer of premium paper bags, food packaging, medicine boxes, carton boxes & eco-friendly packaging solutions in Hyderabad, Telangana.",
      url: "https://mspaperproducts.com",
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
        latitude: 17.447536,
        longitude: 78.430192,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "09:00",
          closes: "18:00",
        },
      ],
      priceRange: "$$",
      areaServed: {
        "@type": "State",
        name: "Telangana",
      },
      sameAs: ["https://wa.me/918143330028"],
    },
    {
      "@type": "Organization",
      "@id": "https://mspaperproducts.com/#organization",
      name: "MS Paper Products",
      url: "https://mspaperproducts.com",
      logo: "https://mspaperproducts.com/ms-logo-horizontal.png",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-81433-30028",
        contactType: "sales",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi", "Telugu"],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://mspaperproducts.com/#website",
      url: "https://mspaperproducts.com",
      name: "MS Paper Products",
      publisher: {
        "@id": "https://mspaperproducts.com/#organization",
      },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        {/* LinkedIn Insight Tag for B2B tracking */}
        <Script id="linkedin-insight" strategy="afterInteractive">
          {`
            _linkedin_partner_id = "5559497";
            window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
            window._linkedin_data_partner_ids.push(_linkedin_partner_id);
            (function(l) {
              if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
              window.lintrk.q=[]}
              var s = document.getElementsByTagName("script")[0];
              var b = document.createElement("script");
              b.type = "text/javascript";b.async = true;
              b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
              s.parentNode.insertBefore(b, s);})(window.lintrk);
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            alt=""
            src="https://px.ads.linkedin.com/collect/?pid=5559497&fmt=gif"
          />
        </noscript>

        {/* Google Tag - GA4 + Google Ads (single instance) */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-17803736252" strategy="afterInteractive" />
        <Script id="google-analytics-combined" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HKLGQT74VV');
            gtag('config', 'G-2F47PMEFD0');
            gtag('config', 'AW-17803736252');
          `}
        </Script>

        {/* Facebook Pixel */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
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
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1352936452530735&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body className={`font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
        <MobileStickyBar />
        <Analytics />
      </body>
    </html>
  )
}
