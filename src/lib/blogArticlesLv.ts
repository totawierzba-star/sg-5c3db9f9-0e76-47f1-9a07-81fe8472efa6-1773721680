export type BlogArticleLvCategory =
  | "answers"
  | "foundation"
  | "airlines"
  | "airports"
  | "routes"
  | "situations"
  | "diaspora";

export type BlogArticleLvCtaPath = "/delayed-flight" | "/cancelled-flight";

export interface BlogArticleLv {
  id: string;
  title: string;
  slug: string;
  category: BlogArticleLvCategory;
  cluster: string;
  focus: string;
  excerpt: string;
  publishDate: string;
  updatedDate: string;
  readTime: string;
  wordCount: number;
  featured: boolean;
  ctaPath: BlogArticleLvCtaPath;
  airlineName?: string;
  routeName?: string;
  airportCode?: string;
  airportName?: string;
  nonEuCarrier?: boolean;
  uk261?: boolean;
  localAuthority?: boolean;
  limitation?: boolean;
  voucher?: boolean;
  ota?: boolean;
  business?: boolean;
  cancelledCase?: boolean;
  technical?: boolean;
  miles?: boolean;
}

const publishDate = "2026-04-26";

function article(
  slug: string,
  title: string,
  category: BlogArticleLvCategory,
  cluster: string,
  focus: string,
  options: Partial<BlogArticleLv> = {},
): BlogArticleLv {
  return {
    id: slug,
    slug,
    title,
    category,
    cluster,
    focus,
    excerpt:
      options.excerpt ||
      `${title}: praktisks ceļvedis Latvijas pasažieriem par EK 261, UK261, pierādījumiem, termiņiem un kompensāciju līdz 600 EUR.`,
    publishDate,
    updatedDate: publishDate,
    readTime: options.readTime || "8 min.",
    wordCount: options.wordCount || 1800,
    featured: false,
    ctaPath: "/delayed-flight",
    ...options,
  };
}

export const blogArticlesLv: BlogArticleLv[] = [
  article(
    "es-regula-ek-261-2004-latvijas-pasazieri",
    "ES regula EK 261/2004 — pilnīga rokasgrāmata Latvijas pasažieriem",
    "foundation",
    "Tiesības un pamatprincipi",
    "kad EK 261 attiecas uz Latvijas pasažieriem, kā darbojas 250, 400 un 600 EUR robežas un kā sagatavot prasību",
    { featured: true, wordCount: 2200, readTime: "10 min." },
  ),
  article(
    "ek-261-reisi-arpus-eiropas-kad-attiecas",
    "Vai EK 261 attiecas uz reisiem ārpus Eiropas? — kad jā, kad nē",
    "foundation",
    "Tiesības un pamatprincipi",
    "Turcija, Dubaija, Izraēla, Ēģipte un atšķirība starp izlidošanu no ES un atgriešanos ar ne ES pārvadātāju",
    { nonEuCarrier: true, featured: true },
  ),
  article(
    "arkartas-apstakli-lidojumi-nav-jamaksa",
    "Ārkārtas apstākļi lidojumos — kad aviokompānijai NAV jāmaksā kompensācija?",
    "foundation",
    "Tiesības un pamatprincipi",
    "kā atšķirt īstus ārkārtas apstākļus no tehniskām vai operatīvām problēmām, par kurām aviokompānija var atbildēt",
  ),
  article(
    "caa-latvija-ptac-sudziba-lidojuma-kavesanas",
    "CAA Latvija un PTAC — kā iesniegt sūdzību par lidojuma kavēšanos?",
    "foundation",
    "Tiesības un pamatprincipi",
    "Civilās aviācijas aģentūra, PTAC, pierādījumi un eskalācijas ceļš pēc aviokompānijas atteikuma",
    { localAuthority: true, featured: true },
  ),
  article(
    "prasibas-noilgums-termins-kompensacija-latvija",
    "Prasības noilguma termiņš — cik ilgi var pieprasīt kompensāciju Latvijā?",
    "foundation",
    "Tiesības un pamatprincipi",
    "3 gadu noilgums Latvijā, dokumentu saglabāšana un rīcība ar vecākiem lidojumiem",
    { limitation: true, featured: true },
  ),
  article(
    "kupons-vai-nauda-jums-japienem-kupons",
    "Kupons vai nauda — vai jums jāpieņem aviokompānijas piedāvātais kupons?",
    "foundation",
    "Tiesības un pamatprincipi",
    "kad kupons ir tikai izvēle, kā nepazaudēt tiesības uz naudas atmaksu vai kompensāciju",
    { voucher: true },
  ),
  article("airbaltic-lidojuma-kavesanas-kompensacijas-rokasgramata", "airBaltic lidojuma kavēšanās — kompensācijas pieprasīšanas rokasgrāmata", "airlines", "airBaltic", "airBaltic kavēšanās, EK 261 un praktiska prasības sagatavošana Latvijas pasažieriem", { airlineName: "airBaltic", featured: true, wordCount: 2300, readTime: "10 min." }),
  article("airbaltic-atteica-kompensaciju-piespiest-maksat", "airBaltic atteica kompensāciju — kā piespiest aviokompāniju maksāt?", "airlines", "airBaltic", "atteikuma iemeslu pārbaude, pierādījumi un nākamie soļi, ja airBaltic atsaucas uz izņēmumiem", { airlineName: "airBaltic", featured: true, localAuthority: true }),
  article("airbaltic-atcela-lidojumu-jusu-tiesibas", "airBaltic atcēla lidojumu — jūsu tiesības soli pa solim", "airlines", "airBaltic", "airBaltic atcelts lidojums, 14 dienu robeža, alternatīvais reiss, atmaksa un kompensācija", { airlineName: "airBaltic", ctaPath: "/cancelled-flight", cancelledCase: true, featured: true }),
  article("airbaltic-tehnisks-defekts-arkartas-apstaklis", "airBaltic tehnisks defekts — ārkārtas apstāklis vai nē?", "airlines", "airBaltic", "tehniskas kļūmes un kad tās nav pietiekams pamats airBaltic kompensācijas atteikumam", { airlineName: "airBaltic", technical: true, featured: true }),
  article("airbaltic-kupons-vai-nauda-pieprasit-skaidru", "airBaltic kupons vai nauda — kā pieprasīt skaidru naudu?", "airlines", "airBaltic", "airBaltic kuponi, naudas atmaksa un fiksētā kompensācija kā atsevišķas tiesības", { airlineName: "airBaltic", voucher: true }),
  article("airbaltic-overbooking-iekapsanas-atteikums-600", "airBaltic overbooking — iekāpšanas atteikums un kompensācija līdz €600", "airlines", "airBaltic", "atteikta iekāpšana airBaltic reisā, overbooking un kompensācija par pasažieri", { airlineName: "airBaltic", featured: true }),
  article("airbaltic-streiks-kompensacija-pienakas", "airBaltic streiks — kad kompensācija pienākas un kad nē?", "airlines", "airBaltic", "streiku atšķirības, aviokompānijas darbinieki, lidostas vai gaisa satiksmes ierobežojumi", { airlineName: "airBaltic" }),
  article("airbaltic-nokavets-savienojums-riga-atbildigs", "airBaltic nokavēts savienojums Rīgā — kurš ir atbildīgs?", "airlines", "airBaltic", "Rīga kā airBaltic hub, viena rezervācija, nokavēts savienojums un galamērķa kavēšanās", { airlineName: "airBaltic", airportCode: "RIX", airportName: "Rīgas lidosta", featured: true }),
  article("ryanair-kavesanas-latvija-ek261-rokasgramata", "Ryanair kavēšanās no Latvijas — EK 261 rokasgrāmata soli pa solim", "airlines", "Ryanair", "Ryanair kā ES pārvadātājs, kavēšanās no Rīgas un kompensācija līdz 600 EUR", { airlineName: "Ryanair", featured: true }),
  article("ryanair-atteica-kompensaciju-cinities-uzvaret", "Ryanair atteica kompensāciju — kā cīnīties un uzvarēt?", "airlines", "Ryanair", "Ryanair atteikuma iemesli, pierādījumu komplekts un eskalācija Latvijas pasažieriem", { airlineName: "Ryanair", featured: true, localAuthority: true }),
  article("ryanair-atcela-lidojumu-tiesibas-iespejas", "Ryanair atcēla lidojumu — jūsu tiesības un iespējas", "airlines", "Ryanair", "Ryanair atcelts reiss, atmaksa, pārrutēšana un kompensācijas iespēja", { airlineName: "Ryanair", ctaPath: "/cancelled-flight", cancelledCase: true }),
  article("norwegian-kavesanas-latvija-ek261", "Norwegian kavēšanās no Latvijas — EK 261 Skandināvijas zemo izmaksu reisiem", "airlines", "Eiropas aviokompānijas", "Norwegian reisi, Skandināvijas maršruti un EK 261 darbība Latvijas pasažieriem", { airlineName: "Norwegian" }),
  article("lufthansa-kavesanas-riga-ek261-vienmer", "Lufthansa kavēšanās no Rīgas — EK 261 vienmēr attiecas", "airlines", "Eiropas aviokompānijas", "Lufthansa kā ES pārvadātājs, Rīga-Frankfurte un savienojumi vienā rezervācijā", { airlineName: "Lufthansa", featured: true }),
  article("ryanair-uk-kavesanas-ek261-uk261-brexit", "Ryanair UK kavēšanās — EK 261 vai UK261 pēc Brexit?", "airlines", "Eiropas aviokompānijas", "Ryanair UK struktūra, lidojumi no Lielbritānijas un UK261 atšķirība pēc Brexit", { airlineName: "Ryanair UK", uk261: true, featured: true }),
  article("lot-polish-airlines-kavesanas-varsava-ek261", "LOT Polish Airlines kavēšanās — Varšava EK 261", "airlines", "Eiropas aviokompānijas", "LOT reisi caur Varšavu, viena rezervācija un kompensācija, ja savienojums izjūk", { airlineName: "LOT Polish Airlines" }),
  article("finnair-kavesanas-helsinku-ek261", "Finnair kavēšanās — Helsinku EK 261 rokasgrāmata", "airlines", "Eiropas aviokompānijas", "Finnair savienojumi caur Helsinkiem un tiesības, ja galamērķī ierodaties vēlu", { airlineName: "Finnair" }),
  article("sas-kavesanas-riga-ek261-skandinavija", "SAS kavēšanās no Rīgas — EK 261 Skandināvijas maršrutiem", "airlines", "Eiropas aviokompānijas", "SAS, Kopenhāgena, Stokholma un kompensācija Latvijas pasažieriem", { airlineName: "SAS" }),
  article("easyjet-kavesanas-latvija-ek261-2026", "easyJet kavēšanās no Latvijas — EK 261 2026", "airlines", "Eiropas aviokompānijas", "easyJet kā Eiropas pārvadātājs, zemo izmaksu biļetes un vienādas EK 261 tiesības", { airlineName: "easyJet" }),
  article("wizz-air-kavesanas-riga-ek261-kupons", "Wizz Air kavēšanās no Rīgas — EK 261 vai kupons?", "airlines", "Eiropas aviokompānijas", "Wizz Air, kupona piedāvājums un tiesības prasīt naudu, ja nosacījumi ir izpildīti", { airlineName: "Wizz Air", voucher: true }),
  article("british-airways-kavesanas-ek261-uk261-brexit", "British Airways kavēšanās — EK 261 un UK261 pēc Brexit", "airlines", "Eiropas aviokompānijas", "British Airways, lidojumi no Rīgas un no Londonas, EK 261 vai UK261 izvēle", { airlineName: "British Airways", uk261: true }),
  article("turkish-airlines-kavesanas-riga-ek261-attiecas", "Turkish Airlines kavēšanās no Rīgas — vai EK 261 attiecas?", "airlines", "Ne ES aviokompānijas", "Turkish Airlines kā ne ES pārvadātājs, lidojums no Rīgas un atgriešanās no Stambulas", { airlineName: "Turkish Airlines", nonEuCarrier: true, featured: true }),
  article("flydubai-kavesanas-riga-dubaja-ek261", "flydubai kavēšanās no Rīgas — EK 261 lidojumiem uz Dubaiju", "airlines", "Ne ES aviokompānijas", "flydubai kā ne ES pārvadātājs, Rīga-Dubaija un atgriešanās lidojuma atšķirība", { airlineName: "flydubai", nonEuCarrier: true, featured: true }),
  article("utair-kavesanas-hurgada-ek261-krievijas", "UTair kavēšanās — Hurgada un EK 261 krievu aviokompānijai", "airlines", "Ne ES aviokompānijas", "UTair, Rīga-Hurgada, ne ES pārvadātājs un EK 261 tikai pareizajā virzienā", { airlineName: "UTair", nonEuCarrier: true }),
  article("uzbekistan-airways-kavesanas-riga-ek261", "Uzbekistan Airways kavēšanās no Rīgas — vai EK 261 attiecas?", "airlines", "Ne ES aviokompānijas", "Uzbekistan Airways kā ne ES pārvadātājs un EK 261 piemērošana izlidojot no Rīgas", { airlineName: "Uzbekistan Airways", nonEuCarrier: true }),
  article("rigas-lidosta-rix-tiesibas-kavesanas-atcelsanas", "Rīgas lidosta (RIX) — tiesības kavēšanās vai atcelšanas gadījumā", "airports", "Lidostas", "RIX kā galvenā Latvijas lidosta, aprūpes tiesības, kompensācija un pierādījumi", { airportCode: "RIX", airportName: "Rīgas lidosta", featured: true }),
  article("nokavets-savienojums-riga-atbildigs-kompensacija", "Nokavēts savienojums Rīgā — kurš ir atbildīgs un kā saņemt kompensāciju?", "airports", "Lidostas", "viena rezervācija, airBaltic hub Rīgā un galamērķa kavēšanās princips", { airportCode: "RIX", airportName: "Rīgas lidosta", featured: true }),
  article("ilga-kavesanas-rigas-lidosta-viesnica-ediens", "Ilga kavēšanās Rīgas lidostā — viesnīca, ēdiens, transports: kurš maksā?", "airports", "Lidostas", "aprūpes tiesības gaidīšanas laikā RIX, viesnīca, ēdiens, transports un čeki", { airportCode: "RIX", airportName: "Rīgas lidosta" }),
  article("streiki-rigas-lidosta-kompensacija-pienakas", "Streiki Rīgas lidostā — kad jums pienākas kompensācija?", "airports", "Lidostas", "lidostas, gaisa satiksmes vai aviokompānijas darbinieku streiku atšķirība", { airportCode: "RIX", airportName: "Rīgas lidosta" }),
  article("riga-tranzits-ek261-tiesibas-savienojums", "Rīga kā tranzīta lidosta — EK 261 tiesības savienojuma lidojumiem", "airports", "Lidostas", "Rīga kā tranzīta mezgls, viena rezervācija un kompensācija nokavēta savienojuma gadījumā", { airportCode: "RIX", airportName: "Rīgas lidosta" }),
  article("lidojums-londona-latvija-kavejas-uk261-brexit", "Lidojums no Londonas uz Latviju kavējas — UK261 pēc Brexit", "diaspora", "Diaspora UK un Īrijā", "Londonas lidostas, UK261 pēc Brexit un atšķirība no EK 261", { routeName: "Londona-Latvija", uk261: true, featured: true }),
  article("londona-stansted-riga-kavejas-ryanair-uk261", "Lidojums Londonas Stansted–Rīga kavējas — Ryanair UK261", "diaspora", "Diaspora UK un Īrijā", "Stansted-Rīga, Ryanair un UK261 Latvijas diasporai", { routeName: "Londonas Stansted-Rīga", airlineName: "Ryanair", uk261: true, featured: true }),
  article("londona-luton-riga-kavejas-wizz-air-uk261", "Lidojums Londonas Luton–Rīga kavējas — Wizz Air UK261", "diaspora", "Diaspora UK un Īrijā", "Luton-Rīga, Wizz Air un UK261 pēc Brexit", { routeName: "Londonas Luton-Rīga", airlineName: "Wizz Air", uk261: true }),
  article("birmingema-riga-kavejas-ryanair-uk261", "Lidojums Birmingema–Rīga kavējas — Ryanair UK261", "diaspora", "Diaspora UK un Īrijā", "Birmingema-Rīga, Ryanair, Latvijas diaspora un UK261 kompensācija", { routeName: "Birmingema-Rīga", airlineName: "Ryanair", uk261: true, featured: true }),
  article("dublina-riga-kavejas-ryanair-ek261", "Lidojums Dublina–Rīga kavējas — Ryanair EK 261 tiesības", "diaspora", "Diaspora UK un Īrijā", "Dublina-Rīga, Īrijas ES statuss un Ryanair kompensācija Latvijas pasažieriem", { routeName: "Dublina-Rīga", airlineName: "Ryanair", featured: true }),
  article("uk261-ek261-atskiriba-latviesiem-brexit", "UK261 un EK 261 — kāda ir atšķirība latviešiem pēc Brexit?", "diaspora", "Diaspora UK un Īrijā", "praktiska atšķirība starp lidojumu no Latvijas un atgriešanos no Apvienotās Karalistes", { uk261: true, featured: true }),
  article("atgriesanas-lidojums-lielbritanija-uk261-ne-ek261", "Atgriešanās lidojums no Lielbritānijas — UK261, nevis EK 261", "diaspora", "Diaspora UK un Īrijā", "kāpēc lidojums no UK uz Latviju pēc Brexit jāvērtē pēc UK261", { uk261: true }),
  article("lielbritanija-mazas-lidostas-uk261-bristol-leeds", "Lielbritānijas mazās lidostas — UK261 reisiem no Bristol, Leeds, Edinburga", "diaspora", "Diaspora UK un Īrijā", "Bristol, Leeds Bradford, Edinburga un mazāku UK lidostu kompensācijas noteikumi", { uk261: true }),
  article("lidojums-riga-londona-kavejas-airbaltic-ryanair", "Lidojums Rīga–Londona kavējas — airBaltic, Ryanair un EK 261", "routes", "Maršruti Eiropā", "Rīga-Londona, airBaltic, Ryanair, virziens un EK 261 vai UK261 robeža", { routeName: "Rīga-Londona", airlineName: "airBaltic / Ryanair", uk261: true, featured: true }),
  article("lidojums-riga-dublina-kavejas-ryanair-ek261", "Lidojums Rīga–Dublina kavējas — Ryanair EK 261", "routes", "Maršruti Eiropā", "Rīga-Dublina, Ryanair un Īrijas maršruti Latvijas diasporai", { routeName: "Rīga-Dublina", airlineName: "Ryanair", featured: true }),
  article("lidojums-riga-oslo-kavejas-norwegian-airbaltic", "Lidojums Rīga–Oslo kavējas — Norwegian un airBaltic", "routes", "Maršruti Eiropā", "Rīga-Oslo, Norwegian, airBaltic un Skandināvijas darba maršruti", { routeName: "Rīga-Oslo", airlineName: "Norwegian / airBaltic" }),
  article("lidojums-riga-stokholma-kavejas-airbaltic-sas", "Lidojums Rīga–Stokholma kavējas — airBaltic un SAS", "routes", "Maršruti Eiropā", "Rīga-Stokholma, īss ES/EEZ maršruts un 250 EUR loģika", { routeName: "Rīga-Stokholma", airlineName: "airBaltic / SAS" }),
  article("lidojums-riga-berline-kavejas-airbaltic-ryanair", "Lidojums Rīga–Berlīne kavējas — airBaltic un Ryanair", "routes", "Maršruti Eiropā", "Rīga-Berlīne, zemo izmaksu reisi un EK 261 darbība", { routeName: "Rīga-Berlīne", airlineName: "airBaltic / Ryanair" }),
  article("lidojums-riga-frankfurte-kavejas-lufthansa-airbaltic", "Lidojums Rīga–Frankfurte kavējas — Lufthansa un airBaltic", "routes", "Maršruti Eiropā", "Rīga-Frankfurte, Lufthansa hub un savienojumi vienā rezervācijā", { routeName: "Rīga-Frankfurte", airlineName: "Lufthansa / airBaltic", featured: true }),
  article("lidojums-riga-amsterdama-kavejas-airbaltic", "Lidojums Rīga–Amsterdama kavējas — airBaltic un EK 261", "routes", "Maršruti Eiropā", "Rīga-Amsterdama, Schiphol savienojumi un airBaltic atbildība", { routeName: "Rīga-Amsterdama", airlineName: "airBaltic" }),
  article("lidojums-riga-parize-kavejas-airbaltic", "Lidojums Rīga–Parīze kavējas — airBaltic EK 261", "routes", "Maršruti Eiropā", "Rīga-Parīze, airBaltic un kompensācija pēc attāluma", { routeName: "Rīga-Parīze", airlineName: "airBaltic" }),
  article("lidojums-riga-roma-kavejas-airbaltic-ryanair", "Lidojums Rīga–Roma kavējas — airBaltic un Ryanair", "routes", "Maršruti Eiropā", "Rīga-Roma, atvaļinājuma maršruti un zemo izmaksu aviokompānijas", { routeName: "Rīga-Roma", airlineName: "airBaltic / Ryanair" }),
  article("lidojums-riga-barselona-kavejas-airbaltic-ryanair", "Lidojums Rīga–Barselona kavējas — airBaltic un Ryanair", "routes", "Maršruti Eiropā", "Rīga-Barselona, vidēja attāluma ES maršruts un 400 EUR robeža", { routeName: "Rīga-Barselona", airlineName: "airBaltic / Ryanair" }),
  article("lidojums-riga-varsava-kavejas-lot-airbaltic", "Lidojums Rīga–Varšava kavējas — LOT un airBaltic", "routes", "Maršruti Eiropā", "Rīga-Varšava, LOT savienojumi un viena rezervācija", { routeName: "Rīga-Varšava", airlineName: "LOT / airBaltic" }),
  article("lidojums-riga-kopenhagena-kavejas-airbaltic-sas", "Lidojums Rīga–Kopenhāgena kavējas — airBaltic un SAS", "routes", "Maršruti Eiropā", "Rīga-Kopenhāgena, SAS, airBaltic un Skandināvijas savienojumi", { routeName: "Rīga-Kopenhāgena", airlineName: "airBaltic / SAS" }),
  article("lidojums-riga-helsinki-kavejas-finnair-airbaltic", "Lidojums Rīga–Helsinki kavējas — Finnair un airBaltic", "routes", "Maršruti Eiropā", "Rīga-Helsinki, Finnair hub un tālāki savienojumi", { routeName: "Rīga-Helsinki", airlineName: "Finnair / airBaltic" }),
  article("lidojums-riga-malaga-alicante-kavejas-airbaltic", "Lidojums Rīga–Malaga vai Alicante kavējas — airBaltic", "routes", "Maršruti Eiropā", "Rīga-Malaga, Rīga-Alicante, sezonas ceļojumi un EK 261", { routeName: "Rīga-Malaga / Alicante", airlineName: "airBaltic" }),
  article("lidojums-riga-tenerife-kavejas-airbaltic", "Lidojums Rīga–Tenerife kavējas — airBaltic EK 261 Kanāriju salas", "routes", "Maršruti Eiropā", "Tenerife kā ES teritorija, airBaltic un kompensācija arī atgriešanās virzienā", { routeName: "Rīga-Tenerife", airlineName: "airBaltic", featured: true }),
  article("lidojums-riga-stambula-turkish-ek261", "Lidojums Rīga–Stambula kavējas — Turkish Airlines un EK 261", "routes", "Maršruti ārpus ES", "Turkish Airlines, Rīga-Stambula un atgriešanās no Stambulas ar ne ES pārvadātāju", { routeName: "Rīga-Stambula", airlineName: "Turkish Airlines", nonEuCarrier: true, featured: true }),
  article("lidojums-riga-dubaja-flydubai-airbaltic", "Lidojums Rīga–Dubaja kavējas — flydubai vs airBaltic: kurš maksā?", "routes", "Maršruti ārpus ES", "flydubai un airBaltic salīdzinājums, Dubaija un virziena nozīme EK 261", { routeName: "Rīga-Dubaja", airlineName: "flydubai / airBaltic", nonEuCarrier: true, featured: true }),
  article("lidojums-riga-hurgada-airbaltic-utair-ek261", "Lidojums Rīga–Hurgada kavējas — airBaltic vs UTair: EK 261 atšķirība", "routes", "Maršruti ārpus ES", "airBaltic kā ES pārvadātājs, UTair kā ne ES pārvadātājs un Rīga-Hurgada atšķirības", { routeName: "Rīga-Hurgada", airlineName: "airBaltic / UTair", nonEuCarrier: true, featured: true }),
  article("lidojums-riga-telaviva-airbaltic-ek261", "Lidojums Rīga–Telaviva kavējas — airBaltic un EK 261", "routes", "Maršruti ārpus ES", "Rīga-Telaviva, airBaltic sezonas reisi un EK 261 aizsardzība ar ES pārvadātāju", { routeName: "Rīga-Telaviva", airlineName: "airBaltic" }),
  article("atgriesanas-lidojums-turcija-dubaja-ek261", "Atgriešanās lidojums no Turcijas/Dubaijas — vai EK 261 aizsargā?", "routes", "Maršruti ārpus ES", "kāpēc atgriešanās ar Turkish vai flydubai bieži nav EK 261, bet airBaltic var būt citādi", { nonEuCarrier: true, featured: true }),
  article("overbooking-iekapsanas-atteikums-kompensacija-600", "Overbooking — iekāpšanas atteikums un kompensācija līdz €600", "situations", "Īpašas situācijas", "atteikta iekāpšana, pārdots lidojums un fiksētā kompensācija par pasažieri", { featured: true }),
  article("downgrade-lidojat-zemaka-klase-atgut-naudu", "Downgrade — lidojāt zemākā klasē: kā atgūt naudu?", "situations", "Īpašas situācijas", "pārsēdināšana zemākā klasē, procentuāla biļetes daļas atmaksa un dokumenti"),
  article("cartera-lidojums-kavejas-ek261-atvalinajuma", "Čartera lidojums kavējas — vai EK 261 attiecas uz atvaļinājuma reisiem?", "situations", "Īpašas situācijas", "čarteri, tūrisma paketes, atvaļinājuma lidojumi un faktiskā pārvadātāja nozīme"),
  article("bilete-iegadata-ota-booking-esky-kompensacija", "Biļete iegādāta caur OTA (Booking, eSky) — vai tas ietekmē kompensāciju?", "situations", "Īpašas situācijas", "Booking.com, eSky, airBaltic.com, starpnieks un prasība pret faktisko pārvadātāju", { ota: true }),
  article("grupu-celojums-kavejas-kolektiva-prasiba", "Grupu ceļojums kavējas — kolektīvā prasība", "situations", "Īpašas situācijas", "ģimenes, darba un grupu rezervācijas, kur vairākiem pasažieriem var būt atsevišķas prasības"),
  article("aviokompanija-bankroteja-prasiba", "Aviokompānija bankrotēja — kas notiek ar jūsu prasību?", "situations", "Īpašas situācijas", "bankrots, maksātnespēja, kompensācijas prasība un atmaksa caur karti vai starpnieku"),
  article("nakts-kavesanas-viesnica-transports-kurs-maksa", "Nakts kavēšanās — viesnīca un transports: kurš maksā?", "situations", "Īpašas situācijas", "tiesības uz viesnīcu, ēdienu un transportu, ja pasažieris iestrēgst naktī", { featured: true }),
  article("komandejums-uznemums-darbinieks-kompensacija", "Komandējums — uzņēmums vai darbinieks saņem kompensāciju?", "situations", "Īpašas situācijas", "komandējuma biļetes, darba devējs, darbinieks un fiksētā EK 261 kompensācija", { business: true }),
  article("cik-liela-kompensacija-kavets-lidojums-250-400-600", "Cik liela kompensācija par kavētu lidojumu? €250, €400 vai €600", "answers", "Īsās atbildes", "kompensācijas summas pēc attāluma un kā tās piemēro Latvijas pasažieriem", { featured: true, wordCount: 2100, readTime: "9 min." }),
  article("no-cik-stundam-kavesanas-pienakas-kompensacija", "No cik stundām kavēšanās pienākas kompensācija?", "answers", "Īsās atbildes", "3 stundu ierašanās kavēšanās slieksnis un atšķirība starp izlidošanas un ierašanās kavēšanos", { featured: true }),
  article("ek261-attiecas-airbaltic", "Vai EK 261 attiecas uz airBaltic?", "answers", "Īsās atbildes", "tieša atbilde, kāpēc airBaltic kā ES pārvadātājam EK 261 parasti attiecas", { airlineName: "airBaltic", featured: true, wordCount: 2200, readTime: "9 min." }),
  article("ek261-attiecas-ne-eiropas-aviokompanijam", "Vai EK 261 attiecas uz ne-Eiropas aviokompānijām?", "answers", "Īsās atbildes", "kad ne ES pārvadātājs ir aptverts izlidojot no Rīgas un kad atgriešanās lidojums nav aizsargāts", { nonEuCarrier: true, featured: true }),
  article("kas-ir-arkartas-apstakli-lidojumos", "Kas ir ārkārtas apstākļi lidojumos?", "answers", "Īsās atbildes", "laikapstākļi, gaisa satiksmes kontrole, tehniskas kļūmes un pierādīšanas pienākums"),
  article("cik-ilgi-jagaida-kompensacija-aviokompanija", "Cik ilgi jāgaida kompensācija no aviokompānijas?", "answers", "Īsās atbildes", "reālistiski termiņi atbildei, maksājumam, atteikumam un eskalācijai"),
  article("ko-darit-aviokompanija-neatbild-sudziba", "Ko darīt, ja aviokompānija neatbild uz sūdzību?", "answers", "Īsās atbildes", "atgādinājums, pierādījumu komplekts, CAA Latvija, PTAC un nākamie soļi", { localAuthority: true }),
  article("pienakas-kompensacija-2-stundu-kavesanos", "Vai man pienākas kompensācija par 2 stundu kavēšanos?", "answers", "Īsās atbildes", "aprūpes tiesības pie 2 stundu kavēšanās un kāpēc naudas kompensācijai parasti vajag 3 stundas"),
  article("cik-ilgi-pieprasit-kompensaciju-kavets-lidojums", "Cik ilgi var pieprasīt kompensāciju par kavētu lidojumu?", "answers", "Īsās atbildes", "Latvijas 3 gadu noilguma praktiskā nozīme un dokumentu saglabāšana", { limitation: true, featured: true }),
  article("var-pieprasit-kompensaciju-lidojums-pirms-3-gadiem", "Vai var pieprasīt kompensāciju par lidojumu pirms 3 gadiem?", "answers", "Īsās atbildes", "robežsituācijas ap 3 gadu termiņu, pierādījumi un kāpēc jārīkojas ātri", { limitation: true, featured: true }),
  article("japienem-kupons-vieta-naudas", "Vai man jāpieņem kupons tā vietā, lai saņemtu naudu?", "answers", "Īsās atbildes", "kupona riski, naudas atmaksa un kompensācija kā atsevišķas tiesības", { voucher: true }),
  article("ek261-attiecas-turcija-dubaja", "Vai EK 261 attiecas uz lidojumiem uz Turciju vai Dubaiju?", "answers", "Īsās atbildes", "Turcija, Dubaija, airBaltic, Turkish, flydubai un virziena nozīme", { nonEuCarrier: true, featured: true }),
  article("ek261-attiecas-cartera-lidojumiem", "Vai EK 261 attiecas uz čartera lidojumiem?", "answers", "Īsās atbildes", "čartera un atvaļinājuma reisi no Latvijas, tūrisma paketes un faktiskā pārvadātāja atbildība"),
  article("atskiriba-ek261-uk261", "Kāda ir atšķirība starp EK 261 un UK261?", "answers", "Īsās atbildes", "Brexit, UK261, lidojumi no Londonas un kompensācijas līdzība ar EK 261", { uk261: true, featured: true }),
  article("airbaltic-kavesanas-pienakas-600-eiro", "airBaltic kavēšanās — vai man pienākas €600?", "answers", "Īsās atbildes", "kad airBaltic kavēšanās var sasniegt 600 EUR un kad summa ir 250 vai 400 EUR", { airlineName: "airBaltic", featured: true }),
  article("ryanair-atteica-kompensaciju-ko-darit-latvija", "Ryanair atteica kompensāciju — ko darīt Latvijā?", "answers", "Īsās atbildes", "Ryanair atteikums, pierādījumi, CAA/PTAC konteksts un ClaimWinger pārbaude", { airlineName: "Ryanair", localAuthority: true, featured: true }),
  article("turkish-airlines-kavesanas-riga-ek261", "Turkish Airlines kavēšanās no Rīgas — vai EK 261 attiecas?", "answers", "Īsās atbildes", "tieša atbilde par Turkish Airlines no Rīgas un atgriešanos no Stambulas", { airlineName: "Turkish Airlines", nonEuCarrier: true, featured: true }),
  article("bilete-lidmilu-punkti-ek261-kvalificejas", "Vai biļetes, ko iegādājies ar lidmīļu punktiem, kvalificējas EK 261?", "answers", "Īsās atbildes", "airBaltic Miles, lojalitātes punkti un tiesības uz fiksētu kompensāciju", { airlineName: "airBaltic", miles: true }),
  article("airbaltic-naktsmajas-kavesanas-viesnica", "airBaltic naktsmājas pie kavēšanās — vai aviokompānijai jāmaksā par viesnīcu?", "answers", "Īsās atbildes", "airBaltic kavēšanās naktī, aprūpes tiesības, viesnīca un transporta čeki", { airlineName: "airBaltic", featured: true }),
  article("ryanair-kavesanas-londona-ek261-uk261", "Ryanair kavēšanās Londonā — EK 261 vai UK261?", "answers", "Īsās atbildes", "Ryanair reisi no Londonas, Stansted, Luton un UK261 pēc Brexit", { airlineName: "Ryanair", uk261: true, featured: true }),
  article("iesniegt-prasibu-pret-airbaltic-latvija", "Kā iesniegt prasību pret airBaltic Latvijā?", "answers", "Īsās atbildes", "prasības sagatavošana pret airBaltic, CAA Latvija, PTAC un pierādījumu secība", { airlineName: "airBaltic", localAuthority: true, featured: true }),
  article("claimwinger-pret-airhelp-latvijas-pasazieri", "ClaimWinger pret AirHelp — kurš ir labāks Latvijas pasažieriem?", "answers", "Īsās atbildes", "pakalpojumu salīdzinājums Latvijas pasažiera skatījumā, risks, ērtums un no-win-no-fee modelis", { featured: true }),
  article("claimwinger-kompensacija-bez-maksas-neveiksme", "Kā saņemt kompensāciju ar ClaimWinger — bez maksas neveiksmju gadījumā", "answers", "Īsās atbildes", "ClaimWinger no-win-no-fee process, dokumenti un ko sagaidīt pēc pieteikuma", { featured: true }),
  article("airbaltic-kavesanas-vasara-biezak-kaveti-marsruti", "airBaltic kavēšanās vasarā — visbiežāk kavētie maršruti 2026", "answers", "Īsās atbildes", "sezonas kavēšanās, vasaras pīķis, airBaltic maršruti un pierādījumi, kas jāsaglabā", { airlineName: "airBaltic", featured: true }),
];

export const blogArticlesLvSorted = [...blogArticlesLv].sort((articleA, articleB) =>
  articleB.publishDate.localeCompare(articleA.publishDate) ||
  Number(articleB.featured) - Number(articleA.featured) ||
  articleA.title.localeCompare(articleB.title, "lv"),
);

export function getCategoryLabelLv(category: BlogArticleLvCategory | string) {
  const labels: Record<BlogArticleLvCategory, string> = {
    answers: "Īsās atbildes",
    foundation: "Pasažieru tiesības",
    airlines: "Aviokompānijas",
    airports: "Lidostas",
    routes: "Maršruti",
    situations: "Īpašas situācijas",
    diaspora: "Diaspora un UK261",
  };

  return labels[category as BlogArticleLvCategory] || category;
}

export function getLvArticleBySlug(slug: string) {
  return blogArticlesLv.find((article) => article.slug === slug);
}
