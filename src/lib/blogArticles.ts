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
    excerpt: "Wszystko o odszkodowaniach od LOT: kwoty, procedury, przykłady. Kiedy należy się 250€-600€ i jak to uzyskać?",
    date: "2025-01-10",
    readTime: "9 min",
    category: "LOT Polish Airlines",
    color: "indigo",
    featured: true
  },
  {
    title: "Odszkodowanie Ryanair z Polski — kompletny przewodnik 2025",
    slug: "odszkodowanie-ryanair-polska",
    excerpt: "Kompleksowy przewodnik po odszkodowaniach Ryanair dla polskich pasażerów. 250€-600€ za opóźnienia i odwołania.",
    date: "2025-01-12",
    readTime: "8 min",
    category: "Ryanair",
    color: "blue",
    featured: true
  },
  {
    title: "Prawa pasażera LOT Polish Airlines — co gwarantuje WE 261/2004?",
    slug: "prawa-pasazera-lot-polish-airlines",
    excerpt: "Poznaj wszystkie prawa pasażera LOT: odszkodowania, opieka, zwroty, hotel. Kompletny przewodnik rozporządzenia WE 261/2004.",
    date: "2025-01-14",
    readTime: "8 min",
    category: "LOT Polish Airlines",
    color: "purple",
    featured: true
  },
  {
    title: "LOT odmówił odszkodowania — co zrobić dalej?",
    slug: "lot-odmowil-odszkodowania",
    excerpt: "Nie rezygnuj! 91% skuteczności odzyskania odszkodowania po odmowie LOT. Sprawdzone metody i najczęstsze powody odmowy.",
    date: "2025-01-15",
    readTime: "7 min",
    category: "LOT Polish Airlines",
    color: "red",
    featured: true
  },
  {
    title: "Ryanair odmówił odszkodowania — jak skutecznie walczyć?",
    slug: "ryanair-odmowil-odszkodowania",
    excerpt: "87% skuteczności odzyskania po odmowie Ryanair. Top 5 powodów odmowy i jak je kwestionować krok po kroku.",
    date: "2025-01-18",
    readTime: "8 min",
    category: "Ryanair",
    color: "red",
    featured: true
  },
  {
    title: "Prawa pasażera Ryanair — co gwarantuje WE 261/2004?",
    slug: "prawa-pasazera-ryanair",
    excerpt: "Poznaj wszystkie prawa pasażera Ryanair: odszkodowania 250€-600€, prawo do opieki, zwroty kosztów, hotel. Kompletny przewodnik WE 261/2004.",
    date: "2025-01-19",
    readTime: "7 min",
    category: "Ryanair",
    color: "red",
    featured: true
  },
  {
    title: "Odszkodowanie Wizz Air z Polski — kompletny przewodnik 2025",
    slug: "odszkodowanie-wizz-air-polska",
    excerpt: "Sprawdź jak uzyskać 250-600 € odszkodowania od Wizz Air za opóźniony lub odwołany lot. Procedury, stawki, prawa pasażera. 91% skuteczności.",
    date: "2025-01-20",
    readTime: "8 min",
    category: "Wizz Air",
    color: "purple",
    featured: true
  },
  {
    title: "Wizz Air odmówił odszkodowania — co zrobić?",
    slug: "wizz-air-odmowil-odszkodowania",
    excerpt: "Wizz Air odmówił wypłaty? 76% pasażerów którzy walczą ostatecznie wygrywa. Sprawdzone metody + najczęstsze powody odmowy Wizz Air.",
    date: "2025-01-21",
    readTime: "9 min",
    category: "Wizz Air",
    color: "purple",
    featured: true
  },
  {
    title: "Odwołany lot — historia pasażera",
    slug: "odwolany-lot-historia-pasazera",
    excerpt: "Prawdziwa historia pasażera, który wywalczył odszkodowanie po odwołaniu lotu. Zobacz jak to zrobić krok po kroku.",
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