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
