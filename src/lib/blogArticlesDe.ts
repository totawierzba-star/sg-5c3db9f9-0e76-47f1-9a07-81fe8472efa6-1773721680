export type BlogArticleDeCategory =
  | "answers"
  | "foundation"
  | "airlines"
  | "airports"
  | "routes"
  | "situations"
  | "diaspora";

export type BlogArticleDeCtaPath = "/delayed-flight" | "/cancelled-flight";

export interface BlogArticleDe {
  id: string;
  title: string;
  slug: string;
  category: BlogArticleDeCategory;
  cluster: string;
  focus: string;
  excerpt: string;
  publishDate: string;
  updatedDate: string;
  readTime: string;
  wordCount: number;
  featured: boolean;
  ctaPath: BlogArticleDeCtaPath;
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

const defaultPublishDate = "2026-05-04";

function article(
  slug: string,
  title: string,
  category: BlogArticleDeCategory,
  cluster: string,
  focus: string,
  options: Partial<BlogArticleDe> = {},
): BlogArticleDe {
  const publishDate = options.publishDate || defaultPublishDate;
  return {
    id: slug,
    slug,
    title,
    category,
    cluster,
    focus,
    excerpt:
      options.excerpt ||
      `${title}: praktischer Ratgeber für Reisende aus Deutschland — EU-Verordnung 261/2004, Nachweise, Fristen und Entschädigung bis 600 €.`,
    publishDate,
    updatedDate: publishDate,
    readTime: options.readTime || "8 min",
    wordCount: options.wordCount || 1800,
    featured: false,
    ctaPath: "/delayed-flight",
    ...options,
  };
}

export const blogArticlesDe: BlogArticleDe[] = [
  article(
    "lot-verspaetung-entschaedigung",
    "LOT Verspätung: Entschädigung bis 600 € — der komplette Ratgeber",
    "airlines",
    "LOT Polish Airlines",
    "LOT als EU-Fluggesellschaft, Entschädigung in beide Richtungen und das Warschauer Drehkreuz für Reisende ab Frankfurt, München, Berlin, Düsseldorf und Hamburg",
    {
      excerpt:
        "LOT Polish Airlines ist eine EU-Fluggesellschaft — die EU-Verordnung 261/2004 gilt daher in beide Richtungen: ab Frankfurt, München, Berlin, Düsseldorf oder Hamburg ebenso wie ab Warschau. Ab 3 Stunden Verspätung am Endziel stehen Ihnen 250 bis 600 € zu: Frankfurt–Warschau (ca. 900 km) bringt 250 €, die Langstrecke über das Warschauer Drehkreuz nach Seoul oder New York 600 €.",
      publishDate: "2026-05-04",
      featured: true,
      airlineName: "LOT Polish Airlines",
      wordCount: 2400,
      readTime: "10 min",
    },
  ),
  article(
    "lot-flug-annulliert-rechte",
    "LOT-Flug annulliert — Ihre Rechte: Erstattung, Ersatzflug und Entschädigung",
    "airlines",
    "LOT Polish Airlines",
    "die 14-Tage-Regel bei Annullierungen, die Wahl zwischen Erstattung und Ersatzbeförderung sowie zusätzliche Entschädigung von 250–600 €",
    {
      excerpt:
        "Wird Ihr LOT-Flug weniger als 14 Tage vor Abflug annulliert, haben Sie neben der Wahl zwischen Erstattung des Ticketpreises und Ersatzbeförderung in der Regel zusätzlich Anspruch auf 250 bis 600 € Entschädigung. Die 14-Tage-Regel ist entscheidend: Nur bei rechtzeitiger Information oder einem zumutbaren Alternativflug entfällt die Zahlung — Erstattung oder Ersatzflug schuldet LOT immer.",
      publishDate: "2026-05-10",
      featured: true,
      ctaPath: "/cancelled-flight",
      airlineName: "LOT Polish Airlines",
      wordCount: 2200,
      readTime: "9 min",
    },
  ),
  article(
    "lot-umsteigen-warschau-verspaetung",
    "LOT-Anschluss in Warschau verpasst — die Verspätung zählt am Endziel",
    "routes",
    "Warschau-Drehkreuz",
    "verpasste Anschlüsse am Warschauer Drehkreuz, eine einzige Buchung und die Messung der Verspätung erst am Endziel",
    {
      excerpt:
        "Bei Umsteigeverbindungen über Warschau zählt die Verspätung am Endziel — nicht am Drehkreuz. Verpassen Sie auf einer Buchung Frankfurt–Warschau–Seoul den Anschluss und kommen mindestens 3 Stunden später in Seoul an, stehen Ihnen 600 € zu, denn die Gesamtstrecke beträgt rund 8600 km.",
      publishDate: "2026-05-16",
      featured: true,
      routeName: "Warschau-Umstieg",
      airlineName: "LOT Polish Airlines",
      wordCount: 2100,
      readTime: "9 min",
    },
  ),
  article(
    "flug-frankfurt-warschau-verspaetung-lot",
    "Flug Frankfurt–Warschau verspätet (LOT, Lufthansa) — 250 € Entschädigung",
    "routes",
    "Strecken Deutschland–Polen",
    "Frankfurt–Warschau ca. 900 km, 250 € Entschädigung ab 3 Stunden Verspätung am Ziel bei LOT und Lufthansa",
    {
      excerpt:
        "Frankfurt–Warschau misst rund 900 km und liegt damit klar unter der 1500-km-Grenze: Bei mindestens 3 Stunden Verspätung am Ziel beträgt die Entschädigung 250 € pro Person. Das gilt für LOT ebenso wie für Lufthansa — der Ticketpreis spielt keine Rolle.",
      publishDate: "2026-05-22",
      routeName: "Frankfurt-Warschau",
    },
  ),
  article(
    "flug-muenchen-warschau-verspaetung-lot",
    "Flug München–Warschau verspätet — 250 € Entschädigung nach EU-Verordnung 261/2004",
    "routes",
    "Strecken Deutschland–Polen",
    "München–Warschau ca. 800 km, 250 € Entschädigung und Weiterflüge über das Warschauer Drehkreuz auf einer Buchung",
    {
      excerpt:
        "München–Warschau sind rund 800 km — bei mindestens 3 Stunden Verspätung an der Ankunft zahlt die Fluggesellschaft 250 € pro Fluggast nach EU-Verordnung 261/2004. Fliegen Sie auf einer Buchung über Warschau weiter nach Seoul, Tokio oder New York, können aus 250 € schnell 600 € werden, denn gezählt wird am Endziel.",
      publishDate: "2026-05-28",
      routeName: "München-Warschau",
    },
  ),
  article(
    "flug-berlin-warschau-verspaetung-lot",
    "Flug Berlin–Warschau verspätet — 250 € Entschädigung für Ihren LOT-Flug",
    "routes",
    "Strecken Deutschland–Polen",
    "Berlin–Warschau ca. 520 km, 250 € Entschädigung unabhängig vom Ticketpreis, in beide Flugrichtungen",
    {
      excerpt:
        "Berlin–Warschau ist mit rund 520 km eine der kürzesten LOT-Strecken ab Deutschland — bei mindestens 3 Stunden Verspätung am Ziel stehen Ihnen 250 € pro Person zu. Der Anspruch gilt in beide Richtungen und in voller Höhe, selbst wenn das Ticket nur 40 € gekostet hat.",
      publishDate: "2026-06-03",
      routeName: "Berlin-Warschau",
    },
  ),
  article(
    "lot-langstrecke-verspaetung-600-euro",
    "LOT-Langstrecke verspätet — 600 € für Seoul, Tokio, New York und Chicago",
    "routes",
    "Warschau-Drehkreuz",
    "LOT-Langstrecken ab dem Warschauer Drehkreuz nach Seoul, Tokio, New York und Chicago mit 600 € Entschädigung, auch mit Zubringer ab Deutschland",
    {
      excerpt:
        "Auf LOT-Langstrecken ab dem Warschauer Drehkreuz gilt die höchste Stufe: Warschau–Tokio (ca. 8600 km), Warschau–Seoul (ca. 7700 km), Warschau–New York (ca. 6850 km) und Warschau–Chicago (ca. 7500 km) liegen alle weit über 3500 km — die Entschädigung beträgt 600 € pro Person. Beginnt Ihre Reise mit einem LOT-Zubringer in Frankfurt, München oder Berlin, zählt die Verspätung erst am Endziel.",
      publishDate: "2026-06-09",
      featured: true,
      airlineName: "LOT Polish Airlines",
      wordCount: 2200,
      readTime: "9 min",
    },
  ),
  article(
    "lot-entschaedigung-beantragen-anleitung",
    "Entschädigung bei LOT beantragen — Schritt-für-Schritt-Anleitung",
    "foundation",
    "Recht und Ansprüche",
    "der Beschwerdeweg über LOT, das Luftfahrt-Bundesamt (LBA) und die Schlichtungsstelle söp sowie das deutsche Antragsformular von ClaimWinger",
    {
      excerpt:
        "Von der Beschwerde direkt bei LOT über das Luftfahrt-Bundesamt (LBA) und die Schlichtungsstelle söp bis zur gerichtlichen Durchsetzung: Diese Anleitung zeigt Schritt für Schritt, wie Sie Ihre 250 bis 600 € geltend machen. Mit dem deutschen Formular von ClaimWinger genügen Flugnummer, Datum und Bordkarte — die Prüfung dauert nur wenige Minuten.",
      publishDate: "2026-06-15",
      featured: true,
      airlineName: "LOT Polish Airlines",
      wordCount: 2300,
      readTime: "10 min",
    },
  ),
  article(
    "polnische-fluglinien-entschaedigung",
    "Entschädigung bei polnischen Fluglinien — LOT, Enter Air und Buzz im Überblick",
    "airlines",
    "Polnische Fluggesellschaften",
    "LOT, Enter Air und Buzz als EU-Fluggesellschaften und Ihre Ansprüche auf 250–600 € bei Verspätung und Annullierung",
    {
      excerpt:
        "LOT Polish Airlines, Enter Air und Buzz sind EU-Fluggesellschaften — die EU-Verordnung 261/2004 gilt für sie auf allen Flügen, ab Deutschland ebenso wie ab Polen. Ab 3 Stunden Verspätung am Endziel oder bei kurzfristiger Annullierung stehen Ihnen 250 bis 600 € zu, unabhängig davon, ob Sie einen Linienflug, einen Charterflug oder ein Billigticket gebucht haben.",
      publishDate: "2026-06-21",
      featured: true,
      wordCount: 2100,
      readTime: "9 min",
    },
  ),
  article(
    "lot-aussergewoehnliche-umstaende",
    "Außergewöhnliche Umstände bei LOT — wann die Ausrede nicht gilt",
    "answers",
    "Schnelle Antworten",
    "Unwetter und Flugsicherungsstreiks als außergewöhnliche Umstände — technische Defekte zählen nach der EuGH-Rechtsprechung in der Regel nicht",
    {
      excerpt:
        "Auf außergewöhnliche Umstände darf sich LOT nur bei Ereignissen wie Unwetter oder Flugsicherungsstreiks berufen — dann entfällt die Entschädigung. Technische Defekte gelten nach der Rechtsprechung des Europäischen Gerichtshofs in der Regel nicht als außergewöhnlich: Die 250 bis 600 € bleiben dann fällig.",
      publishDate: "2026-06-27",
    },
  ),
  article(
    "flug-verspaetet-entschaedigung-hoehe",
    "250, 400 oder 600 €? Die Höhe der Entschädigung an LOT-Streckenbeispielen",
    "answers",
    "Schnelle Antworten",
    "die Entschädigungsstufen 250, 400 und 600 € nach Flugdistanz mit Streckenbeispielen aus dem LOT-Netz ab Deutschland",
    {
      excerpt:
        "Die Höhe der Entschädigung richtet sich nach der Flugdistanz: bis 1500 km gibt es 250 € (z. B. Berlin–Warschau, ca. 520 km), von 1500 bis 3500 km 400 € (z. B. Frankfurt–Warschau–Tel Aviv, ca. 3000 km Gesamtstrecke) und über 3500 km 600 € (z. B. Frankfurt–Warschau–Seoul, ca. 8600 km). Voraussetzung ist eine Verspätung von mindestens 3 Stunden am Endziel.",
      publishDate: "2026-07-05",
      featured: true,
      wordCount: 2000,
      readTime: "9 min",
    },
  ),
  article(
    "verjaehrung-flugentschaedigung-lot",
    "Verjährung der Flugentschädigung — wie lange Sie Ansprüche gegen LOT haben",
    "foundation",
    "Recht und Ansprüche",
    "Verjährungsfristen je nach Land, in Deutschland in der Regel 3 Jahre zum Jahresende, Belege aufbewahren und Ansprüche früh einreichen",
    {
      excerpt:
        "Ansprüche gegen LOT verjähren nicht nach Wochen, sondern nach Jahren: Wird der Anspruch in Deutschland geltend gemacht, gilt in der Regel die dreijährige Verjährungsfrist zum Jahresende — ein verspäteter Flug aus dem Jahr 2026 lässt sich also meist noch bis Ende 2029 geltend machen. Die genaue Frist hängt jedoch vom Land ab, dessen Recht zur Anwendung kommt; reichen Sie Ihren Anspruch daher möglichst früh ein und bewahren Sie Bordkarte und Buchungsbestätigung auf.",
      publishDate: "2026-07-13",
      limitation: true,
    },
  ),
];

export const blogArticlesDeSorted = [...blogArticlesDe].sort((articleA, articleB) =>
  articleB.publishDate.localeCompare(articleA.publishDate) ||
  Number(articleB.featured) - Number(articleA.featured) ||
  articleA.title.localeCompare(articleB.title, "de"),
);

export function getCategoryLabelDe(category: BlogArticleDeCategory | string) {
  const labels: Record<BlogArticleDeCategory, string> = {
    answers: "Schnelle Antworten",
    foundation: "Recht und Ansprüche",
    airlines: "Fluggesellschaften",
    airports: "Flughäfen",
    routes: "Strecken",
    situations: "Sonderfälle",
    diaspora: "Für Reisende",
  };

  return labels[category as BlogArticleDeCategory] || category;
}

export function getDeArticleBySlug(slug: string) {
  return blogArticlesDe.find((article) => article.slug === slug);
}
