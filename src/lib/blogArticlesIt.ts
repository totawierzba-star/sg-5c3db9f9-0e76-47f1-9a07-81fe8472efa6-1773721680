export interface BlogArticle {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  featured?: boolean;
  color?: "blue" | "green" | "orange" | "purple";
}

export const blogArticlesIt: BlogArticle[] = [
  {
    slug: "ryanair-italia-risarcimento",
    title: "Ryanair Italia — risarcimento per ritardi e cancellazioni",
    excerpt: "Guida completa su come ottenere risarcimento da Ryanair per voli in ritardo o cancellati. Procedure, importi e diritti passeggeri.",
    date: "2025-02-01",
    readTime: "12 min",
    category: "Compagnie aeree",
    featured: true,
    color: "blue"
  },
  {
    slug: "aeroporto-roma-fiumicino-ritardi",
    title: "Aeroporto Roma Fiumicino — ritardi e diritti passeggeri",
    excerpt: "Tutto quello che devi sapere sui ritardi all'aeroporto di Roma Fiumicino: diritti, procedure e risarcimenti secondo CE 261/2004.",
    date: "2025-02-02",
    readTime: "10 min",
    category: "Aeroporti",
    featured: true,
    color: "green"
  }
];