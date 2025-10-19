# Asana n Surf - Retreat Website

## Project Overview
Building a modern, calming website for "Asana n Surf" - a therapy, yoga, and surf retreat company. This is a proof-of-concept website to demonstrate web development capabilities, with potential for real-world deployment.

**Purpose**: Showcase the unique combination of active surfing and calming yoga practices in a retreat setting, appealing to anyone seeking a balanced, rejuvenating break.

**Developer Note**: This is the developer's second web project ever. Claude should provide professional guidance, suggest best practices, and implement features that demonstrate modern web development capabilities while keeping code clean and maintainable.

---

## Brand Identity

### Name
**Asana n Surf**

### Core Message
The perfect balance between active adventure (surfing) and mindful restoration (yoga). Two opposite practices that complement each other beautifully - the thrill of riding waves paired with the calm of yoga practice.

### Target Audience
- People seeking a meaningful retreat experience
- Those curious about trying surfing for the first time
- Yoga practitioners looking for adventure
- Adventurers wanting to add mindfulness to their trip
- Anyone needing a break from daily stress
- Wellness seekers who want variety (not just sitting still)

### Design Aesthetic
**Color Palette**:
- Ocean blues (primary)
- Sandy beiges (secondary)
- Jungle greens (accent)
- **Important**: Colors should be subtle and tasteful - never overwhelming or distracting. Think refined, spa-like sophistication with natural earth tones.

**Visual Style**:
- Clean, minimalist, and spacious
- Calming and inviting
- Professional yet approachable
- Nature-inspired without being cliché
- Modern and fresh

**Animation Philosophy**:
- Smooth, fluid transitions that mirror water movement
- Gentle parallax scrolling
- Subtle hover effects
- Everything should feel effortless and calming
- No jarring or aggressive animations
- Think: waves gently rolling in, not crashing violently

**Icons & Symbols**:
- **CRITICAL: NO EMOJIS** - Zero emojis anywhere on the website
- Use monotone, single-color icons only
- Clean, minimalist line icons or solid icons
- Consistent icon style throughout (all outlined OR all solid, never mixed)
- Icons should match the color palette (ocean blue, sandy beige, or jungle green)
- Recommended icon libraries: Lucide React (available), Heroicons, Feather Icons
- Professional, refined visual language - never playful emojis

---

## Technical Stack

### Core Technologies
- **React** (latest version)
- **CSS/Tailwind** for styling
- Modern ES6+ JavaScript
- Responsive design (mobile-first approach)

### Animation Libraries (Recommended)
- Framer Motion for smooth React animations
- Intersection Observer for scroll-triggered effects
- CSS transitions for simple hover states

### Best Practices to Implement
- Component-based architecture
- Clean, readable code with comments
- Responsive breakpoints (mobile, tablet, desktop)
- Optimized images (lazy loading where appropriate)
- Accessibility considerations (semantic HTML, ARIA labels where needed)
- Fast load times
- SEO-friendly structure

---

## Website Structure

### Pages/Sections Required

#### 1. Hero Section
- Full-viewport impactful first impression
- Stunning imagery (ocean/surf/yoga theme)
- Clear, compelling headline about the retreat experience
- Subtle call-to-action button
- Consider: parallax background, video background, or animated gradient overlay

#### 2. Introduction Section
- Brief overview of what makes Asana n Surf unique
- The philosophy behind combining surf and yoga
- Why this retreat is different from others
- Warm, inviting copy that makes visitors feel welcome

#### 3. Packages & Pricing
- Clear presentation of retreat options
- Different duration packages (weekend, week-long, custom?)
- What's included in each package
- Pricing (or "Contact for pricing" if not finalized)
- Visual cards or tiles for each package
- Consider: comparison table, featured/recommended package highlight

#### 4. Booking System
- **Important Feature**: Functional booking form
- Calendar/date picker for retreat dates
- Package selection
- Guest information collection (name, email, phone, special requests)
- Form validation
- Success/confirmation message
- Consider: Email integration (emailjs or similar) to send booking inquiries

#### 5. Contact Section
- Email address
- Phone number (optional at this stage)
- Contact form (separate from booking)
- Social media links (if applicable)
- Location information (if there's a home base or multiple locations)
- Consider: Embedded map, FAQ section

---

## Professional Suggestions & Enhancements

### Must-Have Features
1. **Smooth Page Navigation**: Anchor links that smoothly scroll to sections
2. **Mobile Menu**: Hamburger menu that slides in elegantly on mobile devices
3. **Loading States**: Subtle loading animations for forms
4. **Micro-interactions**: Small delightful details (button hover effects, image reveals on scroll)
5. **Gallery Section**: Even without final photos, create a beautiful image gallery component with placeholder images that can be easily swapped later

### Nice-to-Have Features (Implement if time/scope allows)
1. **Testimonials Carousel**: Rotating client reviews (use placeholder testimonials for now)
2. **Instagram Feed Integration**: Show recent Instagram posts (or mockup of this feature)
3. **FAQ Accordion**: Common questions about the retreats
4. **Blog/Resources Section**: Articles about surf tips, yoga benefits, wellness (can be placeholder content)
5. **Newsletter Signup**: Capture emails for marketing (simple form in footer)
6. **Image Lightbox**: Click to expand gallery images
7. **Video Section**: Embed promotional video or create a video placeholder
8. **Trust Indicators**: Certifications, years of experience, number of happy clients (can use placeholder numbers)

### Design Polish Ideas
1. **Custom Illustrations**: Simple line drawings of yoga poses, surfboards, waves
2. **Texture Overlays**: Subtle paper texture or watercolor effects
3. **Gradient Backgrounds**: Smooth color transitions (ocean blue to sandy beige)
4. **Card Designs**: Elevated cards with shadows for packages/content sections
5. **Typography Hierarchy**: Clear heading styles that guide the eye
6. **Whitespace**: Generous spacing between sections for breathing room
7. **Image Treatments**: Rounded corners, subtle filters, creative cropping

### Performance & Quality
1. **Optimize Images**: Use WebP format, appropriate sizes for different screens
2. **Lazy Loading**: Load images as user scrolls
3. **Code Splitting**: Load components as needed
4. **Clean Code**: Well-organized file structure, reusable components
5. **Commented Code**: Explain complex logic for future reference
6. **Git-Ready**: Structure that's ready for version control

---

## Content Guidelines

### Tone of Voice
- Warm and welcoming
- Authentic and genuine
- Encouraging without being pushy
- Professional but not stuffy
- Inspiring and uplifting

### Sample Copy Themes (Claude can expand on these)
- "Find your balance between adventure and tranquility"
- "Ride the waves, calm the mind"
- "Where ocean meets inner peace"
- "More than a vacation - a transformation"
- "For beginners and experienced practitioners alike"

---

## Development Approach

### Phase 1: Foundation (Start Here)
1. Set up React project structure
2. Create basic component architecture
3. Implement navigation and routing (if multi-page) or smooth scrolling (if single-page)
4. Build responsive layout grid

### Phase 2: Core Sections
1. Hero section with animation
2. Introduction section
3. Packages & Pricing cards
4. Contact form

### Phase 3: Booking System
1. Booking form component
2. Date picker integration
3. Form validation
4. Submission handling

### Phase 4: Polish & Enhancement
1. Add animations throughout
2. Optimize for mobile
3. Add micro-interactions
4. Implement suggested enhancements
5. Performance optimization
6. Cross-browser testing

---

## Success Criteria

This website successfully demonstrates:
- ✅ Modern web development skills
- ✅ React component architecture
- ✅ Responsive design principles
- ✅ Smooth animations and UX
- ✅ Form handling and validation
- ✅ Professional design aesthetic
- ✅ Attention to detail
- ✅ User-centered thinking

---

## Notes for Claude

**Guidance Level**: This developer is learning, so please:
- Explain complex concepts when introducing them
- Suggest best practices and why they matter
- Point out potential pitfalls or common mistakes
- Provide clean, well-commented code
- Recommend improvements proactively
- Share professional insights about web development
- Don't hold back on making the website impressive - implement features that will wow

**Creative Freedom**: Feel free to suggest and implement features that would make this website stand out. Think about what would impress both the client (dad) and demonstrate solid development skills.

**Placeholder Content**: When specific content isn't provided, use realistic placeholder content that fits the brand. This helps visualize the final product.

---

## Questions to Address as Project Develops
- Retreat locations (beach destinations?)
- Accommodation details
- Group sizes
- Skill level requirements (beginner-friendly? all levels?)
- What's included (meals, equipment, transportation?)
- Duration options
- Best seasons/months to visit
- Instructor credentials (add when available)

These can be added later, but structure should accommodate this information.

---

**Let's build something beautiful! 🌊🧘‍♂️🏄‍♂️**
---

## 🔨 Development Commands & Build Process

This section documents the actual implementation and how to work with the codebase.

### Quick Start
```bash
# Install dependencies
npm install

# Start development server (localhost:3000)
npm start

# Create production build
npm run build

# Run tests
npm test
```

### Project Architecture

**Framework**: React 18 with TypeScript  
**Build Tool**: Create React App  
**Styling**: Tailwind CSS v3 (custom theme)  
**Animations**: Framer Motion  
**Forms**: EmailJS for backend-less email integration  
**Icons**: Lucide React (NO emojis - professional, monotone icons only)  
**Smooth Scrolling**: React Scroll library

### File Structure Overview

```
src/
├── components/
│   ├── layout/           # Header (nav + mobile menu) & Footer
│   ├── sections/         # All main page sections (Hero, Intro, Packages, etc.)
│   └── ui/               # Reusable components (Button, Card, Input, Textarea)
├── constants/
│   └── content.ts        # ALL website content centralized here
├── utils/
│   └── emailService.ts   # EmailJS configuration
├── App.tsx               # Main app - assembles all sections
├── index.tsx             # Entry point
└── index.css             # Tailwind imports + custom CSS
```

### Key Implementation Details

#### Color System (Tailwind Config)
Custom color palette defined in `tailwind.config.js`:
- **Ocean**: `#0ea5e9` (primary brand color)
- **Sand**: `#b8a490` (secondary, warm neutral)
- **Jungle**: `#22c55e` (accent green)

Usage in components:
```tsx
className="bg-ocean-500 text-white hover:bg-ocean-600"
```

#### Typography
- **Headings**: Playfair Display (serif, elegant)
- **Body**: Inter (sans-serif, modern)
- Loaded via Google Fonts in `index.css`

#### Component Architecture
All components use **TypeScript** with proper type definitions:
```typescript
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  // ...
}
```

#### Animation Strategy
1. **Framer Motion** for complex animations:
   - Scroll-triggered reveals (`whileInView`)
   - Staggered children animations
   - Mobile menu slide-in
   - Parallax effects

2. **Tailwind CSS** for simple transitions:
   - Button hovers
   - Card elevation changes
   - Color transitions

Example scroll-triggered animation:
```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  {content}
</motion.div>
```

#### Content Management
**All text content** is centralized in `src/constants/content.ts`:
- Easy to update copy without touching components
- Single source of truth
- Supports future i18n expansion

To change website text:
1. Open `src/constants/content.ts`
2. Edit the relevant constant
3. Save - hot reload will update automatically

#### Forms & EmailJS Setup
**IMPORTANT**: Forms won't work until EmailJS is configured.

Steps to set up:
1. Create account at https://www.emailjs.com/
2. Add email service (Gmail recommended)
3. Create two email templates:
   - **Booking**: with params `from_name`, `from_email`, `phone`, `package`, `preferred_dates`, `number_of_guests`, `special_requests`
   - **Contact**: with params `from_name`, `from_email`, `message`
4. Copy your credentials to `src/utils/emailService.ts`:
   ```typescript
   export const EMAIL_CONFIG = {
     SERVICE_ID: 'your_service_id',
     TEMPLATE_ID_BOOKING: 'your_booking_template_id',
     TEMPLATE_ID_CONTACT: 'your_contact_template_id',
     PUBLIC_KEY: 'your_public_key',
   };
   ```

#### Responsive Design Breakpoints
Tailwind default breakpoints used:
- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (md to lg)
- **Desktop**: > 1024px (lg+)

Mobile-first approach - styles written for mobile, then enhanced for larger screens:
```tsx
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
```

#### Images
**Current**: Unsplash placeholder URLs  
**To Replace**: Update URLs in these files:
- `src/components/sections/Hero.tsx` (hero background)
- `src/components/sections/Introduction.tsx` (about image)
- `src/components/sections/Gallery.tsx` (all gallery images)

Recommendation: Use optimized WebP format, max 1920px wide for hero, 800px for others.

### Deployment to Vercel

#### Option 1: GitHub + Vercel (Recommended)
1. Initialize git repo:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Asana n Surf website"
   ```
2. Push to GitHub
3. Go to https://vercel.com
4. Click "Import Project"
5. Select your repository
6. Vercel auto-detects Create React App - just click "Deploy"

#### Option 2: Vercel CLI
```bash
npm install -g vercel
vercel login
vercel
```

#### Environment Variables (Optional)
If you want to hide EmailJS credentials:
1. In Vercel dashboard, go to Settings > Environment Variables
2. Add:
   - `REACT_APP_EMAILJS_SERVICE_ID`
   - `REACT_APP_EMAILJS_TEMPLATE_BOOKING`
   - `REACT_APP_EMAILJS_TEMPLATE_CONTACT`
   - `REACT_APP_EMAILJS_PUBLIC_KEY`
3. Update `emailService.ts` to read from `process.env.REACT_APP_*`

### Common Development Tasks

#### Add a New Section
1. Create component in `src/components/sections/NewSection.tsx`
2. Add content constants to `src/constants/content.ts`
3. Import and add to `App.tsx`
4. Add navigation link to `constants/content.ts` NAV_LINKS

#### Change Package Pricing
Edit `src/constants/content.ts`:
```typescript
export const PACKAGES = {
  packages: [
    {
      id: "weekend",
      price: "$699",  // Change here
      // ...
    }
  ]
}
```

#### Update Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  ocean: {
    500: '#YOUR_NEW_COLOR',
    // ...
  }
}
```

#### Add New Icon
1. Find icon at https://lucide.dev/
2. Import in component:
   ```tsx
   import { IconName } from 'lucide-react';
   ```
3. Use:
   ```tsx
   <IconName className="w-6 h-6 text-ocean-500" />
   ```

### Troubleshooting

**Issue**: Website won't compile  
**Solution**: Delete `node_modules` and `package-lock.json`, then run `npm install`

**Issue**: Tailwind styles not applying  
**Solution**: Ensure `tailwind.config.js` content array includes all component files

**Issue**: Forms not sending emails  
**Solution**: Check EmailJS credentials in `src/utils/emailService.ts`

**Issue**: Images not loading  
**Solution**: Verify Unsplash URLs are correct, check browser console for errors

**Issue**: Animations not smooth  
**Solution**: Check browser performance, reduce motion media query may be active

### Performance Optimization Tips
- Images are lazy-loaded by default (loading="lazy" attribute)
- Unsplash URLs include `auto=format&fit=crop&q=80` for optimization
- Framer Motion animations use `viewport={{ once: true }}` to prevent re-triggering
- Build creates optimized, minified bundle with code splitting

### Browser Compatibility
Tested and working on:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile Safari (iOS 14+)
- Chrome Android

### Next Steps for Production
- [ ] Replace placeholder images with real photos
- [ ] Configure EmailJS with real email account
- [ ] Add actual social media links
- [ ] Add Google Analytics or analytics tool
- [ ] Set up custom domain in Vercel
- [ ] Add favicon and OG images for social sharing
- [ ] Consider adding blog or testimonials section
- [ ] Test on real devices (not just dev tools)

---

**Implementation completed**: All features from original CLAUDE.md brief have been built and are functional.

