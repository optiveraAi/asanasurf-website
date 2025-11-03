# Asana n Surf - Surf & Yoga Retreat Website

A modern, responsive single-page application built for Asana n Surf - a surf and yoga retreat company. This website combines beautiful design with smooth animations to create an engaging user experience.

![Ocean blues, sandy beiges, jungle greens color palette]

## 🌊 Project Overview

**Purpose**: Showcase the unique combination of active surfing and calming yoga practices in a retreat setting. The website serves as both a portfolio piece and a potential real-world deployment.

**Live URL**: [To be deployed on Vercel]

## 🎨 Design Philosophy

- **Color Palette**: Ocean blues (#0ea5e9), sandy beiges (#b8a490), jungle greens (#22c55e)
- **Typography**: Playfair Display (serif) for headings, Inter (sans-serif) for body
- **Icons**: Lucide React (clean, minimal, monotone - NO emojis)
- **Animations**: Smooth, fluid transitions mimicking water movement
- **Aesthetic**: Calming, professional, spa-like sophistication

## ✨ Features

### Core Functionality
- **Single-Page Application** with smooth scrolling navigation
- **Responsive Design** - mobile-first approach (works on all devices)
- **Fixed Navigation Header** with mobile hamburger menu
- **Parallax Hero Section** with stunning ocean imagery
- **Email Integration** via EmailJS for booking and contact forms
- **Form Validation** with loading states and success/error feedback
- **Lazy Loading Images** for optimized performance
- **SEO-Friendly** with proper meta tags and semantic HTML

### Sections
1. **Hero** - Full-viewport with parallax effect and CTA
2. **Introduction** - Brand philosophy with benefits grid
3. **Packages** - Three pricing tiers with detailed features
4. **Gallery** - Responsive image grid with hover effects
5. **Booking Form** - Complete booking request system
6. **Contact** - Contact information and general inquiry form

### Animations
- Scroll-triggered fade-in effects (Framer Motion)
- Staggered animations for lists and grids
- Smooth hover transitions on cards and buttons
- Parallax scrolling on hero background
- Mobile menu slide-in animation

## 🛠 Tech Stack

- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS v3
- **Animations**: Framer Motion
- **Smooth Scrolling**: React Scroll
- **Icons**: Lucide React
- **Email Service**: EmailJS
- **Build Tool**: Create React App
- **Deployment**: Vercel

## 📦 Project Structure

```
big-blue-website/
├── public/
│   ├── index.html              # HTML template with meta tags
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx      # Navigation with mobile menu
│   │   │   └── Footer.tsx      # Footer with social links
│   │   ├── sections/
│   │   │   ├── Hero.tsx        # Hero with parallax
│   │   │   ├── Introduction.tsx # About section
│   │   │   ├── Packages.tsx    # Pricing packages
│   │   │   ├── Gallery.tsx     # Image gallery
│   │   │   ├── Booking.tsx     # Booking form
│   │   │   └── Contact.tsx     # Contact section
│   │   └── ui/
│   │       ├── Button.tsx      # Reusable button component
│   │       ├── Card.tsx        # Reusable card component
│   │       ├── Input.tsx       # Form input component
│   │       └── Textarea.tsx    # Textarea component
│   ├── constants/
│   │   └── content.ts         # All website content centralized
│   ├── utils/
│   │   └── emailService.ts    # EmailJS configuration
│   ├── App.tsx                # Main app component
│   ├── index.tsx              # Entry point
│   └── index.css              # Global styles with Tailwind
├── tailwind.config.js         # Tailwind custom theme
├── postcss.config.js          # PostCSS configuration
├── tsconfig.json              # TypeScript configuration
├── package.json               # Dependencies
├── vercel.json                # Vercel deployment config
├── CLAUDE.md                  # Project brief and guidance
└── README.md                  # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone or download the project
2. Install dependencies:
```bash
npm install
```

3. Set up EmailJS (optional for forms to work):
   - Create a free account at [EmailJS.com](https://www.emailjs.com/)
   - Create email service and templates
   - Update credentials in `src/utils/emailService.ts`

### Development

Start the development server:
```bash
npm start
```

The website will open at `http://localhost:3000`

### Building for Production

Create an optimized production build:
```bash
npm run build
```

The build folder will contain the optimized static files.

## 📧 EmailJS Setup

To enable the booking and contact forms:

1. **Sign up** at [EmailJS](https://www.emailjs.com/)
2. **Add Email Service** (Gmail, Outlook, etc.)
3. **Create Email Templates**:
   - Booking template with variables: `from_name`, `from_email`, `phone`, `package`, `preferred_dates`, `number_of_guests`, `special_requests`
   - Contact template with variables: `from_name`, `from_email`, `message`
4. **Get your credentials**:
   - Service ID
   - Template IDs (booking & contact)
   - Public Key
5. **Update** `src/utils/emailService.ts` with your credentials

## 🎨 Customization

### Content
All text content is centralized in `src/constants/content.ts`. Edit this file to change:
- Navigation links
- Hero headlines
- Package details and pricing
- Contact information
- Social media links

### Colors
Update the color scheme in `tailwind.config.js`:
```javascript
colors: {
  ocean: { ... },
  sand: { ... },
  jungle: { ... }
}
```

### Images
Replace Unsplash URLs in components with your own images:
- Hero: `src/components/sections/Hero.tsx`
- Introduction: `src/components/sections/Introduction.tsx`
- Gallery: `src/components/sections/Gallery.tsx`

## 🌐 Deployment (Vercel)

### Method 1: GitHub Integration (Recommended)
1. Push code to GitHub repository
2. Go to [Vercel.com](https://vercel.com/)
3. Import your repository
4. Vercel will auto-detect Create React App settings
5. Deploy!

### Method 2: Vercel CLI
```bash
npm install -g vercel
vercel login
vercel
```

### Environment Variables (Optional)
If you want to keep EmailJS credentials private, add them as environment variables in Vercel:
- `REACT_APP_EMAILJS_SERVICE_ID`
- `REACT_APP_EMAILJS_TEMPLATE_BOOKING`
- `REACT_APP_EMAILJS_TEMPLATE_CONTACT`
- `REACT_APP_EMAILJS_PUBLIC_KEY`

## 📱 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Android)

## 🐛 Known Issues

- EmailJS forms will show errors until credentials are configured
- Some deprecation warnings from webpack (doesn't affect functionality)

### Development Dependency Vulnerabilities

**Status**: 9 npm audit vulnerabilities (3 moderate, 6 high) - Last checked: Nov 2, 2025

**Details**:
- All vulnerabilities are in `react-scripts` v5.0.1 dependencies (webpack-dev-server, nth-check, postcss)
- These are **development-only** dependencies - not included in production build
- Running `npm audit fix --force` would break the application (tries to install react-scripts@0.0.0)
- Production build is unaffected and secure

**Risk Assessment**:
- Production: ✅ VERY LOW (vulnerabilities not present in deployed bundle)
- Development: ⚠️ LOW-MEDIUM (only exploitable if visiting malicious sites during `npm start`)

**Resolution Plan**:
- Option 1: Accept risk for MVP (recommended for now)
- Option 2: Add npm overrides for partial fix
- Option 3: Migrate from Create React App to Vite (long-term solution)

**Note**: Create React App is in maintenance mode. Future projects should consider using Vite.

## 📝 License

This project is for educational and portfolio purposes.

## 👏 Acknowledgments

- Images from [Unsplash](https://unsplash.com/)
- Icons from [Lucide](https://lucide.dev/)
- Inspired by modern retreat and wellness websites

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**
