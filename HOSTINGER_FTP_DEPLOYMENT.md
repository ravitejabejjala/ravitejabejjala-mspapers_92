# MS Paper Products - Hostinger FTP Deployment Guide

## Step 1: Export the Next.js Project as Static Files

Since this is a Next.js project, you need to export it as static files first.

### Option A: Using Vercel (Recommended)
1. Push your code to GitHub
2. Connect GitHub repository to Vercel
3. Vercel automatically deploys and provides a production URL
4. No FTP upload needed - Vercel handles everything

### Option B: Static Export (For Hostinger)
1. Update `next.config.mjs`:
```mjs
const nextConfig = {
  output: 'export',
  distDir: 'out',
  reactStrictMode: true,
};

export default nextConfig;
```

2. Build the project:
```bash
npm run build
```

3. This creates an `out` folder with static HTML, CSS, and JavaScript files

## Step 2: Prepare Files for FTP Upload

1. Navigate to the `out` folder:
```bash
cd out
```

2. Select all files and folders (Ctrl+A or Cmd+A)

3. Key folders to upload:
   - `_next/` - Next.js compiled files
   - `public/` - All images and assets
   - All `.html` files (pages)
   - `.nojekyll` file (if present)

## Step 3: Connect to Hostinger FTP

### Using FileZilla (Free & Easy):

1. **Download FileZilla**: https://filezilla-project.org/download.php?type=client

2. **Get FTP Credentials from Hostinger**:
   - Log in to Hostinger Control Panel
   - Go to Files → FTP Accounts
   - Create new FTP account or use default
   - Note: Host, Username, Password, Port (usually 21)

3. **Connect in FileZilla**:
   - Host: `ftp.yourdomain.com` (from Hostinger)
   - Username: Your FTP username
   - Password: Your FTP password
   - Port: 21
   - Click "Quickconnect"

### Alternative: Using Hostinger File Manager:
1. Log in to Hostinger Control Panel
2. Go to Files → File Manager
3. Navigate to `public_html` folder
4. Upload files directly through web interface

## Step 4: Upload Project Files

### Via FileZilla:
1. **Left panel**: Navigate to your local `out` folder
2. **Right panel**: Navigate to `/public_html/` on server
3. **Upload Process**:
   - Drag all folders from left to right
   - Or right-click → Upload
   - Wait for all files to transfer

### Key Directories to Upload:
```
/public_html/
├── _next/
├── public/
├── index.html
├── products/
├── services/
├── about/
├── printing-services-hyderabad/
├── packaging-solutions/
└── [all other .html pages]
```

## Step 5: Configure Hostinger Settings

### 1. Set Primary Domain
- Hostinger Control Panel → Domains
- Set your domain as primary
- Wait for DNS to propagate (up to 24 hours)

### 2. Enable HTTPS/SSL
- Hostinger Control Panel → SSL Certificates
- Generate free SSL certificate
- Enable "Auto Renew"

### 3. Update .htaccess for Routing (if needed)
Create `.htaccess` in `/public_html/`:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

# Compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>

# Caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpeg "access plus 30 days"
  ExpiresByType image/gif "access plus 30 days"
  ExpiresByType image/png "access plus 30 days"
  ExpiresByType text/css "access plus 7 days"
  ExpiresByType application/javascript "access plus 7 days"
</IfModule>
```

## Step 6: Verify Deployment

1. Visit your domain: `https://yourdomain.com`
2. Test all main pages:
   - Home page
   - Products pages
   - Services pages
   - Contact form
3. Check responsive design on mobile
4. Verify images load correctly

## Step 7: Fix Common Issues

### Issue: 404 Errors on Pages
**Solution**: Upload `.htaccess` file to enable URL routing

### Issue: Images Not Showing
**Solution**: 
- Check `/public/` folder is uploaded
- Verify image paths in code match uploaded structure
- Check file permissions (should be 644 for files)

### Issue: Slow Performance
**Solution**:
- Enable GZIP compression in .htaccess
- Set proper caching headers
- Optimize images (use WebP format)
- Enable Hostinger's caching in Control Panel

### Issue: Google Ads Not Working
**Solution**:
- Verify Google Ads script is included
- Check browser console for blocked scripts
- Ensure HTTPS is enabled
- Verify Ad ID is correct

## Step 8: Post-Deployment Checklist

- [ ] Domain points to correct server
- [ ] HTTPS/SSL certificate installed
- [ ] All pages load without 404 errors
- [ ] Images display correctly
- [ ] Contact form works
- [ ] WhatsApp links functional
- [ ] Google Ads script loads
- [ ] Mobile responsive
- [ ] Fast page load time
- [ ] robots.txt configured
- [ ] sitemap.xml accessible

## Google Ads Configuration Issues

If Google Ads not showing after deployment:

1. **Check GTM/GA Tag**: Verify Google Analytics/GTM code in `<head>`
2. **Check Ad Sense Code**: If using AdSense, verify in head section
3. **Check Console Errors**: Open DevTools → Console, look for blocked resources
4. **HTTPS Required**: Google Ads requires HTTPS (SSL certificate)
5. **Wait 24-48 hours**: New domains may take time for ads to appear

### Add Google Analytics to next.config.mjs (for future builds):
```mjs
const withGA = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withGA({
  output: 'export',
  distDir: 'out',
})
```

## Monitoring & Maintenance

### Regular Checks:
- Monitor uptime (Hostinger Dashboard)
- Check error logs weekly
- Update content as needed
- Monitor Google Search Console for crawl errors
- Check Google Analytics for traffic

### Monthly Updates:
1. Back up database/files
2. Update security
3. Review 404 errors
4. Optimize performance

## Support Resources

- **Hostinger Support**: https://support.hostinger.com
- **FileZilla Documentation**: https://wiki.filezilla-project.org
- **Next.js Export Docs**: https://nextjs.org/docs/app/building-your-application/deploying/static-exports
- **MS Paper Products**: +91 8143330028

## Emergency Contacts

- **Hostinger Support**: support@hostinger.com
- **MS Paper Products**: info@mspaperproducts.com
- **Phone**: +91 8143330028
- **WhatsApp**: https://wa.me/918143330028

---

**Last Updated**: June 2026
**Version**: 1.0
