import Head from "next/head";
import Link from "next/link";
import { CheckCircle2, Clock3, Euro, ShieldCheck, XCircle } from "lucide-react";

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

const canonicalUrl = "https://problemlot.com/lv/kavejies-lidojums";

const faqs = [
  {
    question: "Cik stundas lidojumam jāaizkavējas, lai varētu saņemt kompensāciju?",
    answer:
      "Saskaņā ar EU261 un UK261 parasti vērtē kavēšanos galamērķī. Ja ierodaties vismaz 3 stundas vēlāk un iemesls ir aviokompānijas atbildības zonā, var būt tiesības uz kompensāciju.",
  },
  {
    question: "Vai 2 stundu kavēšanās dod tiesības uz naudas kompensāciju?",
    answer:
      "Parasti nē, taču var rasties tiesības uz aprūpi lidostā: ēdienu, dzērieniem, saziņu un ilgākas gaidīšanas gadījumā viesnīcu un transportu. Naudas kompensācijas slieksnis visbiežāk sākas no 3 stundām galamērķī.",
  },
  {
    question: "Vai tehniska kļūme ir ārkārtējs apstāklis?",
    answer:
      "Ne vienmēr. Parastas tehniskas problēmas bieži nav pietiekams pamats atteikt kompensāciju, taču jāvērtē konkrētais iemesls un aviokompānijas skaidrojums.",
  },
  {
    question: "Vai noteikumi attiecas uz lidojumiem no Rīgas?",
    answer:
      "Jā. Rīgas lidosta atrodas ES teritorijā, tāpēc no tās izlidojošiem lidojumiem EU261 parasti attiecas neatkarīgi no aviokompānijas valsts.",
  },
];

const amountRows = [
  { amount: "250 €", distance: "līdz 1 500 km", example: "Rīga - Varšava, Rīga - Helsinki" },
  { amount: "400 €", distance: "1 500-3 500 km", example: "Rīga - Londona, Rīga - Madride" },
  { amount: "600 €", distance: "virs 3 500 km", example: "Eiropa - ASV vai Āzija ar ES pārvadātāju" },
];

const canClaim = [
  "Galamērķī ieradāties vismaz 3 stundas vēlāk.",
  "Lidojums izlidoja no ES, UK, Šveices vai EEZ lidostas, vai ielidoja šajā zonā ar aptvertu pārvadātāju.",
  "Traucējumu neizraisīja ārkārtējs apstāklis ārpus aviokompānijas kontroles.",
  "Jums ir rezervācija, iekāpšanas karte, e-pasts vai cits ceļojuma pierādījums.",
];

const cannotClaim = [
  "Kavēšanās galamērķī bija īsāka par 3 stundām.",
  "Iemesls bija stipra vētra, gaisa satiksmes kontroles ierobežojumi vai drošības risks.",
  "Lidojums ir ārpus EU261/UK261 darbības jomas un to neveica aptverts pārvadātājs.",
  "Kavēšanās radās pasažiera vainas dēļ, piemēram, trūkstošu dokumentu dēļ.",
];

export default function LatvianDelayedFlightPage() {
  const claimHref = buildClaimWingerLvLink("delayed", {
    medium: "delayed_page_cta",
    campaign: "lv_delayed_flight",
    content: "hero_context",
  });
  const schemas = combineSchemas(
    generateWebPageSchema({
      title: "Kavējies lidojums - kad pienākas kompensācija līdz 600 EUR",
      description:
        "Latviešu ceļvedis par kompensāciju par kavētu lidojumu saskaņā ar EU261 un UK261.",
      url: canonicalUrl,
      inLanguage: "lv-LV",
    }),
    generateFAQSchema(faqs),
    generateBreadcrumbSchema([
      { name: "Sākums", url: "https://problemlot.com/lv" },
      { name: "Kavējies lidojums", url: canonicalUrl },
    ]),
  );

  return (
    <LayoutLv>
      <SEO
        title="Kavējies lidojums virs 3 stundām? Kompensācija līdz 600 €"
        description="Uzziniet, kad kavēts lidojums no Rīgas vai citas Eiropas lidostas dod tiesības uz 250, 400 vai 600 EUR kompensāciju saskaņā ar EU261 un UK261."
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

      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-slate-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-800 dark:bg-red-950/40 dark:text-red-200">
              <Clock3 className="h-4 w-4" />
              Kavēts lidojums saskaņā ar EU261 / UK261
            </div>
            <h1 className="max-w-4xl text-4xl font-black tracking-tight text-slate-950 dark:text-white md:text-6xl">
              Kavējies lidojums? Pārbaudiet tiesības uz līdz 600 EUR.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700 dark:text-slate-300">
              Ja galamērķī ieradāties vismaz 3 stundas vēlāk, kavēšanās var dot
              tiesības uz fiksētu kompensāciju. Jāvērtē maršruts, faktiskais
              pārvadātājs, kavēšanās iemesls un aviokompānijas atbildība.
            </p>

            <ClaimWingerLvSection
              className="mt-10"
              badge="Kavēta lidojuma pārbaude"
              title="Pārbaudiet kavēšanos angļu formā"
              description="Ievadiet maršrutu un lidojuma informāciju ClaimWinger formā. Forma ir angļu valodā, bet tā der Latvijas pasažieriem, kuru gadījumi ietilpst EU261 vai UK261."
              ctaHref={claimHref}
              ctaLabel="Pārbaudīt kavēto lidojumu"
              placement="lv_delayed_hero_embed"
            />
          </div>
        </section>

        <section className="border-y border-red-100 bg-white/85 px-4 py-16 backdrop-blur dark:border-slate-800 dark:bg-gray-950/70 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 flex items-center gap-3">
              <Euro className="h-8 w-8 text-red-700 dark:text-red-300" />
              <h2 className="text-3xl font-bold text-slate-950 dark:text-white">
                Kāda kompensācija var pienākties?
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
                Kad parasti ir vērts iesniegt prasību
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
                Kad kompensācija bieži nepienākas
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
            <h2 className="text-2xl font-bold">Vēlaties sākotnēji aprēķināt summu?</h2>
            <p className="mt-3 max-w-3xl text-slate-300">
              Kalkulators izmanto lidostu koordinātas, maršruta attālumu un EU261/UK261 loģiku,
              lai sniegtu ātru 250, 400 vai 600 EUR novērtējumu.
            </p>
            <Link
              href="/lv/kompensacijas-kalkulators"
              className="mt-6 inline-flex rounded-2xl bg-white px-5 py-3 font-semibold text-slate-950 transition hover:bg-red-50"
            >
              Atvērt kalkulatoru
            </Link>
          </div>
        </section>
      </div>
    </LayoutLv>
  );
}
