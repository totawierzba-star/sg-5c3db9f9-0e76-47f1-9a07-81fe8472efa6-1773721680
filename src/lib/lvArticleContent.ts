import type {
  BlogArticleLv,
  BlogArticleLvCtaPath,
} from "@/lib/blogArticlesLv";
import {
  buildClaimWingerLvLink,
  type ClaimWingerLvDestination,
} from "@/lib/claimwingerLinksLv";

export type LvArticleSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
  table?: "nonEu";
};

export type LvArticleFaq = {
  question: string;
  answer: string;
};

export type LvContextualLink = {
  label: string;
  href: string;
  placement: string;
  description: string;
};

export type LvArticleContent = {
  title: string;
  seoTitle: string;
  description: string;
  intro: string[];
  quickAnswer: string[];
  keyPoints: string[];
  sections: LvArticleSection[];
  faqs: LvArticleFaq[];
  ctaDestination: ClaimWingerLvDestination;
  ctaPath: BlogArticleLvCtaPath;
  ctaAnchor: string;
  contextualLinks: LvContextualLink[];
};

const delayedAnchor = "ClaimWinger latviešu formu kavētam lidojumam";
const cancelledAnchor = "ClaimWinger latviešu formu atceltam lidojumam";

type LvManualProfile = {
  heading: string;
  scenario: string;
  check: string;
  evidence: string;
  mistake: string;
};

const manualProfileOverrides: Partial<Record<string, LvManualProfile>> = {
  "es-regula-ek-261-2004-latvijas-pasazieri": {
    heading: "Latvijas pasažierim svarīgākais",
    scenario:
      "Tipisks Latvijas gadījums nav tikai īss kavējums RIX izlidošanas zālē, bet viss ceļojums: Rīga-Frankfurte-Ņujorka, Rīga-Helsinki-Tokija vai Rīga-Londona ar tālāku pārsēšanos.",
    check:
      "Vispirms nosakiet, vai aizsargāts ir izlidošanas punkts, ielidošanas punkts vai faktiskais pārvadātājs; tikai pēc tam skatiet stundas un summu.",
    evidence:
      "Saglabājiet pilnu maršrutu vienā rezervācijā, jo savienojuma lidojumos tieši gala galamērķis bieži nosaka prasības spēku.",
    mistake:
      "Nekļūdieties, salīdzinot kompensāciju ar biļetes cenu: arī lēta biļete var dot 600 EUR, ja maršruts un kavēšanās to pamato.",
  },
  "ek-261-reisi-arpus-eiropas-kad-attiecas": {
    heading: "Ārpus Eiropas izšķirošs ir virziens",
    scenario:
      "Latvietis var lidot uz Stambulu, Dubaiju, Telavivu vai Hurgadu no Rīgas un būt aizsargāts, bet tajā pašā maršrutā atgriešanās var vairs nebūt EK 261 lieta.",
    check:
      "Atsevišķi pierakstiet izlidošanas lidostu un faktisko pārvadātāju katram virzienam; tur bieži slēpjas visa atbilde.",
    evidence:
      "Noder biļete ar abiem segmentiem, aviokompānijas nosaukums uz reisa un paziņojums par kavēšanās iemeslu.",
    mistake:
      "Nedomājiet, ka galamērķis ārpus ES automātiski izslēdz kompensāciju; lidojums no Rīgas var būt aizsargāts.",
  },
  "caa-latvija-ptac-sudziba-lidojuma-kavesanas": {
    heading: "Sūdzība nav pirmais, bet nākamais solis",
    scenario:
      "Praksē pasažieris bieži sāk ar emocijām pēc ilgas nakts Rīgas lidostā, bet CAA vai PTAC posmā vajag sausu hronoloģiju un dokumentus.",
    check:
      "Pirms sūdzības pārliecinieties, ka prasība jau nosūtīta faktiskajam pārvadātājam un ka jums ir atteikums vai pierādāma klusēšana.",
    evidence:
      "Svarīgākie pielikumi ir rezervācija, reisa numurs, atteikuma e-pasts, faktiskā ierašanās laika pierādījums un čeki par aprūpi.",
    mistake:
      "Nesūtiet vispārīgu aprakstu bez prasītās summas un datumiem; tas paildzina lietu un ļauj aviokompānijai atbildēt miglaini.",
  },
  "prasibas-noilgums-termins-kompensacija-latvija": {
    heading: "3 gadi ir praktisks darba termiņš",
    scenario:
      "Vecs airBaltic vai Ryanair reiss vēl var izskatīties atrodams e-pastā, bet pēc trim gadiem pierādījumi kļūst trausli un strīds sarežģītāks.",
    check:
      "Pārbaudiet reisa datumu pret šodienas datumu, nevis pret brīdi, kad pirmo reizi rakstījāt aviokompānijai.",
    evidence:
      "Ja lieta tuvojas termiņam, saglabājiet PDF biļeti, bankas maksājumu, e-pastus un jebkuru lietotnes ekrānuzņēmumu ārpus pastkastes.",
    mistake:
      "Negaidiet, līdz aviokompānija pati ilgstoši atbildēs; noilgums var turpināt skriet arī sarakstes laikā.",
  },
  "airbaltic-lidojuma-kavesanas-kompensacijas-rokasgramata": {
    heading: "airBaltic gadījumā svarīgs ir hub modelis",
    scenario:
      "airBaltic reiss no Rīgas bieži nav izolēts posms, bet savienojums uz Skandināviju, Vāciju, Balkāniem vai tālāku galamērķi caur RIX.",
    check:
      "Noskaidrojiet, vai kavējums izjauca nākamo segmentu vienā rezervācijā; tas var pārvērst īsu Rīgas kavējumu par spēcīgu galamērķa prasību.",
    evidence:
      "Saglabājiet visus segmentus vienā PNR, ne tikai kavēto airBaltic reisu.",
    mistake:
      "Neapstājieties pie izlidošanas kavējuma minūtēm; EK 261 parasti skatās gala ierašanās kavējumu.",
  },
  "airbaltic-atteica-kompensaciju-piespiest-maksat": {
    heading: "Atteikums nav juridisks spriedums",
    scenario:
      "airBaltic var atbildēt ar īsu skaidrojumu par operatīviem apstākļiem, bet pasažierim joprojām ir tiesības prasīt konkrētu pamatojumu.",
    check:
      "Atdaliet faktus no formulām: vai minēti laikapstākļi, ATC, drošība, tehniska kļūme vai tikai vispārīga frāze?",
    evidence:
      "Ļoti palīdz atteikuma e-pasts un reisa statusa dati tajā pašā dienā.",
    mistake:
      "Nepārrakstiet to pašu prasību bez jauniem faktiem; labāk prasiet precīzu iemeslu un pierādījumus.",
  },
  "airbaltic-atcela-lidojumu-jusu-tiesibas": {
    heading: "Atcelšanai ir divas atsevišķas naudas līnijas",
    scenario:
      "Pasažieris var vienlaikus domāt par biļetes atmaksu vai pārrutēšanu un par fiksēto kompensāciju, bet tās nav viena un tā pati tiesība.",
    check:
      "Pierakstiet, kad tieši saņēmāt atcelšanas paziņojumu un cik ļoti alternatīvais reiss mainīja ierašanās laiku.",
    evidence:
      "Saglabājiet sākotnējo grafiku, atcelšanas e-pastu un piedāvātās alternatīvas laikus.",
    mistake:
      "Nedomājiet, ka pieņemta pārrutēšana vienmēr izslēdz kompensāciju; jāskatās juridiskais laika logs.",
  },
  "airbaltic-tehnisks-defekts-arkartas-apstaklis": {
    heading: "Tehniska kļūme jānosauc precīzi",
    scenario:
      "Ja atteikumā parādās tikai vārdi “technical reasons”, tas vēl nepasaka, vai notikums tiešām bija ārpus aviokompānijas kontroles.",
    check:
      "Atšķiriet parastu apkopi, detaļas nomaiņu un negaidītu ārēju bojājumu; šīs situācijas nav vienādas.",
    evidence:
      "Prasiet rakstisku skaidrojumu un saglabājiet visus paziņojumus no lidostas vai lietotnes.",
    mistake:
      "Nepieņemiet tehnisku defektu kā automātisku atteikuma pamatu bez papildu pārbaudes.",
  },
  "airbaltic-nokavets-savienojums-riga-atbildigs": {
    heading: "Rīga kā pārsēšanās mezgls maina aprēķinu",
    scenario:
      "Pasažieris var kavēties tikai pirmajā posmā uz Rīgu, bet kompensācijas jautājums rodas brīdī, kad nokavēts tālākais reiss vienā rezervācijā.",
    check:
      "Pārbaudiet, vai abi segmenti bija vienā PNR un cik vēlu ieradāties galamērķī, nevis tikai Rīgā.",
    evidence:
      "Saglabājiet pārsēšanās kartes, sākotnējo savienojuma laiku un jauno reisu, uz kuru jūs pārlika.",
    mistake:
      "Nesadaliet vienu rezervāciju divās atsevišķās sūdzībās, ja problēma ir nokavēts savienojums.",
  },
  "ek261-attiecas-airbaltic": {
    heading: "Īsā atbilde airBaltic meklējumam",
    scenario:
      "airBaltic ir Latvijas un ES pārvadātājs, tāpēc EK 261 loģika parasti ir spēcīga gan izlidojot no Rīgas, gan daudzos ielidošanas scenārijos.",
    check:
      "Pārbaudiet ne tikai zīmolu, bet arī to, vai airBaltic faktiski veica reisu, nevis tikai pārdeva kodu koplietošanas biļeti.",
    evidence:
      "Uz iekāpšanas kartes vai rezervācijā meklējiet operating carrier lauku.",
    mistake:
      "Nejauciet airBaltic veikto reisu ar partnera veikto reisu; atbildība seko faktiskajam pārvadātājam.",
  },
  "claimwinger-kompensacija-bez-maksas-neveiksme": {
    heading: "No-win-no-fee jāsaprot praktiski",
    scenario:
      "Latvijas pasažierim, kurš negrib sarakstīties ar aviokompāniju angliski vai juridiski formulēt prasību, būtisks ir risks pirms lietas sākšanas.",
    check:
      "Pirms iesniegšanas sagatavojiet pamatfaktus: maršrutu, datumu, reisa numuru, kavējumu un aviokompānijas atbildi, ja tāda ir.",
    evidence:
      "Jo pilnāka dokumentu pakete tiek iesniegta sākumā, jo mazāk papildjautājumu rodas vēlāk.",
    mistake:
      "Neuzskatiet ClaimWinger formu par tikai kontaktlapu; ievadītie dati palīdz uzreiz nošķirt vāju lietu no stipras.",
  },
};

function getDestination(path: BlogArticleLvCtaPath): ClaimWingerLvDestination {
  return path === "/cancelled-flight" ? "cancelled" : "delayed";
}

function getManualProfile(article: BlogArticleLv): LvManualProfile {
  const override = manualProfileOverrides[article.slug];

  if (override) {
    return override;
  }

  if (article.voucher) {
    return {
      heading: "Kupona fokuss: piekrišana nav formalitāte",
      scenario:
        "Kupona piedāvājums bieži izskatās kā ātrs risinājums, bet Latvijas pasažierim tas var ietekmēt vēlākas tiesības uz naudu vai kompensāciju.",
      check:
        "Pirms piekrišanas pārbaudiet, vai kupons aizstāj tikai biļetes atmaksu, fiksēto kompensāciju vai arī abas prasības kopā.",
      evidence:
        "Saglabājiet kupona noteikumus, derīguma termiņu, e-pasta tekstu un jebkuru izvēles pogu, kuru aviokompānija jums parādīja.",
      mistake:
        "Nespiediet “accept” tikai tāpēc, ka tas ir ātrākais ceļš lietotnē; vispirms salīdziniet to ar naudas prasību.",
    };
  }

  if (article.cancelledCase) {
    return {
      heading: "Atcelšanas fokuss: paziņojuma brīdis",
      scenario:
        "Atceltā reisā svarīgs nav tikai fakts, ka lidmašīna neizlidoja, bet arī tas, kad pasažieris saņēma paziņojumu un kāda alternatīva tika piedāvāta.",
      check:
        "Salīdziniet sākotnējo izlidošanas un ierašanās laiku ar jauno piedāvājumu, īpaši 14 dienu robežas tuvumā.",
      evidence:
        "Saglabājiet sākotnējo biļeti, atcelšanas e-pastu, alternatīvā reisa laikus un pierādījumu, kad paziņojumu faktiski saņēmāt.",
      mistake:
        "Nejauciet biļetes atmaksu ar fiksēto kompensāciju; atcelšanas gadījumā tās var būt divas atsevišķas tiesības.",
    };
  }

  if (article.technical) {
    return {
      heading: "Tehniskais fokuss: frāze nav pierādījums",
      scenario:
        "Tehniska problēma var būt pilnīgi reāla, tomēr juridiski ar vārdiem “technical reasons” vien nepietiek, lai atteiktu kompensāciju.",
      check:
        "Prasiet, vai bojājums bija parasta ekspluatācijas problēma, apkope, sadursme ar ārēju objektu vai drošības notikums.",
      evidence:
        "Noder aviokompānijas rakstiskais atteikums, paziņojumi pie geita un reisa statusa vēsture tajā pašā dienā.",
      mistake:
        "Nepieņemiet tehnisku defektu kā automātisku ārkārtas apstākli bez konkrēta paskaidrojuma.",
    };
  }

  if (article.localAuthority) {
    return {
      heading: "Eskalācijas fokuss: CAA, PTAC un precīzi fakti",
      scenario:
        "Ja aviokompānija klusē vai atbild ar šablonu, Latvijas pasažierim jāsagatavo lieta tā, lai CAA vai PTAC uzreiz redzētu hronoloģiju.",
      check:
        "Atsevišķi norādiet prasības datumu, aviokompānijas atbildi, reisa datus un to, kādu summu prasāt.",
      evidence:
        "Svarīgi ir e-pasti ar datumiem, atteikuma pamatojums, rezervācijas PDF un īss notikumu saraksts bez emocijām.",
      mistake:
        "Nesūtiet institūcijai tikai ekrānuzņēmumu no lietotnes; bez pilna maršruta un prasības summas lieta kļūst vājāka.",
    };
  }

  if (article.limitation) {
    return {
      heading: "Noilguma fokuss: datums ir galvenais fakts",
      scenario:
        "Vecākos reisos juridiskā analīze sākas nevis ar aviokompāniju, bet ar kalendāru: cik sen notika traucējums un vai dokumenti vēl ir atrodami.",
      check:
        "Salīdziniet reisa datumu ar Latvijas 3 gadu termiņu un sagatavojiet lietu pirms pēdējā brīža.",
      evidence:
        "Bankas maksājums, rezervācijas e-pasts un veci kalendāra ieraksti var palīdzēt atjaunot lietu pat tad, ja iekāpšanas karte pazudusi.",
      mistake:
        "Negaidiet, kamēr aviokompānija pati vairākus mēnešus “izskata” prasību, ja termiņš tuvojas beigām.",
    };
  }

  if (article.miles) {
    return {
      heading: "Lojalitātes punktu fokuss",
      scenario:
        "Biļete ar airBaltic Miles vai citiem punktiem nereti rada šaubas, vai tā ir “īsta” biļete EK 261 izpratnē.",
      check:
        "Pārbaudiet, vai rezervācija bija apstiprināta un vai pasažierim bija tiesības ceļot ar konkrēto reisu.",
      evidence:
        "Saglabājiet punktu izpirkšanas apstiprinājumu, nodokļu maksājumu un rezervācijas numuru.",
      mistake:
        "Nedomājiet, ka bez pilnas naudas cenas nav kompensācijas; regulējums skatās pasažiera tiesības, nevis tikai maksājuma veidu.",
    };
  }

  if (article.routeName) {
    const route = article.routeName;
    const nonEuNote = article.nonEuCarrier
      ? "Šajā maršrutā īpaši uzmanīgi jāsalīdzina pārvadātājs abos virzienos, jo ne ES aviokompānija var būt aizsargāta tikai izlidojot no Rīgas."
      : article.uk261
        ? "Šajā maršrutā virziens var pārcelt lietu no EK 261 uz UK261, tāpēc Londonas vai citas UK lidostas posmu nedrīkst vērtēt pēc ieraduma."
        : "Šajā maršrutā parasti svarīgākais ir gala ierašanās laiks un tas, vai visi posmi bija vienā rezervācijā.";

    return {
      heading: `Maršruta fokuss: ${route}`,
      scenario:
        `${route} pasažierim praktiskais jautājums nav tikai “cik kavējās reiss”, bet kurā virzienā notika problēma, kurš pārvadātājs lidoja un vai bija pārsēšanās.`,
      check: nonEuNote,
      evidence:
        "Saglabājiet sākotnējo un faktisko ierašanās laiku, jo tieši šī atšķirība visbiežāk nosaka, vai prasība ir spēcīga.",
      mistake:
        "Nespriediet pēc izlidošanas kavējuma vien; maršruta rakstos galvenais gandrīz vienmēr ir galamērķa kavējums.",
    };
  }

  if (article.airportCode) {
    return {
      heading: `Lidostas fokuss: ${article.airportName || article.airportCode}`,
      scenario:
        "Rīgas lidostā pasažieris bieži redz tikai lokālu gaidīšanu, bet juridiski jāvērtē viss maršruts un aviokompānijas atbildība.",
      check:
        "Pierakstiet, vai problēma radās lidostas infrastruktūrā, aviokompānijas operācijās, drošībā, laikapstākļos vai gaisa satiksmes kontrolē.",
      evidence:
        "Lidostas tablo foto, paziņojumi pie geita un čeki par aprūpi var būt vērtīgi, ja vēlāk jāatdala aprūpes tiesības no kompensācijas.",
      mistake:
        "Nejauciet tiesības uz ēdienu vai viesnīcu ar fiksēto 250/400/600 EUR kompensāciju; tās ir atsevišķas prasības.",
    };
  }

  if (article.airlineName) {
    return {
      heading: `Aviokompānijas fokuss: ${article.airlineName}`,
      scenario:
        `${article.airlineName} gadījumā jāskatās ne tikai zīmols biļetē, bet arī faktiskais operating carrier un reisa virziens.`,
      check:
        article.nonEuCarrier
          ? "Ne ES pārvadātājam no Rīgas situācija var būt aizsargāta, bet atgriešanās no trešās valsts bieži jāvērtē citādi."
          : "Eiropas pārvadātājam parasti ir plašāks EK 261 pārklājums, taču atteikuma iemesls joprojām jāpārbauda.",
      evidence:
        "Saglabājiet aviokompānijas atteikumu vai paziņojumu par iemeslu, jo tieši tas bieži nosaka nākamo soli.",
      mistake:
        "Nepaļaujieties uz īsu klientu servisa frāzi; prasiet konkrētu faktisko iemeslu un salīdziniet to ar EK 261 izņēmumiem.",
    };
  }

  if (article.uk261) {
    return {
      heading: "Diasporas fokuss: UK261 pēc Brexit",
      scenario:
        "Latviešiem Lielbritānijā visbiežākā kļūda ir meklēt EK 261 atbildi lidojumam, kas sākas UK lidostā.",
      check:
        "Ja izlidošana ir no Londonas, Birmingham, Bristol, Leeds vai Edinburgh, skatiet UK261; ja izlidošana ir no Rīgas, skatiet EK 261.",
      evidence:
        "Saglabājiet UK lidostas izlidošanas datus un aviokompānijas paziņojumu, jo jurisdikcija būs pirmais strīda punkts.",
      mistake:
        "Nesajauciet līdzīgās kompensācijas summas ar vienu un to pašu tiesisko sistēmu.",
    };
  }

  if (article.category === "situations") {
    return {
      heading: "Situācijas fokuss: ne tikai kavēšanās minūtes",
      scenario:
        "Īpašās situācijās prasība bieži ir spēcīga nevis tāpēc, ka reiss vienkārši kavējās, bet tāpēc, ka aviokompānija neizpildīja konkrētu pienākumu.",
      check:
        "Atsevišķi pierakstiet notikumu, aviokompānijas piedāvājumu, jūsu lēmumu un papildu izmaksas.",
      evidence:
        "Šajos gadījumos īpaši svarīgi ir čeki, sarakste un pierādījumi, ko aviokompānija jums piedāvāja uz vietas.",
      mistake:
        "Nesauciet visu par “delay claim”; overbooking, downgrade, aprūpe un bankrots prasa atšķirīgu argumentāciju.",
    };
  }

  if (article.category === "foundation") {
    return {
      heading: "Pamatprincipa fokuss: vispirms jurisdikcija",
      scenario:
        "Pamatjautājumos lielākā vērtība ir nevis garā likuma citātā, bet pareizā secībā: jurisdikcija, kavējuma slieksnis, iemesls, pierādījumi.",
      check:
        "Sāciet ar izlidošanas lidostu un faktisko pārvadātāju, pēc tam pārejiet pie stundām un kompensācijas summas.",
      evidence:
        "Juridiskā pamata rakstos īpaši palīdz maršruta karte vienā rezervācijā un precīzs paziņojums par traucējuma iemeslu.",
      mistake:
        "Nesāciet ar jautājumu “cik maksā”, pirms nav skaidrs, vai EK 261 vai UK261 vispār attiecas.",
    };
  }

  if (article.category === "answers") {
    return {
      heading: "Ātrās atbildes fokuss: viena konkrēta pārbaude",
      scenario:
        "Īsās atbildes rakstā lietotājs parasti grib vienu skaidru secinājumu, tāpēc teksts koncentrējas uz pārbaudi, kuru var izdarīt uzreiz pēc reisa.",
      check:
        `Šeit galvenais ir ${article.focus}; ja šis punkts sakrīt ar dokumentiem, prasību ir vērts pārbaudīt tālāk.`,
      evidence:
        "Pietiek ar dažiem precīziem faktiem: reisa numuru, datumu, maršrutu, ierašanās laiku un aviokompānijas paskaidrojumu.",
      mistake:
        "Nemēģiniet visus gadījumus iespiest vienā atbildē; ja ir savienojums, UK virziens vai ne ES pārvadātājs, vajag papildu pārbaudi.",
    };
  }

  return {
    heading: "Praktiskais fokuss Latvijas pasažierim",
    scenario:
      "Šī tēma vislabāk strādā, ja to vērtē kā konkrētu lietu: maršruts, pārvadātājs, datums, ierašanās kavējums un iemesls.",
    check:
      "Pirms prasības salieciet vienā vietā faktus un tikai tad izvēlieties, vai tas ir EK 261, UK261 vai ārpus darbības jomas.",
    evidence:
      "Minimālais komplekts ir rezervācija, reisa numurs, datums, ierašanās laiks un aviokompānijas paskaidrojums.",
    mistake:
      "Nepaļaujieties uz atmiņu par lidostā dzirdēto; pēc dažām nedēļām rakstiski pierādījumi būs daudz vērtīgāki.",
  };
}

function getDisruptionLabel(article: BlogArticleLv) {
  const title = article.title.toLowerCase();

  if (article.ctaPath === "/cancelled-flight" || title.includes("atcēl")) {
    return "atcelšanu";
  }

  if (title.includes("overbooking") || title.includes("iekāpšanas atteik")) {
    return "iekāpšanas atteikumu";
  }

  if (title.includes("savienojum")) {
    return "nokavētu savienojumu";
  }

  return "kavēšanos";
}

function getSubject(article: BlogArticleLv) {
  return article.routeName || article.airlineName || article.airportName || article.focus;
}

function getAmountSentence(article: BlogArticleLv) {
  const subject = getSubject(article);

  if (article.routeName) {
    return `Maršrutā ${subject} summa ir atkarīga no attāluma, virziena, faktiskā pārvadātāja un kavēšanās galamērķī, nevis no biļetes cenas.`;
  }

  if (article.airlineName) {
    return `Runājot par ${subject}, izšķiroši ir noteikt faktisko pārvadātāju, izlidošanas lidostu, virzienu un reālo traucējuma iemeslu.`;
  }

  if (article.airportName) {
    return `Lidostas gadījumā svarīga nav tikai gaidīšanas vieta, bet viss biļetē norādītais maršruts, savienojumi un gala ierašanās laiks.`;
  }

  return "Kompensācija tiek noteikta pēc fiksētām 250, 400 vai 600 EUR robežām, ņemot vērā attālumu un piemērojamo regulējumu.";
}

function buildIntro(article: BlogArticleLv) {
  const disruption = getDisruptionLabel(article);
  const manual = getManualProfile(article);
  const first =
    `Šis ceļvedis skaidro tēmu “${article.title}” no Latvijas pasažiera skatpunkta: praktiski, juridiski precīzi un bez lieka žargona. Galvenais jautājums ir ${article.focus}. ${manual.scenario} Saskaņā ar EK 261/2004 vai UK261 nepietiek vien ar faktu, ka lidojums kavējās vai tika atcelts. Jāpārbauda, no kuras lidostas reiss izlidoja, kura aviokompānija faktiski veica lidojumu, cik vēlu pasažieris ieradās galamērķī un vai aviokompānija var pierādīt apstākļus, kurus tā reāli nevarēja kontrolēt.`;
  const second =
    `Latvijas pasažieriem tas īpaši svarīgi lidojumos no Rīgas, kā arī ceļojumos caur Londonu, Dublinu, Oslo, Stokholmu, Helsinkiem, Varšavu, Stambulu, Dubaiju vai Hurgadu. ${getAmountSentence(article)} ${manual.check} Saglabājiet rezervācijas numuru, iekāpšanas karti, aviokompānijas paziņojumus par ${disruption}, ekrānuzņēmumus no lidostas tablo vai lietotnes un čekus par ēdienu, viesnīcu vai transportu. Zemāk atradīsiet īso atbildi, kompensācijas tabulu, praktiskos soļus un BUJ, kas sagatavoti pēc ClaimWinger licencēta juridiskā konsultanta loģikas.`;

  if (article.localAuthority) {
    return [
      first,
      `${second} Ja aviokompānija neatbild vai sniedz vispārīgu atteikumu, Latvijas gadījumos svarīgs ir CAA un PTAC konteksts. Tomēr pirmais solis parasti joprojām ir skaidra rakstiska prasība faktiskajam pārvadātājam.`,
    ];
  }

  if (article.limitation) {
    return [
      first,
      `${second} Vecākiem lidojumiem papildus jāvērtē noilgums. Latvijā praktiski jāņem vērā 3 gadu termiņš, tāpēc nav vērts atlikt prasību pat tad, ja šķiet, ka dokumenti vēl ir viegli atrodami.`,
    ];
  }

  if (article.nonEuCarrier) {
    return [
      first,
      `${second} Ne ES pārvadātāju gadījumā virziens ir īpaši svarīgs: lidojums no Rīgas var būt aizsargāts, bet atgriešanās no Stambulas, Dubaijas, Hurgadas vai citas trešās valsts ar ne ES aviokompāniju bieži vairs nav EK 261 lieta.`,
    ];
  }

  return [first, second];
}

function buildQuickAnswer(article: BlogArticleLv) {
  const answers = [
    `Īsā atbilde: ${getSubject(article)} gadījumā vispirms jāpārbauda, vai lidojums ietilpst EK 261 vai UK261 darbības jomā.`,
    "Naudas kompensācija par kavēšanos parasti kļūst aktuāla, ja galamērķī ierodaties vismaz 3 stundas vēlāk un iemesls ir aviokompānijas atbildības zonā.",
    "Iespējamās summas ir 250, 400 vai 600 EUR par pasažieri; tās ir atkarīgas no attāluma, nevis no biļetes cenas.",
  ];

  if (article.nonEuCarrier) {
    answers.push("Ne ES pārvadātājam virziens ir izšķirošs: izlidošana no Rīgas var būt aizsargāta, bet atgriešanās no trešās valsts bieži nav.");
  }

  if (article.uk261) {
    answers.push("Lidojumi no Lielbritānijas pēc Brexit parasti tiek vērtēti pēc UK261, nevis klasiskā EK 261, lai gan kompensāciju loģika ir ļoti līdzīga.");
  }

  if (article.voucher) {
    answers.push("Kupons automātiski neaizstāj tiesības uz naudu, ja tiesību akti dod tiesības prasīt atmaksu vai kompensāciju skaidrā naudā.");
  }

  if (article.cancelledCase) {
    answers.push("Atcelšanas gadījumā atsevišķi jāvērtē, kad saņēmāt paziņojumu un vai piedāvātais alternatīvais reiss bija tiesiski pietiekams.");
  }

  return answers.slice(0, 4);
}

function buildKeyPoints(article: BlogArticleLv) {
  const manual = getManualProfile(article);
  const points = [
    `Saglabājiet rezervāciju, iekāpšanas karti, reisa numuru, aviokompānijas e-pastus un faktiskā ierašanās laika pierādījumus. ${manual.evidence}`,
    "Svarīgs ir galamērķis, īpaši tad, ja ceļojums bija viena rezervācija ar savienojumu Rīgā, Helsinkos, Varšavā vai citā hubā.",
    "Ēdiens, viesnīca un transports ir atsevišķas aprūpes tiesības, kas var pastāvēt paralēli 250 / 400 / 600 EUR kompensācijai.",
    `Biežākā kļūda šajā tēmā: ${manual.mistake}`,
    "ClaimWinger var pārbaudīt lietu pēc no-win-no-fee modeļa latviešu formā vietnē claimwinger.com/lv.",
  ];

  if (article.airlineName) {
    points[1] = `${article.airlineName} lietās pārbaudiet faktisko pārvadātāju, ne tikai zīmolu, biļetes pārdevēju vai kodu koplietošanas numuru.`;
  }

  if (article.routeName) {
    points[1] = `Maršrutā ${article.routeName} izšķiroši ir virziens, faktiskais pārvadātājs, attālums un kavēšanās galamērķī.`;
  }

  if (article.limitation) {
    points[2] = "Latvijā kompensācijas prasībām praktiski svarīgs ir 3 gadu termiņš, tāpēc dokumentus labāk sagatavot uzreiz.";
  }

  if (article.uk261) {
    points[2] = "Lidojumiem no UK pēc Brexit parasti piemēro UK261; summas ir līdzīgas, bet juridiskā sistēma ir atsevišķa.";
  }

  if (article.ota) {
    points[1] = "Biļetes pirkšana caur Booking.com, eSky vai tieši airBaltic.com parasti neatceļ prasību pret faktisko pārvadātāju.";
  }

  if (article.business) {
    points[1] = "Komandējumā fiksētā kompensācija parasti pienākas pasažierim, pat ja biļeti apmaksāja darba devējs.";
  }

  if (article.miles) {
    points[1] = "Biļete, kas iegādāta ar airBaltic Miles vai citiem lojalitātes punktiem, parasti nezaudē EK 261 aizsardzību.";
  }

  return points;
}

function buildManualSection(article: BlogArticleLv): LvArticleSection {
  const manual = getManualProfile(article);

  return {
    title: manual.heading,
    paragraphs: [
      manual.scenario,
      manual.check,
    ],
    bullets: [
      `Pierādījums, kas visbiežāk palīdz: ${manual.evidence}`,
      `Kļūda, no kuras izvairīties: ${manual.mistake}`,
    ],
  };
}

function buildNonEuSection(article: BlogArticleLv): LvArticleSection {
  const subject = article.airlineName || article.routeName || "ne ES pārvadātājs";

  return {
    title: "Obligātā tabula ne ES pārvadātājiem",
    paragraphs: [
      `Runājot par ${subject}, biežākā kļūda ir pieņemt, ka viena un tā pati aviokompānija visos virzienos rada vienādu rezultātu. Tā nav. EK 261 ļoti spēcīgi aizsargā lidojumus, kas izlido no ES lidostas, bet kļūst šaurāks lidojumiem no trešajām valstīm uz Eiropu, ja faktiskais pārvadātājs nav Eiropas aviokompānija.`,
      "Tāpēc Rīga-Stambula, Rīga-Dubaija vai Rīga-Hurgada var būt vērtējami citādi nekā atgriešanās no Stambulas, Dubaijas vai Hurgadas uz Rīgu. Vispirms nosakiet faktisko pārvadātāju, izlidošanas lidostu un to, vai ceļojums bija viena rezervācija.",
    ],
    table: "nonEu",
  };
}

function buildCoreSections(article: BlogArticleLv): LvArticleSection[] {
  const subject = getSubject(article);
  const sections: LvArticleSection[] = [
    {
      title: "Kad šis gadījums ietilpst EK 261 vai UK261?",
      paragraphs: [
        `Pirmais solis ${subject} gadījumā ir noteikt piemērojamo regulējumu. Ja lidojums izlido no ES, EEZ, Šveices vai UK lidostas, pasažierim parasti ir spēcīga aizsardzība neatkarīgi no aviokompānijas valsts. Ja lidojums ielido Eiropā no trešās valsts, īpaši svarīgi kļūst tas, vai faktiskais pārvadātājs ir Eiropas aviokompānija.`,
        "Rīgas lidostas gadījumā pamatprincips ir skaidrs: Latvija ir ES dalībvalsts, tāpēc no RIX izlidojošiem reisiem EK 261 parasti var tikt piemērots arī tad, ja pārvadātājs ir ne ES aviokompānija. Savukārt lidojumiem no Londonas, Stansted, Luton vai Birmingemas uz Latviju pēc Brexit parasti jāskatās UK261.",
      ],
      bullets: [
        "Lidojums no Rīgas: EK 261 parasti var attiekties.",
        "Lidojums no UK uz Latviju: pēc Brexit parasti UK261.",
        "Lidojums no trešās valsts ar ne ES pārvadātāju: EK 261 bieži neattiecas.",
      ],
    },
    {
      title: "Kā aprēķina 250, 400 un 600 EUR?",
      paragraphs: [
        "EK 261 kompensācija nav atlaide, lojalitātes bonuss vai atlīdzība par biļetes cenu. Tā ir fiksēta summa pēc maršruta attāluma: 250 EUR īsiem lidojumiem, 400 EUR vidēja attāluma lidojumiem un 600 EUR tāliem maršrutiem virs 3 500 km.",
        `${subject} gadījumā jāapvieno divi jautājumi: kāds ir attālums un vai traucējums sasniedz juridisko slieksni. Kavēšanās gadījumā parasti skatās vismaz 3 stundas galamērķī. Atcelšanas gadījumā svarīgs ir paziņojuma termiņš un aizvietojošā reisa kvalitāte.`,
      ],
      bullets: [
        "Līdz 1 500 km: 250 EUR.",
        "1 500-3 500 km: 400 EUR.",
        "Vairāk par 3 500 km: 600 EUR.",
      ],
    },
    {
      title: "Kādus pierādījumus saglabāt?",
      paragraphs: [
        "Spēcīgākās lietas ir labi dokumentētas. Saglabājiet rezervācijas apstiprinājumu, PNR numuru, iekāpšanas karti, SMS vai e-pastus no aviokompānijas, ekrānuzņēmumus no lietotnes un lidostas tablo. Ja gaidot radās papildu izmaksas, saglabājiet arī čekus.",
        "Nav katastrofa, ja trūkst viens dokuments. Tomēr jo precīzāk var atjaunot maršrutu, laikus un aviokompānijas norādīto iemeslu, jo vieglāk pārbaudīt, vai pārvadātājs atbild un vai summa ir 250, 400 vai 600 EUR.",
      ],
      bullets: [
        "PNR vai rezervācijas numurs.",
        "Reisa numurs un datums.",
        "Faktiskā ierašanās laika pierādījums.",
        "Aviokompānijas paziņojumi par kavēšanos, atcelšanu vai pārrutēšanu.",
      ],
    },
    {
      title: "Ko darīt soli pa solim?",
      paragraphs: [
        "Vispirms sakārtojiet faktus: maršrutu, datumu, faktisko pārvadātāju, plānoto un reālo ierašanās laiku, traucējuma iemeslu un dokumentus. Tad pārbaudiet, vai lieta ietilpst EK 261 vai UK261. Trešais solis ir skaidra prasība ar konkrētu summu un pierādījumiem vai pārbaude ClaimWinger, ja nevēlaties paši sarakstīties ar aviokompāniju.",
        "Ja aviokompānija neatbild, sniedz neskaidru atteikumu vai atsaucas uz vispārīgiem ārkārtas apstākļiem, atteikumu nevajadzētu uzskatīt par galīgu bez pārbaudes. Latvijas pasažieriem svarīgi nošķirt aviokompānijas iekšējo atbildi no reālās juridiskās atbildības.",
      ],
      bullets: [
        "Sagatavojiet īsu lietas hronoloģiju.",
        "Pārbaudiet EK 261, UK261 vai citu piemērojamu sistēmu.",
        "Nepieņemiet kuponu, ja vēlaties naudu un likums dod tiesības to prasīt.",
        "Atteikuma gadījumā pieprasiet konkrētu iemeslu, nevis vispārīgu frāzi.",
      ],
    },
  ];

  if (article.nonEuCarrier) {
    sections.splice(1, 0, buildNonEuSection(article));
  }

  if (article.uk261) {
    sections.splice(article.nonEuCarrier ? 2 : 1, 0, {
      title: "UK261 latviešiem pēc Brexit: kas jāzina?",
      paragraphs: [
        "Pēc Brexit lidojumiem, kas izlido no Apvienotās Karalistes, klasiskā EK 261 sistēma parasti vairs nav galvenā. Tās vietā piemēro UK261. Praktiskā loģika ir līdzīga: attālums, kavēšanās, atcelšana, iekāpšanas atteikums un aviokompānijas atbildība.",
        "Latvijas diasporai tas ir būtiski lidojumos no London Heathrow, Stansted, Luton, Gatwick, Birmingham, Bristol, Leeds Bradford vai Edinburgh uz Rīgu. Lidojums no Latvijas uz UK parasti ir EK 261, bet atgriešanās no UK uz Latviju parasti ir UK261.",
      ],
    });
  }

  const manualIndex =
    1 + (article.nonEuCarrier ? 1 : 0) + (article.uk261 ? 1 : 0);
  sections.splice(manualIndex, 0, buildManualSection(article));

  if (article.localAuthority) {
    sections.push({
      title: "Kad iesaistīt CAA Latvija, PTAC vai UK CAA?",
      paragraphs: [
        "Latvijā aviācijas pasažieru tiesību kontekstā svarīgākā institūcija ir Civilās aviācijas aģentūra. PTAC var būt nozīmīgs patērētāju tiesību un pakalpojumu strīdos, piemēram, ja problēma saistīta ar starpnieku, maldinošu piedāvājumu vai ceļojuma paketi.",
        "Ja lidojums izlidoja no Apvienotās Karalistes, pēc Brexit var būt aktuāla UK CAA un UK261 sistēma. Pirms eskalācijas precīzi nosakiet jurisdikciju, jo nepareizs adresāts var palēnināt lietu.",
      ],
    });
  }

  if (article.limitation) {
    sections.push({
      title: "3 gadu noilgums Latvijā",
      paragraphs: [
        "Latvijā lidojumu kompensācijas prasībām praktiski svarīgs ir 3 gadu termiņš. Tas nenozīmē, ka vecāks lidojums vienmēr ir bezcerīgs, bet jo tuvāk termiņa beigām, jo svarīgāk ir ātri savākt dokumentus un rīkoties.",
        "Laiks vājina pierādījumus: pazūd e-pasti, pasažieri pazaudē iekāpšanas kartes, bet aviokompānijām var būt grūtāk atjaunot operatīvos datus. Tāpēc arī formāli vēl derīgu prasību nevajadzētu atlikt.",
      ],
    });
  }

  if (article.technical) {
    sections.push({
      title: "Tehnisks defekts nav automātisks atteikums",
      paragraphs: [
        "Aviokompānijas bieži atsaucas uz tehnisku defektu kā uz ārkārtēju apstākli. Tomēr parasta tehniska problēma, kas saistīta ar lidmašīnas uzturēšanu vai ekspluatāciju, bieži paliek aviokompānijas atbildības zonā.",
        "Svarīgi prasīt precīzu iemeslu, nevis pieņemt vispārīgu frāzi. Ja atteikumā nav konkrētas informācijas par ārēju, neparedzamu un nekontrolējamu notikumu, lietu ir vērts pārbaudīt padziļināti.",
      ],
    });
  }

  if (article.ota) {
    sections.push({
      title: "Vai OTA pārdevējs maina jūsu tiesības?",
      paragraphs: [
        "Biļetes pirkšana caur Booking.com, eSky, airBaltic.com vai citu kanālu parasti neatceļ EK 261 kompensācijas tiesības. Prasība par kavēšanos, atcelšanu vai iekāpšanas atteikumu parasti tiek vērsta pret faktisko pārvadātāju.",
        "Starpnieks var būt svarīgs atmaksas, biļetes maiņas vai komunikācijas jautājumos, bet fiksētās kompensācijas loģika parasti paliek saistīta ar aviokompāniju, kas reisu veica vai kurai tas bija jāveic.",
      ],
    });
  }

  if (article.business) {
    sections.push({
      title: "Komandējums: kas saņem fiksēto kompensāciju?",
      paragraphs: [
        "Ja biļeti apmaksāja darba devējs, tas automātiski nenozīmē, ka fiksētā EK 261 kompensācija pienākas uzņēmumam. Tā parasti paredzēta pasažierim, kurš piedzīvoja neērtības: kavēšanos, gaidīšanu, nokavētu savienojumu vai iekāpšanas atteikumu.",
        "Darba devējam var būt iekšējie noteikumi par izdevumu atlīdzināšanu, bet prasība pret aviokompāniju par fiksēto kompensāciju parasti ir saistīta ar konkrēto fizisko pasažieri.",
      ],
    });
  }

  if (article.miles) {
    sections.push({
      title: "Biļetes ar punktiem un airBaltic Miles",
      paragraphs: [
        "Ja biļete iegādāta ar lojalitātes punktiem, piemēram, airBaltic Miles, pasažieris parasti nezaudē EK 261 aizsardzību. Galvenais ir tas, ka jums bija apstiprināta rezervācija un jūs bijāt tiesīgs ceļot.",
        "Kompensācija nav atkarīga no tā, vai biļete bija pilnībā apmaksāta naudā, daļēji apmaksāta ar punktiem vai iegūta akcijas ietvaros. Izšķirošs ir maršruts, traucējuma veids un aviokompānijas atbildība.",
      ],
    });
  }

  return sections;
}

function buildFaqs(article: BlogArticleLv): LvArticleFaq[] {
  const subject = getSubject(article);
  const manual = getManualProfile(article);
  const faqs: LvArticleFaq[] = [
    {
      question: `Vai ${subject} gadījumā var pienākties kompensācija?`,
      answer:
        "Jā, ja lidojums ietilpst EK 261 vai UK261 darbības jomā, traucējums sasniedz tiesisko slieksni un aviokompānijai nav pamatota izņēmuma. Visbiežāk jāpārbauda izlidošanas lidosta, faktiskais pārvadātājs un kavēšanās galamērķī.",
    },
    {
      question: "Cik var saņemt saskaņā ar EK 261?",
      answer:
        "Fiksētās summas ir 250, 400 vai 600 EUR par pasažieri. Precīzā summa ir atkarīga no maršruta attāluma, nevis no biļetes cenas.",
    },
    {
      question: "Kādi dokumenti jāsaglabā?",
      answer:
        "Visvairāk palīdz rezervācijas numurs, iekāpšanas karte, reisa numurs, datums, aviokompānijas paziņojumi un faktiskā ierašanās laika pierādījums. Ja bija papildu izmaksas, saglabājiet čekus par ēdienu, viesnīcu un transportu.",
    },
    {
      question: "Vai ClaimWinger var pārbaudīt šo gadījumu?",
      answer:
        "Jā, datus var iesniegt ClaimWinger latviešu formā. Modelis ir no-win-no-fee, tāpēc avansa maksa netiek prasīta.",
    },
  ];

  faqs.splice(1, 0, {
    question: "Kas šajā konkrētajā gadījumā visbiežāk izšķir rezultātu?",
    answer:
      `${manual.check} Praktiski svarīgākais pierādījums: ${manual.evidence}`,
  });

  if (article.nonEuCarrier) {
    faqs[0] = {
      question: "Vai EK 261 attiecas uz ne ES aviokompāniju?",
      answer:
        "Jā, ja lidojums izlido no ES lidostas, piemēram, no Rīgas. Taču atgriešanās no Stambulas, Dubaijas, Hurgadas vai citas trešās valsts ar ne ES pārvadātāju bieži neietilpst EK 261.",
    };
  }

  if (article.uk261) {
    faqs[0] = {
      question: "Vai no UK piemēro EK 261 vai UK261?",
      answer:
        "Pēc Brexit lidojumiem, kas izlido no UK, parasti piemēro UK261. Lidojums no Latvijas uz UK parasti tiek vērtēts pēc EK 261, jo tas izlido no ES lidostas.",
    };
  }

  if (article.voucher) {
    faqs.push({
      question: "Ja pieņemu kuponu, vai zaudēju tiesības uz naudu?",
      answer:
        "Tas ir atkarīgs no kupona noteikumiem. Pirms piekrišanas pārbaudiet, vai neatsakāties no naudas atmaksas vai fiksētās kompensācijas, kas jums pienāktos saskaņā ar tiesību aktiem.",
    });
  }

  if (article.localAuthority) {
    faqs.push({
      question: "Kur Latvijā vērsties, ja aviokompānija neatbild?",
      answer:
        "Vispirms iesniedziet rakstisku prasību faktiskajam pārvadātājam. Ja atbildes nav vai tā ir nepamatota, var būt aktuāla CAA Latvija un atsevišķos patērētāju jautājumos arī PTAC.",
    });
  }

  if (article.limitation) {
    faqs.push({
      question: "Vai pēc 3 gadiem vēl ir vērts pārbaudīt lidojumu?",
      answer:
        "Vērts pārbaudīt, bet kavēties ir riskanti. Latvijā 3 gadu termiņš ir būtisks orientieris, tāpēc jo ātrāk savāksiet dokumentus un iesniegsiet lietu, jo labāk.",
    });
  }

  return faqs.slice(0, 5);
}

function buildContextualLinks(article: BlogArticleLv): LvContextualLink[] {
  const destination = getDestination(article.ctaPath);
  const primaryHref = buildClaimWingerLvLink(destination, {
    medium: "article_context_link",
    campaign: article.slug,
    content: "primary_claim_check",
  });
  const generalHref = buildClaimWingerLvLink("home", {
    medium: "article_context_link",
    campaign: article.slug,
    content: "general_claim_check",
  });
  const alternateHref = buildClaimWingerLvLink(
    article.ctaPath === "/cancelled-flight" ? "delayed" : "cancelled",
    {
      medium: "article_context_link",
      campaign: article.slug,
      content: "alternate_disruption",
    },
  );

  return [
    {
      label: article.ctaPath === "/cancelled-flight" ? "Pārbaudīt atceltu lidojumu" : "Pārbaudīt kavētu lidojumu",
      href: primaryHref,
      placement: `lv_article_${article.slug}_primary_context`,
      description:
        "Der, ja jums jau ir reisa numurs, datums un īss problēmas apraksts.",
    },
    {
      label: "Vispārīga ClaimWinger pārbaude",
      href: generalHref,
      placement: `lv_article_${article.slug}_general_context`,
      description:
        "Noder, ja vēl neesat pārliecināti, vai tā ir kavēšanās, atcelšana, overbooking vai nokavēts savienojums.",
    },
    {
      label: article.ctaPath === "/cancelled-flight" ? "Ja gadījums bija kavēšanās" : "Ja gadījums bija atcelšana",
      href: alternateHref,
      placement: `lv_article_${article.slug}_alternate_context`,
      description:
        "Der jauktām situācijām, kad grafiks mainījās, tika piedāvāts cits reiss vai kavēšanās pārvērtās atcelšanā.",
    },
  ];
}

export function buildLvArticleContent(article: BlogArticleLv): LvArticleContent {
  const ctaDestination = getDestination(article.ctaPath);

  return {
    title: article.title,
    seoTitle: `${article.title} | EK 261 Latvija`,
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
