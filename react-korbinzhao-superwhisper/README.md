# SuperWhisper Landing Page Template

A modern, AI-focused landing page template built with React 19, TypeScript, and TailwindCSS v4. Perfect for SaaS applications, AI tools, and productivity software.

## 🌟 Features

- **Modern Design**: Clean, professional design with yellow accent color
- **Fully Responsive**: Mobile-first design that works on all devices
- **AI-Focused**: Perfect for AI tools, transcription services, and productivity apps
- **Interactive Elements**: Expandable FAQ section, hover effects
- **TypeScript**: Full type safety throughout the codebase
- **TailwindCSS v4**: Latest utility-first CSS framework

## 🎨 Design Highlights

- **Hero Section**: Eye-catching yellow background with call-to-action
- **Features Showcase**: Grid layout with icons and descriptions
- **Pricing Plans**: Three-tier pricing with popular plan highlighting
- **FAQ Section**: Expandable/collapsible frequently asked questions
- **CTA Section**: Strong call-to-action before footer
- **Clean Footer**: Simple footer with social links and navigation

## 🚀 Tech Stack

- **React 19** - Latest React with modern features
- **TypeScript** - Type-safe development
- **TailwindCSS v4** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server

## 📱 Components

- `Header.tsx` - Navigation header with mobile menu
- `Hero.tsx` - Main hero section with CTA
- `FeaturesSection.tsx` - Feature showcase with icons
- `PricingSection.tsx` - Three-tier pricing plans
- `CTASection.tsx` - Call-to-action section
- `FAQSection.tsx` - Interactive FAQ accordion
- `Footer.tsx` - Site footer with links

## 🎯 Perfect For

- AI and ML applications
- SaaS landing pages
- Productivity tools
- Transcription services
- Voice-to-text applications
- Developer tools
- B2B software

## 🛠️ Getting Started

1. **Install dependencies**:
   ```bash
   npm install
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

## 🎨 Customization

### Colors
The template uses a yellow color scheme which can be easily customized in `tailwind.config.js`:

```javascript
colors: {
  yellow: {
    400: '#FBBF24',
    500: '#F59E0B',
  },
}
```

### Content
- Update company name and branding in `Header.tsx` and `Footer.tsx`
- Modify hero content in `Hero.tsx`
- Customize features in `FeaturesSection.tsx`
- Update pricing plans in `PricingSection.tsx`
- Edit FAQ content in `FAQSection.tsx`

### Styling
- All styles use TailwindCSS utilities
- Custom styles can be added to `src/index.css`
- Component-specific styles are inline with Tailwind classes

## 📋 License

This template is part of the Vontext Free Templates collection and is available under the MIT License.