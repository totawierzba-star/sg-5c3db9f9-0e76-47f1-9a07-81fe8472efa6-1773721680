export interface BlogArticle {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  featured?: boolean;
  color?: "blue" | "green" | "orange" | "purple" | "amber" | "red";
}

export const blogArticlesIt: BlogArticle[] = [
  {
    slug: "aeroporto-napoli-capodichino-risarcimento",
    title: "Aeroporto di Napoli Capodichino: Risarcimenti per Ritardi e Cancellazioni",
    excerpt: "Guida completa ai diritti dei passeggeri e alle procedure di risarcimento per voli in ritardo o cancellati dall'Aeroporto di Napoli Capodichino.",
    date: "2026-03-05",
    readTime: "8 min",
    category: "Aeroporti",
    featured: true,
    color: "green"
  },
  {
    slug: "come-presentare-reclamo-guida-completa",
    title: "Come Presentare un Reclamo per Volo in Ritardo o Cancellato: Guida Completa",
    excerpt: "Guida passo-passo per presentare un reclamo efficace alla compagnia aerea e ottenere fino a 600€ di risarcimento. Modelli, documenti e procedura completa.",
    date: "2026-03-05",
    readTime: "12 min",
    category: "Guide Pratiche",
    featured: true,
    color: "purple"
  },
  {
    slug: "ryanair-italia-risarcimento",
    title: "Ryanair Italia: Guida Completa al Risarcimento per Ritardi e Cancellazioni",
    excerpt: "Scopri come ottenere fino a 600€ di risarcimento da Ryanair per voli in ritardo o cancellati. Guida completa con procedura step-by-step.",
    date: "2026-03-02",
    readTime: "8 min",
    category: "Compagnie Aeree",
    featured: true,
    color: "orange"
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
    category: "Compagnie Aeree",
    featured: true,
    color: "purple"
  },
  {
    slug: "ita-airways-risarcimento",
    title: "ITA Airways risarcimento — diritti passeggeri e procedure",
    excerpt: "Tutto quello che devi sapere sui tuoi diritti con ITA Airways (ex Alitalia). Come ottenere risarcimento fino a 600 € per ritardi e cancellazioni secondo CE 261/2004.",
    date: "2026-03-01",
    readTime: "10 min",
    category: "Compagnie Aeree",
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
  },
  {
    slug: "easyjet-italia-risarcimento",
    title: "easyJet Italia risarcimento — ritardi e cancellazioni 2026",
    excerpt: "Guida completa su come ottenere risarcimento da easyJet per voli in ritardo o cancellati in Italia. Procedure, importi e diritti passeggeri.",
    date: "2026-03-01",
    readTime: "11 min",
    category: "Compagnie Aeree",
    featured: true,
    color: "orange"
  },
  {
    slug: "regolamento-ce-261-2004-spiegato",
    title: "Regolamento CE 261/2004 Spiegato: Guida Completa ai Diritti dei Passeggeri",
    excerpt: "Scopri tutto sul Regolamento CE 261/2004: quando si applica, quanto puoi ottenere e come far valere i tuoi diritti come passeggero aereo.",
    date: "2026-03-05",
    readTime: "15 min",
    category: "Regolamenti",
    featured: true,
    color: "purple"
  },
  {
    slug: "circostanze-straordinarie-spiegate",
    title: "Circostanze Straordinarie: Quando NON Spetta il Risarcimento Volo",
    excerpt: "Scopri cosa sono le circostanze straordinarie secondo il Regolamento CE 261/2004 e quando la compagnia aerea può rifiutare legalmente il risarcimento.",
    date: "2026-03-05",
    readTime: "10 min",
    category: "Regolamenti",
    featured: true,
    color: "amber"
  },
  {
    slug: "ritardo-3-ore-regola-risarcimento",
    title: "Ritardo di 3 Ore: La Regola del Risarcimento Volo Spiegata",
    excerpt: "Scopri quando scatta il diritto al risarcimento per ritardi superiori a 3 ore. Guida completa con calcoli, eccezioni e procedure per ottenere fino a 600€.",
    date: "2026-03-05",
    readTime: "12 min",
    category: "Guide Pratiche",
    featured: true,
    color: "green"
  }
];