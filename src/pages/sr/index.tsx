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

import { ClaimWingerSrSection } from "@/components/ClaimWingerSrSection";
import { LayoutSr } from "@/components/LayoutSr";
import { SEO } from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { buildClaimWingerSrLink, trackClaimWingerSrClick } from "@/lib/claimwingerLinksSr";
import {
  combineSchemas,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateOrganizationSchema,
  generateWebPageSchema,
} from "@/lib/schemaGenerator";

const canonicalUrl = "https://problemlot.com/sr";

const homeFaqs = [
  {
    question: "Kada putnik iz Srbije može da dobije obeštećenje po Uredbi EU 261?",
    answer:
      "Srbija nije članica EU, ali Uredba EU 261 svejedno pokriva mnoge letove ka Beogradu i iz njega. Pravilo je jednostavno: svaki let koji poleće sa aerodroma u EU ili EEA je pokriven bez obzira na avio-kompaniju (npr. Beč–Beograd ili Frankfurt–Beograd, čak i sa Air Serbia). Let iz Beograda ka EU je pokriven samo ako ga obavlja avio-kompanija iz EU/EEA, kao što su Wizz Air, Lufthansa ili Austrian.",
  },
  {
    question: "Koliko može da iznosi obeštećenje za let?",
    answer:
      "Fiksni iznosi su 250, 400 ili 600 € po putniku, u zavisnosti od dužine rute. Za Beč–Beograd ili Minhen–Beograd (do 1500 km) iznos je 250 €, za London–Beograd (1500–3500 km) 400 €, a 600 € važi samo za interkontinentalne letove duže od 3500 km. Cena karte po pravilu ne utiče na visinu obeštećenja.",
  },
  {
    question: "Važi li Uredba EU 261 za Air Serbia, Wizz Air, Lufthansu i Ryanair?",
    answer:
      "Zavisi od rute. Za letove koji poleću iz EU pravila mogu da važe za svaku avio-kompaniju, uključujući Air Serbia. Za letove iz Beograda ka EU važna je nacionalnost prevoznika: Wizz Air, Lufthansa ili Ryanair su pokriveni kao prevoznici iz EU, dok let iz Beograda sa Air Serbia ili drugim prevoznikom van EU nije obuhvaćen Uredbom EU 261.",
  },
  {
    question: "Zašto je ClaimWinger formular na engleskom?",
    answer:
      "ClaimWinger još uvek nema posebnu srpsku verziju, pa srpske stranice vode ka engleskom formularu. Usluga radi i za putnike iz Srbije: unesete podatke o letu na engleskom, a ClaimWinger dalje vodi ceo zahtev za obeštećenje umesto vas.",
  },
];

const highlights = [
  {
    title: "3 sata na krajnjoj destinaciji",
    description:
      "Kod kašnjenja leta ključni prag je po pravilu dolazak najmanje 3 sata kasnije od planiranog vremena.",
    icon: Clock3,
  },
  {
    title: "250 / 400 / 600 €",
    description:
      "Iznos zavisi od dužine rute, a ne od toga da li je karta bila jeftina ili skupa.",
    icon: Euro,
  },
  {
    title: "Beč, Cirih, Frankfurt, Pariz – Beograd",
    description:
      "Rute između Beograda i evropskih čvorišta često stvaraju stvarne EU261 slučajeve, jer je svaki let koji poleće iz EU pokriven bez obzira na avio-kompaniju (za Cirih važi švajcarski ekvivalent pravila EU261).",
    icon: Plane,
  },
];

const scenarios = [
  {
    title: "Let kasni",
    href: "/sr/kasnjenje-leta",
    description:
      "Za kašnjenje pri dolasku, propuštenu vezu i rute sa dolaskom najmanje 3 sata kasnije od planiranog.",
    icon: Clock3,
  },
  {
    title: "Let je otkazan",
    href: "/sr/otkazan-let",
    description:
      "Saznajte kada otkazan let vodi do obeštećenja, povraćaja novca za kartu, preusmeravanja i zbrinjavanja na aerodromu.",
    icon: Plane,
  },
  {
    title: "Kalkulator obeštećenja",
    href: "/sr/kalkulator",
    description:
      "Unesite aerodrome i situaciju da biste dobili prvu procenu za 250, 400 ili 600 €.",
    icon: Euro,
  },
  {
    title: "Blog na srpskom",
    href: "/sr/blog",
    description:
      "Pripremljena struktura za buduće vodiče po avio-kompanijama, aerodromima, rutama i proceduri.",
    icon: BookOpen,
  },
];

export default function SerbianHomePage() {
  const claimHref = buildClaimWingerSrLink("home", {
    medium: "homepage_context_link",
    campaign: "sr_home",
    content: "main_claim_check",
  });
  const schemas = combineSchemas(
    generateOrganizationSchema({ url: canonicalUrl }),
    generateWebPageSchema({
      title: "Obeštećenje za kašnjenje ili otkazivanje leta - EU261 na srpskom",
      description:
        "Srpski vodič za obeštećenje kod kašnjenja leta, otkazanog leta ili prebukiranja po Uredbi EU 261 i UK261.",
      url: canonicalUrl,
      inLanguage: "sr-RS",
    }),
    generateFAQSchema(homeFaqs),
    generateBreadcrumbSchema([{ name: "Početna", url: canonicalUrl }]),
  );

  return (
    <LayoutSr>
      <SEO
        title="Obeštećenje za kašnjenje ili otkazan let - do 600 € | ProblemLot.com"
        description="Prava putnika na srpskom: Uredba EU 261 i UK261 za kašnjenje leta, otkazan let, propuštenu vezu i obeštećenje do 600 evra."
        url={canonicalUrl}
        canonicalUrl={canonicalUrl}
        locale="sr_RS"
        language="Serbian"
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas).replace(/</g, "\\u003c") }}
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-amber-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
        <section className="px-4 pb-16 pt-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2 text-sm font-medium text-sky-800 dark:bg-sky-950/40 dark:text-sky-200">
              <Sparkles className="h-4 w-4" />
              EU261 i UK261 na srpskom za letove u Evropi
            </div>

            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
              <div>
                <h1 className="max-w-4xl text-4xl font-black tracking-tight text-slate-950 dark:text-white md:text-6xl">
                  Let kasni ili je otkazan?
                  <span className="mt-3 block text-sky-700 dark:text-sky-300">
                    Možda imate pravo na obeštećenje do 600 evra.
                  </span>
                </h1>

                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700 dark:text-slate-300">
                  Srpska verzija sajta ProblemLot.com objašnjava kada Uredba EU 261 i UK261 štite
                  putnike iz Srbije i dijaspore, kako se računaju iznosi od 250, 400 i 600 evra,
                  koje dokaze treba da sačuvate i kada se isplati podneti zahtev za obeštećenje
                  preko ClaimWinger-a.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={claimHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackClaimWingerSrClick("sr_home_hero_context", claimHref)}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-sky-700 px-6 py-4 text-base font-bold text-white transition hover:bg-sky-800"
                  >
                    Proverite svoj slučaj u ClaimWinger-u
                    <ArrowRight className="h-5 w-5" />
                  </a>
                  <Link
                    href="/sr/kalkulator"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 text-base font-bold text-slate-950 shadow-sm ring-1 ring-slate-200 transition hover:bg-slate-50 dark:bg-gray-900 dark:text-white dark:ring-slate-800 dark:hover:bg-gray-800"
                  >
                    Otvorite kalkulator
                  </Link>
                </div>
              </div>

              <ClaimWingerSrSection
                className="lg:mt-2"
                badge="Brza provera slučaja"
                title="Proverite svoj let odmah ovde"
                description="Iskoristite ClaimWinger formular (na engleskom jeziku) za prvu procenu. To je najkraći put ako već znate rutu, datum i šta se dogodilo sa letom — usluga radi i za putnike iz Srbije."
                ctaHref={claimHref}
                ctaLabel="Proverite u ClaimWinger-u"
                placement="sr_home_hero_embed"
              />
            </div>
          </div>
        </section>

        <section className="border-y border-sky-100 bg-white/80 px-4 py-16 backdrop-blur dark:border-slate-800 dark:bg-gray-950/70 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-3xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                <ShieldCheck className="h-4 w-4" />
                Najvažnija pravila ukratko
              </div>
              <h2 className="text-3xl font-bold text-slate-950 dark:text-white">
                Šta odlučuje da li imate pravo na obeštećenje?
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <Card key={item.title} className="p-6">
                    <Icon className="mb-4 h-9 w-9 text-sky-700 dark:text-sky-300" />
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
            <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <h2 className="text-3xl font-bold text-slate-950 dark:text-white">
                  Izaberite pravi sledeći korak
                </h2>
                <p className="mt-3 text-base leading-7 text-slate-700 dark:text-slate-300">
                  Svaka stranica je napravljena za konkretan scenario, da ne biste gubili vreme na opšta objašnjenja.
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {scenarios.map((scenario) => {
                const Icon = scenario.icon;

                return (
                  <Link
                    key={scenario.href}
                    href={scenario.href}
                    className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl hover:ring-sky-300 dark:bg-gray-900 dark:ring-slate-800 dark:hover:ring-sky-700"
                  >
                    <Icon className="mb-4 h-10 w-10 text-sky-700 dark:text-sky-300" />
                    <h3 className="mb-2 text-xl font-bold text-slate-950 dark:text-white">
                      {scenario.title}
                    </h3>
                    <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                      {scenario.description}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-4 pb-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold text-slate-950 dark:text-white">
              Česta pitanja
            </h2>
            <div className="space-y-4">
              {homeFaqs.map((faq) => (
                <Card key={faq.question} className="p-6">
                  <h3 className="mb-3 text-lg font-bold text-slate-950 dark:text-white">
                    {faq.question}
                  </h3>
                  <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {faq.answer}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </LayoutSr>
  );
}
