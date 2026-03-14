# MS Paper Products - Website

Professional printing and packaging solutions company website built with Next.js 16 and Tailwind CSS.

## Project Overview

MS Paper Products is a Hyderabad-based manufacturer of:
- Premium paper bags and packaging
- Corporate branding kits
- Food-grade packing pouches
- Professional printing services (offset & digital)
- Pharmaceutical and specialty packaging

## Website Features

### Pages
- **Homepage** - Company overview and featured services
- **Products** - Main product catalog with multiple categories
- **Services** - Professional printing and finishing services
- **Corporate Branding Kit** - Customized branding solutions with hero banner
- **Food Grade Packing** - Food-safe transparent window pouches
- **Printing Services** - Offset, digital, brochure, flyer, and booklet printing
- **About Us** - Company history with Lithrone printer showcase
- **Sustainability** - Eco-friendly manufacturing practices
- **Contact** - Contact form and business information

### Technical Stack
- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Forms**: React Hook Form with Zod validation
- **Image Optimization**: Next.js Image component

### Key Features
- SEO optimized with metadata on all pages
- Responsive design (mobile, tablet, desktop)
- Hero banners with high-quality imagery
- Contact forms with validation
- Product showcase with expandable details
- FAQ sections with schema markup
- WhatsApp and phone contact integration
- Fast loading with optimized images

## Project Structure

```
├── app/                           # Next.js app directory
│   ├── page.tsx                  # Homepage
│   ├── layout.tsx                # Root layout with metadata
│   ├── globals.css               # Global styles
│   ├── products/                 # Products catalog
│   ├── services/                 # Services page
│   ├── about/                    # About page
│   ├── contact/                  # Contact page
│   ├── corporate-branding-kit/   # Branding kits page
│   ├── food-grade-packing/       # Food packaging page
│   ├── printing-services-hyderabad/ # Printing services page
│   └── sustainability/           # Sustainability page
├── components/                    # Reusable React components
│   ├── header.tsx                # Navigation header
│   ├── footer.tsx                # Footer
│   ├── contact-form.tsx          # Contact form component
│   ├── trust-badges.tsx          # Trust indicators
│   └── ui/                       # shadcn/ui components
├── lib/                          # Utilities and data
│   ├── products-data.ts          # Product catalog data
│   └── utils.ts                  # Helper functions
├── public/                       # Static assets
│   ├── images/                   # Product and page images
│   ├── categories/               # Category-specific images
│   └── ms-logo-horizontal.png    # Company logo
├── package.json                  # Dependencies
├── tsconfig.json                 # TypeScript configuration
├── tailwind.config.js            # Tailwind CSS configuration
├── next.config.mjs               # Next.js configuration
└── .htaccess                     # Apache rewrite rules for Hostinger
```

## Getting Started

### Local Development

1. **Install Dependencies**
```bash
npm install
```

2. **Run Development Server**
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the website.

3. **Build for Production**
```bash
npm run build
npm start
```

## Deployment

### To Hostinger via FTP

See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for detailed instructions.

**Quick Steps:**
1. Build locally: `npm run build`
2. Connect to Hostinger via FTP
3. Upload `.next`, `public`, and `.htaccess` files
4. Configure SSL certificate in Hostinger control panel

### Environment Variables

Create a `.env.local` file for sensitive information:
```env
NEXT_PUBLIC_BUSINESS_PHONE=+918143330028
NEXT_PUBLIC_BUSINESS_EMAIL=contact@mspaperproducts.com
NEXT_PUBLIC_WHATSAPP_NUMBER=918143330028
```

## SEO Optimization

All pages include:
- Optimized meta titles and descriptions
- Keywords targeting
- Open Graph tags for social sharing
- Canonical URLs
- Schema markup for structured data
- Mobile-friendly design
- Fast loading times

## Browser Support

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Lighthouse Score: 90+
- Core Web Vitals optimized
- Image optimization with Next.js Image
- CSS minification with Tailwind
- JavaScript code splitting

## Accessibility

- WCAG 2.1 AA compliance
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader friendly

## Contact & Support

**MS Paper Products**
- Phone: +91 81433 30028
- WhatsApp: +91 81433 30028
- Email: contact@mspaperproducts.com
- Location: Banjara Hills, Hyderabad, Telangana 500034

## License

This project is proprietary to MS Paper Products.

---

**Last Updated:** March 2026
**Version:** 1.0.0
