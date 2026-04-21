import { HeaderItem } from "@/types/menu";

export const headerData: HeaderItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Portfolio",
    href: "/portfolio",
    submenu: [
      { label: "Portfolio list", href: "/portfolio" },
      { label: "Portfolio details", href: "/portfolio/portfolio-1" },
    ],
  },
  {
    label: "Blog",
    href: "#",
    submenu: [
      { label: "Blog list", href: "/blog" },
      { label: "Blog details", href: "/blog/blog_1" },
    ],
  },
  { label: "Contact", href: "/contact" },
  { label: "Docs", href: "/documentation" },
];
