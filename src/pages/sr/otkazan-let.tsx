import Head from "next/head";
import Link from "next/link";
import { ArrowRight, CalendarDays, CheckCircle2, Euro, Plane, RefreshCw, ShieldCheck, XCircle } from "lucide-react";

import { ClaimWingerSrSection } from "@/components/ClaimWingerSrSection";
import { LayoutSr } from "@/components/LayoutSr";
import { SEO } from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { buildClaimWingerSrLink, trackClaimWingerSrClick } from "@/lib/claimwingerLinksSr";
import {
  combineSchemas,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateWebPageSchema,
} from "@/lib/schemaGenerator";

const canonicalUrl = "https://problemlot.com/sr/otkazan-let";

const faqs = [
  {
    question: "Da li otkazan let uvek daje pravo na obeštećenje?",
    answer:
      "Ne. Važno je kada vas je avio-kompanija obavestila, kakav alternativni let je ponudila i da li je uzrok vanredna okolnost. Ako je obaveštenje stiglo manje od 14 dana pre polaska, šansa za obeštećenje je često jača.",
  },
  {
    question: "Mogu li istovremeno dobiti povraćaj novca za kartu i obeštećenje?",
    answer:
      "U nekim situacijama da. Povraćaj novca za kartu i fiksno obeštećenje po Uredbi EU 261 su različita prava, ali krajnji ishod zavisi od rute, alternativnog leta i razloga otkazivanja.",
  },
  {
    question: "Šta ako avio-kompanija nudi vaučer?",
    answer:
      "Niste dužni da automatski prihvatite vaučer umesto novčanog povraćaja. Sačuvajte ponudu, uslove i sve mejlove, kako bi slučaj mogao pravilno da se proceni.",
  },
  {
    question: "Važi li za letove iz Srbije?",
    answer:
      "Srbija nije članica EU, pa Uredba EU 261 pokriva let iz Srbije samo kada ga operiše avio-kompanija iz EU/EEA (npr. Wizz Air, Lufthansa, Austrian). Nasuprot tome, svaki let koji poleće sa aerodroma u EU/EEA — na primer Beč–Beograd ili Frankfurt–Beograd — pokriven je bez obzira na avio-kompaniju, uključujući Air Serbia. Srpska pravila o vazdušnom saobraćaju u velikoj meri prate EU261 za letove iz Srbije, a nadležan je Direktorat civilnog vazduhoplovstva Republike Srbije.",
  },
];

const timeline = [
  {
    title: "Manje od 7 dana pre leta",
    description:
      "Često najjači scenario za obeštećenje, naročito ako alternativni let stiže znatno kasnije.",
    value: "jak rizik za avio-kompaniju",
  },
  {
    title: "7-13 dana pre leta",
    description:
      "Obeštećenje je moguće ako ponuđeno preusmeravanje ne ulazi u zakonske vremenske okvire.",
    value: "potrebna je provera",
  },
  {
    title: "14+ dana pre leta",
    description:
      "Obično nema fiksnog obeštećenja, ali pravo na povraćaj novca ili alternativni prevoz ostaje važno.",
    value: "slabiji zahtev",
  },
];

const rights = [
  {
    title: "Povraćaj novca",
    description:
      "Ako ne prihvatite alternativni let, možete imati pravo na povraćaj novca za neiskorišćenu kartu.",
    icon: Euro,
  },
  {
    title: "Preusmeravanje",
    description:
      "Avio-kompanija mora da ponudi razumnu alternativu do krajnje destinacije pod uporedivim uslovima.",
    icon: RefreshCw,
  },
  {
    title: "Briga na aerodromu",
    description:
      "Tokom čekanja mogu vam pripadati hrana, piće, komunikacija, hotel i prevoz između hotela i aerodroma.",
    icon: ShieldCheck,
  },
];

export default function SerbianCancelledFlightPage() {
  const claimHref = buildClaimWingerSrLink("cancelled", {
    medium: "cancelled_page_cta",
    campaign: "sr_cancelled_flight",
    content: "hero_context",
  });
  const schemas = combineSchemas(
    generateWebPageSchema({
      title: "Otkazan let - obeštećenje, povraćaj novca i preusmeravanje",
      description:
        "Srpski vodič kroz prava kod otkazanog leta po Uredbi EU 261 i UK261.",
      url: canonicalUrl,
      inLanguage: "sr-RS",
    }),
    generateFAQSchema(faqs),
    generateBreadcrumbSchema([
      { name: "Početna", url: "https://problemlot.com/sr" },
      { name: "Otkazan let", url: canonicalUrl },
    ]),
  );

  return (
    <LayoutSr>
      <SEO
        title="Otkazan let? Obeštećenje do 600 € + povraćaj novca | EU261"
        description="Saznajte kada otkazan let daje pravo na obeštećenje, povraćaj novca za kartu, preusmeravanje i brigu na aerodromu po Uredbi EU 261 i UK261."
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

      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-sky-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-rose-100 px-4 py-2 text-sm font-semibold text-rose-800 dark:bg-rose-950/40 dark:text-rose-200">
              <XCircle className="h-4 w-4" />
              Otkazan let po EU261 / UK261
            </div>
            <h1 className="max-w-4xl text-4xl font-black tracking-tight text-slate-950 dark:text-white md:text-6xl">
              Otkazan let? Proverite obeštećenje, povraćaj novca i alternativnu rutu.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700 dark:text-slate-300">
              Kod otkazanog leta putnik može imati nekoliko odvojenih prava: fiksno obeštećenje do
              600 €, povraćaj novca za kartu, preusmeravanje i brigu tokom čekanja. Najvažnije je
              kada ste obavešteni i da li je ponuđena alternativa zaista odgovarajuća.
            </p>

            <ClaimWingerSrSection
              className="mt-10"
              badge="Provera otkazanog leta"
              title="Proverite otkazivanje u engleskom formularu"
              description="ClaimWinger može da proceni da li otkazivanje ulazi u obuhvat Uredbe EU 261 ili UK261. Formular je na engleskom, jer posebna srpska verzija još nije dostupna."
              ctaHref={claimHref}
              ctaLabel="Proverite otkazan let"
              placement="sr_cancelled_hero_embed"
            />
          </div>
        </section>

        <section className="border-y border-rose-100 bg-white/85 px-4 py-16 backdrop-blur dark:border-slate-800 dark:bg-gray-950/70 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 flex items-center gap-3">
              <CalendarDays className="h-8 w-8 text-rose-700 dark:text-rose-300" />
              <h2 className="text-3xl font-bold text-slate-950 dark:text-white">
                Kada je otkazivanje saopšteno?
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {timeline.map((item) => (
                <Card key={item.title} className="p-6">
                  <div className="rounded-full bg-rose-50 px-3 py-1 text-sm font-bold text-rose-800 dark:bg-rose-950/40 dark:text-rose-200">
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
              Koja prava možete imati kod otkazivanja?
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {rights.map((right) => {
                const Icon = right.icon;

                return (
                  <Card key={right.title} className="p-6">
                    <Icon className="mb-4 h-9 w-9 text-rose-700 dark:text-rose-300" />
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
                Jak scenario za obeštećenje
              </h2>
              <div className="space-y-3">
                {[
                  "Otkazivanje je saopšteno manje od 14 dana pre leta.",
                  "Let poleće sa aerodroma u EU, EEA, Velikoj Britaniji ili Švajcarskoj — ili iz Srbije, ali sa avio-kompanijom iz EU/EEA.",
                  "Alternativni let stiže znatno kasnije.",
                  "Uzrok je operativni problem, tehnički kvar ili nedostatak posade.",
                ].map((item) => (
                  <p key={item} className="flex gap-3 text-sm leading-7 text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-green-600" />
                    {item}
                  </p>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <Plane className="mb-4 h-9 w-9 text-sky-700 dark:text-sky-300" />
              <h2 className="mb-4 text-2xl font-bold text-slate-950 dark:text-white">
                Šta da tražite od avio-kompanije
              </h2>
              <div className="space-y-3">
                {[
                  "Pisanu potvrdu otkazivanja i razloga.",
                  "Alternativne rute i vreme dolaska.",
                  "Hranu, piće, hotel i prevoz, ako čekanje to zahteva.",
                  "Povraćaj novca, ako ne prihvatate ponuđenu alternativu.",
                ].map((item) => (
                  <p key={item} className="flex gap-3 text-sm leading-7 text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-sky-700 dark:text-sky-300" />
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
              Često postavljana pitanja
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <Card key={faq.question} className="p-6">
                  <h3 className="mb-3 text-lg font-bold text-slate-950 dark:text-white">{faq.question}</h3>
                  <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">{faq.answer}</p>
                </Card>
              ))}
            </div>

            <Card className="mt-8 border-rose-200 bg-rose-50 p-8 text-center dark:border-rose-900 dark:bg-rose-950/20">
              <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
                Otkazivanje je stiglo u poslednjem trenutku?
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
                Proverite da li pored povraćaja novca možete imati pravo i na fiksno obeštećenje.
              </p>
              <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                <Link href="/sr/kalkulator" className="inline-flex items-center justify-center rounded-2xl bg-rose-700 px-6 py-3 font-bold text-white hover:bg-rose-800">
                  Kalkulator
                </Link>
                <a
                  href={claimHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackClaimWingerSrClick("sr_cancelled_footer_cta", claimHref)}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3 font-bold text-rose-800 shadow-sm ring-1 ring-rose-200 hover:bg-rose-50"
                >
                  Proverite u ClaimWinger-u
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </Card>
          </div>
        </section>
      </div>
    </LayoutSr>
  );
}
