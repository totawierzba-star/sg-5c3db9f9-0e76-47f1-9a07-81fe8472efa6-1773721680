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
    slug: "/cs/blog/narizeni-es-261-2004",
    excerpt: "Zjistěte, jak nařízení ES 261/2004 chrání vaše práva při zpožděných a zrušených letech. Až 600 € kompenzace – zjistěte, kdy máte nárok.",
    category: "foundation",
    wordCount: 2500,
    readTime: 12,
    publishDate: "2026-02-23"
  },
  {
    id: "prava-cestujicich-ceska-republika",
    title: "Práva leteckých cestujících v České republice",
    slug: "/cs/blog/prava-cestujicich-ceska-republika",
    category: "foundation",
    excerpt: "Kompletní průvodce právy leteckých cestujících v ČR. ÚCL, ČOI, soudy, promlčecí lhůta a statistiky z českých letišť.",
    wordCount: 3800,
    readTime: 14,
    publishDate: "2026-02-23"
  },
  {
    id: "kdy-mate-narok-kompenzaci",
    title: "Kdy máte nárok na kompenzaci za zpožděný let?",
    slug: "/cs/blog/kdy-mate-narok-kompenzaci",
    category: "foundation",
    excerpt: "4 hlavní podmínky nároku, jak se měří zpoždění, mimořádné okolnosti, speciální případy a časté chyby.",
    wordCount: 4200,
    readTime: 15,
    publishDate: "2026-02-23"
  },

  // Ryanair article
  {
    id: "ryanair-kompenzace-reklamace",
    title: "Ryanair kompenzace za zpoždění a zrušení letu – Jak na reklamaci",
    slug: "/cs/blog/ryanair-kompenzace-reklamace",
    excerpt: "Kompletní průvodce kompenzací u Ryanairu. Zjistěte, jak správně reklamovat zpoždění nebo zrušení letu a získat až 600 € kompenzace.",
    category: "airline",
    airlineName: "Ryanair",
    featured: true,
    wordCount: 4000,
    readTime: 8,
    publishDate: "2026-02-23"
  },

  // Wizz Air article
  {
    id: "wizz-air-zpozdeni-zruseni",
    title: "Wizz Air kompenzace za zpoždění a zrušení letu – Průvodce 2026",
    slug: "/cs/blog/wizz-air-zpozdeni-zruseni",
    excerpt: "Kompletní průvodce reklamací u Wizz Air. Zjistěte, jak získat až 600 € kompenzace za zpožděný nebo zrušený let.",
    category: "airline",
    airlineName: "Wizz Air",
    featured: true,
    wordCount: 3500,
    readTime: 7,
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