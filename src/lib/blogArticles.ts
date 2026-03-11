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
  // Oryginalne artykuły (1-20)
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
    title: "Odwołany lot — historia pasażera",
    slug: "odwolany-lot-historia-pasazera",
    excerpt: "Prawdziwa historia pasażera, który wywalczył odszkodowanie po odwołaniu lotu. Zobacz jak to zrobić krok po kroku.",
    date: "2025-01-15",
    readTime: "5 min",
    category: "Case Studies",
    color: "purple"
  },
  
  // Nowe artykuły LOT (21-45)
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
    slug: "zgubiony-zniszczony-bagaz-lotniczy-odszkodowanie",
    title: "Zgubiony lub zniszczony bagaż – odszkodowanie i prawa pasażera",
    excerpt: "Co zrobić gdy linia zgubiła lub zniszczyła Twój bagaż? Sprawdź limity zwrotów i terminy zgłoszeń według Konwencji Montrealskiej.",
    date: "2025-02-21",
    readTime: "7 min",
    category: "Prawo lotnicze",
    featured: false,
    color: "purple"
  },
  {
    slug: "odszkodowanie-za-lot-z-dzieckiem-infant",
    title: "Odszkodowanie za lot z dzieckiem (infant) – czy niemowlę dostaje pieniądze?",
    excerpt: "Czy dziecko bez osobnego miejsca (infant) ma prawo do odszkodowania 250–600 EUR? Wyjaśniamy przepisy UE 261/2004.",
    date: "2025-02-22",
    readTime: "6 min",
    category: "Prawo lotnicze",
    featured: false,
    color: "purple"
  },
  {
    slug: "loty-wielka-brytania-brexit-uk261-odszkodowanie",
    title: "Loty do Wielkiej Brytanii po Brexicie – UK261 vs EU261",
    excerpt: "Co się zmieniło po wyjściu UK z UE? Sprawdź różnice między UK261 a EU261 i kiedy masz prawo do odszkodowania za lot do Londynu.",
    date: "2025-02-23",
    readTime: "7 min",
    category: "Prawo lotnicze",
    featured: false,
    color: "purple"
  },
  {
    slug: "loty-poza-ue-turcja-egipt-odszkodowanie-eu261",
    title: "Loty poza UE (Turcja, Egipt, Tunezja) – czy przysługuje odszkodowanie?",
    excerpt: "Wakacyjny lot do Turcji lub Egiptu opóźniony? Sprawdź kiedy EU261 obowiązuje na lotach do krajów spoza Unii Europejskiej.",
    date: "2025-02-24",
    readTime: "7 min",
    category: "Prawo lotnicze",
    featured: false,
    color: "purple"
  },
  {
    slug: "strajk-kontrolerow-lotow-atc-odszkodowanie",
    title: "Strajk kontrolerów lotów (ATC) a odszkodowanie – prawa pasażera",
    excerpt: "Czy za opóźniony lub odwołany lot przez strajk kontrolerów ruchu lotniczego przysługuje odszkodowanie? Sprawdź różnicę między strajkiem ATC a strajkiem linii lotniczej.",
    date: "2025-02-23",
    readTime: "8 min",
    category: "Prawo lotnicze",
    featured: false,
    color: "purple"
  },
  {
    slug: "voucher-za-opozniony-lot-czy-brac-gotowke",
    title: "Voucher od linii lotniczej czy gotówka – co wybrać przy odszkodowaniu?",
    excerpt: "Linia lotnicza oferuje Ci voucher zamiast pieniędzy za opóźniony lot? Sprawdź, dlaczego gotówka jest lepsza i czy linia może Cię zmuszać do przyjęcia bonu.",
    date: "2025-02-24",
    readTime: "9 min",
    category: "Prawo lotnicze",
    featured: false,
    color: "purple"
  },
  {
    slug: "ile-odszkodowania-opozniony-lot",
    title: "Ile odszkodowania za opóźniony lot? Tabela kwot 250-600 €",
    excerpt: "Sprawdź dokładnie ile odszkodowania możesz dostać za opóźniony lot. Kompletna tabela: 250 €, 400 € lub 600 € w zależności od dystansu.",
    date: "2025-02-25",
    readTime: "8 min",
    category: "Prawo lotnicze",
    featured: true,
    color: "blue"
  },
  {
    slug: "jak-dlugo-czeka-odszkodowanie-za-lot",
    title: "Jak długo czeka się na odszkodowanie za lot?",
    excerpt: "Sprawdź ile czasu zajmuje wypłata odszkodowania od linii lotniczych. 2-12 miesięcy? Poznaj rzeczywiste terminy i jak je przyspieszyć.",
    date: "2025-02-25",
    readTime: "9 min",
    category: "Prawo lotnicze",
    featured: true,
    color: "purple"
  },
  {
    slug: "linia-nie-odpowiada-na-reklamacje-co-robic",
    title: "Co zrobić gdy linia lotnicza nie odpowiada na reklamację?",
    excerpt: "Linia lotnicza ignoruje Twoją reklamację? Sprawdź 3 skuteczne metody wymuszenia odpowiedzi i wypłaty odszkodowania.",
    date: "2025-02-25",
    readTime: "10 min",
    category: "Prawo lotnicze",
    featured: true,
    color: "red"
  },
  {
    slug: "odszkodowanie-2-godzinne-opoznienie",
    title: "Czy mam prawo do odszkodowania za 2-godzinne opóźnienie?",
    excerpt: "2 godziny opóźnienia to za mało na odszkodowanie 250-600 €, ale przysługują Ci inne prawa: posiłki, napoje, komunikacja. Sprawdź co Ci się należy.",
    date: "2025-02-25",
    readTime: "7 min",
    category: "Prawo lotnicze",
    featured: false,
    color: "amber"
  },
  {
    slug: "jak-dlugo-na-reklamacje-opozniony-lot",
    title: "Jak długo mam na złożenie reklamacji za opóźniony lot?",
    excerpt: "Sprawdź dokładne terminy przedawnienia roszczeń lotniczych w Polsce. 3 lata czy 6? Kiedy liczyć termin? Kompletny przewodnik.",
    date: "2025-02-25",
    readTime: "8 min",
    category: "Prawo lotnicze",
    featured: false,
    color: "green"
  },
  {
    slug: "nadzwyczajne-okolicznosci-lotnictwo-co-to",
    title: "Co to są nadzwyczajne okoliczności w lotnictwie?",
    excerpt: "Linia powołuje się na nadzwyczajne okoliczności? Sprawdź co to naprawdę oznacza i kiedy to tylko wymówka aby nie płacić odszkodowania.",
    date: "2025-02-25",
    readTime: "6 min",
    category: "Prawo lotnicze",
    featured: false,
    color: "red"
  },
  {
    slug: "we261-poza-ue-czy-obowiazuje",
    title: "Czy rozporządzenie WE 261 obowiązuje poza UE?",
    excerpt: "Lot do Turcji, Egiptu, USA opóźniony? Sprawdź kiedy WE 261/2004 obowiązuje na lotach poza Unią Europejską i kiedy masz prawo do odszkodowania.",
    date: "2025-02-25",
    readTime: "5 min",
    category: "Prawo lotnicze",
    featured: false,
    color: "blue"
  },
  {
    slug: "reklamacja-lot-sprzed-3-lat",
    title: "Czy mogę reklamować lot sprzed 3 lat?",
    excerpt: "TAK! Masz 3 lata (lub 6 w niektórych przypadkach) na złożenie reklamacji za opóźniony lub odwołany lot. Sprawdź dokładne terminy i procedury.",
    date: "2025-02-25",
    readTime: "4 min",
    category: "Prawo lotnicze",
    featured: false,
    color: "green"
  },
  {
    slug: "ile-trwa-rozpatrzenie-reklamacji",
    title: "Ile trwa rozpatrzenie reklamacji przez linię lotniczą?",
    excerpt: "Sprawdź jak długo linia lotnicza ma na odpowiedź na reklamację o odszkodowanie za opóźniony lub odwołany lot.",
    date: "2025-02-25",
    readTime: "6 min",
    category: "Prawo lotnicze",
    featured: false,
    color: "purple"
  },
  {
    slug: "claimwinger-airhelp-flightright-porownanie",
    title: "ClaimWinger vs AirHelp vs Flightright – porównanie 2026",
    excerpt: "Niezależne porównanie firm odszkodowawczych. Sprawdź kto oferuje najlepsze warunki, prowizje i skuteczność w 2026 roku.",
    date: "2025-02-25",
    readTime: "8 min",
    category: "Prawo lotnicze",
    featured: true,
    color: "indigo"
  },
  {
    slug: "ryanair-usterka-techniczna-zakwestionowac-odmowe",
    title: "Ryanair usterka techniczna — jak zakwestionować odmowę? [2026]",
    excerpt: "Ryanair odmówił wypłaty, powołując się na usterkę techniczną? Dowiedz się, jak skutecznie zakwestionować odmowę i wygrać sprawę o 250-600 €.",
    date: "2025-02-26",
    readTime: "8 min",
    category: "Ryanair",
    featured: true,
    color: "red"
  },
  {
    slug: "ryanair-strajk-odszkodowanie-kiedy",
    title: "Ryanair strajk — kiedy należy się odszkodowanie? [2026]",
    excerpt: "Strajk załogi Ryanair odwołał Twój lot? Sprawdź, kiedy przysługuje odszkodowanie (strajk Ryanair vs ATC), a kiedy linia legalnie odmówi wypłaty.",
    date: "2025-02-26",
    readTime: "7 min",
    category: "Ryanair",
    featured: true,
    color: "red"
  },
  {
    slug: "ryanair-overbooking-odmowa-polska",
    title: "Ryanair overbooking — odmowa wejścia na pokład z Polski [2026]",
    excerpt: "Ryanair odmówił Ci wejścia na pokład z powodu overbookingu? Należy Ci się natychmiastowe odszkodowanie 250-600 € + zwrot/przekierowanie.",
    date: "2025-02-26",
    readTime: "8 min",
    category: "Ryanair",
    featured: true,
    color: "red"
  },
  {
    slug: "ryanair-missed-connection-wlasna-przesiadka",
    title: "Ryanair missed connection — odpowiedzialność przy własnej przesiadce [2026]",
    excerpt: "Straciłeś przesiadkę przez opóźnienie Ryanair? Sprawdź kiedy należy się odszkodowanie 250-600 € (jednolita rezerwacja vs osobne bilety) i kto płaci.",
    date: "2025-02-26",
    readTime: "10 min",
    category: "Ryanair",
    featured: true,
    color: "red"
  },
  {
    slug: "ryanair-voucher-zamiast-gotowki-wymusic",
    title: "Ryanair voucher zamiast gotówki — jak wymusić wypłatę pieniędzy? [2026]",
    excerpt: "Ryanair oferuje Ci voucher zamiast pieniędzy za opóźniony lot? Sprawdź jak odmówić i wymusić wypłatę gotówki 250-600 €. Szczegółowy przewodnik prawny.",
    date: "2025-02-26",
    readTime: "9 min",
    category: "Ryanair",
    featured: true,
    color: "red"
  },
  {
    slug: "ryanair-odwolanie-14-dni-przed-lotem",
    title: "Ryanair odwołanie 14 dni przed lotem — jakie masz opcje? [2026]",
    excerpt: "Ryanair odwołał Twój lot 14 dni (lub wcześniej) przed odlotem? Sprawdź czy należy się odszkodowanie i jakie masz opcje (zwrot, przekierowanie).",
    date: "2025-02-26",
    readTime: "9 min",
    category: "Ryanair",
    featured: true,
    color: "red"
  },
  {
    slug: "ryanair-odwolanie-14-dni-przed-lotem",
    title: "Ryanair odwołanie 14 dni przed lotem — jakie masz opcje?",
    excerpt: "Co zrobić gdy Ryanair odwołuje lot na 2 tygodnie przed wylotem? Sprawdź opcje zwrotu i alternatywnego lotu.",
    date: "2025-02-25",
    readTime: "8 min",
    category: "Ryanair",
    featured: true,
    color: "red"
  },
  {
    slug: "ryanair-modlin-chopin-procedury-reklamacyjne",
    title: "Ryanair Modlin vs Chopin — różnice w procedurach reklamacyjnych",
    excerpt: "Czy lotnisko startu wpływa na procedurę reklamacyjną? Poznaj różnice między Modlinem a Chopinem.",
    date: "2025-02-25",
    readTime: "9 min",
    category: "Ryanair",
    featured: true,
    color: "red"
  },
  {
    slug: "ryanair-opoznienie-najgorsze-trasy-polska",
    title: "Ryanair opóźnienie — najgorsze trasy z Polski 2026",
    excerpt: "Ranking tras Ryanair z największą liczbą opóźnień. Sprawdź które połączenia są najbardziej problematyczne.",
    date: "2025-02-25",
    readTime: "10 min",
    category: "Ryanair",
    featured: true,
    color: "red"
  },
  {
    slug: "pozew-sadowy-ryanair-drobne-roszczenia",
    title: "Pozew sądowy Ryanair — europejskie postępowanie w sprawie drobnych roszczeń",
    excerpt: "Jak pozwać Ryanair przez europejskie postępowanie w sprawie drobnych roszczeń? Przewodnik krok po kroku.",
    date: "2025-02-25",
    readTime: "11 min",
    category: "Prawo lotnicze",
    featured: true,
    color: "indigo"
  },
  {
    slug: "wizz-air-odwolany-lot-polska-prawa",
    title: "Wizz Air odwołany lot z Polski — prawa pasażera krok po kroku [2026]",
    excerpt: "Wizz Air odwołał Twój lot? Sprawdź dokładnie jakie masz prawa (250-600 € odszkodowania + zwrot/przekierowanie), terminy i jak skutecznie złożyć reklamację.",
    date: "2026-02-27",
    readTime: "9 min",
    category: "Wizz Air",
    featured: true,
    color: "purple"
  },
  {
    slug: "wizz-air-usterka-techniczna-nadzwyczajna",
    title: "Wizz Air usterka techniczna — czy to nadzwyczajna okoliczność? [2026]",
    excerpt: "Wizz Air odmówił wypłaty, powołując się na usterkę techniczną? 81% takich odmów jest niezgodnych z prawem. Sprawdź kiedy faktycznie należy się odszkodowanie.",
    date: "2026-02-27",
    readTime: "8 min",
    category: "Wizz Air",
    featured: true,
    color: "purple"
  },
  {
    slug: "wizz-air-overbooking-odmowa",
    title: "Wizz Air overbooking — odmowa wejścia na pokład [2026]",
    excerpt: "Wizz Air odmówił Ci wejścia na pokład z powodu overbookingu? Należy Ci się natychmiastowe odszkodowanie 250-600 € + zwrot/przekierowanie. Sprawdź procedury.",
    date: "2026-02-27",
    readTime: "8 min",
    category: "Wizz Air",
    featured: true,
    color: "purple"
  },
  {
    slug: "wizz-air-voucher-zamiast-gotowki",
    title: "Wizz Air voucher zamiast gotówki — jak wymusić wypłatę pieniędzy? [2026]",
    excerpt: "Wizz Air oferuje Ci voucher zamiast pieniędzy za opóźniony lot? Sprawdź jak odmówić i wymusić wypłatę gotówki 250-600 €. 87% skuteczności.",
    date: "2026-02-27",
    readTime: "10 min",
    category: "Wizz Air",
    featured: true,
    color: "purple"
  },
  {
    slug: "wizz-air-multipass-odszkodowanie",
    title: "Wizz Air Multipass — czy subskrypcja wpływa na odszkodowanie? [2026]",
    excerpt: "Leciałeś z Wizz Air Multipass i lot się opóźnił? Sprawdź czy subskrypcja wpływa na prawo do odszkodowania 250-600 €. Kompletny przewodnik prawny.",
    date: "2026-02-27",
    readTime: "9 min",
    category: "Wizz Air",
    featured: true,
    color: "purple"
  },
  {
    slug: "wizz-air-katowice-opoznienia-reklamacja",
    title: "Wizz Air Katowice — najczęstsze opóźnienia i jak reklamować [2026]",
    excerpt: "Twój lot Wizz Air z Katowic jest opóźniony? Sprawdź najczęstsze problemy na trasach z KTW i jak uzyskać odszkodowanie 250-600 €. Przewodnik reklamacyjny.",
    date: "2026-02-27",
    readTime: "9 min",
    category: "Wizz Air",
    featured: true,
    color: "purple"
  },
  {
    slug: "wizz-air-grupowa-rezerwacja-roszczenie",
    title: "Wizz Air grupowa rezerwacja — zbiorowe roszczenie odszkodowawcze [2026]",
    excerpt: "Leciałeś Wizz Air w grupie (rodzina, wycieczka, firma)? Sprawdź jak złożyć zbiorowe roszczenie o odszkodowanie 250-600 € i czy każdy pasażer dostaje pełną kwotę.",
    date: "2026-02-27",
    readTime: "9 min",
    category: "Wizz Air",
    featured: true,
    color: "purple"
  },
  {
    slug: "pozew-sadowy-wizz-air-polska",
    title: "Pozew sądowy Wizz Air Polska — jak skutecznie wyegzekwować?",
    excerpt: "Kompletny przewodnik europejskiego postępowania w sprawie drobnych roszczeń przeciwko Wizz Air. Jak samemu pozwać linię lotniczą online?",
    date: "2026-03-10",
    readTime: "12 min",
    category: "Wizz Air",
    featured: true,
    color: "purple"
  },
  {
    slug: "eurowings-odszkodowanie-polscy-pasazerowie",
    title: "Eurowings odszkodowanie dla polskich pasażerów — przewodnik 2026",
    excerpt: "Sprawdź, kiedy Eurowings musi wypłacić odszkodowanie do 600 € za opóźniony lub odwołany lot. Kompletny przewodnik prawny dla polskich pasażerów.",
    date: "2026-03-10",
    readTime: "8 min",
    category: "Linie lotnicze",
    featured: true,
    color: "blue"
  },
  {
    slug: "swiss-air-odszkodowanie-polska",
    title: "Swiss Air odszkodowanie z Polski — kiedy należy się €600?",
    excerpt: "Kompletny przewodnik: jak uzyskać 250-600 € odszkodowania od Swiss International Air Lines za opóźniony lub odwołany lot z/do Polski.",
    date: "2026-03-10",
    readTime: "9 min",
    category: "Linie lotnicze",
    featured: true,
    color: "blue"
  },
  {
    slug: "austrian-airlines-odszkodowanie-polska",
    title: "Austrian Airlines odszkodowanie z Polski — kiedy należy się €600?",
    excerpt: "Kompletny przewodnik: jak uzyskać 250-600 € odszkodowania od Austrian Airlines za opóźniony lub odwołany lot z/do Polski.",
    date: "2026-03-10",
    readTime: "9 min",
    category: "Linie lotnicze",
    featured: true,
    color: "blue"
  },
  {
    slug: "british-airways-odszkodowanie-polska",
    title: "British Airways odszkodowanie z Polski — kiedy należy się €600?",
    excerpt: "Kompletny przewodnik: jak uzyskać 250-600 € odszkodowania od British Airways za opóźniony lub odwołany lot z/do Polski.",
    date: "2026-03-10",
    readTime: "9 min",
    category: "Linie lotnicze",
    featured: true,
    color: "blue"
  },
  {
    slug: "klm-odszkodowanie-polska",
    title: "KLM odszkodowanie z Polski — kiedy należy się €600?",
    excerpt: "Kompletny przewodnik: jak uzyskać 250-600 € odszkodowania od KLM za opóźniony lub odwołany lot z/do Polski.",
    date: "2026-03-10",
    readTime: "9 min",
    category: "Linie lotnicze",
    featured: true,
    color: "blue"
  },
  {
    slug: "air-france-odszkodowanie-polska",
    title: "Air France odszkodowanie z Polski — kiedy należy się €600?",
    excerpt: "Kompletny przewodnik: jak uzyskać 250-600 € odszkodowania od Air France za opóźniony lub odwołany lot z/do Polski.",
    date: "2026-03-10",
    readTime: "9 min",
    category: "Linie lotnicze",
    featured: true,
    color: "blue"
  },
  {
    slug: "qatar-airways-odwolanie-polska",
    title: "Qatar Airways odwołanie z Polski — prawa pasażera i odszkodowanie do 600 €",
    excerpt: "Sprawdź, kiedy Qatar Airways musi wypłacić odszkodowanie za odwołany lot z Polski. Przewodnik WE 261 dla połączeń przez Doha.",
    date: "2026-03-10",
    readTime: "9 min",
    category: "Linie lotnicze",
    featured: true,
    color: "red"
  },
  {
    slug: "smartwings-odszkodowanie-czarter-we261",
    title: "Smartwings odszkodowanie — czarter wakacyjny a WE 261/2004 (2026)",
    excerpt: "Sprawdź, czy czarter wakacyjny Smartwings podlega WE 261. Przewodnik odszkodowań za loty czarterowe 250-600 € z Polski.",
    date: "2026-03-10",
    readTime: "10 min",
    category: "Linie lotnicze",
    featured: true,
    color: "teal"
  },
  {
    slug: "jet2-odszkodowanie-polska",
    title: "Jet2 odszkodowanie dla polskich pasażerów — przewodnik 2026",
    excerpt: "Sprawdź jak uzyskać 250-600 € odszkodowania od Jet2 za opóźniony lub odwołany lot z Polski. Przewodnik WE 261/UK261 po Brexicie.",
    date: "2026-03-10",
    readTime: "9 min",
    category: "Linie lotnicze",
    featured: true,
    color: "blue"
  },
  {
    slug: "wizz-air-vs-ryanair-odmowy-porownanie",
    title: "Wizz Air vs Ryanair — które linie częściej odmawiają odszkodowania?",
    excerpt: "Niezależne porównanie Wizz Air i Ryanair: statystyki odmów, skuteczność reklamacji, czas wypłaty. Która linia szybciej płaci? [2026]",
    date: "2026-03-10",
    readTime: "11 min",
    category: "Porównania",
    featured: true,
    color: "indigo"
  },
  {
    title: "Wizz Air vs Ryanair – porównanie odmów odszkodowania",
    slug: "wizz-air-vs-ryanair-odmowy-porownanie",
    excerpt: "Porównanie strategii odmowy odszkodowań przez Wizz Air i Ryanair. Które linie częściej odmawiają i jak się bronić?",
    category: "Porównania",
    featured: true,
  },
  {
    title: "Lotnisko Warszawa Modlin – odszkodowanie za odwołany lot",
    slug: "lotnisko-warszawa-modlin-odwolany-lot",
    excerpt: "Twój lot z Modlina został odwołany? Sprawdź, jak dochodzić odszkodowania do 600 € z lotniska Warszawa-Modlin.",
    date: "2026-03-11",
    readTime: "8 min",
    category: "Lotniska",
    featured: false,
  },
  {
    title: "Lotnisko Katowice Pyrzowice – odszkodowanie za odwołany lot",
    slug: "lotnisko-katowice-pyrzowice-odwolany-lot",
    excerpt: "Odwołany lot z Katowic? Poznaj procedury reklamacyjne dla lotniska Katowice-Pyrzowice i dochodzenie 250-600 € odszkodowania.",
    date: "2026-03-11",
    readTime: "8 min",
    category: "Lotniska",
    featured: false,
  },
  {
    title: "Lotnisko Gdańsk Rębiechowo – odszkodowanie za odwołany lot",
    slug: "lotnisko-gdansk-rebiechowo-odwolany-lot",
    excerpt: "Lot z Gdańska został odwołany? Sprawdź, jak uzyskać odszkodowanie do 600 € z lotniska Gdańsk-Rębiechowo.",
    date: "2026-03-11",
    readTime: "8 min",
    category: "Lotniska",
    featured: false,
  },
  {
    title: "Lotnisko Wrocław Strachowice – odszkodowanie za odwołany lot",
    slug: "lotnisko-wroclaw-strachowice-odwolany-lot",
    excerpt: "Odwołany lot z Wrocławia? Poznaj swoje prawa i dowiedz się, jak dochodzić odszkodowania z lotniska Wrocław-Strachowice.",
    date: "2026-03-11",
    readTime: "8 min",
    category: "Lotniska",
    featured: false,
  },
  {
    title: "Lotnisko Warszawa Chopin – odszkodowanie za opóźniony lot",
    slug: "lotnisko-warszawa-chopin-opozniony-lot",
    excerpt: "Lot z Chopina opóźniony o 3+ godziny? Sprawdź, jak uzyskać odszkodowanie do 600 € z największego lotniska w Polsce.",
    date: "2026-03-11",
    readTime: "9 min",
    category: "Lotniska",
    featured: true,
  },
  {
    title: "Lotnisko Warszawa Chopin – odszkodowanie za odwołany lot",
    slug: "lotnisko-warszawa-chopin-odwolany-lot",
    excerpt: "Lot z Warszawy został odwołany? Poznaj procedury reklamacyjne dla lotniska Chopin i dochodzenie odszkodowania.",
    date: "2026-03-11",
    readTime: "9 min",
    category: "Lotniska",
    featured: true,
  },
  {
    title: "Lotnisko Kraków-Balice – odszkodowanie za opóźniony lot",
    slug: "lotnisko-krakow-balice-opozniony-lot",
    excerpt: "Opóźniony lot z Krakowa? Dowiedz się, jak uzyskać odszkodowanie do 600 € z lotniska Kraków-Balice.",
    date: "2026-03-11",
    readTime: "8 min",
    category: "Lotniska",
    featured: true,
  },
  {
    title: "Lotnisko Kraków-Balice – odszkodowanie za odwołany lot",
    slug: "lotnisko-krakow-balice-odwolany-lot",
    excerpt: "Lot z Balic został odwołany? Poznaj swoje prawa i sprawdź procedury reklamacyjne na lotnisku w Krakowie.",
    date: "2026-03-11",
    readTime: "8 min",
    category: "Lotniska",
    featured: true,
  },
  {
    title: "Lotnisko Poznań-Ławica – odszkodowanie za opóźniony lot",
    slug: "lotnisko-poznan-lawica-opozniony-lot",
    excerpt: "Opóźniony lot z Poznania? Sprawdź, jak uzyskać odszkodowanie do 600 € z lotniska Poznań-Ławica.",
    date: "2026-03-11",
    readTime: "8 min",
    category: "Lotniska",
    featured: false,
  },
  {
    title: "Lotnisko Poznań-Ławica – odszkodowanie za odwołany lot",
    slug: "lotnisko-poznan-lawica-odwolany-lot",
    excerpt: "Odwołany lot z Poznania? Poznaj procedury reklamacyjne dla lotniska Ławica i dochodzenie odszkodowania.",
    date: "2026-03-11",
    readTime: "8 min",
    category: "Lotniska",
    featured: false,
  },
  {
    title: "Lotnisko Rzeszów-Jasionka – odszkodowanie za opóźniony lot",
    slug: "lotnisko-rzeszow-jasionka-opozniony-lot",
    excerpt: "Opóźniony lot z Rzeszowa? Sprawdź, jak uzyskać odszkodowanie do 600 € z lotniska Rzeszów-Jasionka.",
    date: "2026-03-11",
    readTime: "8 min",
    category: "Lotniska",
    featured: false,
  },
  {
    title: "Lotnisko Rzeszów-Jasionka – odszkodowanie za odwołany lot",
    slug: "lotnisko-rzeszow-jasionka-odwolany-lot",
    excerpt: "Lot z Rzeszowa został odwołany? Poznaj swoje prawa i procedury reklamacyjne dla lotniska Jasionka.",
    date: "2026-03-11",
    readTime: "8 min",
    category: "Lotniska",
    featured: false,
  },
  {
    title: "Lotnisko Łódź Lublinek – odszkodowanie za opóźniony lot",
    slug: "lotnisko-lodz-lublinek-opozniony-lot",
    excerpt: "Opóźniony lot z Łodzi? Sprawdź, jak uzyskać odszkodowanie do 600 € z lotniska Łódź-Lublinek.",
    date: "2026-03-11",
    readTime: "8 min",
    category: "Lotniska",
    featured: false,
  },
  {
    title: "Lotnisko Łódź Lublinek – odszkodowanie za odwołany lot",
    slug: "lotnisko-lodz-lublinek-odwolany-lot",
    excerpt: "Lot z Łodzi został odwołany? Poznaj procedury reklamacyjne dla lotniska Lublinek i dochodzenie odszkodowania.",
    date: "2026-03-11",
    readTime: "8 min",
    category: "Lotniska",
    featured: false,
  },
  {
    title: "Lotnisko Szczecin-Goleniów – odszkodowanie za opóźniony lot",
    slug: "lotnisko-szczecin-goleniow-opozniony-lot",
    excerpt: "Opóźniony lot z Szczecina? Sprawdź, jak uzyskać odszkodowanie z lotniska Goleniów.",
    date: "2026-03-11",
    readTime: "8 min",
    category: "Lotniska",
    featured: false,
  },
  {
    title: "Lotnisko Szczecin-Goleniów – odszkodowanie za odwołany lot",
    slug: "lotnisko-szczecin-goleniow-odwolany-lot",
    excerpt: "Odwołany lot ze Szczecina? Poznaj swoje prawa i procedury reklamacyjne dla lotniska Szczecin-Goleniów.",
    date: "2026-03-11",
    readTime: "8 min",
    category: "Lotniska",
    featured: false,
  },
  {
    title: "Lotnisko Bydgoszcz – odszkodowanie za opóźniony lot",
    slug: "lotnisko-bydgoszcz-opozniony-lot",
    excerpt: "Opóźniony lot z Bydgoszczy? Sprawdź, jak uzyskać odszkodowanie do 600 € z lotniska w Bydgoszczy.",
    date: "2026-03-11",
    readTime: "8 min",
    category: "Lotniska",
    featured: false,
  },
  {
    title: "Lotnisko Bydgoszcz – odszkodowanie za odwołany lot",
    slug: "lotnisko-bydgoszcz-odwolany-lot",
    excerpt: "Lot z Bydgoszczy został odwołany? Poznaj procedury reklamacyjne i dochodzenie odszkodowania.",
    date: "2026-03-11",
    readTime: "8 min",
    category: "Lotniska",
    featured: false,
  },
  {
    title: "Lotnisko Lublin – odszkodowanie za opóźniony lot",
    slug: "lotnisko-lublin-opozniony-lot",
    excerpt: "Opóźniony lot z Lublina? Sprawdź, jak uzyskać odszkodowanie do 600 € z lotniska w Lublinie.",
    date: "2026-03-11",
    readTime: "8 min",
    category: "Lotniska",
    featured: false,
  },
  {
    title: "Lotnisko Zielona Góra-Babimost – odszkodowanie za opóźniony lot",
    slug: "lotnisko-zielona-gora-babimost-opozniony-lot",
    excerpt: "Opóźniony lot z Zielonej Góry? Sprawdź, jak uzyskać odszkodowanie z lotniska Babimost.",
    date: "2026-03-11",
    readTime: "8 min",
    category: "Lotniska",
    featured: false,
  },
];

export const getCategoryLabel = (category: BlogArticle["category"]): string => {
  const labels: Record<string, string> = {
    "LOT Polish Airlines": "LOT Polish Airlines",
    "Ryanair": "Ryanair",
    "Wizz Air": "Wizz Air",
    "Lufthansa": "Lufthansa",
    "easyJet": "easyJet",
    "Enter Air": "Enter Air",
    "Case Studies": "Case Studies",
    "Prawo lotnicze": "Prawo lotnicze",
    "Lotniska": "Lotniska",
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