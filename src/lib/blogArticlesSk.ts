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
    id: "strajk-lini-lotniczych-odszkodowanie",
    title: "Štrajk leteckých spoločností a kompenzácia – patrí vám náhrada v 2025?",
    slug: "strajk-lini-lotniczych-odszkodowanie",
    category: "foundation",
    wordCount: 6800,
    readTime: 23,
    excerpt: "Štrajk zamestnancov letiska vs. štrajk pilotov – kedy máte nárok na kompenzáciu? Aktuálna judikatúra a vaše práva.",
    publishDate: "2026-02-06",
    featured: true,
    color: "yellow"
  },

  // KLASTER 2: AIRLINES (Top 3)
  {
    id: "wizz-air-odszkodowanie",
    title: "Wizz Air – ako získať kompenzáciu za meškanie? Sprievodca krok za krokom",
    slug: "wizz-air-odszkodowanie",
    category: "airline",
    airlineName: "Wizz Air",
    flag: "🟣",
    wordCount: 7500,
    readTime: 25,
    excerpt: "Praktický sprievodca získaním kompenzácie od Wizz Air za meškanie alebo zrušenie letu z Bratislavy. Formuláre, termíny, úspešné stratégie.",
    publishDate: "2026-02-17",
    featured: true,
    color: "purple"
  },
  {
    id: "ryanair-problemy-prawa",
    title: "Ryanair – ako získať kompenzáciu za meškanie a zrušenie?",
    slug: "ryanair-problemy-prawa",
    category: "airline",
    airlineName: "Ryanair",
    flag: "🔵",
    wordCount: 7200,
    readTime: 24,
    excerpt: "Mal váš let Ryanair meškanie alebo bol zrušený? Zistite, ako získať kompenzáciu až 600 €. Praktický sprievodca pre slovenských cestujúcich.",
    publishDate: "2026-02-17",
    featured: true,
    color: "blue"
  },
  {
    id: "zmeskany-prestup-kompenzacia",
    title: "Zmeškaný prestup – kedy máte nárok na kompenzáciu?",
    slug: "zmeskany-prestup-kompenzacia",
    category: "foundation",
    wordCount: 6500,
    readTime: 18,
    excerpt: "Prvý let oneskorený, zmeškali ste nadväzujúci? Zistite, kedy vám patrí až 600 € kompenzácie za zmeškaný prestup a ako ju získať.",
    publishDate: "2026-02-17",
    featured: true,
    color: "blue"
  },
  {
    id: "smartwings-meskanie-kompenzacia",
    title: "Smartwings – meškanie dovolenkového letu: Kto platí kompenzáciu?",
    slug: "smartwings-meskanie-kompenzacia",
    category: "airline",
    airlineName: "Smartwings",
    flag: "🟠",
    wordCount: 7800,
    readTime: 26,
    excerpt: "Meškal váš let na dovolenku so Smartwings? Nežiadajte biuro podróży! Zistite, ako získať 400-600 € priamo od leteckej spoločnosti.",
    publishDate: "2026-02-17",
    featured: true,
    color: "blue"
  },

  // KLASTER 3: AIRPORTS (Geographic)
  {
    id: "lotnisko-wieden-opoznienie",
    title: "Letisko Viedeň (Schwechat) – čo robiť pri meškaní letu? Sprievodca pre Slovákov",
    slug: "lotnisko-wieden-opoznienie",
    category: "airport",
    airportCode: "VIE",
    airportName: "Viedeň Schwechat",
    flag: "🇦🇹",
    wordCount: 8200,
    readTime: 27,
    excerpt: "Viedeň je hlavná brána Slovákov do sveta. Zistite svoje práva pri meškaní letu z VIE – právo EÚ vás chráni rovnako ako Rakúšanov!",
    publishDate: "2026-02-17",
    featured: true,
    color: "red"
  },
  {
    id: "letisko-bratislava-opoznienie",
    title: "Letisko Bratislava (BTS) – čo robiť, keď sa letíte z Bratislavy?",
    slug: "letisko-bratislava-opoznienie",
    category: "airport",
    airportCode: "BTS",
    airportName: "Bratislava",
    flag: "🇸🇰",
    wordCount: 7800,
    readTime: 26,
    excerpt: "Zistite, ako sa vyrobiť pri meškaní letu z Bratislavy. Praktický sprievodca pre cestujúcich z Bratislavy.",
    publishDate: "2026-02-17",
    featured: true,
    color: "blue"
  },
  {
    id: "letisko-kosice-opoznienie",
    title: "Letisko Košice (KSC) – čo robiť, keď sa letíte z Košíc?",
    slug: "letisko-kosice-opoznienie",
    category: "airport",
    airportCode: "KSC",
    airportName: "Košice",
    flag: "🇸🇰",
    wordCount: 6900,
    readTime: 23,
    excerpt: "Zistite, ako sa vyrobiť pri meškaní letu z Košíc. Praktický sprievodca pre cestujúcich z Košíc.",
    publishDate: "2026-02-17",
    featured: true,
    color: "blue"
  },

  // KLASTER 4: LONG-TAIL (FAQ a Tipy)
  {
    id: "mimoriadne-okolnosti-kompenzacia",
    title: "Mimoriadne okolnosti – kedy aerolínka nemusí platiť kompenzáciu?",
    slug: "mimoriadne-okolnosti-kompenzacia",
    category: "longtail",
    wordCount: 5200,
    readTime: 17,
    excerpt: "Zistite, kedy sú mimoriadne okolnosti skutočné a kedy len výhovorka aerolíniek. Praktický sprievodca s judikatúrou EÚ a reálnymi prípadmi.",
    publishDate: "2026-02-17",
    featured: true,
    color: "yellow",
    schema: {
      faqItems: [
        {
          question: "Ako viem, či aerolínka klame o mimoriadnych okolnostiach?",
          answer: "Použite 3 kroky: 1) FlightRadar24 (lietali iné lety?), 2) Weather reports (overenie počasia), 3) Novinové články (štrajky, technické problémy). ClaimWinger to overí za vás automaticky."
        }
      ]
    }
  },
  {
    id: "premlcanie-narokov-kompenzacia",
    title: "Premlčanie nárokov na kompenzáciu za let – koľko máte času?",
    slug: "premlcanie-narokov-kompenzacia",
    category: "longtail",
    wordCount: 4800,
    readTime: 16,
    excerpt: "Máte len 3 roky na podanie reklamácie za opoždený alebo zrušený let. Zistite, ako sa počíta lehota a prečo konať hneď.",
    publishDate: "2026-02-17",
    featured: true,
    color: "yellow",
    schema: {
      faqItems: [
        {
          question: "Môj let bol 20. februára 2023. Do kedy môžem reklamovať?",
          answer: "Máte čas do 20. februára 2026 (3 roky od dátumu letu). ClaimWinger dokáže spracovať vašu reklamáciu za 24 hodín."
        }
      ]
    }
  },

  // KLASTER 4: LONG-TAIL (FAQ a Tipy)
  {
    id: "overbooking-odmietnutie-nastupu",
    title: "Overbooking – odmietnutie nástupu na palubu a vaše práva (kompenzácia na letisku!)",
    slug: "overbooking-odmietnutie-nastupu",
    category: "longtail",
    wordCount: 5500,
    readTime: 16,
    excerpt: "Aerolínka vám odmietla nástup na palubu? Poznajte svoje práva! Okamžitá kompenzácia až 600 € priamo na letisku. Dobrovoľné vs nedobrovoľné odmietnutie – kritický rozdiel!",
    publishDate: "2026-02-17",
    featured: true,
    color: "red",
    schema: {
      faqItems: [
        {
          question: "Musím prijať voucher, ak mi ho aerolínka ponúka?",
          answer: "NIE! Podľa EÚ 261/2004, článok 7, máte právo na kompenzáciu v hotovosti. Voucher je povolený LEN ak písomne súhlasíte."
        },
        {
          question: "Môžem dostať kompenzáciu aj za deti?",
          answer: "ÁNO! Kompenzácia sa vypláca na každého cestujúceho, vrátane detí a bábätiek, pokiaľ majú vlastný lístok. Rodina 4 osoby = 4 × kompenzácia!"
        }
      ]
    }
  },
  {
    id: "kompletny-przewodnik-odszkodowanie",
    title: "Kompletný przewodnik - Odszkodowanie za let",
    excerpt: "Všetko, čo potrebujete vedieť o právach cestujúcich a odškodneniach za lety.",
    date: "2026-02-28",
    readTime: "15 min",
    category: "Průvodce",
    color: "blue"
  },
  {
    id: "lot-oneskoreny-let-odskodnenie",
    title: "Odškodnenie za oneskorený let LOT Polish Airlines",
    excerpt: "Kompletný sprievodca pre slovenských cestujúcich - až 600 € odškodnenie.",
    date: "2026-03-05",
    readTime: "12 min",
    category: "LOT Polish Airlines",
    color: "blue"
  },
  {
    id: "lot-zrusil-let-odskodnenie",
    title: "LOT zrušil let - Ako získať odškodnenie až 600 €",
    excerpt: "Krok za krokom sprievodca získaním odškodnenia pri zrušenom lete LOT.",
    date: "2026-03-05",
    readTime: "14 min",
    category: "LOT Polish Airlines",
    color: "blue"
  },
  {
    id: "lot-odmieta-vyplatit-odskodnenie",
    title: "LOT odmieta vyplatiť odškodnenie - Čo robiť ďalej?",
    excerpt: "5 krokov ako prelomiť zamietnutie LOT a najčastejšie výhovorky.",
    date: "2026-03-05",
    readTime: "13 min",
    category: "LOT Polish Airlines",
    color: "red"
  },
  {
    id: "lot-poukaz-odskodnenie-voucher",
    title: "LOT ponúka voucher namiesto odškodnenia - Musíte ho prijať?",
    excerpt: "Prečo je hotovosť lepšia ako voucher a ako odmietnuť poukaz od LOT.",
    date: "2026-03-05",
    readTime: "10 min",
    category: "LOT Polish Airlines",
    color: "amber"
  },
  {
    id: "ako-dlho-trva-odskodnenie-lot",
    title: "Koľko trvá vyplatenie odškodnenia od LOT?",
    excerpt: "Aktuálne časy vyplácania a ako urýchliť proces získania peňazí.",
    date: "2026-03-05",
    readTime: "8 min",
    category: "LOT Polish Airlines",
    color: "purple"
  },
  {
    id: "maximalna-vyska-odskodnenia-lot",
    title: "Maximálna výška odškodnenia za let LOT - 250 €, 400 € alebo 600 €?",
    excerpt: "Kalkulátor odškodnenia podľa vzdialenosti letu s LOT Polish Airlines.",
    date: "2026-03-05",
    readTime: "11 min",
    category: "LOT Polish Airlines",
    color: "green"
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