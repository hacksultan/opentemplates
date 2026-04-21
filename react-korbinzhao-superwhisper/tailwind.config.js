/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: {
          400: '#FBBF24',
          500: '#F59E0B',
        },
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
        green: {
          400: '#34D399',
          500: '#10B981',
          600: '#059669',
        },
        blue: {
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
        }
      },
    },
  },
  plugins: [],
}
