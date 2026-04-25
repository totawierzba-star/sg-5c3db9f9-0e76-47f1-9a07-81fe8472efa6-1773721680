export type BlogArticleBgCategory =
  | "snippet"
  | "foundation"
  | "airline"
  | "airport"
  | "route"
  | "special"
  | "diaspora";

export type BlogArticleBgCtaPath = "/delayed-flight" | "/cancelled-flight";

export interface BlogArticleBg {
  id: string;
  title: string;
  slug: string;
  category: BlogArticleBgCategory;
  cluster: string;
  focus: string;
  excerpt: string;
  publishDate: string;
  updatedDate: string;
  readTime: string;
  wordCount: number;
  featured: boolean;
  ctaPath: BlogArticleBgCtaPath;
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

const publishDate = "2026-04-25";

function article(
  slug: string,
  title: string,
  category: BlogArticleBgCategory,
  cluster: string,
  focus: string,
  options: Partial<BlogArticleBg> = {},
): BlogArticleBg {
  return {
    id: slug,
    slug,
    title,
    category,
    cluster,
    focus,
    excerpt:
      options.excerpt ||
      `${title}: практично ръководство на български за EU261, UK261, доказателства, срокове и обезщетение до 600 евро.`,
    publishDate,
    updatedDate: publishDate,
    readTime: options.readTime || "8 мин.",
    wordCount: options.wordCount || 1800,
    featured: false,
    ctaPath: "/delayed-flight",
    ...options,
  };
}

export const blogArticlesBg: BlogArticleBg[] = [
  article(
    "kolko-obeshtetenie-zakasnal-polet-250-400-600",
    "Колко обезщетение се дължи за закъснял полет? €250, €400 или €600",
    "snippet",
    "Бързи отговори",
    "как се определят фиксираните суми 250, 400 и 600 евро според разстоянието и закъснението",
    { featured: true, wordCount: 2100, readTime: "9 мин." },
  ),
  article(
    "ot-kolko-chasa-zakasnenie-pravo-obeshtetenie",
    "От колко часа закъснение имате право на обезщетение?",
    "snippet",
    "Бързи отговори",
    "прагът от 3 часа при пристигане и разликата между закъснение при излитане и крайна дестинация",
    { featured: true },
  ),
  article(
    "vai-eo261-niskatarifni-aviolinii",
    "Важи ли ЕО 261 за нискотарифни авиолинии?",
    "snippet",
    "Бързи отговори",
    "правата на пътниците при Wizz Air, Ryanair, easyJet и други нискотарифни превозвачи",
    { featured: true },
  ),
  article(
    "vai-eo261-ne-evropeyski-aviokompanii",
    "Важи ли ЕО 261 за не-европейски авиокомпании?",
    "snippet",
    "Бързи отговори",
    "кога non-EU carrier попада в EU261 и кога обратният полет от трета държава не е покрит",
    { nonEuCarrier: true, featured: true },
  ),
  article(
    "kakvo-sa-izvanredni-obstoyatelstva-poleti",
    "Какво са извънредни обстоятелства при полети?",
    "snippet",
    "Бързи отговори",
    "разликата между реални извънредни обстоятелства и причини, за които авиокомпанията често остава отговорна",
    { featured: true },
  ),
  article(
    "kolko-dalgo-chaka-obeshtetenie-aviokompaniya",
    "Колко дълго се чака обезщетение от авиокомпания?",
    "snippet",
    "Бързи отговори",
    "реалистични срокове за отговор, плащане, отказ и ескалация към компетентен орган",
  ),
  article(
    "aviokompaniyata-ne-otgovarya-kakvo-napravite",
    "Авиокомпанията не отговаря — какво да направите?",
    "snippet",
    "Бързи отговори",
    "как да подредите доказателствата, да изпратите последващо искане и да ескалирате случая",
    { localAuthority: true },
  ),
  article(
    "pravo-obeshtetenie-2-chasa-zakasnenie",
    "Имате ли право на обезщетение при 2 часа закъснение?",
    "snippet",
    "Бързи отговори",
    "какви права има пътникът при 2 часа закъснение и защо паричното обезщетение обикновено започва от 3 часа",
  ),
  article(
    "kolko-vreme-poiskate-obeshtetenie-polet",
    "Колко време имате да поискате обезщетение за полет?",
    "snippet",
    "Бързи отговори",
    "срокът за предявяване на претенция и защо в България често се гледа 5-годишната давност",
    { limitation: true, featured: true },
  ),
  article(
    "mozhe-obeshtetenie-polet-3-godini",
    "Може ли да искате обезщетение за полет от преди 3 години?",
    "snippet",
    "Бързи отговори",
    "как старите полети се оценяват според давностния срок, наличните документи и държавата на претенцията",
    { limitation: true },
  ),
  article(
    "tryabva-priemate-vaucher-vmesto-pari",
    "Трябва ли да приемете ваучер вместо пари?",
    "snippet",
    "Бързи отговори",
    "кога ваучерът е доброволен избор и кога трябва да настоявате за парично обезщетение или възстановяване",
    { voucher: true },
  ),
  article(
    "vai-eo261-poleti-turtsiya-dubai",
    "Важи ли ЕО 261 за полети до Турция или Дубай?",
    "snippet",
    "Бързи отговори",
    "защо полетът от София може да е покрит, а обратният полет от Истанбул или Дубай с non-EU превозвач често не е",
    { nonEuCarrier: true, featured: true },
  ),
  article(
    "vai-eo261-charturni-poleti",
    "Важи ли ЕО 261 за чартърни полети?",
    "snippet",
    "Бързи отговори",
    "правата при туристически, сезонни и пакетни полети от България и европейски летища",
  ),
  article(
    "razlika-eo261-uk261",
    "Каква е разликата между ЕО 261 и UK261?",
    "snippet",
    "Бързи отговори",
    "как Brexit промени правата за полети от Лондон, Бирмингам и други летища във Великобритания",
    { uk261: true, featured: true },
  ),
  article(
    "wizz-air-tryabva-plati-obeshtetenie",
    "Wizz Air трябва ли да ми плати обезщетение?",
    "snippet",
    "Бързи отговори",
    "кога Wizz Air като европейски превозвач дължи обезщетение при забавяне, отмяна или отказан бординг",
    { airlineName: "Wizz Air", featured: true },
  ),
  article(
    "bulgaria-air-zakasnenie-pravo-600",
    "Bulgaria Air закъснение — имам ли право на €600?",
    "snippet",
    "Бързи отговори",
    "кога Bulgaria Air попада в EU261 и защо като български EU превозвач е ключова тема за местния пазар",
    { airlineName: "Bulgaria Air", featured: true, wordCount: 2200, readTime: "9 мин." },
  ),
  article(
    "ryanair-otkaza-obeshtetenie-kakvo",
    "Ryanair отказа обезщетение — какво да правя?",
    "snippet",
    "Бързи отговори",
    "как да анализирате отказ на Ryanair, да проверите извънредни обстоятелства и да подготвите ескалация",
    { airlineName: "Ryanair", featured: true },
  ),
  article(
    "turkish-airlines-sofiya-eo261-vai",
    "Turkish Airlines закъснение от София — ЕО 261 ли важи?",
    "snippet",
    "Бързи отговори",
    "защо Turkish Airlines е non-EU превозвач, но полетът от София може да бъде покрит от EU261",
    { airlineName: "Turkish Airlines", nonEuCarrier: true, featured: true },
  ),
  article(
    "claimwinger-vs-airhelp-balgarski-patnitsi",
    "ClaimWinger vs AirHelp — кой е по-добър за български пътници?",
    "snippet",
    "Бързи отговори",
    "как да сравните услуги за искове според риск, такса, комуникация, прозрачност и no-win-no-fee модел",
    { featured: true },
  ),
  article(
    "claimwinger-obeshtetenie-bez-taksa-neuspeh",
    "Как да поискам обезщетение с ClaimWinger — без такса при неуспех",
    "snippet",
    "Бързи отговори",
    "как работи процесът ClaimWinger за български пътници, когато няма предварително плащане",
    { featured: true },
  ),
  article(
    "bulgaria-air-zakasnal-polet-obeshtetenie-600",
    "Bulgaria Air закъснял полет — как да поискате обезщетение до €600",
    "airline",
    "Авиокомпании",
    "Bulgaria Air като единствената българска EU авиокомпания и правата при закъснение",
    { airlineName: "Bulgaria Air", featured: true, wordCount: 2200, readTime: "9 мин." },
  ),
  article(
    "bulgaria-air-otkaza-obeshtetenie-kak-prinudite",
    "Bulgaria Air отказа обезщетение — как да принудите изплащане?",
    "airline",
    "Авиокомпании",
    "как да реагирате при отказ, неясна причина или забавено плащане от Bulgaria Air",
    { airlineName: "Bulgaria Air", featured: true },
  ),
  article(
    "wizz-air-zakasnal-polet-balgariya-eo261",
    "Wizz Air закъснял полет от България — ЕО 261 или ваучер?",
    "airline",
    "Авиокомпании",
    "кога Wizz Air трябва да плати в пари, а не само да предлага ваучер",
    { airlineName: "Wizz Air", featured: true, voucher: true },
  ),
  article(
    "wizz-air-otmenen-polet-prava-stapka-po-stapka",
    "Wizz Air отменен полет — правата ви стъпка по стъпка",
    "airline",
    "Авиокомпании",
    "какво да поискате при отменен полет на Wizz Air, включително възстановяване, премаршрутиране и обезщетение",
    { airlineName: "Wizz Air", ctaPath: "/cancelled-flight", featured: true },
  ),
  article(
    "ryanair-zakasnenie-balgariya-eo261",
    "Ryanair закъснение от България — ЕО 261 ръководство",
    "airline",
    "Авиокомпании",
    "EU261 права при закъснение на Ryanair от София, Бургас, Варна или друго европейско летище",
    { airlineName: "Ryanair", featured: true },
  ),
  article(
    "ryanair-otkaza-obeshtetenie-borba",
    "Ryanair отказа обезщетение — как да се борите и спечелите?",
    "airline",
    "Авиокомпании",
    "следващи стъпки след отказ на Ryanair, включително доказателства, срокове и ескалация",
    { airlineName: "Ryanair" },
  ),
  article(
    "easyjet-zakasnenie-sofiya-eo261",
    "easyJet закъснение от София — ЕО 261 ръководство 2026",
    "airline",
    "Авиокомпании",
    "права при easyJet закъснение от София и други европейски летища през 2026 г.",
    { airlineName: "easyJet" },
  ),
  article(
    "turkish-airlines-zakasnenie-balgariya-eo261",
    "Turkish Airlines закъснение от България — важи ли ЕО 261?",
    "airline",
    "Авиокомпании",
    "как EU261 се прилага за Turkish Airlines при полет от София и защо обратният полет от Истанбул е различен",
    { airlineName: "Turkish Airlines", nonEuCarrier: true, featured: true },
  ),
  article(
    "pegasus-airlines-zakasnenie-eo261",
    "Pegasus Airlines закъснение — ЕО 261 при нискотарифен Turkish carrier",
    "airline",
    "Авиокомпании",
    "кога Pegasus като турски non-EU превозвач попада в EU261 при излитане от България",
    { airlineName: "Pegasus Airlines", nonEuCarrier: true },
  ),
  article(
    "sunexpress-zakasnenie-eu-kompaniya-li-e",
    "SunExpress закъснение — EU компания ли е?",
    "airline",
    "Авиокомпании",
    "защо SunExpress трябва да се проверява според конкретния оператор и маршрута до Турция",
    { airlineName: "SunExpress" },
  ),
  article(
    "qatar-airways-zakasnenie-sofiya-doha-eo261",
    "Qatar Airways закъснение от Sofia — ЕО 261 за полети до Доха",
    "airline",
    "Авиокомпании",
    "Qatar Airways като non-EU превозвач и правилото за полети от София към Доха",
    { airlineName: "Qatar Airways", routeName: "София-Доха", nonEuCarrier: true },
  ),
  article(
    "lufthansa-zakasnenie-balgariya-eo261",
    "Lufthansa закъснение от България — ЕО 261 ръководство",
    "airline",
    "Авиокомпании",
    "Lufthansa като EU превозвач и права при закъснение от България или към България",
    { airlineName: "Lufthansa" },
  ),
  article(
    "austrian-airlines-zakasnenie-sofiya-eo261",
    "Austrian Airlines закъснение от София — ЕО 261 пълно ръководство",
    "airline",
    "Авиокомпании",
    "маршрутът София-Виена, Austrian Airlines и защо Виена е ключов хъб за български пътници",
    { airlineName: "Austrian Airlines", routeName: "София-Виена" },
  ),
  article(
    "british-airways-zakasnenie-balgariya-eo261-uk261",
    "British Airways закъснение от България — ЕО 261 и UK261",
    "airline",
    "Авиокомпании",
    "разликата между полет от София към Лондон и полет от Лондон след Brexit",
    { airlineName: "British Airways", uk261: true },
  ),
  article(
    "lot-polish-airlines-zakasnenie-varshava-eo261",
    "LOT Polish Airlines закъснение — Варшава ЕО 261",
    "airline",
    "Авиокомпании",
    "права при LOT Polish Airlines между София и Варшава, включително връзки през WAW",
    { airlineName: "LOT Polish Airlines", routeName: "София-Варшава" },
  ),
  article(
    "swiss-zakasnenie-balgariya-eo261-shveytsarsko",
    "SWISS закъснение от Bulgaria — ЕО 261 или швейцарско право?",
    "airline",
    "Авиокомпании",
    "как се оценяват полети със SWISS между България, Цюрих и други европейски маршрути",
    { airlineName: "SWISS", routeName: "София-Цюрих" },
  ),
  article(
    "aegean-airlines-zakasnenie-gratska-eo261",
    "Aegean Airlines закъснение — гръцка авиокомпания ЕО 261",
    "airline",
    "Авиокомпании",
    "Aegean Airlines като EU превозвач и правата по маршрути между София, Атина и гръцки острови",
    { airlineName: "Aegean Airlines" },
  ),
  article(
    "air-serbia-zakasnenie-koga-vai-eo261",
    "Air Serbia закъснение — кога важи ЕО 261 за сръбска авиокомпания?",
    "airline",
    "Авиокомпании",
    "Air Serbia като non-EU превозвач и защо EU261 важи основно при излитане от европейско летище",
    { airlineName: "Air Serbia", nonEuCarrier: true },
  ),
  article(
    "norwegian-zakasnenie-balgariya-eo261",
    "Norwegian закъснение от България — ЕО 261 скандинавски carrier",
    "airline",
    "Авиокомпании",
    "правата при Norwegian, скандинавски маршрути и сезонни връзки към България",
    { airlineName: "Norwegian" },
  ),
  article(
    "flydubai-zakasnenie-sofiya-eo261",
    "flydubai закъснение от Sofia — кога важи ЕО 261?",
    "airline",
    "Авиокомпании",
    "flydubai като non-EU превозвач и разликата между София-Дубай и обратния полет от DXB",
    { airlineName: "flydubai", routeName: "София-Дубай", nonEuCarrier: true },
  ),
  article(
    "letishte-sofiya-sof-obeshtetenie-zakasnenie",
    "Летище София (SOF) — обезщетение при закъснение или отмяна",
    "airport",
    "Летища",
    "как EU261 защитава пътниците при излитане от най-важното летище в България",
    { airportCode: "SOF", airportName: "Летище София", featured: true },
  ),
  article(
    "letishte-burgas-boj-prava-zakasnenie",
    "Летище Бургас (BOJ) — права при закъснение на полет",
    "airport",
    "Летища",
    "сезонни и туристически полети от Бургас и защо EU261 важи в пълна сила",
    { airportCode: "BOJ", airportName: "Летище Бургас" },
  ),
  article(
    "letishte-varna-var-obeshtetenie-eo261",
    "Летище Варна (VAR) — обезщетение по ЕО 261",
    "airport",
    "Летища",
    "правата при закъснение, отмяна и сезонни маршрути от Варна",
    { airportCode: "VAR", airportName: "Летище Варна" },
  ),
  article(
    "propusnata-vrazka-letishte-sofiya-otgovoren",
    "Пропусната връзка на Летище София — кой е отговорен?",
    "airport",
    "Летища",
    "как се оценява изпусната връзка на една резервация и кога авиокомпанията носи отговорност",
    { airportCode: "SOF", airportName: "Летище София" },
  ),
  article(
    "dalgo-zakasnenie-letishte-hotel-hrana-transport",
    "Дълго закъснение на летището — хотел, храна и транспорт: кой плаща?",
    "airport",
    "Летища",
    "право на грижа при дълго чакане, нощно закъснение и разходи на летището",
  ),
  article(
    "stachka-letishte-sofiya-pravo-obeshtetenie",
    "Стачка на Летище София — кога имате право на обезщетение?",
    "airport",
    "Летища",
    "разликата между стачка на летището, стачка на авиокомпанията и извънредни обстоятелства",
    { airportCode: "SOF", airportName: "Летище София" },
  ),
  article("polet-sofiya-london-zakasnenie-bulgaria-air-ryanair", "Полет София–Лондон закъснение — Bulgaria Air и Ryanair ЕО 261", "route", "Маршрути", "диаспората във Великобритания, полети София-Лондон и разликата между EU261 и UK261", { routeName: "София-Лондон", uk261: true, featured: true }),
  article("polet-sofiya-viana-zakasnenie-austrian-ryanair", "Полет София–Виена закъснение — Austrian и Ryanair", "route", "Маршрути", "най-честият европейски маршрут от София и правата при Austrian или Ryanair", { routeName: "София-Виена", featured: true }),
  article("polet-sofiya-berlin-zakasnenie-ryanair-wizz", "Полет София–Берлин закъснение — Ryanair и Wizz Air", "route", "Маршрути", "маршрут София-Берлин, нискотарифни превозвачи и EU261", { routeName: "София-Берлин", airlineName: "Ryanair / Wizz Air" }),
  article("polet-sofiya-frankfurt-zakasnenie-lufthansa-ryanair", "Полет София–Франкфурт закъснение — Lufthansa и Ryanair", "route", "Маршрути", "Франкфурт като голям хъб и разликата между директен и свързващ полет", { routeName: "София-Франкфурт", airlineName: "Lufthansa / Ryanair" }),
  article("polet-sofiya-rim-zakasnenie-ryanair-ita", "Полет София–Рим закъснение — Ryanair и ITA Airways", "route", "Маршрути", "полети от София до Рим, италиански връзки и EU261", { routeName: "София-Рим", airlineName: "Ryanair / ITA Airways" }),
  article("polet-sofiya-milano-zakasnenie-ryanair-easyjet", "Полет София–Милано закъснение — Ryanair и easyJet", "route", "Маршрути", "маршрут София-Милано за работа, туризъм и връзки в Италия", { routeName: "София-Милано", airlineName: "Ryanair / easyJet" }),
  article("polet-sofiya-barselona-zakasnenie-ryanair", "Полет София–Барселона закъснение — Ryanair и Vueling", "route", "Маршрути", "Испания като важен пазар за българска диаспора и права при закъснение", { routeName: "София-Барселона", airlineName: "Ryanair / Vueling" }),
  article("polet-sofiya-madrid-zakasnenie-ryanair", "Полет София–Мадрид закъснение — Ryanair ЕО 261", "route", "Маршрути", "закъснение София-Мадрид, Ryanair и доказателства за пристигане", { routeName: "София-Мадрид", airlineName: "Ryanair" }),
  article("polet-sofiya-parij-zakasnenie-bulgaria-air", "Полет София–Париж закъснение — Bulgaria Air и Air France", "route", "Маршрути", "София-Париж, EU превозвачи и силни EU261 казуси", { routeName: "София-Париж", airlineName: "Bulgaria Air / Air France" }),
  article("polet-sofiya-amsterdam-zakasnenie-klm", "Полет София–Амстердам закъснение — KLM и Transavia", "route", "Маршрути", "Амстердам като хъб и как закъснение може да доведе до изпусната връзка", { routeName: "София-Амстердам", airlineName: "KLM / Transavia" }),
  article("polet-sofiya-varshava-zakasnenie-lot", "Полет София–Варшава закъснение — LOT Polish Airlines", "route", "Маршрути", "София-Варшава, LOT и връзки през WAW", { routeName: "София-Варшава", airlineName: "LOT Polish Airlines" }),
  article("polet-sofiya-bryuksel-zakasnenie", "Полет София–Брюксел закъснение — Brussels Airlines и Ryanair", "route", "Маршрути", "маршрут София-Брюксел, пътуване за работа и институции на ЕС", { routeName: "София-Брюксел", airlineName: "Brussels Airlines / Ryanair" }),
  article("polet-sofiya-atina-zakasnenie-aegean", "Полет София–Атина закъснение — Aegean и Bulgaria Air", "route", "Маршрути", "София-Атина, гръцки връзки и Aegean като EU превозвач", { routeName: "София-Атина", airlineName: "Aegean / Bulgaria Air" }),
  article("polet-sofiya-tsurich-zakasnenie-swiss", "Полет София–Цюрих закъснение — SWISS ЕО 261", "route", "Маршрути", "София-Цюрих, SWISS и швейцарска рамка, близка до EU261", { routeName: "София-Цюрих", airlineName: "SWISS" }),
  article("polet-sofiya-istanbul-turkish-koga-vai-eo261", "Полет София–Истанбул закъснение — Turkish Airlines кога важи ЕО 261?", "route", "Маршрути извън ЕС", "София-Истанбул, Turkish Airlines и защо посоката на полета е решаваща", { routeName: "София-Истанбул", airlineName: "Turkish Airlines", nonEuCarrier: true, featured: true }),
  article("polet-sofiya-antaliya-zakasnenie-pegasus-sunexpress", "Полет София–Анталия закъснение — Pegasus, SunExpress и ЕО 261", "route", "Маршрути извън ЕС", "туристически полети до Анталия, Pegasus като non-EU и SunExpress като сложен оператор", { routeName: "София-Анталия", airlineName: "Pegasus / SunExpress", nonEuCarrier: true, featured: true }),
  article("polet-sofiya-dubai-zakasnenie-flydubai-eo261", "Полет София–Дубай закъснение — flydubai и ЕО 261", "route", "Маршрути извън ЕС", "flydubai, София-Дубай и защо обратният полет от DXB често не е EU261", { routeName: "София-Дубай", airlineName: "flydubai", nonEuCarrier: true }),
  article("polet-sofiya-tel-aviv-zakasnenie-bulgaria-air-el-al", "Полет София–Тел Авив закъснение — Bulgaria Air vs El Al", "route", "Маршрути извън ЕС", "разликата между Bulgaria Air като EU превозвач и El Al като non-EU превозвач", { routeName: "София-Тел Авив", airlineName: "Bulgaria Air / El Al", nonEuCarrier: true }),
  article("polet-sofiya-doha-zakasnenie-qatar-eo261", "Полет София–Доха закъснение — Qatar Airways ЕО 261", "route", "Маршрути извън ЕС", "Qatar Airways от София към Доха и обхватът на EU261", { routeName: "София-Доха", airlineName: "Qatar Airways", nonEuCarrier: true }),
  article("polet-sofiya-marakesh-zakasnenie-wizz-ryanair", "Полет София–Маракеш закъснение — Wizz Air и Ryanair", "route", "Маршрути извън ЕС", "маршрути до Мароко с европейски нискотарифни превозвачи", { routeName: "София-Маракеш", airlineName: "Wizz Air / Ryanair" }),
  article("polet-sofiya-sharm-el-sheikh-wizz-eo261", "Полет София–Шарм ел-Шейх закъснение — Wizz Air ЕО 261", "route", "Маршрути извън ЕС", "сезонен маршрут до Египет и защо Wizz Air като EU превозвач е важен", { routeName: "София-Шарм ел-Шейх", airlineName: "Wizz Air" }),
  article("obraten-polet-turtsiya-dubai-vai-eo261", "Обратен полет от Турция/Дубай — важи ли ЕО 261 на връщане?", "route", "Маршрути извън ЕС", "най-важното правило за връщане от Истанбул, Анталия или Дубай с non-EU превозвач", { nonEuCarrier: true, featured: true }),
  article("overbooking-otkazan-dostap-borda-obeshtetenie", "Овърбукинг — отказан достъп до борда и обезщетение до €600", "special", "Специални ситуации", "права при отказан бординг, доброволци и принудителен overbooking", { featured: true }),
  article("downgrade-poniska-klasa-obratno-pari", "Даунгрейд — летяхте в по-ниска класа: как да получите обратно парите?", "special", "Специални ситуации", "връщане на част от цената при прехвърляне от бизнес към икономична класа"),
  article("charteren-polet-vai-eo261-pochivni", "Чартърен полет — важи ли ЕО 261 за почивни полети?", "special", "Специални ситуации", "туристически и чартърни полети от България, Бургас и Варна"),
  article("bilet-ota-booking-esky-pretentsiya", "Билет купен от OTA (Booking, eSky, Ryanair.com) — засяга ли претенцията?", "special", "Специални ситуации", "дали покупката през Booking.com, eSky или Kiwi променя правата по EU261"),
  article("grupovo-patuvane-kolektivna-pretentsiya", "Групово пътуване — как да подадете колективна претенция?", "special", "Специални ситуации", "семейни, ученически, служебни и туристически групи с един проблемен полет"),
  article("aviokompaniya-falira-pretentsiya", "Авиокомпания фалира — какво се случва с претенцията ви?", "special", "Специални ситуации", "как фалитът на авиокомпанията влияе върху иск, възстановяване и възможности за плащане"),
  article("noshno-zakasnenie-hotel-transport-koy-plashta", "Нощно закъснение — хотел и транспорт: кой плаща?", "special", "Специални ситуации", "право на хотел, храна и транспорт при нощно закъснение", { featured: true }),
  article("komandirovka-kompaniya-sluzhitel-obeshtetenie", "Командировка — компанията или служителят получава обезщетението?", "special", "Специални ситуации", "защо фиксираното обезщетение обикновено принадлежи на пътника, а не на работодателя"),
  article("polet-london-balgariya-zakasnenie-uk261-brexit", "Полет от Лондон до България закъснение — UK261 след Brexit", "diaspora", "Диаспора", "Българите в UK, полети Лондон-България и UK261 след Brexit", { uk261: true, featured: true }),
  article("polet-germaniya-balgariya-zakasnenie-eo261", "Полет от Германия до България закъснение — ЕО 261 права", "diaspora", "Диаспора", "българската диаспора в Германия и права при полети към София, Варна или Бургас"),
  article("polet-ispaniya-balgariya-zakasnenie-ryanair", "Полет от Испания до България закъснение — Ryanair и Vueling", "diaspora", "Диаспора", "Испания-България, Ryanair, Vueling и права при сезонни или редовни полети"),
  article("polet-birmingham-sofiya-zakasnenie-ryanair-uk261", "Полет Бирмингам–София закъснение — Ryanair UK261", "diaspora", "Диаспора", "Бирмингам-София като силен маршрут за българската диаспора във Великобритания", { uk261: true, routeName: "Бирмингам-София", airlineName: "Ryanair" }),
  article("polet-london-stansted-sofiya-ryanair-eu261-uk261", "Полет Лондон Стандстед–София закъснение — Ryanair EU261 или UK261?", "diaspora", "Диаспора", "защо полет от Stansted след Brexit е UK261, а не EU261", { uk261: true, routeName: "Лондон Станстед-София", airlineName: "Ryanair" }),
  article("polet-italiya-balgariya-zakasnenie-eo261", "Полет от Италия до България закъснение — ЕО 261 права", "diaspora", "Диаспора", "Италия-България, сезонни маршрути и права при закъснение"),
  article("sezonni-poleti-burgas-varna-prava-zakasnenie", "Сезонни полети Бургас/Варна — права при закъснение", "diaspora", "Диаспора", "летни маршрути до Черноморието и защита на пътниците по EU261", { airportName: "Бургас / Варна" }),
  article("obraten-polet-uk-brexit-uk261-obeshtetenie", "Обратен полет от UK след Brexit — UK261 и как да поискате обезщетение", "diaspora", "Диаспора", "връщане от Великобритания към България и правилата на UK261", { uk261: true, featured: true }),
  article("reglament-eo-261-2004-prava-patnitsi", "Регламент ЕО 261/2004 — пълно ръководство за права на пътниците", "foundation", "Закон и права", "основният регламент за обезщетение, грижа и възстановяване при проблемни полети", { localAuthority: true, featured: true, wordCount: 2300, readTime: "10 мин." }),
  article("eo-261-poleti-izvan-evropa-koga-vazhi", "Важи ли ЕО 261 за полети извън Европа? — кога да и кога не", "foundation", "Закон и права", "полетите до Турция, Дубай, Израел и други дестинации извън ЕС", { nonEuCarrier: true, featured: true }),
  article("izvanredni-obstoyatelstva-aviokompaniya-ne-plashta", "Извънредни обстоятелства при полети — кога авиокомпанията не трябва да плаща?", "foundation", "Закон и права", "реални извънредни обстоятелства, технически проблеми, стачки и тежко време"),
  article("kzp-gd-gva-zhalba-grazhdanska-aviaciya", "КЗП и ГД ГВА — как да подадете жалба до Bulgarian Civil Aviation Authority?", "foundation", "Закон и права", "как да ескалирате към ГД ГВА и КЗП, когато авиокомпанията отказва или не отговаря", { localAuthority: true, featured: true }),
  article("davnosten-srok-obeshtetenie-polet", "Давностен срок за обезщетение за полет — колко време имате?", "foundation", "Закон и права", "5-годишната давност в България и как тя влияе върху стари полети", { limitation: true, featured: true }),
  article("vaucher-vmesto-pari-tryabva-li-priemate", "Ваучер вместо пари — трябва ли да го приемете?", "foundation", "Закон и права", "разликата между доброволен ваучер, парично обезщетение и възстановяване в пари", { voucher: true }),
];

export const blogArticlesBgSorted = [...blogArticlesBg].sort((articleA, articleB) =>
  articleB.publishDate.localeCompare(articleA.publishDate) ||
  Number(articleB.featured) - Number(articleA.featured) ||
  articleA.title.localeCompare(articleB.title, "bg"),
);

export function getCategoryLabelBg(category: BlogArticleBgCategory | string) {
  const labels: Record<BlogArticleBgCategory, string> = {
    snippet: "Кратки отговори",
    foundation: "Закон и права",
    airline: "Авиокомпании",
    airport: "Летища",
    route: "Маршрути",
    special: "Специални ситуации",
    diaspora: "Диаспора",
  };

  return labels[category as BlogArticleBgCategory] || category;
}

export function getBgArticleBySlug(slug: string) {
  return blogArticlesBg.find((article) => article.slug === slug);
}
