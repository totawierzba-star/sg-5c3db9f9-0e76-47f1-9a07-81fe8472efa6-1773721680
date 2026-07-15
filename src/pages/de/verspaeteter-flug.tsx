import Head from "next/head";
import Link from "next/link";
import { CheckCircle2, Clock3, Euro, ShieldCheck, XCircle } from "lucide-react";

import { ClaimWingerDeSection } from "@/components/ClaimWingerDeSection";
import { LayoutDe } from "@/components/LayoutDe";
import { SEO } from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { buildClaimWingerDeLink } from "@/lib/claimwingerLinksDe";
import {
  combineSchemas,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateWebPageSchema,
} from "@/lib/schemaGenerator";

const canonicalUrl = "https://problemlot.com/de/verspaeteter-flug";

const faqs = [
  {
    question: "Wie viele Stunden muss ein Flug verspätet sein, um Entschädigung zu erhalten?",
    answer:
      "Nach der EU-Verordnung 261/2004 und UK261 zählt in der Regel die Verspätung am Endziel. Erreichen Sie Ihr Endziel mindestens 3 Stunden später und liegt die Ursache im Verantwortungsbereich der Airline, kann Ihnen eine Entschädigung zustehen.",
  },
  {
    question: "Habe ich bei 2 Stunden Verspätung Anspruch auf eine Geldentschädigung?",
    answer:
      "In der Regel nicht, aber Ihnen können Betreuungsleistungen am Flughafen zustehen: Mahlzeiten, Getränke, Kommunikationsmittel sowie bei längerer Wartezeit Hotel und Transfer. Die Schwelle für die pauschale Entschädigung liegt meist bei 3 Stunden am Endziel.",
  },
  {
    question: "Ist ein technischer Defekt ein außergewöhnlicher Umstand?",
    answer:
      "Nicht immer. Gewöhnliche technische Probleme sind oft kein ausreichender Grund, die Entschädigung zu verweigern. Entscheidend sind die konkrete Ursache und die Erklärung der Airline.",
  },
  {
    question: "Gelten die Regeln für Flüge ab deutschen Flughäfen?",
    answer:
      "Ja. Deutschland ist Mitglied der Europäischen Union, daher gilt die EU-Verordnung 261/2004 für jeden Abflug von einem deutschen oder anderen EU-Flughafen – unabhängig davon, mit welcher Airline Sie fliegen. Für Flüge von und nach London greift zusätzlich die britische UK261.",
  },
  {
    question: "Gilt die Entschädigung auch bei LOT-Umsteigeverbindungen über Warschau?",
    answer:
      "Ja. Bei LOT-Verbindungen über das Drehkreuz Warschau wird die Verspätung am Endziel gemessen, nicht beim Umstieg. Verpassen Sie durch einen verspäteten Zubringer den Anschluss und kommen Sie mindestens 3 Stunden später am Endziel an, kann die gesamte Buchungsstrecke für die Entschädigung zählen.",
  },
];

const amountRows = [
  {
    amount: "250 €",
    distance: "bis 1.500 km",
    example: "z. B. Berlin – Warschau (~520 km), Frankfurt – Warschau (~900 km)",
  },
  {
    amount: "400 €",
    distance: "1.500–3.500 km",
    example: "z. B. Berlin – Antalya (~2500 km)",
  },
  {
    amount: "600 €",
    distance: "über 3.500 km",
    example:
      "z. B. Frankfurt – New York (~6200 km) oder eine LOT-Langstrecke über Warschau nach Seoul",
  },
];

const canClaim = [
  "Sie haben Ihr Endziel mit mindestens 3 Stunden Verspätung erreicht.",
  "Der Flug startete von einem deutschen oder anderen EU-Flughafen (dann unabhängig von der Airline), aus dem Vereinigten Königreich, der Schweiz oder dem EWR – oder er kam mit einer erfassten Airline in dieser Region an.",
  "Die Störung wurde nicht durch außergewöhnliche Umstände außerhalb der Kontrolle der Airline verursacht.",
  "Sie haben eine Buchungsbestätigung, Bordkarte, E-Mail oder einen anderen Reisenachweis.",
];

const cannotClaim = [
  "Die Verspätung am Endziel betrug weniger als 3 Stunden.",
  "Ursache waren schwere Unwetter, Beschränkungen der Flugsicherung oder ein Sicherheitsrisiko.",
  "Der Flug fällt weder unter EU261 noch unter UK261 und wurde nicht von einer erfassten Airline durchgeführt.",
  "Die Verspätung entstand durch eigenes Verschulden, etwa fehlende Reisedokumente.",
];

export default function GermanDelayedFlightPage() {
  const claimHref = buildClaimWingerDeLink("delayed", {
    medium: "delayed_page_cta",
    campaign: "de_delayed_flight",
    content: "hero_context",
  });
  const schemas = combineSchemas(
    generateWebPageSchema({
      title: "Verspäteter Flug – wann besteht Anspruch auf bis zu 600 € Entschädigung",
      description:
        "Deutschsprachiger Ratgeber zur Entschädigung bei verspätetem Flug nach der EU-Verordnung 261/2004 und UK261.",
      url: canonicalUrl,
      inLanguage: "de-DE",
    }),
    generateFAQSchema(faqs),
    generateBreadcrumbSchema([
      { name: "Startseite", url: "https://problemlot.com/de" },
      { name: "Verspäteter Flug", url: canonicalUrl },
    ]),
  );

  return (
    <LayoutDe>
      <SEO
        title="Flug über 3 Stunden verspätet? Entschädigung bis zu 600 €"
        description="Erfahren Sie, wann ein verspäteter Flug ab einem deutschen oder anderen europäischen Flughafen Anspruch auf 250, 400 oder 600 € Entschädigung nach der EU-Verordnung 261/2004 und UK261 gibt – auch bei LOT-Verbindungen über Warschau."
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
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-800 dark:bg-red-950/40 dark:text-red-200">
              <Clock3 className="h-4 w-4" />
              Verspäteter Flug nach EU261 / UK261
            </div>
            <h1 className="max-w-4xl text-4xl font-black tracking-tight text-slate-950 dark:text-white md:text-6xl">
              Verspäteter Flug? Prüfen Sie Ihren Anspruch auf bis zu 600 € Entschädigung.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700 dark:text-slate-300">
              Wenn Sie Ihr Endziel mit mindestens 3 Stunden Verspätung erreicht
              haben, kann Ihnen eine pauschale Entschädigung zustehen. Geprüft
              werden die Strecke, die ausführende Airline, die Ursache der
              Verspätung und die Verantwortung der Airline. Bei
              LOT-Umsteigeverbindungen über das Drehkreuz Warschau zählt die
              Verspätung am Endziel – nicht am Umsteigeflughafen.
            </p>

            <ClaimWingerDeSection
              className="mt-10"
              badge="Prüfung bei verspätetem Flug"
              title="Prüfen Sie Ihre Verspätung im deutschsprachigen Formular"
              description="Geben Sie Strecke und Flugdaten in das ClaimWinger-Formular ein. Das Formular ist auf Deutsch verfügbar und für Reisende geeignet, deren Fälle unter EU261 oder UK261 fallen."
              ctaHref={claimHref}
              ctaLabel="Verspäteten Flug prüfen"
              placement="de_delayed_hero_embed"
            />
          </div>
        </section>

        <section className="border-y border-red-100 bg-white/85 px-4 py-16 backdrop-blur dark:border-slate-800 dark:bg-gray-950/70 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 flex items-center gap-3">
              <Euro className="h-8 w-8 text-red-700 dark:text-red-300" />
              <h2 className="text-3xl font-bold text-slate-950 dark:text-white">
                Welche Entschädigung kann Ihnen zustehen?
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {amountRows.map((row) => (
                <Card key={row.amount} className="p-6">
                  <div className="text-5xl font-black text-red-700 dark:text-red-300">{row.amount}</div>
                  <h3 className="mt-4 text-lg font-bold text-slate-950 dark:text-white">{row.distance}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{row.example}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
            <Card className="p-6">
              <ShieldCheck className="mb-4 h-9 w-9 text-green-600" />
              <h2 className="mb-4 text-2xl font-bold text-slate-950 dark:text-white">
                Wann sich eine Forderung in der Regel lohnt
              </h2>
              <div className="space-y-3">
                {canClaim.map((item) => (
                  <p key={item} className="flex gap-3 text-sm leading-7 text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-green-600" />
                    {item}
                  </p>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <XCircle className="mb-4 h-9 w-9 text-red-600" />
              <h2 className="mb-4 text-2xl font-bold text-slate-950 dark:text-white">
                Wann häufig keine Entschädigung gezahlt wird
              </h2>
              <div className="space-y-3">
                {cannotClaim.map((item) => (
                  <p key={item} className="flex gap-3 text-sm leading-7 text-slate-700 dark:text-slate-300">
                    <XCircle className="mt-1 h-5 w-5 shrink-0 text-red-600" />
                    {item}
                  </p>
                ))}
              </div>
            </Card>
          </div>

          <div className="mx-auto mt-10 max-w-6xl rounded-3xl bg-slate-950 p-8 text-white">
            <h2 className="text-2xl font-bold">Möchten Sie die Summe vorab einschätzen?</h2>
            <p className="mt-3 max-w-3xl text-slate-300">
              Der Rechner nutzt Flughafenkoordinaten, die Streckenlänge und die
              EU261/UK261-Logik, um eine schnelle Einschätzung von 250, 400 oder
              600 € zu geben.
            </p>
            <Link
              href="/de/rechner"
              className="mt-6 inline-flex rounded-2xl bg-white px-5 py-3 font-semibold text-slate-950 transition hover:bg-red-50"
            >
              Rechner öffnen
            </Link>
          </div>
        </section>
      </div>
    </LayoutDe>
  );
}
