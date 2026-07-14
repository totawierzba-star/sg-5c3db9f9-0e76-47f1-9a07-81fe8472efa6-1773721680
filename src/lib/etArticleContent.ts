import type {
  BlogArticleEt,
  BlogArticleEtCtaPath,
} from "@/lib/blogArticlesEt";
import {
  buildClaimWingerEtLink,
  type ClaimWingerEtDestination,
} from "@/lib/claimwingerLinksEt";

export type EtArticleSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
  table?: "nonEu";
};

export type EtArticleFaq = {
  question: string;
  answer: string;
};

export type EtContextualLink = {
  label: string;
  href: string;
  placement: string;
  description: string;
};

export type EtArticleContent = {
  title: string;
  seoTitle: string;
  description: string;
  intro: string[];
  quickAnswer: string[];
  keyPoints: string[];
  sections: EtArticleSection[];
  faqs: EtArticleFaq[];
  ctaDestination: ClaimWingerEtDestination;
  ctaPath: BlogArticleEtCtaPath;
  ctaAnchor: string;
  contextualLinks: EtContextualLink[];
};

const delayedAnchor = "ClaimWingeri eestikeelse vormi hilinenud lennu jaoks";
const cancelledAnchor = "ClaimWingeri eestikeelse vormi tühistatud lennu jaoks";

type EtManualProfile = {
  heading: string;
  scenario: string;
  check: string;
  evidence: string;
  mistake: string;
};

const manualProfileOverrides: Partial<Record<string, EtManualProfile>> = {
  "kui-suur-on-huvitis-hilinenud-lennu-eest": {
    heading: "Summa määrab vahemaa, mitte pileti hind",
    scenario:
      "Tüüpiline Eesti juhtum liigub kolmes astmes: Tallinn–Stockholm (u 390 km) jääb 250 € astmesse, Tallinn–Frankfurt (u 1540 km) ja Tallinn–London (u 1830 km) annavad 400 € ning alles üle 3500 km pikkused marsruudid jõuavad 600 € tasemele.",
    check:
      "Kontrollige marsruudi vahemaad lähtekohast lõppsihtkohta ja alles seejärel hilinemise tunde; summa ei sõltu sellest, kui palju pilet maksis.",
    evidence:
      "Hoidke alles broneering kogu marsruudiga, sest ümberistumisega reisil arvutatakse vahemaa üldjuhul lõppsihtkoha järgi.",
    mistake:
      "Ärge võrrelge hüvitist pileti hinnaga: ka 20 € odavpilet võib anda 250–600 €, kui marsruut ja hilinemine seda toetavad.",
  },
  "mitu-tundi-hilinemist-annab-oiguse-huvitisele": {
    heading: "Loeb saabumine lõppsihtkohta, mitte väljumine",
    scenario:
      "Reisija näeb Tallinna lennujaamas väljumise hilinemist, kuid õiguslikult mõõdetakse hilinemist hetkel, mil jõuate lõppsihtkohta — üldjuhul siis, kui lennuki uks avatakse.",
    check:
      "Võrrelge plaanitud ja tegelikku saabumisaega lõppsihtkohas; rahaline hüvitis eeldab üldjuhul vähemalt 3-tunnist vahet, hoolitsusõigused võivad sõltuvalt vahemaast alata juba 2 tunnist.",
    evidence:
      "Ekraanipilt äpist või lennujaama tabloost tegeliku saabumisajaga on sageli kogu juhtumi kõige väärtuslikum tõend.",
    mistake:
      "Ärge loobuge nõudest ainult seetõttu, et väljumine hilines alla 3 tunni; otsustav on saabumine lõppsihtkohta, mitte väljumine.",
  },
  "mis-on-erakorralised-asjaolud": {
    heading: "Erakorralisus tuleb tõendada, mitte ainult välja öelda",
    scenario:
      "Lennufirma vastus võib piirduda fraasiga „erakorralised asjaolud”, kuigi tegelik põhjus oli tavaline tehniline rike või lennufirma enda töötajate streik, mis Euroopa Kohtu praktika järgi üldjuhul erandiks ei kvalifitseeru.",
    check:
      "Eristage väliseid sündmusi — äärmuslik ilm, lennujuhtimise piirangud, linnuparv — lennufirma enda tegevusest, nagu hooldus, meeskonna puudus või oma töötajate streik.",
    evidence:
      "Kirjalik keeldumine koos põhjusega ja sama päeva lennuandmed — kas teised lennud samal marsruudil toimusid — aitavad fraasi sisu kontrollida.",
    mistake:
      "Ärge lugege üldsõnalist viidet erakorralistele asjaoludele lõplikuks vastuseks; nõudke konkreetset sündmust ja selle tõendeid.",
  },
  "kas-eu261-kehtib-odavlennufirmadele": {
    heading: "Ryanair ja Wizz Air on täpselt samamoodi hõlmatud",
    scenario:
      "Eesti reisija eeldab sageli, et 20–40 € odavpilet tähendab nõrgemaid õigusi, kuid määrus (EÜ) nr 261/2004 ei tee pileti hinna järgi mingit vahet.",
    check:
      "Kontrollige tegutsevat vedajat ja väljumislennujaama, mitte pileti hinda; Ryanairi, Wizz Airi ja airBalticu lennud Tallinnast on kaitstud nagu iga teine lend.",
    evidence:
      "Broneeringu kinnitus ja pardakaart on piisav alus; pileti hinda tõendina vaja ei ole.",
    mistake:
      "Ärge jätke nõuet esitamata ainult seetõttu, et pilet oli odav; 250–600 € hüvitis võib ületada pileti hinda kordades.",
  },
  "maarus-eu-261-2004-reisijate-oigused": {
    heading: "Eesti reisijale kõige olulisem",
    scenario:
      "Tüüpiline Eesti juhtum ei ole ainult lühike ootamine TLL-i väljumisalas, vaid kogu reis: Tallinn–Frankfurt–New York, Tallinn–Helsinki–Tokyo või Tallinn–London edasise ümberistumisega.",
    check:
      "Kõigepealt tehke kindlaks, kas kaitstud on väljumispunkt, saabumispunkt või tegutsev vedaja; alles seejärel vaadake tunde ja summat.",
    evidence:
      "Hoidke kogu marsruut ühes broneeringus, sest ümberistumisega lendudel määrab nõude tugevuse sageli just lõppsihtkoht.",
    mistake:
      "Ärge tehke viga, võrreldes hüvitist pileti hinnaga: ka odav pilet võib anda 600 €, kui marsruut ja hilinemine seda toetavad.",
  },
  "huvitise-aegumistahtaeg": {
    heading: "Umbes 3 aastat on praktiline töötähtaeg",
    scenario:
      "Vana airBalticu või Ryanairi lend võib e-postist veel leitav olla, kuid aastatega muutuvad tõendid hapraks ja vaidlus keerulisemaks; Eestis esitatavate nõuete puhul on tähtaeg üldjuhul umbes 3 aastat, kuid täpne tähtaeg sõltub asjaoludest.",
    check:
      "Kontrollige lennu kuupäeva tänase kuupäeva suhtes, mitte hetke suhtes, mil lennufirmale esimest korda kirjutasite.",
    evidence:
      "Kui juhtum läheneb tähtajale, salvestage PDF-pilet, pangamakse, e-kirjad ja äpi ekraanipildid postkastist väljapoole.",
    mistake:
      "Ärge oodake, kuni lennufirma ise pikalt vastab; aegumine võib kirjavahetuse ajal edasi kulgeda.",
  },
  "airbaltic-hilinenud-lend-huvitis": {
    heading: "airBalticu puhul loeb sõlmjaama mudel",
    scenario:
      "airBalticu lend Tallinnast ei ole sageli isoleeritud lõik, vaid ühendus läbi Riia Skandinaaviasse, Saksamaale või kaugemasse sihtkohta; hilinemine esimesel lõigul võib murda kogu reisi.",
    check:
      "Tehke kindlaks, kas hilinemine rikkus ühe broneeringu järgmise lõigu; see võib muuta lühikese Tallinna hilinemise tugevaks lõppsihtkoha nõudeks.",
    evidence:
      "Hoidke kõik lõigud ühes PNR-is, mitte ainult hilinenud airBalticu lendu.",
    mistake:
      "Ärge piirduge väljumise hilinemise minutitega; EÜ 261 vaatab üldjuhul lõppsihtkohta saabumise hilinemist.",
  },
  "ryanair-hilinenud-lend-huvitis": {
    heading: "Odavpilet ei nõrgesta nõuet Ryanairi vastu",
    scenario:
      "Ryanair on ELi lennufirma, seega on nii Tallinnast väljuvad kui ka Eestisse saabuvad Ryanairi lennud EÜ 261 kaitse all sõltumata sellest, kui odav pilet oli.",
    check:
      "Kontrollige tegelikku hilinemist lõppsihtkohas ja lennufirma nimetatud põhjust; tasuta ümberbroneering ei asenda kindlasummalist hüvitist.",
    evidence:
      "Hoidke alles broneeringu kinnitus, pardakaart ja Ryanairi äpi või e-posti teated hilinemise kohta.",
    mistake:
      "Ärge leppige vautšeri või „goodwill” pakkumisega, kui seadus annab õiguse 250–600 € rahalisele hüvitisele.",
  },
  "wizz-air-hilinenud-lend-huvitis": {
    heading: "Wizz Airi puhul kontrollige mõlemat suunda",
    scenario:
      "Wizz Air on ELi lennufirma, seega kehtib EÜ 261 nii Tallinnast väljuvatele kui ka Tallinnasse saabuvatele lendudele; segadus tekib sageli siis, kui pileti müüs üks ja lennu tegi teine ettevõte.",
    check:
      "Vaadake pardakaardilt või broneeringust operating carrier välja; vastutus järgib tegutsevat vedajat, mitte piletimüüjat.",
    evidence:
      "Hoidke alles Wizz Airi e-kirjad ja äpi teated, sest neis on sageli kirjas nii uus kellaaeg kui ka põhjus.",
    mistake:
      "Ärge eeldage, et odavlennufirma puhul kehtivad leebemad reeglid; künnised ja summad on täpselt samad.",
  },
  "lufthansa-hilinenud-lend-huvitis": {
    heading: "Lufthansa puhul otsustab ümberistumine",
    scenario:
      "Lufthansa lend Tallinnast tähendab enamasti ümberistumist Frankfurdis või Münchenis; reisija võib hilineda ainult esimesel lõigul, kuid nõue tekib hetkel, kui ühe broneeringu jätkulend jääb minemata.",
    check:
      "Kontrollige, kas mõlemad lõigud olid ühes PNR-is ja kui hilja jõudsite lõppsihtkohta, mitte ainult Frankfurti või Münchenisse.",
    evidence:
      "Hoidke alles pardakaardid, algne ümberistumisaeg ja uus lend, millele teid ümber broneeriti.",
    mistake:
      "Ärge jagage üht broneeringut kaheks eraldi kaebuseks, kui probleem on mahajäänud ümberistumine.",
  },
  "tallinna-lennujaam-hilinenud-lend": {
    heading: "TLL-is loeb kogu marsruut, mitte ainult ootamine",
    scenario:
      "Tallinna Lennart Meri lennujaamas näeb reisija sageli ainult kohalikku ootamist, kuid õiguslikult tuleb hinnata kogu marsruuti ja lennufirma vastutust; Eesti on ELi liige, seega on kõik TLL-ist väljuvad lennud kaitstud sõltumata vedajast.",
    check:
      "Pange kirja, kas probleem tekkis lennujaama taristus, lennufirma töökorralduses, turvakontrollis, ilmas või lennujuhtimises.",
    evidence:
      "Tabloofotod, väravateated ja hoolitsuskulude kviitungid on väärtuslikud, kui hiljem tuleb hoolitsusõigused hüvitisest eristada.",
    mistake:
      "Ärge ajage söögi- või hotelliõigust segamini kindlasummalise 250/400/600 € hüvitisega; need on eraldi nõuded.",
  },
  "lend-tallinn-london-hilinemine": {
    heading: "Tallinn–London: suund valib reeglistiku",
    scenario:
      "Tallinn–London on umbes 1830 km, seega annab Tallinnast väljuva lennu vähemalt 3-tunnine hilinemine 400 € määruse (EÜ) nr 261/2004 alusel; Londonist Tallinna suunas kohaldub pärast Brexitit UK261 ja hüvitis on 350 naela.",
    check:
      "Kõigepealt vaadake väljumislennujaama: Tallinnast väljudes EÜ 261 (400 €), Londonist väljudes UK261 (350 naela).",
    evidence:
      "Hoidke mõlema suuna kohta alles väljumislennujaam, tegutsev vedaja ja tegelik saabumisaeg, sest jurisdiktsioon on esimene vaidluspunkt.",
    mistake:
      "Ärge käsitlege sarnaseid summasid ühe ja sama õigussüsteemina; EÜ 261 ja UK261 on eraldi reeglistikud.",
  },
};

function getDestination(path: BlogArticleEtCtaPath): ClaimWingerEtDestination {
  return path === "/cancelled-flight" ? "cancelled" : "delayed";
}

function getManualProfile(article: BlogArticleEt): EtManualProfile {
  const override = manualProfileOverrides[article.slug];

  if (override) {
    return override;
  }

  if (article.voucher) {
    return {
      heading: "Vautšeri fookus: nõusolek ei ole formaalsus",
      scenario:
        "Vautšeripakkumine näeb sageli välja kiire lahendusena, kuid Eesti reisijale võib see mõjutada hilisemaid õigusi rahale või hüvitisele.",
      check:
        "Enne nõustumist kontrollige, kas vautšer asendab ainult pileti tagasimakse, kindlasummalise hüvitise või mõlemad nõuded korraga.",
      evidence:
        "Hoidke alles vautšeri tingimused, kehtivusaeg, e-kirja tekst ja iga valikunupp, mida lennufirma teile näitas.",
      mistake:
        "Ärge vajutage „accept” ainult seetõttu, et see on äpis kõige kiirem tee; võrrelge seda kõigepealt rahalise nõudega.",
    };
  }

  if (article.cancelledCase) {
    return {
      heading: "Tühistamise fookus: teavitamise hetk",
      scenario:
        "Tühistatud lennu puhul ei ole oluline ainult fakt, et lennuk ei väljunud, vaid ka see, millal reisija teate sai ja millist alternatiivi pakuti.",
      check:
        "Võrrelge algset väljumis- ja saabumisaega uue pakkumisega, eriti 14 päeva piiri lähedal.",
      evidence:
        "Hoidke alles algne pilet, tühistamise e-kiri, asenduslennu ajad ja tõend selle kohta, millal teate tegelikult saite.",
      mistake:
        "Ärge ajage pileti tagasimakset segamini kindlasummalise hüvitisega; tühistamise korral võivad need olla kaks eraldi õigust.",
    };
  }

  if (article.technical) {
    return {
      heading: "Tehniline fookus: fraas ei ole tõend",
      scenario:
        "Tehniline probleem võib olla täiesti reaalne, kuid õiguslikult ei piisa ainult sõnadest „technical reasons”, et hüvitisest keelduda.",
      check:
        "Küsige, kas rike oli tavaline käitamisprobleem, hooldus, kokkupõrge välise objektiga või ohutussündmus.",
      evidence:
        "Abiks on lennufirma kirjalik keeldumine, väravateated ja sama päeva lennustaatuse ajalugu.",
      mistake:
        "Ärge aktsepteerige tehnilist riket automaatse erakorralise asjaoluna ilma konkreetse selgituseta.",
    };
  }

  if (article.localAuthority) {
    return {
      heading: "Eskaleerimise fookus: TTJA ja täpsed faktid",
      scenario:
        "Kui lennufirma vaikib või vastab šablooniga, peab Eesti reisija juhtumi ette valmistama nii, et Tarbijakaitse ja Tehnilise Järelevalve Amet (TTJA) näeks kronoloogiat kohe.",
      check:
        "Märkige eraldi nõude kuupäev, lennufirma vastus, lennuandmed ja summa, mida nõuate.",
      evidence:
        "Olulised on kuupäevadega e-kirjad, keeldumise põhjendus, broneeringu PDF ja lühike sündmuste loend ilma emotsioonideta.",
      mistake:
        "Ärge saatke asutusele ainult äpi ekraanipilti; ilma täieliku marsruudi ja nõutava summata muutub juhtum nõrgemaks.",
    };
  }

  if (article.limitation) {
    return {
      heading: "Aegumise fookus: kuupäev on peamine fakt",
      scenario:
        "Vanemate lendude puhul ei alga õiguslik analüüs mitte lennufirmast, vaid kalendrist: kui ammu häire toimus ja kas dokumendid on veel leitavad.",
      check:
        "Võrrelge lennu kuupäeva Eestis praktikas arvestatava umbes 3-aastase tähtajaga ja valmistage juhtum ette enne viimast hetke.",
      evidence:
        "Pangamakse, broneeringu e-kiri ja vanad kalendrikirjed aitavad juhtumi taastada isegi siis, kui pardakaart on kadunud.",
      mistake:
        "Ärge oodake, kuni lennufirma ise kuude kaupa nõuet „menetleb”, kui tähtaeg läheneb lõpule.",
    };
  }

  if (article.miles) {
    return {
      heading: "Püsikliendipunktide fookus",
      scenario:
        "airBaltic Club punktide või muude püsikliendipunktidega ostetud pilet tekitab sageli kahtluse, kas see on „päris” pilet EÜ 261 mõttes.",
      check:
        "Kontrollige, kas broneering oli kinnitatud ja kas reisijal oli õigus konkreetse lennuga reisida.",
      evidence:
        "Hoidke alles punktide lunastamise kinnitus, maksude makse ja broneeringunumber.",
      mistake:
        "Ärge arvake, et ilma täishinnata ei ole hüvitist; reeglistik vaatab reisija õigusi, mitte ainult makseviisi.",
    };
  }

  if (article.routeName) {
    const route = article.routeName;
    const nonEuNote = article.nonEuCarrier
      ? "Sellel marsruudil tuleb eriti hoolikalt võrrelda vedajat mõlemas suunas, sest väljaspool ELi asuv lennufirma võib olla kaitstud ainult Tallinnast väljudes."
      : article.uk261
        ? "Sellel marsruudil võib suund viia juhtumi EÜ 261 alt UK261 alla, seega ei tohi Londoni või muu Ühendkuningriigi lennujaama lõiku hinnata harjumusest."
        : "Sellel marsruudil on üldjuhul kõige olulisem lõppsihtkohta saabumise aeg ja see, kas kõik lõigud olid ühes broneeringus.";

    return {
      heading: `Marsruudi fookus: ${route}`,
      scenario:
        `${route} reisija jaoks ei ole praktiline küsimus ainult see, kui palju lend hilines, vaid kummas suunas probleem tekkis, milline vedaja lendas ja kas oli ümberistumine.`,
      check: nonEuNote,
      evidence:
        "Hoidke alles plaanitud ja tegelik saabumisaeg, sest just see vahe otsustab kõige sagedamini, kas nõue on tugev.",
      mistake:
        "Ärge otsustage ainult väljumise hilinemise järgi; marsruudiartiklites on peaaegu alati peamine lõppsihtkoha hilinemine.",
    };
  }

  if (article.airportCode) {
    return {
      heading: `Lennujaama fookus: ${article.airportName || article.airportCode}`,
      scenario:
        "Tallinna lennujaamas näeb reisija sageli ainult kohalikku ootamist, kuid õiguslikult tuleb hinnata kogu marsruuti ja lennufirma vastutust.",
      check:
        "Pange kirja, kas probleem tekkis lennujaama taristus, lennufirma töökorralduses, turvakontrollis, ilmas või lennujuhtimises.",
      evidence:
        "Lennujaama tabloofotod, väravateated ja hoolitsuskulude kviitungid on väärtuslikud, kui hiljem tuleb hoolitsusõigused hüvitisest eristada.",
      mistake:
        "Ärge ajage õigust söögile või hotellile segamini kindlasummalise 250/400/600 € hüvitisega; need on eraldi nõuded.",
    };
  }

  if (article.airlineName) {
    return {
      heading: `Lennufirma fookus: ${article.airlineName}`,
      scenario:
        `${article.airlineName} puhul tuleb vaadata mitte ainult piletil olevat kaubamärki, vaid ka tegelikku tegutsevat vedajat ja lennu suunda.`,
      check:
        article.nonEuCarrier
          ? "Väljaspool ELi asuval vedajal võib Tallinnast väljuv lend olla kaitstud, kuid tagasilendu kolmandast riigist tuleb sageli hinnata teisiti."
          : "Euroopa vedajal on üldjuhul laiem EÜ 261 kate, kuid keeldumise põhjust tuleb siiski kontrollida.",
      evidence:
        "Hoidke alles lennufirma keeldumine või teade põhjuse kohta, sest just see määrab sageli järgmise sammu.",
      mistake:
        "Ärge usaldage lühikest klienditeeninduse fraasi; nõudke konkreetset tegelikku põhjust ja võrrelge seda EÜ 261 eranditega.",
    };
  }

  if (article.uk261) {
    return {
      heading: "Diasporaa fookus: UK261 pärast Brexitit",
      scenario:
        "Ühendkuningriigis elavate eestlaste kõige sagedasem viga on otsida EÜ 261 vastust lennule, mis algab Ühendkuningriigi lennujaamast.",
      check:
        "Kui väljumine on Londonist, Manchesterist, Birminghamist või Edinburghist, vaadake UK261; kui väljumine on Tallinnast, vaadake EÜ 261.",
      evidence:
        "Hoidke alles Ühendkuningriigi lennujaama väljumisandmed ja lennufirma teade, sest jurisdiktsioon on esimene vaidluspunkt.",
      mistake:
        "Ärge ajage sarnaseid hüvitissummasid segamini ühe ja sama õigussüsteemiga.",
    };
  }

  if (article.category === "situations") {
    return {
      heading: "Olukorra fookus: mitte ainult hilinemise minutid",
      scenario:
        "Erijuhtumites on nõue sageli tugev mitte seetõttu, et lend lihtsalt hilines, vaid seetõttu, et lennufirma jättis konkreetse kohustuse täitmata.",
      check:
        "Pange eraldi kirja sündmus, lennufirma pakkumine, teie otsus ja lisakulud.",
      evidence:
        "Neil juhtudel on eriti olulised kviitungid, kirjavahetus ja tõendid selle kohta, mida lennufirma teile kohapeal pakkus.",
      mistake:
        "Ärge nimetage kõike „delay claim’iks”; overbooking, downgrade, hoolitsus ja pankrot nõuavad erinevat argumentatsiooni.",
    };
  }

  if (article.category === "foundation") {
    return {
      heading: "Aluspõhimõtte fookus: kõigepealt jurisdiktsioon",
      scenario:
        "Alusküsimustes ei peitu suurim väärtus pikas seadusetsitaadis, vaid õiges järjekorras: jurisdiktsioon, hilinemise künnis, põhjus, tõendid.",
      check:
        "Alustage väljumislennujaamast ja tegutsevast vedajast, seejärel liikuge tundide ja hüvitissumma juurde.",
      evidence:
        "Õigusliku aluse artiklites aitab eriti marsruudikaart ühes broneeringus ja täpne teade häire põhjuse kohta.",
      mistake:
        "Ärge alustage küsimusest „kui palju makstakse”, enne kui on selge, kas EÜ 261 või UK261 üldse kohaldub.",
    };
  }

  if (article.category === "answers") {
    return {
      heading: "Lühivastuse fookus: üks konkreetne kontroll",
      scenario:
        "Lühivastuse artiklis soovib lugeja üldjuhul üht selget järeldust, seetõttu keskendub tekst kontrollile, mille saab teha kohe pärast lendu.",
      check:
        `Siin on peamine ${article.focus}; kui see punkt langeb dokumentidega kokku, tasub nõuet edasi kontrollida.`,
      evidence:
        "Piisab mõnest täpsest faktist: lennunumber, kuupäev, marsruut, saabumisaeg ja lennufirma selgitus.",
      mistake:
        "Ärge püüdke kõiki juhtumeid ühte vastusesse suruda; kui on ümberistumine, Ühendkuningriigi suund või väljaspool ELi asuv vedaja, on vaja lisakontrolli.",
    };
  }

  return {
    heading: "Praktiline fookus Eesti reisijale",
    scenario:
      "See teema töötab kõige paremini, kui hinnata seda konkreetse juhtumina: marsruut, vedaja, kuupäev, saabumise hilinemine ja põhjus.",
    check:
      "Enne nõuet koguge faktid ühte kohta ja alles siis otsustage, kas tegemist on EÜ 261, UK261 või kohaldamisalast välja jääva juhtumiga.",
    evidence:
      "Miinimumkomplekt on broneering, lennunumber, kuupäev, saabumisaeg ja lennufirma selgitus.",
    mistake:
      "Ärge lootke mälule lennujaamas kuuldu kohta; mõne nädala pärast on kirjalikud tõendid palju väärtuslikumad.",
  };
}

function getDisruptionLabel(article: BlogArticleEt) {
  const title = article.title.toLowerCase();

  if (article.ctaPath === "/cancelled-flight" || title.includes("tühista")) {
    return "tühistamise";
  }

  if (title.includes("overbooking") || title.includes("pardaleminek")) {
    return "pardalemineku keelamise";
  }

  if (title.includes("ümberistum")) {
    return "mahajäänud ümberistumise";
  }

  return "hilinemise";
}

function getSubject(article: BlogArticleEt) {
  return article.routeName || article.airlineName || article.airportName || article.focus;
}

function getAmountSentence(article: BlogArticleEt) {
  const subject = getSubject(article);

  if (article.routeName) {
    return `Marsruudil ${subject} sõltub summa vahemaast, suunast, tegutsevast vedajast ja hilinemisest lõppsihtkohas, mitte pileti hinnast.`;
  }

  if (article.airlineName) {
    return `${subject} puhul on otsustav teha kindlaks tegutsev vedaja, väljumislennujaam, suund ja häire tegelik põhjus.`;
  }

  if (article.airportName) {
    return `Lennujaama puhul ei ole oluline ainult ootamise koht, vaid kogu piletil olev marsruut, ümberistumised ja lõplik saabumisaeg.`;
  }

  return "Hüvitis määratakse kindlate 250, 400 või 600 € astmete järgi, arvestades vahemaad ja kohalduvat reeglistikku.";
}

function buildIntro(article: BlogArticleEt) {
  const disruption = getDisruptionLabel(article);
  const manual = getManualProfile(article);
  const first =
    `See teejuht selgitab teemat „${article.title}” Eesti reisija vaatest: praktiliselt, õiguslikult täpselt ja liigse žargoonita. Peamine küsimus on ${article.focus}. ${manual.scenario} Määruse (EÜ) nr 261/2004 või UK261 järgi ei piisa ainuüksi faktist, et lend hilines või tühistati. Kontrollida tuleb, millisest lennujaamast lend väljus, milline lennufirma lendu tegelikult teostas, kui hilja jõudis reisija lõppsihtkohta ja kas lennufirma suudab tõendada asjaolusid, mida ta tegelikult kontrollida ei saanud.`;
  const second =
    `Eesti reisijatele on see eriti oluline lendudel Tallinnast, samuti reisidel läbi Riia, Helsingi, Stockholmi, Frankfurdi, Müncheni, Londoni, Varssavi või Istanbuli. ${getAmountSentence(article)} ${manual.check} Hoidke alles broneeringunumber, pardakaart, lennufirma teated ${disruption} kohta, ekraanipildid lennujaama tabloost või äpist ning kviitungid söögi, hotelli või transpordi eest. Allpool leiate lühivastuse, hüvitise tabeli, praktilised sammud ja KKK, mis on koostatud ClaimWingeri litsentseeritud õigusnõustaja loogika järgi.`;

  if (article.localAuthority) {
    return [
      first,
      `${second} Kui lennufirma ei vasta või annab üldsõnalise äraütlemise, on Eesti juhtumites oluline Tarbijakaitse ja Tehnilise Järelevalve Ameti (TTJA) kontekst. Esimene samm on siiski üldjuhul selge kirjalik nõue tegutsevale vedajale.`,
    ];
  }

  if (article.limitation) {
    return [
      first,
      `${second} Vanemate lendude puhul tuleb lisaks hinnata aegumist. Eestis tuleb praktikas arvestada üldjuhul umbes 3-aastase tähtajaga, mille täpne pikkus sõltub asjaoludest, seega ei tasu nõuet edasi lükata isegi siis, kui dokumendid tunduvad veel kergesti leitavad.`,
    ];
  }

  if (article.nonEuCarrier) {
    return [
      first,
      `${second} Väljaspool ELi asuvate vedajate puhul on suund eriti oluline: lend Tallinnast võib olla kaitstud, kuid tagasilend Istanbulist, Dubaist või muust kolmandast riigist väljaspool ELi asuva lennufirmaga ei ole sageli enam EÜ 261 juhtum.`,
    ];
  }

  return [first, second];
}

function buildQuickAnswer(article: BlogArticleEt) {
  const answers = [
    `Lühivastus: ${getSubject(article)} puhul tuleb kõigepealt kontrollida, kas lend kuulub EÜ 261 või UK261 kohaldamisalasse.`,
    "Rahaline hüvitis hilinemise eest muutub üldjuhul aktuaalseks, kui jõuate lõppsihtkohta vähemalt 3 tundi hiljem ja põhjus on lennufirma vastutusalas.",
    "Võimalikud summad on 250, 400 või 600 € reisija kohta; need sõltuvad vahemaast, mitte pileti hinnast.",
  ];

  if (article.nonEuCarrier) {
    answers.push("Väljaspool ELi asuva vedaja puhul on suund otsustav: väljumine Tallinnast võib olla kaitstud, kuid tagasilend kolmandast riigist sageli mitte.");
  }

  if (article.uk261) {
    answers.push("Lennud Ühendkuningriigist hinnatakse pärast Brexitit üldjuhul UK261, mitte klassikalise EÜ 261 järgi; summad on 220, 350 või 520 naela ja loogika on väga sarnane.");
  }

  if (article.voucher) {
    answers.push("Vautšer ei asenda automaatselt õigust rahale, kui õigusaktid annavad õiguse nõuda tagasimakset või hüvitist rahas.");
  }

  if (article.cancelledCase) {
    answers.push("Tühistamise korral tuleb eraldi hinnata, millal teate saite ja kas pakutud asenduslend oli õiguslikult piisav.");
  }

  return answers.slice(0, 4);
}

function buildKeyPoints(article: BlogArticleEt) {
  const manual = getManualProfile(article);
  const points = [
    `Hoidke alles broneering, pardakaart, lennunumber, lennufirma e-kirjad ja tegeliku saabumisaja tõendid. ${manual.evidence}`,
    "Oluline on lõppsihtkoht, eriti kui reis oli üks broneering ümberistumisega Riias, Helsingis, Frankfurdis või muus sõlmjaamas.",
    "Söök, hotell ja transport on eraldi hoolitsusõigused, mis võivad kehtida paralleelselt 250 / 400 / 600 € hüvitisega.",
    `Kõige sagedasem viga selles teemas: ${manual.mistake}`,
    "ClaimWinger saab juhtumi läbi vaadata no-win-no-fee mudeli alusel eestikeelses vormis aadressil claimwinger.com/et.",
  ];

  if (article.airlineName) {
    points[1] = `${article.airlineName} juhtumites kontrollige tegutsevat vedajat, mitte ainult kaubamärki, piletimüüjat või koodijagamise numbrit.`;
  }

  if (article.routeName) {
    points[1] = `Marsruudil ${article.routeName} on otsustavad suund, tegutsev vedaja, vahemaa ja hilinemine lõppsihtkohas.`;
  }

  if (article.limitation) {
    points[2] = "Eestis esitatavate hüvitisnõuete puhul tuleb praktikas arvestada üldjuhul umbes 3-aastase tähtajaga, seetõttu tasub dokumendid kohe valmis panna.";
  }

  if (article.uk261) {
    points[2] = "Ühendkuningriigist väljuvatele lendudele kohaldub pärast Brexitit üldjuhul UK261; summad on 220, 350 või 520 naela, kuid õigussüsteem on eraldi.";
  }

  if (article.ota) {
    points[1] = "Pileti ostmine Booking.com-i või eSky kaudu või otse lennufirma kodulehelt ei võta üldjuhul ära nõuet tegutseva vedaja vastu.";
  }

  if (article.business) {
    points[1] = "Töölähetuses kuulub kindlasummaline hüvitis üldjuhul reisijale, isegi kui pileti maksis tööandja.";
  }

  if (article.miles) {
    points[1] = "airBaltic Club punktide või muude püsikliendipunktidega ostetud pilet ei kaota üldjuhul EÜ 261 kaitset.";
  }

  return points;
}

function buildManualSection(article: BlogArticleEt): EtArticleSection {
  const manual = getManualProfile(article);

  return {
    title: manual.heading,
    paragraphs: [
      manual.scenario,
      manual.check,
    ],
    bullets: [
      `Tõend, mis kõige sagedamini aitab: ${manual.evidence}`,
      `Viga, mida vältida: ${manual.mistake}`,
    ],
  };
}

function buildNonEuSection(article: BlogArticleEt): EtArticleSection {
  const subject = article.airlineName || article.routeName || "väljaspool ELi asuv vedaja";

  return {
    title: "Kohustuslik tabel väljaspool ELi asuvatele vedajatele",
    paragraphs: [
      `${subject} puhul on kõige sagedasem viga eeldada, et üks ja sama lennufirma annab igas suunas sama tulemuse. Nii see ei ole. EÜ 261 kaitseb väga tugevalt lende, mis väljuvad ELi lennujaamast, kuid muutub kitsamaks lendudel kolmandatest riikidest Euroopasse, kui tegutsev vedaja ei ole Euroopa lennufirma.`,
      "Seetõttu võib Tallinn–Istanbul või Tallinn–Dubai olla hinnatav teisiti kui tagasilend Istanbulist või Dubaist Tallinnasse. Kõigepealt tehke kindlaks tegutsev vedaja, väljumislennujaam ja see, kas reis oli üks broneering.",
    ],
    table: "nonEu",
  };
}

function buildCoreSections(article: BlogArticleEt): EtArticleSection[] {
  const subject = getSubject(article);
  const sections: EtArticleSection[] = [
    {
      title: "Millal kuulub see juhtum EÜ 261 või UK261 alla?",
      paragraphs: [
        `Esimene samm ${subject} puhul on kohaldatava reeglistiku kindlakstegemine. Kui lend väljub ELi, EMP, Šveitsi või Ühendkuningriigi lennujaamast, on reisijal üldjuhul tugev kaitse sõltumata lennufirma päritoluriigist. Kui lend saabub Euroopasse kolmandast riigist, muutub eriti oluliseks see, kas tegutsev vedaja on Euroopa lennufirma.`,
        "Tallinna lennujaama puhul on põhimõte selge: Eesti on ELi liikmesriik, seega saab EÜ 261 TLL-ist väljuvatele lendudele üldjuhul kohalduda ka siis, kui vedaja on väljastpoolt ELi. Seevastu lendudele Londonist, Stanstedist, Lutonist või Manchesterist Eestisse tuleb pärast Brexitit üldjuhul vaadata UK261.",
      ],
      bullets: [
        "Lend Tallinnast: EÜ 261 saab üldjuhul kohalduda.",
        "Lend Ühendkuningriigist Eestisse: pärast Brexitit üldjuhul UK261.",
        "Lend kolmandast riigist väljaspool ELi asuva vedajaga: EÜ 261 sageli ei kohaldu.",
      ],
    },
    {
      title: "Kuidas arvutatakse 250, 400 ja 600 €?",
      paragraphs: [
        "EÜ 261 hüvitis ei ole allahindlus, püsikliendiboonus ega pileti hinna tagastus. See on kindel summa marsruudi vahemaa järgi: 250 € lühikestel lendudel kuni 1500 km, 400 € keskmise pikkusega lendudel 1500–3500 km ja 600 € pikkadel marsruutidel üle 3500 km. Näiteks Tallinn–Helsinki (u 100 km) ja Tallinn–Stockholm (u 390 km) jäävad 250 € astmesse, Tallinn–Frankfurt (u 1540 km) ja Tallinn–London (u 1830 km) annavad 400 €.",
        `${subject} puhul tuleb ühendada kaks küsimust: milline on vahemaa ja kas häire ületab õigusliku künnise. Hilinemise puhul vaadatakse üldjuhul vähemalt 3 tundi lõppsihtkohas. Tühistamise puhul on olulised teavitamise tähtaeg ja asenduslennu kvaliteet.`,
      ],
      bullets: [
        "Kuni 1500 km: 250 €.",
        "1500–3500 km: 400 €.",
        "Üle 3500 km: 600 €.",
      ],
    },
    {
      title: "Milliseid tõendeid alles hoida?",
      paragraphs: [
        "Kõige tugevamad juhtumid on hästi dokumenteeritud. Hoidke alles broneeringu kinnitus, PNR-number, pardakaart, lennufirma SMS-id või e-kirjad, ekraanipildid äpist ja lennujaama tabloost. Kui ootamise ajal tekkisid lisakulud, hoidke alles ka kviitungid.",
        "Ühe dokumendi puudumine ei ole katastroof. Mida täpsemalt saab aga taastada marsruudi, kellaajad ja lennufirma nimetatud põhjuse, seda lihtsam on kontrollida, kas vedaja vastutab ja kas summa on 250, 400 või 600 €.",
      ],
      bullets: [
        "PNR- või broneeringunumber.",
        "Lennunumber ja kuupäev.",
        "Tegeliku saabumisaja tõend.",
        "Lennufirma teated hilinemise, tühistamise või ümbersuunamise kohta.",
      ],
    },
    {
      title: "Mida teha samm-sammult?",
      paragraphs: [
        "Kõigepealt pange faktid ritta: marsruut, kuupäev, tegutsev vedaja, plaanitud ja tegelik saabumisaeg, häire põhjus ja dokumendid. Seejärel kontrollige, kas juhtum kuulub EÜ 261 või UK261 alla. Kolmas samm on selge nõue konkreetse summa ja tõenditega või kontroll ClaimWingeris, kui te ei soovi ise lennufirmaga kirjavahetust pidada.",
        "Kui lennufirma ei vasta, annab ebamäärase äraütlemise või viitab üldsõnalistele erakorralistele asjaoludele, ei tasu keeldumist pidada lõplikuks ilma kontrollita. Eesti reisijal on oluline eristada lennufirma sisemist vastust tegelikust õiguslikust vastutusest.",
      ],
      bullets: [
        "Koostage lühike juhtumi kronoloogia.",
        "Kontrollige EÜ 261, UK261 või muud kohalduvat süsteemi.",
        "Ärge võtke vautšerit vastu, kui soovite raha ja seadus annab õiguse seda nõuda.",
        "Keeldumise korral nõudke konkreetset põhjust, mitte üldsõnalist fraasi.",
      ],
    },
  ];

  if (article.nonEuCarrier) {
    sections.splice(1, 0, buildNonEuSection(article));
  }

  if (article.uk261) {
    sections.splice(article.nonEuCarrier ? 2 : 1, 0, {
      title: "UK261 eestlastele pärast Brexitit: mida teada?",
      paragraphs: [
        "Pärast Brexitit ei ole Ühendkuningriigist väljuvatel lendudel klassikaline EÜ 261 süsteem üldjuhul enam peamine. Selle asemel kohaldub UK261. Praktiline loogika on sarnane: vahemaa, hilinemine, tühistamine, pardalemineku keelamine ja lennufirma vastutus, kuid summad on naelades: 220, 350 või 520 naela.",
        "Eesti kogukonnale Ühendkuningriigis on see oluline lendudel London Heathrow', Stanstedi, Lutoni, Gatwicki, Manchesteri, Birminghami või Edinburghi lennujaamast Tallinnasse. Lend Eestist Ühendkuningriiki on üldjuhul EÜ 261 juhtum, kuid tagasilend Ühendkuningriigist Eestisse üldjuhul UK261 juhtum; näiteks Tallinn–Londoni vahemaa (u 1830 km) juures tähendab see Londonist väljudes üldjuhul 350 naela.",
      ],
    });
  }

  const manualIndex =
    1 + (article.nonEuCarrier ? 1 : 0) + (article.uk261 ? 1 : 0);
  sections.splice(manualIndex, 0, buildManualSection(article));

  if (article.localAuthority) {
    sections.push({
      title: "Millal kaasata TTJA või UK CAA?",
      paragraphs: [
        "Eestis on lennureisijate õiguste riiklik järelevalveasutus Tarbijakaitse ja Tehnilise Järelevalve Amet (TTJA). Sinna tasub pöörduda siis, kui olete nõude juba tegutsevale vedajale esitanud ning saanud põhjendamata äraütlemise või tõendatava vaikimise, näiteks TLL-ist väljunud lennu asjus.",
        "Kui lend väljus Ühendkuningriigist, võib pärast Brexitit olla asjakohane UK CAA ja UK261 süsteem. Enne eskaleerimist tehke jurisdiktsioon täpselt kindlaks, sest vale adressaat võib menetlust aeglustada.",
      ],
    });
  }

  if (article.limitation) {
    sections.push({
      title: "Umbes 3-aastane tähtaeg Eestis",
      paragraphs: [
        "Eestis esitatavate lennuhüvitise nõuete puhul tuleb praktikas arvestada üldjuhul umbes 3-aastase tähtajaga; täpne tähtaeg sõltub asjaoludest ja sellest, millise riigi õiguse alusel nõuet menetletakse. See ei tähenda, et vanem lend on alati lootusetu, kuid mida lähemal on tähtaja lõpp, seda olulisem on dokumendid kiiresti kokku koguda ja tegutseda.",
        "Aeg nõrgestab tõendeid: e-kirjad kaovad, reisijad kaotavad pardakaardid ning lennufirmal võib olla keerulisem operatiivandmeid taastada. Seetõttu ei tasu ka formaalselt veel kehtivat nõuet edasi lükata.",
      ],
    });
  }

  if (article.technical) {
    sections.push({
      title: "Tehniline rike ei ole automaatne äraütlemine",
      paragraphs: [
        "Lennufirmad viitavad tehnilisele rikkele sageli kui erakorralisele asjaolule. Tavaline tehniline probleem, mis on seotud lennuki hoolduse või käitamisega, jääb aga sageli lennufirma vastutusalasse.",
        "Oluline on nõuda täpset põhjust, mitte leppida üldsõnalise fraasiga. Kui äraütlemises puudub konkreetne teave välise, ettenägematu ja kontrollimatu sündmuse kohta, tasub juhtumit põhjalikumalt kontrollida.",
      ],
    });
  }

  if (article.ota) {
    sections.push({
      title: "Kas OTA vahendaja muudab teie õigusi?",
      paragraphs: [
        "Pileti ostmine Booking.com-i, eSky või muu kanali kaudu ei võta üldjuhul ära EÜ 261 hüvitise õigusi. Nõue hilinemise, tühistamise või pardalemineku keelamise eest esitatakse üldjuhul tegutseva vedaja vastu.",
        "Vahendaja võib olla oluline tagasimakse, pileti muutmise või suhtluse küsimustes, kuid kindlasummalise hüvitise loogika jääb üldjuhul seotuks lennufirmaga, kes lennu tegi või pidi tegema.",
      ],
    });
  }

  if (article.business) {
    sections.push({
      title: "Töölähetus: kes saab kindlasummalise hüvitise?",
      paragraphs: [
        "Kui pileti maksis tööandja, ei tähenda see automaatselt, et kindlasummaline EÜ 261 hüvitis kuulub ettevõttele. See on üldjuhul mõeldud reisijale, kes ebamugavust koges: hilinemist, ootamist, mahajäänud ümberistumist või pardalemineku keelamist.",
        "Tööandjal võivad olla sisereeglid kulude hüvitamiseks, kuid nõue lennufirma vastu kindlasummalise hüvitise osas on üldjuhul seotud konkreetse füüsilise reisijaga.",
      ],
    });
  }

  if (article.miles) {
    sections.push({
      title: "Punktidega ostetud piletid ja airBaltic Club",
      paragraphs: [
        "Kui pilet on ostetud püsikliendipunktidega, näiteks airBaltic Club punktidega, ei kaota reisija üldjuhul EÜ 261 kaitset. Peamine on see, et teil oli kinnitatud broneering ja õigus selle lennuga reisida.",
        "Hüvitis ei sõltu sellest, kas pilet oli täielikult rahas makstud, osaliselt punktidega tasutud või saadud kampaania raames. Otsustavad on marsruut, häire liik ja lennufirma vastutus.",
      ],
    });
  }

  return sections;
}

function buildFaqs(article: BlogArticleEt): EtArticleFaq[] {
  const subject = getSubject(article);
  const manual = getManualProfile(article);
  const faqs: EtArticleFaq[] = [
    {
      question: `Kas ${subject} puhul võib hüvitis kuuluda maksmisele?`,
      answer:
        "Jah, kui lend kuulub EÜ 261 või UK261 kohaldamisalasse, häire ületab õigusliku künnise ja lennufirmal ei ole põhjendatud erandit. Kõige sagedamini tuleb kontrollida väljumislennujaama, tegutsevat vedajat ja hilinemist lõppsihtkohas.",
    },
    {
      question: "Kui palju saab EÜ 261 alusel?",
      answer:
        "Kindlad summad on 250, 400 või 600 € reisija kohta. Täpne summa sõltub marsruudi vahemaast, mitte pileti hinnast.",
    },
    {
      question: "Millised dokumendid tuleb alles hoida?",
      answer:
        "Kõige rohkem aitavad broneeringunumber, pardakaart, lennunumber, kuupäev, lennufirma teated ja tegeliku saabumisaja tõend. Kui tekkisid lisakulud, hoidke alles kviitungid söögi, hotelli ja transpordi eest.",
    },
    {
      question: "Kas ClaimWinger saab selle juhtumi üle vaadata?",
      answer:
        "Jah, andmed saab esitada ClaimWingeri eestikeelses vormis aadressil claimwinger.com/et. Mudel on no-win-no-fee, seega ettemaksu ei küsita.",
    },
  ];

  faqs.splice(1, 0, {
    question: "Mis otsustab just selle juhtumi puhul kõige sagedamini tulemuse?",
    answer:
      `${manual.check} Praktiliselt kõige olulisem tõend: ${manual.evidence}`,
  });

  if (article.nonEuCarrier) {
    faqs[0] = {
      question: "Kas EÜ 261 kehtib väljaspool ELi asuvale lennufirmale?",
      answer:
        "Jah, kui lend väljub ELi lennujaamast, näiteks Tallinnast. Kuid tagasilend Istanbulist, Dubaist või muust kolmandast riigist väljaspool ELi asuva vedajaga ei kuulu sageli EÜ 261 alla.",
    };
  }

  if (article.uk261) {
    faqs[0] = {
      question: "Kas Ühendkuningriigist kohaldub EÜ 261 või UK261?",
      answer:
        "Pärast Brexitit kohaldub Ühendkuningriigist väljuvatele lendudele üldjuhul UK261 summadega 220, 350 või 520 naela. Lend Eestist Ühendkuningriiki hinnatakse üldjuhul EÜ 261 järgi, sest see väljub ELi lennujaamast.",
    };
  }

  if (article.voucher) {
    faqs.push({
      question: "Kui võtan vautšeri vastu, kas kaotan õiguse rahale?",
      answer:
        "See sõltub vautšeri tingimustest. Enne nõustumist kontrollige, kas loobute rahalisest tagasimaksest või kindlasummalisest hüvitisest, mis teile õigusaktide järgi kuuluks.",
    });
  }

  if (article.localAuthority) {
    faqs.push({
      question: "Kuhu Eestis pöörduda, kui lennufirma ei vasta?",
      answer:
        "Esitage kõigepealt kirjalik nõue tegutsevale vedajale. Kui vastust ei tule või see on põhjendamata, saab pöörduda Tarbijakaitse ja Tehnilise Järelevalve Ameti (TTJA) poole.",
    });
  }

  if (article.limitation) {
    faqs.push({
      question: "Kas umbes 3 aasta järel on lendu veel mõtet kontrollida?",
      answer:
        "Kontrollida tasub, kuid viivitamine on riskantne. Eestis on umbes 3-aastane tähtaeg oluline orientiir, seega mida kiiremini dokumendid kokku kogute ja nõude esitate, seda parem.",
    });
  }

  return faqs.slice(0, 5);
}

function buildContextualLinks(article: BlogArticleEt): EtContextualLink[] {
  const destination = getDestination(article.ctaPath);
  const primaryHref = buildClaimWingerEtLink(destination, {
    medium: "article_context_link",
    campaign: article.slug,
    content: "primary_claim_check",
  });
  const generalHref = buildClaimWingerEtLink("home", {
    medium: "article_context_link",
    campaign: article.slug,
    content: "general_claim_check",
  });
  const alternateHref = buildClaimWingerEtLink(
    article.ctaPath === "/cancelled-flight" ? "delayed" : "cancelled",
    {
      medium: "article_context_link",
      campaign: article.slug,
      content: "alternate_disruption",
    },
  );

  return [
    {
      label: article.ctaPath === "/cancelled-flight" ? "Kontrollige tühistatud lendu" : "Kontrollige hilinenud lendu",
      href: primaryHref,
      placement: `et_article_${article.slug}_primary_context`,
      description:
        "Sobib, kui teil on juba olemas lennunumber, kuupäev ja probleemi lühikirjeldus.",
    },
    {
      label: "Üldine ClaimWingeri kontroll",
      href: generalHref,
      placement: `et_article_${article.slug}_general_context`,
      description:
        "Kasulik, kui te ei ole veel kindel, kas tegemist on hilinemise, tühistamise, overbookinguga või mahajäänud ümberistumisega.",
    },
    {
      label: article.ctaPath === "/cancelled-flight" ? "Kui juhtum oli hilinemine" : "Kui juhtum oli tühistamine",
      href: alternateHref,
      placement: `et_article_${article.slug}_alternate_context`,
      description:
        "Sobib segaolukordadeks, kus graafik muutus, pakuti teist lendu või hilinemine muutus tühistamiseks.",
    },
  ];
}

export function buildEtArticleContent(article: BlogArticleEt): EtArticleContent {
  const ctaDestination = getDestination(article.ctaPath);

  return {
    title: article.title,
    seoTitle: `${article.title} | EÜ 261 Eesti`,
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
