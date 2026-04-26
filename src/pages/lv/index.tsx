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

import { ClaimWingerLvSection } from "@/components/ClaimWingerLvSection";
import { LayoutLv } from "@/components/LayoutLv";
import { SEO } from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { buildClaimWingerLvLink, trackClaimWingerLvClick } from "@/lib/claimwingerLinksLv";
import {
  combineSchemas,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateOrganizationSchema,
  generateWebPageSchema,
} from "@/lib/schemaGenerator";

const canonicalUrl = "https://problemlot.com/lv";

const homeFaqs = [
  {
    question: "Kad Latvijas pasažieris var saņemt kompensāciju saskaņā ar EU261?",
    answer:
      "Parasti tad, ja lidojums izlido no ES, Apvienotās Karalistes, Šveices vai EEZ lidostas, vai arī ielido šajā zonā ar aptvertu pārvadātāju. Jāvērtē faktiskais pārvadātājs, kavēšanās galamērķī un traucējuma iemesls.",
  },
  {
    question: "Cik liela var būt kompensācija?",
    answer:
      "Fiksētās summas ir 250, 400 vai 600 EUR par pasažieri. Summa ir atkarīga no maršruta attāluma un piemērojamā regulējuma, nevis no biļetes cenas.",
  },
  {
    question: "Vai EU261 attiecas uz airBaltic, Ryanair, Wizz Air, LOT un Lufthansa?",
    answer:
      "Jā, taču katrā gadījumā jāvērtē maršruts un faktiskais pārvadātājs. Izlidojot no Rīgas vai citas ES lidostas, noteikumi parasti attiecas arī uz ne Eiropas aviokompānijām.",
  },
  {
    question: "Kāpēc ClaimWinger forma ir angļu valodā?",
    answer:
      "ClaimWinger pagaidām nav atsevišķas latviešu versijas, tāpēc latviešu lapas izmanto angļu formu ar latviešu UTM parametriem analītikai.",
  },
];

const highlights = [
  {
    title: "3 stundas galamērķī",
    description:
      "Kavētam lidojumam galvenais slieksnis parasti ir vismaz 3 stundu kavēšanās, ierodoties galamērķī.",
    icon: Clock3,
  },
  {
    title: "250 / 400 / 600 EUR",
    description:
      "EU261 un UK261 izmanto fiksētas summas pēc attāluma. Lēta biļete nenozīmē mazāku kompensāciju.",
    icon: Euro,
  },
  {
    title: "Rīga, diaspora un Eiropas hubi",
    description:
      "Maršruti caur Rīgu, Londonu, Dublinu, Helsinkiem, Varšavu, Frankfurti vai Amsterdamu bieži rada reālus EU261 un UK261 gadījumus.",
    icon: Plane,
  },
];

const scenarios = [
  {
    title: "Lidojums kavējas",
    href: "/lv/kavejies-lidojums",
    description:
      "Piemērots kavēšanās, nokavētu savienojumu un gadījumu izvērtēšanai, kad galamērķī ieradāties vismaz 3 stundas vēlāk.",
    icon: Clock3,
  },
  {
    title: "Lidojums atcelts",
    href: "/lv/atcelts-lidojums",
    description:
      "Skaidrojam, kad atcelšana dod tiesības uz kompensāciju, biļetes atmaksu, pārrutēšanu un aprūpi lidostā.",
    icon: Plane,
  },
  {
    title: "Kompensācijas kalkulators",
    href: "/lv/kompensacijas-kalkulators",
    description:
      "Ievadiet lidostas un situāciju, lai iegūtu sākotnējo 250, 400 vai 600 EUR aprēķinu.",
    icon: Euro,
  },
  {
    title: "Blogs latviski",
    href: "/lv/blog",
    description:
      "Gatava struktūra gaidāmajiem ceļvežiem par aviokompānijām, lidostām, maršrutiem un pasažieru tiesībām.",
    icon: BookOpen,
  },
];

export default function LatvianHomePage() {
  const claimHref = buildClaimWingerLvLink("home", {
    medium: "homepage_context_link",
    campaign: "lv_home",
    content: "main_claim_check",
  });
  const schemas = combineSchemas(
    generateOrganizationSchema({ url: canonicalUrl }),
    generateWebPageSchema({
      title: "Kompensācija par kavētu vai atceltu lidojumu - EU261 latviski",
      description:
        "Latviešu ceļvedis par kompensāciju par kavētu, atceltu vai pārdotu lidojumu saskaņā ar EU261 un UK261.",
      url: canonicalUrl,
      inLanguage: "lv-LV",
    }),
    generateFAQSchema(homeFaqs),
    generateBreadcrumbSchema([{ name: "Sākums", url: canonicalUrl }]),
  );

  return (
    <LayoutLv>
      <SEO
        title="Kompensācija par kavētu vai atceltu lidojumu līdz 600 € | ProblemLot.com"
        description="Pasažieru tiesības latviski: EU261 un UK261 par kavētu lidojumu, atceltu lidojumu, nokavētu savienojumu un kompensāciju līdz 600 EUR."
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
        <section className="px-4 pb-16 pt-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-800 dark:bg-red-950/40 dark:text-red-200">
              <Sparkles className="h-4 w-4" />
              EU261 un UK261 latviski ceļojumiem caur Eiropu
            </div>

            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
              <div>
                <h1 className="max-w-4xl text-4xl font-black tracking-tight text-slate-950 dark:text-white md:text-6xl">
                  Kavēts vai atcelts lidojums?
                  <span className="mt-3 block text-red-700 dark:text-red-300">
                    Jums var pienākties līdz 600 EUR kompensācija.
                  </span>
                </h1>

                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700 dark:text-slate-300">
                  ProblemLot.com latviešu versija skaidri izskaidro, kad EU261 un UK261
                  aizsargā Latvijas pasažierus, kā tiek aprēķinātas 250, 400 un 600 EUR
                  summas, kādus pierādījumus saglabāt un kad lietu ir vērts nodot ClaimWinger.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={claimHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackClaimWingerLvClick("lv_home_hero_context", claimHref)}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-red-700 px-6 py-4 text-base font-bold text-white transition hover:bg-red-800"
                  >
                    Pārbaudīt gadījumu ClaimWinger
                    <ArrowRight className="h-5 w-5" />
                  </a>
                  <Link
                    href="/lv/kompensacijas-kalkulators"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 text-base font-bold text-slate-950 shadow-sm ring-1 ring-slate-200 transition hover:bg-slate-50 dark:bg-gray-900 dark:text-white dark:ring-slate-800 dark:hover:bg-gray-800"
                  >
                    Atvērt kalkulatoru
                  </Link>
                </div>
              </div>

              <ClaimWingerLvSection
                className="lg:mt-2"
                badge="Ātra lidojuma pārbaude"
                title="Pārbaudiet lidojumu tepat"
                description="Izmantojiet ClaimWinger angļu formu sākotnējam izvērtējumam. Tas ir ātrākais ceļš, ja jau zināt maršrutu, datumu un kas notika ar lidojumu."
                ctaHref={claimHref}
                ctaLabel="Pārbaudīt ClaimWinger"
                placement="lv_home_hero_embed"
              />
            </div>
          </div>
        </section>

        <section className="border-y border-red-100 bg-white/80 px-4 py-16 backdrop-blur dark:border-slate-800 dark:bg-gray-950/70 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-3xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                <ShieldCheck className="h-4 w-4" />
                Galvenie noteikumi īsumā
              </div>
              <h2 className="text-3xl font-bold text-slate-950 dark:text-white">
                Kas nosaka tiesības uz kompensāciju?
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
              Izvēlieties savu situāciju
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
    </LayoutLv>
  );
}
