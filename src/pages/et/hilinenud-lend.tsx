import Head from "next/head";
import Link from "next/link";
import { CheckCircle2, Clock3, Euro, ShieldCheck, XCircle } from "lucide-react";

import { ClaimWingerEtSection } from "@/components/ClaimWingerEtSection";
import { LayoutEt } from "@/components/LayoutEt";
import { SEO } from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { buildClaimWingerEtLink } from "@/lib/claimwingerLinksEt";
import {
  combineSchemas,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateWebPageSchema,
} from "@/lib/schemaGenerator";

const canonicalUrl = "https://problemlot.com/et/hilinenud-lend";

const faqs = [
  {
    question: "Mitu tundi peab lend hilinema, et saada hüvitist?",
    answer:
      "Määruse (EÜ) nr 261/2004 ja UK261 järgi hinnatakse tavaliselt hilinemist lõppsihtkohas. Kui jõuate kohale vähemalt 3 tundi hiljem ja põhjus on lennufirma vastutusalas, võib teil olla õigus hüvitisele.",
  },
  {
    question: "Kas 2-tunnine hilinemine annab õiguse rahalisele hüvitisele?",
    answer:
      "Üldjuhul mitte, kuid teil võib tekkida õigus hoolitsusele lennujaamas: toidule, jookidele, sidevahenditele ning pikema ootamise korral hotellile ja transpordile. Rahalise hüvitise künnis algab enamasti 3 tunnist lõppsihtkohas.",
  },
  {
    question: "Kas tehniline rike on erakorraline asjaolu?",
    answer:
      "Mitte alati. Tavapärased tehnilised probleemid ei ole sageli piisav alus hüvitisest keeldumiseks, kuid hinnata tuleb konkreetset põhjust ja lennufirma selgitust.",
  },
  {
    question: "Kas reeglid kehtivad Tallinnast väljuvatele lendudele?",
    answer:
      "Jah. Eesti on Euroopa Liidu liikmesriik, seega kehtib määrus (EÜ) nr 261/2004 Tallinnast ja teistest EL-i lennujaamadest väljuvatele lendudele üldjuhul olenemata lennufirma päritoluriigist.",
  },
];

const amountRows = [
  {
    amount: "250 €",
    distance: "kuni 1 500 km",
    example: "Tallinn - Stockholm (~390 km), Tallinn - Berliin (~1040 km)",
  },
  {
    amount: "400 €",
    distance: "1 500-3 500 km",
    example: "Tallinn - Frankfurt (~1540 km), Tallinn - London (~1830 km; Londoni lende kaitseb UK261)",
  },
  {
    amount: "600 €",
    distance: "üle 3 500 km",
    example: "Mandritevahelised lennud, näiteks Euroopa - USA või Aasia EL-i lennufirmaga",
  },
];

const canClaim = [
  "Jõudsite lõppsihtkohta vähemalt 3 tundi hiljem.",
  "Lend väljus EL-i, Ühendkuningriigi, Šveitsi või EMP lennujaamast või saabus sellesse piirkonda hõlmatud lennufirmaga.",
  "Häiret ei põhjustanud erakorralised asjaolud väljaspool lennufirma kontrolli.",
  "Teil on broneering, pardakaart, e-kiri või muu reisitõend.",
];

const cannotClaim = [
  "Hilinemine lõppsihtkohas oli lühem kui 3 tundi.",
  "Põhjuseks oli tugev torm, lennujuhtimise piirangud või julgeolekurisk.",
  "Lend jääb väljapoole EU261/UK261 kohaldamisala ja seda ei teostanud hõlmatud lennufirma.",
  "Hilinemine tekkis reisija enda süül, näiteks puuduvate dokumentide tõttu.",
];

export default function EstonianDelayedFlightPage() {
  const claimHref = buildClaimWingerEtLink("delayed", {
    medium: "delayed_page_cta",
    campaign: "et_delayed_flight",
    content: "hero_context",
  });
  const schemas = combineSchemas(
    generateWebPageSchema({
      title: "Hilinenud lend - millal on õigus hüvitisele kuni 600 €",
      description:
        "Eestikeelne teejuht hilinenud lennu hüvitise kohta määruse (EÜ) nr 261/2004 ja UK261 alusel.",
      url: canonicalUrl,
      inLanguage: "et-EE",
    }),
    generateFAQSchema(faqs),
    generateBreadcrumbSchema([
      { name: "Avaleht", url: "https://problemlot.com/et" },
      { name: "Hilinenud lend", url: canonicalUrl },
    ]),
  );

  return (
    <LayoutEt>
      <SEO
        title="Hilinenud lend üle 3 tunni? Hüvitis kuni 600 €"
        description="Saage teada, millal Tallinnast või mõnest muust Euroopa lennujaamast väljunud hilinenud lend annab õiguse 250, 400 või 600 € hüvitisele määruse (EÜ) nr 261/2004 ja UK261 alusel."
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
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-800 dark:bg-red-950/40 dark:text-red-200">
              <Clock3 className="h-4 w-4" />
              Hilinenud lend EU261 / UK261 järgi
            </div>
            <h1 className="max-w-4xl text-4xl font-black tracking-tight text-slate-950 dark:text-white md:text-6xl">
              Hilinenud lend? Kontrollige oma õigust kuni 600 € hüvitisele.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700 dark:text-slate-300">
              Kui jõudsite lõppsihtkohta vähemalt 3 tundi hiljem, võib hilinemine
              anda teile õiguse fikseeritud hüvitisele. Hinnata tuleb marsruuti,
              tegelikku lennufirmat, hilinemise põhjust ja lennufirma vastutust.
            </p>

            <ClaimWingerEtSection
              className="mt-10"
              badge="Hilinenud lennu kontroll"
              title="Kontrollige hilinemist eestikeelses vormis"
              description="Sisestage marsruut ja lennu andmed ClaimWingeri vormi. Vorm on eesti keeles ja sobib Eesti reisijatele, kelle juhtumid kuuluvad EU261 või UK261 alla."
              ctaHref={claimHref}
              ctaLabel="Kontrollige hilinenud lendu"
              placement="et_delayed_hero_embed"
            />
          </div>
        </section>

        <section className="border-y border-red-100 bg-white/85 px-4 py-16 backdrop-blur dark:border-slate-800 dark:bg-gray-950/70 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 flex items-center gap-3">
              <Euro className="h-8 w-8 text-red-700 dark:text-red-300" />
              <h2 className="text-3xl font-bold text-slate-950 dark:text-white">
                Milline hüvitis võib teile kuuluda?
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
                Millal tasub nõue üldjuhul esitada
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
                Millal hüvitist sageli ei maksta
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
            <h2 className="text-2xl font-bold">Soovite summat esialgselt hinnata?</h2>
            <p className="mt-3 max-w-3xl text-slate-300">
              Kalkulaator kasutab lennujaamade koordinaate, marsruudi pikkust ja EU261/UK261 loogikat,
              et anda kiire 250, 400 või 600 € hinnang.
            </p>
            <Link
              href="/et/kalkulaator"
              className="mt-6 inline-flex rounded-2xl bg-white px-5 py-3 font-semibold text-slate-950 transition hover:bg-red-50"
            >
              Avage kalkulaator
            </Link>
          </div>
        </section>
      </div>
    </LayoutEt>
  );
}
