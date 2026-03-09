export interface BlogArticle {
  id?: string;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  publishDate?: string;
  readTime: string;
  category: string;
  featured?: boolean;
  color?: string;
}

export const blogArticles: BlogArticle[] = [
  {
    title: "Odszkodowanie LOT Polish Airlines — kompletny przewodnik 2025",
    slug: "odszkodowanie-lot-polish-airlines",
    excerpt: "Wszystko o odszkodowaniach od LOT: kwoty, procedury, przykłady. Kiedy należy się 250€-600€ i jak to uzyskać?",
    date: "2025-01-10",
    readTime: "9 min",
    category: "LOT Polish Airlines",
    color: "indigo",
    featured: true
  },
  {
    title: "Odszkodowanie Ryanair z Polski — kompletny przewodnik 2025",
    slug: "odszkodowanie-ryanair-polska",
    excerpt: "Kompleksowy przewodnik po odszkodowaniach Ryanair dla polskich pasażerów. 250€-600€ za opóźnienia i odwołania.",
    date: "2025-01-12",
    readTime: "8 min",
    category: "Ryanair",
    color: "blue",
    featured: true
  },
  {
    title: "Prawa pasażera LOT Polish Airlines — co gwarantuje WE 261/2004?",
    slug: "prawa-pasazera-lot-polish-airlines",
    excerpt: "Poznaj wszystkie prawa pasażera LOT: odszkodowania, opieka, zwroty, hotel. Kompletny przewodnik rozporządzenia WE 261/2004.",
    date: "2025-01-14",
    readTime: "8 min",
    category: "LOT Polish Airlines",
    color: "purple",
    featured: true
  },
  {
    title: "LOT odmówił odszkodowania — co zrobić dalej?",
    slug: "lot-odmowil-odszkodowania",
    excerpt: "Nie rezygnuj! 91% skuteczności odzyskania odszkodowania po odmowie LOT. Sprawdzone metody i najczęstsze powody odmowy.",
    date: "2025-01-15",
    readTime: "7 min",
    category: "LOT Polish Airlines",
    color: "red",
    featured: true
  },
  {
    title: "Ryanair odmówił odszkodowania — jak skutecznie walczyć?",
    slug: "ryanair-odmowil-odszkodowania",
    excerpt: "87% skuteczności odzyskania po odmowie Ryanair. Top 5 powodów odmowy i jak je kwestionować krok po kroku.",
    date: "2025-01-18",
    readTime: "8 min",
    category: "Ryanair",
    color: "red",
    featured: true
  },
  {
    title: "Prawa pasażera Ryanair — co gwarantuje WE 261/2004?",
    slug: "prawa-pasazera-ryanair",
    excerpt: "Poznaj wszystkie prawa pasażera Ryanair: odszkodowania 250€-600€, prawo do opieki, zwroty kosztów, hotel. Kompletny przewodnik WE 261/2004.",
    date: "2025-01-19",
    readTime: "7 min",
    category: "Ryanair",
    color: "red",
    featured: true
  },
  {
    title: "Odszkodowanie Wizz Air z Polski — kompletny przewodnik 2025",
    slug: "odszkodowanie-wizz-air-polska",
    excerpt: "Sprawdź jak uzyskać 250-600 € odszkodowania od Wizz Air za opóźniony lub odwołany lot. Procedury, stawki, prawa pasażera. 91% skuteczności.",
    date: "2025-01-20",
    readTime: "8 min",
    category: "Wizz Air",
    color: "purple",
    featured: true
  },
  {
    title: "Wizz Air odmówił odszkodowania — co zrobić?",
    slug: "wizz-air-odmowil-odszkodowania",
    excerpt: "Wizz Air odmówił wypłaty? 76% pasażerów którzy walczą ostatecznie wygrywa. Sprawdzone metody odzyskania odszkodowania.",
    date: "2025-01-21",
    readTime: "12 min",
    category: "Wizz Air",
    featured: true,
    color: "purple"
  },
  {
    title: "Odszkodowanie Lufthansa dla polskich pasażerów — kompletny przewodnik 2025",
    slug: "odszkodowanie-lufthansa-polska",
    excerpt: "Sprawdź jak uzyskać 250-600 € odszkodowania od Lufthansa za opóźniony lub odwołany lot. Procedury, stawki, prawa pasażera.",
    date: "2025-01-25",
    readTime: "10 min",
    category: "Lufthansa",
    featured: true,
    color: "yellow"
  },
  {
    title: "Odszkodowanie easyJet dla polskich pasażerów — kompletny przewodnik 2025",
    slug: "odszkodowanie-easyjet-polska",
    excerpt: "Sprawdź jak uzyskać 250-600 € odszkodowania od easyJet za opóźniony lub odwołany lot. Procedury, stawki, prawa pasażera.",
    date: "2025-01-22",
    readTime: "9 min",
    category: "easyJet",
    featured: true,
    color: "orange"
  },
  {
    title: "Enter Air odszkodowanie — czarter a prawa pasażera WE 261/2004",
    slug: "enter-air-odszkodowanie-czarter",
    excerpt: "TAK, czarter też podlega WE 261/2004! Sprawdź jak uzyskać 250-600 € odszkodowania za lot wakacyjny Enter Air. Przewodnik dla pasażerów.",
    date: "2025-01-23",
    readTime: "11 min",
    category: "Enter Air",
    featured: true,
    color: "teal"
  },
  {
    title: "Nadzwyczajne okoliczności — kiedy linie NIE muszą płacić odszkodowania?",
    slug: "nadzwyczajne-okolicznosci-odszkodowanie",
    excerpt: "Poznaj prawdę o nadzwyczajnych okolicznościach. Kiedy linie faktycznie nie muszą płacić i jak weryfikować ich wymówki. 68% odmów to fałszywe powołanie się na WE 261/2004.",
    date: "2025-01-24",
    readTime: "10 min",
    category: "Prawo lotnicze",
    featured: true,
    color: "red"
  },
  {
    title: "Przedawnienie roszczeń lotniczych — ile czasu masz na dochodzenie odszkodowania?",
    slug: "przedawnienie-roszczen-lotniczych",
    excerpt: "Sprawdź kiedy przedawniają się roszczenia lotnicze w Polsce. 3 lata czy 6? WE 261 vs Montreal Convention. Kompletny przewodnik.",
    date: "2025-01-26",
    readTime: "12 min",
    category: "Prawo lotnicze",
    featured: true,
    color: "amber"
  },
  {
    title: "Jak złożyć wniosek o odszkodowanie — krok po kroku",
    slug: "jak-zlozyc-wniosek-odszkodowanie",
    excerpt: "Kompletny przewodnik jak samodzielnie złożyć reklamację do linii lotniczych. Wzory pism, dokumenty, terminy. 91% skuteczności.",
    date: "2025-01-27",
    readTime: "11 min",
    category: "Prawo lotnicze",
    featured: true,
    color: "green"
  },
  {
    title: "Najczęstsze błędy przy składaniu reklamacji — jak ich unikać?",
    slug: "najczestsze-bledy-reklamacja",
    excerpt: "TOP 10 błędów które niszczą Twoje szanse na odszkodowanie. Sprawdź jak ich uniknąć i zwiększyć skuteczność do 91%.",
    date: "2025-01-28",
    readTime: "10 min",
    category: "Prawo lotnicze",
    featured: true,
    color: "red"
  },
  {
    title: "Co zrobić na lotnisku gdy lot jest opóźniony?",
    slug: "co-zrobic-na-lotnisku-opoznienie",
    excerpt: "Twój lot jest opóźniony TERAZ? Zobacz co zrobić na miejscu: dokumentacja, opieka, prawa, hotel. Pilny przewodnik akcji.",
    date: "2025-01-29",
    readTime: "7 min",
    category: "Prawo lotnicze",
    featured: true,
    color: "blue"
  },
  {
    title: "Utracona przesiadka — kiedy odszkodowanie i kto płaci?",
    slug: "utracona-przesiadka-odszkodowanie",
    excerpt: "Straciłeś przesiadkę przez opóźnienie pierwszego lotu? Sprawdź kiedy należy się 250-600 € i która linia płaci (ważne: jedna rezerwacja!).",
    date: "2025-01-30",
    readTime: "9 min",
    category: "Prawo lotnicze",
    featured: true,
    color: "purple"
  },
  {
    slug: "lotnisko-modlin-odszkodowanie",
    title: "Lotnisko Warszawa Modlin — odszkodowanie za opóźniony lot [2025]",
    excerpt: "Twój lot z Modlina jest opóźniony? Sprawdź jak uzyskać 250-600 € odszkodowania od Ryanair i innych linii. Kompletny przewodnik.",
    date: "2025-01-31",
    readTime: "9 min",
    category: "Lotniska",
    featured: true,
    color: "blue"
  },
  {
    slug: "lotnisko-katowice-odszkodowanie",
    title: "Lotnisko Katowice Pyrzowice — odszkodowanie za opóźniony lot [2025]",
    excerpt: "Lot z Katowic opóźniony lub odwołany? Sprawdź jak uzyskać 250-600 € odszkodowania. Wizz Air, Ryanair - kompletny przewodnik.",
    date: "2025-02-01",
    readTime: "9 min",
    category: "Lotniska",
    featured: true,
    color: "purple"
  },
  {
    slug: "lotnisko-gdansk-odszkodowanie",
    title: "Lotnisko Gdańsk Rębiechowo — odszkodowanie za opóźniony lot [2025]",
    excerpt: "Twój lot z Gdańska jest opóźniony lub odwołany? Sprawdź jak uzyskać 250-600 € odszkodowania. Wizz Air, Ryanair, LOT - kompletny przewodnik.",
    date: "2025-02-02",
    readTime: "9 min",
    category: "Lotniska",
    featured: true,
    color: "blue"
  },
  {
    slug: "lotnisko-wroclaw-odszkodowanie",
    title: "Lotnisko Wrocław Strachowice — odszkodowanie za opóźniony lot [2025]",
    excerpt: "Twój lot z Wrocławia jest opóźniony lub odwołany? Sprawdź jak uzyskać 250-600 € odszkodowania. Ryanair, Wizz Air, LOT - kompletny przewodnik.",
    date: "2025-02-03",
    readTime: "9 min",
    category: "Lotniska",
    featured: true,
    color: "green"
  },
  {
    slug: "lot-waw-jfk-opoznienie-600-euro",
    title: "LOT WAW–JFK opóźniony — 600 € odszkodowania za Nowy Jork",
    excerpt: "Trasa Warszawa–Nowy Jork LOT opóźniona >3h? Należy Ci się 600 € odszkodowania. Sprawdź jak je uzyskać i najczęstsze powody opóźnień.",
    date: "2025-02-04",
    readTime: "8 min",
    category: "LOT Polish Airlines",
    featured: true,
    color: "indigo"
  },
  {
    slug: "lot-waw-ord-chicago-odszkodowanie",
    title: "LOT WAW–ORD Chicago opóźniony — 600 € odszkodowania",
    excerpt: "Lot Warszawa–Chicago LOT opóźniony >3h? Sprawdź jak uzyskać 600 € odszkodowania i poznaj najczęstsze problemy na tej trasie.",
    date: "2025-02-05",
    readTime: "8 min",
    category: "LOT Polish Airlines",
    featured: true,
    color: "indigo"
  },
  {
    slug: "lot-waw-tlv-najczesciej-opozniana-trasa",
    title: "LOT WAW–TLV Tel Awiw — najczęściej opóźniana trasa i 400 € odszkodowania",
    excerpt: "Trasa Warszawa–Tel Awiw LOT znana z opóźnień. Sprawdź dlaczego i jak uzyskać 400 € odszkodowania za >3h opóźnienia.",
    date: "2025-02-06",
    readTime: "8 min",
    category: "LOT Polish Airlines",
    featured: true,
    color: "indigo"
  },
  {
    slug: "lot-waw-nrt-tokio-odszkodowanie",
    title: "LOT WAW–NRT Tokio opóźniony — 600 € odszkodowania",
    excerpt: "Lot Warszawa–Tokio LOT opóźniony >3h? Należy Ci się 600 € odszkodowania. Sprawdź procedury i najczęstsze problemy.",
    date: "2025-02-07",
    readTime: "8 min",
    category: "LOT Polish Airlines",
    featured: true,
    color: "indigo"
  },
  {
    slug: "lot-waw-yyz-toronto-odszkodowanie",
    title: "LOT WAW–YYZ Toronto opóźniony — 600 € odszkodowania",
    excerpt: "Trasa Warszawa–Toronto LOT opóźniona >3h? Sprawdź jak uzyskać 600 € odszkodowania i poznaj specyfikę tej trasy.",
    date: "2025-02-08",
    readTime: "8 min",
    category: "LOT Polish Airlines",
    featured: true,
    color: "indigo"
  },
  {
    slug: "lot-usterka-techniczna-nadzwyczajna-okolicznosc",
    title: "LOT usterka techniczna — czy to nadzwyczajna okoliczność?",
    excerpt: "LOT odmówił wypłaty powołując się na usterkę techniczną? 78% takich odmów jest niezgodnych z prawem. Sprawdź kiedy należy się odszkodowanie.",
    date: "2025-02-09",
    readTime: "9 min",
    category: "LOT Polish Airlines",
    featured: true,
    color: "red"
  },
  {
    slug: "lot-strajk-kiedy-odszkodowanie",
    title: "LOT strajk — kiedy należy się odszkodowanie i kiedy nie?",
    excerpt: "Twój lot LOT odwołany z powodu strajku? Sprawdź kiedy należy się 250-600 € odszkodowania (strajk LOT TAK, ATC/lotniska NIE).",
    date: "2025-02-10",
    readTime: "10 min",
    category: "LOT Polish Airlines",
    featured: true,
    color: "red"
  },
  {
    slug: "lot-missed-connection-warszawa-chopin",
    title: "LOT missed connection na Chopinie — kto płaci odszkodowanie?",
    excerpt: "Straciłeś przesiadkę na Warszawie przez opóźnienie LOT? Sprawdź kiedy należy się 250-600 € i jak udowodnić jednolitą rezerwację.",
    date: "2025-02-11",
    readTime: "10 min",
    category: "LOT Polish Airlines",
    featured: true,
    color: "purple"
  },
  {
    slug: "lot-overbooking-odmowa-wejscia",
    title: "LOT overbooking — odmowa wejścia na pokład i 250-600 € odszkodowania",
    excerpt: "LOT odmówił Ci wejścia na pokład z powodu overbookingu? Należy Ci się natychmiastowe odszkodowanie 250-600 € + zwrot/przekierowanie. Sprawdź procedury.",
    date: "2025-02-12",
    readTime: "10 min",
    category: "LOT Polish Airlines",
    featured: true,
    color: "red"
  },
  {
    slug: "lot-zmiana-rozkladu-prawa-pasazera",
    title: "LOT zmienił rozkład lotu — prawa pasażera i odszkodowanie",
    excerpt: "LOT zmienił godzinę Twojego lotu? Sprawdź kiedy należy się zwrot kosztów, przekierowanie lub 250-600 € odszkodowania (zmiana >14 dni vs <14 dni).",
    date: "2025-02-13",
    readTime: "8 min",
    category: "LOT Polish Airlines",
    featured: true,
    color: "amber"
  },
  {
    slug: "lot-downgrade-nizszej-klasy-zwrot",
    title: "LOT downgrade — zwrot różnicy za niższą klasę + odszkodowanie?",
    excerpt: "Kupiłeś biznes, a dostałeś ekonomiczną? LOT musi zwrócić 30-75% ceny biletu + ewentualnie odszkodowanie za opóźnienie. Sprawdź procedury.",
    date: "2025-02-14",
    readTime: "9 min",
    category: "LOT Polish Airlines",
    featured: true,
    color: "purple"
  },
  {
    slug: "lot-opoznienie-nocne-hotel-posilki",
    title: "LOT opóźnienie nocne — hotel, posiłki i transport",
    excerpt: "Twój lot LOT opóźniony na noc? Sprawdź co Ci przysługuje: hotel 3-4★, posiłki, transport, komunikacja + 250-600 € odszkodowania za >3h.",
    date: "2025-02-15",
    readTime: "8 min",
    category: "LOT Polish Airlines",
    featured: true,
    color: "blue"
  },
  {
    slug: "lot-miles-more-bilet-premiowy-odszkodowanie",
    title: "LOT Miles & More — czy bilet premiowy ma prawo do odszkodowania?",
    excerpt: "Leciałeś biletem premiowym Miles & More i lot się opóźnił? TAK, przysługuje 250-600 € odszkodowania! Sprawdź jak je uzyskać.",
    date: "2025-02-16",
    readTime: "8 min",
    category: "LOT Polish Airlines",
    featured: true,
    color: "indigo"
  },
  {
    slug: "lot-codeshare-lufthansa-kto-placi",
    title: "LOT codeshare z Lufthansą — kto płaci odszkodowanie?",
    excerpt: "Lot wykonany przez Lufthansę ale sprzedany jako LOT (lub odwrotnie)? Sprawdź kto płaci odszkodowanie 250-600 € w przypadku opóźnienia.",
    date: "2025-02-17",
    readTime: "10 min",
    category: "LOT Polish Airlines",
    featured: true,
    color: "yellow"
  },
  {
    slug: "lot-bilet-ota-esky-kiwi-odszkodowanie",
    title: "LOT bilet przez OTA (eSky, Kiwi) — czy wpływa na odszkodowanie?",
    excerpt: "Kupiłeś bilet LOT przez eSky, Kiwi, Booking? Sprawdź czy to wpływa na Twoje prawo do odszkodowania 250-600 € i jak je odzyskać.",
    date: "2025-02-18",
    readTime: "10 min",
    category: "LOT Polish Airlines",
    featured: true,
    color: "teal"
  },
  {
    slug: "lot-grupowa-rezerwacja-roszczenie",
    title: "LOT grupowa rezerwacja — zbiorowe roszczenie odszkodowawcze",
    excerpt: "Leciałeś LOT w grupie (rodzina, wycieczka, firma)? Sprawdź jak złożyć zbiorowe roszczenie o odszkodowanie 250-600 € i czy każdy pasażer dostaje pełną kwotę.",
    date: "2025-02-19",
    readTime: "9 min",
    category: "LOT Polish Airlines",
    featured: true,
    color: "green"
  },
  {
    slug: "lot-b2b-odszkodowanie-lot-sluzbowy",
    title: "LOT B2B — odszkodowanie za lot służbowy (kto dostaje pieniądze?)",
    excerpt: "Leciałeś LOT służbowo, firma płaciła za bilet? Sprawdź kto dostaje odszkodowanie 250-600 € (pracownik czy pracodawca) i jak je uzyskać.",
    date: "2025-02-20",
    readTime: "8 min",
    category: "LOT Polish Airlines",
    featured: true,
    color: "amber"
  },
  {
    title: "Odwołany lot — historia pasażera",
    slug: "odwolany-lot-historia-pasazera",
    excerpt: "Prawdziwa historia pasażera, który wywalczył odszkodowanie po odwołaniu lotu. Zobacz jak to zrobić krok po kroku.",
    date: "2025-01-15",
    readTime: "5 min",
    category: "Case Studies",
    color: "purple"
  }
];

export const getCategoryLabel = (category: BlogArticle["category"]): string => {
  const labels: Record<string, string> = {
    "LOT Polish Airlines": "LOT Polish Airlines",
    "Ryanair": "Ryanair",
    "Case Studies": "Case Studies",
    "airline": "Linie lotnicze",
    "airport": "Lotniska",
    "foundation": "Podstawy"
  };
  return labels[category] || category;
};

export const getArticlesByCategory = (category: BlogArticle["category"] | "all"): BlogArticle[] => {
  if (category === "all") return blogArticles;
  return blogArticles.filter(article => article.category === category);
};

export const getFeaturedArticles = (): BlogArticle[] => {
  return blogArticles.filter(article => article.featured);
};