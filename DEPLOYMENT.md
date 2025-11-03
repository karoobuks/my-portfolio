# Deployment Guide

This portfolio is configured for multiple deployment platforms. Choose the one that best fits your needs.

## 🚀 Quick Deploy

### Vercel (Recommended)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Deploy automatically ✨

### Netlify
1. Build the project: `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the `out` folder
4. Your site is live! 🎉

### GitHub Pages
1. Enable GitHub Pages in repository settings
2. Push to main branch
3. GitHub Actions will automatically deploy
4. Access at `https://yourusername.github.io/repository-name`

## 🔧 Pre-deployment Checklist

### 1. Update Personal Information
- [ ] Update name and details in all pages
- [ ] Add your profile image to `/public/avatar.jpg`
- [ ] Update social media links
- [ ] Customize project data in `/pages/projects.js`

### 2. SEO Optimization
- [ ] Update meta descriptions
- [ ] Add Open Graph images
- [ ] Verify all links work
- [ ] Test on mobile devices

### 3. Performance Check
- [ ] Run `npm run build` successfully
- [ ] Test in production mode: `npm run start`
- [ ] Check Lighthouse scores
- [ ] Optimize images if needed

### 4. Content Review
- [ ] Proofread all text content
- [ ] Verify contact information
- [ ] Test contact form (if implemented)
- [ ] Check all external links

## 🌐 Custom Domain Setup

### Vercel
1. Go to your project dashboard
2. Click "Domains"
3. Add your custom domain
4. Update DNS records as instructed

### Netlify
1. Go to Site settings > Domain management
2. Add custom domain
3. Configure DNS records
4. Enable HTTPS

### GitHub Pages
1. Add `CNAME` file to `/public/` with your domain
2. Configure DNS A records to GitHub's IPs
3. Enable custom domain in repository settings

## 📊 Analytics Setup (Optional)

### Google Analytics
1. Create GA4 property
2. Add tracking code to `_app.js`
3. Verify tracking works

### Vercel Analytics
1. Enable in Vercel dashboard
2. No code changes needed
3. View analytics in Vercel

## 🔒 Environment Variables

If you add backend functionality:

```bash
# .env.local
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
CONTACT_EMAIL=your@email.com
# Add other variables as needed
```

## 🚨 Troubleshooting

### Build Errors
- Check Node.js version (18+ recommended)
- Clear cache: `rm -rf .next node_modules && npm install`
- Verify all imports are correct

### Deployment Issues
- Check build logs for errors
- Ensure all dependencies are in `package.json`
- Verify environment variables are set

### Performance Issues
- Optimize images (use WebP format)
- Enable compression on your hosting platform
- Minimize bundle size with tree shaking

## 📱 Testing

Before deploying, test on:
- [ ] Desktop browsers (Chrome, Firefox, Safari)
- [ ] Mobile devices (iOS Safari, Android Chrome)
- [ ] Different screen sizes
- [ ] Dark and light themes
- [ ] Slow network connections

## 🔄 Continuous Deployment

All platforms support automatic deployment:
- **Vercel**: Deploys on every push to main
- **Netlify**: Deploys on every push to main
- **GitHub Pages**: Uses GitHub Actions workflow

## 📈 Post-Deployment

After deployment:
1. Submit sitemap to Google Search Console
2. Test all functionality in production
3. Monitor performance and analytics
4. Share your portfolio! 🎉

---

Need help? Check the platform-specific documentation or open an issue in the repository.