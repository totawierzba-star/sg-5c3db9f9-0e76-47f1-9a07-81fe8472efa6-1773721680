import Head from "next/head";
import Link from "next/link";
import { CalendarDays, CheckCircle2, Euro, Plane, RefreshCw, ShieldCheck, XCircle } from "lucide-react";

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

const canonicalUrl = "https://problemlot.com/de/annullierter-flug";

const faqs = [
  {
    question: "Gibt jeder annullierte Flug Anspruch auf Entschädigung?",
    answer:
      "Nein. Entscheidend ist, wann die Airline über die Annullierung informiert hat, welche Ersatzbeförderung angeboten wurde und ob außergewöhnliche Umstände die Ursache waren.",
  },
  {
    question: "Kann ich sowohl die Erstattung als auch eine Entschädigung erhalten?",
    answer:
      "In manchen Fällen ja. Die Erstattung des Ticketpreises, die Ersatzbeförderung und die pauschale EU261-Entschädigung sind getrennte Ansprüche. Das Ergebnis hängt von der Strecke, der angebotenen Alternative und dem Grund der Annullierung ab.",
  },
  {
    question: "Was tun, wenn die Airline einen Gutschein anbietet?",
    answer:
      "Sie müssen einen Gutschein nicht automatisch anstelle der Geld-Erstattung annehmen. Bewahren Sie das Angebot, die Bedingungen und die E-Mails auf, damit Ihr Fall genau geprüft werden kann.",
  },
  {
    question: "Gilt EU261 für annullierte Flüge ab Deutschland?",
    answer:
      "Ja. Startet der Flug von einem deutschen Flughafen, fällt er in der Regel unter die EU-Verordnung 261/2004, denn Deutschland ist Mitglied der Europäischen Union – und zwar unabhängig davon, aus welchem Land die Airline stammt. Für Flüge von und nach London gilt die britische UK261.",
  },
  {
    question: "Was gilt bei einem annullierten LOT-Flug von Frankfurt nach Warschau?",
    answer:
      "Da der Flug von einem deutschen EU-Flughafen startet, gilt die EU-Verordnung 261/2004 unabhängig davon, dass LOT eine polnische Airline ist. Wurden Sie weniger als 14 Tage vor Abflug informiert und kommt der Ersatzflug deutlich später an, kann Ihnen bei dieser Strecke (~900 km, also bis 1.500 km) eine Entschädigung von 250 € zustehen – zusätzlich zur Wahl zwischen Erstattung und Ersatzbeförderung sowie zu Betreuungsleistungen.",
  },
];

const timeline = [
  {
    title: "Weniger als 7 Tage vor dem Abflug",
    description:
      "Häufig das stärkste Entschädigungsszenario, besonders wenn der Ersatzflug deutlich später ankommt.",
    value: "starker Fall",
  },
  {
    title: "7–13 Tage vor dem Abflug",
    description:
      "Eine Entschädigung kann geschuldet sein, wenn die angebotene Ersatzverbindung nicht in die gesetzlich vorgesehenen Zeitfenster passt.",
    value: "Prüfung nötig",
  },
  {
    title: "14+ Tage vor dem Abflug",
    description:
      "Die pauschale Entschädigung ist dann in der Regel weniger wahrscheinlich, aber das Recht auf Erstattung oder Ersatzbeförderung bleibt weiterhin wichtig.",
    value: "schwächerer Anspruch",
  },
];

const rights = [
  {
    title: "Erstattung des Ticketpreises",
    description:
      "Wenn Sie die Ersatzbeförderung nicht annehmen, kann Ihnen die Erstattung des nicht genutzten Ticketanteils zustehen.",
    icon: Euro,
  },
  {
    title: "Ersatzbeförderung",
    description:
      "Die Airline muss Ihnen eine zumutbare anderweitige Beförderung zum Zielort zu vergleichbaren Bedingungen anbieten.",
    icon: RefreshCw,
  },
  {
    title: "Betreuungsleistungen am Flughafen",
    description:
      "Während der Wartezeit können Ihnen Mahlzeiten, Getränke, Kommunikationsmittel, Hotel und Transfer zustehen.",
    icon: ShieldCheck,
  },
];

const checklist = [
  "Bewahren Sie die Annullierungsmitteilung und alle E-Mails der Airline auf.",
  "Notieren Sie die Abflug- und Ankunftszeiten des angebotenen Ersatzflugs.",
  "Heben Sie Belege für Verpflegung, Hotel und Transfer auf, falls die Airline keine Betreuungsleistungen angeboten hat.",
  "Prüfen Sie, ob die Mitteilung weniger als 14 Tage vor dem Abflug bei Ihnen einging.",
];

export default function GermanCancelledFlightPage() {
  const claimHref = buildClaimWingerDeLink("cancelled", {
    medium: "cancelled_page_cta",
    campaign: "de_cancelled_flight",
    content: "hero_context",
  });
  const schemas = combineSchemas(
    generateWebPageSchema({
      title: "Annullierter Flug – Entschädigung, Erstattung und Ersatzbeförderung",
      description:
        "Deutschsprachiger Ratgeber zu Ihren Fluggastrechten bei einem annullierten Flug nach der EU-Verordnung 261/2004 und UK261.",
      url: canonicalUrl,
      inLanguage: "de-DE",
    }),
    generateFAQSchema(faqs),
    generateBreadcrumbSchema([
      { name: "Startseite", url: "https://problemlot.com/de" },
      { name: "Annullierter Flug", url: canonicalUrl },
    ]),
  );

  return (
    <LayoutDe>
      <SEO
        title="Annullierter Flug? Entschädigung bis zu 600 € + Erstattung"
        description="Erfahren Sie, wann ein annullierter Flug Anspruch auf Entschädigung, Erstattung des Ticketpreises, Ersatzbeförderung und Betreuungsleistungen am Flughafen nach der EU-Verordnung 261/2004 und UK261 gibt – z. B. bei einem annullierten LOT-Flug ab Frankfurt."
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

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-red-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-800 dark:bg-red-950/40 dark:text-red-200">
              <XCircle className="h-4 w-4" />
              Annullierter Flug nach EU261 / UK261
            </div>
            <h1 className="max-w-4xl text-4xl font-black tracking-tight text-slate-950 dark:text-white md:text-6xl">
              Annullierter Flug? Prüfen Sie Entschädigung, Erstattung und Ersatzbeförderung.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700 dark:text-slate-300">
              Bei einem annullierten Flug können Ihnen mehrere getrennte
              Ansprüche zustehen: eine pauschale Entschädigung von bis zu 600 €,
              die Erstattung des Ticketpreises, eine Ersatzbeförderung und
              Betreuungsleistungen während der Wartezeit. Entscheidend sind die
              Frist der Mitteilung und die Qualität der angebotenen Alternative –
              etwa wenn LOT einen Flug von Frankfurt nach Warschau annulliert.
            </p>

            <ClaimWingerDeSection
              className="mt-10"
              badge="Prüfung bei annulliertem Flug"
              title="Prüfen Sie die Annullierung im deutschsprachigen Formular"
              description="ClaimWinger kann einschätzen, ob die Annullierung unter EU261 oder UK261 fällt. Das Formular ist auf Deutsch unter claimwinger.com/de verfügbar."
              ctaHref={claimHref}
              ctaLabel="Annullierten Flug prüfen"
              placement="de_cancelled_hero_embed"
            />
          </div>
        </section>

        <section className="border-y border-red-100 bg-white/85 px-4 py-16 backdrop-blur dark:border-slate-800 dark:bg-gray-950/70 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 flex items-center gap-3">
              <CalendarDays className="h-8 w-8 text-red-700 dark:text-red-300" />
              <h2 className="text-3xl font-bold text-slate-950 dark:text-white">
                Wann wurde die Annullierung mitgeteilt?
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {timeline.map((item) => (
                <Card key={item.title} className="p-6">
                  <div className="mb-4 inline-flex rounded-full bg-red-50 px-3 py-1 text-sm font-semibold text-red-700 dark:bg-red-950/40 dark:text-red-300">
                    {item.value}
                  </div>
                  <h3 className="text-xl font-bold text-slate-950 dark:text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <Card className="p-6">
              <Plane className="mb-4 h-9 w-9 text-red-700 dark:text-red-300" />
              <h2 className="mb-4 text-2xl font-bold text-slate-950 dark:text-white">
                Welche Rechte Ihnen zustehen können
              </h2>
              <div className="space-y-4">
                {rights.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.title} className="rounded-2xl bg-slate-50 p-4 dark:bg-gray-900">
                      <div className="flex items-center gap-3">
                        <Icon className="h-5 w-5 text-red-700 dark:text-red-300" />
                        <h3 className="font-bold text-slate-950 dark:text-white">{item.title}</h3>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.description}</p>
                    </div>
                  );
                })}
              </div>
            </Card>

            <Card className="p-6">
              <CheckCircle2 className="mb-4 h-9 w-9 text-green-600" />
              <h2 className="mb-4 text-2xl font-bold text-slate-950 dark:text-white">
                Was Sie vor der Forderung aufbewahren sollten
              </h2>
              <div className="space-y-3">
                {checklist.map((item) => (
                  <p key={item} className="flex gap-3 text-sm leading-7 text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-green-600" />
                    {item}
                  </p>
                ))}
              </div>
              <Link
                href="/de/rechner"
                className="mt-6 inline-flex rounded-2xl bg-red-700 px-5 py-3 font-semibold text-white transition hover:bg-red-800"
              >
                Mögliche Summe berechnen
              </Link>
            </Card>
          </div>
        </section>
      </div>
    </LayoutDe>
  );
}
