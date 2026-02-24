export interface BlogArticleCs {
  id: string;
  title: string;
  slug: string;
  category: "airport" | "airline" | "foundation" | "situations" | "legal";
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
  },

  // Smartwings article
  {
    id: "smartwings-prava-cestujicich",
    title: "Smartwings kompenzace za zpoždění a zrušení letu – Průvodce 2026",
    slug: "/cs/blog/smartwings-prava-cestujicich",
    excerpt: "Jak reklamovat zpožděný nebo zrušený let u Smartwings? Zjistěte své práva, postupy a získejte až 600 € kompenzace.",
    category: "airline",
    wordCount: 900,
    readTime: 7,
    publishDate: "2026-02-23"
  },

  // ČSA Czech Airlines article
  {
    id: "csa-czech-airlines-kompenzace",
    title: "ČSA (Czech Airlines) kompenzace za zpoždění a zrušení letu 2026",
    slug: "/cs/blog/csa-czech-airlines-kompenzace",
    excerpt: "Máte zpožděný nebo zrušený let s ČSA? Zjistěte, jak získat kompenzaci až 600 € podle nařízení EU 261/2004. Návod krok za krokem.",
    category: "airline",
    airlineName: "ČSA Czech Airlines",
    wordCount: 1200,
    readTime: 6,
    publishDate: "2026-02-23"
  },

  // Letiště Brno article
  {
    id: "letiste-brno-zpozdeni",
    title: "Letiště Brno-Tuřany (BRQ): Zpožděný let a kompenzace 2026",
    slug: "/cs/blog/letiste-brno-zpozdeni",
    excerpt: "Měli jste zpoždění z letiště Brno (BRQ)? Zjistěte, jak získat až 600 € odškodnění. Smartwings, Ryanair a další lety z Brna.",
    category: "airport",
    airportCode: "BRQ",
    airportName: "Letiště Brno-Tuřany",
    flag: "🇨🇿",
    wordCount: 1100,
    readTime: 7,
    publishDate: "2026-02-23"
  },

  // Letiště Ostrava article
  {
    id: "letiste-ostrava-kompenzace",
    title: "Letiště Ostrava (OSR): Zpožděný let a kompenzace 2026",
    slug: "/cs/blog/letiste-ostrava-kompenzace",
    excerpt: "Měli jste zpoždění z letiště v Ostravě? Zjistěte, jak získat až 600 € odškodnění za zpožděný nebo zrušený let.",
    category: "airport",
    flag: "🇨🇿",
    wordCount: 800,
    readTime: 6,
    publishDate: "2026-02-23"
  },

  // Missed connections article
  {
    id: "zmeskane-prestupy-kompenzace",
    title: "Zmeškané přestupy - máte nárok na kompenzaci?",
    slug: "/cs/blog/zmeskane-prestupy-kompenzace",
    excerpt: "Co dělat když zmeškáte přestup kvůli zpožděnému letu? Zjistěte, kdy máte nárok na kompenzaci až 600 €.",
    category: "situations",
    wordCount: 1100,
    readTime: 8,
    publishDate: "2026-02-24"
  },

  // Overbooking article
  {
    id: "overbooking-odmitnuty-nastup",
    title: "Overbooking - odmítnutí nástupu na palubu a kompenzace",
    slug: "/cs/blog/overbooking-odmitnuty-nastup",
    excerpt: "Aerolinka vám odmítla nástup kvůli přeplněnému letu? Máte nárok na kompenzaci až 600 € a další výhody.",
    category: "situations",
    wordCount: 1000,
    readTime: 8,
    publishDate: "2026-02-24"
  },

  // Airline strikes article
  {
    id: "stavky-leteckych-spolecnosti",
    title: "Stávka letecké společnosti - nárok na kompenzaci",
    slug: "/cs/blog/stavky-leteckych-spolecnosti",
    excerpt: "Váš let byl zrušen kvůli stávce? Zjistěte, kdy vám přísluší kompenzace - záleží na typu stávky.",
    category: "situations",
    wordCount: 900,
    readTime: 7,
    publishDate: "2026-02-24"
  },

  // Statute of limitations article
  {
    id: "promlceni-naroku-kompenzace",
    title: "Promlčení nároků na kompenzaci za zpožděný let",
    slug: "/cs/blog/promlceni-naroku-kompenzace",
    excerpt: "Máte zpožděný let z minulého roku? Zjistěte, jak dlouho máte na uplatnění nároku na kompenzaci podle právní úpravy v ČR.",
    category: "legal",
    wordCount: 800,
    readTime: 6,
    publishDate: "2026-02-24"
  },

  // Eurowings article
  {
    id: "eurowings-kompenzace-reklamace",
    title: "Eurowings kompenzace za zpoždění a zrušení letu – Průvodce 2026",
    slug: "/cs/blog/eurowings-kompenzace-reklamace",
    excerpt: "Komplexní průvodce reklamací u Eurowings. Zjistěte, jak získat až 600 € kompenzace za zpožděný nebo zrušený let Eurowings.",
    category: "airline",
    airlineName: "Eurowings",
    wordCount: 900,
    readTime: 7,
    publishDate: "2026-02-24"
  },
  {
    id: "austrian-airlines-kompenzace",
    title: "Austrian Airlines kompenzace za zpoždění a zrušení letu 2026",
    slug: "/cs/blog/austrian-airlines-kompenzace",
    excerpt: "Kompletní průvodce reklamací u Austrian Airlines. Zjistěte, jak získat až 600 € kompenzace za zpožděný nebo zrušený let.",
    category: "airline",
    airlineName: "Austrian Airlines",
    wordCount: 900,
    readTime: 7,
    publishDate: "2026-02-24"
  },
  {
    id: "easyjet-zpozdeni-zruseni",
    title: "easyJet kompenzace za zpoždění a zrušení letu – Průvodce 2026",
    slug: "/cs/blog/easyjet-zpozdeni-zruseni",
    excerpt: "Kompletní průvodce reklamací u easyJet. Zjistěte, jak získat až 600 € kompenzace za zpožděný nebo zrušený let easyJet.",
    category: "airline",
    airlineName: "easyJet",
    wordCount: 850,
    readTime: 7,
    publishDate: "2026-02-24"
  },
  {
    id: "british-airways-zpozdeni-zruseni",
    title: "British Airways kompenzace za zpoždění a zrušení letu – Průvodce 2026",
    slug: "/cs/blog/british-airways-zpozdeni-zruseni",
    excerpt: "Kompletní průvodce reklamací u British Airways. Zjistěte, jak získat až 600 € kompenzace za zpožděný nebo zrušený let British Airways.",
    category: "airline",
    airlineName: "British Airways",
    wordCount: 850,
    readTime: 7,
    publishDate: "2026-02-24"
  },
  {
    id: "british-airways-kompenzace",
    title: "British Airways kompenzace za zpoždění a zrušení letu – Průvodce 2026",
    slug: "/cs/blog/british-airways-kompenzace",
    excerpt: "Kompletní průvodce reklamací u British Airways. Zjistěte, jak získat až 600 € kompenzace za zpožděný nebo zrušený let British Airways.",
    category: "airline",
    airlineName: "British Airways",
    wordCount: 850,
    readTime: 7,
    publishDate: "2026-02-24"
  },
  {
    id: "turkish-airlines-kompenzace",
    title: "Turkish Airlines kompenzace za zpoždění a zrušení letu 2026",
    slug: "/cs/blog/turkish-airlines-kompenzace",
    excerpt: "Kompletní průvodce reklamací u Turkish Airlines. Zjistěte, kdy máte nárok na kompenzaci až 600 € za lety THY z EU.",
    category: "airline",
    airlineName: "Turkish Airlines",
    wordCount: 800,
    readTime: 6,
    publishDate: "2026-02-24"
  },
  {
    id: "letiste-karlovy-vary",
    title: "Letiště Karlovy Vary: Zpožděný let a kompenzace 2026",
    slug: "/cs/blog/letiste-karlovy-vary",
    excerpt: "Měli jste zpoždění z letiště Karlovy Vary? Zjistěte, jak získat až 600 € odškodnění.",
    category: "airport",
    airportName: "Letiště Karlovy Vary",
    flag: "🇨🇿",
    wordCount: 700,
    readTime: 6,
    publishDate: "2026-02-24"
  },
  {
    id: "letiste-karlovy-vary-kompenzace",
    title: "Letiště Karlovy Vary - práva pasažérů a kompenzace",
    slug: "/cs/blog/letiste-karlovy-vary-kompenzace",
    category: "airport",
    airportCode: "KLV",
    airportName: "Karlovy Vary",
    flag: "🇨🇿",
    wordCount: 700,
    readTime: 6,
    publishDate: "2026-02-24",
    excerpt: "Měli jste zpoždění z letiště Karlovy Vary? Zjistěte, jak získat až 600 € odškodnění."
  },
  {
    id: "letiste-pardubice-kompenzace",
    title: "Letiště Pardubice - práva pasažérů a kompenzace",
    slug: "/cs/blog/letiste-pardubice-kompenzace",
    category: "airport",
    airportCode: "PED",
    airportName: "Pardubice",
    flag: "🇨🇿",
    wordCount: 700,
    readTime: 6,
    publishDate: "2026-02-24",
    excerpt: "Měli jste zpoždění z letiště Pardubice? Zjistěte, jak získat až 600 € odškodnění."
  },
  {
    id: "jak-podat-reklamaci-krok-za-krokem",
    title: "Jak podat reklamaci za zpožděný let krok za krokem",
    slug: "/cs/blog/jak-podat-reklamaci-krok-za-krokem",
    excerpt: "Detailní návod, jak správně podat reklamaci. Šablony, dokumenty a časté chyby.",
    category: "legal",
    wordCount: 1200,
    readTime: 10,
    publishDate: "2026-02-24"
  },
  {
    id: "dukazni-bremeno-kompenzaci",
    title: "Důkazní břemeno u kompenzací za zpožděný let",
    slug: "/cs/blog/dukazni-bremeno-kompenzaci",
    excerpt: "Zjistěte, kdo musí co dokazovat při reklamaci. Komplexní právní průvodce.",
    category: "legal",
    wordCount: 1000,
    readTime: 8,
    publishDate: "2026-02-24"
  },
  {
    id: "soudni-vymahani-kompenzaci",
    title: "Soudní vymáhání kompenzace za zpožděný let - kdy se vyplatí žaloba?",
    slug: "/cs/blog/soudni-vymahani-kompenzaci",
    excerpt: "Kdy se vyplatí soudit s aerolinkou? Průvodce soudním vymáháním, evropské drobné nároky a náklady řízení.",
    category: "legal",
    wordCount: 1100,
    readTime: 9,
    publishDate: "2026-02-24"
  },
  {
    id: "rozdil-kompenzace-refundace",
    title: "Rozdíl mezi kompenzací a refundací letenky - co vám náleží?",
    slug: "/cs/blog/rozdil-kompenzace-refundace",
    excerpt: "Kompenzace vs. refundace - zjistěte, co je co a kdy máte nárok na obojí. Kompletní právní průvodce.",
    category: "legal",
    wordCount: 1000,
    readTime: 8,
    publishDate: "2026-02-24"
  }
];

export const getCategoryLabelCs = (category: BlogArticleCs["category"]): string => {
  const labels: Record<BlogArticleCs["category"], string> = {
    airport: "Průvodce letiště",
    airline: "Průvodce aerolinek",
    foundation: "Základní informace",
    situations: "Speciální situace",
    legal: "Právní informace"
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