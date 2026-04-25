import Head from "next/head";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Euro, Ruler, ShieldCheck } from "lucide-react";

import { FlightCompensationCalculator } from "@/components/FlightCompensationCalculator";
import { SEO } from "@/components/SEO";
import { Card } from "@/components/ui/card";
import type { CalculatorLocaleCode } from "@/lib/flightCompensationCalculatorCopy";

type RelatedLink = {
  label: string;
  href: string;
  description: string;
};

type CalculatorPageCopy = {
  language: string;
  ogLocale: string;
  urlPath: string;
  title: string;
  description: string;
  eyebrow: string;
  heading: string;
  intro: string;
  afterCalculator: string;
  bandsHeading: string;
  bandsDescription: string;
  bandShort: string;
  bandMedium: string;
  bandLong: string;
  bandShortDescription: string;
  bandMediumDescription: string;
  bandLongDescription: string;
  rulesHeading: string;
  rules: string[];
  faqHeading: string;
  faq: Array<{ question: string; answer: string }>;
  relatedHeading: string;
  related: RelatedLink[];
  finalCtaTitle: string;
  finalCtaText: string;
  finalCtaLabel: string;
};

const pageCopies: Record<Exclude<CalculatorLocaleCode, "pl">, CalculatorPageCopy> = {
  en: {
    language: "English",
    ogLocale: "en_US",
    urlPath: "/en/compensation-calculator",
    title: "Flight Compensation Calculator | Check €250, €400 or €600",
    description:
      "Use the free EU261 and UK261 flight compensation calculator for delayed flights, cancellations, denied boarding and missed connections.",
    eyebrow: "Free EU261 and UK261 calculator",
    heading: "Flight compensation calculator",
    intro:
      "Check in a few steps whether your delayed flight, cancelled flight, overbooking or missed connection may qualify for €250, €400 or €600 per passenger.",
    afterCalculator:
      "The result is a first estimate. ClaimWinger later verifies the booking, actual arrival time, disruption reason and airline responsibility before submitting the claim.",
    bandsHeading: "Compensation amounts by distance",
    bandsDescription:
      "EU261 and UK261 use fixed compensation bands. Ticket price does not decide the amount.",
    bandShort: "Short distance",
    bandMedium: "Medium distance",
    bandLong: "Long distance",
    bandShortDescription: "Flights up to 1,500 km, often short European routes.",
    bandMediumDescription: "Flights from 1,500 to 3,500 km, plus many longer intra-European routes.",
    bandLongDescription: "Flights over 3,500 km, including many Europe to long-haul routes.",
    rulesHeading: "What the calculator checks",
    rules: [
      "Whether the departure or arrival falls under EU261, UK261, Swiss or EEA passenger-rights logic.",
      "Whether the arrival delay, cancellation notice, denied boarding or missed connection meets the legal threshold.",
      "Whether the operating carrier is covered when the flight arrives into Europe from outside the area.",
      "Whether extraordinary circumstances may require manual legal review before the claim is filed.",
    ],
    faqHeading: "FAQ: flight compensation calculator",
    faq: [
      {
        question: "Is the calculator result final?",
        answer:
          "No. It is a fast estimate based on the route and disruption details you enter. A real claim still needs verification of documents, actual arrival time and airline responsibility.",
      },
      {
        question: "Can the calculator check cancelled flights too?",
        answer:
          "Yes. It covers delays, cancellations, denied boarding and missed connections on one booking. Cancellation cases also depend on notice period and the quality of the replacement flight.",
      },
      {
        question: "Is compensation paid per passenger?",
        answer:
          "Yes. EU261 and UK261 compensation is generally calculated per passenger, not per booking. A family booking can therefore create several separate passenger claims.",
      },
      {
        question: "When can a flight be worth €600?",
        answer:
          "Usually when the route is over 3,500 km, the flight is within scope and the qualifying delay or cancellation threshold is met. Long-haul delay reductions can still apply in some cases.",
      },
    ],
    relatedHeading: "Useful next pages",
    related: [
      { label: "Delayed flight", href: "/en/delayed-flight", description: "Rules for delays of 3 hours or more." },
      { label: "Cancelled flight", href: "/en/cancelled-flight", description: "Rights when the airline cancels your flight." },
      { label: "Blog", href: "/en/blog", description: "Guides to EU261, UK261 and airline claims." },
    ],
    finalCtaTitle: "Estimate your claim before you file it",
    finalCtaText:
      "Start with the calculator, then continue to ClaimWinger if the route and disruption look promising.",
    finalCtaLabel: "Open the calculator",
  },
  cs: {
    language: "Czech",
    ogLocale: "cs_CZ",
    urlPath: "/cs/kompenzace-kalkulacka",
    title: "Kalkulačka kompenzace za let | Zjistěte 250, 400 nebo 600 €",
    description:
      "Bezplatná kalkulačka kompenzace podle EU261 a UK261 pro zpožděné, zrušené lety, overbooking a zmeškaný přípoj.",
    eyebrow: "Kalkulačka EU261 a UK261 zdarma",
    heading: "Kalkulačka kompenzace za let",
    intro:
      "V několika krocích ověřte, zda může zpožděný let, zrušený let, odmítnutý nástup nebo zmeškaný přípoj znamenat nárok na 250, 400 nebo 600 €.",
    afterCalculator:
      "Výsledek je orientační. ClaimWinger následně ověří rezervaci, skutečný čas příletu, důvod narušení letu a odpovědnost dopravce.",
    bandsHeading: "Výše kompenzace podle vzdálenosti",
    bandsDescription:
      "EU261 a UK261 pracují s pevnými pásmy. Cena letenky nerozhoduje o výši nároku.",
    bandShort: "Krátká vzdálenost",
    bandMedium: "Střední vzdálenost",
    bandLong: "Dlouhá vzdálenost",
    bandShortDescription: "Lety do 1 500 km, často krátké evropské trasy.",
    bandMediumDescription: "Lety od 1 500 do 3 500 km a řada delších evropských tras.",
    bandLongDescription: "Lety nad 3 500 km včetně mnoha dálkových cest z Evropy.",
    rulesHeading: "Co kalkulačka kontroluje",
    rules: [
      "Zda odlet nebo přílet spadá do režimu EU261, UK261, Švýcarska nebo EHP.",
      "Zda zpoždění při příletu, zrušení, overbooking nebo zmeškaný přípoj splňuje právní práh.",
      "Zda je dopravce rozhodující při příletu do Evropy ze země mimo tento prostor.",
      "Zda mimořádné okolnosti vyžadují ruční právní posouzení.",
    ],
    faqHeading: "FAQ: kalkulačka kompenzace za let",
    faq: [
      {
        question: "Je výsledek kalkulačky konečné rozhodnutí?",
        answer:
          "Ne. Jde o rychlý odhad podle zadané trasy a situace. Skutečný nárok vyžaduje kontrolu dokumentů, reálného času příletu a důvodu narušení letu.",
      },
      {
        question: "Umí kalkulačka zrušené lety?",
        answer:
          "Ano. Kontroluje zpoždění, zrušení, odmítnutý nástup i zmeškané přípoje. U zrušení je důležité také to, kdy vás aerolinka informovala a jaký náhradní let nabídla.",
      },
      {
        question: "Počítá se kompenzace na cestujícího?",
        answer:
          "Ano. Kompenzace se obvykle počítá na každého cestujícího zvlášť, ne na jednu rezervaci.",
      },
      {
        question: "Kdy může nárok dosáhnout 600 €?",
        answer:
          "Obvykle u tras nad 3 500 km, pokud let spadá do působnosti EU261 nebo UK261 a splňuje podmínky zpoždění či zrušení.",
      },
    ],
    relatedHeading: "Užitečné další stránky",
    related: [
      { label: "Zpožděný let", href: "/cs/zpozdeny-let", description: "Práva při zpoždění 3 hodiny a více." },
      { label: "Zrušený let", href: "/cs/zruseny-let", description: "Co dělat po zrušení letu." },
      { label: "Blog", href: "/cs/blog", description: "Průvodci EU261, letišti a aerolinkami." },
    ],
    finalCtaTitle: "Odhadněte nárok před podáním",
    finalCtaText:
      "Začněte kalkulačkou a pokračujte do ClaimWinger, pokud trasa a narušení vypadají slibně.",
    finalCtaLabel: "Otevřít kalkulačku",
  },
  el: {
    language: "Greek",
    ogLocale: "el_GR",
    urlPath: "/el/ypologismos-apozimiosis",
    title: "Υπολογιστής αποζημίωσης πτήσης | 250, 400 ή 600 €",
    description:
      "Δωρεάν υπολογιστής αποζημίωσης EU261 και UK261 για καθυστερημένες πτήσεις, ακυρώσεις, overbooking και χαμένες ανταποκρίσεις.",
    eyebrow: "Δωρεάν υπολογιστής EU261 και UK261",
    heading: "Υπολογιστής αποζημίωσης πτήσης",
    intro:
      "Ελέγξτε σε λίγα βήματα αν η καθυστέρηση, ακύρωση, άρνηση επιβίβασης ή χαμένη ανταπόκριση μπορεί να οδηγήσει σε 250, 400 ή 600 € ανά επιβάτη.",
    afterCalculator:
      "Το αποτέλεσμα είναι αρχική εκτίμηση. Η ClaimWinger ελέγχει μετά την κράτηση, την πραγματική ώρα άφιξης, την αιτία και την ευθύνη της αεροπορικής.",
    bandsHeading: "Ποσά αποζημίωσης ανά απόσταση",
    bandsDescription:
      "Οι κανόνες EU261 και UK261 χρησιμοποιούν σταθερές κλίμακες. Η τιμή του εισιτηρίου δεν καθορίζει το ποσό.",
    bandShort: "Μικρή απόσταση",
    bandMedium: "Μεσαία απόσταση",
    bandLong: "Μεγάλη απόσταση",
    bandShortDescription: "Πτήσεις έως 1.500 km, συχνά σύντομες ευρωπαϊκές διαδρομές.",
    bandMediumDescription: "Πτήσεις 1.500 έως 3.500 km και πολλές μεγαλύτερες ενδοευρωπαϊκές διαδρομές.",
    bandLongDescription: "Πτήσεις πάνω από 3.500 km, συχνά μεγάλες διεθνείς διαδρομές.",
    rulesHeading: "Τι ελέγχει ο υπολογιστής",
    rules: [
      "Αν η αναχώρηση ή άφιξη καλύπτεται από EU261, UK261, Ελβετία ή ΕΟΧ.",
      "Αν η καθυστέρηση άφιξης, ακύρωση, overbooking ή χαμένη ανταπόκριση περνά το νομικό όριο.",
      "Αν ο πραγματικός αερομεταφορέας καλύπτεται όταν η πτήση φτάνει στην Ευρώπη.",
      "Αν οι έκτακτες περιστάσεις απαιτούν χειροκίνητο νομικό έλεγχο.",
    ],
    faqHeading: "FAQ: υπολογιστής αποζημίωσης",
    faq: [
      {
        question: "Είναι τελικό το αποτέλεσμα;",
        answer:
          "Όχι. Είναι γρήγορη εκτίμηση με βάση τα στοιχεία που δίνετε. Η πραγματική αξίωση χρειάζεται έλεγχο εγγράφων και αιτίας της διαταραχής.",
      },
      {
        question: "Καλύπτει ακυρωμένες πτήσεις;",
        answer:
          "Ναι. Καλύπτει καθυστερήσεις, ακυρώσεις, άρνηση επιβίβασης και χαμένες ανταποκρίσεις στην ίδια κράτηση.",
      },
      {
        question: "Η αποζημίωση είναι ανά επιβάτη;",
        answer:
          "Ναι. Συνήθως υπολογίζεται ανά επιβάτη, όχι ανά κράτηση.",
      },
      {
        question: "Πότε μπορεί να φτάσει τα 600 €;",
        answer:
          "Συνήθως σε διαδρομές άνω των 3.500 km που καλύπτονται από EU261 ή UK261 και πληρούν το όριο καθυστέρησης ή ακύρωσης.",
      },
    ],
    relatedHeading: "Χρήσιμες σελίδες",
    related: [
      { label: "Καθυστερημένη πτήση", href: "/el/kathysterimeni-ptisi", description: "Δικαιώματα σε καθυστέρηση άφιξης." },
      { label: "Ακυρωμένη πτήση", href: "/el/akyromeni-ptisi", description: "Τι ισχύει όταν ακυρώνεται η πτήση." },
      { label: "Blog", href: "/el/blog", description: "Οδηγοί για EU261 και αεροπορικές αξιώσεις." },
    ],
    finalCtaTitle: "Υπολογίστε την πιθανή αξίωση",
    finalCtaText:
      "Ξεκινήστε από τον υπολογιστή και συνεχίστε στη ClaimWinger όταν η υπόθεση φαίνεται ισχυρή.",
    finalCtaLabel: "Άνοιγμα υπολογιστή",
  },
  hi: {
    language: "Hindi",
    ogLocale: "hi_IN",
    urlPath: "/hi/muavza-calculator",
    title: "उड़ान मुआवज़ा कैलकुलेटर | €250, €400 या €600 जांचें",
    description:
      "EU261 और UK261 के तहत देरी, रद्द उड़ान, overbooking या missed connection के लिए मुफ्त मुआवज़ा कैलकुलेटर.",
    eyebrow: "भारतीय यात्रियों के लिए EU261 / UK261 कैलकुलेटर",
    heading: "उड़ान मुआवज़ा कैलकुलेटर",
    intro:
      "कुछ चरणों में देखें कि आपकी delayed flight, cancelled flight, denied boarding या missed connection के लिए €250, €400 या €600 तक मुआवज़ा बन सकता है या नहीं.",
    afterCalculator:
      "यह शुरुआती अनुमान है. ClaimWinger बाद में booking, actual arrival time, disruption reason और airline responsibility को no-win, no-fee model में जांचता है. €600 लगभग ₹52,000 के बराबर हो सकता है.",
    bandsHeading: "दूरी के अनुसार मुआवज़ा",
    bandsDescription:
      "EU261 और UK261 में fixed bands होते हैं. टिकट की कीमत से मुआवज़ा तय नहीं होता.",
    bandShort: "Short distance",
    bandMedium: "Medium distance",
    bandLong: "Long distance",
    bandShortDescription: "1,500 km तक की उड़ानें, जैसे कई यूरोपीय routes.",
    bandMediumDescription: "1,500 से 3,500 km तक की उड़ानें और कई Europe routes.",
    bandLongDescription: "3,500 km से अधिक की उड़ानें, जैसे Europe to India long-haul cases.",
    rulesHeading: "कैलकुलेटर क्या जांचता है",
    rules: [
      "Departure या arrival EU261, UK261, Swiss या EEA passenger-rights scope में आता है या नहीं.",
      "Arrival delay, cancellation notice, denied boarding या missed connection legal threshold पूरा करता है या नहीं.",
      "Non-EU airline जैसे Air India या IndiGo पर नियम कब लागू हो सकते हैं.",
      "Extraordinary circumstances की वजह से manual legal review चाहिए या नहीं.",
    ],
    faqHeading: "FAQ: उड़ान मुआवज़ा कैलकुलेटर",
    faq: [
      {
        question: "क्या कैलकुलेटर का result final decision है?",
        answer:
          "नहीं. यह route और disruption details के आधार पर fast estimate है. असली claim के लिए documents, actual arrival time और airline की responsibility जांचनी पड़ती है.",
      },
      {
        question: "क्या Air India पर EU261 लागू हो सकता है?",
        answer:
          "हां, अगर flight Europe/UK airport से depart करती है. Delhi या Mumbai से Air India की non-EU departure flight पर आमतौर पर EU261 लागू नहीं होता.",
      },
      {
        question: "मुआवज़ा passenger को मिलता है या booking को?",
        answer:
          "आम तौर पर compensation हर passenger के लिए अलग होता है. Family booking में हर eligible passenger का अलग claim हो सकता है.",
      },
      {
        question: "€600 कब मिल सकता है?",
        answer:
          "आमतौर पर 3,500 km से अधिक route पर, जब flight EU261/UK261 scope में हो और delay या cancellation threshold पूरा हो.",
      },
    ],
    relatedHeading: "अगले उपयोगी पेज",
    related: [
      { label: "देरी से flight", href: "/hi/der-se-flight", description: "3+ घंटे delay पर अधिकार." },
      { label: "रद्द flight", href: "/hi/cancel-flight", description: "Cancellation और refund logic." },
      { label: "Blog", href: "/hi/blog", description: "EU261, airlines और India-Europe routes." },
    ],
    finalCtaTitle: "Claim file करने से पहले amount check करें",
    finalCtaText:
      "पहले calculator से route और disruption strength देखें, फिर eligible case ClaimWinger में भेजें.",
    finalCtaLabel: "कैलकुलेटर खोलें",
  },
  hu: {
    language: "Hungarian",
    ogLocale: "hu_HU",
    urlPath: "/hu/karteritesi-kalkulator",
    title: "Járatkártérítési kalkulátor | 250, 400 vagy 600 €",
    description:
      "Ingyenes EU261 és UK261 kalkulátor késő járatokhoz, törlésekhez, overbookinghoz és lekésett csatlakozáshoz.",
    eyebrow: "Ingyenes EU261 és UK261 kalkulátor",
    heading: "Járatkártérítési kalkulátor",
    intro:
      "Néhány lépésben ellenőrizheti, hogy késés, törlés, beszállás megtagadása vagy lekésett csatlakozás esetén járhat-e 250, 400 vagy 600 €.",
    afterCalculator:
      "Az eredmény előzetes becslés. A ClaimWinger később ellenőrzi a foglalást, a tényleges érkezési időt, az okot és a légitársaság felelősségét.",
    bandsHeading: "Kártérítési összegek távolság szerint",
    bandsDescription:
      "Az EU261 és UK261 fix összegekkel dolgozik. A jegy ára nem határozza meg a kártérítést.",
    bandShort: "Rövid táv",
    bandMedium: "Közepes táv",
    bandLong: "Hosszú táv",
    bandShortDescription: "1 500 km alatti utak, sok rövid európai járat.",
    bandMediumDescription: "1 500 és 3 500 km közötti utak, illetve sok hosszabb európai útvonal.",
    bandLongDescription: "3 500 km feletti utak, gyakran interkontinentális járatok.",
    rulesHeading: "Mit vizsgál a kalkulátor",
    rules: [
      "Az indulás vagy érkezés EU261, UK261, svájci vagy EGT hatály alá esik-e.",
      "A késés, törlés, overbooking vagy lekésett csatlakozás eléri-e a jogi küszöböt.",
      "Az üzemeltető légitársaság hatálya számít-e Európába érkező járatnál.",
      "A rendkívüli körülmények miatt szükséges-e kézi jogi ellenőrzés.",
    ],
    faqHeading: "FAQ: járatkártérítési kalkulátor",
    faq: [
      {
        question: "Végleges döntés a kalkulátor eredménye?",
        answer:
          "Nem. Ez gyors becslés az Ön által megadott adatok alapján. A tényleges igényhez dokumentumok és a zavar okának vizsgálata kell.",
      },
      {
        question: "Törölt járatot is kezel?",
        answer:
          "Igen. Késést, törlést, beszállás megtagadását és lekésett csatlakozást is kezel.",
      },
      {
        question: "Utasként külön jár a kártérítés?",
        answer:
          "Általában igen. A kártérítés utasonként számít, nem foglalásonként.",
      },
      {
        question: "Mikor lehet 600 €?",
        answer:
          "Többnyire 3 500 km feletti, hatály alá tartozó útvonalaknál, ha a késés vagy törlés feltételei teljesülnek.",
      },
    ],
    relatedHeading: "Hasznos oldalak",
    related: [
      { label: "Késett járat", href: "/hu/kesett-jarat", description: "Jogok 3 órán túli késésnél." },
      { label: "Törölt járat", href: "/hu/torolt-jarat", description: "Teendők törlés esetén." },
      { label: "Blog", href: "/hu/blog", description: "EU261, légitársaságok és repülőtéri útmutatók." },
    ],
    finalCtaTitle: "Becsülje meg az igényt benyújtás előtt",
    finalCtaText:
      "Kezdje a kalkulátorral, majd folytassa a ClaimWinger felé, ha az ügy ígéretes.",
    finalCtaLabel: "Kalkulátor megnyitása",
  },
  it: {
    language: "Italian",
    ogLocale: "it_IT",
    urlPath: "/it/calcolatore-risarcimento",
    title: "Calcolatore risarcimento volo | Verifica 250, 400 o 600 €",
    description:
      "Calcolatore gratuito EU261 e UK261 per voli in ritardo, cancellati, overbooking e coincidenze perse.",
    eyebrow: "Calcolatore gratuito EU261 e UK261",
    heading: "Calcolatore risarcimento volo",
    intro:
      "Verifica in pochi passaggi se un volo in ritardo, cancellato, overbooking o una coincidenza persa può dare diritto a 250, 400 o 600 € per passeggero.",
    afterCalculator:
      "Il risultato è una stima iniziale. ClaimWinger verifica poi prenotazione, orario reale di arrivo, causa del disservizio e responsabilità della compagnia.",
    bandsHeading: "Importi del risarcimento per distanza",
    bandsDescription:
      "EU261 e UK261 prevedono importi fissi. Il prezzo del biglietto non determina il risarcimento.",
    bandShort: "Breve distanza",
    bandMedium: "Media distanza",
    bandLong: "Lunga distanza",
    bandShortDescription: "Voli fino a 1.500 km, spesso rotte europee brevi.",
    bandMediumDescription: "Voli da 1.500 a 3.500 km e molte rotte europee più lunghe.",
    bandLongDescription: "Voli oltre 3.500 km, inclusi molti collegamenti intercontinentali.",
    rulesHeading: "Cosa controlla il calcolatore",
    rules: [
      "Se partenza o arrivo rientrano in EU261, UK261, Svizzera o SEE.",
      "Se ritardo all'arrivo, cancellazione, overbooking o coincidenza persa superano la soglia legale.",
      "Se il vettore operativo è rilevante per voli in arrivo in Europa.",
      "Se le circostanze eccezionali richiedono verifica legale manuale.",
    ],
    faqHeading: "FAQ: calcolatore risarcimento volo",
    faq: [
      {
        question: "Il risultato è definitivo?",
        answer:
          "No. È una stima rapida basata sui dati inseriti. Per il reclamo reale servono documenti, orario effettivo di arrivo e causa del problema.",
      },
      {
        question: "Funziona anche per voli cancellati?",
        answer:
          "Sì. Copre ritardi, cancellazioni, imbarco negato e coincidenze perse sulla stessa prenotazione.",
      },
      {
        question: "Il risarcimento è per passeggero?",
        answer:
          "Sì. Di solito il risarcimento è per ciascun passeggero, non per prenotazione.",
      },
      {
        question: "Quando si arriva a 600 €?",
        answer:
          "Di solito su rotte oltre 3.500 km, se il volo rientra nel campo EU261 o UK261 e la soglia di ritardo o cancellazione è soddisfatta.",
      },
    ],
    relatedHeading: "Pagine utili",
    related: [
      { label: "Volo in ritardo", href: "/it/volo-in-ritardo", description: "Diritti con arrivo in ritardo di 3+ ore." },
      { label: "Volo cancellato", href: "/it/volo-cancellato", description: "Cosa fare dopo una cancellazione." },
      { label: "Blog", href: "/it/blog", description: "Guide su EU261, compagnie e aeroporti." },
    ],
    finalCtaTitle: "Stima il reclamo prima di inviarlo",
    finalCtaText:
      "Parti dal calcolatore e continua con ClaimWinger se la rotta e il disservizio sembrano idonei.",
    finalCtaLabel: "Apri il calcolatore",
  },
  no: {
    language: "Norwegian",
    ogLocale: "nb_NO",
    urlPath: "/no/erstatningskalkulator",
    title: "Flyerstatningskalkulator | Sjekk 250, 400 eller 600 €",
    description:
      "Gratis EU261- og UK261-kalkulator for forsinket fly, kansellering, nektet ombordstigning og mistet forbindelse.",
    eyebrow: "Gratis EU261 og UK261-kalkulator",
    heading: "Flyerstatningskalkulator",
    intro:
      "Sjekk på noen få steg om forsinket fly, kansellert fly, overbooking eller mistet forbindelse kan gi 250, 400 eller 600 € per passasjer.",
    afterCalculator:
      "Resultatet er et første estimat. ClaimWinger kontrollerer senere booking, faktisk ankomsttid, årsak og flyselskapets ansvar.",
    bandsHeading: "Erstatningsbeløp etter distanse",
    bandsDescription:
      "EU261 og UK261 bruker faste beløp. Billettprisen avgjør ikke hvor mye du kan kreve.",
    bandShort: "Kort distanse",
    bandMedium: "Middels distanse",
    bandLong: "Lang distanse",
    bandShortDescription: "Flyvninger opptil 1 500 km, ofte korte europeiske ruter.",
    bandMediumDescription: "Flyvninger fra 1 500 til 3 500 km og mange lengre europeiske ruter.",
    bandLongDescription: "Flyvninger over 3 500 km, inkludert mange langdistanseruter.",
    rulesHeading: "Hva kalkulatoren sjekker",
    rules: [
      "Om avreise eller ankomst faller under EU261, UK261, Sveits eller EØS.",
      "Om forsinkelse ved ankomst, kansellering, overbooking eller mistet forbindelse møter terskelen.",
      "Om opererende flyselskap er avgjørende ved ankomst til Europa.",
      "Om ekstraordinære omstendigheter krever manuell juridisk vurdering.",
    ],
    faqHeading: "FAQ: flyerstatningskalkulator",
    faq: [
      {
        question: "Er resultatet endelig?",
        answer:
          "Nei. Det er et raskt estimat basert på opplysningene du legger inn. Et reelt krav må kontrolleres mot dokumenter og faktisk ankomsttid.",
      },
      {
        question: "Kan kalkulatoren sjekke kansellerte fly?",
        answer:
          "Ja. Den dekker forsinkelser, kanselleringer, nektet ombordstigning og mistede forbindelser.",
      },
      {
        question: "Er erstatningen per passasjer?",
        answer:
          "Ja. Erstatning beregnes normalt per passasjer, ikke per booking.",
      },
      {
        question: "Når kan det bli 600 €?",
        answer:
          "Vanligvis på ruter over 3 500 km som er innenfor regelverket og oppfyller vilkårene for forsinkelse eller kansellering.",
      },
    ],
    relatedHeading: "Nyttige sider",
    related: [
      { label: "Forsinket fly", href: "/no/forsinket-fly", description: "Rettigheter ved 3+ timers forsinkelse." },
      { label: "Innstilt fly", href: "/no/innstilt-fly", description: "Hva du kan kreve ved kansellering." },
      { label: "Blogg", href: "/no/blog", description: "Guider om EU261, flyselskaper og flyplasser." },
    ],
    finalCtaTitle: "Beregn kravet før du sender det",
    finalCtaText:
      "Start med kalkulatoren og fortsett til ClaimWinger hvis saken ser lovende ut.",
    finalCtaLabel: "Åpne kalkulatoren",
  },
  sk: {
    language: "Slovak",
    ogLocale: "sk_SK",
    urlPath: "/sk/kalkulacka-kompenzacie",
    title: "Kalkulačka kompenzácie za let | 250, 400 alebo 600 €",
    description:
      "Bezplatná kalkulačka EU261 a UK261 pre meškanie letu, zrušený let, odmietnutý nástup a zmeškaný prestup.",
    eyebrow: "Bezplatná kalkulačka EU261 a UK261",
    heading: "Kalkulačka kompenzácie za let",
    intro:
      "V niekoľkých krokoch zistite, či meškanie, zrušenie, overbooking alebo zmeškaný prestup môže znamenať nárok na 250, 400 alebo 600 €.",
    afterCalculator:
      "Výsledok je predbežný odhad. ClaimWinger potom overí rezerváciu, skutočný čas príletu, dôvod narušenia a zodpovednosť aerolinky.",
    bandsHeading: "Výška kompenzácie podľa vzdialenosti",
    bandsDescription:
      "EU261 a UK261 používajú pevné pásma. Cena letenky nerozhoduje o výške kompenzácie.",
    bandShort: "Krátka vzdialenosť",
    bandMedium: "Stredná vzdialenosť",
    bandLong: "Dlhá vzdialenosť",
    bandShortDescription: "Lety do 1 500 km, často krátke európske trasy.",
    bandMediumDescription: "Lety od 1 500 do 3 500 km a mnohé dlhšie európske trasy.",
    bandLongDescription: "Lety nad 3 500 km vrátane mnohých diaľkových trás.",
    rulesHeading: "Čo kalkulačka kontroluje",
    rules: [
      "Či odlet alebo prílet spadá pod EU261, UK261, Švajčiarsko alebo EHP.",
      "Či meškanie pri prílete, zrušenie, overbooking alebo zmeškaný prestup spĺňa právny prah.",
      "Či je dopravca rozhodujúci pri prílete do Európy.",
      "Či mimoriadne okolnosti vyžadujú manuálne právne posúdenie.",
    ],
    faqHeading: "FAQ: kalkulačka kompenzácie",
    faq: [
      {
        question: "Je výsledok konečný?",
        answer:
          "Nie. Ide o rýchly odhad podľa zadaných údajov. Skutočný nárok vyžaduje kontrolu dokumentov, času príletu a dôvodu narušenia.",
      },
      {
        question: "Vie kalkulačka zrušené lety?",
        answer:
          "Áno. Kontroluje meškanie, zrušenie, odmietnutý nástup aj zmeškaný prestup.",
      },
      {
        question: "Kompenzácia je na cestujúceho?",
        answer:
          "Áno. Zvyčajne sa počíta na každého cestujúceho osobitne.",
      },
      {
        question: "Kedy môže ísť o 600 €?",
        answer:
          "Najčastejšie pri trasách nad 3 500 km, ak let patrí do rozsahu EU261 alebo UK261 a spĺňa podmienky.",
      },
    ],
    relatedHeading: "Užitočné stránky",
    related: [
      { label: "Meškanie letu", href: "/sk/meskanie-letu", description: "Práva pri meškaní 3+ hodiny." },
      { label: "Zrušený let", href: "/sk/zruseny-let", description: "Čo robiť pri zrušení letu." },
      { label: "Blog", href: "/sk/blog", description: "Sprievodcovia EU261 a aerolinkami." },
    ],
    finalCtaTitle: "Odhadnite nárok pred podaním",
    finalCtaText:
      "Začnite kalkulačkou a pokračujte do ClaimWinger, ak trasa a situácia vyzerajú nádejne.",
    finalCtaLabel: "Otvoriť kalkulačku",
  },
  sv: {
    language: "Swedish",
    ogLocale: "sv_SE",
    urlPath: "/sv/ersattning-kalkulator",
    title: "Flygersättningskalkylator | Kontrollera 250, 400 eller 600 €",
    description:
      "Gratis EU261- och UK261-kalkylator för försenade flyg, inställda flyg, nekad ombordstigning och missad anslutning.",
    eyebrow: "Gratis EU261 och UK261-kalkylator",
    heading: "Flygersättningskalkylator",
    intro:
      "Kontrollera i några steg om ett försenat flyg, inställt flyg, overbooking eller missad anslutning kan ge 250, 400 eller 600 € per passagerare.",
    afterCalculator:
      "Resultatet är en första uppskattning. ClaimWinger kontrollerar sedan bokning, faktisk ankomsttid, störningens orsak och flygbolagets ansvar.",
    bandsHeading: "Ersättningsbelopp efter distans",
    bandsDescription:
      "EU261 och UK261 använder fasta belopp. Biljettpriset avgör inte ersättningen.",
    bandShort: "Kort distans",
    bandMedium: "Medellång distans",
    bandLong: "Lång distans",
    bandShortDescription: "Flyg upp till 1 500 km, ofta korta europeiska rutter.",
    bandMediumDescription: "Flyg från 1 500 till 3 500 km och många längre europeiska rutter.",
    bandLongDescription: "Flyg över 3 500 km, inklusive många långdistansrutter.",
    rulesHeading: "Vad kalkylatorn kontrollerar",
    rules: [
      "Om avgång eller ankomst faller under EU261, UK261, Schweiz eller EES.",
      "Om ankomstförsening, inställt flyg, overbooking eller missad anslutning uppfyller tröskeln.",
      "Om opererande flygbolag är avgörande vid ankomst till Europa.",
      "Om extraordinära omständigheter kräver manuell juridisk granskning.",
    ],
    faqHeading: "FAQ: flygersättningskalkylator",
    faq: [
      {
        question: "Är resultatet slutgiltigt?",
        answer:
          "Nej. Det är en snabb uppskattning utifrån uppgifterna du anger. Ett riktigt krav behöver dokument, faktisk ankomsttid och orsak kontrolleras.",
      },
      {
        question: "Kan kalkylatorn hantera inställda flyg?",
        answer:
          "Ja. Den täcker förseningar, inställda flyg, nekad ombordstigning och missade anslutningar.",
      },
      {
        question: "Är ersättningen per passagerare?",
        answer:
          "Ja. Ersättningen räknas normalt per passagerare, inte per bokning.",
      },
      {
        question: "När kan det bli 600 €?",
        answer:
          "Vanligen på rutter över 3 500 km som omfattas av reglerna och uppfyller villkoren för försening eller inställt flyg.",
      },
    ],
    relatedHeading: "Användbara sidor",
    related: [
      { label: "Försenat flyg", href: "/sv/forsenat-flyg", description: "Rättigheter vid 3+ timmars försening." },
      { label: "Inställt flyg", href: "/sv/installat-flyg", description: "Vad som gäller vid inställd avgång." },
      { label: "Blogg", href: "/sv/blog", description: "Guider om EU261 och flygbolag." },
    ],
    finalCtaTitle: "Beräkna kravet innan du skickar in",
    finalCtaText:
      "Börja med kalkylatorn och fortsätt till ClaimWinger om rutten och störningen ser lovande ut.",
    finalCtaLabel: "Öppna kalkylatorn",
  },
  tr: {
    language: "Turkish",
    ogLocale: "tr_TR",
    urlPath: "/tr/tazminat-hesaplayici",
    title: "Uçuş tazminatı hesaplayıcı | 250, 400 veya 600 €",
    description:
      "Gecikmiş uçuş, iptal, overbooking ve kaçırılan bağlantı için ücretsiz EU261 ve UK261 tazminat hesaplayıcı.",
    eyebrow: "Ücretsiz EU261 ve UK261 hesaplayıcı",
    heading: "Uçuş tazminatı hesaplayıcı",
    intro:
      "Gecikme, iptal, uçağa alınmama veya kaçırılan bağlantı durumunda yolcu başına 250, 400 veya 600 € tazminat ihtimalini birkaç adımda kontrol edin.",
    afterCalculator:
      "Sonuç ilk tahmindir. ClaimWinger daha sonra rezervasyonu, gerçek varış saatini, aksaklık nedenini ve havayolu sorumluluğunu kontrol eder.",
    bandsHeading: "Mesafeye göre tazminat tutarları",
    bandsDescription:
      "EU261 ve UK261 sabit tutarlar kullanır. Bilet fiyatı tazminat miktarını belirlemez.",
    bandShort: "Kısa mesafe",
    bandMedium: "Orta mesafe",
    bandLong: "Uzun mesafe",
    bandShortDescription: "1.500 km'ye kadar uçuşlar, çoğu kısa Avrupa rotası.",
    bandMediumDescription: "1.500-3.500 km arası uçuşlar ve bazı uzun Avrupa rotaları.",
    bandLongDescription: "3.500 km üzeri uçuşlar, birçok kıtalararası rota dahil.",
    rulesHeading: "Hesaplayıcı neyi kontrol eder",
    rules: [
      "Kalkış veya varışın EU261, UK261, İsviçre veya EEA kapsamına girip girmediğini.",
      "Varış gecikmesi, iptal, overbooking veya bağlantı kaybının yasal eşiği aşıp aşmadığını.",
      "Avrupa'ya varışlarda uçuşu işleten havayolunun kapsam açısından önemini.",
      "Olağanüstü koşullar nedeniyle manuel hukuki inceleme gerekip gerekmediğini.",
    ],
    faqHeading: "FAQ: uçuş tazminatı hesaplayıcı",
    faq: [
      {
        question: "Sonuç kesin karar mı?",
        answer:
          "Hayır. Girilen rota ve aksaklık bilgilerine göre hızlı bir tahmindir. Gerçek dosyada belgeler, varış saati ve aksaklık nedeni kontrol edilir.",
      },
      {
        question: "İptal edilen uçuşları da kontrol eder mi?",
        answer:
          "Evet. Gecikme, iptal, uçağa alınmama ve aynı rezervasyondaki kaçırılan bağlantıları kontrol eder.",
      },
      {
        question: "Tazminat yolcu başına mı hesaplanır?",
        answer:
          "Evet. Genellikle rezervasyon başına değil, her yolcu için ayrı hesaplanır.",
      },
      {
        question: "Ne zaman 600 € olabilir?",
        answer:
          "Genellikle 3.500 km üzeri kapsam içi rotalarda, gecikme veya iptal şartları sağlandığında.",
      },
    ],
    relatedHeading: "Faydalı sayfalar",
    related: [
      { label: "Gecikmiş uçuş", href: "/tr/gecikmis-ucus", description: "3+ saat gecikmede haklar." },
      { label: "İptal edilen uçuş", href: "/tr/iptal-edilen-ucus", description: "İptal durumunda yapılacaklar." },
      { label: "Blog", href: "/tr/blog", description: "EU261, havayolu ve rota rehberleri." },
    ],
    finalCtaTitle: "Dosyayı göndermeden önce hesaplayın",
    finalCtaText:
      "Önce hesaplayıcıyla kontrol edin, sonra uygun görünüyorsa ClaimWinger'a geçin.",
    finalCtaLabel: "Hesaplayıcıyı aç",
  },
  vi: {
    language: "Vietnamese",
    ogLocale: "vi_VN",
    urlPath: "/vi/kiem-tra-boi-thuong",
    title: "Công cụ kiểm tra bồi thường chuyến bay | €250, €400 hoặc €600",
    description:
      "Công cụ miễn phí theo EU261 và UK261 cho chuyến bay bị hoãn, bị hủy, từ chối lên máy bay và lỡ chuyến nối.",
    eyebrow: "Công cụ EU261 và UK261 miễn phí",
    heading: "Công cụ kiểm tra bồi thường chuyến bay",
    intro:
      "Kiểm tra trong vài bước xem chuyến bay bị trễ, bị hủy, overbooking hoặc lỡ chuyến nối có thể được bồi thường €250, €400 hoặc €600 mỗi hành khách hay không.",
    afterCalculator:
      "Kết quả chỉ là đánh giá ban đầu. ClaimWinger sau đó kiểm tra đặt chỗ, giờ đến thực tế, nguyên nhân gián đoạn và trách nhiệm của hãng.",
    bandsHeading: "Mức bồi thường theo khoảng cách",
    bandsDescription:
      "EU261 và UK261 dùng các mức cố định. Giá vé không quyết định số tiền bồi thường.",
    bandShort: "Chặng ngắn",
    bandMedium: "Chặng trung bình",
    bandLong: "Chặng dài",
    bandShortDescription: "Chuyến bay đến 1.500 km, thường là các chặng ngắn ở châu Âu.",
    bandMediumDescription: "Chuyến bay 1.500-3.500 km và nhiều chặng dài trong châu Âu.",
    bandLongDescription: "Chuyến bay trên 3.500 km, gồm nhiều hành trình Europe to Vietnam.",
    rulesHeading: "Công cụ kiểm tra điều gì",
    rules: [
      "Điểm khởi hành hoặc điểm đến có thuộc phạm vi EU261, UK261, Thụy Sĩ hoặc EEA không.",
      "Delay khi đến nơi, cancellation, overbooking hoặc missed connection có đạt ngưỡng pháp lý không.",
      "Hãng khai thác thực tế có quan trọng khi bay từ ngoài châu Âu vào châu Âu không.",
      "Lý do extraordinary circumstances có cần kiểm tra pháp lý thủ công không.",
    ],
    faqHeading: "FAQ: công cụ kiểm tra bồi thường",
    faq: [
      {
        question: "Kết quả có phải quyết định cuối cùng không?",
        answer:
          "Không. Đây là ước tính nhanh dựa trên dữ liệu bạn nhập. Hồ sơ thật cần kiểm tra giấy tờ, giờ đến thực tế và lý do gián đoạn.",
      },
      {
        question: "Công cụ có kiểm tra chuyến bay bị hủy không?",
        answer:
          "Có. Công cụ kiểm tra delay, cancellation, denied boarding và missed connection trên cùng một đặt chỗ.",
      },
      {
        question: "Bồi thường tính theo hành khách hay theo booking?",
        answer:
          "Thông thường là theo từng hành khách, không phải theo một booking.",
      },
      {
        question: "Khi nào có thể là €600?",
        answer:
          "Thường là chặng trên 3.500 km, nằm trong phạm vi EU261 hoặc UK261 và đạt ngưỡng delay/cancellation.",
      },
    ],
    relatedHeading: "Trang hữu ích tiếp theo",
    related: [
      { label: "Chuyến bay bị hoãn", href: "/vi/chuyen-bay-bi-hoan", description: "Quyền lợi khi đến muộn 3+ giờ." },
      { label: "Chuyến bay bị hủy", href: "/vi/chuyen-bay-bi-huy", description: "Logic cancellation và bồi thường." },
      { label: "Blog", href: "/vi/blog", description: "EU261, route và airline guides." },
    ],
    finalCtaTitle: "Kiểm tra hồ sơ trước khi gửi claim",
    finalCtaText:
      "Bắt đầu bằng công cụ, rồi chuyển sang ClaimWinger nếu route và tình huống có vẻ đủ điều kiện.",
    finalCtaLabel: "Mở công cụ",
  },
  zh: {
    language: "Chinese",
    ogLocale: "zh_CN",
    urlPath: "/zh/compensation-calculator",
    title: "航班赔偿计算器 | 查询 250、400 或 600 欧元",
    description:
      "免费的 EU261 和 UK261 航班赔偿计算器，适用于延误、取消、拒绝登机和错过转机。",
    eyebrow: "免费 EU261 和 UK261 计算器",
    heading: "航班赔偿计算器",
    intro:
      "通过几个步骤查看您的航班延误、取消、超售拒绝登机或错过转机是否可能获得每位乘客 250、400 或 600 欧元赔偿。",
    afterCalculator:
      "结果是初步估算。ClaimWinger 会继续核查预订、实际到达时间、 disruption 原因和航空公司的责任。",
    bandsHeading: "按距离划分的赔偿金额",
    bandsDescription:
      "EU261 和 UK261 使用固定赔偿档位。机票价格不会决定赔偿金额。",
    bandShort: "短途",
    bandMedium: "中途",
    bandLong: "长途",
    bandShortDescription: "1,500 公里以内的航班，通常是欧洲短途航线。",
    bandMediumDescription: "1,500 至 3,500 公里的航班，以及许多较长的欧洲航线。",
    bandLongDescription: "超过 3,500 公里的航班，包括许多洲际航线。",
    rulesHeading: "计算器会检查什么",
    rules: [
      "出发或到达是否属于 EU261、UK261、瑞士或 EEA 旅客权利范围。",
      "到达延误、取消、拒绝登机或错过转机是否达到法律门槛。",
      "从欧洲以外飞入欧洲时，实际承运航空公司是否影响适用范围。",
      "航空公司提出的特殊情况是否需要人工法律审核。",
    ],
    faqHeading: "FAQ：航班赔偿计算器",
    faq: [
      {
        question: "计算结果是最终决定吗？",
        answer:
          "不是。它是基于您输入信息的快速估算。真实索赔仍需核查文件、实际到达时间和航班 disruption 原因。",
      },
      {
        question: "可以检查取消航班吗？",
        answer:
          "可以。它支持延误、取消、拒绝登机以及同一预订中的错过转机。",
      },
      {
        question: "赔偿是按乘客计算吗？",
        answer:
          "通常是的。赔偿一般按每位乘客计算，而不是按一个订单计算。",
      },
      {
        question: "什么时候可能是 600 欧元？",
        answer:
          "通常是超过 3,500 公里的适用航线，并且满足延误或取消条件时。",
      },
    ],
    relatedHeading: "相关页面",
    related: [
      { label: "航班延误", href: "/zh/delayed-flight", description: "到达延误 3 小时以上的权利。" },
      { label: "航班取消", href: "/zh/cancelled-flight", description: "航空公司取消航班时的规则。" },
      { label: "Blog", href: "/zh/blog", description: "EU261、航空公司和航线指南。" },
    ],
    finalCtaTitle: "提交前先估算赔偿",
    finalCtaText:
      "先用计算器检查，再在案件看起来符合条件时继续到 ClaimWinger。",
    finalCtaLabel: "打开计算器",
  },
};

export function LocalizedCalculatorPage({ locale }: { locale: Exclude<CalculatorLocaleCode, "pl"> }) {
  const copy = pageCopies[locale];
  const canonicalUrl = `https://problemlot.com${copy.urlPath}`;
  const calculatorId = `${canonicalUrl}#calculator`;
  const faqId = `${canonicalUrl}#faq`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "@id": calculatorId,
        name: copy.heading,
        applicationCategory: "FinanceApplication",
        operatingSystem: "Web",
        url: canonicalUrl,
        inLanguage: copy.ogLocale.replace("_", "-"),
        description: copy.description,
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "EUR",
        },
        publisher: {
          "@type": "Organization",
          name: "ProblemLot.com",
          url: "https://problemlot.com",
        },
      },
      {
        "@type": "FAQPage",
        "@id": faqId,
        mainEntity: copy.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "ProblemLot.com",
            item: "https://problemlot.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: copy.heading,
            item: canonicalUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <SEO
        title={copy.title}
        description={copy.description}
        url={canonicalUrl}
        canonicalUrl={canonicalUrl}
        locale={copy.ogLocale}
        language={copy.language}
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950">
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto mb-10 max-w-4xl text-center">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 dark:border-blue-900 dark:bg-blue-950/40 dark:text-blue-200">
                <ShieldCheck className="h-4 w-4" />
                {copy.eyebrow}
              </div>
              <h1 className="text-4xl font-black tracking-tight text-slate-950 dark:text-white md:text-6xl">
                {copy.heading}
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                {copy.intro}
              </p>
            </div>

            <div id="calculator" className="scroll-mt-24">
              <FlightCompensationCalculator locale={locale} />
            </div>
            <p className="mx-auto mt-5 max-w-3xl text-center text-sm leading-6 text-slate-600 dark:text-slate-300">
              {copy.afterCalculator}
            </p>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white/80 px-4 py-16 backdrop-blur dark:border-slate-800 dark:bg-slate-950/70 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-slate-950 dark:text-white">
                {copy.bandsHeading}
              </h2>
              <p className="mt-3 text-slate-600 dark:text-slate-300">
                {copy.bandsDescription}
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {[
                ["250 €", copy.bandShort, copy.bandShortDescription, "≤ 1,500 km"],
                ["400 €", copy.bandMedium, copy.bandMediumDescription, "1,500-3,500 km"],
                ["600 €", copy.bandLong, copy.bandLongDescription, "> 3,500 km"],
              ].map(([amount, title, description, range]) => (
                <Card key={amount} className="p-6 text-center shadow-sm">
                  <Euro className="mx-auto mb-4 h-10 w-10 text-blue-700 dark:text-blue-300" />
                  <div className="text-5xl font-black text-slate-950 dark:text-white">
                    {amount}
                  </div>
                  <div className="mt-4 flex items-center justify-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
                    <Ruler className="h-4 w-4" />
                    {range}
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-slate-950 dark:text-white">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <h2 className="text-3xl font-bold text-slate-950 dark:text-white">
                {copy.rulesHeading}
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {copy.rules.map((rule) => (
                <Card key={rule} className="p-5">
                  <div className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-700 dark:text-blue-300" />
                    <p className="text-sm leading-6 text-slate-700 dark:text-slate-300">{rule}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="bg-slate-50 px-4 py-16 dark:bg-slate-900/70 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-3xl font-bold text-slate-950 dark:text-white">
              {copy.faqHeading}
            </h2>
            <div className="space-y-4">
              {copy.faq.map((item) => (
                <Card key={item.question} className="p-6">
                  <h3 className="mb-2 text-lg font-bold text-slate-950 dark:text-white">
                    {item.question}
                  </h3>
                  <p className="leading-7 text-slate-600 dark:text-slate-300">
                    {item.answer}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
              <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
                {copy.relatedHeading}
              </h2>
              <a
                href="#calculator"
                className="inline-flex items-center gap-2 rounded-full bg-blue-700 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800"
              >
                {copy.finalCtaLabel}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {copy.related.map((link) => (
                <Link key={link.href} href={link.href}>
                  <Card className="h-full p-5 transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-lg dark:hover:border-blue-700">
                    <h3 className="font-bold text-slate-950 dark:text-white">{link.label}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                      {link.description}
                    </p>
                  </Card>
                </Link>
              ))}
            </div>

            <Card className="mt-8 border-blue-200 bg-blue-50 p-8 text-center dark:border-blue-900 dark:bg-blue-950/20">
              <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
                {copy.finalCtaTitle}
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
                {copy.finalCtaText}
              </p>
              <a
                href="#calculator"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-blue-700 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-800"
              >
                {copy.finalCtaLabel}
                <ArrowRight className="h-4 w-4" />
              </a>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
}
