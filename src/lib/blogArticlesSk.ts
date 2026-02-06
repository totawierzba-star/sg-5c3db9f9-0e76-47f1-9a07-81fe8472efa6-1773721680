export interface BlogArticleSk {
  id: string;
  title: string;
  slug: string;
  category: "foundation" | "airline" | "airport" | "longtail";
  airlineName?: string;
  airportCode?: string;
  airportName?: string;
  flag?: string;
  wordCount: number;
  readTime: number;
  excerpt: string;
  publishDate: string;
  featured: boolean;
  color: string;
  schema?: {
    faqItems?: Array<{ question: string; answer: string }>;
  };
}

export const blogArticlesSk: BlogArticleSk[] = [
  // KLASTER 1: FUNDAMENTY (Pillar Pages)
  {
    id: "kompletny-przewodnik-odszkodowanie",
    title: "Kompletný sprievodca: Kompenzácia za meškanie letu – kedy vám patrí 600 €?",
    slug: "kompletny-przewodnik-odszkodowanie",
    category: "foundation",
    wordCount: 8500,
    readTime: 28,
    excerpt: "Komplexný sprievodca právami cestujúcich podľa nariadenia EU 261/2004. Zistite, kedy máte nárok na kompenzáciu až 600 € za meškanie letu.",
    publishDate: "2026-02-06",
    featured: true,
    color: "blue",
    schema: {
      faqItems: [
        {
          question: "Kedy mám nárok na kompenzáciu za meškanie letu?",
          answer: "Nárok na kompenzáciu máte pri meškaní viac ako 3 hodiny na prílete do cieľovej destinácie, ak let vykonáva letecká spoločnosť z EÚ alebo odchádza z letiska v EÚ."
        }
      ]
    }
  },
  {
    id: "odwolany-lot-zwrot-czy-odszkodowanie",
    title: "Zrušený let – vrátenie peňazí alebo kompenzácia? Poznajte rozdiel",
    slug: "odwolany-lot-zwrot-czy-odszkodowanie",
    category: "foundation",
    wordCount: 7200,
    readTime: 24,
    excerpt: "Zistite rozdiel medzi vrátením peňazí a kompenzáciou pri zrušenom lete. Máte nárok na oboje? Komplexný právny sprievodca.",
    publishDate: "2026-02-06",
    featured: true,
    color: "red"
  },
  {
    id: "strajk-linii-lotniczych-odszkodowanie",
    title: "Štrajk leteckých spoločností a kompenzácia – patrí vám náhrada v 2025?",
    slug: "strajk-linii-lotniczych-odszkodowanie",
    category: "foundation",
    wordCount: 6800,
    readTime: 23,
    excerpt: "Štrajk zamestnancov letiska vs. štrajk pilotov – kedy máte nárok na kompenzáciu? Aktuálna judikatúra a vaše práva.",
    publishDate: "2026-02-06",
    featured: true,
    color: "yellow"
  },
  {
    id: "utracone-polaczenie-przesiadka",
    title: "Zmeškaný prestup (prestupový let) – Vaše práva na kompenzáciu",
    slug: "utracone-polaczenie-przesiadka",
    category: "foundation",
    wordCount: 6500,
    readTime: 22,
    excerpt: "Čo robiť, keď nestíhate prestup kvôli meškaniu prvého letu? Komplexný sprievodca vašimi právami pri prestupových letoch.",
    publishDate: "2026-02-06",
    featured: false,
    color: "purple"
  },

  // KLASTER 2: VEĽKÁ TROJKA (Airlines)
  {
    id: "wizz-air-odszkodowanie-poradnik",
    title: "Wizz Air – ako získať kompenzáciu za meškanie? Sprievodca krok za krokom",
    slug: "wizz-air-odszkodowanie-poradnik",
    category: "airline",
    airlineName: "Wizz Air",
    flag: "🟣",
    wordCount: 7500,
    readTime: 25,
    excerpt: "Praktický sprievodca získaním kompenzácie od Wizz Air za meškanie alebo zrušenie letu z Bratislavy. Formuláre, termíny, úspešné stratégie.",
    publishDate: "2026-02-06",
    featured: true,
    color: "purple"
  },
  {
    id: "ryanair-problemy-z-lotem",
    title: "Ryanair a problémy s letom – ako bojovať za svoje práva?",
    slug: "ryanair-problemy-z-lotem",
    category: "airline",
    airlineName: "Ryanair",
    flag: "🔵",
    wordCount: 7200,
    readTime: 24,
    excerpt: "Ryanair často ignoruje žiadosti o kompenzáciu. Zistite, ako účinne získať svoje peniaze a čo robiť pri odmietnutí.",
    publishDate: "2026-02-06",
    featured: true,
    color: "blue"
  },
  {
    id: "smartwings-odszkodowania-czarterowe",
    title: "Smartwings – kompenzácie za meškanie charterových a dovolenkových letov",
    slug: "smartwings-odszkodowania-czarterowe",
    category: "airline",
    airlineName: "Smartwings",
    flag: "🇨🇿",
    wordCount: 7800,
    readTime: 26,
    excerpt: "Zlatý tip pre Slovákov: Smartwings zabezpečuje väčšinu dovolenkových letov. Zistite, ako získať kompenzáciu pri meškaní vášho charteru.",
    publishDate: "2026-02-06",
    featured: true,
    color: "red"
  },

  // KLASTER 3: GEOGRAFICKÉ (Airports)
  {
    id: "lotnisko-wieden-schwechat-poradnik",
    title: "Letisko Viedeň (Schwechat) – čo robiť pri meškaní letu? Sprievodca pre Slovákov",
    slug: "lotnisko-wieden-schwechat-poradnik",
    category: "airport",
    airportCode: "VIE",
    airportName: "Viedeň Schwechat",
    flag: "🇦🇹",
    wordCount: 8200,
    readTime: 27,
    excerpt: "Viedeň je hlavná brána Slovákov do sveta. Zistite svoje práva pri meškaní letu z VIE – právo EÚ vás chráni rovnako ako Rakúšanov!",
    publishDate: "2026-02-06",
    featured: true,
    color: "red"
  },
  {
    id: "bratislava-bts-odszkodowanie",
    title: "Kompenzácia za let z Bratislavy (BTS) – najčastejšie problémy",
    slug: "bratislava-bts-odszkodowanie",
    category: "airport",
    airportCode: "BTS",
    airportName: "Bratislava",
    flag: "🇸🇰",
    wordCount: 7400,
    readTime: 25,
    excerpt: "Bratislava ako centrum low-cost letov. Meškania Wizz Air, Ryanair – čo robiť a ako získať kompenzáciu až 600 €.",
    publishDate: "2026-02-06",
    featured: true,
    color: "blue"
  },
  {
    id: "kosice-ksc-odwolany-lot",
    title: "Letisko v Košiciach (KSC) – práva cestujúceho pri zrušenom lete",
    slug: "kosice-ksc-odwolany-lot",
    category: "airport",
    airportCode: "KSC",
    airportName: "Košice",
    flag: "🇸🇰",
    wordCount: 6900,
    readTime: 23,
    excerpt: "Košice a spojenia do Viedne, Prahy, Londýna. Čo robiť pri zrušení letu a ako získať kompenzáciu z východu Slovenska.",
    publishDate: "2026-02-06",
    featured: false,
    color: "green"
  },

  // KLASTER 4: LONG-TAIL (FAQ Featured Snippets)
  {
    id: "nadzwyczajne-okolicznosci-pogoda",
    title: "„Mimoriadne okolnosti“ – oslobodzuje zlé počasie vždy leteckú spoločnosť od výplaty?",
    slug: "nadzwyczajne-okolicznosci-pogoda",
    category: "longtail",
    wordCount: 5200,
    readTime: 17,
    excerpt: "Podrobná analýza pojmu 'mimoriadne okolnosti'. Kedy počasie nie je výhovorka a kedy máte nárok na kompenzáciu napriek búrke.",
    publishDate: "2026-02-06",
    featured: false,
    color: "gray"
  },
  {
    id: "przedawnienie-roszczen-slowacja",
    title: "Koľko času mám na podanie žiadosti o kompenzáciu na Slovensku? (Premlčanie nárokov)",
    slug: "przedawnienie-roszczen-slowacja",
    category: "longtail",
    wordCount: 4800,
    readTime: 16,
    excerpt: "Presná lehota premlčania nárokov na kompenzáciu podľa slovenského práva. Nezmeškajte termín na získanie svojich peňazí!",
    publishDate: "2026-02-06",
    featured: false,
    color: "orange"
  },
  {
    id: "overbooking-odmowa-wejscia",
    title: "Overbooking – odmietnutie nástupu na palubu. Koľko peňazí vám patrí?",
    slug: "overbooking-odmowa-wejscia",
    category: "longtail",
    wordCount: 5500,
    readTime: 18,
    excerpt: "Letecká spoločnosť vám odmietla nástup kvôli prepredaniu letu? Zistite svoje práva a výšku kompenzácie pri overbookingu.",
    publishDate: "2026-02-06",
    featured: false,
    color: "red"
  }
];

export const getCategoryLabelSk = (category: BlogArticleSk["category"]): string => {
  const labels = {
    foundation: "Fundamenty",
    airline: "Letecké spoločnosti",
    airport: "Letiská",
    longtail: "FAQ a Tipy"
  };
  return labels[category];
};

export const getArticlesByCategorySk = (category: BlogArticleSk["category"]): BlogArticleSk[] => {
  return blogArticlesSk.filter(article => article.category === category);
};

export const getFeaturedArticlesSk = (): BlogArticleSk[] => {
  return blogArticlesSk.filter(article => article.featured);
};

export const getTotalWordCountSk = (): number => {
  return blogArticlesSk.reduce((total, article) => total + article.wordCount, 0);
};