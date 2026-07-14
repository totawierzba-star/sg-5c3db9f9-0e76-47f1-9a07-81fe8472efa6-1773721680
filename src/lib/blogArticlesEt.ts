export type BlogArticleEtCategory =
  | "answers"
  | "foundation"
  | "airlines"
  | "airports"
  | "routes"
  | "situations"
  | "diaspora";

export type BlogArticleEtCtaPath = "/delayed-flight" | "/cancelled-flight";

export interface BlogArticleEt {
  id: string;
  title: string;
  slug: string;
  category: BlogArticleEtCategory;
  cluster: string;
  focus: string;
  excerpt: string;
  publishDate: string;
  updatedDate: string;
  readTime: string;
  wordCount: number;
  featured: boolean;
  ctaPath: BlogArticleEtCtaPath;
  airlineName?: string;
  routeName?: string;
  airportCode?: string;
  airportName?: string;
  nonEuCarrier?: boolean;
  uk261?: boolean;
  localAuthority?: boolean;
  limitation?: boolean;
  voucher?: boolean;
  ota?: boolean;
  business?: boolean;
  cancelledCase?: boolean;
  technical?: boolean;
  miles?: boolean;
}

const defaultPublishDate = "2026-05-04";

function article(
  slug: string,
  title: string,
  category: BlogArticleEtCategory,
  cluster: string,
  focus: string,
  options: Partial<BlogArticleEt> = {},
): BlogArticleEt {
  const publishDate = options.publishDate || defaultPublishDate;
  return {
    id: slug,
    slug,
    title,
    category,
    cluster,
    focus,
    excerpt:
      options.excerpt ||
      `${title}: praktiline teejuht Eesti reisijatele — EÜ 261/2004, UK261, tõendid, tähtajad ja hüvitis kuni 600 €.`,
    publishDate,
    updatedDate: publishDate,
    readTime: options.readTime || "8 min",
    wordCount: options.wordCount || 1800,
    featured: false,
    ctaPath: "/delayed-flight",
    ...options,
  };
}

export const blogArticlesEt: BlogArticleEt[] = [
  article(
    "kui-suur-on-huvitis-hilinenud-lennu-eest",
    "Kui suur on hüvitis hilinenud lennu eest? 250, 400 või 600 €",
    "answers",
    "Lühivastused",
    "hüvitise summad lennu vahemaa järgi ja kuidas need kehtivad Tallinnast algavatele marsruutidele",
    {
      excerpt:
        "Hüvitis sõltub lennu vahemaast: kuni 1500 km puhul 250 €, 1500–3500 km puhul 400 € ja üle 3500 km puhul 600 €. Näiteks Tallinn–Stockholm (u 390 km) annab 250 € ning Tallinn–Frankfurt (u 1540 km) ja Tallinn–London (u 1830 km) 400 €.",
      publishDate: "2026-05-04",
      featured: true,
      wordCount: 2100,
      readTime: "9 min",
    },
  ),
  article(
    "mitu-tundi-hilinemist-annab-oiguse-huvitisele",
    "Mitu tundi hilinemist annab õiguse hüvitisele?",
    "answers",
    "Lühivastused",
    "3 tunni saabumishilinemuse künnis lõppsihtkohas ja hoolitsusõigused alates 2 tunnist",
    {
      excerpt:
        "Rahaline hüvitis 250–600 € eeldab üldjuhul vähemalt 3-tunnist hilinemist lõppsihtkohta saabumisel — väljumise hilinemine üksi ei ole määrav. Hoolitsusõigused ehk söök, jook ja side tekivad teil juba alates 2 tunni pikkusest ootamisest.",
      publishDate: "2026-05-11",
      featured: true,
    },
  ),
  article(
    "mis-on-erakorralised-asjaolud",
    "Mis on erakorralised asjaolud lendudel?",
    "answers",
    "Lühivastused",
    "äärmuslik ilm ja lennujuhtimise piirangud kui erakorralised asjaolud ning miks tehnilised rikked ja lennufirma enda töötajate streigid seda üldjuhul ei ole",
    {
      excerpt:
        "Erakorralised asjaolud on näiteks äärmuslik ilm ja lennujuhtimise piirangud — nende korral lennufirma hüvitist maksma ei pea. Tehnilised rikked ja lennufirma enda töötajate streigid ei ole Euroopa Kohtu praktika järgi üldjuhul erakorralised, seega võib 250–600 € hüvitis siiski kuuluda maksmisele.",
      publishDate: "2026-05-18",
    },
  ),
  article(
    "kas-eu261-kehtib-odavlennufirmadele",
    "Kas EU261 kehtib odavlennufirmadele?",
    "answers",
    "Lühivastused",
    "Ryanair, Wizz Air ja airBaltic on määrusega täielikult hõlmatud ning pileti hind ei mõjuta hüvitise suurust",
    {
      excerpt:
        "Jah — Ryanair, Wizz Air ja airBaltic on määrusega EÜ 261/2004 täpselt samamoodi hõlmatud nagu iga teine lennufirma. Pileti hind ei oma tähtsust: ka 20 € odavpileti puhul võib teile kuuluda 250–600 € hüvitis.",
      publishDate: "2026-05-25",
    },
  ),
  article(
    "maarus-eu-261-2004-reisijate-oigused",
    "Määrus (EÜ) nr 261/2004 — reisijate õiguste täielik teejuht Eesti vaatest",
    "foundation",
    "Seadus ja õigused",
    "millal EÜ 261/2004 kehtib Eesti reisijatele, kuidas töötavad 250, 400 ja 600 € hüvitise astmed ning kuidas nõue ette valmistada",
    {
      excerpt:
        "Eesti on Euroopa Liidu liige, seega on kõik Eestist väljuvad lennud määrusega EÜ 261/2004 kaitstud sõltumata lennufirmast. Vähemalt 3-tunnise hilinemise korral lõppsihtkohas on hüvitis vahemaast olenevalt 250, 400 või 600 € reisija kohta.",
      publishDate: "2026-06-01",
      featured: true,
      wordCount: 2200,
      readTime: "10 min",
    },
  ),
  article(
    "huvitise-aegumistahtaeg",
    "Hüvitise aegumistähtaeg — kui kaua saab hüvitist nõuda?",
    "foundation",
    "Seadus ja õigused",
    "aegumistähtaeg sõltub riigist, Eestis esitatavate nõuete puhul üldjuhul umbes 3 aastat, dokumentide säilitamine ja vanemad lennud",
    {
      excerpt:
        "Aegumistähtaeg sõltub riigist, mille õiguse alusel nõuet menetletakse — Euroopa Liidus ühtset tähtaega ei ole. Eestis esitatavate nõuete puhul on tähtaeg üldjuhul umbes 3 aastat, kuid täpne tähtaeg sõltub asjaoludest, mistõttu tasub nõue esitada võimalikult vara ja tõendid alles hoida.",
      publishDate: "2026-06-08",
      limitation: true,
    },
  ),
  article(
    "airbaltic-hilinenud-lend-huvitis",
    "airBaltic hilinenud lend — hüvitise taotlemise teejuht",
    "airlines",
    "airBaltic",
    "airBaltic kui ELi lennufirma, Baltikumi võtmevedaja Tallinna lennujaamas ja hüvitis mõlemas lennusuunas",
    {
      excerpt:
        "airBaltic on ELi lennufirma ja üks Tallinna lennujaama võtmevedajaid, seega kehtib EÜ 261/2004 nii Tallinnast väljuvatele kui ka Tallinnasse saabuvatele airBalticu lendudele. Vähemalt 3-tunnise hilinemise korral lõppsihtkohas on hüvitis 250–600 € reisija kohta.",
      publishDate: "2026-06-15",
      airlineName: "airBaltic",
      featured: true,
      wordCount: 2300,
      readTime: "10 min",
    },
  ),
  article(
    "ryanair-hilinenud-lend-huvitis",
    "Ryanair hilinenud lend — hüvitis Eesti reisijatele",
    "airlines",
    "Euroopa lennufirmad",
    "Ryanair kui ELi lennufirma, nõude esitamine Eesti reisijana ja hüvitis sõltumata odavpileti hinnast",
    {
      excerpt:
        "Ryanair on ELi lennufirma, seega saate hüvitist nõuda nii Tallinnast väljuvate kui ka Eestisse saabuvate Ryanairi lendude eest. Odavpilet ei vähenda hüvitist — vähemalt 3-tunnise hilinemise korral on summa vahemaast olenevalt 250–600 €.",
      publishDate: "2026-06-22",
      airlineName: "Ryanair",
    },
  ),
  article(
    "wizz-air-hilinenud-lend-huvitis",
    "Wizz Air hilinenud lend — hüvitis mõlemas suunas",
    "airlines",
    "Euroopa lennufirmad",
    "Wizz Air kui ELi lennufirma ning EÜ 261/2004 kaitse nii Tallinnast väljuvatel kui ka Tallinnasse saabuvatel lendudel",
    {
      excerpt:
        "Wizz Air on ELi lennufirma, mistõttu kehtib EÜ 261/2004 mõlemas suunas — nii Tallinnast väljuvatele kui ka Tallinnasse saabuvatele lendudele. Hüvitis on vahemaast olenevalt 250–600 € ega sõltu pileti hinnast.",
      publishDate: "2026-06-28",
      airlineName: "Wizz Air",
    },
  ),
  article(
    "lufthansa-hilinenud-lend-huvitis",
    "Lufthansa hilinenud lend — hüvitis ja ümberistumised Frankfurdis või Münchenis",
    "airlines",
    "Euroopa lennufirmad",
    "Lufthansa ümberistumised Frankfurdis ja Münchenis, üks broneering ja hilinemuse mõõtmine lõppsihtkohta saabumisel",
    {
      excerpt:
        "Lufthansa lendudel Tallinnast toimub ümberistumine enamasti Frankfurdis või Münchenis — hilinemist mõõdetakse lõppsihtkohta saabumisel, mitte vahepeatuses. Kui ühe broneeringu jätkulend ebaõnnestub ja jõuate kohale vähemalt 3 tundi hiljem, võib hüvitis olla kuni 600 €; ainuüksi Tallinn–Frankfurt (u 1540 km) annab 400 €.",
      publishDate: "2026-07-02",
      airlineName: "Lufthansa",
    },
  ),
  article(
    "tallinna-lennujaam-hilinenud-lend",
    "Tallinna Lennart Meri lennujaam (TLL) — hilinenud lend ja teie õigused",
    "airports",
    "Lennujaamad",
    "TLL kui ELi lennujaam, kõigi väljuvate lendude kaitse sõltumata lennufirmast, hoolitsusõigused ja tõendid",
    {
      excerpt:
        "Tallinna Lennart Meri lennujaam asub Euroopa Liidus, seega on kõik sealt väljuvad lennud määrusega EÜ 261/2004 kaitstud sõltumata lennufirmast. Vähemalt 3-tunnise hilinemise korral lõppsihtkohas on hüvitis 250–600 € ja hoolitsus — söök, jook ja vajadusel hotell — algab juba 2 tunnist.",
      publishDate: "2026-07-08",
      airportCode: "TLL",
      airportName: "Tallinna lennujaam",
      featured: true,
    },
  ),
  article(
    "lend-tallinn-london-hilinemine",
    "Lend Tallinn–London hilineb — 400 € hüvitis EU261 või UK261 alusel",
    "routes",
    "Marsruudid Euroopas",
    "Tallinn–London u 1830 km, 400 € EÜ 261/2004 alusel Tallinnast väljudes ja 350 £ UK261 alusel Londonist väljudes",
    {
      excerpt:
        "Tallinn–London on umbes 1830 km, seega on Tallinnast väljuva lennu vähemalt 3-tunnise hilinemise korral hüvitis 400 € määruse EÜ 261/2004 alusel. Londonist Tallinna suunas kehtib Brexiti-järgne UK261 ja hüvitis on 350 naela.",
      publishDate: "2026-07-13",
      routeName: "Tallinn-London",
      uk261: true,
    },
  ),
];

export const blogArticlesEtSorted = [...blogArticlesEt].sort((articleA, articleB) =>
  articleB.publishDate.localeCompare(articleA.publishDate) ||
  Number(articleB.featured) - Number(articleA.featured) ||
  articleA.title.localeCompare(articleB.title, "et"),
);

export function getCategoryLabelEt(category: BlogArticleEtCategory | string) {
  const labels: Record<BlogArticleEtCategory, string> = {
    answers: "Lühivastused",
    foundation: "Seadus ja õigused",
    airlines: "Lennufirmad",
    airports: "Lennujaamad",
    routes: "Marsruudid",
    situations: "Erijuhtumid",
    diaspora: "Diasporaa ja UK261",
  };

  return labels[category as BlogArticleEtCategory] || category;
}

export function getEtArticleBySlug(slug: string) {
  return blogArticlesEt.find((article) => article.slug === slug);
}
