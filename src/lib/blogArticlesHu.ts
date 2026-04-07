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
    slug: "kerhetek-karteritest-regi-jaratra",
    title: "Kérhetek kártérítést régi járatra? Mikor nem késő még",
    excerpt:
      "Magyar útmutató régi járatokhoz: mikor lehet még kártérítést kérni, milyen bizonyítékok segítenek, és mikor válik túl gyengévé vagy túl késővé az ügy.",
    date: "2026-04-07",
    readTime: "8 perc",
    category: "AI / GEO kerdesek",
    featured: true,
  },
  {
    slug: "mi-van-ha-vouchert-fogadtam-el",
    title: "Mi van, ha voucher-t fogadtam el? Elveszik a kártérítés joga?",
    excerpt:
      "Magyar útmutató arról, mit jelent a voucher elfogadása késés vagy törlés után, és mikor maradhat még nyitva a pénzbeli igény vagy más utasjog.",
    date: "2026-04-07",
    readTime: "8 perc",
    category: "AI / GEO kerdesek",
    featured: true,
  },
  {
    slug: "kerhetek-karteritest-beszallokartya-nelkul",
    title: "Kérhetek kártérítést beszállókártya nélkül? Mit fogadnak el helyette",
    excerpt:
      "Magyar útmutató arról, lehet-e kártérítést kérni boarding pass nélkül, milyen dokumentumok pótolhatják a beszállókártyát, és mikor válik gyengébbé a bizonyítás.",
    date: "2026-04-07",
    readTime: "8 perc",
    category: "AI / GEO kerdesek",
    featured: true,
  },
  {
    slug: "mennyi-karterites-jar-3-oras-kesesert",
    title: "Mennyi kártérítés jár 3 órás késésért? 250€, 400€ vagy 600€",
    excerpt:
      "Magyar útmutató a leggyakoribb pénzkérdéshez: mennyi járhat 3 órás késésért, mitől függ a 250 / 400 / 600 eurós sáv, és mikor nem elég önmagában a háromórás csúszás.",
    date: "2026-04-07",
    readTime: "8 perc",
    category: "AI / GEO kerdesek",
    featured: true,
  },
  {
    slug: "hany-ora-keses-utan-jar-karterites",
    title: "Hany ora keses utan jar karterites? A 3 oras szabaly magyarul",
    excerpt:
      "Rovid, konkret magyar utmutato a leggyakoribb kerdeshez: pontosan hany ora keses utan johet szoba penzbeli karterites, es miert nem mindig az indulasi csuszas a donto.",
    date: "2026-04-07",
    readTime: "8 perc",
    category: "AI / GEO kerdesek",
    featured: true,
  },
  {
    slug: "hogyan-mukodik-a-karterites-folyamata",
    title: "Hogyan mukodik a karterites folyamata? Lepesrol lepesre az igenytol a kifizetesig",
    excerpt:
      "Magyar attekintes a teljes folyamathoz: jogosultsag ellenorzese, dokumentumok, igenybeadas, legitarsasagi valasz, eszkalacio es vegso kifizetes vagy elutasitas.",
    date: "2026-04-07",
    readTime: "10 perc",
    category: "Eljaras es hataridok",
    featured: true,
  },
  {
    slug: "mikor-nem-jar-karterites-alapok",
    title: "Mikor NEM jar karterites? Alaphelyzetek, amikor az igeny elbukhat",
    excerpt:
      "Magyar utmutato a legfontosabb kizaro vagy gyengito helyzetekrol: mikor nem ervenyes az EU261, mikor lehet valos a rendkivuli korulmeny, es mikor nem az utas javara all a tenyallas.",
    date: "2026-04-07",
    readTime: "9 perc",
    category: "EU261 alapok",
    featured: true,
  },
  {
    slug: "mely-legitarsasagok-kotelesek-fizetni",
    title: "Mely legitarsasagok kotelesek fizetni? EU-s es nem EU-s cegek szabalyai",
    excerpt:
      "Magyar utmutato ahhoz, mely legitarsasagoknal johet szoba karterites: mikor eleg az EU-bol valo indulás, mikor szamit a tenyleges uzemelteto, es miert nem eleg csak a brandet nezni.",
    date: "2026-04-07",
    readTime: "9 perc",
    category: "EU261 alapok",
    featured: true,
  },
  {
    slug: "meddig-lehet-visszamenoleg-igenyelni",
    title: "Meddig lehet visszamenoleg igenyelni? Elavulasi idok es regi jaratok",
    excerpt:
      "Magyar utmutato a regi jaratokra: meddig lehet utolag karteritest kerni, mitol fugg az idohatar, es miert erdemes minel hamarabb lepni akkor is, ha meg nem jart le a lehetoseg.",
    date: "2026-04-07",
    readTime: "9 perc",
    category: "Eljaras es hataridok",
    featured: true,
  },
  {
    slug: "mennyi-ido-alatt-fizetik-ki-a-karteritest",
    title: "Mennyi ido alatt fizetik ki a karteritest? Mire szamits az igeny beadasa utan",
    excerpt:
      "Magyar utmutato a kifizetesi idokhoz: mennyi ideig valaszolhat a legitarsasag, mi lassitja a folyamatot, es mikor erdemes eszkalalni a keslekedo ugyet.",
    date: "2026-04-07",
    readTime: "9 perc",
    category: "Eljaras es hataridok",
    featured: true,
  },
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
