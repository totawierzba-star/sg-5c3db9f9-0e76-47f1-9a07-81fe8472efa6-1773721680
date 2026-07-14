import type {
  BlogArticleLt,
  BlogArticleLtCtaPath,
} from "@/lib/blogArticlesLt";
import {
  buildClaimWingerLtLink,
  type ClaimWingerLtDestination,
} from "@/lib/claimwingerLinksLt";

export type LtArticleSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
  table?: "nonEu";
};

export type LtArticleFaq = {
  question: string;
  answer: string;
};

export type LtContextualLink = {
  label: string;
  href: string;
  placement: string;
  description: string;
};

export type LtArticleContent = {
  title: string;
  seoTitle: string;
  description: string;
  intro: string[];
  quickAnswer: string[];
  keyPoints: string[];
  sections: LtArticleSection[];
  faqs: LtArticleFaq[];
  ctaDestination: ClaimWingerLtDestination;
  ctaPath: BlogArticleLtCtaPath;
  ctaAnchor: string;
  contextualLinks: LtContextualLink[];
};

const delayedAnchor = "lietuvišką ClaimWinger formą dėl vėluojančio skrydžio";
const cancelledAnchor = "lietuvišką ClaimWinger formą dėl atšaukto skrydžio";

function getDestination(path: BlogArticleLtCtaPath): ClaimWingerLtDestination {
  return path === "/cancelled-flight" ? "cancelled" : "delayed";
}

function getDisruptionLabel(article: BlogArticleLt) {
  const title = article.title.toLowerCase();

  if (article.ctaPath === "/cancelled-flight" || title.includes("atšauk")) {
    return "atšaukimas";
  }

  if (title.includes("overbooking") || title.includes("įsodinti")) {
    return "atsisakymas įsodinti";
  }

  if (title.includes("persėdim")) {
    return "praleistas persėdimas";
  }

  return "vėlavimas";
}

function getSubject(article: BlogArticleLt) {
  return article.routeName || article.airlineName || article.airportName || article.focus;
}

function getAmountSentence(article: BlogArticleLt) {
  const subject = getSubject(article);

  if (article.routeName) {
    return `Maršrute ${subject} suma priklauso ne nuo bilieto kainos, o nuo atstumo, galutinės paskirties vietos vėlavimo ir nuo to, ar skrydis patenka į EB 261 arba UK261 taikymo sritį.`;
  }

  if (article.airlineName) {
    return `Kalbant apie ${subject}, svarbu nustatyti faktinį vežėją, skrydžio kryptį, išvykimo oro uostą ir tikrąją sutrikimo priežastį.`;
  }

  if (article.airportName) {
    return `Oro uosto atveju svarbiausia yra ne vien laukimo vieta, bet visas biliete nurodytas maršrutas ir galutinis atvykimo laikas.`;
  }

  return "Kompensacijos suma nustatoma pagal fiksuotas ribas: 250, 400 arba 600 eurų pagal atstumą ir taikomą teisinę sistemą.";
}

function buildIntro(article: BlogArticleLt) {
  const disruption = getDisruptionLabel(article);
  const first =
    `Šis vadovas nagrinėja temą „${article.title}“ iš Lietuvos keleivio perspektyvos: aiškiai, praktiškai ir be teisinio žargono pertekliaus. Pagrindinis klausimas yra ${article.focus}. Pagal EB 261/2004 arba UK261 nepakanka vien pasakyti, kad skrydis turėjo problemą. Reikia patikrinti, iš kur išvyko lėktuvas, kas buvo faktinis vežėjas, kiek keleivis pavėlavo atvykti į galutinę paskirties vietą ir ar oro linija gali įrodyti aplinkybes, kurių realiai negalėjo kontroliuoti.`;
  const second =
    `Lietuviams tai ypač svarbu skrendant iš Vilniaus, Kauno ar Palangos, taip pat keliaujant per Varšuvą, Helsinkį, Frankfurtą, Londoną, Dubliną, Stambulą ar Dubajų. ${getAmountSentence(article)} Išsaugokite rezervacijos numerį, įlaipinimo kortelę, oro linijos pranešimus apie ${disruption}, ekrano nuotraukas iš oro uosto švieslentės ir kvitus už maistą, viešbutį ar transportą. Toliau rasite trumpą atsakymą, kompensacijų lentelę, praktinius veiksmus ir DUK, parengtus pagal logiką, kurią naudoja ClaimWinger licencijuotas teisinis konsultantas.`;

  if (article.localAuthority) {
    return [
      first,
      `${second} Jei oro linija neatsako arba pateikia bendrą atsisakymą, Lietuvoje svarbus LTSA kontekstas, o tam tikrose vartotojų ar kelionių paslaugų situacijose gali būti aktuali ir VVTAT. Pirmas žingsnis vis tiek paprastai yra rašytinė pretenzija faktiniam vežėjui.`,
    ];
  }

  if (article.limitation) {
    return [
      first,
      `${second} Senesniems skrydžiams papildomai vertinamas senaties terminas. Lietuvoje praktikoje dažnai remiamasi 3 metų civilinių reikalavimų logika, todėl delsti neverta, net jei skrydis dar atrodo „nesenas“.`,
    ];
  }

  if (article.nonEuCarrier && article.airlineName?.includes("UTair")) {
    return [
      first,
      `${second} Šiame straipsnyje apie UTair situaciją formuluojame atsargiai: svarbiausia yra ne reklaminis maršruto pavadinimas, o tai, kuris vežėjas faktiškai vykdė konkretų skrydį ir iš kur jis išvyko. Jeigu vežėjas nėra ES oro linija, kryptis tampa lemiama.`,
    ];
  }

  return [first, second];
}

function buildQuickAnswer(article: BlogArticleLt) {
  const answers = [
    `Trumpai: ${getSubject(article)} atveju pirmiausia reikia patikrinti, ar skrydis patenka į EB 261 arba UK261 taikymo sritį.`,
    "Piniginė kompensacija dažniausiai vertinama, kai galutinėje paskirties vietoje pavėluojama bent 3 valandas, skrydis kompensuotinai atšaukiamas arba keleiviui nepagrįstai atsisakoma įsodinti.",
    "Galimos sumos yra 250, 400 arba 600 eurų keleiviui; jos priklauso nuo atstumo, o ne nuo bilieto kainos.",
  ];

  if (article.nonEuCarrier) {
    answers.push("Jeigu skrydį vykdo ne ES vežėjas, kryptis yra lemiama: išvykimas iš ES oro uosto gali būti padengtas, o grįžimas iš trečiosios šalies dažnai ne.");
  }

  if (article.uk261) {
    answers.push("Skrydžiai iš JK po Brexit paprastai vertinami pagal UK261, o ne pagal klasikinį EB 261, nors kompensacijų logika yra labai panaši.");
  }

  if (article.voucher) {
    answers.push("Kuponas neturėtų automatiškai pakeisti piniginės kompensacijos ar pinigų grąžinimo, jeigu teisės aktai suteikia teisę į pinigus.");
  }

  if (article.cancelledCase) {
    answers.push("Atšaukimo atveju atskirai vertinama, kada gavote pranešimą ir kokį alternatyvų skrydį oro linija pasiūlė.");
  }

  return answers.slice(0, 4);
}

function buildKeyPoints(article: BlogArticleLt) {
  const points = [
    "Saugokite rezervaciją, įlaipinimo kortelę, skrydžio numerį, oro linijos laiškus ir realaus atvykimo laiko įrodymus.",
    "Vertinama galutinė paskirties vieta, ypač jei kelionė buvo viena rezervacija su persėdimu.",
    "Maistas, viešbutis ir transportas yra atskiros priežiūros teisės, kurios gali egzistuoti šalia 250 / 400 / 600 eurų kompensacijos.",
    "ClaimWinger gali patikrinti bylą pagal no-win-no-fee modelį per lietuvišką formą adresu claimwinger.com/lt.",
  ];

  if (article.airlineName) {
    points[1] = `Prie ${article.airlineName} bylų tikrinkite faktinį vežėją, o ne vien prekės ženklą ar bilieto pardavėją.`;
  }

  if (article.routeName) {
    points[1] = `Maršrute ${article.routeName} sprendžia kryptis, vežėjas, atstumas ir galutinis atvykimo vėlavimas.`;
  }

  if (article.limitation) {
    points[2] = "Lietuvoje senesniems reikalavimams svarbus 3 metų terminas, todėl geriausia veikti kuo anksčiau.";
  }

  if (article.uk261) {
    points[2] = "Skrydžiams iš JK po Brexit paprastai taikomas UK261; sumos panašios, bet teisinė sistema yra atskira.";
  }

  if (article.ota) {
    points[1] = "Bilieto pirkimas per Booking.com, eSky, Paysera Travel ar Novaturas paprastai nepanaikina keleivio teisių prieš faktinį vežėją.";
  }

  if (article.business) {
    points[1] = "Komandiruotėje fiksuota kompensacija dažniausiai priklauso keleiviui, net jei bilietą apmokėjo darbdavys.";
  }

  return points;
}

function buildNonEuSection(article: BlogArticleLt): LtArticleSection {
  const subject = article.airlineName || article.routeName || "ne ES vežėjas";

  return {
    title: "Privaloma taisyklė ne ES vežėjams",
    paragraphs: [
      `Kalbant apie ${subject}, dažniausia klaida yra manyti, kad tas pats vežėjas visomis kryptimis sukuria vienodą rezultatą. Taip nėra. EB 261 labai stipriai saugo skrydžius, kurie išvyksta iš ES oro uosto, tačiau skrydžiams iš trečiųjų šalių į Europą taisyklė tampa siauresnė, jei faktinis vežėjas nėra europietiškas.`,
      "Todėl Vilnius-Stambulas, Vilnius-Dubajus ar Vilnius-Tel Avivas gali būti vertinami kitaip nei grįžtamasis skrydis iš Stambulo, Dubajaus ar Tel Avivo į Lietuvą. Pirmiausia nustatykite faktinį vežėją, išvykimo oro uostą ir ar bilietas buvo viena rezervacija.",
    ],
    table: "nonEu",
  };
}

function buildCoreSections(article: BlogArticleLt): LtArticleSection[] {
  const subject = getSubject(article);
  const sections: LtArticleSection[] = [
    {
      title: "Kada šis atvejis patenka į EB 261 arba UK261?",
      paragraphs: [
        `Pirmasis patikrinimas prie ${subject} yra teisinė taikymo sritis. Jeigu skrydis išvyksta iš ES, EEE, Šveicarijos arba JK oro uosto, keleivis dažnai turi stiprią apsaugą nepriklausomai nuo to, ar oro linija yra europietiška. Jeigu skrydis atvyksta į Europą iš trečiosios šalies, tada ypač svarbu, ar faktinis vežėjas yra europietiškas.`,
        "Lietuvos oro uostų atveju taisyklė paprastai aiški: Vilnius, Kaunas ir Palanga yra ES oro uostai, todėl iš jų išvykstantys skrydžiai patenka į stiprią EB 261 logiką. Išvykstant iš Londono, Lutono, Stanstedo ar Birmingamo po Brexit dažniausiai vertinamas UK261. Grįžtant iš Turkijos ar Dubajaus su ne ES vežėju EB 261 dažnai netaikomas.",
      ],
      bullets: [
        "Skrydis iš Vilniaus, Kauno ar Palangos: EB 261 paprastai gali būti taikomas.",
        "Skrydis iš JK į Lietuvą: po Brexit dažniausiai taikomas UK261.",
        "Skrydis iš trečiosios šalies su ne ES vežėju: EB 261 dažnai netaikomas.",
      ],
    },
    {
      title: "Kaip skaičiuojami 250, 400 ir 600 eurų?",
      paragraphs: [
        "EB 261 kompensacija nėra nuolaida, žalos atlyginimas už bilieto kainą ar kompensacija už sugadintas atostogas. Tai fiksuota suma, nustatoma pagal maršruto atstumą: 250 eurų trumpiems skrydžiams, 400 eurų vidutinio atstumo skrydžiams ir 600 eurų ilgiems maršrutams virš 3 500 km.",
        `Prie ${subject} reikia sujungti du klausimus: koks yra atstumas ir ar sutrikimas pasiekė teisės aktuose numatytą ribą. Vėlavimo atveju dažniausiai žiūrima į bent 3 valandų vėlavimą atvykus į galutinę paskirties vietą. Atšaukimo atveju vertinamas pranešimo laikas ir pasiūlyto alternatyvaus skrydžio kokybė.`,
      ],
      bullets: [
        "Iki 1 500 km: 250 eurų.",
        "1 500-3 500 km: 400 eurų.",
        "Daugiau nei 3 500 km: 600 eurų.",
      ],
    },
    {
      title: "Kokius įrodymus verta išsaugoti?",
      paragraphs: [
        "Stipriausios bylos yra gerai dokumentuotos. Išsaugokite rezervacijos patvirtinimą, PNR numerį, įlaipinimo kortelę, SMS ar el. laiškus iš oro linijos, ekrano nuotraukas iš programėlės ir oro uosto švieslentės. Jeigu patyrėte papildomų išlaidų laukdami, saugokite ir kvitus.",
        "Nėra katastrofa, jei trūksta vieno dokumento. Tačiau kuo tiksliau galima atkurti maršrutą, laikus ir oro linijos pateiktą priežastį, tuo lengviau įvertinti, ar vežėjas atsakingas ir ar suma turėtų būti 250, 400 ar 600 eurų.",
      ],
      bullets: [
        "PNR arba rezervacijos numeris.",
        "Skrydžio numeris ir data.",
        "Realaus atvykimo laiko įrodymas.",
        "Oro linijos pranešimai apie vėlavimą, atšaukimą ar nukreipimą.",
      ],
    },
    {
      title: "Ką daryti žingsnis po žingsnio?",
      paragraphs: [
        "Pirmiausia susidėliokite faktus: maršrutą, datą, faktinį vežėją, planuotą ir realų atvykimo laiką, sutrikimo priežastį ir turimus dokumentus. Tada patikrinkite, ar byla patenka į EB 261 arba UK261. Trečias žingsnis yra aiški pretenzija su konkrečia suma ir įrodymais arba patikra per ClaimWinger, jei nenorite patys vesti susirašinėjimo su oro linija.",
        "Jeigu oro linija neatsako, atsako miglotai arba remiasi labai bendromis „ypatingomis aplinkybėmis“, atsisakymo nereikėtų laikyti galutiniu be patikros. Lietuvos keleiviams svarbu atskirti oro linijos vidinį atsakymą nuo realios teisinės atsakomybės.",
      ],
      bullets: [
        "Parenkite trumpą bylos chronologiją.",
        "Patikrinkite EB 261, UK261 arba kitą galimą teisinę sistemą.",
        "Nepriimkite kupono, jei norite pinigų ir teisės aktai leidžia jų reikalauti.",
        "Atsisakymo atveju prašykite konkrečios priežasties, o ne bendro paaiškinimo.",
      ],
    },
  ];

  if (article.nonEuCarrier) {
    sections.splice(1, 0, buildNonEuSection(article));
  }

  if (article.uk261) {
    sections.splice(article.nonEuCarrier ? 2 : 1, 0, {
      title: "UK261 lietuviams po Brexit: ką būtina žinoti?",
      paragraphs: [
        "Po Brexit skrydžiams, kurie išvyksta iš Jungtinės Karalystės, klasikinis EB 261 paprastai nebėra pagrindinė sistema. Vietoje jos taikoma UK261 logika. Ji daugeliu atvejų panaši: vertinamas atstumas, vėlavimas, atšaukimas, atsisakymas įsodinti ir oro linijos atsakomybė.",
        "Praktikoje lietuviams tai svarbu skrendant iš Londono Heathrow, Stansted, Luton, City, Birmingamo ar kitų JK oro uostų į Vilnių, Kauną ar Palangą. Grįžimas iš JK gali būti UK261, o skrydis iš Lietuvos į JK dažniausiai grįžta prie EB 261 logikos.",
      ],
    });
  }

  if (article.localAuthority) {
    sections.push({
      title: "Kada aktuali LTSA, VVTAT arba JK CAA?",
      paragraphs: [
        "Lietuvoje oro keleivių teisių kontekste svarbiausias praktinis orientyras yra LTSA, nes ji teikia informaciją apie keleivių teises pagal Reglamentą (EB) Nr. 261/2004. VVTAT gali būti aktuali vartotojų ir kelionių paslaugų ginčuose, pavyzdžiui, kai problema susijusi su pardavėju, kelionių paketu ar klaidinančiu pasiūlymu.",
        "Jeigu skrydis išvyko iš JK, po Brexit gali būti aktuali JK CAA ir UK261 sistema. Prieš eskaluojant verta tiksliai nustatyti jurisdikciją, nes neteisingas adresatas gali sulėtinti bylą.",
      ],
    });
  }

  if (article.limitation) {
    sections.push({
      title: "Senaties terminas Lietuvoje",
      paragraphs: [
        "Lietuvoje skrydžių kompensacijos reikalavimams praktikoje svarbus 3 metų terminas. Tai nereiškia, kad senas skrydis visada beviltiškas, bet kuo arčiau termino pabaigos, tuo svarbiau turėti aiškius dokumentus ir veikti nedelsiant.",
        "Laikas silpnina įrodymus: dingsta laiškai, keliautojai praranda įlaipinimo korteles, o oro linijos gali sunkiau atkurti operacinius duomenis. Todėl net jei dar turite teisę kreiptis, geriau neatidėlioti.",
      ],
    });
  }

  if (article.ota) {
    sections.push({
      title: "Ar OTA pardavėjas keičia jūsų teises?",
      paragraphs: [
        "Bilieto pirkimas per Booking.com, eSky, Paysera Travel, Novaturas ar kitą tarpininką paprastai nepanaikina teisės į EB 261 kompensaciją. Reikalavimas dažniausiai nukreipiamas į faktinį oro vežėją, nes būtent jis vykdė arba turėjo vykdyti skrydį.",
        "Tarpininkas gali būti svarbus dėl pinigų grąžinimo, bilieto keitimo ar komunikacijos, tačiau kompensacijos logika dėl vėlavimo, atšaukimo ar atsisakymo įsodinti paprastai lieka susieta su oro linija.",
      ],
    });
  }

  if (article.business) {
    sections.push({
      title: "Komandiruotė: kas gauna fiksuotą kompensaciją?",
      paragraphs: [
        "Jeigu bilietą apmokėjo darbdavys, tai savaime nereiškia, kad fiksuota EB 261 kompensacija priklauso įmonei. Ji dažniausiai skirta keleiviui, kuris patyrė nepatogumus: vėlavimą, laukimą, praleistą persėdimą ar atsisakymą įsodinti.",
        "Darbdavys gali turėti atskiras taisykles dėl išlaidų kompensavimo ar komandiruotės apskaitos, tačiau teisinis reikalavimas prieš oro liniją dažniausiai siejamas su fiziniu keleiviu.",
      ],
    });
  }

  return sections;
}

function buildFaqs(article: BlogArticleLt): LtArticleFaq[] {
  const subject = getSubject(article);
  const faqs: LtArticleFaq[] = [
    {
      question: `Ar ${subject} atveju gali priklausyti kompensacija?`,
      answer:
        "Taip, jeigu skrydis patenka į EB 261 arba UK261 taikymo sritį, sutrikimas pasiekia teisinę ribą ir oro linija neturi pagrįstos išimties. Dažniausiai tikrinamas išvykimo oro uostas, faktinis vežėjas ir vėlavimas galutinėje paskirties vietoje.",
    },
    {
      question: "Kiek galiu gauti pagal EB 261?",
      answer:
        "Galimos fiksuotos sumos yra 250, 400 arba 600 eurų keleiviui. Tiksli suma priklauso nuo maršruto atstumo, o ne nuo bilieto kainos.",
    },
    {
      question: "Kokius dokumentus reikia išsaugoti?",
      answer:
        "Labiausiai padeda rezervacijos numeris, įlaipinimo kortelė, skrydžio numeris, data, oro linijos pranešimai ir realaus atvykimo laiko įrodymas. Jeigu patyrėte papildomų išlaidų, išsaugokite kvitus už maistą, viešbutį ir transportą.",
    },
    {
      question: "Ar ClaimWinger gali patikrinti šį atvejį?",
      answer:
        "Taip, galite pateikti duomenis per lietuvišką ClaimWinger formą. Modelis yra no-win-no-fee, todėl išankstinis mokestis netaikomas.",
    },
  ];

  if (article.nonEuCarrier) {
    faqs[0] = {
      question: "Ar EB 261 galioja ne ES oro linijai?",
      answer:
        "Taip, jeigu skrydis išvyksta iš ES oro uosto. Tačiau grįžtamasis skrydis iš Stambulo, Dubajaus, Tel Avivo ar kitos trečiosios šalies su ne ES vežėju dažnai nepatenka į EB 261.",
    };
  }

  if (article.uk261) {
    faqs[0] = {
      question: "Ar iš JK taikomas EB 261 ar UK261?",
      answer:
        "Po Brexit skrydžiai, kurie išvyksta iš JK, dažniausiai vertinami pagal UK261. Skrydis iš Lietuvos į JK paprastai vertinamas pagal EB 261, nes išvyksta iš ES oro uosto.",
    };
  }

  if (article.voucher) {
    faqs.push({
      question: "Jeigu priimu kuponą, ar prarandu teisę į pinigus?",
      answer:
        "Tai priklauso nuo konkrečių kupono sąlygų. Prieš sutikdami patikrinkite, ar neatsisakote piniginės kompensacijos arba pinigų grąžinimo, kuris jums priklausytų pagal teisės aktus.",
    });
  }

  if (article.localAuthority) {
    faqs.push({
      question: "Kur Lietuvoje kreiptis, jei oro linija neatsako?",
      answer:
        "Pirmiausia pateikite rašytinę pretenziją faktiniam vežėjui. Jei atsakymo nėra arba jis nepagrįstas, gali būti aktuali LTSA informacija apie oro keleivių teises, o tam tikrais vartotojų klausimais ir VVTAT.",
    });
  }

  if (article.limitation) {
    faqs.push({
      question: "Ar po 3 metų dar verta tikrinti skrydį?",
      answer:
        "Verta patikrinti, bet delsti rizikinga. Lietuvoje 3 metų terminas yra svarbus orientyras, todėl kuo greičiau surinksite dokumentus ir pateiksite bylą, tuo geriau.",
    });
  }

  return faqs.slice(0, 5);
}

function buildContextualLinks(article: BlogArticleLt): LtContextualLink[] {
  const destination = getDestination(article.ctaPath);
  const primaryHref = buildClaimWingerLtLink(destination, {
    medium: "article_context_link",
    campaign: article.slug,
    content: "primary_claim_check",
  });
  const generalHref = buildClaimWingerLtLink("home", {
    medium: "article_context_link",
    campaign: article.slug,
    content: "general_claim_check",
  });
  const alternateHref = buildClaimWingerLtLink(
    article.ctaPath === "/cancelled-flight" ? "delayed" : "cancelled",
    {
      medium: "article_context_link",
      campaign: article.slug,
      content: "alternate_disruption",
    },
  );

  return [
    {
      label: article.ctaPath === "/cancelled-flight" ? "Patikrinti atšauktą skrydį" : "Patikrinti vėluojantį skrydį",
      href: primaryHref,
      placement: `lt_article_${article.slug}_primary_context`,
      description:
        "Tinka, jei jau turite skrydžio numerį, datą ir trumpą problemos aprašymą.",
    },
    {
      label: "Bendra ClaimWinger patikra",
      href: generalHref,
      placement: `lt_article_${article.slug}_general_context`,
      description:
        "Naudinga, jei dar nesate tikri, ar tai vėlavimas, atšaukimas, overbookingas ar praleistas persėdimas.",
    },
    {
      label: article.ctaPath === "/cancelled-flight" ? "Jei atvejis buvo vėlavimas" : "Jei atvejis buvo atšaukimas",
      href: alternateHref,
      placement: `lt_article_${article.slug}_alternate_context`,
      description:
        "Tinka mišrioms situacijoms, kai tvarkaraštis keitėsi, buvo siūlomas kitas reisas arba vėlavimas virto atšaukimu.",
    },
  ];
}

export function buildLtArticleContent(article: BlogArticleLt): LtArticleContent {
  const ctaDestination = getDestination(article.ctaPath);

  return {
    title: article.title,
    seoTitle: `${article.title} | EB 261 Lietuva`,
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
