import Head from "next/head";
import Link from "next/link";
import { CalendarDays, CheckCircle2, Euro, Plane, RefreshCw, ShieldCheck, XCircle } from "lucide-react";

import { ClaimWingerLvSection } from "@/components/ClaimWingerLvSection";
import { LayoutLv } from "@/components/LayoutLv";
import { SEO } from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { buildClaimWingerLvLink } from "@/lib/claimwingerLinksLv";
import {
  combineSchemas,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateWebPageSchema,
} from "@/lib/schemaGenerator";

const canonicalUrl = "https://problemlot.com/lv/atcelts-lidojums";

const faqs = [
  {
    question: "Vai katrs atcelts lidojums dod tiesības uz kompensāciju?",
    answer:
      "Nē. Svarīgi, kad aviokompānija paziņoja par atcelšanu, kāds alternatīvs lidojums tika piedāvāts un vai iemesls bija ārkārtējs apstāklis.",
  },
  {
    question: "Vai var saņemt gan atmaksu, gan kompensāciju?",
    answer:
      "Dažos gadījumos jā. Biļetes atmaksa, pārrutēšana un fiksēta EU261 kompensācija ir atsevišķas tiesības, taču rezultāts ir atkarīgs no maršruta, piedāvātās alternatīvas un atcelšanas iemesla.",
  },
  {
    question: "Ko darīt, ja aviokompānija piedāvā vaučeru?",
    answer:
      "Vaučers nav automātiski jāpieņem naudas atmaksas vietā. Saglabājiet piedāvājumu, noteikumus un e-pastus, lai gadījumu varētu precīzi izvērtēt.",
  },
  {
    question: "Vai EU261 attiecas uz atceltiem lidojumiem no Latvijas?",
    answer:
      "Jā. Ja lidojums izlido no Latvijas lidostas, tas parasti ietilpst EU261 darbības jomā, jo Latvija ir ES dalībvalsts.",
  },
];

const timeline = [
  {
    title: "Mazāk nekā 7 dienas pirms lidojuma",
    description:
      "Bieži spēcīgākais kompensācijas scenārijs, īpaši ja alternatīvais lidojums ierodas ievērojami vēlāk.",
    value: "spēcīgs gadījums",
  },
  {
    title: "7-13 dienas pirms lidojuma",
    description:
      "Kompensācija var pienākties, ja piedāvātais alternatīvais maršruts neiekļaujas tiesiskajos laika logos.",
    value: "jāpārbauda",
  },
  {
    title: "14+ dienas pirms lidojuma",
    description:
      "Fiksēta kompensācija parasti ir mazāk ticama, bet tiesības uz atmaksu vai alternatīvu transportu joprojām ir svarīgas.",
    value: "vājāka prasība",
  },
];

const rights = [
  {
    title: "Biļetes cenas atmaksa",
    description:
      "Ja nepieņemat alternatīvo lidojumu, var pienākties neizmantotās biļetes daļas atmaksa.",
    icon: Euro,
  },
  {
    title: "Alternatīvs maršruts",
    description:
      "Aviokompānijai jāpiedāvā saprātīgs ceļš uz galamērķi līdzīgos apstākļos.",
    icon: RefreshCw,
  },
  {
    title: "Aprūpe lidostā",
    description:
      "Gaidīšanas laikā var pienākties ēdiens, dzērieni, saziņa, viesnīca un transports.",
    icon: ShieldCheck,
  },
];

const checklist = [
  "Saglabājiet atcelšanas paziņojumu un visus aviokompānijas e-pastus.",
  "Pierakstiet piedāvātā alternatīvā lidojuma izlidošanas un ierašanās laikus.",
  "Saglabājiet čekus par ēdienu, viesnīcu un transportu, ja aviokompānija nesniedza aprūpi.",
  "Pārbaudiet, vai paziņojums tika saņemts mazāk nekā 14 dienas pirms izlidošanas.",
];

export default function LatvianCancelledFlightPage() {
  const claimHref = buildClaimWingerLvLink("cancelled", {
    medium: "cancelled_page_cta",
    campaign: "lv_cancelled_flight",
    content: "hero_context",
  });
  const schemas = combineSchemas(
    generateWebPageSchema({
      title: "Atcelts lidojums - kompensācija, atmaksa un alternatīvs maršruts",
      description:
        "Latviešu ceļvedis par tiesībām atcelta lidojuma gadījumā saskaņā ar EU261 un UK261.",
      url: canonicalUrl,
      inLanguage: "lv-LV",
    }),
    generateFAQSchema(faqs),
    generateBreadcrumbSchema([
      { name: "Sākums", url: "https://problemlot.com/lv" },
      { name: "Atcelts lidojums", url: canonicalUrl },
    ]),
  );

  return (
    <LayoutLv>
      <SEO
        title="Atcelts lidojums? Kompensācija līdz 600 € + atmaksa"
        description="Uzziniet, kad atcelts lidojums dod tiesības uz kompensāciju, biļetes atmaksu, alternatīvu maršrutu un aprūpi lidostā saskaņā ar EU261 un UK261."
        url={canonicalUrl}
        canonicalUrl={canonicalUrl}
        locale="lv_LV"
        language="Latvian"
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
              Atcelts lidojums saskaņā ar EU261 / UK261
            </div>
            <h1 className="max-w-4xl text-4xl font-black tracking-tight text-slate-950 dark:text-white md:text-6xl">
              Atcelts lidojums? Pārbaudiet kompensāciju, atmaksu un jaunu maršrutu.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700 dark:text-slate-300">
              Atcelta lidojuma gadījumā pasažierim var būt vairākas atsevišķas tiesības:
              fiksēta kompensācija līdz 600 EUR, biļetes atmaksa, alternatīvs maršruts
              un aprūpe gaidīšanas laikā. Izšķiroši ir paziņojuma termiņš un piedāvātās
              alternatīvas kvalitāte.
            </p>

            <ClaimWingerLvSection
              className="mt-10"
              badge="Atcelta lidojuma pārbaude"
              title="Pārbaudiet atcelšanu angļu formā"
              description="ClaimWinger var izvērtēt, vai atcelšana ietilpst EU261 vai UK261. Forma ir angļu valodā, jo atsevišķas latviešu ClaimWinger versijas pagaidām nav."
              ctaHref={claimHref}
              ctaLabel="Pārbaudīt atcelto lidojumu"
              placement="lv_cancelled_hero_embed"
            />
          </div>
        </section>

        <section className="border-y border-red-100 bg-white/85 px-4 py-16 backdrop-blur dark:border-slate-800 dark:bg-gray-950/70 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 flex items-center gap-3">
              <CalendarDays className="h-8 w-8 text-red-700 dark:text-red-300" />
              <h2 className="text-3xl font-bold text-slate-950 dark:text-white">
                Kad tika paziņots par atcelšanu?
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
                Kādas tiesības var pastāvēt
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
                Ko saglabāt pirms prasības iesniegšanas
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
                href="/lv/kompensacijas-kalkulators"
                className="mt-6 inline-flex rounded-2xl bg-red-700 px-5 py-3 font-semibold text-white transition hover:bg-red-800"
              >
                Aprēķināt iespējamo summu
              </Link>
            </Card>
          </div>
        </section>
      </div>
    </LayoutLv>
  );
}
