# Pirsch Analytics Landing Page

A modern, privacy-focused analytics landing page built with React, TypeScript, TailwindCSS v4, and Vite.

## Features

- 🎨 **Modern Design**: Clean, dark theme with green accents matching Pirsch's brand
- 📱 **Responsive**: Fully responsive design that works on all devices
- 🚀 **Fast**: Built with Vite for lightning-fast development and build times
- 🔒 **Privacy-First**: Showcases privacy-friendly analytics features
- ♿ **Accessible**: Built with accessibility best practices
- 🎯 **TypeScript**: Full type safety throughout the codebase

## Tech Stack

- **React 19** - Latest React with modern features
- **TypeScript** - Type-safe development
- **TailwindCSS v4** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server
- **Lucide React** - Beautiful, customizable icons

## Project Structure

```
src/
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx           # Hero section with main CTA
│   ├── Dashboard.tsx      # Analytics dashboard preview
│   ├── SetupSection.tsx   # "Set Up in Minutes" section
│   ├── InsightsSection.tsx # "Unlock Key Insights" section
│   ├── TestimonialsSection.tsx # Customer testimonials
│   ├── CTASection.tsx     # Final call-to-action
│   └── Footer.tsx         # Site footer
├── App.tsx               # Main app component
├── main.tsx             # App entry point
├── index.css           # Global styles and Tailwind imports
└── vite-env.d.ts       # Vite type definitions
```

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install --legacy-peer-deps
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Preview production build**:
   ```bash
   npm run preview
   ```

## Key Components

### Hero Section
- Compelling headline "See Beyond Clicks"
- Primary CTA button with hover effects
- Trust indicators (no cookies, GDPR compliant, open source)

### Dashboard Preview
- Interactive mock analytics dashboard
- Real-time data visualization
- Key metrics display (visitors, page views, session duration, bounce rate)
- Top pages, referrers, and countries breakdown

### Setup Section
- Simple 3-step setup process
- Code example with syntax highlighting
- Feature highlights with icons

### Insights Section
- Comprehensive analytics overview
- Interactive charts and data visualization
- Multiple data views and metrics

### Testimonials
- Customer testimonials with ratings
- Avatar placeholders for social proof
- Company statistics and trust indicators

### Call-to-Action
- Final conversion section
- Multiple CTA options
- Trust signals and guarantees

## Customization

The project uses TailwindCSS v4 with a custom color palette:

- **Primary Green**: `primary-600` (#16a34a)
- **Dark Grays**: Various shades for the dark theme
- **Custom Fonts**: Inter font family for modern typography

## Performance

- Optimized bundle size with Vite
- Lazy loading and code splitting ready
- Responsive images and efficient CSS
- Minimal JavaScript footprint

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Progressive enhancement for older browsers

## License

This project is created for demonstration purposes.
