export type BlogArticleLtCategory =
  | "answers"
  | "foundation"
  | "airlines"
  | "airports"
  | "routes"
  | "situations"
  | "diaspora";

export type BlogArticleLtCtaPath = "/delayed-flight" | "/cancelled-flight";

export interface BlogArticleLt {
  id: string;
  title: string;
  slug: string;
  category: BlogArticleLtCategory;
  cluster: string;
  focus: string;
  excerpt: string;
  publishDate: string;
  updatedDate: string;
  readTime: string;
  wordCount: number;
  featured: boolean;
  ctaPath: BlogArticleLtCtaPath;
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
}

const publishDate = "2026-04-25";

function article(
  slug: string,
  title: string,
  category: BlogArticleLtCategory,
  cluster: string,
  focus: string,
  options: Partial<BlogArticleLt> = {},
): BlogArticleLt {
  return {
    id: slug,
    slug,
    title,
    category,
    cluster,
    focus,
    excerpt:
      options.excerpt ||
      `${title}: aiškus lietuviškas vadovas apie EB 261, UK261, įrodymus, terminus ir kompensaciją iki 600 eurų.`,
    publishDate,
    updatedDate: publishDate,
    readTime: options.readTime || "8 min.",
    wordCount: options.wordCount || 1800,
    featured: false,
    ctaPath: "/delayed-flight",
    ...options,
  };
}

export const blogArticlesLt: BlogArticleLt[] = [
  article(
    "kiek-kompensacijos-paveluotas-skrydis-250-400-600",
    "Kiek kompensacijos mokama už pavėluotą skrydį? €250, €400 ar €600",
    "answers",
    "Trumpi atsakymai",
    "kaip nustatomos 250, 400 ir 600 eurų sumos pagal maršruto atstumą ir galutinį vėlavimą",
    { featured: true, wordCount: 2100, readTime: "9 min." },
  ),
  article(
    "nuo-kiek-valandu-velavimas-kompensacija",
    "Nuo kiek valandų vėlavimo priklauso kompensacija?",
    "answers",
    "Trumpi atsakymai",
    "3 valandų riba atvykus į galutinę paskirties vietą ir skirtumas tarp išvykimo bei atvykimo vėlavimo",
    { featured: true },
  ),
  article(
    "eb261-galioja-ne-europietiskoms-oro-linijoms",
    "Ar EB 261 galioja ne europietiškoms oro linijoms?",
    "answers",
    "Trumpi atsakymai",
    "kada ne ES oro linija patenka į EB 261, o kada grįžtamasis skrydis iš trečiosios šalies nėra padengtas",
    { nonEuCarrier: true, featured: true },
  ),
  article(
    "kas-yra-ypatingos-aplinkybes-aviacijoje",
    "Kas yra ypatingos aplinkybės aviacijoje?",
    "answers",
    "Trumpi atsakymai",
    "kuo skiriasi tikrai ypatingos aplinkybės nuo priežasčių, už kurias oro linija dažnai lieka atsakinga",
    { featured: true },
  ),
  article(
    "kiek-laiko-laukiama-kompensacijos-oro-linijos",
    "Kiek laiko laukiama kompensacijos iš oro linijų?",
    "answers",
    "Trumpi atsakymai",
    "realūs atsakymo, mokėjimo, atsisakymo ir eskalavimo terminai",
  ),
  article(
    "ka-daryti-oro-linija-neatsako-skunda",
    "Ką daryti, jei oro linija neatsako į skundą?",
    "answers",
    "Trumpi atsakymai",
    "kaip sutvarkyti įrodymus, siųsti priminimą ir eskaluoti bylą, kai vežėjas tyli",
    { localAuthority: true },
  ),
  article(
    "kompensacija-2-valandu-velavimas",
    "Ar galima gauti kompensaciją už 2 valandų vėlavimą?",
    "answers",
    "Trumpi atsakymai",
    "ką keleivis gali gauti po 2 valandų ir kodėl piniginė kompensacija dažniausiai prasideda nuo 3 valandų",
  ),
  article(
    "kiek-laiko-pateikti-reikalavima-paveluotas",
    "Kiek laiko turite pateikti reikalavimą dėl pavėluoto skrydžio?",
    "answers",
    "Trumpi atsakymai",
    "Lietuvoje aktualus 3 metų senaties terminas ir praktinės rizikos laukiant per ilgai",
    { limitation: true, featured: true },
  ),
  article(
    "kompensacija-skrydis-pries-3-metus",
    "Ar galima reikalauti kompensacijos už skrydį prieš 3 metus?",
    "answers",
    "Trumpi atsakymai",
    "kaip vertinti senesnį skrydį, įrodymų kokybę ir senaties terminą Lietuvoje",
    { limitation: true },
  ),
  article(
    "privalote-priimti-kupona-vietoj-grynuju",
    "Ar privalote priimti kuponą vietoj grynųjų?",
    "answers",
    "Trumpi atsakymai",
    "kada kuponas yra savanoriškas pasirinkimas ir kada verta reikalauti pinigų",
    { voucher: true },
  ),
  article(
    "eb261-galioja-turkija-dubajus",
    "Ar EB 261 galioja skrydžiams į Turkiją ar Dubajų?",
    "answers",
    "Trumpi atsakymai",
    "kodėl skrydis iš Lietuvos gali būti padengtas, o grįžimas iš Stambulo ar Dubajaus ne ES vežėju dažnai nėra",
    { nonEuCarrier: true, featured: true },
  ),
  article(
    "eb261-galioja-carteriniams-skrydziams",
    "Ar EB 261 galioja čarteriniams skrydžiams?",
    "answers",
    "Trumpi atsakymai",
    "teisės turistiniuose, sezoniniuose ir kelionių paketų skrydžiuose",
  ),
  article(
    "skirtumas-eb261-uk261",
    "Koks skirtumas tarp EB 261 ir UK261?",
    "answers",
    "Trumpi atsakymai",
    "kaip Brexit pakeitė teises skrydžiams iš Londono, Birmingamo ir kitų JK oro uostų",
    { uk261: true, featured: true },
  ),
  article(
    "ryanair-atsisake-moketi-ka-daryti",
    "Ryanair atsisakė mokėti — ką daryti?",
    "answers",
    "Trumpi atsakymai",
    "kaip perskaityti Ryanair atsisakymą, patikrinti ypatingas aplinkybes ir paruošti kitą žingsnį",
    { airlineName: "Ryanair", featured: true },
  ),
  article(
    "airbaltic-velavimas-teise-600-euru",
    "airBaltic vėlavimas — ar turiu teisę į €600?",
    "answers",
    "Trumpi atsakymai",
    "kada airBaltic kaip ES vežėjas gali būti atsakingas už vėlavimą ir kompensaciją iki 600 eurų",
    { airlineName: "airBaltic", featured: true, wordCount: 2100 },
  ),
  article(
    "claimwinger-vs-airhelp-kuris-geresnis-lietuviams",
    "ClaimWinger vs AirHelp — kuris geresnis lietuviams?",
    "answers",
    "Trumpi atsakymai",
    "kaip palyginti paslaugas pagal riziką, mokestį, komunikaciją, skaidrumą ir no-win-no-fee modelį",
    { featured: true },
  ),
  article(
    "claimwinger-kompensacija-be-mokescio-nesekme",
    "Kaip gauti kompensaciją su ClaimWinger — be mokesčio nesėkmės atveju",
    "answers",
    "Trumpi atsakymai",
    "kaip veikia ClaimWinger procesas, kai keleivis nenori mokėti iš anksto",
    { featured: true },
  ),
  article(
    "skrydis-londonas-lietuva-veluoja-uk261-brexit",
    "Skrydis iš Londono į Lietuvą vėluoja — UK261 po „Brexit“",
    "diaspora",
    "Diaspora JK ir Airijoje",
    "Lietuviai JK, skrydžiai Londonas-Lietuva ir UK261 taisyklės po Brexit",
    { routeName: "Londonas-Lietuva", uk261: true, featured: true },
  ),
  article(
    "londonas-stansted-vilnius-veluoja-ryanair-uk261",
    "Skrydis Londono Stansted–Vilnius vėluoja — Ryanair UK261",
    "diaspora",
    "Diaspora JK ir Airijoje",
    "Stansted-Vilnius kaip svarbus lietuvių diasporos maršrutas ir Ryanair atsakomybė pagal UK261",
    { routeName: "Londonas Stansted-Vilnius", airlineName: "Ryanair", uk261: true, featured: true },
  ),
  article(
    "londonas-luton-vilnius-veluoja-wizz-air-uk261",
    "Skrydis Londono Luton–Vilnius vėluoja — Wizz Air UK261",
    "diaspora",
    "Diaspora JK ir Airijoje",
    "Luton-Vilnius, Wizz Air ir kodėl po Brexit išvykimas iš JK vertinamas pagal UK261",
    { routeName: "Londonas Luton-Vilnius", airlineName: "Wizz Air", uk261: true, featured: true },
  ),
  article(
    "londonas-luton-kaunas-veluoja-ryanair-uk261",
    "Skrydis Londono Luton–Kaunas vėluoja — Ryanair UK261",
    "diaspora",
    "Diaspora JK ir Airijoje",
    "Kauno oro uosto ryšys su Luton ir praktinė UK261 logika lietuviams",
    { routeName: "Londonas Luton-Kaunas", airlineName: "Ryanair", uk261: true, featured: true },
  ),
  article(
    "dublinas-vilnius-veluoja-ryanair-eb261",
    "Skrydis Dublino–Vilnius vėluoja — Ryanair EB 261 teisės",
    "diaspora",
    "Diaspora JK ir Airijoje",
    "Airijos lietuvių skrydžiai į Vilnių ir EB 261 apsauga išvykstant iš Dublino",
    { routeName: "Dublinas-Vilnius", airlineName: "Ryanair", featured: true },
  ),
  article(
    "birmingamas-vilnius-veluoja-ryanair-uk261",
    "Skrydis Birmingamo–Vilnius vėluoja — Ryanair UK261",
    "diaspora",
    "Diaspora JK ir Airijoje",
    "Birmingamas-Vilnius kaip diasporos maršrutas ir UK261 po Brexit",
    { routeName: "Birmingamas-Vilnius", airlineName: "Ryanair", uk261: true },
  ),
  article(
    "londonas-heathrow-vilnius-veluoja-lot-uk261",
    "Skrydis Londono Heathrow–Vilnius vėluoja — LOT EB 261 ir UK261",
    "diaspora",
    "Diaspora JK ir Airijoje",
    "LOT, Londonas, Vilnius ir skirtumas tarp skrydžio iš JK bei skrydžio iš ES",
    { routeName: "Londonas Heathrow-Vilnius", airlineName: "LOT Polish Airlines", uk261: true },
  ),
  article(
    "uk261-eb261-skirtumas-lietuviams-brexit",
    "UK261 ir EB 261 — koks skirtumas lietuviams po „Brexit“?",
    "diaspora",
    "Diaspora JK ir Airijoje",
    "kodėl skrydžiai iš JK po Brexit turi atskirą teisinę logiką ir ką tai reiškia lietuviams",
    { uk261: true, featured: true, wordCount: 2200, readTime: "9 min." },
  ),
  article(
    "airija-lietuva-veluoja-eb261-teises",
    "Skrydis iš Airijos į Lietuvą vėluoja — EB 261 teisės",
    "diaspora",
    "Diaspora JK ir Airijoje",
    "Airija-Lietuva, Ryanair, lietuvių diaspora ir kompensacija pagal EB 261",
    { routeName: "Airija-Lietuva" },
  ),
  article(
    "griztamasis-skrydis-jk-uk261-ne-eb261",
    "Grįžtamasis skrydis iš JK — UK261, ne EB 261",
    "diaspora",
    "Diaspora JK ir Airijoje",
    "kodėl grįžimas iš Londono, Lutono ar Stanstedo dažniausiai vertinamas pagal UK261",
    { uk261: true, featured: true },
  ),
  article(
    "airbaltic-skrydzio-velavimas-eb261-kompensacija",
    "airBaltic skrydžio vėlavimas — EB 261 kompensacijos vadovas",
    "airlines",
    "Oro linijos",
    "airBaltic kaip pagrindinė ES oro linija Lietuvos rinkoje ir keleivių teisės vėlavimo atveju",
    { airlineName: "airBaltic", featured: true, wordCount: 2200, readTime: "9 min." },
  ),
  article(
    "airbaltic-atsisake-kompensacijos-kaip-priversti",
    "airBaltic atsisakė kompensacijos — kaip priversti sumokėti?",
    "airlines",
    "Oro linijos",
    "ką daryti, kai airBaltic atsisako kompensacijos, vėluoja atsakyti arba pateikia bendrą priežastį",
    { airlineName: "airBaltic", featured: true },
  ),
  article(
    "ryanair-velavimas-lietuva-eb261-vadovas",
    "Ryanair vėlavimas iš Lietuvos — EB 261 vadovas žingsnis po žingsnio",
    "airlines",
    "Oro linijos",
    "Ryanair skrydžiai iš Vilniaus ir Kauno, EB 261 taikymas ir įrodymų rinkimas",
    { airlineName: "Ryanair", featured: true, wordCount: 2200 },
  ),
  article(
    "ryanair-atsisake-kompensacijos-kovoti-laimeti",
    "Ryanair atsisakė kompensacijos — kaip kovoti ir laimėti?",
    "airlines",
    "Oro linijos",
    "tolesni žingsniai po Ryanair atsisakymo, įskaitant įrodymus ir eskalaciją",
    { airlineName: "Ryanair" },
  ),
  article(
    "wizz-air-velavimas-lietuva-eb261-kuponas",
    "Wizz Air vėlavimas iš Lietuvos — EB 261 ar kupono gudrybė?",
    "airlines",
    "Oro linijos",
    "kada Wizz Air turi mokėti pinigais, o ne tik siūlyti kuponą",
    { airlineName: "Wizz Air", voucher: true, featured: true },
  ),
  article(
    "wizz-air-atsauke-skrydi-teises",
    "Wizz Air atšaukė skrydį — jūsų teisės žingsnis po žingsnio",
    "airlines",
    "Oro linijos",
    "ką prašyti atšaukus Wizz Air skrydį, įskaitant grąžinimą, nukreipimą ir kompensaciją",
    { airlineName: "Wizz Air", ctaPath: "/cancelled-flight", cancelledCase: true, featured: true },
  ),
  article(
    "lot-polish-airlines-velavimas-varsava-londonas",
    "LOT Polish Airlines vėlavimas — Varšuva ir Londonas EB 261",
    "airlines",
    "Oro linijos",
    "LOT maršrutai per Varšuvą, nauji ryšiai su Londonu ir EB 261 logika",
    { airlineName: "LOT Polish Airlines", featured: true },
  ),
  article(
    "turkish-airlines-velavimas-vilnius-eb261",
    "Turkish Airlines vėlavimas iš Vilniaus — ar galioja EB 261?",
    "airlines",
    "Oro linijos",
    "Turkish Airlines kaip ne ES vežėjas ir kodėl skrydžio kryptis lemia teisę į kompensaciją",
    { airlineName: "Turkish Airlines", nonEuCarrier: true, featured: true },
  ),
  article(
    "lufthansa-velavimas-lietuva-eb261-visada",
    "Lufthansa vėlavimas iš Lietuvos — EB 261 visada galioja",
    "airlines",
    "Oro linijos",
    "Lufthansa kaip ES vežėjas, skrydžiai per Vokietiją ir keleivių teisės",
    { airlineName: "Lufthansa", featured: true },
  ),
  article(
    "austrian-airlines-velavimas-viena-eb261",
    "Austrian Airlines vėlavimas — Viena EB 261 vadovas",
    "airlines",
    "Oro linijos",
    "Vilnius-Viena, Austrian Airlines ir EB 261 taikymas jungiamiesiems skrydžiams",
    { airlineName: "Austrian Airlines" },
  ),
  article(
    "swiss-velavimas-vilnius-eb261-sveicarija",
    "Swiss vėlavimas iš Vilniaus — EB 261 ar Šveicarijos teisė?",
    "airlines",
    "Oro linijos",
    "SWISS, Šveicarija ir taisyklės, artimos EB 261 keleivių apsaugai",
    { airlineName: "SWISS" },
  ),
  article(
    "finnair-velavimas-helsinkis-eb261-lietuva",
    "Finnair vėlavimas — Helsinkis ir EB 261 skrydžiams iš Lietuvos",
    "airlines",
    "Oro linijos",
    "Finnair, Helsinkio persėdimas ir galutinės paskirties vietos vėlavimas",
    { airlineName: "Finnair" },
  ),
  article(
    "sas-velavimas-vilnius-eb261-skandinavai",
    "SAS vėlavimas iš Vilniaus — EB 261 skandinavų linijoms",
    "airlines",
    "Oro linijos",
    "SAS skrydžiai į Skandinaviją ir įrodymai jungiamajame maršrute",
    { airlineName: "SAS" },
  ),
  article(
    "norwegian-velavimas-oslo-stokholmas-eb261",
    "Norwegian vėlavimas — EB 261 Oslas ir Stokholmas iš Lietuvos",
    "airlines",
    "Oro linijos",
    "Norwegian, Skandinavijos kryptys ir EB 261 apsauga Lietuvos keleiviams",
    { airlineName: "Norwegian" },
  ),
  article(
    "brussels-airlines-velavimas-vilnius-eb261",
    "Brussels Airlines vėlavimas iš Vilniaus — EB 261 visada taikomas",
    "airlines",
    "Oro linijos",
    "Brussels Airlines kaip ES vežėjas ir skrydžiai per Briuselį",
    { airlineName: "Brussels Airlines" },
  ),
  article(
    "flydubai-velavimas-vilnius-dubajus-eb261",
    "flydubai vėlavimas iš Vilniaus — ar galioja EB 261 skrendant į Dubajų?",
    "airlines",
    "Oro linijos",
    "flydubai kaip ne ES vežėjas, Vilnius-Dubajus ir grįžtamojo skrydžio skirtumas",
    { airlineName: "flydubai", nonEuCarrier: true, featured: true },
  ),
  article(
    "british-airways-velavimas-eb261-uk261-brexit",
    "British Airways vėlavimas — EB 261 ir UK261 po „Brexit“",
    "airlines",
    "Oro linijos",
    "British Airways, Londonas, Vilnius ir skirtumas tarp išvykimo iš ES bei JK",
    { airlineName: "British Airways", uk261: true, featured: true },
  ),
  article(
    "easyjet-velavimas-lietuva-eb261",
    "easyJet vėlavimas iš Lietuvos — EB 261 vadovas 2026",
    "airlines",
    "Oro linijos",
    "easyJet skrydžiai Europoje, žemų kainų bilietai ir tos pačios keleivių teisės",
    { airlineName: "easyJet" },
  ),
  article(
    "aegean-airlines-velavimas-eb261-graikija",
    "Aegean Airlines vėlavimas — EB 261 graikų oro linijoms",
    "airlines",
    "Oro linijos",
    "Aegean Airlines kaip ES vežėjas ir skrydžiai į Graikiją ar per Atėnus",
    { airlineName: "Aegean Airlines" },
  ),
  article(
    "utair-velavimas-vilnius-hurgada-eb261",
    "UTair vėlavimas Vilnius–Hurgada — ar ne ES oro linija gali mokėti?",
    "airlines",
    "Oro linijos",
    "kaip vertinti Vilnius-Hurgada tipo maršrutą, jei skrydį vykdo ne ES oro linija arba kitas faktinis vežėjas",
    { airlineName: "UTair", routeName: "Vilnius-Hurgada", nonEuCarrier: true },
  ),
  article(
    "euroairlines-velavimas-antalija-vilnius-eb261",
    "Euroairlines vėlavimas — Antalija iš Vilniaus EB 261",
    "airlines",
    "Oro linijos",
    "sezoniniai skrydžiai į Antaliją, faktinis vežėjas ir EB 261 taikymas",
    { airlineName: "Euroairlines", routeName: "Vilnius-Antalija" },
  ),
  article(
    "el-al-arkia-velavimas-vilnius-tel-avivas-eb261",
    "El Al / Arkia vėlavimas iš Vilniaus — EB 261 skrydžiams į Tel Avivą",
    "airlines",
    "Oro linijos",
    "Izraelio vežėjai, išvykimas iš Vilniaus ir kodėl grįžimas į Lietuvą gali būti vertinamas kitaip",
    { airlineName: "El Al / Arkia", routeName: "Vilnius-Tel Avivas", nonEuCarrier: true },
  ),
  article(
    "es-reglamentas-eb-261-2004-vadovas-lietuviams",
    "ES reglamentas EB 261/2004 — išsamus kelionių teisių vadovas lietuviams",
    "foundation",
    "Teisė ir pagrindai",
    "pagrindinis reglamentas dėl kompensacijos, priežiūros ir pinigų grąžinimo probleminiuose skrydžiuose",
    { localAuthority: true, featured: true, wordCount: 2300, readTime: "10 min." },
  ),
  article(
    "eb-261-skrydziai-uz-europos-ribu-kada-galioja",
    "Ar EB 261 galioja skrydžiams už Europos ribų? — kada taip, kada ne",
    "foundation",
    "Teisė ir pagrindai",
    "skrydžiai į Turkiją, Dubajų, Izraelį ir kitas kryptis už ES ribų",
    { nonEuCarrier: true, featured: true },
  ),
  article(
    "ypatingos-aplinkybes-aviacija-neprivalo-moketi",
    "Ypatingos aplinkybės aviacijos sektoriuje — kada oro linijos NEPRIVALO mokėti?",
    "foundation",
    "Teisė ir pagrindai",
    "techniniai gedimai, streikai, orai ir ribos tarp atsakomybės bei išimčių",
  ),
  article(
    "ltsa-vvtat-skundas-skrydzio-velavimas-lietuva",
    "LTSA ir VVTAT — kaip pateikti skundą dėl skrydžio vėlavimo Lietuvoje?",
    "foundation",
    "Teisė ir pagrindai",
    "kaip eskaluoti ginčą Lietuvoje, kai oro linija atsisako arba neatsako",
    { localAuthority: true, featured: true },
  ),
  article(
    "ieskinio-senaties-terminas-skrydzio-kompensacija",
    "Ieškinio senaties terminas už skrydžio kompensaciją — kiek laiko turite?",
    "foundation",
    "Teisė ir pagrindai",
    "3 metų senaties terminas Lietuvoje ir kaip jis veikia senesnius skrydžius",
    { limitation: true, featured: true },
  ),
  article(
    "kuponas-grynieji-ar-privalote-priimti",
    "Čekis ar grynieji — ar privalote priimti oro linijų kuponą?",
    "foundation",
    "Teisė ir pagrindai",
    "skirtumas tarp savanoriško kupono, piniginės kompensacijos ir pinigų grąžinimo",
    { voucher: true },
  ),
  article(
    "vilniaus-oro-uostas-vno-teises-atsaukimas",
    "Vilniaus oro uostas (VNO) — teisės atšaukus ar vėlavus skrydžiui",
    "airports",
    "Oro uostai",
    "Vilnius kaip pagrindinis Lietuvos oro uostas ir teisės išvykstant ar persėdant",
    { airportCode: "VNO", airportName: "Vilniaus oro uostas", featured: true },
  ),
  article(
    "kauno-oro-uostas-kun-kompensacija-eb261",
    "Kauno oro uostas (KUN) — kompensacija už vėlavimą pagal EB 261",
    "airports",
    "Oro uostai",
    "Kaunas kaip Ryanair bazė ir svarbus diasporos oro uostas",
    { airportCode: "KUN", airportName: "Kauno oro uostas", featured: true },
  ),
  article(
    "palangos-oro-uostas-plq-teises-velavimas",
    "Palangos oro uostas (PLQ) — teisės dėl vėluojančių skrydžių",
    "airports",
    "Oro uostai",
    "Palanga, sezoniniai maršrutai ir keleivių teisės pagal EB 261",
    { airportCode: "PLQ", airportName: "Palangos oro uostas" },
  ),
  article(
    "praleistas-persedimas-vilnius-atsakingas",
    "Praleistas persėdimas Vilniuje — kas atsakingas?",
    "airports",
    "Oro uostai",
    "viena rezervacija, jungiamasis maršrutas ir atsakomybė už praleistą persėdimą",
    { airportCode: "VNO", airportName: "Vilniaus oro uostas" },
  ),
  article(
    "ilgas-velavimas-oro-uoste-viesbutis-maistas",
    "Ilgas vėlavimas oro uoste — viešbutis, maistas, transportas: kas moka?",
    "airports",
    "Oro uostai",
    "priežiūros teisės laukimo metu, įskaitant maistą, viešbutį ir pervežimą",
  ),
  article(
    "streikai-vilniaus-oro-uoste-kompensacija",
    "Streikai Vilniaus oro uoste — kada turite teisę į kompensaciją?",
    "airports",
    "Oro uostai",
    "streikai, kontrolės ribos ir kada oro linija vis tiek gali likti atsakinga",
    { airportCode: "VNO", airportName: "Vilniaus oro uostas" },
  ),
  article(
    "praleistas-persedimas-varsava-lot-eb261",
    "Praleistas persėdimas Varšuvoje (LOT) — EB 261 viena rezervacija",
    "airports",
    "Oro uostai",
    "LOT persėdimai per Varšuvą ir galutinės paskirties vietos taisyklė",
    { airportName: "Varšuvos oro uostas", airlineName: "LOT Polish Airlines" },
  ),
  article("vilnius-londonas-veluoja-airbaltic-ryanair", "Skrydis Vilnius–Londonas vėluoja — airBaltic, Ryanair, Wizz Air", "routes", "Maršrutai Europoje", "Vilnius-Londonas, diaspora JK ir skirtumas tarp EB 261 bei UK261 pagal kryptį", { routeName: "Vilnius-Londonas", airlineName: "airBaltic / Ryanair / Wizz Air", uk261: true, featured: true }),
  article("vilnius-dublinas-veluoja-ryanair-eb261", "Skrydis Vilnius–Dublinas vėluoja — Ryanair EB 261", "routes", "Maršrutai Europoje", "Vilnius-Dublinas, Ryanair ir EB 261 apsauga lietuviams Airijoje", { routeName: "Vilnius-Dublinas", airlineName: "Ryanair", featured: true }),
  article("vilnius-oslo-veluoja-norwegian-ryanair", "Skrydis Vilnius–Oslo vėluoja — Norwegian ir Ryanair", "routes", "Maršrutai Europoje", "Norvegijos darbo ir šeimos kelionės, Ryanair, Norwegian ir kompensacijos riba", { routeName: "Vilnius-Oslo", airlineName: "Norwegian / Ryanair" }),
  article("vilnius-stockholmas-veluoja-sas-norwegian", "Skrydis Vilnius–Stockholmas vėluoja — SAS ir Norwegian", "routes", "Maršrutai Europoje", "Vilnius-Stokholmas, Skandinavijos vežėjai ir EB 261 taikymas", { routeName: "Vilnius-Stokholmas", airlineName: "SAS / Norwegian" }),
  article("vilnius-berlynas-veluoja-airbaltic-ryanair", "Skrydis Vilnius–Berlynas vėluoja — airBaltic ir Ryanair", "routes", "Maršrutai Europoje", "Vilnius-Berlynas, trumpesnis ES maršrutas ir 250 eurų kompensacijos logika", { routeName: "Vilnius-Berlynas", airlineName: "airBaltic / Ryanair" }),
  article("vilnius-miunchenas-veluoja-lufthansa-airbaltic", "Skrydis Vilnius–Miunchenas vėluoja — Lufthansa ir airBaltic", "routes", "Maršrutai Europoje", "Vilnius-Miunchenas, Lufthansa jungtys ir galutinės paskirties vietos vėlavimas", { routeName: "Vilnius-Miunchenas", airlineName: "Lufthansa / airBaltic" }),
  article("vilnius-amsterdamas-veluoja-airbaltic-ryanair", "Skrydis Vilnius–Amsterdamas vėluoja — airBaltic ir Ryanair", "routes", "Maršrutai Europoje", "Vilnius-Amsterdamas, Schiphol persėdimai ir EB 261 apsauga", { routeName: "Vilnius-Amsterdamas", airlineName: "airBaltic / Ryanair" }),
  article("vilnius-paryzius-veluoja-airbaltic-ryanair", "Skrydis Vilnius–Paryžius vėluoja — airBaltic ir Ryanair", "routes", "Maršrutai Europoje", "Vilnius-Paryžius, CDG ir Beauvais tipo oro uostai bei kompensacijos riba", { routeName: "Vilnius-Paryžius", airlineName: "airBaltic / Ryanair" }),
  article("vilnius-barselona-veluoja-ryanair-wizz", "Skrydis Vilnius–Barselona vėluoja — Ryanair ir Wizz Air", "routes", "Maršrutai Europoje", "Vilnius-Barselona, poilsinės kelionės ir EB 261 taikymas žemų kainų vežėjams", { routeName: "Vilnius-Barselona", airlineName: "Ryanair / Wizz Air" }),
  article("vilnius-roma-veluoja-ryanair-eb261", "Skrydis Vilnius–Roma vėluoja — Ryanair EB 261", "routes", "Maršrutai Europoje", "Vilnius-Roma, Ryanair ir kompensacija pagal atstumą", { routeName: "Vilnius-Roma", airlineName: "Ryanair" }),
  article("vilnius-viena-veluoja-austrian-ryanair", "Skrydis Vilnius–Viena vėluoja — Austrian ir Ryanair", "routes", "Maršrutai Europoje", "Vilnius-Viena, Austrian Airlines, Ryanair ir jungtys per VIE", { routeName: "Vilnius-Viena", airlineName: "Austrian Airlines / Ryanair" }),
  article("vilnius-briuselis-veluoja-brussels-airlines", "Skrydis Vilnius–Briuselis vėluoja — Brussels Airlines", "routes", "Maršrutai Europoje", "Vilnius-Briuselis, Brussels Airlines ir ES institucijų kelionės", { routeName: "Vilnius-Briuselis", airlineName: "Brussels Airlines" }),
  article("vilnius-kopenhaga-veluoja-sas-airbaltic", "Skrydis Vilnius–Kopenhaga vėluoja — SAS ir airBaltic", "routes", "Maršrutai Europoje", "Vilnius-Kopenhaga, SAS, airBaltic ir EB 261 trumpame maršrute", { routeName: "Vilnius-Kopenhaga", airlineName: "SAS / airBaltic" }),
  article("vilnius-helsinkis-veluoja-finnair-airbaltic", "Skrydis Vilnius–Helsinkis vėluoja — Finnair ir airBaltic", "routes", "Maršrutai Europoje", "Vilnius-Helsinkis, Finnair hubas ir jungiamieji skrydžiai į Aziją", { routeName: "Vilnius-Helsinkis", airlineName: "Finnair / airBaltic" }),
  article("vilnius-varsava-veluoja-lot-eb261", "Skrydis Vilnius–Varšuva vėluoja — LOT EB 261", "routes", "Maršrutai Europoje", "Vilnius-Varšuva, LOT ir viena rezervacija su tolesniu persėdimu", { routeName: "Vilnius-Varšuva", airlineName: "LOT Polish Airlines", featured: true }),
  article("vilnius-ciurichas-veluoja-swiss-airbaltic", "Skrydis Vilnius–Ciurichas vėluoja — Swiss ir airBaltic", "routes", "Maršrutai Europoje", "Vilnius-Ciurichas, SWISS, Šveicarija ir EB 261 artima apsauga", { routeName: "Vilnius-Ciurichas", airlineName: "SWISS / airBaltic" }),
  article("vilnius-madridas-veluoja-ryanair-eb261", "Skrydis Vilnius–Madridas vėluoja — Ryanair EB 261", "routes", "Maršrutai Europoje", "Vilnius-Madridas, ilgesnis ES maršrutas ir 400 eurų kompensacijos logika", { routeName: "Vilnius-Madridas", airlineName: "Ryanair" }),
  article("kaunas-londonas-veluoja-ryanair-uk261", "Skrydis Kaunas–Londonas vėluoja — Ryanair UK261", "routes", "Maršrutai Europoje", "Kaunas-Londonas, Ryanair, diaspora ir skrydžio krypties įtaka EB 261 ar UK261", { routeName: "Kaunas-Londonas", airlineName: "Ryanair", uk261: true, featured: true }),
  article("kaunas-dublinas-veluoja-ryanair-eb261", "Skrydis Kaunas–Dublinas vėluoja — Ryanair EB 261", "routes", "Maršrutai Europoje", "Kaunas-Dublinas, Ryanair ir lietuvių diaspora Airijoje", { routeName: "Kaunas-Dublinas", airlineName: "Ryanair", featured: true }),
  article("vilnius-istanbulius-veluoja-turkish-eb261", "Skrydis Vilnius–Istanbulius vėluoja — Turkish Airlines ir EB 261", "routes", "Maršrutai už ES ribų", "Turkish Airlines kaip ne ES vežėjas ir kodėl skrydis iš Vilniaus skiriasi nuo grįžimo iš Stambulo", { routeName: "Vilnius-Istanbulius", airlineName: "Turkish Airlines", nonEuCarrier: true, featured: true }),
  article("vilnius-dubajus-veluoja-flydubai-airbaltic", "Skrydis Vilnius–Dubajus vėluoja — flydubai ir airBaltic: kas moka?", "routes", "Maršrutai už ES ribų", "flydubai ir airBaltic skirtumai, Vilnius-Dubajus bei grįžtamojo skrydžio taisyklė", { routeName: "Vilnius-Dubajus", airlineName: "flydubai / airBaltic", nonEuCarrier: true, featured: true }),
  article("vilnius-tel-avivas-veluoja-wizz-el-al", "Skrydis Vilnius–Tel Avivas vėluoja — Wizz Air ir El Al", "routes", "Maršrutai už ES ribų", "Wizz Air kaip ES vežėjas, El Al kaip ne ES vežėjas ir krypties svarba", { routeName: "Vilnius-Tel Avivas", airlineName: "Wizz Air / El Al", nonEuCarrier: true }),
  article("vilnius-hurgada-veluoja-utair-eb261", "Skrydis Vilnius–Hurgada vėluoja — UTair ir EB 261", "routes", "Maršrutai už ES ribų", "Vilnius-Hurgada tipo poilsinis maršrutas, faktinis vežėjas ir ne ES oro linijos taisyklė", { routeName: "Vilnius-Hurgada", airlineName: "UTair", nonEuCarrier: true }),
  article("vilnius-antalija-veluoja-euroairlines-eb261", "Skrydis Vilnius–Antalija vėluoja — Euroairlines EB 261", "routes", "Maršrutai už ES ribų", "sezoniniai skrydžiai į Antaliją, faktinis operatorius ir kompensacijos riba", { routeName: "Vilnius-Antalija", airlineName: "Euroairlines" }),
  article("griztamasis-turkija-dubajus-eb261-galioja", "Grįžtamasis skrydis iš Turkijos/Dubajaus — ar EB 261 galioja?", "routes", "Maršrutai už ES ribų", "kodėl grįžimas iš Turkijos ar Dubajaus su ne ES vežėju dažnai nepatenka į EB 261", { nonEuCarrier: true, featured: true }),
  article("overbookingas-atsisakymas-isodinti-kompensacija", "Overbookingas — atsisakymas įsodinti ir kompensacija iki €600", "situations", "Specialios situacijos", "teisės, kai keleiviui atsisakoma leisti į lėktuvą dėl per didelio parduotų vietų skaičiaus", { featured: true }),
  article("downgrade-zemesne-klase-susigrazinti-pinigus", "Downgrade — skridote žemesne klase: kaip susigrąžinti pinigus?", "situations", "Specialios situacijos", "grąžinimas už priverstinį perkėlimą iš aukštesnės į žemesnę klasę"),
  article("carteriniai-skrydziai-eb261-atostogos", "Čarteriniai skrydžiai — ar EB 261 taikomas atostogų skrydžiams?", "situations", "Specialios situacijos", "turistiniai, čarteriniai ir paketinių kelionių skrydžiai iš Lietuvos"),
  article("bilietas-ota-booking-esky-kompensacija", "Bilietas per OTA (Booking, eSky, Ryanair.com) — ar tai įtakoja kompensaciją?", "situations", "Specialios situacijos", "ar pirkimas per Booking.com, eSky, Paysera Travel ar Novaturas keičia EB 261 teises", { ota: true }),
  article("grupine-kelione-kolektyvinis-reikalavimas", "Grupinė kelionė — kaip pateikti kolektyvinį reikalavimą?", "situations", "Specialios situacijos", "šeimos, darbo, mokyklos ar turistinės grupės su tuo pačiu probleminiu skrydžiu"),
  article("oro-linija-bankrutavo-reikalavimas", "Oro linija bankrutavo — kas atsitinka su jūsų reikalavimu?", "situations", "Specialios situacijos", "kaip bankrotas veikia kompensacijos, pinigų grąžinimo ir reikalavimo galimybes"),
  article("naktinis-velavimas-viesbutis-transportas", "Naktinis vėlavimas — viešbutis ir transportas: kas moka?", "situations", "Specialios situacijos", "teisė į viešbutį, maistą ir pervežimą, kai keleivis įstringa naktį", { featured: true }),
  article("komandiruote-imone-ar-darbuotojas-kompensacija", "Komandiruotė — įmonė ar darbuotojas gauna kompensaciją?", "situations", "Specialios situacijos", "kodėl fiksuota kompensacija dažniausiai priklauso keleiviui, o ne darbdaviui", { business: true }),
];

export const blogArticlesLtSorted = [...blogArticlesLt].sort((articleA, articleB) =>
  articleB.publishDate.localeCompare(articleA.publishDate) ||
  Number(articleB.featured) - Number(articleA.featured) ||
  articleA.title.localeCompare(articleB.title, "lt"),
);

export function getCategoryLabelLt(category: BlogArticleLtCategory | string) {
  const labels: Record<BlogArticleLtCategory, string> = {
    answers: "Trumpi atsakymai",
    foundation: "Keleivių teisės",
    airlines: "Oro linijos",
    airports: "Oro uostai",
    routes: "Maršrutai",
    situations: "Specialios situacijos",
    diaspora: "Diaspora JK ir Airijoje",
  };

  return labels[category as BlogArticleLtCategory] || category;
}

export function getLtArticleBySlug(slug: string) {
  return blogArticlesLt.find((article) => article.slug === slug);
}
