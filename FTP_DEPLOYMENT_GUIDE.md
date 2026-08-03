# FTP Deployment Guide for MS Paper Products Website

## Quick Overview
This is a Next.js 16 static export website with complete printing services functionality. The website is now fully functional with 6 individual printing service pages, each with SEO optimization and industry-specific targeting.

## Pages Structure

### Main Pages
- `/` - Homepage
- `/about` - About Us
- `/printing-services-hyderabad` - Main Printing Services Hub
- `/printing-services/offset-printing` - Offset Printing Details
- `/printing-services/digital-printing` - Digital Printing Details
- `/printing-services/brochure-printing` - Brochure Printing Details
- `/printing-services/flyer-printing` - Flyer Printing Details
- `/printing-services/booklet-printing` - Booklet Printing Details
- `/printing-services/custom-printing` - Custom Printing Details
- `/services` - General Services
- `/sustainability` - Sustainability
- `/products` - Products Catalog
- `/food-grade-packing` - Food Grade Packing
- `/contact` - Contact Form
- `/blog` - Blog

## Pre-Deployment Checklist

### 1. Build the Project Locally
```bash
npm install
npm run build
```

### 2. Verify Build Output
- Check that `.next/static` folder exists
- Verify all images are in `public` folder
- Ensure `next.config.mjs` has `output: 'export'` (static export)

### 3. Environmental Variables
**NO .env files are used in static export.** Environment variables are handled at build time.

## FTP Upload Instructions (Hostinger)

### Step 1: Access Hostinger FTP
1. Log in to Hostinger Dashboard
2. Go to **Files → FTP Accounts**
3. Note your FTP credentials:
   - FTP Host: (provided by Hostinger)
   - Username: (provided by Hostinger)
   - Password: (provided by Hostinger)
   - Port: 21 (standard)

### Step 2: Connect via FTP Client
**Recommended Tools:**
- FileZilla (Windows/Mac/Linux) - Free
- Cyberduck (Mac) - Free
- WinSCP (Windows) - Free

**FileZilla Steps:**
1. Open FileZilla
2. Go to `File → Site Manager`
3. Create new site with Hostinger FTP details
4. Connect to the server

### Step 3: Navigate & Upload

**Structure on Hostinger:**
```
public_html/
├── .next/
│   ├── static/
│   └── cache/
├── public/
│   ├── images/
│   ├── printing-services/
│   └── categories/
└── _next/
```

### Step 4: Upload Process

1. **Upload `.next/static` folder**
   - This contains all compiled CSS, JS, and font files
   - Upload to: `public_html/.next/static/`

2. **Upload `public` folder**
   - Contains all images and assets
   - Upload to: `public_html/public/`

3. **Upload `.next/server` (if exists)**
   - Upload to: `public_html/.next/server/`

4. **Upload `.htaccess` file**
   - Location: `public_html/.htaccess`
   - This enables URL rewrites for Next.js static exports

### Step 5: Configure Hostinger

1. In Hostinger Dashboard → **Domains**
2. Set document root to `public_html/`
3. Ensure rewrite rules are enabled (.htaccess support)

### Step 6: Test the Website

- Visit `https://yourdomain.com/`
- Test all main pages load correctly
- Test all printing service links:
  - `/printing-services/offset-printing`
  - `/printing-services/digital-printing`
  - `/printing-services/brochure-printing`
  - `/printing-services/flyer-printing`
  - `/printing-services/booklet-printing`
  - `/printing-services/custom-printing`
- Verify "Get Quote" buttons redirect to `/contact`
- Test WhatsApp and phone links work
- Check images load correctly

## File Sizes & Transfer Time

```
.next/static/ - ~500KB (CSS, JS, fonts)
public/ - ~50MB (images and assets)
Total - ~50-60MB (depending on image compression)

Estimated upload time on 5Mbps connection: 10-15 minutes
```

## Troubleshooting

### 404 Errors on Pages
**Solution:** Ensure `.htaccess` file is uploaded and contains proper URL rewrite rules

### Images Not Loading
**Solution:** Check that `public/` folder is uploaded with correct permissions (chmod 755)

### CSS/JavaScript Not Applying
**Solution:** Clear browser cache (Ctrl+Shift+Delete) and verify `.next/static/` is uploaded

### Links Not Working
**Solution:** Verify that relative links use `/` prefix and match the page routes

## Website Features

✅ Fully responsive design (mobile, tablet, desktop)
✅ SEO optimized with meta tags and structured data
✅ Fast loading times with static generation
✅ Industry-specific printing solutions (Education, Pharma, Real Estate, Healthcare)
✅ Contact form integrated
✅ WhatsApp and phone integration
✅ Social media links
✅ Google Analytics ready (add tracking ID in header)

## Post-Deployment Tasks

1. **Add Google Analytics**
   - Update tracking ID in `_document.tsx` if applicable
   - Or add via Hostinger analytics panel

2. **Setup Google Search Console**
   - Verify domain ownership
   - Submit sitemap (auto-generated at `/sitemap.xml`)

3. **Setup SSL Certificate**
   - Enable free SSL in Hostinger → Domains
   - Force HTTPS redirect

4. **Submit to Google Search**
   - Use Google Search Console
   - Manual URL submission recommended

5. **Monitor Performance**
   - Check Hostinger Analytics
   - Monitor 404 errors
   - Track conversion rates on contact form

## Rollback Instructions

If something goes wrong:

1. Delete the current `public_html` contents
2. Re-upload the previous working version
3. Clear browser cache on client side
4. Test again

## Support

For issues with:
- **Next.js/Build:** Check build logs with `npm run build`
- **FTP Upload:** Contact Hostinger support
- **Domain/SSL:** Contact Hostinger support
- **Code Issues:** Review files against version control

---

**Last Updated:** 2026-03-17
**Website Version:** 1.0.0
**Node Version:** 18+
**Next.js Version:** 16
