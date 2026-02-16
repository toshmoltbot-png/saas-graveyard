# Deployment Guide for SaaS Graveyard

## Quick Deploy to Vercel (Recommended)

### Option 1: Deploy via Vercel Dashboard

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: SaaS Graveyard"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts, then deploy to production
vercel --prod
```

## Pre-Deployment Checklist

- [ ] Update Google Analytics ID in `app/layout.tsx`
- [ ] Add Gumroad product link in `app/page.tsx`
- [ ] Create and upload `public/og-image.png` (1200x630px)
- [ ] Test the app locally (`npm run dev`)
- [ ] Run build to check for errors (`npm run build`)
- [ ] Update `metadataBase` URL in `app/layout.tsx` if using custom domain

## Custom Domain Setup

1. In Vercel Dashboard → Settings → Domains
2. Add your custom domain (e.g., saasgraveyard.com)
3. Update DNS records as instructed by Vercel
4. Update `metadataBase` in `app/layout.tsx`:
   ```typescript
   metadataBase: new URL('https://yourdomain.com')
   ```

## Environment Variables

No environment variables needed! Everything runs client-side.

## Post-Deployment

### 1. Add Google Analytics

Replace `GA_MEASUREMENT_ID` in `app/layout.tsx`:
```typescript
gtag('config', 'G-XXXXXXXXXX');
```

### 2. Set Up Gumroad Product

1. Create product on [gumroad.com](https://gumroad.com)
2. Price: $5
3. Product name: "SaaS Graveyard Premium"
4. Include: "Unwatermarked downloads + premium epitaphs"
5. Copy product URL
6. Update both premium CTA links in `app/page.tsx`:
   ```typescript
   href="https://gumroad.com/l/your-product-name"
   ```

### 3. Create OG Image

1. Run the app locally
2. Create a demo graveyard with 4-6 subscriptions
3. Screenshot the generated card
4. Resize to 1200x630px
5. Save as `public/og-image.png`
6. Redeploy

### 4. Test Social Sharing

- Twitter: Share URL and check preview
- LinkedIn: Share URL and check preview
- Use [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- Use [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

## Performance Optimization

The app is already optimized for performance:

- ✅ Static generation (no server needed)
- ✅ Optimized images via Next.js Image
- ✅ Code splitting automatically handled
- ✅ TailwindCSS purges unused styles

## Monitoring

### Analytics to Track

- Page views
- "Generate Graveyard" button clicks
- Download button clicks
- Share button clicks (Twitter/LinkedIn)
- Premium CTA clicks

### Vercel Analytics (Optional)

Enable in Vercel Dashboard → Analytics → Enable

## Troubleshooting

### Build fails on Vercel

- Check build logs in Vercel Dashboard
- Ensure all dependencies are in `package.json`
- Run `npm run build` locally first

### OG images not showing

- Ensure `og-image.png` exists in `public/`
- Check image is exactly 1200x630px
- Clear social media cache:
  - Twitter: Use Card Validator
  - LinkedIn: Use Post Inspector

### html2canvas not generating images

- Check browser console for errors
- Ensure all fonts and assets are loaded
- Try reducing card complexity

## Going Viral 🚀

### Launch Checklist

- [ ] Deploy to production
- [ ] Set up Google Analytics
- [ ] Configure Gumroad product
- [ ] Create stunning OG image
- [ ] Test on mobile devices
- [ ] Share on Twitter with demo card
- [ ] Post on Product Hunt
- [ ] Share in relevant subreddits (r/SaaS, r/startups)
- [ ] Share on Hacker News
- [ ] Reach out to SaaS newsletters

### Growth Hacks

1. **Demo mode by default** - Show a pre-filled example
2. **Add "View Examples"** - Gallery of great graveyards
3. **Leaderboard** - Highest graveyard scores
4. **Email capture** - For those who want to save their graveyard

Good luck! 💀
