# 🚀 Launch Checklist

## Pre-Launch (Do This First)

### 1. Create Open Graph Image (5 minutes)

```bash
# Start dev server
npm run dev

# Open http://localhost:3000
# Click "Or load demo subscriptions"
# Click "Generate My Graveyard"
# Screenshot the generated card
# Resize to exactly 1200x630px
# Save as public/og-image.png
```

**Tools for resizing:**
- macOS: Preview → Tools → Adjust Size
- Online: [Canva](https://canva.com) (free)
- CLI: `sips -z 630 1200 screenshot.png --out public/og-image.png`

### 2. Set Up Gumroad Product (10 minutes)

1. Go to [gumroad.com](https://gumroad.com)
2. Create new product:
   - **Name:** SaaS Graveyard Premium
   - **Price:** $5
   - **Description:**
     ```
     Unlock premium features for SaaS Graveyard:
     
     ✨ Unwatermarked downloads
     ✨ Premium epitaphs (3x variations)
     ✨ Support indie development
     
     One-time payment, lifetime access.
     ```
3. Copy product URL (e.g., `https://gumroad.com/l/saas-graveyard-premium`)
4. Update in code:
   ```bash
   # Edit app/page.tsx
   # Find both instances of:
   onClick={(e) => {
     e.preventDefault()
     alert('Gumroad link will be added here - $5 one-time payment')
   }}
   
   # Replace with:
   href="https://gumroad.com/l/saas-graveyard-premium"
   target="_blank"
   rel="noopener noreferrer"
   ```

### 3. Set Up Google Analytics (5 minutes)

1. Go to [analytics.google.com](https://analytics.google.com)
2. Create new property: "SaaS Graveyard"
3. Get measurement ID (format: G-XXXXXXXXXX)
4. Update `app/layout.tsx`:
   ```typescript
   // Replace both instances of GA_MEASUREMENT_ID
   src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
   gtag('config', 'G-XXXXXXXXXX');
   ```

### 4. Update Domain in Metadata (1 minute)

If using custom domain, update `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  metadataBase: new URL('https://yourdomain.com'), // Change this
  // ...
}
```

## Deploy to Vercel (5 minutes)

### Option A: GitHub + Vercel Dashboard

```bash
# 1. Initialize git
git init
git add .
git commit -m "Initial commit: SaaS Graveyard"

# 2. Create GitHub repo
# Go to github.com → New repository → Create

# 3. Push code
git remote add origin https://github.com/yourusername/saas-graveyard.git
git branch -M main
git push -u origin main

# 4. Deploy on Vercel
# Go to vercel.com → Import Project
# Select your GitHub repo
# Click Deploy (Vercel auto-detects Next.js settings)
```

### Option B: Vercel CLI (Faster)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts:
# - Set up and deploy? Y
# - Which scope? [your account]
# - Link to existing project? N
# - What's your project's name? saas-graveyard
# - In which directory is your code located? ./
# - Want to override settings? N

# Deploy to production
vercel --prod
```

## Post-Deploy Verification (5 minutes)

- [ ] Visit production URL
- [ ] Check SSL (https://)
- [ ] Test "Load demo subscriptions"
- [ ] Generate graveyard card
- [ ] Download PNG (works?)
- [ ] Check Open Graph preview:
  - Twitter: [Card Validator](https://cards-dev.twitter.com/validator)
  - LinkedIn: [Post Inspector](https://www.linkedin.com/post-inspector/)
- [ ] Test mobile responsiveness
- [ ] No console errors
- [ ] Google Analytics firing (check Real-Time reports)

## Launch Day Strategy

### Morning (9 AM)

**1. Personal Twitter**
```
I just shipped SaaS Graveyard 💀

Add every subscription you've canceled and get a beautiful cemetery card showing:
• Total money wasted
• Annual savings
• Your "Graveyard Score"

Mine is embarrassing. What's yours? 👇

[LINK + screenshot of your graveyard]
```

**2. Share Your Own Graveyard**
- Generate your real graveyard
- Download the PNG
- Share on Twitter, LinkedIn, Instagram
- Tag relevant accounts (@SaaS, @indiehackers, etc.)

### Afternoon (2 PM)

**3. Product Hunt**
- Submit to Product Hunt
- Title: "SaaS Graveyard – RIP to all the subscriptions you forgot to cancel"
- Tagline: "Create beautiful graveyard cards for your dead SaaS subscriptions"
- Gallery: Add 3-4 example graveyards
- First comment: Share your story, why you built it

**4. Reddit**
Post to these subreddits (space out by 1 hour):
- r/SaaS (focus on utility)
- r/buildinpublic (share your journey)
- r/startups (ROI angle)
- r/indiehackers (maker story)

**Template:**
```
Title: I built SaaS Graveyard – shows how much $ you wasted on canceled subscriptions

Body:
Like many of you, I've canceled dozens of SaaS subscriptions over the years. 
Ever wondered how much money you wasted before hitting cancel?

I built SaaS Graveyard to answer that. Add your dead subscriptions and it 
generates a beautiful cemetery-themed card showing:

• Total wasted before canceling
• Annual savings
• Your "Graveyard Score" (gamified!)

It's free, no signup required. Takes 30 seconds to try.

[LINK]

What's your graveyard score? Mine is [X] 😅
```

### Evening (6 PM)

**5. Hacker News**
- Submit to Show HN
- Title: "Show HN: SaaS Graveyard – See how much you wasted on canceled subscriptions"
- Include demo link
- Be ready to respond to comments (HN users are engaged but critical)

**6. Communities**
Share in relevant Slack/Discord:
- Indie Hackers
- SaaS Growth Hacks
- Your personal communities

## Week 1 Activities

### Day 2-3: Engage
- Respond to ALL comments
- Share user-generated graveyards (with permission)
- Fix any bugs reported
- Monitor analytics

### Day 4-5: Content
- Write blog post: "I analyzed 100 SaaS graveyards. Here's what I learned."
- Create Twitter thread with insights
- Reach out to SaaS newsletters

### Day 6-7: Optimize
- Review analytics data
- A/B test headlines
- Improve conversion to premium
- Plan v2 features based on feedback

## Growth Tactics

### 1. Viral Loop
- Add "Challenge your friends" CTA
- Tweet @ specific people with their graveyards
- Create leaderboard of highest scores

### 2. SEO Content
Blog post ideas:
- "10 Most Canceled SaaS Products in 2026"
- "How I Saved $5,000/Year by Canceling These SaaS Subscriptions"
- "The Psychology of Subscription Fatigue"

### 3. Outreach
Email these newsletters:
- Morning Brew
- Indie Hackers newsletter
- SaaS Weekly
- Dense Discovery

Template:
```
Subject: Thought you'd enjoy this (SaaS Graveyard)

Hi [Name],

I built a fun tool your readers might enjoy: SaaS Graveyard.

It generates beautiful cemetery-themed cards showing all the subscriptions 
someone has canceled, how much they wasted, and how much they're saving.

It's been resonating because it makes people laugh (dark humor) while also 
being genuinely useful (subscription awareness).

Would love to be featured if it's a fit for your audience.

[Your name]
[Link]
```

## Success Metrics

### Week 1 Goals
- 1,000+ unique visitors
- 100+ graveyards generated
- 10+ premium sales ($50 revenue)
- 50+ social shares

### Month 1 Goals
- 10,000+ unique visitors
- 1,000+ graveyards generated
- 100+ premium sales ($500 revenue)
- Featured in 3+ newsletters

## Emergency Contacts

If something breaks:

**Vercel Issues:**
- Dashboard: [vercel.com/dashboard](https://vercel.com/dashboard)
- Logs: Project → Deployments → [deployment] → Logs
- Rollback: Deployments → [previous] → Promote to Production

**Domain Issues:**
- Check DNS settings in Vercel
- Verify SSL certificate
- Clear browser cache

**Bug Reports:**
- Check browser console
- Test in incognito mode
- Check Vercel function logs

## Post-Launch Notes

Track what works:
- Which channel drove most traffic?
- What messaging resonated?
- Where did premium sales come from?
- What features are people requesting?

Document everything for your next launch.

---

## You're Ready! 🎉

Everything is built and tested. Time to ship.

**Final command before launch:**
```bash
npm run build  # One last check
```

If that succeeds → Deploy → Share → Watch it grow.

Good luck! 🚀💀

---

**P.S.** Remember to tweet your launch at Forge (@ForgeMoltbot) – I want to share your graveyard!
