import {
  buildClaimWingerSrLink,
  type ClaimWingerSrDestination,
} from "@/lib/claimwingerLinksSr";
import type { BlogArticleSr, BlogArticleSrCtaPath } from "@/lib/blogArticlesSr";

export type SrArticleSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
  table?: "nonEu";
};

export type SrArticleFaq = {
  question: string;
  answer: string;
};

export type SrContextualLink = {
  label: string;
  href: string;
  placement: string;
  description: string;
};

export type SrArticleContent = {
  title: string;
  seoTitle: string;
  description: string;
  intro: string[];
  quickAnswer: string[];
  keyPoints: string[];
  sections: SrArticleSection[];
  faqs: SrArticleFaq[];
  ctaDestination: ClaimWingerSrDestination;
  ctaPath: BlogArticleSrCtaPath;
  ctaAnchor: string;
  contextualLinks: SrContextualLink[];
};

const delayedAnchor = "engleski formular za let koji kasni";
const cancelledAnchor = "engleski formular za otkazan let";

function getDestination(path: BlogArticleSrCtaPath): ClaimWingerSrDestination {
  return path === "/cancelled-flight" ? "cancelled" : "delayed";
}

function getDisruptionLabel(article: BlogArticleSr) {
  if (article.ctaPath === "/cancelled-flight" || article.title.toLowerCase().includes("otkaz")) {
    return "otkazivanje";
  }

  if (article.title.toLowerCase().includes("overbooking") || article.title.toLowerCase().includes("ukrcavanj")) {
    return "uskraćeno ukrcavanje";
  }

  return "kašnjenje";
}

function getSubject(article: BlogArticleSr) {
  return article.routeName || article.airlineName || article.airportName || article.focus;
}

function getAmountSentence(article: BlogArticleSr) {
  const subject = getSubject(article);

  if (article.routeName) {
    return `Kod rute ${subject} iznos ne zavisi od cene karte, već od udaljenosti, krajnje destinacije na koju ste zakasnili i toga da li let uopšte potpada pod EU261 ili UK261.`;
  }

  if (article.airlineName) {
    return `Kod ${subject} najvažnije je utvrditi ko je bio stvarni operater leta, u kom smeru se letelo i da li je problem bio pod kontrolom avio-kompanije.`;
  }

  return "Iznos se određuje po fiksnim pragovima: 250 €, 400 € ili 600 €, u zavisnosti od udaljenosti i primenljivog pravnog okvira.";
}

function buildIntro(article: BlogArticleSr) {
  const disruption = getDisruptionLabel(article);
  const first =
    `Ovaj članak obrađuje temu „${article.title}“ iz ugla putnika iz Srbije koji želi brzo da proveri da li ima realne šanse za obeštećenje. Fokus je na ${article.focus}. U praksi po Uredbi (EU) br. 261/2004 i UK261 nije dovoljno reći samo da je let imao problem. Mora da se utvrdi odakle je avion poleteo, koja avio-kompanija je bila stvarni operater, koliko je iznosilo kašnjenje na krajnjoj destinaciji i da li je uzrok bio pod kontrolom prevoznika. Pošto Srbija nije članica EU, smer leta i identitet prevoznika ovde su još važniji nego kod putnika iz EU.`;
  const second =
    `Za putnike iz Srbije i dijasporu ovo je posebno važno kod letova između Beograda i Beča, Ciriha, Frankfurta, Minhena, Pariza ili Londona. Let koji polazi sa aerodroma u EU, npr. Beč–Beograd ili Frankfurt–Beograd, pokriven je EU261 bez obzira na avio-kompaniju, dok je let iz Beograda ka EU pokriven samo ako ga izvodi EU/EEA prevoznik, kao što su Wizz Air, Lufthansa ili Austrian. ${getAmountSentence(article)} Ako imate potvrdu rezervacije, kartu za ukrcavanje, obaveštenje o tome da je nastupilo ${disruption} ili fotografiju table na aerodromu, šansa za preciznu proveru je veća. Tekst u nastavku objašnjava pravila pristupačno, ali pravno precizno, oslanjajući se na logiku koju koristi licencirani pravni savetnik kompanije ClaimWinger.`;

  if (article.localAuthority) {
    return [
      first,
      `${second} Kada avio-kompanija odbija zahtev ili ne odgovara, važan je i lokalni kontekst: za letove iz Srbije relevantan je Direktorat civilnog vazduhoplovstva Republike Srbije, čija pravila o pravima putnika u velikoj meri prate logiku EU261, ali bez čvrstih garancija identičnog ishoda.`,
    ];
  }

  if (article.limitation) {
    return [
      first,
      `${second} Kod starijih letova treba misliti i na rok zastarelosti; on zavisi od države čiji sudovi ili organi odlučuju o zahtevu, pa je najsigurnije reagovati što ranije.`,
    ];
  }

  return [first, second];
}

function buildQuickAnswer(article: BlogArticleSr) {
  const answers = [
    `Kratak odgovor: kod ${getSubject(article)} prvo treba proveriti da li let uopšte potpada pod EU261 ili UK261 — kod letova povezanih sa Srbijom to zavisi od smera leta i od toga ko je operater.`,
    "Novčano obeštećenje se po pravilu razmatra kod najmanje 3 sata kašnjenja na krajnjoj destinaciji, kompenzabilnog otkazivanja ili uskraćenog ukrcavanja krivicom avio-kompanije.",
    "Mogući iznosi su 250 €, 400 € ili 600 € po putniku; oni ne zavise od cene karte.",
  ];

  if (article.nonEuCarrier) {
    answers.push("Kod prevoznika koji nije iz EU/EEA smer je presudan: let sa aerodroma u EU, npr. Beč–Beograd na Air Serbia, jeste pokriven, ali let iz Beograda na Air Serbia ili Turkish Airlines po pravilu nije pokriven EU261.");
  }

  if (article.uk261) {
    answers.push("Kod leta iz Velike Britanije posle Bregzita po pravilu se primenjuje UK261, a ne klasični EU261.");
  }

  if (article.voucher) {
    answers.push("Vaučer ne sme automatski da zameni novčano obeštećenje ili refundaciju, ako vam zakon daje pravo na novac.");
  }

  return answers.slice(0, 4);
}

function buildKeyPoints(article: BlogArticleSr) {
  const points = [
    "Sačuvajte rezervaciju, kartu za ukrcavanje, imejlove avio-kompanije i dokaze o stvarnom vremenu sletanja.",
    "Gleda se krajnja destinacija, naročito ako je putovanje bilo na jednoj rezervaciji sa presedanjem.",
    "Hrana, hotel i prevoz su posebna prava, odvojena od fiksnog obeštećenja od 250 € / 400 € / 600 €.",
    "ClaimWinger može da proveri slučaj po no-win-no-fee modelu preko engleskog formulara — posebna srpska verzija formulara za sada ne postoji.",
  ];

  if (article.airlineName) {
    points[1] = `Kod ${article.airlineName} proverite ko je bio stvarni operater leta, a ne samo trgovačko ime na karti.`;
  }

  if (article.routeName) {
    points[1] = `Kod rute ${article.routeName} presudni su smer leta, prevoznik i krajnja destinacija na koju ste zakasnili.`;
  }

  if (article.limitation) {
    points[2] = "Rok zastarelosti zavisi od države čiji sudovi ili organi rešavaju zahtev, pa je razumno delovati što ranije.";
  }

  if (article.uk261) {
    points[2] = "Letovi iz UK posle Bregzita po pravilu se ocenjuju po UK261; iznosi su slični, ali je pravni okvir drugačiji.";
  }

  return points;
}

function buildNonEuSection(article: BlogArticleSr): SrArticleSection {
  return {
    title: "Obavezno pravilo za prevoznike koji nisu iz EU",
    paragraphs: [
      `Kod ${article.airlineName || article.routeName || "prevoznika koji nije iz EU"} najčešća greška je pretpostavka da ista avio-kompanija vodi do istog rezultata u svim smerovima. To nije tačno. EU261 vrlo snažno štiti letove koji polaze sa aerodroma u EU/EEA, ali je znatno ograničeniji kod letova iz trećih država ka Evropi kada operater nije evropski — a Srbija je upravo treća država u ovom smislu.`,
      "Zato let Beč–Beograd, Frankfurt–Beograd ili Pariz–Beograd na Air Serbia jeste u dometu EU261, jer polazi sa aerodroma u EU. Obrnuti let iz Beograda ka EU pokriven je samo ako ga izvodi EU/EEA prevoznik, npr. Wizz Air, Lufthansa, Austrian ili LOT. Ako let iz Beograda izvodi Air Serbia ili Turkish Airlines, EU261 po pravilu nije primenjiv i treba tražiti drugu pravnu logiku, uključujući srpska pravila o pravima putnika koja prate EU261.",
    ],
    table: "nonEu",
  };
}

function buildCoreSections(article: BlogArticleSr): SrArticleSection[] {
  const sections: SrArticleSection[] = [
    {
      title: "Kada ovaj slučaj potpada pod EU261 ili UK261?",
      paragraphs: [
        `Prva provera kod ${getSubject(article)} je pravni domet. Ako let polazi sa aerodroma u EU, Velikoj Britaniji, Švajcarskoj ili EEA, pravila po pravilu štite putnika bez obzira na to da li je avio-kompanija evropska. Ako let stiže u Evropu iz treće države, presudno postaje da li je stvarni operater EU/EEA prevoznik.`,
        "Za putnike iz Srbije pravilo je jasno, ali obrnuto od intuicije: Srbija nije u EU, pa Beograd i Niš nisu aerodromi EU. Let Beč–Beograd, Cirih–Beograd ili Frankfurt–Beograd pokriven je EU261 (odnosno švajcarskim ekvivalentom) bez obzira na prevoznika. Let iz Beograda ka EU pokriven je samo ako ga izvodi EU/EEA avio-kompanija. Kod letova iz Londona posle Bregzita primenjuje se UK261, a za letove iz Srbije koji nisu u dometu EU261 mogu biti relevantna srpska pravila koja prate logiku EU261, uz nadležnost Direktorata civilnog vazduhoplovstva Republike Srbije.",
      ],
      bullets: [
        "Let iz Beča, Ciriha, Frankfurta, Minhena ili Pariza ka Beogradu: EU261 se po pravilu primenjuje, bez obzira na avio-kompaniju — i kod Air Serbia.",
        "Let iz Beograda ka EU: EU261 važi samo ako je operater EU/EEA prevoznik (npr. Wizz Air, Lufthansa, Austrian).",
        "Let iz Beograda na Air Serbia ili Turkish Airlines: EU261 po pravilu nije primenjiv; razmotrite srpska pravila i Direktorat civilnog vazduhoplovstva.",
      ],
    },
    {
      title: "Kako se računa 250 €, 400 € ili 600 €?",
      paragraphs: [
        "Visina obeštećenja ne zavisi od toga da li je karta bila jeftina, kupljena preko OTA platforme ili deo paket-aranžmana. Uredba EU 261 koristi fiksne iznose prema udaljenosti: 250 € za kraće rute, 400 € za srednje rute i 600 € za duge rute preko 3.500 km.",
        `Kod ${getSubject(article)} uvek treba spojiti dva pitanja: kolika je udaljenost i da li problem dostiže zakonski prag. Kod kašnjenja to po pravilu znači najmanje 3 sata na krajnjoj destinaciji. Kod otkazivanja gledaju se rok obaveštenja i kvalitet alternativnog leta.`,
      ],
      bullets: [
        "Do 1.500 km: 250 € (npr. Beč–Beograd ~490 km, Minhen–Beograd ~770 km, Frankfurt–Beograd ~1.270 km).",
        "1.500–3.500 km: 400 € (npr. London–Beograd ~1.700 km).",
        "Preko 3.500 km: 600 € (praktično samo interkontinentalni letovi).",
      ],
    },
    {
      title: "Koji dokazi su najvažniji?",
      paragraphs: [
        "Najjači zahtevi su dobro dokumentovani. Sačuvajte potvrdu rezervacije, kartu za ukrcavanje, obaveštenja o izmenama, fotografije table na aerodromu i svako pisano obrazloženje koje je dala avio-kompanija. Ako ste zbog čekanja platili hotel, hranu ili prevoz, sačuvajte i račune.",
        "Nije presudno ako nemate baš svaki dokument. Ali što se preciznije može rekonstruisati hronologija leta, to se lakše proverava da li je avio-kompanija odgovorna i da li iznos treba da bude 250 €, 400 € ili 600 €.",
      ],
      bullets: [
        "PNR ili broj rezervacije.",
        "Broj leta i datum.",
        "Dokaz o stvarnom vremenu sletanja.",
        "Imejlovi, SMS poruke ili obaveštenja iz aplikacije avio-kompanije.",
      ],
    },
    {
      title: "Kako da postupite korak po korak?",
      paragraphs: [
        "Prvo sredite činjenice: ruta, datum, avio-kompanija, uzrok problema i stvarno vreme sletanja. Drugo, proverite da li je slučaj u dometu EU261 ili UK261 — kod letova iz Beograda posebno proverite da li je operater EU/EEA prevoznik. Treće, pošaljite zahtev za obeštećenje sa jasnim iznosom i dokazima, ili koristite ClaimWinger ako ne želite sami da vodite komunikaciju (formular je na engleskom jeziku).",
        "Ako avio-kompanija ne odgovori, odgovori nejasno ili se paušalno pozove na vanredne okolnosti, ne prihvatajte odbijanje kao konačno bez provere. Za letove iz Srbije po potrebi može biti relevantan Direktorat civilnog vazduhoplovstva Republike Srbije, a kod letova iz UK — CAA i pravila UK261.",
      ],
      bullets: [
        "Napravite kratku hronologiju slučaja.",
        "Proverite da li se primenjuje EU261, UK261 ili drugi merodavni okvir.",
        "Ne prihvatajte vaučer ako želite novčano obeštećenje, a zakon vam to omogućava.",
        "Kod odbijanja tražite konkretan razlog, a ne samo uopšteno objašnjenje.",
      ],
    },
  ];

  if (article.nonEuCarrier) {
    sections.splice(1, 0, buildNonEuSection(article));
  }

  if (article.localAuthority) {
    sections.push({
      title: "Kada da razmišljate o Direktoratu civilnog vazduhoplovstva ili CAA?",
      paragraphs: [
        "Direktorat civilnog vazduhoplovstva Republike Srbije je organ koji nadzire prava putnika kod letova iz Srbije. Srpska pravila o pravima putnika u vazdušnom saobraćaju u velikoj meri prate logiku EU261, ali ishod zavisi od okolnosti konkretnog slučaja, pa nema čvrstih garancija identične primene kao u EU.",
        "Kod letova iz Velike Britanije posle Bregzita logika je drugačija: po pravilu se gledaju UK261 i uloga CAA. Kod letova koji polaze iz EU nadležan može biti organ države polaska. Uvek je važno prvo odrediti pravu nadležnost pre slanja pritužbe.",
      ],
    });
  }

  if (article.limitation) {
    sections.push({
      title: "Rok zastarelosti",
      paragraphs: [
        "Za zahteve po EU261 ne postoji jedinstven evropski rok zastarelosti: on zavisi od države čiji sudovi ili organi rešavaju zahtev, i razlikuje se od zemlje do zemlje. Zato let od pre dve ili tri godine nije automatski izgubljen, ako se još mogu dokazati ruta, kašnjenje i primenljivi okvir — ali konkretan rok mora da se proveri za merodavnu državu.",
        "Uprkos tome, rano delovanje je uvek bolje. Vremenom se dokazi gube, imejlovi brišu, a avio-kompanije teže potvrđuju detalje.",
      ],
    });
  }

  return sections;
}

function buildFaqs(article: BlogArticleSr): SrArticleFaq[] {
  const subject = getSubject(article);
  const faqs: SrArticleFaq[] = [
    {
      question: `Da li mogu da dobijem obeštećenje kod ${subject}?`,
      answer:
        "Da, ako let potpada pod EU261 ili UK261, problem dostiže zakonski prag i avio-kompanija nema valjan osnov za oslobađanje od odgovornosti. Najčešće se gledaju smer leta, stvarni operater i kašnjenje na krajnjoj destinaciji — kod letova iz Beograda presudno je da li let izvodi EU/EEA prevoznik.",
    },
    {
      question: "Koliko novca mogu da dobijem?",
      answer:
        "Mogući fiksni iznosi su 250 €, 400 € ili 600 € po putniku. Tačan iznos zavisi od udaljenosti, a ne od cene karte.",
    },
    {
      question: "Koja dokumenta su potrebna?",
      answer:
        "Najkorisniji su broj rezervacije, karta za ukrcavanje, broj leta, datum, poruke avio-kompanije i dokaz o stvarnom vremenu sletanja. Ako imate račune za hotel, hranu ili prevoz, sačuvajte i njih.",
    },
    {
      question: "Da li mi treba advokat?",
      answer:
        "Ne uvek. Zahtev možete podneti i sami, ali usluga kao što je ClaimWinger može biti korisna ako ne želite da vodite komunikaciju sa avio-kompanijom ili je slučaj već odbijen. Imajte u vidu da je formular ClaimWinger na engleskom jeziku.",
    },
  ];

  if (article.nonEuCarrier) {
    faqs[0] = {
      question: "Da li EU261 važi za avio-kompaniju koja nije iz EU, npr. Air Serbia?",
      answer:
        "Da, ako let polazi sa aerodroma u EU/EEA — npr. Beč–Beograd ili Frankfurt–Beograd na Air Serbia jeste pokriven. Ali let iz Beograda na Air Serbia, Turkish Airlines ili drugog prevoznika koji nije iz EU po pravilu nije pokriven EU261; tada se razmatraju srpska pravila i Direktorat civilnog vazduhoplovstva.",
    };
  }

  if (article.uk261) {
    faqs[0] = {
      question: "EU261 ili UK261 — šta važi kod leta iz Velike Britanije?",
      answer:
        "Posle Bregzita letovi koji polaze iz UK po pravilu se ocenjuju po UK261. Iznosi i logika su bliski EU261, ali je pravni okvir sada odvojen.",
    };
  }

  if (article.voucher) {
    faqs.push({
      question: "Ako prihvatim vaučer, da li gubim pravo na novac?",
      answer:
        "Zavisi šta tačno prihvatate i pod kojim uslovima. Ne potpisujte odricanje od novčanog obeštećenja ako niste sigurni da je vaučer najbolji izbor za vas.",
    });
  }

  return faqs.slice(0, 5);
}

function buildContextualLinks(article: BlogArticleSr): SrContextualLink[] {
  const destination = getDestination(article.ctaPath);
  const primaryHref = buildClaimWingerSrLink(destination, {
    medium: "context_link",
    campaign: article.slug,
    content: "primary_article_check",
  });
  const calculatorHref = buildClaimWingerSrLink("home", {
    medium: "context_link",
    campaign: article.slug,
    content: "general_claim_check",
  });
  const alternateHref = buildClaimWingerSrLink(article.ctaPath === "/cancelled-flight" ? "delayed" : "cancelled", {
    medium: "context_link",
    campaign: article.slug,
    content: "alternate_flow",
  });

  return [
    {
      label: article.ctaPath === "/cancelled-flight" ? "Proverite otkazani let" : "Proverite let koji je kasnio",
      href: primaryHref,
      placement: `sr_article_${article.slug}_primary_context`,
      description:
        "Pogodno ako već imate broj leta, datum i kratak opis problema (formular je na engleskom).",
    },
    {
      label: "Opšta provera u ClaimWinger-u",
      href: calculatorHref,
      placement: `sr_article_${article.slug}_general_context`,
      description:
        "Koristite ako niste sigurni da li je slučaj kašnjenje, otkazivanje, overbooking ili propuštena veza.",
    },
    {
      label: article.ctaPath === "/cancelled-flight" ? "Ako je slučaj kašnjenje" : "Ako je slučaj otkazivanje",
      href: alternateHref,
      placement: `sr_article_${article.slug}_alternate_context`,
      description:
        "Korisno kada je problem mešovit: izmena reda letenja, preusmeravanje ili propuštena veza.",
    },
  ];
}

export function buildSrArticleContent(article: BlogArticleSr): SrArticleContent {
  const ctaDestination = getDestination(article.ctaPath);

  return {
    title: article.title,
    seoTitle: `${article.title} | EU261 Srbija`,
    description: article.excerpt,
    intro: buildIntro(article),
    quickAnswer: buildQuickAnswer(article),
    keyPoints: buildKeyPoints(article),
    sections: buildCoreSections(article),
    faqs: buildFaqs(article),
    ctaDestination,
    ctaPath: article.ctaPath,
    ctaAnchor: article.ctaPath === "/cancelled-flight" ? cancelledAnchor : delayedAnchor,
    contextualLinks: buildContextualLinks(article),
  };
}
