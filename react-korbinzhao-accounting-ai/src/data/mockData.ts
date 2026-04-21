export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
  rating: number;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export interface MetricData {
  label: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
}

// Navigation items
export const navigationItems = [
  { name: 'Features', href: '#features' },
  { name: 'How it Works', href: '#how-it-works' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Resources', href: '#resources' },
  { name: 'Support', href: '#support' },
];

// Main features
export const features: Feature[] = [
  {
    id: 'ai-automation',
    title: 'AI-Powered Automation',
    description: 'Automatically categorize transactions, detect patterns, and generate insights using advanced machine learning algorithms.',
    icon: 'Brain',
    color: 'from-primary-500 to-secondary-500'
  },
  {
    id: 'smart-reconciliation',
    title: 'Smart Reconciliation',
    description: 'Intelligent bank reconciliation that matches transactions automatically and flags discrepancies for review.',
    icon: 'CheckCircle',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'real-time-reporting',
    title: 'Real-time Financial Reports',
    description: 'Generate comprehensive financial reports, P&L statements, and cash flow analysis in real-time.',
    icon: 'BarChart3',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'tax-optimization',
    title: 'Tax Optimization',
    description: 'AI-driven tax preparation and optimization suggestions to maximize deductions and ensure compliance.',
    icon: 'Calculator',
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 'invoice-management',
    title: 'Intelligent Invoicing',
    description: 'Create, send, and track invoices with automated follow-ups and payment reminders.',
    icon: 'FileText',
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 'expense-tracking',
    title: 'Smart Expense Tracking',
    description: 'Capture and categorize expenses instantly with receipt scanning and automatic data extraction.',
    icon: 'CreditCard',
    color: 'from-indigo-500 to-purple-500'
  }
];

// Customer testimonials
export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    role: 'Senior Accountant',
    company: 'TechStart Inc.',
    content: 'AI Meets Accounting has revolutionized our financial processes. What used to take hours now takes minutes, and the accuracy is incredible.',
    rating: 5
  },
  {
    id: '2',
    name: 'Michael Rodriguez',
    role: 'CFO',
    company: 'GrowthCorp',
    content: 'The real-time insights and automated reconciliation have given us unprecedented visibility into our finances. Highly recommended!',
    rating: 5
  },
  {
    id: '3',
    name: 'Emily Watson',
    role: 'Small Business Owner',
    company: 'Creative Solutions',
    content: 'As a non-accountant, this tool has been a game-changer. The AI handles the complex stuff while I focus on growing my business.',
    rating: 5
  },
  {
    id: '4',
    name: 'David Kim',
    role: 'Finance Director',
    company: 'InnovateTech',
    content: 'The tax optimization features alone have saved us thousands. The ROI on this investment was immediate.',
    rating: 5
  }
];

// Pricing plans
export const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: 29,
    period: 'month',
    description: 'Perfect for freelancers and small businesses',
    features: [
      'Up to 100 transactions/month',
      'Basic AI categorization',
      'Standard financial reports',
      'Email support',
      'Mobile app access'
    ]
  },
  {
    id: 'professional',
    name: 'Professional',
    price: 79,
    period: 'month',
    description: 'Ideal for growing businesses and accountants',
    features: [
      'Up to 1,000 transactions/month',
      'Advanced AI automation',
      'Real-time reporting',
      'Tax optimization',
      'Priority support',
      'API access',
      'Custom integrations'
    ],
    popular: true
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 199,
    period: 'month',
    description: 'For large businesses and accounting firms',
    features: [
      'Unlimited transactions',
      'Full AI suite',
      'White-label options',
      'Dedicated account manager',
      'Custom workflows',
      'Advanced security',
      'Multi-company management'
    ]
  }
];

// Financial metrics data
export const financialMetrics: MetricData[] = [
  {
    label: 'Monthly Revenue',
    value: '$127,450',
    change: '+12.5%',
    trend: 'up'
  },
  {
    label: 'Total Expenses',
    value: '$89,230',
    change: '-8.2%',
    trend: 'down'
  },
  {
    label: 'Net Profit',
    value: '$38,220',
    change: '+24.1%',
    trend: 'up'
  },
  {
    label: 'Cash Flow',
    value: '$156,890',
    change: '+15.7%',
    trend: 'up'
  }
];

// Recent transactions data
export const recentTransactions = [
  { id: 1, date: '2024-09-05', description: 'Software License Renewal', amount: -2450.00, category: 'Software & Tools', status: 'completed' },
  { id: 2, date: '2024-09-04', description: 'Client Payment - ABC Corp', amount: 8750.00, category: 'Revenue', status: 'completed' },
  { id: 3, date: '2024-09-04', description: 'Office Supplies', amount: -234.50, category: 'Office Expenses', status: 'completed' },
  { id: 4, date: '2024-09-03', description: 'Marketing Campaign', amount: -1500.00, category: 'Marketing', status: 'pending' },
  { id: 5, date: '2024-09-03', description: 'Consulting Services', amount: 3200.00, category: 'Revenue', status: 'completed' },
];

// Chart data for analytics
export const monthlyRevenueData = [
  { month: 'Jan', revenue: 85000, expenses: 65000 },
  { month: 'Feb', revenue: 92000, expenses: 68000 },
  { month: 'Mar', revenue: 98000, expenses: 72000 },
  { month: 'Apr', revenue: 105000, expenses: 75000 },
  { month: 'May', revenue: 112000, expenses: 78000 },
  { month: 'Jun', revenue: 127450, expenses: 89230 },
];

export const expenseBreakdown = [
  { category: 'Payroll', amount: 45000, percentage: 50.5 },
  { category: 'Marketing', amount: 18000, percentage: 20.2 },
  { category: 'Operations', amount: 12000, percentage: 13.4 },
  { category: 'Software', amount: 8500, percentage: 9.5 },
  { category: 'Office', amount: 5730, percentage: 6.4 },
];
