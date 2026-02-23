export interface BlogArticleCs {
  id: string;
  title: string;
  slug: string;
  category: "airport" | "airline" | "foundation";
  airportCode?: string;
  airportName?: string;
  airlineCode?: string;
  airlineName?: string;
  flag?: string;
  wordCount: number;
  readTime: number;
  excerpt: string;
  publishDate: string;
  featured?: boolean;
  color?: string;
}

export const blogArticlesCs: BlogArticleCs[] = [
  {
    id: "letiste-praha-zpozdeny-let",
    title: "Letiště Praha-Ruzyně: Zpožděný let - kompenzace 2026",
    slug: "/cs/blog/letiste-praha-zpozdeny-let",
    category: "airport",
    airportCode: "PRG",
    airportName: "Letiště Václava Havla Praha",
    flag: "🇨🇿",
    wordCount: 7200,
    readTime: 25,
    excerpt: "Kompletní průvodce kompenzací za zpožděné lety z Prahy. EU261 práva, částky, postupy.",
    publishDate: "2026-02-06",
    featured: true,
    color: "bg-blue-50 dark:bg-blue-950"
  },
  {
    id: "letiste-praha-zruseny-let",
    title: "Letiště Praha-Ruzyně: Zrušený let - vaše práva 2026",
    slug: "/cs/blog/letiste-praha-zruseny-let",
    category: "airport",
    airportCode: "PRG",
    airportName: "Letiště Václava Havla Praha",
    flag: "🇨🇿",
    wordCount: 7400,
    readTime: 26,
    excerpt: "Co dělat při zrušení letu z Prahy? Kompenzace, náhradní lety, vrácení peněz.",
    publishDate: "2026-02-06",
    featured: true,
    color: "bg-blue-50 dark:bg-blue-950"
  },

  // New article - Legal foundation
  {
    id: "narizeni-es-261-2004",
    title: "Co je nařízení ES 261/2004 a jak chrání cestující v EU",
    slug: "narizeni-es-261-2004",
    excerpt: "Zjistěte, jak nařízení ES 261/2004 chrání vaše práva při zpožděných a zrušených letech. Až 600 € kompenzace – zjistěte, kdy máte nárok.",
    category: "foundation",
    readTime: 12,
    publishDate: "2026-02-23"
  }
];

export const getCategoryLabelCs = (category: BlogArticleCs["category"]): string => {
  const labels: Record<BlogArticleCs["category"], string> = {
    airport: "Průvodce letiště",
    airline: "Průvodce aerolinek",
    foundation: "Základní informace"
  };
  return labels[category];
};

export const getArticlesByCategoryCs = (category: BlogArticleCs["category"]): BlogArticleCs[] => {
  return blogArticlesCs.filter(article => article.category === category);
};

export const getFeaturedArticlesCs = (): BlogArticleCs[] => {
  return blogArticlesCs.filter(article => article.featured === true);
};

export const getTotalWordCountCs = (): number => {
  return blogArticlesCs.reduce((total, article) => total + article.wordCount, 0);
};