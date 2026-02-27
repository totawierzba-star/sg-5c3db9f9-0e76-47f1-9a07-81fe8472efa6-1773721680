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
    title: "Odszkodowanie LOT Polish Airlines — kompletny przewodnik 2025",
    slug: "odszkodowanie-lot-polish-airlines",
    excerpt: "LOT odmawia 73% polskich roszczeń! Sprawdź ile możesz dostać (250€-600€), jak skutecznie złożyć wniosek i co zrobić gdy LOT nie płaci.",
    date: "2025-02-27",
    readTime: "12 min",
    category: "LOT Polish Airlines",
    featured: true,
    color: "blue"
  },
  {
    title: "Odszkodowanie za opóźniony lot Ryanair z Polski — kompletny poradnik 2025",
    slug: "odszkodowanie-ryanair-polska",
    excerpt: "Ryanair odmawia 65% samodzielnych roszczeń! Poznaj swoje prawa i sprawdzone metody jak skutecznie odzyskać nawet 600€ odszkodowania.",
    date: "2025-02-27",
    readTime: "10 min",
    category: "Ryanair",
    featured: true,
    color: "blue"
  },
  {
    title: "Prawa pasażera LOT Polish Airlines — kompletny przewodnik po WE 261/2004",
    slug: "prawa-pasazera-lot-polish-airlines",
    excerpt: "Poznaj wszystkie prawa pasażera LOT: odszkodowania 250€-600€, opieka na lotnisku, zwroty, hotel. Dowiedz się jak skutecznie egzekwować swoje prawa!",
    date: "2025-02-27",
    readTime: "10 min",
    category: "LOT Polish Airlines",
    featured: true,
    color: "indigo"
  },
  {
    title: "LOT odmówił odszkodowania — co zrobić dalej?",
    slug: "lot-odmowil-odszkodowania",
    excerpt: "LOT odmówił wypłaty? Nie rezygnuj! Poznaj sprawdzone metody odzyskania odszkodowania (91% skuteczności). Szczegółowy plan krok po kroku.",
    date: "2025-02-27",
    readTime: "12 min",
    category: "LOT Polish Airlines",
    featured: true,
    color: "red"
  },
  {
    title: "Historia opóźnionego lotu LOT — jak odzyskałem 600 zł",
    slug: "odwolany-lot-historia-pasazera",
    excerpt: "Prawdziwa historia pasażera, który przez upór LOT czekał 8 miesięcy na odszkodowanie. Zobacz jak to wyglądało i poznaj praktyczne porady.",
    date: "2025-01-15",
    readTime: "5 min",
    category: "Case Studies",
    color: "purple"
  }
];

export const getCategoryLabel = (category: BlogArticle["category"]): string => {
  const labels: Record<string, string> = {
    "LOT Polish Airlines": "LOT Polish Airlines",
    "Ryanair": "Ryanair",
    "Case Studies": "Case Studies",
    "airline": "Linie lotnicze",
    "airport": "Lotniska",
    "foundation": "Podstawy"
  };
  return labels[category] || category;
};

export const getArticlesByCategory = (category: BlogArticle["category"] | "all"): BlogArticle[] => {
  if (category === "all") return blogArticles;
  return blogArticles.filter(article => article.category === category);
};

export const getFeaturedArticles = (): BlogArticle[] => {
  return blogArticles.filter(article => article.featured);
};