# Figma Plugins Landing Page Template

A modern, vibrant landing page template inspired by [‹div›RIOTS](https://divriots.com/), perfect for showcasing Figma plugins, design tools, or SaaS products. Built with React 19, TypeScript, and TailwindCSS v4.

## 🌟 Features

- **Modern Design**: Vibrant gradients and clean layout inspired by divriots.com
- **Plugin Showcase**: Organized plugin categories with stats and descriptions
- **Interactive Elements**: Hover effects, animations, and search functionality
- **Responsive Design**: Mobile-first approach with perfect responsiveness
- **TypeScript**: Full type safety throughout the codebase
- **TailwindCSS v4**: Latest utility-first CSS framework with custom gradients

## 🎨 Design Highlights

- **Hero Section**: Bold gradient text and floating plugin icons
- **Plugin Categories**: Superstar plugins, import tools, and AI-powered features
- **Search & Filter**: Interactive search bar with category filters
- **Stats Display**: User count and plugin metrics
- **Newsletter Signup**: Engaging subscription section with gradient background
- **Social Footer**: Comprehensive footer with social links

## 🚀 Tech Stack

- **React 19** - Latest React with modern features
- **TypeScript** - Type-safe development
- **TailwindCSS v4** - Utility-first CSS with custom configurations
- **Vite** - Fast build tool and dev server
- **Lucide React** - Beautiful, customizable icons

## 📱 Components

- `Header.tsx` - Navigation with ‹div›RIOTS branding and menu
- `Hero.tsx` - Hero section with animated background and search
- `PluginsSection.tsx` - Comprehensive plugin showcase with categories
- `Newsletter.tsx` - Email subscription with gradient design
- `Footer.tsx` - Detailed footer with social links and contact info

## 🎯 Perfect For

- Figma plugin marketplaces
- Design tool showcases
- SaaS plugin platforms
- Developer tool directories
- Creative software catalogs
- Design system libraries

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
The template uses a blue-purple gradient theme:

```javascript
colors: {
  primary: {
    500: '#0ea5e9', // Blue
    600: '#0284c7',
  },
  purple: {
    500: '#a855f7', // Purple
    600: '#9333ea',
  }
}
```

### Plugin Data
Update plugin information in `PluginsSection.tsx`:

```javascript
const superstarPlugins = [
  {
    name: 'your.plugin.name',
    description: 'Your plugin description',
    users: 'X users',
    icon: <YourIcon className="h-6 w-6" />,
    gradient: 'from-blue-500 to-blue-600',
  },
  // ... more plugins
];
```

### Animations
The template includes custom animations:
- `animate-gradient` - For gradient backgrounds
- `animate-float` - For floating plugin icons
- Plugin card hover effects with transform and shadows

### Content
- Update branding in `Header.tsx` and `Footer.tsx`
- Modify hero content in `Hero.tsx`
- Customize plugin categories in `PluginsSection.tsx`
- Update contact information in `Footer.tsx`

## 🌈 Plugin Categories

### Superstar Plugins ⭐
Featured plugins with user statistics and prominent display

### Import Tools 📥
File import capabilities (PDF, PSD, AI, Office files, etc.)

### AI-Powered Features 🤖
Advanced AI tools for image editing and enhancement

## 🎭 Visual Elements

- **Gradient Text**: Eye-catching text with blue-purple gradients
- **Plugin Cards**: Interactive cards with hover effects
- **Floating Icons**: Animated background elements
- **Badge System**: User count and feature badges
- **Custom Borders**: Gradient border components

## 📊 Stats Integration

Easy-to-update statistics display:
- Plugin count
- User metrics
- Download numbers
- Community size

## 🔗 Social Integration

Built-in social media links:
- Discord community
- Twitter/X
- LinkedIn
- GitHub
- RSS feeds
- Email contact

## 📋 License

This template is part of the Vontext Free Templates collection and is available under the MIT License.