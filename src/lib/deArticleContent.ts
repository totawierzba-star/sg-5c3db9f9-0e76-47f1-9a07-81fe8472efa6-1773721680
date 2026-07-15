import type {
  BlogArticleDe,
  BlogArticleDeCtaPath,
} from "@/lib/blogArticlesDe";
import {
  buildClaimWingerDeLink,
  type ClaimWingerDeDestination,
} from "@/lib/claimwingerLinksDe";

export type DeArticleSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
  table?: "nonEu";
};

export type DeArticleFaq = {
  question: string;
  answer: string;
};

export type DeContextualLink = {
  label: string;
  href: string;
  placement: string;
  description: string;
};

export type DeArticleContent = {
  title: string;
  seoTitle: string;
  description: string;
  intro: string[];
  quickAnswer: string[];
  keyPoints: string[];
  sections: DeArticleSection[];
  faqs: DeArticleFaq[];
  ctaDestination: ClaimWingerDeDestination;
  ctaPath: BlogArticleDeCtaPath;
  ctaAnchor: string;
  contextualLinks: DeContextualLink[];
};

const delayedAnchor = "ClaimWinger-Formular auf Deutsch für verspätete Flüge";
const cancelledAnchor = "ClaimWinger-Formular auf Deutsch für annullierte Flüge";

type DeManualProfile = {
  heading: string;
  scenario: string;
  check: string;
  evidence: string;
  mistake: string;
};

const manualProfileOverrides: Partial<Record<string, DeManualProfile>> = {
  "lot-verspaetung-entschaedigung": {
    heading: "Bei LOT entscheidet das Drehkreuz Warschau",
    scenario:
      "Ein LOT-Flug ab Frankfurt, München oder Berlin ist selten ein isoliertes Teilstück, sondern meist eine Verbindung über das Drehkreuz Warschau (WAW) weiter nach Mittel- und Osteuropa oder Asien; eine Verspätung auf dem Zubringer kann die gesamte Reise brechen, und gemessen wird die Verspätung am Endziel.",
    check:
      "Prüfen Sie, ob die Verspätung den Anschlussflug derselben Buchung in Warschau vereitelt hat; so kann aus einer kurzen Abflugverspätung in Deutschland ein starker Anspruch am Endziel werden — bei Frankfurt–Warschau–Seoul zählt die Ankunft in Seoul, und die Strecke liegt deutlich über 3500 km, also 600 €.",
    evidence:
      "Bewahren Sie alle Flugabschnitte in einem PNR auf, nicht nur den verspäteten LOT-Zubringer, dazu Bordkarten und den Nachweis der tatsächlichen Ankunftszeit am Endziel.",
    mistake:
      "Beschränken Sie sich nicht auf die Minuten der Abflugverspätung; die EU-Verordnung 261/2004 stellt in der Regel auf die Ankunftsverspätung am Endziel ab.",
  },
  "lot-flug-annulliert-rechte": {
    heading: "Bei der Annullierung zählt der Zeitpunkt der Mitteilung",
    scenario:
      "Bei einem annullierten LOT-Flug ist nicht nur die Tatsache entscheidend, dass die Maschine nicht gestartet ist, sondern auch, wann Sie informiert wurden und welchen Ersatzflug LOT angeboten hat.",
    check:
      "Vergleichen Sie die ursprünglichen Abflug- und Ankunftszeiten mit dem Ersatzangebot, besonders in der Nähe der 14-Tage-Grenze vor dem geplanten Abflug; Erstattung des Tickets und pauschale Entschädigung von 250–600 € können zwei getrennte Ansprüche sein.",
    evidence:
      "Bewahren Sie das ursprüngliche Ticket, die Annullierungs-E-Mail, die Zeiten des Ersatzflugs und einen Nachweis darüber auf, wann Sie die Mitteilung tatsächlich erhalten haben.",
    mistake:
      "Verwechseln Sie die Ticketerstattung nicht mit der pauschalen Entschädigung; bei einer Annullierung können Ihnen beide Ansprüche nebeneinander zustehen.",
  },
  "lot-umsteigen-warschau-verspaetung": {
    heading: "Verpasster Anschluss in Warschau: das Endziel zählt",
    scenario:
      "Der typische Fall: Der Zubringer ab Frankfurt, München oder Berlin landet zu spät in Warschau, der LOT-Anschlussflug nach Seoul, Tokio oder New York ist weg — rechtlich zählt dann die Verspätung am Endziel, und die Distanz wird vom Startflughafen bis zum Endziel gemessen; Frankfurt–Warschau–Seoul liegt deutlich über 3500 km und ergibt 600 €.",
    check:
      "Stellen Sie fest, ob beide Abschnitte in einer Buchung lagen und wie spät Sie am Endziel angekommen sind — nicht nur in Warschau.",
    evidence:
      "Bewahren Sie Bordkarten, die ursprünglich geplante Umsteigezeit und den neuen Flug auf, auf den LOT Sie umgebucht hat.",
    mistake:
      "Teilen Sie eine Buchung nicht in zwei getrennte Beschwerden auf, wenn das eigentliche Problem der verpasste Anschluss in Warschau ist.",
  },
  "flug-frankfurt-warschau-verspaetung-lot": {
    heading: "Frankfurt–Warschau: ca. 900 km, also 250 €",
    scenario:
      "Frankfurt–Warschau ist eine Strecke von rund 900 km und fällt damit in die erste Distanzstufe: Bei einer Ankunftsverspätung von mindestens 3 Stunden beträgt die Entschädigung 250 € pro Person — in beide Richtungen, denn sowohl Deutschland als auch Polen sind EU-Mitgliedstaaten und LOT ist eine EU-Fluggesellschaft.",
    check:
      "Prüfen Sie zuerst die tatsächliche Ankunftszeit in Warschau bzw. Frankfurt und dann, ob der Flug Teil einer längeren Buchung war; mit Anschluss ab Warschau kann derselbe Vorfall 400 € oder 600 € wert sein, weil das Endziel zählt.",
    evidence:
      "Buchungsbestätigung, Bordkarte und ein Screenshot der tatsächlichen Ankunftszeit aus der App oder von der Anzeigetafel genügen meist als Grundlage.",
    mistake:
      "Geben Sie den Anspruch nicht auf, weil das Ticket günstig war; die 250 € richten sich nach der Distanz, nicht nach dem Ticketpreis.",
  },
  "flug-muenchen-warschau-verspaetung-lot": {
    heading: "München–Warschau: ca. 800 km, also 250 €",
    scenario:
      "München–Warschau liegt mit rund 800 km klar unter der 1500-km-Grenze; bei einer Ankunftsverspätung von mindestens 3 Stunden stehen Ihnen 250 € pro Person zu — unabhängig davon, ob LOT oder Lufthansa den Flug durchgeführt hat, denn beide sind EU-Fluggesellschaften und beide Flughäfen liegen in der EU.",
    check:
      "Prüfen Sie die ausführende Fluggesellschaft auf der Bordkarte und die tatsächliche Ankunftszeit; war Warschau nur Umsteigepunkt einer Buchung nach Asien oder Nordamerika, wird die Distanz bis zum Endziel gerechnet und die Stufe kann auf 400 € oder 600 € steigen.",
    evidence:
      "Bewahren Sie Buchungsbestätigung, Bordkarte und die Mitteilungen der Fluggesellschaft zur Verspätung auf.",
    mistake:
      "Beurteilen Sie den Fall nicht nach der Abflugverspätung in München; entscheidend ist die Ankunft am Endziel.",
  },
  "flug-berlin-warschau-verspaetung-lot": {
    heading: "Berlin–Warschau: ca. 520 km — kurze Strecke, voller Anspruch",
    scenario:
      "Berlin–Warschau ist mit rund 520 km eine der kürzesten LOT-Strecken ab Deutschland und liegt in der 250 €-Stufe; die kurze Distanz schwächt den Anspruch nicht, denn die EU-Verordnung 261/2004 kennt keine Mindestticketpreise und keine Ausnahme für Kurzstrecken.",
    check:
      "Prüfen Sie die Ankunftsverspätung in Warschau bzw. Berlin (mindestens 3 Stunden für die 250 €) und denken Sie an die Betreuungsleistungen — Verpflegung und Getränke stehen Ihnen auf dieser Strecke bereits ab 2 Stunden Wartezeit zu.",
    evidence:
      "Screenshots der Anzeigetafel oder der App mit der tatsächlichen Ankunftszeit sowie Quittungen für Verpflegung sind hier die wertvollsten Belege.",
    mistake:
      "Verwechseln Sie das Recht auf Verpflegung oder Hotel nicht mit der pauschalen Entschädigung von 250 €; das sind getrennte Ansprüche, die parallel gelten können.",
  },
  "lot-langstrecke-verspaetung-600-euro": {
    heading: "600 € auf der Langstrecke: über 3500 km, gemessen am Endziel",
    scenario:
      "Die 600 €-Stufe gilt für Strecken über 3500 km — etwa Frankfurt–New York (ca. 6200 km) oder LOT-Verbindungen über das Drehkreuz Warschau wie Frankfurt–Warschau–Seoul, bei denen die Distanz vom Startflughafen bis zum Endziel gerechnet wird.",
    check:
      "Prüfen Sie die Gesamtdistanz vom Abflugort bis zum Endziel und die dortige Ankunftsverspätung; beachten Sie, dass die Fluggesellschaft die 600 € auf 300 € kürzen kann, wenn sie eine anderweitige Beförderung anbietet und Sie das Endziel mit weniger als 4 Stunden Verspätung erreichen.",
    evidence:
      "Bewahren Sie die vollständige Buchung mit allen Abschnitten auf, denn bei Umsteigeverbindungen über Warschau entscheidet das Endziel über die Distanzstufe.",
    mistake:
      "Vergleichen Sie die Entschädigung nicht mit dem Ticketpreis; auch ein günstiges Ticket kann 600 € ergeben, wenn Strecke und Verspätung es tragen.",
  },
  "lot-entschaedigung-beantragen-anleitung": {
    heading: "Schritt für Schritt: erst Fakten, dann Forderung, dann Eskalation",
    scenario:
      "Die stärksten LOT-Fälle sind sauber vorbereitet: Flugnummer, Datum, Strecke, geplante und tatsächliche Ankunftszeit, der von LOT genannte Grund und eine konkrete Forderung mit Betrag — 250, 400 oder 600 €.",
    check:
      "Richten Sie die schriftliche Forderung an die ausführende Fluggesellschaft und notieren Sie das Datum; erst wenn LOT schweigt oder pauschal ablehnt, folgt die Eskalation zur Schlichtungsstelle söp, zum Luftfahrt-Bundesamt (LBA) oder die Prüfung über ClaimWinger.",
    evidence:
      "Wichtig sind datierte E-Mails, die Begründung der Ablehnung, das Buchungs-PDF und eine kurze Chronologie der Ereignisse ohne Emotionen.",
    mistake:
      "Schicken Sie der Behörde nicht nur einen App-Screenshot; ohne vollständige Strecke und geforderten Betrag wird der Fall schwächer.",
  },
  "polnische-fluglinien-entschaedigung": {
    heading: "Polnische Fluglinien sind EU-Fluggesellschaften — Schutz in beide Richtungen",
    scenario:
      "LOT Polish Airlines und andere polnische Anbieter wie Enter Air sind EU-Fluggesellschaften; damit gilt die EU-Verordnung 261/2004 sowohl für Flüge ab Deutschland als auch für Flüge ab Warschau, Krakau oder Danzig nach Deutschland — unabhängig vom Ticketpreis.",
    check:
      "Prüfen Sie die ausführende Fluggesellschaft auf der Bordkarte, nicht den Ticketverkäufer; die Verantwortung folgt dem ausführenden Luftfahrtunternehmen, auch bei Codeshare-Flügen mit Lufthansa-Flugnummer.",
    evidence:
      "Buchungsbestätigung und Bordkarte reichen als Grundlage; der Ticketpreis muss nicht nachgewiesen werden.",
    mistake:
      "Nehmen Sie keinen Gutschein an, wenn das Gesetz einen Anspruch auf 250–600 € in Geld gibt; ein Gutschein ersetzt die Entschädigung nicht automatisch.",
  },
  "lot-aussergewoehnliche-umstaende": {
    heading: "Außergewöhnliche Umstände müssen bewiesen werden — nicht nur behauptet",
    scenario:
      "Die Antwort von LOT kann sich auf die Formel „außergewöhnliche Umstände“ beschränken, obwohl der tatsächliche Grund ein gewöhnlicher technischer Defekt oder ein Streik des eigenen Personals war — beides gilt nach der Rechtsprechung des Europäischen Gerichtshofs in der Regel nicht als Ausnahme.",
    check:
      "Unterscheiden Sie externe Ereignisse — Extremwetter, Beschränkungen der Flugsicherung, Vogelschlag — vom eigenen Betrieb der Fluggesellschaft wie Wartung, Crew-Mangel oder Streik der eigenen Mitarbeiter.",
    evidence:
      "Eine schriftliche Ablehnung mit Begründung und die Flugdaten desselben Tages — sind andere Flüge auf derselben Strecke geflogen? — helfen, die Floskel zu überprüfen.",
    mistake:
      "Akzeptieren Sie den pauschalen Verweis auf außergewöhnliche Umstände nicht als endgültige Antwort; verlangen Sie das konkrete Ereignis und Belege dafür.",
  },
  "flug-verspaetet-entschaedigung-hoehe": {
    heading: "Die Höhe bestimmt die Distanz, nicht der Ticketpreis",
    scenario:
      "Ein typischer Fall ab Deutschland bewegt sich in drei Stufen: Berlin–Warschau (ca. 520 km), München–Warschau (ca. 800 km) und Frankfurt–Warschau (ca. 900 km) liegen in der 250 €-Stufe, Berlin–Antalya (ca. 2500 km) ergibt 400 €, und erst Strecken über 3500 km wie Frankfurt–New York (ca. 6200 km) erreichen 600 €.",
    check:
      "Prüfen Sie die Distanz vom Abflugort bis zum Endziel und erst danach die Stunden der Verspätung; die Höhe hängt nicht davon ab, was das Ticket gekostet hat.",
    evidence:
      "Bewahren Sie die Buchung mit der gesamten Strecke auf, denn bei Umsteigeverbindungen — etwa über das LOT-Drehkreuz Warschau — wird die Distanz in der Regel bis zum Endziel gerechnet.",
    mistake:
      "Vergleichen Sie die Entschädigung nicht mit dem Ticketpreis: Auch ein 20-€-Billigticket kann 250–600 € ergeben, wenn Strecke und Verspätung es tragen.",
  },
  "verjaehrung-flugentschaedigung-lot": {
    heading: "In Deutschland gilt in der Regel: 3 Jahre, gerechnet zum Jahresende",
    scenario:
      "Ein älterer LOT-Flug ist im E-Mail-Postfach oft noch auffindbar, aber mit den Jahren werden Beweise brüchig und der Streit schwieriger; für in Deutschland verfolgte Ansprüche ist in der Regel mit einer Verjährungsfrist von 3 Jahren zu rechnen, die üblicherweise mit dem Ende des Jahres beginnt, in dem der Flug stattfand — die genaue Frist hängt vom Einzelfall und vom anwendbaren Recht ab.",
    check:
      "Vergleichen Sie das Flugdatum mit dem heutigen Datum, nicht mit dem Zeitpunkt, zu dem Sie der Fluggesellschaft zum ersten Mal geschrieben haben.",
    evidence:
      "Wenn der Fall sich dem Fristende nähert, sichern Sie PDF-Ticket, Zahlungsbeleg, E-Mails und App-Screenshots außerhalb des Postfachs.",
    mistake:
      "Warten Sie nicht darauf, dass die Fluggesellschaft monatelang „prüft“; die Verjährung kann während des Schriftwechsels weiterlaufen.",
  },
};

function getDestination(path: BlogArticleDeCtaPath): ClaimWingerDeDestination {
  return path === "/cancelled-flight" ? "cancelled" : "delayed";
}

function getGuideDestination(article: BlogArticleDe): ClaimWingerDeDestination | null {
  if (article.slug === "polnische-fluglinien-entschaedigung") {
    return "polishAirlinesGuide";
  }

  if (/(^|-)lot(-|$)/.test(article.slug) || article.airlineName === "LOT Polish Airlines") {
    return "lotGuide";
  }

  return null;
}

function getManualProfile(article: BlogArticleDe): DeManualProfile {
  const override = manualProfileOverrides[article.slug];

  if (override) {
    return override;
  }

  if (article.voucher) {
    return {
      heading: "Gutschein-Fokus: Zustimmung ist keine Formalität",
      scenario:
        "Ein Gutscheinangebot sieht oft wie eine schnelle Lösung aus, kann aber Ihre späteren Ansprüche auf Erstattung oder Entschädigung in Geld beeinflussen.",
      check:
        "Prüfen Sie vor der Zustimmung, ob der Gutschein nur die Ticketerstattung, die pauschale Entschädigung oder beide Ansprüche zugleich ersetzen soll.",
      evidence:
        "Bewahren Sie die Gutscheinbedingungen, die Gültigkeitsdauer, den E-Mail-Text und jede Auswahloption auf, die die Fluggesellschaft Ihnen angezeigt hat.",
      mistake:
        "Klicken Sie nicht auf „Akzeptieren“, nur weil es in der App der schnellste Weg ist; vergleichen Sie das Angebot zuerst mit dem Anspruch in Geld.",
    };
  }

  if (article.cancelledCase) {
    return {
      heading: "Annullierungs-Fokus: der Zeitpunkt der Mitteilung",
      scenario:
        "Bei einem annullierten Flug ist nicht nur die Tatsache wichtig, dass die Maschine nicht gestartet ist, sondern auch, wann Sie die Mitteilung erhalten haben und welche Alternative angeboten wurde.",
      check:
        "Vergleichen Sie die ursprünglichen Abflug- und Ankunftszeiten mit dem neuen Angebot, besonders in der Nähe der 14-Tage-Grenze.",
      evidence:
        "Bewahren Sie das ursprüngliche Ticket, die Annullierungs-E-Mail, die Zeiten des Ersatzflugs und einen Nachweis darüber auf, wann Sie die Mitteilung tatsächlich erhalten haben.",
      mistake:
        "Verwechseln Sie die Ticketerstattung nicht mit der pauschalen Entschädigung; bei einer Annullierung können das zwei getrennte Ansprüche sein.",
    };
  }

  if (article.technical) {
    return {
      heading: "Technik-Fokus: eine Floskel ist kein Beweis",
      scenario:
        "Ein technisches Problem kann völlig real sein, aber rechtlich genügen die Worte „technical reasons“ allein nicht, um die Entschädigung zu verweigern.",
      check:
        "Fragen Sie, ob der Defekt ein gewöhnliches Betriebsproblem, Wartung, eine Kollision mit einem externen Objekt oder ein Sicherheitsereignis war.",
      evidence:
        "Hilfreich sind die schriftliche Ablehnung der Fluggesellschaft, Gate-Durchsagen und der Flugstatus-Verlauf desselben Tages.",
      mistake:
        "Akzeptieren Sie einen technischen Defekt nicht automatisch als außergewöhnlichen Umstand ohne konkrete Erklärung.",
    };
  }

  if (article.localAuthority) {
    return {
      heading: "Eskalations-Fokus: LBA, söp und präzise Fakten",
      scenario:
        "Wenn die Fluggesellschaft schweigt oder mit einer Vorlage antwortet, sollten Sie den Fall so aufbereiten, dass das Luftfahrt-Bundesamt (LBA) oder die Schlichtungsstelle für den öffentlichen Personenverkehr (söp) die Chronologie sofort erkennt.",
      check:
        "Notieren Sie getrennt das Datum Ihrer Forderung, die Antwort der Fluggesellschaft, die Flugdaten und den geforderten Betrag.",
      evidence:
        "Wichtig sind datierte E-Mails, die Begründung der Ablehnung, das Buchungs-PDF und eine kurze Ereignisliste ohne Emotionen.",
      mistake:
        "Schicken Sie der Stelle nicht nur einen App-Screenshot; ohne vollständige Strecke und geforderten Betrag wird der Fall schwächer.",
    };
  }

  if (article.limitation) {
    return {
      heading: "Verjährungs-Fokus: das Datum ist der wichtigste Fakt",
      scenario:
        "Bei älteren Flügen beginnt die rechtliche Analyse nicht bei der Fluggesellschaft, sondern beim Kalender: Wie lange liegt die Störung zurück und sind die Unterlagen noch auffindbar?",
      check:
        "Vergleichen Sie das Flugdatum mit der in Deutschland praktisch maßgeblichen Frist von in der Regel 3 Jahren (gerechnet zum Jahresende) und bereiten Sie den Fall vor dem letzten Moment vor.",
      evidence:
        "Zahlungsbeleg, Buchungs-E-Mail und alte Kalendereinträge helfen, den Fall zu rekonstruieren, selbst wenn die Bordkarte verloren ist.",
      mistake:
        "Warten Sie nicht darauf, dass die Fluggesellschaft die Forderung monatelang „bearbeitet“, wenn sich das Fristende nähert.",
    };
  }

  if (article.miles) {
    return {
      heading: "Meilen-Fokus: Prämientickets sind echte Tickets",
      scenario:
        "Ein mit Miles & More-Meilen oder anderen Vielfliegerpunkten gebuchtes Ticket weckt oft Zweifel, ob es ein „richtiges“ Ticket im Sinne der EU-Verordnung 261/2004 ist.",
      check:
        "Prüfen Sie, ob die Buchung bestätigt war und ob Sie berechtigt waren, mit dem konkreten Flug zu reisen.",
      evidence:
        "Bewahren Sie die Einlösebestätigung der Meilen, die Zahlung der Steuern und Gebühren sowie die Buchungsnummer auf.",
      mistake:
        "Nehmen Sie nicht an, dass es ohne vollen Preis keine Entschädigung gibt; das Regelwerk schaut auf die Rechte des Reisenden, nicht nur auf die Zahlungsart.",
    };
  }

  if (article.routeName) {
    const route = article.routeName;
    const nonEuNote = article.nonEuCarrier
      ? "Auf dieser Strecke müssen Sie die Fluggesellschaft in beiden Richtungen besonders sorgfältig vergleichen, denn eine Fluggesellschaft mit Sitz außerhalb der EU kann nur beim Abflug ab Deutschland geschützt sein."
      : article.uk261
        ? "Auf dieser Strecke kann die Richtung den Fall von der EU-Verordnung 261/2004 unter UK261 verschieben; den Abschnitt ab London oder einem anderen britischen Flughafen dürfen Sie daher nicht aus Gewohnheit beurteilen."
        : "Auf dieser Strecke sind in der Regel die Ankunftszeit am Endziel und die Frage am wichtigsten, ob alle Abschnitte in einer Buchung lagen.";

    return {
      heading: `Strecken-Fokus: ${route}`,
      scenario:
        `Für Reisende auf der Strecke ${route} ist die praktische Frage nicht nur, wie stark der Flug verspätet war, sondern in welcher Richtung das Problem auftrat, welche Fluggesellschaft geflogen ist und ob ein Umstieg dazwischen lag.`,
      check: nonEuNote,
      evidence:
        "Bewahren Sie die geplante und die tatsächliche Ankunftszeit auf, denn genau diese Differenz entscheidet am häufigsten, ob der Anspruch stark ist.",
      mistake:
        "Entscheiden Sie nicht allein nach der Abflugverspätung; in Streckenartikeln ist fast immer die Verspätung am Endziel maßgeblich.",
    };
  }

  if (article.airportCode) {
    return {
      heading: `Flughafen-Fokus: ${article.airportName || article.airportCode}`,
      scenario:
        "Am Flughafen sieht der Reisende oft nur das lokale Warten, rechtlich sind aber die gesamte Strecke und die Verantwortung der Fluggesellschaft zu bewerten.",
      check:
        "Halten Sie fest, ob das Problem in der Flughafeninfrastruktur, im Betrieb der Fluggesellschaft, in der Sicherheitskontrolle, im Wetter oder in der Flugsicherung entstand.",
      evidence:
        "Fotos der Anzeigetafel, Gate-Mitteilungen und Quittungen für Betreuungskosten sind wertvoll, wenn Betreuungsleistungen später von der Entschädigung zu trennen sind.",
      mistake:
        "Verwechseln Sie das Recht auf Verpflegung oder Hotel nicht mit der pauschalen Entschädigung von 250/400/600 €; das sind getrennte Ansprüche.",
    };
  }

  if (article.airlineName) {
    return {
      heading: `Fluggesellschafts-Fokus: ${article.airlineName}`,
      scenario:
        `Bei ${article.airlineName} sollten Sie nicht nur die Marke auf dem Ticket betrachten, sondern auch das tatsächlich ausführende Luftfahrtunternehmen und die Flugrichtung.`,
      check:
        article.nonEuCarrier
          ? "Bei einer Fluggesellschaft mit Sitz außerhalb der EU kann der Abflug ab Deutschland geschützt sein, aber der Rückflug aus einem Drittstaat ist oft anders zu beurteilen."
          : "Eine europäische Fluggesellschaft hat in der Regel den breiteren Schutz der EU-Verordnung 261/2004, aber der Ablehnungsgrund ist dennoch zu prüfen.",
      evidence:
        "Bewahren Sie die Ablehnung oder die Mitteilung der Fluggesellschaft zum Grund auf, denn genau sie bestimmt oft den nächsten Schritt.",
      mistake:
        "Vertrauen Sie nicht der kurzen Floskel des Kundendienstes; verlangen Sie den konkreten tatsächlichen Grund und vergleichen Sie ihn mit den Ausnahmen der EU-Verordnung 261/2004.",
    };
  }

  if (article.uk261) {
    return {
      heading: "UK-Fokus: UK261 nach dem Brexit",
      scenario:
        "Der häufigste Fehler von Reisenden aus Deutschland ist, für einen Flug ab einem britischen Flughafen die Antwort in der EU-Verordnung 261/2004 zu suchen.",
      check:
        "Startet der Flug in London, Manchester, Birmingham oder Edinburgh, prüfen Sie UK261; startet er in Frankfurt, München oder Berlin, prüfen Sie die EU-Verordnung 261/2004.",
      evidence:
        "Bewahren Sie die Abflugdaten des britischen Flughafens und die Mitteilung der Fluggesellschaft auf, denn die Zuständigkeit ist der erste Streitpunkt.",
      mistake:
        "Verwechseln Sie ähnliche Entschädigungsbeträge nicht mit ein und demselben Rechtssystem.",
    };
  }

  if (article.category === "situations") {
    return {
      heading: "Situations-Fokus: nicht nur die Minuten der Verspätung",
      scenario:
        "In Sonderfällen ist der Anspruch oft nicht deshalb stark, weil der Flug einfach verspätet war, sondern weil die Fluggesellschaft eine konkrete Pflicht nicht erfüllt hat.",
      check:
        "Notieren Sie getrennt das Ereignis, das Angebot der Fluggesellschaft, Ihre Entscheidung und die Zusatzkosten.",
      evidence:
        "In diesen Fällen sind Quittungen, der Schriftwechsel und Belege dafür besonders wichtig, was die Fluggesellschaft Ihnen vor Ort angeboten hat.",
      mistake:
        "Nennen Sie nicht alles einen „Delay Claim“; Überbuchung, Herabstufung, Betreuung und Insolvenz erfordern unterschiedliche Argumentation.",
    };
  }

  if (article.category === "foundation") {
    return {
      heading: "Grundlagen-Fokus: zuerst die Zuständigkeit",
      scenario:
        "Bei Grundsatzfragen liegt der größte Wert nicht im langen Gesetzeszitat, sondern in der richtigen Reihenfolge: Zuständigkeit, Verspätungsschwelle, Grund, Beweise.",
      check:
        "Beginnen Sie beim Abflughafen und der ausführenden Fluggesellschaft, gehen Sie erst danach zu Stunden und Entschädigungsbetrag über.",
      evidence:
        "In Grundlagenartikeln helfen besonders die Streckenübersicht in einer Buchung und die genaue Mitteilung zum Grund der Störung.",
      mistake:
        "Beginnen Sie nicht mit der Frage „Wie viel wird gezahlt?“, bevor klar ist, ob die EU-Verordnung 261/2004 oder UK261 überhaupt anwendbar ist.",
    };
  }

  if (article.category === "answers") {
    return {
      heading: "Kurzantwort-Fokus: eine konkrete Prüfung",
      scenario:
        "In einem Kurzantwort-Artikel wünscht sich der Leser in der Regel eine klare Schlussfolgerung, daher konzentriert sich der Text auf eine Prüfung, die Sie sofort nach dem Flug vornehmen können.",
      check:
        `Entscheidend ist hier: ${article.focus}. Deckt sich dieser Punkt mit Ihren Unterlagen, lohnt es sich, den Anspruch weiter zu prüfen.`,
      evidence:
        "Es genügen wenige präzise Fakten: Flugnummer, Datum, Strecke, Ankunftszeit und die Erklärung der Fluggesellschaft.",
      mistake:
        "Versuchen Sie nicht, alle Fälle in eine Antwort zu pressen; bei Umstiegen, UK-Richtung oder einer Nicht-EU-Fluggesellschaft ist eine zusätzliche Prüfung nötig.",
    };
  }

  return {
    heading: "Praktischer Fokus für Reisende in Deutschland",
    scenario:
      "Dieses Thema funktioniert am besten, wenn Sie es als konkreten Fall bewerten: Strecke, Fluggesellschaft, Datum, Ankunftsverspätung und Grund.",
    check:
      "Sammeln Sie vor der Forderung die Fakten an einem Ort und entscheiden Sie erst dann, ob es ein Fall der EU-Verordnung 261/2004, von UK261 oder außerhalb des Anwendungsbereichs ist.",
    evidence:
      "Das Minimum sind Buchung, Flugnummer, Datum, Ankunftszeit und die Erklärung der Fluggesellschaft.",
    mistake:
      "Verlassen Sie sich nicht auf die Erinnerung an das, was am Flughafen gesagt wurde; nach einigen Wochen sind schriftliche Beweise viel wertvoller.",
  };
}

function getDisruptionLabel(article: BlogArticleDe) {
  const title = article.title.toLowerCase();

  if (article.ctaPath === "/cancelled-flight" || title.includes("annullier")) {
    return "zur Annullierung";
  }

  if (title.includes("überbuch") || title.includes("nichtbeförder")) {
    return "zur Nichtbeförderung";
  }

  if (title.includes("umsteig") || title.includes("anschluss")) {
    return "zum verpassten Anschlussflug";
  }

  return "zur Verspätung";
}

function getSubject(article: BlogArticleDe) {
  return article.routeName || article.airlineName || article.airportName || article.focus;
}

function getAmountSentence(article: BlogArticleDe) {
  const subject = getSubject(article);

  if (article.routeName) {
    return `Auf der Strecke ${subject} hängt der Betrag von Distanz, Richtung, ausführender Fluggesellschaft und der Verspätung am Endziel ab, nicht vom Ticketpreis.`;
  }

  if (article.airlineName) {
    return `Bei ${subject} ist entscheidend, die ausführende Fluggesellschaft, den Abflughafen, die Richtung und den tatsächlichen Grund der Störung festzustellen.`;
  }

  if (article.airportName) {
    return `Beim Flughafen zählt nicht nur der Ort des Wartens, sondern die gesamte Strecke auf dem Ticket, die Umstiege und die endgültige Ankunftszeit.`;
  }

  return "Die Entschädigung wird nach festen Stufen von 250, 400 oder 600 € bestimmt, abhängig von der Distanz und dem anwendbaren Regelwerk.";
}

function buildIntro(article: BlogArticleDe) {
  const disruption = getDisruptionLabel(article);
  const manual = getManualProfile(article);
  const first =
    `Dieser Ratgeber erklärt das Thema „${article.title}“ aus Sicht von Reisenden in Deutschland: praktisch, rechtlich präzise und ohne unnötigen Fachjargon. Die Kernfrage lautet: ${article.focus}. ${manual.scenario} Nach der EU-Verordnung 261/2004 (Fluggastrechteverordnung) oder UK261 genügt allein die Tatsache, dass der Flug verspätet oder annulliert war, nicht. Zu prüfen ist, von welchem Flughafen der Flug gestartet ist, welche Fluggesellschaft den Flug tatsächlich durchgeführt hat, wie spät Sie am Endziel angekommen sind und ob die Fluggesellschaft Umstände nachweisen kann, die sie tatsächlich nicht beherrschen konnte.`;
  const second =
    `Für Reisende in Deutschland ist das besonders wichtig bei Flügen ab Frankfurt (FRA), München oder Berlin sowie auf Reisen über Warschau (WAW), Wien, Zürich, London oder Istanbul — etwa mit LOT Polish Airlines über das Drehkreuz Warschau, mit Lufthansa, Eurowings oder Ryanair. ${getAmountSentence(article)} ${manual.check} Bewahren Sie Buchungsnummer, Bordkarte, die Mitteilungen der Fluggesellschaft ${disruption}, Screenshots der Anzeigetafel oder der App sowie Quittungen für Verpflegung, Hotel oder Transport auf. Unten finden Sie die Kurzantwort, die Entschädigungstabelle, praktische Schritte und FAQ, aufgebaut nach der Logik der lizenzierten Rechtsberater von ClaimWinger.`;

  if (article.localAuthority) {
    return [
      first,
      `${second} Wenn die Fluggesellschaft nicht antwortet oder pauschal ablehnt, sind in deutschen Fällen das Luftfahrt-Bundesamt (LBA) und die Schlichtungsstelle für den öffentlichen Personenverkehr (söp) der wichtige Kontext. Der erste Schritt ist aber in der Regel eine klare schriftliche Forderung an die ausführende Fluggesellschaft.`,
    ];
  }

  if (article.limitation) {
    return [
      first,
      `${second} Bei älteren Flügen ist zusätzlich die Verjährung zu prüfen. In Deutschland ist in der Praxis in der Regel mit einer Frist von 3 Jahren zu rechnen, die üblicherweise mit dem Ende des Jahres beginnt, in dem der Flug stattfand; die genaue Frist hängt vom Einzelfall ab. Schieben Sie den Anspruch daher nicht auf, auch wenn die Unterlagen noch leicht auffindbar erscheinen.`,
    ];
  }

  if (article.nonEuCarrier) {
    return [
      first,
      `${second} Bei Fluggesellschaften mit Sitz außerhalb der EU ist die Richtung besonders wichtig: Ein Flug ab Frankfurt oder München kann geschützt sein, aber der Rückflug ab Istanbul, Dubai oder einem anderen Drittstaat mit einer Nicht-EU-Fluggesellschaft ist oft kein Fall der EU-Verordnung 261/2004 mehr.`,
    ];
  }

  return [first, second];
}

function buildQuickAnswer(article: BlogArticleDe) {
  const answers = [
    `Kurzantwort: Bei ${getSubject(article)} ist zuerst zu prüfen, ob der Flug in den Anwendungsbereich der EU-Verordnung 261/2004 oder von UK261 fällt.`,
    "Eine finanzielle Entschädigung wegen Verspätung wird in der Regel relevant, wenn Sie das Endziel mindestens 3 Stunden später erreichen und die Ursache im Verantwortungsbereich der Fluggesellschaft liegt.",
    "Mögliche Beträge sind 250, 400 oder 600 € pro Person; sie richten sich nach der Distanz, nicht nach dem Ticketpreis.",
  ];

  if (article.nonEuCarrier) {
    answers.push("Bei einer Fluggesellschaft mit Sitz außerhalb der EU ist die Richtung entscheidend: Der Abflug ab Deutschland kann geschützt sein, der Rückflug aus einem Drittstaat oft nicht.");
  }

  if (article.uk261) {
    answers.push("Flüge ab dem Vereinigten Königreich werden nach dem Brexit in der Regel nach UK261 und nicht nach der klassischen EU-Verordnung 261/2004 beurteilt; die Beträge sind 220, 350 oder 520 £ und die Logik ist sehr ähnlich.");
  }

  if (article.voucher) {
    answers.push("Ein Gutschein ersetzt nicht automatisch den Anspruch auf Geld, wenn das Gesetz eine Erstattung oder Entschädigung in Geld vorsieht.");
  }

  if (article.cancelledCase) {
    answers.push("Bei einer Annullierung ist gesondert zu prüfen, wann Sie informiert wurden und ob der angebotene Ersatzflug rechtlich ausreichend war.");
  }

  return answers.slice(0, 4);
}

function buildKeyPoints(article: BlogArticleDe) {
  const manual = getManualProfile(article);
  const points = [
    `Bewahren Sie Buchung, Bordkarte, Flugnummer, E-Mails der Fluggesellschaft und Nachweise der tatsächlichen Ankunftszeit auf. ${manual.evidence}`,
    "Entscheidend ist das Endziel — besonders wenn die Reise eine einzige Buchung mit Umstieg in Warschau, Frankfurt, München oder einem anderen Drehkreuz war.",
    "Verpflegung, Hotel und Transport sind eigene Betreuungsleistungen, die parallel zur Entschädigung von 250 / 400 / 600 € gelten können.",
    `Der häufigste Fehler bei diesem Thema: ${manual.mistake}`,
    "ClaimWinger kann den Fall im No-win-no-fee-Modell prüfen — das Formular ist auf Deutsch unter claimwinger.com/de verfügbar.",
  ];

  if (article.airlineName) {
    points[1] = `Prüfen Sie in ${article.airlineName}-Fällen die ausführende Fluggesellschaft, nicht nur die Marke auf dem Ticket, den Ticketverkäufer oder die Codeshare-Flugnummer.`;
  }

  if (article.routeName) {
    points[1] = `Auf der Strecke ${article.routeName} sind Richtung, ausführende Fluggesellschaft, Distanz und die Verspätung am Endziel entscheidend.`;
  }

  if (article.limitation) {
    points[2] = "Für in Deutschland verfolgte Entschädigungsansprüche ist in der Praxis in der Regel mit einer Verjährungsfrist von 3 Jahren (gerechnet zum Jahresende) zu rechnen; stellen Sie die Unterlagen daher frühzeitig zusammen.";
  }

  if (article.uk261) {
    points[2] = "Für Flüge ab dem Vereinigten Königreich gilt nach dem Brexit in der Regel UK261; die Beträge sind 220, 350 oder 520 £, aber es ist ein eigenes Rechtssystem.";
  }

  if (article.ota) {
    points[1] = "Der Kauf des Tickets über Booking.com oder eSky oder direkt auf der Website der Fluggesellschaft nimmt Ihnen in der Regel nicht den Anspruch gegen die ausführende Fluggesellschaft.";
  }

  if (article.business) {
    points[1] = "Auf Dienstreisen steht die pauschale Entschädigung in der Regel dem Reisenden zu, auch wenn der Arbeitgeber das Ticket bezahlt hat.";
  }

  if (article.miles) {
    points[1] = "Ein mit Miles & More-Meilen oder anderen Vielfliegerpunkten gebuchtes Ticket verliert in der Regel nicht den Schutz der EU-Verordnung 261/2004.";
  }

  return points;
}

function buildManualSection(article: BlogArticleDe): DeArticleSection {
  const manual = getManualProfile(article);

  return {
    title: manual.heading,
    paragraphs: [
      manual.scenario,
      manual.check,
    ],
    bullets: [
      `Der Beweis, der am häufigsten hilft: ${manual.evidence}`,
      `Der Fehler, den Sie vermeiden sollten: ${manual.mistake}`,
    ],
  };
}

function buildNonEuSection(article: BlogArticleDe): DeArticleSection {
  const subject = article.airlineName || article.routeName || "eine Fluggesellschaft mit Sitz außerhalb der EU";

  return {
    title: "Pflichttabelle für Fluggesellschaften mit Sitz außerhalb der EU",
    paragraphs: [
      `Bei ${subject} ist der häufigste Fehler die Annahme, dass ein und dieselbe Fluggesellschaft in jeder Richtung dasselbe Ergebnis liefert. Das ist nicht so. Die EU-Verordnung 261/2004 schützt Flüge ab einem EU-Flughafen sehr stark, wird aber enger bei Flügen aus Drittstaaten nach Europa, wenn die ausführende Fluggesellschaft kein europäisches Unternehmen ist.`,
      "Deshalb kann Frankfurt–Istanbul oder Frankfurt–Dubai anders zu beurteilen sein als der Rückflug von Istanbul oder Dubai nach Frankfurt. Stellen Sie zuerst die ausführende Fluggesellschaft, den Abflughafen und die Frage fest, ob die Reise eine einzige Buchung war.",
    ],
    table: "nonEu",
  };
}

function buildCoreSections(article: BlogArticleDe): DeArticleSection[] {
  const subject = getSubject(article);
  const sections: DeArticleSection[] = [
    {
      title: "Wann fällt dieser Fall unter EU 261 oder UK261?",
      paragraphs: [
        `Der erste Schritt bei ${subject} ist die Bestimmung des anwendbaren Regelwerks. Startet der Flug von einem Flughafen in der EU, im EWR, in der Schweiz oder im Vereinigten Königreich, sind Reisende in der Regel stark geschützt — unabhängig vom Herkunftsland der Fluggesellschaft. Kommt der Flug aus einem Drittstaat nach Europa, wird besonders wichtig, ob die ausführende Fluggesellschaft ein europäisches Unternehmen ist.`,
        "Für deutsche Flughäfen ist das Prinzip klar: Deutschland ist EU-Mitgliedstaat, daher kann die EU-Verordnung 261/2004 auf Abflüge ab Frankfurt (FRA), München, Berlin und jedem anderen deutschen Flughafen in der Regel auch dann angewendet werden, wenn die Fluggesellschaft ihren Sitz außerhalb der EU hat. Auch Warschau (WAW) liegt in der EU, sodass Flüge ab Warschau nach Deutschland — etwa mit LOT Polish Airlines — genauso erfasst sind. Für Flüge ab London, Stansted, Luton oder Manchester nach Deutschland ist nach dem Brexit dagegen in der Regel UK261 maßgeblich.",
      ],
      bullets: [
        "Flug ab Deutschland (z. B. Frankfurt, München, Berlin): EU-Verordnung 261/2004 in der Regel anwendbar — unabhängig von der Fluggesellschaft.",
        "Flug ab Warschau oder einem anderen EU-Flughafen nach Deutschland: ebenfalls EU 261.",
        "Flug ab dem Vereinigten Königreich nach Deutschland: nach dem Brexit in der Regel UK261.",
        "Flug aus einem Drittstaat mit einer Nicht-EU-Fluggesellschaft: EU 261 oft nicht anwendbar.",
      ],
    },
    {
      title: "Wie werden 250, 400 und 600 € berechnet?",
      paragraphs: [
        "Die Entschädigung nach der EU-Verordnung 261/2004 ist kein Rabatt, kein Vielfliegerbonus und keine Erstattung des Ticketpreises. Es ist ein fester Betrag nach der Streckendistanz: 250 € auf Kurzstrecken bis 1500 km, 400 € auf Mittelstrecken zwischen 1500 und 3500 km und 600 € auf Langstrecken über 3500 km. Zum Beispiel liegen Berlin–Warschau (ca. 520 km), München–Warschau (ca. 800 km) und Frankfurt–Warschau (ca. 900 km) in der 250 €-Stufe, Berlin–Antalya (ca. 2500 km) ergibt 400 € und Frankfurt–New York (ca. 6200 km) erreicht die 600 €-Stufe.",
        `Bei ${subject} sind zwei Fragen zu verbinden: Wie groß ist die Distanz und überschreitet die Störung die rechtliche Schwelle? Bei Verspätungen zählt in der Regel eine Ankunftsverspätung von mindestens 3 Stunden am Endziel. Bei Umsteigeverbindungen — etwa über das LOT-Drehkreuz Warschau — wird die Distanz vom Startflughafen bis zum Endziel gerechnet: Frankfurt–Warschau–Seoul liegt damit deutlich über 3500 km und ergibt 600 €. Bei Annullierungen kommt es auf die Frist der Mitteilung und die Qualität des Ersatzflugs an.`,
      ],
      bullets: [
        "Bis 1500 km: 250 €.",
        "1500–3500 km: 400 €.",
        "Über 3500 km: 600 €.",
      ],
    },
    {
      title: "Welche Beweise sollten Sie aufbewahren?",
      paragraphs: [
        "Die stärksten Fälle sind gut dokumentiert. Bewahren Sie die Buchungsbestätigung, die PNR-Nummer, die Bordkarte, SMS oder E-Mails der Fluggesellschaft sowie Screenshots aus der App und von der Anzeigetafel auf. Sind während des Wartens Zusatzkosten entstanden, heben Sie auch die Quittungen auf.",
        "Das Fehlen eines einzelnen Dokuments ist keine Katastrophe. Je genauer sich aber Strecke, Uhrzeiten und der von der Fluggesellschaft genannte Grund rekonstruieren lassen, desto einfacher ist zu prüfen, ob die Fluggesellschaft haftet und ob der Betrag 250, 400 oder 600 € beträgt.",
      ],
      bullets: [
        "PNR- oder Buchungsnummer.",
        "Flugnummer und Datum.",
        "Nachweis der tatsächlichen Ankunftszeit.",
        "Mitteilungen der Fluggesellschaft zu Verspätung, Annullierung oder Umleitung.",
      ],
    },
    {
      title: "Was tun — Schritt für Schritt?",
      paragraphs: [
        "Bringen Sie zuerst die Fakten in eine Reihe: Strecke, Datum, ausführende Fluggesellschaft, geplante und tatsächliche Ankunftszeit, Grund der Störung und Unterlagen. Prüfen Sie danach, ob der Fall unter die EU-Verordnung 261/2004 oder UK261 fällt. Der dritte Schritt ist eine klare Forderung mit konkretem Betrag und Beweisen — oder die Prüfung über ClaimWinger, wenn Sie den Schriftwechsel mit der Fluggesellschaft nicht selbst führen möchten.",
        "Wenn die Fluggesellschaft nicht antwortet, unbestimmt ablehnt oder pauschal auf außergewöhnliche Umstände verweist, sollten Sie die Ablehnung nicht ungeprüft als endgültig hinnehmen. Wichtig ist, die interne Antwort der Fluggesellschaft von der tatsächlichen rechtlichen Verantwortung zu unterscheiden.",
      ],
      bullets: [
        "Erstellen Sie eine kurze Chronologie des Falls.",
        "Prüfen Sie EU 261, UK261 oder ein anderes anwendbares System.",
        "Nehmen Sie keinen Gutschein an, wenn Sie Geld möchten und das Gesetz einen Anspruch darauf gibt.",
        "Verlangen Sie bei einer Ablehnung den konkreten Grund, keine pauschale Floskel.",
      ],
    },
  ];

  if (article.nonEuCarrier) {
    sections.splice(1, 0, buildNonEuSection(article));
  }

  if (article.uk261) {
    sections.splice(article.nonEuCarrier ? 2 : 1, 0, {
      title: "UK261 nach dem Brexit: Was müssen Reisende aus Deutschland wissen?",
      paragraphs: [
        "Nach dem Brexit ist auf Flügen ab dem Vereinigten Königreich in der Regel nicht mehr das klassische System der EU-Verordnung 261/2004 maßgeblich. Stattdessen gilt UK261. Die praktische Logik ist ähnlich: Distanz, Verspätung, Annullierung, Nichtbeförderung und die Verantwortung der Fluggesellschaft — aber die Beträge lauten auf Pfund: 220, 350 oder 520 £.",
        "Für Reisende aus Deutschland ist das wichtig bei Flügen ab London Heathrow, Stansted, Luton, Gatwick, Manchester, Birmingham oder Edinburgh nach Deutschland. Der Flug von Deutschland ins Vereinigte Königreich ist in der Regel ein Fall der EU-Verordnung 261/2004, der Rückflug ab dem Vereinigten Königreich in der Regel ein UK261-Fall.",
      ],
    });
  }

  const manualIndex =
    1 + (article.nonEuCarrier ? 1 : 0) + (article.uk261 ? 1 : 0);
  sections.splice(manualIndex, 0, buildManualSection(article));

  if (article.localAuthority) {
    sections.push({
      title: "Wann LBA, söp oder UK CAA einschalten?",
      paragraphs: [
        "In Deutschland ist das Luftfahrt-Bundesamt (LBA) die nationale Durchsetzungsstelle für Fluggastrechte; daneben lassen sich viele Fälle für Verbraucher kostenfrei über die Schlichtungsstelle für den öffentlichen Personenverkehr (söp) führen. Beide Wege lohnen sich, wenn Sie Ihre Forderung bereits an die ausführende Fluggesellschaft gerichtet und eine unbegründete Ablehnung oder nachweisbares Schweigen erhalten haben — etwa bei einem Flug ab Frankfurt (FRA).",
        "Ist der Flug im Vereinigten Königreich gestartet, können nach dem Brexit die UK CAA und das UK261-System einschlägig sein. Klären Sie vor der Eskalation die Zuständigkeit genau, denn der falsche Adressat kann das Verfahren verlangsamen.",
      ],
    });
  }

  if (article.limitation) {
    sections.push({
      title: "Die Verjährungsfrist in Deutschland: in der Regel 3 Jahre zum Jahresende",
      paragraphs: [
        "Für in Deutschland verfolgte Entschädigungsansprüche ist in der Praxis in der Regel mit einer Verjährungsfrist von 3 Jahren zu rechnen, die üblicherweise mit dem Ende des Jahres beginnt, in dem der Flug stattfand; die genaue Frist hängt vom Einzelfall und davon ab, nach welchem Recht der Anspruch verfolgt wird. Das heißt nicht, dass ein älterer Flug immer aussichtslos ist — aber je näher das Fristende rückt, desto wichtiger ist es, die Unterlagen schnell zu sammeln und zu handeln.",
        "Zeit schwächt Beweise: E-Mails verschwinden, Bordkarten gehen verloren, und der Fluggesellschaft fällt es schwerer, Betriebsdaten zu rekonstruieren. Schieben Sie deshalb auch einen formal noch nicht verjährten Anspruch nicht auf.",
      ],
    });
  }

  if (article.technical) {
    sections.push({
      title: "Ein technischer Defekt ist keine automatische Ablehnung",
      paragraphs: [
        "Fluggesellschaften berufen sich bei technischen Defekten oft auf außergewöhnliche Umstände. Ein gewöhnliches technisches Problem, das mit Wartung oder Betrieb des Flugzeugs zusammenhängt, bleibt aber häufig im Verantwortungsbereich der Fluggesellschaft.",
        "Wichtig ist, den genauen Grund zu verlangen und sich nicht mit einer pauschalen Floskel zufriedenzugeben. Fehlt in der Ablehnung die konkrete Angabe eines externen, unvorhersehbaren und nicht beherrschbaren Ereignisses, lohnt eine gründlichere Prüfung des Falls.",
      ],
    });
  }

  if (article.ota) {
    sections.push({
      title: "Ändert ein OTA-Vermittler Ihre Rechte?",
      paragraphs: [
        "Der Kauf des Tickets über Booking.com, eSky oder einen anderen Kanal nimmt Ihnen in der Regel nicht die Entschädigungsansprüche aus der EU-Verordnung 261/2004. Die Forderung wegen Verspätung, Annullierung oder Nichtbeförderung richtet sich in der Regel gegen die ausführende Fluggesellschaft.",
        "Der Vermittler kann bei Erstattung, Umbuchung oder Kommunikation wichtig sein, aber die Logik der pauschalen Entschädigung bleibt in der Regel mit der Fluggesellschaft verbunden, die den Flug durchgeführt hat oder durchführen sollte.",
      ],
    });
  }

  if (article.business) {
    sections.push({
      title: "Dienstreise: Wer erhält die pauschale Entschädigung?",
      paragraphs: [
        "Hat der Arbeitgeber das Ticket bezahlt, bedeutet das nicht automatisch, dass die pauschale Entschädigung nach der EU-Verordnung 261/2004 dem Unternehmen zusteht. Sie ist in der Regel für den Reisenden gedacht, der die Unannehmlichkeit erlebt hat: Verspätung, Warten, verpassten Anschlussflug oder Nichtbeförderung.",
        "Der Arbeitgeber kann interne Regeln zur Kostenerstattung haben, aber der Anspruch gegen die Fluggesellschaft auf die pauschale Entschädigung ist in der Regel an den konkreten Reisenden gebunden.",
      ],
    });
  }

  if (article.miles) {
    sections.push({
      title: "Mit Meilen gebuchte Tickets und Miles & More",
      paragraphs: [
        "Ist das Ticket mit Vielfliegerpunkten gebucht, zum Beispiel mit Miles & More-Meilen bei LOT oder Lufthansa, verlieren Sie in der Regel nicht den Schutz der EU-Verordnung 261/2004. Entscheidend ist, dass Sie eine bestätigte Buchung hatten und berechtigt waren, mit dem Flug zu reisen.",
        "Die Entschädigung hängt nicht davon ab, ob das Ticket vollständig in Geld bezahlt, teilweise mit Meilen beglichen oder im Rahmen einer Aktion erworben wurde. Entscheidend sind Strecke, Art der Störung und die Verantwortung der Fluggesellschaft.",
      ],
    });
  }

  return sections;
}

function buildFaqs(article: BlogArticleDe): DeArticleFaq[] {
  const subject = getSubject(article);
  const manual = getManualProfile(article);
  const faqs: DeArticleFaq[] = [
    {
      question: `Kann bei ${subject} eine Entschädigung geschuldet sein?`,
      answer:
        "Ja, wenn der Flug in den Anwendungsbereich der EU-Verordnung 261/2004 oder von UK261 fällt, die Störung die rechtliche Schwelle überschreitet und der Fluggesellschaft keine begründete Ausnahme zusteht. Am häufigsten sind Abflughafen, ausführende Fluggesellschaft und die Verspätung am Endziel zu prüfen.",
    },
    {
      question: "Wie viel gibt es nach der EU-Verordnung 261/2004?",
      answer:
        "Die festen Beträge sind 250, 400 oder 600 € pro Person. Der genaue Betrag richtet sich nach der Streckendistanz, nicht nach dem Ticketpreis.",
    },
    {
      question: "Welche Unterlagen sollten Sie aufbewahren?",
      answer:
        "Am meisten helfen Buchungsnummer, Bordkarte, Flugnummer, Datum, die Mitteilungen der Fluggesellschaft und der Nachweis der tatsächlichen Ankunftszeit. Sind Zusatzkosten entstanden, heben Sie die Quittungen für Verpflegung, Hotel und Transport auf.",
    },
    {
      question: "Kann ClaimWinger diesen Fall prüfen?",
      answer:
        "Ja, Sie können die Daten im deutschsprachigen ClaimWinger-Formular unter claimwinger.com/de einreichen. Das Modell ist No-win-no-fee, es fällt also keine Vorauszahlung an.",
    },
  ];

  faqs.splice(1, 0, {
    question: "Was entscheidet in genau diesem Fall am häufigsten über das Ergebnis?",
    answer:
      `${manual.check} Der praktisch wichtigste Beweis: ${manual.evidence}`,
  });

  if (article.nonEuCarrier) {
    faqs[0] = {
      question: "Gilt die EU-Verordnung 261/2004 für eine Fluggesellschaft mit Sitz außerhalb der EU?",
      answer:
        "Ja, wenn der Flug von einem EU-Flughafen startet, zum Beispiel ab Frankfurt oder München. Der Rückflug ab Istanbul, Dubai oder einem anderen Drittstaat mit einer Nicht-EU-Fluggesellschaft fällt dagegen oft nicht unter die EU-Verordnung 261/2004.",
    };
  }

  if (article.uk261) {
    faqs[0] = {
      question: "Gilt ab dem Vereinigten Königreich EU 261 oder UK261?",
      answer:
        "Nach dem Brexit gilt für Flüge ab dem Vereinigten Königreich in der Regel UK261 mit Beträgen von 220, 350 oder 520 £. Der Flug von Deutschland ins Vereinigte Königreich wird in der Regel nach der EU-Verordnung 261/2004 beurteilt, weil er von einem EU-Flughafen startet.",
    };
  }

  if (article.voucher) {
    faqs.push({
      question: "Verliere ich den Anspruch auf Geld, wenn ich einen Gutschein annehme?",
      answer:
        "Das hängt von den Gutscheinbedingungen ab. Prüfen Sie vor der Zustimmung, ob Sie auf die Erstattung in Geld oder auf die pauschale Entschädigung verzichten, die Ihnen nach dem Gesetz zustehen würde.",
    });
  }

  if (article.localAuthority) {
    faqs.push({
      question: "Wohin können Sie sich in Deutschland wenden, wenn die Fluggesellschaft nicht antwortet?",
      answer:
        "Richten Sie zuerst eine schriftliche Forderung an die ausführende Fluggesellschaft. Bleibt die Antwort aus oder ist sie unbegründet, können Sie sich an die Schlichtungsstelle für den öffentlichen Personenverkehr (söp) oder an das Luftfahrt-Bundesamt (LBA) wenden.",
    });
  }

  if (article.limitation) {
    faqs.push({
      question: "Lohnt es sich, einen Flug nach rund 3 Jahren noch zu prüfen?",
      answer:
        "Eine Prüfung lohnt sich, aber Abwarten ist riskant. In Deutschland ist die Verjährungsfrist von in der Regel 3 Jahren (gerechnet zum Jahresende) der wichtigste Orientierungspunkt — je schneller Sie die Unterlagen sammeln und die Forderung stellen, desto besser.",
    });
  }

  return faqs.slice(0, 5);
}

function buildContextualLinks(article: BlogArticleDe): DeContextualLink[] {
  const destination = getDestination(article.ctaPath);
  const primaryHref = buildClaimWingerDeLink(destination, {
    medium: "article_context_link",
    campaign: article.slug,
    content: "primary_claim_check",
  });
  const generalHref = buildClaimWingerDeLink("home", {
    medium: "article_context_link",
    campaign: article.slug,
    content: "general_claim_check",
  });
  const alternateHref = buildClaimWingerDeLink(
    article.ctaPath === "/cancelled-flight" ? "delayed" : "cancelled",
    {
      medium: "article_context_link",
      campaign: article.slug,
      content: "alternate_disruption",
    },
  );

  const links: DeContextualLink[] = [
    {
      label: article.ctaPath === "/cancelled-flight" ? "Annullierten Flug prüfen" : "Verspäteten Flug prüfen",
      href: primaryHref,
      placement: `de_article_${article.slug}_primary_context`,
      description:
        "Geeignet, wenn Sie Flugnummer, Datum und eine kurze Beschreibung des Problems bereits zur Hand haben.",
    },
    {
      label: "Allgemeine ClaimWinger-Prüfung",
      href: generalHref,
      placement: `de_article_${article.slug}_general_context`,
      description:
        "Hilfreich, wenn Sie noch nicht sicher sind, ob es sich um eine Verspätung, eine Annullierung, eine Überbuchung oder einen verpassten Anschlussflug handelt.",
    },
    {
      label: article.ctaPath === "/cancelled-flight" ? "Wenn der Fall eine Verspätung war" : "Wenn der Fall eine Annullierung war",
      href: alternateHref,
      placement: `de_article_${article.slug}_alternate_context`,
      description:
        "Geeignet für Mischfälle, in denen sich der Flugplan geändert hat, ein anderer Flug angeboten wurde oder aus der Verspätung eine Annullierung wurde.",
    },
  ];

  const guideDestination = getGuideDestination(article);

  if (guideDestination) {
    const guideHref = buildClaimWingerDeLink(guideDestination, {
      medium: "article_context_link",
      campaign: article.slug,
      content: "guide_deep_dive",
    });

    links.push({
      label:
        guideDestination === "polishAirlinesGuide"
          ? "ClaimWinger-Ratgeber zur Entschädigung bei polnischen Fluglinien"
          : "ClaimWinger-Ratgeber zur LOT-Entschädigung",
      href: guideHref,
      placement: `de_article_${article.slug}_guide_context`,
      description:
        guideDestination === "polishAirlinesGuide"
          ? "Vertiefender Ratgeber zu Entschädigungen bei LOT, Enter Air und anderen polnischen Fluggesellschaften — mit deutschsprachigem Formular."
          : "Vertiefender Ratgeber zur LOT-Entschädigung: Drehkreuz Warschau, Distanzstufen und typische Ablehnungsgründe — mit deutschsprachigem Formular.",
    });
  }

  return links;
}

export function buildDeArticleContent(article: BlogArticleDe): DeArticleContent {
  const ctaDestination = getDestination(article.ctaPath);

  return {
    title: article.title,
    seoTitle: `${article.title} | EU 261 Deutschland`,
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
