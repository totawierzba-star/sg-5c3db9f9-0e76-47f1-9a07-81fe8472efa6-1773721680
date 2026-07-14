export type BlogArticleSrCategory =
  | "snippet"
  | "foundation"
  | "airline"
  | "airport"
  | "route"
  | "special"
  | "diaspora";

export type BlogArticleSrCtaPath = "/delayed-flight" | "/cancelled-flight";

export interface BlogArticleSr {
  id: string;
  title: string;
  slug: string;
  category: BlogArticleSrCategory;
  cluster: string;
  focus: string;
  excerpt: string;
  publishDate: string;
  updatedDate: string;
  readTime: string;
  wordCount: number;
  featured: boolean;
  ctaPath: BlogArticleSrCtaPath;
  airlineName?: string;
  routeName?: string;
  airportCode?: string;
  airportName?: string;
  nonEuCarrier?: boolean;
  uk261?: boolean;
  localAuthority?: boolean;
  limitation?: boolean;
  voucher?: boolean;
}

const publishDate = "2026-05-04";

function article(
  slug: string,
  title: string,
  category: BlogArticleSrCategory,
  cluster: string,
  focus: string,
  options: Partial<BlogArticleSr> = {},
): BlogArticleSr {
  const articlePublishDate = options.publishDate || publishDate;

  return {
    id: slug,
    slug,
    title,
    category,
    cluster,
    focus,
    excerpt:
      options.excerpt ||
      `${title}: praktičan vodič na srpskom o Uredbi EU 261, UK261, dokazima, rokovima i obeštećenju do 600 €.`,
    readTime: options.readTime || "8 min.",
    wordCount: options.wordCount || 1800,
    featured: false,
    ctaPath: "/delayed-flight",
    ...options,
    publishDate: articlePublishDate,
    updatedDate: options.updatedDate || articlePublishDate,
  };
}

export const blogArticlesSr: BlogArticleSr[] = [
  article(
    "koliko-obestecenja-za-kasnjenje-leta-250-400-600",
    "Koliko obeštećenja za kašnjenje leta? 250 €, 400 € ili 600 €",
    "snippet",
    "Kratki odgovori",
    "kako se određuju fiksni iznosi od 250, 400 i 600 € prema dužini rute i kašnjenju na dolasku",
    {
      featured: true,
      wordCount: 2100,
      readTime: "9 min.",
      publishDate: "2026-05-04",
      excerpt:
        "Za kašnjenje leta od 3 sata i više imate pravo na 250 €, 400 € ili 600 € po Uredbi EU 261, u zavisnosti od dužine rute: Beč–Beograd (~490 km) donosi 250 €, London–Beograd (~1700 km) 400 €, a 600 € važi samo za interkontinentalne letove preko 3500 km.",
    },
  ),
  article(
    "od-koliko-sati-kasnjenja-pravo-na-obestecenje",
    "Od koliko sati kašnjenja imate pravo na obeštećenje?",
    "snippet",
    "Kratki odgovori",
    "prag od 3 sata kašnjenja na dolasku i razlika između kašnjenja pri poletanju i na krajnjoj destinaciji",
    {
      featured: true,
      publishDate: "2026-05-11",
      excerpt:
        "Pravo na novčano obeštećenje po Uredbi EU 261 nastaje tek kada na krajnju destinaciju stignete sa 3 sata zakašnjenja ili više. Objašnjavamo zašto se meri dolazak, a ne poletanje, i koja prava na brigu imate već od 2 sata čekanja.",
    },
  ),
  article(
    "vazi-li-eu261-za-air-serbia",
    "Važi li Uredba EU 261 za Air Serbia?",
    "snippet",
    "Kratki odgovori",
    "kada Air Serbia kao avio-kompanija van EU potpada pod EU261, a kada let iz Beograda nije pokriven",
    {
      nonEuCarrier: true,
      featured: true,
      airlineName: "Air Serbia",
      publishDate: "2026-05-18",
      excerpt:
        "Air Serbia nije avio-kompanija iz EU, pa Uredba EU 261 važi samo kada njen let poleće sa aerodroma u EU/EEA — na primer Beč–Beograd ili Frankfurt–Beograd. Let iz Beograda sa Air Serbia po pravilu nije pokriven Uredbom EU 261.",
    },
  ),
  article(
    "vazi-li-eu261-za-letove-iz-beograda",
    "Važi li Uredba EU 261 za letove iz Beograda?",
    "snippet",
    "Kratki odgovori",
    "zašto je za letove iz Beograda ključno ko je stvarni operater — EU prevoznik ili avio-kompanija van EU",
    {
      nonEuCarrier: true,
      featured: true,
      publishDate: "2026-05-25",
      excerpt:
        "Srbija nije u EU, pa Uredba EU 261 važi za letove iz Beograda samo kada let obavlja EU/EEA avio-kompanija poput Wizz Air-a, Lufthanse, Austrian-a ili LOT-a. Let iz Beograda sa Air Serbia ili Turkish Airlines-om nije pokriven — objašnjavamo šta vam tada preostaje.",
    },
  ),
  article(
    "sta-su-vanredne-okolnosti-kod-letova",
    "Šta su vanredne okolnosti kod letova?",
    "snippet",
    "Kratki odgovori",
    "razlika između stvarnih vanrednih okolnosti i razloga za koje avio-kompanija najčešće ostaje odgovorna",
    {
      publishDate: "2026-06-01",
      excerpt:
        "Nevreme, štrajk kontrole letenja ili zatvaranje aerodroma jesu vanredne okolnosti — ali tehnički kvarovi i štrajk osoblja same avio-kompanije po pravilu nisu. Objašnjavamo kada avio-kompanija ne mora da plati obeštećenje, a kada se iza „vanrednih okolnosti“ krije osnovan zahtev.",
    },
  ),
  article(
    "uredba-eu-261-2004-prava-putnika",
    "Uredba (EU) br. 261/2004 — kompletan vodič kroz prava putnika",
    "foundation",
    "Zakon i prava",
    "osnovna uredba o obeštećenju, brizi i refundaciji kod problematičnih letova, iz ugla putnika iz Srbije",
    {
      localAuthority: true,
      featured: true,
      wordCount: 2300,
      readTime: "10 min.",
      publishDate: "2026-06-08",
      excerpt:
        "Uredba (EU) br. 261/2004 daje putnicima pravo na obeštećenje od 250 € do 600 €, brigu i refundaciju kod kašnjenja leta, otkazanog leta i uskraćenog ukrcavanja. Vodič iz ugla putnika iz Srbije: koji letovi iz Beograda i ka Beogradu su pokriveni i kako da podnesete zahtev za obeštećenje.",
    },
  ),
  article(
    "rok-zastarelosti-obestecenje-za-let",
    "Rok zastarelosti za obeštećenje za let — koliko vremena imate?",
    "foundation",
    "Zakon i prava",
    "zašto rok zastarelosti zavisi od države čiji sudovi ili organi odlučuju o zahtevu i kako da ne zakasnite",
    {
      limitation: true,
      publishDate: "2026-06-15",
      excerpt:
        "Rok zastarelosti za zahtev za obeštećenje nije jedinstven u celoj Evropi — zavisi od države čiji sudovi ili nadležni organi rešavaju vaš slučaj, i u praksi se kreće od jedne do više godina. Objašnjavamo kako da procenite svoj rok i zašto stariji letovi često i dalje vrede proveru.",
    },
  ),
  article(
    "air-serbia-kasnjenje-leta-obestecenje",
    "Air Serbia kašnjenje leta — kada imate pravo na obeštećenje?",
    "airline",
    "Avio-kompanije",
    "Air Serbia kao prevoznik van EU: pokriveni letovi sa EU aerodroma i opcije za letove iz Beograda",
    {
      airlineName: "Air Serbia",
      nonEuCarrier: true,
      featured: true,
      wordCount: 2200,
      readTime: "9 min.",
      publishDate: "2026-06-22",
      excerpt:
        "Kašnjenje leta sa Air Serbia donosi pravo na obeštećenje po Uredbi EU 261 kada let poleće sa aerodroma u EU/EEA — recimo Beč–Beograd ili Pariz–Beograd. Za letove iz Beograda EU261 ne važi za Air Serbia, ali srpski propisi o vazdušnom saobraćaju u velikoj meri prate ista pravila — objašnjavamo šta konkretno da preduzmete.",
    },
  ),
  article(
    "wizz-air-kasnjenje-leta-srbija-eu261",
    "Wizz Air kašnjenje leta iz Srbije — EU261 važi u oba smera",
    "airline",
    "Avio-kompanije",
    "Wizz Air kao EU prevoznik: zašto su letovi iz Beograda i Niša pokriveni Uredbom EU 261 isto kao i povratni letovi",
    {
      airlineName: "Wizz Air",
      featured: true,
      publishDate: "2026-06-29",
      excerpt:
        "Wizz Air je avio-kompanija iz EU, pa Uredba EU 261 pokriva njegove letove u oba smera — i kada polećete iz Beograda ili Niša ka EU, i kada se vraćate kući. Kod kašnjenja od 3 sata i više imate pravo na 250 € ili 400 € u zavisnosti od rute — vodič korak po korak.",
    },
  ),
  article(
    "ryanair-kasnjenje-leta-obestecenje-eu261",
    "Ryanair kašnjenje leta — obeštećenje po Uredbi EU 261",
    "airline",
    "Avio-kompanije",
    "prava putnika iz Srbije kod kašnjenja Ryanair leta, dokazi, rokovi i najčešći razlozi odbijanja",
    {
      airlineName: "Ryanair",
      publishDate: "2026-07-04",
      excerpt:
        "Ryanair je EU avio-kompanija, pa su njegovi letovi pokriveni Uredbom EU 261 nezavisno od smera — uključujući rute koje koriste putnici iz Srbije i dijaspora. Objašnjavamo kako da podnesete zahtev za obeštećenje, koje dokaze da sačuvate i kako da reagujete ako Ryanair odbije.",
    },
  ),
  article(
    "let-bec-beograd-kasnjenje-austrian-air-serbia",
    "Let Beč–Beograd kašnjenje — Austrian i Air Serbia po EU261",
    "route",
    "Rute i dijaspora",
    "najvažnija ruta za dijasporu u Austriji: polazak iz Beča je uvek pokriven EU261, bez obzira na avio-kompaniju",
    {
      routeName: "Beč-Beograd",
      airlineName: "Austrian Airlines / Air Serbia",
      featured: true,
      publishDate: "2026-07-09",
      excerpt:
        "Let Beč–Beograd poleće sa EU aerodroma, pa je kod kašnjenja od 3 sata i više pokriven Uredbom EU 261 — svejedno da li letite sa Austrian Airlines ili Air Serbia. Ruta je duga oko 490 km, što znači obeštećenje od 250 € po putniku. Vodič za dijasporu u Austriji, korak po korak.",
    },
  ),
  article(
    "let-cirih-beograd-kasnjenje-swiss-air-serbia",
    "Let Cirih–Beograd kašnjenje — SWISS i Air Serbia: vaša prava",
    "route",
    "Rute i dijaspora",
    "ruta Cirih–Beograd za dijasporu u Švajcarskoj: polazak iz Ciriha je pokriven, ruta od ~1150 km nosi 250 €",
    {
      routeName: "Cirih-Beograd",
      airlineName: "SWISS / Air Serbia",
      publishDate: "2026-07-13",
      excerpt:
        "Let Cirih–Beograd poleće sa aerodroma na koji se primenjuju pravila EU261, pa kašnjenje od 3 sata i više donosi pravo na obeštećenje — i sa SWISS-om i sa Air Serbia. Ruta je duga oko 1150 km, dakle ispod 1500 km, što znači 250 € po putniku. Praktičan vodič za dijasporu u Švajcarskoj.",
    },
  ),
  article(
    "vazi-li-eu261-za-niskotarifne-kompanije",
    "Važi li EU261 za niskotarifne avio-kompanije?",
    "snippet",
    "Kratki odgovori",
    "zašto niskotarifne avio-kompanije poput Wizz Air-a, Ryanair-a i easyJet-a duguju iste iznose od 250 do 600 €",
    {
      wordCount: 1500,
      readTime: "7 min.",
      publishDate: "2025-09-01",
      excerpt:
        "Uredba EU 261 važi za niskotarifne avio-kompanije potpuno isto kao za klasične: Wizz Air, Ryanair i easyJet duguju 250 €, 400 € ili 600 € kod kašnjenja od 3 sata i više na krajnjoj destinaciji. Cena karte ne igra nikakvu ulogu — i za promo kartu od 20 € sleduje pun iznos, koji često višestruko premašuje ono što ste platili.",
    },
  ),
  article(
    "koliko-dugo-se-ceka-isplata-obestecenja",
    "Koliko dugo se čeka isplata obeštećenja?",
    "snippet",
    "Kratki odgovori",
    "realni rokovi isplate obeštećenja od prvog zahteva do novca na računu i šta ih produžava",
    {
      publishDate: "2025-09-08",
      excerpt:
        "Zakonski rok za isplatu obeštećenja po Uredbi EU 261 nije precizno propisan — u praksi avio-kompanije jasne slučajeve isplaćuju za 2 do 8 nedelja, dok zahtev koji završi pred nadležnim organom ili sudom može trajati i više meseci. Objašnjavamo šta ubrzava, a šta usporava isplatu 250 € do 600 €.",
    },
  ),
  article(
    "avio-kompanija-ne-odgovara-na-zahtev",
    "Avio-kompanija ne odgovara na zahtev — šta sada?",
    "snippet",
    "Kratki odgovori",
    "koraci eskalacije kada avio-kompanija ignoriše zahtev: urgencija, nadležno telo države polaska, sud",
    {
      wordCount: 1900,
      readTime: "9 min.",
      publishDate: "2025-09-16",
      excerpt:
        "Ako avio-kompanija ćuti na vaš zahtev za obeštećenje duže od 4 do 6 nedelja, imate jasne dalje korake: pisana urgencija sa rokom, prijava nadležnom telu za prava putnika u državi iz koje je let poleteo, a zatim sud ili specijalizovani servis za naplatu. Ćutanje ne umanjuje vaše pravo na 250 € do 600 € — objašnjavamo redosled poteza.",
    },
  ),
  article(
    "prava-putnika-kod-2-sata-kasnjenja",
    "Koja prava imate već kod 2 sata kašnjenja?",
    "snippet",
    "Kratki odgovori",
    "prava na brigu od 2 sata čekanja — obroci, piće, komunikacija — i granica od 3 sata za novčano obeštećenje",
    {
      wordCount: 1400,
      readTime: "7 min.",
      publishDate: "2025-09-23",
      excerpt:
        "Već od 2 sata kašnjenja avio-kompanija vam duguje brigu: obroke i piće srazmerno čekanju, dva besplatna poziva ili mejla, a po potrebi i hotel sa prevozom. Novčano obeštećenje od 250 € do 600 € sleduje tek ako na krajnju destinaciju stignete sa 3 sata zakašnjenja ili više.",
    },
  ),
  article(
    "mozete-li-obestecenje-za-let-star-3-godine",
    "Možete li dobiti obeštećenje za let star 3 godine?",
    "snippet",
    "Kratki odgovori",
    "kada rok zastarelosti dozvoljava zahtev za let star 3 godine i zašto to zavisi od države",
    {
      limitation: true,
      publishDate: "2025-09-30",
      excerpt:
        "Da li let star 3 godine još uvek vredi zahteva zavisi od roka zastarelosti države čiji sudovi ili organi rešavaju slučaj — u nekim državama rok je kraći, a u pojedinim je zahtev moguć i posle 3 godine. Pre nego što otpišete stari let, proverite koji se rok primenjuje: kod 600 € po putniku to je razlika između nule i pune isplate.",
    },
  ),
  article(
    "vaucer-ili-novac-obestecenje",
    "Vaučer ili novac — šta možete da tražite?",
    "snippet",
    "Kratki odgovori",
    "zašto niste dužni da prihvatite vaučer i kako da insistirate na isplati obeštećenja u novcu",
    {
      voucher: true,
      wordCount: 1600,
      readTime: "7 min.",
      publishDate: "2025-10-07",
      excerpt:
        "Obeštećenje po Uredbi EU 261 duguje se u novcu — 250 €, 400 € ili 600 € — a vaučer avio-kompanija sme da vam da samo uz vašu izričitu pisanu saglasnost. Ako vam umesto 400 € u kešu ponude vaučer od 300 €, imate puno pravo da odbijete i insistirate na isplati na račun.",
    },
  ),
  article(
    "vazi-li-eu261-za-carter-letove",
    "Važi li EU261 za čarter letove?",
    "snippet",
    "Kratki odgovori",
    "čarter letovi i paket-aranžmani pod Uredbom EU 261 — ista pravila kao za redovne linije",
    {
      wordCount: 1450,
      readTime: "7 min.",
      publishDate: "2025-10-14",
      excerpt:
        "Uredba EU 261 izričito pokriva i čarter letove, uključujući one u okviru paket-aranžmana: važe ista pravila kao za redovne linije — polazak sa EU/EEA aerodroma bilo kojim prevoznikom, ili EU/EEA avio-kompanija na letu iz Srbije. Kod kašnjenja od 3 sata i više na čarteru za more sleduje 250 € ili 400 € po putniku, nezavisno od cene aranžmana.",
    },
  ),
  article(
    "vazi-li-eu261-za-letove-za-tursku-dubai",
    "Važi li EU261 za letove za Tursku i Dubai?",
    "snippet",
    "Kratki odgovori",
    "kada su letovi za Istanbul i Dubai pokriveni Uredbom EU 261, a kada važe samo lokalna pravila",
    {
      nonEuCarrier: true,
      wordCount: 1900,
      readTime: "9 min.",
      publishDate: "2025-10-21",
      excerpt:
        "Let za Tursku ili Dubai pokriven je Uredbom EU 261 kada poleće sa EU/EEA aerodroma — recimo Beč–Istanbul — bez obzira na avio-kompaniju. Let Beograd–Istanbul sa Turkish Airlines-om ili Beograd–Dubai sa flydubai-em nije pokriven, jer Srbija nije u EU, a prevoznik nije iz EU/EEA; Turska ipak ima sopstvena pravila o pravima putnika (SHY-Passenger) koja u pojedinim slučajevima mogu pomoći.",
    },
  ),
  article(
    "razlika-izmedju-eu261-i-uk261",
    "EU261 vs UK261 — u čemu je razlika?",
    "snippet",
    "Kratki odgovori",
    "razlike između EU261 i UK261 posle Bregzita: iznosi u evrima i funtama i koji let potpada pod koja pravila",
    {
      uk261: true,
      wordCount: 1850,
      readTime: "9 min.",
      publishDate: "2025-10-28",
      excerpt:
        "Posle Bregzita Velika Britanija primenjuje UK261 — pravila gotovo identična Uredbi EU 261, ali sa iznosima u funtama: £220, £350 i £520 umesto 250 €, 400 € i 600 €. Let London–Beograd potpada pod UK261 jer poleće iz Velike Britanije, a let iz EU ka Londonu pod EU261 — objašnjavamo koja se pravila primenjuju na vaš let.",
    },
  ),
  article(
    "utice-li-cena-karte-na-obestecenje",
    "Utiče li cena karte na obeštećenje?",
    "snippet",
    "Kratki odgovori",
    "zašto visina obeštećenja zavisi samo od dužine rute, a ne od cene avio-karte",
    {
      publishDate: "2025-11-05",
      excerpt:
        "Cena karte ne utiče na obeštećenje: iznosi po Uredbi EU 261 zavise isključivo od dužine rute — 250 € do 1500 km, 400 € od 1500 do 3500 km i 600 € preko 3500 km. I za promo kartu od 19,99 € kod kašnjenja od 3 sata i više sleduje pun iznos, koji može biti i dvadeset puta veći od cene karte.",
    },
  ),
  article(
    "obestecenje-za-decu-i-bebe",
    "Obeštećenje za decu i bebe — koliko pripada?",
    "snippet",
    "Kratki odgovori",
    "puno obeštećenje za decu sa sopstvenim sedištem i izuzetak za bebe koje putuju besplatno u krilu",
    {
      wordCount: 1500,
      readTime: "7 min.",
      publishDate: "2025-11-13",
      excerpt:
        "Deca sa plaćenom kartom i sopstvenim sedištem imaju pravo na pun iznos obeštećenja — istih 250 €, 400 € ili 600 € kao i odrasli, pa četvoročlana porodica kod kašnjenja od 3 sata i više može da naplati i 1600 €. Za bebe koje su putovale besplatno u krilu roditelja, bez sopstvene karte, obeštećenje po pravilu ne pripada.",
    },
  ),
  article(
    "propusten-presedanje-pravo-na-obestecenje",
    "Propušteno presedanje — imate li pravo na obeštećenje?",
    "snippet",
    "Kratki odgovori",
    "kašnjenje se meri na krajnjoj destinaciji kada je propušteno presedanje deo jedne rezervacije",
    {
      wordCount: 1750,
      readTime: "8 min.",
      publishDate: "2025-11-24",
      excerpt:
        "Kod jedinstvene rezervacije kašnjenje se meri na krajnjoj destinaciji: ako zbog propuštenog presedanja na letu Beograd–Frankfurt–Njujork sa Lufthansom stignete u Njujork sa 3 sata zakašnjenja ili više, sleduje vam 600 € — Lufthansa je EU prevoznik, pa je pokriven i polazak iz Beograda. Kašnjenje prvog leta od svega 40 minuta tako može da vredi pun iznos.",
    },
  ),
  article(
    "pravo-na-brigu-hrana-hotel-kasnjenje",
    "Pravo na brigu: hrana, piće i hotel kod kašnjenja leta",
    "foundation",
    "Zakon i prava",
    "pravo na obroke, osveženje, komunikaciju i hotel već od 2 sata čekanja, nezavisno od novčanog obeštećenja",
    {
      wordCount: 1950,
      readTime: "8 min.",
      publishDate: "2025-12-01",
      excerpt:
        "Već od 2 sata čekanja — u zavisnosti od dužine rute — avio-kompanija mora da vam obezbedi hranu, piće i komunikaciju, a kod noćenja i hotel sa prevozom, potpuno nezavisno od toga da li ćete kasnije dobiti i obeštećenje od 250 € do 600 €. Ako niko ne dođe sa vaučerima, platite razumne troškove sami i sačuvajte svaki račun — objašnjavamo kako da ih posle naplatite.",
    },
  ),
  article(
    "refundacija-ili-preusmeravanje-otkazan-let",
    "Refundacija ili preusmeravanje kod otkazanog leta — vi birate",
    "foundation",
    "Zakon i prava",
    "pravo izbora između povraćaja novca u roku od 7 dana i preusmeravanja najranijim mogućim letom",
    {
      ctaPath: "/cancelled-flight",
      wordCount: 2050,
      readTime: "9 min.",
      publishDate: "2025-12-08",
      excerpt:
        "Kada je let otkazan, izbor je uvek vaš, a ne avio-kompanije: potpuna refundacija karte u novcu u roku od 7 dana ili preusmeravanje do krajnje destinacije najranijim mogućim letom. Objašnjavamo kada uz to imate i pravo na obeštećenje od 250 € do 600 € i zašto vaučer smete da odbijete.",
    },
  ),
  article(
    "uskraceno-ukrcavanje-overbooking-prava",
    "Uskraćeno ukrcavanje i overbooking — vaša prava",
    "foundation",
    "Zakon i prava",
    "trenutno obeštećenje od 250 do 600 € kod uskraćenog ukrcavanja i razlika između dobrovoljnog i prinudnog ustupanja mesta",
    {
      featured: true,
      wordCount: 2150,
      readTime: "9 min.",
      publishDate: "2025-12-15",
      excerpt:
        "Ako vas avio-kompanija zbog overbookinga ne primi na let protiv vaše volje, obeštećenje od 250 € do 600 € duguje vam se odmah, na aerodromu, uz brigu i izbor između refundacije i preusmeravanja. Pravila važe za svaki let sa EU/EEA aerodroma, a za polaske iz Beograda kada let obavlja EU/EEA prevoznik — i bitno je znati razliku: dobrovoljci pregovaraju o uslovima, prinudno odbijenima sleduje fiksni iznos.",
    },
  ),
  article(
    "otkazan-let-14-dana-pravilo",
    "Otkazan let i pravilo 14 dana — kada sleduje obeštećenje",
    "foundation",
    "Zakon i prava",
    "kako rok obaveštenja o otkazivanju od 14, 7 ili manje dana i ponuđeno preusmeravanje određuju pravo na obeštećenje",
    {
      ctaPath: "/cancelled-flight",
      wordCount: 2000,
      readTime: "9 min.",
      publishDate: "2025-12-22",
      excerpt:
        "Ako vas je avio-kompanija o otkazivanju obavestila najmanje 14 dana pre polaska, obeštećenje ne sleduje — kod kraćeg roka sve zavisi od ponuđenog preusmeravanja. Između 7 i 14 dana zamenski let sme da poleti najviše 2 sata ranije i stigne najviše 4 sata kasnije, a ispod 7 dana granice su 1 i 2 sata. Objašnjavamo i zašto teret dokazivanja obaveštenja leži na avio-kompaniji.",
    },
  ),
  article(
    "kako-podneti-zahtev-za-obestecenje-korak-po-korak",
    "Kako podneti zahtev za obeštećenje — korak po korak",
    "foundation",
    "Zakon i prava",
    "kompletan postupak od prikupljanja podataka o letu do pisma avio-kompaniji i eskalacije zahteva",
    {
      featured: true,
      wordCount: 2300,
      readTime: "10 min.",
      publishDate: "2025-12-29",
      excerpt:
        "Zahtev za obeštećenje podnosite stvarnom operateru leta, sa brojem leta, datumom, rezervacijom i dužinom rute koja određuje iznos od 250 €, 400 € ili 600 €. Vodimo vas kroz svaki korak — od pisma avio-kompaniji do eskalacije nadležnom telu — a ako ne želite sami da vodite postupak, ClaimWinger sve preuzima umesto vas (formular je na engleskom).",
    },
  ),
  article(
    "koje-dokaze-sacuvati-kasnjenje-leta",
    "Koji dokazi vam trebaju kod kašnjenja leta",
    "foundation",
    "Zakon i prava",
    "dokumenta, fotografije i poruke koje čine zahtev za obeštećenje čvrstim — od karte za ukrcavanje do računa",
    {
      wordCount: 1900,
      readTime: "8 min.",
      publishDate: "2026-01-07",
      excerpt:
        "Karta za ukrcavanje, potvrda rezervacije, fotografije tabli sa poletanjima, SMS i mejlovi avio-kompanije i računi za hranu ili hotel — to su dokazi koji presuđuju kod zahteva za obeštećenje. Objašnjavamo šta da sačuvate još na aerodromu, zašto vrede i kontakti saputnika kao svedoka i kako da dokažete stvarno vreme dolaska na krajnju destinaciju.",
    },
  ),
  article(
    "montrealska-konvencija-prtljag-i-letovi",
    "Montrealska konvencija: prtljag, kašnjenja i šteta",
    "foundation",
    "Zakon i prava",
    "poseban režim odgovornosti za oštećen, zakasneli i izgubljeni prtljag, uz rokove od 7 i 21 dan za pisanu reklamaciju",
    {
      wordCount: 2200,
      readTime: "10 min.",
      publishDate: "2026-01-16",
      excerpt:
        "Montrealska konvencija je poseban režim, odvojen od Uredbe EU 261: pokriva oštećen, zakasneli i izgubljeni prtljag do limita zasnovanog na SDR — u praksi oko 1.300 € — i važi za veliku većinu međunarodnih letova, uključujući i one iz Srbije. Rokovi su strogi: pisana reklamacija za oštećenje prtljaga u roku od 7 dana, a za kašnjenje 21 dan od preuzimanja.",
    },
  ),
  article(
    "sud-ili-agencija-za-obestecenje",
    "Sud ili agencija za obeštećenje — šta se više isplati?",
    "foundation",
    "Zakon i prava",
    "poređenje samostalnog zahteva, agencije uz proviziju od uspeha i sudskog postupka iz ugla putnika iz Srbije",
    {
      wordCount: 2100,
      readTime: "9 min.",
      publishDate: "2026-01-26",
      excerpt:
        "Samostalan zahtev za obeštećenje ne košta ništa, ali avio-kompanije često ćute ili odbijaju; agencije rade uz proviziju od uspeha i preuzimaju ceo postupak; sud donosi najviše, ali traje — a za putnike iz Srbije često znači parničenje u drugoj državi. Poredimo troškove, trajanje i izglede sva tri puta i objašnjavamo kada koji ima smisla.",
    },
  ),
  article(
    "lufthansa-kasnjenje-leta-obestecenje",
    "Lufthansa kašnjenje leta — obeštećenje po Uredbi EU 261",
    "airline",
    "Avio-kompanije",
    "zašto su Lufthansini letovi Beograd–Frankfurt i Beograd–Minhen pokriveni EU261 u oba smera i kako se kod presedanja kašnjenje meri na krajnjoj destinaciji",
    {
      airlineName: "Lufthansa",
      wordCount: 2100,
      readTime: "9 min.",
      publishDate: "2026-02-01",
      excerpt:
        "Lufthansa je avio-kompanija iz EU, pa Uredba EU 261 pokriva njene letove u oba smera — i Beograd–Frankfurt ili Beograd–Minhen, i povratak kući. Kod presedanja preko Frankfurta ili Minhena kašnjenje se meri na krajnjoj destinaciji, pa i kraće zakašnjenje prvog leta može doneti 250 €, 400 € ili 600 € ako propustite vezu.",
    },
  ),
  article(
    "austrian-airlines-kasnjenje-leta-obestecenje",
    "Austrian Airlines kašnjenje leta — vaša prava po Uredbi EU 261",
    "airline",
    "Avio-kompanije",
    "prava putnika kod kašnjenja Austrian Airlines leta: EU prevoznik pokriven u oba smera, ruta Beč–Beograd od ~490 km i obeštećenje od 250 €",
    {
      airlineName: "Austrian Airlines",
      wordCount: 1750,
      readTime: "8 min.",
      publishDate: "2026-02-05",
      excerpt:
        "Austrian Airlines je EU avio-kompanija, pa su njeni letovi pokriveni Uredbom EU 261 u oba smera — i Beč–Beograd i Beograd–Beč. Ruta je duga oko 490 km, pa kašnjenje od 3 sata i više na dolasku donosi 250 € po putniku, a kod presedanja preko Beča računa se krajnja destinacija.",
    },
  ),
  article(
    "turkish-airlines-kasnjenje-leta-obestecenje",
    "Turkish Airlines kašnjenje leta — kada važi obeštećenje po EU261?",
    "airline",
    "Avio-kompanije",
    "kada Turkish Airlines kao prevoznik van EU potpada pod EU261, zašto let Beograd–Istanbul nije pokriven i šta nude turska SHY-Passenger pravila",
    {
      airlineName: "Turkish Airlines",
      nonEuCarrier: true,
      wordCount: 1950,
      readTime: "9 min.",
      publishDate: "2026-02-09",
      excerpt:
        "Turkish Airlines nije EU avio-kompanija, pa Uredba EU 261 pokriva njene letove samo kada poleću sa aerodroma u EU/EEA — let Beograd–Istanbul nije pokriven. Turska ima sopstvena pravila o pravima putnika (SHY-Passenger), ali se ona ostvaruju drugačije i često sporije — objašnjavamo šta realno možete da tražite i u kom smeru.",
    },
  ),
  article(
    "swiss-kasnjenje-leta-obestecenje",
    "SWISS kašnjenje leta — obeštećenje po EU261 i švajcarskom ekvivalentu",
    "airline",
    "Avio-kompanije",
    "kako se pravila EU261 primenjuju na SWISS preko EU–švajcarskog sporazuma o vazdušnom saobraćaju i šta to znači za rutu Cirih–Beograd",
    {
      airlineName: "SWISS",
      wordCount: 1850,
      readTime: "8 min.",
      publishDate: "2026-02-13",
      excerpt:
        "Švajcarska učestvuje u sistemu Uredbe EU 261 preko EU–švajcarskog sporazuma o vazdušnom saobraćaju, pa polazak iz Ciriha ka Beogradu jeste pokriven, a SWISS se i za letove iz Beograda tretira kao prevoznik iz područja primene ovih pravila. Ruta Cirih–Beograd je duga oko 1150 km, što kod kašnjenja od 3 sata i više znači 250 € po putniku.",
    },
  ),
  article(
    "easyjet-kasnjenje-leta-obestecenje",
    "easyJet kašnjenje leta — obeštećenje po EU261 i UK261",
    "airline",
    "Avio-kompanije",
    "easyJet između dva režima: EU261 kod poletanja sa EU/EEA aerodroma i UK261 sa iznosima u funtama kod poletanja iz Ujedinjenog Kraljevstva",
    {
      airlineName: "easyJet",
      uk261: true,
      wordCount: 2000,
      readTime: "9 min.",
      publishDate: "2026-02-17",
      excerpt:
        "easyJet je britanska avio-kompanija, pa kod poletanja sa EU/EEA aerodroma važi Uredba EU 261 sa iznosima od 250 € do 600 €, a kod poletanja iz Ujedinjenog Kraljevstva njen britanski ekvivalent UK261 sa iznosima od £220 do £520. Objašnjavamo koja pravila važe na kojoj ruti, kako se meri kašnjenje na dolasku i kako da podnesete zahtev za obeštećenje.",
    },
  ),
  article(
    "pegasus-kasnjenje-leta-obestecenje",
    "Pegasus Airlines kašnjenje leta — kada imate pravo na obeštećenje?",
    "airline",
    "Avio-kompanije",
    "Pegasus kao turski niskotarifni prevoznik van EU: pokriveni su samo letovi koji poleću sa EU/EEA aerodroma, ne i Beograd–Istanbul",
    {
      airlineName: "Pegasus Airlines",
      nonEuCarrier: true,
      wordCount: 1700,
      readTime: "7 min.",
      publishDate: "2026-02-21",
      excerpt:
        "Pegasus Airlines je turski niskotarifni prevoznik van EU, pa Uredba EU 261 pokriva samo njegove letove koji poleću sa aerodroma u EU/EEA. Let Beograd–Istanbul (Sabiha Gekčen) nije pokriven Uredbom EU 261 — objašnjavamo na kojim letovima ipak imate pravo na 250 € ili 400 € i šta možete da tražite po turskim pravilima.",
    },
  ),
  article(
    "flydubai-kasnjenje-leta-obestecenje",
    "flydubai kašnjenje leta — šta realno možete da tražite?",
    "airline",
    "Avio-kompanije",
    "zašto ruta Beograd–Dubai sa flydubai nije pokrivena EU261 ni u jednom smeru i šta nude Montrealska konvencija i dobra volja prevoznika",
    {
      airlineName: "flydubai",
      nonEuCarrier: true,
      wordCount: 1800,
      readTime: "8 min.",
      publishDate: "2026-02-25",
      excerpt:
        "flydubai je prevoznik iz Ujedinjenih Arapskih Emirata, a Srbija nije u EU — zato ruta Beograd–Dubai nije pokrivena Uredbom EU 261 ni u jednom smeru. Realne opcije su Montrealska konvencija za dokazivu materijalnu štetu i politika dobre volje avio-kompanije — iskren vodič o tome šta možete, a šta ne možete da tražite.",
    },
  ),
  article(
    "lot-kasnjenje-leta-obestecenje",
    "LOT Polish Airlines kašnjenje leta — obeštećenje po Uredbi EU 261",
    "airline",
    "Avio-kompanije",
    "zašto je ruta Beograd–Varšava sa LOT-om pokrivena EU261 u oba smera i kako presedanja preko varšavskog čvorišta utiču na obeštećenje",
    {
      airlineName: "LOT Polish Airlines",
      wordCount: 1750,
      readTime: "8 min.",
      publishDate: "2026-03-01",
      excerpt:
        "LOT Polish Airlines je EU avio-kompanija, pa je ruta Beograd–Varšava pokrivena Uredbom EU 261 u oba smera. Ruta je duga oko 830 km, što kod kašnjenja od 3 sata i više znači 250 € po putniku, a kod presedanja preko varšavskog čvorišta kašnjenje se meri na krajnjoj destinaciji — često uz viši iznos.",
    },
  ),
  article(
    "air-france-klm-kasnjenje-leta-obestecenje",
    "Air France i KLM kašnjenje leta — obeštećenje po Uredbi EU 261",
    "airline",
    "Avio-kompanije",
    "prava putnika na rutama Beograd–Pariz i Beograd–Amsterdam: EU prevoznici pokriveni u oba smera, sa 250 € odnosno 400 € obeštećenja",
    {
      airlineName: "Air France / KLM",
      wordCount: 2200,
      readTime: "10 min.",
      publishDate: "2026-03-06",
      excerpt:
        "Air France i KLM su EU avio-kompanije, pa su letovi Beograd–Pariz i Beograd–Amsterdam pokriveni Uredbom EU 261 u oba smera. Pariz je udaljen oko 1440 km, što znači 250 €, dok je Amsterdam na oko 1560 km — preko praga od 1500 km — pa kašnjenje od 3 sata i više donosi 400 € po putniku.",
    },
  ),
  article(
    "qatar-airways-kasnjenje-leta-obestecenje",
    "Qatar Airways kašnjenje leta — važi li Uredba EU 261?",
    "airline",
    "Avio-kompanije",
    "zašto let Beograd–Doha sa Qatar Airways-om nije pokriven EU261 i kada letovi ovog prevoznika sa EU aerodroma ipak jesu",
    {
      airlineName: "Qatar Airways",
      nonEuCarrier: true,
      wordCount: 1900,
      readTime: "8 min.",
      publishDate: "2026-03-11",
      excerpt:
        "Qatar Airways nije EU avio-kompanija, pa let Beograd–Doha nije pokriven Uredbom EU 261 — ni u odlasku ni u povratku. Pod EU261 potpadaju samo letovi Qatar Airways-a koji poleću sa aerodroma u EU/EEA; za ostale letove preostaju Montrealska konvencija i uslovi prevoza — objašnjavamo šta je realno moguće.",
    },
  ),
  article(
    "aerodrom-beograd-nikola-tesla-kasnjenje-leta",
    "Aerodrom Beograd Nikola Tesla — kašnjenje leta i vaša prava",
    "airport",
    "Aerodromi",
    "zašto su polasci iz Beograda pokriveni Uredbom EU 261 samo kod EU/EEA prevoznika, a dolasci sa EU aerodroma kod svih avio-kompanija",
    {
      airportCode: "BEG",
      airportName: "Beograd Nikola Tesla",
      featured: true,
      localAuthority: true,
      wordCount: 2100,
      readTime: "9 min.",
      publishDate: "2026-03-16",
      excerpt:
        "Srbija nije u EU, pa su polasci sa aerodroma Nikola Tesla pokriveni Uredbom EU 261 samo kada let obavlja EU/EEA avio-kompanija poput Wizz Air-a, Lufthanse, Austrian-a ili LOT-a — let Air Serbia iz Beograda nije pokriven. Dolasci u Beograd sa EU aerodroma pokriveni su kod bilo kog prevoznika, uključujući Air Serbia. Objašnjavamo i kada se po domaćim pravilima obraćate Direktoratu civilnog vazduhoplovstva RS.",
    },
  ),
  article(
    "aerodrom-nis-konstantin-veliki-kasnjenje-leta",
    "Aerodrom Niš Konstantin Veliki — kašnjenje leta i obeštećenje",
    "airport",
    "Aerodromi",
    "zašto su polasci iz Niša pokriveni Uredbom EU 261 — Wizz Air i Ryanair kao EU prevoznici na dijaspora rutama",
    {
      airportCode: "INI",
      airportName: "Niš Konstantin Veliki",
      wordCount: 1800,
      readTime: "8 min.",
      publishDate: "2026-03-20",
      excerpt:
        "Sa niškog aerodroma Konstantin Veliki lete pre svega Wizz Air i Ryanair — obe su EU avio-kompanije, pa su polasci iz Niša pokriveni Uredbom EU 261 iako Srbija nije u EU. Kod kašnjenja od 3 sata i više na dijaspora rutama ka Bazelu, Beču, Malmeu ili Memingenu sledi obeštećenje od 250 € ili 400 € po putniku.",
    },
  ),
  article(
    "aerodrom-bec-svehat-kasnjenje-leta",
    "Aerodrom Beč Švehat — kašnjenje leta: prava putnika iz Srbije",
    "airport",
    "Aerodromi",
    "polazak iz Beča je uvek pokriven Uredbom EU 261 bez obzira na avio-kompaniju — najveći hab srpske dijaspore",
    {
      airportCode: "VIE",
      airportName: "Beč Švehat",
      wordCount: 1850,
      readTime: "8 min.",
      publishDate: "2026-03-24",
      excerpt:
        "Beč Švehat je najveći hab srpske dijaspore, a svaki polazak iz Beča pokriven je Uredbom EU 261 — svejedno da li letite sa Austrian Airlines, Air Serbia ili nekom trećom kompanijom. Ruta Beč–Beograd duga je oko 490 km, pa kašnjenje leta od 3 sata i više na dolasku znači 250 € po putniku.",
    },
  ),
  article(
    "aerodrom-frankfurt-kasnjenje-leta",
    "Aerodrom Frankfurt — kašnjenje leta i propuštena veza po EU261",
    "airport",
    "Aerodromi",
    "presedanje preko mega-haba u Frankfurtu i zašto se kašnjenje meri na krajnjoj destinaciji, a ne na mestu presedanja",
    {
      airportCode: "FRA",
      airportName: "Frankfurt",
      wordCount: 2000,
      readTime: "9 min.",
      publishDate: "2026-03-28",
      excerpt:
        "Svaki polazak iz Frankfurta pokriven je Uredbom EU 261, kod bilo koje avio-kompanije. Kod presedanja preko ovog mega-haba ključno je da se kašnjenje meri na krajnjoj destinaciji, a ne na mestu presedanja — i kratko zakašnjenje koje obori vezu može doneti obeštećenje. Ruta Frankfurt–Beograd duga je oko 1270 km, što znači 250 € po putniku.",
    },
  ),
  article(
    "aerodrom-minhen-kasnjenje-leta",
    "Aerodrom Minhen — kašnjenje leta: kada imate pravo na 250 €?",
    "airport",
    "Aerodromi",
    "svaki polazak iz Minhena pokriven je Uredbom EU 261 kod svih prevoznika, a ruta od ~770 km do Beograda nosi 250 €",
    {
      airportCode: "MUC",
      airportName: "Minhen",
      wordCount: 1700,
      readTime: "7 min.",
      publishDate: "2026-04-01",
      excerpt:
        "Minhen je aerodrom u EU, pa je svaki polazak odatle pokriven Uredbom EU 261 — i sa Lufthansom i sa Air Serbia. Ruta Minhen–Beograd duga je oko 770 km, pa kašnjenje leta od 3 sata i više na dolasku donosi obeštećenje od 250 € po putniku.",
    },
  ),
  article(
    "aerodrom-cirih-kasnjenje-leta",
    "Aerodrom Cirih — kašnjenje leta i švajcarski ekvivalent EU261",
    "airport",
    "Aerodromi",
    "švajcarski ekvivalent EU261 na osnovu sporazuma EU i Švajcarske: šta polazak iz Ciriha znači za letove ka Beogradu",
    {
      airportCode: "ZRH",
      airportName: "Cirih",
      wordCount: 1900,
      readTime: "8 min.",
      publishDate: "2026-04-05",
      excerpt:
        "Švajcarska nije u EU, ali se na polaske iz Ciriha primenjuje švajcarski ekvivalent EU261 na osnovu sporazuma između EU i Švajcarske — pokriveni su i SWISS i Air Serbia. Ruta Cirih–Beograd duga je oko 1150 km, dakle ispod 1500 km, što kod kašnjenja od 3 sata i više znači 250 € po putniku.",
    },
  ),
  article(
    "aerodrom-pariz-sarl-de-gol-kasnjenje-leta",
    "Aerodrom Pariz Šarl de Gol — kašnjenje leta i obeštećenje",
    "airport",
    "Aerodromi",
    "ruta Pariz–Beograd od ~1440 km je tik ispod granice od 1500 km — kako granica dužine rute određuje iznos obeštećenja",
    {
      airportCode: "CDG",
      airportName: "Pariz Šarl de Gol",
      wordCount: 1950,
      readTime: "8 min.",
      publishDate: "2026-04-09",
      excerpt:
        "Svaki polazak sa pariskog aerodroma Šarl de Gol pokriven je Uredbom EU 261, kod bilo kog prevoznika. Ruta Pariz–Beograd duga je oko 1440 km — tik ispod granice od 1500 km, pa i za ovako dug let sledi 250 €, a ne 400 €. Objašnjavamo kako se dužina rute tačno računa i zašto je ta granica presudna.",
    },
  ),
  article(
    "aerodrom-london-hitrou-kasnjenje-leta",
    "Aerodrom London Hitrou — kašnjenje leta i obeštećenje po UK261",
    "airport",
    "Aerodromi",
    "UK261 za polaske iz Londona kod svih prevoznika i iznosi u funtama — London–Beograd spada u razred od £350",
    {
      airportCode: "LHR",
      airportName: "London Hitrou",
      uk261: true,
      wordCount: 2050,
      readTime: "9 min.",
      publishDate: "2026-04-15",
      excerpt:
        "Za polaske iz Londona posle Bregzita ne važi Uredba EU 261 nego britanski UK261 — pokriva svaki let sa Hitroua, kod bilo kog prevoznika, uključujući Air Serbia. Iznosi su u funtama: £220, £350 ili £520, a ruta London–Beograd od oko 1700 km spada u srednji razred, dakle £350 po putniku kod kašnjenja od 3 sata i više.",
    },
  ),
  article(
    "let-frankfurt-beograd-kasnjenje",
    "Let Frankfurt–Beograd kašnjenje — Lufthansa i Air Serbia po EU261",
    "route",
    "Rute i dijaspora",
    "najprometnija nemačka ruta za dijasporu: polazak iz Frankfurta je uvek pokriven EU261, bez obzira na avio-kompaniju",
    {
      routeName: "Frankfurt-Beograd",
      airlineName: "Lufthansa / Air Serbia",
      featured: true,
      wordCount: 2100,
      readTime: "9 min.",
      publishDate: "2026-04-16",
      excerpt:
        "Let Frankfurt–Beograd poleće sa EU aerodroma, pa je kod kašnjenja od 3 sata i više pokriven Uredbom EU 261 — svejedno da li letite sa Lufthansom ili Air Serbia. Ruta je duga oko 1270 km, dakle ispod 1500 km, što znači obeštećenje od 250 € po putniku. Vodič za dijasporu u Nemačkoj, korak po korak.",
    },
  ),
  article(
    "let-minhen-beograd-kasnjenje",
    "Let Minhen–Beograd kašnjenje — Lufthansa i Air Serbia: vaša prava",
    "route",
    "Rute i dijaspora",
    "ruta Minhen–Beograd za dijasporu u Bavarskoj: polazak iz Minhena je uvek pokriven EU261, ruta od ~770 km nosi 250 €",
    {
      routeName: "Minhen-Beograd",
      airlineName: "Lufthansa / Air Serbia",
      wordCount: 1700,
      readTime: "7 min.",
      publishDate: "2026-04-19",
      excerpt:
        "Let Minhen–Beograd poleće sa EU aerodroma, pa kašnjenje od 3 sata i više donosi pravo na obeštećenje po Uredbi EU 261 — i sa Lufthansom i sa Air Serbia. Ruta je duga oko 770 km, što znači fiksnih 250 € po putniku. Objašnjavamo koje dokaze da sačuvate i kako da podnesete zahtev.",
    },
  ),
  article(
    "let-pariz-beograd-kasnjenje",
    "Let Pariz–Beograd kašnjenje — Air France, Air Serbia i Wizz Air",
    "route",
    "Rute i dijaspora",
    "ruta Pariz–Beograd od ~1440 km je tik ispod granice od 1500 km — zašto obeštećenje iznosi 250 €, a ne 400 €",
    {
      routeName: "Pariz-Beograd",
      airlineName: "Air France / Air Serbia / Wizz Air",
      wordCount: 1900,
      readTime: "8 min.",
      publishDate: "2026-04-22",
      excerpt:
        "Let Pariz–Beograd poleće sa EU aerodroma, pa je kod kašnjenja od 3 sata i više pokriven Uredbom EU 261 na svakoj avio-kompaniji — Air France, Air Serbia ili Wizz Air. Ruta je duga oko 1440 km, tik ispod granice od 1500 km, pa obeštećenje iznosi 250 € po putniku, a ne 400 € — objašnjavamo pošteno kako se razdaljina računa i zašto ovde ne vredi zaokruživati.",
    },
  ),
  article(
    "let-london-beograd-kasnjenje",
    "Let London–Beograd kašnjenje — UK261 i obeštećenje od £350",
    "route",
    "Rute i dijaspora",
    "polazak iz Londona pokriva UK261 na svakoj avio-kompaniji: ruta od ~1700 km nosi £350, a za smer iz Beograda odlučuje prevoznik",
    {
      routeName: "London-Beograd",
      airlineName: "Air Serbia / Wizz Air",
      uk261: true,
      wordCount: 2000,
      readTime: "9 min.",
      publishDate: "2026-04-25",
      excerpt:
        "Let London–Beograd poleće iz Ujedinjenog Kraljevstva, pa ga pokriva UK261 bez obzira na avio-kompaniju — ruta od oko 1700 km spada u srednji razred, što znači £350 po putniku kod kašnjenja od 3 sata i više. U smeru Beograd–London UK261 štiti dolaske samo na UK/EU prevoznicima: sa Wizz Air-om jeste pokriveno, sa Air Serbia nije — objašnjavamo obe situacije.",
    },
  ),
  article(
    "let-amsterdam-beograd-kasnjenje",
    "Let Amsterdam–Beograd kašnjenje — KLM i Air Serbia po EU261",
    "route",
    "Rute i dijaspora",
    "ruta Amsterdam–Beograd od ~1560 km prelazi granicu od 1500 km: polazak iz Amsterdama nosi 400 € obeštećenja",
    {
      routeName: "Amsterdam-Beograd",
      airlineName: "KLM / Air Serbia",
      wordCount: 1800,
      readTime: "8 min.",
      publishDate: "2026-04-28",
      excerpt:
        "Let Amsterdam–Beograd poleće sa EU aerodroma, pa je kod kašnjenja od 3 sata i više pokriven Uredbom EU 261 — i sa KLM-om i sa Air Serbia. Ruta je duga oko 1560 km, dakle preko granice od 1500 km, što znači obeštećenje od 400 € po putniku. Praktičan vodič za dijasporu u Holandiji.",
    },
  ),
  article(
    "let-stokholm-beograd-kasnjenje",
    "Let Stokholm–Beograd kašnjenje — Air Serbia i Wizz Air: 400 €",
    "route",
    "Rute i dijaspora",
    "ruta Stokholm–Beograd za dijasporu u Švedskoj: polazak iz Stokholma je uvek pokriven, ruta od ~1730 km nosi 400 €",
    {
      routeName: "Stokholm-Beograd",
      airlineName: "Air Serbia / Wizz Air",
      wordCount: 1750,
      readTime: "8 min.",
      publishDate: "2026-05-01",
      excerpt:
        "Let Stokholm–Beograd poleće sa EU aerodroma, pa kašnjenje od 3 sata i više donosi obeštećenje po Uredbi EU 261 — svejedno da li letite sa Air Serbia ili Wizz Air-om. Ruta je duga oko 1730 km, dakle preko 1500 km, što znači 400 € po putniku. Vodič za našu brojnu dijasporu u Švedskoj, korak po korak.",
    },
  ),
  article(
    "let-malme-beograd-kasnjenje",
    "Let Malme–Beograd kašnjenje — Wizz Air pokriven u oba smera",
    "route",
    "Rute i dijaspora",
    "Wizz Air kao EU prevoznik na ruti Malme–Beograd: EU261 važi u oba smera, uključujući polaske iz Beograda i Niša",
    {
      routeName: "Malme-Beograd",
      airlineName: "Wizz Air",
      wordCount: 1650,
      readTime: "7 min.",
      publishDate: "2026-05-03",
      excerpt:
        "Ruta Malme–Beograd duga je oko 1280 km, pa kašnjenje od 3 sata i više nosi obeštećenje od 250 € po putniku. Pošto je Wizz Air avio-kompanija iz EU, Uredba EU 261 važi u oba smera — i kada polećete iz Malmea, i kada krećete iz Beograda ili Niša.",
    },
  ),
  article(
    "let-kopenhagen-beograd-kasnjenje",
    "Let Kopenhagen–Beograd kašnjenje — Air Serbia po EU261",
    "route",
    "Rute i dijaspora",
    "ruta Kopenhagen–Beograd za dijasporu u Danskoj: polazak sa EU aerodroma je pokriven na svakoj avio-kompaniji, ruta od ~1330 km nosi 250 €",
    {
      routeName: "Kopenhagen-Beograd",
      airlineName: "Air Serbia",
      wordCount: 1700,
      readTime: "7 min.",
      publishDate: "2025-09-15",
      excerpt:
        "Let Kopenhagen–Beograd poleće sa EU aerodroma, pa je i sa Air Serbia pokriven Uredbom EU 261 — polazak iz EU štiti putnike bez obzira na to čija avio-kompanija obavlja let. Ruta je duga oko 1330 km, dakle ispod 1500 km, što kod kašnjenja od 3 sata i više znači obeštećenje od 250 € po putniku.",
    },
  ),
  article(
    "let-stutgart-beograd-kasnjenje",
    "Let Štutgart–Beograd kašnjenje — Eurowings i Air Serbia: 250 €",
    "route",
    "Rute i dijaspora",
    "klasična gastarbajterska ruta Štutgart–Beograd: polazak iz Štutgarta je uvek pokriven EU261, ruta od ~1010 km nosi 250 €",
    {
      routeName: "Štutgart-Beograd",
      airlineName: "Eurowings / Air Serbia",
      wordCount: 1850,
      readTime: "8 min.",
      publishDate: "2025-09-29",
      excerpt:
        "Let Štutgart–Beograd, jedna od najstarijih ruta naše dijaspore u Nemačkoj, poleće sa EU aerodroma — pa je kašnjenje od 3 sata i više pokriveno Uredbom EU 261 i na Eurowings-u i na Air Serbia. Ruta je duga oko 1010 km, što znači obeštećenje od 250 € po putniku. Objašnjavamo postupak korak po korak.",
    },
  ),
  article(
    "let-bazel-beograd-kasnjenje",
    "Let Bazel–Beograd kašnjenje — Wizz Air i Air Serbia: vaša prava",
    "route",
    "Rute i dijaspora",
    "aerodrom EuroAirport Bazel leži na francuskoj teritoriji, pa se EU261 primenjuje na polaske: ruta od ~1080 km nosi 250 €",
    {
      routeName: "Bazel-Beograd",
      airlineName: "Wizz Air / Air Serbia",
      wordCount: 1800,
      readTime: "8 min.",
      publishDate: "2025-10-13",
      excerpt:
        "EuroAirport Bazel leži na francuskoj teritoriji, pa se na polaske ka Beogradu primenjuje Uredba EU 261 — i sa Wizz Air-om i sa Air Serbia. Ruta Bazel–Beograd duga je oko 1080 km, što kod kašnjenja od 3 sata i više znači obeštećenje od 250 € po putniku. Vodič za dijasporu u Švajcarskoj i pograničju.",
    },
  ),
  article(
    "let-istanbul-beograd-kasnjenje",
    "Let Istanbul–Beograd kašnjenje — zašto EU261 ovde ne važi",
    "route",
    "Rute i dijaspora",
    "ruta Istanbul–Beograd van dometa EU261: Turkish Airlines i Air Serbia nisu EU prevoznici, pa preostaju turska SHY pravila i Montrealska konvencija",
    {
      routeName: "Istanbul-Beograd",
      airlineName: "Turkish Airlines / Air Serbia",
      nonEuCarrier: true,
      wordCount: 1900,
      readTime: "8 min.",
      publishDate: "2025-10-27",
      excerpt:
        "Ruta Istanbul–Beograd, duga oko 810 km, nije pokrivena Uredbom EU 261 ni u jednom smeru — Istanbul i Beograd su van EU, a Turkish Airlines i Air Serbia nisu EU prevoznici, pa fiksni iznosi od 250 € ovde ne važe. Postoje ipak opcije: turska pravila o pravima putnika (SHY-Passenger) za letove iz Turske i Montrealska konvencija za dokazivu štetu — pišemo oprezno i bez lažnih obećanja.",
    },
  ),
  article(
    "let-njujork-beograd-kasnjenje",
    "Let Njujork–Beograd kašnjenje — kada važi EU261, a kada ne",
    "route",
    "Rute i dijaspora",
    "direktan let Air Serbia Njujork–Beograd nije pokriven EU261, ali presedanje preko EU čvorišta na EU prevozniku nosi i do 600 €",
    {
      routeName: "Njujork-Beograd",
      airlineName: "Air Serbia",
      nonEuCarrier: true,
      wordCount: 2100,
      readTime: "9 min.",
      publishDate: "2025-11-10",
      excerpt:
        "Direktan let Air Serbia Njujork–Beograd, dug oko 7250 km, nije pokriven Uredbom EU 261 ni u jednom smeru — polazak je van EU, a Air Serbia nije EU prevoznik. Ako, međutim, letite sa presedanjem preko EU čvorišta na EU avio-kompaniji, recimo Beograd–Pariz–Njujork sa Air France-om, ruta preko 3500 km ulazi u najviši razred od 600 € po putniku. Objašnjavamo i šta pokrivaju pravila američkog DOT-a.",
    },
  ),
  article(
    "let-dubai-beograd-kasnjenje",
    "Let Dubai–Beograd kašnjenje — šta možete kada EU261 ne važi",
    "route",
    "Rute i dijaspora",
    "ruta Dubai–Beograd van dometa EU261: flydubai i Air Serbia nisu EU prevoznici, pa preostaju Montrealska konvencija i dobra volja avio-kompanije",
    {
      routeName: "Dubai-Beograd",
      airlineName: "flydubai / Air Serbia",
      nonEuCarrier: true,
      wordCount: 1750,
      readTime: "8 min.",
      publishDate: "2025-11-24",
      excerpt:
        "Ruta Dubai–Beograd, duga oko 4030 km, nije pokrivena Uredbom EU 261 ni u jednom smeru — Dubai je van EU, a flydubai i Air Serbia nisu EU prevoznici, pa fiksni iznosi od 250 € do 600 € ovde ne važe. Realne opcije su Montrealska konvencija za dokazivu štetu i politika dobre volje avio-kompanije — pišemo bez ulepšavanja šta možete da očekujete.",
    },
  ),
  article(
    "let-beograd-bec-kasnjenje",
    "Let Beograd–Beč kašnjenje — zašto odlučuje avio-kompanija",
    "route",
    "Rute i dijaspora",
    "polazak iz Beograda pokriven je samo na EU prevozniku: Austrian donosi 250 €, Air Serbia ne — a povratak iz Beča je uvek pokriven",
    {
      routeName: "Beograd-Beč",
      airlineName: "Austrian Airlines / Air Serbia",
      nonEuCarrier: true,
      wordCount: 1950,
      readTime: "9 min.",
      publishDate: "2025-12-08",
      excerpt:
        "Kod leta Beograd–Beč, dugog oko 490 km, sve zavisi od toga ko obavlja let: sa Austrian Airlines-om kao EU prevoznikom imate pravo na 250 € po Uredbi EU 261, dok let sa Air Serbia iz Beograda nije pokriven jer Srbija nije u EU. Povratak Beč–Beograd je, nasuprot tome, uvek pokriven — polazak sa EU aerodroma štiti vas na svakoj avio-kompaniji.",
    },
  ),
  article(
    "strajk-avio-osoblja-obestecenje",
    "Štrajk avio-osoblja — imate li pravo na obeštećenje?",
    "special",
    "Posebne situacije",
    "zašto štrajk osoblja same avio-kompanije po pravilu nije vanredna okolnost, za razliku od štrajka kontrole letenja",
    {
      publishDate: "2026-01-05",
      wordCount: 1950,
      readTime: "8 min.",
      excerpt:
        "Prema praksi Suda EU, štrajk pilota ili kabinskog osoblja same avio-kompanije po pravilu nije vanredna okolnost — pa vam kod otkazanog leta ili kašnjenja od 3 sata i više često pripada obeštećenje od 250 € do 600 €. Sasvim je drugačije kod štrajka kontrole letenja: on jeste vanredna okolnost i oslobađa avio-kompaniju plaćanja, ali ne i obaveze brige o putnicima.",
    },
  ),
  article(
    "nevreme-otkazan-let-prava",
    "Nevreme otkazalo let — koja prava vam ipak ostaju?",
    "special",
    "Posebne situacije",
    "nevreme kao vanredna okolnost: bez novčanog obeštećenja, ali uz punu brigu, refundaciju ili preusmeravanje",
    {
      ctaPath: "/cancelled-flight",
      publishDate: "2026-01-09",
      wordCount: 1700,
      readTime: "7 min.",
      excerpt:
        "Snežna oluja, gusta magla ili grmljavina jesu vanredne okolnosti, pa avio-kompanija kod leta otkazanog zbog nevremena ne duguje novčano obeštećenje po Uredbi EU 261. Ali obaveza brige važi uvek: obroci, hotel po potrebi i izbor između refundacije i preusmeravanja pripadaju vam bez obzira na vremenske uslove.",
    },
  ),
  article(
    "tehnicki-kvar-aviona-obestecenje",
    "Tehnički kvar aviona — izgovor koji ne ukida obeštećenje",
    "special",
    "Posebne situacije",
    "zašto su tehnički kvarovi deo redovnog poslovanja avio-kompanije i po pravilu ne važe kao vanredne okolnosti",
    {
      publishDate: "2026-01-13",
      wordCount: 2000,
      readTime: "9 min.",
      excerpt:
        "Sud EU je jasan: tehnički kvarovi su deo redovnog poslovanja avio-kompanije i po pravilu nisu vanredne okolnosti — pa „tehnički problem“ najčešće ne ukida vaše pravo na 250 € do 600 €. Avio-kompanije se ipak masovno pozivaju baš na ovaj izgovor; objašnjavamo kako da odgovorite i koje dokaze da zatražite.",
    },
  ),
  article(
    "let-otkazan-na-dan-polaska",
    "Let otkazan na dan polaska — najjača pozicija za obeštećenje",
    "special",
    "Posebne situacije",
    "otkazivanje bez ikakve najave: puno obeštećenje uz stroga pravila o vremenu alternativnog leta",
    {
      ctaPath: "/cancelled-flight",
      publishDate: "2026-01-17",
      wordCount: 1900,
      readTime: "8 min.",
      excerpt:
        "Kada avio-kompanija otkaže let na sam dan polaska, izuzetak od 14 dana najave ne postoji — obeštećenje od 250 € do 600 € izbegava samo dokazanim vanrednim okolnostima ili alternativnim letom koji poleće najviše 1 sat ranije i sleće manje od 2 sata kasnije od prvobitnog reda letenja. Objašnjavamo tačne vremenske okvire i vaša prava na brigu dok čekate.",
    },
  ),
  article(
    "paket-aranzman-carter-prava-putnika",
    "Paket-aranžman i čarter let — ko vam duguje obeštećenje?",
    "special",
    "Posebne situacije",
    "odnos Uredbe EU 261 i odgovornosti organizatora putovanja kod paket-aranžmana i čarter letova",
    {
      publishDate: "2026-01-21",
      wordCount: 1850,
      readTime: "8 min.",
      excerpt:
        "Uredba EU 261 važi i za čarter letove u okviru paket-aranžmana: zahtev za obeštećenje podnosite stvarnom avio-prevozniku, potpuno nezavisno od obaveza organizatora putovanja po ugovoru o aranžmanu. To znači da 250 € do 600 € možete tražiti od avio-kompanije čak i kada vam je agencija već ponudila sopstveno rešenje.",
    },
  ),
  article(
    "preusmeren-let-na-drugi-aerodrom",
    "Let preusmeren na drugi aerodrom — prevoz i moguće obeštećenje",
    "special",
    "Posebne situacije",
    "obaveza avio-kompanije da vas preveze do prvobitnog odredišta i računanje kašnjenja kod preusmerenih letova",
    {
      publishDate: "2026-01-25",
      wordCount: 1650,
      readTime: "7 min.",
      excerpt:
        "Ako vaš avion umesto u Beogradu sleti, na primer, u Niš, avio-kompanija je dužna da o svom trošku organizuje prevoz do aerodroma na koji ste prvobitno leteli. Kašnjenje se pri tome meri po dolasku na krajnje odredište — pa preusmeravanje koje vas uspori 3 sata i više može doneti i obeštećenje od 250 € do 600 €.",
    },
  ),
  article(
    "let-pomeran-za-sutra-hotel-troskovi",
    "Let pomeren za sutra — hotel, obroci i prevoz na teret avio-kompanije",
    "special",
    "Posebne situacije",
    "prava kod noćenja zbog pomerenog leta: smeštaj, transferi i obroci uz moguće obeštećenje",
    {
      publishDate: "2026-01-29",
      wordCount: 1800,
      readTime: "8 min.",
      excerpt:
        "Kada let bude pomeren za sledeći dan, avio-kompanija duguje hotel, prevoz do smeštaja i nazad i obroke — bez obzira na razlog pomeranja. Ako uzrok nisu stvarne vanredne okolnosti, uz to ide i obeštećenje od 250 € do 600 €. Sačuvajte svaki račun: troškove koje ste sami platili možete naknadno refundirati.",
    },
  ),
  article(
    "avio-kompanija-nudi-milje-umesto-novca",
    "Avio-kompanija nudi milje umesto novca — smete da odbijete",
    "special",
    "Posebne situacije",
    "zašto je isplata u novcu podrazumevana, a milje i vaučeri važe samo uz vašu izričitu saglasnost",
    {
      voucher: true,
      publishDate: "2026-02-02",
      wordCount: 1600,
      readTime: "7 min.",
      excerpt:
        "Po Uredbi EU 261 obeštećenje se podrazumevano isplaćuje u novcu — milje, poeni ili vaučer dolaze u obzir samo uz vašu izričitu saglasnost. Ponude tipa „15.000 milja umesto 400 €“ slobodno odbijte: milje često vrede znatno manje, vezuju vas za istu avio-kompaniju i imaju rok trajanja.",
    },
  ),
  article(
    "dijaspora-austrija-obestecenje-vodic",
    "Obeštećenje za let — vodič za dijasporu u Austriji",
    "diaspora",
    "Dijaspora",
    "prava dijaspore u Austriji na rutama Beč–Beograd i nazad: koji smer je pokriven i kako se zahtev podnosi iz inostranstva",
    {
      publishDate: "2026-02-06",
      wordCount: 1900,
      readTime: "8 min.",
      excerpt:
        "Za dijasporu u Austriji ključno je jedno pravilo: svaki let iz Beča ka Beogradu pokriven je Uredbom EU 261 bez obzira na avio-kompaniju — Austrian, Air Serbia ili Wizz Air. Ruta od oko 490 km nosi 250 € po putniku, dok ste u smeru Beograd–Beč pokriveni samo kada let obavlja EU/EEA prevoznik. Zahtev podnosite jednostavno onlajn, direktno iz Austrije.",
    },
  ),
  article(
    "dijaspora-nemacka-obestecenje-vodic",
    "Obeštećenje za let — vodič za dijasporu u Nemačkoj",
    "diaspora",
    "Dijaspora",
    "letovi dijaspore iz Frankfurta, Minhena i Štutgarta ka Beogradu: pokrivenost, iznosi i podnošenje zahteva iz Nemačke",
    {
      featured: true,
      publishDate: "2026-02-10",
      wordCount: 2100,
      readTime: "9 min.",
      excerpt:
        "Svaki let sa nemačkog aerodroma ka Beogradu pokriven je Uredbom EU 261, svejedno da li letite sa Lufthansom, Air Serbia ili Wizz Air-om. Frankfurt (~1270 km), Minhen (~770 km) i Štutgart (~1010 km) svi su ispod 1500 km, pa kašnjenje od 3 sata i više donosi 250 € po putniku. Vodič za dijasporu u Nemačkoj, korak po korak.",
    },
  ),
  article(
    "dijaspora-svajcarska-obestecenje-vodic",
    "Obeštećenje za let — vodič za dijasporu u Švajcarskoj",
    "diaspora",
    "Dijaspora",
    "kako Švajcarska primenjuje pravila EU261 na polaske iz Ciriha i Bazela ka Beogradu i šta to znači za dijasporu",
    {
      publishDate: "2026-02-14",
      wordCount: 1750,
      readTime: "8 min.",
      excerpt:
        "Švajcarska nije u EU, ali primenjuje pravila ekvivalentna Uredbi EU 261 — pa su polasci iz Ciriha (~1150 km) i Bazela (~1080 km) ka Beogradu pokriveni bez obzira na avio-kompaniju. Obe rute su ispod 1500 km, što znači 250 € po putniku kod kašnjenja od 3 sata i više na dolasku. Objašnjavamo i šta važi za povratak iz Beograda.",
    },
  ),
  article(
    "dijaspora-francuska-obestecenje-vodic",
    "Obeštećenje za let — vodič za dijasporu u Francuskoj",
    "diaspora",
    "Dijaspora",
    "prava dijaspore u Francuskoj na ruti Pariz–Beograd: pokrivenost polazaka iz Pariza i podnošenje zahteva iz inostranstva",
    {
      publishDate: "2026-02-18",
      wordCount: 1700,
      readTime: "7 min.",
      excerpt:
        "Svaki let iz Pariza ka Beogradu pokriven je Uredbom EU 261, bez obzira na to da li letite sa Air Serbia ili nekim EU prevoznikom. Ruta Pariz–Beograd duga je oko 1440 km — tik ispod granice od 1500 km — pa kašnjenje od 3 sata i više donosi 250 € po putniku. U smeru Beograd–Pariz pokriveni ste samo sa EU/EEA avio-kompanijom.",
    },
  ),
  article(
    "dijaspora-svedska-obestecenje-vodic",
    "Obeštećenje za let — vodič za dijasporu u Švedskoj",
    "diaspora",
    "Dijaspora",
    "letovi dijaspore iz Stokholma i Malmea ka Beogradu: dva različita iznosa obeštećenja i postupak iz Švedske",
    {
      publishDate: "2026-02-22",
      wordCount: 1850,
      readTime: "8 min.",
      excerpt:
        "Polasci sa švedskih aerodroma ka Beogradu uvek su pokriveni Uredbom EU 261, bez obzira na avio-kompaniju. Iznos zavisi od dužine rute: Stokholm–Beograd (~1730 km) nosi 400 €, a Malme–Beograd (~1280 km) 250 € po putniku. Objašnjavamo koji smer je pokriven, kako se meri kašnjenje na dolasku i kako da podnesete zahtev iz Švedske.",
    },
  ),
  article(
    "dijaspora-velika-britanija-obestecenje-vodic",
    "Obeštećenje za let — vodič za dijasporu u Velikoj Britaniji",
    "diaspora",
    "Dijaspora",
    "UK261 pravila za dijasporu u Britaniji: polasci iz Londona ka Beogradu, iznosi u funtama i razlika između prevoznika na povratku",
    {
      uk261: true,
      publishDate: "2026-02-26",
      wordCount: 2000,
      readTime: "9 min.",
      excerpt:
        "Posle Bregzita u Britaniji važi UK261: svaki let iz Londona ka Beogradu pokriven je bez obzira na avio-kompaniju, a ruta od oko 1700 km nosi £350 po putniku. Na povratku Beograd–London pokriveni ste sa Wizz Air-om, ali sa Air Serbia po pravilu niste — objašnjavamo zašto i kako da podnesete zahtev iz Ujedinjenog Kraljevstva.",
    },
  ),
];

export const blogArticlesSrSorted = [...blogArticlesSr].sort((articleA, articleB) =>
  articleB.publishDate.localeCompare(articleA.publishDate) ||
  Number(articleB.featured) - Number(articleA.featured) ||
  articleA.title.localeCompare(articleB.title, "sr-Latn"),
);

export function getCategoryLabelSr(category: BlogArticleSrCategory | string) {
  const labels: Record<BlogArticleSrCategory, string> = {
    snippet: "Kratki odgovori",
    foundation: "Zakon i prava",
    airline: "Avio-kompanije",
    airport: "Aerodromi",
    route: "Rute",
    special: "Posebne situacije",
    diaspora: "Dijaspora",
  };

  return labels[category as BlogArticleSrCategory] || category;
}

export function getSrArticleBySlug(slug: string) {
  return blogArticlesSr.find((article) => article.slug === slug);
}
