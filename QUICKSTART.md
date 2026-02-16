# Quick Start Guide

## 🚀 Get Running in 60 Seconds

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open in browser
# http://localhost:3000
```

That's it! The app is now running locally.

## 🧪 Test the App

1. **Add subscriptions:**
   - Click "Or load demo subscriptions" for quick testing
   - Or manually add your own canceled subscriptions

2. **Generate graveyard:**
   - Click "🪦 Generate My Graveyard"

3. **Download & share:**
   - Click "Download PNG" to save your graveyard card
   - Use share buttons for Twitter/LinkedIn

## 📋 What Works Out of the Box

✅ Beautiful cemetery-themed UI with fog effects and moon  
✅ Add/remove subscriptions dynamically  
✅ Calculate total wasted money and annual savings  
✅ Generate graveyard score  
✅ Download cards as PNG (via html2canvas)  
✅ Social share buttons with pre-filled text  
✅ Mobile responsive  
✅ Demo data for testing  

## 🎨 Customize Before Launch

### 1. Google Analytics (Optional)
Edit `app/layout.tsx`:
```typescript
// Replace with your GA4 ID
gtag('config', 'YOUR-GA4-ID');
```

### 2. Gumroad Premium Link
Edit `app/page.tsx`:
```typescript
// Search for "#" and replace with your Gumroad URL
href="https://gumroad.com/l/your-product"
```

### 3. OG Image for Social Sharing
- Generate a graveyard card
- Screenshot it
- Resize to 1200x630px
- Save as `public/og-image.png`

## 🚢 Deploy to Production

```bash
# Build for production
npm run build

# Deploy to Vercel (easiest)
npm i -g vercel
vercel --prod
```

Or push to GitHub and import in [Vercel Dashboard](https://vercel.com).

See [DEPLOYMENT.md](./DEPLOYMENT.md) for full deployment guide.

## 🎯 Key Features

- **Graveyard Score Formula:**
  ```
  Score = (Number of subscriptions × 10) + (Annual savings ÷ 100)
  ```

- **Death Reasons:**
  - Too expensive 💸
  - Never used 😴
  - Found better 🔄
  - Company died ⚰️
  - Rage quit 😤

- **Premium Features ($5):**
  - Unwatermarked downloads
  - Premium epitaphs (3 variations per death reason)

## 🐛 Troubleshooting

**Q: Build fails**  
A: Run `npm install` again and ensure Node.js 18+ is installed

**Q: PNG download not working**  
A: Check browser console for errors. html2canvas may need CORS for external images

**Q: Styling looks broken**  
A: Ensure TailwindCSS processed correctly. Try `npm run build` again

**Q: TypeScript errors**  
A: Run `npm install` to ensure all types are installed

## 📁 Project Structure

```
saas-graveyard/
├── app/
│   ├── layout.tsx          # Metadata, fonts, GA
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Cemetery theme & animations
├── components/
│   ├── GraveyardForm.tsx   # Subscription input
│   ├── GraveyardCard.tsx   # Generated card
│   └── Tombstone.tsx       # Individual tombstone
└── public/                 # Static assets
```

## 💡 Tips

1. **Test mobile first** - Most users will share from mobile
2. **Use demo data** - Great for screenshots and testing
3. **Create viral OG image** - First impression matters
4. **Share your own graveyard** - Best way to promote

## 🎉 You're Ready!

Start adding subscriptions and generating your graveyard. The app is fully functional and ready for production deployment.

Questions? Check [README.md](./README.md) or [DEPLOYMENT.md](./DEPLOYMENT.md)
