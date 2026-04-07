export interface BlogArticleHu {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  featured?: boolean;
}

export const blogArticlesHu: BlogArticleHu[] = [
  {
    slug: "milyen-dokumentumok-kellenek-a-karteriteshez",
    title: "Milyen dokumentumok kellenek a karteriteshez? Teljes magyar checklista",
    excerpt:
      "Magyar checklista a sikeres igenyhez: boarding pass, PNR, screenshot, blokk, email, atfoglalasi adatok es minden, amit erdemes megorizni keses vagy torles utan.",
    date: "2026-04-07",
    readTime: "9 perc",
    category: "Gyakorlati teendok",
    featured: true,
  },
  {
    slug: "mit-tegyel-ha-torlik-a-jaratodat",
    title: "Mit tegyel, ha torlik a jaratodat? Azonnali lepesek refundhoz, atfoglalashoz es karteriteshez",
    excerpt:
      "Magyar gyakorlati utmutato torolt jarathoz: mit kerj azonnal a legitarsasagtol, hogyan valassz refund vagy atfoglalas kozott, es mit dokumentalj a kesobbi igenyhez.",
    date: "2026-04-07",
    readTime: "10 perc",
    category: "Gyakorlati teendok",
    featured: true,
  },
  {
    slug: "mit-tegyel-azonnal-ha-kesik-a-jaratod",
    title: "Mit tegyel azonnal, ha kesik a jaratod? Repuloteri teendok lepesrol lepesre",
    excerpt:
      "Gyakorlati magyar utmutato arra az esetre, amikor mar a repuloteren vagy: mit dokumentalj, mit kerj a legitarsasagtol, mit ne hagyj ki, es hogyan erositsd a kesobbi igenyt.",
    date: "2026-04-07",
    readTime: "9 perc",
    category: "Gyakorlati teendok",
    featured: true,
  },
  {
    slug: "keses-vs-torles-vs-tulfoglalas-kulonbsegek",
    title: "Keses vs torles vs tulfoglalas: mi a kulonbseg es mikor mi jar?",
    excerpt:
      "Magyar utmutato a harom legfontosabb utasjogi helyzethez: miben mas a keses, a torles es a tulfoglalas, es mikor valtozik emiatt a karteritesi vagy atfoglalasi jog.",
    date: "2026-04-07",
    readTime: "10 perc",
    category: "EU261 alapok",
    featured: true,
  },
  {
    slug: "mennyit-fizetnek-a-legitarsasagok-250-400-600-euro",
    title: "Mennyit fizetnek a legitarsasagok? 250, 400 vagy 600 euro magyarazata",
    excerpt:
      "Magyar utmutato a karteritesi savokhoz: mikor johet szoba 250, 400 vagy 600 euro, mitol fugg az osszeg, es miert nem eleg csak a keses hosszat nezni.",
    date: "2026-04-07",
    readTime: "9 perc",
    category: "EU261 alapok",
    featured: true,
  },
  {
    slug: "eu-n-kivuli-jaratok-mikor-ervenyes-az-eu261",
    title: "EU-n kivuli jaratok: mikor ervenyes az EU261 es mikor nem?",
    excerpt:
      "Magyar utmutato a harmadik orszagokbol indulo vagy oda tarto jaratokhoz: mikor ved az EU261, mikor donto az EU-s legifuvarozo, es hol csuszik felre a legtobb utas elemzese.",
    date: "2026-04-07",
    readTime: "10 perc",
    category: "EU261 alapok",
    featured: true,
  },
  {
    slug: "mely-jaratokra-vonatkozik-az-eu261",
    title: "Mely jaratokra vonatkozik az EU261? EU-bol indulo, EU-ba erkezo es atszallasos utak",
    excerpt:
      "Magyar utmutato az EU261 teruleti hatalyarol: mely jaratok esnek bele, mikor szamit az EU-s legifuvarozo, es hogyan valtoztat a helyzeten az atszallas vagy a kulon vasarolt jegy.",
    date: "2026-04-07",
    readTime: "10 perc",
    category: "EU261 alapok",
    featured: true,
  },
  {
    slug: "mikor-jar-karterites-torolt-jarat-eseten",
    title: "Mikor jar karterites torolt jarat eseten? 14 napos szabaly, refund vagy atfoglalas",
    excerpt:
      "Magyar utmutato torolt jaratokhoz: mikor jar penzbeli karterites, hogyan mukodik a 14 napos szabaly, es mikor valaszthat az utas visszaterites es atfoglalas kozott.",
    date: "2026-04-07",
    readTime: "10 perc",
    category: "EU261 alapok",
    featured: true,
  },
  {
    slug: "mikor-jar-karterites-keses-eseten",
    title: "Mikor jar karterites keses eseten? 3 oras szabaly, osszegek es kivetelek",
    excerpt:
      "Mikor eleg a keses ahhoz, hogy penzbeli karterites is felmeruljon? Magyar utmutato a 3 oras erkezesi szabalyrol, a 250/400/600 EUR savokrol es a fo kivetelhelyzetekrol.",
    date: "2026-04-07",
    readTime: "10 perc",
    category: "EU261 alapok",
    featured: true,
  },
  {
    slug: "mi-az-eu261-rendelet-es-mikor-alkalmazhato",
    title: "Mi az EU261 rendelet es mikor alkalmazhato? Magyar utasjogi utmutato",
    excerpt:
      "Attekintheto magyar utmutato az EU261 szabalyairol: mely jaratokra ervenyes, mikor jar karterites kesesnel vagy torlesnel, es mikor nem terjed ki a vedelem.",
    date: "2026-04-07",
    readTime: "9 perc",
    category: "EU261 alapok",
    featured: true,
  },
];

export const blogArticlesHuSorted = [...blogArticlesHu].sort((a, b) =>
  b.date.localeCompare(a.date),
);

export const featuredBlogArticlesHu = blogArticlesHuSorted.filter((article) => article.featured);

export const blogCategoriesHu = [
  "Osszes cikk",
  ...Array.from(new Set(blogArticlesHuSorted.map((article) => article.category))),
];
