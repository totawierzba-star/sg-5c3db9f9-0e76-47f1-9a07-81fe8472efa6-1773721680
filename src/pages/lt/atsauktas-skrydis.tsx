import Head from "next/head";
import Link from "next/link";
import { ArrowRight, CalendarDays, CheckCircle2, Euro, Plane, RefreshCw, ShieldCheck, XCircle } from "lucide-react";

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

const canonicalUrl = "https://problemlot.com/lt/atsauktas-skrydis";

const faqs = [
  {
    question: "Ar kiekvienas atšauktas skrydis suteikia teisę į kompensaciją?",
    answer:
      "Ne. Svarbu, kada oro linija pranešė apie atšaukimą, koks alternatyvus skrydis buvo pasiūlytas ir ar priežastis buvo ypatinga aplinkybė. Kai pranešama likus mažiau nei 14 dienų, kompensacijos galimybė dažnai būna stipresnė.",
  },
  {
    question: "Ar galima gauti ir bilieto grąžinimą, ir kompensaciją?",
    answer:
      "Kai kuriais atvejais taip. Bilieto grąžinimas, alternatyvus maršrutas ir fiksuota EU261 kompensacija yra skirtingos teisės, tačiau galutinis rezultatas priklauso nuo maršruto, pasiūlyto pakeitimo ir atšaukimo priežasties.",
  },
  {
    question: "Ką daryti, jei oro linija siūlo vaučerį?",
    answer:
      "Nereikia automatiškai priimti vaučerio vietoje piniginio grąžinimo. Išsaugokite pasiūlymą, sąlygas ir visus el. laiškus, kad atvejį būtų galima įvertinti tiksliai.",
  },
  {
    question: "Ar EU261 taikomas atšauktiems skrydžiams iš Lietuvos?",
    answer:
      "Taip. Jei skrydis išvyksta iš Lietuvos oro uosto, jis paprastai patenka į EU261 taikymo sritį, nes Lietuva yra ES valstybė narė.",
  },
];

const timeline = [
  {
    title: "Mažiau nei 7 dienos iki skrydžio",
    description:
      "Dažnai stipriausias kompensacijos scenarijus, ypač jei alternatyvus skrydis atvyksta gerokai vėliau.",
    value: "stiprus atvejis",
  },
  {
    title: "7-13 dienų iki skrydžio",
    description:
      "Kompensacija gali priklausyti, jei pasiūlytas alternatyvus maršrutas netelpa į teisines laiko ribas.",
    value: "reikia patikros",
  },
  {
    title: "14+ dienų iki skrydžio",
    description:
      "Fiksuota kompensacija paprastai silpnesnė, tačiau teisė į bilieto grąžinimą arba alternatyvų transportą išlieka svarbi.",
    value: "silpnesnis reikalavimas",
  },
];

const rights = [
  {
    title: "Bilieto kainos grąžinimas",
    description:
      "Jei nepriimate alternatyvaus skrydžio, gali priklausyti nepanaudotos bilieto dalies grąžinimas.",
    icon: Euro,
  },
  {
    title: "Alternatyvus maršrutas",
    description:
      "Oro linija turi pasiūlyti pagrįstą kelionę į galutinę paskirties vietą panašiomis sąlygomis.",
    icon: RefreshCw,
  },
  {
    title: "Pagalba oro uoste",
    description:
      "Laukiant gali priklausyti maistas, gėrimai, ryšys, viešbutis ir transportas tarp viešbučio ir oro uosto.",
    icon: ShieldCheck,
  },
];

export default function LithuanianCancelledFlightPage() {
  const claimHref = buildClaimWingerLtLink("cancelled", {
    medium: "cancelled_page_cta",
    campaign: "lt_cancelled_flight",
    content: "hero_context",
  });
  const schemas = combineSchemas(
    generateWebPageSchema({
      title: "Atšauktas skrydis - kompensacija, grąžinimas ir alternatyvus maršrutas",
      description:
        "Lietuviškas gidas apie teises atšaukus skrydį pagal EU261 ir UK261.",
      url: canonicalUrl,
      inLanguage: "lt-LT",
    }),
    generateFAQSchema(faqs),
    generateBreadcrumbSchema([
      { name: "Pradžia", url: "https://problemlot.com/lt" },
      { name: "Atšauktas skrydis", url: canonicalUrl },
    ]),
  );

  return (
    <LayoutLt>
      <SEO
        title="Atšauktas skrydis? Kompensacija iki 600 € + bilieto grąžinimas"
        description="Sužinokite, kada atšauktas skrydis suteikia teisę į kompensaciją, bilieto grąžinimą, alternatyvų maršrutą ir pagalbą oro uoste pagal EU261 ir UK261."
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

      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-emerald-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-900 dark:bg-amber-950/40 dark:text-amber-200">
              <XCircle className="h-4 w-4" />
              Atšauktas skrydis pagal EU261 / UK261
            </div>
            <h1 className="max-w-4xl text-4xl font-black tracking-tight text-slate-950 dark:text-white md:text-6xl">
              Atšauktas skrydis? Patikrinkite kompensaciją, grąžinimą ir naują maršrutą.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700 dark:text-slate-300">
              Atšaukus skrydį keleivis gali turėti kelias atskiras teises: fiksuotą
              kompensaciją iki 600 eurų, bilieto grąžinimą, alternatyvų maršrutą ir
              pagalbą laukiant. Svarbiausia nustatyti, kada buvote informuoti ir ar
              pasiūlytas pakeitimas buvo realiai tinkamas.
            </p>

            <ClaimWingerLtSection
              className="mt-10"
              badge="Atšaukto skrydžio patikra"
              title="Patikrinkite atšaukimą angliškoje formoje"
              description="ClaimWinger gali įvertinti, ar atšaukimas patenka į EU261 arba UK261 taikymo sritį. Forma yra anglų kalba, nes atskiros lietuviškos ClaimWinger versijos kol kas nėra."
              ctaHref={claimHref}
              ctaLabel="Patikrinti atšauktą skrydį"
              placement="lt_cancelled_hero_embed"
            />
          </div>
        </section>

        <section className="border-y border-amber-100 bg-white/85 px-4 py-16 backdrop-blur dark:border-slate-800 dark:bg-gray-950/70 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 flex items-center gap-3">
              <CalendarDays className="h-8 w-8 text-amber-700 dark:text-amber-300" />
              <h2 className="text-3xl font-bold text-slate-950 dark:text-white">
                Kada buvo pranešta apie atšaukimą?
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {timeline.map((item) => (
                <Card key={item.title} className="p-6">
                  <div className="rounded-full bg-amber-50 px-3 py-1 text-sm font-bold text-amber-900 dark:bg-amber-950/40 dark:text-amber-200">
                    {item.value}
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-slate-950 dark:text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-8 text-3xl font-bold text-slate-950 dark:text-white">
              Kokios teisės gali priklausyti atšaukus skrydį?
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {rights.map((right) => {
                const Icon = right.icon;

                return (
                  <Card key={right.title} className="p-6">
                    <Icon className="mb-4 h-9 w-9 text-amber-700 dark:text-amber-300" />
                    <h3 className="mb-3 text-xl font-bold text-slate-950 dark:text-white">{right.title}</h3>
                    <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">{right.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 px-4 py-16 dark:bg-gray-900/70 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
            <Card className="p-6">
              <CheckCircle2 className="mb-4 h-9 w-9 text-green-600" />
              <h2 className="mb-4 text-2xl font-bold text-slate-950 dark:text-white">
                Stiprus kompensacijos scenarijus
              </h2>
              <div className="space-y-3">
                {[
                  "Apie atšaukimą pranešta likus mažiau nei 14 dienų iki skrydžio.",
                  "Skrydis išvyksta iš ES, JK, Šveicarijos arba EEE oro uosto.",
                  "Alternatyvus skrydis atvyksta gerokai vėliau.",
                  "Priežastis yra operacinė problema, techninis gedimas arba įgulos trūkumas.",
                ].map((item) => (
                  <p key={item} className="flex gap-3 text-sm leading-7 text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-green-600" />
                    {item}
                  </p>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <Plane className="mb-4 h-9 w-9 text-emerald-700 dark:text-emerald-300" />
              <h2 className="mb-4 text-2xl font-bold text-slate-950 dark:text-white">
                Ko paprašyti oro linijos
              </h2>
              <div className="space-y-3">
                {[
                  "Rašytinio atšaukimo patvirtinimo ir priežasties.",
                  "Alternatyvių maršrutų ir atvykimo laikų.",
                  "Maisto, gėrimų, viešbučio ir transporto, jei laukimas to reikalauja.",
                  "Pinigų grąžinimo, jei nepriimate pasiūlytos alternatyvos.",
                ].map((item) => (
                  <p key={item} className="flex gap-3 text-sm leading-7 text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-700 dark:text-emerald-300" />
                    {item}
                  </p>
                ))}
              </div>
            </Card>
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

            <Card className="mt-8 border-amber-200 bg-amber-50 p-8 text-center dark:border-amber-900 dark:bg-amber-950/20">
              <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
                Atšaukimas buvo paskutinę akimirką?
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
                Patikrinkite, ar be bilieto grąžinimo gali priklausyti ir fiksuota kompensacija.
              </p>
              <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                <Link href="/lt/kompensacijos-skaiciuokle" className="inline-flex items-center justify-center rounded-2xl bg-amber-700 px-6 py-3 font-bold text-white hover:bg-amber-800">
                  Skaičiuoklė
                </Link>
                <a
                  href={claimHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackClaimWingerLtClick("lt_cancelled_footer_cta", claimHref)}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3 font-bold text-amber-900 shadow-sm ring-1 ring-amber-200 hover:bg-amber-50"
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
