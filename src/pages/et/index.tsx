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

import { ClaimWingerEtSection } from "@/components/ClaimWingerEtSection";
import { LayoutEt } from "@/components/LayoutEt";
import { SEO } from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { buildClaimWingerEtLink, trackClaimWingerEtClick } from "@/lib/claimwingerLinksEt";
import {
  combineSchemas,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateOrganizationSchema,
  generateWebPageSchema,
} from "@/lib/schemaGenerator";

const canonicalUrl = "https://problemlot.com/et";

const homeFaqs = [
  {
    question: "Millal on Eesti reisijal õigus hüvitisele määruse (EÜ) nr 261/2004 alusel?",
    answer:
      "Kuna Eesti kuulub Euroopa Liitu, on kaetud iga Tallinnast või muust EL-i lennujaamast väljuv lend mis tahes lennufirmaga. Väljastpoolt EL-i saabuvad lennud on kaetud siis, kui neid teostab EL-i lennufirma. Hinnata tuleb tegelikku vedajat, hilinemist lõppsihtkohas ja häire põhjust — erakorralised asjaolud võivad hüvitise välistada.",
  },
  {
    question: "Kui suur võib hüvitis olla?",
    answer:
      "Fikseeritud summad on 250, 400 või 600 € reisija kohta. Summa sõltub marsruudi kaugusest, mitte pileti hinnast. Näiteks Tallinn–Stockholm (~390 km) annab 250 €, Tallinn–Frankfurt (~1540 km) 400 € ja Tallinn–London (~1830 km) samuti 400 € — Londonist väljudes kehtib UK261.",
  },
  {
    question: "Kas EU261 kehtib airBalticu, Ryanairi, Wizz Airi, LOT-i ja Lufthansa kohta?",
    answer:
      "Jah, kuid igal juhul tuleb hinnata marsruuti ja tegelikku vedajat. Tallinnast või muust EL-i lennujaamast väljudes kehtivad reeglid üldjuhul ka Euroopa-välistele lennufirmadele.",
  },
  {
    question: "Kas ClaimWinger vorm on eesti keeles?",
    answer:
      "Jah. ClaimWingeril on eestikeelne versioon aadressil claimwinger.com/et, seetõttu viivad eestikeelsed lehed otse eestikeelsele vormile koos eestikeelsete UTM parameetritega analüütika jaoks.",
  },
];

const highlights = [
  {
    title: "3 tundi sihtkohas",
    description:
      "Hilinenud lennu puhul on peamine lävend üldjuhul vähemalt 3-tunnine hilinemine lõppsihtkohta jõudmisel.",
    icon: Clock3,
  },
  {
    title: "250 / 400 / 600 €",
    description:
      "EU261 ja UK261 kasutavad fikseeritud summasid lennukauguse järgi. Odav pilet ei tähenda väiksemat hüvitist.",
    icon: Euro,
  },
  {
    title: "Tallinn ja Euroopa sõlmjaamad",
    description:
      "Marsruudid läbi Tallinna, Helsingi, Riia, Stockholmi, Frankfurdi, Londoni või Amsterdami toovad sageli kaasa reaalseid EU261 ja UK261 juhtumeid.",
    icon: Plane,
  },
];

const scenarios = [
  {
    title: "Lend hilineb",
    href: "/et/hilinenud-lend",
    description:
      "Sobib hilinemiste, maha jäänud ümberistumiste ja olukordade hindamiseks, kui jõudsite sihtkohta vähemalt 3 tundi hiljem.",
    icon: Clock3,
  },
  {
    title: "Lend tühistati",
    href: "/et/tuhistatud-lend",
    description:
      "Selgitame, millal tühistatud lend annab õiguse hüvitisele, pileti tagasimaksele, asenduslennule ja hoolitsusele lennujaamas.",
    icon: Plane,
  },
  {
    title: "Hüvitise kalkulaator",
    href: "/et/kalkulaator",
    description:
      "Sisestage lennujaamad ja olukord, et saada esmane 250, 400 või 600 € hinnang.",
    icon: Euro,
  },
  {
    title: "Blogi eesti keeles",
    href: "/et/blog",
    description:
      "Juhendid lennufirmade, lennujaamade, marsruutide ja reisijate õiguste kohta Eesti reisijatele.",
    icon: BookOpen,
  },
];

export default function EstonianHomePage() {
  const claimHref = buildClaimWingerEtLink("home", {
    medium: "homepage_context_link",
    campaign: "et_home",
    content: "main_claim_check",
  });
  const schemas = combineSchemas(
    generateOrganizationSchema({ url: canonicalUrl }),
    generateWebPageSchema({
      title: "Hüvitis hilinenud või tühistatud lennu eest - EU261 eesti keeles",
      description:
        "Eestikeelne teejuht hüvitise kohta hilinenud, tühistatud või ülebroneeritud lennu eest määruse (EÜ) nr 261/2004 ja UK261 alusel.",
      url: canonicalUrl,
      inLanguage: "et-EE",
    }),
    generateFAQSchema(homeFaqs),
    generateBreadcrumbSchema([{ name: "Avaleht", url: canonicalUrl }]),
  );

  return (
    <LayoutEt>
      <SEO
        title="Hüvitis hilinenud või tühistatud lennu eest kuni 600 € | ProblemLot.com"
        description="Reisijate õigused eesti keeles: EU261 ja UK261 hüvitis hilinenud lennu, tühistatud lennu ja maha jäänud ümberistumise eest kuni 600 €."
        url={canonicalUrl}
        canonicalUrl={canonicalUrl}
        locale="et_EE"
        language="Estonian"
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
              EU261 ja UK261 eesti keeles reisidele üle Euroopa
            </div>

            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
              <div>
                <h1 className="max-w-4xl text-4xl font-black tracking-tight text-slate-950 dark:text-white md:text-6xl">
                  Hilinenud või tühistatud lend?
                  <span className="mt-3 block text-red-700 dark:text-red-300">
                    Teil võib olla õigus kuni 600 € hüvitisele.
                  </span>
                </h1>

                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700 dark:text-slate-300">
                  ProblemLot.com eestikeelne versioon selgitab arusaadavalt, millal EU261 ja
                  UK261 kaitsevad Eesti reisijaid, kuidas arvutatakse 250, 400 ja 600 €
                  summad, milliseid tõendeid tasub alles hoida ja millal on mõistlik anda
                  juhtum üle ClaimWingerile.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={claimHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackClaimWingerEtClick("et_home_hero_context", claimHref)}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-red-700 px-6 py-4 text-base font-bold text-white transition hover:bg-red-800"
                  >
                    Kontrollige juhtumit ClaimWingeris
                    <ArrowRight className="h-5 w-5" />
                  </a>
                  <Link
                    href="/et/kalkulaator"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 text-base font-bold text-slate-950 shadow-sm ring-1 ring-slate-200 transition hover:bg-slate-50 dark:bg-gray-900 dark:text-white dark:ring-slate-800 dark:hover:bg-gray-800"
                  >
                    Avage kalkulaator
                  </Link>
                </div>
              </div>

              <ClaimWingerEtSection
                className="lg:mt-2"
                badge="Kiire lennukontroll"
                title="Kontrollige lendu kohe siin"
                description="Kasutage esmaseks hindamiseks ClaimWingeri eestikeelset vormi. See on kiireim tee, kui teate juba marsruuti, kuupäeva ja seda, mis lennuga juhtus."
                ctaHref={claimHref}
                ctaLabel="Kontrollige ClaimWingeris"
                placement="et_home_hero_embed"
              />
            </div>
          </div>
        </section>

        <section className="border-y border-red-100 bg-white/80 px-4 py-16 backdrop-blur dark:border-slate-800 dark:bg-gray-950/70 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-3xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                <ShieldCheck className="h-4 w-4" />
                Peamised reeglid lühidalt
              </div>
              <h2 className="text-3xl font-bold text-slate-950 dark:text-white">
                Mis määrab õiguse hüvitisele?
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
              Valige oma olukord
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
    </LayoutEt>
  );
}
