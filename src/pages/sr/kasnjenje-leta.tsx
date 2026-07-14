import Head from "next/head";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock3, Euro, FileText, ShieldCheck, XCircle } from "lucide-react";

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

const canonicalUrl = "https://problemlot.com/sr/kasnjenje-leta";

const faqs = [
  {
    question: "Koliko sati let mora da kasni da bi postojalo pravo na obeštećenje?",
    answer:
      "Po Uredbi EU 261 i UK261 najčešće se gleda kašnjenje na krajnjoj destinaciji. Ako stignete najmanje 3 sata kasnije, a uzrok je pod kontrolom avio-kompanije, može postojati pravo na obeštećenje.",
  },
  {
    question: "Mogu li da dobijem obeštećenje za kašnjenje od 2 sata?",
    answer:
      "Obično ne za novčano obeštećenje, ali možete imati pravo na zbrinjavanje na aerodromu: hranu, napitke i komunikaciju. Novčani prag za kašnjenje leta po pravilu počinje od 3 sata pri dolasku.",
  },
  {
    question: "Šta ako je kašnjenje nastalo zbog tehničkog problema?",
    answer:
      "Tehnički problemi često nisu dovoljni da oslobode avio-kompaniju odgovornosti. Svaki slučaj treba proveriti prema uzroku, dokumentaciji i konkretnoj ruti.",
  },
  {
    question: "Važi li Uredba EU 261 za letove iz Beograda ili Niša?",
    answer:
      "Srbija nije članica EU, pa let koji polazi iz Srbije potpada pod Uredbu EU 261 samo ako ga izvodi avio-kompanija iz EU/EEA, na primer Wizz Air, Lufthansa ili Austrian. Let sa Air Serbia iz Beograda po pravilu nije pokriven. Nasuprot tome, svaki let koji poleće sa aerodroma u EU, na primer Beč–Beograd ili Frankfurt–Beograd, pokriven je bez obzira na avio-kompaniju, uključujući i Air Serbia.",
  },
];

const amountRows = [
  { amount: "250 €", distance: "do 1.500 km", example: "Beč - Beograd (~490 km), Frankfurt - Beograd (~1.270 km)" },
  { amount: "400 €", distance: "1.500-3.500 km", example: "London - Beograd (~1.700 km), Madrid - Beograd (~2.050 km)" },
  { amount: "600 €", distance: "preko 3.500 km", example: "Beograd - Njujork preko EU čvorišta" },
];

const canClaim = [
  "Stigli ste na krajnju destinaciju sa najmanje 3 sata zakašnjenja.",
  "Let je poleteo sa aerodroma u EU, EEA ili Velikoj Britaniji, bez obzira na avio-kompaniju, ili je poleteo iz Srbije sa avio-kompanijom iz EU/EEA kao što su Wizz Air, Lufthansa ili Austrian.",
  "Uzrok nije vanredna okolnost van kontrole avio-kompanije.",
  "Imate rezervaciju, bording kartu, imejl ili drugi dokument o putovanju.",
];

const cannotClaim = [
  "Kašnjenje pri dolasku je kraće od 3 sata.",
  "Problem su izazvali teški vremenski uslovi, ograničenja vazdušnog saobraćaja ili stvaran bezbednosni rizik.",
  "Let polazi iz Srbije, a izvodi ga avio-kompanija van EU/EEA, na primer Air Serbia ili Turkish Airlines, pa je van obuhvata EU261/UK261.",
  "Odbijanje ili propust je posledica vaše krivice, na primer nedostajućih dokumenata.",
];

export default function SerbianDelayedFlightPage() {
  const claimHref = buildClaimWingerSrLink("delayed", {
    medium: "delayed_page_cta",
    campaign: "sr_delayed_flight",
    content: "hero_context",
  });
  const schemas = combineSchemas(
    generateWebPageSchema({
      title: "Kašnjenje leta - kada se duguje obeštećenje do 600 evra",
      description:
        "Srpski vodič za obeštećenje pri kašnjenju leta po Uredbi EU 261 i UK261.",
      url: canonicalUrl,
      inLanguage: "sr-RS",
    }),
    generateFAQSchema(faqs),
    generateBreadcrumbSchema([
      { name: "Početna", url: "https://problemlot.com/sr" },
      { name: "Kašnjenje leta", url: canonicalUrl },
    ]),
  );

  return (
    <LayoutSr>
      <SEO
        title="Kašnjenje leta duže od 3 sata? Obeštećenje do 600 € | EU261"
        description="Saznajte kada kašnjenje leta na rutama Beč–Beograd, Frankfurt–Beograd ili drugim evropskim linijama daje pravo na 250, 400 ili 600 evra obeštećenja."
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

      <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-slate-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-800 dark:bg-sky-950/40 dark:text-sky-200">
              <Clock3 className="h-4 w-4" />
              Kašnjenje leta po EU261 / UK261
            </div>
            <h1 className="max-w-4xl text-4xl font-black tracking-tight text-slate-950 dark:text-white md:text-6xl">
              Kašnjenje leta? Proverite da li imate pravo na do 600 evra.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700 dark:text-slate-300">
              Ako na krajnju destinaciju stignete najmanje 3 sata kasnije, kašnjenje može doneti
              fiksno obeštećenje. Najvažniji su ruta, stvarni operater leta, uzrok kašnjenja i to
              da li je problem pod kontrolom avio-kompanije.
            </p>

            <ClaimWingerSrSection
              className="mt-10"
              badge="Provera kašnjenja leta"
              title="Proverite kašnjenje u engleskom formularu"
              description="Unesite rutu i podatke o letu u ClaimWinger. Formular je na engleskom jeziku, ali je pogodan za putnike iz Srbije sa slučajevima po EU261 i UK261."
              ctaHref={claimHref}
              ctaLabel="Proverite zakasneli let"
              placement="sr_delayed_hero_embed"
            />
          </div>
        </section>

        <section className="border-y border-sky-100 bg-white/85 px-4 py-16 backdrop-blur dark:border-slate-800 dark:bg-gray-950/70 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 flex items-center gap-3">
              <Euro className="h-8 w-8 text-sky-700 dark:text-sky-300" />
              <h2 className="text-3xl font-bold text-slate-950 dark:text-white">
                Koliko obeštećenje možete da dobijete?
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {amountRows.map((row) => (
                <Card key={row.amount} className="p-6">
                  <div className="text-5xl font-black text-sky-700 dark:text-sky-300">{row.amount}</div>
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
                Kada obično možete da podnesete zahtev
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
                Kada se obeštećenje često ne duguje
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
              <FileText className="h-8 w-8 text-sky-700 dark:text-sky-300" />
              <h2 className="text-3xl font-bold text-slate-950 dark:text-white">
                Šta da sačuvate kao dokaz?
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {["Bording karta ili rezervacija", "Fotografija table sa kašnjenjem", "Imejlovi, SMS poruke i razlog od avio-kompanije"].map((item) => (
                <Card key={item} className="p-5">
                  <h3 className="font-bold text-slate-950 dark:text-white">{item}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    Što je dokumentacija preciznija, lakše se proveravaju stvarni uzrok i vreme dolaska.
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold text-slate-950 dark:text-white">
              Česta pitanja
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <Card key={faq.question} className="p-6">
                  <h3 className="mb-3 text-lg font-bold text-slate-950 dark:text-white">{faq.question}</h3>
                  <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">{faq.answer}</p>
                </Card>
              ))}
            </div>

            <Card className="mt-8 border-sky-200 bg-sky-50 p-8 text-center dark:border-sky-900 dark:bg-sky-950/20">
              <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
                Niste sigurni da li je kašnjenje dovoljno?
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
                Iskoristite kalkulator ili otvorite ClaimWinger da biste proverili rutu i situaciju.
              </p>
              <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                <Link href="/sr/kalkulator" className="inline-flex items-center justify-center rounded-2xl bg-sky-700 px-6 py-3 font-bold text-white hover:bg-sky-800">
                  Kalkulator
                </Link>
                <a
                  href={claimHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackClaimWingerSrClick("sr_delayed_footer_cta", claimHref)}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3 font-bold text-sky-800 shadow-sm ring-1 ring-sky-200 hover:bg-sky-50"
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
