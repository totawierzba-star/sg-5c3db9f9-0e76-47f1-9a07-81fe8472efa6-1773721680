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
  {
    id: "kolko-si-beru-firmy-za-odskodnenie",
    title: "Koľko si berú firmy za odškodnenie za let?",
    slug: "kolko-si-beru-firmy-za-odskodnenie",
    category: "longtail",
    wordCount: 2900,
    readTime: 9,
    excerpt:
      "Koľko si berú firmy za odškodnenie za let? Férové vysvetlenie rozdielu medzi vlastnou reklamáciou, ClaimWingerom, AirHelp a Skycop, s dôrazom na modely poplatkov a právnu eskaláciu.",
    publishDate: "2026-04-13",
    featured: false,
    color: "amber",
    schema: {
      faqItems: [
        {
          question: "Koľko si firmy zvyčajne berú za odškodnenie za let?",
          answer:
            "Najčastejšie ide o percento z úspešne získanej kompenzácie. Rozdiel býva v tom, či je sadzba pevná, či sa mení pri právnej eskalácii a či sú v nej zahrnuté aj ďalšie náklady. Preto treba vždy pozerať na celý model, nie len na jedno malé číslo v reklame.",
        },
        {
          question: "Aká je provízia ClaimWingeru?",
          answer:
            "ClaimWinger účtuje 30 % bez ohľadu na to, či sa vec vyrieši mimosúdne alebo súdne. To je dôležité pre ľudí, ktorí chcú jednoduchý a predvídateľný model poplatku.",
        },
      ],
    },
  },

  {
    id: "claimwinger-vs-airhelp-vs-skycop",
    title: "ClaimWinger vs AirHelp vs Skycop: čo sa oplatí vedieť pred výberom?",
    slug: "claimwinger-vs-airhelp-vs-skycop",
    category: "longtail",
    wordCount: 3000,
    readTime: 10,
    excerpt:
      "Porovnávame ClaimWinger, AirHelp a Skycop férovo a na oficiálnych dátach: modely poplatkov, právnu eskaláciu, predvídateľnosť nákladov a to, čo sa pri výbere reálne oplatí sledovať.",
    publishDate: "2026-04-13",
    featured: false,
    color: "fuchsia",
    schema: {
      faqItems: [
        {
          question: "Čo je v tomto porovnaní najväčší rozdiel medzi ClaimWinger, AirHelp a Skycop?",
          answer:
            "Najväčší praktický rozdiel je v modeli poplatkov a v tom, ako predvídateľne sa mení pri právnej eskalácii. ClaimWinger komunikuje 30 % bez ohľadu na mimosúdnu alebo súdnu cestu. AirHelp uvádza 35 % poplatok za službu a pri právnej ceste aj dodatočný 15 % poplatok. Skycop má oficiálne zverejnený cenník s pevnými sumami pri štandardných kompenzáciách 250/400/600 € a vyššou sadzbou pri právnych krokoch.",
        },
        {
          question: "Aké poplatky uvádza AirHelp oficiálne?",
          answer:
            "Na oficiálnej stránke AirHelp Our Fees, skontrolovanej 13. apríla 2026, uvádzajú 35 % poplatok za službu vrátane DPH a ak je potrebná právna cesta, aj 15 % dodatočný poplatok za právnu cestu vrátane DPH.",
        },
      ],
    },
  },

  {
    id: "airhelp-vs-vlastna-reklamacia",
    title: "AirHelp vs vlastná reklamácia: čo sa kedy viac oplatí?",
    slug: "airhelp-vs-vlastna-reklamacia",
    category: "longtail",
    wordCount: 2900,
    readTime: 9,
    excerpt:
      "AirHelp alebo vlastná reklamácia? Vysvetľujeme rozdiel v čase, kontrole a poplatkoch, vrátane oficiálne uvádzaných sadzieb a poplatkov AirHelp a férového porovnania s ClaimWingerom.",
    publishDate: "2026-04-13",
    featured: false,
    color: "violet",
    schema: {
      faqItems: [
        {
          question: "Je lepší AirHelp alebo vlastná reklamácia?",
          answer:
            "Záleží od prípadu. Vlastná reklamácia býva silná pri jednoduchom a čerstvom spore, keď máte dobré podklady a chcete sa vyhnúť provízii. AirHelp môže dávať väčší zmysel, ak chcete prenechať čas, komunikáciu a ďalšie kroky po zamietnutí alebo neodpovedaní aerolinky.",
        },
        {
          question: "Aké poplatky uvádza AirHelp na svojej oficiálnej stránke?",
          answer:
            "Podľa oficiálnej stránky AirHelp o poplatkoch, skontrolovanej 13. apríla 2026, uvádzajú štandardný poplatok za službu 35 % vrátane DPH a ak je potrebná právna cesta, aj dodatočný poplatok za právnu cestu 15 % vrátane DPH. To znamená, že pri právnej eskalácii môže byť kombinovaný poplatok vyšší než pri čisto mimosúdnom vyriešení.",
        },
      ],
    },
  },

  {
    id: "batozina-a-prestup-kombinovane-naroky",
    title: "Batožina + prestup: ako fungujú kombinované nároky?",
    slug: "batozina-a-prestup-kombinovane-naroky",
    category: "longtail",
    wordCount: 2850,
    readTime: 8,
    excerpt:
      "Čo ak sa pokazí prestup aj batožina naraz? Vysvetľujeme rozdiel medzi nárokom za let a za batožinu, jednu rezerváciu, PIR a ako tieto dve vrstvy riešiť bez chaosu.",
    publishDate: "2026-04-13",
    featured: false,
    color: "cyan",
    schema: {
      faqItems: [
        {
          question: "Môžem mať pri prestupe nárok za let aj za batožinu naraz?",
          answer:
            "Áno. Problém so samotným letom a problém s batožinou sú dve odlišné vrstvy. Pri jednej ceste sa môžu stretnúť naraz, ale neposudzujú sa rovnako a nemajú rovnaké lehoty ani dôkazy.",
        },
        {
          question: "Je stratená alebo meškajúca batožina to isté ako kompenzácia za zmeškaný prestup?",
          answer:
            "Nie. Kompenzácia za let sa pri prestupe typicky pozerá na konečnú destináciu, jednu rezerváciu a pravidlá EU261. Batožina ide samostatnou cestou a opiera sa o PIR, sledovanie batožiny a písomnú reklamáciu pri stratenej, poškodenej alebo oneskorene doručenej batožine.",
        },
      ],
    },
  },

  {
    id: "zruseny-let-strata-ubytovania",
    title: "Zrušený let a strata ubytovania: čo sa dá žiadať?",
    slug: "zruseny-let-strata-ubytovania",
    category: "longtail",
    wordCount: 2850,
    readTime: 8,
    excerpt:
      "Čo ak vám zrušený let zničí rezervované ubytovanie? Vysvetľujeme, čo kryje EU261 určite, kde už nejde o automatický nárok a aké dôkazy si odložiť.",
    publishDate: "2026-04-13",
    featured: false,
    color: "rose",
    schema: {
      faqItems: [
        {
          question: "Musí aerolínka automaticky preplatiť prepadnuté ubytovanie v cieľovej destinácii?",
          answer:
            "Nie automaticky. Práva podľa EU261 jasne pokrývajú refundáciu letenky, presmerovanie, starostlivosť a v niektorých prípadoch kompenzáciu. Strata ubytovania v cieľovej destinácii už nebýva taký priamy a automatický nárok ako samotný let.",
        },
        {
          question: "Na čo mám nárok pri zrušenom lete určite?",
          answer:
            "Pri zrušenom lete patrí medzi základné práva voľba medzi refundáciou a presmerovaním, pri relevantných situáciách aj starostlivosť a pri zrušení menej než 14 dní pred odletom často aj kompenzácia, ak aerolínka nepreukáže mimoriadne okolnosti.",
        },
      ],
    },
  },

  {
    id: "nahrada-za-novy-listok",
    title: "Náhrada za nový lístok: kedy ju aerolínka preplatí?",
    slug: "nahrada-za-novy-listok",
    category: "longtail",
    wordCount: 2800,
    readTime: 8,
    excerpt:
      "Kedy aerolínka preplatí nový lístok, ktorý ste si kúpili sami? Vysvetľujeme re-routing, porovnateľné podmienky, refundáciu vs presmerovanie a ktoré dôkazy sú najdôležitejšie.",
    publishDate: "2026-04-13",
    featured: false,
    color: "amber",
    schema: {
      faqItems: [
        {
          question: "Kedy mi aerolínka preplatí nový lístok, ktorý som si kúpil sám?",
          answer:
            "Najsilnejší prípad býva vtedy, keď mala aerolínka povinnosť ponúknuť re-routing za porovnateľných podmienok čo najskôr, ale neurobila to. Your Europe uvádza, že ak aerolínka nesplní túto povinnosť, musí preplatiť náklady na nový let kúpený za porovnateľných podmienok.",
        },
        {
          question: "Stačí, že som sa rozhodol kúpiť si nový lístok sám?",
          answer:
            "Nie vždy. Samotné rozhodnutie cestujúceho ešte automaticky negarantuje preplatenie. Dôležité je, či aerolínka reálne neponúkla včasnú a porovnateľnú alternatívu, alebo či jednostranne neposlala len refundáciu namiesto výberu medzi refundáciou a presmerovaním.",
        },
      ],
    },
  },

  {
    id: "pir-protokol-co-to-je",
    title: "PIR protokol: čo to je a kedy ho potrebujete?",
    slug: "pir-protokol-co-to-je",
    category: "longtail",
    wordCount: 2800,
    readTime: 8,
    excerpt:
      "Čo je PIR protokol pri batožine? Vysvetľujeme, kedy ho pýtať na letisku, čo doň patrí, prečo veľmi pomáha a prečo sám o sebe nie vždy stačí ako celá reklamácia.",
    publishDate: "2026-04-13",
    featured: false,
    color: "sky",
    schema: {
      faqItems: [
        {
          question: "Čo je PIR protokol?",
          answer:
            "PIR je praktický letiskový report o probléme s batožinou, najčastejšie pri meškaní, strate alebo poškodení odbavenej batožiny. Pomáha spustiť tracing a vytvoriť prvú oficiálnu stopu o tom, že problém vznikol pri ceste.",
        },
        {
          question: "Stačí samotný PIR ako reklamácia?",
          answer:
            "Nie vždy. PIR je veľmi dôležitý, ale Your Europe zároveň uvádza, že reklamáciu treba podať písomne aerolinke a neexistuje jeden štandardný formulár platný pre celú EÚ. Pri poškodenej batožine býva lehota 7 dní a pri oneskorene doručenej 21 dní od doručenia batožiny.",
        },
      ],
    },
  },

  {
    id: "poskodena-batozina-narok",
    title: "Poškodená batožina: mám nárok a čo robiť?",
    slug: "poskodena-batozina-narok",
    category: "longtail",
    wordCount: 2700,
    readTime: 8,
    excerpt:
      "Čo robiť pri poškodenej batožine? Vysvetľujeme fotografie, PIR, lehotu 7 dní, približný limit €1 300 a čo býva pri reklamácii najdôležitejšie.",
    publishDate: "2026-04-13",
    featured: false,
    color: "teal",
    schema: {
      faqItems: [
        {
          question: "Mám nárok, ak mi aerolínka poškodila batožinu?",
          answer:
            "Áno, často áno. Your Europe uvádza, že pri poškodenej odbavenej batožine je aerolínka zodpovedná približne do výšky €1 300, pokiaľ škoda nevznikla pre vnútornú chybu samotnej batožiny.",
        },
        {
          question: "Do kedy musím nahlásiť poškodenú batožinu?",
          answer:
            "Pri poškodenej odbavenej batožine treba podať písomnú reklamáciu aerolinke čo najskôr a najneskôr do 7 dní od prevzatia batožiny.",
        },
      ],
    },
  },
  {
    id: "stratena-batozina-pri-prestupe",
    title: "Stratená batožina pri prestupe: čo robiť krok za krokom?",
    slug: "stratena-batozina-pri-prestupe",
    category: "longtail",
    wordCount: 2750,
    readTime: 8,
    excerpt:
      "Čo robiť, keď sa batožina stratí pri prestupe? Vysvetľujeme PIR, tracing, úlohu posledného letiska, jednej rezervácie a prvé kroky hneď po prílete.",
    publishDate: "2026-04-13",
    featured: false,
    color: "sky",
    schema: {
      faqItems: [
        {
          question: "Čo robiť, keď sa batožina stratí pri prestupe?",
          answer:
            "Najdôležitejšie je okamžite nahlásiť problém po prílete do konečnej destinácie, vyžiadať si PIR, odložiť si baggage tag a všetky údaje o celej trase. Prvé kroky by sa mali riešiť na letisku, kde ste batožinu očakávali.",
        },
        {
          question: "Ktorá aerolínka zodpovedá za stratenú batožinu pri prestupe?",
          answer:
            "V praxi sa reklamácia typicky rozbieha voči aerolinke, ktorá vás dopravila do cieľovej destinácie a cez ktorú sa rieši aj baggage tracing. Pri komplikovanejších trasách je však dôležité mať celý reťazec segmentov a dokladov.",
        },
      ],
    },
  },
  {
    id: "meskana-batozina-co-preplacaju",
    title: "Meškaná batožina: čo aerolínka prepláca?",
    slug: "meskana-batozina-co-preplacaju",
    category: "longtail",
    wordCount: 2700,
    readTime: 8,
    excerpt:
      "Čo prepláca aerolínka pri meškanej batožine? Vysvetľujeme primerané výdavky, účtenky, limit okolo 1 300 € a termín 21 dní na písomnú reklamáciu.",
    publishDate: "2026-04-13",
    featured: false,
    color: "cyan",
    schema: {
      faqItems: [
        {
          question: "Čo aerolínka prepláca pri meškanej batožine?",
          answer:
            "Typicky ide o primerané nevyhnutné výdavky, ktoré vznikli preto, že ste nemali k dispozícii svoju odbavenú batožinu. Najčastejšie sú to základné hygienické potreby, nevyhnutné oblečenie a iné rozumné dočasné nákupy.",
        },
        {
          question: "Do kedy musím podať reklamáciu za meškanú batožinu?",
          answer:
            "Your Europe uvádza, že pri oneskorene doručenej batožine treba podať písomnú reklamáciu aerolinke do 21 dní od jej doručenia.",
        },
      ],
    },
  },
  {
    id: "najrychlejsi-sposob-ziskania-penazi-za-let",
    title: "Najrýchlejší spôsob získania peňazí za problém s letom",
    slug: "najrychlejsi-sposob-ziskania-penazi-za-let",
    category: "longtail",
    wordCount: 2850,
    readTime: 8,
    excerpt:
      "Ako dostať peniaze za meškanie alebo zrušený let čo najrýchlejšie? Vysvetľujeme rozdiel medzi refundáciou a kompenzáciou, čo má lehotu 7 dní a čo už takto jednoducho nefunguje.",
    publishDate: "2026-04-13",
    featured: false,
    color: "lime",
    schema: {
      faqItems: [
        {
          question: "Aký je najrýchlejší spôsob získania peňazí za problém s letom?",
          answer:
            "Záleží na tom, o aké peniaze ide. Najrýchlejšia býva často refundácia ceny letenky, pretože pri relevantných situáciách má byť vyplatená do 7 dní. Kompenzácia podľa EU261 nemá jednu spoločnú európsku lehotu výplaty.",
        },
        {
          question: "Dostanem kompenzáciu do 7 dní?",
          answer:
            "Nie automaticky. Lehota 7 dní sa viaže najmä na refundáciu ceny letenky v relevantných situáciách. Pri kompenzácii podľa EU261 neexistuje jednotný európsky termín vyplatenia.",
        },
      ],
    },
  },
  {
    id: "ako-vybrat-spravnu-firmu-na-odskodnenie",
    title: "Ako vybrať správnu firmu na odškodnenie za let?",
    slug: "ako-vybrat-spravnu-firmu-na-odskodnenie",
    category: "longtail",
    wordCount: 2950,
    readTime: 9,
    excerpt:
      "Ako si vybrať firmu na odškodnenie za let? Vysvetľujeme, na čo sa pozerať pri provízii, zmluvných podmienkach, komunikácii a kedy ešte stačí vlastná reklamácia.",
    publishDate: "2026-04-13",
    featured: false,
    color: "emerald",
    schema: {
      faqItems: [
        {
          question: "Ako vybrať správnu firmu na odškodnenie za let?",
          answer:
            "Najdôležitejšie je pozerať sa na transparentnosť provízie, čo všetko je v nej zahrnuté, ako firma komunikuje riziká prípadu a či jasne vysvetľuje rozdiel medzi jednoduchým mimosúdnym vybavením a náročnejším sporom.",
        },
        {
          question: "Aká je provízia ClaimWingeru?",
          answer:
            "ClaimWinger účtuje 30 % bez ohľadu na to, či sa vec vyrieši mimosúdne alebo súdne. To je dôležité vedieť vopred pri porovnávaní s inými modelmi.",
        },
      ],
    },
  },
  {
    id: "preco-aerolinky-zamietaju-reklamacie",
    title: "Prečo aerolínky zamietajú reklamácie?",
    slug: "preco-aerolinky-zamietaju-reklamacie",
    category: "longtail",
    wordCount: 2900,
    readTime: 9,
    excerpt:
      "Prečo aerolínky odmietajú vyplatiť odškodnenie? Vysvetľujeme najčastejšie dôvody zamietnutia, čo z nich býva silné a čo je len štandardná obranná argumentácia.",
    publishDate: "2026-04-13",
    featured: false,
    color: "orange",
    schema: {
      faqItems: [
        {
          question: "Prečo aerolínky najčastejšie zamietajú reklamácie?",
          answer:
            "Najčastejšie sa odvolávajú na mimoriadne okolnosti, tvrdia že let nespadal do rozsahu EU261, spochybňujú konečnú destináciu pri prestupe alebo namietajú, že reklamácia smerovala na nesprávneho operujúceho dopravcu.",
        },
        {
          question: "Znamená zamietnutie reklamácie automaticky, že aerolínka má pravdu?",
          answer:
            "Nie. Zamietnutie je len stanovisko aerolinky. Až ďalšia kontrola dôvodov, dôkazov a právneho rámca ukáže, či je odmietnutie naozaj opodstatnené.",
        },
      ],
    },
  },
  {
    id: "kedy-ist-na-sud-pri-odskodneni-za-let",
    title: "Kedy ísť na súd pri odškodnení za let?",
    slug: "kedy-ist-na-sud-pri-odskodneni-za-let",
    category: "longtail",
    wordCount: 2950,
    readTime: 9,
    excerpt:
      "Kedy má zmysel ísť na súd pri spore s aerolinkou? Vysvetľujeme, kedy ešte stačí reklamácia, kedy pomáha národný orgán alebo ADR a kedy už prichádza súd.",
    publishDate: "2026-04-13",
    featured: false,
    color: "stone",
    schema: {
      faqItems: [
        {
          question: "Kedy má zmysel ísť na súd pri odškodnení za let?",
          answer:
            "Zvyčajne až vtedy, keď už prebehla priama reklamácia, odpoveď aerolinky je zamietavá alebo slabá a ďalšie mäkšie kroky, ako národný orgán či ADR, nepomohli alebo nie sú pre daný spor dostatočné.",
        },
        {
          question: "Potrebujem na súd právnika?",
          answer:
            "Nie vždy. Your Europe uvádza, že pri európskom small claims postupe právnik nie je povinný, hoci to neznamená, že každý spor je procesne jednoduchý.",
        },
      ],
    },
  },
  {
    id: "kolko-ma-aerolinka-na-odpoved",
    title: "Koľko má aerolínka na odpoveď na reklamáciu?",
    slug: "kolko-ma-aerolinka-na-odpoved",
    category: "longtail",
    wordCount: 2750,
    readTime: 8,
    excerpt:
      "Koľko má aerolínka času na odpoveď? Vysvetľujeme hranicu 2 mesiacov z Your Europe, rozdiel medzi refundáciou do 7 dní a kompenzáciou podľa EU261 aj to, čo robiť ďalej.",
    publishDate: "2026-04-13",
    featured: false,
    color: "amber",
    schema: {
      faqItems: [
        {
          question: "Koľko má aerolínka na odpoveď na reklamáciu?",
          answer:
            "Oficiálny portál Your Europe uvádza, že ak nedostanete odpoveď do 2 mesiacov alebo s odpoveďou nie ste spokojní, môžete podať sťažnosť príslušnému národnému orgánu.",
        },
        {
          question: "Platí pre kompenzáciu lehota 7 dní?",
          answer:
            "Nie. Lehota 7 dní sa viaže najmä na refundáciu ceny letenky v relevantných situáciách, nie všeobecne na každú kompenzáciu podľa EU261.",
        },
      ],
    },
  },
  {
    id: "ako-preukazat-meskanie-letu",
    title: "Ako preukázať meškanie letu: ktoré dôkazy sú najsilnejšie?",
    slug: "ako-preukazat-meskanie-letu",
    category: "longtail",
    wordCount: 2950,
    readTime: 9,
    excerpt:
      "Ako dokázať meškanie letu pri reklamácii? Vysvetľujeme, ktoré dôkazy sú najsilnejšie, prečo je dôležitá konečná destinácia a čo si odkladať pri narušenom lete.",
    publishDate: "2026-04-13",
    featured: false,
    color: "cyan",
    schema: {
      faqItems: [
        {
          question: "Ako najlepšie preukázať meškanie letu?",
          answer:
            "Najsilnejšia kombinácia býva rezervácia alebo PNR, dôkaz, že ste boli na konkrétnom lete, a stopy o skutočnom priebehu narušenia: e-maily od aerolinky, screenshoty z aplikácie, údaje o reroutingu a reálny čas príchodu do konečnej destinácie.",
        },
        {
          question: "Počíta sa pri nároku meškanie pri odlete alebo pri prílete?",
          answer:
            "Pri kompenzácii podľa EU261 je rozhodujúce najmä meškanie pri príchode do konečnej destinácie, nie len to, o koľko neskôr lietadlo odletelo.",
        },
      ],
    },
  },
  {
    id: "ako-podat-reklamaciu-ryanair-krok-za-krokom",
    title: "Ako podať reklamáciu Ryanair krok za krokom",
    slug: "ako-podat-reklamaciu-ryanair-krok-za-krokom",
    category: "longtail",
    airlineName: "Ryanair",
    wordCount: 3050,
    readTime: 10,
    excerpt:
      "Praktický návod, ako podať reklamáciu Ryanair: čo si pripraviť, čo Ryanair rozlišuje medzi compensation a expenses, ako funguje identity verification a čo robiť pri zamietnutí.",
    publishDate: "2026-04-13",
    featured: false,
    color: "sky",
    schema: {
      faqItems: [
        {
          question: "Môžem podať reklamáciu Ryanair priamo sám?",
          answer:
            "Áno. Ryanair priamo uvádza, že cestujúci môžu podať nárok cez ich vlastný compensation form. Pri jednoduchom prípade to môže byť rozumný prvý krok.",
        },
        {
          question: "Vyžaduje Ryanair overenie identity pri reklamácii?",
          answer:
            "Áno, podľa ich help centra môže byť potrebné overenie identity, aby Ryanair vedel potvrdiť, že žiadosť podáva skutočný pasažier alebo oprávnená osoba.",
        },
      ],
    },
  },
  {
    id: "viac-letov-v-jednej-rezervacii",
    title: "Viac letov v jednej rezervácii: prečo je to dôležité pri nároku?",
    slug: "viac-letov-v-jednej-rezervacii",
    category: "longtail",
    wordCount: 3000,
    readTime: 10,
    excerpt:
      "Máte viac segmentov v jednej rezervácii? Vysvetľujeme, prečo to mení posudzovanie meškania, zmeškaného prestupu, konečnej destinácie aj práv podľa EU261.",
    publishDate: "2026-04-13",
    featured: false,
    color: "indigo",
    schema: {
      faqItems: [
        {
          question: "Prečo je pri viacerých letoch dôležité, že sú v jednej rezervácii?",
          answer:
            "Pretože pri jednej rezervácii sa cesta často posudzuje ako jeden celok. To je veľmi dôležité pri zmeškanom prestupe, meškaní do konečnej destinácie, presmerovaní aj pri starostlivosti o pasažiera.",
        },
        {
          question: "Počíta sa pri jednej rezervácii meškanie prvého letu alebo konečná destinácia?",
          answer:
            "Veľmi často je rozhodujúce meškanie pri príchode do konečnej destinácie. Aj menší problém na prvom segmente môže zmeniť celú cestu, ak rozbije ďalšie nadväznosti.",
        },
      ],
    },
  },
  {
    id: "meskanie-nad-5-hodin",
    title: "Meškanie nad 5 hodín: refundácia, kompenzácia a vaše práva",
    slug: "meskanie-nad-5-hodin",
    category: "longtail",
    wordCount: 2950,
    readTime: 9,
    excerpt:
      "Čo ak let mešká viac ako 5 hodín? Vysvetľujeme, kedy môžete žiadať refundáciu, ako sa to líši od kompenzácie a čo sa deje pri nadväzných letoch.",
    publishDate: "2026-04-13",
    featured: false,
    color: "emerald",
    schema: {
      faqItems: [
        {
          question: "Mám pri meškaní nad 5 hodín automaticky nárok na kompenzáciu?",
          answer:
            "Nie automaticky. Päť hodín je dôležitý prah najmä pre refundáciu, ak sa rozhodnete necestovať. Peňažná kompenzácia sa stále typicky viaže na meškanie pri prílete do konečnej destinácie a ďalšie podmienky EU261.",
        },
        {
          question: "Môžem po 5 hodinách čakania odmietnuť let a žiadať peniaze späť?",
          answer:
            "Často áno. Pri meškaní aspoň 5 hodín pri odlete má aerolinka spravidla vrátiť cenu letenky a pri nadväznej ceste aj zabezpečiť návrat do východiskového bodu, ak už cesta stratila zmysel.",
        },
      ],
    },
  },
  {
    id: "technicka-porucha-narok-na-odskodnenie",
    title: "Technická porucha: kedy vzniká nárok na odškodnenie?",
    slug: "technicka-porucha-narok-na-odskodnenie",
    category: "longtail",
    wordCount: 2900,
    readTime: 9,
    excerpt:
      "Čo ak aerolinka tvrdí, že problém spôsobil technický fault? Vysvetľujeme, prečo väčšina technických porúch nie je mimoriadna okolnosť a kedy môže vzniknúť nárok na kompenzáciu.",
    publishDate: "2026-04-13",
    featured: false,
    color: "cyan",
    schema: {
      faqItems: [
        {
          question: "Mám nárok na odškodnenie, ak aerolinka tvrdí technickú poruchu?",
          answer:
            "Často áno. Väčšina technických problémov, ktoré sa objavia pri bežnej údržbe alebo súvisia s povinnosťou správne udržiavať lietadlo, sa nepovažuje za mimoriadne okolnosti.",
        },
        {
          question: "Je technická porucha automaticky mimoriadna okolnosť?",
          answer:
            "Nie. Samotné tvrdenie aerolinky o technickej poruche nestačí. Rozhodujúce je, či išlo o bežný prevádzkový problém alebo o výnimočný incident mimo normálnej činnosti dopravcu.",
        },
      ],
    },
  },
  {
    id: "lietadlo-sa-vratilo-narok-na-odskodnenie",
    title: "Lietadlo sa vrátilo: kedy vzniká nárok na odškodnenie?",
    slug: "lietadlo-sa-vratilo-narok-na-odskodnenie",
    category: "longtail",
    wordCount: 2850,
    readTime: 9,
    excerpt:
      "Čo ak lietadlo po štarte pristálo späť na letisku odletu? Vysvetľujeme, kedy sa situácia posudzuje ako zrušenie letu, kedy sa rieši meškanie a čo rozhoduje pri nároku na kompenzáciu.",
    publishDate: "2026-04-13",
    featured: false,
    color: "teal",
    schema: {
      faqItems: [
        {
          question: "Ak sa lietadlo po štarte vrátilo na letisko odletu, ide automaticky o zrušený let?",
          answer:
            "Nie vždy automaticky v každej technickej podobe, ale ak sa lietadlo po vzlete vráti na letisko odletu a pasažieri sú presunutí na iný let, pravidlá EÚ takú situáciu spravidla posudzujú ako zrušenie letu.",
        },
        {
          question: "Vzniká pri návrate lietadla nárok na kompenzáciu?",
          answer:
            "Často áno, ale stále treba skontrolovať dôvod návratu, čas príchodu do konečnej destinácie a to, či aerolinka nepreukáže mimoriadne okolnosti. Samotný návrat ešte neznamená automatickú výplatu peňazí.",
        },
      ],
    },
  },
  {
    id: "presmerovany-let-prava",
    title: "Presmerovaný let: aké máte práva a kedy vzniká nárok?",
    slug: "presmerovany-let-prava",
    category: "longtail",
    wordCount: 2950,
    readTime: 10,
    excerpt:
      "Čo znamená presmerovaný let? Vysvetľujeme rozdiel medzi refundáciou, presmerovaním a kompenzáciou, pravidlo zníženia o 50 % aj to, čo rozhoduje pri konečnej destinácii.",
    publishDate: "2026-04-13",
    featured: false,
    color: "amber",
    schema: {
      faqItems: [
        {
          question: "Môžem si pri presmerovanom lete vybrať medzi refundáciou a novým letom?",
          answer:
            "Často áno, najmä ak bol pôvodný let zrušený alebo vám odmietli nástup na palubu. Aerolinka má v takých situáciách spravidla ponúknuť voľbu medzi refundáciou a presmerovaním.",
        },
        {
          question: "Znamená presmerovaný let automaticky, že kompenzácia nevzniká?",
          answer:
            "Nie. Presmerovanie samo o sebe neberie nárok na kompenzáciu. Dôležité je, prečo k presmerovaniu došlo, aký bol výsledný čas príchodu do konečnej destinácie a či aerolinka nepreukáže mimoriadne okolnosti.",
        },
      ],
    },
  },
  {
    id: "meskanie-kvoli-rotacii-lietadla",
    title: "Meškanie kvôli rotácii lietadla: vzniká nárok na odškodnenie?",
    slug: "meskanie-kvoli-rotacii-lietadla",
    category: "longtail",
    wordCount: 2850,
    readTime: 9,
    excerpt:
      "Čo ak aerolinka tvrdí, že let meškal kvôli rotácii lietadla? Vysvetľujeme, prečo to často nie je automatická mimoriadna okolnosť a kedy môže vzniknúť nárok na kompenzáciu.",
    publishDate: "2026-04-13",
    featured: false,
    color: "sky",
    schema: {
      faqItems: [
        {
          question: "Mám nárok na odškodnenie, ak let meškal kvôli rotácii lietadla?",
          answer:
            "Často áno. Samotná rotácia lietadla zvyčajne vyzerá skôr ako súčasť bežnej prevádzky aerolinky než ako automatická mimoriadna okolnosť. Stále však treba pozrieť aj na pôvodný spúšťač problému.",
        },
        {
          question: "Je rotácia lietadla automaticky mimoriadna okolnosť?",
          answer:
            "Nie. To, že lietadlo prišlo neskoro z predchádzajúceho letu, ešte samo osebe nestačí na oslobodenie aerolinky od kompenzácie.",
        },
      ],
    },
  },
  {
    id: "meskanie-kvoli-nedostatku-posadky",
    title: "Meškanie kvôli nedostatku posádky: vzniká nárok na odškodnenie?",
    slug: "meskanie-kvoli-nedostatku-posadky",
    category: "longtail",
    wordCount: 2800,
    readTime: 9,
    excerpt:
      "Čo ak aerolinka tvrdí, že let meškal kvôli nedostatku posádky? Vysvetľujeme, prečo to často nie je mimoriadna okolnosť a kedy môže vzniknúť nárok na kompenzáciu.",
    publishDate: "2026-04-13",
    featured: false,
    color: "violet",
    schema: {
      faqItems: [
        {
          question: "Mám nárok na odškodnenie, ak let meškal kvôli nedostatku posádky?",
          answer:
            "Často áno. Nedostatok posádky býva spravidla vnútorný prevádzkový problém aerolinky, nie automatická mimoriadna okolnosť. Stále však treba skontrolovať celý kontext prípadu.",
        },
        {
          question: "Je nedostatok posádky automaticky mimoriadna okolnosť?",
          answer:
            "Nie. Samotný chýbajúci pilot alebo palubný personál zvyčajne nestačí na to, aby sa aerolinka zbavila povinnosti platiť kompenzáciu.",
        },
      ],
    },
  },
  {
    id: "let-spat-do-eu-s-eu-aerolinkou",
    title: "Let späť do EÚ s EU aerolinkou: kedy ešte platí EU261?",
    slug: "let-spat-do-eu-s-eu-aerolinkou",
    category: "longtail",
    wordCount: 2850,
    readTime: 9,
    excerpt:
      "Čo ak letíte z krajiny mimo EÚ späť do Únie s európskou aerolinkou? Vysvetľujeme, kedy môže platiť EU261, prečo je dôležitý status dopravcu a čo rozhoduje pri prestupoch.",
    publishDate: "2026-04-13",
    featured: false,
    color: "emerald",
    schema: {
      faqItems: [
        {
          question: "Platí EU261 aj pri lete späť do EÚ z krajiny mimo EÚ?",
          answer:
            "Áno, často áno, ale hlavne vtedy, keď let operuje európska aerolinka. Pri návrate do EÚ z tretej krajiny je práve status dopravcu veľmi dôležitý.",
        },
        {
          question: "Aký je rozdiel medzi EU a non-EU aerolinkou pri lete späť do EÚ?",
          answer:
            "Pri lete z krajiny mimo EÚ do Únie môže byť európsky dopravca zásadnou výhodou. Pri non-EU aerolinke býva ochrana podľa EU261 slabšia alebo nemusí platiť rovnako.",
        },
      ],
    },
  },
  {
    id: "zmeskany-prestup-mimo-eu",
    title: "Zmeškaný prestup mimo EÚ: kedy ešte vzniká nárok na odškodnenie?",
    slug: "zmeskany-prestup-mimo-eu",
    category: "longtail",
    wordCount: 2950,
    readTime: 10,
    excerpt:
      "Čo ak zmeškáte prestup mimo EÚ? Vysvetľujeme, kedy môže stále platiť EU261, prečo je rozhodujúca jedna rezervácia, smer cesty a konečná destinácia.",
    publishDate: "2026-04-13",
    featured: false,
    color: "cyan",
    schema: {
      faqItems: [
        {
          question: "Môžem žiadať odškodnenie, ak som zmeškal prestup mimo EÚ?",
          answer:
            "Často áno, ale nie vždy. Rozhodujúce je, či bola cesta na jednej rezervácii, odkiaľ let začínal a či sa na celý prípad vzťahuje EU261. Samotný fakt, že prestup bol mimo EÚ, ešte nárok automaticky neruší.",
        },
        {
          question: "Je najdôležitejšie, že prestup bol mimo EÚ?",
          answer:
            "Nie. Dôležitejšie býva, či cesta odlietala z EÚ alebo či šlo o prílet do EÚ s európskou aerolinkou. Práve to často rozhoduje viac než samotné miesto prestupu.",
        },
      ],
    },
  },
  {
    id: "nocne-meskanie-hotel-a-prava",
    title: "Nočné meškanie letu: hotel, starostlivosť a práva pasažiera",
    slug: "nocne-meskanie-hotel-a-prava",
    category: "longtail",
    wordCount: 2850,
    readTime: 9,
    excerpt:
      "Čo ak sa meškanie letu pretiahne cez noc? Vysvetľujeme, kedy máte nárok na hotel, transfer, jedlo a prečo je právo na starostlivosť oddelené od kompenzácie.",
    publishDate: "2026-04-13",
    featured: false,
    color: "indigo",
    schema: {
      faqItems: [
        {
          question: "Mám pri nočnom meškaní nárok na hotel?",
          answer:
            "Často áno. Ak nový očakávaný odlet vychádza až na nasledujúci deň, aerolinka má spravidla zabezpečiť hotel a dopravu medzi letiskom a ubytovaním, ak je prenocovanie potrebné.",
        },
        {
          question: "Platí hotel aj vtedy, keď kompenzácia nevznikne?",
          answer:
            "Áno. Právo na hotel patrí do starostlivosti o pasažiera a je oddelené od peňažnej kompenzácie. Aj keď kompenzácia nevznikne, starostlivosť môže stále vzniknúť.",
        },
      ],
    },
  },
  {
    id: "zruseny-let-den-pred-odletom",
    title: "Zrušený let deň pred odletom: čo môžete žiadať a kedy vzniká nárok?",
    slug: "zruseny-let-den-pred-odletom",
    category: "longtail",
    wordCount: 2800,
    readTime: 9,
    excerpt:
      "Čo robiť, ak vám aerolinka zruší let deň pred odletom? Vysvetľujeme kompenzáciu, rerouting, refundáciu, dôkazy aj to, prečo býva tento scenár pre pasažiera silný.",
    publishDate: "2026-04-13",
    featured: false,
    color: "rose",
    schema: {
      faqItems: [
        {
          question: "Ak mi let zrušili deň pred odletom, vzniká nárok automaticky?",
          answer:
            "Nie úplne automaticky, ale vaša pozícia býva veľmi silná. Pri zrušení deň pred odletom sa už spravidla pohybujeme v pásme menej ako 7 dní, takže kľúčové bude, aký rerouting vám aerolinka ponúkla a či preukáže mimoriadne okolnosti.",
        },
        {
          question: "Čo je pri zrušení deň pred odletom najdôležitejšie?",
          answer:
            "Najdôležitejšie je uložiť si pôvodný itinerár, oznámenie o zrušení, nový ponúknutý let a výsledný čas príletu do konečnej destinácie. Práve tieto detaily rozhodujú o kompenzácii.",
        },
      ],
    },
  },
  {
    id: "zruseny-let-menej-ako-14-dni-pred-odletom",
    title: "Zrušený let menej ako 14 dní pred odletom: kedy vzniká nárok?",
    slug: "zruseny-let-menej-ako-14-dni-pred-odletom",
    category: "longtail",
    wordCount: 2900,
    readTime: 10,
    excerpt:
      "Čo ak vám aerolinka zruší let menej ako 14 dní pred odletom? Vysvetľujeme rozdiel medzi 7 až 14 dňami a menej ako 7 dňami, rerouting, refundáciu aj možné zníženie kompenzácie.",
    publishDate: "2026-04-13",
    featured: false,
    color: "red",
    schema: {
      faqItems: [
        {
          question: "Vzniká nárok automaticky, ak let zrušili menej ako 14 dní pred odletom?",
          answer:
            "Nie automaticky. Zrušenie menej ako 14 dní pred odletom je silný signál, ale stále záleží aj na tom, aký rerouting vám aerolinka ponúkla a či nepreukáže mimoriadne okolnosti.",
        },
        {
          question: "Prečo je dôležitý rozdiel medzi 7 až 14 dňami a menej ako 7 dňami?",
          answer:
            "Lebo pri týchto dvoch obdobiach platia odlišné hranice pre prijateľný náhradný let. To môže rozhodnúť, či kompenzácia ostane, alebo nevznikne.",
        },
      ],
    },
  },
  {
    id: "letisko-amsterdam-ams-meskania",
    title: "Letisko Amsterdam (AMS) meškania: čo rozhoduje pri nároku?",
    slug: "letisko-amsterdam-ams-meskania",
    category: "airport",
    airportCode: "AMS",
    airportName: "Amsterdam Schiphol",
    flag: "🇳🇱",
    wordCount: 3000,
    readTime: 10,
    excerpt:
      "Meškal vám, zrušili alebo výrazne presunuli let z alebo do letiska Amsterdam Schiphol (AMS)? Vysvetľujeme, prečo je pri AMS kľúčová konečná destinácia, jedna rezervácia a operujúci dopravca.",
    publishDate: "2026-04-13",
    featured: false,
    color: "orange",
    schema: {
      faqItems: [
        {
          question: "Mám pri meškaní na letisku Amsterdam nárok na odškodnenie?",
          answer:
            "Často áno, ale samotné letisko Amsterdam nárok nevytvára. Rozhodujúca je trasa, meškanie v konečnej destinácii, operujúci dopravca a to, či aerolínka preukáže mimoriadne okolnosti.",
        },
        {
          question: "Prečo je pri AMS taká dôležitá konečná destinácia?",
          answer:
            "Amsterdam Schiphol je veľký prestupný uzol. Pri mnohých cestách nejde len o let do Amsterdamu, ale o celú trasu s prestupom. Preto býva rozhodujúci až výsledok v konečnej destinácii.",
        },
      ],
    },
  },
  {
    id: "letisko-pariz-cdg-meskania",
    title: "Letisko Paríž CDG meškania: čo rozhoduje pri nároku?",
    slug: "letisko-pariz-cdg-meskania",
    category: "airport",
    airportCode: "CDG",
    airportName: "Paríž Charles de Gaulle",
    flag: "🇫🇷",
    wordCount: 3000,
    readTime: 10,
    excerpt:
      "Meškal vám, zrušili alebo výrazne presunuli let z alebo do letiska Paríž Charles de Gaulle (CDG)? Vysvetľujeme, prečo je pri CDG kľúčová konečná destinácia, jedna rezervácia a operujúci dopravca.",
    publishDate: "2026-04-13",
    featured: false,
    color: "rose",
    schema: {
      faqItems: [
        {
          question: "Mám pri meškaní na letisku Paríž CDG nárok na odškodnenie?",
          answer:
            "Často áno, ale samotné letisko CDG nárok nevytvára. Rozhodujúca je trasa, meškanie v konečnej destinácii, operujúci dopravca a to, či aerolínka preukáže mimoriadne okolnosti.",
        },
        {
          question: "Prečo je pri CDG taká dôležitá konečná destinácia?",
          answer:
            "Paríž CDG je veľký prestupný uzol. Pri mnohých cestách nejde len o jeden let do Paríža, ale o celú trasu s prestupom. Preto býva rozhodujúci až výsledok v konečnej destinácii.",
        },
      ],
    },
  },
  {
    id: "letisko-londyn-luton-ltn-meskania",
    title: "Letisko Londýn Luton (LTN) meškania: čo rozhoduje pri nároku?",
    slug: "letisko-londyn-luton-ltn-meskania",
    category: "airport",
    airportCode: "LTN",
    airportName: "Londýn Luton",
    flag: "🇬🇧",
    wordCount: 2950,
    readTime: 10,
    excerpt:
      "Meškal vám, zrušili alebo výrazne presunuli let z alebo do letiska Londýn Luton (LTN)? Vysvetľujeme, prečo pri LTN nestačí pozerať len na low-cost značku a ako fungujú EU261 a UK261.",
    publishDate: "2026-04-13",
    featured: false,
    color: "cyan",
    schema: {
      faqItems: [
        {
          question: "Mám pri meškaní na letisku Londýn Luton nárok na odškodnenie?",
          answer:
            "Často áno, ale samotné letisko Luton nárok nevytvára. Rozhoduje trasa, právny režim letu, meškanie v konečnej destinácii a to, či dopravca preukáže mimoriadne okolnosti.",
        },
        {
          question: "Platí na LTN EU261 alebo UK261?",
          answer:
            "Závisí od smeru letu a od miesta odletu. Pri lete z EÚ do Lutonu môže byť relevantné EU261, pri odlete zo Spojeného kráľovstva sa často rieši UK261. Samotný kód letiska LTN nestačí.",
        },
      ],
    },
  },
  {
    id: "letisko-londyn-stansted-stn-meskania",
    title: "Letisko Londýn Stansted (STN) meškania: čo rozhoduje pri nároku?",
    slug: "letisko-londyn-stansted-stn-meskania",
    category: "airport",
    airportCode: "STN",
    airportName: "Londýn Stansted",
    flag: "🇬🇧",
    wordCount: 3000,
    readTime: 10,
    excerpt:
      "Meškal vám, zrušili alebo výrazne presunuli let z alebo do letiska Londýn Stansted (STN)? Vysvetľujeme, prečo je tu dôležité rozlíšiť EU261, UK261 a samostatné letenky.",
    publishDate: "2026-04-13",
    featured: false,
    color: "sky",
    schema: {
      faqItems: [
        {
          question: "Mám pri meškaní na letisku Londýn Stansted nárok na odškodnenie?",
          answer:
            "Často áno, ale samotné letisko Stansted nárok nevytvára. Rozhodujúca je trasa, právny režim letu, meškanie v konečnej destinácii a to, či dopravca preukáže mimoriadne okolnosti.",
        },
        {
          question: "Platí na STN EU261 alebo UK261?",
          answer:
            "Závisí od smeru letu a od toho, odkiaľ let odlietal. Pri odlete zo Spojeného kráľovstva sa často rieši UK261, pri lete z EÚ do Stansted sa môže uplatniť EU261. Preto je dôležité nepozerať len na samotný kód letiska STN.",
        },
      ],
    },
  },
  {
    id: "letisko-mnichov-muc-meskania",
    title: "Letisko Mníchov (MUC) meškania: čo rozhoduje pri nároku?",
    slug: "letisko-mnichov-muc-meskania",
    category: "airport",
    airportCode: "MUC",
    airportName: "Mníchov",
    flag: "🇩🇪",
    wordCount: 2900,
    readTime: 10,
    excerpt:
      "Meškal vám, zrušili alebo výrazne presunuli let z letiska Mníchov (MUC)? Vysvetľujeme, kedy vzniká nárok a prečo je pri MUC kľúčová konečná destinácia.",
    publishDate: "2026-04-13",
    featured: false,
    color: "blue",
    schema: {
      faqItems: [
        {
          question: "Mám pri meškaní na letisku Mníchov nárok na odškodnenie?",
          answer:
            "Často áno, ale samotné letisko Mníchov nárok nevytvára. Kľúčové je, či let patrí do rozsahu EU261, aké bolo meškanie v konečnej destinácii a či aerolínka nepreukáže mimoriadne okolnosti.",
        },
        {
          question: "Koľko môžem dostať pri probléme na letisku MUC?",
          answer:
            "Ak sa na váš let uplatní EU261, typické pásma bývajú 250 €, 400 € alebo 600 € podľa trasy a okolností. Rozhodujúca je vzdialenosť a výsledok cesty, nie len samotný kód letiska MUC.",
        },
      ],
    },
  },
  {
    id: "letisko-frankfurt-fra-meskania",
    title: "Letisko Frankfurt (FRA) meškania: čo rozhoduje pri nároku?",
    slug: "letisko-frankfurt-fra-meskania",
    category: "airport",
    airportCode: "FRA",
    airportName: "Frankfurt",
    flag: "🇩🇪",
    wordCount: 2900,
    readTime: 10,
    excerpt:
      "Meškal vám, zrušili alebo výrazne presunuli let z letiska Frankfurt (FRA)? Vysvetľujeme, kedy vzniká nárok a prečo je pri FRA kľúčová konečná destinácia.",
    publishDate: "2026-04-13",
    featured: false,
    color: "amber",
    schema: {
      faqItems: [
        {
          question: "Mám pri meškaní na letisku Frankfurt nárok na odškodnenie?",
          answer:
            "Často áno, ale samotné letisko Frankfurt nárok nevytvára. Kľúčové je, či let patrí do rozsahu EU261, aké bolo meškanie v konečnej destinácii a či aerolínka nepreukáže mimoriadne okolnosti.",
        },
        {
          question: "Koľko môžem dostať pri probléme na letisku FRA?",
          answer:
            "Ak sa na váš let uplatní EU261, typické pásma bývajú 250 €, 400 € alebo 600 € podľa trasy a okolností. Rozhodujúca je vzdialenosť a výsledok cesty, nie len samotný kód letiska FRA.",
        },
      ],
    },
  },
  {
    id: "letisko-katovice-ktw-meskania",
    title: "Letisko Katovice (KTW) meškania: čo rozhoduje pri nároku?",
    slug: "letisko-katovice-ktw-meskania",
    category: "airport",
    airportCode: "KTW",
    airportName: "Katovice",
    flag: "🇵🇱",
    wordCount: 2850,
    readTime: 10,
    excerpt:
      "Meškal vám, zrušili alebo výrazne presunuli let z letiska Katovice (KTW)? Vysvetľujeme, kedy vzniká nárok a prečo nestačí pozerať len na samotné letisko.",
    publishDate: "2026-04-13",
    featured: false,
    color: "violet",
    schema: {
      faqItems: [
        {
          question: "Mám pri meškaní na letisku Katovice nárok na odškodnenie?",
          answer:
            "Často áno, ale samotné letisko Katovice nárok nevytvára. Kľúčové je, či let patrí do rozsahu EU261, aké bolo meškanie v konečnej destinácii a či aerolínka nepreukáže mimoriadne okolnosti.",
        },
        {
          question: "Koľko môžem dostať pri probléme na letisku KTW?",
          answer:
            "Ak sa na váš let uplatní EU261, typické pásma bývajú 250 €, 400 € alebo 600 € podľa trasy a okolností. Rozhodujúca je vzdialenosť a výsledok cesty, nie len samotný kód letiska KTW.",
        },
      ],
    },
  },
  {
    id: "letisko-krakov-krk-meskania",
    title: "Letisko Krakov (KRK) meškania: čo rozhoduje pri nároku?",
    slug: "letisko-krakov-krk-meskania",
    category: "airport",
    airportCode: "KRK",
    airportName: "Krakov",
    flag: "🇵🇱",
    wordCount: 2800,
    readTime: 10,
    excerpt:
      "Meškal vám, zrušili alebo výrazne presunuli let z letiska Krakov (KRK)? Vysvetľujeme, kedy vzniká nárok a prečo nestačí pozerať len na samotné letisko.",
    publishDate: "2026-04-13",
    featured: false,
    color: "rose",
    schema: {
      faqItems: [
        {
          question: "Mám pri meškaní na letisku Krakov nárok na odškodnenie?",
          answer:
            "Často áno, ale samotné letisko Krakov nárok nevytvára. Kľúčové je, či let patrí do rozsahu EU261, aké bolo meškanie v konečnej destinácii a či aerolínka nepreukáže mimoriadne okolnosti.",
        },
        {
          question: "Koľko môžem dostať pri probléme na letisku KRK?",
          answer:
            "Ak sa na váš let uplatní EU261, typické pásma bývajú 250 €, 400 € alebo 600 € podľa trasy a okolností. Rozhodujúca je vzdialenosť a výsledok cesty, nie len samotný kód letiska KRK.",
        },
      ],
    },
  },
  {
    id: "letisko-budapest-bud-meskania",
    title: "Letisko Budapešť (BUD) meškania: čo rozhoduje pri nároku?",
    slug: "letisko-budapest-bud-meskania",
    category: "airport",
    airportCode: "BUD",
    airportName: "Budapešť",
    flag: "🇭🇺",
    wordCount: 2800,
    readTime: 10,
    excerpt:
      "Meškal vám, zrušili alebo výrazne presunuli let z letiska Budapešť (BUD)? Vysvetľujeme, kedy vzniká nárok a prečo nestačí pozerať len na samotné letisko.",
    publishDate: "2026-04-13",
    featured: false,
    color: "sky",
    schema: {
      faqItems: [
        {
          question: "Mám pri meškaní na letisku Budapešť nárok na odškodnenie?",
          answer:
            "Často áno, ale samotné letisko Budapešť nárok nevytvára. Kľúčové je, či let patrí do rozsahu EU261, aké bolo meškanie v konečnej destinácii a či aerolínka nepreukáže mimoriadne okolnosti.",
        },
        {
          question: "Koľko môžem dostať pri probléme na letisku BUD?",
          answer:
            "Ak sa na váš let uplatní EU261, typické pásma bývajú 250 €, 400 € alebo 600 € podľa trasy a okolností. Rozhodujúca je vzdialenosť a výsledok cesty, nie len samotný kód letiska BUD.",
        },
      ],
    },
  },
  {
    id: "letisko-praha-prg-meskania",
    title: "Letisko Praha (PRG) meškania: čo rozhoduje pri nároku?",
    slug: "letisko-praha-prg-meskania",
    category: "airport",
    airportCode: "PRG",
    airportName: "Praha",
    flag: "🇨🇿",
    wordCount: 2800,
    readTime: 10,
    excerpt:
      "Meškal vám, zrušili alebo výrazne presunuli let z letiska Praha (PRG)? Vysvetľujeme, kedy vzniká nárok a prečo nestačí pozerať len na samotné letisko.",
    publishDate: "2026-04-13",
    featured: false,
    color: "emerald",
    schema: {
      faqItems: [
        {
          question: "Mám pri meškaní na letisku Praha nárok na odškodnenie?",
          answer:
            "Často áno, ale samotné letisko Praha nárok nevytvára. Kľúčové je, či let patrí do rozsahu EU261, aké bolo meškanie v konečnej destinácii a či aerolínka nepreukáže mimoriadne okolnosti.",
        },
        {
          question: "Koľko môžem dostať pri probléme na letisku PRG?",
          answer:
            "Ak sa na váš let uplatní EU261, typické pásma bývajú 250 €, 400 € alebo 600 € podľa trasy a okolností. Rozhodujúca je vzdialenosť a výsledok cesty, nie len samotný kód letiska PRG.",
        },
      ],
    },
  },
  {
    id: "condor-odskodnenie",
    title: "Condor odškodnenie: kedy vzniká nárok?",
    slug: "condor-odskodnenie",
    category: "airline",
    airlineName: "Condor",
    flag: "🇩🇪",
    wordCount: 2600,
    readTime: 10,
    excerpt:
      "Meškal vám, zrušili alebo výrazne presunuli let Condor? Vysvetľujeme, kedy vzniká nárok na odškodnenie, koľko môžete dostať a prečo sú pri Condore dôležité dovolenkové a dlhé trasy.",
    publishDate: "2026-04-13",
    featured: false,
    color: "amber",
    schema: {
      faqItems: [
        {
          question: "Mám pri lete Condor nárok na odškodnenie?",
          answer:
            "Často áno, ak let patrí do rozsahu EU261, ak ste prišli do konečnej destinácie s meškaním 3 hodiny a viac, ak bol let zrušený za podmienok nariadenia alebo ak iný problém spadá do rozsahu pravidiel. Výška kompenzácie býva typicky 250 €, 400 € alebo 600 € podľa trasy a okolností.",
        },
        {
          question: "Je dôležité, že Condor je dopravca z EÚ?",
          answer:
            "Áno, často áno. Pri letoch Condor späť do EÚ z tretích krajín môže byť fakt, že ide o európskeho dopravcu, veľmi dôležitý pre rozsah EU261. Pri odlete z EÚ je ochrana často zachovaná už samotným miestom odletu.",
        },
      ],
    },
  },
  {
    id: "air-europa-odskodnenie",
    title: "Air Europa odškodnenie: kedy vzniká nárok?",
    slug: "air-europa-odskodnenie",
    category: "airline",
    airlineName: "Air Europa",
    flag: "🇪🇸",
    wordCount: 2650,
    readTime: 10,
    excerpt:
      "Meškal vám, zrušili alebo výrazne presunuli let Air Europa? Vysvetľujeme, kedy vzniká nárok na odškodnenie, koľko môžete dostať a prečo sú pri Air Europa dôležité Madrid a dlhé trasy.",
    publishDate: "2026-04-13",
    featured: false,
    color: "cyan",
    schema: {
      faqItems: [
        {
          question: "Mám pri lete Air Europa nárok na odškodnenie?",
          answer:
            "Často áno, ak let patrí do rozsahu EU261, ak ste prišli do konečnej destinácie s meškaním 3 hodiny a viac, ak bol let zrušený za podmienok nariadenia alebo ak iný problém spadá do rozsahu pravidiel. Výška kompenzácie býva typicky 250 €, 400 € alebo 600 € podľa trasy a okolností.",
        },
        {
          question: "Je dôležité, že Air Europa je dopravca z EÚ?",
          answer:
            "Áno, často áno. Pri letoch Air Europa späť do EÚ z tretích krajín môže byť fakt, že ide o európskeho dopravcu, veľmi dôležitý pre rozsah EU261. Pri odlete z EÚ je ochrana často zachovaná už samotným miestom odletu.",
        },
      ],
    },
  },
  {
    id: "pegasus-airlines-odskodnenie",
    title: "Pegasus Airlines odškodnenie: kedy vzniká nárok?",
    slug: "pegasus-airlines-odskodnenie",
    category: "airline",
    airlineName: "Pegasus Airlines",
    flag: "🇹🇷",
    wordCount: 2700,
    readTime: 10,
    excerpt:
      "Meškal vám, zrušili alebo výrazne presunuli let Pegasus Airlines? Vysvetľujeme, kedy vzniká nárok, prečo je pri Pegasuse kľúčový odlet z EÚ a čo pri claimoch rozhoduje.",
    publishDate: "2026-04-13",
    featured: false,
    color: "orange",
    schema: {
      faqItems: [
        {
          question: "Mám pri lete Pegasus Airlines nárok na odškodnenie?",
          answer:
            "Často áno, ale pri Pegasus Airlines je najprv dôležité určiť, či sa na váš let vôbec uplatní pravidlo 261/2004. Pri letoch z EÚ býva nárok často relevantný. Pri letoch mimo EÚ samotná značka Pegasus zvyčajne nestačí.",
        },
        {
          question: "Je dôležité, že Pegasus Airlines nie je dopravca z EÚ?",
          answer:
            "Áno. Pri Pegasus Airlines je preto veľmi dôležité miesto odletu, operujúci dopravca a štruktúra celej cesty. Pri odlete z EÚ býva ochrana často zachovaná. Pri iných trasách je posúdenie oveľa citlivejšie.",
        },
      ],
    },
  },
  {
    id: "turkish-airlines-odskodnenie",
    title: "Turkish Airlines odškodnenie: kedy vzniká nárok?",
    slug: "turkish-airlines-odskodnenie",
    category: "airline",
    airlineName: "Turkish Airlines",
    flag: "🇹🇷",
    wordCount: 2700,
    readTime: 10,
    excerpt:
      "Meškal vám, zrušili alebo výrazne presunuli let Turkish Airlines? Vysvetľujeme, kedy vzniká nárok, prečo je pri THY kľúčový odlet z EÚ a čo pri claimoch rozhoduje.",
    publishDate: "2026-04-13",
    featured: false,
    color: "sky",
    schema: {
      faqItems: [
        {
          question: "Mám pri lete Turkish Airlines nárok na odškodnenie?",
          answer:
            "Často áno, ale pri Turkish Airlines je najprv dôležité určiť, či sa na váš let uplatní pravidlo 261/2004. Pri letoch z EÚ býva často relevantné. Pri letoch mimo EÚ len samotná značka Turkish Airlines zvyčajne nestačí.",
        },
        {
          question: "Je dôležité, že Turkish Airlines nie je dopravca z EÚ?",
          answer:
            "Áno. Práve preto je pri Turkish Airlines mimoriadne dôležité miesto odletu a štruktúra celej cesty. Pri odlete z EÚ býva ochrana často zachovaná. Pri iných trasách je posúdenie oveľa citlivejšie.",
        },
      ],
    },
  },
  {
    id: "norwegian-odskodnenie",
    title: "Norwegian odškodnenie: kedy vzniká nárok?",
    slug: "norwegian-odskodnenie",
    category: "airline",
    airlineName: "Norwegian",
    flag: "🇳🇴",
    wordCount: 2650,
    readTime: 10,
    excerpt:
      "Meškal vám, zrušili alebo výrazne presunuli let Norwegian? Vysvetľujeme, kedy vzniká nárok na odškodnenie, koľko môžete dostať a prečo je pri Norwegian dôležitý nórsky kontext.",
    publishDate: "2026-04-13",
    featured: false,
    color: "emerald",
    schema: {
      faqItems: [
        {
          question: "Mám pri lete Norwegian nárok na odškodnenie?",
          answer:
            "Často áno, ak let patrí do rozsahu pravidiel 261/2004, ak ste prišli do konečnej destinácie s meškaním 3 hodiny a viac, ak bol let zrušený za podmienok nariadenia alebo ak iný problém spadá do rozsahu pravidiel. Výška kompenzácie býva typicky 250 €, 400 € alebo 600 € podľa trasy a okolností.",
        },
        {
          question: "Je pri Norwegian dôležité, že ide o nórskeho dopravcu?",
          answer:
            "Áno. Pri Norwegian je dôležité dobre čítať nórsky kontext a trasu. Pravidlá sa uplatňujú aj na lety do a z Nórska, takže pri severoeurópskych itinerároch môže byť ochrana stále veľmi silná.",
        },
      ],
    },
  },
  {
    id: "finnair-odskodnenie",
    title: "Finnair odškodnenie: kedy vzniká nárok?",
    slug: "finnair-odskodnenie",
    category: "airline",
    airlineName: "Finnair",
    flag: "🇫🇮",
    wordCount: 2650,
    readTime: 10,
    excerpt:
      "Meškal vám, zrušili alebo výrazne presunuli let Finnair? Vysvetľujeme, kedy vzniká nárok na odškodnenie, koľko môžete dostať a prečo sú pri Finnair dôležité Helsinki a konečná destinácia.",
    publishDate: "2026-04-13",
    featured: false,
    color: "sky",
    schema: {
      faqItems: [
        {
          question: "Mám pri lete Finnair nárok na odškodnenie?",
          answer:
            "Často áno, ak let patrí do rozsahu pravidiel 261/2004, ak ste prišli do konečnej destinácie s meškaním 3 hodiny a viac, ak bol let zrušený za podmienok nariadenia alebo ak iný problém spadá do rozsahu pravidiel. Výška kompenzácie býva typicky 250 €, 400 € alebo 600 € podľa trasy a okolností.",
        },
        {
          question: "Je pri Finnair dôležité, že ide o dopravcu z EÚ?",
          answer:
            "Áno, často áno. Pri letoch Finnair späť do EÚ z tretích krajín môže byť fakt, že ide o európskeho dopravcu, veľmi dôležitý pre rozsah pravidiel 261/2004. Pri odlete z EÚ je ochrana často zachovaná už samotným miestom odletu.",
        },
      ],
    },
  },
  {
    id: "sas-odskodnenie",
    title: "SAS odškodnenie: kedy vzniká nárok?",
    slug: "sas-odskodnenie",
    category: "airline",
    airlineName: "SAS",
    flag: "🇸🇪",
    wordCount: 2700,
    readTime: 10,
    excerpt:
      "Meškal vám, zrušili alebo výrazne presunuli let SAS? Vysvetľujeme, kedy vzniká nárok na odškodnenie, koľko môžete dostať a prečo je pri SAS dôležitý škandinávsky kontext.",
    publishDate: "2026-04-13",
    featured: false,
    color: "indigo",
    schema: {
      faqItems: [
        {
          question: "Mám pri lete SAS nárok na odškodnenie?",
          answer:
            "Často áno, ak let patrí do rozsahu pravidiel 261/2004, ak ste prišli do konečnej destinácie s meškaním 3 hodiny a viac, ak bol let zrušený za podmienok nariadenia alebo ak iný problém spadá do rozsahu pravidiel. Výška kompenzácie býva typicky 250 €, 400 € alebo 600 € podľa trasy a okolností.",
        },
        {
          question: "Je pri SAS dôležité, že lieta často cez Nórsko, Dánsko a Švédsko?",
          answer:
            "Áno. Pri SAS je dôležité dobre čítať škandinávsky kontext a trasu. Pravidlá sa uplatňujú aj na lety do a z Nórska, takže pri severoeurópskych itinerároch môže byť ochrana stále veľmi silná.",
        },
      ],
    },
  },
  {
    id: "swiss-odskodnenie",
    title: "SWISS odškodnenie: kedy vzniká nárok?",
    slug: "swiss-odskodnenie",
    category: "airline",
    airlineName: "SWISS",
    flag: "🇨🇭",
    wordCount: 2700,
    readTime: 10,
    excerpt:
      "Meškal vám, zrušili alebo výrazne presunuli let SWISS? Vysvetľujeme, kedy vzniká nárok na odškodnenie, koľko môžete dostať a prečo je pri SWISS dôležitý švajčiarsky kontext.",
    publishDate: "2026-04-13",
    featured: false,
    color: "red",
    schema: {
      faqItems: [
        {
          question: "Mám pri lete SWISS nárok na odškodnenie?",
          answer:
            "Často áno, ak let patrí do rozsahu pravidiel 261/2004, ak ste prišli do konečnej destinácie s meškaním 3 hodiny a viac, ak bol let zrušený za podmienok nariadenia alebo ak iný problém spadá do rozsahu pravidiel. Výška kompenzácie býva typicky 250 €, 400 € alebo 600 € podľa trasy a okolností.",
        },
        {
          question: "Je SWISS aerolinka z EÚ?",
          answer:
            "Nie. SWISS je švajčiarsky dopravca. Pravidlá 261/2004 sa však uplatňujú aj na lety do a zo Švajčiarska, takže pri SWISS môže byť ochrana pasažiera stále veľmi silná.",
        },
      ],
    },
  },
  {
    id: "transavia-odskodnenie",
    title: "Transavia odškodnenie: kedy vzniká nárok?",
    slug: "transavia-odskodnenie",
    category: "airline",
    airlineName: "Transavia",
    flag: "🇳🇱",
    wordCount: 2600,
    readTime: 10,
    excerpt:
      "Meškal vám, zrušili alebo výrazne presunuli let Transavia? Vysvetľujeme, kedy vzniká nárok na odškodnenie, kedy ide o 250 €, 400 € alebo 600 € a čo pri EU261 rozhoduje.",
    publishDate: "2026-04-13",
    featured: false,
    color: "cyan",
    schema: {
      faqItems: [
        {
          question: "Mám pri lete Transavia nárok na odškodnenie?",
          answer:
            "Často áno, ak let patrí do rozsahu EU261, ak ste prišli do konečnej destinácie s meškaním 3 hodiny a viac, ak bol let zrušený za podmienok nariadenia alebo ak iný problém spadá do rozsahu pravidiel. Výška kompenzácie býva typicky 250 €, 400 € alebo 600 € podľa trasy a okolností.",
        },
        {
          question: "Je dôležité, že Transavia je aerolinka z EÚ?",
          answer:
            "Áno, často áno. Pri letoch Transavia späť do EÚ z tretích krajín môže byť fakt, že ide o európskeho dopravcu, dôležitý pre rozsah EU261. Pri odlete z EÚ je ochrana často zachovaná už samotným miestom odletu.",
        },
      ],
    },
  },
  {
    id: "vueling-odskodnenie",
    title: "Vueling odškodnenie: kedy vzniká nárok?",
    slug: "vueling-odskodnenie",
    category: "airline",
    airlineName: "Vueling",
    flag: "🇪🇸",
    wordCount: 2600,
    readTime: 10,
    excerpt:
      "Meškal vám, zrušili alebo výrazne presunuli let Vueling? Vysvetľujeme, kedy vzniká nárok na odškodnenie, kedy ide o 250 €, 400 € alebo 600 € a čo pri EU261 rozhoduje.",
    publishDate: "2026-04-13",
    featured: false,
    color: "amber",
    schema: {
      faqItems: [
        {
          question: "Mám pri lete Vueling nárok na odškodnenie?",
          answer:
            "Často áno, ak let patrí do rozsahu EU261, ak ste prišli do konečnej destinácie s meškaním 3 hodiny a viac, ak bol let zrušený za podmienok nariadenia alebo ak iný problém spadá do rozsahu pravidiel. Výška kompenzácie býva typicky 250 €, 400 € alebo 600 € podľa trasy a okolností.",
        },
        {
          question: "Je dôležité, že Vueling je aerolinka z EÚ?",
          answer:
            "Áno, často áno. Pri letoch Vueling späť do EÚ z tretích krajín môže byť fakt, že ide o európskeho dopravcu, dôležitý pre rozsah EU261. Pri odlete z EÚ je ochrana často zachovaná už samotným miestom odletu.",
        },
      ],
    },
  },
  {
    id: "iberia-odskodnenie",
    title: "Iberia odškodnenie: kedy vzniká nárok?",
    slug: "iberia-odskodnenie",
    category: "airline",
    airlineName: "Iberia",
    flag: "🇪🇸",
    wordCount: 2650,
    readTime: 10,
    excerpt:
      "Meškal vám, zrušili alebo výrazne presunuli let Iberia? Vysvetľujeme, kedy vzniká nárok na odškodnenie, kedy ide o 250 €, 400 € alebo 600 € a čo pri EU261 rozhoduje.",
    publishDate: "2026-04-13",
    featured: false,
    color: "rose",
    schema: {
      faqItems: [
        {
          question: "Mám pri lete Iberia nárok na odškodnenie?",
          answer:
            "Často áno, ak let patrí do rozsahu EU261, ak ste prišli do konečnej destinácie s meškaním 3 hodiny a viac, ak bol let zrušený za podmienok nariadenia alebo ak iný problém spadá do rozsahu pravidiel. Výška kompenzácie býva typicky 250 €, 400 € alebo 600 € podľa trasy a okolností.",
        },
        {
          question: "Je dôležité, že Iberia je aerolinka z EÚ?",
          answer:
            "Áno, často áno. Pri letoch Iberia späť do EÚ z tretích krajín môže byť fakt, že ide o európskeho dopravcu, veľmi dôležitý pre rozsah EU261. Pri odlete z EÚ je ochrana často zachovaná už samotným miestom odletu.",
        },
      ],
    },
  },
  {
    id: "tap-air-portugal-odskodnenie",
    title: "TAP Air Portugal odškodnenie: kedy vzniká nárok?",
    slug: "tap-air-portugal-odskodnenie",
    category: "airline",
    airlineName: "TAP Air Portugal",
    flag: "🇵🇹",
    wordCount: 2650,
    readTime: 10,
    excerpt:
      "Meškal vám, zrušili alebo výrazne presunuli let TAP Air Portugal? Vysvetľujeme, kedy vzniká nárok na odškodnenie, kedy ide o 250 €, 400 € alebo 600 € a čo pri EU261 rozhoduje.",
    publishDate: "2026-04-13",
    featured: false,
    color: "emerald",
    schema: {
      faqItems: [
        {
          question: "Mám pri lete TAP Air Portugal nárok na odškodnenie?",
          answer:
            "Často áno, ak let patrí do rozsahu EU261, ak ste prišli do konečnej destinácie s meškaním 3 hodiny a viac, ak bol let zrušený za podmienok nariadenia alebo ak iný problém spadá do rozsahu pravidiel. Výška kompenzácie býva typicky 250 €, 400 € alebo 600 € podľa trasy a okolností.",
        },
        {
          question: "Je dôležité, že TAP Air Portugal je aerolinka z EÚ?",
          answer:
            "Áno, často áno. Pri letoch TAP Air Portugal späť do EÚ z tretích krajín môže byť fakt, že ide o európskeho dopravcu, veľmi dôležitý pre rozsah EU261. Pri odlete z EÚ je ochrana často zachovaná už samotným miestom odletu.",
        },
      ],
    },
  },
  {
    id: "british-airways-odskodnenie",
    title: "British Airways odškodnenie: EU261, UK261 a kedy vzniká nárok",
    slug: "british-airways-odskodnenie",
    category: "airline",
    airlineName: "British Airways",
    flag: "🇬🇧",
    wordCount: 2700,
    readTime: 10,
    excerpt:
      "Meškal vám, zrušili alebo výrazne presunuli let British Airways? Vysvetľujeme, kedy vzniká nárok, kedy rozhoduje EU261, kedy UK261 a čo pri BA skutočne treba odlíšiť.",
    publishDate: "2026-04-13",
    featured: false,
    color: "blue",
    schema: {
      faqItems: [
        {
          question: "Mám pri lete British Airways nárok na odškodnenie?",
          answer:
            "Často áno, ale pri British Airways je najprv dôležité určiť, či sa na váš let uplatní EU261 alebo UK261. Pri letoch z EÚ býva často relevantné EU261. Pri letoch z UK a pri časti ďalších trás British Airways býva relevantné UK261.",
        },
        {
          question: "Koľko môžem dostať od British Airways?",
          answer:
            "Pri letoch v rozsahu EU261 bývajú typické pásma 250 €, 400 € alebo 600 € podľa trasy a okolností. Pri letoch v rozsahu UK261 sa pracuje s pevnými sumami v britských librách podľa pravidiel UK.",
        },
      ],
    },
  },
  {
    id: "klm-odskodnenie",
    title: "KLM odškodnenie: kedy vzniká nárok?",
    slug: "klm-odskodnenie",
    category: "airline",
    airlineName: "KLM",
    flag: "🇳🇱",
    wordCount: 2600,
    readTime: 10,
    excerpt:
      "Meškal vám, zrušili alebo výrazne presunuli let KLM? Vysvetľujeme, kedy vzniká nárok na odškodnenie, kedy ide o 250 €, 400 € alebo 600 € a čo pri EU261 rozhoduje.",
    publishDate: "2026-04-13",
    featured: false,
    color: "orange",
    schema: {
      faqItems: [
        {
          question: "Mám pri lete KLM nárok na odškodnenie?",
          answer:
            "Často áno, ak let patrí do rozsahu EU261, ak ste prišli do konečnej destinácie s meškaním 3 hodiny a viac, ak bol let zrušený za podmienok nariadenia alebo ak iný problém spadá do rozsahu pravidiel. Výška kompenzácie býva typicky 250 €, 400 € alebo 600 € podľa trasy a okolností.",
        },
        {
          question: "Je dôležité, že KLM je aerolinka z EÚ?",
          answer:
            "Áno, často áno. Pri letoch KLM späť do EÚ z tretích krajín môže byť fakt, že ide o európskeho dopravcu, veľmi dôležitý pre rozsah EU261. Pri odlete z EÚ je ochrana často zachovaná už samotným miestom odletu.",
        },
      ],
    },
  },
  {
    id: "air-france-odskodnenie",
    title: "Air France odškodnenie: kedy vzniká nárok?",
    slug: "air-france-odskodnenie",
    category: "airline",
    airlineName: "Air France",
    flag: "🇫🇷",
    wordCount: 2600,
    readTime: 10,
    excerpt:
      "Meškal vám, zrušili alebo výrazne presunuli let Air France? Vysvetľujeme, kedy vzniká nárok na odškodnenie, kedy ide o 250 €, 400 € alebo 600 € a čo pri EU261 rozhoduje.",
    publishDate: "2026-04-13",
    featured: false,
    color: "blue",
    schema: {
      faqItems: [
        {
          question: "Mám pri lete Air France nárok na odškodnenie?",
          answer:
            "Často áno, ak let patrí do rozsahu EU261, ak ste prišli do konečnej destinácie s meškaním 3 hodiny a viac, ak bol let zrušený za podmienok nariadenia alebo ak iný problém spadá do rozsahu pravidiel. Výška kompenzácie býva typicky 250 €, 400 € alebo 600 € podľa trasy a okolností.",
        },
        {
          question: "Je dôležité, že Air France je aerolinka z EÚ?",
          answer:
            "Áno, často áno. Pri letoch Air France späť do EÚ z tretích krajín môže byť fakt, že ide o európskeho dopravcu, veľmi dôležitý pre rozsah EU261. Pri odlete z EÚ je ochrana často zachovaná už samotným miestom odletu.",
        },
      ],
    },
  },
  {
    id: "ryanair-vieden-pariz-zruseny-let",
    title: "Ryanair Viedeň – Paríž zrušený let: mám nárok na odškodnenie?",
    slug: "ryanair-vieden-pariz-zruseny-let",
    category: "longtail",
    wordCount: 2500,
    readTime: 9,
    excerpt:
      "Zrušili vám let Ryanair z Viedne do Paríža? Vysvetľujeme, kedy vzniká nárok na odškodnenie, kedy ide typicky o 250 € a ako sa líši refundácia od kompenzácie.",
    publishDate: "2026-04-13",
    featured: false,
    color: "blue",
    schema: {
      faqItems: [
        {
          question: "Mám pri zrušenom lete Ryanair Viedeň – Paríž nárok na odškodnenie?",
          answer:
            "Často áno, najmä ak vás Ryanair informoval menej než 14 dní pred odletom, neponúkol primerané presmerovanie a nepreukáže mimoriadne okolnosti. Pri bežnom samostatnom lete na tejto trase býva typická kompenzácia 250 €.",
        },
        {
          question: "Stačí, že mi vrátia cenu letenky?",
          answer:
            "Nie vždy. Refundácia ceny letenky a kompenzácia za zrušenie sú dve odlišné veci. Pri splnení podmienok EU261 môžete mať nárok na obe vrstvy naraz.",
        },
      ],
    },
  },
  {
    id: "wizz-air-bratislava-barcelona-meskanie-letu",
    title: "Wizz Air Bratislava – Barcelona meškanie letu: mám nárok na odškodnenie?",
    slug: "wizz-air-bratislava-barcelona-meskanie-letu",
    category: "longtail",
    wordCount: 2500,
    readTime: 9,
    excerpt:
      "Meškal vám let Wizz Air z Bratislavy do Barcelony? Vysvetľujeme, kedy vzniká nárok na odškodnenie, prečo býva na tejto trase často 250 € a čo pri EU261 rozhoduje.",
    publishDate: "2026-04-13",
    featured: false,
    color: "purple",
    schema: {
      faqItems: [
        {
          question: "Mám pri lete Wizz Air Bratislava – Barcelona nárok na odškodnenie za meškanie?",
          answer:
            "Často áno, ak ste do konečnej destinácie prišli s meškaním 3 hodiny a viac, let patrí do rozsahu EU261 a Wizz Air nepreukáže mimoriadne okolnosti. Pri bežnom samostatnom lete na tejto trase býva typická kompenzácia 250 €.",
        },
        {
          question: "Mení sa niečo tým, že ide o Wizz Air?",
          answer:
            "Základné pravidlá EU261 sa nemenia. Stále rozhoduje hlavne meškanie pri prílete do konečnej destinácie, rozsah nariadenia a to, či aerolínka vie preukázať mimoriadne okolnosti.",
        },
      ],
    },
  },
  {
    id: "bratislava-londyn-3-hodiny-meskanie-kolko-dostanem",
    title: "Bratislava – Londýn 3 hodiny meškanie: koľko dostanem?",
    slug: "bratislava-londyn-3-hodiny-meskanie-kolko-dostanem",
    category: "longtail",
    wordCount: 2350,
    readTime: 8,
    excerpt:
      "Meškal vám let z Bratislavy do Londýna o 3 hodiny? Vysvetľujeme, kedy býva typická kompenzácia 250 €, prečo sa počíta prílet do cieľa a čo môže nárok oslabiť.",
    publishDate: "2026-04-13",
    featured: false,
    color: "blue",
    schema: {
      faqItems: [
        {
          question: "Koľko dostanem pri 3-hodinovom meškaní na trase Bratislava – Londýn?",
          answer:
            "Pri bežnom samostatnom lete Bratislava – Londýn býva typická kompenzácia 250 €, ak ste do konečnej destinácie prišli s meškaním aspoň 3 hodiny, let patrí do rozsahu EU261 a aerolínka nepreukáže mimoriadne okolnosti.",
        },
        {
          question: "Počíta sa 3-hodinové meškanie pri odlete alebo pri prílete?",
          answer:
            "Pri kompenzácii sa kľúčovo sleduje meškanie pri príchode do konečnej destinácie, nie len to, o koľko neskôr lietadlo odletelo z Bratislavy.",
        },
      ],
    },
  },
  {
    id: "vieden-toronto-odskodnenie",
    title: "Viedeň – Toronto odškodnenie: kedy vzniká nárok?",
    slug: "vieden-toronto-odskodnenie",
    category: "longtail",
    wordCount: 2550,
    readTime: 10,
    excerpt:
      "Leteli ste z Viedne do Toronta a nastal problém? Vysvetľujeme, kedy vzniká nárok na odškodnenie, prečo býva na tejto trase často 600 € a čo pri EU261 skutočne rozhoduje.",
    publishDate: "2026-04-13",
    featured: false,
    color: "blue",
    schema: {
      faqItems: [
        {
          question: "Mám pri trase Viedeň – Toronto nárok na odškodnenie?",
          answer:
            "Často áno, ak ste prišli do konečnej destinácie s meškaním 3 hodiny a viac, ak bol let zrušený za podmienok EU261 alebo ak iný problém spadá do rozsahu pravidiel. Pri bežnom samostatnom lete z Viedne do Toronta býva typická kompenzácia 600 €.",
        },
        {
          question: "Platí EU261 aj pri lete do Kanady?",
          answer:
            "Áno. Pri odlete z Viedne ide o let štartujúci z EÚ, takže pravidlá EU261 sa na trasu do Toronta spravidla vzťahujú aj napriek tomu, že cieľ leží mimo EÚ.",
        },
      ],
    },
  },
  {
    id: "vieden-bangkok-meskanie-letu-eu-aerolinka",
    title: "Viedeň – Bangkok meškanie letu: je EU aerolinka rozhodujúca?",
    slug: "vieden-bangkok-meskanie-letu-eu-aerolinka",
    category: "longtail",
    wordCount: 2600,
    readTime: 10,
    excerpt:
      "Meškal vám let z Viedne do Bangkoku? Vysvetľujeme, kedy vzniká nárok na odškodnenie, prečo býva na tejto trase často 600 € a kedy je EU aerolinka naozaj dôležitá.",
    publishDate: "2026-04-13",
    featured: false,
    color: "purple",
    schema: {
      faqItems: [
        {
          question: "Mám pri lete Viedeň – Bangkok nárok na odškodnenie za meškanie?",
          answer:
            "Často áno, ak ste do konečnej destinácie prišli s meškaním 3 hodiny a viac, let patrí do rozsahu EU261 a aerolínka nepreukáže mimoriadne okolnosti. Pri bežnom samostatnom lete z Viedne do Bangkoku býva typická kompenzácia 600 €.",
        },
        {
          question: "Je pri trase Viedeň – Bangkok rozhodujúce, že ide o EU aerolinku?",
          answer:
            "Nie vždy. Pri odlete z Viedne sa EU261 spravidla uplatní už preto, že let štartuje z EÚ. EU aerolinka je kľúčovejšia najmä pri letoch späť do EÚ z tretích krajín.",
        },
      ],
    },
  },
  {
    id: "vieden-doha-zruseny-let",
    title: "Viedeň – Doha zrušený let: mám nárok na odškodnenie?",
    slug: "vieden-doha-zruseny-let",
    category: "longtail",
    wordCount: 2550,
    readTime: 10,
    excerpt:
      "Zrušili vám let z Viedne do Dohy? Vysvetľujeme, kedy vzniká nárok na odškodnenie, prečo býva na tejto trase často 600 € a ako sa líši refundácia od kompenzácie.",
    publishDate: "2026-04-13",
    featured: false,
    color: "rose",
    schema: {
      faqItems: [
        {
          question: "Mám pri zrušenom lete Viedeň – Doha nárok na odškodnenie?",
          answer:
            "Často áno, najmä ak vás aerolínka informovala menej než 14 dní pred odletom, neponúkla primerané presmerovanie a nepreukáže mimoriadne okolnosti. Pri bežnom samostatnom lete na tejto trase býva typická kompenzácia 600 €.",
        },
        {
          question: "Platí EU261 aj pri lete do Kataru?",
          answer:
            "Áno. Pri odlete z Viedne ide o let štartujúci z EÚ, takže pravidlá EU261 sa na trasu do Dohy spravidla vzťahujú aj napriek tomu, že cieľ leží mimo EÚ.",
        },
      ],
    },
  },
  {
    id: "vieden-istanbul-meskanie-letu",
    title: "Viedeň – Istanbul meškanie letu: mám nárok na odškodnenie?",
    slug: "vieden-istanbul-meskanie-letu",
    category: "longtail",
    wordCount: 2450,
    readTime: 9,
    excerpt:
      "Meškal vám let z Viedne do Istanbulu? Vysvetľujeme, kedy vzniká nárok na odškodnenie, prečo býva na tejto trase často 250 € a prečo rozhoduje meškanie v cieli.",
    publishDate: "2026-04-13",
    featured: false,
    color: "blue",
    schema: {
      faqItems: [
        {
          question: "Mám pri lete Viedeň – Istanbul nárok na odškodnenie za meškanie?",
          answer:
            "Často áno, ak ste do konečnej destinácie prišli s meškaním 3 hodiny a viac, let patrí do rozsahu EU261 a aerolínka nepreukáže mimoriadne okolnosti. Pri bežnom samostatnom lete z Viedne do Istanbulu býva typická kompenzácia 250 €.",
        },
        {
          question: "Platí EU261 aj pri lete do Turecka?",
          answer:
            "Áno. Pri odlete z Viedne ide o let štartujúci z EÚ, takže pravidlá EU261 sa na trasu do Istanbulu spravidla vzťahujú aj napriek tomu, že cieľ leží mimo EÚ.",
        },
      ],
    },
  },
  {
    id: "vieden-dubaj-zruseny-let",
    title: "Viedeň – Dubaj zrušený let: mám nárok na odškodnenie?",
    slug: "vieden-dubaj-zruseny-let",
    category: "longtail",
    wordCount: 2550,
    readTime: 10,
    excerpt:
      "Zrušili vám let z Viedne do Dubaja? Vysvetľujeme, kedy vzniká nárok na odškodnenie, prečo býva na tejto trase často 600 € a ako sa líši refundácia od kompenzácie.",
    publishDate: "2026-04-13",
    featured: false,
    color: "amber",
    schema: {
      faqItems: [
        {
          question: "Mám pri zrušenom lete Viedeň – Dubaj nárok na odškodnenie?",
          answer:
            "Často áno, najmä ak vás aerolínka informovala menej než 14 dní pred odletom, neponúkla primerané presmerovanie a nepreukáže mimoriadne okolnosti. Pri bežnom samostatnom lete na tejto trase býva typická kompenzácia 600 €.",
        },
        {
          question: "Platí EU261 aj pri lete do SAE?",
          answer:
            "Áno. Pri odlete z Viedne ide o let štartujúci z EÚ, takže pravidlá EU261 sa na trasu do Dubaja spravidla vzťahujú aj napriek tomu, že cieľ leží mimo EÚ.",
        },
      ],
    },
  },
  {
    id: "vieden-new-york-meskanie-letu",
    title: "Viedeň – New York meškanie letu: mám nárok na odškodnenie?",
    slug: "vieden-new-york-meskanie-letu",
    category: "longtail",
    wordCount: 2550,
    readTime: 10,
    excerpt:
      "Meškal vám let z Viedne do New Yorku? Vysvetľujeme, kedy vzniká nárok na odškodnenie, prečo býva na tejto trase často 600 € a prečo rozhoduje meškanie v cieli.",
    publishDate: "2026-04-13",
    featured: false,
    color: "blue",
    schema: {
      faqItems: [
        {
          question: "Mám pri lete Viedeň – New York nárok na odškodnenie za meškanie?",
          answer:
            "Často áno, ak ste do konečnej destinácie prišli s meškaním 3 hodiny a viac, let patrí do rozsahu EU261 a aerolínka nepreukáže mimoriadne okolnosti. Pri bežnom samostatnom lete z Viedne do New Yorku býva typická kompenzácia 600 €.",
        },
        {
          question: "Platí EU261 aj pri lete do USA?",
          answer:
            "Áno, pri odlete z Viedne áno. EU261 sa vzťahuje aj na lety z EÚ do tretích krajín, takže pri trase z Viedne do New Yorku je ochrana pravidiel EÚ spravidla zachovaná.",
        },
      ],
    },
  },
  {
    id: "vieden-rim-meskanie-letu",
    title: "Viedeň – Rím meškanie letu: mám nárok na odškodnenie?",
    slug: "vieden-rim-meskanie-letu",
    category: "longtail",
    wordCount: 2400,
    readTime: 9,
    excerpt:
      "Meškal vám let z Viedne do Ríma? Vysvetľujeme, kedy vzniká nárok na odškodnenie, prečo býva na tejto trase často 250 € a prečo rozhoduje meškanie v cieli.",
    publishDate: "2026-04-13",
    featured: false,
    color: "red",
    schema: {
      faqItems: [
        {
          question: "Mám pri lete Viedeň – Rím nárok na odškodnenie za meškanie?",
          answer:
            "Často áno, ak ste do konečnej destinácie prišli s meškaním 3 hodiny a viac, let patrí do rozsahu EU261 a aerolínka nepreukáže mimoriadne okolnosti. Pri bežnom priamom lete z Viedne do Ríma býva typická kompenzácia 250 €.",
        },
        {
          question: "Počíta sa meškanie v odlete alebo v príchode?",
          answer:
            "Pri kompenzácii sa kľúčovo sleduje meškanie pri príchode do konečnej destinácie, nie len to, o koľko neskôr lietadlo odletelo z Viedne.",
        },
      ],
    },
  },
  {
    id: "vieden-amsterdam-zruseny-let",
    title: "Viedeň – Amsterdam zrušený let: mám nárok na odškodnenie?",
    slug: "vieden-amsterdam-zruseny-let",
    category: "longtail",
    wordCount: 2400,
    readTime: 9,
    excerpt:
      "Zrušili vám let z Viedne do Amsterdamu? Vysvetľujeme, kedy vzniká nárok na odškodnenie, prečo býva na tejto trase často 250 € a ako sa líši refundácia od kompenzácie.",
    publishDate: "2026-04-13",
    featured: false,
    color: "blue",
    schema: {
      faqItems: [
        {
          question: "Mám pri zrušenom lete Viedeň – Amsterdam nárok na odškodnenie?",
          answer:
            "Často áno, najmä ak vás aerolínka informovala menej než 14 dní pred odletom, neponúkla primerané presmerovanie a nepreukáže mimoriadne okolnosti. Pri bežnom priamom lete na tejto trase býva typická kompenzácia 250 €.",
        },
        {
          question: "Stačí, že mi vrátia cenu letenky?",
          answer:
            "Nie vždy. Refundácia ceny letenky a kompenzácia za zrušenie sú dve odlišné veci. Pri splnení podmienok EU261 môžete mať nárok na obe vrstvy naraz.",
        },
      ],
    },
  },
  {
    id: "vieden-frankfurt-meskanie-letu",
    title: "Viedeň – Frankfurt meškanie letu: mám nárok na odškodnenie?",
    slug: "vieden-frankfurt-meskanie-letu",
    category: "longtail",
    wordCount: 2400,
    readTime: 9,
    excerpt:
      "Meškal vám let z Viedne do Frankfurtu? Vysvetľujeme, kedy vzniká nárok na odškodnenie, prečo býva na tejto trase často 250 € a prečo je pri FRA dôležitá konečná destinácia.",
    publishDate: "2026-04-13",
    featured: false,
    color: "amber",
    schema: {
      faqItems: [
        {
          question: "Mám pri lete Viedeň – Frankfurt nárok na odškodnenie za meškanie?",
          answer:
            "Často áno, ak ste do konečnej destinácie prišli s meškaním 3 hodiny a viac, let patrí do rozsahu EU261 a aerolínka nepreukáže mimoriadne okolnosti. Pri bežnom priamom lete z Viedne do Frankfurtu býva typická kompenzácia 250 €.",
        },
        {
          question: "Prečo je pri Frankfurte dôležitá jedna rezervácia?",
          answer:
            "Frankfurt je veľký prestupný uzol. Ak bol let z Viedne len prvým úsekom na jednej rezervácii, pri kompenzácii môže byť rozhodujúce meškanie až v konečnej destinácii, nie len samotný prílet do FRA.",
        },
      ],
    },
  },
  {
    id: "kosice-londyn-meskanie-letu",
    title: "Košice – Londýn meškanie letu: mám nárok na odškodnenie?",
    slug: "kosice-londyn-meskanie-letu",
    category: "longtail",
    wordCount: 2400,
    readTime: 9,
    excerpt:
      "Meškal vám let z Košíc do Londýna? Vysvetľujeme, kedy vzniká nárok na odškodnenie, prečo býva na tejto trase často 250 € a čo rozhoduje pri letoch do UK po Brexite.",
    publishDate: "2026-04-13",
    featured: false,
    color: "blue",
    schema: {
      faqItems: [
        {
          question: "Mám pri lete Košice – Londýn nárok na odškodnenie za meškanie?",
          answer:
            "Často áno, ak ste do konečnej destinácie prišli s meškaním 3 hodiny a viac, let patrí do rozsahu EU261 a aerolínka nepreukáže mimoriadne okolnosti. Pri bežnom priamom lete z Košíc do Londýna býva typická kompenzácia 250 €.",
        },
        {
          question: "Platí to aj po Brexite?",
          answer:
            "Áno. Pri odlete z Košíc ide o let odlietaný z EÚ, takže ochrana EU261 sa na takúto cestu naďalej vzťahuje aj pri lete do Spojeného kráľovstva.",
        },
      ],
    },
  },
  {
    id: "vieden-madrid-zruseny-let",
    title: "Viedeň – Madrid zrušený let: mám nárok na odškodnenie?",
    slug: "vieden-madrid-zruseny-let",
    category: "longtail",
    wordCount: 2400,
    readTime: 9,
    excerpt:
      "Zrušili vám let z Viedne do Madridu? Vysvetľujeme, kedy vzniká nárok na odškodnenie, prečo býva na tejto trase často 250 € a ako sa líši refundácia od kompenzácie.",
    publishDate: "2026-04-13",
    featured: false,
    color: "amber",
    schema: {
      faqItems: [
        {
          question: "Mám pri zrušenom lete Viedeň – Madrid nárok na odškodnenie?",
          answer:
            "Často áno, najmä ak vás aerolínka informovala menej než 14 dní pred odletom, neponúkla primerané presmerovanie a nepreukáže mimoriadne okolnosti. Pri bežnom priamom lete na tejto trase býva typická kompenzácia 250 €.",
        },
        {
          question: "Stačí, že mi vrátia cenu letenky?",
          answer:
            "Nie vždy. Refundácia ceny letenky a kompenzácia za zrušenie sú dve odlišné veci. Pri splnení podmienok EU261 môžete mať nárok na obe vrstvy naraz.",
        },
      ],
    },
  },
  {
    id: "vieden-pariz-meskanie-letu",
    title: "Viedeň – Paríž meškanie letu: mám nárok na odškodnenie?",
    slug: "vieden-pariz-meskanie-letu",
    category: "longtail",
    wordCount: 2400,
    readTime: 9,
    excerpt:
      "Meškal vám let z Viedne do Paríža? Vysvetľujeme, kedy vzniká nárok na odškodnenie, prečo býva na tejto trase často 250 € a prečo rozhoduje meškanie v cieli.",
    publishDate: "2026-04-13",
    featured: false,
    color: "red",
    schema: {
      faqItems: [
        {
          question: "Mám pri lete Viedeň – Paríž nárok na odškodnenie za meškanie?",
          answer:
            "Často áno, ak ste do konečnej destinácie prišli s meškaním 3 hodiny a viac, let patrí do rozsahu EU261 a aerolínka nepreukáže mimoriadne okolnosti. Pri bežnom priamom lete z Viedne do Paríža býva typická kompenzácia 250 €.",
        },
        {
          question: "Počíta sa meškanie v odlete alebo v príchode?",
          answer:
            "Pri kompenzácii sa kľúčovo sleduje meškanie pri príchode do konečnej destinácie, nie len to, o koľko neskôr lietadlo odletelo z Viedne.",
        },
      ],
    },
  },
  {
    id: "bratislava-dublin-zruseny-let",
    title: "Bratislava – Dublin zrušený let: mám nárok na odškodnenie?",
    slug: "bratislava-dublin-zruseny-let",
    category: "longtail",
    wordCount: 2400,
    readTime: 9,
    excerpt:
      "Zrušili vám let z Bratislavy do Dublinu? Vysvetľujeme, kedy vzniká nárok na odškodnenie, prečo býva na tejto trase často 250 € a ako sa líši refundácia od kompenzácie.",
    publishDate: "2026-04-13",
    featured: false,
    color: "green",
    schema: {
      faqItems: [
        {
          question: "Mám pri zrušenom lete Bratislava – Dublin nárok na odškodnenie?",
          answer:
            "Často áno, najmä ak vás aerolínka informovala menej než 14 dní pred odletom, neponúkla primerané presmerovanie a nepreukáže mimoriadne okolnosti. Pri bežnom priamom lete na tejto trase býva typická kompenzácia 250 €.",
        },
        {
          question: "Stačí, že mi vrátia cenu letenky?",
          answer:
            "Nie vždy. Refundácia ceny letenky a kompenzácia za zrušenie sú dve odlišné veci. Pri splnení podmienok EU261 môžete mať nárok na obe vrstvy naraz.",
        },
      ],
    },
  },
  {
    id: "bratislava-londyn-meskanie-letu-odskodnenie",
    title: "Bratislava – Londýn meškanie letu: mám nárok na odškodnenie?",
    slug: "bratislava-londyn-meskanie-letu-odskodnenie",
    category: "longtail",
    wordCount: 2400,
    readTime: 9,
    excerpt:
      "Meškal vám let z Bratislavy do Londýna? Vysvetľujeme, kedy vzniká nárok na odškodnenie, prečo býva na tejto trase často 250 € a čo sa mení pri prestupe alebo pri ceste do UK po Brexite.",
    publishDate: "2026-04-13",
    featured: false,
    color: "blue",
    schema: {
      faqItems: [
        {
          question: "Mám pri lete Bratislava – Londýn nárok na odškodnenie za meškanie?",
          answer:
            "Často áno, ak ste do konečnej destinácie prišli s meškaním 3 hodiny a viac, let patrí do rozsahu EU261 a aerolínka nepreukáže mimoriadne okolnosti. Pri bežnom priamom lete z Bratislavy do Londýna býva typická kompenzácia 250 €.",
        },
        {
          question: "Platí to aj po Brexite?",
          answer:
            "Áno. Pri odlete z Bratislavy ide o let odlietaný z EÚ, takže ochrana EU261 sa na takúto cestu naďalej vzťahuje aj pri lete do Spojeného kráľovstva.",
        },
      ],
    },
  },
  {
    id: "aka-je-sanca-na-uspech-reklamacie",
    title: "Aká je šanca na úspech reklamácie?",
    slug: "aka-je-sanca-na-uspech-reklamacie",
    category: "longtail",
    wordCount: 2500,
    readTime: 10,
    excerpt:
      "Aká je reálna šanca, že reklamácia za meškajúci alebo zrušený let uspeje? Vysvetľujeme, čo ju posilňuje, čo ju oslabuje a prečo neexistuje jedno poctivé percento pre všetky prípady.",
    publishDate: "2026-04-13",
    featured: false,
    color: "green",
    schema: {
      faqItems: [
        {
          question: "Aká je šanca na úspech reklamácie?",
          answer:
            "Neexistuje jedno poctivé percento, ktoré by platilo pre všetky prípady. Šanca býva vyššia vtedy, keď je let jasne v rozsahu EU261, máte dobré dokumenty, meškanie alebo zrušenie sa dá dobre preukázať a aerolínka nepreukáže mimoriadne okolnosti.",
        },
        {
          question: "Kedy býva reklamácia silnejšia?",
          answer:
            "Najmä pri meškaní 3 hodiny a viac v cieli, pri zrušení oznámenom neskoro, pri odmietnutí nástupu na palubu alebo pri zmeškanom prestupe v jednej rezervácii. Dôležité je aj to, aby išlo o let, na ktorý sa EU261 vôbec vzťahuje.",
        },
      ],
    },
  },
  {
    id: "oplati-sa-pouzit-firmu-na-odskodnenie",
    title: "Reklamácia sám alebo cez firmu: čo sa viac oplatí?",
    slug: "oplati-sa-pouzit-firmu-na-odskodnenie",
    category: "longtail",
    wordCount: 2500,
    readTime: 10,
    excerpt:
      "Má zmysel riešiť odškodnenie sám, alebo cez firmu? Vysvetľujeme hlavné rozdiely, kedy sa oplatí priama reklamácia a kedy má väčší zmysel externá pomoc.",
    publishDate: "2026-04-13",
    featured: false,
    color: "purple",
    schema: {
      faqItems: [
        {
          question: "Je lepšie podať reklamáciu sám alebo cez firmu?",
          answer:
            "Niekedy áno, niekedy nie. Ak máte jednoduchý prípad a čas riešiť ho sami, vlastná reklamácia môže byť rozumná. Ak je prípad zamietnutý, aerolínka neodpovedá alebo nechcete riešiť ďalšiu eskaláciu sami, firma môže mať väčší zmysel.",
        },
        {
          question: "Aká je provízia ClaimWingeru?",
          answer:
            "ClaimWinger účtuje 30 % províziu bez ohľadu na to, či sa prípad vyrieši mimosúdne alebo súdne. To je dôležité vedieť vopred pri porovnaní s vlastnou reklamáciou.",
        },
      ],
    },
  },
  {
    id: "mozem-ziadat-odskodnenie-za-rodinu",
    title: "Môžem žiadať odškodnenie za rodinu?",
    slug: "mozem-ziadat-odskodnenie-za-rodinu",
    category: "longtail",
    wordCount: 2400,
    readTime: 9,
    excerpt:
      "Dá sa žiadať kompenzácia za celú rodinu? Vysvetľujeme, kedy sa nárok počíta za každého člena zvlášť, čo platí pri deťoch a prečo rezervácia sama nestačí.",
    publishDate: "2026-04-13",
    featured: false,
    color: "green",
    schema: {
      faqItems: [
        {
          question: "Môžem žiadať odškodnenie za rodinu?",
          answer:
            "Áno, často áno. Pri probléme s letom sa nárok typicky posudzuje za každého cestujúceho osobitne, nie len za jednu rezerváciu ako celok. Preto môže mať nárok viac členov rodiny naraz.",
        },
        {
          question: "Dostanú kompenzáciu aj deti?",
          answer:
            "Často áno, najmä ak mali vlastnú rezerváciu alebo lístok na daný let. Pri malých deťoch a infant tarife je však dôležité pozerať aj na to, ako boli v rezervácii vedené a za akých podmienok cestovali.",
        },
      ],
    },
  },
  {
    id: "plati-odskodnenie-pri-charterovych-letoch",
    title: "Platí odškodnenie pri charterových letoch?",
    slug: "plati-odskodnenie-pri-charterovych-letoch",
    category: "longtail",
    wordCount: 2400,
    readTime: 9,
    excerpt:
      "Platí kompenzácia aj pri charterových letoch a dovolenkových balíkoch? Vysvetľujeme, kedy sa uplatní EU261, kedy riešiť aerolinku a kedy má význam aj cestovná kancelária.",
    publishDate: "2026-04-13",
    featured: false,
    color: "amber",
    schema: {
      faqItems: [
        {
          question: "Platí odškodnenie pri charterových letoch?",
          answer:
            "Áno, často áno. Samotný charterový charakter letu nevylučuje práva podľa EU261. Rozhodujúce je skôr to, odkiaľ letel let, kto ho operoval a či išlo o meškanie, zrušenie alebo iný problém, ktorý spadá pod pravidlá EÚ.",
        },
        {
          question: "Mám pri charterovom lete žiadať aerolinku alebo cestovku?",
          answer:
            "Pri kompenzácii podľa EU261 sa typicky rieši operujúca aerolinka. Ak však išlo o balík dovolenky, môžete mať súčasne aj ďalšie práva voči organizátorovi zájazdu podľa pravidiel package travel.",
        },
      ],
    },
  },
  {
    id: "ako-podat-reklamaciu-ita-airways-krok-za-krokom",
    title: "Ako podať reklamáciu ITA Airways krok za krokom",
    slug: "ako-podat-reklamaciu-ita-airways-krok-za-krokom",
    category: "longtail",
    wordCount: 2500,
    readTime: 10,
    excerpt:
      "Návod na reklamáciu ITA Airways cez Modulo di reclamo, vzor v taliančine a eskalácia na ENAC alebo Giudice di Pace. Rozdiel oproti Alitalii.",
    publishDate: "2026-04-24",
    featured: false,
    color: "teal",
    schema: {
      faqItems: [
        {
          question: "Kde podať reklamáciu ITA Airways?",
          answer:
            "Cez formulár Modulo di reclamo na itaspa.com v sekcii Customer Care. V taliančine alebo anglicky.",
        },
        {
          question: "Koľko trvá odpoveď ITA Airways?",
          answer:
            "V praxi 4 – 8 týždňov. Pri komplikovaných prípadoch aj 2 – 3 mesiace.",
        },
        {
          question: "ITA Airways vs Alitalia – proces?",
          answer:
            "ITA od 15. 10. 2021 – reklamácia priamo. Staré Alitalia prípady idú na správcu konkurznej podstaty.",
        },
        {
          question: "Čo robiť pri zamietnutí ITA?",
          answer:
            "Odvolanie, následne ENAC (taliansky NEB) alebo Giudice di Pace / slovenský súd.",
        },
      ],
    },
  },

  {
    id: "ako-podat-reklamaciu-lufthansa-krok-za-krokom",
    title: "Ako podať reklamáciu Lufthansa krok za krokom",
    slug: "ako-podat-reklamaciu-lufthansa-krok-za-krokom",
    category: "longtail",
    wordCount: 2500,
    readTime: 10,
    excerpt:
      "Kompletný návod na reklamáciu Lufthansy vrátane formulára Feedback, vzoru v angličtine a eskalácie na LBA alebo nemecký súd. Platí aj pre Austrian, SWISS, Brussels Airlines.",
    publishDate: "2026-04-24",
    featured: false,
    color: "yellow",
    schema: {
      faqItems: [
        {
          question: "Kde podať reklamáciu Lufthansa?",
          answer:
            "Online formulár Feedback / Kompensationsantrag na lufthansa.com. Rovnaký systém pre Austrian, SWISS, Brussels Airlines.",
        },
        {
          question: "Koľko trvá odpoveď Lufthansa?",
          answer:
            "Oficiálne 28 dní, v praxi 2 – 6 týždňov pri jednoduchých prípadoch.",
        },
        {
          question: "Aký jazyk použiť?",
          answer:
            "Nemčina alebo angličtina. Právny odbor Lufthansy posudzuje ich lepšie než slovenčinu.",
        },
        {
          question: "Akceptuje Lufthansa tretiu stranu?",
          answer:
            "Áno. S plnou mocou môže reklamovať aj špecializovaná firma ako ClaimWinger.",
        },
      ],
    },
  },

  {
    id: "ako-podat-reklamaciu-wizz-air-krok-za-krokom",
    title: "Ako podať reklamáciu Wizz Air krok za krokom (EU261)",
    slug: "ako-podat-reklamaciu-wizz-air-krok-za-krokom",
    category: "longtail",
    wordCount: 2500,
    readTime: 10,
    excerpt:
      "Podrobný návod na EU261 reklamáciu u Wizz Air: formulár, vzor textu, eskalácia, práva cestujúceho a typické chyby pri podaní.",
    publishDate: "2026-04-24",
    featured: false,
    color: "pink",
    schema: {
      faqItems: [
        {
          question: "Cez aký kanál podať reklamáciu Wizz Air?",
          answer:
            "Oficiálny EU261 Claim Form na wizzair.com v sekcii Help Centre. Nie chat ani telefón.",
        },
        {
          question: "Koľko trvá odpoveď Wizz Air?",
          answer:
            "Oficiálne 30 dní, v praxi 4 – 8 týždňov. Pri mlčaní posielajte urgenciu.",
        },
        {
          question: "Čo ak Wizz Air odmietne reklamáciu?",
          answer:
            "Odvolanie s dodatočnými argumentmi, sťažnosť na regulátora alebo odovzdanie špecializovanej firme.",
        },
        {
          question: "Mám prijať voucher 20 % bonus?",
          answer:
            "Opatrne. Voucher je platný obmedzený čas a len s Wizz Air. EU261 vám dáva právo na hotovosť.",
        },
      ],
    },
  },

  {
    id: "airbaltic-odskodnenie",
    title: "airBaltic odškodnenie podľa EU261",
    slug: "airbaltic-odskodnenie",
    category: "airline",
    airlineName: "airBaltic",
    wordCount: 2200,
    readTime: 8,
    excerpt:
      "airBaltic meškal alebo zrušil let cez Rigu? Prehľad nárokov podľa EU261, wet-lease špecifík a typických mimoriadnych okolností v baltickom regióne.",
    publishDate: "2026-04-24",
    featured: false,
    color: "green",
    schema: {
      faqItems: [
        {
          question: "airBaltic je EÚ aerolinka?",
          answer:
            "Áno. airBaltic (BT) má lotyšský AOC. Lety plne podliehajú EU261 pri odlete z EÚ.",
        },
        {
          question: "Koľko dostanem za meškanie letu airBaltic?",
          answer:
            "250 € pri krátkych letoch, 400 € pri letoch nad 1 500 km. airBaltic neoperuje long-haul.",
        },
        {
          question: "airBaltic robí wet-lease – kto platí?",
          answer:
            "Pri wet-lease reklamujete airBaltic ako operujúcu aerolinku, aj keď let predávala Lufthansa alebo SAS.",
        },
        {
          question: "Aké mimoriadne okolnosti airBaltic tvrdí?",
          answer:
            "Zimné počasie v Pobaltí, uzavretý vzdušný priestor pri východnej hranici EÚ. Žiadajte konkrétne dôkazy.",
        },
      ],
    },
  },

  {
    id: "aegean-airlines-odskodnenie",
    title: "Aegean Airlines odškodnenie podľa EU261",
    slug: "aegean-airlines-odskodnenie",
    category: "airline",
    airlineName: "Aegean Airlines",
    wordCount: 2200,
    readTime: 8,
    excerpt:
      "Aegean Airlines meškal alebo zrušil let? Prehľad nárokov podľa EU261 pri letoch do Grécka, cez Atény na ostrovy a do blízkeho Východu.",
    publishDate: "2026-04-24",
    featured: false,
    color: "blue",
    schema: {
      faqItems: [
        {
          question: "Aegean Airlines spadá pod EU261?",
          answer:
            "Áno. Aegean je grécka EÚ aerolinka a členka Star Alliance. Lety plne podliehajú EU261.",
        },
        {
          question: "Koľko dostanem za meškanie letu Aegean?",
          answer:
            "250 € pri krátkych trasách, 400 € pri letoch 1 500 – 3 500 km (napr. Atény – Dubaj), 600 € nad 3 500 km mimo EÚ.",
        },
        {
          question: "Štrajk v Grécku – je to mimoriadna okolnosť?",
          answer:
            "Závisí. Štrajk ATC áno, štrajk vlastnej posádky Aegean nie (rozsudok ECJ C-28/20).",
        },
        {
          question: "Olympic Air a Aegean – kto platí?",
          answer:
            "Olympic Air je dcérska spoločnosť Aegeanu. Reklamujete u operujúcej aerolinky, v praxi zvyčajne cez Aegean customer care.",
        },
      ],
    },
  },

  {
    id: "volotea-odskodnenie",
    title: "Volotea odškodnenie: EU261 pre slovenských cestujúcich",
    slug: "volotea-odskodnenie",
    category: "airline",
    airlineName: "Volotea",
    wordCount: 2100,
    readTime: 8,
    excerpt:
      "Volotea vám meškal alebo zrušil let do Stredomoria? Prehľad nárokov podľa EU261, typických trás z Viedne a Budapešti a postupu reklamácie.",
    publishDate: "2026-04-24",
    featured: false,
    color: "fuchsia",
    schema: {
      faqItems: [
        {
          question: "Volotea je EÚ aerolinka?",
          answer:
            "Áno. Volotea (V7) má španielsky a taliansky AOC. Lety z EÚ plne spadajú pod EU261.",
        },
        {
          question: "Koľko dostanem za meškanie Volotea?",
          answer:
            "250 € pri krátkych trasách, 400 € pri letoch nad 1 500 km. Volotea neoperuje long-haul.",
        },
        {
          question: "Volotea mení letový poriadok pred sezónou – mám nárok?",
          answer:
            "Ak oznámenie prišlo viac než 14 dní pred odletom, kompenzácia nevzniká, ale máte právo na refundáciu.",
        },
        {
          question: "Ako podať reklamáciu Volotea?",
          answer:
            "Cez formulár na volotea.com v sekcii Ayuda / Contacto. Odporúča sa posielať v angličtine alebo španielčine.",
        },
      ],
    },
  },

  {
    id: "ita-airways-odskodnenie",
    title: "ITA Airways odškodnenie podľa EU261 (následník Alitalie)",
    slug: "ita-airways-odskodnenie",
    category: "airline",
    airlineName: "ITA Airways",
    wordCount: 2400,
    readTime: 9,
    excerpt:
      "ITA Airways je nová talianska vlajková aerolinka. Prehľad nárokov pri meškaní alebo zrušení, rozdiel oproti Alitalii a postup reklamácie v taliančine.",
    publishDate: "2026-04-24",
    featured: false,
    color: "emerald",
    schema: {
      faqItems: [
        {
          question: "ITA Airways je to isté ako Alitalia?",
          answer:
            "Nie. ITA Airways vznikla v roku 2021 ako samostatná spoločnosť a neprevzala záväzky Alitalie. Pri starých prípadoch Alitalie treba kontaktovať likvidátora.",
        },
        {
          question: "Mám pri ITA Airways nárok podľa EU261?",
          answer:
            "Áno. ITA Airways je EÚ aerolinka s talianskym AOC a plne spadá pod EU261.",
        },
        {
          question: "Koľko dostanem za meškanie ITA Airways?",
          answer:
            "250 € do 1 500 km, 400 € 1 500 – 3 500 km, 600 € nad 3 500 km mimo EÚ (typicky Rím – USA, Rím – Tokio, Rím – Buenos Aires).",
        },
        {
          question: "Ako dlho trvá reklamácia u ITA Airways?",
          answer:
            "Štandardne 4 – 8 týždňov. Taliansky proces je pomalší ako nemecký alebo holandský.",
        },
      ],
    },
  },

  {
    id: "brussels-airlines-odskodnenie",
    title: "Brussels Airlines odškodnenie podľa EU261",
    slug: "brussels-airlines-odskodnenie",
    category: "airline",
    airlineName: "Brussels Airlines",
    wordCount: 2300,
    readTime: 8,
    excerpt:
      "Brussels Airlines meškal alebo zrušil let? Prehľad nárokov podľa EU261 pri letoch do Afriky, USA aj v rámci Európy. Ako reklamovať a kedy eskalovať.",
    publishDate: "2026-04-24",
    featured: false,
    color: "red",
    schema: {
      faqItems: [
        {
          question: "Mám pri Brussels Airlines nárok na odškodnenie?",
          answer:
            "Áno. Brussels Airlines (SN) je belgická aerolinka v Lufthansa Group. Lety spadajú pod EU261 pri odlete z EÚ aj pri návrate z tretích krajín.",
        },
        {
          question: "Koľko dostanem za meškanie Brussels Airlines?",
          answer:
            "250 € do 1 500 km, 400 € 1 500 – 3 500 km, 600 € nad 3 500 km mimo EÚ. Typická trasa z Bruselu do USA alebo Afriky = 600 €.",
        },
        {
          question: "Ako reklamovať Brussels Airlines?",
          answer:
            "Cez formulár Customer relations na brusselsairlines.com. Odpoveď typicky do 28 dní.",
        },
        {
          question: "Sú belgické štrajky mimoriadne okolnosti?",
          answer:
            "Štrajky samotnej posádky nie sú mimoriadne okolnosti (ECJ C-195/17). Štrajky ATC a externé štrajky áno. Žiadajte od aerolinky konkrétne dôkazy.",
        },
      ],
    },
  },

  {
    id: "easyjet-odskodnenie",
    title: "easyJet odškodnenie: kedy vzniká nárok a koľko dostanete",
    slug: "easyjet-odskodnenie",
    category: "airline",
    airlineName: "easyJet",
    wordCount: 2200,
    readTime: 9,
    excerpt:
      "Sprievodca nárokom na kompenzáciu pri meškaní alebo zrušení letu easyJet podľa EU261 a UK261. Sumy, postup reklamácie a typické mimoriadne okolnosti.",
    publishDate: "2026-04-24",
    featured: false,
    color: "orange",
    schema: {
      faqItems: [
        {
          question: "Mám pri lete easyJet nárok na odškodnenie podľa EU261?",
          answer:
            "Áno. easyJet Europe má rakúsky AOC, takže lety z EÚ letísk plne spadajú do EU261. Pri easyJet UK platí UK261 s ekvivalentnou ochranou.",
        },
        {
          question: "Koľko môžem dostať za meškanie letu easyJet?",
          answer:
            "Pri krátkych letoch 250 €, pri stredných 400 €, pri dlhých 600 €. Väčšina siete easyJet spadá do prvých dvoch kategórií.",
        },
        {
          question: "Ako podať reklamáciu easyJet?",
          answer:
            "Cez oficiálny EU261 Claim Form na webe easyJet. Odpoveď typicky do 14 – 21 dní, výplata do ďalších 14 dní.",
        },
        {
          question: "Platí EU261 pri lete easyJet z UK do EÚ?",
          answer:
            "Pri odlete z UK platí UK261 (takmer identický rámec). Pri odlete z EÚ platí EU261. Sumy sú v oboch prípadoch ekvivalentné.",
        },
      ],
    },
  },

  {
    id: "kto-zaplati-odskodnenie-codeshare-lety",
    title: "Codeshare lety: kto platí odškodnenie za meškanie?",
    slug: "kto-zaplati-odskodnenie-codeshare-lety",
    category: "longtail",
    wordCount: 2500,
    readTime: 9,
    excerpt:
      "Kúpili ste let cez jednu aerolinku, ale operovala ho iná? Kto podľa EU261 platí kompenzáciu a ako efektívne reklamovať v prostredí aliancií a wet-lease.",
    publishDate: "2026-04-24",
    featured: false,
    color: "violet",
    schema: {
      faqItems: [
        {
          question: "Kto platí pri codeshare lete – marketing alebo operating carrier?",
          answer:
            "Podľa EU261 vždy operujúca aerolinka (operating carrier), ktorá let reálne vykonáva – bez ohľadu na to, u ktorej aerolinky ste si lístok kúpili.",
        },
        {
          question: "Ako zistím, ktorá aerolinka let operuje?",
          answer:
            "V potvrdení rezervácie pri údaji operated by. Alternatívne z loga na lietadle a uniformy posádky.",
        },
        {
          question: "Čo ak marketing a operating carrier sa prehadzujú prípad?",
          answer:
            "V reklamácii uveďte obe aerolinky a udržujte paralelnú korešpondenciu. Pri súdnej ceste žaluje sa len operujúca aerolinka.",
        },
        {
          question: "Platí EU261 pri codeshare lete mimo EÚ?",
          answer:
            "Záleží na tom, kto operuje. EÚ aerolinka pri lete z EÚ a pri lete do EÚ – áno. Mimo-EÚ aerolinka pri lete mimo EÚ – nie.",
        },
      ],
    },
  },

  {
    id: "ako-kontaktovat-dopravny-urad-sr-staznost",
    title: "Dopravný úrad SR: ako podať sťažnosť na aerolinku",
    slug: "ako-kontaktovat-dopravny-urad-sr-staznost",
    category: "longtail",
    wordCount: 2400,
    readTime: 9,
    excerpt:
      "Slovenský národný regulátor pre EU261 je Dopravný úrad SR. Návod, kedy sa na neho obrátiť, čo priložiť a ako eskaláciu skombinovať so súdnou cestou.",
    publishDate: "2026-04-24",
    featured: false,
    color: "amber",
    schema: {
      faqItems: [
        {
          question: "Kto je slovenský národný regulátor pre práva cestujúcich?",
          answer:
            "Dopravný úrad SR, Divízia civilného letectva – pôsobí ako National Enforcement Body pre EC 261/2004.",
        },
        {
          question: "Kedy má zmysel sťažovať sa na Dopravný úrad?",
          answer:
            "Keď aerolinka nereaguje dlhšie než 6 týždňov alebo odmietla reklamáciu bez jasného odôvodnenia.",
        },
        {
          question: "Môže Dopravný úrad nariadiť aerolinke vyplatiť peniaze?",
          answer:
            "Priamo nie. Vydáva stanoviská, ktoré aerolinky obvykle rešpektujú, a môže uložiť pokutu pri systémových porušeniach.",
        },
        {
          question: "Koľko trvá posúdenie sťažnosti?",
          answer:
            "Spravidla 2 – 6 mesiacov. Ide o administratívny proces, nie súdne konanie.",
        },
      ],
    },
  },

  {
    id: "metody-vyplatenia-kompenzacie",
    title: "Metódy vyplatenia kompenzácie: prevod, šek alebo voucher?",
    slug: "metody-vyplatenia-kompenzacie",
    category: "longtail",
    wordCount: 2200,
    readTime: 8,
    excerpt:
      "Prevod, šek, voucher alebo hotovosť? Prehľad spôsobov, akými aerolinky vyplácajú kompenzáciu EU261. Čo musíte prijať, čo môžete odmietnuť a ako najrýchlejšie dostať peniaze na účet.",
    publishDate: "2026-04-24",
    featured: false,
    color: "lime",
    schema: {
      faqItems: [
        {
          question: "Aké formy vyplatenia kompenzácie povoľuje EU261?",
          answer:
            "Čl. 7 ods. 3 povoľuje hotovosť, bankový prevod, elektronický transfer, bankové šeky alebo voucher s písomným súhlasom cestujúceho.",
        },
        {
          question: "Môže mi aerolinka dať voucher namiesto peňazí?",
          answer:
            "Len ak výslovne a písomne súhlasíte. Máte právo žiadať hotovosť alebo bankový prevod.",
        },
        {
          question: "Ako rýchlo mi aerolinka vyplatí kompenzáciu?",
          answer:
            "Bežne 14 – 30 dní od schválenia. Pri SEPA prevode do 3 pracovných dní po iniciácii.",
        },
        {
          question: "Je voucher 125 % hodnoty lepšia voľba než hotovosť?",
          answer:
            "Zvyčajne nie. Voucher má obmedzené platnosti, expiráciu a vylúčené sezóny. Hotovosť je univerzálna.",
        },
      ],
    },
  },

  {
    id: "emailova-sablona-reklamacie-aerolinky",
    title: "Vzor reklamácie letu e-mailom: šablóna a návod",
    slug: "emailova-sablona-reklamacie-aerolinky",
    category: "longtail",
    wordCount: 2400,
    readTime: 9,
    excerpt:
      "Overené vzory e-mailovej reklamácie za meškanie alebo zrušenie letu v slovenčine aj angličtine, návod na vyplnenie a prehľad aerolínií.",
    publishDate: "2026-04-24",
    featured: false,
    color: "sky",
    schema: {
      faqItems: [
        {
          question: "Musí reklamácia prísť mailom alebo poštou?",
          answer:
            "Obidve formy sú platné. E-mail je rýchlejší a aerolinky ho zvyčajne prijímajú cez oficiálny formulár. Pri súdnom konaní je preukaznejšia doporučená pošta.",
        },
        {
          question: "Čo je v reklamácii najdôležitejšie?",
          answer:
            "PNR, číslo letu, dátum, trasa, čas meškania, právny základ (nariadenie ES 261/2004), vyčíslená suma, termín na odpoveď a IBAN.",
        },
        {
          question: "V akom jazyku posielať reklamáciu?",
          answer:
            "Slovenskej aerolinke v slovenčine. Zahraničnej v angličtine alebo v národnom jazyku. Odporúčame dvojjazyčné podanie.",
        },
        {
          question: "Čo ak aerolinka neodpovedá do 30 dní?",
          answer:
            "Pošlite urgenciu. Po 14 dňoch eskalujte na Dopravný úrad SR alebo špecializovanú firmu.",
        },
      ],
    },
  },

  {
    id: "ako-zvysit-sance-na-uspech-reklamacie",
    title: "Ako zvýšiť šance na úspech reklamácie letu: 10 krokov",
    slug: "ako-zvysit-sance-na-uspech-reklamacie",
    category: "longtail",
    wordCount: 2800,
    readTime: 11,
    excerpt:
      "Praktický návod v 10 krokoch: od fotografie odletovej tabule cez dôkazovú stratégiu až po eskaláciu. Naučte sa, ako zvýšiť pravdepodobnosť úspešnej reklamácie EU261.",
    publishDate: "2026-04-24",
    featured: false,
    color: "indigo",
    schema: {
      faqItems: [
        {
          question: "Čo najviac zvyšuje šance na úspech reklamácie?",
          answer:
            "Kompletná dokumentácia, jasné uvedenie právneho základu EU261 a odovzdanie prípadu špecializovanej firme pri komplikáciách. Aerolinky často zamietnu prvú reklamáciu, ale ustupujú pri pevne argumentovanom druhom podaní.",
        },
        {
          question: "Aká je priemerná úspešnosť pri samostatnej reklamácii?",
          answer:
            "Pri rutinných prípadoch 30 – 50 %, pri zložitejších 10 – 20 %. Špecializované firmy dosahujú 80 – 95 %, pretože majú právnu infraštruktúru a judikatúru.",
        },
        {
          question: "Kedy sa oplatí odovzdať prípad firme a kedy skúsiť sám?",
          answer:
            "Jednoduché 3-hodinové meškanie s jasným dôkazom často vyriešite sami. Pri zamietnutí, mimoriadnych okolnostiach alebo starších prípadoch je firma efektívnejšia.",
        },
        {
          question: "Koľko je premlčacia doba nárokov na Slovensku?",
          answer:
            "Pre nároky podľa EU261 je na Slovensku uplatniteľná všeobecná 3-ročná premlčacia doba podľa Občianskeho zákonníka.",
        },
      ],
    },
  },

  {
    id: "right-to-care-jedlo-hotel-doprava",
    title: "Právo na starostlivosť: jedlo, hotel a doprava pri meškaní letu",
    slug: "right-to-care-jedlo-hotel-doprava",
    category: "longtail",
    wordCount: 2700,
    readTime: 10,
    excerpt:
      "Čo vám aerolinka musí bezplatne poskytnúť pri meškaní alebo zrušení letu: jedlo, komunikáciu, hotel a dopravu. Prehľadný sprievodca pravidlom right to care podľa EU261.",
    publishDate: "2026-04-24",
    featured: false,
    color: "emerald",
    schema: {
      faqItems: [
        {
          question: "Čo je právo na starostlivosť (right to care) podľa EU261?",
          answer:
            "Je to povinnosť aerolinky bezplatne vám poskytnúť jedlo, nápoje, komunikáciu a v prípade potreby ubytovanie s transportom pri meškaní, zrušení alebo odmietnutí nástupu. Právo platí aj pri kratšom meškaní ako 3 hodiny.",
        },
        {
          question: "Od koľkých hodín meškania mám nárok na občerstvenie?",
          answer:
            "Pri letoch do 1 500 km od 2 hodín, pri letoch 1 500 – 3 500 km od 3 hodín, pri letoch nad 3 500 km mimo EÚ od 4 hodín.",
        },
        {
          question: "Kedy musí aerolinka zaplatiť hotel?",
          answer:
            "Vždy, keď si meškanie alebo zrušenie vyžaduje nocľah. Aerolinka musí uhradiť ubytovanie aj dopravu medzi letiskom a hotelom.",
        },
        {
          question: "Dostanem jedlo a hotel aj pri mimoriadnych okolnostiach?",
          answer:
            "Áno. Právo na starostlivosť platí bez ohľadu na príčinu meškania. Aj keď aerolinka nemusí platiť paušálnu kompenzáciu, pitie, jedlo, hotel a dopravu stále hradí.",
        },
      ],
    },
  },

  {
    id: "menej-ako-3-hodiny-meskanie-odskodnenie",
    title: "Meškanie menej než 3 hodiny: mám nárok na odškodnenie?",
    slug: "menej-ako-3-hodiny-meskanie-odskodnenie",
    category: "longtail",
    wordCount: 2500,
    readTime: 9,
    excerpt:
      "Priletel vám let s meškaním pod 3 hodiny? Vysvetľujeme, kedy paušálna kompenzácia nevzniká, kedy áno a aké iné práva máte podľa EU261 a rozsudkov Sturgeon a Germanwings.",
    publishDate: "2026-04-24",
    featured: false,
    color: "rose",
    schema: {
      faqItems: [
        {
          question: "Mám nárok na odškodnenie, ak som priletel s menej než 3 hodinami meškania?",
          answer:
            "Na paušálnu kompenzáciu 250 / 400 / 600 € podľa EU261 typicky nie. Hranica vychádza z rozsudku C-402/07 (Sturgeon) a platí pre meškanie pri príchode do konečnej destinácie. Ak však let bol zrušený, existujú iné práva – refundácia, presmerovanie, proplácanie výdavkov.",
        },
        {
          question: "Ako sa presne meria 3-hodinová hranica?",
          answer:
            "Rozhodujúci je čas, kedy lietadlo otvorí dvere v konečnej destinácii – nie čas dotyku kolies na zemi. Tak to judikoval Súdny dvor EÚ vo veci C-452/13 (Germanwings).",
        },
        {
          question: "Čo ak meškal iba posledný úsek cesty?",
          answer:
            "Dôležité je meškanie v konečnej destinácii, nie v jednotlivom úseku. Ak ste mali prestup, ráta sa celkový rozdiel oproti pôvodne plánovanému príletu.",
        },
        {
          question: "Môžem aspoň žiadať kompenzáciu za jedlo a hotel?",
          answer:
            "Áno. EU261 hovorí o right to care: pri meškaní od 2 hodín (krátke lety) / 3 hodín (stredné) / 4 hodín (dlhé) musí aerolinka bezplatne zabezpečiť jedlo, nápoje, komunikáciu a v prípade potreby aj ubytovanie s transportom.",
        },
      ],
    },
  },

  {
    id: "predcasny-odlet-letu-odskodnenie",
    title: "Predčasný odlet letu: máte nárok na odškodnenie 250–600 €?",
    slug: "predcasny-odlet-letu-odskodnenie",
    category: "longtail",
    wordCount: 2600,
    readTime: 10,
    excerpt:
      "Posunula aerolinka váš let na skôr? Ak ide o viac než 1 hodinu, pravidlá EÚ to považujú za zrušenie. Vysvetľujeme, kedy máte nárok na 250, 400 alebo 600 € a ako postupovať.",
    publishDate: "2026-04-24",
    featured: false,
    color: "amber",
    schema: {
      faqItems: [
        {
          question: "Môžem žiadať odškodnenie, ak aerolinka posunula let na skôr?",
          answer:
            "Áno, pri posunutí odletu o viac ako 1 hodinu skôr sa let podľa pravidiel EÚ a rozsudku C-146/20 považuje za zrušený. Môžete mať nárok na kompenzáciu 250, 400 alebo 600 € podľa vzdialenosti, ak vás aerolinka informovala menej než 14 dní pred pôvodným odletom.",
        },
        {
          question: "Čo ak bol let posunutý len o pár minút skôr?",
          answer:
            "Menšie posuny pod 1 hodinu sa zatiaľ nepovažujú za zrušenie. Nárok na paušálnu kompenzáciu nevzniká, pokiaľ celá trasa neskončila meškaním pri prílete aspoň o 3 hodiny oproti pôvodnému plánu.",
        },
        {
          question: "Čo ak som zmeškal let, lebo odletel skôr?",
          answer:
            "Ak vás aerolinka o posunutí neinformovala alebo informovala neskoro, máte nárok na refundáciu a pravdepodobne aj na kompenzáciu. Kľúčové je zdokumentovať dátum a čas, kedy vám prišlo oznámenie.",
        },
        {
          question: "Platí to aj pri low-cost aerolinkách ako Ryanair alebo Wizz Air?",
          answer:
            "Áno. Pravidlo o posunutí odletu o viac než 1 hodinu skôr platí pre všetky aerolinky pod EU261 bez ohľadu na to, či ide o tradičnú alebo low-cost spoločnosť.",
        },
      ],
    },
  },

  {
    id: "mozem-ziadat-odskodnenie-pri-zmene-casu-letu",
    title: "Môžem žiadať odškodnenie pri zmene času letu?",
    slug: "mozem-ziadat-odskodnenie-pri-zmene-casu-letu",
    category: "longtail",
    wordCount: 2400,
    readTime: 9,
    excerpt:
      "Zmenila aerolínka čas letu? Vysvetľujeme, kedy ide len o úpravu harmonogramu, kedy sa zmena času považuje za zrušenie a kedy môže vzniknúť nárok na kompenzáciu.",
    publishDate: "2026-04-13",
    featured: false,
    color: "blue",
    schema: {
      faqItems: [
        {
          question: "Môžem žiadať odškodnenie pri zmene času letu?",
          answer:
            "Niekedy áno, ale nie pri každej zmene automaticky. Najdôležitejšie je, či bol let posunutý výrazne skôr, či ho treba právne čítať ako zrušenie, alebo či zmena viedla k dlhému meškaniu pri príchode do cieľa.",
        },
        {
          question: "Čo ak let odlieta skôr než pôvodne?",
          answer:
            "Ak aerolínka presunie odlet o viac ako 1 hodinu skôr, pravidlá EÚ to považujú za zrušený let. V takom prípade sa uplatňujú práva ako pri zrušení, vrátane možnej kompenzácie pri neskorom oznámení.",
        },
      ],
    },
  },
  {
    id: "ake-dokumenty-potrebujem-na-reklamaciu",
    title: "Aké dokumenty potrebujem na reklamáciu?",
    slug: "ake-dokumenty-potrebujem-na-reklamaciu",
    category: "longtail",
    wordCount: 2400,
    readTime: 9,
    excerpt:
      "Aké dokumenty si pripraviť na reklamáciu meškajúceho alebo zrušeného letu? Vysvetľujeme, čo je povinné, čo je len užitočné a čo robiť, ak vám niečo chýba.",
    publishDate: "2026-04-13",
    featured: false,
    color: "blue",
    schema: {
      faqItems: [
        {
          question: "Aké dokumenty potrebujem na reklamáciu letu?",
          answer:
            "Najčastejšie stačí rezervácia alebo PNR, potvrdenie letu, údaje o trase a dátume a všetko, čo pomôže dokázať, že ste boli na konkrétnom lete. Boarding pass je veľmi užitočný, ale nie vždy je jediným možným dôkazom.",
        },
        {
          question: "Je boarding pass povinný?",
          answer:
            "Nie vždy. Pri meškaní alebo zrušení sa dá prípad často postaviť aj na rezervácii, e-mailoch od aerolinky, potvrdení check-inu alebo iných dôkazoch. Pri niektorých sporoch o nástup na palubu je však boarding pass alebo dôkaz včasného check-inu veľmi dôležitý.",
        },
      ],
    },
  },
  {
    id: "potrebujem-pravnika-na-odskodnenie",
    title: "Potrebujem právnika na odškodnenie?",
    slug: "potrebujem-pravnika-na-odskodnenie",
    category: "longtail",
    wordCount: 2500,
    readTime: 10,
    excerpt:
      "Treba si na odškodnenie za let hneď hľadať právnika? Vysvetľujeme, kedy stačí vlastná reklamácia, kedy má zmysel ClaimWinger a kedy je prípad už spornejší.",
    publishDate: "2026-04-13",
    featured: false,
    color: "purple",
    schema: {
      faqItems: [
        {
          question: "Potrebujem právnika na odškodnenie za let?",
          answer:
            "Vo väčšine jednoduchých prípadov nie. Reklamáciu môžete podať sami priamo aerolínke. Právnik alebo profesionálne vedenie prípadu začína dávať väčší zmysel pri zamietnutí, neodpovedaní, spore o mimoriadne okolnosti alebo pri ďalšej eskalácii.",
        },
        {
          question: "Môžem si nárok uplatniť aj bez právnika?",
          answer:
            "Áno. Oficiálne pravidlá EÚ počítajú s tým, že najprv reklamujete priamo u aerolinky a ak treba, môžete sa obrátiť na národný orgán, ADR alebo súd. Právnik nie je povinnou podmienkou už pri prvom kroku.",
        },
      ],
    },
  },
  {
    id: "co-robit-ked-aerolinka-neodpoveda",
    title: "Čo robiť, keď aerolínka neodpovedá?",
    slug: "co-robit-ked-aerolinka-neodpoveda",
    category: "longtail",
    wordCount: 2500,
    readTime: 10,
    excerpt:
      "Aerolínka ignoruje reklamáciu? Vysvetľujeme, čo robiť krok za krokom, kedy sa počíta hranica 2 mesiacov a kedy má zmysel ísť na národný orgán alebo ďalej.",
    publishDate: "2026-04-13",
    featured: false,
    color: "red",
    schema: {
      faqItems: [
        {
          question: "Čo robiť, keď aerolínka neodpovedá?",
          answer:
            "Najprv si odložte dôkaz, že ste reklamáciu skutočne poslali, a skontrolujte, či ste písali správnemu operujúcemu dopravcovi. Ak aerolínka neodpovie do 2 mesiacov, podľa oficiálnych pravidiel EÚ môžete podať sťažnosť príslušnému národnému orgánu.",
        },
        {
          question: "Ako dlho mám čakať na odpoveď aerolínky?",
          answer:
            "Oficiálne usmernenie Your Europe hovorí, že ak nedostanete odpoveď do 2 mesiacov alebo s odpoveďou nie ste spokojní, môžete sa obrátiť na relevantný národný orgán.",
        },
      ],
    },
  },
  {
    id: "ako-dlho-trva-vyplatenie-odskodnenia",
    title: "Ako dlho trvá vyplatenie odškodnenia?",
    slug: "ako-dlho-trva-vyplatenie-odskodnenia",
    category: "longtail",
    wordCount: 2400,
    readTime: 9,
    excerpt:
      "Ako dlho trvá, kým aerolinka vyplatí peniaze za problém s letom? Vysvetľujeme rozdiel medzi refundáciou do 7 dní a kompenzáciou podľa EU261, pri ktorej nie je jednotná lehota.",
    publishDate: "2026-04-13",
    featured: false,
    color: "amber",
    schema: {
      faqItems: [
        {
          question: "Ako dlho trvá vyplatenie odškodnenia za let?",
          answer:
            "Krátka odpoveď je: často niekoľko týždňov až niekoľko mesiacov. Pri samotnej kompenzácii podľa EU261 neexistuje jednotný európsky termín vyplatenia, hoci refundácia ceny letenky má byť pri relevantných situáciách vyplatená do 7 dní.",
        },
        {
          question: "Je kompenzácia povinne vyplatená do 7 dní?",
          answer:
            "Nie. Lehota 7 dní sa v pravidlách EÚ týka najmä refundácie ceny letenky alebo niektorých špecifických refundácií, nie všeobecne každej kompenzácie podľa EU261.",
        },
      ],
    },
  },
  {
    id: "kto-dostane-peniaze-pasazier-alebo-firma",
    title: "Kto dostane peniaze – pasažier alebo firma?",
    slug: "kto-dostane-peniaze-pasazier-alebo-firma",
    category: "longtail",
    wordCount: 2500,
    readTime: 10,
    excerpt:
      "Kto má dostať peniaze za problém s letom, ak letenku platila firma? Vysvetľujeme rozdiel medzi kompenzáciou podľa EU261 a refundáciou ceny letenky.",
    publishDate: "2026-04-13",
    featured: false,
    color: "green",
    schema: {
      faqItems: [
        {
          question: "Kto dostane peniaze – pasažier alebo firma?",
          answer:
            "Pri kompenzácii podľa EU261 je východiskový bod ten, že ide o právo pasažiera. Pri refundácii ceny letenky však môže byť situácia iná, pretože tam zohráva úlohu aj to, kto letenku skutočne zaplatil.",
        },
        {
          question: "Ak služobný let platila firma, patrí kompenzácia zamestnancovi?",
          answer:
            "Vo väčšine praktických situácií sa kompenzácia chápe ako osobné právo cestujúceho za stratu času a nepríjemnosti. Otázka, či ju má zamestnanec interne odovzdať firme, už môže závisieť od pracovných alebo interných pravidiel firmy.",
        },
      ],
    },
  },
  {
    id: "plati-odskodnenie-pri-prestupe",
    title: "Platí odškodnenie pri prestupe?",
    slug: "plati-odskodnenie-pri-prestupe",
    category: "longtail",
    wordCount: 2500,
    readTime: 10,
    excerpt:
      "Platí kompenzácia aj pri prestupných letoch? Vysvetľujeme, kedy rozhoduje jedna rezervácia, prečo sa počíta konečný cieľ a prečo dve samostatné letenky menia celý prípad.",
    publishDate: "2026-04-13",
    featured: false,
    color: "purple",
    schema: {
      faqItems: [
        {
          question: "Platí odškodnenie pri prestupe?",
          answer:
            "Často áno, ale zvyčajne len vtedy, ak sú lety v jednej rezervácii a problém spôsobil meškanie alebo zrušenie, ktoré vás dostalo do konečnej destinácie s veľkým sklzom.",
        },
        {
          question: "Platí kompenzácia aj pri dvoch samostatných letenkách?",
          answer:
            "Zvyčajne nie ako klasický nárok za zmeškaný prestup voči aerolinke. Pri dvoch oddelených rezerváciách si aerolinky spravidla nenesú zodpovednosť za to, že ste nestihli ďalší samostatne kúpený let.",
        },
      ],
    },
  },
  {
    id: "plati-odskodnenie-aj-pre-low-cost-lety",
    title: "Platí odškodnenie aj pre low-cost lety?",
    slug: "plati-odskodnenie-aj-pre-low-cost-lety",
    category: "longtail",
    wordCount: 2400,
    readTime: 9,
    excerpt:
      "Platí kompenzácia aj pri low-cost letoch? Vysvetľujeme, prečo cena letenky nerozhoduje, kedy sa EU261 vzťahuje aj na Ryanair či Wizz Air a od čoho závisí reálny nárok.",
    publishDate: "2026-04-13",
    featured: false,
    color: "blue",
    schema: {
      faqItems: [
        {
          question: "Platí odškodnenie aj pre low-cost lety?",
          answer:
            "Áno. Nízka cena letenky ani typ aerolinky sám o sebe práva neruší. Ak let spadá pod EU261 a sú splnené podmienky nároku, kompenzácia môže patriť aj pri low-cost lete.",
        },
        {
          question: "Má Ryanair alebo Wizz Air iné pravidlá ako klasické aerolinky?",
          answer:
            "Nie v tom zmysle, že by lacnejšia letenka rušila ochranu podľa EU261. Rozhodujúce sú trasa, operujúci dopravca, typ problému a to, či nešlo o mimoriadne okolnosti.",
        },
      ],
    },
  },
  {
    id: "mozem-ziadat-odskodnenie-za-stary-let-2-3-roky",
    title: "Môžem žiadať odškodnenie za starý let (2–3 roky)?",
    slug: "mozem-ziadat-odskodnenie-za-stary-let-2-3-roky",
    category: "longtail",
    wordCount: 2400,
    readTime: 9,
    excerpt:
      "Dá sa ešte riešiť odškodnenie za let starý 2 alebo 3 roky? Vysvetľujeme, prečo odpoveď často znie áno, ale aj to, že presné lehoty závisia od vnútroštátnych pravidiel premlčania.",
    publishDate: "2026-04-13",
    featured: false,
    color: "green",
    schema: {
      faqItems: [
        {
          question: "Môžem žiadať odškodnenie za starý let spred 2 až 3 rokov?",
          answer:
            "Často áno. Pri letoch starých 2 až 3 roky ešte môže byť nárok stále živý, ale presný limit závisí od vnútroštátnych pravidiel premlčania a od toho, kde sa nárok reálne uplatňuje.",
        },
        {
          question: "Existuje jednotná lehota v celej EÚ?",
          answer:
            "Nie. Pravidlá EU261 dávajú právo na kompenzáciu, ale lehoty na súdne vymáhanie sa riadia vnútroštátnymi pravidlami jednotlivých štátov.",
        },
      ],
    },
  },
  {
    id: "mozem-ziadat-odskodnenie-ak-som-prijal-voucher",
    title: "Môžem žiadať odškodnenie, ak som prijal voucher?",
    slug: "mozem-ziadat-odskodnenie-ak-som-prijal-voucher",
    category: "longtail",
    wordCount: 2500,
    readTime: 10,
    excerpt:
      "Prijali ste voucher od aerolinky a neviete, či ešte môžete žiadať odškodnenie? Vysvetľujeme rozdiel medzi refundáciou, kompenzáciou a poukazom ako formou vyplatenia.",
    publishDate: "2026-04-13",
    featured: false,
    color: "amber",
    schema: {
      faqItems: [
        {
          question: "Môžem žiadať odškodnenie, ak som prijal voucher?",
          answer:
            "Často áno, ale záleží na tom, čo presne voucher riešil. Ak išlo len o poukaz na refundáciu ceny letenky alebo o pomoc od aerolinky, samé o sebe to ešte nemusí zrušiť nárok na samostatnú kompenzáciu.",
        },
        {
          question: "Znamená prijatie voucheru automaticky, že som sa vzdal peňazí?",
          answer:
            "Nie automaticky. Podľa pravidiel EU261 musí byť voucher namiesto peňazí založený na jasnom a informovanom súhlase cestujúceho.",
        },
      ],
    },
  },
  {
    id: "mozem-ziadat-odskodnenie-bez-boarding-passu",
    title: "Môžem žiadať odškodnenie bez boarding passu?",
    slug: "mozem-ziadat-odskodnenie-bez-boarding-passu",
    category: "longtail",
    wordCount: 2400,
    readTime: 9,
    excerpt:
      "Dá sa žiadať odškodnenie bez boarding passu? Vysvetľujeme, kedy áno, ktoré dôkazy môžu palubný lístok nahradiť a prečo je pri meškaní dôležité vedieť doložiť aj check-in.",
    publishDate: "2026-04-13",
    featured: false,
    color: "blue",
    schema: {
      faqItems: [
        {
          question: "Môžem žiadať odškodnenie bez boarding passu?",
          answer:
            "Vo veľa prípadoch áno. Dôležité je vedieť preukázať rezerváciu a, pri meškaní alebo odmietnutí nástupu na palubu, aj to, že ste sa na check-in dostavili včas.",
        },
        {
          question: "Čo môžem použiť namiesto boarding passu?",
          answer:
            "Najčastejšie pomôže potvrdenie rezervácie, PNR, e-ticket, emaily od aerolinky, screenshot z aplikácie, potvrdenie check-inu alebo batožinový štítok.",
        },
      ],
    },
  },
  {
    id: "kolko-dostanem-za-zruseny-let",
    title: "Koľko dostanem za zrušený let?",
    slug: "kolko-dostanem-za-zruseny-let",
    category: "longtail",
    wordCount: 2600,
    readTime: 10,
    excerpt:
      "Koľko peňazí patrí za zrušený let? Vysvetľujeme sumy 250 €, 400 € a 600 €, pravidlo 14 dní, zníženie o 50 % pri reroutingu aj rozdiel medzi refundáciou a kompenzáciou.",
    publishDate: "2026-04-13",
    featured: false,
    color: "red",
    schema: {
      faqItems: [
        {
          question: "Koľko dostanem za zrušený let?",
          answer:
            "Základná suma býva 250 €, 400 € alebo 600 € podľa dĺžky trasy, ale nárok závisí aj od času oznámenia zrušenia a od ponúknutého reroutingu.",
        },
        {
          question: "Dostanem kompenzáciu automaticky pri každom zrušenom lete?",
          answer:
            "Nie. Ak vás aerolinka informovala viac ako 14 dní vopred alebo preukáže mimoriadne okolnosti, peňažná kompenzácia nemusí vzniknúť.",
        },
      ],
    },
  },
  {
    id: "kolko-dostanem-za-3-hodinove-meskanie-letu",
    title: "Koľko dostanem za 3-hodinové meškanie letu?",
    slug: "kolko-dostanem-za-3-hodinove-meskanie-letu",
    category: "longtail",
    wordCount: 2400,
    readTime: 9,
    excerpt:
      "Koľko peňazí patrí za 3-hodinové meškanie letu? Jasne vysvetľujeme sumy 250 €, 400 € a 600 €, rozdiel medzi bežným meškaním a reroutingom aj to, prečo sa počíta prílet do cieľa.",
    publishDate: "2026-04-13",
    featured: false,
    color: "green",
    schema: {
      faqItems: [
        {
          question: "Koľko dostanem za 3-hodinové meškanie letu?",
          answer:
            "Najčastejšie ide o 250 €, 400 € alebo 600 € podľa dĺžky trasy, ak let spadá pod EU261 a nešlo o mimoriadne okolnosti.",
        },
        {
          question: "Počíta sa 3-hodinové meškanie pri odlete alebo pri prílete?",
          answer:
            "Pri odškodnení je rozhodujúce meškanie pri prílete do konečnej destinácie, nie samotné meškanie pri odlete.",
        },
      ],
    },
  },
  {
    id: "kolko-hodin-meskania-je-potrebnych-na-odskodnenie",
    title: "Koľko hodín meškania je potrebných na odškodnenie?",
    slug: "kolko-hodin-meskania-je-potrebnych-na-odskodnenie",
    category: "foundation",
    wordCount: 2600,
    readTime: 10,
    excerpt:
      "Koľko hodín musí meškať let, aby vznikol nárok na odškodnenie? Jasne vysvetľujeme hranicu 3 hodín pri prílete, právo na starostlivosť aj refundáciu pri dlhom čakaní.",
    publishDate: "2026-04-13",
    featured: false,
    color: "blue",
    schema: {
      faqItems: [
        {
          question: "Koľko hodín meškania je potrebných na odškodnenie?",
          answer:
            "Najčastejšie ide o hranicu 3 a viac hodín pri prílete do konečnej destinácie, ak let spadá pod EU261 a nešlo o mimoriadne okolnosti.",
        },
        {
          question: "Počíta sa meškanie pri odlete alebo pri prílete?",
          answer:
            "Pri odškodnení je rozhodujúce meškanie pri prílete do konečnej destinácie, nie samotné meškanie pri odlete.",
        },
      ],
    },
  },
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
    title: "Ako získať refundáciu aj kompenzáciu pri zrušenom lete",
    slug: "odwolany-lot-zwrot-czy-odszkodowanie",
    category: "foundation",
    wordCount: 3200,
    readTime: 10,
    excerpt:
      "Dá sa dostať refundácia aj kompenzácia naraz? Vysvetľujeme rozdiel medzi vrátením peňazí a odškodnením, kedy sa obe vrstvy kombinujú a kde sa to najčastejšie mýli.",
    publishDate: "2026-04-13",
    featured: true,
    color: "red",
    schema: {
      faqItems: [
        {
          question: "Môžem pri zrušenom lete dostať refundáciu aj kompenzáciu naraz?",
          answer:
            "Áno, často áno. Refundácia ceny letenky a peňažná kompenzácia podľa EU261 sú dve odlišné vrstvy a v niektorých situáciách môžu vzniknúť súčasne.",
        },
        {
          question: "Ak prijmem náhradný let, strácam refundáciu?",
          answer:
            "Pri prijatí náhradného letu zvyčajne nedostávate refundáciu pôvodnej letenky, pretože cestu aj tak absolvujete. To však automaticky neznamená, že zaniká možná kompenzácia.",
        },
      ],
    },
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
    title: "Ako podať reklamáciu Wizz Air krok za krokom",
    slug: "wizz-air-odszkodowanie",
    category: "airline",
    airlineName: "Wizz Air",
    flag: "🟣",
    wordCount: 3000,
    readTime: 10,
    excerpt: "Praktický návod, ako podať reklamáciu Wizz Air: čo si pripraviť, ako zvoliť správnu claim kategóriu, čo hovoria o 30 dňoch spracovania a čo robiť pri spore.",
    publishDate: "2026-04-13",
    featured: true,
    color: "fuchsia",
    schema: {
      faqItems: [
        {
          question: "Môžem podať reklamáciu Wizz Air priamo sám?",
          answer:
            "Áno. Wizz Air vo svojom help centre odporúča pri neurgentných žiadostiach podať claim priamo cez claim form. Pri jednoduchom prípade to môže byť rozumný prvý krok.",
        },
        {
          question: "Ako dlho Wizz Air spracúva claim?",
          answer:
            "Wizz Air vo svojom help centre uvádza, že sa snaží vybaviť claims a written requests do 30 dní. To však neznamená, že každý spor sa v praxi naozaj uzavrie bez ďalších otázok v tomto čase.",
        },
      ],
    }
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
    title: "Môžem žiadať odškodnenie za zmeškaný prestup?",
    slug: "zmeskany-prestup-kompenzacia",
    category: "foundation",
    wordCount: 2600,
    readTime: 10,
    excerpt:
      "Zmeškali ste prestup kvôli meškaniu prvého letu? Vysvetľujeme, kedy vzniká nárok na kompenzáciu, prečo rozhoduje jedna rezervácia a prečo sa počíta prílet do konečnej destinácie.",
    publishDate: "2026-04-13",
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
    slug: "kompletny-przewodnik-odszkodowanie",
    category: "foundation",
    wordCount: 8500,
    readTime: 15,
    excerpt: "Všetko, čo potrebujete vedieť o právach cestujúcich a odškodneniach za lety.",
    publishDate: "2026-02-28",
    featured: true,
    color: "blue"
  },
  {
    id: "lot-oneskoreny-let-odskodnenie",
    title: "Odškodnenie za oneskorený let LOT Polish Airlines",
    slug: "lot-oneskoreny-let-odskodnenie",
    category: "airline",
    airlineName: "LOT Polish Airlines",
    wordCount: 7200,
    readTime: 12,
    excerpt: "Kompletný sprievodca pre slovenských cestujúcich - až 600 € odškodnenie.",
    publishDate: "2026-03-05",
    featured: true,
    color: "blue"
  },
  {
    id: "lot-zrusil-let-odskodnenie",
    title: "LOT zrušil let - Ako získať odškodnenie až 600 €",
    slug: "lot-zrusil-let-odskodnenie",
    category: "airline",
    airlineName: "LOT Polish Airlines",
    wordCount: 6800,
    readTime: 14,
    excerpt: "Krok za krokom sprievodca získaním odškodnenia pri zrušenom lete LOT.",
    publishDate: "2026-03-05",
    featured: true,
    color: "blue"
  },
  {
    id: "lot-odmieta-vyplatit-odskodnenie",
    title: "LOT odmieta vyplatiť odškodnenie - Čo robiť ďalej?",
    slug: "lot-odmieta-vyplatit-odskodnenie",
    category: "airline",
    airlineName: "LOT Polish Airlines",
    wordCount: 6200,
    readTime: 13,
    excerpt: "5 krokov ako prelomiť zamietnutie LOT a najčastejšie výhovorky.",
    publishDate: "2026-03-05",
    featured: true,
    color: "red"
  },
  {
    id: "lot-poukaz-odskodnenie-voucher",
    title: "LOT ponúka voucher namiesto odškodnenia - Musíte ho prijať?",
    slug: "lot-poukaz-odskodnenie-voucher",
    category: "foundation",
    wordCount: 4500,
    readTime: 10,
    excerpt: "Prečo je hotovosť lepšia ako voucher a ako odmietnuť poukaz od LOT.",
    publishDate: "2026-03-05",
    featured: true,
    color: "amber"
  },
  {
    id: "ako-dlho-trva-odskodnenie-lot",
    title: "Koľko trvá vyplatenie odškodnenia od LOT?",
    slug: "ako-dlho-trva-odskodnenie-lot",
    category: "foundation",
    wordCount: 3800,
    readTime: 8,
    excerpt: "Aktuálne časy vyplácania a ako urýchliť proces získania peňazí.",
    publishDate: "2026-03-05",
    featured: true,
    color: "purple"
  },
  {
    id: "maximalna-vyska-odskodnenia-lot",
    title: "Maximálna výška odškodnenia za let LOT - 250 €, 400 € alebo 600 €?",
    slug: "maximalna-vyska-odskodnenia-lot",
    category: "airline",
    airlineName: "LOT Polish Airlines",
    wordCount: 5200,
    readTime: 11,
    excerpt: "Kalkulátor odškodnenia podľa vzdialenosti letu s LOT Polish Airlines.",
    publishDate: "2026-03-05",
    featured: true,
    color: "green"
  },
  // NOVÉ ARTYKUŁY (Batch 2)
  {
    id: "austrian-airlines-meskanie-odskodnenie",
    title: "Austrian Airlines – meškanie a zrušenie letu: Návod na odškodnenie",
    slug: "austrian-airlines-meskanie-odskodnenie",
    category: "airline",
    airlineName: "Austrian Airlines",
    flag: "🇦🇹",
    wordCount: 1800,
    readTime: 9,
    excerpt: "Letíte z Viedne a váš let Austrian Airlines meškal? Zistite, ako získať až 600 € odškodné. Kompletný návod pre slovenských cestujúcich.",
    publishDate: "2026-03-06",
    featured: false,
    color: "red"
  },
  {
    id: "eurowings-odskodnenie-meskanie",
    title: "Eurowings – odškodnenie za meškanie letu: Čo musíte vedieť?",
    slug: "eurowings-odskodnenie-meskanie",
    category: "airline",
    airlineName: "Eurowings",
    flag: "🇩🇪",
    wordCount: 1650,
    readTime: 8,
    excerpt: "Nízkonákladovka Eurowings vám zrušila let? Poznáte svoje práva? Zistite, kedy vám patrí finančná kompenzácia a ako o ňu požiadať.",
    publishDate: "2026-03-06",
    featured: false,
    color: "purple"
  },
  {
    id: "lufthansa-odskodnenie-meskanie",
    title: "Ako podať reklamáciu Lufthansa krok za krokom",
    slug: "lufthansa-odskodnenie-meskanie",
    category: "airline",
    airlineName: "Lufthansa",
    flag: "🇩🇪",
    wordCount: 3000,
    readTime: 10,
    excerpt:
      "Praktický návod, ako podať reklamáciu Lufthansa: čo si pripraviť, ako oddeliť kompenzáciu od refundácie a prečo sú pri prestupoch cez FRA a MUC dôležité jedna rezervácia a konečná destinácia.",
    publishDate: "2026-04-13",
    featured: true,
    color: "yellow",
    schema: {
      faqItems: [
        {
          question: "Môžem podať reklamáciu Lufthansa priamo sám?",
          answer:
            "Áno. Lufthansa má oficiálnu online žiadosť na kompenzáciu a náhradu nákladov pri narušení letu, takže pri jednoduchom prípade dáva zmysel začať priamo tam.",
        },
        {
          question: "Mám pri Lufthanse riešiť kompenzáciu a refundáciu spolu?",
          answer:
            "Nie vždy. Kompenzácia za stratu času, refundácia letenky a náklady počas narušenia letu sú odlišné nároky, preto je dobré ich hneď na začiatku rozlíšiť.",
        },
      ],
    },
  },
  {
    id: "ako-podat-staznost-letecka-spolocnost",
    title: "Ako podať sťažnosť leteckej spoločnosti? Vzor a postup krok za krokom",
    slug: "ako-podat-staznost-letecka-spolocnost",
    category: "longtail",
    wordCount: 2500,
    readTime: 12,
    excerpt: "Chcete žiadať o odškodnenie sami? Ponúkame vám návod, ako napísať sťažnosť, čo do nej uviesť a kde ju poslať. Ušetrite čas a nervy.",
    publishDate: "2026-03-06",
    featured: false,
    color: "blue"
  },
  {
    id: "zamietnuta-reklamacia-co-robit",
    title: "Čo robiť, keď aerolínka zamietne reklamáciu?",
    slug: "zamietnuta-reklamacia-co-robit",
    category: "longtail",
    wordCount: 2500,
    readTime: 10,
    excerpt:
      "Dostali ste zamietnutie reklamácie za let? Vysvetľujeme, ako čítať dôvod odmietnutia, kedy môže mať aerolínka pravdu a kedy má zmysel ísť ďalej.",
    publishDate: "2026-04-13",
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
