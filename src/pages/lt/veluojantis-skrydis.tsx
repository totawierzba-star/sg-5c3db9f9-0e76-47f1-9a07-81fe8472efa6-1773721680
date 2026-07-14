import Head from "next/head";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock3, Euro, FileText, ShieldCheck, XCircle } from "lucide-react";

import { ClaimWingerLtSection } from "@/components/ClaimWingerLtSection";
import { LayoutLt } from "@/components/LayoutLt";
import { SEO } from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { buildClaimWingerLtLink, trackClaimWingerLtClick } from "@/lib/claimwingerLinksLt";
import {
  combineSchemas,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateWebPageSchema,
} from "@/lib/schemaGenerator";

const canonicalUrl = "https://problemlot.com/lt/veluojantis-skrydis";

const faqs = [
  {
    question: "Kiek valandų turi vėluoti skrydis, kad būtų galima gauti kompensaciją?",
    answer:
      "Pagal EU261 ir UK261 dažniausiai vertinamas vėlavimas galutinėje paskirties vietoje. Jei atvykstate bent 3 valandomis vėliau ir priežastis priklauso nuo oro linijos atsakomybės, gali būti teisė į kompensaciją.",
  },
  {
    question: "Ar 2 valandų vėlavimas suteikia teisę į piniginę kompensaciją?",
    answer:
      "Paprastai ne, tačiau gali atsirasti teisė į pagalbą oro uoste: maistą, gėrimus, ryšio galimybę, o ilgesnio laukimo atveju - viešbutį ir transportą. Piniginės kompensacijos riba dažniausiai prasideda nuo 3 valandų atvykimo vėlavimo.",
  },
  {
    question: "Ar techninis gedimas yra ypatinga aplinkybė?",
    answer:
      "Ne visada. Įprasti techniniai gedimai dažnai nėra pakankama priežastis atmesti kompensaciją, bet reikia vertinti konkrečią priežastį, dokumentus ir oro linijos paaiškinimą.",
  },
  {
    question: "Ar taisyklės taikomos skrydžiams iš Vilniaus, Kauno ir Palangos?",
    answer:
      "Taip. Lietuvos oro uostai yra ES teritorijoje, todėl iš jų išvykstantiems skrydžiams EU261 paprastai taikomas nepriklausomai nuo to, ar oro linija yra europinė.",
  },
];

const amountRows = [
  { amount: "250 €", distance: "iki 1 500 km", example: "Vilnius - Varšuva, Kaunas - Kopenhaga" },
  { amount: "400 €", distance: "1 500-3 500 km", example: "Vilnius - Londonas, Vilnius - Madridas" },
  { amount: "600 €", distance: "daugiau nei 3 500 km", example: "Europa - JAV ar Azija per ES hubą" },
];

const canClaim = [
  "Atvykote į galutinę paskirties vietą bent 3 valandomis vėliau.",
  "Skrydis išvyko iš ES, JK, Šveicarijos ar EEE oro uosto arba atvyko į šią zoną su apimamu vežėju.",
  "Sutrikimo priežastis nėra ypatinga aplinkybė, visiškai nepriklausanti nuo oro linijos kontrolės.",
  "Turite rezervaciją, įlaipinimo kortelę, el. laišką arba kitą kelionės įrodymą.",
];

const cannotClaim = [
  "Atvykimo vėlavimas buvo trumpesnis nei 3 valandos.",
  "Sutrikimą sukėlė stipri audra, oro eismo valdymo apribojimai arba reali saugumo rizika.",
  "Skrydis yra už EU261/UK261 taikymo ribų ir jo nevykdė apimamas vežėjas.",
  "Vėlavimas ar praleidimas kilo dėl keleivio kaltės, pavyzdžiui, trūkstamų dokumentų.",
];

export default function LithuanianDelayedFlightPage() {
  const claimHref = buildClaimWingerLtLink("delayed", {
    medium: "delayed_page_cta",
    campaign: "lt_delayed_flight",
    content: "hero_context",
  });
  const schemas = combineSchemas(
    generateWebPageSchema({
      title: "Vėluojantis skrydis - kada priklauso kompensacija iki 600 eurų",
      description:
        "Lietuviškas gidas apie kompensaciją už vėluojantį skrydį pagal EU261 ir UK261.",
      url: canonicalUrl,
      inLanguage: "lt-LT",
    }),
    generateFAQSchema(faqs),
    generateBreadcrumbSchema([
      { name: "Pradžia", url: "https://problemlot.com/lt" },
      { name: "Vėluojantis skrydis", url: canonicalUrl },
    ]),
  );

  return (
    <LayoutLt>
      <SEO
        title="Vėluojantis skrydis virš 3 val.? Kompensacija iki 600 € | EU261"
        description="Sužinokite, kada vėluojantis skrydis iš Vilniaus, Kauno, Palangos ar kito Europos oro uosto suteikia teisę į 250, 400 arba 600 eurų kompensaciją."
        url={canonicalUrl}
        canonicalUrl={canonicalUrl}
        locale="lt_LT"
        language="Lithuanian"
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas).replace(/</g, "\\u003c") }}
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-slate-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-200">
              <Clock3 className="h-4 w-4" />
              Vėluojantis skrydis pagal EU261 / UK261
            </div>
            <h1 className="max-w-4xl text-4xl font-black tracking-tight text-slate-950 dark:text-white md:text-6xl">
              Vėluojantis skrydis? Patikrinkite teisę į iki 600 eurų.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700 dark:text-slate-300">
              Jei į galutinę paskirties vietą atvykote bent 3 valandomis vėliau, vėlavimas
              gali suteikti teisę į fiksuotą kompensaciją. Reikia įvertinti maršrutą,
              skrydį vykdžiusį vežėją, sutrikimo priežastį ir tai, ar problema priklausė
              nuo oro linijos atsakomybės.
            </p>

            <ClaimWingerLtSection
              className="mt-10"
              badge="Vėluojančio skrydžio patikra"
              title="Patikrinkite vėlavimą lietuviškoje formoje"
              description="Įveskite maršrutą ir skrydžio informaciją ClaimWinger formoje. Forma yra lietuvių kalba ir tinka Lietuvos keleiviams, kurių atvejai patenka į EU261 arba UK261 taikymo sritį."
              ctaHref={claimHref}
              ctaLabel="Patikrinti vėluojantį skrydį"
              placement="lt_delayed_hero_embed"
            />
          </div>
        </section>

        <section className="border-y border-emerald-100 bg-white/85 px-4 py-16 backdrop-blur dark:border-slate-800 dark:bg-gray-950/70 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 flex items-center gap-3">
              <Euro className="h-8 w-8 text-emerald-700 dark:text-emerald-300" />
              <h2 className="text-3xl font-bold text-slate-950 dark:text-white">
                Kokia kompensacija gali priklausyti?
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {amountRows.map((row) => (
                <Card key={row.amount} className="p-6">
                  <div className="text-5xl font-black text-emerald-700 dark:text-emerald-300">{row.amount}</div>
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
                Kada dažniausiai verta teikti reikalavimą
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
                Kada kompensacija dažnai nepriklauso
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
        </section>

        <section className="bg-slate-50 px-4 py-16 dark:bg-gray-900/70 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-8 flex items-center gap-3">
              <FileText className="h-8 w-8 text-emerald-700 dark:text-emerald-300" />
              <h2 className="text-3xl font-bold text-slate-950 dark:text-white">
                Kokius įrodymus verta išsaugoti?
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {["Įlaipinimo kortelė arba rezervacija", "Ekrano nuotrauka su vėlavimu", "Oro linijos el. laiškai, SMS ir paaiškinimai"].map((item) => (
                <Card key={item} className="p-5">
                  <h3 className="font-bold text-slate-950 dark:text-white">{item}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    Kuo tikslesni dokumentai, tuo lengviau patikrinti faktinį atvykimo laiką,
                    sutrikimo priežastį ir oro linijos atsakomybę.
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold text-slate-950 dark:text-white">
              Dažniausiai užduodami klausimai
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <Card key={faq.question} className="p-6">
                  <h3 className="mb-3 text-lg font-bold text-slate-950 dark:text-white">{faq.question}</h3>
                  <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">{faq.answer}</p>
                </Card>
              ))}
            </div>

            <Card className="mt-8 border-emerald-200 bg-emerald-50 p-8 text-center dark:border-emerald-900 dark:bg-emerald-950/20">
              <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
                Nesate tikri, ar vėlavimas pakankamas?
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
                Naudokite skaičiuoklę arba atidarykite ClaimWinger, kad patikrintumėte maršrutą ir situaciją.
              </p>
              <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                <Link href="/lt/kompensacijos-skaiciuokle" className="inline-flex items-center justify-center rounded-2xl bg-emerald-700 px-6 py-3 font-bold text-white hover:bg-emerald-800">
                  Skaičiuoklė
                </Link>
                <a
                  href={claimHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackClaimWingerLtClick("lt_delayed_footer_cta", claimHref)}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3 font-bold text-emerald-800 shadow-sm ring-1 ring-emerald-200 hover:bg-emerald-50"
                >
                  Patikrinti ClaimWinger
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </Card>
          </div>
        </section>
      </div>
    </LayoutLt>
  );
}
