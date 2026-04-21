export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  code?: string;
}

export interface Component {
  id: string;
  name: string;
  description: string;
  category: string;
  code: string;
  preview?: string;
}

export interface Stat {
  label: string;
  value: string;
  description: string;
}

// Navigation items
export const navigationItems = [
  { name: 'Docs', href: '#docs' },
  { name: 'Components', href: '#components' },
  { name: 'Templates', href: '#templates' },
  { name: 'Examples', href: '#examples' },
  { name: 'Resources', href: '#resources' },
];

// Hero code example
export const heroCodeExample = `<div class="bg-white">
  <div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Rapidly build modern websites without ever leaving your HTML.
      </h2>
      <p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
        A utility-first CSS framework packed with classes that can be composed 
        to build any design, directly in your markup.
      </p>
      <div class="mt-10 flex items-center justify-center gap-x-6">
        <a href="#" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
          Get started
        </a>
      </div>
    </div>
  </div>
</div>`;

// Features data
export const features: Feature[] = [
  {
    id: 'utility-first',
    title: 'Utility-First Fundamentals',
    description: 'Build complex components from a constrained set of primitive utilities without writing custom CSS.',
    icon: 'Zap',
    code: `<div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
  <div class="shrink-0">
    <img class="h-12 w-12" src="/img/logo.svg" alt="Logo">
  </div>
  <div>
    <div class="text-xl font-medium text-black">ChitChat</div>
    <p class="text-slate-500">You have a new message!</p>
  </div>
</div>`
  },
  {
    id: 'responsive-design',
    title: 'Responsive to the Core',
    description: 'Responsive variants make it easy to build adaptive interfaces without custom media queries.',
    icon: 'Smartphone',
    code: `<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div class="bg-white p-6 rounded-lg shadow">
    <h3 class="text-lg font-semibold mb-2">Card 1</h3>
    <p class="text-gray-600">Content goes here...</p>
  </div>
  <!-- More cards... -->
</div>`
  },
  {
    id: 'component-driven',
    title: 'Component-Driven Development',
    description: 'Extract repeating patterns into reusable components to keep your templates maintainable.',
    icon: 'Package',
    code: `// Button component
const Button = ({ variant, children, ...props }) => {
  const baseClasses = 'px-4 py-2 rounded font-medium transition-colors'
  const variants = {
    primary: 'bg-blue-500 hover:bg-blue-600 text-white',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-900'
  }
  
  return (
    <button 
      className={\`\${baseClasses} \${variants[variant]}\`}
      {...props}
    >
      {children}
    </button>
  )
}`
  },
  {
    id: 'dark-mode',
    title: 'Dark Mode Built-In',
    description: 'Toggle between light and dark themes with the built-in dark mode variant.',
    icon: 'Moon',
    code: `<div class="bg-white dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
  <div>
    <span class="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
      <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    </span>
  </div>
  <h3 class="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
    Writes Upside-Down
  </h3>
  <p class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
    The Zero Gravity Pen can be used to write in any orientation, including upside-down.
  </p>
</div>`
  },
  {
    id: 'performance',
    title: 'Performance Focused',
    description: 'Automatically remove unused CSS and deliver the smallest possible production build.',
    icon: 'Gauge',
    code: `// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`
  },
  {
    id: 'customizable',
    title: 'Completely Customizable',
    description: 'Customize the framework to match your brand using configuration files and CSS variables.',
    icon: 'Settings',
    code: `// Custom theme configuration
module.exports = {
  theme: {
    extend: {
      colors: {
        'brand-blue': '#1fb6ff',
        'brand-purple': '#7e3af2',
        'brand-pink': '#fd49a0',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui'],
        'serif': ['Georgia', 'serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
    }
  }
}`
  }
];

// Component examples
export const componentExamples: Component[] = [
  {
    id: 'button',
    name: 'Button',
    description: 'Interactive button with multiple variants and states',
    category: 'Form Elements',
    code: `<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Button
</button>

<button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
  Button
</button>`
  },
  {
    id: 'card',
    name: 'Card',
    description: 'Flexible content container with header, body, and footer',
    category: 'Layout',
    code: `<div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" src="/img/card-top.jpg" alt="Card image">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
  </div>
</div>`
  },
  {
    id: 'navigation',
    name: 'Navigation',
    description: 'Responsive navigation bar with mobile menu',
    category: 'Navigation',
    code: `<nav class="bg-gray-800">
  <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div class="relative flex h-16 items-center justify-between">
      <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div class="flex flex-shrink-0 items-center">
          <img class="h-8 w-auto" src="logo.svg" alt="Your Company">
        </div>
        <div class="hidden sm:ml-6 sm:block">
          <div class="flex space-x-4">
            <a href="#" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Dashboard</a>
            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Team</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>`
  },
  {
    id: 'form',
    name: 'Form',
    description: 'Complete form with validation states and layouts',
    category: 'Form Elements',
    code: `<form class="w-full max-w-lg">
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        First Name
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Jane">
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        Last Name
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Doe">
    </div>
  </div>
</form>`
  }
];

// Performance stats
export const performanceStats: Stat[] = [
  {
    label: 'Bundle Size',
    value: '<10KB',
    description: 'Compressed CSS file size in production'
  },
  {
    label: 'Build Time',
    value: '<1s',
    description: 'Average CSS compilation time'
  },
  {
    label: 'Utilities',
    value: '500+',
    description: 'Built-in utility classes available'
  },
  {
    label: 'GitHub Stars',
    value: '75K+',
    description: 'Community members worldwide'
  }
];

// Getting started steps
export const gettingStartedSteps = [
  {
    step: '1',
    title: 'Install Tailwind CSS',
    description: 'Install tailwindcss via npm, and create your tailwind.config.js file.',
    code: `npm install -D tailwindcss
npx tailwindcss init`
  },
  {
    step: '2',
    title: 'Configure your template paths',
    description: 'Add the paths to all of your template files in your tailwind.config.js file.',
    code: `/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}`
  },
  {
    step: '3',
    title: 'Add the Tailwind directives',
    description: 'Add the @tailwind directives to your main CSS file.',
    code: `@tailwind base;
@tailwind components;
@tailwind utilities;`
  },
  {
    step: '4',
    title: 'Start using Tailwind',
    description: 'Start using Tailwind\'s utility classes to style your content.',
    code: `<h1 class="text-3xl font-bold underline">
  Hello world!
</h1>`
  }
];
