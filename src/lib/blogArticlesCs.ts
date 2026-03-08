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
    id: "lufthansa-kompenzace-reklamace",
    title: "Lufthansa Kompenzace【2026】Jak získat až €600 za zpoždění",
    slug: "/cs/blog/lufthansa-kompenzace-reklamace",
    excerpt: "Lufthansa odmítá 89% českých reklamací! Naučte se 7 triků jak úspěšně získat €250-600 za zpoždění nebo zrušený let. Praktický průvodce s case studies.",
    publishDate: "2026-02-26",
    category: "airline",
    wordCount: 3800,
    readTime: 15,
    featured: true,
    color: "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100"
  },
  {
    id: "3hodinove-pravidlo-zpozdeni",
    title: "3hodinové Pravidlo Zpoždění - Kdy Máte Nárok na €600?【2026】",
    slug: "/cs/blog/3hodinove-pravidlo-zpozdeni",
    excerpt: "Kompletní průvodce 3hodinovým pravidlem EU 261. Jak správně měřit zpoždění, hraniczne případy 2h59 vs 3h01, kalkulátor kompenzace.",
    category: "foundation",
    wordCount: 2100,
    readTime: 12,
    publishDate: "2026-02-26",
    featured: true,
    color: "bg-blue-50 dark:bg-blue-950"
  },
  {
    id: "rozdil-kompenzace-refundace",
    title: "Rozdíl mezi kompenzací a vrácení peněz - co vám náleží?【2026】",
    slug: "/cs/blog/rozdil-kompenzace-refundace",
    excerpt: "95% lidí neví rozdíl! Zjistěte kdy můžete dostat OBOJÍ (€600 kompenzace + vrácení letenky). Kompletní průvodce s praktickými příklady a pasti aerolinek.",
    category: "legal",
    wordCount: 3200,
    readTime: 15,
    publishDate: "2026-02-26",
    featured: true,
    color: "bg-blue-50 dark:bg-blue-950"
  },
  {
    id: "mimoradne-okolnosti-vysvetleny",
    title: "Mimořádné okolnosti vysvětleny【2026】Kdy aerolinka může odmítnout kompenzaci?",
    slug: "/cs/blog/mimoradne-okolnosti-vysvetleny",
    excerpt: "60% aerolinek lže o mimořádných okolnostech! Zjistěte pravdu o technických závadách, počasí a stávkách. Kompletní průvodce jak zpochybnit odmítnutí.",
    category: "legal",
    wordCount: 1800,
    readTime: 12,
    publishDate: "2026-02-26",
    featured: true,
    color: "bg-red-50 dark:bg-red-950"
  },
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
    title: "Letiště Pardubice a kompenzace za zpoždění letu",
    slug: "/cs/blog/letiste-pardubice-kompenzace",
    excerpt: "Kompletní průvodce kompenzacemi za zpoždění a zrušení letů z letiště Pardubice.",
    category: "airport",
    airportCode: "PED",
    airportName: "Letiště Pardubice",
    flag: "🇨🇿",
    wordCount: 1900,
    readTime: 8,
    publishDate: "2024-01-24",
    featured: false
  },
  {
    id: "jak-podat-reklamaci-krok-za-krokem",
    title: "Jak podat reklamaci za zpoždění letu krok za krokem",
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
  },
  {
    id: "co-delat-primo-na-letisti",
    title: "Co dělat přímo na letišti při zpožděném letu - praktický průvodce",
    slug: "/cs/blog/co-delat-primo-na-letisti",
    excerpt: "Detailní návod, co dělat přímo na letišti když máte zpoždění nebo zrušení letu. Dokumentace, fotky, formuláře.",
    category: "legal",
    wordCount: 1000,
    readTime: 8,
    publishDate: "2026-02-24"
  },
  {
    id: "jake-dokumenty-si-ponechat",
    title: "Jaké dokumenty si ponechat při zpožděném letu - kompletní checklist",
    slug: "/cs/blog/jake-dokumenty-si-ponechat",
    excerpt: "Zjistěte, které dokumenty jsou klíčové pro získání kompenzace. Boarding pass, účtenky, fotky a další důkazy.",
    category: "legal",
    wordCount: 1000,
    readTime: 8,
    publishDate: "2026-02-24"
  },
  {
    id: "caste-chyby-pri-reklamaci",
    title: "Časté chyby při reklamaci zpožděného letu - jak se jich vyhnout",
    slug: "/cs/blog/caste-chyby-pri-reklamaci",
    excerpt: "Zjistěte nejčastější chyby při reklamaci kompenzace a jak se jim vyhnout. Zvyšte své šance na úspěch.",
    category: "legal",
    wordCount: 800,
    readTime: 8,
    publishDate: "2026-02-24"
  },
  {
    id: "kolik-dostanu-za-zpozdeny-let",
    title: "Kolik dostanu za zpožděný let? Tabulka kompenzací 2024",
    slug: "/cs/blog/kolik-dostanu-za-zpozdeny-let",
    excerpt: "Zjistěte přesnou výši kompenzace za zpožděný let podle nařízení EU261. Tabulka s částkami 250 €, 400 € a 600 € dle vzdálenosti.",
    category: "foundation",
    wordCount: 2200,
    readTime: 12,
    publishDate: "2026-03-08"
  },
  {
    id: "jak-dlouho-trva-vyplaceni-kompenzace",
    title: "Jak dlouho trvá vyplacení kompenzace za zpožděný let?",
    slug: "/cs/blog/jak-dlouho-trva-vyplaceni-kompenzace",
    excerpt: "Zjistěte, jak dlouho trvá vyplacení kompenzace za zpožděný nebo zrušený let. Reálné lhůty u jednotlivých aerolinií a tipy na zrychlení.",
    category: "foundation",
    wordCount: 2400,
    readTime: 13,
    publishDate: "2026-03-08"
  },
  {
    id: "co-delat-aerolinka-neodpovi-reklamaci",
    title: "Co dělat když aerolinka neodpoví na reklamaci? [2024]",
    slug: "/cs/blog/co-delat-aerolinka-neodpovi-reklamaci",
    excerpt: "Aerolinka nereaguje na vaši reklamaci za zpožděný let? Zjistěte, jak postupovat krok za krokem a získat kompenzaci do 600 €.",
    category: "situations",
    wordCount: 2600,
    readTime: 14,
    publishDate: "2026-03-08"
  },
  {
    id: "narok-kompenzace-zpozdeni-2-hodiny",
    title: "Mám nárok na kompenzaci za zpoždění 2 hodiny? [EU261]",
    slug: "/cs/blog/narok-kompenzace-zpozdeni-2-hodiny",
    excerpt: "Zjistěte, zda vám náleží kompenzace za zpoždění letu 2 hodiny. Kdy platí EU261 a jaká je výše náhrady podle vzdálenosti.",
    category: "foundation",
    wordCount: 2100,
    readTime: 11,
    publishDate: "2026-03-08"
  },
  {
    id: "jak-dlouho-narok-zpozdeny-let",
    title: "Jak dlouho mám na uplatnění nároku za zpožděný let? [3 roky]",
    slug: "/cs/blog/jak-dlouho-narok-zpozdeny-let",
    excerpt: "Zjistěte, jak dlouho můžete reklamovat zpožděný nebo zrušený let. Prekluzivní lhůta 3 roky v ČR a postupy pro staré lety.",
    category: "legal",
    wordCount: 2500,
    readTime: 12,
    publishDate: "2026-03-08"
  },
  {
    id: "co-je-mimoradna-okolnost-letu",
    title: "Co je mimořádná okolnost u letů? [EU261 vysvětlení]",
    slug: "/cs/blog/co-je-mimoradna-okolnost-letu",
    excerpt: "Zjistěte, co je považováno za mimořádnou okolnost podle EU261 a kdy aerolinka nemusí vyplatit kompenzaci za zpožděný nebo zrušený let.",
    category: "legal",
    wordCount: 2800,
    readTime: 15,
    publishDate: "2026-03-08"
  },
  {
    id: "plati-eu261-lety-mimo-eu",
    title: "Platí EU261 pro lety mimo EU? [Kompletní přehled]",
    slug: "/cs/blog/plati-eu261-lety-mimo-eu",
    excerpt: "Zjistěte, kdy platí nařízení EU261 pro lety mimo Evropskou unii. Pravidla pro USA, Asii, Afriku a další destinace.",
    category: "foundation",
    wordCount: 2300,
    readTime: 12,
    publishDate: "2026-03-08"
  },
  {
    id: "reklamovat-let-stary-3-roky",
    title: "Mohu reklamovat let starý 3 roky?",
    excerpt: "Zjistěte, zda můžete uplatnit nárok na kompenzaci za let starý 3 roky a jaké jsou prekluzivní lhůty v České republice.",
    category: "foundation",
    publishDate: "2026-03-08",
    featured: false
  },
  {
    id: "ryanair-odmitl-kompenzaci-jak-prinutit",
    title: "Ryanair odmítl kompenzaci — jak ho přinutit zaplatit?",
    excerpt: "Ryanair odmítl vaši reklamaci? Zjistěte 5 právních metod, jak přinutit Ryanair vyplatit kompenzaci €250-600 za zpožděný nebo zrušený let.",
    category: "airline",
    publishDate: "2026-03-08",
    featured: true
  },
  {
    id: "wizz-air-voucher-misto-penez-hotovost",
    title: "Wizz Air voucher místo peněz — jak získat hotovost?",
    excerpt: "Wizz Air nabízí voucher místo peněz? Zjistěte, jak odmítnout voucher a získat kompenzaci €250-600 v hotovosti podle EU261.",
    category: "airline",
    publishDate: "2026-03-08",
    featured: false
  },
  {
    id: "smartwings-technicka-zavada-mimoradna-okolnost",
    title: "Smartwings technická závada — mimořádná okolnost nebo ne?",
    excerpt: "Smartwings odmítl kompenzaci kvůli technické závadě? Zjistěte, kdy je technická porucha mimořádná okolnost a kdy NE.",
    category: "airline",
    publishDate: "2026-03-08",
    featured: false
  },
  {
    id: "lufthansa-zmeskany-prestup-frankfurt",
    title: "Lufthansa zmeškaný přestup ve Frankfurtu — kdo platí?",
    excerpt: "Zmeškal/a jste přestup ve Frankfurtu kvůli zpoždění Lufthansa? Zjistěte, kdy máte nárok na kompenzaci €250-600.",
    category: "airline",
    publishDate: "2026-03-08",
    featured: false
  },
  {
    id: "swiss-air-kompenzace-zpozdeni-zruseni",
    title: "Swiss Air kompenzace za zpoždění a zrušení letu 2026",
    excerpt: "Kompletní průvodce kompenzacemi Swiss International Air Lines za zpožděné a zrušené lety. €250-600 podle EU261.",
    category: "airline",
    publishDate: "2026-03-08",
    featured: false
  },
  {
    id: "wizz-air-technicka-zavada-mimoradna-okolnost",
    title: "Wizz Air technická závada — mimořádná okolnost nebo ne?",
    excerpt: "Wizz Air odmítl kompenzaci kvůli technické závadě? Zjistěte, kdy je technická porucha mimořádná okolnost a kdy NENÍ.",
    category: "airline",
    publishDate: "2026-03-08",
    featured: false
  },
  {
    id: "klm-kompenzace-zpozdeni-cesko",
    title: "KLM kompenzace za zpoždění — průvodce pro české cestující",
    excerpt: "Kompletní průvodce kompenzacemi KLM Royal Dutch Airlines za zpožděné lety z/do České republiky. €250-600 podle EU261.",
    category: "airline",
    publishDate: "2026-03-08",
    featured: false
  },
  {
    id: "air-france-kompenzace-zpozdeni-zruseni",
    title: "Air France kompenzace za zpoždění a zrušení letu 2026",
    excerpt: "Jak získat kompenzaci €250-600 od Air France za zpožděný nebo zrušený let? Průvodce pro české cestující 2026.",
    category: "airline",
    publishDate: "2026-03-08",
    featured: false
  },
  {
    id: "iberia-kompenzace-zpozdeni-narok",
    title: "Iberia kompenzace za zpoždění — kdy máte nárok?",
    excerpt: "Zjistěte, kdy máte nárok na kompenzaci €250-600 od Iberia Airlines za zpožděný nebo zrušený let podle EU261.",
    category: "airline",
    publishDate: "2026-03-08",
    featured: false
  },
  {
    id: "vueling-kompenzace-zpozdeni-zruseni",
    title: "Vueling kompenzace za zpoždění a zrušení letu 2026",
    excerpt: "Kompletní průvodce kompenzacemi Vueling Airlines za zpožděné a zrušené lety. €250-600 podle EU261 pro české cestující.",
    category: "airline",
    publishDate: "2026-03-08",
    featured: false
  },
  {
    id: "transavia-kompenzace-zpozdeni",
    title: "Transavia kompenzace za zpoždění — průvodce 2026",
    excerpt: "Jak získat kompenzaci €250-600 od Transavia Airlines za zpožděný nebo zrušený let? Průvodce pro české pasažéry.",
    category: "airline",
    publishDate: "2026-03-08",
    featured: false
  },
  {
    id: "wizz-air-group-booking-hromadny-narok",
    title: "Wizz Air group booking — jak uplatnit hromadný nárok?",
    excerpt: "Cestovali jste skupinově s Wizz Air a let byl zpožděný? Zjistěte, jak efektivně uplatnit hromadný nárok na kompenzaci.",
    category: "airline",
    publishDate: "2026-03-08",
    featured: false
  },
  {
    id: "pobeda-belavia-eu261-platnost",
    title: "Pobeda / Belavia — platí EU261 pro tyto dopravce?",
    excerpt: "Zjistěte, zda ruská Pobeda a běloruská Belavia spadají pod EU261 a kdy máte nárok na kompenzaci při letech z/do EU.",
    category: "airline",
    publishDate: "2026-03-08",
    featured: false
  }
];

export const getTotalArticlesCs = () => blogArticlesCs.length;

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