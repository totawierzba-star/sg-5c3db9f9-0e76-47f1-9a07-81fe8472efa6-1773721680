import type { BlogArticleHu } from "@/lib/blogArticlesHu";

export type HuArticleSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type HuArticleFaq = {
  question: string;
  answer: string;
};

export type HuArticleContent = {
  title: string;
  seoTitle: string;
  description: string;
  category: string;
  quickAnswer: string[];
  sections: HuArticleSection[];
  faqs: HuArticleFaq[];
  ctaPath: "/hu" | "/hu/kesett-jarat" | "/hu/torolt-jarat";
  ctaAnchor: string;
};

const categoryLabels: Record<string, string> = {
  Procedura: "Eljárás",
  Osszehasonlitas: "Összehasonlítás",
  "Problema-specifikus": "Probléma szerinti útmutató",
  "Utvonal-specifikus": "Útvonal szerinti útmutató",
  "Repuloteri utmutato": "Repülőtéri útmutató",
  "Legitarsasag-specifikus": "Légitársasági útmutató",
  "Gyors valaszok": "Gyors válaszok",
  "Eljaras es hataridok": "Eljárás és határidők",
  "EU261 alapok": "EU261 alapok",
  "Gyakorlati teendok": "Gyakorlati teendők",
};

const textReplacements: Array<[RegExp, string]> = [
  [/\bairline\b/gi, "légitársaság"],
  [/\baz légitársaság\b/gi, "a légitársaság"],
  [/\bclaimedet\b/gi, "kártérítési ügyedet"],
  [/\bclaim companyt\b/gi, "kártérítési szolgáltatót"],
  [/\bclaim partner\b/gi, "kártérítési partnert"],
  [/\bclaim\b/gi, "kártérítési ügy"],
  [/\bChecklist\b/g, "Ellenőrző lista"],
  [/\bchecklista\b/gi, "ellenőrző lista"],
  [/\bkarteritesi\b/gi, "kártérítési"],
  [/\bkarterites\b/gi, "kártérítés"],
  [/\bkesett\b/gi, "késett"],
  [/\bkeses\b/gi, "késés"],
  [/\btorolt\b/gi, "törölt"],
  [/\btorles\b/gi, "törlés"],
  [/\btulfoglalas\b/gi, "túlfoglalás"],
  [/\bjaratkeses\b/gi, "járatkésés"],
  [/\bjaratokra\b/gi, "járatokra"],
  [/\bjaratok\b/gi, "járatok"],
  [/\bjaratodat\b/gi, "járatodat"],
  [/\bjaratra\b/gi, "járatra"],
  [/\bjarat\b/gi, "járat"],
  [/\blegitarsasagok\b/gi, "légitársaságok"],
  [/\blegitarsasagnak\b/gi, "légitársaságnak"],
  [/\blegitarsasaggal\b/gi, "légitársasággal"],
  [/\blegitarsasag\b/gi, "légitársaság"],
  [/\blegifuvarozo\b/gi, "légifuvarozó"],
  [/\brepuloteri\b/gi, "repülőtéri"],
  [/\brepuloter\b/gi, "repülőtér"],
  [/\brepulogep\b/gi, "repülőgép"],
  [/\butmutato\b/gi, "útmutató"],
  [/\bmukodik\b/gi, "működik"],
  [/\bmikor jar\b/gi, "mikor jár"],
  [/\bjar\b/gi, "jár"],
  [/\bervenyes\b/gi, "érvényes"],
  [/\balkalmazhato\b/gi, "alkalmazható"],
  [/\bigényles\b/gi, "igénylés"],
  [/\bigenyles\b/gi, "igénylés"],
  [/\bigenyelni\b/gi, "igényelni"],
  [/\bigenytol\b/gi, "igénytől"],
  [/\bigenyt\b/gi, "igényt"],
  [/\bigeny\b/gi, "igény"],
  [/\bkifizetesig\b/gi, "kifizetésig"],
  [/\bkifizetes\b/gi, "kifizetés"],
  [/\bkarteritest\b/gi, "kártérítést"],
  [/\bkarteriteshez\b/gi, "kártérítéshez"],
  [/\bkarteritesre\b/gi, "kártérítésre"],
  [/\bkarteritesrol\b/gi, "kártérítésről"],
  [/\bkotelesek\b/gi, "kötelesek"],
  [/\bvisszamenoleg\b/gi, "visszamenőleg"],
  [/\bidok\b/gi, "idők"],
  [/\bregi\b/gi, "régi"],
  [/\bszamits\b/gi, "számíts"],
  [/\bbeadasa\b/gi, "beadása"],
  [/\butan\b/gi, "után"],
  [/\btegyel\b/gi, "tegyél"],
  [/\btorlik\b/gi, "törlik"],
  [/\blepesek\b/gi, "lépések"],
  [/\brefundhoz\b/gi, "visszatérítéshez"],
  [/\brefund\b/gi, "visszatérítés"],
  [/\batfoglalashoz\b/gi, "átfoglaláshoz"],
  [/\bkesik\b/gi, "késik"],
  [/\bjaratod\b/gi, "járatod"],
  [/\bteendok\b/gi, "teendők"],
  [/\bmagyarazata\b/gi, "magyarázata"],
  [/\bindulo\b/gi, "induló"],
  [/\berkezo\b/gi, "érkező"],
  [/\beseten\b/gi, "esetén"],
  [/\bkonkretan\b/gi, "konkrétan"],
  [/\bsajat\b/gi, "saját"],
  [/\bcelallomas\b/gi, "célállomás"],
  [/\bmerteke\b/gi, "mértéke"],
  [/\bkorulmenyek\b/gi, "körülmények"],
  [/\bkorebe\b/gi, "körébe"],
  [/\bkovetkezo\b/gi, "következő"],
  [/\bes\b/gi, "és"],
  [/\belutasitjak\b/gi, "elutasítják"],
  [/\bvisszaterites\b/gi, "visszatérítés"],
  [/\batfoglalas\b/gi, "átfoglalás"],
  [/\batszallasos\b/gi, "átszállásos"],
  [/\batszallas\b/gi, "átszállás"],
  [/\bkivuli\b/gi, "kívüli"],
  [/\belavulasi\b/gi, "elévülési"],
  [/\bidos\b/gi, "idős"],
  [/\bido\b/gi, "idő"],
  [/\boras\b/gi, "órás"],
  [/\bora\b/gi, "óra"],
  [/\bszabalyai\b/gi, "szabályai"],
  [/\bszabaly\b/gi, "szabály"],
  [/\bosszegek\b/gi, "összegek"],
  [/\bkivetelek\b/gi, "kivételek"],
  [/\bfo\b/gi, "fő"],
  [/\bpenzbeli\b/gi, "pénzbeli"],
  [/\bpenz\b/gi, "pénz"],
  [/\bcegen\b/gi, "cégen"],
  [/\bcegek\b/gi, "cégek"],
  [/\bkozott\b/gi, "között"],
  [/\bkulonbseg\b/gi, "különbség"],
  [/\bkulon\b/gi, "külön"],
  [/\bvasarolt\b/gi, "vásárolt"],
  [/\bdonto\b/gi, "döntő"],
  [/\bBecs\b/g, "Bécs"],
  [/\bParizs\b/g, "Párizs"],
  [/\bMunchen\b/g, "München"],
  [/\bPraga\b/g, "Prága"],
  [/\bEU-bol\b/g, "EU-ból"],
  [/\bEU-n kivuli\b/gi, "EU-n kívüli"],
  [/\bLepesrol lepesre\b/gi, "Lépésről lépésre"],
  [/\bAttekintheto\b/gi, "Áttekinthető"],
  [/\bHany ora\b/gi, "Hány óra"],
  [/\beuro\b/gi, "euró"],
];

export function cleanHuText(value: string) {
  return textReplacements.reduce(
    (result, [pattern, replacement]) => result.replace(pattern, replacement),
    value,
  );
}

export function formatHuCategory(category: string) {
  return categoryLabels[category] || cleanHuText(category);
}

export function getClaimWingerHuUrl(
  path: HuArticleContent["ctaPath"],
  slug: string,
  medium: "context_link" | "embedded_cta" | "article_cta",
  content: string,
) {
  const params = new URLSearchParams({
    utm_source: "problemlot-hu",
    utm_medium: medium,
    utm_campaign: slug,
    utm_content: content,
  });

  return `https://claimwinger.com${path}?${params.toString()}`;
}

function inferCtaPath(article: BlogArticleHu): HuArticleContent["ctaPath"] {
  const value = `${article.slug} ${article.title}`.toLowerCase();

  if (value.includes("torles") || value.includes("torolt") || value.includes("törlés")) {
    return "/hu/torolt-jarat";
  }

  if (value.includes("keses") || value.includes("kesett") || value.includes("késés")) {
    return "/hu/kesett-jarat";
  }

  return "/hu";
}

function inferTopic(article: BlogArticleHu) {
  const slug = article.slug;
  const title = cleanHuText(article.title);
  const category = formatHuCategory(article.category);

  if (category === "Légitársasági útmutató") {
    return {
      kind: "airline",
      entity: title.replace(/\s*[–-].*$/, "").replace(/\s+kártérítés.*$/i, "").trim(),
    };
  }

  if (category === "Repülőtéri útmutató") {
    return {
      kind: "airport",
      entity: title.replace(/\s*[–-].*$/, "").replace(/\s+késések.*$/i, "").trim(),
    };
  }

  if (category === "Útvonal szerinti útmutató") {
    return {
      kind: "route",
      entity: title.replace(/\s*[–-].*$/, "").replace(/:\s.*$/, "").trim(),
    };
  }

  if (slug.includes("torles") || slug.includes("torolt")) {
    return { kind: "cancellation", entity: title };
  }

  if (slug.includes("keses") || slug.includes("kesett")) {
    return { kind: "delay", entity: title };
  }

  if (category === "EU261 alapok") {
    return { kind: "foundation", entity: title };
  }

  if (category === "Összehasonlítás") {
    return { kind: "comparison", entity: title };
  }

  return { kind: "procedure", entity: title };
}

function quickAnswerFor(kind: string, entity: string) {
  if (kind === "airline") {
    return [
      `${entity} esetén is járhat EU261 szerinti kártérítés, ha a járat az EU/EGT vagy az Egyesült Királyság releváns szabályai alá tartozik, és a légitársaság felelősségi körében történt a zavar.`,
      "A döntő pont nem a jegy ára vagy a márka, hanem az útvonal, a tényleges üzemeltető, a végső érkezési késés és az, hogy volt-e rendkívüli körülmény.",
      "Ha a végső célállomásra legalább 3 órával később érkeztél, vagy a törlésről későn kaptál értesítést, érdemes az ügyet azonnal ellenőrizni.",
    ];
  }

  if (kind === "airport") {
    return [
      `${entity} esetén az EU261 szempontjából először azt kell nézni, honnan indult a járat, melyik légitársaság üzemeltette, és mennyi lett a végső késés.`,
      "Repülőtéri káosz, átszállási gond vagy új útvonal esetén a teljes utazási lánc számít, nem csak az első indulási késés.",
      "Őrizd meg a beszállókártyát, a foglalási kódot, a légitársaság üzeneteit, a kijelzőfotókat és minden költségbizonylatot.",
    ];
  }

  if (kind === "route") {
    return [
      `${entity} útvonalon akkor lehet erős kártérítési ügy, ha az EU261 alkalmazható, és a zavar legalább 3 órás végső érkezési késést vagy komoly törlési következményt okozott.`,
      "Hosszabb vagy átszállásos útvonalnál a végső célállomásra érkezés időpontja fontosabb, mint az első járat indulási csúszása.",
      "A 250, 400 vagy 600 eurós sávot főleg a távolság és az útvonal jellege határozza meg, nem a jegy ára.",
    ];
  }

  if (kind === "comparison") {
    return [
      "A saját igénylés akkor lehet jó, ha az ügy egyszerű, minden dokumentum megvan, és van időd következetesen kommunikálni a légitársasággal.",
      "Szolgáltató akkor hasznos, ha a légitársaság nem válaszol, sablonosan elutasít, vagy a bizonyítás és a jogi értelmezés már túl sok időt venne el.",
      "A jó döntéshez nem csak a díjat kell nézni, hanem a kockázatot, az időráfordítást és azt, ki viszi tovább az ügyet vitás helyzetben.",
    ];
  }

  return [
    "EU261 alapján pénzbeli kártérítés általában akkor merül fel, ha a járat a szabály hatálya alá tartozik, és a késés, törlés vagy beszállásmegtagadás nem rendkívüli körülmény miatt történt.",
    "Késésnél a kulcspont többnyire a végső célállomásra érkezés: a 3 órás határ gyakran döntő jelentőségű.",
    "Törlésnél az értesítés ideje, a felajánlott alternatíva és a tényleges érkezési idő együtt döntik el, hogy csak visszatérítés vagy kártérítés is szóba jöhet-e.",
  ];
}

function sectionsFor(kind: string, entity: string): HuArticleSection[] {
  const scopeParagraph =
    kind === "route"
      ? `${entity} esetén különösen fontos, hogy a teljes útvonalat egyben vizsgáld. Ha átszállás is volt, nem elég az első szakasz késését nézni: a végső célállomásra érkezés mutatja meg az időveszteséget.`
      : kind === "airline"
        ? `${entity} ügynél a tényleges üzemeltető és az útvonal jogi helyzete az első szűrő. Ugyanaz a légitársaság más eredményhez vezethet EU-ból induló, EU-ba érkező vagy EU-n kívüli szakaszon.`
        : kind === "airport"
          ? `${entity} kapcsán gyakori hiba, hogy az utas csak a repülőtéri várakozást nézi. Az EU261 elemzéshez azt is látni kell, mi történt a további útvonallal és mikor értél ténylegesen célba.`
          : "Az EU261 elemzés nem egyetlen címkéről szól. Ugyanaz a helyzet más eredményt adhat attól függően, hogy mennyi volt a végső késés, mikor kaptál értesítést, és mit tud bizonyítani a légitársaság.";

  return [
    {
      title: "Mikor lehet jogos a kártérítés?",
      paragraphs: [
        scopeParagraph,
        "A legerősebb ügyekben három elem egyszerre látszik tisztán: a járat a szabály hatálya alá tartozik, a zavar tényleges időveszteséget okozott, és nincs olyan rendkívüli körülmény, amely a légitársaság felelősségét kizárná.",
      ],
      bullets: [
        "Késésnél általában legalább 3 órás végső érkezési késés kell a pénzbeli kártérítéshez.",
        "Törlésnél a 14 napon belüli értesítés, az alternatív járat és az érkezési idő együtt számít.",
        "Átszállásnál az egy foglalásban szereplő teljes útvonalat érdemes vizsgálni.",
      ],
    },
    {
      title: "Mikor gyengébb az ügy?",
      paragraphs: [
        "Nem minden kellemetlen utazási helyzet jelent automatikusan pénzbeli kártérítést. Ha a késés rövidebb, a járat nem tartozik az EU261 hatálya alá, vagy a légitársaság bizonyítani tudja a rendkívüli körülményt, az ügy gyengébb lehet.",
        "A sablonos légitársasági válasz önmagában nem döntő, de a hiányos dokumentáció sokat ront az esélyeken. Ezért fontos, hogy az ügy ne csak érzelmileg, hanem bizonyítékokkal is érthető legyen.",
      ],
      bullets: [
        "Külön vásárolt jegyeknél a lekésett csatlakozás sokkal nehezebben érvényesíthető.",
        "Időjárás, légtérkorlátozás vagy reptéri biztonsági helyzet kizáró ok lehet, ha ténylegesen ez okozta a zavart.",
        "Ha nem ismert a tényleges érkezési idő, először ezt kell tisztázni.",
      ],
    },
    {
      title: "Milyen dokumentumokat őrizz meg?",
      paragraphs: [
        "A jó kártérítési ügy nem hosszú történettel kezdődik, hanem tiszta idővonallal. Írd fel az eredeti indulási és érkezési időt, a tényleges érkezést, az új útvonalat, valamint azt, mikor és mit közölt a légitársaság.",
        "A bizonyítékokat érdemes egy helyre gyűjteni, mert később ezek alapján lehet gyorsan eldönteni, hogy az ügy egyszerű, vitatható vagy kifejezetten erős.",
      ],
      bullets: [
        "Foglalási kód, jegy, beszállókártya vagy elektronikus visszaigazolás.",
        "Légitársasági e-mailek, SMS-ek, alkalmazásértesítések és reptéri kijelzőfotók.",
        "Szállás, étkezés, transzfer és egyéb szükséges költségek bizonylatai.",
      ],
    },
    {
      title: "Hogyan érdemes továbblépni?",
      paragraphs: [
        "Először ellenőrizd az útvonalat és a zavar típusát, majd különítsd el a visszatérítést, az ellátási költségeket és a pénzbeli kártérítést. Ezek nem mindig ugyanazok a jogok, és gyakran egyszerre is felmerülhetnek.",
        "Ha a légitársaság nem válaszol, sablonosan elutasít, vagy nem világos, hogy az indoklása jogilag elég erős-e, érdemes szakértői ellenőrzéssel kezdeni. Így nem egy rosszul megírt panasz vagy hiányos bizonyíték dönti el az ügyet.",
      ],
    },
  ];
}

function faqsFor(kind: string, entity: string): HuArticleFaq[] {
  return [
    {
      question: `${entity} esetén automatikusan jár a kártérítés?`,
      answer:
        "Nem. A jogosultság mindig az útvonal, a zavar oka, a végső érkezési késés, a törlésről szóló értesítés ideje és a bizonyítékok alapján dönthető el.",
    },
    {
      question: "Mennyi lehet a kártérítés összege?",
      answer:
        "EU261 ügyekben a pénzbeli kártérítés jellemzően 250, 400 vagy 600 euró lehet. A sávot főleg a repülési távolság és az útvonal jellege határozza meg.",
    },
    {
      question: "Elég, ha a járat 3 órát késett induláskor?",
      answer:
        "Nem mindig. A pénzbeli kártérítésnél általában a végső célállomásra érkezés késése számít, nem önmagában az indulási késés.",
    },
    {
      question: "Mi van, ha a légitársaság rendkívüli körülményre hivatkozik?",
      answer:
        "A hivatkozás önmagában nem elég. A légitársaságnak azt is bizonyítania kell, hogy a körülmény ténylegesen okozta a zavart, és minden észszerű intézkedést megtett.",
    },
    {
      question: "Érdemes beszállókártya nélkül is ellenőrizni az ügyet?",
      answer:
        "Igen. A beszállókártya hasznos, de sok esetben a foglalási visszaigazolás, e-mail, PNR, fizetési bizonylat vagy légitársasági üzenet is segíthet az ügy azonosításában.",
    },
  ];
}

export function buildHuArticleContent(article: BlogArticleHu): HuArticleContent {
  const title = cleanHuText(article.title);
  const category = formatHuCategory(article.category);
  const topic = inferTopic(article);
  const ctaPath = inferCtaPath(article);
  const quickAnswer = quickAnswerFor(topic.kind, topic.entity);
  const description = cleanHuText(article.excerpt)
    .replace(/\s+/g, " ")
    .slice(0, 158)
    .replace(/\s+\S*$/, "");

  return {
    title,
    seoTitle: `${title} | EU261 kártérítés magyarul`,
    description,
    category,
    quickAnswer,
    sections: sectionsFor(topic.kind, topic.entity),
    faqs: faqsFor(topic.kind, topic.entity),
    ctaPath,
    ctaAnchor:
      ctaPath === "/hu/kesett-jarat"
        ? "késett járat kártérítésének ellenőrzése"
        : ctaPath === "/hu/torolt-jarat"
          ? "törölt járat kártérítésének ellenőrzése"
          : "EU261 kártérítési jogosultság ellenőrzése",
  };
}
