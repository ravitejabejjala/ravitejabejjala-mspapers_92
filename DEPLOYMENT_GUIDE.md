# MS Paper Products - Hostinger FTP Deployment Guide

## Prerequisites
- Node.js 18+ installed locally
- FTP client (FileZilla recommended)
- Hostinger account with FTP credentials

## Local Build Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Build the Project
```bash
npm run build
```

This creates an optimized production build in the `.next` folder.

### 3. Export Static Files (if using static export)
```bash
npm run build
```

## FTP Deployment to Hostinger

### Step 1: Connect via FTP
1. Open FileZilla or your preferred FTP client
2. Enter your Hostinger FTP credentials:
   - Host: ftp.yourdomain.com
   - Username: Your FTP username
   - Password: Your FTP password
   - Port: 21 (standard FTP)

### Step 2: Upload Files
1. Navigate to your public_html directory (or www folder)
2. Upload the following files and folders from your local `.next` folder:

**Required Folders:**
- `public/` - All static assets (images, fonts, etc.)
- `node_modules/` - Dependencies (if using server-side rendering)

**Required Files:**
- `.htaccess` - Already created in project root
- All files from `.next/` output

### Step 3: Project Structure on Hostinger
```
public_html/
├── public/           # Static images and assets
├── .next/            # Build output
├── .htaccess         # Rewrite rules
└── node_modules/     # Dependencies (if needed)
```

### Step 4: Set Permissions
Set the following folder permissions via FTP (right-click > File permissions):
- `public/`: 755
- `node_modules/`: 755
- Files: 644

### Step 5: Verify Deployment
1. Visit your domain in a browser
2. Check that all pages load correctly:
   - Homepage: yourdomain.com
   - Products: yourdomain.com/products
   - Printing Services: yourdomain.com/printing-services-hyderabad
   - Food Grade Packing: yourdomain.com/food-grade-packing
   - Corporate Branding Kit: yourdomain.com/corporate-branding-kit

## Important Notes

### Environment Variables
If your site uses any environment variables:
1. Create a `.env.local` file in the root directory
2. Add your variables (contact details, API keys, etc.)
3. Upload via FTP

### SSL Certificate
Ensure your domain has SSL enabled in Hostinger:
1. Go to Hostinger Control Panel
2. Navigate to SSL Certificate section
3. Enable free Let's Encrypt SSL

### Caching
The `.htaccess` file includes browser caching rules for faster loading:
- Images: 1 year cache
- CSS/JS: 1 month cache
- HTML: No cache (for updates)

## Troubleshooting

### White Screen of Death
- Check `.htaccess` file is uploaded
- Verify all files from `.next/` are uploaded
- Check PHP version compatibility (7.4+ required)

### Images Not Loading
- Ensure `public/` folder is uploaded
- Check image paths start with `/`
- Verify permissions are 644 for files

### 404 Errors
- Confirm `.htaccess` is in public_html root
- Verify all routes are accessible

## Monitoring

### Check Server Logs
1. Go to Hostinger Control Panel
2. Advanced → Error Logs
3. Look for any PHP or server errors

### Performance Testing
Use tools to verify deployment:
- Google PageSpeed Insights
- GTmetrix
- WebPageTest

## Rollback Instructions
Keep a backup of your previous version:
1. Download the current public_html folder via FTP
2. Save locally as a backup
3. If needed, upload the backup version

## Support
Contact Hostinger support if you encounter:
- FTP connection issues
- Server configuration problems
- SSL certificate issues
- Server errors (500, 503, etc.)

---
**Last Updated:** 2026
**Website:** MS Paper Products - Professional Printing & Packaging Solutions
