# Testing Checklist

## ✅ Pre-Launch Testing

### Functional Testing

- [ ] **Landing Page**
  - [ ] Hero text displays correctly
  - [ ] Moon and fog animations render
  - [ ] Stars twinkle
  - [ ] Features section visible
  - [ ] Premium CTA displays

- [ ] **Add Subscription Form**
  - [ ] All input fields accept data
  - [ ] Monthly price accepts decimals (e.g., 9.99)
  - [ ] Months paid accepts integers only
  - [ ] Death reason dropdown shows all 5 options
  - [ ] "Add to Graveyard" button works
  - [ ] Validation fires if fields are empty

- [ ] **Demo Data**
  - [ ] "Load demo subscriptions" button works
  - [ ] Pre-populates 4 subscriptions
  - [ ] Demo data calculates correctly

- [ ] **Subscription List**
  - [ ] Shows all added subscriptions
  - [ ] Displays name, price, months, total wasted
  - [ ] Remove button (X) works for each item
  - [ ] "Generate My Graveyard" button appears when list has items

- [ ] **Graveyard Card Generation**
  - [ ] Card renders after clicking "Generate"
  - [ ] All tombstones display correctly
  - [ ] Stats calculate accurately:
    - [ ] Total Wasted = sum of (monthly price × months paid)
    - [ ] Saved Per Year = sum of (monthly price × 12)
    - [ ] Graveyard Score = (count × 10) + (annual savings ÷ 100)
  - [ ] Tier badge shows correctly based on score
  - [ ] Watermark displays ("Made with saasgraveyard.com")
  - [ ] Background effects render (fog, moon, stars)

- [ ] **Tombstones**
  - [ ] Name displays
  - [ ] Dates calculate correctly (current year - years paid → current year)
  - [ ] Total wasted shows correct amount
  - [ ] Epitaph matches death reason
  - [ ] Hover effect works (slight scale up)

- [ ] **Download Functionality**
  - [ ] "Download PNG" button works
  - [ ] Image generates without errors
  - [ ] Downloaded file is named "my-saas-graveyard.png"
  - [ ] Image quality is good (2x scale)
  - [ ] All card elements are captured
  - [ ] Background renders correctly in PNG

- [ ] **Social Sharing**
  - [ ] Twitter share button opens with correct URL
  - [ ] Pre-filled text includes:
    - [ ] Number of subscriptions
    - [ ] Annual savings amount
    - [ ] saasgraveyard.com URL
  - [ ] LinkedIn share button opens with URL
  - [ ] Share links work on mobile

- [ ] **Premium Features**
  - [ ] Premium CTA buttons clickable
  - [ ] Alert shows "Gumroad link will be added"
  - [ ] Premium badge styling displays correctly

- [ ] **Navigation**
  - [ ] "Create Another" button returns to form
  - [ ] Smooth scroll to card after generation
  - [ ] Back to form clears card state

### Responsive Testing

Test on these viewport sizes:

- [ ] **Mobile (375px)**
  - [ ] Landing page readable
  - [ ] Form inputs stack vertically
  - [ ] Buttons are thumb-friendly
  - [ ] Card displays properly
  - [ ] Tombstones grid adjusts (2 columns)
  - [ ] Stats cards stack
  - [ ] Moon and fog scale correctly

- [ ] **Tablet (768px)**
  - [ ] Form uses 2-column grid
  - [ ] Tombstones display 3 columns
  - [ ] Stats cards display in row
  - [ ] All text readable

- [ ] **Desktop (1440px)**
  - [ ] Max-width container centers content
  - [ ] Tombstones display 4 columns
  - [ ] Spacing is comfortable
  - [ ] No horizontal scroll

### Browser Testing

- [ ] **Chrome/Brave** (latest)
  - [ ] Full functionality works
  - [ ] html2canvas generates images
  - [ ] Animations smooth

- [ ] **Safari** (latest)
  - [ ] Gradients render correctly
  - [ ] Backdrop blur works
  - [ ] PNG download works

- [ ] **Firefox** (latest)
  - [ ] CSS animations work
  - [ ] Form inputs styled correctly
  - [ ] Image generation works

- [ ] **Mobile Safari (iOS)**
  - [ ] Touch interactions work
  - [ ] Share buttons work
  - [ ] Download works

- [ ] **Mobile Chrome (Android)**
  - [ ] All features functional
  - [ ] Performance acceptable

### Performance Testing

- [ ] **Lighthouse Scores** (aim for 90+)
  - [ ] Performance: ___
  - [ ] Accessibility: ___
  - [ ] Best Practices: ___
  - [ ] SEO: ___

- [ ] **Page Load**
  - [ ] First Contentful Paint < 1.5s
  - [ ] Time to Interactive < 3s
  - [ ] No layout shifts

- [ ] **Image Generation**
  - [ ] PNG generates in < 3 seconds
  - [ ] No memory leaks after multiple generations

### Accessibility Testing

- [ ] **Keyboard Navigation**
  - [ ] Can tab through all inputs
  - [ ] Can submit form with Enter
  - [ ] Can activate buttons with Space/Enter
  - [ ] Focus indicators visible

- [ ] **Screen Reader**
  - [ ] Input labels read correctly
  - [ ] Button purposes clear
  - [ ] Stats announced properly

- [ ] **Color Contrast**
  - [ ] Text readable on dark backgrounds
  - [ ] Meets WCAG AA standards

### SEO Testing

- [ ] **Meta Tags**
  - [ ] Title displays in browser tab
  - [ ] Meta description set
  - [ ] OG tags present
  - [ ] Twitter card tags present

- [ ] **Social Preview**
  - [ ] Test URL in Twitter Card Validator
  - [ ] Test URL in LinkedIn Post Inspector
  - [ ] OG image loads correctly

### Edge Cases

- [ ] **No subscriptions**
  - [ ] Alert shows when trying to generate empty graveyard
  - [ ] Demo button offers easy path

- [ ] **Single subscription**
  - [ ] Card generates correctly
  - [ ] Stats calculate properly
  - [ ] Layout doesn't break

- [ ] **Many subscriptions (20+)**
  - [ ] Grid handles overflow
  - [ ] Scroll works correctly
  - [ ] PNG generation doesn't fail
  - [ ] Performance acceptable

- [ ] **Large numbers**
  - [ ] $10,000+ displays correctly with commas
  - [ ] Graveyard score calculates correctly
  - [ ] No number overflow

- [ ] **Decimal prices**
  - [ ] $9.99, $15.50 calculate accurately
  - [ ] No floating point errors

- [ ] **Zero-cost subscriptions**
  - [ ] $0/month (like Clubhouse) displays correctly
  - [ ] Calculations don't break

### Security Testing

- [ ] **XSS Prevention**
  - [ ] Try injecting `<script>alert('xss')</script>` in name field
  - [ ] Should be sanitized/escaped

- [ ] **Input Validation**
  - [ ] Negative prices rejected
  - [ ] Non-numeric input in price field rejected
  - [ ] Very large numbers handled gracefully

## 🚀 Deployment Verification

After deploying to production:

- [ ] Production URL loads
- [ ] SSL certificate valid (HTTPS)
- [ ] All assets load correctly
- [ ] No console errors
- [ ] Google Analytics tracking (if configured)
- [ ] Social share preview works
- [ ] Download feature works on production

## 📊 Analytics to Monitor Post-Launch

- [ ] Page views
- [ ] "Generate" button clicks
- [ ] Download button clicks
- [ ] Share button clicks
- [ ] Premium CTA clicks
- [ ] Bounce rate
- [ ] Average time on page

## 🐛 Known Issues / TODOs

Document any issues discovered during testing:

- [ ] Issue 1: _____________
- [ ] Issue 2: _____________

## Sign-Off

Testing completed by: ________________  
Date: ________________  
Ready for launch: [ ] Yes [ ] No

---

**Pro tip:** Test on real devices, not just emulators. Mobile users behave differently!
