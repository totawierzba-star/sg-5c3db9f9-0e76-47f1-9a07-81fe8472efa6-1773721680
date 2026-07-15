import Head from "next/head";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Clock3,
  Euro,
  Plane,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { ClaimWingerDeSection } from "@/components/ClaimWingerDeSection";
import { LayoutDe } from "@/components/LayoutDe";
import { SEO } from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { buildClaimWingerDeLink, trackClaimWingerDeClick } from "@/lib/claimwingerLinksDe";
import {
  combineSchemas,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateOrganizationSchema,
  generateWebPageSchema,
} from "@/lib/schemaGenerator";

const canonicalUrl = "https://problemlot.com/de";

const homeFaqs = [
  {
    question:
      "Wann haben Fluggäste in Deutschland Anspruch auf Entschädigung nach der EU-Verordnung 261/2004?",
    answer:
      "Da Deutschland zur Europäischen Union gehört, ist jeder Abflug von einem deutschen oder anderen EU-Flughafen abgedeckt – unabhängig davon, welche Airline den Flug durchführt. Ankünfte aus Ländern außerhalb der EU sind abgedeckt, wenn eine EU-Airline den Flug durchführt. Entscheidend sind das ausführende Luftfahrtunternehmen, die Verspätung am Endziel und die Ursache der Störung – außergewöhnliche Umstände können den Anspruch ausschließen.",
  },
  {
    question: "Wie hoch kann die Entschädigung ausfallen?",
    answer:
      "Die Fluggastrechteverordnung sieht feste Beträge von 250, 400 oder 600 € pro Fluggast vor. Die Höhe richtet sich nach der Flugstrecke, nicht nach dem Ticketpreis. Beispiele: Frankfurt–Warschau (~900 km) ergibt 250 €, Frankfurt–New York (~6200 km) ergibt 600 €.",
  },
  {
    question: "Gilt die EU-Verordnung 261/2004 auch für LOT Polish Airlines ab Deutschland?",
    answer:
      "Ja. LOT Polish Airlines fliegt von Frankfurt, München, Berlin und Düsseldorf zu ihrem Drehkreuz in Warschau. Wichtig bei verpassten Anschlussflügen: Die Verspätung wird am Endziel gemessen, nicht am Umsteigeflughafen. Wer zum Beispiel auf der Strecke Frankfurt–Warschau–Seoul den Anschluss verpasst und das Endziel mit mehr als 3 Stunden Verspätung erreicht, kann Anspruch auf 600 € haben.",
  },
  {
    question: "Ist das ClaimWinger-Formular auf Deutsch?",
    answer:
      "Ja. ClaimWinger hat eine deutsche Version unter claimwinger.com/de, daher führen die deutschsprachigen Seiten direkt zum deutschen Formular – mit deutschen UTM-Parametern für die Analyse.",
  },
];

const highlights = [
  {
    title: "3 Stunden am Endziel",
    description:
      "Bei einem verspäteten Flug ist die wichtigste Schwelle in der Regel eine Verspätung von mindestens 3 Stunden bei der Ankunft am Endziel.",
    icon: Clock3,
  },
  {
    title: "250 / 400 / 600 €",
    description:
      "EU261 und UK261 arbeiten mit festen Beträgen nach Flugstrecke. Ein günstiges Ticket bedeutet keine geringere Entschädigung.",
    icon: Euro,
  },
  {
    title: "Deutsche Flughäfen und europäische Drehkreuze",
    description:
      "Routen über Frankfurt, München, Berlin, Düsseldorf, Warschau, London oder Amsterdam führen häufig zu realen EU261- und UK261-Fällen.",
    icon: Plane,
  },
];

const scenarios = [
  {
    title: "Verspäteter Flug",
    href: "/de/verspaeteter-flug",
    description:
      "Für Verspätungen, verpasste Anschlussflüge und Situationen, in denen Sie Ihr Endziel mit mindestens 3 Stunden Verspätung erreicht haben.",
    icon: Clock3,
  },
  {
    title: "Annullierter Flug",
    href: "/de/annullierter-flug",
    description:
      "Wir erklären, wann ein annullierter Flug Anspruch auf Entschädigung, Ticketerstattung, Ersatzbeförderung und Betreuung am Flughafen gibt.",
    icon: Plane,
  },
  {
    title: "Entschädigungsrechner",
    href: "/de/rechner",
    description:
      "Geben Sie die Flughäfen und Ihre Situation ein, um eine erste Einschätzung über 250, 400 oder 600 € zu erhalten.",
    icon: Euro,
  },
  {
    title: "Blog auf Deutsch",
    href: "/de/blog",
    description:
      "Ratgeber zu Airlines, Flughäfen, Routen und Fluggastrechten für Reisende in Deutschland.",
    icon: BookOpen,
  },
];

export default function GermanHomePage() {
  const claimHref = buildClaimWingerDeLink("home", {
    medium: "homepage_context_link",
    campaign: "de_home",
    content: "main_claim_check",
  });
  const schemas = combineSchemas(
    generateOrganizationSchema({ url: canonicalUrl }),
    generateWebPageSchema({
      title: "Entschädigung für verspätete oder annullierte Flüge - EU261 auf Deutsch",
      description:
        "Deutschsprachiger Leitfaden zur Entschädigung für verspätete, annullierte oder überbuchte Flüge nach der EU-Verordnung 261/2004 (Fluggastrechteverordnung) und UK261.",
      url: canonicalUrl,
      inLanguage: "de-DE",
    }),
    generateFAQSchema(homeFaqs),
    generateBreadcrumbSchema([{ name: "Startseite", url: canonicalUrl }]),
  );

  return (
    <LayoutDe>
      <SEO
        title="Entschädigung für verspätete oder annullierte Flüge bis zu 600 € | ProblemLot.com"
        description="Fluggastrechte auf Deutsch: EU261- und UK261-Entschädigung für verspätete Flüge, annullierte Flüge und verpasste Anschlussflüge bis zu 600 €."
        url={canonicalUrl}
        canonicalUrl={canonicalUrl}
        locale="de_DE"
        language="German"
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas).replace(/</g, "\\u003c") }}
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-slate-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
        <section className="px-4 pb-16 pt-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-800 dark:bg-red-950/40 dark:text-red-200">
              <Sparkles className="h-4 w-4" />
              EU261 und UK261 auf Deutsch für Reisen in ganz Europa
            </div>

            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
              <div>
                <h1 className="max-w-4xl text-4xl font-black tracking-tight text-slate-950 dark:text-white md:text-6xl">
                  Verspäteter oder annullierter Flug?
                  <span className="mt-3 block text-red-700 dark:text-red-300">
                    Sie könnten Anspruch auf bis zu 600 € Entschädigung haben.
                  </span>
                </h1>

                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700 dark:text-slate-300">
                  Die deutschsprachige Version von ProblemLot.com erklärt verständlich, wann
                  die EU-Verordnung 261/2004 (Fluggastrechteverordnung) und UK261 Fluggäste
                  in Deutschland schützen, wie die Beträge von 250, 400 und 600 € berechnet
                  werden, welche Nachweise Sie aufbewahren sollten und wann es sinnvoll ist,
                  den Fall an ClaimWinger zu übergeben.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={claimHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackClaimWingerDeClick("de_home_hero_context", claimHref)}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-red-700 px-6 py-4 text-base font-bold text-white transition hover:bg-red-800"
                  >
                    Prüfen Sie Ihren Fall bei ClaimWinger
                    <ArrowRight className="h-5 w-5" />
                  </a>
                  <Link
                    href="/de/rechner"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 text-base font-bold text-slate-950 shadow-sm ring-1 ring-slate-200 transition hover:bg-slate-50 dark:bg-gray-900 dark:text-white dark:ring-slate-800 dark:hover:bg-gray-800"
                  >
                    Rechner öffnen
                  </Link>
                </div>
              </div>

              <ClaimWingerDeSection
                className="lg:mt-2"
                badge="Schneller Flug-Check"
                title="Prüfen Sie Ihren Flug direkt hier"
                description="Nutzen Sie für eine erste Einschätzung das deutschsprachige ClaimWinger-Formular. Das ist der schnellste Weg, wenn Sie Route, Datum und den Grund der Störung bereits kennen."
                ctaHref={claimHref}
                ctaLabel="Bei ClaimWinger prüfen"
                placement="de_home_hero_embed"
              />
            </div>
          </div>
        </section>

        <section className="border-y border-red-100 bg-white/80 px-4 py-16 backdrop-blur dark:border-slate-800 dark:bg-gray-950/70 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-3xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                <ShieldCheck className="h-4 w-4" />
                Die wichtigsten Regeln im Überblick
              </div>
              <h2 className="text-3xl font-bold text-slate-950 dark:text-white">
                Was entscheidet über den Anspruch auf Entschädigung?
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <Card key={item.title} className="p-6">
                    <Icon className="mb-4 h-9 w-9 text-red-700 dark:text-red-300" />
                    <h3 className="mb-3 text-xl font-bold text-slate-950 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                      {item.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-8 text-3xl font-bold text-slate-950 dark:text-white">
              Wählen Sie Ihre Situation
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {scenarios.map((item) => {
                const Icon = item.icon;

                return (
                  <Link key={item.href} href={item.href}>
                    <Card className="h-full p-6 transition hover:-translate-y-1 hover:shadow-lg">
                      <Icon className="mb-4 h-8 w-8 text-red-700 dark:text-red-300" />
                      <h3 className="mb-3 text-xl font-bold text-slate-950 dark:text-white">
                        {item.title}
                      </h3>
                      <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                        {item.description}
                      </p>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </LayoutDe>
  );
}
