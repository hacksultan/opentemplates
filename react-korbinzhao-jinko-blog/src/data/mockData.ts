// Mock data for Jinko blog

export interface Author {
  id: string;
  name: string;
  role: string;
  avatar: string;
}

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: Author;
  publishedAt: string;
  readTime: number;
  views: number;
  comments: number;
  category: string;
  image: string;
  tags: string[];
}

export const authors: Author[] = [
  {
    id: "1",
    name: "William Lewis",
    role: "Editor & Author",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face"
  },
  {
    id: "2", 
    name: "Laura Dallas",
    role: "Guest Author",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face"
  }
];

export const categories = [
  { id: "lifestyle", name: "Lifestyle", color: "bg-purple-100 text-purple-700" },
  { id: "beauty", name: "Beauty", color: "bg-pink-100 text-pink-700" },
  { id: "travel", name: "Travel", color: "bg-blue-100 text-blue-700" },
  { id: "art-design", name: "Art & Design", color: "bg-green-100 text-green-700" }
];

export const posts: Post[] = [
  {
    id: "1",
    title: "Announcing if attachment resolution sentiments admiration",
    excerpt: "Assure polite his really and others figure though. Do listening am eagerness oh objection collected. Together…",
    content: "Full article content here...",
    author: authors[0],
    publishedAt: "1 year ago",
    readTime: 2,
    views: 1500,
    comments: 2,
    category: "Beauty",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=250&fit=crop",
    tags: ["beauty", "lifestyle"]
  },
  {
    id: "2",
    title: "Style begin mr heard by in music tried do",
    excerpt: "Together happy feelings continue juvenile had off one. Unknown may service subject her letters one bed…",
    content: "Full article content here...",
    author: authors[1],
    publishedAt: "1 year ago", 
    readTime: 2,
    views: 1500,
    comments: 2,
    category: "Beauty",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=250&fit=crop",
    tags: ["beauty", "style"]
  },
  {
    id: "3",
    title: "Day advantages end sufficient eat towards",
    excerpt: "Together happy feelings continue juvenile had off one. Unknown may service subject her letters one bed…",
    content: "Full article content here...",
    author: authors[0],
    publishedAt: "1 year ago",
    readTime: 2,
    views: 933,
    comments: 2,
    category: "Art & Design",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=250&fit=crop",
    tags: ["art", "design"]
  },
  {
    id: "4",
    title: "Songs in oh other avoid it hours woman",
    excerpt: "Sometimes her behaviour are contented. Do listening am eagerness oh objection collected. Together happy feelings continue…",
    content: "Full article content here...",
    author: authors[0],
    publishedAt: "1 year ago",
    readTime: 2,
    views: 1000,
    comments: 2,
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=250&fit=crop",
    tags: ["lifestyle", "music"]
  },
  {
    id: "5",
    title: "Uneasy no settle when nature narrow in afraid",
    excerpt: "Together happy feelings continue juvenile had off one. Unknown may service subject her letters one bed…",
    content: "Full article content here...",
    author: authors[0],
    publishedAt: "1 year ago",
    readTime: 2,
    views: 825,
    comments: 2,
    category: "Travel",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=250&fit=crop",
    tags: ["travel", "nature"]
  },
  {
    id: "6",
    title: "Astonished and acceptance men two discretion",
    excerpt: "Together happy feelings continue juvenile had off one. Unknown may service subject her letters one bed…",
    content: "Full article content here...",
    author: authors[1],
    publishedAt: "1 year ago",
    readTime: 2,
    views: 1700,
    comments: 2,
    category: "Art & Design",
    image: "https://images.unsplash.com/photo-1460472178825-e5240623afd5?w=400&h=250&fit=crop",
    tags: ["art", "design"]
  }
];

export const socialLinks = [
  { name: "X", url: "#", icon: "Twitter" },
  { name: "Facebook", url: "#", icon: "Facebook" },
  { name: "Instagram", url: "#", icon: "Instagram" },
  { name: "Rumble", url: "#", icon: "Video" }
];

export const navigationItems = [
  {
    name: "Demos",
    href: "#demos",
    subItems: [
      { name: "Demo 1", description: "Import your favourite demo with one click" },
      { name: "Demo 2", description: "Mix and match demos for your perfect blog" },
      { name: "Demo 3", description: "Demo content included to help get you started" },
      { name: "Demo 4", description: "Create multi column and multi level menus", hot: true },
      { name: "Demo 5", description: "More than 30 homepage combinations", trending: true },
      { name: "Demo 6", description: "Customize your site in the WP customizer" }
    ]
  },
  { name: "Features", href: "#features" },
  { name: "Lifestyle", href: "#lifestyle" },
  { name: "Beauty", href: "#beauty" },
  { name: "Travel", href: "#travel" },
  { name: "More", href: "#more" }
];
