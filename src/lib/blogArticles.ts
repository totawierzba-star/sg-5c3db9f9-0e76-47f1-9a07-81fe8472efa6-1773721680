export interface BlogArticle {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  featured?: boolean;
  color?: string;
}

export const blogArticles: BlogArticle[] = [
  {
    title: "Odszkodowanie za opóźniony lot LOT Polish Airlines — kompletny przewodnik 2025",
    slug: "odszkodowanie-lot-polish-airlines",
    excerpt: "LOT odmawia 73% polskich roszczeń! Poznaj sprawdzone metody jak skutecznie odzyskać nawet 600€ odszkodowania za opóźniony lub odwołany lot.",
    date: "2025-02-27",
    readTime: "12 min",
    category: "LOT Polish Airlines",
    featured: true,
    color: "blue"
  },
  {
    title: "Odszkodowanie za opóźniony lot Ryanair z Polski — kompletny poradnik 2025",
    slug: "odszkodowanie-ryanair-polska",
    excerpt: "Ryanair odmawia 65% samodzielnych roszczeń! Sprawdź jak skutecznie odzyskać nawet 600€ odszkodowania i co zrobić gdy Ryanair nie płaci.",
    date: "2025-02-27",
    readTime: "10 min",
    category: "Ryanair",
    featured: true,
    color: "indigo"
  },
  {
    title: "Odwołany lot – historia pasażera",
    slug: "odwolany-lot-historia-pasazera",
    excerpt: "Prawdziwa historia pasażera, który skutecznie wywalczył odszkodowanie za odwołany lot.",
    date: "2025-01-15",
    readTime: "5 min",
    category: "Case Studies",
    color: "purple"
  }
];

export const getCategoryLabel = (category: BlogArticle["category"]): string => {
  const labels = {
    airline: "航空公司指南",
    airport: "机场指南",
    foundation: "基础知识"
  };
  return labels[category];
};

export const getArticlesByCategory = (category: BlogArticle["category"] | "all"): BlogArticle[] => {
  if (category === "all") return blogArticles;
  return blogArticles.filter(article => article.category === category);
};

export const getFeaturedArticles = (): BlogArticle[] => {
  return blogArticles.filter(article => article.featured);
};

export const getTotalWordCount = (): number => {
  return blogArticles.reduce((total, article) => total + article.wordCount, 0);
};