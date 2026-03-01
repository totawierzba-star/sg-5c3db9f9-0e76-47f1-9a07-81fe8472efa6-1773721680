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
  },
  {
    slug: "wizz-air-italia-risarcimento",
    title: "Wizz Air Italia — risarcimento per ritardi e cancellazioni",
    excerpt: "Guida completa su come ottenere risarcimento da Wizz Air per voli in ritardo o cancellati in Italia. Procedure, importi fino a 600 € e diritti passeggeri CE 261/2004.",
    date: "2026-03-01",
    readTime: "11 min",
    category: "Compagnie aeree",
    featured: true,
    color: "purple"
  },
  {
    slug: "ita-airways-risarcimento",
    title: "ITA Airways risarcimento — diritti passeggeri e procedure",
    excerpt: "Tutto quello che devi sapere sui tuoi diritti con ITA Airways (ex Alitalia). Come ottenere risarcimento fino a 600 € per ritardi e cancellazioni secondo CE 261/2004.",
    date: "2026-03-01",
    readTime: "10 min",
    category: "Compagnie aeree",
    featured: true,
    color: "blue"
  },
  {
    slug: "aeroporto-milano-malpensa-ritardi",
    title: "Aeroporto Milano Malpensa: ritardi, cancellazioni e risarcimenti",
    excerpt: "Volo in ritardo o cancellato a Milano Malpensa (MXP)? Scopri i tuoi diritti e come ottenere fino a 600 € di risarcimento secondo il Regolamento CE 261/2004.",
    date: "2026-03-01",
    readTime: "9 min",
    category: "Aeroporti",
    featured: true,
    color: "green"
  },
  {
    slug: "aeroporto-bergamo-orio-al-serio-risarcimento",
    title: "Aeroporto Bergamo Orio al Serio: guida al risarcimento voli",
    excerpt: "Problemi con il volo a Bergamo (BGY)? Guida completa ai diritti passeggeri e procedure per ottenere compensazione fino a 600 € per ritardi e cancellazioni.",
    date: "2026-03-01",
    readTime: "8 min",
    category: "Aeroporti",
    featured: false,
    color: "green"
  }
];