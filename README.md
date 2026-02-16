# SaaS Graveyard 💀

**RIP to all the SaaS you forgot to cancel**

A viral web app that generates beautiful, shareable "graveyard cards" showing all your canceled SaaS subscriptions, total money wasted, and annual savings.

![SaaS Graveyard](https://via.placeholder.com/1200x630/1a0f2e/ffffff?text=SaaS+Graveyard)

## Features

- 🪦 **Beautiful Cemetery-Themed Cards** - Dark purple/black aesthetic with fog effects, moon, and tombstones
- 💰 **Track Wasted Money** - See exactly how much you spent before canceling
- 📈 **Calculate Savings** - Annual savings displayed prominently
- 🏆 **Graveyard Score** - Gamified score based on ruthless optimization
- 📸 **PNG Download** - High-quality downloadable cards via html2canvas
- 🔗 **Social Sharing** - Pre-filled Twitter & LinkedIn share buttons
- 💎 **Premium Unlock** - $5 Gumroad payment for unwatermarked downloads + premium epitaphs

## Tech Stack

- **Next.js 14** (App Router)
- **React 18** with TypeScript
- **TailwindCSS** for styling
- **html2canvas** for PNG generation
- **Lucide React** for icons
- **Vercel** for deployment

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/saas-graveyard.git
cd saas-graveyard
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Development

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Project Structure

```
saas-graveyard/
├── app/
│   ├── layout.tsx          # Root layout with metadata & GA
│   ├── page.tsx            # Main page with form & card display
│   └── globals.css         # Global styles & cemetery theme
├── components/
│   ├── GraveyardForm.tsx   # Subscription input form
│   ├── GraveyardCard.tsx   # Shareable card component
│   └── Tombstone.tsx       # Individual tombstone component
├── public/                 # Static assets
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## Configuration

### Google Analytics

Update the GA measurement ID in `app/layout.tsx`:

```typescript
// Replace GA_MEASUREMENT_ID with your actual ID
gtag('config', 'GA_MEASUREMENT_ID');
```

### Gumroad Integration

Add your Gumroad product link in `app/page.tsx`:

```typescript
// Search for Gumroad placeholders and replace with your product URL
href="https://gumroad.com/l/your-product"
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy with one click

### Environment Variables

No environment variables needed for basic functionality. All processing is client-side.

## Customization

### Death Reasons & Epitaphs

Edit epitaphs in `components/Tombstone.tsx`:

```typescript
const epitaphs: Record<string, string> = {
  'too-expensive': 'Your custom epitaph here',
  // ... add more
}
```

### Theme Colors

Customize the cemetery theme in `tailwind.config.ts`:

```typescript
colors: {
  cemetery: {
    dark: '#0a0a0f',      // Background dark
    purple: '#1a0f2e',    // Mid gradient
    // ... modify colors
  }
}
```

### Demo Subscriptions

Update demo data in `components/GraveyardForm.tsx`:

```typescript
const demoSubscriptions: Subscription[] = [
  // Add your examples
]
```

## Features Roadmap

- [ ] User authentication
- [ ] Save/load graveyard history
- [ ] Export to PDF
- [ ] More death reason categories
- [ ] Animated tombstones
- [ ] Social proof widget
- [ ] Referral program

## Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License - feel free to use this for your own projects!

## Support

Questions or issues? Open an issue on GitHub or contact [support@saasgraveyard.com](mailto:support@saasgraveyard.com)

---

**Made with 💀 by the SaaS Graveyard team**

Stop paying for subscriptions you don't use. Give them a proper burial.
