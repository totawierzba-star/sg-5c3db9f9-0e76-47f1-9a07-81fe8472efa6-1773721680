export type BlogArticleSrCategory =
  | "snippet"
  | "foundation"
  | "airline"
  | "airport"
  | "route"
  | "special"
  | "diaspora";

export type BlogArticleSrCtaPath = "/delayed-flight" | "/cancelled-flight";

export interface BlogArticleSr {
  id: string;
  title: string;
  slug: string;
  category: BlogArticleSrCategory;
  cluster: string;
  focus: string;
  excerpt: string;
  publishDate: string;
  updatedDate: string;
  readTime: string;
  wordCount: number;
  featured: boolean;
  ctaPath: BlogArticleSrCtaPath;
  airlineName?: string;
  routeName?: string;
  airportCode?: string;
  airportName?: string;
  nonEuCarrier?: boolean;
  uk261?: boolean;
  localAuthority?: boolean;
  limitation?: boolean;
  voucher?: boolean;
}

const publishDate = "2026-05-04";

function article(
  slug: string,
  title: string,
  category: BlogArticleSrCategory,
  cluster: string,
  focus: string,
  options: Partial<BlogArticleSr> = {},
): BlogArticleSr {
  const articlePublishDate = options.publishDate || publishDate;

  return {
    id: slug,
    slug,
    title,
    category,
    cluster,
    focus,
    excerpt:
      options.excerpt ||
      `${title}: praktičan vodič na srpskom o Uredbi EU 261, UK261, dokazima, rokovima i obeštećenju do 600 €.`,
    readTime: options.readTime || "8 min.",
    wordCount: options.wordCount || 1800,
    featured: false,
    ctaPath: "/delayed-flight",
    ...options,
    publishDate: articlePublishDate,
    updatedDate: options.updatedDate || articlePublishDate,
  };
}

export const blogArticlesSr: BlogArticleSr[] = [
  article(
    "koliko-obestecenja-za-kasnjenje-leta-250-400-600",
    "Koliko obeštećenja za kašnjenje leta? 250 €, 400 € ili 600 €",
    "snippet",
    "Kratki odgovori",
    "kako se određuju fiksni iznosi od 250, 400 i 600 € prema dužini rute i kašnjenju na dolasku",
    {
      featured: true,
      wordCount: 2100,
      readTime: "9 min.",
      publishDate: "2026-05-04",
      excerpt:
        "Za kašnjenje leta od 3 sata i više imate pravo na 250 €, 400 € ili 600 € po Uredbi EU 261, u zavisnosti od dužine rute: Beč–Beograd (~490 km) donosi 250 €, London–Beograd (~1700 km) 400 €, a 600 € važi samo za interkontinentalne letove preko 3500 km.",
    },
  ),
  article(
    "od-koliko-sati-kasnjenja-pravo-na-obestecenje",
    "Od koliko sati kašnjenja imate pravo na obeštećenje?",
    "snippet",
    "Kratki odgovori",
    "prag od 3 sata kašnjenja na dolasku i razlika između kašnjenja pri poletanju i na krajnjoj destinaciji",
    {
      featured: true,
      publishDate: "2026-05-11",
      excerpt:
        "Pravo na novčano obeštećenje po Uredbi EU 261 nastaje tek kada na krajnju destinaciju stignete sa 3 sata zakašnjenja ili više. Objašnjavamo zašto se meri dolazak, a ne poletanje, i koja prava na brigu imate već od 2 sata čekanja.",
    },
  ),
  article(
    "vazi-li-eu261-za-air-serbia",
    "Važi li Uredba EU 261 za Air Serbia?",
    "snippet",
    "Kratki odgovori",
    "kada Air Serbia kao avio-kompanija van EU potpada pod EU261, a kada let iz Beograda nije pokriven",
    {
      nonEuCarrier: true,
      featured: true,
      airlineName: "Air Serbia",
      publishDate: "2026-05-18",
      excerpt:
        "Air Serbia nije avio-kompanija iz EU, pa Uredba EU 261 važi samo kada njen let poleće sa aerodroma u EU/EEA — na primer Beč–Beograd ili Frankfurt–Beograd. Let iz Beograda sa Air Serbia po pravilu nije pokriven Uredbom EU 261.",
    },
  ),
  article(
    "vazi-li-eu261-za-letove-iz-beograda",
    "Važi li Uredba EU 261 za letove iz Beograda?",
    "snippet",
    "Kratki odgovori",
    "zašto je za letove iz Beograda ključno ko je stvarni operater — EU prevoznik ili avio-kompanija van EU",
    {
      nonEuCarrier: true,
      featured: true,
      publishDate: "2026-05-25",
      excerpt:
        "Srbija nije u EU, pa Uredba EU 261 važi za letove iz Beograda samo kada let obavlja EU/EEA avio-kompanija poput Wizz Air-a, Lufthanse, Austrian-a ili LOT-a. Let iz Beograda sa Air Serbia ili Turkish Airlines-om nije pokriven — objašnjavamo šta vam tada preostaje.",
    },
  ),
  article(
    "sta-su-vanredne-okolnosti-kod-letova",
    "Šta su vanredne okolnosti kod letova?",
    "snippet",
    "Kratki odgovori",
    "razlika između stvarnih vanrednih okolnosti i razloga za koje avio-kompanija najčešće ostaje odgovorna",
    {
      publishDate: "2026-06-01",
      excerpt:
        "Nevreme, štrajk kontrole letenja ili zatvaranje aerodroma jesu vanredne okolnosti — ali tehnički kvarovi i štrajk osoblja same avio-kompanije po pravilu nisu. Objašnjavamo kada avio-kompanija ne mora da plati obeštećenje, a kada se iza „vanrednih okolnosti“ krije osnovan zahtev.",
    },
  ),
  article(
    "uredba-eu-261-2004-prava-putnika",
    "Uredba (EU) br. 261/2004 — kompletan vodič kroz prava putnika",
    "foundation",
    "Zakon i prava",
    "osnovna uredba o obeštećenju, brizi i refundaciji kod problematičnih letova, iz ugla putnika iz Srbije",
    {
      localAuthority: true,
      featured: true,
      wordCount: 2300,
      readTime: "10 min.",
      publishDate: "2026-06-08",
      excerpt:
        "Uredba (EU) br. 261/2004 daje putnicima pravo na obeštećenje od 250 € do 600 €, brigu i refundaciju kod kašnjenja leta, otkazanog leta i uskraćenog ukrcavanja. Vodič iz ugla putnika iz Srbije: koji letovi iz Beograda i ka Beogradu su pokriveni i kako da podnesete zahtev za obeštećenje.",
    },
  ),
  article(
    "rok-zastarelosti-obestecenje-za-let",
    "Rok zastarelosti za obeštećenje za let — koliko vremena imate?",
    "foundation",
    "Zakon i prava",
    "zašto rok zastarelosti zavisi od države čiji sudovi ili organi odlučuju o zahtevu i kako da ne zakasnite",
    {
      limitation: true,
      publishDate: "2026-06-15",
      excerpt:
        "Rok zastarelosti za zahtev za obeštećenje nije jedinstven u celoj Evropi — zavisi od države čiji sudovi ili nadležni organi rešavaju vaš slučaj, i u praksi se kreće od jedne do više godina. Objašnjavamo kako da procenite svoj rok i zašto stariji letovi često i dalje vrede proveru.",
    },
  ),
  article(
    "air-serbia-kasnjenje-leta-obestecenje",
    "Air Serbia kašnjenje leta — kada imate pravo na obeštećenje?",
    "airline",
    "Avio-kompanije",
    "Air Serbia kao prevoznik van EU: pokriveni letovi sa EU aerodroma i opcije za letove iz Beograda",
    {
      airlineName: "Air Serbia",
      nonEuCarrier: true,
      featured: true,
      wordCount: 2200,
      readTime: "9 min.",
      publishDate: "2026-06-22",
      excerpt:
        "Kašnjenje leta sa Air Serbia donosi pravo na obeštećenje po Uredbi EU 261 kada let poleće sa aerodroma u EU/EEA — recimo Beč–Beograd ili Pariz–Beograd. Za letove iz Beograda EU261 ne važi za Air Serbia, ali srpski propisi o vazdušnom saobraćaju u velikoj meri prate ista pravila — objašnjavamo šta konkretno da preduzmete.",
    },
  ),
  article(
    "wizz-air-kasnjenje-leta-srbija-eu261",
    "Wizz Air kašnjenje leta iz Srbije — EU261 važi u oba smera",
    "airline",
    "Avio-kompanije",
    "Wizz Air kao EU prevoznik: zašto su letovi iz Beograda i Niša pokriveni Uredbom EU 261 isto kao i povratni letovi",
    {
      airlineName: "Wizz Air",
      featured: true,
      publishDate: "2026-06-29",
      excerpt:
        "Wizz Air je avio-kompanija iz EU, pa Uredba EU 261 pokriva njegove letove u oba smera — i kada polećete iz Beograda ili Niša ka EU, i kada se vraćate kući. Kod kašnjenja od 3 sata i više imate pravo na 250 € ili 400 € u zavisnosti od rute — vodič korak po korak.",
    },
  ),
  article(
    "ryanair-kasnjenje-leta-obestecenje-eu261",
    "Ryanair kašnjenje leta — obeštećenje po Uredbi EU 261",
    "airline",
    "Avio-kompanije",
    "prava putnika iz Srbije kod kašnjenja Ryanair leta, dokazi, rokovi i najčešći razlozi odbijanja",
    {
      airlineName: "Ryanair",
      publishDate: "2026-07-04",
      excerpt:
        "Ryanair je EU avio-kompanija, pa su njegovi letovi pokriveni Uredbom EU 261 nezavisno od smera — uključujući rute koje koriste putnici iz Srbije i dijaspora. Objašnjavamo kako da podnesete zahtev za obeštećenje, koje dokaze da sačuvate i kako da reagujete ako Ryanair odbije.",
    },
  ),
  article(
    "let-bec-beograd-kasnjenje-austrian-air-serbia",
    "Let Beč–Beograd kašnjenje — Austrian i Air Serbia po EU261",
    "route",
    "Rute i dijaspora",
    "najvažnija ruta za dijasporu u Austriji: polazak iz Beča je uvek pokriven EU261, bez obzira na avio-kompaniju",
    {
      routeName: "Beč-Beograd",
      airlineName: "Austrian Airlines / Air Serbia",
      featured: true,
      publishDate: "2026-07-09",
      excerpt:
        "Let Beč–Beograd poleće sa EU aerodroma, pa je kod kašnjenja od 3 sata i više pokriven Uredbom EU 261 — svejedno da li letite sa Austrian Airlines ili Air Serbia. Ruta je duga oko 490 km, što znači obeštećenje od 250 € po putniku. Vodič za dijasporu u Austriji, korak po korak.",
    },
  ),
  article(
    "let-cirih-beograd-kasnjenje-swiss-air-serbia",
    "Let Cirih–Beograd kašnjenje — SWISS i Air Serbia: vaša prava",
    "route",
    "Rute i dijaspora",
    "ruta Cirih–Beograd za dijasporu u Švajcarskoj: polazak iz Ciriha je pokriven, ruta od ~1150 km nosi 250 €",
    {
      routeName: "Cirih-Beograd",
      airlineName: "SWISS / Air Serbia",
      publishDate: "2026-07-13",
      excerpt:
        "Let Cirih–Beograd poleće sa aerodroma na koji se primenjuju pravila EU261, pa kašnjenje od 3 sata i više donosi pravo na obeštećenje — i sa SWISS-om i sa Air Serbia. Ruta je duga oko 1150 km, dakle ispod 1500 km, što znači 250 € po putniku. Praktičan vodič za dijasporu u Švajcarskoj.",
    },
  ),
];

export const blogArticlesSrSorted = [...blogArticlesSr].sort((articleA, articleB) =>
  articleB.publishDate.localeCompare(articleA.publishDate) ||
  Number(articleB.featured) - Number(articleA.featured) ||
  articleA.title.localeCompare(articleB.title, "sr-Latn"),
);

export function getCategoryLabelSr(category: BlogArticleSrCategory | string) {
  const labels: Record<BlogArticleSrCategory, string> = {
    snippet: "Kratki odgovori",
    foundation: "Zakon i prava",
    airline: "Avio-kompanije",
    airport: "Aerodromi",
    route: "Rute",
    special: "Posebne situacije",
    diaspora: "Dijaspora",
  };

  return labels[category as BlogArticleSrCategory] || category;
}

export function getSrArticleBySlug(slug: string) {
  return blogArticlesSr.find((article) => article.slug === slug);
}
